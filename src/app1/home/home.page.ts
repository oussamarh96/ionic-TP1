import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  
})

export class HomePage {
  Tp="tp2" 
  constructor(public navCtrl: NavController){}
  NavigateToAbout(){
    this.navCtrl.navigateForward("/about");
   
  }
}      
