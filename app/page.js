"use client";

import Footer from "@/app/components/Footer";
import Navbar from "./components/Navbar";
import BestSelling from "./components/BestSelling";
import BlogCards from "./components/BlogCards";
import Reviews from "./components/Rating";

export default function Home() {
  return (
    <>
      <Navbar />
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8 mb-12">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
            <div>
              <div className="max-w-lg md:max-w-none">
                <h2 className="text-3xl font-bold text-gray-900 sm:text-3xl">
                  Kopi, Teman dalam Setiap Cerita
                </h2>

                <p className="mt-4 text-gray-700">
                  Kopi kami bukan hanya minuman, tapi teman setia yang
                  mendampingi setiap cerita. Entah itu cerita lama yang
                  terulang, atau cerita baru yang sedang dibangun. Di
                  CeritaKita, setiap cerita punya tempat, dan setiap cangkir
                  kopi adalah bab pertama.
                </p>
              </div>
            </div>

            <div>
              <img
                src="https://images.unsplash.com/photo-1499236276344-a4e1a69c090b?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="rounded"
                alt=""
              />
            </div>
          </div>
        </div>
        <BestSelling />
        <BlogCards />
        <Reviews />
      </section>
      <Footer />
    </>
  );
}
