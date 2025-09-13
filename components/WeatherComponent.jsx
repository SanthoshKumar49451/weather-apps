"use client"

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'sonner'

const WeatherComponent = ({ city }) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    

    const getWeatherByCity = async () => {
        try {
            setLoading(true)
            const response = await axios.get('/api/weather', {
                params: { city }
            })
            console.log(response)
            if (response.status === 200) {
                setData(response.data)
                toast.success("Success")
            }
        } catch (err) {
            toast.error('Failed to fetch')
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getWeatherByCity()
    }, [city])

    console.log(data)

    if (loading) return <div className="text-gray-500">Loading...</div>
    if (!data) return null

    return (
        <div className="max-w-sm mx-auto bg-white shadow-lg rounded-xl p-6 mt-4">
            <h2 className="text-2xl font-bold mb-2"><span className='uppercase' >{city}</span></h2>
            <p className="text-gray-700 mb-1">Temperature: <span className="font-semibold">{data.main.temp}°C</span></p>
            <p className="text-gray-700 mb-1">Condition: <span className="font-semibold">{data.clouds.all}</span></p>
            <p className="text-gray-700 mb-1">Humidity: <span className="font-semibold">{data.main?.humidity}%</span></p>
            <p className="text-gray-700">Wind Speed: <span className="font-semibold">{data.wind?.speed} km/h</span></p>
        </div>
    )
}

export default WeatherComponent
