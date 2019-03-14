import React from "react"
import Layout from "../../components/layout"
import CardList from "../../components/card-list.js"
const About = props => {
  const projects = props.data.allMarkdownRemark.edges
  console.log("projects", projects)
  return (
    <Layout>
      <section className="hero is-warning">
        <div className="hero-body" style={{padding: "1em"}}>
          <div className="has-text-centered">
            <h1 className="title">Projects</h1>
          </div>
        </div>
      </section>
      <CardList projects={projects} />
    </Layout>
  )
}

export const query = graphql`
  query projectsQuery {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/project/" } }) {
      edges {
        node {
          excerpt(pruneLength: 450)
          frontmatter {
            title
            link
            image
            tools
          }
        }
      }
    }
  }
`

export default About
