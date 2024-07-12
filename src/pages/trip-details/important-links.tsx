import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { api } from "../../lib/axios";

import { Link2, Plus } from "lucide-react";
import { Button } from "../../components/button";
import { CreateLinkModal } from "./modal/create-link-modal";

interface Link {
  id: string
  title: string
  url: string
}


export function ImportantLinks () {
  const { tripId } = useParams();

  const [links, setLinks] = useState<Link[]>([]);
  const [isCreateLinkModalOpen, setIsCreateLinkModalOpen] = useState(false);

  const openCreateLinkModal = () => setIsCreateLinkModalOpen(true);
  const closeCreateLinkModal = () => setIsCreateLinkModalOpen(false);

  const fetchLinks = async () => {
    await api.get(`trips/${tripId}/links`).then(response => setLinks(response.data.links));
  }

  useEffect(() => {
    fetchLinks()
  }, [ tripId ]);

  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-xl text-zinc-50 font-semibold">Links importantes</h2>

      <span className="space-y-4">

        {links.map((link, index) => (
          <div key={link.id} className="flex items-center justify-between gap-3">
            <span>
              <p className="text-zinc-100 font-medium">{link.title ?? `Link ${index}`}</p>
              <a href={link.url} className="text-zinc-400 text-xs truncate">{link.url}</a>
            </span>

            <a href={link.url} >
              <Link2 className="size-5 text-zinc-400 shrink-0" />
            </a>
            
          </div>
        ))}

      </span>

      <Button onClick={openCreateLinkModal} variant="secondary">
        <Plus className="size-5 text-zinc-200"/>
        Cadastrar novo link
      </Button>

      {isCreateLinkModalOpen && (
        <CreateLinkModal closeCreateLinkModal={closeCreateLinkModal} updateLinks={fetchLinks}/>
      )}
    </div>
  );
}