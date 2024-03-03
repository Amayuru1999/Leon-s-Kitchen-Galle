import React from "react";
import { Wrapper } from "@googlemaps/react-wrapper";

const Map = ({ center, zoom, markers, ...props }) => {
  const ref = React.useRef(null);
  const [map, setMap] = React.useState();

  React.useEffect(() => {
    if (ref.current && !map) {
      setMap(new window.google.maps.Map(ref.current, { center, zoom }));
    }
  }, [ref, map, center, zoom]);

  React.useEffect(() => {
    markers?.forEach((markerData) => {
      const newMarker = new window.google.maps.Marker();
      newMarker.setOptions({
        position: markerData,
        map: map,
        title: "Hello World!",
      });
    });
  }, [map, markers]);

  return <div ref={ref} id="map" {...props} />;
};

const GoogleMap = ({ children, showMarker = false, className, ...restProps }) => {
  const [currentLocation, setLocation] = React.useState({ lat: 0, lng: 0 });

  React.useEffect(() => {
    navigator?.geolocation.getCurrentPosition(({ coords: { latitude: lat, longitude: lng } }) => {
      const pos = { lat, lng };
      setLocation(pos);
    });
  }, []);

  const apiKey = process.env?.REACT_APP_GOOGLE_MAP_ID || "";

  return (
    <Wrapper apiKey={apiKey}>
      <Map
        center={currentLocation}
        zoom={3}
        className={className}
        markers={showMarker ? [currentLocation] : []}
        {...restProps}
      />
    </Wrapper>
  );
};

export { GoogleMap };
