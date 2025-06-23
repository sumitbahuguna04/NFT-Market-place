import React, { useState, useEffect } from "react";

import { SHORTEN_ADDRESS } from "../../../Context/constants";
import { SiEthereum, CiHeart, TbCurrencySolana } from "../SVG/index";

const Featured = ({ nfts, publicKey }) => {
  const [createdNFTs, setCreatedNFTs] = useState([]);
  const [user, setUser] = useState();

  useEffect(() => {
    const createNft = localStorage.getItem("SOLANA_NFTS");

    const user = localStorage.getItem("USER_PROFILE");

    if (user) {
      const parsedProfile = JSON.parse(user);
      setUser(parsedProfile);
    }

    if (createNft) {
      const parsedNFTs = JSON.parse(createNft);
      const newArray = [...parsedNFTs]?.reverse();
      setCreatedNFTs(newArray);
    }
  }, []);
  return (
    <div className="tf-section featured-item style-bottom mt-20">
      <div className="themesflat-container">
        <div className="row">
          <div className="col-md-12">
            <div className="heading-section pb-20">
              <h2 className="tf-title ">Recent Created</h2>
            </div>
          </div>
          <div className="col-md-12">
            <div className="featured pt-10 swiper-container carouselfull">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "1rem",
                  overflowX: "auto",
                }}
              >
                {createdNFTs
                  ?.map((item, index) => (
                    <div key={index} className="tf-card-box style-1">
                      <div className="card-media">
                        <a>
                          <img src={item?.image} alt="" />
                        </a>
                        <span className="wishlist-button ">
                          <CiHeart />
                        </span>
                        <div className="featured-countdown">
                          <span className="js-countdown">{item?.symbol}</span>
                        </div>
                      </div>
                      <h5 className="name">
                        <a>{item?.name}</a>
                      </h5>
                      <div className="author flex items-center">
                        <div className="avatar">
                          <img
                            src={user?.image || "logo-solana.png"}
                            alt="Image"
                          />
                        </div>
                        <div className="info">
                          <span>Created by:</span>
                          <h6>
                            <a href="#">
                              {SHORTEN_ADDRESS(publicKey?.toString())}
                            </a>
                          </h6>
                        </div>
                      </div>
                      <div className="divider" />
                      <div className="meta-info flex items-center justify-between">
                        <span className="text-bid">{item?.traitTypeOne}</span>
                        <h6 className="price gem">{item?.valueOne}</h6>
                      </div>
                    </div>
                  ))
                  .slice(0, 4)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
