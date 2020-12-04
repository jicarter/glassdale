import { getCriminals, useCriminals } from './CriminalDataProvider.js'
import { Criminal } from './Criminal.js'
import { useConvictions } from '../convictions/ConvictionsProvider.js'
const criminalElement = document.querySelector(".criminalsContainer")
let criminalCards = [];

export const CriminalList = () => {
    getCriminals().then( () => {
        let perps = useCriminals()

        render(perps)
        })
}

   


const eventHub = document.querySelector(".container")

eventHub.addEventListener('customEvent', event => {
if (event.detail.crimeThatWasChosen !== "0"){

  
    const crimes = useConvictions();
    const crime = crimes.find( (crime) => crime.id === parseInt(chosen) )

  

    const chosen = event.detail.crimeThatWasChosen
    const criminals = useCriminals()
    const matchingCriminals = criminals.filter( criminal => { return criminal.conviction === crime.name } )

   
   
   render(matchingCriminals);
}
})

const render = (criminalCollection) => {
    for (const perp of criminalCollection) {
        criminalCards.push(Criminal(perp))
    }


criminalElement.innerHTML = criminalCards.join("")
    
}

