const fs = require('fs');


// write to file
// fs.writeFileSync('notes.txt', 'My name is Kali');

// append to file
// fs.appendFileSync('notes.txt', '\nThis is test append!');

// const name = require('./util.js');
const add = require('./util.js');
const notes = require('./notes.js');
const validator = require('validator');
const chalk = require('chalk');
const yargs = require('yargs');



// const sum = add(1, 4);
// const notes = getNotes();

// console.log(sum);
// console.log(notes);
// console.log("isEmail: " + validator.isEmail('kali@xyz.com'));
// console.log("isURL: " + validator.isURL('https://nodejs.org/docs/latest/api/'));

// const colorNote = chalk.blue.inverse.bold(notes);
// console.log(colorNote);

// get user input -> array item 3 (index 2)
// const command = process.argv[2];

// console.log(process.argv);

// if (command === 'add'){
//     console.log('Adding note!');
// }
//
// else if (command === 'remove'){
//     console.log('Removing note!');
// }


// customize yargs version
yargs.version('1.1.0');

// create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string',
        },

        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string',
        }
    },
    handler: function (argv) {
        console.log('Adding a new note!')
        notes.addNote(argv.title, argv.body);
        console.log('Title: '+ argv.title);
        console.log('Body: '+ argv.body);
    }
})

// create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a new note',
    handler: function () {
        console.log('Removing a note!')
    }
})

// create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function () {
        console.log('Reading a note!')
    }
})

// create list command
yargs.command({
    command: 'list',
    describe: 'List all notes',
    handler: function () {
        console.log('Fetching all notes!')
    }
})

yargs.parse();
// console.log(yargs.argv);


