import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h3>Chapter 1</h3>
    <ul>
      <li><Link to="/1-1/">1.1</Link></li>
      <li><Link to="/1-2/">1.2</Link></li>
    </ul>
  </Layout>
)

export default IndexPage
