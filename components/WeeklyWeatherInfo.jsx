import React from 'react'
import Card from './ui/Card'
import { dayfromDate } from '@/helper_functions.js/getDayFromDate';
import {  tempIndegree } from '@/helper_functions.js/dataFromApi/get_current_temp';
import WeeklyWeatherSkeleton from './WeeklyWeatherSkeleton';
import { useSelector } from 'react-redux';

function WeeklyWeatherInfo({ weeklyData }) {

  const {unit} = useSelector((state)=> state.chat);
  const day = dayfromDate('2024-03-08 09:00:00');
  return (
    (weeklyData.length == 0) ? <WeeklyWeatherSkeleton /> :
    <div className='flex flex-wrap pt-8 gap-2 justify-center text-center'>
      {weeklyData.map((data, i)=>
        <Card key={i} classes='bg-white  pl-4 pr-4'>
          <div className='pt-3 text-sm'>{dayfromDate(data.dt_txt,1)}</div>
          <div><img src={`${process.env.NEXT_PUBLIC_WEATHER_IMG_URL}/${data.weather[0].icon}.png`} /></div>
          <div className='pb-3 text-sm'>{tempIndegree(data.main.temp, unit)}<sup>o</sup></div>
        </Card>
      )}
    </div>

  )
}

export default WeeklyWeatherInfo