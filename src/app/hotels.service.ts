import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

import { IHotel } from './models/hotel';

@Injectable({
  providedIn: 'root'
})
export class HotelsService {
  public constructor() { }
  public getHotels(): Observable<IHotel[]> {
    return of(hotelsData).pipe(delay(3000)) ;
  }
}
const hotelsData: IHotel[] = [
  {
    id: 0,
    title: 'Universal Cabana',
    address: 'Orlando',
    description: 'Best one!',
    phone: '+3242353434',
    picture: 'assets/images/1.jpg',
    photos: ['assets/images/res.jpg', 'assets/images/r1.jpg'],
    weather: {
      temperature: 22,
      wind: 11,
      icon: 'sun'
    },
    profile: {
      followers: 112,
      following: 11,
      photo: 'assets/images/b1.jpg'
    },
    stars: 3
  },
  {
    id: 1,
    title: 'Kharkov plaza',
    address: 'Kharkov',
    description: 'Five Stars',
    phone: '+3242353434',
    picture: 'assets/images/2.jpg',
    photos: ['assets/images/res.jpg', 'assets/images/r1.jpg'],
    weather: {
      temperature: 5,
      wind: 4,
      icon: 'cloud-rain'
    },
    profile: {
      followers: 12,
      following: 111,
      photo: 'assets/images/b2.jpg'
    },
    stars: 4
  },
  {
    id: 2,
    title: 'Hilton',
    address: 'Kair',
    description: 'Kair best hotel',
    phone: '+3242353434',
    picture: 'assets/images/3.jpg',
    photos: ['assets/images/res.jpg', 'assets/images/r1.jpg'],
    weather: {
      temperature: -2,
      wind: 2,
      icon: 'cloud'
    },
    profile: {
      followers: 45,
      following: 78,
      photo: 'assets/images/b3.jpg'
    },
    stars: 5
  },
  {
    id: 3,
    title: 'Stars Hotel',
    address: 'Boston',
    description: 'Boston main hotel',
    phone: '+3242353434',
    picture: 'assets/images/1.jpg',
    photos: ['assets/images/res.jpg', 'assets/images/r1.jpg'],
    weather: {
      temperature: 22,
      wind: 11,
      icon: 'sun'
    },
    profile: {
      followers: 112,
      following: 11,
      photo: 'assets/images/b1.jpg'
    },
    stars: 3
  },
  {
    id: 4,
    title: 'Kharkov hostel',
    address: 'Kharkov, Freedom square',
    description: 'Hostel from kharkov',
    phone: '+3242353434',
    picture: 'assets/images/2.jpg',
    photos: ['assets/images/res.jpg', 'assets/images/r1.jpg'],
    weather: {
      temperature: 5,
      wind: 4,
      icon: 'cloud-rain'
    },
    profile: {
      followers: 12,
      following: 111,
      photo: 'assets/images/b2.jpg'
    },
    stars: 4
  },
  {
    id: 5,
    title: 'Olymp',
    address: 'Greece, Athenes',
    description: 'Place for gods',
    phone: '+3242353434',
    picture: 'assets/images/3.jpg',
    photos: ['assets/images/res.jpg', 'assets/images/r1.jpg'],
    weather: {
      temperature: -2,
      wind: 2,
      icon: 'cloud'
    },
    profile: {
      followers: 45,
      following: 78,
      photo: 'assets/images/b3.jpg'
    },
    stars: 5
  }
];
