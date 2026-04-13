// This is the status update page of the app. It allows the user to select a new status and save it to storage.
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonRadioGroup, IonItem, IonLabel, IonRadio, IonButton } from '@ionic/angular/standalone';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-status',
  templateUrl: './status.page.html',
  styleUrls: ['./status.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonList, IonRadioGroup, IonItem, IonLabel, IonRadio, IonButton]
})
// This is the status update page of the app. It allows the user to select a new status and save it to storage.
export class StatusPage implements OnInit {
  status: string = "";

  // The StatusPage class has a status variable to hold the current status and a constructor that injects the Storage service.
  constructor(private storage:Storage) { }

  // The ngOnInit lifecycle hook is called when the component is initialized. It can be used to perform any necessary setup or initialization tasks.
  ngOnInit(): void {
  }

  // This method is called when the user clicks the save button. It saves the current status to storage.
  async saveStatus() {
    console.log("Saving status: ", this.status);
    await this.storage.create();
    await this.storage.set('myStatus', this.status);

  }
}
  




