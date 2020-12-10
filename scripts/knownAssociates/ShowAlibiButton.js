import { Associates } from "./Associates.js"
import { getCriminals, useCriminals, getCriminal } from "../criminals/CriminalDataProvider.js"


export const showAlibiButton = () => {
    const eventHub = document.querySelectorAll(".associateButton")
        eventHub.forEach(element => {
            element.addEventListener("click", clickEvent => {
                const criminalObject = getCriminal(clickEvent.target.id)
                const knownAssociates = JSON.stringify(criminalObject.known_associates)
                alert(knownAssociates)
                
            })
        
        
        })
}



/*
 need to alert criminal.js that button has been clicked and send the criminal ID 

the show alibi button needs to find the criminal with the matching ID

loop over known assocaiates

*/