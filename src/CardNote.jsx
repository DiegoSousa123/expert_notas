import * as Dialog from '@radix-ui/react-dialog'

import {formatDistanceToNow, format} from 'date-fns'
import {ptBR} from 'date-fns/locale'
import {toast} from 'sonner'
export function CardNote({note, deleteNote}){
	
	return (
		<Dialog.Root>
			<Dialog.Trigger className="bg-slate-800 text-left outline-none p-5 rounded-md overflow-hidden flex gap-1 flex-col items-start hover:ring-2 ring-slate-600 focus-visible:ring-2 ring-lime-400 space-y-3 relative">
				<span className="text-sm font-medium text-slate-200">{format(note.date, "dd/MM/yyyy 'ás' HH:mm:ss", {locale: ptBR})}</span>
				<p className="text-sm text-slate-400 leading-6">{note.content}</p>
				<div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0"/>
			</Dialog.Trigger>
			
			<Dialog.Portal>
				<Dialog.Overlay className="bg-black/50 fixed inset-0" />
				<Dialog.Content className="origin-center animate-showCardDialog bg-slate-700 mx-auto fixed z-10 inset-0 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:max-w-[640px] w-full md:h-[60vh] md:rounded-md overflow-hidden flex flex-col gap-3">
					<Dialog.Close asChild className="absolute bg-slate-800 size-[40px] right-0 top-0">
						<button type="button" className="text-3xl hover:text-slate-300">&times;</button>
					</Dialog.Close>
					<div className="flex-1 space-y-3 p-5">
						<span>{formatDistanceToNow(note.date, {locale: ptBR, addSuffix: true})}</span>
						<p>{note.content}</p>
					</div>
					<button 
					  onClick={() => {
					  deleteNote(note.id);
					  toast.custom((t)=>(<div className="bg-slate-700 text-red-500 font-medium w-full p-5 rounded-md flex overflow-hidden items-center relative"><div className="absolute inset-0 z-0 bg-red-800/50" /><span className="relative z-10">Nota removida.</span></div>));}}
						className="w-full bg-slate-800 p-5 text-slate-50 font-medium group">Deseja <span className="text-red-400 group-hover:underline">apagar a nota</span>?</button>
				</Dialog.Content>
			</Dialog.Portal>
		</Dialog.Root>
		)
}