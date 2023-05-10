import { useContext } from 'react';
import loginImg from '../../assets/images/login/login.svg'
import { AiOutlineGoogle,AiFillLinkedin } from "react-icons/ai";
import { RiFacebookBoxFill} from "react-icons/ri";
import { Link } from 'react-router-dom';
import { AuthContext } from '../authProvider/AuthProvider';

const Login = () => {
    const {signInUser} =useContext(AuthContext)
    const handleSignIn = (event) => {
        event.preventDefault()
        const form =event.target;
        const email =form.email.value;
        const password=form.password.value;
        signInUser(email,password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
            alert('You sucessfully signIn')
          })
          .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage); 
          });
    }
    return (
        <div className="hero min-h-screen bg-white">
            <div className="hero-content flex-col lg:flex-row">
                <div className=" mr-16">
                    <img src={loginImg} alt="" />
                </div>
                <div className="card  w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleSignIn}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                               <input className='bg-orange-400 btn rounded-lg border-0' type="submit" value="Login" />
                            </div>
                        </form>
                            <h3 className='text-center text-base mt-7 mb-7'>Or Sign In With </h3>
                        <div className="another-sign flex gap-3 text-center mx-auto">
                            <AiOutlineGoogle className='w-5 h-5 rounded-[50%] bg-slate-400'></AiOutlineGoogle>
                            <AiFillLinkedin className='w-5 h-5 rounded-[50%] bg-slate-400'></AiFillLinkedin>
                            <RiFacebookBoxFill className='w-5 h-5 rounded-[50%] bg-slate-400'></RiFacebookBoxFill>
                        </div>
                        <div className='text-center mt-12'>
                            <h4>New In  car Doctor ? <Link to="/signup" className='text-sm text-orange-400'>Sign Up</Link></h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;