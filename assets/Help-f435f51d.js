import{_ as w,a as y,r as v,o as k,e as l,f as i,g as r,h as p,U as x,i as T,j as o,L as $,t as h,F as C,l as L,G as b,x as e,k as D,M as S,T as A,D as B,m as H,N as G}from"./index-bc88b991.js";const M={class:"mobile-app"},N={class:"help-content"},R={key:0,class:"empty-state"},U={key:1,class:"help-sections"},W=["onClick"],j={class:"section-title"},E=["innerHTML"],V={__name:"Help",setup(F){const _=y(),f=a=>G.sanitize(a||"",{ALLOWED_TAGS:["p","br","strong","em","b","i","ul","ol","li","h1","h2","h3","h4","img","a","span","div"],ALLOWED_ATTR:["href","src","alt","title","class","target"],ALLOW_DATA_ATTR:!1}),d=v(!0),n=v([]),m=()=>{_.go(-1)},g=a=>{const t=n.value.find(s=>s.id===a);t&&(t.expanded=!t.expanded)},u=async()=>{try{d.value=!0;const a=await fetch(b("/help"),{method:"GET",headers:{"X-Requested-With":"XMLHttpRequest","Content-Type":"application/json"}});if(a.ok){const t=await a.json();t&&t.type===1&&t.data?n.value=t.data.map(s=>({...s,expanded:!1})):c()}else c()}catch{c()}finally{d.value=!1}},c=()=>{n.value=[{id:1,title:e("help.tradingGuide"),content:`
        <h4>${e("help.howToTrade")}</h4>
        <p>1. ${e("help.step1")}</p>
        <p>2. ${e("help.step2")}</p>
        <p>3. ${e("help.step3")}</p>
        <p>4. ${e("help.step4")}</p>
      `,expanded:!1},{id:2,title:e("help.depositGuide"),content:`
        <h4>${e("help.howToDeposit")}</h4>
        <p>1. ${e("help.depositStep1")}</p>
        <p>2. ${e("help.depositStep2")}</p>
        <p>3. ${e("help.depositStep3")}</p>
      `,expanded:!1},{id:3,title:e("help.withdrawGuide"),content:`
        <h4>${e("help.howToWithdraw")}</h4>
        <p>1. ${e("help.withdrawStep1")}</p>
        <p>2. ${e("help.withdrawStep2")}</p>
        <p>3. ${e("help.withdrawStep3")}</p>
      `,expanded:!1},{id:4,title:e("help.securityGuide"),content:`
        <h4>${e("help.accountSecurity")}</h4>
        <p>• ${e("help.securityTip1")}</p>
        <p>• ${e("help.securityTip2")}</p>
        <p>• ${e("help.securityTip3")}</p>
      `,expanded:!1}]};return k(()=>{u()}),(a,t)=>(l(),i("div",M,[r(x,{visible:d.value,title:p(e)("common.help"),message:p(e)("common.loading")},null,8,["visible","title","message"]),r(T,{title:p(e)("common.help"),"show-back":!0,"show-refresh":!0,"show-menu":!1,onBack:m,onRefresh:u},null,8,["title"]),o("div",N,[n.value.length===0&&!d.value?(l(),i("div",R,[t[0]||(t[0]=$('<div class="empty-icon" data-v-7d36d3b9><svg width="64" height="64" viewBox="0 0 24 24" fill="none" data-v-7d36d3b9><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" data-v-7d36d3b9></circle><path d="M9.09 9C9.3251 8.33167 9.78915 7.76811 10.4 7.40913C11.0108 7.05016 11.7289 6.91894 12.4272 7.03871C13.1255 7.15849 13.7588 7.52152 14.2151 8.06353C14.6713 8.60553 14.9211 9.29152 14.92 10C14.92 12 11.92 13 11.92 13" stroke="currentColor" stroke-width="2" data-v-7d36d3b9></path><circle cx="12" cy="17" r="1" fill="currentColor" data-v-7d36d3b9></circle></svg></div>',1)),o("h3",null,h(p(e)("help.noContent")),1),o("p",null,h(p(e)("help.noContentDesc")),1)])):(l(),i("div",U,[(l(!0),i(C,null,L(n.value,s=>(l(),i("div",{key:s.id,class:"help-section"},[o("div",{class:"section-header",onClick:O=>g(s.id)},[o("h3",j,h(s.title),1),o("div",{class:D(["toggle-icon",{expanded:s.expanded}])},[...t[1]||(t[1]=[o("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none"},[o("path",{d:"M6 9L12 15L18 9",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1)])],2)],8,W),r(A,{name:"section-expand"},{default:S(()=>[s.expanded?(l(),i("div",{key:0,class:"section-content",innerHTML:f(s.content)},null,8,E)):H("",!0)]),_:2},1024)]))),128))]))]),r(B)]))}},z=w(V,[["__scopeId","data-v-7d36d3b9"]]);export{z as default};
