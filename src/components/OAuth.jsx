import { FaGoogle } from "react-icons/fa";
import { toast } from "react-toastify";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import {db} from '../firebase';
import { useNavigate } from "react-router";


export default function OAuth() {
  const navigate = useNavigate();
  async function onGoogleClick(){
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();

      const result = await signInWithPopup(auth , provider);
      const user = result.user;
      // check if user exists in db:

      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);

      if(!docSnap.exists()){
        await setDoc(docRef,{
          name:user.displayName,
          email:user.email,
          timestamp:serverTimestamp(),
        })
      }
      navigate('/');
      toast.success("Signed using google")

    } catch (error) {
      toast.error(error);

      
    }
  }
  return (
    <div className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-md border border-transparent bg-red-500 px-4 py-2 text-white shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
      <span>
        <FaGoogle />
      </span>
      <button type="button" onClick={onGoogleClick}>Continue with Google</button>
    </div>
  );
}
