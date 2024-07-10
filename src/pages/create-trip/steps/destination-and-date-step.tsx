import { MapPin, Calendar, Settings2, ArrowRight } from "lucide-react";

interface DestionationAndDateStepProps {
  isGuestsInputOpen: boolean
  openGuestsInput: () => void
  closeGuestsInput: () => void
}

export function DestionationAndDateStep ({isGuestsInputOpen, openGuestsInput, closeGuestsInput}: DestionationAndDateStepProps) {
  return (
    <div className="flex items-center h-16 px-4 gap-3 bg-zinc-900 rounded-xl shadow-shape">
      <span className="flex items-center gap-2 flex-1">
        <MapPin className="size-5 text-zinc-400" />
        <input disabled={isGuestsInputOpen} type="text" placeholder="Para onde você vai?" className="bg-transparent text-lg placeholder-zinc-400 outline-none w-full" />
      </span>
      <span className="flex items-center gap-2">
        <Calendar className="size-5 text-zinc-400" />
        <input disabled={isGuestsInputOpen} type="text" placeholder="Quando?" className="bg-transparent w-48 text-lg placeholder-zinc-400 outline-none" />
      </span>

      <span className="w-px h-6 bg-zinc-800" />

      {isGuestsInputOpen ? (
        <button type="button" onClick={closeGuestsInput} className="bg-zinc-800 text-zinc-200 rounded-lg px-5 py-2 flex items-center gap-2 hover:bg-zinc-700">
          Alterar local/data
          <Settings2 className="size-5"/>
        </button>
      ) : (
        <button type="button" onClick={openGuestsInput} className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 flex items-center gap-2 hover:bg-lime-400">
          Continuar
          <ArrowRight className="size-5"/>
        </button>
      )}
    </div>
  );
}