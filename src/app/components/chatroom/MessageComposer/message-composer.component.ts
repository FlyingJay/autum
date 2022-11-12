import { Component, Input, ViewChild, ChangeDetectorRef } from "@angular/core";
import { Platform } from '@ionic/angular';
import { Validators, FormBuilder } from "@angular/forms";
import { FileType, FileRepository, MessageRepository, LoadingStatus } from "@amityco/js-sdk";
import { Media } from '@awesome-cordova-plugins/media/ngx';
import { File } from '@awesome-cordova-plugins/file/ngx';

const VOICE_FILENAME = 'record.m4a';

@Component({
  selector: "app-message-composer",
  templateUrl: "./message-composer.component.html",
  styleUrls: ["./message-composer.component.css"]
})
export class MessageComposer {
  @ViewChild("fileInput") fileInput;
  @ViewChild("imageInput") imageInput;
  @Input() channelId;
  chatForm;
  attachment;
  clip;
  isRecording = false;
  isAndroid = false;

  constructor(private formBuilder: FormBuilder, private changeDetectorRef: ChangeDetectorRef, private media: Media, private file: File, public platform: Platform) {
    this.chatForm = formBuilder.group({
      message: ["", [Validators.required]]
    });

    if (this.platform.is('android')) {
      this.isAndroid = true;
    }
  }

  async onSubmit() {
    if (this.chatForm.status === "VALID" || this.attachment) {
      let channelId = this.channelId;
      let text, caption, fileId, imageId;

      text = caption = this.chatForm.get("message").value?.length
        ? this.chatForm.get("message").value
        : undefined;

      if (!this.attachment) {
        MessageRepository.createTextMessage({ channelId, text });
      } else {
        imageId = fileId = this.attachment.model.fileId;

        if (this.attachment.model.type === FileType.Image) {
          MessageRepository.createImageMessage({ channelId, imageId, caption });
        } else if (this.attachment.model.type === FileType.File) {
          MessageRepository.createFileMessage({ channelId, fileId, caption });
        }
      }
      this.chatForm.reset();
      this.resetFiles();
    }
  }

  handleFileInput(files) {
    const file = files[0];
    this.attachment = undefined;
    setTimeout(() => {
      this.attachment = FileRepository.createFile({ file });
    });
  }

  resetFiles() {
    if (this.attachment) this.attachment.dispose();
    this.attachment = undefined;
    //this.fileInput.nativeElement.value = "";
    //this.imageInput.nativeElement.value = "";
  }

  startCapture() {
    let clip = null

    if (this.platform.is('ios')){
      this.file.createFile(this.file.tempDirectory, VOICE_FILENAME, true).then(() => {
        clip = this.media.create(this.file.tempDirectory.replace(/^file:\/\//, '') + VOICE_FILENAME);

        clip.startRecord();
        this.clip = clip
      })
    } else {
      clip = this.media.create(this.file.dataDirectory + VOICE_FILENAME);

      clip.startRecord();
      this.clip = clip
    }

    this.isRecording = true
  }

  stopCapture() {
    this.isRecording = false
    this.clip.stopRecord();

    this.file.readAsArrayBuffer(
      this.platform.is('ios') ? this.file.tempDirectory.replace('private/', '') : this.file.dataDirectory,
      VOICE_FILENAME
      ).then(data => {

        let blob: any;
        blob = new Blob([data], { type:'audio/mp4' });
        blob.name = VOICE_FILENAME

        const liveObject = FileRepository.createFile({
          file: blob
        });

        liveObject.on('loadingStatusChanged', ({ newValue }) => {
          if (newValue === LoadingStatus.Loaded) {
            this.attachment = liveObject
            this.changeDetectorRef.detectChanges();
          }
        });

        liveObject.on('dataError', (error) => {
          alert('There was an issue uploading your voice message.');
        });
    }).catch(err => {
      alert("Having trouble with audio messages? Restarting your app should fix it. If it doesn\'t just let us know!")
    })
  }
}
