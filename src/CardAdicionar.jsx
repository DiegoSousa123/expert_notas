import * as Dialog from "@radix-ui/react-dialog";
import {useState} from 'react'
import {toast} from 'sonner'

//declaração da varial recognition
let recognition = null;

export function CardAdicionar(prop) {
	const [isTextAreaVisible, setTextAreaVisible] = useState(false);
	const [textNote, setTextNote] = useState("");
	const [isRecording, setRecording] = useState(false);
	
	//Exibe a textarea
	function handleTextArea (){
		setTextAreaVisible(true);
	}
	//Esconde a textarea
	function changeTextAreaState(event){
		setTextNote(event.target.value);
		if(event.target.value === ''){
			setTextAreaVisible(false);
		}
	}
	//Envia o conteúdo da nota para App.jsx
	function submitNote(e){
		e.preventDefault();
		if(textNote === ''){
			return;
		}
		prop.note(textNote);
		toast.custom((t) =>(
			<div className="bg-slate-900 text-lime-400 font-medium w-full p-5 rounded-md flex items-center">Nota criada com sucesso!</div>
		));
		setTextAreaVisible(false);
		setTextNote('');
	}
	
	//Para a gravação de áudio
	function setOffRecording(){
		setRecording(false);
		if(recognition !== null){
			recognition.stop();
		}
	}
	
	//Inicia a gravação de áudio
	function handleIsRecording(){
		setRecording(true);
		setTextAreaVisible(true);
		
		const isSpeechRecognitionAvailable = 'SpeechRecognition' in window || 'webkitSpeechRecognition' in window
		if(!isSpeechRecognitionAvailable){
			alert("SpeechRecognition não disponível neste navegador.");
			return;
		}
		const Speech = window.SpeechRecognition || window.webkitSpeechRecognition
		recognition = new Speech();
		
		recognition.lang = "pt-BR";
		recognition.continuous = false;
		recognition.interimResults = true;
		recognition.maxAlternatives = 1;
		
		recognition.start();
		
		//Salva o texto transcrito na variavel textNote
		recognition.onresult = (event) =>{
			const transcription = Array.from(event.results).reduce((text, result) =>{return text.concat(result[0].transcript)}, "");
			setTextNote(transcription);
		}
		recognition.onerror = (event) =>{
			console.error(event.error);
		}
	}
	
	return (
		<Dialog.Root>
			<Dialog.Trigger className="bg-slate-700 p-5 outline-none text-left rounded-md overflow-hidden flex gap-1 flex-col items-start hover:ring-2 ring-slate-600 focus-visible:ring-2 ring-lime-400 space-y-3">
				<span className="text-sm font-medium text-slate-200">{"Adicione uma nota"}</span>
				<p className="text-sm font-medium leading-6 text-slate-400">Grave uma nota de áudio que será convertida para texto automaticamente.</p>
			</Dialog.Trigger>

			<Dialog.Portal>
				<Dialog.Overlay className="bg-black/50 fixed inset-0" />
				<Dialog.Content className="origin-center animate-showCardDialog bg-slate-700 outline-none mx-auto fixed z-10 inset-0 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:max-w-[640px] w-full md:h-[60vh] md:rounded-md overflow-hidden flex flex-col gap-3 group">
					<Dialog.Close asChild className="absolute bg-slate-800 size-[40px] right-0 top-0">
						<button onClick={()=>{setTextAreaVisible(false); setTextNote("");}} type="button" className="text-3xl hover:text-slate-300">
							&times;
						</button>
					</Dialog.Close>
					<form className="flex flex-1 flex-col">
					<div className="flex-1 flex flex-col gap-3 p-5">
						<span>Adicionar nota</span>
						{ !isTextAreaVisible ? ( 
							<p className="leading-6">Comece <button onClick={handleIsRecording} type="button" className="text-lime-400 outline-none bg-transparent hover:underline">gravando um áudio</button> ou se preferir <button onClick={handleTextArea} className="text-lime-400 outline-none bg-transparent hover:underline" type="button">utilize apenas texto</button>.</p>
							) : (
							<textarea onChange={changeTextAreaState} autoFocus value={textNote} className="w-full flex-1 bg-transparent text-sm md:text-md outline-none resize-none" />
							)
						}
					</div>
					{
						isRecording ? (
							<button onClick={setOffRecording} className="w-full bg-slate-800 p-5 text-slate-400 hover:text-slate-50 font-medium flex gap-1 items-center justify-center" type="button"><div className="size-3 bg-red-500 rounded-full animate-pulse" />Gravando... (Clique para parar)</button>
						) : (
						<button onClick={submitNote} className="w-full bg-lime-600 p-5 text-lime-950 hover:bg-lime-700 font-medium" type="button">Salvar nota</button>
						)
					}
				 </form>
				</Dialog.Content>
			</Dialog.Portal>
		</Dialog.Root>
	);
}
