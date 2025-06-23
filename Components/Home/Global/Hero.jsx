import React from "react";
import { FaWallet, FaExternalLinkAlt, CiHeart } from "../SVG/index";

const Hero = ({ publicKey }) => {
  return (
    <div id="home" className="flat-pages-title-home2 relative">
      <div className="themesflat-container w-full">
        <div className="row">
          <div className="col-md-6">
            <div className="content">
              <h1 data-wow-delay="0s" className="wow fadeInUp">
                Solana <br /> NFTs Marketplace Create, Sale, Buy
              </h1>
              <p data-wow-delay="0.1s" className="wow fadeInUp">
                Buy and sell NFTs from the world’s top artists. More than 1.000
                premium digital artworks are available to be yours!
              </p>
              <div
                data-wow-delay="0.2s"
                className="wow fadeInUp flat-button flex"
              >
                <a
                  href=""
                  data-toggle="modal"
                  data-target="#popup_bid"
                  className="tf-button style-1 h50 w190 mr-30"
                >
                  Join Now
                  <FaExternalLinkAlt />
                </a>
                {publicKey && (
                  <a
                    href="/marketplace"
                    className="tf-button style-1 h50 w190 active"
                  >
                    Marketplace
                    <FaExternalLinkAlt />
                  </a>
                )}
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="banner__right relative">
              <div className="swiper-container swiper-3d-3card">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="tf-card-box style-2">
                      <div className="card-media">
                        <a href="#">
                          <img
                            src="assets/images/box-item/banner-08.jpg"
                            alt=""
                          />
                        </a>
                        <span className="wishlist-button ">
                          <CiHeart />
                        </span>
                        <div className="featured-countdown">
                          <span className="js-countdown">Solana NFT</span>
                        </div>
                        <div className="button-place-bid">
                          <a
                            href="#"
                            data-toggle="modal"
                            data-target="#popup_bid"
                            className="tf-button"
                          >
                            <span>Join Now</span>
                          </a>
                        </div>
                      </div>
                      <div className="author flex items-center justify-between">
                        <div className="avatar">
                          <img
                            src="assets/images/avatar/avatar-box-06.jpg"
                            alt="Image"
                          />
                        </div>
                        <div className="info">
                          <span>Posted by:</span>
                          <h6>
                            <a href="author-2.html">Cody Fisher</a>{" "}
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
