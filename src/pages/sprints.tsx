import React from 'react';
import Layout from '../components/Layout';
import { graphql, Link, useStaticQuery } from "gatsby"
import styles from '../styles/pages/Daily.module.scss'


export default function SprintPage()
{

    const { allMarkdownRemark } = useStaticQuery(
        graphql`
          query {
            allMarkdownRemark (filter: {frontmatter: {type: {eq: "sprint"}}}, sort: {fields : [frontmatter___date], order: DESC}) {
              edges {
                node {
                  frontmatter {
                    path
                    date
                    week      
                  }
                }
              }
            }
          }
        `
      )
    return (
        <Layout>
            <div className = {styles.list_container}>
                <h1>Our Sprint Summaries: </h1>
                <ul>

                {
                    allMarkdownRemark.edges && allMarkdownRemark.edges.map((item, i)=>{
                        let meeting = item.node.frontmatter
                        return (
                            <li key={"link"+i}>
                                <Link to={meeting.path}>
                                    Week {meeting.week}:
                                    <span className = {styles.meeting_date}>{meeting.date}</span>
                                </Link>
                            </li>
                        )
                    })
                }
                </ul>
            </div>
        </Layout>
    )
}