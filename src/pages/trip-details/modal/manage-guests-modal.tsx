import { FormEvent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../../lib/axios";

import { CircleCheck, CircleDashed, X, UserRoundPlus } from "lucide-react";
import { Modal } from "../../../components/modal";
import { Button } from "../../../components/button";

interface Participant {
  id: string
  name: string | null
  email: string
  is_confirmed: boolean
}

interface ManageGuestsModalProps {
  participants: Participant[]
  closeManageGuestsModal: () => void
  updateParticipants: () => void
}

export function ManageGuestsModal ({ closeManageGuestsModal, participants, updateParticipants }: ManageGuestsModalProps) {
  const { tripId } = useParams();

  const [localConfirmations, setLocalConfirmations] = useState<{
    [id: string]: boolean;
  }>({});

  useEffect(() => {
    participants.map(participant => {
      setLocalConfirmations((prev) => ({
        ...prev,
        [participant.id]: participant.is_confirmed,
      }));
    })
  }, [ tripId ]);

  const guestConfirmation = async (participantId: string) => {
    setLocalConfirmations((prev) => ({
      ...prev,
      [participantId]: true,
    }));

    await api.get(`/participants/${participantId}/confirm`)
    .catch(error => console.log(error));
  };

  const addNewEmailToInvite = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const email = data.get("email")?.toString();

    if (!email) return;

    event.currentTarget.reset()

    await api.post(`/trips/${tripId}/invites`, { email })
    .catch(error => console.log(error))

  }

  const updateGuests = () => {
    updateParticipants();
    closeManageGuestsModal();
  }

  return (
    <Modal >
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Gerenciar convidados</h2>
          <button type="button" onClick={updateGuests}>
            <X className="size-5 text-zinc-400"/>
          </button>
        </div>

        <p className="text-sm text-zinc-400">Confirme a presença dos seus convidados e adicione novos participantes para a viagem!</p>
      </div>

      <form onSubmit={addNewEmailToInvite} className="space-y-3">

        <div className="flex items-center h-16 px-4 gap-3 bg-zinc-950 rounded-xl shadow-shape">
          <span className="flex items-center gap-2 flex-1">
            <UserRoundPlus className="size-5 text-zinc-400" />

            <input type="email" name="email" placeholder="Digite o e-mail do convidado" className="text-lg text-zinc-100 placeholder-zinc-400 outline-none bg-transparent" />
             
          </span>

          <Button type="submit">
            Convidar
          </Button>
        </div>

        {participants.map((participant, index) => (

          <div key={participant.id} className="flex items-center justify-between gap-3 px-4">
            <span>
              <p className="text-zinc-100 font-medium">{participant.name ?? `Convidado ${index}`}</p>
              <p className="text-zinc-400 text-xs truncate">{participant.email}</p>
            </span>


            {localConfirmations[participant.id] ? (
              <CircleCheck className="size-fit text-green-400 shrink-0" />
              ) : (
              <button onClick={() => guestConfirmation(participant.id)}>
                <CircleDashed className="size-fit text-zinc-400 shrink-0" />
              </button>
            )}

          </div>
        ))}
      
      </form>
    </Modal>
  )
}