(this.webpackJsonpcookr=this.webpackJsonpcookr||[]).push([[0],{126:function(e,c,t){},127:function(e,c,t){},128:function(e,c,t){},129:function(e,c,t){},130:function(e,c,t){},131:function(e,c,t){},132:function(e,c,t){},135:function(e,c,t){},136:function(e,c,t){"use strict";t.r(c);var n=t(0),i=t(1),a=t.n(i),s=t(31),r=t.n(s),l=(t(41),t(42),t(6)),j=t(4),o=t(10),d=t(11),b=t(13),h=t(12),O=(t(43),function(e){Object(b.a)(t,e);var c=Object(h.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=c.call(this,e)).state={recipes:[]},n}return Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("".concat("https://cookr-app.herokuapp.com","/recipes")).then((function(e){return e.json()})).then((function(c){return e.setState({recipes:c})}))}},{key:"render",value:function(){return Object(n.jsx)("div",{children:Object(n.jsx)("section",{class:"gallery-block cards-gallery",children:Object(n.jsx)("div",{className:"container",children:Object(n.jsx)("div",{className:"row",children:this.state.recipes.map((function(e,c){return Object(n.jsx)("div",{className:"col-md-6 col-lg-3",children:Object(n.jsx)(l.b,{to:"/article/".concat(e.name),children:Object(n.jsxs)("div",{className:"card border-0 transform-on-hover",children:[Object(n.jsxs)("a",{className:"lightbox",href:"http://localhost:3001/"+e.imgmain,children:[Object(n.jsx)("p",{className:"tag",children:e.hometag}),Object(n.jsx)("img",{src:"http://localhost:3001/"+e.imgmain,alt:e.name,className:"card-img-top"})]}),Object(n.jsx)("div",{className:"card-body",children:Object(n.jsx)("h6",{children:e.name})})]})},c)})}))})})})})}}]),t}(i.Component)),m=t(17),x=(t(48),t(18)),u=t(27);function p(){var e=Object(m.a)(["\n  animation: 2s ",";\n"]);return p=function(){return e},e}function v(){var e=Object(m.a)(["\n    animation: 2s ",";\n  "]);return v=function(){return e},e}function f(){var e=Object(m.a)(["",""]);return f=function(){return e},e}function g(){var e=Object(m.a)(["",""]);return g=function(){return e},e}function N(){var e=Object(x.b)(g(),u.fadeInDown),c=Object(x.b)(f(),u.slideInUp),t=x.a.div(v(),e),i=x.a.div(p(),c);return Object(n.jsxs)("div",{id:"showcase-container",children:[Object(n.jsx)(t,{children:Object(n.jsx)("h1",{children:"welkom bij cookr"})}),Object(n.jsx)(i,{children:Object(n.jsx)("h2",{children:"Browse tussen mijn favoriete recepten"})})]})}var k=function(e){Object(b.a)(t,e);var c=Object(h.a)(t);function t(){return Object(o.a)(this,t),c.apply(this,arguments)}return Object(d.a)(t,[{key:"render",value:function(){return Object(n.jsx)("div",{children:Object(n.jsxs)("main",{children:[Object(n.jsx)(N,{}),Object(n.jsx)(O,{})]})})}}]),t}(i.Component),w=t(35),y=(t(126),function(){return Object(n.jsx)("div",{className:"skills-container",children:Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)("div",{className:"row",children:[Object(n.jsxs)("div",{className:"col-md-4",children:[Object(n.jsx)("h1",{className:"designer",children:"60%"}),Object(n.jsx)("h2",{children:"Grafisch Vormgever"}),Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:"InDesign"}),Object(n.jsx)("li",{children:"Illustrator"}),Object(n.jsx)("li",{children:"Photoshop"}),Object(n.jsx)("li",{children:"After Effects"}),Object(n.jsx)("li",{children:"XD"})]})]}),Object(n.jsx)("div",{className:"col-md-4",children:Object(n.jsx)(w.PieChart,{className:"pieChart",data:[{title:"One",value:40,color:"#fbbe88"},{title:"Two",value:60,color:"#569E78"}],animate:!0,lineWidth:60})}),Object(n.jsxs)("div",{className:"col-md-4",children:[Object(n.jsx)("h1",{className:"webdesigner",children:"40%"}),Object(n.jsx)("h2",{children:"Front-End Developer"}),Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:"HTML5"}),Object(n.jsx)("li",{children:"CSS3"}),Object(n.jsx)("li",{children:"Bootstrap"}),Object(n.jsx)("li",{children:"Javascript"}),Object(n.jsx)("li",{children:"React"})]})]})]})})})}),C=(t(127),t.p+"static/media/Profile-Pic.769d4061.png"),I=function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{className:"about-container",children:Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)("div",{className:"row",children:[Object(n.jsxs)("div",{className:"colAbout col-md-6",children:[Object(n.jsx)("h1",{children:"Over Mezelf"}),Object(n.jsx)("h2",{children:"Ik ben een Grafisch Vormgever en Front-End Developer uit Boortmeerbeek."}),Object(n.jsx)("p",{children:"Zowel in het dagelijkse leven als op professioneel vlak streef ik naar perfectie. Mijn doel is elke dag bij te leren om mijn kennis en vaardigheden te blijven uitbreiden. Creativiteit is mijn ding. Mijn passie voor graphic design en webdesign hebben me gebracht tot waar ik nu sta. In mijn vrije tijd probeer ik mijn sportiviteit aan te wakkeren, kijk ik wel eens een goede film en sta ik graag achter het fornuis."}),Object(n.jsxs)("p",{children:["Verdere contactgevens en mijn persoonlijke portfolio website vindt u op mijn"," ",Object(n.jsx)(l.b,{className:"link",to:"/contact",children:Object(n.jsx)("span",{children:"contact-pagina"})}),"."]})]}),Object(n.jsx)("div",{className:"colAbout col-md-6",children:Object(n.jsx)("img",{src:C,alt:"Profielfoto Yannick"})})]})})}),Object(n.jsx)(y,{})]})},D=(t(128),t.p+"static/media/facebook-brands.29d927ae.svg"),S=t.p+"static/media/linkedin-in-brands.782cf906.svg",E=t.p+"static/media/instagram-brands.7fcb61f1.svg",B=t.p+"static/media/github-brands.44a44ef3.svg",M=t.p+"static/media/phone-alt-solid.a242da1f.svg",P=t.p+"static/media/laptop-solid.b464c86f.svg",A=function(){return Object(n.jsx)("div",{children:Object(n.jsx)("div",{className:"contact-container",children:Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)("div",{className:"row",children:[Object(n.jsxs)("div",{className:"col-md-6",children:[Object(n.jsx)("h1",{children:"bel me, mail me"}),Object(n.jsx)("h2",{children:"Of laat gewoon een berichtje achter! Your choice."}),Object(n.jsxs)("ul",{children:[Object(n.jsxs)("li",{children:[Object(n.jsx)("img",{src:D}),"www.facebook.com/yannick.dedecker"]}),Object(n.jsxs)("li",{children:[Object(n.jsx)("img",{src:S}),"www.linkedin.com/in/yannickdedecker"]}),Object(n.jsxs)("li",{children:[Object(n.jsx)("img",{src:E}),"www.instagram.com/iamyannickdd"]}),Object(n.jsxs)("li",{children:[Object(n.jsx)("img",{src:B}),"github.com/YannickDeDecker"]}),Object(n.jsxs)("li",{children:[Object(n.jsx)("img",{src:M}),"0487 14 09 39"]}),Object(n.jsxs)("li",{children:[Object(n.jsx)("img",{src:P}),"www.facebook.com/yannick.dedecker"]})]})]}),Object(n.jsx)("div",{className:"col-md-6",children:Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{for:"",children:"Voornaam:"}),Object(n.jsx)("input",{type:"text",name:"",id:"",className:"form-control",placeholder:"","aria-describedby":"helpId"}),Object(n.jsx)("label",{for:"",children:"Achternaam:"}),Object(n.jsx)("input",{type:"text",name:"",id:"",className:"form-control",placeholder:"","aria-describedby":"helpId"}),Object(n.jsx)("label",{for:"",children:"Bedrijf:"}),Object(n.jsx)("input",{type:"text",name:"",id:"",className:"form-control",placeholder:"","aria-describedby":"helpId"}),Object(n.jsx)("label",{for:"",children:"E-mail:"}),Object(n.jsx)("input",{type:"text",name:"",id:"",className:"form-control",placeholder:"","aria-describedby":"helpId"}),Object(n.jsx)("label",{for:"",children:"GSM:"}),Object(n.jsx)("input",{type:"text",name:"",id:"",className:"form-control",placeholder:"","aria-describedby":"helpId"}),Object(n.jsx)("label",{for:"",children:"Bericht:"}),Object(n.jsx)("textarea",{name:"",id:""}),Object(n.jsx)("button",{type:"submit",children:"Verzenden"})]})})]})})})})},V=(t(129),function(e){Object(b.a)(t,e);var c=Object(h.a)(t);function t(){return Object(o.a)(this,t),c.apply(this,arguments)}return Object(d.a)(t,[{key:"render",value:function(){return Object(n.jsx)("div",{children:Object(n.jsx)("form",{className:"d-flex",children:Object(n.jsx)("input",{id:"search-bar",type:"search",placeholder:"Zoek in recepten","aria-label":"Search"})})})}}]),t}(i.Component)),z=(t(130),t.p+"static/media/logo.abc82bd7.png"),R=function(e){Object(b.a)(t,e);var c=Object(h.a)(t);function t(){return Object(o.a)(this,t),c.apply(this,arguments)}return Object(d.a)(t,[{key:"render",value:function(){return Object(n.jsx)("div",{children:Object(n.jsx)(l.b,{className:"navbar-brand",to:"/",children:Object(n.jsx)("img",{src:z,alt:"Logo"})})})}}]),t}(i.Component);t(131);function T(){return Object(n.jsx)("div",{children:Object(n.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark mt-5",children:Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)(R,{}),Object(n.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(n.jsx)("span",{className:"navbar-toggler-icon"})}),Object(n.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(n.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)(l.c,{exact:!0,eventKey:"1",activeClassName:"active",className:"nav-link",to:"/",children:"Recepten"})}),Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)(l.c,{eventKey:"2",activeClassName:"active",className:"nav-link",to:"/about",children:"Over mij"})}),Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)(l.c,{eventKey:"3",activeClassName:"active",className:"nav-link",to:"/contact",children:"Contact"})})]}),Object(n.jsx)(V,{})]})]})})})}t(132);var Y=function(){return Object(n.jsx)("div",{className:"footer-container",children:Object(n.jsxs)("footer",{className:"container",children:[Object(n.jsxs)("p",{children:["Deze website is gemaakt in het kader van de opleiding ",Object(n.jsx)("span",{children:"Front-End Development"})," van ",Object(n.jsx)("span",{children:"INTEC Brussel"}),"."]}),Object(n.jsxs)("p",{children:["Ontworpen met ",Object(n.jsx)("span",{children:"React en Bootstrap \xa9 Yannick De Decker"})," | 2021"]})]})})},F=t(28),G=t(21),J=t(22);t(135);var K=function(){var e=Object(i.useState)(!0),c=Object(F.a)(e,2),t=c[0],a=c[1],s=Object(i.useState)(),r=Object(F.a)(s,2),l=r[0],o=r[1],d=Object(n.jsx)(G.a,{className:"icon",icon:J.b}),b=Object(n.jsx)(G.a,{className:"icon",icon:J.c}),h=Object(n.jsx)(G.a,{className:"icon",icon:J.a}),O=Object(j.e)().name;return Object(i.useEffect)((function(){fetch("".concat("https://cookr-app.herokuapp.com","/recipes/").concat(O)).then((function(e){return e.json()})).then((function(e){o(e),a(!1)}))}),[]),t?Object(n.jsx)("span",{children:"Loading"}):Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{id:"showcase-recipe-article",style:{backgroundImage:"url(http://localhost:3001/".concat(l.imgmain,")"),backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center"},children:Object(n.jsxs)("div",{className:"content",children:[Object(n.jsx)("h1",{children:l.name}),Object(n.jsx)("ul",{id:"tag-list",children:l.tags.map((function(e,c){return Object(n.jsxs)("li",{children:[" ",e]},c)}))})]})}),Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)("div",{id:"main-recipe-container",className:"row",children:[Object(n.jsx)("div",{id:"col-left",className:"col-md-3",children:Object(n.jsxs)("div",{id:"white-background",children:[Object(n.jsxs)("div",{id:"default-list",className:"d-flex",children:[Object(n.jsxs)("p",{children:[b," ",l.time]}),Object(n.jsxs)("p",{children:[h," ",l.difficulty]})]}),Object(n.jsx)("h3",{children:"Ingredi\xebnten"}),Object(n.jsx)("ul",{id:"ingredients-list",children:l.ingredients.map((function(e,c){return Object(n.jsxs)("li",{children:[" ",d," ",e," "]},c)}))})]})}),Object(n.jsxs)("div",{id:"col-right",className:"col-md-9",children:[Object(n.jsx)("h3",{children:"Instructies"}),Object(n.jsx)("ul",{id:"instructions-list",children:l.instructions.map((function(e,c){return Object(n.jsxs)("li",{children:[" ",Object(n.jsx)("span",{children:c+1})," ",e," "]},c)}))})]})]})})]})};var L=function(){return Object(n.jsx)("div",{className:"App",children:Object(n.jsxs)(l.a,{children:[Object(n.jsx)("div",{children:Object(n.jsx)(T,{})}),Object(n.jsx)(j.a,{exact:!0,path:"/",component:k}),Object(n.jsx)(j.a,{path:"/about",component:I}),Object(n.jsx)(j.a,{path:"/contact",component:A}),Object(n.jsx)(j.a,{path:"/article/:name",component:K}),Object(n.jsx)("div",{children:Object(n.jsx)(Y,{})})]})})};r.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(L,{})}),document.getElementById("root"))},42:function(e,c,t){},43:function(e,c,t){},48:function(e,c,t){}},[[136,1,2]]]);
//# sourceMappingURL=main.ef53dc07.chunk.js.map