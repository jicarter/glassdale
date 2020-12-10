import { getCriminal } from "../criminals/CriminalDataProvider.js"


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



