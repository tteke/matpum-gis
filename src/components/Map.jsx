import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'

export default function Map() {
  async function handleButtonClick() {
    const response = await fetch('/api/data', { method: 'GET' });
    const result = await response.text();

    console.log(result);
  };

  const position = [51.505, -0.09];

  return (
    <div className="h-screen">
      <MapContainer className="h-full" center={position} zoom={13} scrollWheelZoom={false}> <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}
