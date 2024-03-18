import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MovieService } from '../movie.service';
import { Signup } from '../signup.model';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  username:String="";
  password:String="";
  conpassword:String="";
  signup:Signup={username:"",password:""};
  
  constructor(private movie:MovieService,
    private router:Router,
    private snackBar: MatSnackBar){}
  OnSubmit(){
    if(this.password === this.conpassword){
      this.signup={username:this.username,password:this.password};
      this.movie.createUser(this.signup).subscribe((user)=>{
      // this.snackBar.open('Submitted successfully', 'Close', {
      //     duration: 5000});
       this.router.navigateByUrl('/Login');
      },(error)=>{
        this.router.navigateByUrl('/error');
      })
    }
    if(this.password!== this.conpassword){
      // this.snackBar.open('Please check the password', 'Close', {
      //   duration: 5000, // Duration in milliseconds
     //});
    }
     
  }
}
