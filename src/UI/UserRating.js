import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import DirectionsCarFilledIcon from '@mui/icons-material/DirectionsCarFilled';
import RoomIcon from '@mui/icons-material/Room';
import './Common.css'


function UserRating() {
  return (
      <div className='rating_sec'>
          <div className='rating_icon'>
              <StarIcon />
              <i><p>4.5</p></i>
          </div>
          <div className='rating_icon'>
              <DirectionsCarFilledIcon />
              <i><p>1350.00</p></i>
          </div>
          <div className='rating_icon'>
              <RoomIcon />
              <i><p>Kerala</p></i>
          </div>
    </div>
  )
}

export default UserRating