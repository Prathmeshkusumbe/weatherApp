import React, { useEffect, useState } from 'react'
import SearchCity from './SearchCity'
import { currenDayTime, getImgFromUnsplash, getWdata, get_current_temp } from '@/helper_functions.js/dataFromApi/get_current_temp';
import { useSelector } from 'react-redux';

function LeftSideWeatherInfo({wData, city}) {

  const {unit} = useSelector((state)=> state.chat);
  let dayTime = currenDayTime();
  let current_temp = '';
  let wDataD = {wIcon:'', desc:''};
  const [cityImg, setCityImg] = useState('');
  if (wData){
    current_temp = get_current_temp(wData.list[0], unit);
    wDataD = getWdata(wData.list[0])
  }
  let { wIcon, desc } = wDataD;

  useEffect(()=>{
    getCityImg();
  }, [city]);
  async function getCityImg(){
    let res = await getImgFromUnsplash(city);
    setCityImg(res);
  }

  return (
    <div className='bg-white rounded-l-3xl shadow pl-4 pr-4'>
      <SearchCity />
      <div className='mt-4 text-center'>
        {wData ? <img className='inline-block' src={`${process.env.NEXT_PUBLIC_WEATHER_IMG_URL}/${wIcon}@2x.png`} />
        :
          <div className='h-[100px] flex items-center' ><div className='animate-pulse w-[220px] bg-slate-400 h-4' ></div></div>}
      </div>
      {wData ?
      <div className='mt-2 flex'>
        <span className='text-5xl'>{current_temp}</span>
        <span className='flex'><span>o</span><span className='text-4xl'>c</span></span>
      </div>
      :
      <div className='bg-slate-400 pt-3 pl-2 h-[48px]'>
          <div className='bg-slate-600 animate-pulse w-[75px] rounded-xl h-[10px]'></div>
          <div className='bg-slate-600 animate-pulse rounded-xl w-[75px] mt-2 h-[10px]'></div>
      </div>
      }
      <div className='mt-6 mb-6'>
        <p className='border-b-2 pb-7'>{dayTime}</p>
      </div>
      { wData ?
      <div className='mt-5 flex items-center'>
        <div className='text-center'>
          <img className='inline-block' src={`${process.env.NEXT_PUBLIC_WEATHER_IMG_URL}/${wIcon}.png`} />
        </div>
        <div>{desc}</div>
      </div>
      :
        <div className=" w-full mx-auto">
          <div className="animate-pulse flex items-center space-x-4">
            <div className="rounded-full bg-slate-700 h-5 w-5"></div>
            <div className="flex-1 space-y-6 py-1">
              <div className="h-2 w-1/2   bg-slate-700 rounded"></div>
            </div>
          </div>
        </div>
    }
      {wData ?
        <div className='mt-3 pb-8'>
          <div className='mt-4  relative'>
            <img className='rounded-xl  w-full max-h-[220px]' src={cityImg} alt='city img' />
            <div className='bg-slate-900/[0.6] rounded-xl text-center absolute inset-0 flex items-center justify-center text-slate-100'>{city}</div>
          </div>
        </div>

    :
      <div className='pb-8'><div className='mt-3  w-full animate-pulse h-[150px] bg-slate-700'></div></div>
    }
    </div>
  )
}

export default LeftSideWeatherInfo