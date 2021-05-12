import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React from 'react'
import { Header } from '../component/btn.styles'
import { Box, Strength, Img, RoadMap, BgDiv } from '../component/box.styles'
import Link from 'next/link'

export default function Home() {

  React.useEffect(() => {
    var headerId = document.getElementById("headerId");

    var myScrollFunc = function () {
        var y = window.scrollY;
        if (y >= 1) {
            headerId.className = "block"
        } else {
            headerId.className = "hidden"
        }
    };
    window.addEventListener("scroll", myScrollFunc);
  }, [])
  return (
    <div>
      <Head>
        <title>Treat Token</title>
        <meta name="description" content="Shiba token" />
        <link rel="icon" href="https://www.shibatoken.com/img/shib_logo_header.png" />
      </Head>
      <div>
        <div id="headerId" className="hidden fixed">
          <div className="bg-blue-500 flex justify-around">
            <div className="flex my-auto p-2">
              <Link href="#">
                <img style={{height: "fit-content"}} src="https://www.shibatoken.com/img/shib_logo_header.png" />
              </Link>
              <div className="my-auto text-2xl text-white hover:cursor-pointer hover:text-white">TREAT TOKEN</div>
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
        <div className="flex justify-around flex-col sm:flex-row">
          <div className="my-auto px-6">
            <p className="text-yellow-800 text-xl sm:text-2xl lg:text-4xl">
              Decentralized Meme Tokens <br />
              that grew into a vibrant ecosystem 
            </p>
            <p className="text-yellow-800 text-xl sm:text-2xl lg:text-4xl">
              ShibaSwap. Fun tokens. Artist incubator.<br/> Growing 260k+ Community <br /> & more on the horizon!
            </p>
            <button className="text-white mt-12 py-2 px-4">READ OUR WOOFPAPER</button>
          </div>
          <Img src="https://www.shibatoken.com/img/shib_ch_le.png" />
        </div>
        <div className="pb-28 sm:pb-14 flex flex-col items-center">
          <div className="w-full flex justify-center">
            <Box id="about">
              <div className="header flex">
                <img width="auto" height="fit-content" src="https://www.shibatoken.com/img/shib_logo_header.png" />
                <div className="text-2xl sm:text-4xl lg:text-6xl">About Treate Token</div>
              </div>
              <div>
                <p>
                  <Strength>⦿ SHIB</Strength> is an experiment in decentralized spontaneous community building. SHIB token is our first token and allows users to hold Billions or even Trillions of them.  Nicknamed the DOGECOIN KILLER, this ERC-20 ONLY token can remain well under a penny and still outpace Dogecoin in a small amount of time (relatively speaking). Popular worldwide, and already up thousands of percent, Shiba token ($Shib) is the first cryptocurrency token to be listed and incentivized on ShibaSwap, our decentralized exchange.   
                </p>
                <p>
                  We locked the 50% of the total supply to Uniswap and threw away the keys! 
                  The remaining 50% was burned to Vitalik Buterin and we were the first project following this path, so everyone has to buy on the open market, ensuring a fair and complete distribution where devs don't own team tokens they can dump on the community.
                </p>
                <p>
                  <Strength>⦿  LEASH</Strength>  was originally set to be a rebase token pegged to the price of Dogecoin. Now, it has been unleashed and will not rebase. 
                  With a total circulation of ONLY 100k tokens, it has the opposite appeal to Shib (which has a much larger supply). 
                  The second token incentivized on the swap offers special rewards for those who provide liquidity.  
                </p>
                <p>
                  <Strength>⦿ BONE</Strength> Dogecoin Killer is our next token! <Strength>COMING SOON</Strength>, Shiba Inu Bone, takes the power of Defi to the next level. 
                  Details on how to acquire this token, tokenomics and incentives will be announced with the reveal of ShibaSwap.
                </p>
              </div>
            </Box>
          </div>
          <div className="w-full flex justify-center">
            <Box id="howto">
              <div className="header flex">
                <img src="https://www.shibatoken.com/img/shib_logo_header.png" />
                <div className="text-2xl sm:text-4xl lg:text-6xl">
                  HO​W TO BUY
                </div>
              </div>
              <div>
                <p>
                  The only place to buy or sell <Strength>SHIB</Strength> or <Strength>LEASH</Strength> safely is on Uniswap. 
                  There are some centralized exchanges that have listed SHIB, but CEXs have a history of locking funds. 
                  If you can, it is safer to trade on a decentralized exchange like Uniswap or 1inch.
                </p>
                <p>
                  <Strength>BONE</Strength> is not available yet , but will be able to acquire soon.
                </p>
                <p>
                  See the Live Chart analytics: 
                  <Strength>SHIB</Strength> / <Strength>LEASH</Strength>
                </p>
              </div>
            </Box>
          </div>
        </div>
        <div id="roadmap" className="flex flex-col items-center text-pink-100">
          <h1 className="text-2xl sm:text-4xl lg:text-6xl text-yellow-700">
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
        <div id="community" className="flex flex-col items-center pb-24 text-pink-100 pt-12 px-2">
          <h1 className="text-2xl sm:text-4xl lg:text-6xl text-yellow-700">
            COMMUNITY
          </h1>
          <div className="text-xl text-yellow-500 text-center my-4">
            Our community keeps growing everyday.  Please join our social platforms to get updates using the links below. <br/>
            There are 25k+ people in our different groups! 
          </div>
          <div className="text-xl text-yellow-500 text-center">
            You can connect with us from anywhere in the world because we have international groups for foreign language speakers. 
          </div>
        </div>
        <div className="flex py-6 justify-center bg-blue-500">
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
