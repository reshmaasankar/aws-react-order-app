import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './MapTile.css'

function MapTile() {
     const position = [51.505, -0.09]
  return (
    <div className='MapTile'>
        <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
                <Popup>
                    This is your location.
                </Popup>
            </Marker>
        </MapContainer>
    </div>
  )
}

export default MapTile