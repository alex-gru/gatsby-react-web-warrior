import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/home.module.css"
import { Link } from "gatsby"

export default function Home( { data }) {
  console.log(data)
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>UX designer & web developer based in Innsbruck.</p>
          <Link className={styles.btn} to={"/projects"}>My Portfolio Projects</Link>
        </div>
        <img src={"/image.jpg"} style={{ maxWidth: '100%' }}/>
      </section>
    </Layout>
  )
}
