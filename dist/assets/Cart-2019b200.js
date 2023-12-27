import{_ as b,J as w,q as p,U as $,V as N,W as O,X as T,M as I,t as P,h as y,o as h,i as u,j as t,F as B,x as C,E as o,k as x,y as m,T as v,Y as k}from"./index-7fb33568.js";const A={computed:{...w({cart:"cart",smallInCart:"smallInCart",bigInCart:"bigInCart",totalSmallPrice:"totalSmallPrice",totalBigPrice:"totalBigPrice",overAllTotal:"overAllTotal"}),itemExist(){if(this.cart.length==0)return"Oops! Cart is currently empty!"}},methods:{placeOrder(){const e=p(),r=e.currentUser.displayName,f=e.currentUser.email;var c=this.$store.state.cart,g=this.overAllTotal;let l=[];var n=!1;MonnifySDK.initialize({amount:g,currency:"NGN",reference:"KNOOR_"+Math.floor(Math.random()*1e9+1),customerFullName:r,customerEmail:f,apiKey:"MK_TEST_YCL28KNQQ9",contractCode:"4566722754",paymentDescription:"Knoor Payment",isTestMode:!0,onLoadStart:()=>{console.log("loading has started")},onLoadComplete:()=>{console.log("SDK is UP")},onComplete:function(i){if(console.log(i.status),i.status==="SUCCESS"){if(n=!0,n){for(const a of c)l.push(` food Name = ${a.title},  Big size = ${a.totalBigInOrder}, Small size = ${a.totalSmallInOrder}`);const s=p(),d=String(s.currentUser.displayName),_=$(v,"Orders"),S={name:d,orderDate:k(),status:"Pending",product:l,totalPrice:g};N(_,S).then(a=>{console.log("Document id = ",a.id),O(I(v,"users",d),{Order:T(a.id)}),console.log("Id safed!")}).catch(a=>{console.log(a)}),P.push("/ConfirmPayment"),l=[],setTimeout(()=>{c=[]},3e3)}}else P.push("/ErrorPayment")},onClose:function(i){console.log(i)}})},toggleShowProductPage(){this.$store.state.showProductPage=!this.$store.state.showProductPage},insertProduct(e){this.$store.dispatch("addProduct",e)},remove(e,r){this.$toast.add({severity:"info",summary:"Info Message",detail:"Item removed!",life:3e3}),this.$store.state.cart.length==0&&(this.$store.state.totalBigPrice=0,this.$store.state.totalSmallPrice=0),this.$store.state.cart=this.$store.state.cart.filter((f,c)=>c!=r),this.$store.state.overAllTotal=this.$store.state.overAllTotal-e.bigNewPrice*e.totalBigInOrder,this.$store.state.overAllTotal=this.$store.state.overAllTotal-e.smallNewPrice*e.totalSmallInOrder,this.$store.state.totalSmallPrice=this.$store.state.totalSmallPrice-e.smallNewPrice*e.totalSmallInOrder,this.$store.state.totalBigPrice=this.$store.state.totalBigPrice-e.bigNewPrice*e.totalBigInOrder,localStorage.setItem("cart",JSON.stringify(this.$store.state.cart)),this.$store.state.totalSmallPrice<=0?(this.$store.state.totalSmallPrice=0,localStorage.setItem("cartTotalSmall",JSON.stringify(this.$store.state.totalSmallPrice))):localStorage.setItem("cartTotalSmall",JSON.stringify(this.$store.state.totalSmallPrice)),this.$store.state.totalBigPrice<=0?(this.$store.state.totalBigPrice=0,localStorage.setItem("cartTotalBig",JSON.stringify(this.$store.state.totalBigPrice))):localStorage.setItem("cartTotalBig",JSON.stringify(this.$store.state.totalBigPrice)),this.$store.state.overAllTotal<=0?(this.$store.state.overAllTotal=0,localStorage.setItem("cartTotalPrice",JSON.stringify(this.$store.state.overAllTotal))):localStorage.setItem("cartTotalPrice",JSON.stringify(this.$store.state.overAllTotal))}}},E={key:0,class:"w-full text-slate-800 bg-slate-200 pb-5"},D={class:"pt-2 text-slate-800 lg:w-2/4 m-auto md:py-5"},J=t("div",{class:"flex flex-col bg-white text-center py-1 md:py-4 md:mb-2 mx-2 rounded-lg shadow-md"},[t("h2",{class:"text-sm md:text-lg font-bold"},"Cart")],-1),K={class:"bg-slate-200 py-2 px-1"},M={class:"flex flex-row h-fit"},U=["onClick"],j=["onClick"],z={class:"pl-3 m-auto md:my-auto md:w-80 md:h-44"},L=["src"],V={class:"flex flex-col text-xs p-2 md:justify-center md:space-y-1 md:text-base w-4/5 -ml-1"},F={class:"font-bold text-sm text-center mx-auto"},Q={class:"flex flex-col md:mx-auto"},X=t("h4",{class:"font-semibold mx-auto"},"Order Quantity:",-1),Y={class:"flex flex-col text-center ml-2 space-y-1 text-xs md:text-sm"},q={class:"text-xs md:text-sm"},G={class:"text-center"},R={id:"smallNewPrice",class:"text-green-700 text-sm font-semibold"},W={class:"text-center"},H={id:"bigNewPrice",class:"text-green-700 font-semibold text-sm"},Z={class:"flex flex-col bg-white mx-1 pt-2 rounded-lg shadow-md"},tt={class:"flex flex-row mb-1 rounded-lg py-2 px-4 text-xs justify-evenly"},et={class:"flex flex-col"},st=t("h3",{class:"font-semibold mb-1 mx-auto"},"Total Price of 2.5",-1),ot={class:"m-auto p-1 rounded-md text-green-700 text-xs font-bold bg-slate-100"},lt={class:"flex flex-col"},at=t("h3",{class:"font-semibold mb-1 mx-auto"},"Total Price of 4.5 ",-1),rt={class:"m-auto p-1 rounded-md text-green-700 text-xs font-bold bg-slate-100"},it={class:"flex flex-col"},ct=t("hr",{class:"m-auto w-5/6 border-slate-400"},null,-1),nt={class:"flex flex-row py-2"},dt={class:"text-right m-auto text-sm font-bold"},mt={id:"smallNewPrice",class:"text-green-700 text-sm font-semibold bg-slate-100 px-2 rounded-md"},ht={key:1,class:"w-full h-96 flex text-slate-800"},ut={class:"m-auto text-lg font-bold"};function ft(e,r,f,c,g,l){const n=y("font-awesome-icon"),i=y("Button");return this.$store.state.cart.length!=0?(h(),u("div",E,[t("div",D,[J,t("ul",K,[(h(!0),u(B,null,C(e.cart,(s,d)=>(h(),u("li",{key:d,class:"my-1px-2 py-1 bg-white rounded-lg shadow-md relative"},[t("div",M,[t("div",{class:"absolute right-1 -top-2",onClick:_=>l.remove(s,d)},[x(n,{icon:"fa-regular fa-trash-can",style:{color:"#333366"},class:"md:hidden m-auto rounded-full cursor-pointer"}),x(n,{icon:"fa-regular fa-trash-can",size:"lg",style:{color:"#333366"},class:"hidden md:block m-auto rounded-full cursor-pointer"})],8,U),t("div",{class:"flex flex-row justify-between py-1 w-full h-fit",onClick:_=>(l.toggleShowProductPage(),l.insertProduct(s))},[t("div",z,[t("img",{src:s.pic,alt:"item pic",class:"w-44 h-22 md:w-full md:h-full rounded-md"},null,8,L)]),t("div",V,[t("h2",F,o(s.title),1),t("div",Q,[X,t("div",Y,[t("p",null,"2.5: "+o(s.totalSmallInOrder)+" x",1),t("p",null,"4.6: "+o(s.totalBigInOrder)+" x",1)])]),t("div",q,[t("p",G,[m("2.5: "),t("span",R,o(s.smallNewPrice),1),m(" X "+o(s.totalSmallInOrder)+" = #"+o(s.totalSmallInOrder*s.smallNewPrice),1)]),t("p",W,[m("4.6: "),t("span",H,o(s.bigNewPrice),1),m(" X "+o(s.totalBigInOrder)+" = #"+o(s.totalBigInOrder*s.bigNewPrice),1)])])])],8,j)])]))),128))]),t("div",Z,[t("div",tt,[t("div",et,[st,t("span",ot," #"+o(e.totalSmallPrice),1)]),t("div",lt,[at,t("span",rt,"#"+o(e.totalBigPrice),1)])]),t("div",it,[ct,t("div",nt,[x(i,{id:"button",label:"Place order",size:"small",onClick:r[0]||(r[0]=s=>l.placeOrder()),class:"w-wd4 md:w-2/5 md:py-5 h-5 text-sm md:text-lg font-semibold text-slate-800 m-auto shadow-sm shadow-black"}),t("h3",dt,[m(" Total = "),t("span",mt," #"+o(e.overAllTotal),1)])])])])])])):(h(),u("div",ht,[t("div",ut,[t("h2",null,o(l.itemExist),1)])]))}const _t=b(A,[["render",ft]]);export{_t as default};
