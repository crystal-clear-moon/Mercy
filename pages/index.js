import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React from 'react'
import { Header, Mainbox, MediaIcon } from '../component/btn.styles'
import { Box, Strength, Img, RoadMap, BgDiv, BoxContainer, SubBox, StepContainer, SubStep } from '../component/box.styles'
import Link from 'next/link'
import { FaTelegramPlane, FaRedditAlien, FaTwitter, FaInstagram, FaYoutube, FaMediumM, FaGithub } from "react-icons/fa";
import { MainContainer, MoonContainer, EleContainer, LeftContainer, RightContainer } from '../component/main/main.styles'
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';

export default function Home() {

  return (
    <ParallaxProvider>
      <Head>
        <title>Treat Token</title>
        <meta name="description" content="Shiba token" />
        <link rel="icon" href="/head-logo.png" />
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
        <MoonContainer>
          <div className="moon-title">
            TSUKI IS JAPANESE
            FOR MOON
          </div>
          <div className="moon-desc">
            Tsuki Inu($TSUKI) is a community focused, decentralized cryptocurrency with instant rewards for holders. Join the moon mission.
          </div>
          <div className="flex justify-around mt-4">
            <div className="rounded-full py-2 px-5 text-white btn-buy">
              BUY TSUKI
            </div>
            <div className="rounded-full py-2 px-5 text-white btn-tele">
              TELEGRAM
            </div>
          </div>
        </MoonContainer>
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
        <Parallax className="star-img" y={[ -80, 100]} tagOuter="figure">
          <img src="/svg/stars.svg" />
        </Parallax>
        <Parallax className="moon-img" y={[ -30, 50]} tagOuter="figure">
          <img src="/svg/moon.svg" />
        </Parallax>
        <Parallax className="middle-img" y={[ 0, 10]} tagOuter="figure">
          <img src="/svg/rocket.svg"/>
          <img src="/svg/rocket-trail.svg"/>
        </Parallax> 
      </MainContainer>
    </ParallaxProvider>
  )
}
