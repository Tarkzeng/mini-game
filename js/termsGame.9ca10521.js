(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["termsGame"],{"00b4":function(t,e,n){"use strict";n("ac1f");var r=n("23e7"),i=n("da84"),o=n("c65b"),c=n("e330"),a=n("1626"),u=n("861d"),s=function(){var t=!1,e=/[ac]/;return e.exec=function(){return t=!0,/./.exec.apply(this,arguments)},!0===e.test("abc")&&t}(),f=i.Error,l=c(/./.test);r({target:"RegExp",proto:!0,forced:!s},{test:function(t){var e=this.exec;if(!a(e))return l(this,t);var n=o(e,this,t);if(null!==n&&!u(n))throw new f("RegExp exec method returned something other than an Object or null");return!!n}})},"0366":function(t,e,n){var r=n("e330"),i=n("59ed"),o=r(r.bind);t.exports=function(t,e){return i(t),void 0===e?t:o?o(t,e):function(){return t.apply(e,arguments)}}},"057f":function(t,e,n){var r=n("c6b6"),i=n("fc6a"),o=n("241c").f,c=n("4dae"),a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],u=function(t){try{return o(t)}catch(e){return c(a)}};t.exports.f=function(t){return a&&"Window"==r(t)?u(t):o(i(t))}},"0b42":function(t,e,n){var r=n("da84"),i=n("e8b5"),o=n("68ee"),c=n("861d"),a=n("b622"),u=a("species"),s=r.Array;t.exports=function(t){var e;return i(t)&&(e=t.constructor,o(e)&&(e===s||i(e.prototype))?e=void 0:c(e)&&(e=e[u],null===e&&(e=void 0))),void 0===e?s:e}},"107c":function(t,e,n){var r=n("d039"),i=n("da84"),o=i.RegExp;t.exports=r((function(){var t=o("(?<a>b)","g");return"b"!==t.exec("b").groups.a||"bc"!=="b".replace(t,"$<a>c")}))},"1c7e":function(t,e,n){var r=n("b622"),i=r("iterator"),o=!1;try{var c=0,a={next:function(){return{done:!!c++}},return:function(){o=!0}};a[i]=function(){return this},Array.from(a,(function(){throw 2}))}catch(u){}t.exports=function(t,e){if(!e&&!o)return!1;var n=!1;try{var r={};r[i]=function(){return{next:function(){return{done:n=!0}}}},t(r)}catch(u){}return n}},"1dde":function(t,e,n){var r=n("d039"),i=n("b622"),o=n("2d00"),c=i("species");t.exports=function(t){return o>=51||!r((function(){var e=[],n=e.constructor={};return n[c]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"2a62":function(t,e,n){var r=n("c65b"),i=n("825a"),o=n("dc4a");t.exports=function(t,e,n){var c,a;i(t);try{if(c=o(t,"return"),!c){if("throw"===e)throw n;return n}c=r(c,t)}catch(u){a=!0,c=u}if("throw"===e)throw n;if(a)throw c;return i(c),n}},"2ba4":function(t,e){var n=Function.prototype,r=n.apply,i=n.bind,o=n.call;t.exports="object"==typeof Reflect&&Reflect.apply||(i?o.bind(r):function(){return o.apply(r,arguments)})},3425:function(t,e,n){},"35a1":function(t,e,n){var r=n("f5df"),i=n("dc4a"),o=n("3f8c"),c=n("b622"),a=c("iterator");t.exports=function(t){if(void 0!=t)return i(t,a)||i(t,"@@iterator")||o[r(t)]}},"428f":function(t,e,n){var r=n("da84");t.exports=r},"4dae":function(t,e,n){var r=n("da84"),i=n("23cb"),o=n("07fa"),c=n("8418"),a=r.Array,u=Math.max;t.exports=function(t,e,n){for(var r=o(t),s=i(e,r),f=i(void 0===n?r:n,r),l=a(u(f-s,0)),d=0;s<f;s++,d++)c(l,d,t[s]);return l.length=d,l}},"4df4":function(t,e,n){"use strict";var r=n("da84"),i=n("0366"),o=n("c65b"),c=n("7b0b"),a=n("9bdd"),u=n("e95a"),s=n("68ee"),f=n("07fa"),l=n("8418"),d=n("9a1f"),b=n("35a1"),h=r.Array;t.exports=function(t){var e=c(t),n=s(this),r=arguments.length,v=r>1?arguments[1]:void 0,p=void 0!==v;p&&(v=i(v,r>2?arguments[2]:void 0));var g,y,m,O,x,j,w=b(e),I=0;if(!w||this==h&&u(w))for(g=f(e),y=n?new this(g):h(g);g>I;I++)j=p?v(e[I],I):e[I],l(y,I,j);else for(O=d(e,w),x=O.next,y=n?new this:[];!(m=o(x,O)).done;I++)j=p?a(O,v,[m.value,I],!0):m.value,l(y,I,j);return y.length=I,y}},"65f0":function(t,e,n){var r=n("0b42");t.exports=function(t,e){return new(r(t))(0===e?0:e)}},"68ee":function(t,e,n){var r=n("e330"),i=n("d039"),o=n("1626"),c=n("f5df"),a=n("d066"),u=n("8925"),s=function(){},f=[],l=a("Reflect","construct"),d=/^\s*(?:class|function)\b/,b=r(d.exec),h=!d.exec(s),v=function(t){if(!o(t))return!1;try{return l(s,f,t),!0}catch(e){return!1}},p=function(t){if(!o(t))return!1;switch(c(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return h||!!b(d,u(t))}catch(e){return!0}};p.sham=!0,t.exports=!l||i((function(){var t;return v(v.call)||!v(Object)||!v((function(){t=!0}))||t}))?p:v},"746f":function(t,e,n){var r=n("428f"),i=n("1a2d"),o=n("e538"),c=n("9bf2").f;t.exports=function(t){var e=r.Symbol||(r.Symbol={});i(e,t)||c(e,t,{value:o.f(t)})}},8418:function(t,e,n){"use strict";var r=n("a04b"),i=n("9bf2"),o=n("5c6c");t.exports=function(t,e,n){var c=r(e);c in t?i.f(t,c,o(0,n)):t[c]=n}},9263:function(t,e,n){"use strict";var r=n("c65b"),i=n("e330"),o=n("577e"),c=n("ad6d"),a=n("9f7f"),u=n("5692"),s=n("7c73"),f=n("69f3").get,l=n("fce3"),d=n("107c"),b=u("native-string-replace",String.prototype.replace),h=RegExp.prototype.exec,v=h,p=i("".charAt),g=i("".indexOf),y=i("".replace),m=i("".slice),O=function(){var t=/a/,e=/b*/g;return r(h,t,"a"),r(h,e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),x=a.BROKEN_CARET,j=void 0!==/()??/.exec("")[1],w=O||j||x||l||d;w&&(v=function(t){var e,n,i,a,u,l,d,w=this,I=f(w),k=o(t),A=I.raw;if(A)return A.lastIndex=w.lastIndex,e=r(v,A,k),w.lastIndex=A.lastIndex,e;var S=I.groups,C=x&&w.sticky,R=r(c,w),E=w.source,N=0,T=k;if(C&&(R=y(R,"y",""),-1===g(R,"g")&&(R+="g"),T=m(k,w.lastIndex),w.lastIndex>0&&(!w.multiline||w.multiline&&"\n"!==p(k,w.lastIndex-1))&&(E="(?: "+E+")",T=" "+T,N++),n=new RegExp("^(?:"+E+")",R)),j&&(n=new RegExp("^"+E+"$(?!\\s)",R)),O&&(i=w.lastIndex),a=r(h,C?n:w,T),C?a?(a.input=m(a.input,N),a[0]=m(a[0],N),a.index=w.lastIndex,w.lastIndex+=a[0].length):w.lastIndex=0:O&&a&&(w.lastIndex=w.global?a.index+a[0].length:i),j&&a&&a.length>1&&r(b,a[0],n,(function(){for(u=1;u<arguments.length-2;u++)void 0===arguments[u]&&(a[u]=void 0)})),a&&S)for(a.groups=l=s(null),u=0;u<S.length;u++)d=S[u],l[d[0]]=a[d[1]];return a}),t.exports=v},"92c6":function(t,e,n){"use strict";n.r(e);var r=n("7a23"),i=function(t){return Object(r["C"])("data-v-43a60572"),t=t(),Object(r["A"])(),t},o={id:"number-game"},c={key:0},a={key:0,class:"question"},u={key:1,class:"question answer"},s=["onUpdate:modelValue","onClick"],f={key:1},l=i((function(){return Object(r["i"])("div",null,"题目",-1)})),d={class:"question"},b=i((function(){return Object(r["i"])("div",null,"答案",-1)})),h={class:"question"},v=["onClick"];function p(t,e,n,i,p,g){var y=this,m=Object(r["G"])("van-icon"),O=Object(r["G"])("van-row"),x=Object(r["G"])("van-nav-bar"),j=Object(r["G"])("van-cell"),w=Object(r["G"])("van-dialog");return Object(r["z"])(),Object(r["h"])("div",o,[p.checkAnswer?(Object(r["z"])(),Object(r["h"])("div",f,[Object(r["k"])(x,{"left-arrow":"",onClickLeft:g.onClickNavLeft,"right-text":"再来一次",title:"查看答案",onClickRight:g.gameAgain},null,8,["onClickLeft","onClickRight"]),l,Object(r["i"])("div",d,[(Object(r["z"])(!0),Object(r["h"])(r["a"],null,Object(r["F"])(p.question,(function(t,e){return Object(r["z"])(),Object(r["h"])("div",{class:"tag-item",key:e},Object(r["I"])(t),1)})),128))]),b,Object(r["i"])("div",h,[(Object(r["z"])(!0),Object(r["h"])(r["a"],null,Object(r["F"])(p.answer,(function(t,e){return Object(r["z"])(),Object(r["h"])("div",{class:Object(r["t"])(["tag-item",t!==p.question[e]?"tag-item-error":""]),key:e,onClick:function(t){return g.selectNum(e)}},Object(r["I"])(t),11,v)})),128))])])):(Object(r["z"])(),Object(r["h"])("div",c,[Object(r["k"])(x,{"left-arrow":"","right-text":p.isAnswering?"提交":"记好了",onClickLeft:g.onClickNavLeft,onClickRight:g.onClickNavRight},{title:Object(r["N"])((function(){return[Object(r["k"])(O,null,{default:Object(r["N"])((function(){return[Object(r["k"])(m,{name:"clock-o",size:"18"}),Object(r["i"])("div",null,Object(r["I"])(parseInt(p.countDown/60))+"分"+Object(r["I"])(p.countDown%60)+"秒",1)]})),_:1})]})),_:1},8,["right-text","onClickLeft","onClickRight"]),p.isAnswering?(Object(r["z"])(),Object(r["h"])("div",u,[(Object(r["z"])(!0),Object(r["h"])(r["a"],null,Object(r["F"])(p.answer,(function(t,e){return Object(r["O"])((Object(r["z"])(),Object(r["h"])("input",{class:Object(r["t"])(["tag-item",y.currentIndex===e?"tag-item-selected":""]),"onUpdate:modelValue":function(t){return p.answer[e]=t},key:e,onClick:function(t){return g.selectNum(e)}},null,10,s)),[[r["K"],p.answer[e]]])})),128))])):(Object(r["z"])(),Object(r["h"])("div",a,[(Object(r["z"])(!0),Object(r["h"])(r["a"],null,Object(r["F"])(p.question,(function(t,e){return Object(r["z"])(),Object(r["h"])("div",{class:"tag-item",key:e},Object(r["I"])(t),1)})),128))]))])),Object(r["k"])(w,{show:p.showResult,"onUpdate:show":e[0]||(e[0]=function(t){return p.showResult=t}),title:"游戏结果","show-cancel-button":"",confirmButtonText:"再来一次",onConfirm:g.gameAgain,cancelButtonText:"查看答案",onCancel:g.checkRightAnswer},{default:Object(r["N"])((function(){return[Object(r["k"])(j,null,{default:Object(r["N"])((function(){return[Object(r["j"])("总数量："+Object(r["I"])(p.count),1)]})),_:1}),Object(r["k"])(j,null,{default:Object(r["N"])((function(){return[Object(r["j"])("正确："+Object(r["I"])(p.rightCount),1)]})),_:1}),Object(r["k"])(j,null,{default:Object(r["N"])((function(){return[Object(r["j"])("错误："+Object(r["I"])(p.count-p.rightCount),1)]})),_:1}),Object(r["k"])(j,null,{default:Object(r["N"])((function(){return[Object(r["j"])("总共用时："+Object(r["I"])(parseInt(p.useTime/60))+"分"+Object(r["I"])(p.useTime%60)+"秒",1)]})),_:1})]})),_:1},8,["show","onConfirm","onCancel"])])}function g(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function y(t){if(Array.isArray(t))return g(t)}n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0"),n("a630");function m(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}n("fb6a"),n("b0c0"),n("ac1f"),n("00b4");function O(t,e){if(t){if("string"===typeof t)return g(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?g(t,e):void 0}}function x(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function j(t){return y(t)||m(t)||O(t)||x()}n("a434");var w={data:function(){return{dataSource:["聪明","害羞","就是","晚上","其实","坚持","是的","次数","大地","偶数","集合","冲浪","光明","胆大","别说","夏天","珍惜","放弃","好像","安康","山川","河流","国家","民族"],answer:[],question:[],count:0,time:0,countDown:0,inputText:"",isAnswering:!1,currentIndex:0,showResult:!1,rightCount:0,useTime:0,timer:null,checkAnswer:!1}},methods:{onInput:function(t){"←"===t?this.currentIndex>0&&this.currentIndex--:("→"===t||this.answer.splice(this.currentIndex,1,t),this.currentIndex<this.count-1&&this.currentIndex++)},onDelete:function(){this.currentIndex>0&&(this.answer.splice(this.currentIndex-1,1," "),this.currentIndex--)},onClickNavLeft:function(){this.destroyGameInfo(),this.$router.back()},onClickNavRight:function(){this.isAnswering?this.gameOver():this.isAnswering=!0},selectNum:function(t){this.checkAnswer||(this.currentIndex=t,this.isAnswering=!0)},initGame:function(){var t=this.$route.params,e=t.count,n=t.time;this.count=parseInt(e),this.time=60*parseInt(n),this.countDown=this.time;for(var r=[],i=[],o=j(this.dataSource),c=0;c<e;c++)if(o.length>0){var a=Math.floor(Math.random()*o.length);r.push(o.splice(a,1)[0]),i.push("")}this.question=r,this.answer=i;var u=this;this.timer=setInterval((function(){u.countDown>0?u.countDown--:u.gameOver()}),1e3),this.checkAnswer=!1,this.showResult=!1,this.isAnswering=!1,this.currentIndex=0,this.useTime=0,this.rightCount=0},gameOver:function(){this.destroyGameInfo();var t=this.time-this.countDown;this.useTime=t;for(var e=0,n=0;n<this.question.length;n++){var r=this.question[n],i=this.answer[n];r===i&&e++}this.rightCount=e,this.showResult=!0},gameAgain:function(){this.initGame()},checkRightAnswer:function(){this.checkAnswer=!0},destroyGameInfo:function(){this.timer&&(clearInterval(this.timer),this.timer=null)}},mounted:function(){this.initGame()}},I=(n("a568"),n("d959")),k=n.n(I);const A=k()(w,[["render",p],["__scopeId","data-v-43a60572"]]);e["default"]=A},"9a1f":function(t,e,n){var r=n("da84"),i=n("c65b"),o=n("59ed"),c=n("825a"),a=n("0d51"),u=n("35a1"),s=r.TypeError;t.exports=function(t,e){var n=arguments.length<2?u(t):e;if(o(n))return c(i(n,t));throw s(a(t)+" is not iterable")}},"9bdd":function(t,e,n){var r=n("825a"),i=n("2a62");t.exports=function(t,e,n,o){try{return o?e(r(n)[0],n[1]):e(n)}catch(c){i(t,"throw",c)}}},"9f7f":function(t,e,n){var r=n("d039"),i=n("da84"),o=i.RegExp,c=r((function(){var t=o("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),a=c||r((function(){return!o("a","y").sticky})),u=c||r((function(){var t=o("^r","gy");return t.lastIndex=2,null!=t.exec("str")}));t.exports={BROKEN_CARET:u,MISSED_STICKY:a,UNSUPPORTED_Y:c}},a434:function(t,e,n){"use strict";var r=n("23e7"),i=n("da84"),o=n("23cb"),c=n("5926"),a=n("07fa"),u=n("7b0b"),s=n("65f0"),f=n("8418"),l=n("1dde"),d=l("splice"),b=i.TypeError,h=Math.max,v=Math.min,p=9007199254740991,g="Maximum allowed length exceeded";r({target:"Array",proto:!0,forced:!d},{splice:function(t,e){var n,r,i,l,d,y,m=u(this),O=a(m),x=o(t,O),j=arguments.length;if(0===j?n=r=0:1===j?(n=0,r=O-x):(n=j-2,r=v(h(c(e),0),O-x)),O+n-r>p)throw b(g);for(i=s(m,r),l=0;l<r;l++)d=x+l,d in m&&f(i,l,m[d]);if(i.length=r,n<r){for(l=x;l<O-r;l++)d=l+r,y=l+n,d in m?m[y]=m[d]:delete m[y];for(l=O;l>O-r+n;l--)delete m[l-1]}else if(n>r)for(l=O-r;l>x;l--)d=l+r-1,y=l+n-1,d in m?m[y]=m[d]:delete m[y];for(l=0;l<n;l++)m[l+x]=arguments[l+2];return m.length=O-r+n,i}})},a4d3:function(t,e,n){"use strict";var r=n("23e7"),i=n("da84"),o=n("d066"),c=n("2ba4"),a=n("c65b"),u=n("e330"),s=n("c430"),f=n("83ab"),l=n("4930"),d=n("d039"),b=n("1a2d"),h=n("e8b5"),v=n("1626"),p=n("861d"),g=n("3a9b"),y=n("d9b5"),m=n("825a"),O=n("7b0b"),x=n("fc6a"),j=n("a04b"),w=n("577e"),I=n("5c6c"),k=n("7c73"),A=n("df75"),S=n("241c"),C=n("057f"),R=n("7418"),E=n("06cf"),N=n("9bf2"),T=n("37e8"),z=n("d1e7"),G=n("f36a"),_=n("6eeb"),q=n("5692"),D=n("f772"),F=n("d012"),P=n("90e3"),M=n("b622"),L=n("e538"),$=n("746f"),U=n("d44e"),B=n("69f3"),J=n("b727").forEach,K=D("hidden"),V="Symbol",Y="prototype",Q=M("toPrimitive"),W=B.set,X=B.getterFor(V),H=Object[Y],Z=i.Symbol,tt=Z&&Z[Y],et=i.TypeError,nt=i.QObject,rt=o("JSON","stringify"),it=E.f,ot=N.f,ct=C.f,at=z.f,ut=u([].push),st=q("symbols"),ft=q("op-symbols"),lt=q("string-to-symbol-registry"),dt=q("symbol-to-string-registry"),bt=q("wks"),ht=!nt||!nt[Y]||!nt[Y].findChild,vt=f&&d((function(){return 7!=k(ot({},"a",{get:function(){return ot(this,"a",{value:7}).a}})).a}))?function(t,e,n){var r=it(H,e);r&&delete H[e],ot(t,e,n),r&&t!==H&&ot(H,e,r)}:ot,pt=function(t,e){var n=st[t]=k(tt);return W(n,{type:V,tag:t,description:e}),f||(n.description=e),n},gt=function(t,e,n){t===H&&gt(ft,e,n),m(t);var r=j(e);return m(n),b(st,r)?(n.enumerable?(b(t,K)&&t[K][r]&&(t[K][r]=!1),n=k(n,{enumerable:I(0,!1)})):(b(t,K)||ot(t,K,I(1,{})),t[K][r]=!0),vt(t,r,n)):ot(t,r,n)},yt=function(t,e){m(t);var n=x(e),r=A(n).concat(wt(n));return J(r,(function(e){f&&!a(Ot,n,e)||gt(t,e,n[e])})),t},mt=function(t,e){return void 0===e?k(t):yt(k(t),e)},Ot=function(t){var e=j(t),n=a(at,this,e);return!(this===H&&b(st,e)&&!b(ft,e))&&(!(n||!b(this,e)||!b(st,e)||b(this,K)&&this[K][e])||n)},xt=function(t,e){var n=x(t),r=j(e);if(n!==H||!b(st,r)||b(ft,r)){var i=it(n,r);return!i||!b(st,r)||b(n,K)&&n[K][r]||(i.enumerable=!0),i}},jt=function(t){var e=ct(x(t)),n=[];return J(e,(function(t){b(st,t)||b(F,t)||ut(n,t)})),n},wt=function(t){var e=t===H,n=ct(e?ft:x(t)),r=[];return J(n,(function(t){!b(st,t)||e&&!b(H,t)||ut(r,st[t])})),r};if(l||(Z=function(){if(g(tt,this))throw et("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?w(arguments[0]):void 0,e=P(t),n=function(t){this===H&&a(n,ft,t),b(this,K)&&b(this[K],e)&&(this[K][e]=!1),vt(this,e,I(1,t))};return f&&ht&&vt(H,e,{configurable:!0,set:n}),pt(e,t)},tt=Z[Y],_(tt,"toString",(function(){return X(this).tag})),_(Z,"withoutSetter",(function(t){return pt(P(t),t)})),z.f=Ot,N.f=gt,T.f=yt,E.f=xt,S.f=C.f=jt,R.f=wt,L.f=function(t){return pt(M(t),t)},f&&(ot(tt,"description",{configurable:!0,get:function(){return X(this).description}}),s||_(H,"propertyIsEnumerable",Ot,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!l,sham:!l},{Symbol:Z}),J(A(bt),(function(t){$(t)})),r({target:V,stat:!0,forced:!l},{for:function(t){var e=w(t);if(b(lt,e))return lt[e];var n=Z(e);return lt[e]=n,dt[n]=e,n},keyFor:function(t){if(!y(t))throw et(t+" is not a symbol");if(b(dt,t))return dt[t]},useSetter:function(){ht=!0},useSimple:function(){ht=!1}}),r({target:"Object",stat:!0,forced:!l,sham:!f},{create:mt,defineProperty:gt,defineProperties:yt,getOwnPropertyDescriptor:xt}),r({target:"Object",stat:!0,forced:!l},{getOwnPropertyNames:jt,getOwnPropertySymbols:wt}),r({target:"Object",stat:!0,forced:d((function(){R.f(1)}))},{getOwnPropertySymbols:function(t){return R.f(O(t))}}),rt){var It=!l||d((function(){var t=Z();return"[null]"!=rt([t])||"{}"!=rt({a:t})||"{}"!=rt(Object(t))}));r({target:"JSON",stat:!0,forced:It},{stringify:function(t,e,n){var r=G(arguments),i=e;if((p(e)||void 0!==t)&&!y(t))return h(e)||(e=function(t,e){if(v(i)&&(e=a(i,this,t,e)),!y(e))return e}),r[1]=e,c(rt,null,r)}})}if(!tt[Q]){var kt=tt.valueOf;_(tt,Q,(function(t){return a(kt,this)}))}U(Z,V),F[K]=!0},a568:function(t,e,n){"use strict";n("3425")},a630:function(t,e,n){var r=n("23e7"),i=n("4df4"),o=n("1c7e"),c=!o((function(t){Array.from(t)}));r({target:"Array",stat:!0,forced:c},{from:i})},ac1f:function(t,e,n){"use strict";var r=n("23e7"),i=n("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==i},{exec:i})},ad6d:function(t,e,n){"use strict";var r=n("825a");t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},b0c0:function(t,e,n){var r=n("83ab"),i=n("5e77").EXISTS,o=n("e330"),c=n("9bf2").f,a=Function.prototype,u=o(a.toString),s=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,f=o(s.exec),l="name";r&&!i&&c(a,l,{configurable:!0,get:function(){try{return f(s,u(this))[1]}catch(t){return""}}})},b727:function(t,e,n){var r=n("0366"),i=n("e330"),o=n("44ad"),c=n("7b0b"),a=n("07fa"),u=n("65f0"),s=i([].push),f=function(t){var e=1==t,n=2==t,i=3==t,f=4==t,l=6==t,d=7==t,b=5==t||l;return function(h,v,p,g){for(var y,m,O=c(h),x=o(O),j=r(v,p),w=a(x),I=0,k=g||u,A=e?k(h,w):n||d?k(h,0):void 0;w>I;I++)if((b||I in x)&&(y=x[I],m=j(y,I,O),t))if(e)A[I]=m;else if(m)switch(t){case 3:return!0;case 5:return y;case 6:return I;case 2:s(A,y)}else switch(t){case 4:return!1;case 7:s(A,y)}return l?-1:i||f?f:A}};t.exports={forEach:f(0),map:f(1),filter:f(2),some:f(3),every:f(4),find:f(5),findIndex:f(6),filterReject:f(7)}},d28b:function(t,e,n){var r=n("746f");r("iterator")},e01a:function(t,e,n){"use strict";var r=n("23e7"),i=n("83ab"),o=n("da84"),c=n("e330"),a=n("1a2d"),u=n("1626"),s=n("3a9b"),f=n("577e"),l=n("9bf2").f,d=n("e893"),b=o.Symbol,h=b&&b.prototype;if(i&&u(b)&&(!("description"in h)||void 0!==b().description)){var v={},p=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:f(arguments[0]),e=s(h,this)?new b(t):void 0===t?b():b(t);return""===t&&(v[e]=!0),e};d(p,b),p.prototype=h,h.constructor=p;var g="Symbol(test)"==String(b("test")),y=c(h.toString),m=c(h.valueOf),O=/^Symbol\((.*)\)[^)]+$/,x=c("".replace),j=c("".slice);l(h,"description",{configurable:!0,get:function(){var t=m(this),e=y(t);if(a(v,t))return"";var n=g?j(e,7,-1):x(e,O,"$1");return""===n?void 0:n}}),r({global:!0,forced:!0},{Symbol:p})}},e538:function(t,e,n){var r=n("b622");e.f=r},e8b5:function(t,e,n){var r=n("c6b6");t.exports=Array.isArray||function(t){return"Array"==r(t)}},e95a:function(t,e,n){var r=n("b622"),i=n("3f8c"),o=r("iterator"),c=Array.prototype;t.exports=function(t){return void 0!==t&&(i.Array===t||c[o]===t)}},f36a:function(t,e,n){var r=n("e330");t.exports=r([].slice)},fb6a:function(t,e,n){"use strict";var r=n("23e7"),i=n("da84"),o=n("e8b5"),c=n("68ee"),a=n("861d"),u=n("23cb"),s=n("07fa"),f=n("fc6a"),l=n("8418"),d=n("b622"),b=n("1dde"),h=n("f36a"),v=b("slice"),p=d("species"),g=i.Array,y=Math.max;r({target:"Array",proto:!0,forced:!v},{slice:function(t,e){var n,r,i,d=f(this),b=s(d),v=u(t,b),m=u(void 0===e?b:e,b);if(o(d)&&(n=d.constructor,c(n)&&(n===g||o(n.prototype))?n=void 0:a(n)&&(n=n[p],null===n&&(n=void 0)),n===g||void 0===n))return h(d,v,m);for(r=new(void 0===n?g:n)(y(m-v,0)),i=0;v<m;v++,i++)v in d&&l(r,i,d[v]);return r.length=i,r}})},fce3:function(t,e,n){var r=n("d039"),i=n("da84"),o=i.RegExp;t.exports=r((function(){var t=o(".","s");return!(t.dotAll&&t.exec("\n")&&"s"===t.flags)}))}}]);
//# sourceMappingURL=termsGame.9ca10521.js.map