import Link from "next/link";
import PageLayout from '../components/PageLayout'
import { Block, BlockCentered, AboutCard } from "../components/StyledComponents/WrappingComponents";
import styles from '../styles/About.module.css'
export default function Home({ data }) {
  // console.log(data);
  const { content } = data.nodeByUri
  // console.log('content: ', content);
  return (
    <PageLayout>
      <div className={styles.aboutContainer}>
        <AboutCard>
          <div className="flex justify-center h-screen">
            <article dangerouslySetInnerHTML={{ __html: content }}></article>
          </div>
        </AboutCard>
      </div>
    </PageLayout>
  )
}

export async function getStaticProps() {
  const res = await fetch(process.env.NEXT_PUBLIC_WORDPRESS_API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `
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