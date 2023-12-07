import { Connection } from "@solana/web3.js";

export const MAX_MINTAMOUNT_PERTX = 5;
export const MAX_SUPPLY = 2500;
export const DEV_WALLET = "988FRK7NmbCDvSJtPecyxSDmPZny6NUs4kkKRtiS8NEH";
export const ADMIN_WALLET = "BUAtL71ubZ4WseTMKayYWQKBH8tEdefV9f6UBzmntsrC";

export const rpcUrl = new Connection("https://api.devnet.solana.com");
