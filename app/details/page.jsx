import React from "react";
import WeatherComponent from "@/components/WeatherComponent";

const Page = async ({ searchParams }) => {
  const city=  searchParams.city

  return (
    <div>
      <WeatherComponent city={city} />
    </div>
  );
};

export default Page;
