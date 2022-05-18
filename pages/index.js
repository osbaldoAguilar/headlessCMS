import Router from 'next/router';
import PageLayout from '../components/PageLayout'
import { Block, BlockCentered } from "../components/StyledComponents/WrappingComponents";
import styles from '../styles/Home.module.css'
export default function Home({data}) {
  const {content} = data.nodeByUri
  const {posts} = data
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
            </div> 
          })}
        </div>
        </BlockCentered>
      </Block>
    </PageLayout>
  )
}

export async function getStaticProps() {
  const res = await fetch(process.env.NEXT_PUBLIC_WORDPRESS_API_URL, {
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