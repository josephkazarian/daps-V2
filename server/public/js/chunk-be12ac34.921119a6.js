(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-be12ac34"],{"30da":function(e,t,r){"use strict";r("4882")},4882:function(e,t,r){},a55b:function(e,t,r){"use strict";r.r(t);var n=r("7a23"),c={class:"login-page"},s={key:0,class:"alert alert-success alert-link"},a={key:1,class:"alert alert-danger alert-link"},o={class:"form"},l={key:0,class:"register-form"},u=["placeholder"],i=["placeholder"],d=["placeholder"],b={class:"message"},p={key:1,class:"login-form"},j=["placeholder"],O=["placeholder"],g={class:"message"};function m(e,t,r,m,f,h){return Object(n["t"])(),Object(n["f"])("div",c,[f.succeed?(Object(n["t"])(),Object(n["f"])("div",s,Object(n["C"])(e.$t("userRegisteredPleaseLogIn")),1)):Object(n["e"])("",!0),f.problem?(Object(n["t"])(),Object(n["f"])("div",a,Object(n["C"])(e.$t("wrongUser")),1)):Object(n["e"])("",!0),Object(n["g"])("div",o,[f.showRegister?(Object(n["t"])(),Object(n["f"])("form",l,[Object(n["H"])(Object(n["g"])("input",{"onUpdate:modelValue":t[0]||(t[0]=function(e){return f.username=e}),type:"text",placeholder:e.$t("username")},null,8,u),[[n["E"],f.username]]),Object(n["H"])(Object(n["g"])("input",{"onUpdate:modelValue":t[1]||(t[1]=function(e){return f.password=e}),type:"password",placeholder:e.$t("password")},null,8,i),[[n["E"],f.password]]),Object(n["H"])(Object(n["g"])("input",{"onUpdate:modelValue":t[2]||(t[2]=function(e){return f.emailAddress=e}),type:"text",placeholder:e.$t("emailAddress")},null,8,d),[[n["E"],f.emailAddress]]),Object(n["g"])("button",{onClick:t[3]||(t[3]=Object(n["I"])((function(e){return h.register()}),["prevent"]))},Object(n["C"])(e.$t("register")),1),Object(n["g"])("p",b,[Object(n["h"])(Object(n["C"])(e.$t("alreadyRegistered?"))+" ",1),Object(n["g"])("a",{href:"#",onClick:t[4]||(t[4]=Object(n["I"])((function(e){return f.showRegister=!1}),["prevent"]))},Object(n["C"])(e.$t("login")),1)])])):(Object(n["t"])(),Object(n["f"])("form",p,[Object(n["H"])(Object(n["g"])("input",{"onUpdate:modelValue":t[5]||(t[5]=function(e){return f.username=e}),type:"text",placeholder:e.$t("username")},null,8,j),[[n["E"],f.username]]),Object(n["H"])(Object(n["g"])("input",{"onUpdate:modelValue":t[6]||(t[6]=function(e){return f.password=e}),type:"password",placeholder:e.$t("password")},null,8,O),[[n["E"],f.password]]),Object(n["g"])("button",{onClick:t[7]||(t[7]=Object(n["I"])((function(e){return h.login()}),["prevent"]))},Object(n["C"])(e.$t("login")),1),Object(n["g"])("p",g,[Object(n["h"])(Object(n["C"])(e.$t("notRegistered?"))+" ",1),Object(n["g"])("a",{href:"#",onClick:t[8]||(t[8]=Object(n["I"])((function(e){return f.showRegister=!0}),["prevent"]))},Object(n["C"])(e.$t("register")),1)])]))])])}var f=r("1da1"),h=(r("96cf"),r("bf80")),w={name:"login",data:function(){return{showRegister:!1,username:"",password:"",emailAddress:"",succeed:!1,problem:!1}},methods:{register:function(){alert("register")},login:function(){var e=this;return Object(f["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,h["a"].signIn(e.username,e.password);case 3:r=t.sent,n=r.data,n.hasSucceed?(e.problem=!1,h["a"].addLoginToLocalStorage(n.responseObject._id),window.location.reload(),e.$router.push("/")):(e.succeed=!1,e.problem=!0),t.next=12;break;case 8:t.prev=8,t.t0=t["catch"](0),e.error=t.t0.message,console.error(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,8]])})))()}}},k=(r("30da"),r("6b0d")),v=r.n(k);const $=v()(w,[["render",m]]);t["default"]=$}}]);
//# sourceMappingURL=chunk-be12ac34.921119a6.js.map