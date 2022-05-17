import Link from "next/link";
import PageLayout from '../components/PageLayout'
import { Block, BlockCentered, AboutCard } from "../components/StyledComponents/WrappingComponents";
import styles from '../styles/About.module.css'
export default function Home({data}) {
  // console.log(data);
  const {content} = data.nodeByUri
  // console.log('content: ', content);
  return (
    <PageLayout>
    <div className={styles.aboutContainer}>
      <AboutCard>
            <div className="flex justify-center h-screen">
              <article dangerouslySetInnerHTML={{__html: content}}></article>

            </div>

          </AboutCard>
    </div>
      {/* <Block> */}
        {/* <BlockCentered> */}
        {/* <div class="container">
<h4>Business Hours
</h4>
<table>
<tbody><tr class="active-row"><th>Week Day</th><td>Hours</td></tr>
<tr><th>Sunday</th><td>Closed</td></tr>
<tr><th>Monday</th><td>8:00am - 6:30pm</td></tr>
<tr><th>Tuesday</th><td>8:00am - 6:30pm</td></tr>
<tr><th>Wednesday</th><td>8:00am - 6:30pm</td></tr>
<tr><th>Thursday</th><td>8:00am - 6:30pm</td></tr>
<tr><th>Friday</th><td>8:00am - 6:30pm</td></tr>
<tr><th>Saturday</th><td>8:00am - 6:30pm</td></tr>
</tbody></table>
<div class="grid grid-cols-2">
<div>
<h4 class="heading">Contact</h4> */}
          

        {/* </BlockCentered> */}

      {/* </Block> */}
      {/* {posts.nodes.map(post => {
        return( 
          <PageLayout key={post.slug}>
            <li>
              <Link href={`posts/${post.slug}`}>{post.title}</Link>
            </li>
          </PageLayout>
        )
      })} */}

    </PageLayout>
  )
}

export async function getStaticProps() {
  const res = await fetch('http://ar-auto-repair-services.local/graphql', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify({
      query:`
        query HomePage {
          nodeByUri(uri: "/about") {
            __typename
            ... on ContentType {
              id
              name
            }
            ... on Page {
              id
              title
              content
              slug
            }
          }
        }
      `
    })
  })
  
  const json = await res.json()
  
  return {
    props: {
      data: json.data
    }
  }
}
// query HomePageQuery {
//   posts {
//     nodes {
//       content
//       id
//       slug
//       title
//     }
//   },
//   pages {
//     nodes {
//       content
//       id
//       slug
//       title
//     }
//   }
// }