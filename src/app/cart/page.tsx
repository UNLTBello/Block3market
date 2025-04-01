"use client";
import React from "react";
import Image from "next/image";
import { toast } from "sonner";
import { Minus, Plus, Trash } from "lucide-react";
import { useContext } from "react";
import { CreateContext } from "@/Context";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
const Page = () => {
  const router = useRouter();
  const { cartItems, setCartItems } = useContext(CreateContext).cart;
  

  const deleteCartItem = (id: number) => {
    const newCartItems = cartItems.filter((cartItem) => {
      return cartItem.id !== id;
    });

    setCartItems(newCartItems);
    localStorage.setItem("block3market-cart", JSON.stringify(newCartItems));
    toast.success("Cart Item Deleted");
  };

  return (
    <>
    <Navbar/>
    <main className="py-20">
      <h2 className="text-3xl font-medium text-center">Cart</h2>
      <section className="lg:w-[70%] md:w-[80%] w-[90%] grid grid-flow-row items-center  mx-auto gap-y-4">
        {cartItems.length >= 1 ? (
          cartItems.map((cartItem, i) => {
            return (
              <section
                key={i}
                className="flex flex-col p-4 bg-gray-900 rounded-lg overflow-hidden shadow-lg border border-gray-800 duration-200 cursor-pointer hover:opacity-90 hover:shadow-lg hover:shadow-[#68EDAD]/20 transition-all gap-y-2"
              >
                <article className="flex items-center justify-between">
                  <div className="flex items-center gap-x-2">
                    <Image
                      // height={150}
                      // width={150}
                      src={cartItem.image}
                      alt="btc mining cpu "
                      className="rounded-lg w-20 h-20 lg:w-40 lg:h-40"
                    />
                    <div className="gap-y-2 flex flex-col">
                      <span className="font-bold text-lg">{cartItem.name}</span>
                      <p className="lg:w-[50%] w-[70%] text-sm font-light">
                        {cartItem.description}
                      </p>
                    </div>
                  </div>
                  <div>
                    <span className="text-[#00ffcc]">${cartItem.price}</span>
                  </div>
                </article>
                <article className="flex items-center justify-between">
                  <div
                    className="flex items- gap-x-1"
                    onClick={() => deleteCartItem(cartItem.id)}
                  >
                    <Trash className="text-red-400" />
                    <span>Remove</span>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <Minus className="rounded-sm" />
                    <span>1</span>
                    <Plus className="bg-[#00ffcc] text-gray-900 rounded-sm" />
                  </div>
                </article>
              </section>
            );
          })
        ) : (
          <section className="flex items-center justify-center  fixed top-0 bottom-0 left-0 w-full flex-col gap-y-4">
            <span className="text-3xl font-bold text-gray-700">
              No items in Cart
            </span>
            <button className="cursor-pointer py-2 px-4 text-black rounded-lg  bg-[#00fccc]" onClick={()=> router.push("/")}>
              Shop Now
            </button>
          </section>
        )}
      </section>
    </main>
    </>

  );
};

export default Page;
