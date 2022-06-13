import { useMoralis } from "react-moralis";
import { useEffect, useState } from "react";

export default function SignOut() {
  const { logout, Moralis, user } = useMoralis();
  const [balance, setBalance] = useState(0);
  const [toAddress, setToAddress] = useState("");

  const fetchBalance = async () => {
    const options = { chain: Moralis.Chains.ETH_RINKBEY };
    const balance = await Moralis.Web3API.account.getNativeBalance(options);
    console.log(balance.balance / 10 ** 18);
    setBalance(balance.balance / 10 ** 18);
  };

  useEffect(() => {
    fetchBalance();
  }, []);

  //MAgic Transfer
  const handleTransfer = async () => {
    const valueToTransfer = 1677;
    await Moralis.transfer({
      amount: valueToTransfer,
      receiver: toAddress,
      type: "native"
    })
      .then((e) => {
        alert("sucesfully transfered");
      })
      .catch((e) => {
        alert(e, "Enter wallet address of the recipient");
      });
    await fetchBalance();
  };

  return (
    <div className="signOutCard">
      <h4>Welcome To Moralis x Magic!</h4>
      <button className="refresh" onClick={fetchBalance}>
        Refresh
      </button>
      <p className="subHeader">Details:</p>

      <div className="detailsDiv">
        <div>
          <h5>Account:</h5>
          <p>{user.attributes.accounts}</p>
        </div>
        <div>
          <h5>Balance (Eth)</h5>
          <p>{balance} </p>
        </div>
      </div>

      <div className="fotter">
        <input
          type={"text"}
          className="inputAddress"
          placeholder="0x... //to address"
          value={toAddress}
          onChange={(e) => {
            setToAddress(e.target.value);
          }}
        />
        <button className="loginButton" onClick={handleTransfer}>
          Test Transfer
        </button>
        <button className="loginButton" onClick={logout}>
          Sign Out
        </button>
      </div>
    </div>
  );
}
