(window.webpackJsonp=window.webpackJsonp||[]).push([[6,4],{372:function(n,t,e){var content=e(384);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,e(79).default)("1930a9a0",content,!0,{sourceMap:!1})},383:function(n,t,e){"use strict";e(372)},384:function(n,t,e){var r=e(78)(!1);r.push([n.i,"\n.NuxtLogo {\n  animation: 1s appear;\n  margin: auto;\n}\n@keyframes appear {\n0% {\n    opacity: 0;\n}\n}\n",""]),n.exports=r},531:function(n,t,e){var content=e(558);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,e(79).default)("1b7833da",content,!0,{sourceMap:!1})},533:function(n,t,e){"use strict";e.r(t);e(383);var r=e(46),component=Object(r.a)({},(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("svg",{staticClass:"NuxtLogo",attrs:{width:"245",height:"180",viewBox:"0 0 452 342",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M139 330l-1-2c-2-4-2-8-1-13H29L189 31l67 121 22-16-67-121c-1-2-9-14-22-14-6 0-15 2-22 15L5 303c-1 3-8 16-2 27 4 6 10 12 24 12h136c-14 0-21-6-24-12z",fill:"#00C58E"}}),n._v(" "),e("path",{attrs:{d:"M447 304L317 70c-2-2-9-15-22-15-6 0-15 3-22 15l-17 28v54l39-67 129 230h-49a23 23 0 0 1-2 14l-1 1c-6 11-21 12-23 12h76c3 0 17-1 24-12 3-5 5-14-2-26z",fill:"#108775"}}),n._v(" "),e("path",{attrs:{d:"M376 330v-1l1-2c1-4 2-8 1-12l-4-12-102-178-15-27h-1l-15 27-102 178-4 12a24 24 0 0 0 2 15c4 6 10 12 24 12h190c3 0 18-1 25-12zM256 152l93 163H163l93-163z",fill:"#2F495E"}})])}),[],!1,null,null,null);t.default=component.exports},557:function(n,t,e){"use strict";e(531)},558:function(n,t,e){var r=e(78)(!1);r.push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* Sample `apply` at-rules with Tailwind CSS\n.container {\n@apply min-h-screen flex justify-center items-center text-center mx-auto;\n}\n*/\n.container {\n  margin: 0 auto;\n  min-height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n}\n.title {\n  font-family:\n    'Quicksand',\n    'Source Sans Pro',\n    -apple-system,\n    BlinkMacSystemFont,\n    'Segoe UI',\n    Roboto,\n    'Helvetica Neue',\n    Arial,\n    sans-serif;\n  display: block;\n  font-weight: 300;\n  font-size: 100px;\n  color: #35495e;\n  letter-spacing: 1px;\n}\n.subtitle {\n  font-weight: 300;\n  font-size: 42px;\n  color: #526488;\n  word-spacing: 5px;\n  padding-bottom: 15px;\n}\n.links {\n  padding-top: 15px;\n}\n",""]),n.exports=r},572:function(n,t,e){"use strict";e.r(t);e(36),e(29),e(35),e(47),e(30),e(48);var r=e(19),o=e(65);function c(object,n){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(object);n&&(e=e.filter((function(n){return Object.getOwnPropertyDescriptor(object,n).enumerable}))),t.push.apply(t,e)}return t}function l(n){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(r.a)(n,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(source,t))}))}return n}var f={computed:l({},Object(o.e)({user:function(n){return n.user}})),mounted:function(){},data:function(){return{}},watch:{},methods:l(l(l({},Object(o.d)({})),Object(o.b)({getUserDataFromFireBase:"getUserDataFromFireBase"})),{},{logout:function(){this.$fire.auth.signOut(),this.$notify({title:"Logout",message:"Logout success",type:"success"})}})},v=(e(557),e(46)),component=Object(v.a)(f,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"container"},[e("div",[e("Logo"),n._v(" "),e("h1",{staticClass:"title"},[n._v("\n      aspire\n    ")]),n._v(" "),n.user?e("h2",[n._v("Hello "+n._s(n.user.username))]):n._e(),n._v(" "),n.user?e("div",{staticClass:"links"},[e("nuxt-link",{staticClass:"button--green",attrs:{to:"/test"}},[n._v("Test")]),n._v(" "),e("button",{staticClass:"button--grey",on:{click:n.logout}},[n._v("Logout")])],1):e("div",{staticClass:"links"},[e("nuxt-link",{staticClass:"button--green",attrs:{to:"/login"}},[n._v("Login")]),n._v(" "),e("nuxt-link",{staticClass:"button--green",attrs:{to:"/register"}},[n._v("Register")])],1)],1)])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Logo:e(533).default})}}]);