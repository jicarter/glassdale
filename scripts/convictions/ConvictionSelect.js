import { useConvictions } from "./ConvictionsProvider.js"
import { getConvictions } from "./ConvictionsProvider.js"

const contentTarget = document.querySelector(".filters__crime")

const eventHub = document.querySelector(".container")

eventHub.addEventListener("change", event => {

    
    if (event.target.id === "crimeSelect") {
       
        const customEvent = new CustomEvent("crimeChosen", {
            detail: {
                crimeThatWasChosen: event.target.value
            }
        })

        
        eventHub.dispatchEvent(customEvent)
    }
})


export const ConvictionSelect = () => {
   
    getConvictions()
    .then(() => {
      
      const convictions = useConvictions()
      render(convictions)
    })
}

const render = convictionsCollection => {
   contentTarget.innerHTML = `
        <select class="dropdown" id="crimeSelect">
            <option value="0">Please select a crime...</option>
            ${
                convictionsCollection.map((crime) =>` 
                    
                    <option value="${crime.id}">${crime.name}</option>`
                )
            }
        </select>
    `
}


