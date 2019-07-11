const yargs = require('yargs')
const notes = require('./notes.js')
const chalk =require('chalk')

yargs.command({
  command:'add',
  describe:'Add a new note!!!',
  builder: {
    title: {
      describe:'Note title',
      demandOption:true
    },
    body: {
      describe:'Note body!!',
      demandOption:true

    }
  },
  handler(argv) {
    notes.addNote(argv.title,argv.body)
  }
})

yargs.command({
  command:'remove',
  describe:'Remove a note!!!',
  builder: {
    title: {
      describe:'Note title',
      demandOption:true,
      type:'string'
    }
  },
  handler(argv) {
    notes.removeNote(argv.title)
  }
})

// create list command
yargs.command({
  command:'list',
  describe:'List your notes',
  handler() {
    notes.listNotes();

  }
})

// create read command
yargs.command({
  command:'read',
  describe:'Read a note',
  builder:{
    title: {
      describe:'note title',
      demandOption:true,
      type:'string'
    }
  },
  handler(argv) {
    notes.readNote(argv.title)
  }
})
yargs.command({
  command:'update',
  describe:'Update a note!!!',
  builder: {
    title: {
      describe:'Note title',
      demandOption:true,
      type:'string'
    }
  },
  handler(argv) {
    notes.updateNote(argv.title,argv.body)
  }
})
yargs.parse()
