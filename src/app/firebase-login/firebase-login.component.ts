import { Component,inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  UserCredential,
  signOut,
} from 'firebase/auth';
import { SidenavbarComponent } from '../sidenavbar/sidenavbar.component';
// import { initializeApp } from 'firebase/app';
import { CommonModule } from '@angular/common'

@Component({
  selector: 'firebase-login',
  standalone: true,
  imports: [SidenavbarComponent,RouterOutlet,CommonModule],
  templateUrl: './firebase-login.component.html',
  styleUrl: './firebase-login.component.scss',
})
export class FirebaseLoginComponent {
  private route = inject(Router);
  user: any;
  signinbtn: boolean = true;
  signoutbtn: boolean = true;
  checkbtn: boolean = false;
  

 
  constructor() {}
  // ngOnInit(): void {
  //   // Initialize Firebase
  //   const firebaseConfig = {
  //     apiKey: "AIzaSyDfeGMw1XEIZMmxd4EzMtgu_roBLFtA9HA",
  //     authDomain: "analytics-dad4c.firebaseapp.com",
  //     projectId: "analytics-dad4c",
  //     storageBucket: "analytics-dad4c.firebasestorage.app",
  //     messagingSenderId: "116493493773",
  //     appId: "1:116493493773:web:cecc44ad4bd5db54125744",
  //     measurementId: "G-C052T7NHQQ"
  //   };
  //   initializeApp(firebaseConfig);
  // }
  signInWithGoogle() {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result: UserCredential) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        console.log(credential);
        const token = credential?.accessToken;
        // The signed-in user info.
        this.user = result.user;
        console.log(this.user);
        localStorage.setItem('isLoggedIn', 'true'); 
        //this.route.navigate(['']);
        this.signinbtn=false

      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.error(error);
      });
  }

  signOut() {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        this.user = null;
        console.log('Signed out', this.user);
        this.route.navigate(['']);
      })
      .catch((error) => {
        // An error happened.
        console.error(error);
      });
  }

  checkUser() {
    console.log(this.user);
  }

  // private afAuth = inject(AngularFireAuth);
  // this.user(auth)
  // async signInWithGoogle() {
  //   try {
  //     const result = await this.afAuth.signInWithPopup(new GoogleAuthProvider());
  //     // Handle successful sign-in
  //     console.log(result.user);
  //     // HANDLE SIGNIN HERE, AND NAVIGATE TO HOME PAGE ONCE SUCCESSFULLY SIGNED IN
  //     console.log("Successfully signed in");
  //     // Add your navigation logic here.  For example, using a router:
  //     // this.router.navigate(['/home']);

  //   } catch (error) {
  //     // Handle errors
  //     console.error(error);
  //   }
  // }
}
