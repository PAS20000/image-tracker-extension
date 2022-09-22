!function(){"use strict";var e,t={7438:function(e,t,n){var r=n(7294),o=n(745),a=n(9669),l=n.n(a),i=e=>l().create({baseURL:"https://api.imagetracker.org/",headers:{"Content-Type":"application/json; charset=utf-8","Access-Control-Allow-Origin":"*","Access-Control-Allow-Credentials":"true",Authorization:null!=e?e:""}}),c=function(e,t,n,r){return new(n||(n=Promise))((function(o,a){function l(e){try{c(r.next(e))}catch(e){a(e)}}function i(e){try{c(r.throw(e))}catch(e){a(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(l,i)}c((r=r.apply(e,t||[])).next())}))};const s=r.createContext({});var m=({children:e})=>{const[t,n]=r.useState(),o=!!(null==t?void 0:t.Google_id);return r.useEffect((()=>{chrome.storage.sync.get(null,(({token:e})=>c(void 0,void 0,void 0,(function*(){if(e){const t=yield i(e).post("/member/jwt").catch((e=>c(void 0,void 0,void 0,(function*(){return console.error(e),yield chrome.storage.sync.remove(["token"]).catch((e=>{console.error(e)})).finally((()=>{n(void 0),chrome.runtime.reload()})),null}))));n(null==t?void 0:t.data.member)}})))),n({Google_id:"1",signature:"diamond",name:"fake"})}),[]),r.createElement(s.Provider,{value:{member:t,isAuth:o}},e)},u=n(1893);const d={borderRadius:"8px",boxShadow:"2px 2px 10px #000"},g={title:"dark",utils:d,color:{bg:{0:"#181818",1:"#282a36"},green:"#50fa7b",red:"#ff5555",cyan:"#00C3FF",yellow:"#ffbf00",icon:"#f8f8f2;",purple:"#bd93f9"}},h={title:"light",utils:d,color:{bg:{0:"#f1e7db",1:"#c4c7b5"},green:"#005221",red:"#ff0000",cyan:"#0088c5",yellow:"#cca500",icon:"#111111",purple:"#562f7e"}},p=r.createContext({theme:{},setTheme:()=>{},ChangeTheme:()=>{}});var f=({children:e})=>{const[t,n]=r.useState(g);return r.useEffect((()=>{n("dark"===localStorage.themeImageTracker?g:h)}),[]),r.createElement(p.Provider,{value:{theme:t,setTheme:n,ChangeTheme:()=>{"dark"===t.title?(n(h),localStorage.setItem("themeImageTracker","light")):(n(g),localStorage.setItem("themeImageTracker","dark"))}}},r.createElement(u.f6,{theme:t},e))},v=n(1039),b=n(9520);class x extends b.default{constructor(){super("Image_Tracker_DB"),this.version(1).stores({Images:"id, alt, extension, size, origin"})}}const E=new x;var w=()=>{const{member:e,isAuth:t}=r.useContext(s);return{member:e,isAuth:t}},$=function(e,t,n,r){return new(n||(n=Promise))((function(o,a){function l(e){try{c(r.next(e))}catch(e){a(e)}}function i(e){try{c(r.throw(e))}catch(e){a(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(l,i)}c((r=r.apply(e,t||[])).next())}))};const y=r.createContext({Images:[],PaginationImages:[],IsFallBack:{Delete:!1,Storage:!0},FilterOptions:[],setFilterOptions:()=>{},setCurrentFilters:()=>{},CurrentFilters:[],left:()=>{},right:()=>{}});var k=({children:e})=>{var t;const n=r.useRef(null),[o,a]=r.useState([]),[l,i]=r.useState(JSON.parse(null!==(t=localStorage.CurrentFilters)&&void 0!==t?t:"[]")),[c,s]=r.useState([0,20]),{member:m}=w(),[u,d]=r.useState({Storage:!0,Delete:!1}),g=(0,v.useLiveQuery)((()=>$(void 0,void 0,void 0,(function*(){return l.length?yield E.Images.where("origin").anyOfIgnoreCase(l).offset(c[0]).limit(c[1]).toArray():yield E.Images.offset(c[0]).limit(c[1]).toArray()}))),[l,c]),h=(0,v.useLiveQuery)((()=>$(void 0,void 0,void 0,(function*(){if(!(null==m?void 0:m.signature))return;const e=()=>$(void 0,void 0,void 0,(function*(){return l.length?yield E.Images.where("origin").anyOfIgnoreCase(l).toArray():yield E.Images.toArray()})),t=yield e(),n=t.map((({origin:e})=>e)),r=[...new Set(n)];a((e=>e.length?e:[...new Set(n)]));if("beta tester"===m.signature||"diamond"===m.signature||(()=>{if(null==m?void 0:m.signature)return"promo"===m.signature.split(" ")[0]})())return t;const o=({origin:e,SignatureLimited:t})=>$(void 0,void 0,void 0,(function*(){yield E.Images.where("origin").equals(e).offset(t).primaryKeys((e=>$(void 0,void 0,void 0,(function*(){yield E.Images.bulkDelete(e)}))))}));return r.forEach((e=>$(void 0,void 0,void 0,(function*(){const t=n.filter((t=>t===e)).length;"free"===(null==m?void 0:m.signature)&&t>200&&(yield o({origin:e,SignatureLimited:200})),"gold"===(null==m?void 0:m.signature)&&t>400&&(yield o({origin:e,SignatureLimited:400})),"platinum"===(null==m?void 0:m.signature)&&t>700&&(yield o({origin:e,SignatureLimited:700}))})))),e()}))),[m,l]);return r.useEffect((()=>{h&&d((e=>Object.assign(Object.assign({},e),{Storage:!1})))}),[h]),r.createElement(y.Provider,{value:{Images:null!=h?h:[],PaginationImages:null!=g?g:[],IsFallBack:u,FilterOptions:o,setFilterOptions:a,setCurrentFilters:i,CurrentFilters:l,left:()=>{if(null!==n.current){const e=n.current;(e.scrollLeft-=e.offsetWidth)<=0&&(setTimeout((()=>{e.scrollLeft=e.scrollWidth}),100),s((e=>e[0]>0?c.map((e=>e-20)):e)))}},right:()=>{if(null!==n.current&&h){const e=n.current;(e.scrollLeft+=e.offsetWidth)>=e.scrollWidth&&(e.scrollLeft=0,s((e=>e[1]<h.length?c.map((e=>e+20)):e)))}},CarouselRef:n}},e)};const C=r.createContext({isOpen:{tools:!1,profile:!1},setIsOpen:()=>{}});var S=({children:e})=>{const[t,n]=r.useState({tools:!1,profile:!1});return r.createElement(C.Provider,{value:{isOpen:t,setIsOpen:n}},e)},O=({children:e})=>r.createElement(m,null,r.createElement(f,null,r.createElement(k,null,r.createElement(S,null,e)))),I=n(9711),P=n(6974),F=["600px","1200px","1500px"],j=["973px"],R=u.vJ`
    *, html{
        padding: 0px;
        margin: 0px;
        box-sizing: border-box;
        scroll-behavior: smooth !important;
    }

    body{
        
        @media(max-width: ${F[0]}){
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
`,Z=n(9352);const T=u.ZP.div`
    color : ${e=>e.theme.color.red};
    padding: 20px;
    margin: 15px;
    background: ${e=>e.theme.color.bg[0]};
    box-shadow: ${e=>e.theme.utils.boxShadow};
    background-image: linear-gradient(70deg,${e=>e.theme.color.bg[0]}, ${e=>e.theme.color.bg[1]});
    border-radius: ${e=>e.theme.utils.borderRadius};
    border: solid 2px ${e=>e.theme.color.red};
    text-align: center;
    transform: translate(0px, 25vh);
    position: absolute;
    svg {
        transform: translate(2px, 2px);
    }
    p {
        margin: 10px 0px;
    }
`;var A=({title:e,describe:t})=>r.createElement(T,null,r.createElement("h2",null,r.createElement(Z.oji,null)," ",e),r.createElement("p",null,t)),z=()=>({$:e=>document.querySelector(e)});const D=u.ZP.img`
    width:100%;
    height:100%;
    transform-origin: 'center center';
    object-fit:cover;
`,L=u.ZP.div`
    width:50vh;
    height:70vh;
    margin:10px;
    overflow:hidden;
    border-radius:8px 8px 0px 0px;
    box-shadow:${e=>e.theme.utils.boxShadow};
    cursor: zoom-in;
`,W=u.ZP.div`
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
`;var _=n(3750),B=n(9583),M=()=>{const[e,t]=r.useState();return r.useEffect((()=>{t("location=1, toolbar=1, menubar=1, resizable=1, width=464, height=700")}),[]),{WindowConfig:e}};const N=u.ZP.a`
    transition: 1s;
    text-decoration: none;
    cursor: pointer;
    color:${e=>e.theme.color.icon};

    :hover{
        transition: 0.6s;
        color:${e=>e.theme.color.red};
        transform: scale(2);
    }
`;var U=e=>r.createElement(N,Object.assign({},e)),G=u.ZP.div` 
    padding:15px;
    margin:10px;
    display:flex;
    justify-content:space-evenly;
    transform:translate(0, -20px);
    background-image:linear-gradient(${e=>e.theme.color.bg[0]}, ${e=>e.theme.color.bg[1]});
    border-radius:0px 0px 8px 8px;
    box-shadow:${e=>e.theme.utils.boxShadow}
`,K=({href:e,download:t,id:n})=>{const{WindowConfig:o}=M();return r.createElement(G,null,r.createElement(U,{href:`#${e}`,target:"_self",title:"Open Image in new window",onClick:()=>window.open(e,"open image",o)},r.createElement(_.rnh,null)),r.createElement(U,{href:e,target:"_blank",download:t,title:"download Image"},r.createElement(B.aBF,null)),r.createElement(U,{href:`#Deleted:${n}`,title:"Delete",onClick:()=>{return e=void 0,t=void 0,o=function*(){return yield E.Images.delete(n)},new((r=void 0)||(r=Promise))((function(n,a){function l(e){try{c(o.next(e))}catch(e){a(e)}}function i(e){try{c(o.throw(e))}catch(e){a(e)}}function c(e){var t;e.done?n(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(l,i)}c((o=o.apply(e,t||[])).next())}));var e,t,r,o}},r.createElement(B.Xm5,null)))},Y=({alt:e,src:t,id:n})=>{const o=r.useRef(null),[a,l]=r.useState(1.5),{$:i}=z(),c={img(e,t){const n=o.current,r=i("#carousel").scrollLeft+e.pageX-e.currentTarget.offsetLeft,c=e.pageY-e.currentTarget.offsetTop;l(null!=t?t:a),n&&(n.style.transformOrigin=`${r}px ${c}px`,n.style.transform=`scale(${null!=t?t:a})`)},box:{enter(){const e=o.current;e&&(e.style.transition="0s")},leave(){const e=o.current;l(1.5),e&&(e.style.transition="1s ease-in",e.style.transform="scale(1)",e.style.transformOrigin="center center")}}};return r.useEffect((()=>{document.onselectstart=e=>e.preventDefault()}),[]),r.createElement(W,null,r.createElement(L,{onMouseEnter:()=>c.box.enter(),onMouseLeave:()=>c.box.leave(),onContextMenu:e=>e.preventDefault(),onDragStart:e=>e.preventDefault()},r.createElement(D,{ref:o,loading:"lazy",src:t,alt:e,onContextMenu:e=>c.img(e,a>1?a-.25:a),onMouseMove:e=>c.img(e),onClick:e=>c.img(e,a+.25)})),r.createElement(K,{href:t,download:t,id:n}))},J=()=>{const{CurrentFilters:e,FilterOptions:t,Images:n,IsFallBack:o,left:a,right:l,setCurrentFilters:i,setFilterOptions:c,CarouselRef:s,PaginationImages:m}=r.useContext(y);return{CurrentFilters:e,FilterOptions:t,Images:n,IsFallBack:o,left:a,right:l,setCurrentFilters:i,setFilterOptions:c,CarouselRef:s,PaginationImages:m}};const X=u.ZP.div`
    display:flex;
    justify-content:center;
    ::-webkit-scrollbar { //chrome
        display:none;
    }
    scrollbar-width:none;
    overflow-x:auto;
    scroll-behavior:smooth !important;
`;var H=({children:e})=>{const{left:t,right:n,CarouselRef:o}=J();return r.useEffect((()=>{window.onkeydown=e=>(e=>{"ArrowLeft"===e.key&&t(),"ArrowRight"===e.key&&n()})(e),window.onwheel=e=>e.deltaY>0?n():t()}),[t,n]),r.createElement(X,{id:"carousel",ref:o},e)},V=()=>{const{member:e}=w();return()=>"free"===(null==e?void 0:e.signature)?"logo-vermelho.png":"gold"===(null==e?void 0:e.signature)?"logo-gold.png":"platinum"===(null==e?void 0:e.signature)?"logo-verde.png":"diamond"===(null==e?void 0:e.signature)||"beta tester"===(null==e?void 0:e.signature)?"logo-diamond.png":void 0};const q=u.ZP.div`
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
        margin: 20px 0px 0px 10px;
        color: ${e=>e.theme.color.icon};
    }

    @media (min-width:${F[1]}) {
        transform: translate(90vh, 30vh);
    }
`;var Q=()=>{const e=V();return r.createElement(q,null,r.createElement("img",{src:e()}),r.createElement("h2",null,"Loading..."))},ee=n(1649),te=()=>{const{isOpen:e,setIsOpen:t}=(0,r.useContext)(C);return{isOpen:e,setIsOpen:t,closeAll(){t({tools:!1,profile:!1})}}};const ne=u.ZP.div`
    position: fixed;
    width: 96%;
    height: 0px;
    transform: translate(0vh, -4vh);
    z-index: 7;

    @media(max-width:${F[0]}){
        transform: translate(0vh, -5vh);
    }
    @media(min-height:${j[0]}){
        transform: translate(0vh, 0vh);
        button {
            width:60px;
            height:60px;
            font-size:30px;
       }
    }
`,re=u.ZP.button`
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
    font-size:26px;
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

    @media(max-width:${F[0]}){
        width:42px;
        height:42px;
        font-size:25.5px;
    }
`;var oe=e=>r.createElement(re,Object.assign({},e)),ae=n(5733),le=n.n(ae),ie=function(e,t,n,r){return new(n||(n=Promise))((function(o,a){function l(e){try{c(r.next(e))}catch(e){a(e)}}function i(e){try{c(r.throw(e))}catch(e){a(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(l,i)}c((r=r.apply(e,t||[])).next())}))},ce=()=>{const[e,t]=r.useState(""),[n,o]=r.useState(!1),a=n=>ie(void 0,void 0,void 0,(function*(){o(!0);const r=new(le()),a=[...new Set(n.map((({origin:e})=>e)))];for(let o of a){const a=n.filter((({origin:e})=>e===o)),l=r.folder(o);for(let n=0;n<a.length;n++){const{blob:r,alt:o,extension:i}=a[n];t(i),l.file(`${n+1+"-"+o}.${e||i}`,r)}}r.file(`Hello-you-downloaded-${n.length}-images-from-${a.length}-sites.txt`,"\n            👋 Thanks for using the 🎯 image tracker 🎯!\n\n            about us : https://imagetracker.org\n        ");const l=yield r.generateAsync({type:"blob"});return{blob:l,link:URL.createObjectURL(l)}}));return{Create:a,setExtesion:t,Extension:e,Download(e){return ie(this,void 0,void 0,(function*(){const t=yield a(e),n=document.createElement("a");n.href=t.link,n.download="Image-Tracker-Zip-Images",n.target="_blank",n.click(),n.remove(),URL.revokeObjectURL(t.link),o(!1)}))},isFallback:n}},se=n(3935);const me=u.ZP.div`
    width: 100%;
    height: 120vh;
    position: fixed;
    z-index: 9999;
    background-image: linear-gradient(70deg,${e=>e.theme.color.bg[0]}, ${e=>e.theme.color.bg[1]});
    opacity: 0.8;
`,ue=u.ZP.div`
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

    @media(min-width: ${F[1]}) {
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

    @media(min-height: ${j[0]}) {
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
`;var de=e=>{const{closeAll:t}=te();return se.createPortal(r.createElement(r.Fragment,null,r.createElement(me,{onClick:()=>t()}),r.createElement(ue,Object.assign({},e))),document.getElementById("portal"))};const ge=u.ZP.div`
    display: grid;
    grid-template-columns: ${e=>{var t;return null!==(t=e.columns)&&void 0!==t?t:"1fr"}};
    grid-template-rows: ${e=>{var t;return null!==(t=e.rows)&&void 0!==t?t:"1fr"}};
`;var he=e=>r.createElement(ge,Object.assign({},e));const pe=u.ZP.select`
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
`;var fe=({origin:e})=>{const{setCurrentFilters:t,setFilterOptions:n,FilterOptions:o,CurrentFilters:a}=J();return r.createElement(he,{columns:"1fr 1fr"},r.createElement(pe,{onChange:e=>(({target:{value:e}})=>{"default"!==e&&(n((t=>t.includes(e)?t:[...t,e])),t((t=>{const n=[...t,e];return localStorage.setItem("CurrentFilters",JSON.stringify(null!=n?n:[])),n})))})(e)},r.createElement("option",{value:"default"},"Websites : ",o.length-a.length),e&&o.map(((e,t)=>r.createElement("option",{value:e,key:t},e))).filter((e=>!a.includes(e.props.value)&&"clear"!==e.props.value))),r.createElement(pe,{onChange:e=>(({target:{value:e}})=>{if("clear"===e)return t([]),void localStorage.removeItem("CurrentFilters");"default"!==e&&(n((t=>t.includes(e)?t:[...t,e])),t((t=>{const n=t.filter((t=>t!==e));return localStorage.setItem("CurrentFilters",JSON.stringify(null!=n?n:[])),n})))})(e)},r.createElement("option",{value:"default"},"Current Filters : ",a.length),a.length&&r.createElement("option",{value:"clear"},"❌ Remove all filters ❌"),a.map((e=>r.createElement("option",{value:e,key:e},e," ❌")))))},ve=n(8193);const be=u.ZP.div`
    display: flex;
    justify-content: ${e=>{var t;return null!==(t=e.justContent)&&void 0!==t?t:"start"}};
    height: ${e=>{var t;return null!==(t=e.height)&&void 0!==t?t:"auto"}};
    margin: ${e=>{var t;return null!==(t=e.margin)&&void 0!==t?t:"0px"}};
    flex-direction: ${e=>{var t;return null!==(t=e.direction)&&void 0!==t?t:"row"}};
    button{
        margin: 10px;
    }
`;var xe=e=>r.createElement(be,Object.assign({},e));const Ee=u.ZP.h1`
    color:${e=>e.theme.color.icon};
    margin: 10px 10px 0px 10px;

    @media(min-height : ${j[0]}){
        transform: translate(0vh, 0vh);
        button {
            width:60px;
            height:60px;
            font-size:30px;
       }
    }
`;var we=({children:e,onClose:t})=>{const{color:n}=(0,u.Fg)();return r.createElement(xe,{margin:"5px",justContent:"center"},r.createElement(Ee,null,e),r.createElement(oe,{title:"Close donate",onClick:t,color:n.red},r.createElement(ve.oHP,null)))};const $e=u.ZP.div`
    margin: 0px 30px 5px;
    box-shadow: ${e=>e.theme.utils.boxShadow};
    border-radius: ${e=>e.theme.utils.borderRadius};
    background-image: linear-gradient(70deg,${e=>e.theme.color.bg[0]}, ${e=>e.theme.color.bg[1]});
    padding: 20px;
    height: 170px;
    select{
        margin: 10px 10px 5px 10px;
    }

    @media(min-height: ${j[0]}) {
        margin: 30px 30px;
    }
`,ye=u.ZP.div`
    display: grid;
    margin: 5px 30px;
    box-shadow: ${e=>e.theme.utils.boxShadow};
    border-radius: ${e=>e.theme.utils.borderRadius};
    background-image: linear-gradient(70deg,${e=>e.theme.color.bg[0]}, ${e=>e.theme.color.bg[1]});
    padding: 20px;

    @media(min-height: ${j[0]}) {
        margin: 30px 30px;
    }
`,ke=u.ZP.h2`
    text-align: center;
    margin-bottom: 10px;
    color: ${e=>e.theme.color.icon};
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
    svg{
        transform: translateY(2px);
    }
`,Ce=u.ZP.div`
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
`,Se=u.ZP.h2`
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
`;var Oe=({Storage:e})=>{const t={zipSize(){},countImages(){const t=`${e.length}`.length,n=e.length.toString().split("");return t<4?e.length:4===t?`${n[0]}.${n[1]}K`:5===t?`${n[0]+n[1]}.${n[2]}K`:6===t?`${n[0]+n[1]+n[2]}.${n[3]}K`:"♾️"}};return r.createElement(Se,null,r.createElement("span",null,r.createElement(B.Jh6,null),t.countImages()))},Ie=e=>r.createElement("input",Object.assign({type:"range"},e)),Pe=n(5434),Fe=n(3990),je=()=>{const{IsFallBack:e,setCurrentFilters:t,Images:n}=J(),{setIsOpen:o,isOpen:a}=te(),{color:l}=(0,u.Fg)(),{$:i}=z(),{isFallback:c,Download:s,setExtesion:m}=ce(),[d,g]=r.useState(n),[h,p]=r.useState(n),f=r.useCallback((e=>{const t=Math.ceil(parseInt(e)/100*n.length);return n.slice(0,t>0?t:1)}),[n]),v=e=>{const t=f(e);g(t)},b=e=>{const t=f(e);p(t)};return r.useEffect((()=>{v("100"),b("100")}),[n]),r.createElement(de,null,r.createElement(he,null,r.createElement(we,{onClose:()=>o(Object.assign(Object.assign({},a),{tools:!1}))},r.createElement(B.CP_,null)," Tools"),r.createElement($e,null,r.createElement(ke,null,r.createElement(B.U41,null)," Search by"),r.createElement(he,{columns:"1fr"},r.createElement(fe,{origin:!0}))),r.createElement(ye,null,r.createElement(ke,null,r.createElement(Z.Eed,null)," Download Zip"),r.createElement(he,null,r.createElement(Ie,{onChange:e=>v(e.target.value),defaultValue:"100"}),r.createElement(xe,{justContent:"center"},r.createElement(oe,{id:"Btn-Download",title:"Download Images",color:l.cyan,onClick:()=>{const e=i("#Btn-Download");s(d),c?e.setAttribute("disabled","true"):e.removeAttribute("disabled")}},c?r.createElement(Fe.$B1,{className:"rotate"}):r.createElement(Z.CmW,null)),r.createElement(Oe,{Storage:d}),r.createElement(Ce,null,r.createElement("select",{onChange:e=>m(e.target.value)},r.createElement("option",{value:""},"Convert"),r.createElement("option",{value:"jpg"},"jpg"),r.createElement("option",{value:"png"},"png"),r.createElement("option",{value:"webp"},"webp")))))),r.createElement(ye,null,r.createElement(he,null,r.createElement(ke,null,r.createElement(Pe.iW8,null)," Delete Images"),r.createElement(Ie,{id:"InputRangeDelete",onChange:e=>b(e.target.value),defaultValue:"100"}),r.createElement(xe,{justContent:"center"},r.createElement(oe,{id:"Btn-Delete",onClick:()=>{return n=void 0,r=void 0,a=function*(){if(!h.length)return;const n=i("#InputRangeDelete"),r=i("#Btn-Delete"),o=h.map((({id:e})=>e));yield E.Images.bulkDelete(o),"100"===n.value&&(t([]),localStorage.removeItem("CurrentFilters")),n.value="100",e.Delete?r.removeAttribute("disabled"):r.setAttribute("disabled","true")},new((o=void 0)||(o=Promise))((function(e,t){function l(e){try{c(a.next(e))}catch(e){t(e)}}function i(e){try{c(a.throw(e))}catch(e){t(e)}}function c(t){var n;t.done?e(t.value):(n=t.value,n instanceof o?n:new o((function(e){e(n)}))).then(l,i)}c((a=a.apply(n,r||[])).next())}));var n,r,o,a}},(null==e?void 0:e.Delete)?r.createElement(Fe.$B1,{className:"rotate"}):r.createElement(ee.hME,null)),r.createElement(Oe,{Storage:h}))))))};const Re=u.ZP.img`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    box-shadow: ${e=>e.theme.utils.boxShadow};
    border: solid 2px ${e=>e.theme.color.icon};
    position: absolute;
    z-index: 2;
`,Ze=u.ZP.h3`
    transform: translate(30px, -9px);
    background-image: linear-gradient(70deg, ${e=>e.theme.color.bg[0]}, ${e=>e.theme.color.bg[1]});
    box-shadow: ${e=>e.theme.utils.boxShadow};
    border: solid 2px ${e=>e.theme.color.icon};
    text-align: center;
    margin: 25px 35px;
    padding: 10px 25px;
    border-radius: ${e=>e.theme.utils.borderRadius};
    position: absolute;
    text-transform: capitalize;
    z-index: 1;
`,Te=u.ZP.span`
        div.Image {
            font-size: 40px;
            width: 80px;
            height: 80px;
            border-radius: 50%;
            background-image: linear-gradient(70deg, ${e=>e.theme.color.bg[0]}, ${e=>e.theme.color.bg[1]});
            box-shadow: ${e=>e.theme.utils.boxShadow};
            border: solid 2px ${e=>e.theme.color.icon};
            position: absolute;
            z-index: 2;
            div {
               text-transform: capitalize;
               transform: translate(25%, 15%);
            }
        }
`;var Ae=({avatar:e,name:t})=>r.createElement(r.Fragment,null,e?r.createElement(xe,null,r.createElement("div",null,r.createElement(Re,{src:e,alt:"your picture"})),r.createElement(Ze,null,"Welcome ",t," !")):r.createElement(Te,null,r.createElement(xe,null,r.createElement("div",{className:"Image"},r.createElement("div",null,r.createElement(B.Xws,null))),r.createElement(Ze,null,"Welcome ",t," !"))));const ze=u.ZP.div`
    @keyframes Show {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
    animation: Show 0.6s ease-in;
    color: ${e=>e.theme.color.icon};
    display: grid;
    grid-template-rows: 1.5fr 1fr;
    padding: 20px;
    margin: 30px;
    background: ${e=>e.theme.color.bg[0]};
    box-shadow: ${e=>e.theme.utils.boxShadow};
    background-image: linear-gradient(70deg,${e=>e.theme.color.bg[0]}, ${e=>e.theme.color.bg[1]});
    border-radius: ${e=>e.theme.utils.borderRadius};
    @media(max-width : ${F[0]}) {
        margin: 10px 40px;
    }
    h2 {
        text-align: center;
    }
`,De=u.ZP.img`
    width: 35px;
    height: 35px;
    transform: translate(5px, 11px);
`,Le=u.ZP.div`
   margin: 80px 0px;
   h3 {
     margin: 10px;
   }
`;var We=({ID:e,icon:t,title:n,email:o,signature:a,avatar:l,name:i})=>{const c=V();return r.createElement(ze,null,r.createElement("h2",null,t," ",n),r.createElement(Ae,{avatar:l,name:i}),r.createElement(Le,null,r.createElement("h3",null,"Signature :   ",a,r.createElement(De,{src:c(),alt:c()})),r.createElement("h3",null,"Email :   ",o)),r.createElement(xe,{justContent:"end"},r.createElement(oe,{onClick:()=>{return e=void 0,t=void 0,r=function*(){yield chrome.storage.local.remove(["token"]),chrome.runtime.reload()},new((n=void 0)||(n=Promise))((function(o,a){function l(e){try{c(r.next(e))}catch(e){a(e)}}function i(e){try{c(r.throw(e))}catch(e){a(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(l,i)}c((r=r.apply(e,t||[])).next())}));var e,t,n,r}},r.createElement(Pe.lE7,null))))};const _e=u.ZP.button`
    transition: 0.7s ease;
    padding: 15px;
    font-weight: bold;
    font-family: sans-serif;
    box-shadow: ${e=>e.theme.utils.boxShadow};
    border-radius: ${e=>e.theme.utils.borderRadius};
    border: solid 2px ${e=>e.theme.color.icon};
    cursor: pointer;
    color: ${e=>e.theme.color.icon};
    background: linear-gradient(70deg, ${e=>e.theme.color.bg[0]}, ${e=>e.theme.color.bg[1]});
    svg {
        font-size: 24px;
        margin: -7px 5px;
    }

    &:hover {
        transition: 0.7s ease;
        transform: scale(1.2);
        color: ${e=>e.theme.color.purple};
        border: solid 2px ${e=>e.theme.color.purple};
    }
`,Be=u.ZP.div`
    display: flex;
    justify-content: center;
    button {
        color : ${e=>e.theme.color.icon};
        padding: 8px;
        border-radius: ${e=>e.theme.utils.borderRadius};
        background: ${e=>e.theme.color.bg[0]};
        border: solid 2px;
        margin: 5px;
        font-size: 20px;
        cursor: pointer;

        svg {
            transform: translate(0px, 2px);
        }

        &:hover {
            transition: 0.5s;
            opacity: 0.5;
        }
    }
    button.selected {
        color: ${e=>e.theme.color.red};
    }
`;var Me=()=>{const{member:e}=w(),{isOpen:t,setIsOpen:n}=te(),{WindowConfig:o}=M(),[a,l]=r.useState({google:!0,patreon:!1}),c=()=>{chrome.storage.local.get(null,(({token:e})=>{return t=void 0,n=void 0,a=function*(){const{data:t}=yield i(e).get("/oauth/patreon"),n=t.PatreonOauth.Href;window.open(n,"Oauth",o)},new((r=void 0)||(r=Promise))((function(e,o){function l(e){try{c(a.next(e))}catch(e){o(e)}}function i(e){try{c(a.throw(e))}catch(e){o(e)}}function c(t){var n;t.done?e(t.value):(n=t.value,n instanceof r?n:new r((function(e){e(n)}))).then(l,i)}c((a=a.apply(t,n||[])).next())}));var t,n,r,a}))};if(e){const{avatar:o,email:i,name:s,patreon:m,signature:u,Google_id:d}=e;return r.createElement(de,null,r.createElement(we,{onClose:()=>n(Object.assign(Object.assign({},t),{profile:!1}))},r.createElement(B.Xws,null)," Your Profiles"),r.createElement(Be,null,r.createElement("button",{className:a.google?"selected":"",onClick:()=>l(Object.assign(Object.assign({},a),{google:!0,patreon:!1}))},r.createElement(B.ldW,null)),r.createElement("button",{className:a.patreon?"selected":"",onClick:()=>l(Object.assign(Object.assign({},a),{patreon:!0,google:!1}))},r.createElement(B.oKc,null))),a.google&&r.createElement(We,{icon:r.createElement(B.ldW,{style:{transform:"translate(4px, 2px)"}}),title:"oogle",avatar:o,name:s,email:i,signature:u}),m?!!a.patreon&&r.createElement(We,{icon:r.createElement(B.oKc,null),title:"Patreon",avatar:m.image_url,name:m.first_name,email:m.email,signature:u}):!!a.patreon&&r.createElement("div",{style:{textAlign:"center",marginTop:"30%"}},r.createElement(_e,{onClick:c},r.createElement(B.oKc,null)," Register Patreon")))}return r.createElement(r.Fragment,null)},Ne=()=>{const{right:e,left:t}=J(),{isOpen:n,setIsOpen:o}=te(),{color:a,title:l}=(0,u.Fg)(),{ChangeTheme:i}=(()=>{const{ChangeTheme:e,setTheme:t,theme:n}=r.useContext(p);return{ChangeTheme:e,setTheme:t,theme:n}})(),{WindowConfig:c}=M();return r.createElement(ne,null,n.tools&&r.createElement(je,null),n.profile&&r.createElement(Me,null),r.createElement(xe,{justContent:"center"},r.createElement(oe,{title:"Back",color:a.green,onClick:t},r.createElement(B.x_l,null)),r.createElement(oe,{title:"Shop",onClick:()=>{window.open("https://imagetracker.org/signatures","Shop",c)},color:a.red},r.createElement(ee.kdn,null)),r.createElement(oe,{title:"Tools",onClick:()=>o(Object.assign(Object.assign({},n),{tools:!0})),color:a.green},r.createElement(B.CP_,null)),r.createElement(oe,{title:"Profile",onClick:()=>o(Object.assign(Object.assign({},n),{profile:!0})),color:a.green},r.createElement(B.Xws,null)),r.createElement(oe,{color:"dark"===l?a.yellow:a.purple,onClick:()=>i()},"dark"===l?r.createElement(B.Mei,null):r.createElement(B.TLr,null)),r.createElement(oe,{title:"Next",color:a.green,onClick:e},r.createElement(B.Z1Y,null))))};const Ue=u.ZP.div`
    display: flex;
    justify-content: center;
`,Ge=u.ZP.h1`
    padding: 10px;
    color:${e=>e.theme.color.icon};
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
`,Ke=u.ZP.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin: 5px 0px 0px 0px;
`;var Ye=({children:e,src:t})=>r.createElement(Ue,null,t&&r.createElement(Ke,{src:t}),r.createElement(Ge,null,e)),Je=()=>{const{IsFallBack:e,PaginationImages:t}=J(),{isAuth:n}=w(),o=V(),a=(0,P.s0)();return r.useEffect((()=>{n||a("/")}),[n]),e.Storage?r.createElement(Q,null):r.createElement(r.Fragment,null,r.createElement(Ye,{src:o()},"Image Tracker"),r.createElement(H,null,t[0]?t.map((({blob:e,alt:t,id:n})=>r.createElement(Y,{src:URL.createObjectURL(e),alt:t,id:n,key:n}))):r.createElement(A,{title:"There are no images to show",describe:"Scroll down to get the photos from the website "})),t[0]&&r.createElement(Ne,null))};const Xe=u.ZP.form`
    background-image: linear-gradient(70deg,${e=>e.theme.color.bg[0]}, ${e=>e.theme.color.bg[1]});
    box-shadow: ${e=>e.theme.utils.boxShadow};
    border-radius: ${e=>e.theme.utils.borderRadius};
    padding: 15px;
    min-width: 50%;
    min-height: 50%;
    max-width: 60%;
    max-height: 60%;
    transform: translate(40vh, 40vh);
    text-align: center;
    color: ${e=>e.theme.color.icon};

    @media(max-width: ${F[0]}){
        transform: translate(21vh, 30vh);
    }

    p{
        font-size: 0.7rem;
    }
    img {
        display: block;
        margin-left: auto;
        margin-right: auto;
        max-width: 75px;
        max-height: 75px;
        margin-top: 5px;
        margin-bottom: 5px;
    }
    input {
        color: ${e=>e.theme.color.icon};
        padding: 8px;
        margin: 10px 15%;
        border-radius: ${e=>e.theme.utils.borderRadius};
        outline-color: ${e=>e.theme.color.cyan};
        background: ${e=>e.theme.color.bg[0]};
    }
    button {
        transition: 0.7s ease;
        padding: 15px;
        font-weight: bold;
        font-family: sans-serif;
        box-shadow: ${e=>e.theme.utils.boxShadow};
        border-radius: ${e=>e.theme.utils.borderRadius};
        border: solid 2px ${e=>e.theme.color.icon};
        cursor: pointer;
        svg {
            font-size: 24px;
            margin: -7px 5px;
        }

        &:hover {
            transition: 0.7s ease;
            transform: scale(1.2);
        }
    }

    button.Login {
        color: ${e=>e.theme.color.icon};
        background: ${e=>e.theme.color.bg[0]};
        margin: 10px 15%;
    }

    button.Google {
        color: ${e=>e.theme.color.icon};
        background: linear-gradient(70deg, ${e=>e.theme.color.bg[0]}, ${e=>e.theme.color.bg[1]});
        
        margin: 10px 15%;

        &:hover {
            transition: 0.7s ease;
            color: ${e=>e.theme.color.red};
            border: solid 2px ${e=>e.theme.color.red};
        }
    }

    button.Git {
        color: ${e=>e.theme.color.icon};
        background: ${e=>e.theme.color.bg[0]};
        margin: 10px 15%;
    }

    button.Instagram {
        color: ${e=>e.theme.color.icon};
        background-image: linear-gradient(70deg, ${e=>e.theme.color.red}, ${e=>e.theme.color.purple});
        margin: 10px 15%;
    }

    button.Recovery {
        color: ${e=>e.theme.color.icon};
        background: ${e=>e.theme.color.bg[0]};
        margin: 10px;
    }

    button.SignUp {
        color: ${e=>e.theme.color.icon};
        background: ${e=>e.theme.color.bg[0]};
        margin: 10px;
    }
`;var He=({children:e,onSubmit:t})=>r.createElement(Xe,{onSubmit:t},e),Ve=()=>{const{isAuth:e}=w(),t=(0,P.s0)(),{WindowConfig:n}=M();return r.useEffect((()=>{e&&t("/popup.html")}),[e]),r.createElement(r.Fragment,null,!e&&r.createElement(He,{onSubmit:e=>(e=>{return t=void 0,r=void 0,a=function*(){e.preventDefault();const{data:t}=yield i().get("/oauth/google"),r=t.GoogleOauth.href;window.open(r,"Oauth",n)},new((o=void 0)||(o=Promise))((function(e,n){function l(e){try{c(a.next(e))}catch(e){n(e)}}function i(e){try{c(a.throw(e))}catch(e){n(e)}}function c(t){var n;t.done?e(t.value):(n=t.value,n instanceof o?n:new o((function(e){e(n)}))).then(l,i)}c((a=a.apply(t,r||[])).next())}));var t,r,o,a})(e)},r.createElement(xe,{direction:"column"},r.createElement("img",{src:"img/logo-vermelho.png"}),r.createElement(he,null,r.createElement("h2",null,"Image Tracker Log in"),r.createElement("button",{type:"submit",className:"Google"},r.createElement(B.ldW,null)," Continue with Google")))))},qe=()=>r.createElement(I.VK,null,r.createElement(O,null,r.createElement(R,null),r.createElement(P.Z5,null,r.createElement(P.AW,{path:"/",element:r.createElement(Ve,null)}),r.createElement(P.AW,{path:"/popup.html",element:r.createElement(Je,null)}),r.createElement(P.AW,{path:"*",element:r.createElement(Ve,null)}))));const Qe=document.createElement("div");Qe.id="root";const et=document.createElement("div");et.id="portal",document.body.append(et),document.body.append(Qe),o.s(Qe).render(r.createElement((()=>r.createElement(r.StrictMode,null,r.createElement(qe,null))),null))}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var a=n[e]={exports:{}};return t[e].call(a.exports,a,a.exports,r),a.exports}r.m=t,e=[],r.O=function(t,n,o,a){if(!n){var l=1/0;for(m=0;m<e.length;m++){n=e[m][0],o=e[m][1],a=e[m][2];for(var i=!0,c=0;c<n.length;c++)(!1&a||l>=a)&&Object.keys(r.O).every((function(e){return r.O[e](n[c])}))?n.splice(c--,1):(i=!1,a<l&&(l=a));if(i){e.splice(m--,1);var s=o();void 0!==s&&(t=s)}}return t}a=a||0;for(var m=e.length;m>0&&e[m-1][2]>a;m--)e[m]=e[m-1];e[m]=[n,o,a]},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,{a:t}),t},r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},function(){var e={42:0};r.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,a,l=n[0],i=n[1],c=n[2],s=0;if(l.some((function(t){return 0!==e[t]}))){for(o in i)r.o(i,o)&&(r.m[o]=i[o]);if(c)var m=c(r)}for(t&&t(n);s<l.length;s++)a=l[s],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(m)},n=self.webpackChunkapp=self.webpackChunkapp||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var o=r.O(void 0,[276,35],(function(){return r(7438)}));o=r.O(o)}();