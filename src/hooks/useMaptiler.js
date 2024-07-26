import { useRef, useEffect } from 'react';
import * as maptilersdk from '@maptiler/sdk';
import "@maptiler/sdk/dist/maptiler-sdk.css";

const useMaptiler = (longitude, latitude, zoomLevel) => {
    const mapContainerRef = useRef(null);
    const mapInstanceRef = useRef(null);

    useEffect(() => {
        const initializeMap = () => {
            if (mapContainerRef.current && longitude !== null && latitude !== null) {
                maptilersdk.config.apiKey = 'rDQKiXzhy1SogQrxYhW6';
                
                mapInstanceRef.current = new maptilersdk.Map({
                    container: mapContainerRef.current,
                    style: maptilersdk.MapStyle.STREETS,
                    center: [longitude, latitude],
                    zoom: zoomLevel,
                });

                new maptilersdk.Marker({ color: "#1E3A8A" })
                    .setLngLat([longitude, latitude])
                    .addTo(mapInstanceRef.current);
            }
        };

        initializeMap();

        return () => {
            if (mapInstanceRef.current) {
                mapInstanceRef.current.remove();
            }
        };
    }, [longitude, latitude, zoomLevel]);

    return mapContainerRef;
};

export default useMaptiler;
