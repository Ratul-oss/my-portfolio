import React, { useEffect } from 'react'
import Header from './Header'
import ShortAbout from './ShortAbout'
import ShortService from './ShortService'
import ShortProject from './ShortProject'
import ShortSkill from './ShortSkill'
import Footer from './Footer'
import Subscribe from './Subscribe'
import Review from './Review'
import Blog from './Blog'

const Home = () => {
  useEffect(() => {
    document.title = ' DevR - Home '
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
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
