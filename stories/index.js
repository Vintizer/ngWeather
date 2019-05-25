import { storiesOf, moduleMetadata } from '@storybook/angular';
import { HotelInfoComponent } from '../src/app/components/hotel-info/hotel-info.component.ts';
import { ProfileComponent } from '../src/app/components/profile/profile.component.ts'
import { CommonModule } from '@angular/common';
import { WeatherComponent } from '../src/app/components/weather/weather.component.ts';

storiesOf('Weather', module)
    .add('with text', () => ({
        component: WeatherComponent,
        props: {
            "weather": {
                "temperature": -16,
                "wind": 11,
                "icon": "poo-storm"
            },
        },
    }));
storiesOf('Profile', module)
    .add('with text', () => ({
        component: ProfileComponent,
        props: {
            "profile": {
                "followers": 492,
                "following": 351,
                "photo": "assets/profile/12.jpg"
            },
        },
    }));
storiesOf('Hotel info', module)
    .addDecorator(
        moduleMetadata({
            declarations: [ProfileComponent, WeatherComponent],
            imports: [CommonModule],
        }),
    )
    .add('with text', () => ({
        component: HotelInfoComponent,
        props: {
            activeHotel: {
                "id": 37,
                "title": "Nlounge",
                "address": "19796 Dorton Road",
                "description": "ipsum integer a nibh in quis justo maecenas rhoncus aliquam",
                "phone": "923-674-0061",
                "picture": "assets/picture/8.jpg",
                "stars": 4,
                "weather": {
                    "temperature": -16,
                    "wind": 11,
                    "icon": "poo-storm"
                },
                "profile": {
                    "followers": 492,
                    "following": 351,
                    "photo": "assets/profile/12.jpg"
                },
                "photos": [
                    "assets/photos/0.jpg",
                    "assets/photos/10.jpg"
                ]
            }
        },
    }));