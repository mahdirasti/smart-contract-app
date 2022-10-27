"use strict";(self.webpackChunkadmin_smart_contract=self.webpackChunkadmin_smart_contract||[]).push([[969],{3562:function(e,t,n){var i=n(1413),r=(n(2791),n(3767)),o=n(890),s=n(4554),a=n(3329);t.Z=function(e){var t=e.title,n=e.value,c=e.sx,l=e.icon,d=e.direction,x=void 0===d?"row":d;return(0,a.jsxs)(r.Z,{direction:x,spacing:1,justifyContent:"space-between",sx:(0,i.Z)({p:.5,width:"100%",textTransform:"capitalize"},c),children:[(0,a.jsxs)(r.Z,{direction:"row",alignItems:"center",spacing:1,children:[l&&l,t&&(0,a.jsx)(o.Z,{color:"text.secondary",variant:"smallMedium",children:t})]}),(0,a.jsx)(s.Z,{children:n})]})}},8487:function(e,t,n){n.d(t,{H:function(){return l},n:function(){return i.Z}});var i=n(8808),r=n(1413),o=(n(2791),n(3967)),s=n(4554),a=n(3168),c=n(3329),l=function(e){var t=e.status,n=e.sx,i=void 0===n?{}:n,l=(0,a.$)().t,d=(0,o.Z)(),x="",u="";switch(t){case"in_progress":x=d.palette.info.light,u=l("in_progress");break;case"done":x=d.palette.extended_colors.dark_green.main,u=l("done");break;case"accepted":x=d.palette.extended_colors.green.main,u=l("accepted");break;case"waiting":x=d.palette.warning.main,u=l("waiting");break;default:x=d.palette.warning.dark,u=l("pending")}return(0,c.jsx)(s.Z,{sx:(0,r.Z)({p:1,py:.5,px:2,width:"auto",maxWidth:"100%",textAlign:"center",borderRadius:1,fontSize:"12px",bgcolor:d.palette.extended_colors.status.main,color:x,textTransform:"lowercase"},i),children:u})}},8808:function(e,t,n){n(2791);var i=n(3767),r=n(890),o=n(3329);t.Z=function(e){var t=e.title,n=void 0===t?"":t,s=e.description,a=void 0===s?"":s,c=e.headerVariant,l=void 0===c?"smallRegular":c,d=e.descriptionVariant,x=void 0===d?"xsmallRegular":d,u=e.headerColor,p=void 0===u?"text.secondary":u,h=e.descriptionColor,m=void 0===h?"text.secondary":h,j=e.alignment,f=void 0===j?"left":j,Z=e.direction,g=void 0===Z?"row":Z,w=e.sxProps,v=void 0===w?{}:w,b=e.parentDir,y=void 0===b?"row":b,C=e.icon,_=e.childSpacing,P=void 0===_?1:_,I=e.parentSpacing,k=void 0===I?.5:I;return(0,o.jsxs)(i.Z,{sx:v,spacing:k,direction:y,children:[(0,o.jsxs)(i.Z,{direction:g,spacing:P,alignItems:"center",justifyContent:f,children:[Boolean(C)&&(0,o.jsx)(o.Fragment,{children:C})||null,(0,o.jsx)(r.Z,{variant:l,color:p,sx:{textAlign:f},children:n})]}),Boolean(a)&&(0,o.jsx)(r.Z,{variant:x,color:m,component:"p",sx:{textAlign:f},children:a})]})}},6969:function(e,t,n){n.r(t),n.d(t,{default:function(){return J}});var i=n(2791),r=n(3967),o=n(1934),s=n(5636),a=n(5815),c=n(6871),l=n(3168),d=n(188),x=n(4554),u=n(1889),p=n(8487),h=n(9290),m=n(8645),j=n(703),f=n(3767),Z=n(890),g=n(6151),w=n(9709),v=n(3329),b=function(e){var t=e.title,n=e.onSubmit,i=e.onClose,r=e.cancelButtonText,o=e.acceptButtonText,s=e.loadingSubmit,a=void 0!==s&&s,c=(0,l.$)("common").t;return(0,v.jsxs)(f.Z,{direction:"column",sx:{p:1},spacing:3,children:[Boolean(t)&&(0,v.jsx)(Z.Z,{component:"strong",children:t}),(0,v.jsxs)(f.Z,{direction:"row",spacing:1,children:[(0,v.jsx)(g.Z,{onClick:i,variant:"outlined",color:"error",children:r||c("cancel")}),(0,v.jsx)(w.Z,{loading:a,onClick:n,variant:"contained",sx:{width:120,maxWidth:"100%",bgcolor:function(e){return e.palette.extended_colors.light_red.main}},children:o||c("submit")})]})]})},y=function(e){var t=e.onClose,n=e.onSubmit,i=(0,l.$)(["sections","common"]).t;return(0,v.jsxs)(f.Z,{alignItems:"center",spacing:2,children:[(0,v.jsx)(p.n,{sxProps:{p:2},parentDir:"column",parentSpacing:1,title:i("common:freeze_balance"),alignment:"center",description:i("sections:lorem_ipsum"),headerVariant:"bodyMedium",descriptionColor:"text.disabled",descriptionVariant:"smallRegular"}),(0,v.jsx)(b,{onClose:function(){return t()},onSubmit:function(){return n()},acceptButtonText:i("common:yes_im_sure"),cancelButtonText:i("common:back")})]})},C=function(e){var t=(0,h.b)(),n=t.showModal,i=t.closeModal,r=(0,c.s0)(),o=(0,l.$)(["sections","common"]).t;return(0,v.jsx)(j.Z,{sx:{height:"100%"},children:(0,v.jsxs)(f.Z,{spacing:2,height:"100%",justifyContent:"space-between",children:[(0,v.jsx)(p.n,{parentDir:"row",sxProps:{justifyContent:"space-between"},title:o("common:freeze_balance"),headerVariant:"smallMedium",descriptionVariant:"smallMedium",description:"0.07799 USDT"}),(0,v.jsx)(Z.Z,{color:"text.disabled",children:o("sections:lorem_ipsum")}),(0,v.jsx)(g.Z,{variant:"text",onClick:function(){return n((0,v.jsx)(y,{onClose:i,onSubmit:function(){return r("".concat(m.kr.activities.index))}}),{"& .content-parent":{width:500,px:2}})},children:o("common:unfreez")})]})})},_=n(1413),P=function(e){var t=e.children,n=e.title,i=e.direction,r=void 0===i?"column":i,o=e.justifyContent,s=void 0===o?"space-between":o,a=e.sx;return(0,v.jsxs)(f.Z,{sx:(0,_.Z)({mb:6,width:"100%"},a),direction:r,justifyContent:s,alignItems:"center",children:[(0,v.jsx)(Z.Z,{component:"span",variant:"bodyLight",children:n}),t]})},I=n(191),k=n(3466),M=function(e){var t=(0,l.$)().t;return(0,v.jsx)(j.Z,{sx:{height:"100%"},children:(0,v.jsxs)(f.Z,{height:"100%",width:"100%",justifyContent:"space-between",alignItems:"center",children:[(0,v.jsx)(Z.Z,{textAlign:"left",width:"100%",children:t("payout")}),(0,v.jsx)(P,{sx:{my:2,"& span":{width:"100%",textAlign:"left",my:.5,fontSize:"12px",color:function(e){return e.palette.primary.main}}},title:t("price"),justifyContent:"flex-start",children:(0,v.jsx)(I.Z,{variant:"outlined",InputProps:{startAdornment:(0,v.jsx)(k.Z,{position:"start",children:t("usdt")})}})}),(0,v.jsx)(f.Z,{width:["100%",,300],maxWidth:"100%",mt:2,children:(0,v.jsx)(g.Z,{variant:"contained",children:t("confirm")})})]})})},S=n(4942),V=n(9439),T=n(5987),B=n(5228),$=n(2065),L=n(3896),z=["children","value","index","tabId"];function D(e){var t=e.children,n=e.value,i=e.index,r=e.tabId,o=(0,T.Z)(e,z);return(0,v.jsx)("div",(0,_.Z)((0,_.Z)({role:"tabpanel",hidden:n!==i,id:"".concat(r,"-").concat(i),"aria-labelledby":"".concat(r,"-").concat(i)},o),{},{children:n===i&&(0,v.jsx)(x.Z,{sx:{py:2},children:t})}))}var A=function(e){var t=e.tabId,n=e.items,r=void 0===n?[]:n,o=e.onChange,s=e.sx,a=void 0===s?{}:s,c=i.useState(0),l=(0,V.Z)(c,2),d=l[0],u=l[1];return(0,v.jsxs)(x.Z,{children:[(0,v.jsx)(B.Z,{value:d,onChange:function(e,t){u(t),o&&"function"===typeof o&&o(t)},"aria-label":t,sx:(0,_.Z)((0,S.Z)({px:2,borderBottom:1,borderColor:function(e){return(0,$.Fq)(e.palette.common.black,.12)}},"& .MuiTab-root",{maxWidth:"initial",minHeight:"initial",display:"flex",alignItems:"center",py:2,fontWeight:"500",fontSize:16}),a),children:r.map((function(e,n){return(0,i.createElement)(L.Z,(0,_.Z)((0,_.Z)({label:e.label},function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"single-tab",t=arguments.length>1?arguments[1]:void 0;return{id:"".concat(e,"-").concat(t),"aria-controls":"".concat(e,"-").concat(t)}}(t,0)),{},{icon:e.tabIcon?e.tabIcon:(0,v.jsx)(v.Fragment,{}),iconPosition:"start",key:n}))}))}),r.map((function(e,n){return(0,v.jsx)(D,{tabId:t,value:d,index:n,children:e.children},n)}))]})},R=A,X=function(e){var t=e.color,n=void 0===t?"#6FCF97":t;return(0,v.jsx)("svg",{width:"11",height:"19",viewBox:"0 0 11 19",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,v.jsx)("path",{d:"M10.9075 4.45L9.63874 5.525L6.43665 2.875L6.43665 19H4.62415L4.62415 2.85L1.42207 5.5L0.15332 4.45L5.5304 0L10.9075 4.45Z",fill:n})})},F=n(3562),W=n(7924),H=function(e){var t=(0,l.$)().t;return(0,v.jsxs)(x.Z,{sx:{borderRadius:2,bgcolor:function(e){return e.palette.extended_colors.status.main},p:2,display:"flex",flexDirection:"column",justifyContent:"center"},children:[(0,v.jsx)(F.Z,{direction:"row-reverse",title:t("paid"),value:(0,v.jsx)(X,{})}),(0,v.jsx)(W.Z,{}),(0,v.jsxs)(f.Z,{width:"100%",spacing:3,my:2,children:[(0,v.jsx)(p.n,{sxProps:{justifyContent:"space-between",width:"100%"},direction:"row",title:t("price"),headerColor:"text.primary",description:"0.000343434",descriptionVariant:"smallMedium"}),(0,v.jsx)(p.n,{sxProps:{justifyContent:"space-between",width:"100%"},direction:"row",title:t("request_date"),headerColor:"text.primary",description:"2022.06.04",descriptionVariant:"smallMedium"}),(0,v.jsx)(p.n,{sxProps:{justifyContent:"space-between",width:"100%"},direction:"row",title:t("refer"),headerColor:"text.primary",description:"XXX",descriptionVariant:"smallMedium"}),(0,v.jsx)(p.n,{sxProps:{justifyContent:"space-between",width:"100%"},direction:"row",title:t("transaction_code"),headerColor:"text.primary",description:"77007077070",descriptionVariant:"smallMedium"})]})]})},q=function(e){var t=(0,l.$)().t;return(0,v.jsxs)(x.Z,{sx:{borderRadius:2,bgcolor:function(e){return e.palette.extended_colors.status.main},p:2,display:"flex",flexDirection:"column",justifyContent:"center"},children:[(0,v.jsx)(F.Z,{direction:"row-reverse",title:t("withdrawal"),value:(0,v.jsx)(X,{})}),(0,v.jsx)(W.Z,{}),(0,v.jsxs)(f.Z,{width:"100%",spacing:3,my:2,children:[(0,v.jsx)(p.n,{sxProps:{justifyContent:"space-between",width:"100%"},direction:"row",title:t("price"),headerColor:"text.primary",description:"0.000343434",descriptionVariant:"smallMedium"}),(0,v.jsx)(p.n,{sxProps:{justifyContent:"space-between",width:"100%"},direction:"row",title:t("request_date"),headerColor:"text.primary",description:"2022.06.04",descriptionVariant:"smallMedium"}),(0,v.jsx)(p.n,{sxProps:{justifyContent:"space-between",width:"100%"},direction:"row",title:t("refer"),headerColor:"text.primary",description:"XXX",descriptionVariant:"smallMedium"}),(0,v.jsx)(p.n,{sxProps:{justifyContent:"space-between",width:"100%"},direction:"row",title:t("transaction_code"),headerColor:"text.primary",description:"77007077070",descriptionVariant:"smallMedium"})]})]})},U=function(e){var t=(0,l.$)().t;return(0,v.jsx)(j.Z,{sx:{height:"100%"},children:(0,v.jsxs)(f.Z,{height:"100%",justifyContent:"space-between",children:[(0,v.jsx)(p.n,{title:t("transactions"),alignment:"left"}),(0,v.jsx)(R,{tabId:"wallet-transactions",items:[{label:t("paid"),children:(0,v.jsx)(H,{})},{label:t("withdrawal"),children:(0,v.jsx)(q,{})}]})]})})},E=function(e){var t=(0,l.$)().t;return(0,v.jsx)(j.Z,{children:(0,v.jsxs)(f.Z,{direction:"row",spacing:1,alignItems:"center",children:[(0,v.jsx)(F.Z,{title:t("total_balance"),value:(0,v.jsx)(Z.Z,{children:"0.777 USDT"})}),(0,v.jsx)(W.Z,{flexItem:!0,sx:{width:2}}),(0,v.jsx)(F.Z,{title:t("available_cost"),value:(0,v.jsx)(Z.Z,{children:"0.777 USDT"})})]})})},G=function(e){return(0,v.jsx)(x.Z,{children:(0,v.jsxs)(u.ZP,{container:!0,spacing:1,children:[(0,v.jsx)(u.ZP,{item:!0,xs:12,children:(0,v.jsx)(E,{})}),(0,v.jsxs)(u.ZP,{item:!0,container:!0,spacing:1,children:[(0,v.jsxs)(u.ZP,{item:!0,container:!0,xs:12,md:6,spacing:1,children:[(0,v.jsx)(u.ZP,{item:!0,xs:12,children:(0,v.jsx)(C,{})}),(0,v.jsx)(u.ZP,{item:!0,xs:12,children:(0,v.jsx)(M,{})})]}),(0,v.jsx)(u.ZP,{item:!0,xs:12,md:6,children:(0,v.jsx)(U,{})})]})]})})},J=function(e){var t=(0,l.$)(["common","routes"]).t,n=(0,c.TH)(),i=(0,r.Z)(),x=(0,a.CG)(s.um.BI);return(0,v.jsx)(o.Z,{title:"",sidebarItems:(0,d._z)(t,n.pathname,x,i),children:(0,v.jsx)(G,{})})}}}]);
//# sourceMappingURL=969.c9cfea84.chunk.js.map