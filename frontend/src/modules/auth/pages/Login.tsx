
import { Button } from '../../../shared/components/Button'
import InputDefault from '../../../shared/components/InputDefault'
import PasswordInput from '../components/PasswordInput'

export function Login() {
  return(
    <div className='w-screen h-screen flex flex-col items-center justify-center'> 
      <h2 className='text-amber-400 font-bold text-5xl mb-12'>Sistema Default</h2>

      <div className='flex flex-col items-center'>
      <form className='w-xs flex flex-col gap-8 mt-10'>
      
          <InputDefault type='email' placeholder='Email'/>
       
          <PasswordInput placeholder='Password'/>
          
          <Button classname='mt-10' type='submit' label='Login' onSubmit={() =>console.log('teste')} />
      </form>

        <div className='mt-12 flex flex-col items-center justify-center gap-3'>
          <a className='text-amber-400 underline underline-offset-2' href='/signup' >Cadastre-se aqui</a>
          <a className='text-amber-400 underline underline-offset-2' >Esqueci minha senha</a>
        </div>
      </div>
      
   </div>
  )

}