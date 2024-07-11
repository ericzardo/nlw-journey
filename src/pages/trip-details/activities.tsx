import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../lib/axios";

import { CircleCheck } from "lucide-react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

interface Activity {
  date: string 
  activities: {
    id: string
    title: string
    occurs_at: string
  }[]
}

export function Activities () {
  const { tripId } = useParams();

  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    api.get(`trips/${tripId}/activities`).then(response => setActivities(response.data.activities));
  }, [ tripId ]);

  return (
    <div className="space-y-8">

      {activities.map(category => (
        <div key={category.date} className="space-y-2.5">
          <span className="flex items-baseline gap-2">
            <p className="text-xl text-zinc-300 font-semibold">Dia {format(category.date, "d")}</p>
            <p className="text-xs text-zinc-500">{format(category.date, "EEEE", { locale: ptBR })}</p>
          </span>
          {category.activities.length > 0 ? (
            <div>
              {category.activities.map(activity => (
                <div key={activity.id} className="w-full h-10 flex items-center px-4 bg-zinc-900 rounded-xl shadow-shape">
                  <span className="flex flex-1 gap-3">
                    <CircleCheck className="size-5 text-lime-300"/>
                    <p className="text-zinc-400">{activity.title}</p>
                  </span>
                  <p className="text-sm text-zinc-400 mr-auto">{format(activity.occurs_at, "HH:mm")}h</p>
                </div>
              ))}
            </div>
            
          ) : (
            <p className="text-sm text-zinc-500">Nenhuma atividade cadastrada nessa data.</p>
          )}
          
        </div>
      ))}

    </div>
  );
}