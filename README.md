# MindEase App

Welcome to the **MindEase App** 👋

This is a mobile application built using **Expo** and **React Native** to provide mental health assistance with voice-to-text chat functionality.

## 🚀 Get Started

### 1️⃣ Install Dependencies
Run the following command inside the project folder:
```sh
npm install
```

### 2️⃣ Run the App Locally

#### ✅ Start the Expo Development Server
```sh
npx expo start
```
This will open the Expo Developer Tools in your browser.

#### ✅ Run on a Physical Android Device
1. Install **Expo Go** from the Google Play Store.
2. Ensure your **PC and Phone** are connected to the **same WiFi network**.
3. Scan the **QR code** from the Expo Developer Tools on your phone.

Alternatively, use USB debugging:
```sh
npx expo run:android
```

#### ✅ Run on an Android Emulator
1. Open **Android Studio** and start an emulator.
2. Run:
   ```sh
   npx expo run:android
   ```

#### ✅ Run on a Web Browser
If you want to test the app in a browser:
```sh
npx expo start --web
```
Then open `http://localhost:19006/` in your browser.

---

## 📦 Build the APK for Android
To generate an **Android APK**, follow these steps:

### 1️⃣ Initialize Expo Application Services (EAS)
```sh
eas project:init
```

### 2️⃣ Configure the Build
```sh
eas build:configure
```

### 3️⃣ Build an Android APK
```sh
eas build --platform android --profile preview
```
This will generate an **AAB file** by default. To generate an **APK**, modify `eas.json` to use `apk` format.

Alternatively, you can use:
```sh
eas build --platform android --profile development
```

Once the build is complete, download the **APK** from the Expo dashboard or follow the terminal instructions.

---

## 📚 Learn More

- [Expo Documentation](https://docs.expo.dev/)
- [React Native Documentation](https://reactnative.dev/)
- [Expo Router](https://docs.expo.dev/router/introduction/)

---

## 🤝 Join the Community

- [Expo GitHub](https://github.com/expo/expo)
- [Discord Community](https://chat.expo.dev)

---

## 🔄 Reset the Project
To reset and start fresh:
```sh
npm run reset-project
```
This moves the starter code to **app-example/** and creates a new **app/** directory for development.

---

Happy Coding! 🚀

