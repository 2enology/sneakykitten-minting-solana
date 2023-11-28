import { useState, createContext, useEffect, useMemo } from "react";
import { MintInfoContextType } from "../types/types";
import { useWallet } from "@solana/wallet-adapter-react";
import axios from "axios";

export const MintInfoContext = createContext<MintInfoContextType>({
  totalSupply: undefined,
  ownNftCounts: undefined,
  claimAmount: undefined,
  getMintInfo: () => {},
});

const MintInfoProvider: React.FC = ({ children }) => {
  const { publicKey } = useWallet();
  const wallet = useWallet();
  const base58 = useMemo(() => publicKey?.toBase58() || "", [publicKey]);
  const [totalSupply, setTotalSupply] = useState<number | undefined>(0);
  const [ownNftCounts, setOwnNftCounts] = useState<number | undefined>(0);
  const [claimAmount, setClaimAmount] = useState<number | undefined>(0);

  const getMintInfo = async () => {
    try {
      const res = await axios.get(
        `http://144.126.146.144:8090/user/currentIndex`
      );

      const mintData = res.data;
      setTotalSupply(mintData?.totalSupply);
    } catch (err: any) {
      if (err.status === 404) {
        console.log("No data found");
      } else {
        console.error(err);
        // display a more user-friendly error message
      }
    }
  };

  const getClaimReward = async () => {
    if (base58 !== undefined && base58 !== "") {
      const resOfClaim = await axios.get(
        `http://144.126.146.144:8090/user/claimAmount/`,
        {
          params: {
            address: base58,
          },
        }
      );
      const claimData = resOfClaim.data;
      setOwnNftCounts(claimData?.count);
      setClaimAmount(claimData?.totalAmount);
    }
  };

  useEffect(() => {
    getMintInfo();
  }, []);

  useEffect(() => {
    getClaimReward();
  }, [wallet]);

  return (
    <MintInfoContext.Provider
      value={{
        totalSupply,
        ownNftCounts,
        claimAmount,
        getMintInfo,
      }}
    >
      {children}
    </MintInfoContext.Provider>
  );
};

export default MintInfoProvider;
