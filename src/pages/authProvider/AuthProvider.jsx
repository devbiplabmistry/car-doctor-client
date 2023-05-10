import { createContext, useState } from "react";
import app from "../../firebase/firebase.config";
import { getAuth, createUserWithEmailAndPassword ,signInWithEmailAndPassword} from "firebase/auth";



export const AuthContext = createContext()
const auth = getAuth(app)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const AuthInfo = {
        createUser,
        signInUser
    }
    return (       
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>

    );
};
export default AuthProvider;