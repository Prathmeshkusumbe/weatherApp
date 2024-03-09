import React, { useState } from 'react'
import WeeklyWeatherInfo from './WeeklyWeatherInfo';
import { getWeeklyData } from '@/helper_functions.js/dataFromApi/GetDataFromAPI';
import TodayHighlights from './TodayHighlights';
import { useDispatch, useSelector } from 'react-redux';
import { setUnit } from './store';

function RightSideWeatherInfo({wData}) {

  const {unit} = useSelector((state)=> state.chat);
  const dispatch = useDispatch();

  const weeklyData = getWeeklyData(wData);

  function getClasses(val){
    let classes = (val == unit) ? 'bg-black text-white' : 'bg-white text-black';
    return classes;
  }

  function updateUnit(value){
    if (value == 'c' && unit !== 'c'){
      dispatch(setUnit('c'))
    }
    else{
      dispatch(setUnit('f'))
    }
  }

  return (
    <div className=''>
      <div className='flex gap-2 justify-end'>
        <div onClick={()=>updateUnit('c')} className={`${getClasses('c')} flex pt-1 justify-center rounded-full w-8 h-8 cursor-pointer`}>o<sub><span className='text-sm'>C</span></sub></div>
        <div onClick={() => updateUnit('c')} className={`${getClasses('f')} flex pt-1 justify-center rounded-full w-8 h-8 cursor-pointer`}>o<sub><span className='text-sm'>F</span></sub></div>
      </div>
      <WeeklyWeatherInfo weeklyData={weeklyData} />
      <TodayHighlights wData={wData}/>
    </div>
  )
}

export default RightSideWeatherInfo