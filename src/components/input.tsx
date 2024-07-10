import { ComponentProps, ReactElement } from "react";

interface InputProps extends ComponentProps<"input"> {
  placeholder?: string
  icon?: ReactElement
}

export function Input ({placeholder, icon, ...props}: InputProps) {
  return (
    <span className="flex items-center gap-3 h-9 py-5 px-2 bg-zinc-950 rounded-xl flex-1">
      {icon}
      <input {...props} placeholder={placeholder} className="bg-transparent text-md placeholder-zinc-400 outline-none w-full" />
    </span>
  );
}