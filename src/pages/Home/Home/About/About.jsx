import React from 'react';
import img from "../../../../assets/tim-gouw-JsjXnWlh8-g-unsplash.jpg";
const About = () => {
    return (
      <div className="bg-slate-100 px-9">
        <h2 className="text-5xl font-medium text-center pt-9 ">About Us</h2>
        <div className="md:flex items-center gap-5  container mx-auto py-10 ">
          <div className="w-full md:w-1/2">
            <h2 className="text-red-500 font-medium text-6xl mb-4">
              Animal Toy Kingdom!
            </h2>
            <p className="text-slate-500 text-[18px]">
              At Animal Toy Kingdom, we have a deep passion for animals and
              playtime. Our mission is to bring joy and education to children
              and animal enthusiasts alike through our wide range of animal
              toys. We believe that imaginative play is essential for a child's
              development, and what better way to spark their creativity than
              with our diverse collection of animal toys? From cuddly plush
              companions to realistic figurines, our toys are designed to ignite
              curiosity and foster a love for animals.
            </p>
          </div>
          <img
            className="w-full md:w-1/2 rounded-lg shadow-2xl"
            src={img}
            alt=""
          />
        </div>
      </div>
    );
};

export default About;