import{_ as S,M as $,q as v,W as N,X as T,Y as I,Z as O,Q as B,t as P,h as y,o as f,i as g,j as t,F as C,x as A,H as o,k as x,y as m,V as b,$ as k}from"./index-e87bdae7.js";const D={computed:{...$({cart:"cart",smallInCart:"smallInCart",bigInCart:"bigInCart",totalSmallPrice:"totalSmallPrice",totalBigPrice:"totalBigPrice",overAllTotal:"overAllTotal"}),itemExist(){if(this.cart.length==0)return"Oops! Cart is currently empty!"}},data(){return{address:""}},methods:{placeOrder(){const s=v(),l=s.currentUser.displayName,_=s.currentUser.email;var d=this.$store.state.cart,h=this.address,a=this.overAllTotal;let c=[];var u=!1;if(this.address!="")MonnifySDK.initialize({amount:a,currency:"NGN",reference:"KNOOR_"+Math.floor(Math.random()*1e9+1),customerFullName:l,customerEmail:_,apiKey:"MK_TEST_YCL28KNQQ9",contractCode:"4566722754",paymentDescription:"Knoor Payment",isTestMode:!0,onLoadStart:()=>{console.log("loading has started")},onLoadComplete:()=>{console.log("SDK is UP")},onComplete:function(r){if(console.log(r.status),r.status==="SUCCESS"){if(u=!0,u){for(const i of d)c.push(` food Name = ${i.title},  Big size = ${i.totalBigInOrder}, Small size = ${i.totalSmallInOrder}`);const e=v(),n=String(e.currentUser.displayName),p=N(b,"Orders"),w={name:n,orderDate:k(),status:"Pending",product:c,totalPrice:a,address:h};T(p,w).then(i=>{console.log("Document id = ",i.id),I(B(b,"users",n),{Order:O(i.id)}),console.log("Id safed!")}).catch(i=>{console.log(i)}),P.push("/ConfirmPayment"),c=[],setTimeout(()=>{d=[]},3e3)}}else P.push("/ErrorPayment")},onClose:function(r){console.log(r)}});else{let r=function(){navigator.vibrate([100,50])};this.$toast.add({severity:"error",summary:"Empty input",detail:"Please input your Delivery Address",life:"3000"}),r()}},toggleShowProductPage(){this.$store.state.showProductPage=!this.$store.state.showProductPage},insertProduct(s){this.$store.dispatch("addProduct",s)},remove(s,l){this.$toast.add({severity:"info",summary:"Info Message",detail:"Item removed!",life:3e3}),this.$store.state.cart.length==0&&(this.$store.state.totalBigPrice=0,this.$store.state.totalSmallPrice=0),this.$store.state.cart=this.$store.state.cart.filter((_,d)=>d!=l),this.$store.state.overAllTotal=this.$store.state.overAllTotal-s.bigNewPrice*s.totalBigInOrder,this.$store.state.overAllTotal=this.$store.state.overAllTotal-s.smallNewPrice*s.totalSmallInOrder,this.$store.state.totalSmallPrice=this.$store.state.totalSmallPrice-s.smallNewPrice*s.totalSmallInOrder,this.$store.state.totalBigPrice=this.$store.state.totalBigPrice-s.bigNewPrice*s.totalBigInOrder,localStorage.setItem("cart",JSON.stringify(this.$store.state.cart)),this.$store.state.totalSmallPrice<=0?(this.$store.state.totalSmallPrice=0,localStorage.setItem("cartTotalSmall",JSON.stringify(this.$store.state.totalSmallPrice))):localStorage.setItem("cartTotalSmall",JSON.stringify(this.$store.state.totalSmallPrice)),this.$store.state.totalBigPrice<=0?(this.$store.state.totalBigPrice=0,localStorage.setItem("cartTotalBig",JSON.stringify(this.$store.state.totalBigPrice))):localStorage.setItem("cartTotalBig",JSON.stringify(this.$store.state.totalBigPrice)),this.$store.state.overAllTotal<=0?(this.$store.state.overAllTotal=0,localStorage.setItem("cartTotalPrice",JSON.stringify(this.$store.state.overAllTotal))):localStorage.setItem("cartTotalPrice",JSON.stringify(this.$store.state.overAllTotal))}}},E={key:0,class:"w-full text-slate-800 bg-slate-200 pb-5"},M={class:"pt-2 text-slate-800 lg:w-2/4 m-auto md:py-5"},J=t("div",{class:"flex flex-col bg-white text-center py-1 md:py-4 md:mb-2 mx-2 rounded-lg shadow-md"},[t("h2",{class:"text-sm md:text-lg font-bold"},"Cart")],-1),K={class:"bg-slate-200 py-2 px-1"},U={class:"flex flex-row h-fit"},V=["onClick"],j=["onClick"],z={class:"pl-3 m-auto md:my-auto w-44 h-24 md:w-80 md:h-44"},L=["src"],Q={class:"flex flex-col text-xs p-2 md:justify-center md:space-y-1 md:text-base w-4/5 -ml-1"},F={class:"font-bold text-sm text-center mx-auto"},X={class:"flex flex-col md:mx-auto"},Y=t("h4",{class:"font-semibold mx-auto"},"Order Quantity:",-1),q={class:"flex flex-col text-center ml-2 space-y-1 text-xs md:text-sm"},G={class:"text-xs md:text-sm"},H={class:"text-center"},R={id:"smallNewPrice",class:"text-green-700 text-sm font-semibold"},W={class:"text-center"},Z={id:"bigNewPrice",class:"text-green-700 font-semibold text-sm"},tt={class:"flex flex-col bg-white mx-1 pt-2 rounded-lg shadow-md"},et={class:"flex flex-row mb-1 rounded-lg py-2 px-4 text-xs justify-evenly"},st={class:"flex flex-col"},ot=t("h3",{class:"font-semibold mb-1 mx-auto"},"Total Price of 2.5",-1),lt={class:"m-auto p-1 rounded-md text-green-700 text-xs font-bold bg-slate-100"},at={class:"flex flex-col"},rt=t("h3",{class:"font-semibold mb-1 mx-auto"},"Total Price of 4.5 ",-1),it={class:"m-auto p-1 rounded-md text-green-700 text-xs font-bold bg-slate-100"},ct={class:"flex flex-col"},dt=t("hr",{class:"m-auto w-5/6 border-slate-400"},null,-1),nt={class:"p-float-label p-input-icon-right mx-auto md:mx-auto my-7 w-11/12 h-fit md:w-3/5 md:text-base"},mt=t("label",{for:"username",class:"-mt-2 md:-mt-4 text-xs md:text-base h-1"},"Delivery Address",-1),ht={class:"flex flex-row py-2"},ut={class:"text-right m-auto text-sm font-bold"},ft={id:"smallNewPrice",class:"text-green-700 text-sm font-semibold bg-slate-100 px-2 rounded-md"},gt={key:1,class:"w-full h-96 flex text-slate-800"},xt={class:"m-auto text-lg font-bold"};function _t(s,l,_,d,h,a){const c=y("font-awesome-icon"),u=y("InputText"),r=y("Button");return this.$store.state.cart.length!=0?(f(),g("div",E,[t("div",M,[J,t("ul",K,[(f(!0),g(C,null,A(s.cart,(e,n)=>(f(),g("li",{key:n,class:"my-1 px-2 py-1 bg-white rounded-lg shadow-md relative"},[t("div",U,[t("div",{class:"absolute right-1 -top-2",onClick:p=>a.remove(e,n)},[x(c,{icon:"fa-regular fa-trash-can",style:{color:"#333366"},class:"md:hidden m-auto rounded-full cursor-pointer"}),x(c,{icon:"fa-regular fa-trash-can",size:"lg",style:{color:"#333366"},class:"hidden md:block m-auto rounded-full cursor-pointer"})],8,V),t("div",{class:"flex flex-row justify-between py-1 w-full h-fit",onClick:p=>(a.toggleShowProductPage(),a.insertProduct(e))},[t("div",z,[t("img",{src:e.pic,alt:"item pic",class:"w-full h-full md:w-full md:h-full rounded-md"},null,8,L)]),t("div",Q,[t("h2",F,o(e.title),1),t("div",X,[Y,t("div",q,[t("p",null,"2.5: "+o(e.totalSmallInOrder)+" x",1),t("p",null,"4.6: "+o(e.totalBigInOrder)+" x",1)])]),t("div",G,[t("p",H,[m("2.5: "),t("span",R,o(e.smallNewPrice),1),m(" X "+o(e.totalSmallInOrder)+" = #"+o(e.totalSmallInOrder*e.smallNewPrice),1)]),t("p",W,[m("4.6: "),t("span",Z,o(e.bigNewPrice),1),m(" X "+o(e.totalBigInOrder)+" = #"+o(e.totalBigInOrder*e.bigNewPrice),1)])])])],8,j)])]))),128))]),t("div",tt,[t("div",et,[t("div",st,[ot,t("span",lt," #"+o(s.totalSmallPrice),1)]),t("div",at,[rt,t("span",it,"#"+o(s.totalBigPrice),1)])]),t("div",ct,[dt,t("div",nt,[x(u,{type:"text",id:"username",modelValue:h.address,"onUpdate:modelValue":l[0]||(l[0]=e=>h.address=e),modelModifiers:{lazy:!0,trim:!0},class:"h-12 w-full text-xs indent-2 md:text-base md:h-12 text-ellipsis text-justify",pt:{root:{class:"border-slate-400 border-2 hover:border-0"}}},null,8,["modelValue"]),mt]),t("div",ht,[x(r,{id:"button",label:"Place order",size:"small",onClick:l[1]||(l[1]=e=>a.placeOrder()),class:"w-wd4 md:w-2/5 md:py-5 h-5 text-sm md:text-lg font-semibold text-slate-800 m-auto shadow-sm shadow-black"}),t("h3",ut,[m(" Total = "),t("span",ft," #"+o(s.overAllTotal),1)])])])])])])):(f(),g("div",gt,[t("div",xt,[t("h2",null,o(a.itemExist),1)])]))}const yt=S(D,[["render",_t]]);export{yt as default};
