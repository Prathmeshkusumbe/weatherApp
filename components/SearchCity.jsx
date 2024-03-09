import React, { useEffect, useState } from 'react'
import { Icon } from '@iconify/react';
import { searchCityApi } from '@/helper_functions.js/searchCityAPI';
import { useDispatch } from 'react-redux';
import { setCity } from './store';

function SearchCity() {

  const dispatch = useDispatch();
  const [query, setQuery] = useState('');

  const [cityRes, setCityRes] = useState('');
  const [delayTime , setDelayTime] = useState('');
  const [searchInProcess, setSearchInProcess] = useState(false);

  function handleCitySearch(e){
    setSearchInProcess(true);
    clearTimeout(delayTime)
    setQuery(e.target.value);


    if (e.target.value.length > 1){

      setDelayTime(setTimeout(() => {
        getCityByApi(e.target.value)
      },500));
    }
    else{
      clearTimeout(delayTime);
      setCityRes('');
      console.log('set q2', query)
      setSearchInProcess(false);
    }

  }

  function updateCity(city){
    console.log('test')
    dispatch(setCity(city))
  }

  async function getCityByApi(q){
    clearTimeout(delayTime);
    let res = await searchCityApi(q);
    setSearchInProcess(false);
    if (query){
      setCityRes(res);
    }
  }





  return (
    <div className='pt-8' >
      <div className='h-8 items-center pl-3 flex bg-slate-200 rounded-full'>
        <Icon className='w-5 h-5' icon="material-symbols-light:search" />
        <input onChange={handleCitySearch} className='outline-0 bg-transparent' placeholder='Search for Places...'/>
      </div>

      {searchInProcess ? SearchProcessSkeleton() :
        cityRes && Array.isArray(cityRes) && cityRes.length > 0 ?
          <div className=' bg-slate-200 rounded mt-1 pl-2 text-sm pt-2 pb-2'>
            {cityRes.map((city, i) =>
              <div key={i} onClick={()=>updateCity(city.name)} className='cursor-pointer'>{city.name}</div>
            )}
          </div>
          : Array.isArray(cityRes)   ?
            <div className=' bg-slate-200 rounded mt-1 pl-2 text-sm pt-2 pb-2'>
              <div >no result found</div>
            </div> : ''
      }
    </div>

  )
}

export default SearchCity

function SearchProcessSkeleton(){
  return(
    <div className='bg-slate-200 animate-pulse rounded mt-1 pl-2 pr-2 pt-2 pb-2'>
      <div className='bg-slate-700 rounded mt-1 h-2'></div>
      <div className='bg-slate-700 rounded mt-2 h-2'></div>
      <div className='bg-slate-700 rounded mt-2 h-2'></div>
    </div>
  )
}