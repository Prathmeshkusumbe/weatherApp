export function get_current_temp(data, unit){
  let temp = data.main.temp;
  if(unit == 'c'){
    temp = temp - 273.15; //temp in degree celcius
    temp = temp.toFixed(2); //round of the value up to 2 decimals
    //console.log(temp);
    return temp
  }
  else{
    return ((temp - 273.15) * 9 / 5 + 32).toFixed(2);
  }

}

export function tempIndegree(temp, unit){
  if(unit == 'c'){
    temp = temp - 273.15; //temp in degree celcius
    temp = temp.toFixed(2); //round of the value up to 2 decimals
    //console.log(temp);
    return temp
  }
  else{
    return ((temp - 273.15) * 9 / 5 + 32).toFixed(2);
  }

}

export function currenDayTime(){
  let currentTime = new Date();
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  let currentDay = days[currentTime.getDay()];
  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();
  let time =  `${hours < 10 ? '0' : ''}${hours}:${minutes <10 ? '0' : ''}${minutes}`;
  return currentDay + ' ' +  time;
}

export function getWdata(data){
  const wIcon = data.weather[0].icon;
  const desc = data.weather[0].description;
  return { wIcon, desc};
}

export async function getImgFromUnsplash(query){
  let res = await fetch(`${process.env.NEXT_PUBLIC_UNSPLASH_API_URL}?query=${query}&client_id=${process.env.NEXT_PUBLIC_UNSPLASH_CLIENT_ID}&per_page=1`)

  res = await res.json();
  //console.log(res);
  let link = res.results[0].urls.small;
  //console.log(link);
  return link;
}

export function getDataFromWdata(data, unit){
  let windSpeed = data.wind.speed;
  let humidity = data.main.humidity;
  let visibility = data.visibility;
  let temp_min = data.main.temp_min;
  let temp_max = data.main.temp_max;
  temp_min = tempIndegree(temp_min, unit);
  temp_max = tempIndegree(temp_max, unit)
  return { windSpeed, humidity, visibility, temp_max, temp_min }
}

//test