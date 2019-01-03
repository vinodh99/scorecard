(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{176:function(e,t,a){e.exports=a(355)},181:function(e,t,a){},183:function(e,t,a){},185:function(e,t,a){},187:function(e,t,a){},352:function(e,t,a){},355:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(9),s=a.n(r),c=(a(181),a(37)),i=a(38),o=a(40),m=a(39),u=a(41),p=a(364),h=a(367),g=a(366),d=a(365),E=(a(183),a(363)),f=a(356),b=a(331),y=a(336),C=a(156),v=a(13),x=a(66),I=a(360),O=a(359),w=a(114),G=a(362),j=a(357),R=a(361),F=(a(185),a(187),function(e,t,a,n,l,r){return{type:"UPDATE_ROI",gtm:e,gfx:t,ghc1:a,ghc2:n,gql:l,coi:r}}),N=a(65),T=(a(193),a(358)),k=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.roiValues;console.log(e);return l.a.createElement("div",null,l.a.createElement("p",null,l.a.createElement(T.a,{className:"table",dataSource:e,columns:[{title:"ROI",dataIndex:"name"},{title:"Time",dataIndex:"time"}]})))}}]),t}(n.Component),A=(I.a.Meta,O.a.Item,function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).handleVisibleChange=function(e){a.setState({visible:e})},a.handleMessageInput=function(e){a.setState(Object(x.a)({},e.target.name,e.target.value))},a.calcutateROI=function(e){var t=parseFloat(a.state.coi,10);0!==a.state.gtm&&0!==a.state.gql&&0!==a.state.gfx&&0!==a.state.ghc1&&0!==a.state.ghc2&&t&&a.props.dispatch(F(a.state.gtm,a.state.gfx,a.state.ghc1,a.state.ghc2,a.state.gql,t))},a.GTM=function(){var e=parseFloat(a.state.rpy,10),t=parseFloat(a.state.rie,10);if(0!==e&&0!==t){var n=e*t;a.setState({gtm:n}),a.calcutateROI()}},a.GQL=function(){var e=parseFloat(a.state.fpy,10),t=parseFloat(a.state.rpm,10),n=parseFloat(a.state.min,10);if(0!==e&&0!==t){var l=e*n*t;a.setState({gql:l}),a.calcutateROI()}},a.GHC1=function(){var e=parseFloat(a.state.ias,10),t=parseFloat(a.state.hpw,10),n=parseFloat(a.state.ish,10);if(0!==e&&0!==n){var l=e*n*t;a.setState({ghc1:l}),a.calcutateROI()}},a.GHC2=function(){var e=parseFloat(a.state.das,10),t=parseFloat(a.state.ds,10),n=parseFloat(a.state.tpr,10);if(0!==e&&0!==t){var l=e*t*n;a.setState({ghc2:l})}a.calcutateROI()},a.GFX=function(){var e=parseFloat(a.state.aar,10),t=parseFloat(a.state.por,10);if(0!==e&&0!==t){var n=e*t;a.setState({gfx:n}),a.calcutateROI()}},a.onChange=function(e,t){console.log(e),a.setState(Object(x.a)({},t,e))},a.tooltipDisplay=function(e){return l.a.createElement(w.a,{placement:"topLeft",title:e},l.a.createElement(v.a,{type:"exclamation-circle"}))},a.tooltip=function(e){switch(e){case"tricd":return a.tooltipDisplay("Time reduction by implementing continuous delivery");case"tsrca":return a.tooltipDisplay("Time spent on root cause analysis");case"tdspr":return a.tooltipDisplay("Time developers spend on problem resolution");default:return"not defined"}},a.onChange1=function(){a.calcutateROI()},a.state={visible:!1,min:"28.3",rie:"1.04",coi:"20",rpy:"",fpy:"",gtm:0,gql:0,ghc1:0,ghc2:0,gfx:0,rpm:"",ias:"",ish:"",das:"",ds:"",aar:"",roi:0,por:"0.036",hpw:"0.16",tpr:"0.18"},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props.form.getFieldDecorator,a=this.state.coi,n=this.state.gtm,r=this.state.gql,s=this.state.ghc1,c=this.state.ghc2,i=this.state.gfx;return l.a.createElement("div",{style:{background:"#ECECEC",height:750}},l.a.createElement(b.a,{gutter:5},l.a.createElement(y.a,{span:20},l.a.createElement(b.a,{className:"row",gutter:25,style:{paddingBottom:25,paddingTop:15,paddingLeft:15}},l.a.createElement(y.a,{span:12},l.a.createElement(I.a,{className:"card",style:{background:"#BCC0C2",textAlign:"center",height:237},bordered:!1},l.a.createElement("p",null,"Revenue gains from accelerated time to market of new functionality ",l.a.createElement("br",null)," (GTM) "),l.a.createElement("h1",null,"GTM: ",this.state.gtm.toFixed(2)),l.a.createElement(b.a,null,l.a.createElement(y.a,{span:12,style:{alignItems:"center"}},l.a.createElement("p",null," Revenue Per Year ",l.a.createElement("br",null),l.a.createElement(G.a,{name:"rpy",type:"number",className:"rpy-input",value:this.state.rpy,onChange:this.handleMessageInput,onPressEnter:this.GTM,placeholder:"rpy",size:"small"}))),l.a.createElement(y.a,{span:12},l.a.createElement("p",null," Revenue Increase Estimate",l.a.createElement(j.a,{alignContent:"center",content:l.a.createElement("p",null,"(default value is set to ",this.state.rie,", can be changed below)",l.a.createElement("br",null),l.a.createElement(O.a.Item,Object.assign({},{labelCol:{xs:{span:24},sm:{span:8}},wrapperCol:{xs:{span:24},sm:{span:8}}},{label:"RIE"}),t("number",{rules:[{required:!1}]})(l.a.createElement(G.a,{className:"rpy-input",textAlign:"center",name:"rie",onChange:this.handleMessageInput,value:this.state.rie,defaultValue:"110/115",onPressEnter:this.GTM})))),trigger:"click",visible:this.state.visible,onVisibleChange:this.handleVisibleChange},l.a.createElement(v.a,{type:"question-circle-o"})),l.a.createElement("br",null)," ",l.a.createElement("span",{style:{fontWeight:"bold"}}," ",this.state.rie," ")))," ")," ")),l.a.createElement(y.a,{span:12},l.a.createElement(I.a,{className:"card",style:{background:"#BCC0C2",textAlign:"center",height:237},bordered:!1},l.a.createElement("p",null," Gain from flexibility in the IT environment ",l.a.createElement("br",null)," (GFX) "),l.a.createElement("h1",null," GFX: ",this.state.gfx.toFixed(2)," "),l.a.createElement(b.a,null,l.a.createElement(y.a,{span:12,style:{alignItems:"center"}},l.a.createElement("p",null," Application Annual Revenue ",l.a.createElement("br",null),l.a.createElement(G.a,{name:"aar",type:"number",className:"aar-input",value:this.state.aar,onChange:this.handleMessageInput,onPressEnter:this.GFX,placeholder:"aar",size:"small"}))),l.a.createElement(y.a,{span:12},l.a.createElement("p",null," 72 % Avg TCO reduction x5 % cost of IT as percentage of revenue ",l.a.createElement("br",null)," ",l.a.createElement("span",{style:{fontWeight:"bold"}}," ",this.state.por," "))))))),l.a.createElement(b.a,{className:"row",gutter:25,style:{paddingLeft:15,paddingRight:10,paddingBottom:25}},l.a.createElement(y.a,{span:12},l.a.createElement(I.a,{className:"card",style:{background:"#BCC0C2",textAlign:"center",height:320},bordered:!1},l.a.createElement("p",null,"Gains from enhanced IT team productivity and cost reduction of IT headcount waste(GHC) "),l.a.createElement("h4",null,"GHC(IT Ops): ",this.state.ghc1.toFixed(2)),l.a.createElement(b.a,{gutter:10},l.a.createElement(y.a,{span:8,style:{alignItems:"center"}},l.a.createElement("p",null," IT average salary ",l.a.createElement("br",null)," ",l.a.createElement(G.a,{name:"ias",className:"ias-input",type:"number",value:this.state.ias,onPressEnter:this.GHC1,onChange:this.handleMessageInput,placeholder:"ias",size:"small"}))),l.a.createElement(y.a,{span:8},l.a.createElement("p",null," 7.2 / 45 saving hours per week / total hours ",l.a.createElement("br",null)," ",l.a.createElement("span",{style:{fontWeight:"bold"}}," ",this.state.hpw," "))),l.a.createElement(y.a,{span:8},l.a.createElement("p",null," IT staff headcount ",l.a.createElement("br",null),l.a.createElement(G.a,{className:"aar-input",name:"ish",type:"number",value:this.state.ish,onPressEnter:this.GHC1,onChange:this.handleMessageInput,placeholder:"ish",size:"small"})))),l.a.createElement("h4",null,"GHC(Developers): ",this.state.ghc2.toFixed(2)," "),l.a.createElement(b.a,{gutter:10},l.a.createElement(y.a,{span:8,style:{alignItems:"center"}},l.a.createElement("p",null," Developer average salary ",l.a.createElement("br",null),l.a.createElement(G.a,{name:"das",type:"number",value:this.state.das,onPressEnter:this.GHC2,onChange:this.handleMessageInput,placeholder:"das",className:"aar-input",size:"small"}))),l.a.createElement(y.a,{span:8},l.a.createElement("p",null," Dev staff",l.a.createElement("br",null),l.a.createElement(G.a,{name:"ds",type:"number",value:this.state.ds,onPressEnter:this.GHC2,onChange:this.handleMessageInput,placeholder:"ds",className:"aar-input",size:"small"}))),l.a.createElement(y.a,{span:8},l.a.createElement("p",null," 60 % TRICD ",this.tooltip("tricd")," x 75 % TSRCA ",this.tooltip("tsrca")," x 40 % TDSPR ",this.tooltip("tdspr")," ",l.a.createElement("br",null)," ",l.a.createElement("span",{style:{fontWeight:"bold"}}," ",this.state.tpr," minutes ")))))),l.a.createElement(y.a,{span:12},l.a.createElement(I.a,{className:"card",style:{background:"#BCC0C2",textAlign:"center",height:320},bordered:!1},l.a.createElement("p",null," Gains from cost reduction of application failures resulting from increased quality(GQL) "),l.a.createElement("h1",null," GQL: ",this.state.gql.toFixed(2)),l.a.createElement(b.a,{gutter:10},l.a.createElement(y.a,{span:8,style:{alignItems:"center"}},l.a.createElement("p",null," Failures Per Year ",l.a.createElement("br",null),l.a.createElement(G.a,{className:"aar-input",name:"fpy",type:"number",value:this.state.fpy,onPressEnter:this.GQL,onChange:this.handleMessageInput,size:"small",placeholder:"fpy"}))),l.a.createElement(y.a,{span:8},l.a.createElement("p",null," Average Minutes to recover difference ",l.a.createElement("br",null)," ",l.a.createElement("span",{style:{fontWeight:"bold"}}," ",this.state.min,"minutes "))),l.a.createElement(y.a,{span:8,style:{textAlign:"center"}},l.a.createElement("p",null," Revenue per minute ",l.a.createElement("br",null)," "," ",l.a.createElement(G.a,{className:"aar-input",name:"rpm",type:"number",value:this.state.rpm,onPressEnter:this.GQL,onChange:this.handleMessageInput,size:"small",placeholder:"rpm"}),l.a.createElement("br",null)," Minutes ")))))),l.a.createElement(b.a,{className:"row",gutter:5,style:{paddingTop:5,paddingLeft:15}},l.a.createElement(y.a,null,l.a.createElement(I.a,{className:"card",style:{background:"#535353a",textAlign:"center",height:300,justifyContent:"center",borderRadius:10},bordered:!1}," ",l.a.createElement("p",null,"Return Of Investment"),l.a.createElement("h1",null," ROI: ",this.props.roi.toFixed(2)," "),l.a.createElement(b.a,null,l.a.createElement(y.a,{span:12},l.a.createElement("p",null," Cost Of Investment: "),l.a.createElement(R.a,{className:"slider",min:1,max:1e3,onChange:function(t){return e.onChange(t,"coi")},onAfterChange:function(t){return e.onChange1(t)},name:"coi",value:"number"===typeof a?a:0,step:.01}),l.a.createElement("p",null," GTM "),l.a.createElement(R.a,{className:"slider",min:1,max:1e3,onChange:function(t){return e.onChange(t,"gtm")},onAfterChange:function(t){return e.onChange1(t)},name:"gtm",value:"number"===typeof n?n:0,step:.01}),l.a.createElement("p",null," GQL "),l.a.createElement(R.a,{className:"slider",min:1,max:1e3,onChange:function(t){return e.onChange(t,"gql")},onAfterChange:function(t){return e.onChange1(t)},name:"gql",value:"number"===typeof r?r:0,step:.01})),l.a.createElement(y.a,{span:12},l.a.createElement("p",null," GHC(Developers) "),l.a.createElement(R.a,{className:"slider",min:1,max:1e3,onChange:function(t){return e.onChange(t,"ghc1")},onAfterChange:function(t){return e.onChange1(t)},name:"ghc1",value:"number"===typeof s?s:0,step:.01}),l.a.createElement("p",null," GHC(IT ops) "),l.a.createElement(R.a,{className:"slider",min:1,max:1e3,onChange:function(t){return e.onChange(t,"ghc2")},onAfterChange:function(t){return e.onChange1(t)},name:"ghc2",value:"number"===typeof c?c:0,step:.01}),l.a.createElement("p",null," GFX ")," ",l.a.createElement(R.a,{className:"slider",min:1,max:1e3,onChange:function(t){return e.onChange(t,"gfx")},onAfterChange:function(t){return e.onChange1(t)},name:"gfx",value:"number"===typeof i?i:0,step:.01}))))))),l.a.createElement(y.a,{Span:4,offset:20,style:{textAlign:"center",paddingBottom:10,paddingTop:15,paddingLeft:5}},l.a.createElement(I.a,{className:"card",hoverable:!0,style:{background:"grey",textAlign:"center",alignContent:"center",height:915,borderRadius:"10px"},bordered:!1},l.a.createElement("p",null),l.a.createElement("p",null,l.a.createElement(k,this.props))))))}}]),t}(n.Component)),M=O.a.create()(A),H=Object(N.b)(function(e){return console.log(e),{roi:e.updatedRoi.roi,roiValues:e.updatedRoi.calcValues}})(M),D=E.a.Header,S=E.a.Content,L=E.a.Footer,P=(E.a.Sider,f.a.SubMenu,function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=l.a.createElement(f.a,null,l.a.createElement(f.a.Item,{key:"0"},l.a.createElement("a",{href:"http://www.alipay.com/"},"change RIE")),l.a.createElement(f.a.Item,{key:"1"},l.a.createElement("a",{href:"http://www.taobao.com/"},"change Avg Minutes for GQL")),l.a.createElement(f.a.Item,{key:"3"},"change saving Hours for GHC (IT Ops)"),l.a.createElement(f.a.Item,{key:"3"},"Time developers spend on problems for GHC(Dev)"));return l.a.createElement("div",null,l.a.createElement(E.a,{style:{minHeight:"100vh"}},l.a.createElement(E.a,null,l.a.createElement(D,{className:"card",style:{background:"#525252",padding:0}},l.a.createElement(b.a,{style:{alignContent:"center"}},l.a.createElement(y.a,{span:8,style:{alignContent:"center",paddingLeft:20}},l.a.createElement("img",{src:"https://rsrit.com/wp-content/uploads/2017/12/logo_dark.png",alt:"reliable",width:"150px",height:"50px"})),l.a.createElement(y.a,{span:8,style:{fontWeight:"bold",color:"#0066c",textAlign:"left",paddingLeft:65}},l.a.createElement("h1",{style:{fontWeight:"bold",color:"#0066c"}},"SCORECARD")),l.a.createElement(y.a,{span:8},l.a.createElement(C.a,{style:{background:"#525252"},overlay:e,trigger:["click"]},l.a.createElement("h1",{className:"ant-dropdown-link",style:{paddingRight:40,fontWeight:"bold",color:"#0066c",fontFamily:"Cochin",textAlign:"right"}},l.a.createElement(v.a,{className:"custom-icon",type:"setting"})))))),l.a.createElement(S,{style:{alignItems:"center",margin:"24px 16px",padding:24,background:"#fff",minHeight:580}},l.a.createElement(H,this.props)),l.a.createElement(L,{style:{textAlign:"center"}}))))}}]),t}(n.Component)),q=a(69),W=a(58),B={roi:0,calcValues:[]},V=[],z=Object(W.b)({updatedRoi:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_ROI":return function(e,t){var a=Object(q.a)({},e),n=(t.gtm+t.gql+t.ghc1+t.ghc2+t.gfx-t.coi)/t.coi*100,l=new Date,r=l.getHours(),s=l.getMinutes();return V.push({name:n.toFixed(2),time:"".concat(r,":").concat(s,"hrs")}),n?a=Object.assign({},e,{roi:n,calcValues:V}):Object(q.a)({},a)}(e,t);default:return e}}}),Q=function(){return Object(q.a)({},Object(W.c)(z))}(),X=function(){return l.a.createElement(p.a,null,l.a.createElement(N.a,{store:Q},l.a.createElement(h.a,null,l.a.createElement(g.a,{exact:!0,path:"/scorecard",render:function(e){return l.a.createElement(P,e)}}),l.a.createElement(d.a,{to:"/scorecard"}))))},_=(a(352),function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"image"},l.a.createElement(X,null))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(_,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[176,2,1]]]);
//# sourceMappingURL=main.5cd48df9.chunk.js.map