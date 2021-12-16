import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resumebody',
  templateUrl: './resumebody.component.html',
  styleUrls: ['./resumebody.component.css']
})
export class ResumebodyComponent implements OnInit {
public name: string="";
public profession: string="";
public email: string="";
public phone: string="";
public address: string="";
public linkdin: string="";
public language: string="";
public master: string="";
public graduation: string="";
public about: string="";
public exprience: string="";
public skills: string="";
  constructor() { }

  ngOnInit(): void {
    this.name = localStorage.getItem("name")!;
    this.profession = localStorage.getItem("profession")!;
    this.email = localStorage.getItem("email")!;
    this.phone = localStorage.getItem("phone")!;
    this.address = localStorage.getItem("address")!;
    this.linkdin = localStorage.getItem("linkdin")!;
    this.language = localStorage.getItem("language")!;
    this.master = localStorage.getItem("master")!;
    this.graduation = localStorage.getItem("graduation")!;
    this.about = localStorage.getItem("about")!;
    this.exprience = localStorage.getItem("exprience")!;
    this.skills = localStorage.getItem("skills")!;
  }

}
