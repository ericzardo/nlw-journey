import { ReactNode } from "react"

interface ModalProps {
  children: ReactNode
}

export function Modal ({ children }: ModalProps) {
  return (
    <div className="fixed inset-0 bg-black/65 flex items-center justify-center">
      <div className="bg-zinc-900 w-[640px] rounded-xl py-5 px-6 space-y-5 shadow-shape">
        {children}
      </div>
    </div>
  )
}