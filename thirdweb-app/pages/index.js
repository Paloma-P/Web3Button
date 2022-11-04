import { ConnectWallet } from "@thirdweb-dev/react";
import { Web3Button } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";

export default function Home() {

  return (
    <div>
      <ConnectWallet />
      <Web3Button 
      contractAddress="0x6b24227A192873C4b4d744B168dBD409C0427f4b"
      action={(contract) => {
        contract.erc721.claim(1)
        // Web3Button indentifies the prebuilt contract so we use erc721 above
      }}
      >
      ClaimNFT
    </Web3Button>
    <Web3Button
    contractAddress="0x6b24227A192873C4b4d744B168dBD409C0427f4b"
    action={(contract) => {
      contract.call("burn", 0)
      // Here we will add the name of the function and then pass in the necessary argument which is tokenId = 0
    }}
    >
      BurnNFT
    </Web3Button>
    </div>
  );
}