import React from "react";
import { useParams } from "react-router";

const Details = () => {
  const { serviceId } = useParams();

  return (
    <div>
      <h3>Details{serviceId}</h3>
    </div>
  );
};

export default Details;
