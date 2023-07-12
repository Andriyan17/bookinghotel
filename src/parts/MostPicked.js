import React from 'react';

export default function MostPicked(props) {
  return (
    <section className="container">
      <h4 className="mb-3">MostPicked</h4>
      <div className="container-grid">
        <div className="item column-4 row-2">
          <div className="card">Card 1</div>
        </div>
        <div className="item column-4 row-1">
          <div className="card">card 2</div>
        </div>
        <div className="item column-4 row-1">
          <div className="card">card 3</div>
        </div>
        <div className="item column-4 row-1">
          <div className="card">card 4</div>
        </div>
        <div className="item column-4 row-1">
          <div className="card">card 5</div>
        </div>
      </div>
    </section>
  );
}
