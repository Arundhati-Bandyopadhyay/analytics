import { Component,inject } from '@angular/core';
//import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider } from 'firebase/auth';
import { AngularFireModule } from '@angular/fire/compat';
////import { Component, inject } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';



@Component({
  selector: 'firebase-login',
  standalone: true,
  imports: [AngularFireModule],
  templateUrl: './firebase-login.component.html',
  styleUrl: './firebase-login.component.scss'
  
})
export class FirebaseLoginComponent {
  private afAuth = inject(AngularFireAuth);


  async signInWithGoogle() {
    try {
      const result = await this.afAuth.signInWithPopup(new GoogleAuthProvider());
      // Handle successful sign-in
      console.log(result.user);
    } catch (error) {
      // Handle errors
      console.error(error);
    }
  }
}
