import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
import { CreateBookingsComponent } from 'src/app/bookings/create-bookings/create-bookings.component';
import { Place } from '../../place.model';
import { PlacesService } from '../../places.service';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {
  place: Place;
  constructor(
    private router: Router,
    private navCtrl: NavController,
    private modalController: ModalController,
    private route: ActivatedRoute,
    private placesService: PlacesService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap) => {
      if (!paramMap.has('placeId')) {
        this.navCtrl.navigateBack('/places/tabs/search');
        return;
      }
      this.place = this.placesService.getPlace(
        paramMap.get('placeId')
      ) as Place;
    });
  }

  onBookPlace() {
    this.modalController
      .create({
        component: CreateBookingsComponent,
        componentProps: { selectedPlace: this.place },
      })
      .then((modalElement) => {
        modalElement.present();
        return modalElement.onDidDismiss();
      })
      .then((result: any) => {
        console.log(result.data, result.role);
        if (result.role === 'confirm') {
          console.log('Booked!');
        }
      });
  }
}
