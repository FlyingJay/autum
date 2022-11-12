import { Component, Input, NgZone, ChangeDetectorRef } from "@angular/core";

import { FileRepository } from "@amityco/js-sdk";

import * as prettyBytes from "pretty-bytes";

@Component({
  selector: "app-file-content",
  templateUrl: "./file-content.component.html"
})
export class FileContent {
  @Input() data;
  @Input() fileId;
  @Input() background;
  model;
  prettyBytes = prettyBytes;
  liveFile;
  audio = null;
  isPlaying = false;
  currentTime = 0
  duration = 0

  constructor(private ngZone: NgZone, private changeDetectorRef: ChangeDetectorRef) {}

  ngOnInit() {
    this.liveFile = FileRepository.getFile(this.fileId);

    if (this.liveFile.model) {
      this.model = this.liveFile.model;
      this.setAudio()
    } else {
      this.liveFile.once("dataUpdated", () => {
        this.ngZone.run(() => {
          this.model = this.liveFile.model;
          this.setAudio()
        });
      });
    }
  }

  setAudio() {
    this.audio = new Audio(this.model.fileUrl)

    this.audio.addEventListener("loadedmetadata", () => {
      console.log(this.audio.duration)
      this.duration = Math.round(this.audio.duration)
      this.changeDetectorRef.detectChanges()
    });
    this.audio.addEventListener("timeupdate", () => {
        this.currentTime = Math.round(this.audio.currentTime)

        if (this.currentTime == this.duration) {
          this.audio.pause()
          this.audio.currentTime = 0
          this.isPlaying = false
        }

        this.changeDetectorRef.detectChanges()
    });
  }

  ngOnDestroy() {
    this.liveFile?.dispose();

    this.audio.pause()
  }

  currentTimeStamp () {
    return new Date(this.currentTime * 1000).toISOString().substr(14, 5);
  }

  durationStamp() {
    return new Date(this.duration * 1000).toISOString().substr(14, 5);
  }

  togglePlay(event: any) {
    event.stopPropagation()

    if (!this.isPlaying) {
      this.audio.play()
      this.isPlaying = true
    } else {
      this.audio.pause()
      this.isPlaying = false
    }
  }

  audioDuration() {
    return this.audio.duration
  }

  audioTime() {
    return this.audio.currentTime
  }
}
