!function(){"use strict";var e,t={4318:function(e,t,n){var r=n(7294),o=n(745);n(9669);const l=r.createContext({});var a=({children:e})=>{const[t,n]=r.useState(),o=!!(null==t?void 0:t.id);return r.useEffect((()=>{chrome.storage.sync.get(null,(({token:e})=>{return t=void 0,r=void 0,l=function*(){e&&n({id:"1",name:"PAS",access_token:"",avatar:"",createdAt:new Date,email:"",nickname:"",refresh_token:"",secrets:[""],signature:"orichalcum",password:"",updatedAt:new Date,verified:{email:!0}})},new((o=void 0)||(o=Promise))((function(e,n){function a(e){try{s(l.next(e))}catch(e){n(e)}}function i(e){try{s(l.throw(e))}catch(e){n(e)}}function s(t){var n;t.done?e(t.value):(n=t.value,n instanceof o?n:new o((function(e){e(n)}))).then(a,i)}s((l=l.apply(t,r||[])).next())}));var t,r,o,l}))}),[]),r.createElement(l.Provider,{value:{member:t,isAuth:o}},e)},i=n(1893);const s={borderRadius:"8px",boxShadow:"2px 2px 10px #000"},c={title:"dark",utils:s,color:{bg:{0:"#181818",1:"#282a36"},green:"#50fa7b",red:"#ff5555",cyan:"#00C3FF",yellow:"#ffbf00",icon:"#f8f8f2;",purple:"#bd93f9"}},u={title:"light",utils:s,color:{bg:{0:"#f1e7db",1:"#c4c7b5"},green:"#005221",red:"#ff0000",cyan:"#0088c5",yellow:"#cca500",icon:"#111111",purple:"#562f7e"}},m=r.createContext({theme:{},setTheme:()=>{},ChangeTheme:()=>{}});var d=({children:e})=>{const[t,n]=r.useState(c);return r.useEffect((()=>{n("light"===localStorage.themeImageTracker?u:c)}),[]),r.createElement(m.Provider,{value:{theme:t,setTheme:n,ChangeTheme:()=>{"dark"===t.title?(n(u),localStorage.setItem("themeImageTracker","light")):(n(c),localStorage.setItem("themeImageTracker","dark"))}}},r.createElement(i.f6,{theme:t},e))},g=n(1039),h=n(9520);class p extends h.default{constructor(){super("Image_Tracker_DB"),this.version(1).stores({Images:"id, alt, extension, size, origin"})}}const f=new p;var v=()=>{const{member:e,isAuth:t}=r.useContext(l);return{member:e,isAuth:t}},b=function(e,t,n,r){return new(n||(n=Promise))((function(o,l){function a(e){try{s(r.next(e))}catch(e){l(e)}}function i(e){try{s(r.throw(e))}catch(e){l(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,i)}s((r=r.apply(e,t||[])).next())}))};const x=r.createContext({Images:[],PaginationImages:[],IsFallBack:{Delete:!1,Storage:!0},FilterOptions:[],setFilterOptions:()=>{},setCurrentFilters:()=>{},CurrentFilters:[],left:()=>{},right:()=>{}});var E=({children:e})=>{const t=r.useRef(null),[n,o]=r.useState([]),[l,a]=r.useState([]),[i,s]=r.useState([0,20]),{member:c}=v(),[u,m]=r.useState({Storage:!0,Delete:!1}),d=(0,g.useLiveQuery)((()=>b(void 0,void 0,void 0,(function*(){return l.length?yield f.Images.where("origin").anyOfIgnoreCase(l).offset(i[0]).limit(i[1]).toArray():yield f.Images.offset(i[0]).limit(i[1]).toArray()}))),[l,i]),h=(0,g.useLiveQuery)((()=>b(void 0,void 0,void 0,(function*(){if(!(null==c?void 0:c.signature))return;const e=()=>b(void 0,void 0,void 0,(function*(){return l.length?yield f.Images.where("origin").anyOfIgnoreCase(l).toArray():yield f.Images.toArray()})),t=yield e(),n=t.map((({origin:e})=>e)),r=[...new Set(n)];o((e=>e.length?e:[...new Set(n)]));if("beta-tester"===c.signature||"diamond"===c.signature||(()=>{if(null==c?void 0:c.signature)return"promo"===c.signature.split(" ")[0]})())return t;const a=({origin:e,SignatureLimited:t})=>b(void 0,void 0,void 0,(function*(){yield f.Images.where("origin").equals(e).offset(t).primaryKeys((e=>b(void 0,void 0,void 0,(function*(){yield f.Images.bulkDelete(e)}))))}));return r.forEach((e=>b(void 0,void 0,void 0,(function*(){const t=n.filter((t=>t===e)).length;"free"===(null==c?void 0:c.signature)&&t>200&&(yield a({origin:e,SignatureLimited:200})),"gold"===(null==c?void 0:c.signature)&&t>400&&(yield a({origin:e,SignatureLimited:400})),"platinum"===(null==c?void 0:c.signature)&&t>700&&(yield a({origin:e,SignatureLimited:700}))})))),e()}))),[c,l]);return r.useEffect((()=>{h&&m((e=>Object.assign(Object.assign({},e),{Storage:!1})))}),[h]),r.createElement(x.Provider,{value:{Images:null!=h?h:[],PaginationImages:null!=d?d:[],IsFallBack:u,FilterOptions:n,setFilterOptions:o,setCurrentFilters:a,CurrentFilters:l,left:()=>{if(null!==t.current){const e=t.current;(e.scrollLeft-=e.offsetWidth)<=0&&(setTimeout((()=>{e.scrollLeft=e.scrollWidth}),100),s((e=>e[0]>0?i.map((e=>e-20)):e)))}},right:()=>{if(null!==t.current&&h){const e=t.current;(e.scrollLeft+=e.offsetWidth)>=e.scrollWidth&&(e.scrollLeft=0,s((e=>e[1]<h.length?i.map((e=>e+20)):e)))}},CarouselRef:t}},e)};const w=r.createContext({isOpen:{tools:!1,profile:!1},setIsOpen:()=>{}});var y=({children:e})=>{const[t,n]=r.useState({tools:!1,profile:!1});return r.createElement(w.Provider,{value:{isOpen:t,setIsOpen:n}},e)},$=({children:e})=>r.createElement(a,null,r.createElement(d,null,r.createElement(E,null,r.createElement(y,null,e)))),k=n(9711),C=n(6974),I=["600px","1200px","1500px"],S=["973px"],O=i.vJ`
    *, html{
        padding: 0px;
        margin: 0px;
        box-sizing: border-box;
        scroll-behavior: smooth !important;
    }

    body{
        
        @media(max-width: ${I[0]}){
            min-width: 600px !important;
            min-height: 600px !important;
        }

        font-size: 1rem;
        background: ${e=>e.theme.color.bg[0]};
        color: white;
        font-family: 'Poppins', sans-serif;
        width: 100%;
        height: 100%;   
    }
`,P=n(3935),F=n(3854),j=n(9352);const T=i.ZP.button`
    @keyframes Rotate {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
    transition: 0.6s;
    background-image:linear-gradient(70deg, ${e=>e.theme.color.bg[0]}, ${e=>e.theme.color.bg[1]});
    position: ${e=>{var t;return null!==(t=e.position)&&void 0!==t?t:"relative"}};
    color:${e=>e.theme.color.icon};
    font-weight:bold;
    margin:${e=>{var t;return null!==(t=e.margin)&&void 0!==t?t:"0px"}};
    border:none;
    width:45px;
    height:45px;
    font-size: 1.8rem;
    box-shadow:${e=>e.theme.utils.boxShadow};
    border-radius:50%;
    cursor:pointer;
    overflow:hidden;

    .rotate {
        animation: Rotate 1s ease-in infinite;
    }

    :hover{
        border: 0.5px solid ${e=>e.theme.color.icon};
        transition: 0.6s;
        background-image:linear-gradient(70deg, ${e=>e.theme.color.bg[1]}, ${e=>e.theme.color.bg[0]});
        transform: scale(1.3);
        color:${e=>{var t;return null!==(t=e.color)&&void 0!==t?t:e.theme.color.red}};
    }

    @media(max-width:${I[0]}){
        width:42px;
        height:42px;
        font-size : 1.5rem;
    }
`;var Z=e=>r.createElement(T,Object.assign({},e));const R=i.ZP.div`
    color : ${e=>e.theme.color.red};
    display: grid;
    padding: 20px;
    margin-bottom: 20px;
    background: ${e=>e.theme.color.bg[0]};
    box-shadow: ${e=>e.theme.utils.boxShadow};
    background-image: linear-gradient(70deg,${e=>e.theme.color.bg[0]}, ${e=>e.theme.color.bg[1]});
    justify-content: center;
    text-align: center;
    width: 100%;
    h2 svg {
        transform: translate(2px, 2px);
    }
    p {
        margin: 10px 0px;
        font-size: 1.2rem;
    }

    img {
        border-radius: 8px;
        margin: 10px 0px;
        border: solid 1px ${e=>e.theme.color.icon};
    }
`;var D=({title:e,describe:t})=>{const n=(0,C.s0)();return P.createPortal(r.createElement(r.Fragment,null,r.createElement(R,null,r.createElement("h2",null,r.createElement(j.oji,null)," ",e),r.createElement("p",null,t,"  ",r.createElement(Z,{title:"reload",onClick:()=>n(0)},r.createElement(F.zHJ,{style:{marginLeft:"2px",marginTop:"2px"}}))),r.createElement("img",{src:"/how-use-me.webp",alt:"anyway",width:"100%",height:"auto"}))),document.getElementById("portal"))},A=()=>({$:e=>document.querySelector(e)});const L=i.ZP.img`
    width:100%;
    height:100%;
    transform-origin: 'center center';
    object-fit:cover;
`,z=i.ZP.div`
    width:50vh;
    height:70vh;
    margin:10px;
    overflow:hidden;
    border-radius:8px 8px 0px 0px;
    box-shadow:${e=>e.theme.utils.boxShadow};
    cursor: zoom-in;
`,B=i.ZP.div`
  @keyframes show {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
  }
   animation: show 1s ease-in;
   display: grid;
`;var _=n(3750),M=n(9583),W=()=>{const[e,t]=r.useState();return r.useEffect((()=>{t("location=1, toolbar=1, menubar=1, resizable=1, width=464, height=700")}),[]),{WindowConfig:e}};const U=i.ZP.a`
    transition: 1s;
    text-decoration: none;
    cursor: pointer;
    color:${e=>e.theme.color.icon};

    :hover{
        transition: 0.6s;
        color:${e=>e.theme.color.red};
        transform: scale(2);
    }
`;var J=e=>r.createElement(U,Object.assign({},e)),Y=i.ZP.div` 
    padding:15px;
    margin:10px;
    display:flex;
    justify-content:space-evenly;
    transform:translate(0, -20px);
    background-image:linear-gradient(${e=>e.theme.color.bg[0]}, ${e=>e.theme.color.bg[1]});
    border-radius:0px 0px 8px 8px;
    box-shadow:${e=>e.theme.utils.boxShadow}
`,K=({href:e,download:t,id:n})=>{const{WindowConfig:o}=W();return r.createElement(Y,null,r.createElement(J,{href:`#${e}`,target:"_self",title:"Open Image in new window",onClick:()=>window.open(e,"open image",o)},r.createElement(_.rnh,null)),r.createElement(J,{href:e,target:"_blank",download:t,title:"download Image"},r.createElement(M.aBF,null)),r.createElement(J,{href:`#Deleted:${n}`,title:"Delete",onClick:()=>{return e=void 0,t=void 0,o=function*(){return yield f.Images.delete(n)},new((r=void 0)||(r=Promise))((function(n,l){function a(e){try{s(o.next(e))}catch(e){l(e)}}function i(e){try{s(o.throw(e))}catch(e){l(e)}}function s(e){var t;e.done?n(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,i)}s((o=o.apply(e,t||[])).next())}));var e,t,r,o}},r.createElement(M.Xm5,null)))},N=({alt:e,src:t,id:n})=>{const o=r.useRef(null),[l,a]=r.useState(1.5),{$:i}=A(),s={img(e,t){const n=o.current,r=i("#carousel").scrollLeft+e.pageX-e.currentTarget.offsetLeft,s=e.pageY-e.currentTarget.offsetTop;a(null!=t?t:l),n&&(n.style.transformOrigin=`${r}px ${s}px`,n.style.transform=`scale(${null!=t?t:l})`)},box:{enter(){const e=o.current;e&&(e.style.transition="0s")},leave(){const e=o.current;a(1.5),e&&(e.style.transition="1s ease-in",e.style.transform="scale(1)",e.style.transformOrigin="center center")}}};return r.useEffect((()=>{document.onselectstart=e=>e.preventDefault()}),[]),r.createElement(B,null,r.createElement(z,{onMouseEnter:()=>s.box.enter(),onMouseLeave:()=>s.box.leave(),onContextMenu:e=>e.preventDefault(),onDragStart:e=>e.preventDefault()},r.createElement(L,{ref:o,loading:"lazy",src:t,alt:e,onContextMenu:e=>s.img(e,l>1?l-.25:l),onMouseMove:e=>s.img(e),onClick:e=>s.img(e,l+.25)})),r.createElement(K,{href:t,download:e,id:n}))},H=()=>{const{CurrentFilters:e,FilterOptions:t,Images:n,IsFallBack:o,left:l,right:a,setCurrentFilters:i,setFilterOptions:s,CarouselRef:c,PaginationImages:u}=r.useContext(x);return{CurrentFilters:e,FilterOptions:t,Images:n,IsFallBack:o,left:l,right:a,setCurrentFilters:i,setFilterOptions:s,CarouselRef:c,PaginationImages:u}};const V=i.ZP.div`
    display:flex;
    justify-content:center;
    ::-webkit-scrollbar { //chrome
        display:none;
    }
    scrollbar-width:none;
    overflow-x:auto;
    scroll-behavior:smooth !important;
`;var X=({children:e})=>{const{left:t,right:n,CarouselRef:o}=H();return r.useEffect((()=>{window.onkeydown=e=>(e=>{"ArrowLeft"===e.key&&t(),"ArrowRight"===e.key&&n()})(e),window.onwheel=e=>e.deltaY>0?n():t()}),[t,n]),r.createElement(V,{id:"carousel",ref:o},e)},q=()=>{const{member:e}=v();return()=>"free"===(null==e?void 0:e.signature)?"image-tracker-logo-free-09-10-2022.png":"gold"===(null==e?void 0:e.signature)?"image-tracker-logo-gold-09-10-2022.png":"platinum"===(null==e?void 0:e.signature)?"logo-verde.png":"diamond"===(null==e?void 0:e.signature)||"beta-tester"===(null==e?void 0:e.signature)?"image-tracker-logo-diamond-09-10-2022.png":"orichalcum"===(null==e?void 0:e.signature)?"image-tracker-logo-orichalcum-09-10-2022.png":void 0};const Q=i.ZP.div`
    @keyframes Rotate {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
    transform: translate(40vh, 30vh);
    position: absolute;
    img {
        animation: Rotate 1s ease-in infinite;
    }
    h2 {
        margin-top: 15px;
        text-align: center;
        color: ${e=>e.theme.color.icon};
    }

    @media (min-width:${I[1]}) {
        transform: translate(90vh, 30vh);
    }
`;var G=()=>{const e=q();return r.createElement(Q,null,r.createElement("img",{src:e()}),r.createElement("h2",null,"Loading..."))},ee=n(1649),te=()=>{const{isOpen:e,setIsOpen:t}=(0,r.useContext)(w);return{isOpen:e,setIsOpen:t,closeAll(){t({tools:!1,profile:!1})}}};const ne=i.ZP.div`
    position: fixed;
    width: 96%;
    height: 0px;
    transform: translate(0vh, -4vh);
    z-index: 7;

    @media(max-width:${I[0]}){
        transform: translate(0vh, -5vh);
    }
    @media(min-height:${S[0]}){
        transform: translate(0vh, 0vh);
        button {
            width:60px;
            height:60px;
            font-size:30px;
       }
    }
`;var re=n(5733),oe=n.n(re),le=function(e,t,n,r){return new(n||(n=Promise))((function(o,l){function a(e){try{s(r.next(e))}catch(e){l(e)}}function i(e){try{s(r.throw(e))}catch(e){l(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,i)}s((r=r.apply(e,t||[])).next())}))},ae=()=>{const[e,t]=r.useState(""),[n,o]=r.useState(!1),l=n=>le(void 0,void 0,void 0,(function*(){o(!0);const r=new(oe()),l=[...new Set(n.map((({origin:e})=>e)))];for(let o of l){const l=n.filter((({origin:e})=>e===o)),a=r.folder(o);for(let n=0;n<l.length;n++){const{blob:r,alt:o,extension:i}=l[n];t(i),a.file(`${n+1+"-"+o}.${e||i}`,r)}}r.file(`Hello-you-downloaded-${n.length}-images-from-${l.length}-sites.txt`,`\n            You downloaded ${n.length} images from ${l.length} sites\n            👋 Thanks for using the 🎯 image tracker 🎯!\n            join our discord server : https://discord.com/invite/2kyjbbjBwe\n            website : https://imagetracker.org\n        `);const a=yield r.generateAsync({type:"blob"});return{blob:a,link:URL.createObjectURL(a)}}));return{Create:l,setExtesion:t,Extension:e,Download(e){return le(this,void 0,void 0,(function*(){const t=yield l(e),n=document.createElement("a");n.href=t.link,n.download="Image-Tracker-Zip-Images",n.target="_blank",n.click(),n.remove(),URL.revokeObjectURL(t.link),o(!1)}))},isFallback:n}};const ie=i.ZP.div`
    width: 100%;
    height: 120vh;
    position: fixed;
    z-index: 9999;
    background-image: linear-gradient(70deg,${e=>e.theme.color.bg[0]}, ${e=>e.theme.color.bg[1]});
    opacity: 0.8;
`,se=i.ZP.div`
    @keyframes FadeIn {
        from {
           transform: translate(13vh, 100vh);
        }
        to {
            transform: translate(13vh, 0vh);
        }
    }
    animation: FadeIn 0.5s ease-out;
    background-image: linear-gradient(70deg,${e=>e.theme.color.bg[0]}, ${e=>e.theme.color.bg[1]});
    position:fixed;
    width:80vh;
    height:100vh;
    transform: translate(13vh, 0vh);
    box-shadow:${e=>e.theme.utils.boxShadow};
    border-radius:${e=>e.theme.utils.borderRadius};
    z-index: 99999;

    @media(min-width: ${I[1]}) {
        @keyframes FadeIn {
            from {
                transform: translate(65vh, 100vh);
            }
            to {
                transform: translate(65vh, 0vh);
            }
        }
       animation: FadeIn 0.5s ease-out;
       transform: translate(65vh, 0vh);
       width:80vh;
       height:100vh;
    }

    @media(min-height: ${S[0]}) {
        @keyframes FadeIn {
            from {
                transform: translate(35vh, 100vh);
            }
            to {
                transform: translate(35vh, 5vh);
            }
        }
       animation: FadeIn 0.5s ease-out;
       transform: translate(35vh, 5vh);
    }
`;var ce=e=>{const{closeAll:t}=te();return P.createPortal(r.createElement(r.Fragment,null,r.createElement(ie,{onClick:()=>t()}),r.createElement(se,Object.assign({},e))),document.getElementById("portal"))};const ue=i.ZP.div`
    display: grid;
    grid-template-columns: ${e=>{var t;return null!==(t=e.columns)&&void 0!==t?t:"1fr"}};
    grid-template-rows: ${e=>{var t;return null!==(t=e.rows)&&void 0!==t?t:"1fr"}};
`;var me=e=>r.createElement(ue,Object.assign({},e));const de=i.ZP.select`
    transition: 0.5s ease;
    border-radius: ${e=>e.theme.utils.borderRadius};
    box-shadow: ${e=>e.theme.utils.boxShadow};
    background: ${e=>e.theme.color.bg[1]};
    background-image: linear-gradient(70deg,${e=>e.theme.color.bg[0]}, ${e=>e.theme.color.bg[1]});
    color: ${e=>e.theme.color.icon};
    border: solid 1px;
    cursor: pointer;
    text-align: center;
    padding: 5px;
    :hover{
        transition: 0.5s ease;
        transform:scale(1.1);
    }
    :focus{
        transition: 0.5s ease;
        transform:scale(1.1);
    }
`;var ge=({origin:e})=>{const{setCurrentFilters:t,setFilterOptions:n,FilterOptions:o,CurrentFilters:l}=H();return r.createElement(me,{columns:"1fr 1fr"},r.createElement(de,{onChange:e=>(({target:{value:e}})=>{"default"!==e&&(n((t=>t.includes(e)?t:[...t,e])),t((t=>{const n=[...t,e];return localStorage.setItem("CurrentFilters",JSON.stringify(null!=n?n:[])),n})))})(e)},r.createElement("option",{value:"default"},"Websites : ",o.length-l.length),e&&o.map(((e,t)=>r.createElement("option",{value:e,key:t},e))).filter((e=>!l.includes(e.props.value)&&"clear"!==e.props.value))),r.createElement(de,{onChange:e=>(({target:{value:e}})=>{if("clear"===e)return t([]),void localStorage.removeItem("CurrentFilters");"default"!==e&&(n((t=>t.includes(e)?t:[...t,e])),t((t=>{const n=t.filter((t=>t!==e));return localStorage.setItem("CurrentFilters",JSON.stringify(null!=n?n:[])),n})))})(e)},r.createElement("option",{value:"default"},"Current Filters : ",l.length),l.length&&r.createElement("option",{value:"clear"},"❌ Remove all filters ❌"),l.map((e=>r.createElement("option",{value:e,key:e},e," ❌")))))},he=n(8193);const pe=i.ZP.div`
    display: flex;
    justify-content: ${e=>{var t;return null!==(t=e.justContent)&&void 0!==t?t:"start"}};
    height: ${e=>{var t;return null!==(t=e.height)&&void 0!==t?t:"auto"}};
    margin: ${e=>{var t;return null!==(t=e.margin)&&void 0!==t?t:"0px"}};
    flex-direction: ${e=>{var t;return null!==(t=e.direction)&&void 0!==t?t:"row"}};
    button{
        margin: 10px;
    }
`;var fe=e=>r.createElement(pe,Object.assign({},e));const ve=i.ZP.h1`
    color:${e=>e.theme.color.icon};
    margin: 10px 10px 0px 10px;

    @media(min-height : ${S[0]}){
        transform: translate(0vh, 0vh);
        button {
            width:60px;
            height:60px;
            font-size:30px;
       }
    }
`;var be=({children:e,onClose:t})=>{const{color:n}=(0,i.Fg)();return r.createElement(fe,{margin:"5px",justContent:"center"},r.createElement(ve,null,e),r.createElement(Z,{title:"Close donate",onClick:t,color:n.red},r.createElement(he.oHP,null)))};const xe=i.ZP.div`
    margin: 0px 30px 5px;
    box-shadow: ${e=>e.theme.utils.boxShadow};
    border-radius: ${e=>e.theme.utils.borderRadius};
    background-image: linear-gradient(70deg,${e=>e.theme.color.bg[0]}, ${e=>e.theme.color.bg[1]});
    padding: 20px;
    height: 170px;
    select{
        margin: 10px 10px 5px 10px;
    }

    @media(min-height: ${S[0]}) {
        margin: 30px 30px;
    }
`,Ee=i.ZP.div`
    display: grid;
    margin: 5px 30px;
    box-shadow: ${e=>e.theme.utils.boxShadow};
    border-radius: ${e=>e.theme.utils.borderRadius};
    background-image: linear-gradient(70deg,${e=>e.theme.color.bg[0]}, ${e=>e.theme.color.bg[1]});
    padding: 20px;

    @media(min-height: ${S[0]}) {
        margin: 30px 30px;
    }
`,we=i.ZP.h2`
    text-align: center;
    margin-bottom: 10px;
    color: ${e=>e.theme.color.icon};
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
    svg{
        transform: translateY(2px);
    }
`,ye=i.ZP.div`
    margin: 16px 10px;
    select{
        transition: 0.5s ease;
        cursor: pointer;
        padding: 5px;
        border-radius: ${e=>e.theme.utils.borderRadius};
        background: ${e=>e.theme.color.bg[1]};
        color: ${e=>e.theme.color.icon};
        border: solid 1px;

        :hover{
            transition: 0.5s ease;
            transform: scale(1.2);
        }
        :focus{
            transition: 0.5s ease;
            transform: scale(1.2);
        }
    }
`,$e=i.ZP.h2`
    margin: 15px 10px;
    color: ${e=>e.theme.color.icon};
    span{
       background: ${e=>e.theme.color.bg[1]};
       border-radius: ${e=>e.theme.utils.borderRadius};
       padding: 5px;
       text-align:center;
       svg {
         margin: 0px 5px 0px 0px;
         transform: translateY(4px);
       }
    }
`;var ke=({Storage:e})=>{const t={zipSize(){},countImages(){const t=`${e.length}`.length,n=e.length.toString().split("");return t<4?e.length:4===t?`${n[0]}.${n[1]}K`:5===t?`${n[0]+n[1]}.${n[2]}K`:6===t?`${n[0]+n[1]+n[2]}.${n[3]}K`:"♾️"}};return r.createElement($e,null,r.createElement("span",null,r.createElement(M.Jh6,null),t.countImages()))},Ce=e=>r.createElement("input",Object.assign({type:"range"},e)),Ie=n(5434),Se=n(3990),Oe=()=>{const{IsFallBack:e,setCurrentFilters:t,Images:n}=H(),{setIsOpen:o,isOpen:l}=te(),{color:a}=(0,i.Fg)(),{$:s}=A(),{isFallback:c,Download:u,setExtesion:m}=ae(),[d,g]=r.useState(n),[h,p]=r.useState(n),v=r.useCallback((e=>{const t=Math.ceil(parseInt(e)/100*n.length);return n.slice(0,t>0?t:1)}),[n]),b=e=>{const t=v(e);g(t)},x=e=>{const t=v(e);p(t)};return r.useEffect((()=>{b("100"),x("100")}),[n]),r.createElement(ce,null,r.createElement(me,null,r.createElement(be,{onClose:()=>o(Object.assign(Object.assign({},l),{tools:!1}))},r.createElement(M.CP_,null)," Tools"),r.createElement(xe,null,r.createElement(we,null,r.createElement(M.U41,null)," Search by"),r.createElement(me,{columns:"1fr"},r.createElement(ge,{origin:!0}))),r.createElement(Ee,null,r.createElement(we,null,r.createElement(j.Eed,null)," Download Zip"),r.createElement(me,null,r.createElement(Ce,{onChange:e=>b(e.target.value),defaultValue:"100"}),r.createElement(fe,{justContent:"center"},r.createElement(Z,{id:"Btn-Download",title:"Download Images",color:a.cyan,onClick:()=>{const e=s("#Btn-Download");u(d),c?e.setAttribute("disabled","true"):e.removeAttribute("disabled")}},c?r.createElement(Se.$B1,{className:"rotate"}):r.createElement(j.CmW,null)),r.createElement(ke,{Storage:d}),r.createElement(ye,null,r.createElement("select",{onChange:e=>m(e.target.value)},r.createElement("option",{value:""},"Convert"),r.createElement("option",{value:"jpg"},"jpg"),r.createElement("option",{value:"png"},"png"),r.createElement("option",{value:"webp"},"webp")))))),r.createElement(Ee,null,r.createElement(me,null,r.createElement(we,null,r.createElement(Ie.iW8,null)," Delete Images"),r.createElement(Ce,{id:"InputRangeDelete",onChange:e=>x(e.target.value),defaultValue:"100"}),r.createElement(fe,{justContent:"center"},r.createElement(Z,{id:"Btn-Delete",onClick:()=>{return n=void 0,r=void 0,l=function*(){if(!h.length)return;const n=s("#InputRangeDelete"),r=s("#Btn-Delete"),o=h.map((({id:e})=>e));yield f.Images.bulkDelete(o),"100"===n.value&&(t([]),localStorage.removeItem("CurrentFilters")),n.value="100",e.Delete?r.removeAttribute("disabled"):r.setAttribute("disabled","true")},new((o=void 0)||(o=Promise))((function(e,t){function a(e){try{s(l.next(e))}catch(e){t(e)}}function i(e){try{s(l.throw(e))}catch(e){t(e)}}function s(t){var n;t.done?e(t.value):(n=t.value,n instanceof o?n:new o((function(e){e(n)}))).then(a,i)}s((l=l.apply(n,r||[])).next())}));var n,r,o,l}},(null==e?void 0:e.Delete)?r.createElement(Se.$B1,{className:"rotate"}):r.createElement(ee.hME,null)),r.createElement(ke,{Storage:h}))))))},Pe=()=>{const{right:e,left:t}=H(),{isOpen:n,setIsOpen:o}=te(),{color:l,title:a}=(0,i.Fg)(),{ChangeTheme:s}=(()=>{const{ChangeTheme:e,setTheme:t,theme:n}=r.useContext(m);return{ChangeTheme:e,setTheme:t,theme:n}})(),{WindowConfig:c}=W(),u=(0,C.s0)();return r.createElement(ne,null,n.tools&&r.createElement(Oe,null),r.createElement(fe,{justContent:"center"},r.createElement(Z,{title:"Back",color:l.green,onClick:t},r.createElement(M.x_l,null)),r.createElement(Z,{title:"reload",onClick:()=>u(0)},r.createElement(F.zHJ,{style:{marginTop:"3px"}})),r.createElement(Z,{title:"Shop",onClick:()=>{window.open("http://localhost:3000/signatures/","modal",c)},color:l.red},r.createElement(ee.kdn,{style:{marginTop:"3px"}})),r.createElement(Z,{title:"Tools",onClick:()=>o(Object.assign(Object.assign({},n),{tools:!0})),color:l.green},r.createElement(M.CP_,{style:{marginTop:"3px"}})),r.createElement(Z,{title:"Profile",onClick:()=>{window.open("http://localhost:3000/profile/","modal",c)}},r.createElement(M.Xws,null)),r.createElement(Z,{color:"dark"===a?l.yellow:l.purple,onClick:()=>s()},"dark"===a?r.createElement(M.Mei,{style:{marginTop:"3px"}}):r.createElement(M.TLr,null)),r.createElement(Z,{title:"Next",color:l.green,onClick:e},r.createElement(M.Z1Y,null))))};const Fe=i.ZP.div`
    display: flex;
    justify-content: center;
`,je=i.ZP.h1`
    padding: 10px;
    color:${e=>e.theme.color.icon};
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
`,Te=i.ZP.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin: 5px 0px 0px 0px;
`;var Ze=({children:e,src:t})=>r.createElement(Fe,null,t&&r.createElement(Te,{src:t}),r.createElement(je,null,e)),Re=()=>{const{IsFallBack:e,PaginationImages:t}=H(),{isAuth:n}=v(),o=q(),l=(0,C.s0)();return r.useEffect((()=>{n||l("/")}),[n]),e.Storage?r.createElement(G,null):r.createElement(r.Fragment,null,r.createElement(Ze,{src:o()},"Image Tracker"),r.createElement(X,null,t[0]?t.map((({blob:e,alt:t,id:n})=>r.createElement(N,{src:URL.createObjectURL(e),alt:t,id:n,key:n}))):r.createElement(D,{title:"There are no images to show",describe:"Scroll down to get the photos from the website"})),t[0]&&r.createElement(Pe,null))},De=()=>{const{isAuth:e}=v(),t=(0,C.s0)();return r.useEffect((()=>{e&&t("/popup.html")}),[e]),r.createElement(r.Fragment,null,!e&&r.createElement("iframe",{src:"http://localhost:3000/?extension=true",style:{width:"100%",height:"99.4vh",border:"none"}}))},Ae=()=>r.createElement(k.VK,null,r.createElement($,null,r.createElement(O,null),r.createElement(C.Z5,null,r.createElement(C.AW,{path:"/",element:r.createElement(De,null)}),r.createElement(C.AW,{path:"/popup.html",element:r.createElement(Re,null)}),r.createElement(C.AW,{path:"*",element:r.createElement(De,null)}))));const Le=document.createElement("div");Le.id="root";const ze=document.createElement("div");ze.id="portal",document.body.append(ze),document.body.append(Le),o.s(Le).render(r.createElement((()=>r.createElement(r.StrictMode,null,r.createElement(Ae,null))),null))}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var l=n[e]={exports:{}};return t[e].call(l.exports,l,l.exports,r),l.exports}r.m=t,e=[],r.O=function(t,n,o,l){if(!n){var a=1/0;for(u=0;u<e.length;u++){n=e[u][0],o=e[u][1],l=e[u][2];for(var i=!0,s=0;s<n.length;s++)(!1&l||a>=l)&&Object.keys(r.O).every((function(e){return r.O[e](n[s])}))?n.splice(s--,1):(i=!1,l<a&&(a=l));if(i){e.splice(u--,1);var c=o();void 0!==c&&(t=c)}}return t}l=l||0;for(var u=e.length;u>0&&e[u-1][2]>l;u--)e[u]=e[u-1];e[u]=[n,o,l]},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,{a:t}),t},r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},function(){var e={42:0};r.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,l,a=n[0],i=n[1],s=n[2],c=0;if(a.some((function(t){return 0!==e[t]}))){for(o in i)r.o(i,o)&&(r.m[o]=i[o]);if(s)var u=s(r)}for(t&&t(n);c<a.length;c++)l=a[c],r.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return r.O(u)},n=self.webpackChunkapp=self.webpackChunkapp||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var o=r.O(void 0,[276,636],(function(){return r(4318)}));o=r.O(o)}();