export default function AboutPage() {
  return (
    <div className="max-w-xl mx-auto space-y-4">
      <h1 className="text-2xl font-bold">About Weatherly</h1>
      <p>
        Weatherly is a simple weather application built with{" "}
        <strong>Next.js</strong> and <strong>Tailwind CSS</strong>. It uses the{" "}
        <a
          href="https://openweathermap.org/api"
          target="_blank"
          className="text-blue-600 underline"
        >
          OpenWeather API
        </a>{" "}
        to fetch real-time weather data.
      </p>
      <ul className="list-disc list-inside">
        <li>Check current weather by location</li>
        <li>Search weather by city</li>
        <li>Store and view search history</li>
        <li>See detailed weather conditions</li>
      </ul>
    </div>
  );
}
