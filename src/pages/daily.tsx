import React from 'react';
import Layout from '../components/Layout';
import { graphql, Link, useStaticQuery } from "gatsby"
import styles from '../styles/pages/Daily.module.scss'


export default function DailyPage()
{

    const { allMarkdownRemark } = useStaticQuery(
        graphql`
          query {
            allMarkdownRemark (filter: {frontmatter: {type: {eq: "daily"}}}) {
              edges {
                node {
                  frontmatter {
                    path
                    date
                    day      
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
                <h1>Our Daily Meetings: </h1>
                <ul>

                {
                    allMarkdownRemark.edges && allMarkdownRemark.edges.map((item, i)=>{
                        let meeting = item.node.frontmatter
                        return (
                            <li key={"link"+i}>
                                <Link to={meeting.path}>
                                    Day {meeting.day}:
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