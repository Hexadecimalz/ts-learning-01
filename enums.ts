enum Weather{ 
    Sunny,
    Rainy,
    Cloudy,
    Snowy,
    Stormy
};


type weatherReport = Record<string, Weather>;

const localWeather: weatherReport = {};

function setWeather(map: weatherReport, day: string, weather: Weather) {
    map[day] = weather;
};

function getWeather(map: weatherReport){
    for (const day in map){
        if ( Weather[map[day]] !== "Rainy" ){
            console.log(`${day}'s weather will be ${Weather[map[day]]}`);
        }
        else {
            console.log(`${day}'s weather will be ${Weather[map[day]]}. Don't forget to bring an umbrella!`);
        }
    };
};


setWeather(localWeather, "Monday", Weather.Sunny);
setWeather(localWeather, "Tuesday", Weather.Rainy);
setWeather(localWeather, "Wednesday", Weather.Stormy);

getWeather(localWeather);
