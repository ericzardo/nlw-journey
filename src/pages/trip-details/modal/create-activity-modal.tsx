import { X, Tag, Calendar } from "lucide-react";
import { Button } from "../../../components/button";
import { Input } from "../../../components/input";

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
          <Input icon={<Tag className="size-5 text-zinc-400" />} placeholder="Qual a atividade?" name="activity_title" />

          <Input type="datetime-local" icon={<Calendar className="size-5 text-zinc-400" />} name="occurs_at" />

          <Button type="submit" size="full">Salvar atividade</Button>

        </form>

      </div>
    </div>
  );
}