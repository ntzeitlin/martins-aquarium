// File to handle the rendering of the fish list

import { getFishDatabase } from "./aquariumData.js";

export const constructFishList = (fishListArray) => {
    // Generate an HTML representation of each fish
    let fishListHTML = ''
    for (const fishObject of fishListArray) {
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

export const mostHolyFish = () => {
    const fishDatabase = getFishDatabase()
    let holyFish = []
    for (const fishObject of fishDatabase) {
        if (fishObject.length % 5 === 0) {
            holyFish.push(fishObject)
        }
    }
    holyFish = constructFishList(holyFish)
    return holyFish
}

export const soldierFish = () => {
    const fishDatabase = getFishDatabase()
    let soldierFish = []
    for (const fishObject of fishDatabase) {
        if (fishObject.length % 3 === 0 && fishObject.length % 5 != 0) {
            soldierFish.push(fishObject)
        }
    }
    soldierFish = constructFishList(soldierFish)
    return soldierFish
}

export const regularFish = () => {
    const fishDatabase = getFishDatabase()
    let regularFish = []
    for (const fishObject of fishDatabase) {
        if (fishObject.length % 3 != 0 && fishObject.length % 5 != 0) {
            regularFish.push(fishObject)
        }
    }
    regularFish = constructFishList(regularFish)
    return regularFish
}