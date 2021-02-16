import * as React from "react"
import Layout from '../components/Layout'
import styles from '../styles/pages/Home.module.scss'
import StaffCard from '../components/cards/StaffCard'

const staff = [
  {
    name: "Steven Jang",
    avatar: "https://avatars.dicebear.com/4.5/api/male/stevenjang.svg",
    github: "https://github.com/garlicgarrison"
  },
  {
    name: "Steven Chan",
    avatar: "https://avatars.dicebear.com/4.5/api/male/steven%20chan.svg",
    github: "https://github.com/FeelsBadnana"

  },
  {
    name: "Ariel Wu",
    avatar: "https://avatars.dicebear.com/4.5/api/female/a.svg",
    github: "https://github.com/arielwu415"
  },
  {
    name: "Jonathan Lu",
    avatar: "https://avatars.dicebear.com/4.5/api/male/fd.svg",
    github: "https://github.com/Sleepyawk"
  },
  {
    name: "Sam Sun",
    avatar: "https://avatars.dicebear.com/4.5/api/male/samua.svg",
    github: "https://github.com/naonao1997"
  }
]

// markup
const IndexPage = () => {
  return (
    <>
      <Layout>
        
        <div className = {styles.staff_container}>
          <div className = {styles.grid_container}>
            {
              staff.map((user, index) => {
                return <StaffCard name = {user.name} avatar = {user.avatar} github = {user.github} key={"staff"+index}/>
              })
            }

          </div>
        </div>
        
      </Layout>
    </>
  )
}

export default IndexPage
