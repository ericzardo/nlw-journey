import { Link2, Tag, X } from "lucide-react";
import { Button } from "../../../components/button";
import { Input } from "../../../components/input";

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

          <Input name="link_title" placeholder="Título do link" icon={ <Tag className="size-5 text-zinc-400" /> } />
          <Input type="url" name="url" placeholder="URL" icon={ <Link2 className="size-5 text-zinc-400" /> } />

          <Button type="submit" size="full">Salvar link</Button>
          
        </form>

      </div>
    </div>
  );
}