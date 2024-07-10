import { useState } from "react";

import { Plus } from "lucide-react";
import { DestionationAndDateHeader } from "./destination-and-date-header";
import { ImportantLinks } from "./important-links";
import { Guests } from "./guests";
import { Activities } from "./activities";
import { CreateActivityModal } from "./modal/create-activity-modal";
import { CreateLinkModal } from "./modal/create-link-modal";

export function TripDetailsPage () {
  const [isCreateActivityModalOpen, setIsCreateActivityModalOpen] = useState(false);
  const [isCreateLinkModalOpen, setIsCreateLinkModalOpen] = useState(false);

  const openCreateActivityModal = () => setIsCreateActivityModalOpen(true);
  const closeCreateActivityModal = () => setIsCreateActivityModalOpen(false);


  const openCreateLinkModal = () => setIsCreateLinkModalOpen(true);
  const closeCreateLinkModal = () => setIsCreateLinkModalOpen(false);

  return (
    <div className="max-w-6xl mx-auto py-10 space-y-8">

      <DestionationAndDateHeader />

      <main className="flex px-6 gap-16">

        <div className="flex-1 space-y-6">
          <span className="flex justify-between items-center">
            <h2 className="font-semibold text-zinc-50 text-3xl">Atividades</h2>
            <button onClick={openCreateActivityModal} className="bg-lime-300 text-lime-950 rounded-lg px-5 h-11 flex items-center gap-2 hover:bg-lime-400">
              <Plus className="size-5"/>
              Cadastrar atividade
            </button>
          </span>

          <Activities />

        </div>

        <div className="w-80 space-y-6">
          <ImportantLinks openCreateLinkModal={openCreateLinkModal}/>
          <span className="block w-full h-px bg-zinc-800" />
          <Guests />
        </div>

      </main>

      {isCreateActivityModalOpen && (
        <CreateActivityModal closeCreateActivityModal={closeCreateActivityModal} />
      )}

      {isCreateLinkModalOpen && (
        <CreateLinkModal closeCreateLinkModal={closeCreateLinkModal} />
      )}
      

    </div>
  );
}