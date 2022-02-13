import React, { useState } from 'react'

import { StyledForm, StyledInput, StyledInputBlock, StyledInputs, StyledLabel, StyledSubmitButton } from './styled'

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
                <StyledInputBlock>
                    <StyledLabel>E-mail</StyledLabel>
                    <StyledInput 
                        type="email"
                        value={email}
                        onChange={emailChanger}
                        placeholder="[a-z0-9]"
                        autoComplete="off"
                        required
                    />
                </StyledInputBlock>
                <StyledInputBlock>
                    <StyledLabel>Password</StyledLabel>
                    <StyledInput 
                        type="password"
                        value={pass}
                        onChange={passChanger}
                        placeholder="^.*[a-zA-Z]+.*$"
                        autoComplete="new-password"
                        required
                    />
                </StyledInputBlock>
            </StyledInputs>
            <StyledSubmitButton
                onClick={(e) => handleClick(email, pass)}
                type="submit"
            >
                {title}
            </StyledSubmitButton>
        </StyledForm>
    )
}