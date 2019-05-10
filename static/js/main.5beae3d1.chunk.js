(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,t,a){},144:function(e,t,a){},150:function(e,t,a){},152:function(e,t,a){},153:function(e,t,a){},180:function(e,t){},183:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(23),s=a.n(o),l=(a(98),a(8)),c=a(9),i=a(11),m=a(10),u=a(12),h=a(20),p=(a(99),a(26));a(100);var d=function(e){var t="button "+e.buttonType;return r.a.createElement("button",{className:t},e.text)},g=a(83),v=a(16),E=a(190),f=a(186),b=a(187),y=a(188),C=a(189),w=a(184),O=a(87),N=a(15),S=a.n(N),j={getGames:function(e){return S.a.get("https://real-life-api.herokuapp.com/api/games/ + INSERT GAME NAME!",{params:{q:"title:"+e}})},registerUser:function(e){return S.a.post("https://real-life-api.herokuapp.com/api/admin/signup/",e)},logInUser:function(e){return S.a.post("https://real-life-api.herokuapp.com/api/api/admin/login/",e)},logOutUser:function(e){return S.a.post("https://real-life-api.herokuapp.com/api/admin/logout/",e)}},k=function(e){function t(e,a){var n;return Object(l.a)(this,t),(n=Object(i.a)(this,Object(m.a)(t).call(this,e,a))).handleInputChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(g.a)({},a,r))},n.handleFormSubmit=function(e){e.preventDefault(),n.state.firstName&&n.state.lastName&&n.name.password&&n.name.orgName&&j.saveUser({firstName:n.state.firstName,lastName:n.state.lastName,password:n.state.passsword,orgName:n.state.orgName}).catch(function(e){return console.log(e)})},n.registerUser=function(e){e.preventDefault();var t=n.state,a={firstName:t.firstName,lastName:t.lastName,email:t.email,password:t.password,orgName:t.orgName};S.a.post("https://real-life-api.herokuapp.com/api/admin/signup/",a).then(function(e){console.log("NEW USER CREATED"),console.log(e),n.props.history.push("/")}).catch(function(e){console.log(e)})},n.logInUser=function(e){e.preventDefault(),localStorage.clear();var t=n.state,a=t.email,r=t.password,o={email:a,password:r};localStorage.setItem("email",a),localStorage.setItem("password",r),S.a.post("https://real-life-api.herokuapp.com/api/admin/login",o).then(function(e){console.log("YOU'RE LOGGED IN!"),console.log(e),200===e.status&&n.setState({loggedIn:!0,user:e.data.user})}).catch(function(e){console.log("I'M BROKEN! FIX ME!"),console.log(e)})},n.LoggedOutUser=function(e){e.preventDefault(),console.log("logging out"),S.a.post("/auth/logout").then(function(e){console.log(e.data),200===e.status&&n.setState({loggedIn:!1,user:null})})},n.handleShow=n.handleShow.bind(Object(v.a)(n)),n.handleClose=n.handleClose.bind(Object(v.a)(n)),n.state={show:!1,loggedIn:!1},n}return Object(u.a)(t,e),Object(c.a)(t,[{key:"handleClose",value:function(){this.setState({show:!1})}},{key:"handleShow",value:function(){this.setState({show:!0})}},{key:"render",value:function(){var e="Login";return this.state.loggedIn&&(e="Logout"),r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,{variant:"primary",onClick:this.handleShow},e),r.a.createElement(f.a,{show:this.state.show,onHide:this.handleClose},r.a.createElement(f.a.Header,{closeButton:!0},r.a.createElement(f.a.Title,null,"Sign In!")),r.a.createElement(f.a.Body,null,r.a.createElement(b.a,null,r.a.createElement(b.a.Group,{controlId:"formGroupEmail"},r.a.createElement(b.a.Label,null,"Email address"),r.a.createElement(b.a.Control,{type:"email",onChange:this.handleInputChange,name:"email",placeholder:"johndoe@test.com"})),r.a.createElement(b.a.Group,{controlId:"formGroupPassword"},r.a.createElement(b.a.Label,null,"Password"),r.a.createElement(b.a.Control,{type:"password",onChange:this.handleInputChange,name:"password",placeholder:"Password"})),r.a.createElement("h6",null,r.a.createElement("i",null,"Want to create a game? Be an admin and register down below!"))),r.a.createElement(y.a,null,r.a.createElement(C.a,null,r.a.createElement(C.a.Header,null,r.a.createElement(y.a.Toggle,{as:E.a,variant:"link",eventKey:"0"},"SignUp")),r.a.createElement(y.a.Collapse,{eventKey:"0"},r.a.createElement(C.a.Body,null,r.a.createElement(b.a,null,r.a.createElement(b.a.Row,null,r.a.createElement(w.a,null,r.a.createElement(b.a.Group,{as:O.a,controlId:"formGridFirstName"},r.a.createElement(b.a.Label,null,"First Name"),r.a.createElement(b.a.Control,{type:"firstName",value:this.state.firstName,name:"firstName",onChange:this.handleInputChange,placeholder:"John"}))),r.a.createElement(w.a,null,r.a.createElement(b.a.Group,{as:O.a,controlId:"formGridLastName"},r.a.createElement(b.a.Label,null,"Last Name"),r.a.createElement(b.a.Control,{type:"lastName",value:this.state.lastName,name:"lastName",onChange:this.handleInputChange,placeholder:"Doe"}))),r.a.createElement(w.a,null,r.a.createElement(b.a.Group,{as:O.a,controlId:"formGridEmail"},r.a.createElement(b.a.Label,null,"Email"),r.a.createElement(b.a.Control,{type:"email",value:this.state.email,name:"email",onChange:this.handleInputChange,placeholder:"Enter email"}))),r.a.createElement(w.a,null,r.a.createElement(b.a.Group,{as:O.a,controlId:"formGridPassword"},r.a.createElement(b.a.Label,null,"Password"),r.a.createElement(b.a.Control,{type:"password",value:this.state.password,name:"password",onChange:this.handleInputChange,placeholder:"Password"}))),r.a.createElement(w.a,null,r.a.createElement(b.a.Group,{as:O.a,controlId:"formGridOrg"},r.a.createElement(b.a.Label,null,"Organization Name"),r.a.createElement(b.a.Control,{type:"orgName",value:this.state.orgName,name:"orgName",onChange:this.handleInputChange,placeholder:"nunyaINC"})))),r.a.createElement(E.a,{onClick:this.registerUser,variant:"primary",type:"submit"},r.a.createElement(E.a,{onClick:this.handleClose},"Register")))))))),r.a.createElement(f.a.Footer,null,r.a.createElement(E.a,{variant:"secondary",onClick:this.handleClose},"Close"),r.a.createElement(E.a,{onClick:this.logInUser,variant:"primary",type:"submit"},r.a.createElement(E.a,{onClick:this.handleClose},"Submit")))))}}]),t}(r.a.Component),I=(a(144),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={name:a.props.userName},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"nav-bar text-right"},r.a.createElement("div",{className:"title"},"Game of Real Life"),r.a.createElement(k,null))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.userName!==t.name?{name:e.userName}:null}}]),t}(r.a.Component)),G=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={value:""},a.handleChange=a.handleChange.bind(Object(v.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(v.a)(a)),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"handleChange",value:function(e){this.setState({value:e.target.value},this.props.updateState({gameCode:e.target.value}))}},{key:"handleSubmit",value:function(e){e.preventDefault()}},{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("label",null,"Game Code:",r.a.createElement("input",{type:"text",value:this.state.value,onChange:this.handleChange})),r.a.createElement(h.b,{to:"/lobby"},r.a.createElement("input",{type:"submit",value:"Join Game"})))}}]),t}(r.a.Component),L=(a(150),function(e){return r.a.createElement("div",null,r.a.createElement(I,{loggedIn:e.state.loggedIn,userName:e.state.userName}),r.a.createElement("div",{className:"jumbotron m-5"},r.a.createElement("div",{className:"row"},r.a.createElement(h.b,{to:"/",className:"ml-3"},r.a.createElement(d,{text:"Launch a Game",buttonType:"green"})),r.a.createElement("a",{href:"https://aprilleperez.github.io/realgameoflife_admin/",className:"ml-3"},r.a.createElement(d,{text:"Create/Edit Games",buttonType:"green"}))),r.a.createElement("div",{className:"row mt-5"},r.a.createElement("h1",{className:"ml-3 align-bottom"},"Enter Game Code:")),r.a.createElement(G,{updateState:e.updateState})))}),A=a(31),D=a.n(A),x=a(52),M=a(185),Q=(a(152),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={host:!1,players:0},a.getDefaultGame=Object(x.a)(D.a.mark(function e(){var t;return D.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.a.get("https://real-life-api.herokuapp.com/api/games");case 2:t=e.sent,a.props.updateState({gameObj:t.data});case 4:case"end":return e.stop()}},e)})),a.gameLaunchHandler=function(){console.log("getting game"),a.getDefaultGame()},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=this.props.socket;if(t.on("gameStart",Object(x.a)(D.a.mark(function t(){var a;return D.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("heard gameStart"),t.next=3,S.a.get("https://real-life-api.herokuapp.com/api/games");case 3:a=t.sent,e.props.updateState({gameObj:a.data[7]}),console.log(a.data[7]),e.props.history.push("/game");case 7:case"end":return t.stop()}},t)}))),this.props.state.gameCode){this.state.host||t.emit("gameNum",this.props.state.gameCode),t.on("playerCount",function(t){console.log("Players:",t),t!==e.state.players&&e.setState({players:t})}),t.on("host",function(){console.log("host message..."),e.state.host||(e.setState({host:!0}),e.props.updateState({host:!0}))});var a="";a=this.state.host?"To join this game, go to *URL* and enter the code "+this.props.state.gameCode:"Waiting for game to start";var n="",o=[],s="s";if(1===this.state.players&&(s=""),this.state.host){n="".concat(this.state.players," player").concat(s," ready");for(var l=0;l<this.state.players;l++)o.push(r.a.createElement("img",{src:"smiley.png",key:l,alt:"player"}));var c;return c=r.a.createElement("div",{className:"jumbotron m-5"},r.a.createElement("p",null,n),r.a.createElement("div",{className:"row players"},o)),r.a.createElement("div",null,r.a.createElement(I,{loggedIn:this.props.state.loggedIn,userName:this.props.state.userName}),r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"top-message"},a),c),r.a.createElement(M.a,null,r.a.createElement("div",{className:""},r.a.createElement(h.b,{to:"/game",onClick:this.gameLaunchHandler},r.a.createElement(d,{buttonType:"green",text:"Launch Game"})))))}return r.a.createElement("div",null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"top-message"},a)))}return r.a.createElement("div",null,r.a.createElement(p.a,{to:"/"}))}}]),t}(r.a.Component)),U=Object(p.f)(Q),B=(a(153),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={choiceMade:!1,choice:void 0,timer:15},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log("Responses mounted, starting timer");var t=this.state.timer,a=setInterval(function(){t>0?(t--,e.setState({timer:t})):(clearInterval(a),e.madeChoice(0))},1e3)}},{key:"madeChoice",value:function(e){this.state.choiceMade||(this.setState({choiceMade:!0,choice:e}),this.props.choiceCB(e),console.log("you chose response #".concat(e)),document.getElementById(e).setAttribute("class","selectedAnswer"),this.props.socket.emit("choiceMade",this.props.gameCode))}},{key:"render",value:function(){var e=this,t=[];return this.props.answers.forEach(function(a,n){t.push(r.a.createElement("div",{className:"answer",id:n,key:n,onClick:function(){e.madeChoice(n)}},r.a.createElement("p",null,a.response)))}),this.state.madeChoice?{outcome:this.calcOutcome()}:r.a.createElement("div",null,r.a.createElement("div",null,t),r.a.createElement("div",null,"Timer: ",this.state.timer))}}]),t}(r.a.Component));var T=function(e){var t=e.gameObj,a=(e.avatar,e.qNum),n=e.choice,o=t.questions[a].responses[n].outcomes;return r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"Here's what happened:"),r.a.createElement("div",null,o[0].text),r.a.createElement("div",null,o[0].trait,": ",o[0].upDown),r.a.createElement("div",null,o[1].trait,": ",o[1].upDown))},R=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={gameState:"prestart",currentQuestion:0,allowTimer:!0,timer:10,avatar:void 0,choice:void 0},a.countdown=function(e,t){a.setState({timer:e});var n=setInterval(function(){var e=a.state.timer;if(e>0)return e--,void a.setState({timer:e});console.log("setting gamestate as ".concat(t)),"outcomes"===a.state.gameState&&"QandA"===t&&a.setState({currentQuestion:a.state.currentQuestion+1}),a.setState({gameState:t,allowTimer:!0}),clearInterval(n)},1e3)},a.choiceCB=function(e){a.setState({choice:e}),console.log("setting choice ".concat(e," in Game component"))},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;if(this.props.state.host)this.props.socket.emit("startPlayers",this.props.state.gameCode,this.props.state.gameObj);else{var t=Math.floor(Math.random()*this.props.state.gameObj.avatars.length);this.setState({avatar:this.props.state.gameObj.avatars[t],gameState:"intro"})}this.countdown(10,"QandA"),this.props.socket.on("showResult",function(){console.log("setting gameState to outcomes"),e.state.currentQuestion<e.props.state.gameObj.questions.length-1?(e.countdown(3,"QandA"),e.setState({gameState:"outcomes"})):e.setState({gameState:"end"})})}},{key:"render",value:function(){var e=this;if(this.props.socket.on("gameStart",function(){e.setState({gameState:"intro"})}),this.props.state.gameObj){var t=this.props.state.gameObj;if(this.props.state.host)switch(this.state.gameState){case"intro":return r.a.createElement("div",null,r.a.createElement("div",null,t.name),r.a.createElement("div",null,"Game starts in: ",this.state.timer," seconds"));case"QandA":return r.a.createElement("div",null,"Question: ",t.questions[this.state.currentQuestion].Q);case"outcomes":return r.a.createElement("div",{className:"container"},r.a.createElement("div",null,"Well, let's see what that did..."),r.a.createElement("div",null,"Next question in ",this.state.timer));case"end":return r.a.createElement("div",null,"that's all folks")}else switch(this.state.gameState){case"intro":if(this.state.avatar){for(var a=[],n=1;n<6;n++)a.push(r.a.createElement("div",null,t.traits["trait"+n]+": "+this.state.avatar["trait"+n]));return r.a.createElement("div",null,r.a.createElement("div",null,this.state.avatar.name),r.a.createElement("div",null,a))}return r.a.createElement("div",null,"avatar loading");case"QandA":return r.a.createElement(B,{choiceCB:this.choiceCB,timer:this.state.timer,answers:t.questions[this.state.currentQuestion].responses,socket:this.props.socket,gameCode:this.props.state.gameCode});case"outcomes":return r.a.createElement(T,{choice:this.state.choice,gameObj:t,avatar:this.state.avatar,qNum:this.state.currentQuestion});case"end":return r.a.createElement("div",null,"that's all folks")}}return r.a.createElement("div",null,"LOADING GAME ^_^")}}]),t}(r.a.Component),P=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=function(t){console.log("setting game as ".concat(t.name)),e.setState({gameObj:t})};return r.a.createElement("div",null,r.a.createElement(p.d,null,r.a.createElement(p.b,{path:"/game",render:function(){return r.a.createElement(R,{state:e.props.state,socket:e.props.socket})}}),r.a.createElement(p.b,{path:"/lobby",render:function(){return r.a.createElement(U,{state:e.props.state,socket:e.props.socket,updateState:e.props.updateState})}}),r.a.createElement(p.b,{path:"/",exact:!0,render:function(){return r.a.createElement(L,{state:e.props.state,updateState:e.props.updateState,setGame:t})}}),r.a.createElement(p.a,{to:"/"})))}}]),t}(r.a.Component),q=a(91),F=a.n(q)()("https://real-life-api.herokuapp.com/"),H=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={gameState:"start",loggedIn:!1,userName:"login",gameCode:"",gameObj:void 0,host:!1},a.updateState=function(e){a.setState(e)},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(h.a,{basename:"/realgameoflife_client"},r.a.createElement(P,{state:this.state,updateState:this.updateState,socket:F}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(H,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},93:function(e,t,a){e.exports=a(183)},98:function(e,t,a){},99:function(e,t,a){}},[[93,1,2]]]);
//# sourceMappingURL=main.5beae3d1.chunk.js.map