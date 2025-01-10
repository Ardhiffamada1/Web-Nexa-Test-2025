export default function BlogCards() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-4">
          Our Places
        </h2>
        <span href="#" className="block">
          <img
            alt=""
            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/23/0b/a6/indoor-area-1st-floor.jpg?w=1000&h=-1&s=1"
            className="h-64 w-full object-cover sm:h-80 lg:h-96"
          />

          <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
            Alamat kami.
          </h3>

          <p className="mt-2 text-gray-700">
            Jl. Magelang - Salatiga Jl. Ngablak - Grabag, Krangean, Ngablak,
            Kec. Ngablak, Kabupaten Magelang, Jawa Tengah 56194
          </p>
        </span>
      </div>
    </section>
  );
}
