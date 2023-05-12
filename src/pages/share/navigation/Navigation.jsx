import { Link } from "react-router-dom";
import { BsSearch, BsBag } from "react-icons/bs";
import logo from '../../../assets/icons/logo.svg'
import { useContext } from "react";
import { AuthContext } from "../../authProvider/AuthProvider";

const Navigation = () => {
    const { user, signOut, loading,setUser } = useContext(AuthContext);
    if (loading) {
        return <progress className="progress w-56"></progress>
    }

    const handleLogOut = () => {
        signOut()
            .then(() => {
                alert('Sign Out Sucessfully')
             return setUser(null)
            })
            .catch((error) => {
                console.log(error.message);
            });

    }
    return (
        <div className="navbar bg-base-100 mt-11">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <Link>Home</Link>
                        </li>
                        <li>
                            <Link>About</Link>
                        </li>
                        <li>
                            <Link>Services</Link>
                        </li>
                        <li>
                            <Link>Blog</Link>
                        </li>
                        <li>
                            <Link>Contact</Link>
                        </li>
                        <div>
                            {user ? <li>
                                <Link>LogOut</Link> </li> :
                                <li>
                                    <Link to="/login">Login</Link>
                                </li>
                            }
                        </div>
                    </ul>
                </div>
                <Link to="/">
                    <img src={logo} alt="" className="w-28 h-20" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li className="text-base font-normal font-serif">
                        <Link>Home</Link>
                    </li>
                    <li className="text-base font-normal font-serif">
                        <Link>About</Link>
                    </li>
                    <li className="text-base font-normal font-serif">
                        <Link>Services</Link>
                    </li>
                    <li className="text-base font-normal font-serif">
                        <Link>Blog</Link>
                    </li>
                    <li className="text-base font-normal font-serif">
                        <Link>Contact</Link>
                    </li>
                    <div>
                        {user ?
                            <> <li className="text-base font-normal font-serif">
                            <Link onClick={handleLogOut}>LogOut</Link>
                        </li></> 
                            :<><li className="text-base font-normal font-serif">
                                <Link to="/login">Login</Link>
                            </li> </>    
                        }
                    </div>
                </ul>
            </div>
            <div className="navbar-end">
                <div className="icons flex gap-4 me-4">
                    <BsBag></BsBag>
                    <BsSearch></BsSearch>
                </div>
                <button className="btn btn-outline btn-secondary">Appointment</button>
            </div>
        </div>
    );
};

export default Navigation;