_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[9],{"/EDR":function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t("QeBL")}])},"4IfK":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.useIsomorphicLayoutEffect=void 0;const o=t("q1tI");n.useIsomorphicLayoutEffect="undefined"!==typeof window?o.useLayoutEffect:o.useEffect},"5++N":function(e,n,t){"use strict";t.d(n,"c",(function(){return o})),t.d(n,"b",(function(){return r})),t.d(n,"a",(function(){return i}));var o=[{label:"HTML",value:80},{label:"CSS",value:70},{label:"Javascript",value:80},{label:"ReactJS",value:70},{label:"Node",value:50},{label:"React Native",value:20}],r=[{title:"Template de CV + portif\xf3lio usando Gatsby",image:"/projects/gatsby-starter-cv.png",url:"https://www.gatsbyjs.com/starters/santosfrancisco/gatsby-starter-cv",description:"Template open source criado como um starter para ser utilizado com o Gatsby. Com ele voc\xea consegue criar um site pessoal com informa\xe7\xf5es profissionais e uma se\xe7\xe3o para expor seu portif\xf3lio. "},{title:"Grid responsivo para aplica\xe7\xf5es web React",image:"/projects/awesome-grid.png",url:"https://github.com/santosfrancisco/react-awesome-styled-grid",description:'Pacote open source criado para facilitar a cria\xe7\xe3o de sites responsivos utilizando grid baseado em flexbox. Segue a id\xe9ia de "mobile first", e \xe9 baseado no sistema "8-Point Grid" do Google Material.'},{title:"Widget que exibe a m\xfasica que est\xe1 tocando no seu spotify",image:"/projects/spotify-widget.png",url:"https://github.com/santosfrancisco/react-awesome-styled-grid",description:"Este projeto \xe9 um widget que permite que voc\xea exiba um pequeno cart\xe3o com a m\xfasica atual que est\xe1 tocando no seu spotify. Foi desenvolvido para ser utilizado junto ao OBS em streams, assim mostrando aos espectadores o nome e artista das m\xfasicas que est\xe3o tocando."},{title:"Guia com mapas do jogo Super Metroid",image:"/projects/metroid-guide.png",url:"https://metroidguide.netlify.app/",description:"Este projeto foi feito apenas por divers\xe3o e basicamente para uso pessoal, onde temos os mapas de alguns dos jogos da franquia Super Metroid com a fun\xe7\xe3o de marcar direto no mapa os itens coletados durante o jogo."}],i=[{dateInfo:{month:"NOV",year:"2020",duration:"nov/2020 at\xe9 hoje"},jobInfo:{role:"Frontend",company:"RD (Raia Drogasil)",description:"Fa\xe7o parte da equipe de Sa\xfade, respons\xe1vel pelo desenvolvimento e manuten\xe7\xe3o da plataforma web de sa\xfade."}},{dateInfo:{month:"OUT",year:"2020",duration:"out/2020 a nov/2020"},jobInfo:{role:"Frontend",company:"Riachuelo",description:"Integrei o time respons\xe1vel pela parte de checkout do e-commerce"}},{dateInfo:{month:"SET",year:"2019",duration:"set/2019 a set/2020"},jobInfo:{role:"Frontend",company:"Gympass",description:"Fiz parte da equipe Corporativa, respons\xe1vel pelo desenvolvimento e manuten\xe7\xe3o da plataforma de gest\xe3o de funcion\xe1rios, dando cada vez mais autonomia \xe0s empresas parceiras."}},{dateInfo:{month:"ABR",year:"2018",duration:"abr/2018 a set/2019"},jobInfo:{role:"Frontend",company:"Lendico",description:"Fiz parte da equipe de Frontend respons\xe1vel pelo desenvolvimento e manuten\xe7\xe3o da plataforma de empr\xe9stimo online."}},{dateInfo:{month:"DEZ",year:"2016",duration:"dez/2016 a abr/2018"},jobInfo:{role:"Fullstack",company:"Anapro",description:"Desenvolvimento e manuten\xe7\xe3o, corretiva e preventiva, de aplica\xe7\xf5es web para o mercado imobili\xe1rio."}}]},OTAv:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.useScrollPosition=void 0;const o=t("q1tI"),r=t("4IfK"),i="undefined"!==typeof window,a={x:0,y:0},c=e=>null===e||void 0===e?void 0:e.getBoundingClientRect(),u=({element:e,useWindow:n,boundingElement:t})=>{if(!i)return a;if(n)return{x:window.scrollX,y:window.scrollY};const o=c((null===e||void 0===e?void 0:e.current)||document.body),r=c(null===t||void 0===t?void 0:t.current);return o?r?{x:(r.x||0)-(o.x||0),y:(r.y||0)-(o.y||0)}:{x:o.left,y:o.top}:a};n.useScrollPosition=(e,n,t,a,c,s)=>{const l=o.useRef(u({useWindow:a,boundingElement:s}));let d=null;const f=()=>{const n=u({element:t,useWindow:a,boundingElement:s});e({prevPos:l.current,currPos:n}),l.current=n,d=null};r.useIsomorphicLayoutEffect((()=>{var e;if(!i)return;const n=()=>{c?null===d&&(d=setTimeout(f,c)):f()};return s?null===(e=s.current)||void 0===e||e.addEventListener("scroll",n,{passive:!0}):window.addEventListener("scroll",n,{passive:!0}),()=>{var e;s?null===(e=s.current)||void 0===e||e.removeEventListener("scroll",n):window.removeEventListener("scroll",n),d&&clearTimeout(d)}}),n)},n.useScrollPosition.defaultProps={deps:[],element:!1,useWindow:!1,wait:null,boundingElement:!1}},QeBL:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return ve}));var o=t("nKUr"),r=t("VXBa"),i=t("xvhg"),a=t("lTFH"),c=t("q1tI"),u=t("boz2"),s=t("jT3O"),l=t("vOnD");function d(){var e=Object(s.a)(["\n    max-width: 600px;\n  "]);return d=function(){return e},e}function f(){var e=Object(s.a)(["\n    max-width: 400px;\n  "]);return f=function(){return e},e}function p(){var e=Object(s.a)(["\n  max-width: 250px;\n\n  ","\n\n  ","\n"]);return p=function(){return e},e}function b(){var e=Object(s.a)(["\n  position: absolute;\n  right: 50%;\n  bottom: 40px;\n\n  animation: 1s "," infinite ease-in-out;\n"]);return b=function(){return e},e}function m(){var e=Object(s.a)(["\n  50% {transform: translateY(100%);}\n"]);return m=function(){return e},e}function j(){var e=Object(s.a)(["\n    min-height: calc(100vh - 109px);\n  "]);return j=function(){return e},e}function v(){var e=Object(s.a)(["\n  min-height: calc(100vh - 109px);\n\n  ","\n"]);return v=function(){return e},e}function h(){var e=Object(s.a)(["\n  font-size: 18px;\n  line-height: 23px;\n\n  letter-spacing: 0.05em;\n"]);return h=function(){return e},e}function x(){var e=Object(s.a)(["\n  color: var(--secondary);\n"]);return x=function(){return e},e}function g(){var e=Object(s.a)(["\n    text-align: left;\n    margin-bottom: 36px;\n\n  "]);return g=function(){return e},e}function O(){var e=Object(s.a)(["\n  font-weight: 800;\n  font-size: 24px;\n  line-height: 48px;\n  text-align: center;\n\n  margin-bottom: 16px;\n\n  ","\n"]);return O=function(){return e},e}function y(){var e=Object(s.a)(["\n    text-align: left;\n    font-size: 36px;\n\n  "]);return y=function(){return e},e}function w(){var e=Object(s.a)(["\n  font-weight: 800;\n  font-size: 24px;\n  line-height: 48px;\n  text-align: center;\n\n  ","\n"]);return w=function(){return e},e}function E(){var e=Object(s.a)([""]);return E=function(){return e},e}var P=l.default.div(E()),z=l.default.h1(w(),(function(e){return Object(u.config)(e).media.md(y())})),I=l.default.h2(O(),(function(e){return Object(u.config)(e).media.md(g())})),_=l.default.span(x()),S=l.default.p(h()),T=Object(l.default)(u.Row)(v(),(function(e){return Object(u.config)(e).media.md(j())})),k=Object(l.keyframes)(m()),q=l.default.img(b(),k),F=l.default.img.attrs({src:"/ilustra_chico.svg",alt:"desenvolvedor ouvindo m\xfasica com um notebook"})(p(),(function(e){return Object(u.config)(e).media.sm(f())}),(function(e){return Object(u.config)(e).media.md(d())}));var R=function(){var e=c.useState(!0),n=Object(i.a)(e,2),t=n[0],r=n[1];return Object(a.useScrollPosition)((function(e){var n=e.currPos;return r(n.y>-100)}),[t]),Object(o.jsxs)(P,{children:[Object(o.jsxs)(T,{reverse:["xs","sm"],children:[Object(o.jsxs)(u.Col,{justify:"center",xs:4,md:4,children:[Object(o.jsx)(z,{children:"Oi! Eu sou o Francisco!"}),Object(o.jsxs)(I,{children:["Desenvolvedor ",Object(o.jsx)(_,{children:"frontend"})]}),Object(o.jsxs)(S,{children:["Trabalho com desenvolvimento desde 2016. J\xe1 trabalhei um pouco com .NET e C#, mas logo migrei para o frontend usando ",Object(o.jsx)(_,{children:"Javascript"}),". Desde ent\xe3o, trabalhei com Angular, e atualmente, trabalho com"," ",Object(o.jsx)(_,{children:"ReactJS"}),"."]})]}),Object(o.jsx)(u.Col,{justify:"center",align:"center",xs:4,md:4,children:Object(o.jsx)(F,{})})]}),t&&Object(o.jsx)(u.Visible,{md:!0,lg:!0,xl:!0,children:Object(o.jsx)(q,{src:"/arrow_down_circle.svg"})})]})};function D(){var e=Object(s.a)(["\n  font-size: 18px;\n  line-height: 32px;\n"]);return D=function(){return e},e}function L(){var e=Object(s.a)(["\n  background: var(--secondary);\n\n  height: 100%;\n  width: ","%;\n"]);return L=function(){return e},e}function N(){var e=Object(s.a)(["\n  background: #00000030;\n\n  height: 6px;\n  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.25);\n"]);return N=function(){return e},e}function C(){var e=Object(s.a)(["\n  & + & {\n    margin-top: 16px;\n  }\n"]);return C=function(){return e},e}var B=l.default.div(C()),G=l.default.div(N()),J=l.default.div(L(),(function(e){var n;return null!==(n=e.value)&&void 0!==n?n:0})),M=l.default.label(D()),V=t("5++N"),A=function(e){var n=e.label,t=e.value;return Object(o.jsxs)(B,{children:[Object(o.jsx)(M,{children:n}),Object(o.jsx)(G,{children:Object(o.jsx)(J,{value:t})})]})},W=function(){return Object(o.jsx)(o.Fragment,{children:V.c.map((function(e){return Object(o.jsx)(A,{label:e.label,value:e.value},e.label)}))})};function X(){var e=Object(s.a)(["\n  margin-top: 64px;\n  font-weight: 600;\n  font-size: 36px;\n  line-height: 48px;\n  /* identical to box height, or 133% */\n\n  text-align: center;\n"]);return X=function(){return e},e}var H=l.default.h2(X()),K=t("cpVT");function Q(){var e=Object(s.a)(["\n  font-size: 12px;\n  line-height: 14px;\n"]);return Q=function(){return e},e}function U(){var e=Object(s.a)(["\n  font-weight: 800;\n  font-size: 23.1111px;\n  line-height: 30px;\n  color: var(--primary);\n"]);return U=function(){return e},e}function Y(){var e=Object(s.a)(["\n  font-weight: 800;\n  font-size: 23.1111px;\n  line-height: 30px;\n  color: var(--secondary);\n"]);return Y=function(){return e},e}function Z(){var e=Object(s.a)(["\n  font-size: 18px;\n  line-height: 30px;\n"]);return Z=function(){return e},e}function $(){var e=Object(s.a)(["\n  font-size: 12px;\n  line-height: 14px;\n"]);return $=function(){return e},e}function ee(){var e=Object(s.a)(["\n  font-weight: 800;\n  font-size: 14px;\n  line-height: 18px;\n"]);return ee=function(){return e},e}function ne(){var e=Object(s.a)(["\n  font-weight: 800;\n  font-size: 18px;\n  line-height: 18px;\n  padding-bottom: 3px;\n"]);return ne=function(){return e},e}function te(){var e=Object(s.a)(["\n  background-image: url(/blob.svg);\n  background-size: contain;\n  background-repeat: no-repeat;\n  min-width: 59px;\n  color: var(--white);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-top: 9px;\n  margin-right: 32px;\n"]);return te=function(){return e},e}function oe(){var e=Object(s.a)(["\n  display: flex;\n  min-height: 60px;\n\n  & + & {\n    margin-top: 36px;\n  }\n"]);return oe=function(){return e},e}function re(){var e=Object(s.a)(["\n  position: relative;\n  :before {\n    content: '';\n    display: block;\n    position: absolute;\n    left: 29px;\n    top: 0;\n    margin: 60px 0 0 -1px;\n    width: 2px;\n    height: calc(100% - 60px);\n    background: var(--primary);\n    z-index: -1;\n  }\n"]);return re=function(){return e},e}var ie=l.default.div(re()),ae=l.default.div(oe()),ce=l.default.div(te()),ue=l.default.span(ne()),se=l.default.span(ee()),le=l.default.p($()),de=l.default.p(Z()),fe=l.default.span(Y()),pe=l.default.span(U());l.default.p(Q());function be(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}var me=function(e){var n=e.dateInfo,t=e.jobInfo;return Object(o.jsxs)(ae,{children:[Object(o.jsxs)(ce,{children:[Object(o.jsx)(ue,{children:n.month}),Object(o.jsx)(se,{children:n.year})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)(le,{children:n.duration}),Object(o.jsxs)(de,{children:[Object(o.jsx)(fe,{children:t.role})," na ",Object(o.jsx)(pe,{children:t.company})]}),Object(o.jsx)("p",{children:t.description})]})]})},je=function(){return Object(o.jsx)(ie,{children:V.a.map((function(e){return Object(o.jsx)(me,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?be(Object(t),!0).forEach((function(n){Object(K.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):be(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({},e),"".concat(e.jobInfo.role,"-").concat(e.jobInfo.company))}))})};function ve(){return Object(o.jsxs)(r.a,{children:[Object(o.jsx)(R,{}),Object(o.jsxs)(u.Row,{style:{marginBottom:72},children:[Object(o.jsxs)(u.Col,{xs:4,md:3,children:[Object(o.jsx)(H,{style:{marginBottom:64},children:"Skills"}),Object(o.jsx)(W,{})]}),Object(o.jsxs)(u.Col,{xs:4,md:4,offset:{md:1},children:[Object(o.jsx)(H,{style:{marginBottom:64},children:"Por onde andei"}),Object(o.jsx)(je,{})]})]})]})}},cpVT:function(e,n,t){"use strict";function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}t.d(n,"a",(function(){return o}))},lTFH:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t("OTAv");Object.defineProperty(n,"useScrollPosition",{enumerable:!0,get:function(){return o.useScrollPosition}})}},[["/EDR",0,2,1,3,4]]]);