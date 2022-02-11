import { useNavigate } from 'react-router-dom'

import { Form } from 'components/Form'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { setUser } from 'store/reducer/userSlice'
import { ROUTES } from 'routes/routes'
import { useAppDispatch } from 'store/store'

export const LoginForm = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const handleLogin = (email:string, password:string) => {
        const auth = getAuth()
        signInWithEmailAndPassword(auth, email, password)
            .then(({user}:any) => {
                console.log(user)
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken,
                }))
                navigate(ROUTES.HOME)
            })
    }

    return (
        <Form 
            title="Log In"
            handleClick={handleLogin}
        />
    )
}
