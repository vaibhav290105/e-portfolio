// src/components/Portfolio.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxkvMd_zAlDhAYXNqx4O5Bv2IdZq9GdyZaSg&s',
      title: 'Project One',
      description: 'Description for project one.',
      link: 'https://contact-book-sepia.vercel.app/',
    },
    {
      id: 2,
      image: 'https://www.shutterstock.com/image-vector/vector-illustration-music-player-buttons-260nw-2114766530.jpg',
      title: 'Project Two',
      description: 'Description for project two.',
      link: 'https://music-player-omega-lake.vercel.app/',
    },
    {
      id: 3,
      image: 'https://static.vecteezy.com/system/resources/previews/021/967/288/original/banner-for-cocktail-party-and-bar-decoration-with-fancy-women-characters-among-huge-fruit-beverages-summer-party-poster-or-site-interface-flat-illustration-free-vector.jpg',
      title: 'Project Three',
      description: 'Description for project three.',
      link: 'https://beverages-project.vercel.app/',
    },
    {
      id: 4,
      image: 'https://uizard.io/static/94aaccf85c8db1300648285553e1a9d3/a8e47/e0877cb90f763aec3b40807fec617341abca6c34-1440x835.png',
      title: 'Project Four',
      description: 'Description for project four.',
      link: 'https://ninjas-todo-list.vercel.app/',
    },
    {
        id: 5,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAwezRRmbnUqJh9gH3bwbnIJjt7l5nCj21sA&s',
        title: 'Project Four',
        description: 'Description for project five.',
        link: 'https://qr-code-generator-eight-ashen.vercel.app/',
      },
      {
        id: 6,
        image: 'https://www.sketchappsources.com/resources/source-image/e-commerce-cart-chenluo.png',
        title: 'Project six',
        description: 'Description for project six.',
        link: 'https://cart-app-eight-delta.vercel.app/',
      },
  ];

  return (
    <div id="portfolio" className="portfolio-section py-16 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">Portfolio</h2>
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            breakpoints={{
                640: {
                slidesPerView: 2,
                spaceBetween: 20,
                },
                1024: {
                slidesPerView: 3,
                spaceBetween: 30,
                },
            }}
            className="portfolio-slider"
            >
          {projects.map((project, index) => (
            <SwiperSlide key={project.id}>
              <div className="flex flex-col items-center">
                <img src={project.image} alt={`img-${index + 1}`} className="w-full h-64 object-cover rounded-lg" />
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mt-4">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mt-2 text-center">{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="mt-4 text-blue-500 dark:text-blue-400">
                  View project
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Portfolio;
