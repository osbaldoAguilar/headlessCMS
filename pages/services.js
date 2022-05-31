import PageLayout from '../components/PageLayout'
import StyledServiceContainer from "../components/StyledComponents/Service.Style";

export default function Services({ data }) {
  // console.log(data);
  const { content } = data.nodeByUri
  // console.log('content: ', content);
  return (
    <PageLayout>
      <StyledServiceContainer>
        <article dangerouslySetInnerHTML={ { __html: content } }></article>
      </StyledServiceContainer>
    </PageLayout>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://arautorepair1.wpengine.com/graphql', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `
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


// Short code for the Service page

// #short code ONe

{/* <div class="servicesContainer">
  <h3>Some of the Common Services Offered at A&amp;R are</h3>
  <div class="mediaText">
    <figure class="wp-block-media-text__media"><img loading="lazy" width="300" height="223" src="http://arautorepair1.wpengine.com/wp-content/uploads/2022/04/Working-on-brakes-300x223.jpeg" alt="" class="wp-image-127 size-medium" srcset="http://arautorepair1.wpengine.com/wp-content/uploads/2022/04/Working-on-brakes-300x223.jpeg 300w, http://arautorepair1.wpengine.com/wp-content/uploads/2022/04/Working-on-brakes.jpeg 700w" sizes="(max-width: 300px) 100vw, 300px"></figure>
    <div class="wp-block-media-text__content">
      <p class="has-large-font-size">We work on Brakes</p>
      <p>  Ut esse ipsum voluptate laborum esse nostrud ullamco culpa eiusmod mollit sint laborum. Est pariatur do non et do excepteur. Commodo in proident non incididunt excepteur amet consectetur aliqua nulla dolor ut aute ullamco tempor. Enim consectetur id excepteur laborum sit amet pariatur ad in commodo sit adipisicing id laborum.</p>
    </div>
  </div>
  <div class="mediaText">
    <figure class="wp-block-media-text__media"><img loading="lazy" width="500" height="333" src="http://arautorepair1.wpengine.com/wp-content/uploads/2022/04/plantation-transmissions.webp" alt="" class="wp-image-128 size-thumbnail" srcset="http://arautorepair1.wpengine.com/wp-content/uploads/2022/04/plantation-transmissions.webp 500w, http://arautorepair1.wpengine.com/wp-content/uploads/2022/04/plantation-transmissions-300x200.webp 300w" sizes="(max-width: 500px) 100vw, 500px"></figure>
    <div class="wp-block-media-text__content">
      <p class="has-large-font-size">Transmissions</p>
      <p>Excepteur esse cupidatat esse aliqua non qui quis sint. Esse aliquip dolore mollit voluptate duis eu ad aute exercitation velit Lorem nulla officia qui. Eu dolore laborum minim dolore eiusmod non duis pariatur Lorem. Id laborum adipisicing aute mollit minim sunt minim. Ex pariatur fugiat elit aliqua ea aute exercitation magna enim eiusmod.</p>
    </div>
  </div>
  <div class="mediaText">
    <figure class="wp-block-media-text__media"><img loading="lazy" width="1024" height="685" src="http://arautorepair1.wpengine.com/wp-content/uploads/2022/04/Vista-Auto-Electric-Repair-1024x685.jpeg" alt="" class="wp-image-126 size-thumbnail" srcset="http://arautorepair1.wpengine.com/wp-content/uploads/2022/04/Vista-Auto-Electric-Repair-1024x685.jpeg 1024w, http://arautorepair1.wpengine.com/wp-content/uploads/2022/04/Vista-Auto-Electric-Repair-300x201.jpeg 300w, http://arautorepair1.wpengine.com/wp-content/uploads/2022/04/Vista-Auto-Electric-Repair-768x514.jpeg 768w, http://arautorepair1.wpengine.com/wp-content/uploads/2022/04/Vista-Auto-Electric-Repair-600x400.jpeg 600w, http://arautorepair1.wpengine.com/wp-content/uploads/2022/04/Vista-Auto-Electric-Repair.jpeg 1200w" sizes="(max-width: 1024px) 100vw, 1024px"></figure>
    <div class="wp-block-media-text__content">
      <p class="has-large-font-size">Electrical System</p>
      <p>Voluptate cupidatat pariatur veniam irure sint voluptate ut laborum laborum sunt ullamco fugiat labore. Ipsum tempor et Lorem aliquip id sunt. Ipsum pariatur veniam fugiat laboris non duis qui dolor adipisicing ut. Proident veniam id sint amet sit ea exercitation. Anim reprehenderit laboris proident commodo. Eiusmod reprehenderit est laborum aliqua ad ea.</p>
    </div>
  </div>

  <div class="videoCover"><span aria-hidden="true" class="wp-block-cover__gradient-background has-background-dim"></span><video class="wp-block-cover__video-background intrinsic-ignore" autoplay="" muted="" playsinline="" id="helpVideo" src="http://arautorepair1.wpengine.com/wp-content/uploads/2022/05/Quailty-WOrk.mp4" data-object-fit="cover"></video><p></p>
    <div class="divider"></div>
    <div class="contactDiv">
      <h2 class="has-text-align-center has-large-font-size">We take Pride in our work</h2>
      <p>Contact Us for a Full List of Services</p>
      <p>Nisi consectetur eu adipisicing consectetur irure tempor cillum aliqua non labore reprehenderit deserunt cillum. Dolore non enim magna tempor veniam. Officia incididunt laborum mollit minim veniam enim commodo amet minim ipsum cupidatat. Aliqua est aliqua consectetur Lorem deserunt ex ullamco occaecat ut qui.</p>
      <p><a href="/contact" class="contactBtn">Contact</a>
      </p></div>
  </div>
</div> */}