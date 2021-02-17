import React from 'react';
import Layout from '../Layout'
import { graphql } from 'gatsby'
import styles from '../../styles/templates/template.module.scss'

export default function Template({ data }) {
    const { markdownRemark } = data;
    const { frontmatter, html } = markdownRemark;
    return (
        <Layout>
            <div className = {styles.blog_container}>
                {
                    frontmatter.type === 'daily' &&
                    <h1>Day {frontmatter.day}</h1>
                }
                {
                    frontmatter.type === 'sprint' &&
                    <h1>Week {frontmatter.week}</h1>
                }
                <h2>{frontmatter.date}</h2>
                <div dangerouslySetInnerHTML={{ __html: html }} />
            </div>
        </Layout>
    )
}

export const pageQuery = graphql`
query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        type
        week
        day
      }
    }
  }
`