import { useEffect, useState } from "react";

import { api } from "../../lib/axios";

import { CircleDashed, CircleCheck, UserCog } from "lucide-react";
import { useParams } from "react-router-dom";
import { Button } from "../../components/button";
import { ManageGuestsModal } from "./modal/manage-guests-modal";

interface Participant {
  id: string
  name: string | null
  email: string
  is_confirmed: boolean
}

export function Guests () {
  const { tripId } = useParams();

  const [participants, setParticipants] = useState<Participant[]>([]);
  const [isManageGuestsModalOpen, setIsManageGuestsModalOpen] = useState(false);

  const closeManageGuestsModal = () => setIsManageGuestsModalOpen(false);
  const openManageGuestsModal = () => setIsManageGuestsModalOpen(true);

  const fetchParticipants = () => {
    api.get(`trips/${tripId}/participants`).then(response => setParticipants(response.data.participants));
  };

  useEffect(() => {
    fetchParticipants()
  }, [ tripId ]);

  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-xl text-zinc-50 font-semibold">Convidados</h2>

      <span className="space-y-4">
        {participants.map((participant, index) => (
          <div key={participant.id} className="flex items-center justify-between gap-3">
            <span>
              <p className="text-zinc-100 font-medium">{participant.name ?? `Convidado ${index}`}</p>
              <p className="text-zinc-400 text-xs truncate">{participant.email}</p>
            </span>

            {participant.is_confirmed ? (
              <CircleCheck className="size-5 text-green-400 shrink-0" />
            ) : (
              <CircleDashed className="size-5 text-zinc-400 shrink-0" />
            )}

          </div>
        ))}
      </span>

      <Button variant="secondary" onClick={openManageGuestsModal}>
        <UserCog className="size-5 text-zinc-200"/>
        Gerenciar convidados
      </Button>

      {isManageGuestsModalOpen && (
        <ManageGuestsModal closeManageGuestsModal={closeManageGuestsModal} participants={participants} updateParticipants={fetchParticipants} />
      )}

    </div>
  );
}