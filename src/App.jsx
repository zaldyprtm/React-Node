import { useState } from 'react'
import './App.css'
import "animate.css/animate.compat.css";
import { Home } from './components/Home'
import CoffeeList from './components/CoffeeList'
import { Hero } from './components/Hero'
import { Navbar } from "./components/Navbar";
import { Footer } from './components/Footer'
import {Animated} from "react-animated-css";
import ScrollAnimation from 'react-animate-on-scroll';

function App() {

  return (
    <>
    <Navbar />
    <div data-aos="fade-left">
     <Hero />

    </div>
    {/* <Home /> */}

    <hr className='bg-slate-300 mx-auto w-40 h-1 rounded-full mt-10'/>
    <Animated animationIn='bounceInLeft' animationOut='fadeOut'> 
    <h1 className='font-inter font-semibold text-center text-2xl mt-1'>Our Menu</h1>
    </Animated>
    {/* <Animated animationIn='fadeInRight' animationOut='fadeInLeft'> */}

     <CoffeeList />

    {/* </Animated> */}


    <Footer />
    </>
  )
}

export default App
