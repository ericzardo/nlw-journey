import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { api } from "../../lib/axios";

import { Link2, Plus } from "lucide-react";
import { Button } from "../../components/button";

interface Link {
  id: string
  title: string
  url: string
}

interface ImportantLinksProps {
  openCreateLinkModal: () => void
}

export function ImportantLinks ({openCreateLinkModal}: ImportantLinksProps) {
  const { tripId } = useParams();

  const [links, setLinks] = useState<Link[]>([]);

  useEffect(() => {
    api.get(`trips/${tripId}/links`).then(response => setLinks(response.data.links));
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
    </div>
  );
}