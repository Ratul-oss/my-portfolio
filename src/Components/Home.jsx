import React from 'react'
import Header from './Header'
import ShortAbout from './ShortAbout'
import ShortService from './ShortService'
import ShortProject from './ShortProject'
import ShortSkill from './ShortSkill'
import Footer from './Footer'
import Subscribe from './Subscribe'
import Review from './Review'
import HomeMenu from './HomeMenu'
import Blog from './Blog'
import Loader from './Loader'

const Home = () => {
  document.title = ' DevR - Home '
  // window.scrollTo(0, 0)
  return (
    <>
      <Loader />
      <HomeMenu />
      <Header />
      <ShortAbout />
      <ShortProject />
      <ShortSkill />
      <ShortService />
      <Review />
      <Subscribe />
      <Blog />
      <Footer />
    </>
  )
}
export default Home
