import { X, Tag, Calendar } from "lucide-react";

interface CreateActivityModalProps {
  closeCreateActivityModal: () => void
}

export function CreateActivityModal ({closeCreateActivityModal}: CreateActivityModalProps) {
  return (
    <div className="fixed inset-0 bg-black/65 flex items-center justify-center">
      <div className="bg-zinc-900 w-[640px] rounded-xl py-5 px-6 space-y-5 shadow-shape">

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Cadastrar atividade</h2>
            <button type="button" onClick={closeCreateActivityModal}>
              <X className="size-5 text-zinc-400"/>
            </button>
          </div>

          <p className="text-sm text-zinc-400">Todos convidados podem visualizar as atividades.</p>
        </div>

        <form className="space-y-3">
          <span className="flex items-center h-14 px-4 py-2.5 gap-3 bg-zinc-950 rounded-xl">
            <Tag className="size-5 text-zinc-400" />
            <input name="title" placeholder="Qual a atividade?" className="bg-transparent text-md placeholder-zinc-400 outline-none w-full" />
          </span>

          <span className="flex items-center h-14 px-4 py-2.5 gap-3 bg-zinc-950 rounded-xl">
            <Calendar className="size-5 text-zinc-400" />
            <input type="datetime-local" name="occurs_at" placeholder="Seu e-mail pessoal" className="bg-transparent text-md placeholder-zinc-400 outline-none w-full" />
          </span>



          <button type="submit" className="w-full justify-center bg-lime-300 text-lime-950 rounded-lg px-5 py-2 flex items-center gap-2 hover:bg-lime-400">
            Salvar atividade
          </button>
        </form>

      </div>
    </div>
  );
}