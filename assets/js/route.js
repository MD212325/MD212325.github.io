'use strict';

import { updateWeather, error404 } from "./app.js";
const defaultLocation = "#/weather?lat=14.5234&lon=121.2651"

const currentLocation = function () {
    window.navigator.geolocation.getCurrentPosition(res => {
        const { latitude, longitude } = res.coords;
        updateWeather(latitude, longitude); // Pass as separate numbers
    }, err => {
        window.location.hash = defaultLocation;
    });
};

/**
 * @param {string} query Searched query
 */
const searchedLocation = query => {
    const params = new URLSearchParams(query);
    const lat = parseFloat(params.get("lat"));
    const lon = parseFloat(params.get("lon"));
    updateWeather(lat, lon);
};


const routes = new Map([
    ["/current-location", currentLocation],
    ["/weather", searchedLocation]
]);

const checkHash = function () {
    const resquestURL = window.location.hash.slice(1);

    const [route, query] = resquestURL.includes ? resquestURL.split("?") : [resquestURL];

    routes.get(route) ? routes.get(route)(query) : error404();
}

window.addEventListener("hashchange", checkHash);

window.addEventListener("load", function () {
    if(!window.location.hash) {
        window.location.hash = "#/current-location";
    } else {
        checkHash();
    }
});