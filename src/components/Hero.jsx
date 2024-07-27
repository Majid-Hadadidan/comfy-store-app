import { Link } from "react-router-dom";
import hero1 from "../assets/hero1.webp";
import hero2 from "../assets/hero2.webp";
import hero3 from "../assets/hero3.webp";
import hero4 from "../assets/hero4.webp";

const carouselImages = [hero1, hero2, hero3, hero4];

function Hero() {
  return (
    <div className="grid lg:grid-cols-2 gap-24 items-center ">
      <div>
        <h1 className="text-4xl max-w-2xl font-bold sm:text-6xl tracking-tight ">
          We are changing the way people shop
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-8 tracking-wide">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab eaque
          nobis nemo cupiditate vero! Cum blanditiis, iure voluptates quaerat
          maiores id!
        </p>
        <div className="mt-10">
          <Link to="/products" className="btn btn-primary">
            Our Products
          </Link>
        </div>
      </div>

      <div className="hidden h-[28rem] space-x-4 p-4 lg:carousel carousel-center  bg-neutral rounded-box">
        {carouselImages.map((image) => {
          return (
            <div key={image} className="carousel-item">
              <img
                src={image}
                alt={image}
                className="h-full object-cover w-80 rounded-box"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Hero;
