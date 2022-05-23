import Link from "next/link";
import PageLayout from '../components/PageLayout'
import StyledServiceContainer from "../components/StyledComponents/Service.Style";
import { BlockCentered, ServicesCard } from "../components/StyledComponents/WrappingComponents";
export default function Services({data}) {
  // console.log(data);
  const {content} = data.nodeByUri
  // console.log('content: ', content);
  return (
    <PageLayout>
    {/* <BlockCentered> */}
    
    {/* <ServicesCard> */}
    <StyledServiceContainer>
      <article dangerouslySetInnerHTML={{__html: content}}></article>

    </StyledServiceContainer>

    {/* </ServicesCard> */}
{/* 
    </BlockCentered> */}

    </PageLayout>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://arautorepair1.wpengine.com/graphql', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify({
      query:`
        query ServicePage {
          nodeByUri(uri: "/services") {
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