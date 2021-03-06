import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/home.module.css"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"

export default function Home( { data }) {
  console.log(data)
  const image = getImage(data.imageFile)

  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Design</h2>
          <h3>Development & Deployment</h3>
          <p>UX designer & web developer based in Innsbruck.</p>
          <Link className={styles.btn} to={"/projects"}>My Portfolio Projects</Link>
        </div>
        {/*Alternative for static images*/}
        {/*<StaticImage*/}
        {/*  src="../images/image.jpg"*/}
        {/*  alt="Landscape image"*/}
        {/*  placeholder="blurred"*/}
        {/*/>*/}
      <GatsbyImage alt="Landscape image" image={ image }/>
      </section>
    </Layout>
  )
}
export const query = graphql`
  query Banner {
    imageFile: file(relativePath: {eq: "image.jpg"}) {
      childImageSharp {
        gatsbyImageData(
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
  }
`
