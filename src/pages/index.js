import React from 'react';

import Layout from '../components/Layout';
import Scroll from '../components/Scroll';

import config from '../../config';
import Footer from '../components/Footer';
import SocialLinks from '../components/SocialLinks';
import Subscribe from '../components/Subscribe';
import Header from '../components/Header';

import rainbows from '../assets/images/rainbows.jpg';
import recording from '../assets/images/recording.jpg';

import guitar from '../assets/images/guitar.jpg';

const IndexPage = () => (
  <Layout>
    <Header />

    <header className="masthead">
      <div className="container d-flex h-100 align-items-center">
        <div className="mx-auto text-center">
          <h1 className="mx-auto my-0 text-uppercase">{config.heading}</h1>
          <h2 className="text-white-50 mx-auto mt-2 mb-5">
            {config.subHeading}
          </h2>
          <Scroll type="id" element="about">
            <a
              href="https://www.twitch.tv/miketorresmusic"
              className="btn btn-primary"
            >
              Check me out on Twitch!
            </a>
          </Scroll>
        </div>
      </div>
    </header>

    <section id="about" className="about-section text-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <h2 className="text-white mb-4">More music coming soon!</h2>
            <p className="text-white-50">
              Check out all the latest release at{' '}
              <a href="https://soundcloud.com/dashurpa">soundcloud</a>.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section id="projects" className="projects-section bg-light">
      <div className="container">
        <div className="row align-items-center no-gutters mb-4 mb-lg-5">
          <div className="col-xl-8 col-lg-7">
            <img className="img-fluid mb-3 mb-lg-0" src={guitar} alt="" />
          </div>
          <div className="col-xl-4 col-lg-5">
            <div className="featured-text text-center text-lg-left">
              <h4>Instrumentals</h4>
              <p className="text-black-50 mb-0">
                The first few songs scheduled for release will be instrumentals.
                These will be created off a Boss RC-30 looper with several
                layers for each track.
              </p>
            </div>
          </div>
        </div>

        <div className="row justify-content-center no-gutters mb-5 mb-lg-0">
          <div className="col-lg-6">
            <img
              className="img-fluid"
              src={rainbows}
              alt="photo by mike of a colorful rainbow pattern"
            />
          </div>
          <div className="col-lg-6">
            <div className="bg-black text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-left">
                  <h4 className="text-white">Connection</h4>
                  <p className="mb-0 text-white-50">
                    It's always been my view that music has more power to unite
                    people than almost any other medium. That is my impotus for
                    creating music, and why I seek to spread a message of
                    positive and unity through my creations. From harmonizing
                    with others to uplifting spirits, music is the catalist for
                    change that the world needs.
                  </p>
                  <hr className="d-none d-lg-block mb-0 ml-0" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center no-gutters">
          <div className="col-lg-6">
            <img
              className="img-fluid"
              src={recording}
              alt="photo of inside a recording studio"
            />
          </div>
          <div className="col-lg-6 order-lg-first">
            <div className="bg-black text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-right">
                  <h4 className="text-white">What's Next</h4>
                  <p className="mb-0 text-white-50">
                    Having played with a few others in Florida, Mike recently
                    moved to Austin TX with his eyes on music. Stay tuned for
                    developments as a band forms and shows get scheduled. Join
                    the mailing list today for the latest updates along the
                    journey!
                  </p>
                  <hr className="d-none d-lg-block mb-0 mr-0" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Subscribe />

    <SocialLinks />
    <Footer />
  </Layout>
);

export default IndexPage;
