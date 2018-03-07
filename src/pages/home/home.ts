import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  fullName = {
  firstName:null,
  lastName:null
  }


  constructor(public navCtrl: NavController) {

  }

  getFullName(){
    if(this.fullName.firstName!=='' && this.fullName.lastName!==''){
     alert(this.fullName.firstName +' ' + this.fullName.lastName)


    }else{
      alert("please fill the detail apropriately")
    }

  
 
  }

}
