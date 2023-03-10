"use strict";(self.webpackChunkmin_three=self.webpackChunkmin_three||[]).push([[7368],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>b});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),m=a,b=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(b,i(i({ref:t},p),{},{components:r})):n.createElement(b,i({ref:t},p))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5879:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:2},i="Viewer Objects",s={unversionedId:"tutorial-basics/viewer-objects",id:"tutorial-basics/viewer-objects",title:"Viewer Objects",description:"ThreeDViewer lets you create CSS3DObjects by taking SVG data in the form of string or url. As of the latetst version of minthreed ThreeDViewer takes only SVG data as input, this will improved and refined in the later versions of minthreed. ThreeDViewer runs on CSS3DRenderer so every object in the scene will be translated to CSS3DObjects.",source:"@site/docs/tutorial-basics/viewer-objects.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/viewer-objects",permalink:"/docs/tutorial-basics/viewer-objects",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial-basics/viewer-objects.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"All about Scenes",permalink:"/docs/tutorial-basics/viewer-scene"},next:{title:"Object Controls",permalink:"/docs/tutorial-basics/object-controls"}},l={},c=[{value:"Adding Objects",id:"adding-objects",level:2},{value:"Viewer Object Model",id:"viewer-object-model",level:2},{value:"Remove Object",id:"remove-object",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"viewer-objects"},"Viewer Objects"),(0,a.kt)("p",null,"ThreeDViewer lets you create ",(0,a.kt)("strong",{parentName:"p"},"CSS3DObjects")," by taking SVG data in the form of string or url. As of the latetst version of ",(0,a.kt)("strong",{parentName:"p"},"minthreed")," ThreeDViewer takes only SVG data as input, this will improved and refined in the later versions of ",(0,a.kt)("strong",{parentName:"p"},"minthreed"),". ThreeDViewer runs on ",(0,a.kt)("strong",{parentName:"p"},"CSS3DRenderer")," so every object in the scene will be translated to ",(0,a.kt)("strong",{parentName:"p"},"CSS3DObjects"),"."),(0,a.kt)("h2",{id:"adding-objects"},"Adding Objects"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ThreeDViewer.addObj()")," lets you add objects to the ",(0,a.kt)("inlineCode",{parentName:"p"},"ThreeDViewer")," Scene. We can pass the object data as string or as URL to the file. ",(0,a.kt)("inlineCode",{parentName:"p"},"addObj()")," takes an object as input of the type ",(0,a.kt)("inlineCode",{parentName:"p"},"{name: string, type: 'str'|'url', data: string, position:{x: number, y: number}, invert: boolean}"),"."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"name"),' - name of the object (default is "sample").'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"type"),' - "url" or "str".'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"data")," - File path or Object string."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"position")," - {x,y,z} positon of object.(Default is {0,0,0})."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"invert")," - Takes a boolean value, wether to invert the object or not.(Default is false).")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'viewer.addObj({name:"sample",type:"url",data:"box.svg",position:{x:1,y:1,z:2},invert:false})\n')),(0,a.kt)("p",null,"Refer ",(0,a.kt)("a",{parentName:"p",href:"/docs/tutorial-basics/viewer-scene"},"All about Scenes")," before adding objects."),(0,a.kt)("h2",{id:"viewer-object-model"},"Viewer Object Model"),(0,a.kt)("p",null,"Every object that is added to the scene first gets added to a ThreeJs Group. When the ",(0,a.kt)("inlineCode",{parentName:"p"},"ThreeDViewer.start()")," function is called the group gets added the the scene, because of this the object controls gets applied to the group and not the induvidual object. This feature will be updated in later versions. ",(0,a.kt)("inlineCode",{parentName:"p"},"ThreeDViewer.summary()")," returns summary of the scene and logs it."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"viewer.summary()\n")),(0,a.kt)("h2",{id:"remove-object"},"Remove Object"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ThreeDViewer.removeObj()")," takes the name of the object as input and removes it from the ",(0,a.kt)("inlineCode",{parentName:"p"},"ThreeDViewer.group"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'viewer.removeObj("sample");\n')))}d.isMDXComponent=!0}}]);