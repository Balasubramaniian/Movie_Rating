import { Component } from '@angular/core';
import { Signup } from '../signup.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MovieService } from '../movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private movie:MovieService,private router:Router){}
  dbdata:Signup[]=[];
  login:Signup={username:"",password:""};
  Onsubmit(){
    this.movie.getUser().subscribe((data)=>{
      this.dbdata=data;
      const isPresent = this.dbdata.some(item => item.username === this.login.username && item.password === this.login.password);
      if(isPresent){
        this.router.navigateByUrl('/movies');
      }
      else{
        alert("please check the username and password");
        this.router.navigateByUrl('/Login');
      }
      
    })
    
  }

}
