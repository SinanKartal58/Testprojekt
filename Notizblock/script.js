

let notesTitles = [ 'Ba', 'Aufgabe'];

let notes = ['banana', 'rasen mähen'];

let trashNotesTitles = [];

let trashNotes = [];

let archivNoitesTitles = []
let archivNotes = [];

let allNotes = {

    'notesTitles':['Ba','Aufgabe'],
    'notes': ['banana', 'rasen mähen'],
    'archivNotesTitles': [],
    'archivNotes': [],
    'trasNotesTitels' : [],
    'trashNotes' : []
}

function renderNotes(){

let contentRef = document.getElementById ('content')
    contentRef.innerHTML = "";

for (let indexNote = 0; indexNote < allNotes.notes.length; indexNote++) {
    const note = notes[indexNote];
    contentRef.innerHTML += getnoteTemplate(indexNote);
    }
}


function renderTrashNotes(){

    let trashContentRef = document.getElementById ('trash_content')
    trashContentRef.innerHTML = "";
    
    
    
    for (let indexTrashNote = 0; indexTrashNote < trashNotes.length; indexTrashNote++) {
       
        trashContentRef.innerHTML += getTrashnoteTemplate(indexTrashNote);
        }
    }
    



function getnoteTemplate(indexNote){
    return`<p>+ title: ${notesTitles[indexNote]} - > ${notes[indexNote]}<button onclick="deleteNote(${indexNote})">X</button></p>`;

}

function getTrashnoteTemplate(indexTrashNote){
    return`<p>+  title: ${trashNotesTitles[indexTrashNote]} - > ${trashNotes[indexTrashNote]}<button onclick="deleteNote(${indexTrashNote})">X</button></p>`;

}


function addNote(){

let noteInputRef = document.getElementById('note_input');
let noteInput = noteInputRef.value;

notes.push(noteInput);

renderNotes();

noteInputRef.value = "";

}

function notetoTrash(indexNote){
    let trashNote = notes.splice(indexNote, 1);
    trashNotes.push(trashNote[0]);
    let trashNoteTitle = notesTitles.splice(indexNote, 1);
    trashNotesTitles.push(trashNoteTitle[0]);
    renderNotes();
    renderTrashNotes();
}

function deleteNote(indexTrashNote){
    trashNotes.splice(indexTrashNote, 1);   
    renderNotes();
    renderTrashNotes();
}




//notizen archivieren 