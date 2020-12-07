import { getOfficers } from "./OfficerDataProvider.js"
import { useOfficers } from "./OfficerDataProvider.js"


const contentTarget = document.querySelector(".filters__officer")

export const OfficerSelect = () => {
    // Trigger fetching the API data and loading it into application state
    getOfficers()
    .then(() => {
      // Get all convictions from application state
      const officers = useOfficers()
      render(officers)
    })
}
const render = officersCollection => {
  
    contentTarget.innerHTML = `
        <select class="dropdown" id="officerSelect">
            <option value="0">Please select an officer...</option>
            ${
                officersCollection.map((officer) => `
                  
                    <option value= "${officer.id}">"${officer.name}"</option>`
                )
            }
        </select>
    `
}
const eventHub = document.querySelector(".container")
eventHub.addEventListener("change", changeEvent => {
    if (changeEvent.target.id === "officerSelect") {
        // Get the name of the selected officer
        const selectedOfficer = changeEvent.target.value

        // Define a custom event
        const customEvent = new CustomEvent("officerSelected", {
            detail: {
                officer: selectedOfficer
            }
        })

        // Dispatch event to event hub
        eventHub.dispatchEvent(customEvent)
    }
})