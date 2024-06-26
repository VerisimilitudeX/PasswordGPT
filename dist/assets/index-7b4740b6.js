var ze=Object.defineProperty;var qe=(e,t,n)=>t in e?ze(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var ie=(e,t,n)=>(qe(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const r of l)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(l){const r={};return l.integrity&&(r.integrity=l.integrity),l.referrerPolicy&&(r.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?r.credentials="include":l.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(l){if(l.ep)return;l.ep=!0;const r=n(l);fetch(l.href,r)}})();function M(){}function De(e,t){for(const n in t)e[n]=t[n];return e}function Ue(e){return e()}function ke(){return Object.create(null)}function B(e){e.forEach(Ue)}function ee(e){return typeof e=="function"}function te(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function He(e){return Object.keys(e).length===0}function Ve(e,...t){if(e==null){for(const s of t)s(void 0);return M}const n=e.subscribe(...t);return n.unsubscribe?()=>n.unsubscribe():n}function Ke(e,t,n,s){if(e){const l=je(e,t,n,s);return e[0](l)}}function je(e,t,n,s){return e[1]&&s?De(n.ctx.slice(),e[1](s(t))):n.ctx}function We(e,t,n,s){if(e[2]&&s){const l=e[2](s(n));if(t.dirty===void 0)return l;if(typeof l=="object"){const r=[],o=Math.max(t.dirty.length,l.length);for(let u=0;u<o;u+=1)r[u]=t.dirty[u]|l[u];return r}return t.dirty|l}return t.dirty}function Je(e,t,n,s,l,r){if(l){const o=je(t,n,s,r);e.p(o,l)}}function Qe(e){if(e.ctx.length>32){const t=[],n=e.ctx.length/32;for(let s=0;s<n;s++)t[s]=-1;return t}return-1}function Xe(e){return e&&ee(e.destroy)?e.destroy:M}function f(e,t){e.appendChild(t)}function k(e,t,n){e.insertBefore(t,n||null)}function w(e){e.parentNode&&e.parentNode.removeChild(e)}function Ze(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function b(e){return document.createElement(e)}function P(e){return document.createTextNode(e)}function S(){return P(" ")}function Ie(){return P("")}function W(e,t,n,s){return e.addEventListener(t,n,s),()=>e.removeEventListener(t,n,s)}function g(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function xe(e){return Array.from(e.childNodes)}function A(e,t){t=""+t,e.data!==t&&(e.data=t)}function Pe(e,t){e.value=t??""}function ce(e,t,n,s){n==null?e.style.removeProperty(t):e.style.setProperty(t,n,s?"important":"")}let J;function K(e){J=e}function _e(){if(!J)throw new Error("Function called outside component initialization");return J}function et(e){_e().$$.on_mount.push(e)}function tt(e,t){return _e().$$.context.set(e,t),t}function nt(e){return _e().$$.context.get(e)}const D=[],Se=[];let H=[];const Ee=[],st=Promise.resolve();let fe=!1;function lt(){fe||(fe=!0,st.then(Re))}function ae(e){H.push(e)}const ue=new Set;let z=0;function Re(){if(z!==0)return;const e=J;do{try{for(;z<D.length;){const t=D[z];z++,K(t),ot(t.$$)}}catch(t){throw D.length=0,z=0,t}for(K(null),D.length=0,z=0;Se.length;)Se.pop()();for(let t=0;t<H.length;t+=1){const n=H[t];ue.has(n)||(ue.add(n),n())}H.length=0}while(D.length);for(;Ee.length;)Ee.pop()();fe=!1,ue.clear(),K(e)}function ot(e){if(e.fragment!==null){e.update(),B(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(ae)}}function rt(e){const t=[],n=[];H.forEach(s=>e.indexOf(s)===-1?t.push(s):n.push(s)),n.forEach(s=>s()),H=t}const x=new Set;let R;function me(){R={r:0,c:[],p:R}}function he(){R.r||B(R.c),R=R.p}function N(e,t){e&&e.i&&(x.delete(e),e.i(t))}function F(e,t,n,s){if(e&&e.o){if(x.has(e))return;x.add(e),R.c.push(()=>{x.delete(e),s&&(n&&e.d(1),s())}),e.o(t)}else s&&s()}function Ce(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function ge(e){e&&e.c()}function ne(e,t,n){const{fragment:s,after_update:l}=e.$$;s&&s.m(t,n),ae(()=>{const r=e.$$.on_mount.map(Ue).filter(ee);e.$$.on_destroy?e.$$.on_destroy.push(...r):B(r),e.$$.on_mount=[]}),l.forEach(ae)}function se(e,t){const n=e.$$;n.fragment!==null&&(rt(n.after_update),B(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function it(e,t){e.$$.dirty[0]===-1&&(D.push(e),lt(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function be(e,t,n,s,l,r,o=null,u=[-1]){const i=J;K(e);const c=e.$$={fragment:null,ctx:[],props:r,update:M,not_equal:l,bound:ke(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(i?i.$$.context:[])),callbacks:ke(),dirty:u,skip_bound:!1,root:t.target||i.$$.root};o&&o(c.root);let m=!1;if(c.ctx=n?n(e,t.props||{},(d,h,...a)=>{const $=a.length?a[0]:h;return c.ctx&&l(c.ctx[d],c.ctx[d]=$)&&(!c.skip_bound&&c.bound[d]&&c.bound[d]($),m&&it(e,d)),h}):[],c.update(),m=!0,B(c.before_update),c.fragment=s?s(c.ctx):!1,t.target){if(t.hydrate){const d=xe(t.target);c.fragment&&c.fragment.l(d),d.forEach(w)}else c.fragment&&c.fragment.c();t.intro&&N(e.$$.fragment),ne(e,t.target,t.anchor),Re()}K(i)}class ve{constructor(){ie(this,"$$");ie(this,"$$set")}$destroy(){se(this,1),this.$destroy=M}$on(t,n){if(!ee(n))return M;const s=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return s.push(n),()=>{const l=s.indexOf(n);l!==-1&&s.splice(l,1)}}$set(t){this.$$set&&!He(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const ut="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(ut);var ct=Object.defineProperty,ft=(e,t)=>{for(var n in t)ct(e,n,{get:t[n],enumerable:!0})},at={};ft(at,{convertFileSrc:()=>pt,invoke:()=>pe,transformCallback:()=>de});function dt(){return window.crypto.getRandomValues(new Uint32Array(1))[0]}function de(e,t=!1){let n=dt(),s=`_${n}`;return Object.defineProperty(window,s,{value:l=>(t&&Reflect.deleteProperty(window,s),e==null?void 0:e(l)),writable:!1,configurable:!0}),n}async function pe(e,t={}){return new Promise((n,s)=>{let l=de(o=>{n(o),Reflect.deleteProperty(window,`_${r}`)},!0),r=de(o=>{s(o),Reflect.deleteProperty(window,`_${l}`)},!0);window.__TAURI_IPC__({cmd:e,callback:l,error:r,...t})})}function pt(e,t="asset"){return window.__TAURI__.convertFileSrc(e,t)}const q=[];function _t(e,t=M){let n;const s=new Set;function l(u){if(te(e,u)&&(e=u,n)){const i=!q.length;for(const c of s)c[1](),q.push(c,e);if(i){for(let c=0;c<q.length;c+=2)q[c][0](q[c+1]);q.length=0}}}function r(u){l(u(e))}function o(u,i=M){const c=[u,i];return s.add(c),s.size===1&&(n=t(l,r)||M),u(e),()=>{s.delete(c),s.size===0&&n&&(n(),n=null)}}return{set:l,update:r,subscribe:o}}function mt(e,t={enabled:!0}){let{enabled:n,eventType:s,nodeForEvent:l,options:r,capture:o}=Le(t);function u(i){i.target&&e&&!e.contains(i.target)&&!i.defaultPrevented&&e.dispatchEvent(new CustomEvent("clickoutside",{detail:i}))}return t.enabled!==!1&&l.addEventListener(s,u,r),{update(i){l.removeEventListener(s,u,o),{enabled:n,eventType:s,nodeForEvent:l,options:r,capture:o}=Le(i),n&&l.addEventListener(s,u,r)},destroy(){l.removeEventListener(s,u,o)}}}function Le(e={}){var t,n;return{enabled:e.enabled??!0,nodeForEvent:((t=e.limit)==null?void 0:t.parent)??document,eventType:e.event??"click",options:e.options,capture:typeof e.options=="object"?(n=e.options)==null?void 0:n.capture:e.options}}function Oe(e){let t,n;const s=e[5].default,l=Ke(s,e,e[4],null);return{c(){t=b("div"),l&&l.c(),g(t,"class","dropdown svelte-180dd7u")},m(r,o){k(r,t,o),l&&l.m(t,null),n=!0},p(r,o){l&&l.p&&(!n||o&16)&&Je(l,s,r,r[4],n?We(s,r[4],o,null):Qe(r[4]),null)},i(r){n||(N(l,r),n=!0)},o(r){F(l,r),n=!1},d(r){r&&w(t),l&&l.d(r)}}}function ht(e){let t,n=(e[2]?e[2].name:"No GPU detected")+"",s,l,r,o,u,i,c,m,d=e[1]&&Oe(e);return{c(){t=b("div"),s=P(n),l=S(),r=b("span"),u=S(),d&&d.c(),g(r,"class","pointer svelte-180dd7u"),g(r,"style",o=e[1]?"transform: rotate(180deg)":""),g(t,"class","select svelte-180dd7u")},m(h,a){k(h,t,a),f(t,s),f(t,l),f(t,r),f(t,u),d&&d.m(t,null),i=!0,c||(m=[Xe(mt.call(null,t)),W(t,"clickoutside",e[6]),W(t,"click",e[7])],c=!0)},p(h,[a]){(!i||a&4)&&n!==(n=(h[2]?h[2].name:"No GPU detected")+"")&&A(s,n),(!i||a&2&&o!==(o=h[1]?"transform: rotate(180deg)":""))&&g(r,"style",o),h[1]?d?(d.p(h,a),a&2&&N(d,1)):(d=Oe(h),d.c(),N(d,1),d.m(t,null)):d&&(me(),F(d,1,1,()=>{d=null}),he())},i(h){i||(N(d),i=!0)},o(h){F(d),i=!1},d(h){h&&w(t),d&&d.d(),c=!1,B(m)}}}const Be={};function gt(e,t,n){let s,l=M,r=()=>(l(),l=Ve(i,a=>n(2,s=a)),i);e.$$.on_destroy.push(()=>l());let{$$slots:o={},$$scope:u}=t;const i=_t(null);r();let{onSelect:c=a=>{}}=t,m=!0;tt(Be,{register:a=>{i.update($=>$||a)},select:a=>{i.set(a),c(a)},selected:i}),et(()=>n(1,m=!1));const d=()=>n(1,m=!1),h=()=>n(1,m=!m);return e.$$set=a=>{"onSelect"in a&&n(3,c=a.onSelect),"$$scope"in a&&n(4,u=a.$$scope)},[i,m,s,c,u,o,d,h]}class Ye extends ve{constructor(t){super(),be(this,t,gt,ht,te,{selected:0,onSelect:3})}get selected(){return this.$$.ctx[0]}}function bt(e){let t,n,s=e[0].name+"",l,r,o,u,i,c,m=e[0].clock+"",d,h,a,$,y,p,_=e[0].cuda_cores+"",C,T,I=e[0].smp+"",Y,G,L,E,v,O,U=e[0].gflops_fp32+"",le,ye,Q,we,X,Z=e[0].gflops_fp64+"",oe,re,$e;return{c(){t=b("div"),n=b("span"),l=P(s),r=S(),o=b("div"),u=b("span"),u.textContent="Clock speed:",i=S(),c=b("span"),d=P(m),h=P(" MHz"),a=S(),$=b("span"),$.textContent="CUDA cores:",y=S(),p=b("span"),C=P(_),T=P(" ("),Y=P(I),G=P(" SMP units)"),L=S(),E=b("span"),E.textContent="FP32 GFLOPS:",v=S(),O=b("span"),le=P(U),ye=S(),Q=b("span"),Q.textContent="FP64 GFLOPS:",we=S(),X=b("span"),oe=P(Z),g(n,"class","title"),ce(n,"color",e[2]()),g(u,"class","svelte-fhumxb"),g(c,"class","svelte-fhumxb"),g($,"class","svelte-fhumxb"),g(p,"class","svelte-fhumxb"),g(E,"class","svelte-fhumxb"),g(O,"class","svelte-fhumxb"),g(Q,"class","svelte-fhumxb"),g(X,"class","svelte-fhumxb"),g(o,"class","extra-info svelte-fhumxb"),g(t,"class","option svelte-fhumxb")},m(V,j){k(V,t,j),f(t,n),f(n,l),f(t,r),f(t,o),f(o,u),f(o,i),f(o,c),f(c,d),f(c,h),f(o,a),f(o,$),f(o,y),f(o,p),f(p,C),f(p,T),f(p,Y),f(p,G),f(o,L),f(o,E),f(o,v),f(o,O),f(O,le),f(o,ye),f(o,Q),f(o,we),f(o,X),f(X,oe),re||($e=W(t,"click",function(){ee(e[1](e[0]))&&e[1](e[0]).apply(this,arguments)}),re=!0)},p(V,[j]){e=V,j&1&&s!==(s=e[0].name+"")&&A(l,s),j&1&&m!==(m=e[0].clock+"")&&A(d,m),j&1&&_!==(_=e[0].cuda_cores+"")&&A(C,_),j&1&&I!==(I=e[0].smp+"")&&A(Y,I),j&1&&U!==(U=e[0].gflops_fp32+"")&&A(le,U),j&1&&Z!==(Z=e[0].gflops_fp64+"")&&A(oe,Z)},i:M,o:M,d(V){V&&w(t),re=!1,$e()}}}function vt(e,t,n){let{gpu:s}=t;const{register:l,select:r,selected:o}=nt(Be);l(s);function u(){let i=s.name.toLowerCase();return i.includes("nvidia")?"#a3be8c":i.includes("intel")?"#88c0d0":i.includes("amd")||i.includes("radeon")?"#bf616a":"gray"}return e.$$set=i=>{"gpu"in i&&n(0,s=i.gpu)},[s,r,u]}class yt extends ve{constructor(t){super(),be(this,t,vt,bt,te,{gpu:0})}}function Ae(e,t,n){const s=e.slice();return s[10]=t[n],s}function wt(e){let t,n;return t=new Ye({}),{c(){ge(t.$$.fragment)},m(s,l){ne(t,s,l),n=!0},p:M,i(s){n||(N(t.$$.fragment,s),n=!0)},o(s){F(t.$$.fragment,s),n=!1},d(s){se(t,s)}}}function $t(e){let t,n;return t=new Ye({props:{onSelect:e[7],$$slots:{default:[kt]},$$scope:{ctx:e}}}),{c(){ge(t.$$.fragment)},m(s,l){ne(t,s,l),n=!0},p(s,l){const r={};l&3&&(r.onSelect=s[7]),l&8194&&(r.$$scope={dirty:l,ctx:s}),t.$set(r)},i(s){n||(N(t.$$.fragment,s),n=!0)},o(s){F(t.$$.fragment,s),n=!1},d(s){se(t,s)}}}function Me(e){let t,n;return t=new yt({props:{gpu:e[10]}}),{c(){ge(t.$$.fragment)},m(s,l){ne(t,s,l),n=!0},p(s,l){const r={};l&2&&(r.gpu=s[10]),t.$set(r)},i(s){n||(N(t.$$.fragment,s),n=!0)},o(s){F(t.$$.fragment,s),n=!1},d(s){se(t,s)}}}function kt(e){let t,n,s=Ce(e[1]),l=[];for(let o=0;o<s.length;o+=1)l[o]=Me(Ae(e,s,o));const r=o=>F(l[o],1,1,()=>{l[o]=null});return{c(){for(let o=0;o<l.length;o+=1)l[o].c();t=Ie()},m(o,u){for(let i=0;i<l.length;i+=1)l[i]&&l[i].m(o,u);k(o,t,u),n=!0},p(o,u){if(u&2){s=Ce(o[1]);let i;for(i=0;i<s.length;i+=1){const c=Ae(o,s,i);l[i]?(l[i].p(c,u),N(l[i],1)):(l[i]=Me(c),l[i].c(),N(l[i],1),l[i].m(t.parentNode,t))}for(me(),i=s.length;i<l.length;i+=1)r(i);he()}},i(o){if(!n){for(let u=0;u<s.length;u+=1)N(l[u]);n=!0}},o(o){l=l.filter(Boolean);for(let u=0;u<l.length;u+=1)F(l[u]);n=!1},d(o){o&&w(t),Ze(l,o)}}}function Pt(e){let t;return{c(){t=b("span"),t.textContent="Evaluating..."},m(n,s){k(n,t,s)},p:M,d(n){n&&w(t)}}}function St(e){let t,n=e[3].strength+"",s;return{c(){t=b("span"),s=P(n),ce(t,"color",Fe(e[3].strength))},m(l,r){k(l,t,r),f(t,s)},p(l,r){r&8&&n!==(n=l[3].strength+"")&&A(s,n),r&8&&ce(t,"color",Fe(l[3].strength))},d(l){l&&w(t)}}}function Ne(e){let t,n,s,l=e[3].entropy+"",r,o,u,i,c,m,d=e[3].times_pwned>0?"Your password has been detected "+e[3].times_pwned+" times in database leaks!":"Your password is not present in any database leaks.",h,a,$,y=e[3].possible_combinations&&e[3].approximate_time_to_crack_secs&&Te(e);return{c(){t=b("span"),t.textContent="Entropy:",n=S(),s=b("span"),r=P(l),o=P(" bits"),u=S(),i=b("span"),i.textContent="Pwned info:",c=S(),m=b("span"),h=P(d),a=S(),y&&y.c(),$=Ie(),g(t,"class","svelte-1iusrnv"),g(s,"class","svelte-1iusrnv"),g(i,"class","svelte-1iusrnv"),g(m,"class","svelte-1iusrnv")},m(p,_){k(p,t,_),k(p,n,_),k(p,s,_),f(s,r),f(s,o),k(p,u,_),k(p,i,_),k(p,c,_),k(p,m,_),f(m,h),k(p,a,_),y&&y.m(p,_),k(p,$,_)},p(p,_){_&8&&l!==(l=p[3].entropy+"")&&A(r,l),_&8&&d!==(d=p[3].times_pwned>0?"Your password has been detected "+p[3].times_pwned+" times in database leaks!":"Your password is not present in any database leaks.")&&A(h,d),p[3].possible_combinations&&p[3].approximate_time_to_crack_secs?y?y.p(p,_):(y=Te(p),y.c(),y.m($.parentNode,$)):y&&(y.d(1),y=null)},d(p){p&&(w(t),w(n),w(s),w(u),w(i),w(c),w(m),w(a),w($)),y&&y.d(p)}}}function Te(e){let t,n,s,l=e[3].possible_combinations.toLocaleString()+"",r,o,u,i,c=e[1][e[4]].name+"",m,d,h,a,$,y=Ge(e[3].approximate_time_to_crack_secs)+"",p;return{c(){t=b("span"),t.textContent="Possible combinations:",n=S(),s=b("span"),r=P(l),o=S(),u=b("span"),i=P("Time to crack on your "),m=P(c),d=P(":"),h=S(),a=b("span"),$=P("Approximately "),p=P(y),g(t,"class","svelte-1iusrnv"),g(s,"class","svelte-1iusrnv"),g(u,"class","svelte-1iusrnv"),g(a,"class","svelte-1iusrnv")},m(_,C){k(_,t,C),k(_,n,C),k(_,s,C),f(s,r),k(_,o,C),k(_,u,C),f(u,i),f(u,m),f(u,d),k(_,h,C),k(_,a,C),f(a,$),f(a,p)},p(_,C){C&8&&l!==(l=_[3].possible_combinations.toLocaleString()+"")&&A(r,l),C&18&&c!==(c=_[1][_[4]].name+"")&&A(m,c),C&8&&y!==(y=Ge(_[3].approximate_time_to_crack_secs)+"")&&A(p,y)},d(_){_&&(w(t),w(n),w(s),w(o),w(u),w(h),w(a))}}}function Et(e){let t,n,s,l,r,o,u,i,c,m,d,h,a,$,y,p,_;const C=[$t,wt],T=[];function I(v,O){return v[1]&&v[1].length>0?0:1}r=I(e),o=T[r]=C[r](e);function Y(v,O){if(v[3]&&!v[5])return St;if(v[5])return Pt}let G=Y(e),L=G&&G(e),E=e[3]&&Ne(e);return{c(){t=b("main"),n=b("nav"),s=b("span"),s.textContent="GPU",l=S(),o.c(),u=S(),i=b("input"),c=S(),m=b("h2"),d=P(`Password Strength:
		`),L&&L.c(),h=S(),a=b("div"),E&&E.c(),g(n,"class","svelte-1iusrnv"),g(i,"placeholder","Type your password"),g(i,"spellcheck","false"),g(i,"class","svelte-1iusrnv"),g(a,"class","extra-info svelte-1iusrnv"),g(a,"style",$=e[5]?"opacity: 0":"opacity: 1"),g(t,"class","container svelte-1iusrnv")},m(v,O){k(v,t,O),f(t,n),f(n,s),f(n,l),T[r].m(n,null),f(t,u),f(t,i),Pe(i,e[2]),f(t,c),f(t,m),f(m,d),L&&L.m(m,null),f(t,h),f(t,a),E&&E.m(a,null),y=!0,p||(_=[W(i,"input",e[8]),W(i,"input",e[6])],p=!0)},p(v,[O]){let U=r;r=I(v),r===U?T[r].p(v,O):(me(),F(T[U],1,1,()=>{T[U]=null}),he(),o=T[r],o?o.p(v,O):(o=T[r]=C[r](v),o.c()),N(o,1),o.m(n,null)),O&4&&i.value!==v[2]&&Pe(i,v[2]),G===(G=Y(v))&&L?L.p(v,O):(L&&L.d(1),L=G&&G(v),L&&(L.c(),L.m(m,null))),v[3]?E?E.p(v,O):(E=Ne(v),E.c(),E.m(a,null)):E&&(E.d(1),E=null),(!y||O&32&&$!==($=v[5]?"opacity: 0":"opacity: 1"))&&g(a,"style",$)},i(v){y||(N(o),y=!0)},o(v){F(o),y=!1},d(v){v&&w(t),T[r].d(),L&&L.d(),E&&E.d(),p=!1,B(_)}}}function Fe(e){return e=="ProneToBruteforceAttack"||e=="ProneToDictionaryAttack"||e=="Weak"?"#bf616a":e=="Medium"?"#ebcb8b":"#a3be8c"}function Ge(e){const t=Math.floor(e%60),n=Math.floor(e/60%60),s=Math.floor(e/(60*60)%24),l=Math.floor(e/(60*60*24)%7),r=Math.floor(e/(60*60*24*30)%12),o=Math.floor(e/(60*60*24*365));return`${o>0?o.toLocaleString()+" Years, ":""}
	${r>0?r.toLocaleString()+" Months, ":""}
	${l>0&&!(o>=1)?l.toLocaleString()+" Days, ":""}
	${s>0&&!(o>=1)?s.toLocaleString()+" Hours, ":""}
	${n>0&&!(o>=1)?n.toLocaleString()+" Minutes ":""}
	${t>0&&!(o>=1)?t+" Second(s)":""}`}function Ct(e,t,n){let s=0,l;pe("list_gpus").then(a=>n(1,l=a)).catch(console.error);let r,o,u=0,i=!1,c;function m(){clearTimeout(c),c=setTimeout(()=>{n(5,i=!0),n(4,u=s),pe("evaluate_password_strength",{password:r,gpuIndex:s}).then(a=>n(3,o=a)).catch(console.error).finally(()=>n(5,i=!1))},700)}const d=a=>{n(0,s=l.indexOf(a)),m()};function h(){r=this.value,n(2,r)}return[s,l,r,o,u,i,m,d,h]}class Lt extends ve{constructor(t){super(),be(this,t,Ct,Et,te,{})}}new Lt({target:document.getElementById("app")});
