import React from 'react'
import BlogData from './BlogData'
import Title from './Title'

const Blog = () => {
  const SingleBlog = (prop) => {
    return (
      <>
        <div data-aos={prop.animate} id="SingleBlog">
          <img src={prop.src} alt="Error" />
          <div id="BlogDesc">
            <h3> {prop.time} </h3>
            <h2> {prop.title} </h2>
            <p> {prop.desc} </p>
            <a href={prop.link} target="blank">
              {prop.linkText}
            </a>
          </div>
        </div>
      </>
    )
  }
  return (
    <>
      <section id="Blog">
        <Title title="Blog" desc="Some of my posts." />
        <div id="BlogContentWrapper">
          {BlogData.map((data, index) => {
            return (
              <SingleBlog
                key={index}
                title={data.title}
                desc={data.desc}
                time={data.time}
                src={data.src}
                link={data.link}
                linkText={data.linkText}
                animate={data.animate}
              />
            )
          })}
        </div>
      </section>
    </>
  )
}
export default Blog
