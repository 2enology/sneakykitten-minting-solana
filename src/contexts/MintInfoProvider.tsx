import { useState, createContext } from "react";
import { MintInfoContextType } from "../types/types";
import { useWallet } from "@solana/wallet-adapter-react";

export const MintInfoContext = createContext<MintInfoContextType>({
  totalSupply: undefined,
});

const MintInfoProvider: React.FC = ({ children }) => {
  const wallet = useWallet();
  const [totalSupply, setTotalSupply] = useState<number | undefined>(0);

  



  return (
    <MintInfoContext.Provider
      value={{
        totalSupply,
      }}
    >
      {children}
    </MintInfoContext.Provider>
  );
};

export default MintInfoProvider;
