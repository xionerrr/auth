import { useStoreSelector } from "./useAppSelector"


export const useAuth = () => {
    const {id, email, token} = useStoreSelector(state => state.user)

    return {
        isAuth: !!email,
        id,
        email,
        token
    }
}