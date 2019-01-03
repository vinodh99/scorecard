(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{176:function(e,t,a){e.exports=a(355)},181:function(e,t,a){},183:function(e,t,a){},185:function(e,t,a){},187:function(e,t,a){},352:function(e,t,a){},355:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(9),s=a.n(r),c=(a(181),a(37)),i=a(38),o=a(40),m=a(39),u=a(41),p=a(364),g=a(367),h=a(366),d=a(365),E=(a(183),a(363)),f=a(356),b=a(331),y=a(336),C=a(156),v=a(13),x=a(66),I=a(360),O=a(359),w=a(114),j=a(362),T=a(357),A=a(361),k=(a(185),a(187),function(e,t,a,n,l,r){return{type:"UPDATE_ROI",gtm:e,gfx:t,ghc1:a,ghc2:n,gql:l,coi:r}}),G=a(65),N=(a(193),a(358)),R=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.roiValues;console.log(e);return l.a.createElement("div",null,l.a.createElement("p",null,l.a.createElement(N.a,{className:"table",dataSource:e,columns:[{title:"ROI",dataIndex:"name"},{title:"Time",dataIndex:"time"}]})))}}]),t}(n.Component),M=(I.a.Meta,O.a.Item,function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).handleVisibleChange=function(e){a.setState({visible:e})},a.handleMessageInput=function(e){a.setState(Object(x.a)({},e.target.name,e.target.value))},a.GTM=function(){var e=parseInt(a.state.rpy,10),t=parseInt(a.state.rie,10);if(0!==e){var n=e*t;a.setState({gtm:n}),a.props.dispatch(k(a.state.gtm,a.state.gfx,a.state.ghc1,a.state.ghc2,a.state.gql,a.state.coi))}},a.GQL=function(){if(0!==a.state.fpy&&0!==a.state.rpm){var e=28.3*a.state.fpy*a.state.rpm;a.setState({gql:e}),a.props.dispatch(k(a.state.gtm,a.state.gfx,a.state.ghc1,a.state.ghc2,a.state.gql,a.state.coi))}},a.GHC1=function(){if(0!==a.state.ias&&0!==a.state.ish){var e=a.state.ias*a.state.ish*.16;a.setState({ghc1:e}),a.props.dispatch(k(a.state.gtm,a.state.gfx,a.state.ghc1,a.state.ghc2,a.state.gql,a.state.coi))}},a.GHC2=function(){if(0!==a.state.das&&0!==a.state.ds){var e=a.state.das*a.state.min*.18;a.setState({ghc2:e})}},a.GFX=function(){if(0!==a.state.aar){var e=.036*a.state.aar;a.setState({gfx:e}),a.props.dispatch(k(a.state.gtm,a.state.gfx,a.state.ghc1,a.state.ghc2,a.state.gql,a.state.coi))}},a.onChange=function(e,t){console.log(e),a.setState(Object(x.a)({},t,e))},a.tooltipDisplay=function(e){return l.a.createElement(w.a,{placement:"topLeft",title:e},l.a.createElement(v.a,{type:"exclamation-circle"}))},a.tooltip=function(e){switch(e){case"tricd":return a.tooltipDisplay("Time reduction by implementing continuous delivery");case"tsrca":return a.tooltipDisplay("Time spent on root cause analysis");case"tdspr":return a.tooltipDisplay("Time developers spend on problem resolution");default:return"not defined"}},a.onChange1=function(){a.props.dispatch(k(a.state.gtm,a.state.gfx,a.state.ghc1,a.state.ghc2,a.state.gql,a.state.coi))},a.state={visible:!1,min:28.3,rie:"110/115",coi:0,rpy:"",fpy:"",gtm:0,gql:0,ghc1:0,ghc2:0,gfx:0,rpm:"",ias:"",ish:"",das:"",ds:.18,aar:"",roi:0,por:.036,hpw:.16,tpr:.18},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props.form.getFieldDecorator,a=this.state.coi,n=this.state.gtm,r=this.state.gql,s=this.state.ghc1,c=this.state.ghc2,i=this.state.gfx;return l.a.createElement("div",{style:{background:"#ECECEC",height:750}},l.a.createElement(b.a,{gutter:5},l.a.createElement(y.a,{span:20},l.a.createElement(b.a,{className:"row",gutter:10,style:{paddingBottom:15,paddingTop:15,paddingLeft:15}},l.a.createElement(y.a,{span:12},l.a.createElement(I.a,{className:"card",style:{background:"#BCC0C2",textAlign:"center",height:237},bordered:!1},l.a.createElement("p",null,"Revenue gains from accelerated time to market of new functionality ",l.a.createElement("br",null)," (GTM) "),l.a.createElement("h1",null,"GTM: ",this.state.gtm.toFixed(2)),l.a.createElement(b.a,null,l.a.createElement(y.a,{span:12,style:{alignItems:"center"}},l.a.createElement("p",null," Revenue Per Year ",l.a.createElement("br",null),l.a.createElement(j.a,{name:"rpy",type:"number",className:"rpy-input",value:this.state.rpy,onChange:this.handleMessageInput,onPressEnter:this.GTM,placeholder:"rpy",size:"small"}))),l.a.createElement(y.a,{span:12},l.a.createElement("p",null," Revenue Increase Estimate",l.a.createElement(T.a,{alignContent:"center",content:l.a.createElement("p",null,"(default value is set to ",this.state.rie,", can be changed below)",l.a.createElement("br",null),l.a.createElement(O.a.Item,Object.assign({},{labelCol:{xs:{span:24},sm:{span:8}},wrapperCol:{xs:{span:24},sm:{span:8}}},{label:"RIE"}),t("number",{rules:[{required:!1}]})(l.a.createElement(j.a,{className:"rpy-input",textAlign:"center",name:"rie",onChange:this.handleMessageInput,value:this.state.rie,defaultValue:"110/115",onPressEnter:this.GTM})))),trigger:"click",visible:this.state.visible,onVisibleChange:this.handleVisibleChange},l.a.createElement(v.a,{type:"question-circle-o"})),l.a.createElement("br",null)," ",l.a.createElement("span",{style:{fontWeight:"bold"}}," ",this.state.rie," ")))," ")," ")),l.a.createElement(y.a,{span:12},l.a.createElement(I.a,{className:"card",style:{background:"#BCC0C2",textAlign:"center",height:237},bordered:!1},l.a.createElement("p",null," Gain from flexibility in the IT environment ",l.a.createElement("br",null)," (GFX) "),l.a.createElement("h1",null," GFX: ",this.state.gfx.toFixed(2)," "),l.a.createElement(b.a,null,l.a.createElement(y.a,{span:12,style:{alignItems:"center"}},l.a.createElement("p",null," Application Annual Revenue ",l.a.createElement("br",null),l.a.createElement(j.a,{name:"aar",type:"number",className:"aar-input",value:this.state.aar,onChange:this.handleMessageInput,placeholder:"aar",size:"small"}))),l.a.createElement(y.a,{span:12},l.a.createElement("p",null," 72 % Avg TCO reduction x5 % cost of IT as percentage of revenue ",l.a.createElement("br",null)," ",l.a.createElement("span",{style:{fontWeight:"bold"}}," ",this.state.por," "))))))),l.a.createElement(b.a,{className:"row",gutter:10,style:{paddingLeft:15,paddingRight:10,paddingBottom:10}},l.a.createElement(y.a,{span:12},l.a.createElement(I.a,{className:"card",style:{background:"#BCC0C2",textAlign:"center",height:320},bordered:!1},l.a.createElement("p",null,"Gains from enhanced IT team productivity and cost reduction of IT headcount waste(GHC) "),l.a.createElement("h4",null,"GHC(IT Ops): ",this.state.ghc1.toFixed(2)),l.a.createElement(b.a,{gutter:10},l.a.createElement(y.a,{span:8,style:{alignItems:"center"}},l.a.createElement("p",null," IT average salary ",l.a.createElement("br",null)," ",l.a.createElement(j.a,{name:"ias",className:"ias-input",type:"number",value:this.state.ias,onChange:this.handleMessageInput,placeholder:"ias",size:"small"}))),l.a.createElement(y.a,{span:8},l.a.createElement("p",null," 7.2 / 45 saving hours per week / total hours ",l.a.createElement("br",null)," ",l.a.createElement("span",{style:{fontWeight:"bold"}}," ",this.state.hpw," "))),l.a.createElement(y.a,{span:8},l.a.createElement("p",null," IT staff headcount ",l.a.createElement("br",null),l.a.createElement(j.a,{className:"aar-input",name:"ish",type:"number",value:this.state.ish,onChange:this.handleMessageInput,placeholder:"ish",size:"small"})))),l.a.createElement("h4",null,"GHC(Developers): ",this.state.ghc2.toFixed(2)," "),l.a.createElement(b.a,{gutter:10},l.a.createElement(y.a,{span:8,style:{alignItems:"center"}},l.a.createElement("p",null," Developer average salary ",l.a.createElement("br",null),l.a.createElement(j.a,{name:"das",type:"number",value:this.state.das,onChange:this.handleMessageInput,placeholder:"das",className:"aar-input",size:"small"}))),l.a.createElement(y.a,{span:8},l.a.createElement("p",null," Average Minutes to recover difference ",l.a.createElement("br",null)," ",l.a.createElement("span",{style:{fontWeight:"bold"}}," ",this.state.min," minutes "))),l.a.createElement(y.a,{span:8},l.a.createElement("p",null," 60 % TRICD ",this.tooltip("tricd")," x 75 % TSRCA ",this.tooltip("tsrca")," x 40 % TDSPR ",this.tooltip("tdspr")," ",l.a.createElement("br",null)," ",l.a.createElement("span",{style:{fontWeight:"bold"}}," ",this.state.tpr," minutes ")))))),l.a.createElement(y.a,{span:12},l.a.createElement(I.a,{className:"card",style:{background:"#BCC0C2",textAlign:"center",height:320},bordered:!1},l.a.createElement("p",null," Gains from cost reduction of application failures resulting from increased quality(GQL) "),l.a.createElement("h1",null," GQL: ",this.state.gql.toFixed(2)),l.a.createElement(b.a,{gutter:10},l.a.createElement(y.a,{span:8,style:{alignItems:"center"}},l.a.createElement("p",null," Failures Per Year ",l.a.createElement("br",null),l.a.createElement(j.a,{className:"aar-input",name:"fpy",type:"number",value:this.state.fpy,onChange:this.handleMessageInput,size:"small",placeholder:"fpy"}))),l.a.createElement(y.a,{span:8},l.a.createElement("p",null," Average Minutes to recover difference ",l.a.createElement("br",null)," ",l.a.createElement("span",{style:{fontWeight:"bold"}}," ",this.state.min,"minutes "))),l.a.createElement(y.a,{span:8,style:{textAlign:"center"}},l.a.createElement("p",null," Revenue per minute ",l.a.createElement("br",null)," "," ",l.a.createElement(j.a,{className:"aar-input",name:"rpm",type:"number",value:this.state.rpm,onChange:this.handleMessageInput,size:"small",placeholder:"rpm"}),l.a.createElement("br",null)," Minutes ")))))),l.a.createElement(b.a,{className:"row",gutter:5,style:{paddingTop:5,paddingLeft:15}},l.a.createElement(y.a,null,l.a.createElement(I.a,{className:"card",style:{background:"#535353a",textAlign:"center",height:300,justifyContent:"center",borderRadius:10},bordered:!1}," ",l.a.createElement("p",null,"Return Of Investment"),l.a.createElement("h1",null," ROI: ",this.props.roi.toFixed(2)," "),l.a.createElement(b.a,null,l.a.createElement(y.a,{span:12},l.a.createElement("p",null," Cost Of Investment: "),l.a.createElement(A.a,{className:"slider",min:1,max:1e3,onChange:function(t){return e.onChange(t,"coi")},onAfterChange:function(t){return e.onChange1(t)},name:"coi",value:"number"===typeof a?a:0,step:.01}),l.a.createElement("p",null," GTM "),l.a.createElement(A.a,{className:"slider",min:1,max:1e3,onChange:function(t){return e.onChange(t,"gtm")},onAfterChange:function(t){return e.onChange1(t)},name:"gtm",value:"number"===typeof n?n:0,step:.01}),l.a.createElement("p",null," GQL "),l.a.createElement(A.a,{className:"slider",min:1,max:1e3,onChange:function(t){return e.onChange(t,"gql")},onAfterChange:function(t){return e.onChange1(t)},name:"gql",value:"number"===typeof r?r:0,step:.01})),l.a.createElement(y.a,{span:12},l.a.createElement("p",null," GHC(Developers) "),l.a.createElement(A.a,{className:"slider",min:1,max:1e3,onChange:function(t){return e.onChange(t,"ghc1")},onAfterChange:function(t){return e.onChange1(t)},name:"ghc1",value:"number"===typeof s?s:0,step:.01}),l.a.createElement("p",null," GHC(IT ops) "),l.a.createElement(A.a,{className:"slider",min:1,max:1e3,onChange:function(t){return e.onChange(t,"ghc2")},onAfterChange:function(t){return e.onChange1(t)},name:"ghc2",value:"number"===typeof c?c:0,step:.01}),l.a.createElement("p",null," GFX ")," ",l.a.createElement(A.a,{className:"slider",min:1,max:1e3,onChange:function(t){return e.onChange(t,"gfx")},onAfterChange:function(t){return e.onChange1(t)},name:"gfx",value:"number"===typeof i?i:0,step:.01}))))))),l.a.createElement(y.a,{Span:4,offset:20,style:{textAlign:"center",paddingBottom:10,paddingTop:10,paddingLeft:5}},l.a.createElement(I.a,{className:"card",hoverable:!0,style:{background:"grey",textAlign:"center",alignContent:"center",height:895,borderRadius:"10px"},bordered:!1},l.a.createElement("p",null),l.a.createElement("p",null,l.a.createElement(R,this.props))))))}}]),t}(n.Component)),q=O.a.create()(M),F=Object(G.b)(function(e){return console.log(e),{roi:e.updatedRoi.roi,roiValues:e.updatedRoi.calcValues}})(q),D=E.a.Header,S=E.a.Content,H=E.a.Footer,L=(E.a.Sider,f.a.SubMenu,function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=l.a.createElement(f.a,null,l.a.createElement(f.a.Item,{key:"0"},l.a.createElement("a",{href:"http://www.alipay.com/"},"change RIE")),l.a.createElement(f.a.Item,{key:"1"},l.a.createElement("a",{href:"http://www.taobao.com/"},"change Avg Minutes for GQL")),l.a.createElement(f.a.Item,{key:"3"},"change saving Hours for GHC (IT Ops)"),l.a.createElement(f.a.Item,{key:"3"},"Time developers spend on problems for GHC(Dev)"));return l.a.createElement("div",null,l.a.createElement(E.a,{style:{minHeight:"100vh"}},l.a.createElement(E.a,null,l.a.createElement(D,{style:{background:"#525252",padding:0}},l.a.createElement(b.a,null,l.a.createElement(y.a,{span:12},l.a.createElement("h1",{style:{fontWeight:"bold",color:"#0066c",fontFamily:"Cochin",textAlign:"right"}},"SCORECARD")),l.a.createElement(y.a,{span:12},l.a.createElement(C.a,{style:{background:"#525252"},overlay:e,trigger:["click"]},l.a.createElement("h1",{className:"ant-dropdown-link",style:{paddingRight:40,fontWeight:"bold",color:"#0066c",fontFamily:"Cochin",textAlign:"right"}},l.a.createElement(v.a,{className:"custom-icon",type:"setting"})))))),l.a.createElement(S,{style:{alignItems:"center",margin:"24px 16px",padding:24,background:"#fff",minHeight:580}},l.a.createElement(F,this.props)),l.a.createElement(H,{style:{textAlign:"center"}}))))}}]),t}(n.Component)),W=a(69),B=a(58),V={roi:0,calcValues:[]},z=[],P=Object(B.b)({updatedRoi:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_ROI":return function(e,t){var a=Object(W.a)({},e),n=(t.gtm+t.gql+t.ghc1+t.ghc2+t.gfx-t.coi)/t.coi*100,l=new Date,r=l.getHours(),s=l.getMinutes();return z.push({name:n.toFixed(2),time:"".concat(r,":").concat(s,"hrs")}),n?a=Object.assign({},e,{roi:n,calcValues:z}):Object(W.a)({},a)}(e,t);default:return e}}}),Q=function(){return Object(W.a)({},Object(B.c)(P))}(),X=function(){return l.a.createElement(p.a,null,l.a.createElement(G.a,{store:Q},l.a.createElement(g.a,null,l.a.createElement(h.a,{exact:!0,path:"/scorecard",render:function(e){return l.a.createElement(L,e)}}),l.a.createElement(d.a,{to:"/scorecard"}))))},J=(a(352),function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"image"},l.a.createElement(X,null))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(J,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[176,2,1]]]);
//# sourceMappingURL=main.020b2df4.chunk.js.map