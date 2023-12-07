export type MintInfoContextType = {
  totalSupply: number | undefined;
  ownNftCounts: number | undefined;
  claimAmount: number | undefined;
  lifeTimeReward: number | undefined;
  allowAddr: string | undefined;
  treasuryVault: number | undefined;
  getMintInfo: Function;
};
