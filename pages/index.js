import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React from 'react'
import { Header, Mainbox, MediaIcon } from '../component/btn.styles'
import { Box, Strength, Img, RoadMap, BgDiv, BoxContainer, SubBox, StepContainer, SubStep } from '../component/box.styles'
import Link from 'next/link'
import { FaTelegramPlane, FaRedditAlien, FaTwitter, FaInstagram, FaYoutube, FaMediumM, FaGithub } from "react-icons/fa";

export default function Home() {

  return (
    <div>
      <Head>
        <title>Treat Token</title>
        <meta name="description" content="Shiba token" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <div>
        <div className="fixed w-full transition-color duration-1000 z-50 bg-black">
          <div className="flex justify-around">
            <div className="flex my-auto p-2">
              <Link href="#">
                <img width="42" style={{height: "fit-content", padding: "1.5rem 0rem"}} src="/logo.png" />
              </Link>
              <div className="my-auto text-2xl hover:cursor-pointer" style={{color: "#fff4ce"}}>TREAT TOKEN</div>
            </div>
            <div className="hidden sm:flex items-center">
              <div>
                <Link href="#about">
                  <Header>
                    About
                  </Header>
                </Link>
                <Link href="#howto">
                  <Header>
                    How to Buy
                  </Header>
                </Link>
                <Link href="#roadmap">
                  <Header>
                    Road Map
                  </Header>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Mainbox>
            <div className="my-auto px-6 mr-24">
              <h1 className="text-2xl sm:text-3xl lg:text-6xl" style={{color: "#fff4ce"}}>
                Little meme.
                <br />
                Big dream. 
              </h1> <br />
              <p className="text-lg sm:text-xl lg:text-2xl" style={{color: "#fff4ce"}}>
                ShibaSwap. Fun tokens. Artist incubator.<br/> Growing 260k+ Community <br /> & more on the horizon!
              </p><br />
              <div className="flex mt-12 items-center flex-col lg:flex-row">
                <span className="bg-gray-200 text-xl py-2 px-6 rounded-lg mr-4" style={{color: "black", backgroundColor: "#ebbd93" }}>Buy $TSUKI</span>
                <div className="flex lg:mt-0 mt-6">
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
              </div>
            </div>
            <div className="flex items-center justify-center ml-24">
              <Img src="/logo.png" />
            </div>
          </Mainbox>
        </div>
        <div className="flex flex-col items-center">
          <div id="about" className="w-full flex justify-center" style={{backgroundColor: '#0e0e0e'}}>
            <Box>
              <div className="header flex">
                <div className="text-2xl sm:text-4xl lg:text-6xl">About Treate Token</div>
              </div>
              <BoxContainer>
                <SubBox>
                  <div className="box-header">Community Powerd</div>
                  <div className="box-body">
                    <Strength>⦿ SHIB</Strength> is an experiment in decentralized spontaneous community building. SHIB token is our first token and allows users to hold Billions or even Trillions of them.  Nicknamed the DOGECOIN KILLER, this ERC-20 ONLY token can remain well under a penny and still outpace Dogecoin in a small amount of time (relatively speaking). Popular worldwide, and already up thousands of percent, Shiba token ($Shib) is the first cryptocurrency token to be listed and incentivized on ShibaSwap, our decentralized exchange.   
                  </div>
                </SubBox>
                <SubBox>
                  <div className="box-header">Community Powerd</div>
                  <div className="box-body">
                    We locked the 50% of the total supply to Uniswap and threw away the keys! 
                    The remaining 50% was burned to Vitalik Buterin and we were the first project following this path, so everyone has to buy on the open market, ensuring a fair and complete distribution where devs don't own team tokens they can dump on the community.
                  </div>
                </SubBox>
                <SubBox>
                  <div className="box-header">Community Powerd</div>
                  <div className="box-body">
                    <Strength>⦿  LEASH</Strength>  was originally set to be a rebase token pegged to the price of Dogecoin. Now, it has been unleashed and will not rebase. 
                    With a total circulation of ONLY 100k tokens, it has the opposite appeal to Shib (which has a much larger supply). 
                    The second token incentivized on the swap offers special rewards for those who provide liquidity.  
                  </div>
                </SubBox>
              </BoxContainer>
            </Box>
          </div>
          <div id="howto" className="w-full flex justify-center bg-black" >
            <Box>
              <div className="header">
                <div className="text-2xl sm:text-4xl lg:text-6xl">
                  HO​W TO BUY
                </div>
                <div className="header-desc">
                  Follow these steps or join our <Strength>Telegram</Strength> group if you need help
                </div>
              </div>
              <StepContainer>
                <SubStep>
                  <div className="step-head">
                    <span className="step-num">1</span>
                    Create a MetaMask Wallet
                  </div>
                  <div className="step-body">
                      $KISHU token is available on the Ethereum blockchain.
                      MetaMask is the market leader in ERC20 (Ethereum) wallets.
                      On Google Chrome, visit <Strength>metamask.io</Strength> to download the extension and set up a wallet.
                      On mobile? Get MetaMask's app for <Strength>iPhone</Strength> or <Strength>Android</Strength>.
                  </div>
                </SubStep>
                <SubStep>
                  <div className="step-head">
                    <span className="step-num">2</span>
                    Send $ETH to MetaMask
                  </div>
                  <div className="step-body">
                    Buy Ethereum through MetaMask or transfer it to your MetaMask wallet address from another wallet (e.g. Coinbase or Binance).
                  </div>
                </SubStep>
                <SubStep>
                  <div className="step-head">
                    <span className="step-num">3</span>
                    Visit KISHU Swap
                  </div>
                  <div className="step-body">
                    The only place to buy or sell <Strength>SHIB</Strength> or <Strength>LEASH</Strength> safely is on Uniswap. 
                    There are some centralized exchanges that have listed SHIB, but CEXs have a history of locking funds. 
                    If you can, it is safer to trade on a decentralized exchange like Uniswap or 1inch.
                  </div>
                </SubStep>
                <SubStep>
                  <div className="step-head">
                    <span className="step-num">4</span>
                    Swap $ETH for $KISHU
                  </div>
                  <div className="step-body">
                    Enter the amount of $ETH you would like to swap for $KISHU. Click Connect Wallet then Swap
                  </div>
                </SubStep>
              </StepContainer>
            </Box>
          </div>
        </div>
        <div id="roadmap" className="flex flex-col items-center text-pink-100" style={{backgroundColor: "#0e0e0e"}}>
          <h1 className="text-2xl sm:text-4xl lg:text-6xl  pt-28 sm:pt-14" style={{color: "#fff4ce"}}>
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
        <div id="community" className="flex flex-col items-center pb-24 text-pink-100 pt-12 px-2 bg-black">
          <h1 className="text-2xl sm:text-4xl lg:text-6xl" style={{color: "#fff4ce"}}>
            COMMUNITY
          </h1>
          <div className="text-xl text-center my-4" style={{color: "#fff4ce"}}>
            Our community keeps growing everyday.  Please join our social platforms to get updates using the links below. <br/>
            There are 25k+ people in our different groups! 
          </div>
          <div className="text-xl text-center" style={{color: "#fff4ce"}}>
            You can connect with us from anywhere in the world because we have international groups for foreign language speakers. 
          </div>
        </div>
        <div className="flex py-6 justify-center bg-black">
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
      </div>
    </div>
  )
}
