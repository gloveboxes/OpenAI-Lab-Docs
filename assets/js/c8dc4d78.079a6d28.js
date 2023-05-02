"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[113],{4137:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=p(n),d=a,k=c["".concat(u,".").concat(d)]||c[d]||m[d]||i;return n?r.createElement(k,l(l({ref:t},s),{},{components:n})):r.createElement(k,l({ref:t},s))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[c]="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4650:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=n(7462),a=(n(7294),n(4137));const i={sidebar_position:0},l="Workshop Outline",o={unversionedId:"0b-Outline",id:"0b-Outline",title:"Workshop Outline",description:"Get Started with the Azure OpenAI Studio",source:"@site/docs/0b-Outline.md",sourceDirName:".",slug:"/0b-Outline",permalink:"/OpenAI-Lab-Docs/0b-Outline",draft:!1,editUrl:"https://github.com/newpatiente2e/docs/tree/main/docs/0b-Outline.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/OpenAI-Lab-Docs/"},next:{title:"Workshop Setup",permalink:"/OpenAI-Lab-Docs/0c-Setup"}},u={},p=[{value:"Get Started with the Azure OpenAI Studio",id:"get-started-with-the-azure-openai-studio",level:2},{value:"Completions",id:"completions",level:3},{value:"Chat",id:"chat",level:3},{value:"Responsible use of Generative AI",id:"responsible-use-of-generative-ai",level:3},{value:"Using the API",id:"using-the-api",level:3},{value:"Extra Credit",id:"extra-credit",level:3}],s={toc:p},c="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"workshop-outline"},"Workshop Outline"),(0,a.kt)("h2",{id:"get-started-with-the-azure-openai-studio"},"Get Started with the Azure OpenAI Studio"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'Model Zoo: Exploring the "models" section')),(0,a.kt)("h3",{id:"completions"},"Completions"),(0,a.kt)("p",null,"Use the ",(0,a.kt)("inlineCode",{parentName:"p"},"text-davinci-003")," model to explore completions. This is the same model as ",(0,a.kt)("inlineCode",{parentName:"p"},"GPT-3"),", provided by OpenAI. Observe:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Completions as natural language text"),(0,a.kt)("li",{parentName:"ul"},"Novel creations",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Translations example"),(0,a.kt)("li",{parentName:"ul"},"Generate a quiz example"))),(0,a.kt)("li",{parentName:"ul"},"Random responses",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},'"I climbed the tree and picked a"'),(0,a.kt)("li",{parentName:"ul"},"Regenerate button"),(0,a.kt)("li",{parentName:"ul"},"Effect of Temperature parameter"))),(0,a.kt)("li",{parentName:"ul"},"Accuracy",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},'"When did Queen Elizabeth II die"'))),(0,a.kt)("li",{parentName:"ul"},"Hallucination / confabulation",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Max length (tokens) parameter"),(0,a.kt)("li",{parentName:"ul"},'"Write an obituary for..."'))),(0,a.kt)("li",{parentName:"ul"},"Black box nature / lack of memory",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},'"Hello, my name is"')))),(0,a.kt)("h3",{id:"chat"},"Chat"),(0,a.kt)("p",null,"Use the ",(0,a.kt)("inlineCode",{parentName:"p"},"gpt-35-turbo")," model to explore a chat experience. This is the same model as ",(0,a.kt)("inlineCode",{parentName:"p"},"ChatGPT")," provided by OpenAI."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Understanding tokens (token count)"),(0,a.kt)("li",{parentName:"ul"},'Ungrounded chat experience - how "memory" works',(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},'Use of "past messages included" option'),(0,a.kt)("li",{parentName:"ul"},"Look at JSON/code to see actual prompt"))),(0,a.kt)("li",{parentName:"ul"},"Grounding: Assistant Setup"),(0,a.kt)("li",{parentName:"ul"},"Grounding: Few-Shot examples")),(0,a.kt)("h3",{id:"responsible-use-of-generative-ai"},"Responsible use of Generative AI"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Code of Conduct")),(0,a.kt)("h3",{id:"using-the-api"},"Using the API"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Finding the API key"),(0,a.kt)("li",{parentName:"ul"},"Generate code as curl"),(0,a.kt)("li",{parentName:"ul"},"Run code in Cloud Shell"),(0,a.kt)("li",{parentName:"ul"},"Interpreting JSON output")),(0,a.kt)("h3",{id:"extra-credit"},"Extra Credit"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Using the openai python package"),(0,a.kt)("li",{parentName:"ul"},"Using Bing Chat (if you have access)")))}m.isMDXComponent=!0}}]);