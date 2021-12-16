import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('name') nameKey!:ElementRef;
  @ViewChild('profession') professionKey!:ElementRef;
  @ViewChild('email') emailKey!:ElementRef;
  @ViewChild('phone') phoneKey!:ElementRef;
  @ViewChild('address') addressKey!:ElementRef;
  @ViewChild('linkdin') linkdinKey!:ElementRef;
  @ViewChild('language') languageKey!:ElementRef;
  @ViewChild('master') masterKey!:ElementRef;
  @ViewChild('graduation') graduationKey!:ElementRef;
  @ViewChild('about') aboutKey!:ElementRef;
  @ViewChild('exprience') exprienceKey!:ElementRef;
  @ViewChild('skills') skillsKey!:ElementRef;






  ngOnInit(): void {
  }
  submit(){
    localStorage.setItem("name",this.nameKey.nativeElement.value);
    localStorage.setItem("profession",this.professionKey.nativeElement.value);
    localStorage.setItem("email",this.emailKey.nativeElement.value);
    localStorage.setItem("phone",this.phoneKey.nativeElement.value);
    localStorage.setItem("address",this.addressKey.nativeElement.value);
    localStorage.setItem("linkdin",this.linkdinKey.nativeElement.value);
    localStorage.setItem("language",this.languageKey.nativeElement.value);
    localStorage.setItem("master",this.masterKey.nativeElement.value);
    localStorage.setItem("graduation",this.graduationKey.nativeElement.value);
    localStorage.setItem("about",this.aboutKey.nativeElement.value);
    localStorage.setItem("exprience",this.exprienceKey.nativeElement.value);
    localStorage.setItem("skills",this.skillsKey.nativeElement.value);
  }

}
