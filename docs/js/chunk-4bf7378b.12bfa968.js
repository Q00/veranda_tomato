(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4bf7378b"],{"64e6":function(t,e,a){"use strict";a("9356")},9356:function(t,e,a){},eaf8:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:t.bclass.c},[a("top",{staticClass:"front",attrs:{index:49}}),a("image-loading",{attrs:{index:t.color}}),a("t-section",{attrs:{index:t.bclass.i}}),a("button",{staticClass:"bt3",on:{click:t.share}},[a("h3",{domProps:{innerHTML:t._s("결과 공유하기")}})]),a("button",{staticClass:"bt4",on:{click:t.back}},[a("h3",{domProps:{innerHTML:t._s("다시하기")}})]),a("p",{staticClass:"footer"},[t._v("ⓒ 2021. 이민아 All Rights Reserved.")])],1)},c=[],n=a("1451"),r=a("d1b7"),o=a("71a3"),i={name:"color",props:["color"],components:{top:n["a"],imageLoading:r["a"],tSection:o["a"]},computed:{bclass:function(){switch(this.color){case"r":return{c:"bg_red",i:51};case"y":return{c:"bg_yellow",i:52};case"g":return{c:"bg_green",i:53};case"b":return{c:"bg_blue",i:54};default:return{c:"bg_purple",i:55}}}},methods:{share:function(){var t="";switch(this.color){case"r":t="빨강색";break;case"y":t="노란색";break;case"g":t="초록색";break;default:t="파랑색"}var e="베란다 토마토 심리테스트",a="내 회색인간은 ".concat(t," 색! 회색인간의 색을 맞춰보세요!"),s="https://q00.github.io/veranda_tomato";navigator.share?navigator.share({title:e,text:a,url:s}).then().catch((function(t){return console.log(t)})):alert("공유하기를 지원하지 않는 환경입니다.")},back:function(){this.$router.push("/")}}},l=i,u=(a("64e6"),a("2877")),b=Object(u["a"])(l,s,c,!1,null,null,null);e["default"]=b.exports}}]);
//# sourceMappingURL=chunk-4bf7378b.12bfa968.js.map