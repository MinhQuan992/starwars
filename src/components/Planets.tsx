import React, { useState } from "react";
import { useQuery } from "react-query";
import PlanetDetail from "./PlanetDetail";

const fetchPlanets = async (page: string | number) => {
  const res = await fetch(`https://swapi.dev/api/planets/?page=${page}`);
  return res.json();
};

const Planets: React.FC = () => {
  const [page, setPage] = useState(1);

  const { data, status } = useQuery(
    ["planets", page],
    () => fetchPlanets(page),
    {
      keepPreviousData: true,
    }
  );

  return (
    <div>
      <h2>Planets</h2>

      {status === "loading" && <div>Loading...</div>}

      {status === "error" && <div>Error fetching data</div>}

      {status === "success" && (
        <>
          <button
            onClick={() => setPage((old) => Math.max(old - 1, 1))}
            disabled={page === 1}
          >
            Previous Page
          </button>
          <span>{page}</span>
          <button
            onClick={() =>
              setPage((old) => (!data || !data.next ? old : old + 1))
            }
            disabled={!data || !data.next}
          >
            Next Page
          </button>
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
        </>
      )}
    </div>
  );
};

export default Planets;
