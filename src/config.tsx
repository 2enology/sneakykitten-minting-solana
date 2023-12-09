import { Connection } from "@solana/web3.js";

export const MAX_MINTAMOUNT_PERTX = 5;
export const MINT_PRICE = 0.5;
export const MAX_SUPPLY = 2500;
export const CONTRACTADDR = "AzXo3EMsRwVKGidYgDFiEhqPREU6MqVtP5KiHS9zAXNE";

export const rpcUrl = new Connection(
  "https://practical-crimson-replica.solana-mainnet.quiknode.pro/24b10dc1aa5def0f61bf28cef4d19ed5616da3ac/"
);
