import React from 'react'
import Kitchen from '../Kitchen/Kitchen'
import LivingRoom from '../LivingRoom/LivingRoom'
import BedRoom from '../BedRoom/BedRoom'
import Bath from '../Bath/Bath'

function FloorPlan() {
  return (
    <div>

    <Kitchen/>
    <LivingRoom/>
    {[1,2,3].map(num=>
      <BedRoom bedNum={num} />
      )}
      {/* or I can use this one */}
    {/* <BedRoom bedNum={1} />
    <BedRoom bedNum={2} />
    <BedRoom bedNum={3} /> */}
    <Bath size={'Half'}/>
    <Bath size={'Full'}/>
  </div>
  )
}

export default FloorPlan