import React from 'react'
import Header from './Header'
import ShortAbout from './ShortAbout'
import ShortService from './ShortService'
import ShortProject from './ShortProject'
import ShortSkill from './ShortSkill'
import Top from './Top'
import Footer from './Footer'
import Subscribe from './Subscribe'
import Review from './Review'
import HomeMenu from './HomeMenu'
import Blog from './Blog'

const Home = () => {
  document.title = ' DevR - Home '
  return (
    <>
      <Top />
      <HomeMenu />
      <Header />
      <ShortAbout />
      <ShortService />
      <ShortProject />
      <ShortSkill />
      <Subscribe />
      <Review />
      <Blog />
      <Footer />
    </>
  )
}
export default Home
