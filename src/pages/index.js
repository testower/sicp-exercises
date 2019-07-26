import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h3>Chapter 1</h3>
    <Link to="/1-1/">1.1</Link>
  </Layout>
)

export default IndexPage
