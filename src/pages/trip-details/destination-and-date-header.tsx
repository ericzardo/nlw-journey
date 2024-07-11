import { FormEvent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { api } from "../../lib/axios";

import { MapPin, Calendar, RefreshCw, Settings2, X } from "lucide-react";
import { Button } from "../../components/button";
import { format } from "date-fns";
import { DateRange, DayPicker } from "react-day-picker";

interface Trip {
  id: string
  destination: string
  starts_at: string
  ends_at: string
  is_confirmed: boolean
}

export function DestionationAndDateHeader () {
  const { tripId } = useParams();

  const [trip, setTrip] = useState<Trip | undefined>();
  const [destination, setDestination] = useState("");
  const [eventStartAndEndDates, setEventStartAndEndDates] = useState<DateRange | undefined>();

  const [isChangingLocalOrDate, setIsChangingLocalOrDate] = useState(false);
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);

  const changeLocalOrDate = () => setIsChangingLocalOrDate(true);
  const exitChangeLocalOrDate = () => setIsChangingLocalOrDate(false);

  const openDatePicker = () => setIsDatePickerOpen(true);
  const closeDatePicker = () => setIsDatePickerOpen(false);

  useEffect(() => {
    api.get(`trips/${tripId}`).then(response => {
      const tripData = response.data.trip;

      setTrip(tripData);
      setDestination(tripData.destination);
      setEventStartAndEndDates({
        from: new Date(Date.parse(tripData.starts_at)),
        to: new Date(Date.parse(tripData.ends_at)),
      });
    });
  }, [ tripId ]);

  const displayedDate = () => {
    if (!trip) return null;

    const [starts_at, ends_at] = [eventStartAndEndDates?.from, eventStartAndEndDates?.to];

    if (!starts_at || !ends_at) return "Quando?";

    return format(starts_at, "d' de 'LLL").concat(" a ").concat(format(ends_at, "d' de 'LLL"));
  };

  const updateTrip = async () => {

    if (!destination) return;

    if (!eventStartAndEndDates?.from || !eventStartAndEndDates?.to) return;

    const data = {
      destination,
      starts_at: eventStartAndEndDates?.from || trip?.starts_at,
      ends_at: eventStartAndEndDates?.to || trip?.ends_at,
    };

    await api.put(`/trips/${tripId}`, data)
      .then(() => {
        exitChangeLocalOrDate();
        window.document.location.reload();
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div className="w-full h-16 bg-zinc-900 shadow-shape flex items-center justify-between rounded-xl px-6">
      <span className="flex items-center gap-2 flex-1">
        <MapPin className="size-5 text-zinc-400" />
        <input
          disabled={!isChangingLocalOrDate}
          type="text"
          value={destination}
          className="bg-transparent text-lg text-zinc-400 disabled:text-zinc-100 focus:text-zinc-100 outline-none w-full"
          onChange={event => setDestination(event.target.value)}
        />
      </span>
      <span className="flex items-center gap-5">
        <span className="flex items-center justify-end gap-2">
          <Calendar className="size-5 text-zinc-400" />
          <button disabled={!isChangingLocalOrDate} onClick={openDatePicker} className="text-lg text-zinc-400 flex-1 disabled:text-zinc-100" >
            {displayedDate()}
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
        </span>
        <span className="w-px h-6 bg-zinc-800" />
        {isChangingLocalOrDate ? (
          <Button variant="primary" onClick={updateTrip}>
            Atualizar viagem
            <RefreshCw className="size-5 text-lime-950"/>
          </Button>
        ) : (
          <Button variant="secondary" onClick={changeLocalOrDate}>
            Alterar local/data
            <Settings2 className="size-5 text-zinc-400"/>
          </Button>
        )}
        
      </span>
    </div>
  );
}