/* eslint-disable @next/next/no-img-element */
import React, { FC, useEffect, useMemo, useRef, useState } from "react";
import styles from "./AuthButton.module.scss";
import { useWallet } from "@solana/wallet-adapter-react";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import { ChevDownIcon } from "../components/Icons/Icons";
import { useOnClickOutside } from "../hooks/use-onclick-outside";
import { web3 } from "@project-serum/anchor";
import { useRouter } from "next/router";

type Props = {};

export const AuthButton: FC<Props> = ({}) => {
  const { wallet, publicKey } = useWallet();

  if (wallet && publicKey) {
    return <ProfileButton />;
  }

  return <ConnectWalletButton />;
};

const ConnectWalletButton = () => {
  const { setVisible } = useWalletModal();

  return (
    <button
      className="flex items-center justify-center gap-3 px-5 py-3 font-extrabold text-black duration-300 bg-white border-b-2 border-black rounded-lg hover:bg-gray-200"
      onClick={() => {
        setVisible(true);
      }}
    >
      {/* <img
        alt=""
        src="/img/solanaIcon.png"
        width={25}
        className="rounded-full"
      /> */}
      Connect Wallet
    </button>
  );
};

const ProfileButton = () => {
  const router = useRouter();
  const { disconnect, publicKey } = useWallet();
  const base58 = useMemo(() => publicKey?.toBase58() || "", [publicKey]);
  const [open, setOpen] = useState(false);
  const elem = useRef(null);
  useOnClickOutside(elem, () => setOpen(false));
  const [myBalance, setMyBalance] = useState<number>(0);

  const getBalanceFunc = async () => {
    const solConnection = new web3.Connection(web3.clusterApiUrl("devnet"));
    if (publicKey) {
      let balance = await solConnection.getBalance(publicKey);
      setMyBalance(balance / 1000000000);
    }
  };

  useEffect(() => {
    getBalanceFunc();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const ACTIONS = [
    {
      label: (
        <div className="flex items-center justify-end font-extrabold">
          Balance ({myBalance.toFixed(2)} SOL)
        </div>
      ),
      action: () => {},
    },
    {
      label: (
        <div className="flex items-center justify-end font-extrabold text-right cursor-pointer">
          Logout
        </div>
      ),
      action: () => disconnect(),
    },
  ];

  return (
    <div className="relative" ref={elem}>
      <div
        className={`px-1 flex items-center justify-center py-2 cursor-pointer font-extrabold text-black duration-300 bg-white border-b-2 border-black rounded-lg hover:bg-gray-200
        hover:brightness-125 ${open && "bg-white shadow-xl"}`}
        onClick={() => setOpen(!open)}
      >
        <div className="flex items-center justify-center gap-2 px-3 py-1 font-extrabold text-md">
          <img
            alt=""
            src="/img/solanaIcon.png"
            width={25}
            className="rounded-full"
          />
          <span>{base58.slice(0, 4) + ".." + base58.slice(-4)}</span>
        </div>

        <span
          className={` ${
            open
              ? "rotate-0 duration-300 transition-all"
              : "rotate-180 duration-300 transition-all"
          }`}
        >
          <ChevDownIcon />
        </span>
      </div>

      <div
        className={`absolute right-0 z-20 min-w-[180px] transition-all duration-300 -translate-y-10 opacity-0 pointer-events-none top-[60px] rounded-lg border-b-2 border-black bg-white ${
          open &&
          "opacity-100 transform translate-y-0 pointer-events-auto rounded-lg text-right"
        }`}
      >
        {ACTIONS.map((item, index) => (
          <div
            className="p-3 font-normal text-right bg-transparent cursor-pointer text-md"
            key={index}
            onClick={() => {
              item.action();
              setOpen(false);
            }}
          >
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
};
