(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,t,a){e.exports=a(202)},105:function(e,t,a){},106:function(e,t,a){},107:function(e,t,a){},126:function(e,t,a){},152:function(e,t,a){},168:function(e,t,a){},170:function(e,t,a){},171:function(e,t,a){},172:function(e,t,a){},199:function(e,t){},202:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(26),l=a.n(s),o=(a(105),a(7)),c=a(8),i=a(10),m=a(9),u=a(11),h=a(18),p=(a(106),a(30));a(107);var d=function(e){return r.a.createElement("div",{className:"appBtnCtn"},r.a.createElement("button",{className:"appButton",to:e.to,value:e.value,onClick:e.onClick},e.text))},g=a(92),E=a(19),v=a(209),f=a(205),b=a(206),y=a(207),N=a(208),S=a(204),w=a(95),O=a(16),C=a.n(O),j={getGames:function(e){return C.a.get("https://real-life-api.herokuapp.com/api/games/ + INSERT GAME NAME!",{params:{q:"title:"+e}})},registerUser:function(e){return C.a.post("https://real-life-api.herokuapp.com/api/admin/signup/",e)},logInUser:function(e){return C.a.post("https://real-life-api.herokuapp.com/api/api/admin/login/",e)},logOutUser:function(e){return C.a.post("https://real-life-api.herokuapp.com/api/admin/logout/",e)}},k=(a(126),function(e){function t(e,a){var n;return Object(o.a)(this,t),(n=Object(i.a)(this,Object(m.a)(t).call(this,e,a))).handleInputChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(g.a)({},a,r))},n.handleFormSubmit=function(e){e.preventDefault(),n.state.firstName&&n.state.lastName&&n.name.password&&n.name.orgName&&j.saveUser({firstName:n.state.firstName,lastName:n.state.lastName,password:n.state.passsword,orgName:n.state.orgName}).catch(function(e){return console.log(e)})},n.registerUser=function(e){e.preventDefault();var t=n.state,a={firstName:t.firstName,lastName:t.lastName,email:t.email,password:t.password,orgName:t.orgName};C.a.post("https://real-life-api.herokuapp.com/api/admin/signup/",a).then(function(e){console.log("NEW USER CREATED"),console.log(e),n.props.history.push("/")}).catch(function(e){console.log(e),alert("Invalid Password!")}),n.handleClose()},n.logInUser=function(e){e.preventDefault(),localStorage.clear();var t=n.state,a=t.email,r=t.password,s={email:a,password:r};localStorage.setItem("email",a),localStorage.setItem("password",r),C.a.post("https://real-life-api.herokuapp.com/api/admin/login",s).then(function(e){console.log("YOU'RE LOGGED IN!"),console.log(e),localStorage.getItem(a,r),console.log(localStorage.getItem(a,r)),200===e.status&&n.setState({loggedIn:!0,user:e.data.user})}).catch(function(e){console.log("I'M BROKEN! FIX ME!"),console.log(e)}),n.handleClose()},n.LoggedOutUser=function(e){e.preventDefault(),console.log("logging out"),C.a.post("https://real-life-api.herokuapp.com/api/admin/logout").then(function(e){console.log(e.data),200===e.status&&n.setState({loggedIn:!1,user:null})})},n.handleShow=n.handleShow.bind(Object(E.a)(n)),n.handleClose=n.handleClose.bind(Object(E.a)(n)),n.state={show:!1,loggedIn:!1},n}return Object(u.a)(t,e),Object(c.a)(t,[{key:"handleClose",value:function(){this.setState({show:!1})}},{key:"handleShow",value:function(){this.setState({show:!0})}},{key:"render",value:function(){var e="Login";return this.state.loggedIn&&(e="Welcome back!"),r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,{className:"modalButton",variant:"primary",onClick:this.handleShow},e),r.a.createElement(f.a,{show:this.state.show,onHide:this.handleClose},r.a.createElement(f.a.Header,{closeButton:!0},r.a.createElement(f.a.Title,null,"Sign In!")),r.a.createElement(f.a.Body,null,r.a.createElement(b.a,null,r.a.createElement(b.a.Group,{controlId:"formGroupEmail"},r.a.createElement(b.a.Label,null,"Email address"),r.a.createElement(b.a.Control,{type:"String",onChange:this.handleInputChange,name:"email",placeholder:"johndoe@test.com"})),r.a.createElement(b.a.Group,{controlId:"formGroupPassword"},r.a.createElement(b.a.Label,null,"Password"),r.a.createElement(b.a.Control,{type:"password",onChange:this.handleInputChange,name:"password",placeholder:"Password"})),r.a.createElement("h6",null,r.a.createElement("i",null,"Want to create a game? Be an admin and register down below!"))),r.a.createElement(y.a,null,r.a.createElement(N.a,null,r.a.createElement(N.a.Header,null,r.a.createElement(y.a.Toggle,{as:v.a,variant:"link",eventKey:"0"},"SignUp")),r.a.createElement(y.a.Collapse,{eventKey:"0"},r.a.createElement(N.a.Body,null,r.a.createElement(b.a,null,r.a.createElement(b.a.Row,null,r.a.createElement(S.a,null,r.a.createElement(b.a.Group,{as:w.a,controlId:"formGridFirstName"},r.a.createElement(b.a.Label,null,"First Name"),r.a.createElement(b.a.Control,{type:"String",value:this.state.firstName,name:"firstName",onChange:this.handleInputChange,placeholder:"John"}))),r.a.createElement(S.a,null,r.a.createElement(b.a.Group,{as:w.a,controlId:"formGridLastName"},r.a.createElement(b.a.Label,null,"Last Name"),r.a.createElement(b.a.Control,{type:"String",value:this.state.lastName,name:"lastName",onChange:this.handleInputChange,placeholder:"Doe"}))),r.a.createElement(S.a,null,r.a.createElement(b.a.Group,{as:w.a,controlId:"formGridEmail"},r.a.createElement(b.a.Label,null,"Email"),r.a.createElement(b.a.Control,{type:"String",value:this.state.email,name:"email",onChange:this.handleInputChange,placeholder:"Enter email"}))),r.a.createElement(S.a,null,r.a.createElement(b.a.Group,{as:w.a,controlId:"formGridPassword"},r.a.createElement(b.a.Label,null,"Password"),r.a.createElement(b.a.Control,{type:"String",value:this.state.password,name:"password",onChange:this.handleInputChange,placeholder:"Password"}))),r.a.createElement(S.a,null,r.a.createElement(b.a.Group,{as:w.a,controlId:"formGridOrg"},r.a.createElement(b.a.Label,null,"Organization Name"),r.a.createElement(b.a.Control,{type:"String",value:this.state.orgName,name:"orgName",onChange:this.handleInputChange,placeholder:"nunyaINC"})))),r.a.createElement(v.a,{className:"modalButton",onClick:this.registerUser,variant:"primary",type:"submit"},"Register"))))))),r.a.createElement(f.a.Footer,null,r.a.createElement(v.a,{className:"modalButton",onClick:this.logInUser,variant:"primary",type:"submit","data-dismisss":"modal"},"Submit"))))}}]),t}(r.a.Component)),I=(a(152),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={name:a.props.userName,open:!1,width:window.innerWidth},a.updateWidth=function(){var e={width:window.innerWidth};a.state.open&&e.width>991&&(e.open=!1),a.setState(e)},a.toggleNav=function(){a.setState({open:!a.state.open})},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.updateWidth)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateWidth)}},{key:"render",value:function(){return r.a.createElement("nav",{className:"appNav navbar sticky-top navbar-expand-lg navbar-light mb-2"},r.a.createElement(h.b,{className:"navbar-brand",to:"/"},"In Their Shoes"),r.a.createElement("button",{onClick:this.toggleNav,className:"navbar-toggler","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"".concat(this.state.open?"":"collapse ","navbar-collapse"),id:"navbarNav"},r.a.createElement(k,null)))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.userName!==t.name?{name:e.userName}:null}}]),t}(r.a.Component)),G=a(48),x=a.n(G);function D(e){var t=e.fluid,a=e.children;return r.a.createElement("div",{className:"container".concat(t?"-fluid":"")},a)}function z(e){var t=e.fluid,a=e.children;return r.a.createElement("div",{className:"row".concat(t?"-fluid":"")},a)}function L(e){var t=e.size,a=e.children;return r.a.createElement("div",{className:t.split(" ").map(function(e){return"col-"+e}).join(" ")},a)}var M=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={value:""},a.handleChange=a.handleChange.bind(Object(E.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(E.a)(a)),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"handleChange",value:function(e){this.setState({value:e.target.value},this.props.updateState({gameCode:e.target.value.toLowerCase()}))}},{key:"handleSubmit",value:function(e){e.preventDefault()}},{key:"render",value:function(){return r.a.createElement(D,null,r.a.createElement(z,null,r.a.createElement(L,{size:"sm-12"},r.a.createElement(x.a,null,r.a.createElement(x.a.Group,{controlId:"formBasicEmail",className:"thisForm"},r.a.createElement(x.a.Control,{type:"text",placeholder:"Game Code",value:this.state.value,onChange:this.handleChange}))))),r.a.createElement(z,null,r.a.createElement(L,{size:"sm-12"},r.a.createElement(h.b,{to:"/lobby"},r.a.createElement(d,{text:"Join Game"},r.a.createElement("input",{type:"submit",value:"Join Game"}))))))}}]),t}(r.a.Component),T=(a(168),Object(p.f)(function(e){var t=function(){var e=["aardvark","abalone","anteater","antelope","baboon","bat","buffalo","camel","capybara","chimp","cougar","dolphin","egret","falcon","flamingo","fox","gecko","gibbon","goat","moose","wombat","walrus","toad","squirrel","piglet","meerkat","lioness","potato","cow","tuna","eel","bees"],t=["glorious","hilarious","monstrous","squishy","orange","sneaky","long","tiny","squinty","round","fluffy","genius","unending","immortal","broke","grumpy","fake","definitely","probably","doubtful","intrepid","dubious","powerful","terrible","floppy","pointy","honking","slippery"],a=Math.floor(9*Math.random())+1;a*=10,a+=Math.floor(9*Math.random())+1;var n=t[Math.floor(Math.random()*t.length)];return n+=e[Math.floor(Math.random()*e.length)],n+=a,console.log("code: ".concat(n)),n};return r.a.createElement("div",null,r.a.createElement(I,{loggedIn:e.state.loggedIn,userName:e.state.userName}),r.a.createElement(D,null,r.a.createElement(z,null,r.a.createElement(L,{size:"sm-12"},r.a.createElement("div",{className:"appHero"},r.a.createElement("h1",{className:"text-center appHeader"},"In Their Shoes")))),r.a.createElement(z,null,r.a.createElement(L,{size:"sm-12"},r.a.createElement("h4",{className:"text-center appSubHeader orange"},"A game platform meant to ",r.a.createElement("em",null,r.a.createElement("strong",null,"begin dialogue"))," on your organization's client base and for experiencing life through ",r.a.createElement("em",null,r.a.createElement("strong",null,"their"))," shoes."))),r.a.createElement(z,null,r.a.createElement(L,{size:"sm-6"},r.a.createElement(z,null,r.a.createElement(L,{size:"sm-12"},r.a.createElement("h5",{className:"text-center landingIns"},r.a.createElement("strong",{className:"orange"},"For Game Hosts:"),r.a.createElement("br",null),r.a.createElement("br",null),"Start by either launching our default game, or by creating or editing a custom game",r.a.createElement("br",null),"(must be logged in as an admin for this)."))),r.a.createElement(z,null,r.a.createElement(L,{size:"sm-12"},r.a.createElement(d,{text:"Launch Default Game",onClick:function(){e.updateState({gameCode:t()}),e.history.push("/lobby")}}))),r.a.createElement(z,null,r.a.createElement(L,{size:"sm-12"},r.a.createElement("a",{href:"https://aprilleperez.github.io/realgameoflife_admin/"},r.a.createElement(d,{text:"Create/Edit Games"}))))),r.a.createElement(L,{size:"sm-6"},r.a.createElement(z,null,r.a.createElement(L,{size:"sm-12"},r.a.createElement("h5",{className:"text-center landingIns"},r.a.createElement("strong",{className:"orange"},"For Game Players:"),r.a.createElement("br",null),r.a.createElement("br",null),"Enter a game code below provided to you by the host."))),r.a.createElement(z,null,r.a.createElement(L,{size:"sm-12"},r.a.createElement(M,{updateState:e.updateState})))))))})),A=a(36),B=a.n(A),F=a(60),Q=(a(170),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={host:!1,players:0},a.getDefaultGame=Object(F.a)(B.a.mark(function e(){var t;return B.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.a.get("https://real-life-api.herokuapp.com/api/games");case 2:t=e.sent,a.props.updateState({gameObj:t.data});case 4:case"end":return e.stop()}},e)})),a.gameLaunchHandler=function(){console.log("getting game"),a.getDefaultGame()},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=this.props.socket;if(t.on("gameStart",Object(F.a)(B.a.mark(function t(){var a;return B.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("heard gameStart"),t.next=3,C.a.get("https://real-life-api.herokuapp.com/api/games");case 3:a=t.sent,e.props.updateState({gameObj:a.data[0]}),console.log(a.data[0]),e.props.history.push("/game");case 7:case"end":return t.stop()}},t)}))),this.props.state.gameCode){this.state.host||t.emit("gameNum",this.props.state.gameCode),t.on("playerCount",function(t){console.log("Players:",t),t!==e.state.players&&e.setState({players:t})}),t.on("host",function(){console.log("host message..."),e.state.host||(e.setState({host:!0}),e.props.updateState({host:!0}))});var a="";a=this.state.host?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"hostLobby"},r.a.createElement(D,null,r.a.createElement(z,null,r.a.createElement(L,{size:"sm-12"},r.a.createElement("h1",{className:"lobbyHeader text-center"},"Game Lobby"))),r.a.createElement(z,null,r.a.createElement(L,{size:"sm-6"},r.a.createElement(z,null,r.a.createElement(L,{size:"sm-12"},r.a.createElement("h5",{className:"text-center lobbyH5"},"To join go to:"))),r.a.createElement(z,null,r.a.createElement(L,{size:"sm-12"},r.a.createElement("div",{className:"linksToShare"},r.a.createElement("h5",{className:"text-center"},"cutit.org/Intheirshoes"))))),r.a.createElement(L,{size:"sm-6"},r.a.createElement(z,null,r.a.createElement(L,{size:"sm-12"},r.a.createElement("h5",{className:"text-center lobbyH5"},"and enter code:"))),r.a.createElement(z,null,r.a.createElement(L,{size:"sm-12"},r.a.createElement("div",{className:"linksToShare"},r.a.createElement("h5",{className:"text-center"},this.props.state.gameCode))))))))):r.a.createElement("div",{className:"playerLobby"},r.a.createElement("h2",null,"Waiting for game to start"),r.a.createElement("br",null),r.a.createElement("h5",null,r.a.createElement("strong",null,"Tip:")," Please watch the host's screen for questions, and submit your choice using your device!"));var n="",s=[],l="s";if(1===this.state.players&&(l=""),this.state.host){n="".concat(this.state.players," player").concat(l," ready");for(var o=0;o<this.state.players;o++)s.push(r.a.createElement("img",{src:"smiley.png",key:o,alt:"player"}));var c;return c=r.a.createElement("div",{className:"jumbotron m-5 playerCount"},r.a.createElement("p",null,n),r.a.createElement("div",{className:"row players"},s)),r.a.createElement("div",null,r.a.createElement(I,{loggedIn:this.props.state.loggedIn,userName:this.props.state.userName}),r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"top-message"},a),c),r.a.createElement(D,null,r.a.createElement("div",{className:""},r.a.createElement(h.b,{to:"/game",onClick:this.gameLaunchHandler},r.a.createElement(d,{buttonType:"green",text:"Launch Game"})))))}return r.a.createElement("div",null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"top-message"},a)))}return r.a.createElement("div",null,r.a.createElement(p.a,{to:"/"}))}}]),t}(r.a.Component)),q=Object(p.f)(Q),P=(a(171),a(78),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={choiceMade:!1,choice:void 0,timer:20},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log("Responses mounted, starting timer");for(var t=this.state.timer,a=setInterval(function(){t>0?(t--,e.setState({timer:t})):(clearInterval(a),e.madeChoice(0))},1e3),n=this.props.question,r=this.props.traits,s=n.trait1,l=n.trait2,o="",c="",i=0;i<5;i++)s===r["trait"+(i+1)]&&(o=this.props.currentStats[i],console.log("".concat(s,", which is trait").concat(i,", currently ").concat(o," points")),this.setState({score1:o})),l===r["trait"+(i+1)]&&(c=this.props.currentStats[i],console.log(this.props.currentStats),console.log("".concat(l,", which is trait").concat(i,", currently ").concat(c," points")),this.setState({score2:c}))}},{key:"madeChoice",value:function(e){this.state.choiceMade||(this.setState({choiceMade:!0,choice:e}),this.props.choiceCB(e),console.log("you chose response #".concat(e)),document.getElementById(e).setAttribute("class","selectedAnswer"),this.props.socket.emit("choiceMade",this.props.gameCode))}},{key:"render",value:function(){var e=this,t=[];return this.props.answers.forEach(function(a,n){e.state.score1+e.state.score2>8*(n+1)-4||0===n?t.push(r.a.createElement("div",{className:"answer",id:n,key:n,onClick:function(){e.madeChoice(n)}},r.a.createElement("p",null,a.response))):t.push(r.a.createElement("div",{className:"invalid",id:n,key:n},r.a.createElement("p",null,a.response)))}),r.a.createElement("div",{className:"centerDivs"},r.a.createElement("h4",null,"Choices:"),r.a.createElement("div",{className:"redTimer"},"Timer: ",this.state.timer),r.a.createElement("div",null,t))}}]),t}(r.a.Component)),H=(a(172),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={outcome:void 0,score1:void 0,score2:void 0},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.gameObj,t=this.props.qNum,a=this.props.choice,n=e.questions[t].responses[a].outcomes,r=n[0].amount,s=n[1].amount;r>0&&(r="+".concat(r)),s>0&&(s="+".concat(s)),this.setState({outcome:n,score1:r,score2:s});e.questions[t];for(var l=e.traits,o=n[0].trait,c=n[1].trait,i=this.props.currentStats,m=0;m<5;m++)o===l["trait"+(m+1)]&&(console.log("".concat(o,", ").concat(m,": ").concat(i[m]," + ").concat(n[0].amount)),i[m]+=n[0].amount),c===l["trait"+(m+1)]&&(console.log("".concat(c,", ").concat(m,": ").concat(i[m]," + ").concat(n[1].amount)),i[m]+=n[1].amount);this.props.statsCB(i)}},{key:"render",value:function(){return this.state.outcome?r.a.createElement(r.a.Fragment,null,r.a.createElement("br",null),r.a.createElement("div",{className:"centerDivs"},r.a.createElement("h1",null,"Here's what happened:",r.a.createElement("div",null,this.state.outcome[0].text),r.a.createElement("br",null),r.a.createElement("div",null,this.state.outcome[0].trait,": ",this.state.score1),r.a.createElement("div",null,this.state.outcome[1].trait,": ",this.state.score2)))):r.a.createElement("div",null,"LOADING...")}}]),t}(r.a.Component)),U=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={output:void 0},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=[];this.props.starting.forEach(function(a,n){t.push(r.a.createElement("div",null,e.props.gameObj.traits["trait"+(n+1)]+": "+e.props.starting[n]+" --\x3e "+e.props.final[n]))}),this.setState({output:t})}},{key:"render",value:function(){return this.state.output?r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{src:this.props.avatar.picture}),r.a.createElement("p",null,this.props.avatar.name),this.state.output):"..."}}]),t}(r.a.Component),W=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={gameState:"prestart",currentQuestion:0,allowTimer:!0,timer:10,avatar:void 0,choice:void 0,startingTraits:void 0,currentStats:void 0},a.countdown=function(e,t){a.setState({timer:e});var n=setInterval(function(){var e=a.state.timer;if(e>0)return e--,void a.setState({timer:e});console.log("setting gamestate as ".concat(t)),"outcomes"===a.state.gameState&&"QandA"===t&&a.setState({currentQuestion:a.state.currentQuestion+1}),a.setState({gameState:t,allowTimer:!0}),clearInterval(n)},1e3)},a.choiceCB=function(e){a.setState({choice:e}),console.log("setting choice ".concat(e," in Game component"))},a.updateStats=function(e){a.setState({currentStats:e},console.log(a.state.currentStats))},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;if(this.props.state.host)this.props.socket.emit("startPlayers",this.props.state.gameCode,this.props.state.gameObj);else{var t=Math.floor(Math.random()*this.props.state.gameObj.avatars.length);this.setState({avatar:this.props.state.gameObj.avatars[t],gameState:"intro"})}this.countdown(10,"QandA"),this.props.socket.on("showResult",function(){console.log("setting gameState to outcomes"),e.setState({gameState:"outcomes"}),e.state.currentQuestion<e.props.state.gameObj.questions.length-1?e.countdown(15,"QandA"):e.countdown(15,"end")})}},{key:"render",value:function(){var e=this;if(this.props.socket.on("gameStart",function(){e.setState({gameState:"intro"})}),this.props.state.gameObj){var t=this.props.state.gameObj;if(this.props.state.host)switch(this.state.gameState){case"intro":return r.a.createElement("div",{className:"centerDivs"},r.a.createElement("h1",null,r.a.createElement("div",{className:"gameName"},r.a.createElement("h4",null,"Game Name:"),r.a.createElement("h1",{className:"boldFont orange"},t.name)),r.a.createElement("br",null),r.a.createElement("div",{className:"startTimer"},r.a.createElement("h2",null,"Game starts in: ",r.a.createElement("span",{className:"redTimer"},this.state.timer)," seconds"))));case"QandA":return r.a.createElement("div",{className:"centerDivs hostQuestions"},r.a.createElement("h4",{className:"text-center"},"Question ",this.state.currentQuestion+1,":"),r.a.createElement("br",null),r.a.createElement("h1",{className:"orange"},t.questions[this.state.currentQuestion].Q),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("h5",null,"(Please select a choice on your device)"));case"outcomes":return r.a.createElement("div",{className:"centerDivs"},r.a.createElement("h1",null,r.a.createElement("div",null,r.a.createElement("h1",{className:"text-center"},"Let's see what that did!"),r.a.createElement("h5",{className:"text-center"},"(Please view the outcome on your device)")),r.a.createElement("br",null),r.a.createElement("div",null,"Next question in ",r.a.createElement("span",{className:"redTimer"},this.state.timer)," seconds")));case"end":return r.a.createElement("div",{className:"centerDivs"},r.a.createElement("h1",{className:"orange"},"Let's see how you did!"),r.a.createElement("h5",null,"(Please view results on your device)"),r.a.createElement("br",null),r.a.createElement("a",{href:"https://aprilleperez.github.io/realgameoflife_client/"},"Back to Site"))}else switch(this.state.gameState){case"intro":if(this.state.avatar){for(var a=[],n=[],s=1;s<6;s++)n.push(this.state.avatar["trait"+s]),a.push(r.a.createElement("div",null,t.traits["trait"+s]+": "+this.state.avatar["trait"+s]));return this.state.startingTraits||this.setState({startingTraits:[].concat(n),currentStats:n}),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"centerDivs"},r.a.createElement("h1",null,r.a.createElement("img",{className:"avatarImg",src:this.state.avatar.picture}),r.a.createElement("div",{className:"displayName"},"You are: ",r.a.createElement("span",{className:"boldFont orange"},this.state.avatar.name)),r.a.createElement("br",null),r.a.createElement("div",{className:"displayTraits"},"Starting Stats:",r.a.createElement("span",{className:"boldFont blue"},a)))))}return r.a.createElement("div",{className:"centerDivs"},"Avatar loading...");case"QandA":return r.a.createElement(P,{choiceCB:this.choiceCB,timer:this.state.timer,question:t.questions[this.state.currentQuestion],answers:t.questions[this.state.currentQuestion].responses,socket:this.props.socket,gameCode:this.props.state.gameCode,traits:t.traits,currentStats:this.state.currentStats});case"outcomes":return r.a.createElement(H,{choice:this.state.choice,gameObj:t,avatar:this.state.avatar,qNum:this.state.currentQuestion,currentStats:this.state.currentStats,statsCB:this.updateStats});case"end":for(var l=[],o=0;o<5;o++)l.push(r.a.createElement("div",null,t.traits["trait"+o]+": "+this.state.avatar["trait"+o]));return r.a.createElement("div",{className:"centerDivs"},r.a.createElement("h1",null,"What a wild ride!"),r.a.createElement("br",null),r.a.createElement(U,{avatar:this.state.avatar,starting:this.state.startingTraits,final:this.state.currentStats,gameObj:this.props.state.gameObj}),r.a.createElement("a",{href:"https://aprilleperez.github.io/realgameoflife_client/"},"Back to Site"))}}return r.a.createElement("div",{className:"centerDivs"},r.a.createElement("h1",null,"LOADING GAME  (\xb4\uff61\u2022 \u1d55 \u2022\uff61`)"))}}]),t}(r.a.Component),R=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=function(t){console.log("setting game as ".concat(t.name)),e.setState({gameObj:t})};return r.a.createElement("div",null,r.a.createElement(p.d,null,r.a.createElement(p.b,{path:"/game",render:function(){return r.a.createElement(W,{state:e.props.state,socket:e.props.socket})}}),r.a.createElement(p.b,{path:"/lobby",render:function(){return r.a.createElement(q,{state:e.props.state,socket:e.props.socket,updateState:e.props.updateState})}}),r.a.createElement(p.b,{path:"/",exact:!0,render:function(){return r.a.createElement(T,{state:e.props.state,updateState:e.props.updateState,setGame:t})}}),r.a.createElement(p.a,{to:"/"})))}}]),t}(r.a.Component),J=a(99),_=a.n(J)()("https://real-life-api.herokuapp.com/"),K=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={gameState:"start",loggedIn:!1,userName:"login",gameCode:"",gameObj:void 0,host:!1},a.updateState=function(e){a.setState(e)},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(h.a,{basename:"/realgameoflife_client"},r.a.createElement(R,{state:this.state,updateState:this.updateState,socket:_}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(K,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},78:function(e,t,a){}},[[100,1,2]]]);
//# sourceMappingURL=main.8c54cdbd.chunk.js.map