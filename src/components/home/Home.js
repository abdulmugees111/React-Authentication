import React from "react";
import { auth } from "../../firebaseConfig";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
        console.log("Signed out successfully");
      })
      .catch((error) => {});
  };
  return (
    <div> 
      <nav>
        <h1>Welcome Home</h1>

        <div>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </nav>
    </div>
  );
};

export default Home;
