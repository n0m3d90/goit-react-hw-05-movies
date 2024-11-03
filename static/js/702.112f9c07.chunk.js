"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[702],{804:(e,a,i)=>{i.d(a,{Gs:()=>l,LF:()=>r,_F:()=>n,dk:()=>o,q8:()=>d});var t=i(213);const s="af0d5f243de6f7a5bfa482911cb42a9e";t.A.defaults.baseURL="https://api.themoviedb.org/3/";const n=async()=>(await t.A.get(`trending/movie/day?api_key=${s}`)).data,d=async e=>(await t.A.get(`search/movie?api_key=${s}&language=en-US&query=${e}&page=1&include_adult=false`)).data,r=async e=>(await t.A.get(`movie/${e}?api_key=${s}&language=en-US`)).data,o=async e=>(await t.A.get(`movie/${e}/credits?api_key=${s}&language=en-US`)).data,l=async e=>(await t.A.get(`movie/${e}/reviews?api_key=${s}&language=en-US&page=1`)).data},702:(e,a,i)=>{i.r(a),i.d(a,{default:()=>m});var t=i(216),s=i(475),n=i(804),d=i(43),r=i(403);const o=r.Ay.h2`
  margin: 0;
`,l=r.Ay.div`
  display: flex;
  padding: 20px;
  border-bottom: solid 1px grey;
`,c=r.Ay.div`
  padding: 20px 40px;
`,g=r.Ay.ul`
  list-style: none;
  display: flex;
  padding: 0;
  gap: 16px;
`,p=r.Ay.button`
  margin-top: 16px;
  padding: 8px 16px;
  border-radius: 4px;
  border: none;
  margin-bottom: 10px;
  font-weight: 500;
  &:hover {
    background-color: #63c5da;
  }
`,h=(0,r.Ay)(s.N_)`
  display: flex;
  font-size: 14px;
  align-items: center;
  column-gap: 10px;
`,x=r.Ay.div`
  padding: 20px;
  border-bottom: solid 1px grey;
`;var v=i(538),y=i(579);const m=()=>{var e,a;const[i,r]=(0,d.useState)({}),m=(0,t.zy)(),{movieId:u}=(0,t.g)();(0,d.useEffect)((()=>{(0,n.LF)(u).then((e=>r(e)))}),[u]);const{original_title:j,overview:_,genres:w,poster_path:b,vote_average:f}=i,A=(10*f).toFixed(2);return(0,y.jsxs)("main",{children:[(0,y.jsx)(p,{type:"button",children:(0,y.jsxs)(h,{to:null!==(e=null===(a=m.state)||void 0===a?void 0:a.from)&&void 0!==e?e:"/",children:[(0,y.jsx)(v.rBg,{size:16}),"Go back"]})}),(0,y.jsxs)(l,{children:[(0,y.jsx)("img",{src:b?`https://image.tmdb.org/t/p/w300${b}`:"http://www.suryalaya.org/images/no_image.jpg",width:320,height:380,loading:"lazy",alt:"poster"}),(0,y.jsxs)(c,{children:[(0,y.jsx)(o,{children:j}),(0,y.jsxs)("h3",{children:["User score: ",A,"%"]}),(0,y.jsx)("h3",{children:"Overview"}),(0,y.jsxs)("p",{children:[_," "]}),(0,y.jsx)("h3",{children:"Genres"}),(0,y.jsx)(g,{children:w&&w.length&&w.map((e=>{let{id:a,name:i}=e;return(0,y.jsx)("li",{children:i},a)}))})]})]}),(0,y.jsxs)(x,{children:[(0,y.jsx)("h4",{children:"Additional information"}),(0,y.jsxs)("ul",{children:[(0,y.jsx)("li",{children:(0,y.jsx)(s.N_,{to:"cast",state:{...m.state},children:"Cast"})}),(0,y.jsxs)("li",{children:[" ",(0,y.jsx)(s.N_,{to:"reviews",state:{...m.state},children:"Reviews"})]})]})]}),(0,y.jsx)(t.sv,{})]})}}}]);
//# sourceMappingURL=702.112f9c07.chunk.js.map