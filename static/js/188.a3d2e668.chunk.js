"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[188],{804:(e,t,a)=>{a.d(t,{Gs:()=>l,LF:()=>p,_F:()=>n,dk:()=>s,q8:()=>r});var i=a(213);const o="af0d5f243de6f7a5bfa482911cb42a9e";i.A.defaults.baseURL="https://api.themoviedb.org/3/";const n=async()=>(await i.A.get(`trending/movie/day?api_key=${o}`)).data,r=async e=>(await i.A.get(`search/movie?api_key=${o}&language=en-US&query=${e}&page=1&include_adult=false`)).data,p=async e=>(await i.A.get(`movie/${e}?api_key=${o}&language=en-US`)).data,s=async e=>(await i.A.get(`movie/${e}/credits?api_key=${o}&language=en-US`)).data,l=async e=>(await i.A.get(`movie/${e}/reviews?api_key=${o}&language=en-US&page=1`)).data},315:(e,t,a)=>{a.d(t,{fw:()=>n,hE:()=>p,tl:()=>r});var i=a(475),o=a(403);const n=(0,o.Ay)(i.N_)`
  text-decoration: none;
  padding: 2px 8px;

  &:hover {
    border-radius: 5px;
    box-shadow: 1px 2px 4px 3px rgba(0, 0, 0, 0.5);
  }
`,r=o.Ay.ul`
  padding: 20px 0 20px;
  margin: 0;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`,p=o.Ay.h2`
  margin-top: 40px;
  margin-bottom: 0;
`},188:(e,t,a)=>{a.r(t),a.d(t,{default:()=>y});var i=a(613),o=a(315),n=a(43),r=a(804),p=a(216),s=a(475),l=a(403);const x=l.Ay.div``,d=l.Ay.form`
  display: flex;
  align-items: center;
  width: 100%;
  height: 30px;
  max-width: 300px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
  margin-top: 8px;
`,c=l.Ay.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 16px;
  // border: none;
  // outline: none;
  padding: 4px;
  &::placeholder {
    font: inherit;
    font-size: 16px;
  }
`,m=l.Ay.button`
  display: flex;
  align-items: center;
  background-color: inherit;
  width: 30px;
  height: 30px;
  border: 0;
  margin-right: 4px;
  margin-left: 4px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  &:hover {
    transform: scale(1.2);
  }
`;l.Ay.button`
  padding: 8px 16px;
  margin-top: ${e=>e.theme.space[4]}px;
  border: none;
  border-radius: 15px;
  background-color: #3f51b5;
  color: white;

  text-decoration: none;
  font-family: inherit;
  font-size: 16px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  min-width: 180px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);

  cursor: pointer;
  transition: background-color 250ms linear;
  &:hover {
    background-color: #303f9f;
  }
`,l.Ay.p`
  color: ${e=>e.theme.colors.black};
  font-family: ${e=>e.theme.fonts.body};
  font-size: ${e=>e.theme.fontSizes.m};
  padding-top: 0px;
  padding-bottom: 0px;
  margin: 0px;
  margin-top: ${e=>e.theme.space[2]}px;
  margin-bottom: ${e=>e.theme.space[3]}px;
`,l.Ay.ul`
  padding-top: 50px;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 30px;
  gap: 20px;
  list-style: none;
`,l.Ay.li`
  display: block;
  flex-basis: calc((100% - 60px) / 4);
  height: auto;
  overflow: hidden;
  border-radius: 2px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;var h=a(462),g=a(579);const u=e=>{let{onSubmit:t,children:a}=e;return(0,g.jsx)(d,{onSubmit:t,children:a})},b=()=>(0,g.jsx)(c,{type:"text",name:"movieName",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"May contain only letters, apostrophe, dash and spaces. For example moon",required:!0,autoComplete:"off",autoFocus:!0,placeholder:"Search movie..."}),f=e=>{let{onSubmit:t}=e;return(0,g.jsx)(x,{children:(0,g.jsxs)(u,{onSubmit:t,children:[(0,g.jsx)(b,{}),(0,g.jsx)(m,{type:"submit","aria-label":"search button",children:(0,g.jsx)(h.YQq,{})})]})})},y=()=>{var e;const t=(0,p.zy)(),[a,l]=(0,s.ok)(),x=null!==(e=a.get("movieName"))&&void 0!==e?e:"",[d,c]=(0,n.useState)([]),[m,h]=(0,n.useState)(!1),[u,b]=(0,n.useState)(!1);(0,n.useEffect)((()=>{""!==x&&(c([]),h(!0),(0,r.q8)(x).then((e=>{if(!e.results.length)return h(!1),b(!0),console.log("There is no movies with this request. Please, try again");b(!1),c(e.results),h(!1)})))}),[x]);return(0,g.jsxs)("main",{children:[(0,g.jsx)(f,{onSubmit:e=>{e.preventDefault();const t=e.currentTarget;l({movieName:t.elements.movieName.value}),t.reset()}}),u&&(0,g.jsx)("p",{children:"There is no movies with this request. Please, try again"}),(0,g.jsxs)(o.tl,{children:[d.map((e=>(0,g.jsx)("li",{children:(0,g.jsx)(o.fw,{to:`/movies/${e.id}`,state:{from:t},children:e.original_title||e.name})},e.id))),m&&(0,g.jsx)(i.a,{})]})]})}}}]);
//# sourceMappingURL=188.a3d2e668.chunk.js.map