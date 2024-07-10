import { MapPin, Calendar, Settings2 } from "lucide-react";
import { Button } from "../../components/button";

export function DestionationAndDateHeader () {
  return (
    <div className="w-full h-16 bg-zinc-900 shadow-shape flex items-center justify-between rounded-xl px-6">
      <span className="flex items-center gap-2">
        <MapPin className="size-5 text-zinc-400" />
        <p className="text-zinc-100">Florianópolis, Brasil</p>
      </span>
      <span className="flex items-center gap-5">
        <span className="flex items-center gap-2">
          <Calendar className="size-5 text-zinc-400" />
          <p className="text-zinc-100g">17 a 23 de Agosto</p>
        </span>
        <span className="w-px h-6 bg-zinc-800" />
        <Button variant="secondary" >
          Alterar local/data
          <Settings2 className="size-5 text-zinc-400"/>
        </Button>
      </span>
    </div>
  );
}