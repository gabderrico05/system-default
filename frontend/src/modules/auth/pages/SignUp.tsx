import { Button } from "../../../shared/components/Button";
import InputDefault from "../../../shared/components/InputDefault";
import PasswordInput from "../components/PasswordInput";
import { useRegister } from "../hooks/useRegister";



export default function SignUp() {

  const {
    form,
    errors,
    setForm,
    handleSubmit
  } = useRegister();
    

  return(
      <div className="w-screen h-screen flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-amber-400">Register</h1>

        <div className='flex flex-col items-center'>
              <form className='w-xs flex flex-col gap-4 mt-16' onSubmit={handleSubmit}>

                  <InputDefault errorMessage={errors.fullName?.[0]} onChange={(e) => setForm({...form, fullName : e.target.value})} type='text' placeholder='Full Name'/>
              
                  <InputDefault errorMessage={errors.email?.[0]} onChange={(e) => setForm({...form, email : e.target.value})} type='email' placeholder='Email'/>
               
                  <PasswordInput errorMessage={errors.password?.[0]} onChange={(e) => setForm({...form, password : e.target.value})} placeholder='New password'/>

                  <PasswordInput errorMessage={errors.passwordConfirmation?.[0]} onChange={(e) => setForm({...form, passwordConfirmation : e.target.value})} placeholder='Repeat password'/>
                  
                    <Button classname='mt-10' type='submit' label='Register' />
              </form>
        </div>


      </div>

  );
}