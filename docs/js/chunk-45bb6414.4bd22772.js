(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-45bb6414"],{"0a06":function(n,e,t){"use strict";var r=t("c532"),o=t("30b5"),i=t("f6b4"),s=t("5270"),a=t("4a7b"),u=t("848b"),c=u.validators;function f(n){this.defaults=n,this.interceptors={request:new i,response:new i}}f.prototype.request=function(n){"string"===typeof n?(n=arguments[1]||{},n.url=arguments[0]):n=n||{},n=a(this.defaults,n),n.method?n.method=n.method.toLowerCase():this.defaults.method?n.method=this.defaults.method.toLowerCase():n.method="get";var e=n.transitional;void 0!==e&&u.assertOptions(e,{silentJSONParsing:c.transitional(c.boolean),forcedJSONParsing:c.transitional(c.boolean),clarifyTimeoutError:c.transitional(c.boolean)},!1);var t=[],r=!0;this.interceptors.request.forEach((function(e){"function"===typeof e.runWhen&&!1===e.runWhen(n)||(r=r&&e.synchronous,t.unshift(e.fulfilled,e.rejected))}));var o,i=[];if(this.interceptors.response.forEach((function(n){i.push(n.fulfilled,n.rejected)})),!r){var f=[s,void 0];Array.prototype.unshift.apply(f,t),f=f.concat(i),o=Promise.resolve(n);while(f.length)o=o.then(f.shift(),f.shift());return o}var l=n;while(t.length){var p=t.shift(),h=t.shift();try{l=p(l)}catch(d){h(d);break}}try{o=s(l)}catch(d){return Promise.reject(d)}while(i.length)o=o.then(i.shift(),i.shift());return o},f.prototype.getUri=function(n){return n=a(this.defaults,n),o(n.url,n.params,n.paramsSerializer).replace(/^\?/,"")},r.forEach(["delete","get","head","options"],(function(n){f.prototype[n]=function(e,t){return this.request(a(t||{},{method:n,url:e,data:(t||{}).data}))}})),r.forEach(["post","put","patch"],(function(n){f.prototype[n]=function(e,t,r){return this.request(a(r||{},{method:n,url:e,data:t}))}})),n.exports=f},"0df6":function(n,e,t){"use strict";n.exports=function(n){return function(e){return n.apply(null,e)}}},"17ce":function(n,e,t){"use strict";t("6542")},"1d2b":function(n,e,t){"use strict";n.exports=function(n,e){return function(){for(var t=new Array(arguments.length),r=0;r<t.length;r++)t[r]=arguments[r];return n.apply(e,t)}}},2444:function(n,e,t){"use strict";(function(e){var r=t("c532"),o=t("c8af"),i=t("387f"),s={"Content-Type":"application/x-www-form-urlencoded"};function a(n,e){!r.isUndefined(n)&&r.isUndefined(n["Content-Type"])&&(n["Content-Type"]=e)}function u(){var n;return("undefined"!==typeof XMLHttpRequest||"undefined"!==typeof e&&"[object process]"===Object.prototype.toString.call(e))&&(n=t("b50d")),n}function c(n,e,t){if(r.isString(n))try{return(e||JSON.parse)(n),r.trim(n)}catch(o){if("SyntaxError"!==o.name)throw o}return(t||JSON.stringify)(n)}var f={transitional:{silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},adapter:u(),transformRequest:[function(n,e){return o(e,"Accept"),o(e,"Content-Type"),r.isFormData(n)||r.isArrayBuffer(n)||r.isBuffer(n)||r.isStream(n)||r.isFile(n)||r.isBlob(n)?n:r.isArrayBufferView(n)?n.buffer:r.isURLSearchParams(n)?(a(e,"application/x-www-form-urlencoded;charset=utf-8"),n.toString()):r.isObject(n)||e&&"application/json"===e["Content-Type"]?(a(e,"application/json"),c(n)):n}],transformResponse:[function(n){var e=this.transitional||f.transitional,t=e&&e.silentJSONParsing,o=e&&e.forcedJSONParsing,s=!t&&"json"===this.responseType;if(s||o&&r.isString(n)&&n.length)try{return JSON.parse(n)}catch(a){if(s){if("SyntaxError"===a.name)throw i(a,this,"E_JSON_PARSE");throw a}}return n}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(n){return n>=200&&n<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};r.forEach(["delete","get","head"],(function(n){f.headers[n]={}})),r.forEach(["post","put","patch"],(function(n){f.headers[n]=r.merge(s)})),n.exports=f}).call(this,t("4362"))},"24d3":function(n,e,t){"use strict";t("d1e4")},"2d83":function(n,e,t){"use strict";var r=t("387f");n.exports=function(n,e,t,o,i){var s=new Error(n);return r(s,e,t,o,i)}},"2e67":function(n,e,t){"use strict";n.exports=function(n){return!(!n||!n.__CANCEL__)}},"2efd":function(n,e,t){n.exports=t.p+"img/profile.ab1e61b9.svg"},"30b5":function(n,e,t){"use strict";var r=t("c532");function o(n){return encodeURIComponent(n).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}n.exports=function(n,e,t){if(!e)return n;var i;if(t)i=t(e);else if(r.isURLSearchParams(e))i=e.toString();else{var s=[];r.forEach(e,(function(n,e){null!==n&&"undefined"!==typeof n&&(r.isArray(n)?e+="[]":n=[n],r.forEach(n,(function(n){r.isDate(n)?n=n.toISOString():r.isObject(n)&&(n=JSON.stringify(n)),s.push(o(e)+"="+o(n))})))})),i=s.join("&")}if(i){var a=n.indexOf("#");-1!==a&&(n=n.slice(0,a)),n+=(-1===n.indexOf("?")?"?":"&")+i}return n}},"387f":function(n,e,t){"use strict";n.exports=function(n,e,t,r,o){return n.config=e,t&&(n.code=t),n.request=r,n.response=o,n.isAxiosError=!0,n.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}},n}},3934:function(n,e,t){"use strict";var r=t("c532");n.exports=r.isStandardBrowserEnv()?function(){var n,e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a");function o(n){var r=n;return e&&(t.setAttribute("href",r),r=t.href),t.setAttribute("href",r),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:"/"===t.pathname.charAt(0)?t.pathname:"/"+t.pathname}}return n=o(window.location.href),function(e){var t=r.isString(e)?o(e):e;return t.protocol===n.protocol&&t.host===n.host}}():function(){return function(){return!0}}()},4362:function(n,e,t){e.nextTick=function(n){var e=Array.prototype.slice.call(arguments);e.shift(),setTimeout((function(){n.apply(null,e)}),0)},e.platform=e.arch=e.execPath=e.title="browser",e.pid=1,e.browser=!0,e.env={},e.argv=[],e.binding=function(n){throw new Error("No such module. (Possibly not yet loaded)")},function(){var n,r="/";e.cwd=function(){return r},e.chdir=function(e){n||(n=t("df7c")),r=n.resolve(e,r)}}(),e.exit=e.kill=e.umask=e.dlopen=e.uptime=e.memoryUsage=e.uvCounters=function(){},e.features={}},"467f":function(n,e,t){"use strict";var r=t("2d83");n.exports=function(n,e,t){var o=t.config.validateStatus;t.status&&o&&!o(t.status)?e(r("Request failed with status code "+t.status,t.config,null,t.request,t)):n(t)}},"4a7b":function(n,e,t){"use strict";var r=t("c532");n.exports=function(n,e){e=e||{};var t={};function o(n,e){return r.isPlainObject(n)&&r.isPlainObject(e)?r.merge(n,e):r.isPlainObject(e)?r.merge({},e):r.isArray(e)?e.slice():e}function i(t){return r.isUndefined(e[t])?r.isUndefined(n[t])?void 0:o(void 0,n[t]):o(n[t],e[t])}function s(n){if(!r.isUndefined(e[n]))return o(void 0,e[n])}function a(t){return r.isUndefined(e[t])?r.isUndefined(n[t])?void 0:o(void 0,n[t]):o(void 0,e[t])}function u(t){return t in e?o(n[t],e[t]):t in n?o(void 0,n[t]):void 0}var c={url:s,method:s,data:s,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:u};return r.forEach(Object.keys(n).concat(Object.keys(e)),(function(n){var e=c[n]||i,o=e(n);r.isUndefined(o)&&e!==u||(t[n]=o)})),t}},5270:function(n,e,t){"use strict";var r=t("c532"),o=t("c401"),i=t("2e67"),s=t("2444"),a=t("7a77");function u(n){if(n.cancelToken&&n.cancelToken.throwIfRequested(),n.signal&&n.signal.aborted)throw new a("canceled")}n.exports=function(n){u(n),n.headers=n.headers||{},n.data=o.call(n,n.data,n.headers,n.transformRequest),n.headers=r.merge(n.headers.common||{},n.headers[n.method]||{},n.headers),r.forEach(["delete","get","head","post","put","patch","common"],(function(e){delete n.headers[e]}));var e=n.adapter||s.adapter;return e(n).then((function(e){return u(n),e.data=o.call(n,e.data,e.headers,n.transformResponse),e}),(function(e){return i(e)||(u(n),e&&e.response&&(e.response.data=o.call(n,e.response.data,e.response.headers,n.transformResponse))),Promise.reject(e)}))}},"5cce":function(n,e){n.exports={version:"0.24.0"}},"5f02":function(n,e,t){"use strict";n.exports=function(n){return"object"===typeof n&&!0===n.isAxiosError}},6542:function(n,e,t){},"71a3":function(n,e,t){"use strict";var r=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{class:n.tclass},[t("p",{domProps:{innerHTML:n._s(n.texts[n.index-1])}})])},o=[],i=(t("a9e3"),{name:"tSection",props:{index:{type:Number,require:!0}},computed:{tclass:function(){return 1==this.index||14==this.index||this.index>=21&&this.index<=30?"pureWhite":2==this.index||3==this.index?"gray":this.index<=13||this.index<=20||26==this.index?"banana":"pureBlack"}},data:function(){return{texts:["<h2>공상 여행을 떠나시겠습니까?</h2>\n심리테스트 형식의 예술 프로젝트\n\t","여기 회색인간이 있습니다.<br/>\n현실에 지쳐<br/>\n본인의 색깔을 잃어버린 존재죠.","어느 날,<br/>\n바닥을 보며 터벅터벅 걷던 회색 인간은<br/>\n바닥에 떨어진 무언가를 발견합니다.","“안녕하세요 <br/>\n 베란다토마토의 공상티켓입니다”","공상을 하며 시간을 보내볼까요?<br/>\n멍때리며 시간을<br/>\n 흘릴 공상 티켓이 주어졌으니 말이죠","내 맘같지 않을 때","위로가 필요한 그런날","꼬여버린 끈처럼<br/>\n 자꾸 뭔가 잘못되어가는것같고 ","다음 날을<br/>\n마주할 준비가 되지않았는데<br/>\n또 다음 계절이 와버릴까 <br/>\n걱정이 되는 날","그런 후회와 걱정이 늘어가는 날","그런날은<br/>\n아무리  피곤해도<br/>\n잠이오질 않더라구요","당신도 혹시 그런 날을 마주하고있다면<br/>\n공상티켓을 들고 잠시 놀러오셔요","이곳은 언제나 당신을 환영한답니다.","그러더니 <br/>\n어디선가 노랫소리가 들립니다.","틱틱타카토<br/>\n멋진 유리 구두를 신고 ","룰루랄라<br/>\n 모두를 춤추게하는 <br/>\n댄싱쥬스가 되볼까 ","외계에 사는 존재를 그려보다가","저 반짝이는 달로 날아가볼까<br/>\n 나는 그곳에서 반짝이는 빛에 <br/>\n맞춰 노래를 부를꺼야 ","그러다가<br/>\n 친구를 만나게 되면 ","해를 닮은<br/>\n 뜨거운 미소로 인사를 보내보자 ","회색인간의 색깔을 되찾기 위한<br/>\n공상세계로의 여행 <br/>\n함께 떠나볼까요?","앞내용은 이민아작가의<br/>\n 베란다토마토 프로젝트 책,<br/>\n 몽상티켓 에서 발췌하였습니다."," 회색인간과 공상여행을<br/>\n 떠나기 위한 기차를 탔습니다","","“나는 이런 것들이 고민이야”<br/>\n회색인간은 한숨을 푹 내쉽니다.","","드디어 기차가 목적지에 도착했습니다","","주변을 두리번거리던 그 때<br/>\n 공상티켓에서 보았던 <br/>\n베란다토마토가 다가와 말을 겁니다","","회색인간과 가볍게 발걸음을 옮겨 보는 당신<br/>\n무언가 반짝이는 것이 보입니다.","","문을 열어 회색인간과 함께<br/>\n 안으로 들어가봅니다. <br/>\n문 안쪽 세상은 너무나도 아름답고 <br/>\n평화로워 마치 천국에 온 것 같은<br/>\n 기분이 듭니다","","정원은 형형색색의 반짝이는 열매로<br/>\n 가득차 있습니다.","","회색인간과 정원 곳곳을 뛰어다니며 놀던 중,<br/>\n 신비한 호수를 발견합니다.","","베란다토마토가 <br/>\n둥둥 하늘로 날아오릅니다.<br/>\n그러자  매우 좋은 향기가 납니다. ","","이제 현실로<br/>\n다시 돌아갈 시간이에요  ","","현실세계에 도착한 회색인간과 당신. <br/>\n이제 회색인간과도 작별할 시간입니다. <br/>\n회색인간이 말합니다.","","","","","회색인간의 본래 색깔은..",'안녕하세요<br/>\n이 심리테스트는 <br/>\n공상의 세계로 초대하여 <br/>\n지친하루를 위로하기 위한 작품들을 <br/>\n제작하는 시각예술작가 이민아의<br/>\n 상상으로부터 출발했습니다.<br/>\n 새벽에 마시는 <br/>\n따뜻한 레몬차같은<br/>\n 위로가 필요하다면,<br/>\n 내일은 더 바삭바삭하고 <br/>\n새콤달콤한 하루를 맞이하길 원한다면 <br/>\n이민아 작가의 사이트를 방문해주세요<br/>\n <a href="https://www.oxmlox.com">www.oxmlox.com</a><br/>\n<a href="https://www.instagram.com/veranda_tomato/">@veranda_tomato</a><br/>\n<a href="https://www.instagram.com/oxmlox/">@oxmlox</a>',"후원 / 서울문화재단, 사획적기업 위누 <br/>\n기획/ 이민아. 김주희 <br/>\n그림 / 이민아 <br/>\n글 / 김주희@artext_juhee , 이민아 <br/>\n디자인 /이민아@veranda_tomato<br/>\n개발 / 이재규 @gaekyul","<h2>빨강인간</h2><br/>\n회색인간의 본래 색깔은 빨간색입니다. <br/>\n매사에 열정이 넘치는 당신 덕분에<br/>\n 회색인간이 본래의 모습을<br/>\n 되찾을 수 있었어요!<br/>\n 매사에 열정이 넘치는 당신은 <br/>\n일상에서 활력이 넘치고,<br/>\n 새로운 일에 도전하는 것에도<br/>\n 거침이 없으며,<br/>\n 사랑할 때에도 누구보다도 뜨겁습니다. <br/>\n특유의 긍정적이고 생기 있는 에너지가<br/>\n 주변 사람들에게도 전파되어 <br/>\n활력소 역할을 하죠.<br/>\n 하지만 태양빛이 너무 뜨거우면 <br/>\n생명력이 없는 사막이 되어 버리는 것처럼,<br/>\n지나친 열정 뒤에는<br/>\n 종종 우울과 무기력함이 동반되기도 합니다.<br/>\n 격렬한 감정에 휩싸일 때는<br/>\n 감정으로부터 <br/>\n한 발자국 떨어져서 일기를 쓰며<br/>\n 자신의 마음을 위로해보세요.<br/>\n열정적인 당신의 일상을 응원합니다!","<h2>노랑인간</h2><br/>\n회색인간의 본래 색깔은 노란색입니다.<br/>\n 이루고 싶은 꿈이 <br/>\n무궁무진한 당신 덕분에 <br/>\n회색인간이 본래의 모습을 <br/>\n되찾을 수 있었어요!<br/>\n어린아이처럼 순수한 마음을 지닌<br/>\n 당신은 해보고 싶은 것, <br/>\n이루고 싶은 것이 많은 꿈쟁이입니다.<br/>\n 새콤달콤 발랄한 성격 덕분에 <br/>\n 덕분에 주변 사람들<br/>\n 역시 당신에게 <br/>\n큰 호감을 가지고 있답니다.<br/>\n하지만 봄이 되어<br/>\n 노오란 개나리가 피기만을 <br/>\n계속 기다리고 있으면<br/>\n 겨울이 더 길게 느껴지는 것처럼, <br/>\n꿈과 현실과의 괴리 속에서<br/>\n 종종 힘들어하기도 합니다.<br/>\n 당신의 꿈이 허무맹랑하게 느껴진다면 <br/>\n다른 사람들과 이야기를 나누며<br/>\n 현실적이고 구체적인 조언을 구해보세요.<br/>\n 꿈꾸는 당신의 일상을 응원합니다!","<h2>초록인간</h2><br/>\n회색인간의 본래 색깔은 초록색입니다. <br/>\n항상 마음 속에 평화를 품고<br/>\n 다니는 당신 덕분에<br/>\n 회색인간이 본래의 모습을<br/>\n되찾을 수 있었어요!<br/>\n자연을 사랑하고 <br/>\n일상에서의 힐링을 즐기는 당신은 <br/>\n온화하고 평화로운 성격의 소유자입니다. <br/>\n당신을 만나면<br/>\n 치유받는 듯한 느낌이 들기 때문에 <br/>\n주변 사람들이 항상 당신을 먼저 찾아오죠. <br/>\n하지만 작은 씨앗이 큰 고목이 되기까지<br/>\n 아주 오랜 시간이 걸리는 것처럼, <br/>\n당신의 평화지향적인 성격은 <br/>\n중간중간 나태함과 무기력함으로<br/>\n 이어지기도 합니다.<br/>\n단기적인 목표를 꾸준히 세우고 <br/>\n하루하루 작은 성취들을 이뤄내며<br/>\n 이를 기록해보세요.<br/>\n 평화로운 당신의 일상을 응원합니다!\n","<h2>파랑인간</h2><br/>\n회색인간의 본래 색깔은 파란색입니다. <br/>\n마음이 충만한 당신 덕분에 <br/>\n회색인간이 본래의 모습을 <br/>\n되찾을 수 있었어요!<br/>\n바다와도 같이 넓은 마음을 가진 당신은<br/>\n 관대하면서도 대범한 성격의 소유자로, <br/>\n일상을 충실히 꾸리면서도 과감한 변화도<br/>\n 맞이할 줄 아는 멋진 사람입니다. <br/>\n이해심 깊은 당신의 마음 덕분에<br/>\n 주변 사람들이 <br/>\n고민이 있을 때면 <br/>\n당신을 찾아와 위안을 얻고는 하죠.<br/>\n 하지만 바다가 아무리 넓다 한들 <br/>\n쓰레기를 버리면 오염되는 것처럼,<br/>\n 너무 많은 것들을 포용하려다 보면<br/>\n 당신의 마음이 지쳐버릴 수 있습니다. <br/>\n아니라고 생각되는 것에는 과감하게 <br/>\n“NO!”를 외치는 법을 연습해보세요. <br/>\n충만한 당신의 일상을 응원합니다!<br/>\n","<h2>보라인간</h2><br/>\n회색인간의 본래 색깔은 보라색입니다. <br/>\n일상 속에서도<br/>\n 낭만을 즐길 줄 아는 당신 덕분에 <br/>\n회색인간이 본래의 모습을<br/>\n 되찾을 수 있었어요!<br/>\n 가슴 깊은 곳 항상 로맨틱한<br/>\n 낭만을 품고 사는 당신은<br/>\n 예술을 사랑하고 삶을 진정으로<br/>\n 즐길 줄 아는 멋쟁이입니다.<br/>\n 당신의 매력적인 분위기와<br/>\n 개성있는 취향에 끌려 <br/>\n당신과 대화를 즐기고 싶은 사람들이<br/>\n 주변에 속속 모여들죠. <br/>\n하지만 보라빛 노을이 아름다운만큼 <br/>\n사람들을 우수에 잠기게도 하는 것처럼,<br/>\n 당신의 예민한 감수성은 때때로<br/>\n 당신을 힘들게 만들기도 합니다.<br/>\n 건강한 식사를 챙겨먹고 <br/>\n운동을 꾸준히 하며 <br/>\n규칙적인 일상을 보내기 위해<br/>\n 노력해보세요.<br/>\n 낭만적인 당신의 일상을 응원합니다!"],style:[]}}}),s=i,a=(t("24d3"),t("2877")),u=Object(a["a"])(s,r,o,!1,null,null,null);e["a"]=u.exports},"7a77":function(n,e,t){"use strict";function r(n){this.message=n}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,n.exports=r},"7aac":function(n,e,t){"use strict";var r=t("c532");n.exports=r.isStandardBrowserEnv()?function(){return{write:function(n,e,t,o,i,s){var a=[];a.push(n+"="+encodeURIComponent(e)),r.isNumber(t)&&a.push("expires="+new Date(t).toGMTString()),r.isString(o)&&a.push("path="+o),r.isString(i)&&a.push("domain="+i),!0===s&&a.push("secure"),document.cookie=a.join("; ")},read:function(n){var e=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},"83b9":function(n,e,t){"use strict";var r=t("d925"),o=t("e683");n.exports=function(n,e){return n&&!r(e)?o(n,e):e}},"848b":function(n,e,t){"use strict";var r=t("5cce").version,o={};["object","boolean","number","function","string","symbol"].forEach((function(n,e){o[n]=function(t){return typeof t===n||"a"+(e<1?"n ":" ")+n}}));var i={};function s(n,e,t){if("object"!==typeof n)throw new TypeError("options must be an object");var r=Object.keys(n),o=r.length;while(o-- >0){var i=r[o],s=e[i];if(s){var a=n[i],u=void 0===a||s(a,i,n);if(!0!==u)throw new TypeError("option "+i+" must be "+u)}else if(!0!==t)throw Error("Unknown option "+i)}}o.transitional=function(n,e,t){function o(n,e){return"[Axios v"+r+"] Transitional option '"+n+"'"+e+(t?". "+t:"")}return function(t,r,s){if(!1===n)throw new Error(o(r," has been removed"+(e?" in "+e:"")));return e&&!i[r]&&(i[r]=!0,console.warn(o(r," has been deprecated since v"+e+" and will be removed in the near future"))),!n||n(t,r,s)}},n.exports={assertOptions:s,validators:o}},"8df4":function(n,e,t){"use strict";var r=t("7a77");function o(n){if("function"!==typeof n)throw new TypeError("executor must be a function.");var e;this.promise=new Promise((function(n){e=n}));var t=this;this.promise.then((function(n){if(t._listeners){var e,r=t._listeners.length;for(e=0;e<r;e++)t._listeners[e](n);t._listeners=null}})),this.promise.then=function(n){var e,r=new Promise((function(n){t.subscribe(n),e=n})).then(n);return r.cancel=function(){t.unsubscribe(e)},r},n((function(n){t.reason||(t.reason=new r(n),e(t.reason))}))}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.prototype.subscribe=function(n){this.reason?n(this.reason):this._listeners?this._listeners.push(n):this._listeners=[n]},o.prototype.unsubscribe=function(n){if(this._listeners){var e=this._listeners.indexOf(n);-1!==e&&this._listeners.splice(e,1)}},o.source=function(){var n,e=new o((function(e){n=e}));return{token:e,cancel:n}},n.exports=o},b50d:function(n,e,t){"use strict";var r=t("c532"),o=t("467f"),i=t("7aac"),s=t("30b5"),a=t("83b9"),u=t("c345"),c=t("3934"),f=t("2d83"),l=t("2444"),p=t("7a77");n.exports=function(n){return new Promise((function(e,t){var h,d=n.data,b=n.headers,m=n.responseType;function v(){n.cancelToken&&n.cancelToken.unsubscribe(h),n.signal&&n.signal.removeEventListener("abort",h)}r.isFormData(d)&&delete b["Content-Type"];var g=new XMLHttpRequest;if(n.auth){var y=n.auth.username||"",w=n.auth.password?unescape(encodeURIComponent(n.auth.password)):"";b.Authorization="Basic "+btoa(y+":"+w)}var x=a(n.baseURL,n.url);function E(){if(g){var r="getAllResponseHeaders"in g?u(g.getAllResponseHeaders()):null,i=m&&"text"!==m&&"json"!==m?g.response:g.responseText,s={data:i,status:g.status,statusText:g.statusText,headers:r,config:n,request:g};o((function(n){e(n),v()}),(function(n){t(n),v()}),s),g=null}}if(g.open(n.method.toUpperCase(),s(x,n.params,n.paramsSerializer),!0),g.timeout=n.timeout,"onloadend"in g?g.onloadend=E:g.onreadystatechange=function(){g&&4===g.readyState&&(0!==g.status||g.responseURL&&0===g.responseURL.indexOf("file:"))&&setTimeout(E)},g.onabort=function(){g&&(t(f("Request aborted",n,"ECONNABORTED",g)),g=null)},g.onerror=function(){t(f("Network Error",n,null,g)),g=null},g.ontimeout=function(){var e=n.timeout?"timeout of "+n.timeout+"ms exceeded":"timeout exceeded",r=n.transitional||l.transitional;n.timeoutErrorMessage&&(e=n.timeoutErrorMessage),t(f(e,n,r.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",g)),g=null},r.isStandardBrowserEnv()){var S=(n.withCredentials||c(x))&&n.xsrfCookieName?i.read(n.xsrfCookieName):void 0;S&&(b[n.xsrfHeaderName]=S)}"setRequestHeader"in g&&r.forEach(b,(function(n,e){"undefined"===typeof d&&"content-type"===e.toLowerCase()?delete b[e]:g.setRequestHeader(e,n)})),r.isUndefined(n.withCredentials)||(g.withCredentials=!!n.withCredentials),m&&"json"!==m&&(g.responseType=n.responseType),"function"===typeof n.onDownloadProgress&&g.addEventListener("progress",n.onDownloadProgress),"function"===typeof n.onUploadProgress&&g.upload&&g.upload.addEventListener("progress",n.onUploadProgress),(n.cancelToken||n.signal)&&(h=function(n){g&&(t(!n||n&&n.type?new p("canceled"):n),g.abort(),g=null)},n.cancelToken&&n.cancelToken.subscribe(h),n.signal&&(n.signal.aborted?h():n.signal.addEventListener("abort",h))),d||(d=null),g.send(d)}))}},bc3a:function(n,e,t){n.exports=t("cee4")},c345:function(n,e,t){"use strict";var r=t("c532"),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];n.exports=function(n){var e,t,i,s={};return n?(r.forEach(n.split("\n"),(function(n){if(i=n.indexOf(":"),e=r.trim(n.substr(0,i)).toLowerCase(),t=r.trim(n.substr(i+1)),e){if(s[e]&&o.indexOf(e)>=0)return;s[e]="set-cookie"===e?(s[e]?s[e]:[]).concat([t]):s[e]?s[e]+", "+t:t}})),s):s}},c401:function(n,e,t){"use strict";var r=t("c532"),o=t("2444");n.exports=function(n,e,t){var i=this||o;return r.forEach(t,(function(t){n=t.call(i,n,e)})),n}},c532:function(n,e,t){"use strict";var r=t("1d2b"),o=Object.prototype.toString;function i(n){return"[object Array]"===o.call(n)}function s(n){return"undefined"===typeof n}function a(n){return null!==n&&!s(n)&&null!==n.constructor&&!s(n.constructor)&&"function"===typeof n.constructor.isBuffer&&n.constructor.isBuffer(n)}function u(n){return"[object ArrayBuffer]"===o.call(n)}function c(n){return"undefined"!==typeof FormData&&n instanceof FormData}function f(n){var e;return e="undefined"!==typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(n):n&&n.buffer&&n.buffer instanceof ArrayBuffer,e}function l(n){return"string"===typeof n}function p(n){return"number"===typeof n}function h(n){return null!==n&&"object"===typeof n}function d(n){if("[object Object]"!==o.call(n))return!1;var e=Object.getPrototypeOf(n);return null===e||e===Object.prototype}function b(n){return"[object Date]"===o.call(n)}function m(n){return"[object File]"===o.call(n)}function v(n){return"[object Blob]"===o.call(n)}function g(n){return"[object Function]"===o.call(n)}function y(n){return h(n)&&g(n.pipe)}function w(n){return"undefined"!==typeof URLSearchParams&&n instanceof URLSearchParams}function x(n){return n.trim?n.trim():n.replace(/^\s+|\s+$/g,"")}function E(){return("undefined"===typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!==typeof window&&"undefined"!==typeof document)}function S(n,e){if(null!==n&&"undefined"!==typeof n)if("object"!==typeof n&&(n=[n]),i(n))for(var t=0,r=n.length;t<r;t++)e.call(null,n[t],t,n);else for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&e.call(null,n[o],o,n)}function j(){var n={};function e(e,t){d(n[t])&&d(e)?n[t]=j(n[t],e):d(e)?n[t]=j({},e):i(e)?n[t]=e.slice():n[t]=e}for(var t=0,r=arguments.length;t<r;t++)S(arguments[t],e);return n}function A(n,e,t){return S(e,(function(e,o){n[o]=t&&"function"===typeof e?r(e,t):e})),n}function C(n){return 65279===n.charCodeAt(0)&&(n=n.slice(1)),n}n.exports={isArray:i,isArrayBuffer:u,isBuffer:a,isFormData:c,isArrayBufferView:f,isString:l,isNumber:p,isObject:h,isPlainObject:d,isUndefined:s,isDate:b,isFile:m,isBlob:v,isFunction:g,isStream:y,isURLSearchParams:w,isStandardBrowserEnv:E,forEach:S,merge:j,extend:A,trim:x,stripBOM:C}},c8af:function(n,e,t){"use strict";var r=t("c532");n.exports=function(n,e){r.forEach(n,(function(t,r){r!==e&&r.toUpperCase()===e.toUpperCase()&&(n[e]=t,delete n[r])}))}},cee4:function(n,e,t){"use strict";var r=t("c532"),o=t("1d2b"),i=t("0a06"),s=t("4a7b"),a=t("2444");function u(n){var e=new i(n),t=o(i.prototype.request,e);return r.extend(t,i.prototype,e),r.extend(t,e),t.create=function(e){return u(s(n,e))},t}var c=u(a);c.Axios=i,c.Cancel=t("7a77"),c.CancelToken=t("8df4"),c.isCancel=t("2e67"),c.VERSION=t("5cce").version,c.all=function(n){return Promise.all(n)},c.spread=t("0df6"),c.isAxiosError=t("5f02"),n.exports=c,n.exports.default=c},d1e4:function(n,e,t){},d925:function(n,e,t){"use strict";n.exports=function(n){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(n)}},df7c:function(n,e,t){(function(n){function t(n,e){for(var t=0,r=n.length-1;r>=0;r--){var o=n[r];"."===o?n.splice(r,1):".."===o?(n.splice(r,1),t++):t&&(n.splice(r,1),t--)}if(e)for(;t--;t)n.unshift("..");return n}function r(n){"string"!==typeof n&&(n+="");var e,t=0,r=-1,o=!0;for(e=n.length-1;e>=0;--e)if(47===n.charCodeAt(e)){if(!o){t=e+1;break}}else-1===r&&(o=!1,r=e+1);return-1===r?"":n.slice(t,r)}function o(n,e){if(n.filter)return n.filter(e);for(var t=[],r=0;r<n.length;r++)e(n[r],r,n)&&t.push(n[r]);return t}e.resolve=function(){for(var e="",r=!1,i=arguments.length-1;i>=-1&&!r;i--){var s=i>=0?arguments[i]:n.cwd();if("string"!==typeof s)throw new TypeError("Arguments to path.resolve must be strings");s&&(e=s+"/"+e,r="/"===s.charAt(0))}return e=t(o(e.split("/"),(function(n){return!!n})),!r).join("/"),(r?"/":"")+e||"."},e.normalize=function(n){var r=e.isAbsolute(n),s="/"===i(n,-1);return n=t(o(n.split("/"),(function(n){return!!n})),!r).join("/"),n||r||(n="."),n&&s&&(n+="/"),(r?"/":"")+n},e.isAbsolute=function(n){return"/"===n.charAt(0)},e.join=function(){var n=Array.prototype.slice.call(arguments,0);return e.normalize(o(n,(function(n,e){if("string"!==typeof n)throw new TypeError("Arguments to path.join must be strings");return n})).join("/"))},e.relative=function(n,t){function r(n){for(var e=0;e<n.length;e++)if(""!==n[e])break;for(var t=n.length-1;t>=0;t--)if(""!==n[t])break;return e>t?[]:n.slice(e,t-e+1)}n=e.resolve(n).substr(1),t=e.resolve(t).substr(1);for(var o=r(n.split("/")),i=r(t.split("/")),s=Math.min(o.length,i.length),a=s,u=0;u<s;u++)if(o[u]!==i[u]){a=u;break}var c=[];for(u=a;u<o.length;u++)c.push("..");return c=c.concat(i.slice(a)),c.join("/")},e.sep="/",e.delimiter=":",e.dirname=function(n){if("string"!==typeof n&&(n+=""),0===n.length)return".";for(var e=n.charCodeAt(0),t=47===e,r=-1,o=!0,i=n.length-1;i>=1;--i)if(e=n.charCodeAt(i),47===e){if(!o){r=i;break}}else o=!1;return-1===r?t?"/":".":t&&1===r?"/":n.slice(0,r)},e.basename=function(n,e){var t=r(n);return e&&t.substr(-1*e.length)===e&&(t=t.substr(0,t.length-e.length)),t},e.extname=function(n){"string"!==typeof n&&(n+="");for(var e=-1,t=0,r=-1,o=!0,i=0,s=n.length-1;s>=0;--s){var a=n.charCodeAt(s);if(47!==a)-1===r&&(o=!1,r=s+1),46===a?-1===e?e=s:1!==i&&(i=1):-1!==e&&(i=-1);else if(!o){t=s+1;break}}return-1===e||-1===r||0===i||1===i&&e===r-1&&e===t+1?"":n.slice(e,r)};var i="b"==="ab".substr(-1)?function(n,e,t){return n.substr(e,t)}:function(n,e,t){return e<0&&(e=n.length+e),n.substr(e,t)}}).call(this,t("4362"))},e683:function(n,e,t){"use strict";n.exports=function(n,e){return e?n.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):n}},f6b4:function(n,e,t){"use strict";var r=t("c532");function o(){this.handlers=[]}o.prototype.use=function(n,e,t){return this.handlers.push({fulfilled:n,rejected:e,synchronous:!!t&&t.synchronous,runWhen:t?t.runWhen:null}),this.handlers.length-1},o.prototype.eject=function(n){this.handlers[n]&&(this.handlers[n]=null)},o.prototype.forEach=function(n){r.forEach(this.handlers,(function(e){null!==e&&n(e)}))},n.exports=o},f6f8:function(n,e,t){"use strict";t.r(e);var r=function(){var n=this,e=n.$createElement,r=n._self._c||e;return r("div",{staticClass:"bg_orange"},[r("div",{staticClass:"front svg-wrapper path"},[r("simple-svg",{attrs:{src:t("2efd")}})],1),r("t-section",{attrs:{index:49}}),r("button",{staticClass:"bt3",on:{click:n.goFinalResult}},[r("h3",{domProps:{innerHTML:n._s("회색인간의<br/>본래 색깔 결과 보기")}})]),r("t-section",{staticClass:"back",attrs:{index:50}}),r("p",{staticClass:"footer"},[n._v("ⓒ 2021. 이민아 All Rights Reserved.")])],1)},o=[],i=t("71a3"),s=t("bc3a"),a=t.n(s),u={name:"result",components:{tSection:i["a"]},props:["color"],methods:{goFinalResult:function(){a.a.get("https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fq00.github.io%2Fveranda_tomato%2F&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false").then().catch(),this.$router.push({name:"color",params:{color:this.color}})}}},c=u,f=(t("17ce"),t("2877")),l=Object(f["a"])(c,r,o,!1,null,null,null);e["default"]=l.exports}}]);
//# sourceMappingURL=chunk-45bb6414.4bd22772.js.map