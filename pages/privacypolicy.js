import Link from "next/link";
import PageLayout from '../components/PageLayout'
import { Block, BlockCentered, ExtendedCard } from "../components/StyledComponents/WrappingComponents";
export default function PrivacyPolicy({data}) {
  // console.log(data);
  const {content} = data.nodeByUri
  // console.log('content: ', content);
  return (
    <PageLayout>
    <div className="">
    <BlockCentered>
      <ExtendedCard >
    
        <article dangerouslySetInnerHTML={{__html: content}}></article>
      </ExtendedCard>

    </BlockCentered>

    </div>
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
          nodeByUri(uri: "/privacypolicy") {
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