import { Navigate } from "react-router-dom";

import { StyledHome } from './styled'
import { ROUTES } from 'routes/routes'
import { useAuth } from 'hooks/useAuth'
import { rejectUser } from 'store/reducer/userSlice';
import { useAppDispatch } from 'store/store';

export const Home = () => {
    const dispatch = useAppDispatch()

    const {isAuth, email} = useAuth()

    const handleLogOut = () => {
        dispatch(rejectUser())
    }

    return isAuth ? 
    ( <StyledHome
        exit={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        initial={{ opacity: 0 }}
    >
        <h1>Hello!</h1>
        <h2>{email}</h2>
        <button onClick={handleLogOut}>
            Log out from account.
        </button>
    </StyledHome> ) 
    : ( <Navigate to={ROUTES.LOGIN} /> )
}