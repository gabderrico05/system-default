import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerSchema, type RegisterForm } from "../schemas/registerSchema";


export function useRegister() {

const navigate = useNavigate();

const [form, setForm] = useState<RegisterForm>({
    fullName: "",
    email: "",
    password: "",
    passwordConfirmation: ""
  })

 const [errors, setErrors] = useState<
    Partial<Record<keyof RegisterForm, string[]>>
  >({})


  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {

    event.preventDefault();
    const result = registerSchema.safeParse(form);

    if(!result.success){
      setErrors(result.error.flatten().fieldErrors)
      return
    }

    navigate('/login')
    
    
  }


  return{
    form,
    errors,
    setForm,
    handleSubmit,
    
  }
}