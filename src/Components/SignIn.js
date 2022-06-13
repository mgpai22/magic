import { useMoralis } from "react-moralis";
import Logo from "../Moralislogo.png";
import { useState } from "react";

export default function SignIn() {
  const { authenticate, authError, isAuthenticating } = useMoralis();

  const [email, setEmail] = useState("");

  //Magic Authentication
  const handleCustomLogin = async () => {
    await authenticate({
      provider: "magicLink",
      email: email,
      apiKey: "", // Enter API key from Magic Dashboard https://dashboard.magic.link/
      network: "rinkbey"
    });
  };

  return (
    <div className="card">
      <img alt="logo" className="img" src={Logo} width={80} height={80} />
      {isAuthenticating && <p className="green">Authenticating</p>}
      {authError && (
        <p className="error">{JSON.stringify(authError.message)}</p>
      )}
      <div className="buttonCard">
        <input
          type={"email"}
          className="input"
          placeholder="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        <button className="loginButton" onClick={handleCustomLogin}>
          Login with Magic Link
        </button>
      </div>
    </div>
  );
}
