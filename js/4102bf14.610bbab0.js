(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["4102bf14"],{6870:function(t,e,a){},eb60:function(t,e,a){"use strict";var r=a("6870"),n=a.n(r);n.a},f241:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-layout",{attrs:{view:"lHh Lpr lFf"}},[a("q-layout-header",[a("q-toolbar",{attrs:{color:"purple",glossy:"mat"===t.$q.theme,inverted:"ios"===t.$q.theme}},[a("q-btn",{attrs:{flat:"",dense:"",round:"","aria-label":"Menu"},on:{click:function(e){t.leftDrawerOpen=!t.leftDrawerOpen}}},[a("q-icon",{attrs:{name:"menu"}})],1),a("q-toolbar-title",[t._v("\n        Quasar App\n        "),a("div",{attrs:{slot:"subtitle"},slot:"subtitle"},[t._v("Running on Quasar v"+t._s(t.$q.version))])])],1)],1),a("q-layout-drawer",{attrs:{"content-class":"mat"===t.$q.theme?"bg-grey-2":null},model:{value:t.leftDrawerOpen,callback:function(e){t.leftDrawerOpen=e},expression:"leftDrawerOpen"}},[a("q-list",{attrs:{"no-border":"",link:"","inset-delimiter":""}},[a("q-list-header",[t._v("Essential Links")]),a("q-item",{nativeOn:{click:function(e){t.openURL("http://quasar-framework.org")}}},[a("q-item-side",{attrs:{icon:"school"}}),a("q-item-main",{attrs:{label:"Docs",sublabel:"quasar-framework.org"}})],1),a("q-item",{nativeOn:{click:function(e){t.openURL("https://github.com/quasarframework/")}}},[a("q-item-side",{attrs:{icon:"code"}}),a("q-item-main",{attrs:{label:"GitHub",sublabel:"github.com/quasarframework"}})],1),a("q-item",{nativeOn:{click:function(e){t.openURL("https://discord.gg/5TDhbDg")}}},[a("q-item-side",{attrs:{icon:"chat"}}),a("q-item-main",{attrs:{label:"Discord Chat Channel",sublabel:"https://discord.gg/5TDhbDg"}})],1),a("q-item",{nativeOn:{click:function(e){t.openURL("http://forum.quasar-framework.org")}}},[a("q-item-side",{attrs:{icon:"record_voice_over"}}),a("q-item-main",{attrs:{label:"Forum",sublabel:"forum.quasar-framework.org"}})],1),a("q-item",{nativeOn:{click:function(e){t.openURL("https://twitter.com/quasarframework")}}},[a("q-item-side",{attrs:{icon:"rss feed"}}),a("q-item-main",{attrs:{label:"Twitter",sublabel:"@quasarframework"}})],1)],1)],1),a("q-page-container",[a("router-view")],1)],1)},n=[];r._withStripped=!0;var i=a("a60d"),o=function(t,e){if(i["a"].is.cordova&&navigator&&navigator.app)return navigator.app.loadUrl(t,{openExternal:!0});var a=window.open(t,"_blank");if(a)return a.focus(),a;e&&e()},s={name:"MyLayout",data:function(){return{leftDrawerOpen:this.$q.platform.is.desktop}},methods:{openURL:o}},l=s,u=(a("eb60"),a("2877")),c=Object(u["a"])(l,r,n,!1,null,null,null);c.options.__file="MyLayout.vue";e["default"]=c.exports}}]);