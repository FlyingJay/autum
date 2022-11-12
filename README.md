
# AUTUM DATING

## Using this project
This project is built with
- Node 14
- Cordova 10
- Ionic 5
- Angular 11
- Android API 29

#### Node

This project is tested on latest stable version of Node 14.15.4. Make sure you have a node version close to this. Do not use node version other than 14.x.x. This can lead to unknown dependency errors. 

You can download the correct version from the [download page](https://nodejs.org/en/download/) for node.

To verify the node installation, open a new terminal window and run:

```
$ node --version
$ npm --version
```

#### Cordova

You must have cordova installed prior to this. Install Cordova using


```
$ npm install -g cordova
```

The `ios-sim` and `ios-deploy` are utilities that deploy apps to the iOS simulator and iOS devices during development. They can be installed globally with npm.

```
$ npm install -g ios-sim
$ brew install ios-deploy
```

#### Ionic

Install Ionic globally using

```
$ npm install -g ionic
```

## Installation of this project

* Extract the zip file you received after purchase

* Install npm dependencies

```
$ npm install
```
* Install Resources
```
$ ionic cordova resources
```

* Add Platform (whichever required)
```
$ ionic cordova platform add android

$ ionic cordova platform add ios
```

in few cases, you might need to install the latest platform

```
$ ionic cordova platform add android@latest

$ ionic cordova platform add ios@latest
```
* Install Plugins (whichever required. All included plugins are installed automatically with `npm i`)

```
    $ ionic cordova plugin add YOUR_PLUGIN_NAME
```


## Plugins List

```
     "cordova-plugin-whitelist": {},
      "cordova-plugin-statusbar": {},
      "cordova-plugin-device": {},
      "cordova-plugin-splashscreen": {},
      "cordova-plugin-ionic-webview": {
        "ANDROID_SUPPORT_ANNOTATIONS_VERSION": "27.+"
      },
      "cordova-plugin-ionic-keyboard": {},
      "cordova-plugin-device": {},
```


## Run app on device

```
$ ionic cordova prepare android

$ ionic cordova prepare ios
```

You can run the apps on device or Simulators from Android Studio/Xcode for Android / iOS.

Or you can run directly from CLI

```
$ ionic cordova run android --consolelogs

$ ionic cordova run ios -l --address=0.0.0.0 --consolelogs

$ ionic cordova run android -l --address=0.0.0.0 --consolelogs

$ ionic cordova emulate android --livereload

```
(iOS might have issues running directly from CLI)

For more details on running the app on device / simulator check the official documentation [Android](https://ionicframework.com/docs/developing/android) / [iOS](https://ionicframework.com/docs/developing/ios)

#### Android Production APK

* Create signing key for android to release on Google Play

```
$ keytool -genkey -v -keystore keystore folder address -alias app alias -keyalg RSA -keysize 2048 -validity 10000
```
* Create release build for Android Play Store

```
$ ionic cordova build android --prod --release
```
generates:
D:\code\app\platforms\android\app\build\outputs\apk\release\app-release-unsigned.apk

**Play Store now requires .aab (app bundle, not .apk)**
```
$ gradlew bundle
```

* Sign the unsigned APK for upload on Play store

```
$ jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore .keystore file full path unsigned apk full path app alias

ex:
$ jarsigner -keystore autumapp.keystore platforms/android/app/build/outputs/bundle/release/app-release.aab autumapp

```
* Zipalign to optimize size for play store upload

```
$ ./zipalign -v 4 signed_apk_full_path path_for_final_APK
```




ANDROID PROD BUILD

ionic cordova build android --prod --release
cd platforms/android
gradlew bundle
cd ./../..
jarsigner -keystore autumapp.keystore platforms/android/app/build/outputs/bundle/release/app-release.aab autumapp
