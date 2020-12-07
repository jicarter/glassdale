import { getCriminals, useCriminals } from './CriminalDataProvider.js'
import { Criminal } from './Criminal.js'
import { useConvictions } from '../convictions/ConvictionsProvider.js'
import { useOfficers} from '../officers/OfficerDataProvider.js'

const criminalElement = document.querySelector(".criminalsContainer")

export const CriminalList = () => {
    getCriminals().then( () => {
        let perps = useCriminals()

        render(perps)
    })
}

   


const eventHub = document.querySelector(".container")

eventHub.addEventListener('crimeChosen', event => {
if (event.detail.crimeThatWasChosen !== "0"){

  
    const crimes = useConvictions();
    const crime = crimes.find( (crime) => crime.id === parseInt(event.detail.crimeThatWasChosen) )

  

    
    const criminals = useCriminals()
    const matchingCriminals = criminals.filter( (criminal) => criminal.conviction === crime.name  )

    render(matchingCriminals);
}
})



const render = (criminals) => {
    let criminalCards = [];

    for (const perp of criminals) {
        criminalCards.push(Criminal(perp))
    }


criminalElement.innerHTML = criminalCards.join("")
    
}

eventHub.addEventListener('officerSelected', event => {
    const officers = useOfficers();
    const officerId = parseInt(event.detail.officer);
    const foundOfficer = officers.find( (officer) => officer.id === officerId );
   
    const criminals = useCriminals();
    const matchingCriminals = criminals.filter(criminalObject =>  criminalObject.arrestingOfficer === foundOfficer.name )

    render (matchingCriminals);
})

    
    
            
