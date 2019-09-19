// import React from "react"
import styled from "styled-components"
import { CONFIG } from "./../../constants/global"
// import { StaticQuery, graphql } from "gatsby"

export const HomeItem = styled.div`
  background: black;
  margin-bottom: 20px;
  padding: 5px;
  text-align: center;
  width: 25%;
`

export const HomeItemTitle = styled.h5`
  align-items: center;
  display: flex;
  font-family: 'Times';
  font-size: 0.9em;
  justify-content: center;
  margin: 0 0 5px;
  min-height: 50px;
  padding: 5px 10px;
  background-color: ${CONFIG.bgTitleColor};
`

// export default () => {
//   <StaticQuery
//     query={graphql`
//       query HomeItemsQuery {
//         allHomeItemsQuery {
//             edges {
//               node {
//                 title
//                 content
//               }
//             }
//           }
//         }
//       }
//     `}
//     render = {data => (
//       <>
//         <HomeItem>{getItemsHome(data)}</HomeItem>
//       </>
//     )}
//   />
// }

// function getItemsHome(data) {
//   const homeItemsArray = [];
//   data.allHomeItemsJson.edges.forEach(item => 
//     homeItemsArray.push(<HomeItemTitle>{ item.node.label }</HomeItemTitle>)
//   )
//   return homeItemsArray;
// }

// const HomeItemComponent = () => (
//   <HomeItem>
//     <HomeItemTitle>GALERÍA</HomeItemTitle>
//     <img src="" alt=""/>
//     <p>Disfruta tus licores regionales preferidos en nuestros nuestra licorería situada en Moyobamba, San Martín.</p>
//     {/* <a>Leer más</a> */}
//   </HomeItem>
// )

// export default HomeItemComponent