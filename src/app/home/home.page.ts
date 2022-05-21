import { Component, AfterViewInit, ViewChild, AfterContentChecked, OnInit, ElementRef, Renderer2, HostListener } from '@angular/core';
import anime from 'animejs/lib/anime.es';
import { ModalController } from '@ionic/angular';
import SwiperCore, { Autoplay, Keyboard, Pagination, Scrollbar, Zoom, SwiperOptions } from 'swiper';
import { SwiperComponent } from 'swiper/angular';
import { PeopleManifestPopUpComponent } from '../components/people-manifest-pop-up/people-manifest-pop-up.component';
import { MenuController } from '@ionic/angular';



SwiperCore.use([Autoplay, Keyboard, Pagination, Scrollbar, Zoom]);

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements AfterViewInit, AfterContentChecked, OnInit {
  dropdown = false;
  desktopFlag = false;
  updateFromInput = false;
  progressValue= 0;
  showProgress = false;

  @ViewChild('aboutUs') aboutUs: ElementRef;
  @ViewChild('subscription') subscription: ElementRef;
  @ViewChild('servicesApp') servicesApp: ElementRef;
  @ViewChild('missionvision') missionvision: ElementRef;
  @ViewChild('missionOne') mission: ElementRef;
  @ViewChild('visionOne') vision: ElementRef;


  @ViewChild('swiper') swiper: SwiperComponent;
  config: SwiperOptions = {
    slidesPerView: 3,
    spaceBetween: 50,
    pagination: true,
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    if (width > 1024) {
      this.desktopFlag = true;
    } else {
      this.desktopFlag = false;
    }
    if(width < 481){
      this.config.slidesPerView = 1;
    } 
    if(width > 481 && width < 1024){
      this.config.slidesPerView = 2;
    }
    
  }

  imgObj = {
    "1.jpg": "../../../assets/images/people slides/slides/Slide3.jpg",
    "2.jpg": "../../../assets/images/people slides/slides/Slide4.png",
    "3.jpg": "../../../assets/images/people slides/slides/Slide5.JPG",
    "4.jpg": "../../../assets/images/people slides/slides/Slide1.png",
    "5.jpg": "../../../assets/images/people slides/slides/Slide2.png"
  }



  constructor(private modalCtrl: ModalController, private menu: MenuController, private renderer: Renderer2) {
    var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    console.log(typeof width);
    if (width > 1024) {
      this.desktopFlag = true;
    } else {
      this.desktopFlag = false;
    }
    if(width < 481){
      this.config.slidesPerView = 1;
    }
    if(width > 481 && width < 1024){
      this.config.slidesPerView = 2;
    }
  }
  ngOnInit(): void {

  }



  ngAfterContentChecked(): void {
    if (this.swiper) {
      this.swiper.updateSwiper({});
    }
  }

  async openModal(img) {
    let imgsrc = this.imgObj[img];
    console.log(img);
    const modal = await this.modalCtrl.create({
      component: PeopleManifestPopUpComponent,
      cssClass: 'my-custom-modal-css',
      componentProps: { imgsrc: imgsrc },
    })

    await modal.present();
  }

  ngAfterViewInit(): void {
    anime({
      targets: '.bannerImg',
      opacity: 1,
      easing: 'easeInOutQuad',
      duration: 2000
    });
    anime({
      targets: '.bannerTextCol',
      translateY: -40,
      opacity: 1,
      easing: 'easeInOutQuad',
      delay: anime.stagger(100)
    });
  }

  ionViewWillEnter() {
    // console.log('hi');
    anime({
      targets: '.aboutUs',
      translateY: -40,
      opacity: 1,
      easing: 'easeInOutQuad',
      delay: anime.stagger(100)
    });
  }
  scroll(target) {
    if (target == "contact") {
      window.open("https://forms.gle/gvB3iiSAysFReRLH9", "_blank");
    } else {
      console.log(document.getElementById(target));
      document.getElementById(target).scrollIntoView({
        behavior: "smooth",
        block: "end"
      });
    }
    if(this.desktopFlag == false){
      this.menu.close();
    }
  }
  subscribe(type) {
    window.open("https://forms.gle/F3SpA1EL1Nh7A1kT8", "_blank");
  }

  async onScroll(event) {
    const elem = document.getElementById("main");
    const scrollElement = await (elem as any).getScrollElement()
    const scrollPosition = event.detail.scrollTop;
    const totalContentHeight = scrollElement.scrollHeight;
    const viewportHeight = elem.offsetHeight;
    const percentage = scrollPosition / (totalContentHeight - viewportHeight);
    if (percentage > 0) {
      this.showProgress = true;
    }
    this.progressValue = percentage;
    //console.log(this.subscription.nativeElement);
    if(this.desktopFlag){
      if (this.servicesApp && this.servicesApp.nativeElement.offsetTop <= scrollPosition + 350) {
        this.renderer.setStyle(this.servicesApp.nativeElement, 'animation', 'slidein 1s');
        this.renderer.setStyle(this.servicesApp.nativeElement, 'animation-fill-mode', 'forwards');
        //this.renderer.setStyle(this.servicesApp.nativeElement, '-webkit-animation-fill-mode', 'fowards');
        //this.renderer.setStyle(this.servicesApp.nativeElement, 'animation-duration', '2s');
        //console.log(this.servicesApp.nativeElement);

      }
      if (this.missionvision && this.missionvision.nativeElement.offsetTop <= scrollPosition + 650) {

        this.renderer.setStyle(this.missionvision.nativeElement, 'animation', 'missionslide 1s');
        this.renderer.setStyle(this.missionvision.nativeElement, 'animation-fill-mode', 'forwards');
        this.renderer.setStyle(this.missionvision.nativeElement, 'animation-delay', '1s');
        //this.renderer.setStyle(this.servicesApp.nativeElement, '-webkit-animation-fill-mode', 'fowards');
        //this.renderer.setStyle(this.servicesApp.nativeElement, 'animation-duration', '2s');
        //console.log(this.missionvision.nativeElement);
      }

      if (this.mission && this.mission.nativeElement.offsetTop - 400 <= scrollPosition + 200) {
        this.renderer.setStyle(this.mission.nativeElement, 'animation', 'missionvisionslide 1s');
        this.renderer.setStyle(this.mission.nativeElement, 'animation-fill-mode', 'forwards');
        this.renderer.setStyle(this.mission.nativeElement, 'animation-delay', '1s');
        //this.renderer.setStyle(this.servicesApp.nativeElement, '-webkit-animation-fill-mode', 'fowards');
        //this.renderer.setStyle(this.servicesApp.nativeElement, 'animation-duration', '2s');

        console.log("mission" + this.mission.nativeElement);
      }
      if (this.vision && this.vision.nativeElement.offsetTop + 1490 <= scrollPosition + 200) {
        this.renderer.setStyle(this.vision.nativeElement, 'animation', 'missionvisionslide 1s');
        this.renderer.setStyle(this.vision.nativeElement, 'animation-fill-mode', 'forwards');
        this.renderer.setStyle(this.vision.nativeElement, 'animation-delay', '1s');
        //this.renderer.setStyle(this.servicesApp.nativeElement, '-webkit-animation-fill-mode', 'fowards');
        //this.renderer.setStyle(this.servicesApp.nativeElement, 'animation-duration', '2s');
        console.log(this.vision.nativeElement);
      }
      /*else if (this.missionvision && this.missionvision.nativeElement.offsetTop <= scrollPosition+350) {
        this.renderer.setStyle(this.missionvision.nativeElement, 'animation', 'slidein 1s');
        this.renderer.setStyle(this.missionvision.nativeElement, 'animation-fill-mode', 'forwards');
        //this.renderer.setStyle(this.servicesApp.nativeElement, '-webkit-animation-fill-mode', 'fowards');
        //this.renderer.setStyle(this.servicesApp.nativeElement, 'animation-duration', '2s');
        console.log(this.missionvision.nativeElement);
      }
      else */
    }
  }
}


