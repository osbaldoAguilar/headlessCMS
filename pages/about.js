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
      <div className={ styles.aboutContainer }>
        <AboutCard>
          {/* <div className="flex justify-center h-screen"> */ }
          <article dangerouslySetInnerHTML={ { __html: content } }></article>
          {/* </div> */ }
        </AboutCard>
      </div>
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


// # in case the blocks get erased again here they are for the about page

// #Short Code ONe 

// <!-- wp:image {"id":411,"sizeSlug":"full","linkDestination":"none","className":"hours"} -->
// <figure class="block "><img src="https://arautorepair1.wpengine.com/wp-content/uploads/2022/05/welcome-4.svg" alt="" class="inline"/></figure>
// <!-- /wp:image -->


// Short Code Two 

// <div>
//   <div>
//     <div class="midSect">
//       <h3 class="heading">Located in ...</h3>
//       <p class="paragraph">6967 NC Hwy 904Fairmont,</p>
//       <p class="paragraph">North Carolina 28340United States</p>
//     </div>
//   </div>
//   <h3>More About Us</h3>
//   <p>  Tempor ullamco occaecat commodo et sunt laborum id velit. Aliquip ad ipsum exercitation do dolore consequat ea voluptate aliqua nostrud ex anim adipisicing dolore. Quis cillum ex officia ad id ex minim et elit commodo pariatur. Commodo nisi et consectetur eiusmod ad aliquip. Fugiat consectetur dolor do dolor tempor mollit nostrud laborum.</p><p>Ipsum ut sit eiusmod sunt amet mollit laboris non velit esse. Consectetur cillum laboris dolor cillum dolor dolor qui commodo consectetur ex duis aliquip adipisicing ex. Sunt incididunt ut deserunt sit nostrud excepteur fugiat nulla commodo ipsum adipisicing commodo pariatur proident. Dolore ea laboris culpa magna sint dolore amet. Pariatur duis commodo sit adipisicing voluptate cillum nostrud nostrud in.</p>
// </div>
