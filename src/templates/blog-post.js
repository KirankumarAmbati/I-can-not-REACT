import React from "react"
import { Link, graphql } from "gatsby"
import { DiscussionEmbed } from "disqus-react"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext
    const classes = {
      paragraph: {
        ...scale(-1 / 5),
        display: `block`,
        marginBottom: rhythm(1),
        marginTop: rhythm(-1),
      },
      list: {
        display: `flex`,
        flexWrap: `wrap`,
        justifyContent: `space-between`,
        listStyle: `none`,
        padding: 0,
      },
      horizontalRule: {
        marginBottom: rhythm(1),
      },
    }
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <h1>{post.frontmatter.title}</h1>
        <p className={classes.paragraph}>{post.frontmatter.date}</p>
        <Bio userName={post.frontmatter.author} />
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr className={classes.horizontalRule} />

        <ul className={classes.list}>
          {previous && (
            <li>
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            </li>)
          }
          
            {next && (
             <li>  
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
             </li>
            )}
       
        </ul>
        <DiscussionEmbed
          shortname="kirankumarambati"
          config={{ identifier: post.id, title: post.frontmatter.title }}
        />
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        author
      }
    }
  }
`
