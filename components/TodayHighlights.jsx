import React from 'react'
import Card from './ui/Card'
import { getDataFromWdata } from '@/helper_functions.js/dataFromApi/get_current_temp';
import { useSelector } from 'react-redux';

function TodayHighlights({wData}) {

  const { unit } = useSelector((state)=> state.chat);

  let wDataD = { windSpeed: '', humidity:'', visibility:'', temp_min:'', temp_max:''};
  if (wData) {
    wDataD = getDataFromWdata(wData.list[0], unit)
  }
  let { windSpeed, humidity, visibility, temp_max, temp_min } = wDataD;

  return (
    <div className='pt-8'>
      <h4>TodayHighlights</h4>
      <div className='pt-3'>
        <div className='flex flex-wrap'>
          <div className='px-2 pt-3 basis-1/3'>
            <Card classes='bg-white'>
              {highlight('wind status', windSpeed, 'km/h', 'wsw')}
            </Card>
          </div>
          <div className='px-2 pt-3 basis-1/3'>
            <Card classes='bg-white'>
              {highlight('Humidity', humidity, '%', 'Normal')}
            </Card>
          </div>
          <div className='px-2 pt-3 basis-1/3'>
            <Card classes='bg-white'>
              {highlight('Visibility', visibility, 'm', 'Averrage')}
            </Card>
          </div>
          <div className='px-2 pt-3 basis-1/3'>
            <Card classes='bg-white'>
              {highlight('Max Temp', temp_max, 'oc', '',1)}
            </Card>
          </div>
          <div className='px-2 pt-3 basis-1/3'>
            <Card classes='bg-white'>
              {highlight('Min Temp', temp_min, 'oc', '',1)}
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TodayHighlights

function highlight(key, value, unit, bt, sp){
  return(
    <div className='pl-4 pr-4 pt-2'>
      <p className='text-slate-400'>{key}</p>
      {value ? <h2 className='pt-3 pb-2 text-3xl'>{value}{sp ? <sup className=''>{unit}</sup> : <span className='text-sm'>{unit}</span>}</h2> : <div className='pt-3 pb-2  '><div className='pt-4 pl-2 pr-2 bg-slate-800 w-15 h-10 animate-pulse'>
        <h2 className='rounded bg-slate-700 h-2'></h2></div></div>}
      <div className='pb-3'>{bt}</div>
    </div>
  )

}