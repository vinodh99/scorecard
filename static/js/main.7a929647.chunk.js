(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{127:function(e,t,a){e.exports=a(243)},132:function(e,t,a){},227:function(e,t,a){},230:function(e,t,a){},240:function(e,t,a){},243:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(9),c=a.n(r),s=(a(132),a(30)),i=a(31),m=a(35),o=a(32),u=a(36),h=a(254),g=a(256),p=a(257),d=a(255),E=a(90),f=(a(93),a(247)),y=a(251),v=a(117),b=a.n(v),C=(a(135),a(245)),G=a(244),I=a(249),k=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(o.a)(t).call(this,e))).handleMessageInput=function(e){a.GTM(),a.GQL(),a.GHC1(),a.GHC2(),a.GFX(),a.setState(Object(E.a)({},e.target.name,e.target.value))},a.GTM=function(){if(0!==a.state.rpy){var e=a.state.rpy*(115/110);a.setState({gtm:e})}},a.GQL=function(){if(0!==a.state.fpy&&0!==a.state.rpm){var e=28.3*a.state.fpy*a.state.rpm;console.log(e),a.setState({gql:e})}else a.setState({gql:0})},a.GHC1=function(){if(0!==a.state.ias&&0!==a.state.ish){var e=a.state.ias*a.state.ish*.16;return a.setState({ghc1:e}),e}},a.GHC2=function(){if(0!==a.state.das&&0!==a.state.ds){var e=a.state.das*a.state.ds*.18;a.setState({ghc2:e})}},a.GFX=function(){if(0!==a.state.aar){var e=.036*a.state.aar;return a.setState({gfx:e}),e}},a.ROI=function(){if(0!==a.state.gtm&&0!==a.state.gql&&0!==a.state.ghc1&&0!==a.state.ghc2&&0!==a.state.gfx)return(a.state.gtm+a.state.gql+a.state.ghc1+a.state.ghc2+a.state.gfx-a.state.coi)/a.state.coi*100},a.onChange=function(e,t){a.setState(Object(E.a)({},t,e))},a.state={coi:0,rpy:0,fpy:0,gtm:0,gql:0,ghc1:0,ghc2:0,gfx:0,rpm:0,ias:0,ish:0,das:0,ds:0,aar:0},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.state.coi,a=this.state.gtm,n=this.state.gql,r=this.state.ghc1,c=this.state.ghc2,s=this.state.gfx;return l.a.createElement(f.a,null,l.a.createElement("div",null,l.a.createElement(b.a,null,l.a.createElement("h1",null,"GTM = ",l.a.createElement(y.a,{name:"rpy",type:"number",value:this.state.rpy,onChange:this.handleMessageInput,placeholder:"revenue per year"})," X 115/110 = $ ",this.state.gtm))),l.a.createElement("div",null,l.a.createElement("h1",null,"GQL = ",l.a.createElement(y.a,{name:"fpy",type:"number",value:this.state.fpy,onChange:this.handleMessageInput,placeholder:"failures per year"}),"X 28.3 minutes X $ ",l.a.createElement(y.a,{name:"rpm",type:"number",value:this.state.rpm,onChange:this.handleMessageInput,placeholder:"Revenue per minute"})," = $ ",this.state.gql)),l.a.createElement("div",null,l.a.createElement("h1",null,"GHC(IT Ops)= ",l.a.createElement(y.a,{name:"ias",type:"number",value:this.state.ias,onChange:this.handleMessageInput,placeholder:"IT AVG salary"}),"X ",l.a.createElement(y.a,{name:"ish",type:"number",value:this.state.ish,onChange:this.handleMessageInput,placeholder:"DEV staff"})," X 0.16 = $ ",this.state.ghc1),l.a.createElement("h1",null,"GHC(Developers)= ",l.a.createElement(y.a,{name:"das",type:"number",value:this.state.das,onChange:this.handleMessageInput,placeholder:"Developer AVG salary"}),"X ",l.a.createElement(y.a,{name:"ds",type:"number",value:this.state.ds,onChange:this.handleMessageInput,placeholder:"DEV staff"})," X 0.18 = $ ",this.state.ghc2)),l.a.createElement("div",null,l.a.createElement("h1",null,"GFX = ",l.a.createElement(y.a,{name:"aar",type:"number",value:this.state.aar,onChange:this.handleMessageInput,placeholder:"revenue per year"})," X 0.036 = $ ",this.state.gfx)),l.a.createElement("div",{className:"div"},l.a.createElement(C.a,null,l.a.createElement(G.a,{span:8,className:"col1"},l.a.createElement("h1",null,"ROI =")),l.a.createElement(G.a,{span:8,className:"col2"},l.a.createElement(C.a,null,l.a.createElement("h2",null,"(Total Gains[A]-Cost of investment) X 100"),l.a.createElement("hr",null),l.a.createElement("h2",null,"Cost of investment")),l.a.createElement(C.a,{span:12},this.ROI())),l.a.createElement(G.a,{span:8},l.a.createElement("div",null,"Cost Of Investment",l.a.createElement(I.a,{className:"slider",min:-1e3,max:1e3,onChange:function(t){return e.onChange(t,"coi")},name:"coi",value:"number"===typeof t?t:0,step:.01}),"GTM",l.a.createElement(I.a,{className:"slider",min:-1e3,max:1e3,onChange:function(t){return e.onChange(t,"gtm")},name:"gtm",value:"number"===typeof a?a:0,step:.01}),"GQL",l.a.createElement(I.a,{className:"slider",min:-1e3,max:1e3,onChange:function(t){return e.onChange(t,"gql")},name:"gql",value:"number"===typeof n?n:0,step:.01}),"GHC (Developers)",l.a.createElement(I.a,{className:"slider",min:-1e3,max:1e3,onChange:function(t){return e.onChange(t,"ghc1")},name:"ghc1",value:"number"===typeof r?r:0,step:.01}),"GHC (IT ops)",l.a.createElement(I.a,{className:"slider",min:-1e3,max:1e3,onChange:function(t){return e.onChange(t,"ghc2")},name:"ghc2",value:"number"===typeof c?c:0,step:.01}),"GFX ",l.a.createElement(I.a,{className:"slider",min:-1e3,max:1e3,onChange:function(t){return e.onChange(t,"gfx")},name:"gfx",value:"number"===typeof s?s:0,step:.01}))))))}}]),t}(n.Component),x=(a(227),a(253)),O=a(252),A=a(25),j=a(250),w=a(248),T=(a(230),w.a.Meta,function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(o.a)(t).call(this,e))).state={coi:0,rpy:0,fpy:0,gtm:0,gql:0,ghc1:0,ghc2:0,gfx:0,rpm:0,ias:0,ish:0,das:0,ds:0,aar:0},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{style:{background:"#ECECEC",height:620}},l.a.createElement(C.a,null,l.a.createElement(G.a,{span:20},l.a.createElement(C.a,{gutter:16,style:{paddingBottom:10,paddingTop:10,paddingLeft:10}},l.a.createElement(G.a,{span:12},l.a.createElement(w.a,{className:"card",style:{background:"#7D6DFB",textAlign:"center",height:200},bordered:!1},l.a.createElement("p",null,"Revenue gains from accelerated time to market of new functionality (GTM)"),l.a.createElement("h1",null,"GTM:"))),l.a.createElement(G.a,{span:12},l.a.createElement(w.a,{style:{background:"#35D385",textAlign:"center",height:200},bordered:!1},l.a.createElement("p",null,"Gains from cost reduction of application failures resulting from increased quality (GQL)"),l.a.createElement("h1",null,"GQL:")))),l.a.createElement(C.a,{gutter:16,style:{paddingLeft:10}},l.a.createElement(G.a,{span:12},l.a.createElement(w.a,{style:{background:"#FECA4F",textAlign:"center",height:200},bordered:!1},l.a.createElement("p",null,"Gains from enhanced IT team productivity and cost reduction of IT headcount waste (GHC)"),l.a.createElement("h2",null,"GHC (IT Ops):"),l.a.createElement("h2",null,"GHC (Developers):"))),l.a.createElement(G.a,{span:12},l.a.createElement(w.a,{style:{background:"#33CCF4",textAlign:"center",height:200},bordered:!1},l.a.createElement("p",null,"Gain from flexibility in the IT environment (GFX)"),l.a.createElement("h1",null,"GFX:")))),l.a.createElement(C.a,{gutter:16,style:{paddingTop:10,paddingLeft:10}},l.a.createElement(G.a,null,l.a.createElement(w.a,{style:{background:"#87460a",textAlign:"center",height:180,justifyContent:"center"},bordered:!1},l.a.createElement("p",null,"Return Of Investment"),l.a.createElement("h1",null,"ROI:"))))),l.a.createElement(G.a,{Span:4,offset:20,style:{textAlign:"center",paddingBottom:10,paddingTop:10,paddingLeft:10,paddingRight:10}},l.a.createElement(w.a,{hoverable:!0,style:{background:"#4286f4",textAlign:"center",height:600,align:"middle"},bordered:!1},l.a.createElement("h1",null,"state")))))}}]),t}(n.Component)),H=x.a.Header,M=x.a.Content,R=x.a.Footer,X=x.a.Sider,F=O.a.SubMenu,S=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(o.a)(t).call(this,e))).state={},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=l.a.createElement(O.a,null,l.a.createElement(O.a.Item,{key:"0"},l.a.createElement("a",{href:"http://www.alipay.com/"},"change RIE")),l.a.createElement(O.a.Item,{key:"1"},l.a.createElement("a",{href:"http://www.taobao.com/"},"change Avg Minutes for GQL")),l.a.createElement(O.a.Item,{key:"3"},"change saving Hours for GHC (IT Ops)"),l.a.createElement(O.a.Item,{key:"3"},"Time developers spend on problems for GHC(Dev)"));return l.a.createElement("div",null,l.a.createElement(x.a,{style:{minHeight:"100vh"}},l.a.createElement(X,null,l.a.createElement(O.a,{defaultSelectedKeys:["1"],mode:"inline"},l.a.createElement("img",{src:"https://rsrit.com/wp-content/uploads/2017/12/logo_dark.png",alt:"image",width:"200px",height:"70px"}),l.a.createElement(F,{key:"sub1",title:l.a.createElement("span",{style:{textAlign:"right"}},l.a.createElement(A.a,{type:"sliders"}),"GTM")},l.a.createElement(O.a.Item,{key:"1"},"Revenue/Year: 20"),l.a.createElement(O.a.Item,{key:"2"},l.a.createElement(C.a,null,"Revenue inc estimate"),l.a.createElement(C.a,null,"20"))),l.a.createElement(F,{key:"sub2",title:l.a.createElement("span",{style:{textAlign:"right"}},l.a.createElement(A.a,{type:"sliders"}),"GQL")},l.a.createElement(O.a.Item,{key:"1"},"Failures/Year: 20"),l.a.createElement(O.a.Item,{key:"2"},"Revenue/minute")),l.a.createElement(F,{key:"sub3",title:l.a.createElement("span",{style:{textAlign:"right"}},l.a.createElement(A.a,{type:"sliders"}),"GHC (IT Ops)")},l.a.createElement(O.a.Item,{key:"1"},"IT Average Salary"),l.a.createElement(O.a.Item,{key:"2"},"IT staff Headcount")),l.a.createElement(F,{key:"sub4",title:l.a.createElement("span",{style:{textAlign:"right"}},l.a.createElement(A.a,{type:"sliders"}),"GHC (Developers)")},l.a.createElement(O.a.Item,{key:"1"},"Develper Avg salary"),l.a.createElement(O.a.Item,{key:"2"},"Developer Staff")),l.a.createElement(F,{key:"sub5",title:l.a.createElement("span",{style:{textAlign:"right"}},l.a.createElement(A.a,{type:"sliders"}),"GFX")},l.a.createElement(O.a.Item,{key:"1"},"App. Annual Revenue")))),l.a.createElement(x.a,null,l.a.createElement(H,{style:{background:"#fff",padding:0}},l.a.createElement(C.a,null,l.a.createElement(G.a,{span:12},l.a.createElement("h1",{style:{fontWeight:"bold",color:"#0066c",fontFamily:"Cochin",textAlign:"right"}},"SCORECARD")),l.a.createElement(G.a,{span:12},l.a.createElement(j.a,{overlay:e,trigger:["click"]},l.a.createElement("h1",{className:"ant-dropdown-link",style:{paddingRight:40,fontWeight:"bold",color:"#0066c",fontFamily:"Cochin",textAlign:"right"}},l.a.createElement(A.a,{className:"custom-icon",type:"setting"})))))),l.a.createElement(M,{style:{alignItems:"center",margin:"24px 16px",padding:24,background:"#fff",minHeight:580}},l.a.createElement(T,this.props)),l.a.createElement(R,{style:{textAlign:"center"}}))))}}]),t}(n.Component),D=function(){return l.a.createElement(h.a,null,l.a.createElement(g.a,null,l.a.createElement(p.a,{exact:!0,path:"/carousel",render:function(e){return l.a.createElement(k,e)}}),l.a.createElement(p.a,{exact:!0,path:"/scorecard",render:function(e){return l.a.createElement(S,e)}}),l.a.createElement(d.a,{to:"/scorecard"})))},N=(a(240),function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"image"},l.a.createElement(D,null))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},93:function(e,t,a){}},[[127,2,1]]]);
//# sourceMappingURL=main.7a929647.chunk.js.map