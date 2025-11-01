"use client";
import "../app/globals.css"
import React from 'react'
import Skill from "@/compnents/organisms/Skill"
import Cards from "@/compnents/organisms/Cards"
import Banner from '@/compnents/organisms/Banner'
import Header from '@/compnents/organisms/Header'
import AboutMe from '@/compnents/organisms/AboutMe'
import Portfolio from "@/compnents/organisms/Portfolio"
import ClientReviews from "@/compnents/organisms/ClientReviews"

function Home() {
  return (
    <div className='flex  flex-col gap-[30px] overflow-hidden' >
      <div className="d">
        <Header />
      </div>
      <div className="container">
        <Banner />
      </div>
      <div className="container" id='about_me'>
        <AboutMe />
      </div>
            <div id="skill" className="pt-[100px]">
        <Skill />
      </div>
      <div className="pt-[100px]" id="card">
        <Cards />
      </div>
      <div id="Portfolio" className="pt-[140px]">
        <Portfolio />
      </div>
      <div id="Reviews">
        <ClientReviews/>
      </div>
    </div>
  )
}

export default Home;

