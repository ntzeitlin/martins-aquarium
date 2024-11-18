import { mostHolyFish, soldierFish, regularFish } from './fishList.js'
import { tipList } from './tipList.js'
import { locationList } from './locationList.js'

// Generate the fish list
// const fishHTML = fishList()

// Generate the care tips
const tipHTML = tipList()

// Generate the location list
const locationHTML = locationList()

const holyFishHTML = mostHolyFish()
const soldierFishHTML = soldierFish()
const regularFishHTML = regularFish()

// Render each HTML string to the correct DOM element
// TODO: move this section to a render module
const fishListElement = document.getElementById("fishList")
if (fishListElement) {
    // fishListElement.innerHTML = fishHTML
    fishListElement.innerHTML += `${holyFishHTML}${soldierFishHTML}${regularFishHTML}`
} else {
    console.error('Could not find element with id "fishList"');
}

const tipsElement = document.getElementById("tipList")
if (tipsElement) {
    tipsElement.innerHTML += tipHTML
} else {
    console.error('Could not find element with id "tipList"');
}

const locationElement = document.getElementById("locationList")
if (locationElement) {
    locationElement.innerHTML += locationHTML
} else {
    console.error('Could not find element with id "locationList"')
}