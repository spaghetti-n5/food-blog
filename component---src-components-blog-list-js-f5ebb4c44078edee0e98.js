(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{KnQa:function(e,t,a){e.exports={thumbPostContainer:"blogList-css-modules-module--thumbPostContainer--jAJPM",thumbPostWrap:"blogList-css-modules-module--thumbPostWrap--2ppMV",thumbPostTitle:"blogList-css-modules-module--thumbPostTitle--2c9S8",thumbPostDate:"blogList-css-modules-module--thumbPostDate--X744q",thumbCategories:"blogList-css-modules-module--thumbCategories--wSOhe",paginationWrap:"blogList-css-modules-module--paginationWrap--3Vvt8",postTitle:"blogList-css-modules-module--postTitle--18kIe"}},Rgmn:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return d}));var n=a("q1tI"),o=a.n(n),s=a("Wbzz"),r=a("vrFN"),l=a("Bl7J"),m=a("9eSz"),i=a.n(m),u=a("KnQa"),c=a.n(u);function d(e){var t=e.data,a=e.pageContext,n=a.currentPage,m=a.numPages,u=1===n,d=n===m,g=n-1==1?"/":"/"+(n-1).toString(),p="/"+(n+1).toString();return o.a.createElement(l.a,null,o.a.createElement(r.a,{title:"Posts"}),o.a.createElement("div",{className:c.a.thumbPostContainer},t.allMarkdownRemark.edges.map((function(e){var t=e.node;return o.a.createElement("div",{key:t.id,className:c.a.thumbPostWrap},o.a.createElement(s.Link,{to:"/"+t.frontmatter.slug},o.a.createElement(i.a,{fluid:t.frontmatter.coverImage.childImageSharp.fluid,style:{height:"184.617px"}}),o.a.createElement("p",{className:c.a.thumbPostDate},t.frontmatter.date),o.a.createElement("h2",{className:c.a.thumbPostTitle},t.frontmatter.title),o.a.createElement("p",null,t.excerpt),o.a.createElement("p",{className:c.a.thumbCategories},t.frontmatter.categories.join(", "))))}))),o.a.createElement("ul",{className:c.a.paginationWrap},!u&&o.a.createElement(s.Link,{to:g,rel:"prev"},"← Pagina precedente"),Array.from({length:m},(function(e,t){return o.a.createElement("li",{key:"pagination-number"+(t+1)},o.a.createElement(s.Link,{to:"/"+(0===t?"":t+1),style:{fontWeight:t+1===n?"bold":"normal"}},t+1))})),!d&&o.a.createElement(s.Link,{to:p,rel:"next"},"Pagina successiva →")))}}}]);
//# sourceMappingURL=component---src-components-blog-list-js-f5ebb4c44078edee0e98.js.map