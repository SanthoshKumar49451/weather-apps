"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function GetCurrent() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();



 
  const getCityWeather = async (e) => {
    if (e) e.preventDefault();
    if (!city) {
      toast.warning("search a city")
      return
    }

    try {
      setLoading(true);
      const res = await axios.get(`/api/weather?city=${city}`);

      if (res.status === 200 && res.data) {
        setWeather(res.data);
        toast.success("done")
      } else {
        toast.error('City not found. Please try again.')
        return;
      }

      
      try {
        let cities = JSON.parse(localStorage.getItem("cities") || "[]");
        if (!cities.includes(city)) {
          cities.push(city);
        }
        localStorage.setItem("cities", JSON.stringify(cities));
      } catch (storageErr) {
        console.error("LocalStorage error:", storageErr);
      }

    
      try {
        await axios.post("/api/search", { city });
      } catch (postErr) {
        console.error("Search save error:", postErr);
      }
    } catch (err) {
      console.error(err);
      toast.error('Failed to fetch weather. Please try again later.')
    } finally {
      setLoading(false);
    }
  };

  // Get current location weather
  const getCurrentWeather = () => {
    if (!navigator.geolocation) {
      toast.warning('Geolocation not supported by your browser')
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const { latitude, longitude } = pos.coords;
        try {
          setLoading(true);
          const res = await axios.get(
            `/api/weather/current?lat=${latitude}&lon=${longitude}`
          );

          if (res.status === 200 && res.data?.data) {
            setWeather(res.data.data);
            toast.success("success")
          } else {
            toast.error('Unable to fetch current location weather.')
          }
        } catch (err) {
          console.error(err);
         toast.error('Something went wrong while fetching location weather.')
        } finally {
          setLoading(false);
        }
      },
      (err) => {
        console.error(err);
        toast.warning('Permission denied or unable to get location.')
      }
    );
  };

  useEffect(() => {
    try {
      getCurrentWeather();
    } catch (err) {
      console.error(err);
      toast.error('Failed to initialize location weather.')
    }
  }, []);

  return (
    <div className="max-w-xl mx-auto space-y-6 relative">
      <h1 className="text-2xl font-bold">Check Weather</h1>

      <form onSubmit={getCityWeather} className="flex gap-2">
        <input
          className="flex-1 border rounded px-3 py-2"
          placeholder="Enter city..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          {loading ? "Loading..." : "Search"}
        </button>
      </form>

    
      {/* Display weather */}
      {weather && (
        <div
          onClick={() => router.push(`/details?city=${weather.name}`)}
          className="cursor-pointer mt-4 p-4 border rounded bg-blue-50"
        >
          <h2 className="text-xl font-semibold">{weather.name}</h2>
          <p>
            {weather.main.temp}°C, {weather.weather[0].description}
          </p>
        </div>
      )}
    </div>
  );
}






