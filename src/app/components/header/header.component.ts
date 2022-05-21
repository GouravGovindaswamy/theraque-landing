import { Component, OnInit,Input, ViewChild, ElementRef } from '@angular/core';
import { MenuController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() title: string;
  dropdown = false;
  desktopFlag:boolean = false;
 
  @ViewChild('productbtn', { read: ElementRef })productbtn: ElementRef;
  constructor(private menu: MenuController, public plt: Platform) {
     if(this.plt.is('desktop')){
       this.desktopFlag = true;
     }
   }

  ngOnInit() {}

  scroll(target) {
    console.log(document.getElementById(target));
    document.getElementById(target).scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
    });
  }
}
