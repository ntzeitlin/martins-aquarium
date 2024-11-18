// File to handle the rendering of the care tips

import { getTipsDatabase } from "./aquariumData.js";


export const tipList = () => {
    const tipsDatabase = getTipsDatabase()
    let tipsHTML = '<ul class="tips">'
    for (const tip of tipsDatabase) {
        tipsHTML += `
        <li class="tip"><strong>${tip.topic}:</strong> ${tip.text}</li>
        `
    }
    tipsHTML += '</ul>'

    return tipsHTML
}