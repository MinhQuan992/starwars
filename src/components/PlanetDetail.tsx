import React from "react";

interface PlanetDetailProps {
  name: string;
  population: string;
  terrain: string;
}

const PlanetDetail: React.FC<PlanetDetailProps> = ({
  name,
  population,
  terrain,
}) => {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>Population - {population}</p>
      <p>Terrain - {terrain}</p>
    </div>
  );
};

export default PlanetDetail;
