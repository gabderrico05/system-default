import { useState } from 'react';
import eyeOpenIcon from '../../../shared/assets/icons/eye-open.svg';
import eyeClosedIcon from '../../../shared/assets/icons/eye-slash.svg';
import { cn } from '../../../shared/utils/cn';
import ErrorMessage from '../../../shared/components/Error';

interface PasswordInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  errorMessage?: string;
}



export default function PasswordInput({ className, errorMessage , ...inputProps }: PasswordInputProps) {

  const [showPassword, setShowPassword] = useState(false);


  return(
    
      <div className='flex flex-col'>
        <div className={cn('w-full flex pl-2 pr-4 rounded bg-stone-300 outline-2 outline-transparent focus-within:outline-amber-400', className)}>
          <input
            {...inputProps}
            type={showPassword ? 'text' : 'password'}
            className='outline-none flex-1 py-2 text-stone-800 pr-4'
          />
          <button type='button' className='flex items-center justify-center' onClick={() => setShowPassword(!showPassword)}>
          <img src={showPassword? eyeClosedIcon : eyeOpenIcon} alt="Mostrar senha" className='w-6 h-6'/>
          </button>
       </div>
          <ErrorMessage message={errorMessage}/>
      </div>  
  );
}