const fs = require("fs");
const chalk = require("chalk");
// const getNotes = function () {
//     return "fetching notes..";
// }

const loadNotes = ()=> {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJson = dataBuffer.toString();
        return JSON.parse(dataJson);
    }
    catch (e) {
        return [];
    }
}

const saveNotes = (notes) => {
    const dataJson = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJson);
}

const addNote = (title, body) => {
    const notes = loadNotes();

    // const duplicateNotes = notes.filter(function (note) {
    //     return note.title === title;
    // })

    // handling duplicates by title
    const duplicateNotes = notes.filter((note) => {
        return note.title === title;
    })

    // finding one exact note
    const duplicateNote = notes.find((note) => note.title === title);

    if (!duplicateNote){
        notes.push({
            title: title,
            body: body,
        })
        saveNotes(notes);
        console.log(chalk.green.inverse("New note added!"));
    }

    else {
        console.log(chalk.red.inverse("Note with the given title already exists!"));
    }


    // if (duplicateNotes.length === 0){
    //     notes.push({
    //         title: title,
    //         body: body
    //     })
    //     saveNotes(notes);
    //     console.log(notes);
    // }
    // else {
    //     console.log("Note with the same title already exists!");
    // }
}

const removeNote = (title) => {
    const notes = loadNotes();
    const notesToKeep = notes.filter((note) => {
        return note.title !== title;
    })
    saveNotes(notesToKeep);

   if (notes.length !== notesToKeep.length){
       console.log(chalk.green("Note with the title "+ title + " successfully removed!"));
   }

   else {
       console.log(chalk.red("Note with the given title doesn't exists!"));
   }
}

const listNotes = () => {

    const notes = loadNotes();
    notes.forEach((note) => {
        console.log(note.title);
    })
}

const readNote = (title) => {
    const notes = loadNotes();

    // finding one exact note
    const readNote = notes.find((note) => note.title === title);

    if (!readNote){
        console.log(chalk.red.inverse("Note not found!"));
    }

    else {
        console.log(chalk.green.inverse("Note found!"));
        console.log("title: " + readNote.title);
        console.log("body: " + readNote.body);
    }
}

// module.exports = getNotes;
// module.exports = addNote;

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote,
}

