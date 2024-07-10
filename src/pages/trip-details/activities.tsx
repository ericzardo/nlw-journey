import { CircleCheck } from "lucide-react";

export function Activities () {
  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <span className="flex items-baseline gap-2">
          <p className="text-xl text-zinc-300 font-semibold">Dia 17</p>
          <p className="text-xs text-zinc-500">Sábado</p>
        </span>
        <p className="text-sm text-zinc-500">Nenhuma atividade cadastrada nessa data.</p>
      </div>

      <div className="space-y-3">
        <span className="flex items-baseline gap-2">
          <p className="text-xl text-zinc-300 font-semibold">Dia 18</p>
          <p className="text-xs text-zinc-500">Domingo</p>
        </span>

        <div className="w-full h-10 flex items-center px-4 bg-zinc-900 rounded-xl shadow-shape">
          <span className="flex flex-1 gap-3">
            <CircleCheck className="size-5 text-lime-300"/>
            <p className="text-zinc-400">Corrida de Kart</p>
          </span>
          <p className="text-sm text-zinc-400 mr-auto">14:00h</p>
        </div>

        <div className="w-full h-10 flex items-center px-4 bg-zinc-900 rounded-xl shadow-shape">
          <span className="flex flex-1 gap-3">
            <CircleCheck className="size-5 text-lime-300"/>
            <p className="text-zinc-400">Academia em grupo</p>
          </span>
          <p className="text-sm text-zinc-400 mr-auto">08:00h</p>
        </div>

      </div>
    </div>
  );
}