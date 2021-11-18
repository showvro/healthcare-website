import React, { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import Service from "../Service/Service";

const Home = () => {
  //use Services
  const [services, setServices] = useState([]);

  //useEffect Fucntion
  useEffect(() => {
    fetch("./services.json")
      .then((res) => res.json())
      .then((service) => setServices(service));
  }, []);

  //return Home Div Elements
  return (
    <div className="container mx-auto">
      <Banner />
      <div className="mt-16 mb-20">
        <h1 className="text-2xl text-black font-bold border-b-4 rounded-r rounded-l border-black my-10 sm:w-4/12 lg:w-2/12 mx-auto">
          Our Specialist
        </h1>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5">
          {services.map((service) => (
            <Service key={service.key} service={service}></Service>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
