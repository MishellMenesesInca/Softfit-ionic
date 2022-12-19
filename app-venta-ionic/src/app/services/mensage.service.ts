import { Injectable } from '@angular/core';
import {ToastController} from "@ionic/angular";

@Injectable({
  providedIn: 'root'
})
export class MensageService {

  constructor( private toastController: ToastController,) {


  }

  async showMessage(message: string) {
    const  toast = await this.toastController.create({
      message: message,
      duration: 1500,
      position: 'bottom'
    });

    await toast.present;
  }
}
