import React from "react";
import { useQuery } from "react-query";
import PlanetDetail from "./PlanetDetail";

const fetchPlanets = async () => {
  const res = await fetch("https://swapi.dev/api/planets/");
  return res.json();
};

const Planets: React.FC = () => {
  const { data, status } = useQuery("planets", fetchPlanets);
  console.log(data);
  return (
    <div>
      <h2>Planets</h2>

      {status === "loading" && <div>Loading...</div>}

      {status === "error" && <div>Error fetching data</div>}

      {status === "success" && (
        <div>
          {data.results.map((planet: any) => (
            <PlanetDetail
              key={planet.name}
              name={planet.name}
              population={planet.population}
              terrain={planet.terrain}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Planets;
