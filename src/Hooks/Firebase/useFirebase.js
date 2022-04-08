import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from 'react';
import initializeAuthentication from '../../config/firebase';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from "react-router-dom";


//initialize firebase  authentication
initializeAuthentication();

const useFirebase = () => {
    const [admin, setAdmin] = useState(false);
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);
    const auth = getAuth();
    let navigate = useNavigate();
    const location = useLocation();
    const redirectUrl = location.state?.from || '/';



    // useEffect(() => {
    //     fetch(``)
    //         .then(res => res.json())
    //         .then(data => setAdmin(data.admin))
    // }, [user.email])


    //on State Change 
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }

            setLoading(false);
        })
    }, [auth])

    //sign up functionality
    const signUpUser = (email, password, name, image) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((res) => {
                setLoading(true);
                setUser(res.user);
                // saveUser(email, name, image, "POST");
                updateProfile(auth.currentUser, {
                    displayName: name,
                    photoURL: image
                }).then(() => {

                    Swal.fire("Sign Up!", "Sign Up Successfull", "success");

                    navigate(redirectUrl);
                })

            }).finally(() => setLoading(false)).catch(err => setError(err.message));
    }

    //sign in functionality
    const signInUser = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(res => {
                setLoading(true);
                setUser(res.user);
                Swal.fire("Sign in!", "Sign in Successfull", "success");
                navigate(redirectUrl);
            }).finally(() => setLoading(false))
            .catch(err => setError(err.message))
    }


    //google sign in 
    const signInWithGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(res => {
                setLoading(true);
                setUser(res.user);
                // saveUser(res.user.email, res.user.displayName, res.user.photoURL, "PUT");
                Swal.fire("Sign in!", "Sign in Successfull", "success");
                navigate(redirectUrl);
            }).finally(() => setLoading(false)).catch(err => setError(err.message))
    }

    // sign out 
    const signOutUser = () => {
        signOut(auth).then(() => {
            setUser({});
            Swal.fire("Sign Out!", "Sign out Successfull", "error");
            navigate('/signin')
        }).finally(() => setLoading(false)).catch((err) => {
            setError(err.message);
        });
    }

    // const saveUser = (email, displayName, photoURL, method) => {
    //     const user = { email, displayName, photoURL };
    //     fetch('', {
    //         method: method,
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(user)
    //     })
    //         .then()
    // }

    return {
        user,
        admin,
        error,
        loading,
        signUpUser,
        signInUser,
        signInWithGoogle,
        signOutUser,
    }
}

export default useFirebase
