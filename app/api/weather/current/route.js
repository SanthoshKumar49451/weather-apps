import axios from "axios";
import { NextResponse } from "next/server";

const API_KEY = process.env.OPENWEATHER_API_KEY;

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const lat = searchParams.get("lat");
  const lon = searchParams.get("lon");

  if (!lat || !lon) {
  return NextResponse.json(
    { message: "lat and lon are required", success: false },
    { status: 400 }
  );
}

  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    );
    return NextResponse.json(
      {
        message:"Success",
        data:response.data,
        success:true

      }
    );
  } catch (err) {
    return NextResponse.json({ error: "Failed to fetch weather" }, {
      status: 500,
    })
  }
}



