import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="mid">
              Welcome to [Aditya's Restaurant], where we believe that dining is more than just a meal—it's an experience. Whether you're planning an intimate dinner, a special celebration, or a casual outing with friends, our restaurant offers the perfect ambiance, exceptional cuisine, and warm hospitality to make your visit memorable.

              Our reservation service ensures that your table is ready when you are, so you can focus on enjoying the flavors and moments that matter. We pride ourselves on offering a diverse menu crafted by our talented chefs, using only the freshest ingredients. From the moment you walk through our doors, you'll be greeted with the utmost care and attention, ensuring that your dining experience is nothing short of extraordinary.

              Book your table with us today and discover why [Aditya's Restaurant] is a favorite among food lovers. We look forward to serving you!
            </p>
            <Link to={"/"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
