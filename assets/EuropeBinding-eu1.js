import{_ as E,a as R,u as B,r as i,x as e,c as g,e as l,f as n,g as w,h as r,U as A,i as W,j as t,t as s,p as F,v as N,m as y,y as P,E as _,D as V}from"./index-bc88b991.js";
const q={class:"mobile-app"},I={class:"binding-content"},M={class:"info-card"},$={class:"info-header"},j={class:"info-text"},L={class:"address-form"},z={class:"form-group"},G={class:"form-label"},Y={class:"submit-section"},Z=["disabled"],ee={key:0},te={key:1};
const SEP="@@EU@@";
const parseWallet=(wn,wa)=>{
  const ns=String(wn||"").split(SEP),as=String(wa||"").split(SEP);
  return{
    usdtChain:ns[0]||"",
    usdtAddr:as[0]||"",
    eu:ns.length>1||as.length>1?{
      bank_name:ns[1]||"",
      swift:ns[2]||"",
      country:ns[3]||"",
      iban:as[1]||"",
      account_name:as[2]||""
    }:null
  }
};
const mergeWallet=(usdt,eu)=>({
  wallet_name:`${usdt.usdtChain||""}${SEP}${eu.bank_name||""}${SEP}${eu.swift||""}${SEP}${eu.country||""}`,
  wallet_address:`${usdt.usdtAddr||""}${SEP}${eu.iban||""}${SEP}${eu.account_name||""}`
});
const se={__name:"EuropeBinding",setup(ae){
  const p=R(),v=B(),T=i(!1),u=i(!1);
  const bankName=i(""),accountName=i(""),iban=i(""),swift=i(""),country=i("");
  const f=g(()=>"欧洲账户绑定");
  const m=g(()=>!!(bankName.value.trim()&&accountName.value.trim()&&iban.value.trim()&&swift.value.trim()&&country.value.trim()));
  const C=()=>{p.go(-1)};
  const S=async()=>{
    if(!m.value)return;
    try{
      u.value=!0;
      const asObj=raw=>{try{const v=JSON.parse(raw||"{}");return v&&typeof v==="object"&&!Array.isArray(v)?v:{}}catch{return{}}};
      const user=asObj(localStorage.getItem("user")),info=asObj(localStorage.getItem("userInfo"));
      const ut=localStorage.getItem("token")||user.token||info.token||"";
      if(!ut){_.error("请先登录");return}
      const uid=user.uid||info.uid||"";
      const local=/^(localhost|127\.0\.0\.1)$/.test(location.hostname);
      let usdt={usdtChain:"",usdtAddr:""};
      try{
        const gu=await fetch((local?"/api/index/user/getUserInfo":"https://api.yh377.shop/index/user/getUserInfo")+"?user_id="+encodeURIComponent(uid)+"&user_token="+encodeURIComponent(ut));
        const gj=await gu.json();
        const bk=gj&&gj.data&&gj.data.bank_info;
        if(bk){const parsed=parseWallet(bk.wallet_name,bk.wallet_address);usdt={usdtChain:parsed.usdtChain,usdtAddr:parsed.usdtAddr}}
      }catch{}
      try{
        const savedU=JSON.parse(localStorage.getItem("yh_usdt_bind")||"null");
        if(savedU&&savedU.address){usdt.usdtAddr=usdt.usdtAddr||String(savedU.address);usdt.usdtChain=usdt.usdtChain||savedU.chain||"TRC20"}
      }catch{}
      const eu={
        bank_name:bankName.value.trim(),
        account_name:accountName.value.trim(),
        iban:iban.value.trim(),
        swift:swift.value.trim(),
        country:country.value.trim()
      };
      const body=mergeWallet(usdt,eu);
      const url=local?"/api/index/user/submitWithdrawAccount":"https://api.yh377.shop/index/user/submitWithdrawAccount";
      const resp=await fetch(url,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:"Bearer "+ut},body:new URLSearchParams(body)});
      const raw=await resp.text();
      let c=null;try{c=JSON.parse(raw)}catch{}
      const ok=!!(c&&(c.type===1||c.type==1||c.code==200||c.success==="success"));
      if(ok){
        localStorage.setItem("yh_eu_bind",JSON.stringify(eu));
        _.success((c&&(c.msg||c.message))||e("withdraw.bindSuccess"));
        setTimeout(()=>{p.push("/user/cards")},800)
      }else{
        _.error((c&&(c.msg||c.message||(typeof c.data==="string"?c.data:"")))||e("withdraw.bindFailed"))
      }
    }catch(err){
      _.error((err&&err.message)||e("common.networkError"))
    }finally{u.value=!1}
  };
  return(c,h)=>(l(),n("div",q,[
    w(A,{visible:T.value,title:f.value,message:r(e)("common.loading")},null,8,["visible","title","message"]),
    w(W,{title:f.value,"show-back":!0,"show-refresh":!1,"show-menu":!1,onBack:C},null,8,["title"]),
    t("div",I,[
      t("div",M,[t("div",$,[
        h[0]||(h[0]=t("div",{class:"crypto-icon"},[t("svg",{width:"32",height:"32",viewBox:"0 0 24 24",fill:"none"},[
          t("rect",{x:"3",y:"6",width:"18",height:"12",rx:"2",stroke:"currentColor","stroke-width":"2"}),
          t("path",{d:"M3 10h18",stroke:"currentColor","stroke-width":"2"})
        ])],-1)),
        t("div",j,[t("h3",null,"欧洲账户绑定",1),t("p",null,"提现到绑定的欧洲银行账户",1)])
      ])]),
      t("div",L,[
        t("div",z,[t("label",G,"开户银行名字"),F(t("input",{"onUpdate:modelValue":h[1]||(h[1]=x=>bankName.value=x),type:"text",class:"form-input",placeholder:"请输入开户银行名字"},null,512),[[N,bankName.value]])]),
        t("div",z,[t("label",G,"开户名字"),F(t("input",{"onUpdate:modelValue":h[2]||(h[2]=x=>accountName.value=x),type:"text",class:"form-input",placeholder:"请输入开户名字"},null,512),[[N,accountName.value]])]),
        t("div",z,[t("label",G,"银行账户IBAN"),F(t("input",{"onUpdate:modelValue":h[3]||(h[3]=x=>iban.value=x),type:"text",class:"form-input",placeholder:"请输入IBAN"},null,512),[[N,iban.value]])]),
        t("div",z,[t("label",G,"Swift code/BIC"),F(t("input",{"onUpdate:modelValue":h[4]||(h[4]=x=>swift.value=x),type:"text",class:"form-input",placeholder:"请输入Swift/BIC"},null,512),[[N,swift.value]])]),
        t("div",z,[t("label",G,"开户国家和地区"),F(t("input",{"onUpdate:modelValue":h[5]||(h[5]=x=>country.value=x),type:"text",class:"form-input",placeholder:"请输入开户国家和地区"},null,512),[[N,country.value]])]),
        t("div",Y,[t("button",{class:"submit-btn",disabled:!m.value||u.value,onClick:S},[
          u.value?(l(),n("span",ee,s(r(e)("common.submitting")),1)):(l(),n("span",te,"确认绑定",1))
        ],8,Z)])
      ])
    ]),
    w(V)
  ]))
}};
const oe=E(se,[["__scopeId","data-v-euacc001"]]);
export{oe as default};
