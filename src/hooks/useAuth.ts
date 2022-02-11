import { useStoreSelector } from 'store/store';


export const useAuth = () => {
    const {id, email, token} = useStoreSelector(state => state.user)

    return {
        isAuth: !!email,
        id,
        email,
        token
    }
}