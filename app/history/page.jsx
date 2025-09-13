"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

export default function HistoryPage() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const getCities=async()=>{
        axios.get("/api/searches")
    const cities=JSON.parse(localStorage.getItem('cities')||'[]')
    setHistory(cities)
    }

    getCities()
  }, []);

  return (
    <div className="max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Search History</h1>
      {history.length === 0 ? (
        <p>No searches yet.</p>
      ) : (
        <ul className="space-y-2">
          {history.map((item, i) => (
            <li key={i}>
              <Link
                href={`/details?city=${item}`}
                className="text-blue-600 underline uppercase "
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}