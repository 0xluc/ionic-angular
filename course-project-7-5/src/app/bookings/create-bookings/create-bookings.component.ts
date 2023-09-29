import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Place } from 'src/app/places/place.model';

@Component({
  selector: 'app-create-bookings',
  templateUrl: './create-bookings.component.html',
  styleUrls: ['./create-bookings.component.scss'],
})
export class CreateBookingsComponent implements OnInit {
  @Input() selectedPlace: Place;
  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {}

  onBookPlace() {
    this.modalCtrl.dismiss(
      {
        message: 'Dummy message',
      },
      'confirm'
    );
  }
  onCancel() {
    this.modalCtrl.dismiss(null, 'cancel');
  }
}
