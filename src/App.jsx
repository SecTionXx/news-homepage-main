import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ImageDesktop from './assets/assets/images/image-web-3-desktop.jpg'
import ImageMobile from './assets/assets/images/image-web-3-mobile.jpg'
import gaming from './assets/assets/images/image-gaming-growth.jpg'
import retro from './assets/assets/images/image-retro-pcs.jpg'
import laptop from './assets/assets/images/image-top-laptops.jpg'

function App() {
  const [isDesktopMode, setIsDesktopMode] = useState(window.innerWidth >= 1024)

  useEffect(() => {
    const handleResize = () => {
      setIsDesktopMode(window.innerWidth >= 1024)
    }

    // Attach the event listener to handle window resizing
    window.addEventListener('resize', handleResize)

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

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
    <div
      className={`flex flex-col items-center w-[375px] p-4  ${
        isDesktopMode ? 'flex flex-col w-[1440px] ' : ''
      }`}
    >
      <header className="flex flex-row justify-between w-full mb-4">
        <h1 className="text-4xl font-[700]">W.</h1>
        <label className="btn btn-circle swap swap-rotate">
          {!isDesktopMode && (
            <svg
              className="swap-off fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
            >
              <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
            </svg>
          )}
          {isDesktopMode && (
            <div className="flex flex-row space-x-8">
              <button className="cursor-pointer">Home</button>
              <button className="cursor-pointer">New</button>
              <button className="cursor-pointer">Popular</button>
              <button className="cursor-pointer">Trending</button>
              <button className="cursor-pointer">Categories</button>
            </div>
          )}
        </label>
      </header>
      <div
        className={` ${
          isDesktopMode
            ? 'grid grid-cols-3 grid-flow-row gap-y-10 gap-x-10'
            : 'space-y-14'
        }`}
      >
        <content className="space-y-4 desktop:col-span-2 desktop:col-start-1 ">
          <img
            src={isDesktopMode ? ImageDesktop : ImageMobile}
            alt=""
            className="w-fit pb-4"
          />
          <subcontent className="desktop:grid-cols-2 desktop:grid desktop: gap-x-10 desktop:pt-4 ">
            <h1 className="text-5xl font-[800] w-fit desktop:text-6xl desktop:pr-8 pb-4">
              The Bright Future of Web 3.0?
            </h1>
            <article className="flex flex-col justify-s m-auto desktop:h-full desktop:justify-between">
              <p className="desktop:text-lg pb-4">
                We dive into the next evolution of the web that claims to put
                the power of the platforms back into the hands of the people.
                But is it really fulfilling its promise?
              </p>
              <button
                className="w-fit text-white px-7 py-3 text-xs "
                style={{ backgroundColor: ` hsl(5, 85%, 63%)` }}
              >
                R E A D M O R E
              </button>
            </article>
          </subcontent>
        </content>
        <article
          className="flex flex-col p-10  h-full justify-between desktop:col-span-1 max-[768]:mt-14 "
          style={{ backgroundColor: `hsl(240, 100%, 5%)` }}
        >
          <h1 className="text-3xl text-yellow-400 font-[700] mb-8">New</h1>
          {news.map((article, index) => (
            <div key={index} className="text-white ">
              <h2 className="pb-2 font-[700] text-2xl ">{article.title}</h2>
              <p className="text-lg">{article.description}</p>
              <div className="bg-white h-[1px] my-8">
                <br className="" />
              </div>
            </div>
          ))}
        </article>
        <footer className="flex flex-col desktop:grid desktop:grid-cols-3 desktop:col-span-3 desktop: gap-x-10 ">
          {footer.map((content, index) => (
            <content key={index} className="flex flex-row mb-8">
              <img src={content.img} alt="" className="h-[150px] mr-4" />
              <container className="flex flex-col ml-2 justify-between">
                <h1
                  className="text-4xl font-[700]"
                  style={{ color: 'hsl(236, 13%, 42%)' }}
                >
                  {content.No}
                </h1>
                <h2 className="font-[700] text-xl">{content.header}</h2>
                <p className="text-lg">{content.description}</p>
              </container>
            </content>
          ))}
        </footer>
      </div>
    </div>
  )
}

export default App
