(this["webpackJsonpnithinp300.github.io"]=this["webpackJsonpnithinp300.github.io"]||[]).push([[0],{16:function(e,t,s){},19:function(e,t,s){},23:function(e,t,s){"use strict";s.r(t);var c=s(1),a=s(10),i=s.n(a),n=(s(16),s(2)),r=s(3),l=s(5),o=s(4),j=s(9),d=s(11),h=s.n(d),m=(s(19),s(0)),b=function(e){Object(l.a)(s,e);var t=Object(o.a)(s);function s(){return Object(n.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.name,t=this.props.data.occupation,s=(this.props.data.description,this.props.data.address.city,this.props.data.social.map((function(e){return Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:e.url,children:Object(m.jsx)("i",{className:e.className})})},e.name)})));return Object(m.jsxs)("header",{id:"home",children:[Object(m.jsxs)("nav",{id:"nav-wrap",children:[Object(m.jsx)("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation",children:"Show navigation"}),Object(m.jsx)("a",{className:"mobile-btn",href:"#home",title:"Hide navigation",children:"Hide navigation"}),Object(m.jsxs)("ul",{id:"nav",className:"nav",children:[Object(m.jsx)("li",{className:"current",children:Object(m.jsx)("a",{className:"smoothscroll",href:"#home",children:"Home"})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{className:"smoothscroll",href:"#about",children:"About"})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{className:"smoothscroll",href:"#resume",children:"Resume"})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{className:"smoothscroll",href:"#portfolio",children:"Portfolio"})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{className:"smoothscroll",href:"#contact",children:"Contact"})})]})]}),Object(m.jsx)("div",{className:"row banner",children:Object(m.jsxs)("div",{className:"banner-text",children:[Object(m.jsxs)("h1",{className:"responsive-headline",children:["Hi, I'm ",e,"."]}),Object(m.jsx)("h2",{children:t}),Object(m.jsx)("hr",{}),Object(m.jsx)("ul",{className:"social",children:s})]})}),Object(m.jsx)("p",{className:"scrolldown",children:Object(m.jsx)("a",{className:"smoothscroll",href:"#about",children:Object(m.jsx)("i",{className:"icon-down-circle"})})})]})}}]),s}(c.Component),u=function(e){Object(l.a)(s,e);var t=Object(o.a)(s);function s(){return Object(n.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.social.map((function(e){return Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:e.url,children:Object(m.jsx)("i",{className:e.className})})},e.name)}));return Object(m.jsx)("footer",{children:Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"twelve columns",children:Object(m.jsx)("ul",{className:"social-links",children:e})}),Object(m.jsx)("div",{id:"go-top",children:Object(m.jsx)("a",{className:"smoothscroll",title:"Back to Top",href:"#home",children:Object(m.jsx)("i",{className:"icon-up-open"})})})]})})}}]),s}(c.Component),p=function(e){Object(l.a)(s,e);var t=Object(o.a)(s);function s(){return Object(n.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){if(this.props.data){this.props.data.name;var e="images/"+this.props.data.image,t=this.props.data.bio;this.props.data.address.street,this.props.data.address.city,this.props.data.address.state,this.props.data.address.zip,this.props.data.phone,this.props.data.email,this.props.data.resumedownload}return Object(m.jsx)("section",{id:"about",children:Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"three columns",children:Object(m.jsx)("img",{className:"profile-pic",src:e,alt:"Tim Baker Profile Pic"})}),Object(m.jsxs)("div",{className:"nine columns main-col",children:[Object(m.jsx)("h2",{children:"About Me"}),Object(m.jsx)("p",{children:t})]})]})})}}]),s}(c.Component),O=function(e){Object(l.a)(s,e);var t=Object(o.a)(s);function s(){return Object(n.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){if(this.props.data){this.props.data.skillmessage;var e=this.props.data.education.map((function(e){return Object(m.jsxs)("div",{children:[Object(m.jsx)("h3",{children:e.school}),Object(m.jsxs)("p",{className:"info",children:[e.degree," ",Object(m.jsx)("span",{children:"\u2022"}),Object(m.jsx)("em",{className:"date",children:e.graduated})]}),Object(m.jsx)("p",{children:e.description})]},e.school)})),t=this.props.data.work.map((function(e){return Object(m.jsxs)("div",{children:[Object(m.jsx)("h3",{children:e.company}),Object(m.jsxs)("p",{className:"info",children:[e.title,Object(m.jsx)("span",{children:"\u2022"})," ",Object(m.jsx)("em",{className:"date",children:e.years})]}),Object(m.jsx)("p",{children:e.description})]},e.company)}));this.props.data.skills.map((function(e){var t="bar-expand "+e.name.toLowerCase();return Object(m.jsxs)("li",{children:[Object(m.jsx)("span",{style:{width:e.level},className:t}),Object(m.jsx)("em",{children:e.name})]},e.name)}))}return Object(m.jsxs)("section",{id:"resume",children:[Object(m.jsxs)("div",{className:"row education",children:[Object(m.jsx)("div",{className:"three columns header-col",children:Object(m.jsx)("h1",{children:Object(m.jsx)("span",{children:"Education"})})}),Object(m.jsx)("div",{className:"nine columns main-col",children:Object(m.jsx)("div",{className:"row item",children:Object(m.jsx)("div",{className:"twelve columns",children:e})})})]}),Object(m.jsxs)("div",{className:"row work",children:[Object(m.jsx)("div",{className:"three columns header-col",children:Object(m.jsx)("h1",{children:Object(m.jsx)("span",{children:"Experience"})})}),Object(m.jsx)("div",{className:"nine columns main-col",children:t})]}),Object(m.jsxs)("div",{className:"row skill",children:[Object(m.jsx)("div",{className:"three columns header-col",children:Object(m.jsx)("h1",{children:Object(m.jsx)("span",{children:"Skills"})})}),Object(m.jsx)("div",{className:"nine columns main-col",children:Object(m.jsxs)("ul",{children:[Object(m.jsxs)("li",{children:[Object(m.jsx)("b",{children:"Programming:"})," JavaScript (ES6), HTML5, CSS3, SASS/SCSS, LESS, TypeScript, Python"]}),Object(m.jsxs)("li",{children:[Object(m.jsx)("b",{children:"Frameworks:"})," Bootstrap, Jest, Selenium, Express.js, Flask"]}),Object(m.jsxs)("li",{children:[Object(m.jsx)("b",{children:"Libraries/APIs:"})," React, Redux, jQuery, React Testing Library, Node.js, REST APIs"]}),Object(m.jsxs)("li",{children:[Object(m.jsx)("b",{children:"Tools:"})," Git, Webpack, NPM, Babel, Chrome DevTools"]}),Object(m.jsxs)("li",{children:[Object(m.jsx)("b",{children:"Paradigms:"})," Agile Software Development, Extreme Programming, Test-driven Development"]}),Object(m.jsxs)("li",{children:[Object(m.jsx)("b",{children:"Platforms:"})," Amazon Web Services (AWS), Docker, macOS (UNIX)"]})]})})]})]})}}]),s}(c.Component),x=s(7),v=s.n(x);Object(x.init)("user_06cBSh20vi7B5WvHuo7Sq");var f=function(e){Object(l.a)(s,e);var t=Object(o.a)(s);function s(){return Object(n.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"sendEmail",value:function(e){e.preventDefault(),v.a.sendForm("service_ga9pqre","template_chsccxa",e.target).then((function(e){document.getElementById("message-success").style.display="block"}),(function(e){document.getElementById("message-warning").style.display="block"}))}},{key:"render",value:function(){if(this.props.data){this.props.data.name,this.props.data.address.street,this.props.data.address.city,this.props.data.address.state,this.props.data.address.zip,this.props.data.phone,this.props.data.email;var e=this.props.data.contactmessage}return Object(m.jsxs)("section",{id:"contact",children:[Object(m.jsxs)("div",{className:"row section-head",children:[Object(m.jsx)("div",{className:"two columns header-col",children:Object(m.jsx)("h1",{children:Object(m.jsx)("span",{children:"Get In Touch."})})}),Object(m.jsx)("div",{className:"ten columns",children:Object(m.jsx)("p",{className:"lead",children:e})})]}),Object(m.jsx)("div",{className:"row",children:Object(m.jsxs)("div",{className:"eight columns",children:[Object(m.jsx)("form",{action:"",method:"post",id:"contactForm",name:"contactForm",onSubmit:this.sendEmail,children:Object(m.jsxs)("fieldset",{children:[Object(m.jsxs)("div",{children:[Object(m.jsxs)("label",{htmlFor:"contactName",children:["Name ",Object(m.jsx)("span",{className:"required",children:"*"})]}),Object(m.jsx)("input",{type:"text",defaultValue:"",size:"35",id:"contactName",name:"contactName",onChange:this.handleChange})]}),Object(m.jsxs)("div",{children:[Object(m.jsxs)("label",{htmlFor:"contactEmail",children:["Email ",Object(m.jsx)("span",{className:"required",children:"*"})]}),Object(m.jsx)("input",{type:"text",defaultValue:"",size:"35",id:"contactEmail",name:"contactEmail",onChange:this.handleChange})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("label",{htmlFor:"contactSubject",children:"Subject"}),Object(m.jsx)("input",{type:"text",defaultValue:"",size:"35",id:"contactSubject",name:"contactSubject",onChange:this.handleChange})]}),Object(m.jsxs)("div",{children:[Object(m.jsxs)("label",{htmlFor:"contactMessage",children:["Message ",Object(m.jsx)("span",{className:"required",children:"*"})]}),Object(m.jsx)("textarea",{cols:"50",rows:"15",id:"contactMessage",name:"contactMessage"})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("button",{className:"submit",type:"submit",value:"Send",children:"Submit"}),Object(m.jsx)("span",{id:"image-loader",children:Object(m.jsx)("img",{alt:"",src:"images/loader.gif"})})]})]})}),Object(m.jsx)("div",{id:"message-warning",children:"Error sending message"}),Object(m.jsxs)("div",{id:"message-success",children:[Object(m.jsx)("i",{className:"fa fa-check"}),"Your message was sent, thank you!",Object(m.jsx)("br",{})]})]})})]})}}]),s}(c.Component),g=(c.Component,function(e){Object(l.a)(s,e);var t=Object(o.a)(s);function s(){return Object(n.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.projects.map((function(e){var t="images/portfolio/"+e.image;return Object(m.jsx)("div",{className:"columns portfolio-item",children:Object(m.jsx)("div",{className:"item-wrap",children:Object(m.jsxs)("a",{href:e.url,title:e.title,children:[Object(m.jsx)("img",{alt:e.title,src:t}),Object(m.jsx)("div",{className:"overlay",children:Object(m.jsxs)("div",{className:"portfolio-item-meta",children:[Object(m.jsx)("h5",{children:e.title}),Object(m.jsx)("p",{children:e.category})]})}),Object(m.jsx)("div",{className:"link-icon",children:Object(m.jsx)("i",{className:"fa fa-link"})})]})})},e.title)}));return Object(m.jsx)("section",{id:"portfolio",children:Object(m.jsx)("div",{className:"row",children:Object(m.jsxs)("div",{className:"twelve columns collapsed",children:[Object(m.jsx)("h1",{children:"Check Out Some of My Projects."}),Object(m.jsx)("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf",children:e})]})})})}}]),s}(c.Component)),N=function(e){Object(l.a)(s,e);var t=Object(o.a)(s);function s(e){var c;return Object(n.a)(this,s),(c=t.call(this,e)).state={foo:"bar",resumeData:{}},j.a.initialize("UA-191964771-1"),j.a.pageview(window.location.pathname),c}return Object(r.a)(s,[{key:"getResumeData",value:function(){h.a.ajax({url:"/resumeData.json",dataType:"json",cache:!1,success:function(e){this.setState({resumeData:e})}.bind(this),error:function(e,t,s){console.log(s),alert(s)}})}},{key:"componentDidMount",value:function(){this.getResumeData()}},{key:"render",value:function(){return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)(b,{data:this.state.resumeData.main}),Object(m.jsx)(p,{data:this.state.resumeData.main}),Object(m.jsx)(O,{data:this.state.resumeData.resume}),Object(m.jsx)(g,{data:this.state.resumeData.portfolio}),Object(m.jsx)(f,{data:this.state.resumeData.main}),Object(m.jsx)(u,{data:this.state.resumeData.main})]})}}]),s}(c.Component),w=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function y(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(Object(m.jsx)(N,{}),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");w?function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):y(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):y(e)}))}}()}},[[23,1,2]]]);
//# sourceMappingURL=main.b9511c5b.chunk.js.map