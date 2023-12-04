import { Connection } from "@solana/web3.js";

export const MAX_MINTAMOUNT_PERTX = 5;
export const MAX_SUPPLY = 2500;
export const DEV_WALLET = "4aZyiL4vZf59bceqDeEM9L6HiJHeNejJFt2SgCkEjwqP";

export const rpcUrl = new Connection("https://api.devnet.solana.com");
