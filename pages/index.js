import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React from 'react'
import { Header, Mainbox, MediaIcon } from '../component/btn.styles'
import { Box, Strength, Img, RoadMap, BgDiv, BoxContainer, SubBox, StepContainer, SubStep, HowTo } from '../component/box.styles'
import Link from 'next/link'
import { FaTelegramPlane, FaRedditAlien, FaTwitter, FaInstagram, FaYoutube, FaMediumM, FaGithub, FaAngleDoubleRight } from "react-icons/fa";
import { MainContainer, MoonContainer, EleContainer, LeftContainer, RightContainer, SectionTitle } from '../component/main/main.styles'
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';

export default function Home() {
  React.useEffect(() => {
    const callback = function (entries) {
      entries.forEach((entry) => {
        console.log(entry);
    
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fadeIn");
        } else {
          // entry.target.classList.remove("animate-fadeIn");
        }
      });
    };
    
    const observer = new IntersectionObserver(callback);
    
    const targets = document.querySelectorAll(".js-show-on-scroll");
    targets.forEach(function (target) {
      target.classList.add("opacity-0");
      observer.observe(target);
    });
  }, []);
  
  return (
    <ParallaxProvider>
      <Head>
        <title>Treat Token</title>
        <meta name="description" content="Shiba token" />
        <link rel="icon" href="/head-logo.png" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap" rel="stylesheet" />
      </Head>
      <MainContainer>
        <div className="flex flex-col items-center">
          <img className="logo-img" src="/logo.png" />
          <div className="header-title">TSUKI INU</div>
          <div className="btn-container z-50">
            <Link href="#about">
              <a>
                <div className="btn">
                  ABOUT
                </div>
              </a>
            </Link>
            <Link href="#howto">
              <a>
                <div className="btn">
                  HOW TO BUY
                </div>
              </a>
            </Link>
            <Link href="/">
              <a>
                <div className="btn">
                  MOON MAP
                </div>
              </a>
            </Link>
            <Link href="/">
              <a>
                <div className="btn">
                  TELEGRAM
                </div>
              </a>
            </Link>
          </div>
        </div>
        <div className="moon-img">
          <div className="img">
            <MoonContainer>
              <div className="moon-title">
                TSUKI IS JAPANESE
                FOR MOON
              </div>
              <div className="moon-desc">
                Tsuki Inu($TKINU) is a community focused, decentralized cryptocurrency with instant rewards for holders. Join the moon mission.
              </div>
              <div className="flex justify-around mt-2">
                <Link href="/">
                  <a>
                    <div className="rounded-full py-2 px-5 text-white btn-buy">
                      BUY $TKINU
                    </div>
                  </a>
                </Link>
                <Link href="/">
                  <a>
                    <div className="rounded-full py-2 px-5 text-white btn-tele">
                      TELEGRAM
                    </div>
                  </a>
                </Link>
              </div>
              <div className="flex mt-4 justify-center">
                <Link href="#howto">
                  <MediaIcon>
                    <FaTelegramPlane />
                  </MediaIcon>
                </Link>
                <Link href="/">
                  <MediaIcon>
                    <FaRedditAlien />
                  </MediaIcon>
                </Link>
                <Link href="/">
                  <MediaIcon>
                    <FaTwitter />
                  </MediaIcon>
                </Link>
                <Link href="/">
                  <MediaIcon>
                    <FaInstagram />
                  </MediaIcon>
                </Link>
                <Link href="/">
                  <MediaIcon>
                    <FaYoutube />
                  </MediaIcon>
                </Link>
                <Link href="/">
                  <MediaIcon>
                    <FaMediumM />
                  </MediaIcon>
                </Link>
                <Link href="/">
                  <MediaIcon>
                    <FaGithub />
                  </MediaIcon>
                </Link>
              </div>
            </MoonContainer>
          </div>
        </div>
        <EleContainer>
          <LeftContainer>
            <div className="container">
              <div className="ele-title">
                COMMUNITY POWERED
              </div>
              <div className="ele-desc">
                TSUKI SWAP.<br />
                Fun tokens. Artist incubator. <br />
                Growing 260+k Community<br />
                & more on the horizon
              </div>
              <Link href="/">
                <a>
                  <div className="btn">Button Here</div>
                </a>
              </Link>
            </div>
            <div className="container">
              <div className="ele-title">
                COMMUNITY POWERED
              </div>
              <div className="ele-desc">
                TSUKI SWAP.<br />
                Fun tokens. Artist incubator. <br />
                Growing 260+k Community<br />
                & more on the horizon
              </div>
              <Link href="/">
                <a>
                  <div className="btn">Button Here</div>
                </a>
              </Link>
            </div>
          </LeftContainer>
          <RightContainer>
            <div className="container">
              <div className="ele-title">
                TSUKI IS JAPANESE FOR MOON
              </div>
              <div className="ele-desc">
                TSUKI SWAP.<br />
                Fun tokens. Artist incubator. <br />
                Growing 260+k Community<br />
                & more on the horizon
              </div>
              <Link href="/">
                <a>
                  <div className="btn">Button Here</div>
                </a>
              </Link>
            </div>
            <div className="container">
              <div className="ele-title">
                TSUKI IS JAPANESE FOR MOON
              </div>
              <div className="ele-desc">
                TSUKI SWAP.<br />
                Fun tokens. Artist incubator. <br />
                Growing 260+k Community<br />
                & more on the horizon
              </div>
              <Link href="/">
                <a>
                  <div className="btn">Button Here</div>
                </a>
              </Link>
            </div>
          </RightContainer>
        </EleContainer>
        <Parallax className="star-img" y={[ "-300px", "500px"]} tagOuter="figure">
          <img src="/svg/stars.svg" />
        </Parallax>
        <div className="middle-img">
          <img src="/svg/rocket.svg"/>
          <img src="/svg/rocket-trail.svg"/>
        </div>
        <img src="/rocket.png" className="rocket" />
        <div className="fade-back"></div>
      </MainContainer>
      <div className="flex flex-col items-center mt-24">
        <div id="about" className="w-full flex justify-center">
          <Box>
            <div className="header flex" style={{marginBottom: "100px"}}>
              <SectionTitle>Why Tsuki Inu?</SectionTitle>
            </div>
            <BoxContainer>
              <SubBox>
                <img className="box-img" src="/icon1.png" />
                <div className="box-header">Community Driven</div>
                <p className="box-body">
                  $TKINU is a 100% decentralized peer-to-peer digital currency fully owned by its fun, ambitious community. We aim to build the best cryptocurrency community the world has yet to see.
                </p>
              </SubBox>
              <SubBox>
                <img className="box-img" src="/icon2.png" />
                <div className="box-header">Safe</div>
                <p className="box-body">
                  We have locked away 100% of Liquidity and threw away the keys & sent 50% of total supply to a burn address - no chance of a Vitalik rug! 
                </p>
              </SubBox>
              <SubBox>
                <img className="box-img" src="svg/icon3.svg" />
                <div className="box-header">Secure</div>
                <p className="box-body">
                  We have also conducted a security audit for our contract, to secure the community's trust.
                </p>
              </SubBox>
            </BoxContainer>
          </Box>
        </div>
        <div id="howto" className="w-full flex justify-center bg-gray-100 py-48" >
          <HowTo>
            <div className="header">
              <div className="currency">
                $BINU
              </div>
              <SectionTitle>
                HO​W TO BUY?
              </SectionTitle>
              <div className="header-desc">
                You can simply get $BINU token via Metamask wallet.<br />
                Please read and follow the steps for puchasing the Binu Token.
              </div>
            </div>
            <StepContainer>
              <SubStep>
                <div className="step-head">
                  STEP 1
                </div>
                <div className="step-bar" />
                <div className="step-body">
                  <Link href="/">
                    <a className="flex items-center">
                      <FaAngleDoubleRight />
                      <span className="text-center">
                        Install Metamask for Chrome
                      </span>
                    </a>
                  </Link>
                </div>
              </SubStep>
              <SubStep>
                <div className="step-head">
                  STEP 2
                </div>
                <div className="step-bar" />
                <div className="step-body">
                  <Link href="/">
                    <a className="flex items-center">
                      <FaAngleDoubleRight />
                      <span className="text-center">
                        Send $ETH to MetaMask
                      </span>
                    </a>
                  </Link>
                </div>
              </SubStep>
              <SubStep>
                <div className="step-head">
                  STEP 3
                </div>
                <div className="step-bar" />
                <div className="step-body">
                  <Link href="/">
                    <a className="flex items-center">
                      <FaAngleDoubleRight />
                      <span className="text-center">
                        Connect to Uniswap
                      </span>
                    </a>
                  </Link>
                </div>
              </SubStep>
              <SubStep>
                <div className="step-head">
                  STEP 4
                </div>
                <div className="step-bar" />
                <div className="step-body">
                  <Link href="/">
                    <a className="flex items-center">
                      <FaAngleDoubleRight />
                      <span className="text-center">
                        Swap $TKINU for $BINU
                      </span>
                    </a>
                  </Link>
                </div>
              </SubStep>
            </StepContainer>
          </HowTo>
        </div>
      </div>
      <div id="roadmap" className="flex flex-col items-center text-pink-100 my-48">
        <SectionTitle>
          Moon Map
        </SectionTitle>
        <RoadMap>
          <div className="phase">
            <div className="header">Phase 1</div>
            <div className="step">
              <svg className="w-6 h-6 inline text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              <div>Website Launch</div> 
            </div>
            <div className="step">
              <svg className="w-6 h-6 inline text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              1,000 Holders
            </div>
            <div className="step">
              <svg className="w-6 h-6 inline text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              2,000 TG Members
            </div>
            <div className="step">
              <svg className="w-6 h-6 inline text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              Community Marketing<br /> Fund (CMF)
            </div>
            <div className="step">
              <svg className="w-6 h-6 inline text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              5,000 Holders
            </div>
            <div className="step">
              <svg className="w-6 h-6 inline text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              $10M Market cap
            </div>
          </div>
          <div className="phase">
            <div className="header">Phase 2</div>
            <div className="step">
              <svg className="w-6 h-6 inline text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              Website Launch
            </div>
            <div className="step">
              <svg className="w-6 h-6 inline text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              1,000 Holders
            </div>
            <div className="step">
              <svg className="w-6 h-6 inline text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              2,000 TG Members
            </div>
            <div className="step">
              <svg className="w-6 h-6 inline text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              Community Marketing<br /> Fund (CMF)
            </div>
            <div className="step">
              <svg className="w-6 h-6 inline text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              5,000 Holders
            </div>
            <div className="step">
              <svg className="w-6 h-6 inline text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              $10M Market cap
            </div>
          </div>
          <div className="phase">
            <div className="header">Phase 3</div>
            <div className="step">
              <svg className="w-6 h-6 inline text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              Website Launch
            </div>
            <div className="step">
              <svg className="w-6 h-6 inline text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              1,000 Holders
            </div>
            <div className="step">
              <svg className="w-6 h-6 inline text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              2,000 TG Members
            </div>
            <div className="step">
              <svg className="w-6 h-6 inline text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              Community Marketing<br /> Fund (CMF)
            </div>
            <div className="step">
              <svg className="w-6 h-6 inline text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              5,000 Holders
            </div>
            <div className="step">
              <svg className="w-6 h-6 inline text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              $10M Market cap
            </div>
          </div>
          <div className="phase">
            <div className="header">Phase 4</div>
            <div className="step">
              <svg className="w-6 h-6 inline text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              Website Launch
            </div>
            <div className="step">
              <svg className="w-6 h-6 inline text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              1,000 Holders
            </div>
            <div className="step">
              <svg className="w-6 h-6 inline text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              2,000 TG Members
            </div>
            <div className="step">
              <svg className="w-6 h-6 inline text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              Community Marketing<br /> Fund (CMF)
            </div>
            <div className="step">
              <svg className="w-6 h-6 inline text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              5,000 Holders
            </div>
            <div className="step">
              <svg className="w-6 h-6 inline text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              $10M Market cap
            </div>
          </div>
        </RoadMap>
      </div>
      <div className="flex py-6 justify-center text-white" style={{backgroundColor: "#161b2b"}}>
          <div className="flex justify-around w-8/12 flex-col sm:flex-row">
            <Link href="/">
              <Header>
                Price Chart
              </Header>
            </Link>
            <Link href="/">
              <Header>
                How to Buy
              </Header>
            </Link>
            <Link href="/">
              <Header>
                Moon Map
              </Header>
            </Link>
            <Link href="/">
              <Header>
                Contact US
              </Header>
            </Link>
          </div>
        </div>
    </ParallaxProvider>
  )
}
