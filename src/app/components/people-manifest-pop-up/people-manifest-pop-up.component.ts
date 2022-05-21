import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-people-manifest-pop-up',
  templateUrl: './people-manifest-pop-up.component.html',
  styleUrls: ['./people-manifest-pop-up.component.scss'],
})
export class PeopleManifestPopUpComponent{
  @Input() imgsrc :String;
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  dismissModal(){
    this.modalCtrl.dismiss();
  }

}
