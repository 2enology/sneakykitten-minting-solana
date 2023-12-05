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
  const base58 = useMemo(() => publicKey?.toBase58() || "", [publicKey]);
  const [totalSupply, setTotalSupply] = useState<number | undefined>(0);
  const [ownNftCounts, setOwnNftCounts] = useState<number | undefined>(0);
  const [claimAmount, setClaimAmount] = useState<number | undefined>(0);
  const [lifeTimeReward, setLifeTimeReward] = useState<number | undefined>(0);

  const getMintInfo = async () => {
    try {
      const res = await axios.get(
        `https://sol.sneakylabs.art/user/currentIndex`
      );

      const mintData = res.data;
      setTotalSupply(mintData?.totalSupply);
    } catch (error: any) {
      if (error.response && error.response.status === 404) {
        console.log("No data found");
      } else {
        console.error(error);
      }
    }
  };

  const getClaimReward = async () => {
    if (base58) {
      try {
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
      } catch (error) {
        console.error(error);
      }
    }
  };

  useEffect(() => {
    getMintInfo();
    const mintInfoInterval = setInterval(getMintInfo, 20000);
    return () => clearInterval(mintInfoInterval);
  }, []);

  useEffect(() => {
    if (base58) {
      getClaimReward();
      const claimRewardInterval = setInterval(getClaimReward, 20000);
      return () => clearInterval(claimRewardInterval);
    }
  }, [base58]);

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
