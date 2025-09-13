import axios from "axios";
import { NextResponse } from "next/server";

const API_KEY = process.env.OPENWEATHER_API_KEY;
export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const city = searchParams.get("city");

  if (!city) {
    return new Response(JSON.stringify({ error: "City is required" }), {
      status: 400,
    });
  }

  

  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    return new Response(JSON.stringify(response.data), { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: "Failed to fetch weather" }, {
      status: 500,
    })
  }
}