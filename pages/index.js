import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React from 'react'
import { Header, Mainbox, MediaIcon } from '../component/btn.styles'
import { Box, Strength, Img, RoadMap, BgDiv, BoxContainer, SubBox, StepContainer, SubStep, HowTo } from '../component/box.styles'
import Link from 'next/link'
import { FaTelegramPlane, FaRedditAlien, FaTwitter, FaInstagram, FaYoutube, FaMediumM, FaGithub, FaAngleDoubleRight } from "react-icons/fa";
import { MainContainer, MoonContainer, EleContainer, LeftContainer, RightContainer } from '../component/main/main.styles'
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
          <div className="btn-container">
            <div className="btn">
              ABOUT
            </div>
            <div className="btn">
              HOW TO BUY
            </div>
            <div className="btn">
              ROAD MAP
            </div>
            <div className="btn">
              TELEGRAM
            </div>
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
              <div className="flex justify-around mt-4">
                <div className="rounded-full py-2 px-5 text-white btn-buy" style={{backgroundColor: "#945b82"}}>
                  BUY $TKINU
                </div>
                <div className="rounded-full py-2 px-5 text-white btn-tele">
                  TELEGRAM
                </div>
              </div>
              <div className="flex mt-6 justify-center">
                <Link href="#howto">
                  <MediaIcon>
                    <FaTelegramPlane />
                  </MediaIcon>
                </Link>
                <Link href="/">
                  <MediaIcon className="border-l border-r border-white">
                    <FaRedditAlien />
                  </MediaIcon>
                </Link>
                <Link href="/">
                  <MediaIcon>
                    <FaTwitter />
                  </MediaIcon>
                </Link>
                <Link href="/">
                  <MediaIcon className="border-l border-r border-white">
                    <FaInstagram />
                  </MediaIcon>
                </Link>
                <Link href="/">
                  <MediaIcon>
                    <FaYoutube />
                  </MediaIcon>
                </Link>
                <Link href="/">
                  <MediaIcon className="border-l border-r border-white">
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
              <div className="btn">Button Here</div>
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
              <div className="btn">Button Here</div>
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
              <div className="btn">Button Here</div>
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
              <div className="btn">Button Here</div>
            </div>
          </RightContainer>
        </EleContainer>
        <Parallax className="star-img" y={[ "-200px", "700px"]} tagOuter="figure">
          <img src="/svg/stars.svg" />
        </Parallax>
        <div className="middle-img">
          <img src="/svg/rocket.svg"/>
          <img src="/svg/rocket-trail.svg"/>
        </div>
        <div className="fade-back"></div>
      </MainContainer>
      <div className="flex flex-col items-center">
        <div id="about" className="w-full flex justify-center">
          <Box>
            <div className="header flex" style={{marginBottom: "100px"}}>
              <div className="text-2xl sm:text-4xl lg:text-6xl">About Treate Token</div>
            </div>
            <BoxContainer>
              <SubBox>
                <img className="box-img" src="/icon1.png" />
                <div className="box-header">Community Powerd</div>
                <p className="box-body">
                  KISHU is fully decentralized and owned by its fun, vibrant community. We welcome and embrace diverse perspectives to build KISHU into the best community in crypto.
                </p>
              </SubBox>
              <SubBox>
                <img className="box-img" src="/icon2.png" />
                <div className="box-header">Community Powerd</div>
                <p className="box-body">
                  For every transaction in KISHU's network (buy or sell), 2% of the transaction is distributed to existing holders. That means you earn $KISHU just by holding it in your wallet.
                </p>
              </SubBox>
              <SubBox>
                <img className="box-img" src="svg/icon3.svg" />
                <div className="box-header">Community Powerd</div>
                <p className="box-body">
                  KISHU has been <Strength>audited</Strength> and its LP (Liquidity Pool) tokens have been burnt. That means zero risk to our investors from potential bad actors.
                </p>
              </SubBox>
            </BoxContainer>
          </Box>
        </div>
        <div id="howto" className="w-full flex justify-center bg-gray-100" >
          <HowTo>
            <div className="header">
              <div className="currency">
                $BINU
              </div>
              <div className="text-xl sm:text-4xl lg:text-6xl">
                HO​W TO BUY?
              </div>
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
                  <FaAngleDoubleRight />
                  Install Metamask for Chrome
                </div>
              </SubStep>
              <SubStep>
                <div className="step-head">
                  STEP 2
                </div>
                <div className="step-bar" />
                <div className="step-body">
                  <FaAngleDoubleRight />
                  Send $ETH to MetaMask
                </div>
              </SubStep>
              <SubStep>
                <div className="step-head">
                  STEP 3
                </div>
                <div className="step-bar" />
                <div className="step-body">
                  <FaAngleDoubleRight />
                  Connect to Uniswap
                </div>
              </SubStep>
              <SubStep>
                <div className="step-head">
                  STEP 4
                </div>
                <div className="step-bar" />
                <div className="step-body">
                  <FaAngleDoubleRight />
                  Swap $ETH for $BINU
                </div>
              </SubStep>
            </StepContainer>
          </HowTo>
        </div>
      </div>
      <div id="roadmap" className="flex flex-col items-center text-pink-100">
        <h1 className="text-2xl sm:text-4xl lg:text-6xl  pt-28 sm:pt-14" style={{color: "black"}}>
          Road Map
        </h1>
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
      <div id="community" className="flex flex-col items-center pb-24 text-pink-100 pt-12 px-2 bg-gray-100">
        <h1 className="text-2xl sm:text-4xl lg:text-6xl text-black" style={{marginBottom: "140px"}}>
          COMMUNITY
        </h1>
        <div className="text-xl text-center my-4 js-show-on-scroll" style={{color: "#000"}}>
          Our community keeps growing everyday.  Please join our social platforms to get updates using the links below. <br/>
          There are 25k+ people in our different groups! 
        </div>
        <div className="text-xl text-center js-show-on-scroll" style={{color: "#000"}}>
          You can connect with us from anywhere in the world because we have international groups for foreign language speakers. 
        </div>
      </div>
      <div className="flex py-6 justify-center text-white" style={{backgroundColor: "#161b2b"}}>
          <div className="flex justify-around w-8/12 flex-col sm:flex-row">
            <Header>
              Price Chart
            </Header>
            <Header>
              How to Buy
            </Header>
            <Header>
              Moon Map
            </Header>
            <Header>
              Contact US
            </Header>
          </div>
        </div>
    </ParallaxProvider>
  )
}
