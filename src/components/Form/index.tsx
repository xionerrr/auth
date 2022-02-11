import React, { useState } from 'react'

import { StyledFirstInput, StyledForm, StyledInputs, StyledSecondInput } from './styled'

interface FormProps {
    title: string,
    handleClick: (email:string, password:string) => void
}

export const Form = ({title, handleClick}:FormProps) => {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    const emailChanger = (e:React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }

    const passChanger = (e:React.ChangeEvent<HTMLInputElement>) => {
        setPass(e.target.value)
    }

    return (
        <StyledForm autoComplete="new-password">
            <StyledInputs>
                <StyledFirstInput>
                    <span>E-mail</span>
                    <input 
                        type="email"
                        value={email}
                        onChange={emailChanger}
                        placeholder="E-mail"
                        autoComplete="off"
                        required
                    />
                </StyledFirstInput>
                <StyledSecondInput>
                    <span>Password</span>
                    <input 
                        type="password"
                        value={pass}
                        onChange={passChanger}
                        placeholder="Password"
                        autoComplete="new-password"
                        required
                    />
                </StyledSecondInput>
            </StyledInputs>
            <button
                onClick={(e) => handleClick(email, pass)}
            >
                {title}
            </button>
        </StyledForm>
    )
}