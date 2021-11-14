import React from "react";
import tw from "tailwind-styled-components";
import mapboxgl from "!mapbox-gl";
import { useEffect } from "react";

mapboxgl.accessToken =
  "pk.eyJ1IjoibXVzdGFmYWVyc295eCIsImEiOiJja3Z6NW94NmMyYnk4MnZtOWVnc3dqb296In0.NSpeF8wSGWVbIOsONLqD9A";

const Map = () => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11",
      zoom: 2,
    });
  });

  return <Wrapper id="map"></Wrapper>;
};

export default Map;

const Wrapper = tw.div`
flex-1
`;
