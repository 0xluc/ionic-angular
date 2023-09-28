import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  private _places:Place[] = [
    new Place('p1','Manhattan','Heart of NY', 'https://picsum.photos/300/200', 13.4),
    new Place('p2','São Paulo','Brazilian cyberpunk dystopia', 'https://picsum.photos/300/200', 123.21)
  ]
  constructor() { }

  get places() {
    return [...this._places]
  }
  getPlace(id: string | null){
    return {...this._places.find(p => p.id === id)}
  }
}
