import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Image from './assets/assets/images/image-web-3-desktop.jpg'
import gaming from './assets/assets/images/image-gaming-growth.jpg'
import retro from './assets/assets/images/image-retro-pcs.jpg'
import laptop from './assets/assets/images/image-top-laptops.jpg'

function App() {
  const news = [
    {
      title: 'Hydrogen VS Electric Cars',
      description: 'Will hydrogen-fueled cars ever catch up to EVs?',
    },
    {
      title: 'The Downsides of AI Artistry',
      description:
        'What are the possible adverse effects of on-demand AI image generation?',
    },
    {
      title: 'Is VC Funding Drying Up?',
      description:
        'Private funding by VC firms is down 50% YOY. We take a look at what that means.',
    },
  ]
  const footer = [
    {
      img: retro,
      No: '01',
      header: 'Reviving Retro PCs',
      description: 'What happens when old PCs are given modern upgrades?',
    },
    {
      img: laptop,
      No: '02',
      header: 'Top 10 Laptops of 2022',
      description: 'Our best picks for various needs and budgets.',
    },
    {
      img: gaming,
      No: '03',
      header: 'The Growth of Gaming',
      description: 'How the pandemic has sparked fresh opportunities.',
    },
  ]
  return (
    <>
      <div className="w-screen flex justify-center mt-16 ">
        <div className="w-[90vw] flex flex-col ">
          <div className="flex flex-row justify-between items-center mb-10">
            <h1 className="text-[48px] font-[800]">W.</h1>
            <div className="flex flex-row space-x-8">
              <button className="cursor-pointer">Home</button>
              <button className="cursor-pointer">New</button>
              <button className="cursor-pointer">Popular</button>
              <button className="cursor-pointer">Trending</button>
              <button className="cursor-pointer">Categories</button>
            </div>
          </div>
          <div class="parent max-sm:flex max-sm:flex-col ">
            <imgage class="div1 ">
              <img src={Image} alt="" />
            </imgage>
            <aside class="div4 ">
              <div
                className="flex flex-col p-6  h-full justify-between"
                style={{ backgroundColor: `hsl(240, 100%, 5%)` }}
              >
                <h1 className="text-3xl text-yellow-400 font-[700]">New</h1>
                {news.map((article, index) => (
                  <div key={index} className="">
                    <h1 className="text-white">{article.title}</h1>
                    <div className="text-white pb-8">{article.description}</div>
                    <div className="bg-white h-[1px]">
                      <br className="" />
                    </div>
                  </div>
                ))}
              </div>
            </aside>
            <content class="div2 ">
              <p className=" text-6xl font-[800]">
                The Bright Future of Web 3.0?
              </p>
            </content>
            <content class="div3  flex flex-col justify-between">
              <p className="">
                We dive into the next evolution of the web that claims to put
                the power of the platforms back into the hands of the people.
                But is it really fulfilling its promise?
              </p>
              <button
                className="w-fit text-white px-6 py-2 "
                style={{ backgroundColor: ` hsl(5, 85%, 63%)` }}
              >
                R E A D M O R E
              </button>
            </content>

            <header class="div5 mt-5">
              <div className="flex flex-row justify-between ">
                <div className="flex flex-row h-[150px]">
                  <img src={footer[0].img} alt="" className="p-2" />
                  <div className="p-2 pr-10 ">
                    <h1 className="text-2xl font-[700]">{footer[0].No}</h1>
                    <h1 className="font-[700]">{footer[0].header}</h1>
                    <h2>{footer[0].description}</h2>
                  </div>
                  <p></p>
                </div>
              </div>
            </header>
            <article class="div6  mt-5">
              <div className="flex flex-row justify-between">
                <div className="flex flex-row h-[150px]">
                  <img src={footer[1].img} alt="" className="p-2" />
                  <div className="p-2 pr-10 ">
                    <h1 className="text-2xl font-[700]">{footer[1].No}</h1>
                    <h1 className="font-[700]">{footer[1].header}</h1>
                    <h2>{footer[1].description}</h2>
                  </div>
                  <p></p>
                </div>
              </div>
            </article>
            <footer class="div7  mt-5">
              <div className="flex flex-row justify-between ">
                <div className="flex flex-row h-[150px]">
                  <img src={footer[2].img} alt="" className="p-2" />
                  <div className="p-2 pr-10 ">
                    <h1 className="text-2xl font-[700]">{footer[2].No}</h1>
                    <h1 className="font-[700]">{footer[2].header}</h1>
                    <h2>{footer[2].description}</h2>
                  </div>
                  <p></p>
                </div>
              </div>
            </footer>
          </div>

          {/* <div className="flex flex-row justify-between items-center mb-10">
          <h1 className="text-[48px] font-[800]">W.</h1>
          <div className="flex flex-row space-x-8">
            <p>Home</p>
            <p>New</p>
            <p>Popular</p>
            <p>Trending</p>
            <p>Categories</p>
          </div>
        </div> */}
          {/* <div className="flex flex-row justify-between">
          <div className="flex flex-col w-[65%]">
            <img src={Image} alt="" />
            <div className="flex flex-row mt-6">
              <p className="w-[50%] text-5xl font-[800] pr-20">
                The Bright Future of Web 3.0?
              </p>
              <div className="flex flex-col w-[50%] justify-between ">
                <p className="">
                  We dive into the next evolution of the web that claims to put
                  the power of the platforms back into the hands of the people.
                  But is it really fulfilling its promise?
                </p>
                <button
                  className="w-fit text-white px-6 py-2 "
                  style={{ backgroundColor: ` hsl(5, 85%, 63%)` }}
                >
                  R E A D M O R E
                </button>
              </div>
            </div>
          </div>
          <div
            className="flex flex-col w-[30%] p-6"
            style={{ backgroundColor: `hsl(240, 100%, 5%)` }}
          >
            <h1 className="text-3xl text-yellow-400 font-[700]">New</h1>
            {news.map((article, index) => (
              <div key={index}>
                <h1 className="text-white">{article.title}</h1>
                <div className="text-white">{article.description}</div>
                <br />
              </div>
            ))}
          </div>
        </div> */}

          {/* <div className="flex flex-row justify-between mt-16 pb-20">
          {footer.map((footer, index) => (
            <div key={index} className="flex flex-row h-[150px]">
              <img src={footer.img} alt="" className="p-2" />
              <div className="p-2 pr-10 ">
                <h1 className="text-2xl font-[700]">{footer.No}</h1>
                <h1 className="font-[700]">{footer.header}</h1>
                <h2>{footer.description}</h2>
              </div>
              <p></p>
            </div>
          ))}
        </div> */}
        </div>
      </div>
    </>
  )
}

export default App
