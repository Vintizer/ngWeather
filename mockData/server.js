const fs = require("fs");

const hotels = require("./hotels");
const photos = require("./photos");
const profile = require("./profile");
const weather = require("./weather");
function getRandom(max){
    return Math.floor(Math.random() * max);
}
function getRandomArr(array) {
    console.log('array: ', array);
    const max = array.length;
    const randVal = getRandom(max);
    return array[randVal];
}
const weatherTypes = [
    "bolt",
    "wind",
    "smog",
    "cloud",
    "sun",
    "umbrella",
    "rainbow",
    "poo-storm",
    "cloud-sun-rain",
    "cloud-sun",
    "cloud-showers-heavy",
    "cloud-rain",
    "cloud-moon-rain"
]
for(hotel of hotels) {
    hotel.weather = {...getRandomArr(weather),
        icon: getRandomArr(weatherTypes)
    }
    hotel.picture = `assets/picture/${getRandom(16)}.jpg`;
    hotel.profile = {...getRandomArr(profile),
        photo: `assets/profile/${getRandom(16)}.jpg`
    };
    hotel.photos = [`assets/photos/${getRandom(16)}.jpg`, `assets/photos/${getRandom(16)}.jpg`];
}
fs.writeFileSync("mockHotels.json", JSON.stringify({hotels, favorites: []}));