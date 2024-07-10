import { FormEvent, useState } from "react";
import { ArrowRight, UserRoundPlus } from "lucide-react";
import { InviteGuestsModal } from "./invite-guests-modal";
import { ConfirmTripModal } from "./confirm-trip-modal";
import { DestionationAndDateStep } from "./steps/destination-and-date-step";
import { InviteGuestsStep } from "./steps/invite-guests-step";

export function CreateTripPage() {
  const [isGuestsInputOpen, setisGuestsInputOpen] = useState(false);
  const [isGuestsModalOpen, setisGuestsModalOpen] = useState(false);
  const [isConfirmTripModalOpen, setIsConfirmTripModalOpen] = useState(false)

  const [emailsToInvite, setEmailsToInvite] = useState<string[]>([]); 

  const openGuestsInput = () => setisGuestsInputOpen(true);
  const closeGuestsInput = () => setisGuestsInputOpen(false);
  
  const openGuestsModal = () => setisGuestsModalOpen(true);
  const closeGuestsModal = () => setisGuestsModalOpen(false);

  const openConfirmTripModalOpen = () => setIsConfirmTripModalOpen(true);
  const closeConfirmTripModalOpen = () => setIsConfirmTripModalOpen(false);

  const addNewEmailToInvite = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const data = new FormData(event.currentTarget);
    const email = data.get("email")?.toString();

    if (!email || emailsToInvite.includes(email)) return;

    setEmailsToInvite([
      ...emailsToInvite,
      email
    ]);

    event.currentTarget.reset();
  }

  const removeEmailToInvite = (emailToRemove: string) => {
    const newEmailList = emailsToInvite.filter(email => email !== emailToRemove);

    setEmailsToInvite(newEmailList);
  }

  const createTrip = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log("Create Trip!")
  }


  return (
    <div className="h-screen flex items-center justify-center bg-pattern bg-no-repeat bg-center">
      <div className="max-w-3xl w-full px-4 text-center space-y-10">
        <div className="flex flex-col items-center gap-3">
          <img src="/logo.svg" alt="plann.er" />
          <p className="text-zinc-300 text-lg">Convide seus amigos e planeje sua próxima viagem!</p>
        </div>

        <div className="space-y-4">

          <DestionationAndDateStep closeGuestsInput={closeGuestsInput} openGuestsInput={openGuestsInput} isGuestsInputOpen={isGuestsInputOpen}/>

          {isGuestsInputOpen && (
            <InviteGuestsStep openGuestsModal={openGuestsModal} openConfirmTripModalOpen={openConfirmTripModalOpen} emailsToInvite={emailsToInvite} />
          )}

        </div>

        <p className="text-zinc-500 text-sm">Ao planejar sua viagem pela plann.er você automaticamente concorda <br />
        com nossos <a href="#" className="text-zinc-300 underline">termos de uso</a> e <a href="#" className="text-zinc-300 underline">políticas de privacidade</a>.</p> 
      </div>

      {isGuestsModalOpen && (
        <InviteGuestsModal 
          addNewEmailToInvite={addNewEmailToInvite}
          removeEmailToInvite={removeEmailToInvite}
          closeGuestsModal={closeGuestsModal}
          emailsToInvite={emailsToInvite}
        />
      )}

      {isConfirmTripModalOpen && (
        <ConfirmTripModal closeConfirmTripModalOpen={closeConfirmTripModalOpen} createTrip={createTrip} />
      )}

      
    </div>
  )
}
