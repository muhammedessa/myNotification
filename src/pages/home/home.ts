import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


import { LocalNotifications } from '@ionic-native/local-notifications';

import { FCM } from '@ionic-native/fcm';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  titlefirebase = '';
  bodyfirebase = '';

  constructor(public navCtrl: NavController,public localNotifications:LocalNotifications,private fcm: FCM) {

  }


  ionViewDidLoad(){
    this.firebaseMessage()
  }



firebaseMessage(){
  this.fcm.getToken().then(token=>{
  //  alert(token);
  })

  this.fcm.onNotification().subscribe(data=>{
    if(data.wasTapped){
      console.log("Received in background");
      alert( data.title + " / "+ data.body );

this.titlefirebase = data.title ;
this.bodyfirebase = data.body ;


    } else {
      console.log("Received in foreground");
      alert("Received in foreground");
    };
  })


}











notify(){
  // Schedule a single notification
 this.localNotifications.schedule({
  id: 1,
  title: 'this is title',
  text: 'Single ILocalNotification',
  sound: null


});
}





}
