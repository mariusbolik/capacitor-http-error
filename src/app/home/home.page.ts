import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonButton, IonHeader, IonToolbar, IonTitle, IonContent, CommonModule],
  providers: [HttpClient]
})
export class HomePage {

  public data = signal(null);
  
  private httpClient = inject(HttpClient);

  fetchData() {
    this.httpClient.get('https://cors-test-api.vercel.app/api/cors-test').subscribe((data: any) => {
      console.log(data);
      this.data.set(data);
    });
  }
}
