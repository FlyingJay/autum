
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomePageComponent } from './home.page';
import { HttpClientModule } from '@angular/common/http';
import { IonicSwingModule } from '../../ionic-swing/ionic-swing.module';
import { ChatComponent } from '@app/components/chat/chat.component';
import { MessageFeedComponent } from '@app/components/message-feed/message-feed.component';
import { ExpandableComponent } from '@app/components/expandable/expandable.component';
import { KtdGridModule } from '@katoid/angular-grid-layout';
import { IonInfiniteScroll } from '@ionic/angular';
import { SettingsPageComponent } from '@app/components/settings/settings.component';
import { EditPageComponent } from '@app/components/edit/edit.component';
import { InterestListComponent } from '@app/components/edit/interest-list/interest-list.component';
import { ExperienceListComponent } from '@app/components/edit/experience-list/experience-list.component';
import { ScrollHorizontalComponentModule } from '@app/components/scroll-horizontal/scroll-horizontal.module';
import { PipesModule } from '@app/pipes/pipes.module';
import { ProfileCardModule } from '@app/components/profile-card/profile-card.module';
import { CropperModule } from '@app/components/cropper/cropper.module';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';

export function playerFactory(): any {
  return import('lottie-web');
}



import { ChatRoom } from '@app/components/chatroom/ChatRoom/chat-room.component';
import { Attachment } from '@app/components/chatroom/Attachment/attachment.component';
import { FilePreview } from '@app/components/chatroom/Attachment/Preview/file-preview.component';
import { ImagePreview } from '@app/components/chatroom/Attachment/Preview/image-preview.component';

import { ChannelHeader } from '@app/components/chatroom/ChannelHeader/channel-header.component';
import { MessageComposer } from '@app/components/chatroom/MessageComposer/message-composer.component';
import { MessageList } from '@app/components/chatroom/MessageList/message-list.component';
import { MessageItem } from '@app/components/chatroom/MessageItem/message-item.component';
import { ReactionBar } from '@app/components/chatroom/ReactionBar/reaction-bar.component';
import { RemoveReactions } from '@app/components/chatroom/ReactionBar/remove-reactions.pipe';
import { ReactionIcon } from '@app/components/chatroom/ReactionIcon/reaction-icon.component';
import { ReactionPicker } from '@app/components/chatroom/ReactionPicker/reaction-picker.component';
import { Image } from '@app/components/chatroom/Image/image.component';
import { FileContent } from '@app/components/chatroom/MessageItem/Content/file-content.component';
import { TextContent } from '@app/components/chatroom/MessageItem/Content/text-content.component';
import { LinkContent } from '@app/components/chatroom/MessageItem/Content/link-content.component';
import { ImageContent } from '@app/components/chatroom/MessageItem/Content/image-content.component';
import { SyncState } from '@app/components/chatroom/MessageItem/SyncState/sync-state.component';
import { IconLike } from '@app/components/chatroom/Icons/icons.component';
import { IconImageUpload } from '@app/components/chatroom/Icons/icons.component';
import { IconFileUpload } from '@app/components/chatroom/Icons/icons.component';
import { IconAmity } from '@app/components/chatroom/Icons/icons.component';
import { IconSynced } from '@app/components/chatroom/Icons/icons.component';
import { IconSyncing } from '@app/components/chatroom/Icons/icons.component';
import { IconCare } from '@app/components/chatroom/Icons/icons.component';
import { IconLove } from '@app/components/chatroom/Icons/icons.component';
import { IconMember } from '@app/components/chatroom/Icons/icons.component';
import { IconSend } from '@app/components/chatroom/Icons/icons.component';
import { IconSendRecord } from '@app/components/chatroom/Icons/icons.component';
import { IconAttachment } from '@app/components/chatroom/Icons/icons.component';
import { ChatRoomComponent } from '@app/components/chatroom/chatroom.component';
import { CountDownTimerComponent } from '@app/components/countdown-timer/countdown-timer.component';
import { CarouselComponent } from './carousel/carousel.component';
import { Routes } from '@angular/router';

const routes: Routes = [
  { path: 'settings', component: SettingsPageComponent },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    HttpClientModule,
    IonicSwingModule,
    KtdGridModule,
    ScrollHorizontalComponentModule,
    PipesModule,
    ProfileCardModule,
    CropperModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePageComponent

      }/*,

       {
              path: 'settings',
              component: SettingsPageComponent,
              data: { user:"[user]" }

            },

       {
              path: 'edit',
              component: EditPageComponent,
              data: { user:"user" }
        }*/
    ]),
    LottieModule.forRoot({ player: playerFactory })
  ],
  declarations: [
    HomePageComponent,
    ChatComponent,
    MessageFeedComponent,
    ExpandableComponent,
    SettingsPageComponent,
    EditPageComponent,
    InterestListComponent,
    ExperienceListComponent,
    ChatRoom,
    MessageItem,
    ReactionBar,
    ReactionIcon,
    ReactionPicker,
    Image,
    IconLike,
    FileContent,
    TextContent,
    LinkContent,
    ImageContent,
    IconImageUpload,
    IconFileUpload,
    IconAmity,
    IconSynced,
    IconSyncing,
    IconCare,
    IconLove,
    IconMember,
    IconSend,
    IconSendRecord,
    IconAttachment,
    SyncState,
    RemoveReactions,
    Attachment,
    FilePreview,
    ImagePreview,
    ChannelHeader,
    MessageComposer,
    MessageList,
    ChatRoomComponent,
    CountDownTimerComponent,
    CarouselComponent
  ]
})
export class HomePageModule { }
