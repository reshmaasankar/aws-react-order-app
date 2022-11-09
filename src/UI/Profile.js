import profileImage from '../assets/user.jpg';
import StarIcon from '@mui/icons-material/Star';

import './Common.css'

function Profile() {
  return (
      <div className="profile">
         <p>Steve Peter</p>
          <div className="prime">
              <p>Prime member</p>
              <div className="star">
                <StarIcon />
              </div>
          </div>
          <div className="profile-img">
              <img className='image' src={profileImage} alt="logo_image"></img>
          </div>
    </div>
  )
}

export default Profile