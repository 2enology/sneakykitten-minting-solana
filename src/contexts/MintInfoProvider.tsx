import { useState, createContext, useEffect, useMemo } from "react";
import { MintInfoContextType } from "../types/types";
import { useWallet } from "@solana/wallet-adapter-react";
import axios from "axios";

export const MintInfoContext = createContext<MintInfoContextType>({
  totalSupply: undefined,
  ownNftCounts: undefined,
  claimAmount: undefined,
  lifeTimeReward: undefined,
  getMintInfo: () => {},
});

const MintInfoProvider: React.FC = ({ children }) => {
  const { publicKey } = useWallet();
  const wallet = useWallet();
  const base58 = useMemo(() => publicKey?.toBase58() || "", [publicKey]);
  const [totalSupply, setTotalSupply] = useState<number | undefined>(0);
  const [ownNftCounts, setOwnNftCounts] = useState<number | undefined>(0);
  const [claimAmount, setClaimAmount] = useState<number | undefined>(0);
  const [lifeTimeReward, setLifeTimeReward] = useState<number | undefined>(0);

  const getMintInfo = async () => {
    try {
      const res = await axios.get(
        `https://solgods.onrender.com/user/currentIndex`
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
    console.log("base58", base58);
    if (base58 !== undefined && base58 !== "") {
      const resOfClaim = await axios.get(
        `https://sol.sneakylabs.art/user/claimAmount/`,
        {
          params: {
            address: base58,
          },
        }
      );
      const claimData = resOfClaim.data;
      setOwnNftCounts(claimData?.count);
      setClaimAmount(claimData?.totalAmount);
      setLifeTimeReward(claimData?.totalClaimedAmount);
    }
  };

  useEffect(() => {
    getMintInfo();
    const interval = setInterval(() => {
      getMintInfo();
    }, 20000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (wallet) {
      getClaimReward();
      const interval = setInterval(() => {
        getClaimReward();
      }, 20000);
      return () => clearInterval(interval);
    }
  }, [wallet]);

  return (
    <MintInfoContext.Provider
      value={{
        totalSupply,
        lifeTimeReward,
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
