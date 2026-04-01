import { cn } from "../utils/cn";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  classname?: string;
}



export function Button({label, classname, ...buttonProps }: ButtonProps) {

  return (
    <button {...buttonProps} className={cn("bg-stone-300 rounded-lg w-xs px-3 py-2 hover:bg-amber-400" , classname)} >
      <label className="text-stone-600 text-lg font-bold">{label}</label>
    </button>
  );
}