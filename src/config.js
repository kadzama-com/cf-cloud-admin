import {
  FirebaseAuthProvider,
  FirebaseDataProvider,
} from "react-admin-firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBP3MDb5upM0oEEHnCKp5GYX0OUowkbvQE",
  authDomain: "kadzama3dprinter.firebaseapp.com",
  projectId: "kadzama3dprinter",
  storageBucket: "kadzama3dprinter.appspot.com",
  messagingSenderId: "957194061920",
  appId: "1:957194061920:web:463d3b0992b64378139b05",
  measurementId: "G-X5N8W274ZC",
};

const reactAdminFirebaseOptions = {
  logging: true,
  useFileNamesInStorage: true,
};

export const firebaseDataProvider = FirebaseDataProvider(
  firebaseConfig,
  reactAdminFirebaseOptions
);
export const firebaseAuthProvider = FirebaseAuthProvider(
  firebaseConfig,
  reactAdminFirebaseOptions
);
