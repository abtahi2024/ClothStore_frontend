import React from "react";
import { motion } from "motion/react";

const posts = [
  {
    id: 1,
    title: "What Curling Irons Are The Best Ones",
    date: "16 February 2020",
    image:
      "https://themewagon.github.io/malefashion/img/blog/blog-1.jpg",
  },
  {
    id: 2,
    title: "Eternity Bands Do Last Forever",
    date: "21 February 2020",
    image:
      "https://themewagon.github.io/malefashion/img/blog/blog-2.jpg",
  },
  {
    id: 3,
    title: "The Health Benefits Of Sunglasses",
    date: "28 February 2020",
    image:
      "https://themewagon.github.io/malefashion/img/blog/blog-3.jpg",
  },
  {
    id: 4,
    title: "Aiming For Higher The Mastopexy",
    date: "16 February 2020",
    image:
      "https://themewagon.github.io/malefashion/img/blog/blog-4.jpg",
  },
  {
    id: 5,
    title: "Wedding Rings A Gift For A Lifetime",
    date: "21 February 2020",
    image:
      "	https://themewagon.github.io/malefashion/img/blog/blog-5.jpg",
  },
  {
    id: 6,
    title: "The Different Methods Of Hair Removal",
    date: "28 February 2020",
    image:
      "https://themewagon.github.io/malefashion/img/blog/blog-6.jpg",
  },
  {
    id: 7,
    title: "Hoop Earrings A Style From History",
    date: "16 February 2020",
    image:
      "https://themewagon.github.io/malefashion/img/blog/blog-7.jpg",
  },
  {
    id: 8,
    title: "Lasik Eye Surgery Are You Ready",
    date: "21 February 2020",
    image:
      "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 9,
    title: "Lasik Eye Surgery Are You Ready",
    date: "28 February 2020",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop",
  },
];
const Blogs = () => {
  return (
    <div className="">
      <div className="relative h-100 w-full overflow-hidden flex items-center justify-center">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 hover:scale-105"
          style={{
            backgroundImage:
              'url("https://themewagon.github.io/malefashion/img/breadcrumb-bg.jpg")',
            filter: "brightness(0.6)",
          }}
        />

        {/* Content */}
        <div className="relative z-10 text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-white tracking-tight">
            Our Blog
          </h2>
        </div>
      </div>
      {/* blog list */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20">
          {posts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="relative flex flex-col items-center group"
            >
              {/* Image Container */}
              <div className="w-full aspect-[1.4/1] overflow-hidden bg-gray-50">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Content Box - Overlapping Style */}
              <div className="bg-white w-[88%] -mt-12 pt-8 pb-4 px-6 relative z-10 shadow-[0_10px_30px_rgba(0,0,0,0.03)] md:shadow-none border border-gray-50 md:border-none">
                <div className="mb-4">
                  <span className="text-[10px] text-gray-400 font-medium tracking-widest uppercase">
                    {post.date}
                  </span>
                </div>

                <h3 className="text-[15px] font-semibold leading-tight mb-6 text-gray-800 tracking-tight min-h-10">
                  {post.title}
                </h3>

                <div className="pt-1">
                  <a
                    href="#"
                    className="text-[10px] font-bold uppercase tracking-[0.2em] border-b border-black pb-1 hover:text-gray-400 hover:border-gray-400 transition-all duration-300"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Blogs;
