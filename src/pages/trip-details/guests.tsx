import { CircleDashed, CircleCheck, UserCog, RefreshCcw, Trash } from "lucide-react";
import { useState } from "react";
import { Button } from "../../components/button";

export function Guests () {
  const [isManagingUsers, setIsManagingUsers] = useState(false);

  const openHandleUsers = () => setIsManagingUsers(true);
  const closeHandleUsers = () => setIsManagingUsers(false);

  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-xl text-zinc-50 font-semibold">Convidados</h2>

      <span className="space-y-4">

        <div className="flex items-center justify-between gap-3">
          <span>
            <p className="text-zinc-100 font-medium">Jessica White</p>
            <p className="text-zinc-400 text-xs truncate">jessica.white44@yahoo.com</p>
          </span>

          {isManagingUsers ? (
            <button>
              <Trash className="size-5 text-red-400 shrink-0" />
            </button>
          
          ) : (
            <CircleDashed className="size-5 text-zinc-400 shrink-0" />
          )}

        </div>

        <div className="flex items-center justify-between gap-3">
          <span>
            <p className="text-zinc-100 font-medium">Dr. Rita Pacocha</p>
            <p className="text-zinc-400 text-xs truncate">lacy.stiedemann@gmail.com</p>
          </span>

          {isManagingUsers ? (
            <button>
              <Trash className="size-5 text-red-400 shrink-0" />
            </button>
          ) : (
            <CircleCheck className="size-5 text-lime-300 shrink-0" />
          )}

        </div>

        <div className="flex items-center justify-between gap-3">
          <span>
            <p className="text-zinc-100 font-medium">Wilfred Dickens III</p>
            <p className="text-zinc-400 text-xs truncate">marian.hyatt@hotmail.com</p>
          </span>

          {isManagingUsers ? (
            <button>
              <Trash className="size-5 text-red-400 shrink-0" />
            </button>
          ) : (
            <CircleCheck className="size-5 text-lime-300 shrink-0" />
          )}

        </div>

      </span>

      {isManagingUsers ? (
        <Button onClick={closeHandleUsers} >
          <RefreshCcw className="size-5"/>
          Atualizar convidados
        </Button>
      ) : (
        <Button variant="secondary" onClick={openHandleUsers} >
          <UserCog className="size-5 text-zinc-200"/>
          Gerenciar convidados
        </Button>
      )}

    
    </div>
  );
}