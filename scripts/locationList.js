// File to handle the rendering of the location list

import { getLocationsDatabase } from "./aquariumData.js";

export const locationList = () => {
    const locationDatabase = getLocationsDatabase()

    let locationListHTML = '<h1>Locations</h1>'
    for (const location of locationDatabase) {
        locationListHTML += `
            <article class="locations">
                <section class="location">
                    <h2>${location.name}, ${location.country}</h2>
                    <p>${location.description}</p>
                </section>
            </article>
        `
    }
    return locationListHTML
}