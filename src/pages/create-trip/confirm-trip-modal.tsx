import { User, Mail, X } from "lucide-react";
import { FormEvent } from "react";

interface ConfirmTripModalProps {
  closeConfirmTripModalOpen: () => void
  createTrip: (event: FormEvent<HTMLFormElement>) => void
}

export function ConfirmTripModal ({closeConfirmTripModalOpen, createTrip}: ConfirmTripModalProps) {
  return (
    <div className="fixed inset-0 bg-black/65 flex items-center justify-center">
      <div className="bg-zinc-900 w-[640px] rounded-xl py-5 px-6 space-y-5 shadow-shape">

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Confirmar criação da viagem</h2>
            <button type="button" onClick={closeConfirmTripModalOpen}>
              <X className="size-5 text-zinc-400"/>
            </button>
          </div>

          <p className="text-sm text-zinc-400">Para concluir a criação da viagem para <span className="font-semibold text-zinc-100">Florianópolis, Brasil</span> nas datas de <span className="font-semibold text-zinc-100">16 a 27 de Agosto de 2024</span> preencha seus dados abaixo:</p>
        </div>

        <form onSubmit={createTrip} className="space-y-3">
          <span className="flex items-center h-14 px-4 py-2.5 gap-3 bg-zinc-950 rounded-xl">
            <User className="size-5 text-zinc-400" />
            <input name="name" placeholder="Seu nome completo" className="bg-transparent text-md placeholder-zinc-400 outline-none w-full" />
          </span>

          <span className="flex items-center h-14 px-4 py-2.5 gap-3 bg-zinc-950 rounded-xl">
            <Mail className="size-5 text-zinc-400" />
            <input type="email" name="email" placeholder="Seu e-mail pessoal" className="bg-transparent text-md placeholder-zinc-400 outline-none w-full" />
          </span>



          <button type="submit" className="w-full justify-center bg-lime-300 text-lime-950 rounded-lg px-5 py-2 flex items-center gap-2 hover:bg-lime-400">
            Confirmar criação da viagem
          </button>
        </form>

      </div>
    </div>
  );
}