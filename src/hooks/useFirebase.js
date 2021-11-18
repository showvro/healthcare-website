import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";

const useFirebase = () => {
  //Declearing State for User Email and Password
  const [name, setName] = useState("");
  const [user, setUser] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLogin, setIsLogin] = useState(false);

  //Installing Authentication
  const auth = getAuth();

  //Setup Google Driver
  const googleProvider = new GoogleAuthProvider();

  //Google SignIn Function
  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };

  //Sign In With Email and Password
  const handleRegistration = (e) => {
    e.preventDefault();
    if (password.length < 6) {
      setError("Password Must be al least 6 character long!");
      return;
    }
    isLogin ? handleSignIn(email, password) : createNewUser(email, password);
  };

  //Sign In with Email and Password
  const handleSignIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUser(result.user);
        setError("");
        verifyEmail();
        setUserName();
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  //Set Name
  const setUserName = () => {
    updateProfile(auth.currentUser, { displayName: name }).then((result) => {
      console.log(result);
    });
  };

  //Verify Email
  const verifyEmail = () => {
    sendEmailVerification(auth.currentUser).then((result) => {
      console.log("Mail send. Please Verify");
    });
  };

  //create New User
  const createNewUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  //Get Name
  const handleName = (e) => {
    setName(e.target.value);
  };

  //Get Email
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  //Reset Password
  const handleResetPassword = () => {
    if (email.length) {
      sendPasswordResetEmail(auth, email).then(() => {
        console.log("Reset Password Send!");
      });
    }
  };

  //Get Password
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const toogleLogin = (e) => {
    setIsLogin(e.target.checked);
  };
  //Observer User State
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        // console.log("Successfully Sign In");
      }
    });
  }, [auth]);

  //SignOut Function
  const logOut = () => {
    signOut(auth).then(() => {
      setUser({});
      // console.log("Sign Out Successfully");
    });
  };

  //Returning the Functions
  return {
    user,
    error,
    isLogin,
    setError,
    handleName,
    handleEmail,
    handlePassword,
    handleResetPassword,
    handleRegistration,
    googleSignIn,
    handleSignIn,
    toogleLogin,
    logOut,
  };
};

export default useFirebase;
