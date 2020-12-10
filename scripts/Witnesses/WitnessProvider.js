const eventHub = document.querySelector(".container")
let witnesses = []



const dispatchStateChangeEvent = () => {
    const witnessStateChangedEvent = new CustomEvent("witnessStateChanged")
    
    eventHub.dispatchEvent(witnessStateChangedEvent)
}

export const useWitnesses = () => witnesses.slice()

export const getWitnesses = () => {
    return fetch('http://localhost:8088/witnesses')
        .then( response => response.json())
        .then( parsedWitnesses => {
            witnesses = parsedWitnesses
            .then(dispatchStateChangeEvent)
        })
}

