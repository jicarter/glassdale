import { Associates } from "./Associates.js"
import { getCriminals, useCriminals, getCriminal } from "../criminals/CriminalDataProvider.js"


export const showAlibiButton = () => {
const eventHub = document.querySelectorAll(".associateButton")
eventHub.forEach(element => {
    element.addEventListener("click", clickEvent => {
        const criminalObject = getCriminal(clickEvent.target.id)
        render(criminalObject)
        
        console.log(criminalObject.known_associates);
    })  
        
   }
)

const render = (criminalObject) => {
    const knownAssociates = criminalObject.filter((criminalObject) => criminalObject.known_associates)
    
        window.alert(knownAssociates)
    }





}

const matchingCriminals = criminals.filter( (criminal) => criminal.conviction === crime.name  )

    render(matchingCriminals);
}