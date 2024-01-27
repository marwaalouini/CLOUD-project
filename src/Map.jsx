import React from "react";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const SimpleMap = () => {
  const defaultProps = {
    center: {
      lat: 35.8491766,
      lng: 10.5863952
    },
    zoom: 11
  };

  return (

       <div style={{ height: '70vh', width: '37%', marginTop:"8%", marginLeft:"26%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBB9B-Rk8go54u0Ty2z-gNS28IhIQbG_lg" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        
      </GoogleMapReact>

      {/* <Link to="/Navbar"> Back</Link> */}

    </div>
  );
}

export default SimpleMap;
