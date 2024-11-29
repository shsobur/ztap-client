import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";
import {
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import PropTypes from "prop-types";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Sign Up__
  const signUpUser = async (email, password) => {
    setLoading(true);
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      return result;
    } catch (error) {
      console.log("Error signing up:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Sign in__
  const signInUser = async (email, password) => {
    setLoading(true);
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      return result;
    } catch (error) {
      console.log("Error signing up:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Sign out__
  const logOut = () => {
    return signOut(auth);
  };

  // Searching for user__
  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      unSub();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    signUpUser,
    signInUser,
    logOut,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;