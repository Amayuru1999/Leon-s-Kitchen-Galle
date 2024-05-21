import React, { useRef, useState } from "react";
import { connect } from "react-redux"; 
import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  DirectionsRenderer,
  Autocomplete,
} from "@react-google-maps/api";
import { FaLocationArrow, FaTimes } from "react-icons/fa";
import axios from "axios";
const center = { lat: 6.065240291148039, lng: 80.2352684881948 };
const predefinedOrigin = { lat: 6.065240291148039, lng: 80.2352684881948 }; // Set your predefined origin address here

function Map({ user }) {
  const REACT_APP_GOOGLE_MAPS_API_KEY =
    "AIzaSyD-dc1gOI7HwWAI8-6LVeIJm2yyRBbJoVU";
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries: ["places"],
  });

  const [map, setMap] = useState(null);
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [distance, setDistance] = useState("");
  const [duration, setDuration] = useState("");
  const originRef = useRef(predefinedOrigin); // Set the initial value for originRef
  const destinationRef = useRef();
  const userEmail = user.email; // Replace with user's email
  
  // Function to save the destination to backend
  async function saveDestination() {
    try {
      const destination = destinationRef.current.value;
      // Send a POST request to your backend endpoint /save-destination
      await axios.post("http://localhost:5000/user/save-destination", { email: userEmail, destination });
      alert("Destination saved successfully!");
    } catch (error) {
      console.error("Error saving destination:", error);
      alert("Failed to save destination. Please try again later.");
    }
  }

  async function calculateRoute() {
    if (originRef.current.value === "" || destinationRef.current.value === "") {
      return;
    }
    const directionsService = new window.google.maps.DirectionsService();
    const results = await directionsService.route({
      origin: predefinedOrigin,
      destination: destinationRef.current.value,
      travelMode: window.google.maps.TravelMode.DRIVING,
    });
    setDirectionsResponse(results);
    setDistance(results.routes[0].legs[0].distance.text);
    setDuration(results.routes[0].legs[0].duration.text);
  }

  function clearRoute() {
    setDirectionsResponse(null);
    setDistance("");
    setDuration("");
    originRef.current.value = predefinedOrigin; // Reset to predefined origin
    destinationRef.current.value = "";
  }

  function getCurrentLocation() {
    if (navigator.geolocation) {
      // Request the user's location with high accuracy
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const currentLocation = { lat: latitude, lng: longitude };
          const geocoder = new window.google.maps.Geocoder();
  
          geocoder.geocode({ location: currentLocation }, (results, status) => {
            if (status === "OK" && results[0]) {
              const formattedAddress = results[0].formatted_address;
              destinationRef.current.value = formattedAddress;
            } else {
              alert("Geocoder failed due to: " + status);
            }
          });
        },
        (error) => {
          // Handle different geolocation errors
          switch (error.code) {
            case error.PERMISSION_DENIED:
              alert("User denied the request for Geolocation.");
              break;
            case error.POSITION_UNAVAILABLE:
              alert("Location information is unavailable.");
              break;
            case error.TIMEOUT:
              alert("The request to get user location timed out.");
              break;
            case error.UNKNOWN_ERROR:
              alert("An unknown error occurred.");
              break;
          }
        },
        {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 0,
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }
  
  
  
  

  return (
    <>
      {isLoaded ? (
        <div style={{ position: "relative", height: "100vh", width: "100vw" }}>
          <GoogleMap
            center={center}
            zoom={15}
            mapContainerStyle={{ width: "100%", height: "100%" }}
            options={{
              zoomControl: false,
              streetViewControl: false,
              mapTypeControl: false,
              fullscreenControl: false,
            }}
            onLoad={(map) => setMap(map)}
          >
            <Marker position={center} />
            {directionsResponse && (
              <DirectionsRenderer directions={directionsResponse} />
            )}
          </GoogleMap>
          <div
            style={{
              position: "absolute",
              top: "30%",
              left: "20%",
              transform: "translate(-50%, -50%)",
              padding: "20px",
              backgroundColor: "white",
              borderRadius: "8px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            }}
          >
            
            <Autocomplete
              onLoad={(autocomplete) => (destinationRef.current = autocomplete)}
              onPlaceChanged={() => {
                const place = destinationRef.current.getPlace();
                destinationRef.current.value = place.formatted_address;
              }}
            >
              <input
                type="text"
                placeholder="Destination"
                ref={destinationRef}
                style={{ padding: "8px", marginBottom: "8px" }}
              />
            </Autocomplete>
            <button
              className="bg-orange-600_cc border border-black-1900_1c border-solid flex flex-row items-center justify-between p-4 rounded-lg cursor-pointer"
              onClick={calculateRoute}
              style={{ padding: "8px", marginBottom: "8px" }}
            >
              Calculate Route
            </button>
            <button
              className="bg-orange-600_cc border border-black-1900_1c border-solid flex flex-row items-center justify-between p-4 rounded-lg cursor-pointer"
              onClick={clearRoute}
              style={{ padding: "8px", marginBottom: "8px" }}
            >
              Clear Route
            </button>
            <button
              className="bg-orange-600_cc border border-black-1900_1c border-solid flex flex-row items-center justify-between p-4 rounded-lg cursor-pointer"
              onClick={getCurrentLocation}
              style={{ padding: "8px", marginBottom: "8px" }}
            >
              Use Current Location
            </button>
            <div>
              <span
                className="bg-orange-600_cc border border-black-1900_1c border-solid flex flex-row items-center justify-between p-4 rounded-lg cursor-pointer"
                style={{ padding: "8px", marginBottom: "8px" }}
              >
                Distance: {distance}
              </span>
              <span
                className="bg-orange-600_cc border border-black-1900_1c border-solid flex flex-row items-center justify-between p-4 rounded-lg cursor-pointer"
                style={{ padding: "8px", marginBottom: "8px" }}
              >
                Duration: {duration}
              </span>
            </div>
            <div>
        <button
          className="bg-orange-600_cc border border-black-1900_1c border-solid flex flex-row items-center justify-between p-4 rounded-lg cursor-pointer"
          onClick={saveDestination}
          style={{ padding: "8px", marginBottom: "8px" }}
        >
          Save Destination
        </button>
      </div>

            {map && (
              <button
                onClick={() => {
                  map.panTo(center);
                  map.setZoom(15);
                }}
              >
                Center Map
              </button>
            )}
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
}
const mapStateToProps = ({ session }) => ({
  user: session.user,
});
export default connect(mapStateToProps)(Map);
