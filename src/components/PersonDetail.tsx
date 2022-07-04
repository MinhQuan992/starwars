import React from "react";

interface PersonDetailProps {
  name: string;
  gender: string;
  birth_year: string;
}

const PersonDetail: React.FC<PersonDetailProps> = ({
  name,
  gender,
  birth_year,
}) => {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>Gender - {gender}</p>
      <p>Birth year - {birth_year}</p>
    </div>
  );
};

export default PersonDetail;
