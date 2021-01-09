import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';
import { auth } from './firebase';
import "./Login.css";

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [profilePic, setProfilePic] = useState('');
    const dispatch = useDispatch();

    const loginToApp = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password).then(
            userAuth => {
                dispatch(login({
                    email : userAuth.user.email,
                    uid : userAuth.user.uid,
                    displayName : userAuth.user.displayName,
                    profileUrl : userAuth.user.photoURL 
                }));
            }
        ).catch(error =>alert(error));
    };
    const register = () => {
        if(!name){
            return alert("Please enter Full Name");
        }
        auth.createUserWithEmailAndPassword(email, password)
        .then((userAuth) => {
            userAuth.user.updateProfile({
                displayName : name,
                photoURL : profilePic
            })
            .then(() =>{
                dispatch(login({
                    email : userAuth.user.email,
                    uid : userAuth.user.uid,
                    displayName : name,
                    photoUrl : profilePic
                })
                );
            });
        }).catch(error => alert(error.message));
    };
    return (
        <div className="login">
            <img src="https://www.businessinsider.in/thumb/msid-78510103,width-1200,height-900/linkedin.jpg" alt="logo" />
            <form>
                <input value={name} onChange={e => setName(e.target.value)} placeholder="Full Name (required if registering)" type="text"></input>
                <input value={profilePic} onChange={e => setProfilePic(e.target.value)} placeholder="Profile Picture Url (optional)" type="text"></input>
                <input placeholder="Email" type="email" value={email} onChange={e => setEmail(e.target.value)}></input>
                <input placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)}></input>
                <button type="submit" onClick={loginToApp}> Sign In</button>
            </form>
            <p>Not a member?
              <span className="login_register" onClick={register}>Register Now</span>
            </p>
        </div>
    )
}

export default Login;
