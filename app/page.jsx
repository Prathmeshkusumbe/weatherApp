'use client'
import LeftSideWeatherInfo from "@/components/LeftSideWeatherInfo";
import RightSideWeatherInfo from "@/components/RightSideWeatherInfo";
import {  setWData } from "@/components/store";
import { get_weather_data } from "@/helper_functions.js/dataFromApi/GetDataFromAPI";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {

  const dispatch = useDispatch();
  const  {wData, city}  = useSelector((state) => state.chat);

  //const city = 'mumbai,maharashtra,in';

  async function feth_weather_info(city) {
    let res = await get_weather_data(city);
    dispatch(setWData(res));
  }

  useEffect(()=>{
    feth_weather_info(city);
  }, [city])


  return (
    <main className="pt-10 pb-20 bg-slate-100">
      <div className="flex justify-center flex-wrap max-w-[850px] ml-auto mr-auto">
        <div className="left-side sm:basis-[30%] basis-[100%]">
          <LeftSideWeatherInfo wData={wData} city={city}/>
        </div>
        <div className="bg-zinc-200 sm:basis-[70%] basis-[100%] pl-5 pr-5 p-5">
          <RightSideWeatherInfo wData={wData} />
        </div>
      </div>
    </main>
  );
}
