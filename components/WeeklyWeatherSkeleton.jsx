import React from 'react'
import Card from './ui/Card'

function WeeklyWeatherSkeleton() {
  const weeklyData = [1,2,3,4,5,6]
  return (
    <div className='flex pt-8 gap-2'>
      {weeklyData.map((data, i) =>
        <Card key={i} classes='animate-pulse w-[71px]  h-[103px] bg-slate-700  pl-4 pr-4'>
        </Card>
      )}
    </div>
  )
}

export default WeeklyWeatherSkeleton