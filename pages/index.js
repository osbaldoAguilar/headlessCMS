import {useRef, useEffect} from 'react'
import PageLayout from '../components/PageLayout'
import { Block, HomeWPBK } from "../components/StyledComponents/WrappingComponents";
import StyleTestimonalContainer from '../components/StyledComponents/Testimonials';

export default function Home({data}) {
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

  function removeTags(str) {
    if ((str===null) || (str===''))
        return false;
    else
        str = str.toString();
          
    // Regular expression to identify HTML tags in 
    // the input string. Replacing the identified 
    // HTML tag with a null string.
    return str.replace( /(<([^>]+)>)/ig, '');
}
  return (
    <PageLayout>
      <Block>
        <HomeWPBK>
          
            <article dangerouslySetInnerHTML={{__html: content}}></article>
          
        </HomeWPBK>
        {/* <BlockCentered> */}
        <StyleTestimonalContainer>
          { posts.edges.map( (post, index) => {
            console.log('index: ', index)
            return <div id='testCard' key={post.node.id}>
              <h4 id='testHeader'>
                {post.node.title}
              </h4>
            {/* <Image className='cardpurple'  id='testImage' src='/reviewGuy.svg' layout='fill' alt='placeholder'/> */}
              {removeTags(post.node.content)}
            </div> 
          })}
        </StyleTestimonalContainer>
        {/* </BlockCentered> */}
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


// # in case the blocks get erased again here they are for the home page

// #Short Code ONe 

// <!-- wp:cover {"url":"https://arautorepair1.wpengine.com/wp-content/uploads/2022/05/General.mp4","id":377,"dimRatio":50,"backgroundType":"video","isDark":false} -->
// <div class="wp-block-cover is-light"><span aria-hidden="true" class="wp-block-cover__gradient-background has-background-dim"></span><video class="wp-block-cover__video-background intrinsic-ignore" autoplay muted  playsinline src="https://arautorepair1.wpengine.com/wp-content/uploads/2022/05/General.mp4" data-object-fit="cover"></video><div class="wp-block-cover__inner-container"><!-- wp:paragraph {"align":"center","placeholder":"Write title…","fontSize":"large"} -->
// <p class="has-text-align-center has-large-font-size"></p>
// <!-- /wp:paragraph --></div></div>
// <!-- /wp:cover -->

// #short code 2 

{/* <h3 class="heading">We are...</h3>
<p class="paragraph">Committed to quality service and ... Lorem occaecat sit deserunt nulla velit. Exercitation consequat irure qui commodo Lorem ipsum qui aute in reprehenderit do do aliqua. Voluptate est eu velit mollit sunt minim irure reprehenderit eu nisi fugiat esse consequat eu. Et id voluptate exercitation minim nisi in. Ullamco laborum veniam consectetur mollit occaecat consequat quis commodo sunt et. Sit ut id incididunt ad aute.<br>Laborum officia qui commodo occaecat excepteur et anim elit quis. Amet voluptate ut aliqua aliquip ex in velit dolor anim eu. Non est eiusmod elit Lorem anim ipsum sint Lorem laboris excepteur culpa nisi id voluptate. Ea ea enim do do. Labore dolore ut dolor eiusmod est cupidatat ex cillum deserunt duis labore reprehenderit. Occaecat cillum occaecat ullamco sint voluptate. Veniam qui do aliquip deserunt ex elit quis minim sunt consequat deserunt. Deserunt occaecat fugiat labore duis. Consectetur esse ullamco laboris sunt consequat consequat et voluptate nisi ea aliquip aute exercitation. Aliqua duis adipisicing proident aliquip sit fugiat consectetur ex fugiat deserunt ea Lorem. Dolor labore amet et aute.</p>
<h3 class="heading">Recent Reviews: </h3> */}
