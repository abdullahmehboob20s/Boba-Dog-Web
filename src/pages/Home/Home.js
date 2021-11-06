import React from "react";
import "./Home.css";
import heroImg from "assets/images/hero-img.png";
import dogImg from "assets/images/dog-img.png";
import SocialLinkBtn from "components/SocialLinkBtn/SocialLinkBtn";
import discordIcon from "assets/images/discord-icon.png";
import twitterIcon from "assets/images/twitter-icon.png";
import heroBlob from "assets/images/hero-blob.png";
import SideBySideSection from "components/SideBySideSection/SideBySideSection";
import dogenomicsImg from "assets/images/dogenomics-img.png";
import roadmapImg from "assets/images/roadmap-img.png";
import visionImg from "assets/images/vision-img.png";
import deskImg from "assets/images/desk.png";
import joystickImg from "assets/images/joystick-img.png";
import gamingImgVision from "assets/images/gaming-vision-img.png";

function Home() {
  return (
    <div>
      <div className="hero-wrapper bg-lightest-blue mb-60px">
        <img className="hero-blob" src={heroBlob} alt="" />
        <div className="container-wrapper py-100px">
          <div className="hero">
            <div className="hero-left">
              <p className="fs-60px black title weight-5 mb-40px lh-65px">
                The first Doge <br /> On{" "}
                <span className="dark-blue">Boba.</span>
              </p>

              <p className="subtitle fs-16px gray mb-60px lh-22px">
                BobaDoge is the first Dog coin as well as one of the first
                native tokens to launch on the newly released Boba network.
              </p>

              <div className="hero-links">
                <button className="hero-btn bg-dark-blue pointer">
                  <img src={dogImg} alt="" />
                  <p className="white fs-16px weight-5">Buy BobaDog</p>
                </button>
                <SocialLinkBtn img={discordIcon} name="discord" />
                <SocialLinkBtn img={twitterIcon} name="twitter" />
              </div>
            </div>
            <div className="hero-right">
              <div className="hero-img">
                <img src={heroImg} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <SideBySideSection
        img={dogenomicsImg}
        grid={true}
        title="Dogenomics"
        discriptions={[
          "Team Tokens & Marketing Tokens will be locked behind time based smart contracts, more information on this later. Initial BobaDoge Liquidity will also be locked Permanently, making BobaDoge rug-proof",
        ]}
      >
        <div className="blob top-right"></div>
        <div className="blob bottom-left"></div>
      </SideBySideSection>

      <div className="mt-60px">
        <SideBySideSection
          img={roadmapImg}
          reverse={true}
          title="Our Roadmap "
          discriptions={[
            "We believe that Boba Network will have the best chance to succeed in doing what no other L2 has yet to do - achieve true mass adoption.",
            "Our motivation for starting this project was to do our best to stay engaged, drive interest to Boba Network and help the ecosystem grow. Our long-term vision is to build the biggest and strongest community as a first mover on Boba Network. We will do everything we can to ensure the success of this project. Together we can make BobaDoge one of the top projects on Boba.",
          ]}
        >
          <div className="blob top-left"></div>
        </SideBySideSection>
      </div>
      <SideBySideSection
        img={visionImg}
        title="Our Vision  "
        discriptions={[
          "The first steps include increasing awareness by getting BobaDoge on CoinGecko and CoinMarketCap, finalizing our social medias, and of course, listing / adding liquidity for BobaDoge.",
          'We are going to take a sustainable approach to marketing, and use correctly targeted marketing campaigns together with strategic partnerships with other Boba projects to add value to our project. We are also of course interested in working with the right influencers, but as recent events have shown us, sometimes "influencers" destroy more value than they add.',
        ]}
      >
        {" "}
        <div className="blob top-right"></div>
      </SideBySideSection>
      <SideBySideSection
        img={deskImg}
        reverse={true}
        discriptions={[
          "The first steps include increasing awareness by getting BobaDoge on CoinGecko and CoinMarketCap, finalizing our social medias, and of course, listing / adding liquidity for BobaDoge.",
          'We are going to take a sustainable approach to marketing, and use correctly targeted marketing campaigns together with strategic partnerships with other Boba projects to add value to our project. We are also of course interested in working with the right influencers, but as recent events have shown us, sometimes "influencers" destroy more value than they add.',
        ]}
      >
        <div className="blob center"></div>
      </SideBySideSection>

      <div className="gaming-wrapper py-100px">
        <div className="blob top-left" alt=""></div>
        <div className="blob bottom-right" alt=""></div>
        <div className="container-wrapper">
          <div className="gaming">
            <div className="gaming-left text-center">
              <p className="black text-center fs-40px title weight-5">
                Our Vision{" "}
              </p>
              <img src={gamingImgVision} alt="" />
            </div>
            <div className="gaming-right text-center">
              <p className="black text-center fs-40px title weight-5">
                BobaDoge Game{" "}
              </p>
              <img src={joystickImg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
