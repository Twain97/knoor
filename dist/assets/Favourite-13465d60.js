import{_ as u,J as _,h as f,o as i,i as l,j as t,F as w,x,E as r,k as g}from"./index-7fb33568.js";const p={computed:{..._({wishList:"wishList"}),mounted(){console.log(this.wishList)},itemExist(){if(this.wishList.length==0)return"Oops! wishList is currently empty!"}},methods:{toggleShowProductPage(){this.$store.state.showProductPage=!this.$store.state.showProductPage},insertProduct(s){this.$store.dispatch("addProduct",s)},remove(s,a){this.$toast.add({severity:"info",summary:"Info Message",detail:"Item removed!",life:3e3}),this.$store.state.wishList=this.$store.state.wishList.filter((n,c)=>c!=a),localStorage.setItem("wishList",JSON.stringify(this.$store.state.wishList))}}},v={key:0,class:"w-full text-slate-800 bg-slate-200 pb-5"},y={class:"pt-2 text-slate-800 lg:w-2/4 m-auto md:py-5"},L=t("div",{class:"flex flex-col bg-white text-center py-1 md:py-4 md:mb-2 mx-2 rounded-lg shadow-md"},[t("h2",{class:"text-sm md:text-lg font-bold"},"wishList")],-1),b={class:"bg-slate-200 py-2 px-1"},P={class:"flex flex-row h-fit"},k=["onClick"],$=["onClick"],S={class:"m-auto md:my-auto md:w-60 md:h-24"},C=["src"],E={class:"flex flex-col text-xs p-2 md:justify-center md:space-y-3 md:text-base w-4/5 -ml-1"},F={class:"font-bold text-sm text-center m-auto"},j={key:1,class:"w-full h-96 flex text-slate-800"},B={class:"m-auto text-lg font-bold text-center"};function I(s,a,n,c,N,e){const h=f("font-awesome-icon");return this.$store.state.wishList.length!=0?(i(),l("div",v,[t("div",y,[L,t("ul",b,[(i(!0),l(w,null,x(s.wishList,(o,d)=>(i(),l("li",{key:d,class:"my-1 px-2 py-1 bg-white rounded-lg shadow-md relative"},[t("div",P,[t("div",{class:"absolute right-1 -top-2",onClick:m=>e.remove(o,d)},[g(h,{icon:"fa-regular fa-trash-can",style:{color:"#333366"},class:"m-auto rounded-full cursor-pointer"})],8,k),t("div",{class:"flex flex-row justify-between w-full h-fit",onClick:m=>(e.toggleShowProductPage(),e.insertProduct(o))},[t("div",S,[t("img",{src:o.pic,alt:"item pic",class:"w-44 h-22 md:w-full md:h-full rounded-md"},null,8,C)]),t("div",E,[t("h2",F,r(o.title),1)])],8,$)])]))),128))])])])):(i(),l("div",j,[t("div",B,[t("h2",null,r(e.itemExist),1)])]))}const O=u(p,[["render",I]]);export{O as default};
