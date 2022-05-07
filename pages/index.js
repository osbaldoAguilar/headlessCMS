import Link from "next/link";
import PageLayout from '../components/PageLayout'
import { Block } from "../components/StyledComponents/WrappingComponents";
export default function Home({data}) {
  // console.log(data);
  const {content} = data.nodeByUri
  // console.log('content: ', content);
  return (
    <PageLayout>
      <Block>
        <article dangerouslySetInnerHTML={{__html: content}}></article>

      </Block>
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
          nodeByUri(uri: "/") {
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