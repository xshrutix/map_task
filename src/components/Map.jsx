import React, { useState, useEffect, useRef } from 'react';
import useMaptiler from '../hooks/useMaptiler';

const Map = () => {
    const [location, setLocation] = useState({ longitude: null, latitude: null });
    const zoomLevel = useRef(15);

    useEffect(() => {
        const handleSuccess = ({ coords }) => {
            setLocation({ longitude: coords.longitude, latitude: coords.latitude });
        };

        const handleError = (error) => {
            console.error("Error Location not found:", error);
        };

        navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
    }, []);

    const mapContainerRef = useMaptiler(location.longitude, location.latitude, zoomLevel.current);

    return (
        <div className="relative w-full pt-[76px]" style={{ height: 'calc(100vh - 77px)' }}>
            <div ref={mapContainerRef} className="absolute w-full h-full" />
        </div>
    );
};

export default Map;
