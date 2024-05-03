import React from "react";
import Title from "./Title";
import { toursLink } from "../data";

const Tours = () => {
  return (
    <section className='section' id='tours'>
      <Title title='Featured' subtitle='Tours' />

      <div className='section-center featured-center'>
        {toursLink.map((tour) => {
          const { id, image, name, text, country, date, price, days } = tour;
          return (
            <article className='tour-card' key={id}>
              <div className='tour-img-container'>
                <img src={image} className='tour-img' alt={name} />
                <p className='tour-date'>{date}</p>
              </div>
              <div className='tour-info'>
                <div className='tour-title'>
                  <h4>{name}</h4>
                </div>
                <p>{text}</p>
                <div className='tour-footer'>
                  <p>
                    <span>
                      <i className='fas fa-map'></i>
                    </span>
                    {country}
                  </p>
                  <p>{days}</p>
                  <p>{price}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Tours;
