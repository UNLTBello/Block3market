// pages/index.tsx
"use client";
import { NextPage } from "next";
import Head from "next/head";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import blockchainMug from "@/assets/blockchain-mug.png";
import blockhainPoster from "@/assets/blockchain-poster.png";
import blockchainTshrit from "@/assets/blockchain-tshirt.png";
import btcMiningCpu from "@/assets/btc-mining-cpu.png";
import Navbar from "./components/Navbar";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: StaticImageData;
}

const Home: NextPage = () => {
  const [cart, setCart] = useState<Product[]>([]);

  const products: Product[] = [
    {
      id: 1,
      name: "Blockchain T-Shirt",
      description:
        "Stylish black T-shirt featuring a futuristic blockchain design.",
      price: 25.99,
      image: blockchainMug,
    },
    {
      id: 2,
      name: "Bitcoin Mining CPU",
      description: "High-performance CPU optimized for Bitcoin mining.",
      price: 499.99,
      image: blockhainPoster,
    },
    {
      id: 3,
      name: "Blockchain Mug",
      description: "Premium ceramic mug with a golden Bitcoin logo.",
      price: 15.99,
      image: blockchainTshrit,
    },
    {
      id: 4,
      name: "Blockchain Poster",
      description:
        "Modern blockchain-themed wall poster with futuristic graphics.",
      price: 12.99,
      image: btcMiningCpu,
    },
  ];

  const addToCart = (product: Product) => {
    setCart([...cart, product]);
    alert(`Added ${product.name} to cart!`);
  };

  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-black text-white">
      <Head>
        <title>Block3Market | Blockchain Products</title>
        <meta
          name="description"
          content="Browse blockchain and crypto merchandise"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="p-4 border-b border-gray-800">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold text-[#00ffcc]">Block3Market</h1>
        </div>
      </header>

      <main className="container mx-auto py-8 px-4">
        <h2 className="text-4xl font-bold mb-8">Available Products</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-gray-900 rounded-lg overflow-hidden shadow-lg border border-gray-800 duration-200 transform hover:scale-105 cursor-pointer hover:opacity-90 hover:shadow-lg hover:shadow-[#68EDAD]/20 transition-all"
            >
              <div className="relative h-64 w-full">
                <Image
                  src={product.image}
                  alt={product.name}
                  layout="fill"
                  objectFit="cover"
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg=="
                />
              </div>

              <div className="p-4">
                <h3 className="text-2xl font-bold text-[#00ffcc] mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-300 mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold">
                    ${product.price.toFixed(2)}
                  </span>
                  <button
                    onClick={() => addToCart(product)}
                    className="bg-[#00ffcc] text-black font-bold py-2 px-4 rounded hover:bg-opacity-80 transition-colors cursor-pointer"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="bg-gray-900 py-6 mt-12">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Block3Market. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
    </>

  );
};

export default Home;
