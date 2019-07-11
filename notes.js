const fs =require('fs')
const chalk =require('chalk')

const getNotes =() => {
  return 'Your notes.....'
}
const addNote = (title,body) => {
    const notes=loadNotes()
    const duplicateNote = notes.find((note)=> note.title===title);

debugger
    if(!duplicateNote){
      notes.push({
        title:title,
        body:body
      })
      saveNotes(notes)
      console.log('New note added')
    } else {
      console.log('Note title taken!!')
    }

}
const removeNote =(title) => {
  const notes= loadNotes()
  const notesToKeep = notes.filter((note) => note.title !==title);

  if(notes.length > notesToKeep.length){
    console.log(chalk.green.inverse('Note removed'))
    saveNotes(notesToKeep)

  } else {
    console.log(chalk.red.inverse(' No Note found'))
  }
}

const listNotes =() => {
  const notes = loadNotes();
  console.log(chalk.green.inverse('Your notes'));
notes.forEach((note)=> {
  console.log(note.title);
})

}

const readNote=(title) =>{
  const notes= loadNotes();
  const note= notes.find((note) => note.title===title);
if(note) {
  console.log(chalk.green.inverse(note.title));
  console.log(note.body);
} else {
  console.log(chalk.red.inverse('Note not found'));
}
}

const updateNote = (title,body) => {
  const notes=loadNotes();
//console.log(notes);
const  objIndex = notes.findIndex((note => note.title == title));

  notes[objIndex].body=body;
       saveNotes(notes);

     //
     // for (var i in notes) {
     //   if (notes[i].title == title) {
     //      notes[i].body = body;
     //        saveNotes(notes)
     //   }
     // }

    //console.log('record updated')

}

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes)
  fs.writeFileSync('notes.json',dataJSON)
}
const loadNotes = () => {
  try {
    const dataBuffer= fs.readFileSync('notes.json')
    const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON)
  }catch(e) {
    return []
  }

}
module.exports ={
  getNotes: getNotes,
  addNote:addNote,
  removeNote:removeNote,
  listNotes:listNotes,
  readNote:readNote,
  updateNote:updateNote
}
