(window.webpackJsonp=window.webpackJsonp||[]).push([[56,10,21],{401:function(t,e,n){var o=n(18),r="["+n(402)+"]",l=RegExp("^"+r+r+"*"),c=RegExp(r+r+"*$"),d=function(t){return function(e){var n=String(o(e));return 1&t&&(n=n.replace(l,"")),2&t&&(n=n.replace(c,"")),n}};t.exports={start:d(1),end:d(2),trim:d(3)}},402:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},403:function(t,e,n){"use strict";var o=n(10),r=n(4),l=n(81),c=n(14),d=n(12),v=n(35),h=n(160),_=n(57),f=n(5),m=n(59),y=n(58).f,C=n(25).f,w=n(13).f,T=n(401).trim,x="Number",S=r.Number,E=S.prototype,I=v(m(E))==x,N=function(t){var e,n,o,r,l,c,d,code,v=_(t,!1);if("string"==typeof v&&v.length>2)if(43===(e=(v=T(v)).charCodeAt(0))||45===e){if(88===(n=v.charCodeAt(2))||120===n)return NaN}else if(48===e){switch(v.charCodeAt(1)){case 66:case 98:o=2,r=49;break;case 79:case 111:o=8,r=55;break;default:return+v}for(c=(l=v.slice(2)).length,d=0;d<c;d++)if((code=l.charCodeAt(d))<48||code>r)return NaN;return parseInt(l,o)}return+v};if(l(x,!S(" 0o1")||!S("0b1")||S("+0x1"))){for(var A,k=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof k&&(I?f((function(){E.valueOf.call(n)})):v(n)!=x)?h(new S(N(e)),n,k):N(e)},O=o?y(S):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),D=0;O.length>D;D++)d(S,A=O[D])&&!d(k,A)&&w(k,A,C(S,A));k.prototype=E,E.constructor=k,c(r,x,k)}},404:function(t,e,n){"use strict";n.r(e);n(45),n(403),n(26),n(36),n(82),n(112),n(43),n(46),n(161),n(60),n(159),n(83),n(44);var o={name:"CollapseTransition",props:{name:{type:String,required:!1,default:"collapse"},dimension:{type:String,required:!1,default:"height",validator:function(t){return["height","width"].includes(t)}},duration:{type:Number,required:!1,default:300},easing:{type:String,required:!1,default:"ease-in-out"}},watch:{dimension:function(){this.clearCachedDimensions()}},data:function(){return{cachedStyles:null}},computed:{transition:function(){var t=this,e=[];return Object.keys(this.cachedStyles).forEach((function(n){e.push("".concat(t.convertToCssProperty(n)," ").concat(t.duration,"ms ").concat(t.easing))})),e.join(", ")}},methods:{enter:function(t,e){this.detectAndCacheDimensions(t),this.setClosedDimensions(t),this.hideOverflow(t),this.forceRepaint(t),this.setTransition(t),this.setOpenedDimensions(t),setTimeout(e,this.duration)},afterEnter:function(t){this.unsetOverflow(t),this.unsetTransition(t),this.unsetDimensions(t),this.clearCachedDimensions()},leave:function(t,e){this.detectAndCacheDimensions(t),this.setOpenedDimensions(t),this.hideOverflow(t),this.forceRepaint(t),this.setTransition(t),this.setClosedDimensions(t),setTimeout(e,this.duration)},afterLeave:function(t){this.unsetOverflow(t),this.unsetTransition(t),this.unsetDimensions(t),this.clearCachedDimensions()},detectAndCacheDimensions:function(t){if(!this.cachedStyles){var e=t.style.visibility,n=t.style.display;t.style.visibility="hidden",t.style.display="",this.cachedStyles=this.detectRelevantDimensions(t),t.style.visibility=e,t.style.display=n}},clearCachedDimensions:function(){this.cachedStyles=null},detectRelevantDimensions:function(t){return"height"===this.dimension?{height:t.offsetHeight+"px",paddingTop:t.style.paddingTop||this.getCssValue(t,"padding-top"),paddingBottom:t.style.paddingBottom||this.getCssValue(t,"padding-bottom")}:"width"===this.dimension?{width:t.offsetWidth+"px",paddingLeft:t.style.paddingLeft||this.getCssValue(t,"padding-left"),paddingRight:t.style.paddingRight||this.getCssValue(t,"padding-right")}:{}},setTransition:function(t){t.style.transition=this.transition},unsetTransition:function(t){t.style.transition=""},hideOverflow:function(t){t.style.overflow="hidden"},unsetOverflow:function(t){t.style.overflow=""},setClosedDimensions:function(t){Object.keys(this.cachedStyles).forEach((function(e){t.style[e]="0"}))},setOpenedDimensions:function(t){var e=this;Object.keys(this.cachedStyles).forEach((function(n){t.style[n]=e.cachedStyles[n]}))},unsetDimensions:function(t){Object.keys(this.cachedStyles).forEach((function(e){t.style[e]=""}))},forceRepaint:function(t){getComputedStyle(t)[this.dimension]},getCssValue:function(t,style){return getComputedStyle(t,null).getPropertyValue(style)},convertToCssProperty:function(style){var t=style.match(/([A-Z])/g);if(!t)return style;for(var i=0,e=t.length;i<e;i++)style=style.replace(new RegExp(t[i]),"-"+t[i].toLowerCase());return"-"===style.slice(0,1)&&(style=style.slice(1)),style}}},r=n(8),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("transition",{attrs:{name:t.name},on:{enter:t.enter,"after-enter":t.afterEnter,leave:t.leave,"after-leave":t.afterLeave}},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},405:function(t,e,n){"use strict";var o=n(2),r=n(401).trim;o({target:"String",proto:!0,forced:n(406)("trim")},{trim:function(){return r(this)}})},406:function(t,e,n){var o=n(5),r=n(402);t.exports=function(t){return o((function(){return!!r[t]()||"​᠎"!="​᠎"[t]()||r[t].name!==t}))}},407:function(t,e,n){"use strict";n.r(e);n(405),n(112);var o={props:{title:String,classes:String,nocode:Boolean},data:function(){return{sourcecode:"",showcode:!1}},methods:{setSrc:function(){function t(e,n){for(var o,r=new Array(1+n++).join("  "),l=new Array(n-1).join("  "),i=0;i<e.children.length;i++)o=document.createTextNode("\n"+r),e.insertBefore(o,e.children[i]),t(e.children[i],n),e.lastElementChild==e.children[i]&&(o=document.createTextNode("\n"+l),e.appendChild(o));return e}var e,div;this.sourcecode=(e=this.$refs.component.innerHTML,(div=document.createElement("div")).innerHTML=e.trim()+"\n",t(div,0).innerHTML)}},mounted:function(){this.setSrc()}},r=n(8),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"py-2"},[n("div",{staticClass:"pt-4 text-xs capitalize opacity-60"},[t._v("\n    "+t._s(t.title)+"\n  ")]),t._v(" "),t.nocode?t._e():n("div",{staticClass:"mt-2 text-xs tabs"},[n("div",{staticClass:"tab tab-lifted",class:{"tab-active":!t.showcode},on:{click:function(e){t.showcode=!1}}},[t._v("Preview")]),t._v(" "),n("div",{staticClass:"tab tab-lifted",class:{"tab-active":t.showcode},on:{click:function(e){t.showcode=!0}}},[t._v("HTML")]),t._v(" "),n("div",{staticClass:"flex-1 cursor-default tab tab-lifted"})]),t._v(" "),n("div",[n("collapse-transition",[!t.nocode&&t.showcode?n("div",{staticClass:"pt-2"},[n("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:t.sourcecode,expression:"sourcecode"}],attrs:{id:"myInput"}},[n("code",{staticClass:"h-64 p-4 font-mono text-xs rounded-lg html"})])]):t._e()]),t._v(" "),n("collapse-transition",[t.showcode?t._e():n("div",{staticClass:"pt-2"},[n("div",{ref:"component",class:t.classes},[t._t("default")],2)])])],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CollapseTransition:n(404).default})},463:function(t,e,n){"use strict";n.r(e);var o=n(8),component=Object(o.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._m(0),t._v(" "),n("div",{staticClass:"prose text-base-content"},[n("Wrapper",{attrs:{nocode:""}},[n("p",[t._v("You should use official "),n("a",{attrs:{target:"_blank",href:"https://github.com/tailwindlabs/tailwindcss-typography"}},[t._v("TailwindCSS Typography")]),t._v(" plugin.\n      It handles everything and it's fully customizable")]),t._v(" "),n("p",[t._v("You can see demo elements below:")])]),t._v(" "),n("Wrapper",{attrs:{title:"headings",nocode:""}},[n("h1",[t._v("Heading")]),t._v(" "),n("h2",[t._v("Heading")]),t._v(" "),n("h3",[t._v("Heading")]),t._v(" "),n("h4",[t._v("Heading")]),t._v(" "),n("h5",[t._v("Heading")]),t._v(" "),n("h6",[t._v("Heading")])]),t._v(" "),n("Wrapper",{attrs:{title:"paragraph",nocode:""}},[n("p",[t._v("\n        Inventore non totam deserunt est alias ducimus. Corrupti quidem debitis\n        quo corrupti et laborum totam. Ut aperiam et delectus aliquam nulla\n        magnam quis perspiciatis.\n      ")])]),t._v(" "),n("Wrapper",{attrs:{title:"quote",nocode:""}},[n("blockquote",[t._v("\n        Inventore non totam deserunt est alias ducimus. Corrupti quidem debitis\n        quo corrupti et laborum totam. Ut aperiam et delectus aliquam nulla\n        magnam quis perspiciatis.\n      ")])]),t._v(" "),n("Wrapper",{attrs:{title:"link",nocode:""}},[n("blockquote",[t._v("Hello, "),n("a",{attrs:{href:"#"}},[t._v("This is a link")]),t._v(".")])]),t._v(" "),n("Wrapper",{attrs:{title:"code",nocode:""}},[n("pre",[n("code",[t._v("Inventore non totam deserunt est alias ducimus. Corrupti quidem debitis\nquo corrupti et laborum totam. Ut aperiam et delectus aliquam nulla\nmagnam quis perspiciatis.")])])]),t._v(" "),n("Wrapper",{attrs:{title:"text decorators",nocode:""}},[n("p",[t._v("You can use the mark tag to "),n("mark",[t._v("highlight")]),t._v(" text.")]),t._v(" "),n("p",[n("del",[t._v("This line of text is meant to be treated as deleted text.")])]),t._v(" "),n("p",[n("s",[t._v("This line of text is meant to be treated as no longer accurate.")])]),t._v(" "),n("p",[n("ins",[t._v("This line of text is meant to be treated as an addition to the\n          document.")])]),t._v(" "),n("p",[n("u",[t._v("This line of text will render as underlined")])]),t._v(" "),n("p",[n("small",[t._v("This line of text is meant to be treated as fine print.")])]),t._v(" "),n("p",[n("strong",[t._v("This line rendered as bold text.")])]),t._v(" "),n("p",[n("em",[t._v("This line rendered as italicized text.")])]),t._v(" "),n("p",[n("abbr",{attrs:{title:"attribute"}},[t._v("attr")])]),t._v(" "),n("p",[n("abbr",{staticClass:"initialism",attrs:{title:"HyperText Markup Language"}},[t._v("HTML")])])]),t._v(" "),n("Wrapper",{attrs:{title:"list",nocode:""}},[n("ul",{staticClass:"list-unstyled"},[n("li",[t._v("Lorem ipsum dolor sit amet")]),t._v(" "),n("li",[t._v("Consectetur adipiscing elit")]),t._v(" "),n("li",[t._v("Integer molestie lorem at massa")]),t._v(" "),n("li",[t._v("Facilisis in pretium nisl aliquet")]),t._v(" "),n("li",[t._v("\n          Nulla volutpat aliquam velit\n          "),n("ul",[n("li",[t._v("Phasellus iaculis neque")]),t._v(" "),n("li",[t._v("Purus sodales ultricies")]),t._v(" "),n("li",[t._v("Vestibulum laoreet porttitor sem")]),t._v(" "),n("li",[t._v("Ac tristique libero volutpat at")])])]),t._v(" "),n("li",[t._v("Faucibus porta lacus fringilla vel")]),t._v(" "),n("li",[t._v("Aenean sit amet erat nunc")]),t._v(" "),n("li",[t._v("Eget porttitor lorem")])])]),t._v(" "),n("Wrapper",{attrs:{title:"list nesting",nocode:""}},[n("ol",[n("li",[n("strong",[t._v("Nested lists are rarely a good idea.")]),t._v(" "),n("ul",[n("li",[t._v('\n              You might feel like you are being really "organized" or something\n              but you are just creating a gross shape on the screen that is hard\n              to read.\n            ')]),t._v(" "),n("li",[t._v("\n              Nested navigation in UIs is a bad idea too, keep things as flat as\n              possible.\n            ")]),t._v(" "),n("li",[t._v("\n              Nesting tons of folders in your source code is also not helpful.\n            ")])])]),t._v(" "),n("li",[n("strong",[t._v("Since we need to have more items, here's another one.")]),t._v(" "),n("ul",[n("li",[t._v("\n              I'm not sure if we'll bother styling more than two levels deep.\n            ")]),t._v(" "),n("li",[t._v("\n              Two is already too much, three is guaranteed to be a bad idea.\n            ")]),t._v(" "),n("li",[t._v("If you nest four levels deep you belong in prison.")])])]),t._v(" "),n("li",[n("strong",[t._v("Two items isn't really a list, three is good though.")]),t._v(" "),n("ul",[n("li",[t._v("\n              Again please don't nest lists if you want people to actually read\n              your content.\n            ")]),t._v(" "),n("li",[t._v("Nobody wants to look at this.")]),t._v(" "),n("li",[t._v("I'm upset that we even have to bother styling this.")])])])])]),t._v(" "),n("Wrapper",{attrs:{title:"image",nocode:""}},[n("figure",[n("img",{attrs:{src:"https://images.unsplash.com/photo-1556740758-90de374c12ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80",alt:""}}),t._v(" "),n("figcaption",[t._v("\n          Contrary to popular belief, Lorem Ipsum is not simply random text. It\n          has roots in a piece of classical Latin literature from 45 BC, making\n          it over 2000 years old.\n        ")])])]),t._v(" "),n("Wrapper",{attrs:{title:"table",nocode:""}},[n("table",[n("thead",[n("tr",[n("th",[t._v("Wrestler")]),t._v(" "),n("th",[t._v("Origin")]),t._v(" "),n("th",[t._v("Finisher")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v('Bret "The Hitman" Hart')]),t._v(" "),n("td",[t._v("Calgary, AB")]),t._v(" "),n("td",[t._v("Sharpshooter")])]),t._v(" "),n("tr",[n("td",[t._v("Stone Cold Steve Austin")]),t._v(" "),n("td",[t._v("Austin, TX")]),t._v(" "),n("td",[t._v("Stone Cold Stunner")])]),t._v(" "),n("tr",[n("td",[t._v("Randy Savage")]),t._v(" "),n("td",[t._v("Sarasota, FL")]),t._v(" "),n("td",[t._v("Elbow Drop")])]),t._v(" "),n("tr",[n("td",[t._v("Vader")]),t._v(" "),n("td",[t._v("Boulder, CO")]),t._v(" "),n("td",[t._v("Vader Bomb")])]),t._v(" "),n("tr",[n("td",[t._v("Razor Ramon")]),t._v(" "),n("td",[t._v("Chuluota, FL")]),t._v(" "),n("td",[t._v("Razor's Edge")])])])])])],1)])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",{staticClass:"my-6 text-5xl font-bold"},[n("span",{staticClass:"text-primary"},[t._v("Typography")])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Wrapper:n(407).default})}}]);