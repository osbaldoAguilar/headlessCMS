import { useRef, useEffect } from 'react'
import styled from 'styled-components'
import PageLayout from '../components/PageLayout'

const ContentBlock = styled.div`
  margin: 0 auto;
  padding: 20px 0px;
  .phoneLink{
    display: block;
    // text-align: center;
  }
  h4 {
    color: whitesmoke;
    font-size: 1.5rem;
    font-weiht: bold;
    text-align: center;
    margin-bottom: 20px;
  }
  #callLink{
    text-align: center;
    background: whitesmoke;
    font-size: 1.3rem;
    font-weight: 700;
    color: #3B3B3B;
    padding: 10px;
    border-radius: 5px;
  }
  p{
    display: flex;
    flex-direction: row;
    justify-content: end;
    margin-bottom: 20px;
  }
  #mapLink {
    position: absolute;
    background: whitesmoke;
    text-align: center;
    width: 100%;
    hieght: auto;
    padding: 15px;
    font-size: 1.4rem;
    color: #3B3B3B;
    font-weight: 600;
  }
`



export default function Contact({ data }) {
  const { content } = data.nodeByUri
  const { posts } = data
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
      <ContentBlock>

        <article dangerouslySetInnerHTML={ { __html: content } }></article>

      </ContentBlock>
    </PageLayout>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://arautorepair1.wpengine.com/graphql', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `
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

// ##Short Code
// # first one
{/* <div class="phoneLink">
  <h4 class="phoneHeading">Require more information, want to schedule an appoint?</h4>
  <button><a href="tel:+1-910-856-1156">Call 1-910-856-1156</a></button>
</div>

// # 2nd one

<a id="mapLink" target="blank" href="https://www.google.com/maps/dir//6967+NC-904+Fairmont,+NC+28340/@34.3996998,-79.1245778,11z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89aac738903a9f97:0x5a991c9b46d2bca0!2m2!1d-79.1245778!2d34.3996998" rel="noopener">
  <p id="mapP">CLICK FOR DIRECTIONS</p>
</a> */}
