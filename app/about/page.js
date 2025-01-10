"use client";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function About() {
  return (
    <>
      <Navbar />
      <section id="story" className="py-16 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto text-left">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Cerita Kami</h2>
          <div className="flex flex-col lg:flex-row justify-center gap-12">
            <div className="lg:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1708678310520-284e8aef559f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Founder"
                className="w-full h-72 object-cover"
              />
            </div>
            <div className="lg:w-1/2">
              <p className="text-lg text-gray-600 mb-4">
                Cerita Kita CoffeeShop lahir dari passion kami terhadap kopi dan
                keinginan untuk menciptakan tempat yang nyaman untuk berkumpul.
                Didirikan pada tahun 2020, kami memulai perjalanan ini dengan
                visi sederhana: menghadirkan kopi berkualitas dengan suasana
                yang menyenangkan.
              </p>
              <p className="text-lg text-gray-600">
                Kami ingin setiap pelanggan yang datang merasa seperti di rumah
                sendiri, berbagi cerita sambil menikmati secangkir kopi yang
                disiapkan dengan penuh cinta. Setiap sudut coffee shop kami
                menceritakan kisah perjalanan kami, dari awal hingga sekarang.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto text-left">
          <h3 className="text-3xl font-semibold text-gray-800 mb-6">
            Visi Kami
          </h3>
          <p className="text-lg text-gray-600">
            Kami percaya bahwa kopi bukan hanya sekedar minuman, tetapi jembatan
            yang menghubungkan banyak cerita. Di Cerita Kita CoffeeShop, setiap
            cangkir kopi mengandung kisah, dan setiap kisah yang dibagikan akan
            membuat tempat ini lebih berarti.
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
}
