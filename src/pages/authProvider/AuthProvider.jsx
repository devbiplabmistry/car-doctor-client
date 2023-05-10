import { createContext, useState } from "react";
import app from "../../firebase/firebase.config";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";



export const AuthContext = createContext()
const auth = getAuth(app)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const AuthInfo = {
        createUser,
    }
    return (       
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>

    );
};
export default AuthProvider;