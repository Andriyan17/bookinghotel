/* eslint-disable no-undef */
import React from 'react';
import Star from 'elements/Star';
import TestimonyAccent from 'assets/images/frame.jpg';
import Button from 'elements/Button';

export default function Testimoni({ data }) {
  return (
    <section className="container">
      <div className="row align-items-center">
        <div className="col-auto" style={{ marginRight: 70 }}>
          <div className="testimonial-hero" style={{ margin: `30px 0 0 30px` }}>
            <img
              className="position-absolute"
              alt="Testimonial"
              src={data.imageUrl}
              style={{ zIndex: 1 }}
            />
            <img
              className="position-absolute"
              alt="TestimonialFrame"
              src={TestimonyAccent}
              style={{ margin: `30px 0 0 30px`, zIndex: 1 }}
            />
          </div>
        </div>
        <div className="col-6">
          <h4 style={{ marginBottom: 40 }}>{data.name}</h4>
          <Star value={data.rate} height={35} width={35} spacing={4}></Star>
          <h5 className="h2 font-weight-light line-height-2 my-3">
            {data.content}
          </h5>
          <span className="text-gray-500">
            {data.familyName}, {data.familyOccupation}
          </span>

          <div>
            <Button
              className="btn px-5"
              style={{ margintTop: 40 }}
              hasShadow
              isPrimary
              type="link"
              href={`/testimonial/${data._id}`}>
              Read their stories
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
