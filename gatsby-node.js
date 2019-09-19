/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

// const path = require('path');
// const fs = require('fs');

// exports.createPages = ({ actions }) => {
//   const { createPage } = actions;
  
//   const pageData = JSON.parse(fs.readFileSync('./src/data/site.json', { encoding: 'utf-8' }));
//   const postTemplate = path.resolve('src/pages/index.js');
  
//   // console.log(siteJson)
//   // console.log('pageData --> ', typeof pageData)
//   console.log(postTemplate)

//   pageData.site.forEach(page => {
//     // console.log('page -->', page.slug)
//     createPage({
//       path: page.slug,
//       component: postTemplate,
//       context: {
//         ...page
//       },
//     });
//   });
// };
