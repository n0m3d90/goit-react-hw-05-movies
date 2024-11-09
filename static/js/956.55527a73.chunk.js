"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[956],{804:(a,e,t)=>{t.d(e,{Gs:()=>c,LF:()=>g,_F:()=>s,dk:()=>d,q8:()=>r});var i=t(213);const n="af0d5f243de6f7a5bfa482911cb42a9e";i.A.defaults.baseURL="https://api.themoviedb.org/3/";const s=async()=>(await i.A.get(`trending/movie/day?api_key=${n}`)).data,r=async a=>(await i.A.get(`search/movie?api_key=${n}&language=en-US&query=${a}&page=1&include_adult=false`)).data,g=async a=>(await i.A.get(`movie/${a}?api_key=${n}&language=en-US`)).data,d=async a=>(await i.A.get(`movie/${a}/credits?api_key=${n}&language=en-US`)).data,c=async a=>(await i.A.get(`movie/${a}/reviews?api_key=${n}&language=en-US&page=1`)).data},956:(a,e,t)=>{t.r(e),t.d(e,{default:()=>l});var i=t(216),n=t(43),s=t(804),r=t(403);const g=r.Ay.ul`
  list-style: none;
`,d=r.Ay.li`
  margin: 10px 0 16px;
  padding: 2px 8px;
  //box-shadow: 1px 2px 4px 3px rgba(0, 0, 0, 0.5);
`,c=r.Ay.h3`
  margin: 8px 0;
`,p=r.Ay.p`
  margin: 0;
`;var o=t(579);const l=()=>{const[a,e]=(0,n.useState)([]),{movieId:t}=(0,i.g)();return(0,n.useEffect)((()=>{(0,s.dk)(t).then((a=>e(a.cast)))}),[t]),(0,o.jsx)(g,{children:a.length>0?a.map((a=>{let{id:e,name:t,profile_path:i,character:n}=a;return(0,o.jsxs)(d,{children:[(0,o.jsx)("img",{src:i?`https://image.tmdb.org/t/p/w200${i}`:"http://www.suryalaya.org/images/no_image.jpg",alt:"actor",loading:"lazy",width:120,height:180}),(0,o.jsx)(c,{children:t}),(0,o.jsxs)(p,{children:[" Character: ",n]})]},e)})):"Sorry, there isn't any info :("})}}}]);
//# sourceMappingURL=956.55527a73.chunk.js.map