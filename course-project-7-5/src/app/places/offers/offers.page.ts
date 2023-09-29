import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {
  offers = [
    {
      id: '1',
      title: 'Offer 1',
      imageUrl: 'https://picsum.photos/200',
    },
    {
      id: '2',
      title: 'Offer 2',
      imageUrl: 'https://picsum.photos/200',
    },
  ];

  constructor() {}

  ngOnInit() {}
  onEdit(offerId: string) {
    console.log('Editing item', offerId);
  }
}
