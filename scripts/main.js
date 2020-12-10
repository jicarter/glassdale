import { CriminalList } from "./criminals/CriminalList.js";
import { ConvictionSelect } from "./convictions/ConvictionSelect.js";
import { OfficerSelect } from "./officers/OfficerSelect.js";
import { NoteForm } from "./note/NoteForm.js";
import { ShowNoteButton } from "./note/ShowNotesButton.js";
import "./note/NoteList.js";
import "./knownAssociates/ShowAlibiButton.js"
import { showAlibiButton } from "./knownAssociates/ShowAlibiButton.js";


CriminalList();
ConvictionSelect();
OfficerSelect();
NoteForm();
ShowNoteButton();
showAlibiButton()


