import React from "react"
import Layout from "../../components/Layout"
import * as styles from "../../styles/projects.module.css"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

function Projects({ data }) {
  console.log(data)
  const projects = data.projects.nodes
  const contact = data.contact.siteMetadata.contact

  return (
    <Layout>
      <div className={styles.portfolio}>
        <h2>Portfolio</h2>
        <h3>Projects & Websites I've created</h3>
        <div className={styles.projects}>
          {projects.map(project => {
            const image = getImage(project.frontmatter.thumb)
            return (
              <Link to={"/projects/" + project.frontmatter.slug} key={project.id}>
                <div>
                  <GatsbyImage alt="Landscape image" image={ image } />
                  <h3>{project.frontmatter.title}</h3>
                  <p>{project.frontmatter.stack}</p>
                </div>
              </Link>
            )
          })}
        </div>
        <p>
          Like what you see? Email me at{" "}
          <a href={"mailto:" + contact}>{contact}</a> for a quote.
        </p>
      </div>
    </Layout>
  )
}

export default Projects
export const query = graphql`
  query ProjectsPage {
    projects: allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        frontmatter {
          slug
          stack
          title
          date
          thumb {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
            }
          }
        }
        id
      }
    }
    contact: site {
      siteMetadata {
        contact
      }
    }
  }
`
