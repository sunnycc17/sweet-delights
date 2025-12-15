"use client";

import { useEffect } from "react";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import Image from "next/image";
import heroImg from "@/public/hero-2.webp";

export default function HomePage() {
  return (
    <>
      <Header />

      <section className="relative h-[80vh] md:h-screen">
        <Image
          src={heroImg}
          alt="strawberry cake"
          fill
          priority
          placeholder="blur"
          sizes="100vw"
          className="object-cover object-center"
          style={{ filter: "hue-rotate(-20deg)" }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 z-30 flex items-center">
          <div
            className="
        w-full
        bg-gradient-to-l
        from-rose-900/95
        via-rose-900/90
        to-rose-900/70
        md:to-transparent
      "
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24 md:py-20 flex justify-end">
              {/* Inner fade container */}
              <div className="relative max-w-lg pr-6 md:pr-0">
                {/* Edge fade */}
                <div className="absolute inset-y-0 -right-6 w-6 bg-gradient-to-l from-transparent to-rose-900/90 md:hidden" />

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                  Handmade Sweets
                  <br />
                  Crafted Fresh
                </h1>

                <p className="mt-4 text-sm sm:text-base text-gray-100">
                  Marshmallows, chocolates & candies made in small batches with
                  real ingredients.
                </p>

                {/* Buttons */}
                <div className="mt-6 flex flex-row flex-wrap gap-3">
                  <a
                    href="/shop"
                    className="
                inline-flex
                px-5 py-2
                sm:px-7 sm:py-3
                rounded-full
                font-semibold
                text-sm sm:text-base
                bg-gradient-to-r from-rose-500 to-rose-700
                shadow-lg
                hover:scale-105
                transition
              "
                  >
                    Shop Now
                  </a>

                  <a
                    href="#features"
                    className="
                inline-flex
                px-4 py-2
                sm:px-6 sm:py-3
                rounded-full
                font-semibold
                text-sm sm:text-base
                border border-white
                text-white
                hover:bg-white hover:text-rose-700
                transition
              "
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="absolute bottom-0 w-full overflow-hidden leading-none z-40">
          <svg
            className="relative block w-full h-20 md:h-32"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0 C150,100 350,0 600,50 C850,100 1050,0 1200,50 L1200,120 L0,120 Z"
              fill="rgb(236, 234, 234)"
            />
          </svg>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          {/* Section Heading */}
          <h2 className="text-center text-3xl sm:text-4xl font-bold text-rose-500 mb-20">
            Why People Love Us
          </h2>

          {/* Grid of features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                desc: "Crafted with real cocoa, fruit, and natural flavors.",
                icon: (
                  <svg
                    className="h-12 w-12 text-rose-400 mb-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 3v18m9-9H3"
                    />
                  </svg>
                ),
              },
              {
                desc: "Beautifully packed—perfect for birthdays and surprises.",
                icon: (
                  <svg
                    className="h-12 w-12 text-rose-400 mb-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 12.79V21H3V12.79l9 6.21 9-6.21zM12 3L3 9v3h18V9l-9-6z"
                    />
                  </svg>
                ),
              },
              {
                desc: "Orders placed before noon dispatch the same day.",
                icon: (
                  <svg
                    className="h-12 w-12 text-rose-400 mb-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 3h18v6H3V3zm0 12h18v6H3v-6z"
                    />
                  </svg>
                ),
              },
              {
                desc: "Rated 4.9 by customers just like you.",
                icon: (
                  <svg
                    className="h-12 w-12 text-rose-400 mb-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 17l-5 3 1-5-4-4 5-1L12 3l2 5 5 1-4 4 1 5-5-3z"
                    />
                  </svg>
                ),
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                {feature.icon}
                {/* Placeholder space where the title was */}
                <div className="h-4"></div>
                <p className="text-rose-500 font-medium text-balance">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-center text-3xl sm:text-4xl font-bold text-rose-500 mb-20 ">
            A Taste of Our Favorites
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {[
              {
                img: "https://images.pexels.com/photos/5469041/pexels-photo-5469041.jpeg",
                title: "Soft Vanilla Marshmallow",
              },
              {
                img: "https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg",
                title: "Dark Chocolate Drops",
              },
              {
                img: "https://images.pexels.com/photos/6798343/pexels-photo-6798343.jpeg",
                title: "Fruit Sugar Pop Squares",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-md hover:shadow-lg transition overflow-hidden"
              >
                <img src={item.img} className="w-full h-56 object-cover" />
                <div className="p-4 text-center">
                  <h3 className="font-semibold text-lg text-rose-700">
                    {item.title}
                  </h3>
                  <a
                    href="/shop"
                    className="block mt-2 text-sm font-semibold text-rose-600 hover:underline"
                  >
                    See More →
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="/shop"
              className="inline-block px-10 py-3 rounded-full font-semibold bg-rose-600 hover:scale-105 transition"
            >
              Explore Full Collection
            </a>
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section id="blog" className="flex flex-col items-center py-16">
        {/* Intro Block */}
        <div className="w-full max-w-4xl rounded-3xl p-8 sm:p-10 md:p-12 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-rose-600 mb-4 tracking-tight">
            Sweet Cakes & Delicious Treats
          </h2>
          <p className="text-gray-700/80 sm:text-base md:text-lg font-medium">
            From layered cakes to handcrafted candies, every bite is made to
            delight
          </p>
          <p className="text-gray-700/80 sm:text-base md:text-lg font-medium">
            Savor the sweetness that makes life a little brighter
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="w-full max-w-7xl mt-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition overflow-hidden flex flex-col">
              <img
                src="https://images.pexels.com/photos/2236703/pexels-photo-2236703.jpeg"
                alt="Blog 1"
                className="w-full h-48 object-cover"
              />
              <div className="p-4 flex flex-col flex-1">
                <h3 className="text-xl font-semibold text-rose-600 mb-2">
                  5 Sweet Treats to Try This Summer
                </h3>
                <p className="text-gray-700 text-sm mb-3 flex-1">
                  Discover refreshing candies and chocolates perfect for sunny
                  days. Your taste buds will thank you!
                </p>
                <a
                  href="/blog#blog-1"
                  className="text-rose-700 font-semibold hover:underline mt-auto"
                >
                  Read More →
                </a>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition overflow-hidden flex flex-col">
              <img
                src="https://images.pexels.com/photos/6441630/pexels-photo-6441630.jpeg"
                alt="Blog 2"
                className="w-full h-48 object-cover"
              />
              <div className="p-4 flex flex-col flex-1">
                <h3 className="text-xl font-semibold text-rose-600 mb-2">
                  The Art of Chocolate Making
                </h3>
                <p className="text-gray-700 text-sm mb-3 flex-1">
                  Dive into the process of creating rich, decadent chocolates
                  from bean to bar.
                </p>
                <a
                  href="/blog#blog-2"
                  className="text-rose-700 font-semibold hover:underline mt-auto"
                >
                  Read More →
                </a>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition overflow-hidden flex flex-col">
              <img
                src="https://images.pexels.com/photos/10477126/pexels-photo-10477126.jpeg"
                alt="Blog 3"
                className="w-full h-48 object-cover"
              />
              <div className="p-4 flex flex-col flex-1">
                <h3 className="text-xl font-semibold text-rose-600 mb-2">
                  Candy Pairings with Your Drinks
                </h3>
                <p className="text-gray-700 text-sm mb-3 flex-1">
                  Enhance your coffee, tea, or wine with the perfect candy
                  pairing tips from our experts.
                </p>
                <a
                  href="/blog#blog-3"
                  className="text-rose-700 font-semibold hover:underline mt-auto"
                >
                  Read More →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
