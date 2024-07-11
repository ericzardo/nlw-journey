import { useState } from "react";
import { format } from "date-fns";

import { MapPin, Calendar, Settings2, ArrowRight, X } from "lucide-react";
import { Button } from "../../../components/button";
import { DateRange, DayPicker } from "react-day-picker";

import "react-day-picker/dist/style.css";

interface DestionationAndDateStepProps {
  isGuestsInputOpen: boolean
  eventStartAndEndDates: DateRange | undefined
  openGuestsInput: () => void
  closeGuestsInput: () => void
  setDestination: (destination: string) => void
  setEventStartAndEndDates: (dates: DateRange | undefined) => void;
}

export function DestionationAndDateStep ({isGuestsInputOpen, openGuestsInput, closeGuestsInput, setDestination, eventStartAndEndDates, setEventStartAndEndDates}: DestionationAndDateStepProps) {
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);

  const openDatePicker = () => setIsDatePickerOpen(true);
  const closeDatePicker = () => setIsDatePickerOpen(false);

  const displayedDate = eventStartAndEndDates && eventStartAndEndDates.from && eventStartAndEndDates.to
    ? format(eventStartAndEndDates.from, "d' de 'LLL").concat(" a ").concat(format(eventStartAndEndDates.to, "d' de 'LLL"))
    : null;

  return (
    <div className="flex items-center h-16 px-4 gap-3 bg-zinc-900 rounded-xl shadow-shape">
      <span className="flex items-center gap-2 flex-1">
        <MapPin className="size-5 text-zinc-400" />
        <input
          disabled={isGuestsInputOpen}
          type="text"
          placeholder="Para onde você vai?"
          className="bg-transparent text-lg placeholder-zinc-400 outline-none w-full"
          onChange={event => setDestination(event.target.value)} 
        />
      </span>
      <button disabled={isGuestsInputOpen} onClick={openDatePicker} className="flex items-center gap-2 text-left">
        <Calendar className="size-5 text-zinc-400" />
        <span className="w-48 text-lg text-zinc-400 flex-1" >
          {displayedDate || "Quando "}
        </span>
      </button>

      {isDatePickerOpen && (
        <div className="fixed inset-0 bg-black/65 flex items-center justify-center">
          <div className="bg-zinc-900 w-fit rounded-xl py-5 px-6 space-y-5 shadow-shape">
   
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Confirmar criação da viagem</h2>
                <button type="button" onClick={closeDatePicker}>
                  <X className="size-5 text-zinc-400"/>
                </button>
              </div>

            </div>
   
            <DayPicker mode="range" selected={eventStartAndEndDates} onSelect={setEventStartAndEndDates}/>
          </div>
        </div>
      )}

      <span className="w-px h-6 bg-zinc-800" />

      {isGuestsInputOpen ? (
        <Button type="button" variant="secondary" onClick={closeGuestsInput} >
          Alterar local/data
          <Settings2 className="size-5"/>
        </Button>
      ) : (
        <Button type="button" onClick={openGuestsInput} >
          Continuar
          <ArrowRight className="size-5"/>
        </Button>
      )}
    </div>
  );
}