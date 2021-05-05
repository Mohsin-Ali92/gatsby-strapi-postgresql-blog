import React from "react"
import { Link, graphql } from "gatsby"
// import Img from 'gatsby-image'
import Layout from "../components/layout"

const ArticleTemplate = ({ data }) => (
  <Layout>
    <h1>{data.strapiArticles.title}</h1>
    <p>
      by{" "}
      <Link to={`/authors/User_${data.strapiArticles.author.id}`}>
        {data.strapiArticles.author.username}
      </Link>
    </p>
    {/* <Img fixed={data.strapiArticle.image.childImageSharp.fixed}/> */}
    <p>{data.strapiArticles.content}</p>
  </Layout>
)

export default ArticleTemplate

export const query = graphql`
  query ArticleTemplate($id: String!) {
    strapiArticles(id: { eq: $id }) {
      title
      content

      author {
        id
        username
      }
    }
  }
`
