(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],{197:function(e,n,t){},224:function(e,n,t){},230:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),i=t(45),o=t.n(i),l=t(6),c=t(3),u=t(5),s=t(2),m=(t(231),t(197),t(21)),d=t.n(m);function p(){var e=Object(c.a)(['\n  cursor: pointer;\n  width: 100%;\n  height: 100%;\n  background-color: lightgray;\n  border-radius: 15px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  font-family: "Roboto", sans-serif;\n  transition: all 0.3s cubic-bezier(0.5, 2, 0.25, 1);\n  margin: 20px 0;\n  text-align: center;\n  background-color: ',";\n  padding: 20px 50px;\n\n  &:hover {\n    transform: translateY(-5px);\n  }\n  h2 {\n    margin: 0;\n    padding: 5px;\n    font-size: 2rem;\n    color: #444f5a;\n    margin: 20px 0;\n  }\n  h3 {\n    width: 100%;\n    padding: 2px;\n    margin: 5px;\n    color: #444f5a;\n    border-radius: 10px;\n    font-size: 1.3rem;\n    margin: 10px 0;\n  }\n  img {\n    width: 50px;\n  }\n"]);return p=function(){return e},e}var f=s.d.div(p(),(function(e){return e.theme.primaryLight})),g=t(15),b=t.n(g);var h=function(e){var n=e.location,t="white",a=100,i=!0;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,n.name),"Clear"===n.weather[0].main?r.a.createElement(b.a,{icon:n.weather[0].main.toUpperCase()+"_DAY",color:t,size:a,animate:i}):null,"Smoke"===n.weather[0].main||"Squall"===n.weather[0].main?r.a.createElement(b.a,{icon:"RAIN",color:t,size:a,animate:i}):null,"Snow"===n.weather[0].main?r.a.createElement(b.a,{icon:"SNOW",color:t,size:a,animate:i}):null,"Thunderstorm"===n.weather[0].main||"Tornado"===n.weather[0].main?r.a.createElement(b.a,{icon:"WIND",color:t,size:a,animate:i}):null,"Fog"===n.weather[0].main||"Haze"===n.weather[0].main||"Mist"===n.weather[0].main?r.a.createElement(b.a,{icon:"FOG",color:t,size:a,animate:i}):null,"Fog"===n.weather[0].main||"Haze"===n.weather[0].main?r.a.createElement(b.a,{icon:"SLEET",color:t,size:a,animate:i}):null,"Clouds"===n.weather[0].main||"Sand"===n.weather[0].main||"Dust"===n.weather[0].main||"Ash"===n.weather[0].main?r.a.createElement(b.a,{icon:"CLOUDY",color:t,size:a,animate:i}):null)},x=t(25);function E(){var e=Object(c.a)(["\n  font-size: 1.2em;\n  background-color: #fff;\n  padding: 10px 20px;\n  text-align: center;\n  border-radius: 10px;\n  margin-top: 10px;\n\n  cursor: pointer;\n  transition: all 0.3s cubic-bezier(1, 0.8, 0.25, 1);\n\n  &:hover {\n    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n  }\n"]);return E=function(){return e},e}var v=s.d.button(E()),w=t(24),y=function(e){return{type:"REMOVECART",payload:e}};var j=Object(w.b)(null,(function(e){return{addCart:function(n){return e({type:"ADDCART",payload:n})},removeCart:function(n){return e(y(n))}}}))((function(e){var n=e.addCart,t=e.location,a=(e.cart,e.children),i=e.isSaveCity,o=Object(x.a)(e,["addCart","location","cart","children","isSaveCity"]);return r.a.createElement(r.a.Fragment,null,i?r.a.createElement(v,Object.assign({},o,{onClick:function(e){e.stopPropagation(),e.persist(),y(t)}}),a):r.a.createElement(v,Object.assign({},o,{onClick:function(e){e.stopPropagation(),e.persist(),n(t)}}),a))}));var O=function(e){var n=e.location,t=e.isSaveCity;return r.a.createElement(f,null,!!n.main&&r.a.createElement(l.b,{style:{textDecoration:"none"},to:"/".concat(n.id)},r.a.createElement(h,{location:n}),r.a.createElement("h3",null,"FEELS LIKE ",n.main.feels_like," \u2103"),r.a.createElement("h3",null,"TEMP ",n.main.temp," \u2103")),t?r.a.createElement(j,{location:n},"REMOVE"):r.a.createElement(j,{location:n},"SAVE"))};function k(){var e=Object(a.useState)(0),n=Object(u.a)(e,2),t=n[0],i=n[1],o=Object(a.useState)(0),l=Object(u.a)(o,2),c=l[0],s=l[1],m=Object(a.useState)({}),p=Object(u.a)(m,2),f=p[0],g=p[1],b=Object(a.useState)(),h=Object(u.a)(b,2),x=h[0],E=(h[1],d.a.create({baseURL:"https://api.openweathermap.org/data/2.5/weather/",params:{appid:"c464608a0909ecb7b521f7e1cde53200",units:"metric"}}));function v(e){var n=e.coords.latitude,t=e.coords.longitude;i(n),s(t)}return Object(a.useEffect)((function(){navigator.geolocation.getCurrentPosition(v),E.get("/",{params:{lat:t,lon:c}}).then((function(e){g(e.data)})).catch((function(e){console.log("error")}))}),[t,c]),r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{style:{color:"#f67280"}},"TODAY'S WEATHER"),!!(f.main&&f.main.temp&&t&&c)&&r.a.createElement(O,{location:f,city:x}))}function S(){var e=Object(c.a)(["\n  font-size: 1.2rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  input {\n    border-radius: 10px;\n    padding: 8px;\n    border: none;\n    font-size: 1.5rem;\n  }\n"]);return S=function(){return e},e}var C=s.d.div(S());function z(){var e=Object(a.useState)(""),n=Object(u.a)(e,2),t=n[0],i=n[1],o=Object(a.useState)(),l=Object(u.a)(o,2),c=l[0],s=l[1],m=d.a.create({baseURL:"https://api.openweathermap.org/data/2.5/weather/",params:{appid:"c464608a0909ecb7b521f7e1cde53200",units:"metric"}});return r.a.createElement(C,null,r.a.createElement("h1",null,"SEARCH CITY NAME"),r.a.createElement("input",{type:"text",id:"city",placeholder:"CITY NAME",onChange:function(e){s(e.target.value)},onKeyPress:function(e){13===e.which&&m.get("/",{params:{q:c}}).then((function(e){i(e.data)})).catch((function(e){console.log("error"),i("")}))}}),r.a.createElement("label",{for:"city"}," "),!(!t.main||!t.main.temp)&&r.a.createElement(O,{location:t}))}function I(){var e=Object(c.a)(["\n  html, body {\n    margin: 0;\n    padding: 0;\n   \n  }\n  *, *::after, *::before {\n    box-sizing: border-box;\n  }\n  p,h2,h1,button{\n    font-family: 'Roboto', sans-serif;\n  }\n  body {\n    align-items: center;\n    font-family: 'Roboto', sans-serif;\n    background: ",";\n    color: ",";\n     transition: all 0.25s linear;\n    display: flex;\n    height: 100vh;\n    justify-content: center;\n    text-rendering: optimizeLegibility;\n     padding-top:80px;;\n  }\n  "]);return I=function(){return e},e}var A=Object(s.b)(I(),(function(e){return e.theme.body}),(function(e){return e.theme.text})),N={body:"#ffc8c8",text:"#ff9999",toggleBorder:"#FFF",gradient:"linear-gradient(#39598A, #79D7ED)",mobile:"576px",Hover:"#d63447"},D={body:"#444f5a",text:"#ff9999",toggleBorder:"#6B8096",gradient:"linear-gradient(#091236, #1E215D)",mobile:"576px",Hover:"#d63547"},R=t(4);function P(){var e=Object(c.a)(["\n  position: fixed;\n  top: 3%;\n  left: 2rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  width: 2rem;\n  height: 2rem;\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  padding: 0;\n  z-index: 10;\n\n  &:focus {\n    outline: none;\n  }\n\n  div {\n    width: 2rem;\n    height: 0.25rem;\n    background: ",";\n    border-radius: 10px;\n    transition: all 0.3s linear;\n    position: relative;\n    transform-origin: 1px;\n\n    :first-child {\n      transform: ",";\n    }\n\n    :nth-child(2) {\n      opacity: ",";\n      transform: ",";\n    }\n\n    :nth-child(3) {\n      transform: ",";\n    }\n  }\n"]);return P=function(){return e},e}var L=s.d.button(P(),(function(e){var n=e.theme;return e.toggle?n.text:n.body}),(function(e){return e.toggle?"rotate(45deg)":"rotate(0)"}),(function(e){return e.toggle?"0":"1"}),(function(e){return e.toggle?"translateX(20px)":"translateX(0)"}),(function(e){return e.toggle?"rotate(-45deg)":"rotate(0)"})),T=function(e){var n=e.toggle,t=e.toggler;return r.a.createElement(L,{toggle:n,onClick:function(){return t(!n)}},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))};function F(){var e=Object(c.a)(["\n  display: flex;\n  height: 100%;\n  flex-direction: column;\n  justify-content: center;\n  background: ",";\n  z-index: 2;\n  text-align: left;\n  padding: 2rem;\n  position: fixed;\n  top: 0;\n  left: 0;\n  transform: translateX(0);\n  transition: transform 0.3s ease-in-out;\n  transform: ",';\n\n  &::after {\n    content: "";\n    background: #f6f6f6;\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    top: 0;\n    left: 0;\n    opacity: 0.3;\n    z-index: 0;\n  }\n  @media (max-width: 600px) {\n    width: 100%;\n  }\n\n  a {\n    font-size: 3rem;\n    text-transform: uppercase;\n    padding: 1.2rem 0;\n    font-weight: bold;\n    letter-spacing: 0.3rem;\n    color: ',";\n    text-decoration: none;\n    transition: color 0.3s linear;\n    z-index: 1;\n    @media (max-width: 600px) {\n      font-size: 1.5rem;\n      text-align: center;\n    }\n\n    &:hover {\n      color: ",";\n    }\n  }\n"]);return F=function(){return e},e}var H=s.d.nav(F(),(function(e){return e.theme.body}),(function(e){return e.toggle?"translateX(0)":"translateX(-100%)"}),(function(e){return e.theme.text}),(function(e){return e.theme.primaryHover})),G=function(e){var n=e.toggle,t=e.theme;return console.log(t),r.a.createElement(H,{toggle:n},r.a.createElement(l.b,{to:"/",style:{fontSize:"2rem"}},r.a.createElement("span",{role:"img","aria-label":"HOME"},"light"===t?"\u273f":"\ud83c\udf1a "),"HOME"),r.a.createElement(l.b,{to:"/add",style:{fontSize:"2rem"}},r.a.createElement("span",{role:"img","aria-label":"SEARCH"},"light"===t?"\u273f":"\ud83c\udf1a "),"SEARCH"),r.a.createElement(l.b,{to:"/detail",style:{fontSize:"2rem"}},r.a.createElement("span",{role:"img","aria-label":"DETAIL"},"light"===t?"\u273f":"\ud83c\udf1a "),"DETAIL"),r.a.createElement(l.b,{to:"/signin",style:{fontSize:"2rem"}},r.a.createElement("span",{role:"img","aria-label":"LOGIN"},"light"===t?"\u273f":"\ud83c\udf1a "),"LOGIN"))};function M(){var e=Object(c.a)(["\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  button {\n    margin: 20px 0;\n    font-size: 1.2em;\n    background-color: #fff;\n    padding: 10px 20px;\n    cursor: pointer;\n    transition: all 0.3s cubic-bezier(1, 0.8, 0.25, 1);\n    border-radius: 10px;\n  }\n"]);return M=function(){return e},e}function U(){var e=Object(c.a)(["\n  margin-top: 400px;\n  flex-direction: column;\n  padding: 20px 30px;\n  border-radius: 10px;\n  background-color: #fff;\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n  display: flex;\n  flex-basis: 1;\n\n  h3 {\n    border: 5px solid #c9d6df;\n    border-radius: 10px;\n    width: 50vw;\n    color: #52616b;\n    margin: 10px auto;\n    text-align: center;\n    padding: 30px;\n    display: grid;\n    grid-gap: 4px;\n    grid-template-columns: repeat(auto-fit, minmax(10px, 1fr));\n    grid-auto-flow: dense;\n    cursor: pointer;\n\n    &:hover {\n      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n    }\n  }\n\n  h2 {\n    color: black;\n  }\n"]);return U=function(){return e},e}var _=s.d.div(U()),W=s.d.div(M());function q(){var e=Object(a.useState)(),n=Object(u.a)(e,2),t=n[0],i=n[1],o=Object(R.f)(),l=Object(R.g)().cityId,c=d.a.create({baseURL:"https://api.openweathermap.org/data/2.5/weather/",params:{appid:"c464608a0909ecb7b521f7e1cde53200",units:"metric"}});return Object(a.useEffect)((function(){c.get("/",{params:{id:l}}).then((function(e){i(e.data)})).catch((function(e){console.log("error")}))}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(_,null,!!t&&r.a.createElement("div",null,r.a.createElement("h2",null,t.name," IS ",t.weather[0].main),r.a.createElement("h3",null,r.a.createElement("span",null," FEELS LIKE"),r.a.createElement("span",null," ",t.main.feels_like," \u2103")),r.a.createElement("h3",null,r.a.createElement("span",null,"MIN")," ",r.a.createElement("span",null,t.main.temp_min," \u2103")),r.a.createElement("h3",null,r.a.createElement("span",null,"MAX")," ",r.a.createElement("span",null,t.main.temp_max," \u2103")),r.a.createElement("h3",null,r.a.createElement("span",null,"HUMIDITY")," ",r.a.createElement("span",null,t.main.humidity," \u2103")),r.a.createElement("h3",null,r.a.createElement("span",null,"WIND SPEED")," ",r.a.createElement("span",null,t.wind.speed)),r.a.createElement("h3",null,r.a.createElement("span",null,"visibility")," ",r.a.createElement("span",null,t.visibility)," "),r.a.createElement("h3",null,r.a.createElement("span",null,"pressure")," ",r.a.createElement("span",null,t.main.pressure)," "),r.a.createElement("h3",null,r.a.createElement("span",null,"WIND "),r.a.createElement("span",null,t.wind.deg)," "))),r.a.createElement(W,null,r.a.createElement("button",{onClick:function(){o.go(-1)}},"\u25c0 back")))}function Y(){var e=Object(c.a)(["\n  width: 100%;\n  background-color: white;\n  height: 80px;\n  position: fixed;\n  top: 0;\n  left: 0;\n  text-align: center;\n  z-index: 3;\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n  h1 {\n    text-align: center;\n  }\n"]);return Y=function(){return e},e}var X=s.d.div(Y()),B=function(){return r.a.createElement(l.b,{to:"/",style:{color:"black"}},r.a.createElement(X,null,r.a.createElement("h1",null,"WEATHERS")))},K=t(34);function J(){var e=Object(c.a)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n\n  width: 70vw;\n  height: 85vh;\n  margin: auto;\n  grid-gap: 10px;\n  font-size: 1.2em;\n  padding: 10px 20px;\n  text-align: center;\n  border-radius: 10px;\n  margin-top: 80px;\n  cursor: pointer;\n  transition: all 0.3s cubic-bezier(1, 0.8, 0.25, 1);\n"]);return J=function(){return e},e}var V=s.d.div(J());var Z=Object(w.b)((function(e){return{location:Object(K.a)(e)}}))((function(e){var n=e.location;return console.log(n),r.a.createElement(V,null,n.map((function(e){return r.a.createElement(O,{location:e,isSaveCity:!0})})))})),Q=t(22),$=t(23),ee=t(11),ne=t.n(ee),te=t(20),ae=(t(224),function(e){var n=e.handleChange,t=e.label,a=Object(x.a)(e,["handleChange","label"]);return r.a.createElement("div",{className:"group"},r.a.createElement("input",Object.assign({className:"form-input",onChange:n},a)),t?r.a.createElement("label",{className:"".concat(a.value.length?"shrink":""," form-input-label")},t):null)});function re(){var e=Object(c.a)(["\n  min-width: 130px;\n  width: auto;\n  height: 50px;\n  line-height: 50px;\n  padding: 0 35px 0 35px;\n  font-size: 14px;\n  text-transform: uppercase;\n  font-weight: bolder;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n\n  border: none;\n\n  ",";\n"]);return re=function(){return e},e}function ie(){var e=Object(c.a)(["\n  background-color: #4285f4;\n  color: white;\n  min-width: 130px;\n  border-radius: 10px;\n  &:hover {\n    background-color: #397ae8;\n    border: none;\n\n   \n"]);return ie=function(){return e},e}function oe(){var e=Object(c.a)(["\n  background-color: white;\n  color: black;\n  border: 2px solid black;\n\n  &:hover {\n    background-color: black;\n    color: white;\n    border: none;\n  }\n"]);return oe=function(){return e},e}function le(){var e=Object(c.a)(["\n  background-color: pink;\n  color: white;\n  border: none;\n  border-radius: 10px;\n  transition: all 0.3s ease;\n  border: 2px solid pink;\n  &:hover {\n    background-color: #ffacb7;\n    color: white;\n    border: 2px solid #ffacb7;\n  }\n"]);return le=function(){return e},e}var ce=Object(s.c)(le()),ue=Object(s.c)(oe()),se=Object(s.c)(ie()),me=s.d.button(re(),(function(e){return e.isGoogleSignIn?se:e.inverted?ue:ce})),de=function(e){var n=e.children,t=Object(x.a)(e,["children"]);return r.a.createElement(me,t,n)},pe=t(26),fe=t.n(pe),ge=(t(225),t(228),function(){var e=Object(te.a)(ne.a.mark((function e(n,t){var a,r,i,o,l,c,u;return ne.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n){e.next=2;break}return e.abrupt("return");case 2:return a=he.doc("user/".concat(n.uid)),r=he.collection("users"),e.next=6,a.get();case 6:return i=e.sent,e.next=9,r.get();case 9:if(o=e.sent,console.log({collection:o.docs.map((function(e){return e.data()}))}),i.exists){e.next=22;break}return l=n.displayName,c=n.email,u=new Date,e.prev=14,e.next=17,a.set(Object($.a)({displayName:l,email:c,createdAt:u},t));case 17:e.next=22;break;case 19:e.prev=19,e.t0=e.catch(14),console.log("error creating user",e.t0.message);case 22:return e.abrupt("return",a);case 23:case"end":return e.stop()}}),e,null,[[14,19]])})));return function(n,t){return e.apply(this,arguments)}}());fe.a.initializeApp({apiKey:"AIzaSyAFU9rFBKI6G_iT_Gv_65ZGe1YDkuxmI_w",authDomain:"weather-app-a7e3c.firebaseapp.com",databaseURL:"https://weather-app-a7e3c.firebaseio.com",projectId:"weather-app-a7e3c",storageBucket:"weather-app-a7e3c.appspot.com",messagingSenderId:"663473543312",appId:"1:663473543312:web:f50017e185230fd47e2015",measurementId:"G-NRJ2XS2JDF"});var be=fe.a.auth(),he=fe.a.firestore(),xe=new fe.a.auth.GoogleAuthProvider;xe.setCustomParameters({prompt:"select_account"});var Ee=function(){return be.signInWithPopup(xe)};fe.a;function ve(){var e=Object(c.a)(["\n  width: 100%;\n  min-width: 500px;\n  display: flex;\n  flex-direction: column;\n  background-color: white;\n  padding: 30px;\n  margin: 50px;\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n\n  @media screen and (max-width: 1000px) {\n    min-width: 100%;\n    margin: 0;\n  }\n\n  .title {\n    margin: 10px 0;\n  }\n  .buttons {\n    display: flex;\n    justify-content: space-around;\n  }\n"]);return ve=function(){return e},e}var we=s.d.div(ve());function ye(){var e=Object(a.useState)({email:"",password:""}),n=Object(u.a)(e,2),t=n[0],i=n[1],o=function(){var e=Object(te.a)(ne.a.mark((function e(n){return ne.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.prev=1,e.next=4,be.signInWithEmailAndPassword(t.email,t.password);case 4:i({email:"",password:""}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(n){return e.apply(this,arguments)}}(),l=function(e){var n=e.target,a=n.value,r=n.name;i(Object($.a)({},t,Object(Q.a)({},r,a)))};return r.a.createElement(we,null,r.a.createElement("h2",null,"I already have an account"),r.a.createElement("span",null,"Sign in with your email and password"),r.a.createElement("form",{onSubmit:o},r.a.createElement(ae,{name:"email",type:"email",value:t.email,handleChange:l,label:"email",required:!0}),r.a.createElement(ae,{name:"password",type:"password",handleChange:l,value:t.password,label:"password",required:!0}),r.a.createElement("div",{className:"buttons"},r.a.createElement(de,{type:"submit"},"Sign In"),r.a.createElement(de,{onClick:Ee,isGoogleSignIn:!0},"Sign in with Google"))))}function je(){var e=Object(c.a)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  background-color: white;\n  padding: 30px;\n  margin: 50px;\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n  min-width: 500px;\n  @media screen and (max-width: 1000px) {\n    min-width: 100%;\n    margin: 30px 0;\n  }\n\n  .title {\n    margin: 10px 0;\n  }\n"]);return je=function(){return e},e}var Oe=s.d.div(je());function ke(){var e=Object(a.useState)({displayName:"",email:"",password:"",confirmPassword:""}),n=Object(u.a)(e,2),t=n[0],i=n[1],o=function(){var e=Object(te.a)(ne.a.mark((function e(n){var a,r;return ne.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),t.password===t.confirmPassword){e.next=4;break}return alert("Passwords don't match"),e.abrupt("return");case 4:return e.prev=4,e.next=7,be.createUserWithEmailAndPassword(t.email,t.password);case 7:return a=e.sent,r=a.user,e.next=11,ge(r,{displayName:t.displayName});case 11:i({displayName:"",email:"",password:"",confirmPassword:""}),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(4),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[4,14]])})));return function(n){return e.apply(this,arguments)}}();function l(e){var n=e.target,a=n.name,r=n.value;i(Object($.a)({},t,Object(Q.a)({},a,r)))}return r.a.createElement(Oe,null,r.a.createElement("h2",{className:"title"}," I do not have a account"),r.a.createElement("span",null,"Sign up with your email and password"),r.a.createElement("form",{className:"sign-up-form",onSubmit:o},r.a.createElement(ae,{type:"text",name:"displayName",value:t.displayName,onChange:l,label:"displayname",required:!0}),r.a.createElement(ae,{type:"email",name:"email",value:t.email,onChange:l,label:"email",required:!0}),r.a.createElement(ae,{type:"password",name:"password",value:t.password,onChange:l,label:"password",required:!0}),r.a.createElement(ae,{type:"password",name:"confirmPassword",value:t.confirmPassword,onChange:l,label:"Confirm Password",required:!0}),r.a.createElement(de,{type:"submit"}," SIGN UP ")))}function Se(){var e=Object(c.a)(["\n  width: 100%;\n  display: flex;\n  padding: 50px;\n  justify-content: space-between;\n  margin: 0 auto;\n\n  @media screen and (max-width: 1000px) {\n    width: 100%;\n    position: absolute;\n    top: 10%;\n    left: 0;\n\n    flex-direction: column;\n    justify-content: center;\n    margin: auto;\n  }\n"]);return Se=function(){return e},e}var Ce=s.d.div(Se());function ze(){return r.a.createElement(Ce,null,r.a.createElement(ye,null),r.a.createElement(ke,null))}function Ie(){var e=Object(c.a)(["\n    font-size: 2rem;\n    background-color: white;\n    border: none;\n    position: fixed;\n    top: 2%;\n    right: 5%;\n    z-index: 3;\n    cursor: pointer;\n  "]);return Ie=function(){return e},e}var Ae=Object(R.h)((function(){var e,n,t=Object(a.useState)(!1),i=Object(u.a)(t,2),o=i[0],l=i[1],c=Object(a.useState)("/"),m=Object(u.a)(c,2),d=(m[0],m[1]),p=Object(a.useState)("light"),f=Object(u.a)(p,2),g=f[0],b=f[1],h=Object(a.useRef)();e=h,n=function(){return l(!1)},Object(a.useEffect)((function(){var t=function(t){e.current&&!e.current.contains(t.target)&&n(t)};return document.addEventListener("mousedown",t),function(){document.removeEventListener("mousedown",t)}}),[e,n]);var x=Object(R.f)();Object(a.useEffect)((function(){d((function(e){return e!==x.location.pathname&&l(!1),x.location.pathname}))}),[x.location.pathname]);var E=s.d.button(Ie());return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,{theme:"light"===g?N:D},r.a.createElement(A,null),r.a.createElement(B,null),r.a.createElement(E,{onClick:function(){b("light"===g?"dark":"light")}},"light"===g?"\ud83c\udf1b":"\ud83c\udf1e"),r.a.createElement("div",{ref:h},r.a.createElement(T,{toggle:o,toggler:l}),r.a.createElement(G,{toggle:o,toggler:l,theme:g})),r.a.createElement(R.c,null,r.a.createElement(R.a,{exact:!0,path:"/"},r.a.createElement(k,null)),r.a.createElement(R.a,{exact:!0,path:"/add"},r.a.createElement(z,null)),r.a.createElement(R.a,{exact:!0,path:"/detail"},r.a.createElement(Z,null)),r.a.createElement(R.a,{exact:!0,path:"/signin"},r.a.createElement(ze,null)),r.a.createElement(R.a,{exact:!0,path:"/:cityId"},r.a.createElement(q,null)))))})),Ne=t(47),De=Object(Ne.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"ADDCART":var t=e.filter((function(e){return e.id===n.payload.id}));if(0===t.length)return[].concat(Object(K.a)(e),[n.payload]);case"REMOVECART":var a=e.filter((function(e){return e.id!==n.payload.id}));return Object(K.a)(a);default:return e}})),Re=document.getElementById("root");o.a.render(r.a.createElement(l.a,null,r.a.createElement(w.a,{store:De},r.a.createElement(Ae,null))),Re)},94:function(e,n,t){e.exports=t(230)}},[[94,1,2]]]);
//# sourceMappingURL=main.c3048b7f.chunk.js.map