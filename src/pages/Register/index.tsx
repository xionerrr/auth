import { Link } from 'react-router-dom'

import { SignUpForm } from 'components/Signup'
import { ROUTES } from 'routes/routes'
import { StyledRegister, StyledRegisterQuestion } from './styled'

export const Register = () => {
    return (
        <StyledRegister
            exit={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            initial={{ opacity: 0 }}
        >
            <SignUpForm />
            <StyledRegisterQuestion>
                <span>
                    Already have an account?
                </span>    
                <Link to={ROUTES.LOGIN}>Log In</Link>
            </StyledRegisterQuestion>
        </StyledRegister>
    )
}