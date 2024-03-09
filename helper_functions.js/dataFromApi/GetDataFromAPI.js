export async function get_weather_data(query){
  let weatherData = await fetch(`${process.env.NEXT_PUBLIC_WEATHER_API_URL}/data/2.5/forecast?q=${query}&appid=${process.env.NEXT_PUBLIC_WEATHER_API_ID}`);
  const res = await weatherData.json();
  //console.log('server');
  return res;
}

export function getWeeklyData(data){

  const currentDate = new Date();
  const dates = [];

  for (let i = 0; i < 6; i++) {
    const nextDate = new Date(currentDate);
    nextDate.setDate(currentDate.getDate() + i);
    const formattedDate = nextDate.toISOString().split('T')[0].slice(2); // Extract YYYY-MM-DD and remove the first two characters (year part)
    dates.push(formattedDate);
  }

  let weeklydata = [];

  if (data){
    for (let i = 0; i < dates.length; i++){
      let test = data.list.find((sData) => sData.dt_txt.includes(dates[i]));
      weeklydata.push(test);
    }
  }
  //console.log(weeklydata)
  return weeklydata;
}