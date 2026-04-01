import { cn } from "../utils/cn";
import ErrorMessage from "./Error";

interface InputDefaultProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  errorMessage?: string;
}

export default function InputDefault({ type = 'text', className, errorMessage, ...inputProps }: InputDefaultProps) {
  return (
    <div className="flex flex-col">
      <input  {...inputProps} type={type} className={cn('p-2 rounded bg-stone-300 text-stone-800 outline-2 outline-transparent focus-within:outline-amber-400', className)}/>
      <ErrorMessage message={errorMessage}/>
    </div>
  );
}