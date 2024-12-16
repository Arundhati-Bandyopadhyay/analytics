import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';


import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';
//import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { initializeApp } from 'firebase/app';


const firebaseConfig = {
  apiKey: "AIzaSyDfeGMw1XEIZMmxd4EzMtgu_roBLFtA9HA",
  authDomain: "analytics-dad4c.firebaseapp.com",
  projectId: "analytics-dad4c",
  storageBucket: "analytics-dad4c.firebasestorage.app",
  messagingSenderId: "116493493773",
  appId: "1:116493493773:web:cecc44ad4bd5db54125744",
  measurementId: "G-C052T7NHQQ"
};
initializeApp(firebaseConfig);


export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), 
    provideAnimationsAsync(),
    provideHttpClient(),
  //   provideFirebaseApp(() => initializeApp(firebaseConfig)),
  //   provideAuth(() => getAuth()),
  //   { provide: FIREBASE_OPTIONS, useValue: firebaseConfig},
  //   provideFirestore(() => getFirestore())
  ],
};

