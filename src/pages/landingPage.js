import React, { Component } from 'react';
import Header from 'parts/Header';
import Hero from 'parts/Hero';
import landingPage from 'json/landingPage.json';
import MostPicked from 'parts/MostPicked';

export default class LandingPage extends Component {
  render() {
    return (
      <>
        <Header {...this.props} location={window.location}></Header>
        <Hero data={landingPage.hero} />
        <MostPicked data={landingPage.mostPicked} />
      </>
    );
  }
}
