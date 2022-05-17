import Router from 'next/router';
import PageLayout from '../components/PageLayout'
import { Block, BlockCentered } from "../components/StyledComponents/WrappingComponents";
import styles from '../styles/Home.module.css'
export default function Home({data}) {
  console.log(data);
  const {content} = data.nodeByUri
  const {posts} = data
  console.log('post: ', posts.edges);
  return (
    <PageLayout>
      <Block>
        <article dangerouslySetInnerHTML={{__html: content}}></article>
        <BlockCentered>
        <h4 className='flex items-center text-white text-2xl '>What people are saying about us</h4>
        <div className='grid grid-cols-2 text-white p-10 gap-2'>
          { posts.edges.map( post => {
            console.log(post)
            return <div onClick={() => {
              Router.push({
                pathname:`/posts/${post.node.slug}`
              })
            }} key={post.node.id}>
              <h4>{post.node.title}</h4>
              {/* <article dangerouslySetInnerHTML={{__html: post.node.content}}></article>*/}
            </div> 
          })}
        </div>
        </BlockCentered>
      </Block>
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
          },
          posts {
            edges {
              node {
                id
                title
                date
                content
                slug
              }
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