import"./base-08276557.js";import{a as u,E as m,b as C,c as k,d as T,e as y}from"./axios-3c0caa96.js";import{c as I,a as z,b as F,E}from"./el-input-03933b8a.js";import"./el-popper-50257b04.js";import{_ as v,d as N,o as P,c as U,b as o,w as t,a as g,F as $,e as n}from"./index-9fc94f8a.js";import"./index-f44ebcc6.js";import"./index-b561687f.js";const D=N({data(){return{save:!0,lex:0,dialogFormVisible:!1,page:1,totaldata:10,records:[],record:{id:0,memberId:0,memberPhone:"",productId:0,productName:"",sendTime:"",subscribeTime:""}}},methods:{getpage(e,l){const b=this;u({method:"post",url:"http://mall.qzimp.cn/mall/sms-flash-promotion-log/page",data:{current:e,size:l}}).then(function(p){console.log(p),b.records=p.data.data.page.records,b.totaldata=p.data.data.page.total})},jumper(){this.getpage(this.page,5)},Demandeupdate(){u({method:"post",url:"http://mall.qzimp.cn/mall/sms-flash-promotion-log/edit",data:this.record}).then(function(e){e.data.success?m({message:"�����ɹ�.",type:"success"}):m({message:"����ʧ��",type:"error"})})},Demanderemove(e){u({method:"get",url:"http://mall.qzimp.cn/mall/sms-flash-promotion-log/del/"+e}).then(function(l){console.log(l.data.success),l.data.success?m({message:"�����ɹ�.",type:"success"}):m({message:"����ʧ��",type:"error"})})},Demandeadd(){u({method:"post",url:"http://mall.qzimp.cn/mall/sms-flash-promotion-log/add",data:this.record}).then(function(e){e.data.success?m({message:"�����ɹ�.",type:"success"}):m({message:"����ʧ��",type:"error"})})},update(e,l){this.lex=e,e==0?this.record=l:this.record={id:0,memberId:0,memberPhone:"",productId:0,productName:"",sendTime:"",subscribeTime:""},this.dialogFormVisible=!this.dialogFormVisible,this.getpage(this.page,10)},planeok(){this.lex==0?this.Demandeupdate():this.Demandeadd(),this.dialogFormVisible=!this.dialogFormVisible,location.reload(),this.$router.go(0)},planeno(){this.dialogFormVisible=!this.dialogFormVisible},remove(e){this.Demanderemove(e.id),location.reload(),this.$router.go(0)}},mounted(){this.getpage(this.page,10)}}),L={class:"demo-pagination-block"},W=g("div",{class:"demonstration"},"Jump to",-1),S={class:"dialog-footer"};function q(e,l,b,p,B,j){const d=y,s=I,h=C,f=k,r=z,i=F,c=E,V=T;return P(),U($,null,[o(h,{data:e.records,style:{width:"100%"}},{default:t(()=>[o(d,{prop:"id",label:"id",width:"180"}),o(d,{prop:"memberId",label:"memberId",width:"180"}),o(d,{prop:"memberPhone",label:"memberPhone",width:"180"}),o(d,{prop:"productId",label:"productId",width:"280"}),o(d,{prop:"productName",label:"productName",width:"280"}),o(d,{prop:"sendTime",label:"sendTime",width:"280"}),o(d,{prop:"subscribeTime",label:"subscribeTime",width:"280"}),o(d,{fixed:"right",label:"Operations",width:"340"},{default:t(a=>[o(s,{type:"primary",plain:"",onClick:w=>e.update(0,a.row)},{default:t(()=>[n("Primary")]),_:2},1032,["onClick"]),o(s,{type:"danger",plain:"",onClick:w=>e.remove(a.row)},{default:t(()=>[n("Danger")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"]),o(s,{type:"primary",onClick:l[0]||(l[0]=a=>e.update(1,0))},{default:t(()=>[n("add")]),_:1}),g("div",L,[W,o(f,{"current-page":e.page,"onUpdate:currentPage":l[1]||(l[1]=a=>e.page=a),"page-size":e.pageSize3,"onUpdate:pageSize":l[2]||(l[2]=a=>e.pageSize3=a),small:e.small,disabled:e.disabled,background:e.background,layout:"prev, pager, next, jumper",total:e.totaldata,onSizeChange:e.handleSizeChange,onCurrentChange:e.handleCurrentChange,onClick:e.jumper},null,8,["current-page","page-size","small","disabled","background","total","onSizeChange","onCurrentChange","onClick"])]),o(V,{modelValue:e.dialogFormVisible,"onUpdate:modelValue":l[10]||(l[10]=a=>e.dialogFormVisible=a),title:"update"},{footer:t(()=>[g("span",S,[o(s,{onClick:e.planeno},{default:t(()=>[n("Cancel")]),_:1},8,["onClick"]),o(s,{type:"primary",onClick:e.planeok},{default:t(()=>[n(" Confirm ")]),_:1},8,["onClick"])])]),default:t(()=>[o(c,{model:e.record},{default:t(()=>[o(i,{label:"id","label-width":e.formLabelWidth},{default:t(()=>[o(r,{modelValue:e.record.id,"onUpdate:modelValue":l[3]||(l[3]=a=>e.record.id=a),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),o(i,{label:"memberId","label-width":e.formLabelWidth},{default:t(()=>[o(r,{modelValue:e.record.memberId,"onUpdate:modelValue":l[4]||(l[4]=a=>e.record.memberId=a),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),o(i,{label:"memberPhone","label-width":e.formLabelWidth},{default:t(()=>[o(r,{modelValue:e.record.memberPhone,"onUpdate:modelValue":l[5]||(l[5]=a=>e.record.memberPhone=a),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),o(i,{label:"productId","label-width":e.formLabelWidth},{default:t(()=>[o(r,{modelValue:e.record.productId,"onUpdate:modelValue":l[6]||(l[6]=a=>e.record.productId=a),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),o(i,{label:"productName","label-width":e.formLabelWidth},{default:t(()=>[o(r,{modelValue:e.record.productName,"onUpdate:modelValue":l[7]||(l[7]=a=>e.record.productName=a),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),o(i,{label:"sendTime","label-width":e.formLabelWidth},{default:t(()=>[o(r,{modelValue:e.record.sendTime,"onUpdate:modelValue":l[8]||(l[8]=a=>e.record.sendTime=a),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),o(i,{label:"subscribeTime","label-width":e.formLabelWidth},{default:t(()=>[o(r,{modelValue:e.record.subscribeTime,"onUpdate:modelValue":l[9]||(l[9]=a=>e.record.subscribeTime=a),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"])]),_:1},8,["model"])]),_:1},8,["modelValue"])],64)}const Q=v(D,[["render",q]]);export{Q as default};
