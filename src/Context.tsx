"use client";
import React, { createContext, useEffect, useState } from "react";
import { Product } from "./app/page";

interface ContextTypes {
  modal: {
    showModal: boolean;
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
    errMsg: string;
    setErrMsg: React.Dispatch<React.SetStateAction<string>>;
  };
  loader: {
    isLoading: boolean;
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
    skeletalLoading: boolean;
    setSkeletalLoading: React.Dispatch<React.SetStateAction<boolean>>;
  };
  cart: {
    cartItems: Product[];
    setCartItems: React.Dispatch<React.SetStateAction<Product[]>>;
  };
}
export const CreateContext = createContext({} as ContextTypes);

const ContextProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  // Other states

  const [isLoading, setIsLoading] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [skeletalLoading, setSkeletalLoading] = useState(false);
  const [cartItems, setCartItems] = useState<Product[]>([]);

  useEffect(() => {
    const cartItemsRaw = localStorage.getItem("block3market-cart");
    const cartItemsParsed = cartItemsRaw && JSON.parse(cartItemsRaw);
    if (cartItemsParsed === null) {
      setCartItems([]);
    }else{
      setCartItems(cartItemsParsed);
    }
  }, []);
  // console.log(window.location.href.split("/app")[1]);

  return (
    <CreateContext.Provider
      value={{
        modal: {
          showModal,
          setShowModal,
          errMsg,
          setErrMsg,
        },
        loader: {
          isLoading,
          setIsLoading,
          skeletalLoading,
          setSkeletalLoading,
        },
        cart: {
          cartItems,
          setCartItems,
        },
      }}
    >
      {children}
    </CreateContext.Provider>
  );
};

export default ContextProvider;
