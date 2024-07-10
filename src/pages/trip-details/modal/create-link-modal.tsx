import { Link2, Tag, X } from "lucide-react";

interface CreateLinkModalProps {
  closeCreateLinkModal: () => void
}

export function CreateLinkModal ({ closeCreateLinkModal }: CreateLinkModalProps) {
  return (
    <div className="fixed inset-0 bg-black/65 flex items-center justify-center">
      <div className="bg-zinc-900 w-[640px] rounded-xl py-5 px-6 space-y-5 shadow-shape">

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Cadastrar link</h2>
            <button type="button" onClick={closeCreateLinkModal}>
              <X className="size-5 text-zinc-400"/>
            </button>
          </div>

          <p className="text-sm text-zinc-400">Todos convidados podem visualizar os links importantes.</p>
        </div>

        <form className="space-y-3">
          <span className="flex items-center h-14 px-4 py-2.5 gap-3 bg-zinc-950 rounded-xl">
            <Tag className="size-5 text-zinc-400" />
            <input name="link_title" placeholder="Título do link" className="bg-transparent text-md placeholder-zinc-400 outline-none w-full" />
          </span>

          <span className="flex items-center h-14 px-4 py-2.5 gap-3 bg-zinc-950 rounded-xl">
            <Link2 className="size-5 text-zinc-400" />
            <input type="url" name="url" placeholder="URL" className="bg-transparent text-md placeholder-zinc-400 outline-none w-full" />
          </span>



          <button type="submit" className="w-full justify-center bg-lime-300 text-lime-950 rounded-lg px-5 py-2 flex items-center gap-2 hover:bg-lime-400">
            Salvar link
          </button>
        </form>

      </div>
    </div>
  );
}