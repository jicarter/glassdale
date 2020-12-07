import { saveNote } from "./NoteProvider.js"

const contentTarget = document.querySelector(".noteFormContainer")

const eventHub = document.querySelector(".container")
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveNote") {
        //below will gather the input data from the form
        const author = document.querySelector("#author").value
        const text = document.querySelector("#text").value
        const suspect = document.querySelector("#suspect").value
        // Make a new object representation of a note
        const newNote = {
            author: author,
            text: text,
            suspect: suspect,
            timeStamp: Date.now()
            

        }

        // Change API state and application state
        saveNote(newNote)
    }
})

const render = () => {
    contentTarget.innerHTML = `
    <input type="text" id="author" placeholder="Officer Name">
    <textarea id="text" placeholder="Enter Note Here"></textarea>
    <input type="text" id="suspect" placeholder="Suspect Name">
    <button id="saveNote">Save Note</button>
    `
}

export const NoteForm = () => {
    render()
}