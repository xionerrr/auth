import { Link } from 'react-router-dom'
import { LoginForm } from 'components/Login'
import { ROUTES } from 'routes/routes'
import { StyledLogin } from './styled'

export const Login = () => {
    return (
        <StyledLogin
            exit={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            initial={{ opacity: 0 }}
        >
            <LoginForm />
            <Link to={ROUTES.REGISTER}>Register</Link>
        </StyledLogin>
    )
}
