import {useRef, useEffect} from 'react'
import PageLayout from '../components/PageLayout'
import { Block } from '../components/StyledComponents/WrappingComponents';

export default function Contact({data}) {
  const {content} = data.nodeByUri
  const {posts} = data
  console.log('posts: ', posts);
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


  return (
    <PageLayout>
        <Block>
          
            <article dangerouslySetInnerHTML={{__html: content}}></article>
          
        </Block>

        {/* <StyleTestimonalContainer>
          { posts.edges.map( (post, index) => {
            console.log('index: ', index)
            return <div id='testCard' key={post.node.id}>
              <h4 id='testHeader'>
                {post.node.title}
              </h4>
            <Image className='cardpurple'  id='testImage' src='/reviewGuy.svg' layout='fill' alt='placeholder'/> 
              {removeTags(post.node.content)}
            </div> 
          })}
        </StyleTestimonalContainer>
        </BlockCentered> 
      </Block> */}
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
          nodeByUri(uri: "/contact") {
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