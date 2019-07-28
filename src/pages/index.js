import React, {Fragment} from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    {data.allMarkdownRemark.distinct.map(chapter =>
      <Fragment>
        <h2>Chapter {chapter}</h2>
        <ul>
          {data.allMarkdownRemark.edges.filter(edge => `${edge.node.frontmatter.chapter}` === chapter).map(edge =>
            <li><Link to={edge.node.frontmatter.path}>{edge.node.frontmatter.title}</Link></li>
          )}
        </ul>
      </Fragment>
    )}
  </Layout>
)

export default IndexPage

export const query = graphql`
query allNotesQuery {
  allMarkdownRemark(sort: {fields: frontmatter___path, order: ASC}) {
    edges {
      node {
        frontmatter {
          chapter
          path
          title
        }
      }
    }
    distinct(field: frontmatter___chapter)
  }
}
`
