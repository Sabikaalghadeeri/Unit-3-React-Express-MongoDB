import React from 'react'

function BedRoom(props) {
  return (
    <div>
      {/* to call the func using props */}
      BedRoom
      {props.bedNum}
    </div>
  )
}

export default BedRoom