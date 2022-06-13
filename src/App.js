import "./styles.css";

import React from "react";
import { useMoralis } from "react-moralis";
import SignIn from "./Components/SignIn";
import SignOut from "./Components/SignOut";

export default function App() {
  const { isAuthenticated } = useMoralis();

  return (
    <div>
      <div className="backgroundParent">
        {isAuthenticated ? <SignOut /> : <SignIn />}
      </div>
    </div>
  );
}
