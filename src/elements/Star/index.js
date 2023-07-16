/* eslint-disable no-undef */
import React from 'react';
import propTypes from 'prop-types';

export default function Star({ value, height, width, spacing }) {
  const decimals = Number(value) % 1;
  const star = [];
  let letfPos = 0;
  for (let index = 0; index < 5 && index < value - decimals; index++) {
    letfPos = letfPos * width;
    star.push(
      <div
        className="star"
        key={`star-${index}`}
        style={{
          left: index * width,
          width: width,
          marginRight: spacing,
        }}></div>
    );
  }
  if (decimals > 0 && value <= 5)
    star.push(
      <div
        className="star"
        key={`star-${index}`}
        style={{
          left: letfPos,
          width: width - spacing,
        }}></div>
    );

  const starPlaceHolder = [];
  for (let index = 0; index < 5; ) {
    starPlaceHolder.push(
      <div
        className="star placeholder"
        key={`starPlaceHolder${index}`}
        style={{
          left: index * width,
          width: width,
          marginRight: spacing,
        }}></div>
    );
  }

  return (
    <>
      <div
        className={['stars', className].join(' ')}
        style={{ height: height }}>
        {starPlaceHolder}
        {star}
      </div>
    </>
  );
}

Star.propTypes = {
  className: propTypes.string,
  value: propTypes.number,
  width: propTypes.number,
  spacing: propTypes.number,
  height: propTypes.number,
};
