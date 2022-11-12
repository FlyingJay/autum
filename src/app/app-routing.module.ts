
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PreloadAllModules } from '@angular/router'

const routes: Routes = [
  { path: '', redirectTo: 'pre-login-tut', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule) },
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule) },
  { path: 'pre-login-tut', loadChildren: () => import('./pages/pre-login-tut/pre-login-tut.module').then(m => m.PreLoginPageModule) },
  { path: 'pre-login-tut-settings', loadChildren: () => import('./pages/pre-login-tut-settings/pre-login-tut-settings.module').then(m => m.PreSettingsLoginPageModule) },
  { path: 'login-phone', loadChildren: () => import('./pages/login-phone/login-phone.module').then(m => m.LoginPhonePageModule) },
  { path: 'login-phone-verification',loadChildren: () => import('./pages/login-phone-verification/login-phone-verification.module').then(m => m.LoginPhoneVerificationPageModule)},
  { path: 'profile', loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfilePageModule) },
  { path: 'signup-email', loadChildren: () => import('./pages/signup-email/signup-email.module').then(m => m.SignUpEmailPageModule) },
  { path: 'signup-name', loadChildren: () => import('./pages/signup-name/signup-name.module').then(m => m.SignUpNamePageModule) },
  { path: 'signup-birth', loadChildren: () => import('./pages/signup-birth/signup-birth.module').then(m => m.SignUpBirthPageModule) },
  { path: 'signup-iam', loadChildren: () => import('./pages/signup-iam/signup-iam.module').then(m => m.SignUpIamPageModule) },
  { path: 'signup-gender-select', loadChildren: () => import('./pages/signup-gender-select/signup-gender-select.module').then(m => m.SelectGenderModule) },
  { path: 'signup-sexualOR', loadChildren: () => import('./pages/signup-sexualOR/signup-sexualOR.module').then(m => m.SignUpSexualORPageModule) },
  { path: 'signup-show-me', loadChildren: () => import('./pages/signup-show-me/signup-show-me.module').then(m => m.SignUpShowMePageModule) },
  { path: 'signup-university', loadChildren: () => import('./pages/signup-university/signup-university.module').then(m => m.SignUpUniversityPageModule) },
  { path: 'signup-photo', loadChildren: () => import('./pages/signup-photo/signup-photo.module').then(m => m.SignUpPhotoPageModule) },
  { path: 'signup-phone-verification',loadChildren: () => import('./pages/signup-phone-verification/signup-phone-verification.module').then(m => m.SignupPhoneVerificationPageModule)},
  { path: 'signup-referral',loadChildren: () => import('./pages/signup-referral/signup-referral.module').then(m => m.SignupReferralPageModule) },
  { path: 'signup-interest-level', loadChildren: () => import('./pages/signup-interest-level/signup-interest-level.module').then(m => m.SignUpInterestLevelPageModule) },
  { path: 'signup-interest', loadChildren: () => import('./pages/signup-interest/signup-interest.module').then(m => m.SignUpInterestPageModule) },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule) },
  { path: 'profile-preview', loadChildren: () => import('./pages/profile-preview/profile-preview.module').then(m => m.ProfilePreviewPageModule) },
  { path: 'tinder-plus', loadChildren: () => import('./pages/tinder-plus/tinder-plus.module').then(m => m.TinderPlusPageModule) },
  { path: 'feed', loadChildren: () => import('./pages/feed/feed.module').then(m => m.FeedPageModule) },
  { path: 'autoplay-video', loadChildren: () => import('./pages/autoplay-video/autoplay-video.module').then(m => m.AutoplayVideoPageModule) },
  { path: 'email-verification', loadChildren: () => import('./pages/email-verification/email-verification.module').then(m => m.EmailVerificationPageModule) },
  { path: 'push-notification', loadChildren: () => import('./pages/push-notification/push-notification.module').then(m => m.PushNotificationPageModule) },
  { path: 'delete-confirm', loadChildren: () => import('./pages/delete-confirm/delete-confirm.module').then(m => m.DeleteConfirmPageModule) },
  { path: 'phone-number', loadChildren: () => import('./pages/phone-number/phone-number.module').then(m => m.PhoneNumberPageModule) },
  { path: 'show-me', loadChildren: () => import('./pages/show-me/show-me.module').then(m => m.ShowMePageModule) },
  { path: 'show-me-iam', loadChildren: () => import('./pages/show-me-iam/show-me-iam.module').then(m => m.ShowMePageIamModule) },
  { path: 'show-me-sexual-orientation', loadChildren: () => import('./pages/show-me-sexual-orientation/show-me-sexual-orientation.module').then(m => m.ShowMePageOrientationModule) },
  { path: 'add-media', loadChildren: () => import('./pages/add-media/add-media.module').then(m => m.AddMediaPageModule) },
  { path: 'account-recovery', loadChildren: () => import('./pages/account-recovery/account-recovery.module').then(m => m.AccountRecoveryPageModule) },
  { path: 'login-email', loadChildren: () => import('./pages/login-email/login-email.module').then(m => m.LoginEmailPageModule) },
  { path: 'team-tinder', loadChildren: () => import('./pages/team-tinder/team-tinder.module').then(m => m.TeamTinderPageModule) },
  { path: 'select-interest', loadChildren: () => import('./pages/select-interest/select-interest.module').then(m => m.SelectInterestPageModule) },
  { path: 'select-experience', loadChildren: () => import('./pages/select-experience/select-experience.module').then(m => m.SelectExperiencePageModule) },
  { path: 'select-school', loadChildren: () => import('./pages/select-school/select-school.module').then( m => m.SelectSchoolPageModule) },
  { path: 'settings-interest-level', loadChildren: () => import('./pages/settings-interest-level/settings-interest-level.module').then(m => m.SettingsInterestLevelPageModule) },
  { path: 'settings-experience-level', loadChildren: () => import('./pages/settings-experience-level/settings-experience-level.module').then(m => m.SettingsExperienceLevelPageModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
