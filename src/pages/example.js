import React, { Component } from 'react';
import BreadCrumb from 'elements/BreadCrumb';

export default class Example extends Component {
    render() {
        const breadcrumb = [
            {pageTitle: 'Home', pageHref: "" },
            {pageTitle: 'House Details', pageHref: ""}
        ]

        return (
          <div className='container'>
            <div className='row align-items-center justify-content-center' style={{ height: "100hv"}}>
                <div className='col-auto'>
                    <BreadCrumb data={breadcrumb} />
                </div>
            </div>
          </div>
        )

    }
}
