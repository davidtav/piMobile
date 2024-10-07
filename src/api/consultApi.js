import axios from 'axios';

export default async function getCurrentWeather(locationCoords) {
  const latitude = locationCoords.latitude;
  const longitude = locationCoords.longitude;

  let results = [];

  try {
    const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=d756d32f83fba2c6d581ff131874ede9
`);
    const data = response.data;

    const locationName = `${data.sys.country}, ${data.name}`;
    const temperatureMin = data.main.temp_min;
    const temperatureMax = data.main.temp_max;
    const wind = data.wind.speed;
    const humidity = data.main.humidity;
    const currentTemperature = data.main.temp;

    results = [currentTemperature, temperatureMin, temperatureMax, locationName, wind, humidity];
  } catch (error) {
    console.log(error);
    return [null, null, null, null, null, null];
  }

  return results;
}
