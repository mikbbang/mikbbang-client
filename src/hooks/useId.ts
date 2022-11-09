import decodeJwt from 'jwt-decode';

import { useAuthContext } from '../contexts/AuthContext';


export default function useId() {
    const authContext = useAuthContext();

    if(authContext.jwt === null)
        return null;
    
    try {
        const token = decodeJwt(authContext.jwt) as { id: string };
        
        return token.id;
    } catch(e) {
        return null;
    }
}
