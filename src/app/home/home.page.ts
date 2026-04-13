/// <reference lib="es2018" />
import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonLabel, IonButton } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

// This is the home page of the app. It displays the current status and has a button to navigate to the status update page.
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [RouterLink, IonHeader, IonToolbar, IonTitle, IonContent, IonLabel, IonButton],
})
// The HomePage class has a status variable to hold the current status and a constructor that injects the Storage service.
export class HomePage {
  status: string = "";
  constructor(private storage: Storage) {}


  // This lifecycle hook is called when the page is about to enter and become active. It retrieves the current status from storage and updates the status variable.
  async ionViewWillEnter() {
    await this.storage.create();
    // Retrieve the current status from storage and update the status variable.
    this.status = await this.storage.get('myStatus');
  }
}
