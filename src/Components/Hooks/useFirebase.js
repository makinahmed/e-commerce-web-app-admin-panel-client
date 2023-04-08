import { useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { initilizeFirebaseApp } from "../../firebase/firebase.init";


initilizeFirebaseApp();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [authError, setAuthError] = useState("");
  const [loading, setLoading] = useState(true);

  const auth = getAuth();

  
  const registerUser = (mobile, password) => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, mobile, password)
      .then((newUser) => {
        setUser(newUser?.user);
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const signInUser = (email, password) => {
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential?.user);
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setLoading(false));
  };

  const signOutUser = () => {
    setLoading(true);
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setLoading(false));
  };




  useEffect(() => {
    setLoading(true);
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        user
          .getIdToken()
          .then((token) => console.log("TOKEn localstorage"));
        setUser(user);
      } else {
        setUser({});
      }
      setLoading(false);
    });
    return () => unsubscribe;
  }, []);
  return {
    signOutUser,
    signInUser,
    registerUser,
    user,
    loading,
    setLoading,

  };
};

export default useFirebase;
