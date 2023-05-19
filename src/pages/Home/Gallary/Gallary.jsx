import React from 'react';
import img1 from '../../../assets/animal-gallery/img1.jpg'
import img2 from '../../../assets/animal-gallery/img2.webp'
import img3 from '../../../assets/animal-gallery/img3.jpg'
import img4 from '../../../assets/animal-gallery/img4.jpg'
import img5 from '../../../assets/animal-gallery/img5.webp'
import img6 from "../../../assets/animal-gallery/img6.webp";

const Gallary = () => {
    const images = [img1, img2, img3, img4, img5, img6]
    return (
      <div className="container  mx-auto my-14">
        <h2 className="font-bold text-5xl text-indigo-500  text-center mb-5">
          Image Galley
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <img
              data-aos="flip-right"
              className="shadow-xl w-full h-full"
              key={index}
              src={image}
              alt=""
            />
          ))}
        </div>
      </div>
    );
};

export default Gallary;