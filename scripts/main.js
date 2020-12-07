import { CriminalList } from "./criminals/CriminalList.js"
import { ConvictionSelect } from "./convictions/ConvictionSelect.js"
import { OfficerSelect } from "./officers/OfficerSelect.js"
import { NoteForm } from "./note/NoteForm.js";

CriminalList();
ConvictionSelect();
OfficerSelect();
NoteForm();




//TODO:
// what feature are we implementing?
// -filter criminals by the crimes committed
//
// What tasks do we need to complete to implement the feature?
// filter criminal data that matches the crime that has been selected
// Need to listen for selection of crime
// Use the selected value to filter the criminal data
// update the dom with the filtered criminal data 

// which modules are involved?
// CriminalList, ConvictionSelect