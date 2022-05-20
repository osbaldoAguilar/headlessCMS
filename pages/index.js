import {useRef, useEffect} from 'react'
import Router from 'next/router';
import PageLayout from '../components/PageLayout'
import { Block, BlockCentered, HomeWPBK } from "../components/StyledComponents/WrappingComponents";
import {HeadingLink} from "../components/StyledComponents/HeadingLink";
import styles from '../styles/Home.module.css'
export default function Home({data}) {
  const {content} = data.nodeByUri
  const {posts} = data
  let MapLinkRef = useRef()
  let firstH4 = useRef()
  useEffect(() => {

    MapLinkRef = document.getElementById('mapLink')
    console.log('MapLink: ', MapLinkRef)
    firstH4 = document.getElementsByTagName('h4')[0]
    console.log('firstH4: ', firstH4);
  
    return () => {

    }
  }, [])
  const appendElement = () => {

  }
  return (
    <PageLayout>
      <Block>
        <HomeWPBK>
          
            <article dangerouslySetInnerHTML={{__html: content}}></article>
          
        </HomeWPBK>
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
              <h4 className="posts">
                {post.node.title}
              </h4>
            </div> 
          })}
        </div>
        </BlockCentered>
      </Block>
    </PageLayout>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://arautorepair1.wpengine.com/graphql', {
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