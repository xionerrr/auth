import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from 'store/store'

import { Form } from 'components/Form'
import { ROUTES } from 'routes/routes'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { setUser } from 'store/reducer/userSlice'

export const SignUpForm = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const handleRegister = (email:string, password:string) => {
        const auth = getAuth()
        createUserWithEmailAndPassword(auth, email, password)
            .then(({user}:any) => {
                console.log(user)
                dispatch(setUser({
                    email: user.email,
                    id: user.id,
                    token: user.accessToken,
                }))
                navigate(ROUTES.HOME)
            })
            .catch(() => {
                console.error("error")
            })
    }

    return (
        <Form 
            title="Sign Up"
            handleClick={handleRegister}
        />
    )
}
