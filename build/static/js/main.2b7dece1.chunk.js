(this["webpackJsonpalways-sunny"]=this["webpackJsonpalways-sunny"]||[]).push([[0],{10:function(e,a,t){e.exports=t(15)},15:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),i=t(3),r=t.n(i),s=t(4),l=t(5),o=t(9),m=t(8),d=(t(2),t(6)),p=t(7);var g={border:"5px solid white",borderRadius:"5px",height:"215px",width:"250px"},h={margin:"20px 60px 5px 60px",display:"inline-block",textAlign:"center"},k=function(e){return c.a.createElement("div",Object(p.a)({className:"card",clicked:e.clicked,style:h,onClick:function(){return e.clickGangMember(e.id)}},"className","click"),c.a.createElement("img",{style:g,alt:e.name,src:e.image}),c.a.createElement("div",{className:"content"},c.a.createElement("strong",{style:{color:"white"}},e.name)))};var u={backgroundColor:"#7FFF00",borderBottom:"10px solid #FFDF00",borderBottomLeftRadius:"5px",borderBottomRightRadius:"5px",height:"100px",padding:"20px 20px 20px 50px",width:"100%"},f=function(e){return c.a.createElement("header",{style:u},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-5"},c.a.createElement("h2",null,"Sunny Gang Game")),c.a.createElement("div",{className:"col-md-3"},c.a.createElement("div",{className:"winLose"},e.answer)),c.a.createElement("div",{className:"col-md-4"},c.a.createElement("h2",{style:{marginBottom:"0",marginTop:"5px"}},"Score: ",e.score," | Streak: ",e.streak))))},b=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(s.a)(this,t);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(e=a.call.apply(a,[this].concat(c))).state={gang:d,score:0,streak:0,answer:!0},e}return Object(l.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"container"},c.a.createElement(f,{score:this.state.score,streak:this.state.streak,answer:this.state.answer?"Perfect!":"Failure!"}),this.state.gang.map((function(a){return c.a.createElement(k,{clickGangMember:e.clickGangMember,id:a.id,key:a.id,name:a.name,image:a.image,clicked:a.clicked})}))))}}]),t}(c.a.Component);r.a.render(c.a.createElement(b,null),document.getElementById("root"))},2:function(e,a,t){},6:function(e){e.exports=JSON.parse('[{"id":1,"name":"Mac","image":"https://www.thewrap.com/wp-content/uploads/2011/08/Fat_Mac.jpg","clicked":false},{"id":2,"name":"Dennis","image":"https://i.pinimg.com/originals/22/34/c9/2234c9c08b961d25a01e430c2adb988b.jpg","clicked":false},{"id":3,"name":"Dee","image":"https://hips.hearstapps.com/ell.h-cdn.co/assets/16/01/1452121732-elle-sweet-dee-index.jpg?crop=1xw:1.0xh;center,top&resize=480:*","clicked":false},{"id":4,"name":"Charlie","image":"https://i.pinimg.com/originals/d1/b5/bf/d1b5bfd73154e7048c7576caebbf721a.jpg","clicked":false},{"id":5,"name":"Frank","image":"https://lh3.googleusercontent.com/proxy/3ue8sziMZvfZqmyCattNrNwmz6ayne3sS5aEE9brTdgI9niWLL2yTUyI2-19VI76YEwyk1128zi1vWGoAH7kjcDNzM7v5WYX5XxmvR9WNzAmejad1kiwm6Sp4SpZAhvKV0jAWA","clicked":false},{"id":6,"name":"Rickety Cricket","image":"https://i.redd.it/yq0vgythwdx11.jpg","clicked":false},{"id":7,"name":"Bill Ponderosa","image":"https://sunnygifs.com/wp-content/uploads/2019/12/VHMOYjk-360x270.jpg","clicked":false},{"id":8,"name":"The McPoyles","image":"https://1.bp.blogspot.com/-EoUkFLQI3ZM/XJ7ltvoIVwI/AAAAAAAA_E8/tIdrGGP0YqElWPSIpJrB6Fh_4OHAhkfUgCLcBGAs/s1600/7.png","clicked":false},{"id":9,"name":"Gail the Snail","image":"https://i.pinimg.com/originals/8b/31/f4/8b31f4d41e6d531f535143fdf6a1b4ee.png","clicked":false}]')}},[[10,1,2]]]);
//# sourceMappingURL=main.2b7dece1.chunk.js.map