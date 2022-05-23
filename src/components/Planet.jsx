import Icon from './Icon';
import Info from './Info';
import Stats from './Stats';
import React, { useEffect, useState } from "react";
import {useParams} from "react-router-dom"

const Planet = () => {
  const params = useParams()
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [planet, setPlanet] = useState(null);
  const [planetState, setPlanetState] = useState("overview")

  useEffect(() => {
  
    fetchData(planet);
    
  },[params]);

  
  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://api.mocki.io/v2/a20ae30b/planets/${params.planetName}`
      );
      const data = await response.json();
      setPlanet(data);
      setPlanetState("overview")
      setLoading(false);
      
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  };

  if (loading) return <p>LOADING...</p>;

  if (error) {
    return <h1>Ooops! Error!</h1>;
  }

// const [image, setImage] = useState();

// setImage(props.image)

  return (
    <div className="grid grid-rows-3 grid-cols-4">
      <Icon images={planet.images} planetState={planetState}/>
      <Info name={planet.name} description={planet} setPlanetState={setPlanetState} planetState={planetState}/>
      <Stats rotation={planet.rotation} revolution={planet.revolution} radius={planet.radius} temperature={planet.temperature}/>
      
    </div>
  );
};

export default Planet;