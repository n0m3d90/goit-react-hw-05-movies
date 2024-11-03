"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[440],{804:(a,e,t)=>{t.d(e,{Gs:()=>p,LF:()=>o,_F:()=>n,dk:()=>r,q8:()=>d});var i=t(213);const s="af0d5f243de6f7a5bfa482911cb42a9e";i.A.defaults.baseURL="https://api.themoviedb.org/3/";const n=async()=>(await i.A.get(`trending/movie/day?api_key=${s}`)).data,d=async a=>(await i.A.get(`search/movie?api_key=${s}&language=en-US&query=${a}&page=1&include_adult=false`)).data,o=async a=>(await i.A.get(`movie/${a}?api_key=${s}&language=en-US`)).data,r=async a=>(await i.A.get(`movie/${a}/credits?api_key=${s}&language=en-US`)).data,p=async a=>(await i.A.get(`movie/${a}/reviews?api_key=${s}&language=en-US&page=1`)).data},440:(a,e,t)=>{t.r(e),t.d(e,{default:()=>p});var i=t(43),s=t(216),n=t(315),d=t(804),o=t(613),r=t(579);const p=()=>{const[a,e]=(0,i.useState)([]),t=(0,s.zy)(),[p,c]=(0,i.useState)(!1);return(0,i.useEffect)((()=>{c(!0),(0,d._F)().then((a=>{e(a.results),c(!1)}))}),[]),(0,r.jsxs)("main",{children:[(0,r.jsx)(n.hE,{children:"Top Movies for today"}),(0,r.jsxs)(n.tl,{children:[a.map((a=>(0,r.jsx)("li",{children:(0,r.jsx)(n.fw,{to:`/movies/${a.id}`,state:{from:t},children:a.original_title||a.name})},a.id))),p&&(0,r.jsx)(o.a,{})]})]})}},315:(a,e,t)=>{t.d(e,{fw:()=>n,hE:()=>o,tl:()=>d});var i=t(475),s=t(403);const n=(0,s.Ay)(i.N_)`
  text-decoration: none;
  padding: 2px 8px;

  &:hover {
    border-radius: 5px;
    box-shadow: 1px 2px 4px 3px rgba(0, 0, 0, 0.5);
  }
`,d=s.Ay.ul`
  padding: 20px 0 20px;
  margin: 0;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`,o=s.Ay.h2`
  margin-top: 40px;
  margin-bottom: 0;
`}}]);
//# sourceMappingURL=440.1e394aa2.chunk.js.map