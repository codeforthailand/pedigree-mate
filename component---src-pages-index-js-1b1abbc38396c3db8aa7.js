(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{197:function(e,t,r){"use strict";r.r(t);r(92),r(133),r(67),r(13),r(52),r(38),r(29),r(39);var n=r(0),i=r.n(n),a=r(206),s=r(204),o=r(215),l=r.n(o);r(139),r(30),r(97);function u(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var c="Female",h="Male",d="X",f=function(e,t){var r=new Set(t.map(function(t){return e[t]}).filter(function(e){return e!==d&&e}));return{id:e.id,ancestors:r}},p=function(e,t){return e.id.localeCompare(t.id)},g=function(e,t){e=e.filter(function(e){return e.id}),console.log(e);var r=e.filter(function(e){return e.sex===c}).map(function(e){return f(e,t.ancestorKeys)}).sort(p);console.log("No. females."+r.length),console.log(r);var n=e.filter(function(e){return e.sex===h}).map(function(e){return f(e,t.ancestorKeys)}).sort(p);console.log("No. males."+n.length);var i=[];return n.forEach(function(e){var t=r.map(function(t){var r=e.ancestors,n=t.ancestors,i=new Set(u(r).filter(function(e){return n.has(e)}));return{id:t.id,commonAncestors:i,commonAncestorStr:u(i).join(",")}}).filter(function(e){return e.commonAncestors.size>0});i.push({id:e.id,mates:t})}),i};function m(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var y=[{label:"level-1",ancestorKeys:["d11","s11"]},{label:"level-1,2",ancestorKeys:["d11","s11","d21","s21","d22","s22"]},{label:"level-1,2,3",ancestorKeys:["d11","s11","d21","s21","d22","s22","d31","s31","d32","s32","d33","s33","d34","s34"]}];t.default=function(){var e=Object(n.useState)([]),t=e[0],r=e[1],o=Object(n.useState)([]),u=o[0],c=o[1],h=Object(n.useState)(y[0]),d=h[0],f=h[1];return Object(n.useEffect)(function(){var e=g(t,d);c(e)},[t,d]),i.a.createElement(a.a,null,i.a.createElement(s.a,{title:"Home"}),i.a.createElement("div",{style:{paddingBottom:"20px",marginBottom:"20px",borderBottom:"1px solid black"}},i.a.createElement("div",{style:{fontWeight:"bold"}},i.a.createElement("input",{id:"file",type:"file",onChange:function(e){var t=new FileReader;t.onloadend=function(e){var n=t.result.split("\n"),i=n[0].toLowerCase(),a=n.slice(1),s=[i].concat(m(a)).join("\n");l.a.parse(s,{header:!0,complete:function(e){r(e.data)}})};var n=e.target.files[0];t.readAsText(n)},accept:"text/csv"}))),i.a.createElement("div",{style:{position:"relative",zIndex:1e3}},i.a.createElement("table",null,u.length>0&&i.a.createElement(i.a.Fragment,null,i.a.createElement("thead",{style:{fontWeight:"bold"}},i.a.createElement("td",{width:"15%",style:{textAlign:"right"}},"Animal-ID (♂)"),i.a.createElement("td",{width:"85%"},"Mating Partners (♀) with ",i.a.createElement("select",{onChange:function(e){var t=parseInt(e.target.value);console.log(t),f(y[t])}},y.map(function(e,t){return i.a.createElement("option",{key:e.label,value:t},e.label)}))," common ancestors.")),u.map(function(e){return i.a.createElement("tr",{key:e.id,style:{padding:"5px",marginTop:"5px"}},i.a.createElement("td",{style:{fontWeight:"bold",textAlign:"right"}},e.id),i.a.createElement("td",{style:{}},i.a.createElement("div",{style:{paddingLeft:"10px"}},i.a.createElement("div",null,e.mates.length," Partners"),i.a.createElement("ul",{style:{padding:0,margin:0}},e.mates.map(function(e){return i.a.createElement("li",{key:e.id,style:{fontSize:"0.8em",display:"inline-block",padding:"2.5px",marginLeft:"5px",border:"1px black solid",marginTop:"5px",textAlign:"center",background:"white"}},e.id)})))))}))),i.a.createElement("span",{style:{fontWeight:"bold"}})))}},198:function(e,t,r){"use strict";var n=r(0),i=r.n(n),a=r(66),s=r.n(a);r.d(t,"a",function(){return s.a}),r.d(t,"b",function(){return a.withPrefix});r(199),r(9).default.enqueue,i.a.createContext({})},199:function(e,t,r){var n;e.exports=(n=r(202))&&n.default||n},200:function(e){e.exports={a:"0.1.0"}},201:function(e){e.exports={data:{site:{siteMetadata:{title:"Pedigree Mate"}}}}},202:function(e,t,r){"use strict";r.r(t);r(23);var n=r(0),i=r.n(n),a=r(94);t.default=function(e){var t=e.location,r=e.pageResources;return r?i.a.createElement(a.a,Object.assign({location:t,pageResources:r},r.json)):null}},203:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjUwcHgiIGhlaWdodD0iMjUwcHgiIHZpZXdCb3g9IjAgMCAyNTAgMjUwIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA1NS4yICg3ODE4MSkgLSBodHRwczovL3NrZXRjaGFwcC5jb20gLS0+CiAgICA8dGl0bGU+bG9nbzwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxnIGlkPSJsb2dvIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8cmVjdCBmaWxsPSIjRkZGRkZGIiB4PSIwIiB5PSIwIiB3aWR0aD0iMjUwIiBoZWlnaHQ9IjI1MCI+PC9yZWN0PgogICAgICAgIDxnIGlkPSJHcm91cCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjUuMDAwMDAwLCA3Mi4wMDAwMDApIiBmaWxsPSIjMkEyQTJBIj4KICAgICAgICAgICAgPHBvbHlnb24gaWQ9IlBhdGgtQ29weS0yIiBwb2ludHM9Ijk5Ljk1MzQwODMgOTMuNzc1NTEwMiAxMjMuMjU4NDY3IDcxLjczNDY5MzkgMTMwIDc4LjEzMDE5MzEgOTkuOTUzNDA4MyAxMDcgNzAgNzguMTMwMTkzMSA3Ny4zOTAyNDAzIDcxIj48L3BvbHlnb24+CiAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJQYXRoLUNvcHktNSIgb3BhY2l0eT0iMC42Mjg4MzY0OTYiIHBvaW50cz0iMTY5Ljk1MzQwOCAyMi43NzU1MTAyIDE5My4yNTg0NjcgMC43MzQ2OTM4NzggMjAwIDcuMTMwMTkzMDUgMTY5Ljk1MzQwOCAzNiAxNDAgNy4xMzAxOTMwNSAxNDcuMzkwMjQgLTMuMTk3NDQyMzFlLTE0Ij48L3BvbHlnb24+CiAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJQYXRoLUNvcHktOCIgb3BhY2l0eT0iMC42Mjg4MzY0OTYiIHBvaW50cz0iMjkuOTUzNDA4MyAyMy43NzU1MTAyIDUzLjI1ODQ2NzMgMS43MzQ2OTM4OCA2MCA4LjEzMDE5MzA1IDI5Ljk1MzQwODMgMzcgLTEuNTk4NzIxMTZlLTEzIDguMTMwMTkzMDUgNy4zOTAyNDAzNSAxIj48L3BvbHlnb24+CiAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJQYXRoLUNvcHktMyIgb3BhY2l0eT0iMC44ODEwOTE4OSIgcG9pbnRzPSIxMzQuOTUzNDA4IDU4Ljc3NTUxMDIgMTU4LjI1ODQ2NyAzNi43MzQ2OTM5IDE2NSA0My4xMzAxOTMxIDEzNC45NTM0MDggNzIgMTA1IDQzLjEzMDE5MzEgMTEyLjM5MDI0IDM2Ij48L3BvbHlnb24+CiAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJQYXRoLUNvcHktMTEiIG9wYWNpdHk9IjAuNjI4ODM2NDk2IiBwb2ludHM9Ijk5Ljk1MzQwODMgMjIuNzc1NTEwMiAxMjMuMjU4NDY3IDAuNzM0NjkzODc4IDEzMCA3LjEzMDE5MzA1IDk5Ljk1MzQwODMgMzYgNzAgNy4xMzAxOTMwNSA3Ny4zOTAyNDAzIC0zLjE5NzQ0MjMxZS0xNCI+PC9wb2x5Z29uPgogICAgICAgICAgICA8cG9seWdvbiBpZD0iUGF0aC1Db3B5LTQiIG9wYWNpdHk9IjAuODgxMDkxODkiIHBvaW50cz0iNjQuOTUzNDA4MyA1OC43NzU1MTAyIDg4LjI1ODQ2NzMgMzYuNzM0NjkzOSA5NSA0My4xMzAxOTMxIDY0Ljk1MzQwODMgNzIgMzUgNDMuMTMwMTkzMSA0Mi4zOTAyNDAzIDM2Ij48L3BvbHlnb24+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4="},204:function(e,t,r){"use strict";var n=r(205),i=r(0),a=r.n(i),s=r(207),o=r.n(s);function l(e){var t=e.description,r=e.lang,i=e.meta,s=e.title,l=n.data.site,u=t||l.siteMetadata.description;return a.a.createElement(o.a,{htmlAttributes:{lang:r},title:s,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:s},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:u}].concat(i)})}l.defaultProps={lang:"en",meta:[],description:""},t.a=l},205:function(e){e.exports={data:{site:{siteMetadata:{title:"Pedigree Mate",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"Pattarawat & Theerachai Chormai"}}}}},206:function(e,t,r){"use strict";var n=r(201),i=r(0),a=r.n(i),s=r(198),o=(r(193),r(203)),l=r.n(o),u=r(200);t.a=function(e){var t=e.children,r=n.data;return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{style:{margin:"0 auto",maxWidth:"90%",padding:"0px 1.0875rem 1.45rem",paddingTop:0,marginTop:"3vh"}},a.a.createElement("div",null,a.a.createElement("h1",{style:{textTransform:"uppercase",float:"left"}},a.a.createElement("img",{style:{verticalAlign:"middle",height:"3rem",margin:0,border:"2px solid black",marginRight:"6px",marginTop:"-0.3rem"},src:l.a}),r.site.siteMetadata.title),a.a.createElement("div",{style:{float:"right",fontWeight:"bold",marginTop:"1rem"}},a.a.createElement("span",{style:{marginRight:"10px"}},a.a.createElement(s.a,{to:"/manual"},"Manual")),a.a.createElement("span",null,a.a.createElement("a",{href:Object(s.b)("/pedigree-test.csv")},"Sample CSV File"))),a.a.createElement("div",{style:{clear:"both"}})),a.a.createElement("main",{style:{minHeight:"70vh",marginTop:"20px"}},t),a.a.createElement("footer",{style:{marginTop:"20px",textAlign:"center"}},"© ",(new Date).getFullYear()+543," CodeForThailand, Developed by ",a.a.createElement("a",{href:"http://pat.chormai.org"},"Pattarawat")," & ",a.a.createElement("a",{href:"https://th-th.facebook.com/PoultryResearchAndDevelopmentCenter/"},"Theerachai Chormai")," ",a.a.createElement("br",null),"version ",u.a)))}},215:function(e,t,r){var n,i,a;r(91),r(39),r(51),r(41),r(216),r(14),r(140),r(29),r(30),r(50),r(208),r(68),r(31),r(69),r(67),r(93),r(13),i=[],void 0===(a="function"==typeof(n=function e(){"use strict";var t="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==t?t:{},r=!t.document&&!!t.postMessage,n=r&&/blob:/i.test((t.location||{}).protocol),i={},a=0,s={parse:function(r,n){var o=(n=n||{}).dynamicTyping||!1;if(M(o)&&(n.dynamicTypingFunction=o,o={}),n.dynamicTyping=o,n.transform=!!M(n.transform)&&n.transform,n.worker&&s.WORKERS_SUPPORTED){var l=function(){if(!s.WORKERS_SUPPORTED)return!1;var r,n,o=(r=t.URL||t.webkitURL||null,n=e.toString(),s.BLOB_URL||(s.BLOB_URL=r.createObjectURL(new Blob(["(",n,")();"],{type:"text/javascript"})))),l=new t.Worker(o);return l.onmessage=m,l.id=a++,i[l.id]=l}();return l.userStep=n.step,l.userChunk=n.chunk,l.userComplete=n.complete,l.userError=n.error,n.step=M(n.step),n.chunk=M(n.chunk),n.complete=M(n.complete),n.error=M(n.error),delete n.worker,void l.postMessage({input:r,config:n,workerId:l.id})}var f=null;return s.NODE_STREAM_INPUT,"string"==typeof r?f=n.download?new u(n):new h(n):!0===r.readable&&M(r.read)&&M(r.on)?f=new d(n):(t.File&&r instanceof File||r instanceof Object)&&(f=new c(n)),f.stream(r)},unparse:function(e,t){var r=!1,n=!0,i=",",a="\r\n",o='"',l=o+o,u=!1,c=null;!function(){if("object"==typeof t){if("string"!=typeof t.delimiter||s.BAD_DELIMITERS.filter(function(e){return-1!==t.delimiter.indexOf(e)}).length||(i=t.delimiter),("boolean"==typeof t.quotes||Array.isArray(t.quotes))&&(r=t.quotes),"boolean"!=typeof t.skipEmptyLines&&"string"!=typeof t.skipEmptyLines||(u=t.skipEmptyLines),"string"==typeof t.newline&&(a=t.newline),"string"==typeof t.quoteChar&&(o=t.quoteChar),"boolean"==typeof t.header&&(n=t.header),Array.isArray(t.columns)){if(0===t.columns.length)throw new Error("Option columns is empty");c=t.columns}void 0!==t.escapeChar&&(l=t.escapeChar+o)}}();var h=new RegExp(p(o),"g");if("string"==typeof e&&(e=JSON.parse(e)),Array.isArray(e)){if(!e.length||Array.isArray(e[0]))return f(null,e,u);if("object"==typeof e[0])return f(c||d(e[0]),e,u)}else if("object"==typeof e)return"string"==typeof e.data&&(e.data=JSON.parse(e.data)),Array.isArray(e.data)&&(e.fields||(e.fields=e.meta&&e.meta.fields),e.fields||(e.fields=Array.isArray(e.data[0])?e.fields:d(e.data[0])),Array.isArray(e.data[0])||"object"==typeof e.data[0]||(e.data=[e.data])),f(e.fields||[],e.data||[],u);throw new Error("Unable to serialize unrecognized input");function d(e){if("object"!=typeof e)return[];var t=[];for(var r in e)t.push(r);return t}function f(e,t,r){var s="";"string"==typeof e&&(e=JSON.parse(e)),"string"==typeof t&&(t=JSON.parse(t));var o=Array.isArray(e)&&0<e.length,l=!Array.isArray(t[0]);if(o&&n){for(var u=0;u<e.length;u++)0<u&&(s+=i),s+=g(e[u],u);0<t.length&&(s+=a)}for(var c=0;c<t.length;c++){var h=o?e.length:t[c].length,d=!1,f=o?0===Object.keys(t[c]).length:0===t[c].length;if(r&&!o&&(d="greedy"===r?""===t[c].join("").trim():1===t[c].length&&0===t[c][0].length),"greedy"===r&&o){for(var p=[],m=0;m<h;m++){var y=l?e[m]:m;p.push(t[c][y])}d=""===p.join("").trim()}if(!d){for(var v=0;v<h;v++){0<v&&!f&&(s+=i);var _=o&&l?e[v]:v;s+=g(t[c][_],v)}c<t.length-1&&(!r||0<h&&!f)&&(s+=a)}}return s}function g(e,t){if(null==e)return"";if(e.constructor===Date)return JSON.stringify(e).slice(1,25);e=e.toString().replace(h,l);var n="boolean"==typeof r&&r||Array.isArray(r)&&r[t]||function(e,t){for(var r=0;r<t.length;r++)if(-1<e.indexOf(t[r]))return!0;return!1}(e,s.BAD_DELIMITERS)||-1<e.indexOf(i)||" "===e.charAt(0)||" "===e.charAt(e.length-1);return n?o+e+o:e}}};if(s.RECORD_SEP=String.fromCharCode(30),s.UNIT_SEP=String.fromCharCode(31),s.BYTE_ORDER_MARK="\ufeff",s.BAD_DELIMITERS=["\r","\n",'"',s.BYTE_ORDER_MARK],s.WORKERS_SUPPORTED=!r&&!!t.Worker,s.NODE_STREAM_INPUT=1,s.LocalChunkSize=10485760,s.RemoteChunkSize=5242880,s.DefaultDelimiter=",",s.Parser=g,s.ParserHandle=f,s.NetworkStreamer=u,s.FileStreamer=c,s.StringStreamer=h,s.ReadableStreamStreamer=d,t.jQuery){var o=t.jQuery;o.fn.parse=function(e){var r=e.config||{},n=[];return this.each(function(e){if("INPUT"!==o(this).prop("tagName").toUpperCase()||"file"!==o(this).attr("type").toLowerCase()||!t.FileReader||!this.files||0===this.files.length)return!0;for(var i=0;i<this.files.length;i++)n.push({file:this.files[i],inputElem:this,instanceConfig:o.extend({},r)})}),i(),this;function i(){if(0!==n.length){var t,r,i,l=n[0];if(M(e.before)){var u=e.before(l.file,l.inputElem);if("object"==typeof u){if("abort"===u.action)return t=l.file,r=l.inputElem,i=u.reason,void(M(e.error)&&e.error({name:"AbortError"},t,r,i));if("skip"===u.action)return void a();"object"==typeof u.config&&(l.instanceConfig=o.extend(l.instanceConfig,u.config))}else if("skip"===u)return void a()}var c=l.instanceConfig.complete;l.instanceConfig.complete=function(e){M(c)&&c(e,l.file,l.inputElem),a()},s.parse(l.file,l.instanceConfig)}else M(e.complete)&&e.complete()}function a(){n.splice(0,1),i()}}}function l(e){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},function(e){var t=_(e);t.chunkSize=parseInt(t.chunkSize),e.step||e.chunk||(t.chunkSize=null),this._handle=new f(t),(this._handle.streamer=this)._config=t}.call(this,e),this.parseChunk=function(e,r){if(this.isFirstChunk&&M(this._config.beforeFirstChunk)){var i=this._config.beforeFirstChunk(e);void 0!==i&&(e=i)}this.isFirstChunk=!1,this._halted=!1;var a=this._partialLine+e;this._partialLine="";var o=this._handle.parse(a,this._baseIndex,!this._finished);if(!this._handle.paused()&&!this._handle.aborted()){var l=o.meta.cursor;this._finished||(this._partialLine=a.substring(l-this._baseIndex),this._baseIndex=l),o&&o.data&&(this._rowCount+=o.data.length);var u=this._finished||this._config.preview&&this._rowCount>=this._config.preview;if(n)t.postMessage({results:o,workerId:s.WORKER_ID,finished:u});else if(M(this._config.chunk)&&!r){if(this._config.chunk(o,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);o=void 0,this._completeResults=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(o.data),this._completeResults.errors=this._completeResults.errors.concat(o.errors),this._completeResults.meta=o.meta),this._completed||!u||!M(this._config.complete)||o&&o.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),u||o&&o.meta.paused||this._nextChunk(),o}this._halted=!0},this._sendError=function(e){M(this._config.error)?this._config.error(e):n&&this._config.error&&t.postMessage({workerId:s.WORKER_ID,error:e,finished:!1})}}function u(e){var t;(e=e||{}).chunkSize||(e.chunkSize=s.RemoteChunkSize),l.call(this,e),this._nextChunk=r?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(e){this._input=e,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(t=new XMLHttpRequest,this._config.withCredentials&&(t.withCredentials=this._config.withCredentials),r||(t.onload=I(this._chunkLoaded,this),t.onerror=I(this._chunkError,this)),t.open("GET",this._input,!r),this._config.downloadRequestHeaders){var e=this._config.downloadRequestHeaders;for(var n in e)t.setRequestHeader(n,e[n])}if(this._config.chunkSize){var i=this._start+this._config.chunkSize-1;t.setRequestHeader("Range","bytes="+this._start+"-"+i)}try{t.send()}catch(e){this._chunkError(e.message)}r&&0===t.status?this._chunkError():this._start+=this._config.chunkSize}},this._chunkLoaded=function(){var e;4===t.readyState&&(t.status<200||400<=t.status?this._chunkError():(this._finished=!this._config.chunkSize||this._start>(null===(e=t.getResponseHeader("Content-Range"))?-1:parseInt(e.substr(e.lastIndexOf("/")+1))),this.parseChunk(t.responseText)))},this._chunkError=function(e){var r=t.statusText||e;this._sendError(new Error(r))}}function c(e){var t,r;(e=e||{}).chunkSize||(e.chunkSize=s.LocalChunkSize),l.call(this,e);var n="undefined"!=typeof FileReader;this.stream=function(e){this._input=e,r=e.slice||e.webkitSlice||e.mozSlice,n?((t=new FileReader).onload=I(this._chunkLoaded,this),t.onerror=I(this._chunkError,this)):t=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var e=this._input;if(this._config.chunkSize){var i=Math.min(this._start+this._config.chunkSize,this._input.size);e=r.call(e,this._start,i)}var a=t.readAsText(e,this._config.encoding);n||this._chunkLoaded({target:{result:a}})},this._chunkLoaded=function(e){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(e.target.result)},this._chunkError=function(){this._sendError(t.error)}}function h(e){var t;l.call(this,e=e||{}),this.stream=function(e){return t=e,this._nextChunk()},this._nextChunk=function(){if(!this._finished){var e=this._config.chunkSize,r=e?t.substr(0,e):t;return t=e?t.substr(e):"",this._finished=!t,this.parseChunk(r)}}}function d(e){l.call(this,e=e||{});var t=[],r=!0,n=!1;this.pause=function(){l.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){l.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(e){this._input=e,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._checkIsFinished=function(){n&&1===t.length&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),t.length?this.parseChunk(t.shift()):r=!0},this._streamData=I(function(e){try{t.push("string"==typeof e?e:e.toString(this._config.encoding)),r&&(r=!1,this._checkIsFinished(),this.parseChunk(t.shift()))}catch(e){this._streamError(e)}},this),this._streamError=I(function(e){this._streamCleanUp(),this._sendError(e)},this),this._streamEnd=I(function(){this._streamCleanUp(),n=!0,this._streamData("")},this),this._streamCleanUp=I(function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)},this)}function f(e){var t,r,n,i=/^\s*-?(\d*\.?\d+|\d+\.?\d*)(e[-+]?\d+)?\s*$/i,a=/(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))/,o=this,l=0,u=0,c=!1,h=!1,d=[],f={data:[],errors:[],meta:{}};if(M(e.step)){var m=e.step;e.step=function(t){if(f=t,I())v();else{if(v(),0===f.data.length)return;l+=t.data.length,e.preview&&l>e.preview?r.abort():m(f,o)}}}function y(t){return"greedy"===e.skipEmptyLines?""===t.join("").trim():1===t.length&&0===t[0].length}function v(){if(f&&n&&(A("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+s.DefaultDelimiter+"'"),n=!1),e.skipEmptyLines)for(var t=0;t<f.data.length;t++)y(f.data[t])&&f.data.splice(t--,1);return I()&&function(){if(f)if(Array.isArray(f.data[0])){for(var t=0;I()&&t<f.data.length;t++)f.data[t].forEach(r);f.data.splice(0,1)}else f.data.forEach(r);function r(t){M(e.transformHeader)&&(t=e.transformHeader(t)),d.push(t)}}(),function(){if(!f||!e.header&&!e.dynamicTyping&&!e.transform)return f;function t(t,r){var n,i=e.header?{}:[];for(n=0;n<t.length;n++){var a=n,s=t[n];e.header&&(a=n>=d.length?"__parsed_extra":d[n]),e.transform&&(s=e.transform(s,a)),s=b(a,s),"__parsed_extra"===a?(i[a]=i[a]||[],i[a].push(s)):i[a]=s}return e.header&&(n>d.length?A("FieldMismatch","TooManyFields","Too many fields: expected "+d.length+" fields but parsed "+n,u+r):n<d.length&&A("FieldMismatch","TooFewFields","Too few fields: expected "+d.length+" fields but parsed "+n,u+r)),i}var r=1;return!f.data[0]||Array.isArray(f.data[0])?(f.data=f.data.map(t),r=f.data.length):f.data=t(f.data,0),e.header&&f.meta&&(f.meta.fields=d),u+=r,f}()}function I(){return e.header&&0===d.length}function b(t,r){return n=t,e.dynamicTypingFunction&&void 0===e.dynamicTyping[n]&&(e.dynamicTyping[n]=e.dynamicTypingFunction(n)),!0===(e.dynamicTyping[n]||e.dynamicTyping)?"true"===r||"TRUE"===r||"false"!==r&&"FALSE"!==r&&(i.test(r)?parseFloat(r):a.test(r)?new Date(r):""===r?null:r):r;var n}function A(e,t,r,n){f.errors.push({type:e,code:t,message:r,row:n})}this.parse=function(i,a,o){var l=e.quoteChar||'"';if(e.newline||(e.newline=function(e,t){e=e.substr(0,1048576);var r=new RegExp(p(t)+"([^]*?)"+p(t),"gm"),n=(e=e.replace(r,"")).split("\r"),i=e.split("\n"),a=1<i.length&&i[0].length<n[0].length;if(1===n.length||a)return"\n";for(var s=0,o=0;o<n.length;o++)"\n"===n[o][0]&&s++;return s>=n.length/2?"\r\n":"\r"}(i,l)),n=!1,e.delimiter)M(e.delimiter)&&(e.delimiter=e.delimiter(i),f.meta.delimiter=e.delimiter);else{var u=function(t,r,n,i,a){var o,l,u,c;a=a||[",","\t","|",";",s.RECORD_SEP,s.UNIT_SEP];for(var h=0;h<a.length;h++){var d=a[h],f=0,p=0,m=0;u=void 0;for(var v=new g({comments:i,delimiter:d,newline:r,preview:10}).parse(t),_=0;_<v.data.length;_++)if(n&&y(v.data[_]))m++;else{var I=v.data[_].length;p+=I,void 0!==u?0<I&&(f+=Math.abs(I-u),u=I):u=I}0<v.data.length&&(p/=v.data.length-m),(void 0===l||f<=l)&&(void 0===c||c<p)&&1.99<p&&(l=f,o=d,c=p)}return{successful:!!(e.delimiter=o),bestDelimiter:o}}(i,e.newline,e.skipEmptyLines,e.comments,e.delimitersToGuess);u.successful?e.delimiter=u.bestDelimiter:(n=!0,e.delimiter=s.DefaultDelimiter),f.meta.delimiter=e.delimiter}var h=_(e);return e.preview&&e.header&&h.preview++,t=i,r=new g(h),f=r.parse(t,a,o),v(),c?{meta:{paused:!0}}:f||{meta:{paused:!1}}},this.paused=function(){return c},this.pause=function(){c=!0,r.abort(),t=t.substr(r.getCharIndex())},this.resume=function(){o.streamer._halted?(c=!1,o.streamer.parseChunk(t,!0)):setTimeout(this.resume,3)},this.aborted=function(){return h},this.abort=function(){h=!0,r.abort(),f.meta.aborted=!0,M(e.complete)&&e.complete(f),t=""}}function p(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function g(e){var t,r=(e=e||{}).delimiter,n=e.newline,i=e.comments,a=e.step,o=e.preview,l=e.fastMode,u=t=void 0===e.quoteChar?'"':e.quoteChar;if(void 0!==e.escapeChar&&(u=e.escapeChar),("string"!=typeof r||-1<s.BAD_DELIMITERS.indexOf(r))&&(r=","),i===r)throw new Error("Comment character same as delimiter");!0===i?i="#":("string"!=typeof i||-1<s.BAD_DELIMITERS.indexOf(i))&&(i=!1),"\n"!==n&&"\r"!==n&&"\r\n"!==n&&(n="\n");var c=0,h=!1;this.parse=function(e,s,d){if("string"!=typeof e)throw new Error("Input must be a string");var f=e.length,g=r.length,m=n.length,y=i.length,v=M(a),_=[],I=[],b=[],A=c=0;if(!e)return L();if(l||!1!==l&&-1===e.indexOf(t)){for(var k=e.split(n),w=0;w<k.length;w++){if(b=k[w],c+=b.length,w!==k.length-1)c+=n.length;else if(d)return L();if(!i||b.substr(0,y)!==i){if(v){if(_=[],S(b.split(r)),P(),h)return L()}else S(b.split(r));if(o&&o<=w)return _=_.slice(0,o),L(!0)}}return L()}for(var E=e.indexOf(r,c),C=e.indexOf(n,c),x=new RegExp(p(u)+p(t),"g"),D=e.indexOf(t,c);;)if(e[c]!==t)if(i&&0===b.length&&e.substr(c,y)===i){if(-1===C)return L();c=C+m,C=e.indexOf(n,c),E=e.indexOf(r,c)}else{if(-1!==E&&(E<C||-1===C)){if(-1===D){b.push(e.substring(c,E)),c=E+g,E=e.indexOf(r,c);continue}var z=U(E,D,C);if(z&&z.nextDelim){E=z.nextDelim,D=z.quoteSearch,b.push(e.substring(c,E)),c=E+g,E=e.indexOf(r,c);continue}}if(-1===C)break;if(b.push(e.substring(c,C)),R(C+m),v&&(P(),h))return L();if(o&&_.length>=o)return L(!0)}else for(D=c,c++;;){if(-1===(D=e.indexOf(t,D+1)))return d||I.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:_.length,index:c}),N();if(D===f-1)return N(e.substring(c,D).replace(x,t));if(t!==u||e[D+1]!==u){if(t===u||0===D||e[D-1]!==u){var T=j(-1===C?E:Math.min(E,C));if(e[D+1+T]===r){b.push(e.substring(c,D).replace(x,t)),e[c=D+1+T+g]!==t&&(D=e.indexOf(t,c)),E=e.indexOf(r,c),C=e.indexOf(n,c);break}var O=j(C);if(e.substr(D+1+O,m)===n){if(b.push(e.substring(c,D).replace(x,t)),R(D+1+O+m),E=e.indexOf(r,c),D=e.indexOf(t,c),v&&(P(),h))return L();if(o&&_.length>=o)return L(!0);break}I.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:_.length,index:c}),D++}}else D++}return N();function S(e){_.push(e),A=c}function j(t){var r=0;if(-1!==t){var n=e.substring(D+1,t);n&&""===n.trim()&&(r=n.length)}return r}function N(t){return d||(void 0===t&&(t=e.substr(c)),b.push(t),c=f,S(b),v&&P()),L()}function R(t){c=t,S(b),b=[],C=e.indexOf(n,c)}function L(e,t){return{data:t?_[0]:_,errors:I,meta:{delimiter:r,linebreak:n,aborted:h,truncated:!!e,cursor:A+(s||0)}}}function P(){a(L(void 0,!0)),_=[],I=[]}function U(n,i,a){var s={nextDelim:void 0,quoteSearch:void 0},o=e.indexOf(t,i+1);if(i<n&&n<o&&(o<a||-1===a)){var l=e.indexOf(r,o);if(-1===l)return s;o<l&&(o=e.indexOf(t,o+1)),s=U(l,o,a)}else s={nextDelim:n,quoteSearch:i};return s}},this.abort=function(){h=!0},this.getCharIndex=function(){return c}}function m(e){var t=e.data,r=i[t.workerId],n=!1;if(t.error)r.userError(t.error,t.file);else if(t.results&&t.results.data){var a={abort:function(){n=!0,y(t.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:v,resume:v};if(M(r.userStep)){for(var s=0;s<t.results.data.length&&(r.userStep({data:t.results.data[s],errors:t.results.errors,meta:t.results.meta},a),!n);s++);delete t.results}else M(r.userChunk)&&(r.userChunk(t.results,a,t.file),delete t.results)}t.finished&&!n&&y(t.workerId,t.results)}function y(e,t){var r=i[e];M(r.userComplete)&&r.userComplete(t),r.terminate(),delete i[e]}function v(){throw new Error("Not implemented.")}function _(e){if("object"!=typeof e||null===e)return e;var t=Array.isArray(e)?[]:{};for(var r in e)t[r]=_(e[r]);return t}function I(e,t){return function(){e.apply(t,arguments)}}function M(e){return"function"==typeof e}return n&&(t.onmessage=function(e){var r=e.data;if(void 0===s.WORKER_ID&&r&&(s.WORKER_ID=r.workerId),"string"==typeof r.input)t.postMessage({workerId:s.WORKER_ID,results:s.parse(r.input,r.config),finished:!0});else if(t.File&&r.input instanceof File||r.input instanceof Object){var n=s.parse(r.input,r.config);n&&t.postMessage({workerId:s.WORKER_ID,results:n,finished:!0})}}),(u.prototype=Object.create(l.prototype)).constructor=u,(c.prototype=Object.create(l.prototype)).constructor=c,(h.prototype=Object.create(h.prototype)).constructor=h,(d.prototype=Object.create(l.prototype)).constructor=d,s})?n.apply(t,i):n)||(e.exports=a)},216:function(e,t,r){"use strict";var n=r(1),i=r(32),a=r(53),s=r(15),o=[].lastIndexOf,l=!!o&&1/[1].lastIndexOf(1,-0)<0;n(n.P+n.F*(l||!r(24)(o)),"Array",{lastIndexOf:function(e){if(l)return o.apply(this,arguments)||0;var t=i(this),r=s(t.length),n=r-1;for(arguments.length>1&&(n=Math.min(n,a(arguments[1]))),n<0&&(n=r+n);n>=0;n--)if(n in t&&t[n]===e)return n||0;return-1}})}}]);
//# sourceMappingURL=component---src-pages-index-js-1b1abbc38396c3db8aa7.js.map