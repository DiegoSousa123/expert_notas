import { useState } from "react";
import { CardNote } from "./CardNote.jsx";
import { CardAdicionar } from "./CardAdicionar.jsx";
import { toast } from 'sonner'
export function App() {
	const [search, setSearch] = useState('');
  const [notes, setNotes] = useState(() =>{
		const localNotes = localStorage.getItem("notes")
		if(localNotes){
			return JSON.parse(localNotes);
		}
		return [];
  });
  
  //Salvar a anotação com o conteúdo.
  function saveNote(contentNote){
    const id = crypto.randomUUID();
    if (!notes.some(note => note.id === id)) {
        const newNote = {
            id: id,
            date: new Date(),
            content: contentNote
        };
        const notesArray = [newNote, ...notes];
        setNotes(notesArray);
        localStorage.setItem("notes", JSON.stringify(notesArray));
    } else {
			toast.error("Erro ao salvar nota... Tente novamente");
    }
}

//Deleta uma anotação.
  function deleteNote(id){
		const notesAfterDelete = notes.filter(item => {
			return item.id !== id;
		});
		setNotes(notesAfterDelete);
		localStorage.setItem("notes", JSON.stringify(notesAfterDelete));
  }
  function handleSearch(event){
		setSearch(event.target.value);
  }
  
  //Executa o filtro de notas com base na palavra digitada
  const hasSomeSearch = search !== '' ? notes.filter(item => item.content.toLowerCase().includes(search.toLowerCase())) : notes;
  
	return (
		<>
			<div className="max-w-6xl mx-auto my-10 space-y-[24px] p-4 md: p-0">
				<img
					src="https://gist.githubusercontent.com/maykbrito/f47569e32fb2b21f2ecc9f4c035c141f/raw/a45997404564112d7596fbb1b9cad5de5521927e/logo.svg"
					alt="NLW Logo"
				/>
				<form>
					<input
						className="bg-transparent w-full text-3xl text-left font-semibold pl-0.5 placeholder:text-slate-500 outline-none"
						placeholder="Busque em suas notas"
						onChange={handleSearch}
					/>
				</form>
				<div className="h-px bg-slate-300" />

				<div className="grid auto-cols-fr md:grid-cols-3 auto-rows-[250px] gap-[24px]">
					<CardAdicionar note={saveNote} />
					{
						hasSomeSearch.map(noteItem =>{
							return <CardNote key={noteItem.id} deleteNote={deleteNote} note={noteItem}/>
						})
					}
				</div>
			</div>
		</>
	);
}
