import"./base-08276557.js";import{a as u,E as n,b as C,c as w,d as I,e as k}from"./axios-3c0caa96.js";import{c as y,a as L,b as z,E as F}from"./el-input-03933b8a.js";import"./el-popper-50257b04.js";import{_ as S,d as E,o as v,c as U,b as e,w as t,a as h,F as $,e as m}from"./index-9fc94f8a.js";import"./index-f44ebcc6.js";import"./index-b561687f.js";const D=E({data(){return{save:!0,page:1,totaldata:10,lex:0,dialogFormVisible:!1,records:[],record:{flashPromotionCount:0,flashPromotionId:0,flashPromotionLimit:0,flashPromotionPrice:0,flashPromotionSessionId:0,id:0,productId:0,sort:0}}},methods:{getpage(o,l){const f=this;u({method:"post",url:"http://mall.qzimp.cn/mall/sms-flash-promotion-product-relation/page",data:{current:o,size:l}}).then(function(p){console.log(p),f.records=p.data.data.page.records,f.totaldata=p.data.data.page.total})},jumper(){this.getpage(this.page,5)},Demandeupdate(){u({method:"post",url:"http://mall.qzimp.cn/mall/sms-flash-promotion-product-relation/edit",data:this.record}).then(function(o){o.data.success?n({message:"�����ɹ�.",type:"success"}):n({message:"����ʧ��",type:"error"})})},Demanderemove(o){u({method:"get",url:"http://mall.qzimp.cn/mall/sms-flash-promotion-product-relation/del/"+o}).then(function(l){console.log(l.data.success),l.data.success?n({message:"�����ɹ�.",type:"success"}):n({message:"����ʧ��",type:"error"})})},Demandeadd(){u({method:"post",url:"http://mall.qzimp.cn/mall/sms-flash-promotion-product-relation/add",data:this.record}).then(function(o){o.data.success?n({message:"�����ɹ�.",type:"success"}):n({message:"����ʧ��",type:"error"})})},update(o,l){this.lex=o,o==0?this.record=l:this.record={flashPromotionCount:0,flashPromotionId:0,flashPromotionLimit:0,flashPromotionPrice:0,flashPromotionSessionId:0,id:0,productId:0,sort:0},this.dialogFormVisible=!this.dialogFormVisible},planeok(){this.lex==0?this.Demandeupdate():this.Demandeadd(),this.dialogFormVisible=!this.dialogFormVisible,location.reload(),this.$router.go(0)},planeno(){this.dialogFormVisible=!this.dialogFormVisible},remove(o){this.Demanderemove(o.id),location.reload(),this.$router.go(0)}},mounted(){this.getpage(this.page,5)}}),W={class:"demo-pagination-block"},q=h("div",{class:"demonstration"},"Jump to",-1),B={class:"dialog-footer"};function j(o,l,f,p,N,T){const d=k,s=y,b=C,g=w,i=L,r=z,c=F,P=I;return v(),U($,null,[e(b,{data:o.records,style:{width:"100%"}},{default:t(()=>[e(d,{prop:"flashPromotionCount",label:"flashPromotionCount",width:"120"}),e(d,{prop:"flashPromotionId",label:"flashPromotionId",width:"120"}),e(d,{prop:"flashPromotionLimit",label:"flashPromotionLimit",width:"120"}),e(d,{prop:"flashPromotionPrice",label:"flashPromotionPrice",width:"120"}),e(d,{prop:"flashPromotionSessionId",label:"flashPromotionSessionId",width:"120"}),e(d,{prop:"id",label:"id",width:"120"}),e(d,{prop:"productId",label:"productId",width:"120"}),e(d,{prop:"sort",label:"sort",width:"120"}),e(d,{fixed:"right",label:"Operations",width:"240"},{default:t(a=>[e(s,{type:"primary",plain:"",onClick:V=>o.update(0,a.row)},{default:t(()=>[m("Primary")]),_:2},1032,["onClick"]),e(s,{type:"danger",plain:"",onClick:V=>o.remove(a.row)},{default:t(()=>[m("Danger")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"]),e(s,{type:"primary",onClick:l[0]||(l[0]=a=>o.update(1,0))},{default:t(()=>[m("add")]),_:1}),h("div",W,[q,e(g,{"current-page":o.page,"onUpdate:currentPage":l[1]||(l[1]=a=>o.page=a),"page-size":o.pageSize3,"onUpdate:pageSize":l[2]||(l[2]=a=>o.pageSize3=a),small:o.small,disabled:o.disabled,background:o.background,layout:"prev, pager, next, jumper",total:o.totaldata,onSizeChange:o.handleSizeChange,onCurrentChange:o.handleCurrentChange,onClick:o.jumper},null,8,["current-page","page-size","small","disabled","background","total","onSizeChange","onCurrentChange","onClick"])]),e(P,{modelValue:o.dialogFormVisible,"onUpdate:modelValue":l[11]||(l[11]=a=>o.dialogFormVisible=a),title:"update"},{footer:t(()=>[h("span",B,[e(s,{onClick:o.planeno},{default:t(()=>[m("Cancel")]),_:1},8,["onClick"]),e(s,{type:"primary",onClick:o.planeok},{default:t(()=>[m(" Confirm ")]),_:1},8,["onClick"])])]),default:t(()=>[e(c,{model:o.record},{default:t(()=>[e(r,{label:"flashPromotionCount","label-width":o.formLabelWidth},{default:t(()=>[e(i,{modelValue:o.record.flashPromotionCount,"onUpdate:modelValue":l[3]||(l[3]=a=>o.record.flashPromotionCount=a),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),e(r,{label:"flashPromotionId","label-width":o.formLabelWidth},{default:t(()=>[e(i,{modelValue:o.record.flashPromotionId,"onUpdate:modelValue":l[4]||(l[4]=a=>o.record.flashPromotionId=a),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),e(r,{label:"flashPromotionLimit","label-width":o.formLabelWidth},{default:t(()=>[e(i,{modelValue:o.record.flashPromotionLimit,"onUpdate:modelValue":l[5]||(l[5]=a=>o.record.flashPromotionLimit=a),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),e(r,{label:"flashPromotionPrice","label-width":o.formLabelWidth},{default:t(()=>[e(i,{modelValue:o.record.flashPromotionPrice,"onUpdate:modelValue":l[6]||(l[6]=a=>o.record.flashPromotionPrice=a),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),e(r,{label:"flashPromotionSessionId","label-width":o.formLabelWidth},{default:t(()=>[e(i,{modelValue:o.record.flashPromotionSessionId,"onUpdate:modelValue":l[7]||(l[7]=a=>o.record.flashPromotionSessionId=a),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),e(r,{label:"id","label-width":o.formLabelWidth},{default:t(()=>[e(i,{modelValue:o.record.id,"onUpdate:modelValue":l[8]||(l[8]=a=>o.record.id=a),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),e(r,{label:"productId","label-width":o.formLabelWidth},{default:t(()=>[e(i,{modelValue:o.record.productId,"onUpdate:modelValue":l[9]||(l[9]=a=>o.record.productId=a),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),e(r,{label:"sort","label-width":o.formLabelWidth},{default:t(()=>[e(i,{modelValue:o.record.sort,"onUpdate:modelValue":l[10]||(l[10]=a=>o.record.sort=a),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"])]),_:1},8,["model"])]),_:1},8,["modelValue"])],64)}const Q=S(D,[["render",j]]);export{Q as default};
