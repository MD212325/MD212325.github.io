'use strict';

const api_key = 'b2fdc4135cb2f653b9075e99ab2b2ad9';

/**
 * Fetch data from server
 * @param {string} URL API url
 * @param {Function} callback callback
 */

export const fetchData = function(URL, callback) {
    fetch(`${URL}&appid=${api_key}`)
    .then(res => res.json())
    .then(data => callback(data));
}

export const url = {
    currentWeather(lat, lon) {
        return `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric`;
    },
    forecast(lat, lon) {
        return `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric`
    },
    airPollution(lat, lon) {
        return `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}`
    },
    /**
     * @param {string} query Search query e.g.: "Manila", "Baras", "Tanay"
     */
    geo(query) {
        return `https://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5`
    }
}

export const reverseGeoUrl = {
    reverseGeo(lat, lon) {
        /* return `https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=5` */
        return `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lon}&address_only=1&key=3dbb9f2e6fad46c2a641a5aeae1ca72b`
    }
}