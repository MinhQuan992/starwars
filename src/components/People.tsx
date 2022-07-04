import React from "react";
import { useQuery } from "react-query";
import PersonDetail from "./PersonDetail";

const fetchPeople = async () => {
  const res = await fetch("https://swapi.dev/api/people/");
  return res.json();
};

const People: React.FC = () => {
  const { data, status } = useQuery("people", fetchPeople);
  console.log(data);
  return (
    <div>
      <h2>People</h2>

      {status === "loading" && <div>Loading...</div>}

      {status === "error" && <div>Error fetching data</div>}

      {status === "success" && (
        <div>
          {data.results.map((person: any) => (
            <PersonDetail
              key={person.name}
              name={person.name}
              gender={person.gender}
              birth_year={person.birth_year}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default People;
