const fs = require("fs");
// const getNotes = function () {
//     return "fetching notes..";
// }

function loadNotes() {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJson = dataBuffer.toString();
        return JSON.parse(dataJson);
    }
    catch (e) {
        return [];
    }
}

const saveNotes = function (notes) {
    const dataJson = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJson);
}

const addNote = function (title, body) {
    const notes = loadNotes();

    // handling duplicates by title
    const duplicateNotes = notes.filter(function (note) {
        return note.title === title;
    })

    if (duplicateNotes.length === 0){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes);
        console.log(notes);
    }
    else {
        console.log("Note with the same title already exists!");
    }
}

// module.exports = getNotes;
// module.exports = addNote;

module.exports = {
    addNote: addNote
}

