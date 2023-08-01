import React from 'react'
import BreadCrumb from 'elements/BreadCrumb';

export default function PageDetailTitle({ data, breadcrumb }) {
  return (
    <section className="container spacing-sm">
        <div className="row align-items-center">
          <div className="col">
            <BreadCrumb data={breadcrumb} />
          </div>
          <div className="col-auto text-center">
            <h1 className="h2">{data.title}</h1>
            <span className="text-gray-400">
              {data.city}, {data.country}
            </span>
          </div>
          <div className="col"></div>
        </div>
    </section>
  );
}