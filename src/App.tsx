import { ChangeEvent, useState } from "react";
import logo from "./assets/logo-nlw-expert.svg";
import { NewNoteCard } from "./components/NewNoteCard";
import { NotesCard } from "./components/Notes-card";


interface Note{
  id: string,
  date: Date,
  content: string
}

export function App() {
  const [search, setSearch] = useState('')
  const [notes, setNotes] = useState<Note[]>(() => {
    const notesOnStorage = localStorage.getItem('notes')
    if(notesOnStorage){
      return JSON.parse(notesOnStorage)
    }

    return []
  });

  function onNoteCreated(content: string){
    const newNote = {
      id: crypto.randomUUID(),
      date: new Date(),
      content
    }

    const notesArray = [newNote, ...notes];
    setNotes(notesArray); 
    localStorage.setItem('notes', JSON.stringify(notesArray)) //LocalStorage não aceita array por isto deve se converter em json
    
  }

  function onNoteDelete(id: string){
      const notesArray = notes.filter(node => {
        node.id !== id
      })
      setNotes(notesArray);

      localStorage.setItem('notes', JSON.stringify(notesArray)) 
  }

  function handleSearch(e: ChangeEvent<HTMLInputElement>){
    const query = e.target.value;
    setSearch(query);
  }

  const filterNotes = search !== '' ? notes.filter(note =>note.content.toLocaleLowerCase().includes(search.toLocaleLowerCase())): notes

  return (
    <div className="mx-auto max-w-6xl my-12 space-y-6 px-5">
      <img src={logo} alt="NLW EXPERT" />

      <form action="" method="get" className="w-full ">
        <input
          type="text"
          name=""
          placeholder="Busque em suas notas..."
          className="w-full bg-transparent text-3xl font-semibold tracking-tighter placeholder:text-slate-500 outline-none"
          onChange={handleSearch}
        />
      </form>

      <div className="h-px bg-slate-700" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[250px]">
        <NewNoteCard onNoteCreted={onNoteCreated} />

        {filterNotes.map((note) => {
          return <NotesCard key={note.id} note={note} onNoteDelete={onNoteDelete} /> ;
        })}
      </div>
    </div>
  );
}
