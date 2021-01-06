let criminals = []
console.log(criminals);
export const useCriminals = () => criminals.slice()

export const getCriminals = () => {
    return fetch("https://criminals.glassdale.us/criminals")
    .then(response => response.json())
    .then(
        parsedCriminals => {
            console.table(parsedCriminals)
            criminals = parsedCriminals
        }
    )
   
}
 export const getCriminal = (criminalId) => {
    return criminals.find(criminal => criminal.id == criminalId)
    
}
