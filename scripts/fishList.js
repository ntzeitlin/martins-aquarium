// File to handle the rendering of the fish list

import { database } from "./aquariumData.js";

export const fishList = () => {
    // Generate an HTML representation of each fish
    const fishDatabase = database.fish

    let fishListHTML = ''
    for (const fishObject of fishDatabase) {
        fishListHTML += `
            <article class="fish">
                <img src="${fishObject.image}" alt="${fishObject.name} Image" class="fish__image">
                <div class="fish__details">
                    <h2 class="fish__name">${fishObject.name}</h2>
                    <h3 class="fish__species">${fishObject.species}</h3>
                    <p class="fish__description">Located in the ${fishObject.location}, 
                    this fish is a(n) ${fishObject.diet} and has a length of ${fishObject.length} inches.</p>
                </div>
            </article>
        `
    }
    return fishListHTML
}