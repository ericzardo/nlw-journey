import { AtSign, X, Plus } from "lucide-react";
import { FormEvent } from "react";
import { Button } from "../../components/button";
import { Input } from "../../components/input";

interface InviteGuestsModalProps {
  closeGuestsModal: () => void
  emailsToInvite: string[]
  removeEmailToInvite: (email: string) => void
  addNewEmailToInvite: (event: FormEvent<HTMLFormElement>) => void
}

export function InviteGuestsModal ({closeGuestsModal, emailsToInvite, removeEmailToInvite, addNewEmailToInvite}: InviteGuestsModalProps) {
  return (
    <div className="fixed inset-0 bg-black/65 flex items-center justify-center">
      <div className="bg-zinc-900 w-[640px] rounded-xl py-5 px-6 space-y-5 shadow-shape">

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Selecionar convidados</h2>
            <button type="button" onClick={closeGuestsModal}>
              <X className="size-5 text-zinc-400"/>
            </button>
          </div>

          <p className="text-sm text-zinc-400">Os convidados irão receber e-mails para confirmar a participação na viagem.</p>
        </div>

        <div className="flex flex-wrap gap-2">

          {emailsToInvite.map(email => (
            <span key={email} className="flex items-center gap-2.5 px-2.5 py-1.5 bg-zinc-800 rounded-md">
              <p className="text-zinc-300">{email}</p>
              <button type="button" onClick={() => removeEmailToInvite(email)}>
                <X className="size-4 text-zinc-400"/>
              </button>
            </span>
          ))}

          

        </div>

        <div className="w-full h-px bg-zinc-800" />

        <form onSubmit={addNewEmailToInvite} className="flex items-center justify-between h-14 px-4 py-2.5 gap-3 bg-zinc-950 rounded-xl">
          <Input type="email" name="email" placeholder="Digite o e-mail do convidado" icon={ <AtSign className="size-5 text-zinc-400" /> } /> 

          <Button type="submit">
            Convidar
            <Plus className="size-5"/>
          </Button>

        </form>

      </div>
    </div>
  );
}