import { Link2, Plus } from "lucide-react";

interface ImportantLinksProps {
  openCreateLinkModal: () => void
}

export function ImportantLinks ({openCreateLinkModal}: ImportantLinksProps) {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-xl text-zinc-50 font-semibold">Links importantes</h2>

      <span className="space-y-4">

        <div className="flex items-center justify-between gap-3">
          <span>
            <p className="text-zinc-100 font-medium">Reserva do AirBnB</p>
            <p className="text-zinc-400 text-xs truncate">https://www.airbnb.com.br/rooms/1047000111451515151313141</p>
          </span>

          <Link2 className="size-5 text-zinc-400 shrink-0" />

        </div>

        <div className="flex items-center justify-between gap-3">
          <span>
            <p className="text-zinc-100 font-medium">Reserva do AirBnB</p>
            <p className="text-zinc-400 text-xs truncate">https://www.airbnb.com.br/rooms/1047000111451515151313141</p>
          </span>

          <Link2 className="size-5 text-zinc-400 shrink-0" />

        </div>

      </span>

      <button onClick={openCreateLinkModal} type="button" className="bg-zinc-800 text-zinc-200 w-full rounded-lg px-5 h-11 flex items-center justify-center gap-2 hover:bg-zinc-700">
        <Plus className="size-5 text-zinc-200"/>
        Cadastrar novo link
      </button>
    </div>
  );
}