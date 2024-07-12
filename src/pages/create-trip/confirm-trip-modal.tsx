import { User, Mail, X } from "lucide-react";
import { FormEvent } from "react";
import { Button } from "../../components/button";
import { Input } from "../../components/input";
import { DateRange } from "react-day-picker";
import { format } from "date-fns";
import { Modal } from "../../components/modal";

interface ConfirmTripModalProps {
  closeConfirmTripModalOpen: () => void
  setOwnerEmail: (email: string) => void
  setOwnerName: (name: string) => void
  createTrip: (event: FormEvent<HTMLFormElement>) => void

  destination: string
  eventStartAndEndDates: DateRange | undefined
}

export function ConfirmTripModal ({closeConfirmTripModalOpen, createTrip, setOwnerEmail, setOwnerName, destination, eventStartAndEndDates}: ConfirmTripModalProps) {
  const displayedDate = () => {

    const [starts_at, ends_at] = [eventStartAndEndDates?.from, eventStartAndEndDates?.to];

    if (!starts_at || !ends_at) return "[data invalida]";

    return format(starts_at, "d' de 'LLL").concat(" a ").concat(format(ends_at, "d' de 'LLL"));
  };


  return (
    <Modal >
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Confirmar criação da viagem</h2>
          <button type="button" onClick={closeConfirmTripModalOpen}>
            <X className="size-5 text-zinc-400"/>
          </button>
        </div>

        <p className="text-sm text-zinc-400">Para concluir a criação da viagem para <span className="font-semibold text-zinc-100">{destination}</span> nas datas de <span className="font-semibold text-zinc-100">{displayedDate()}</span> preencha seus dados abaixo:</p>
      </div>

      <form onSubmit={createTrip} className="space-y-3">
        <Input
          name="name"
          placeholder="Seu nome completo"
          onChange={event => setOwnerName(event.target.value)}
          icon={ <User className="size-5 text-zinc-400" /> } 
        /> 
        <Input
          type="email"
          name="email"
          placeholder="Seu e-mail pessoal"
          onChange={event => setOwnerEmail(event.target.value)}
          icon={ <Mail className="size-5 text-zinc-400" /> } 
        /> 

        <Button type="submit" size="full">
          Confirmar criação da viagem
        </Button>
        
      </form>
    </Modal>

  );
}