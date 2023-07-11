import React, { Component } from 'react';
import Header from 'parts/Header';
import Hero from 'parts/Hero';
import landingPage from 'json/landingPage.json';
import mostPicked from 'parts/MostPicked';

export default class LandingPage extends Component {
  render() {
    return (
      <>
        <Header {...this.props} location={window.location}></Header>
        <Hero data={landingPage.hero} />
        <mostPicked data={landingPage.mostPicked} />
      </>
    );
  }
}
