(this.webpackJsonpcontactmanager=this.webpackJsonpcontactmanager||[]).push([[0],{34:function(e,a,t){e.exports=t(64)},63:function(e,a,t){},64:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(30),o=t.n(c),l=t(13),s=t(1),i=t(7),m=t(8),u=t(9),p=t(10),d=t(2),h=t.n(d),b=t(11),f=t(33),v=t(15),E=t(12),g=t.n(E),y=r.a.createContext(),N=function(e,a){switch(a.type){case"DELETE_CONTACT":return Object(v.a)({},e,{contacts:e.contacts.filter((function(e){return e.id!==a.payload}))});case"UPDATE_CONTACT":return Object(v.a)({},e,{contacts:e.contacts.map((function(e){return e.id===a.payload.id?e=a.payload:e}))});case"ADD_CONTACT":return Object(v.a)({},e,{contacts:[a.payload].concat(Object(f.a)(e.contacts))});default:return e}},C=function(e){Object(p.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={contacts:[],dispatch:function(a){return e.setState((function(e){return N(e,a)}))}},e}return Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=Object(b.a)(h.a.mark((function e(){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get("https://jsonplaceholder.typicode.com/users");case 2:a=e.sent,this.setState({contacts:a.data});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(y.Provider,{value:this.state},this.props.children)}}]),t}(n.Component),O=y.Consumer,j=function(e){Object(p.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={showContactInfo:!1},e.onDeleteClick=function(){var e=Object(b.a)(h.a.mark((function e(a,t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.delete("https://jsonplaceholder.typicode.com/users/".concat(a));case 2:t({type:"DELETE_CONTACT",payload:a});case 3:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}(),e}return Object(m.a)(t,[{key:"render",value:function(){var e=this,a=this.props.contact,t=a.id,n=a.name,c=a.email,o=a.phone,s=this.state.showContactInfo;return r.a.createElement(O,null,(function(a){var i=a.dispatch;return r.a.createElement("div",{className:"card card-body mb-3"},r.a.createElement("h4",null,n," ",r.a.createElement("i",{onClick:function(){e.setState({showContactInfo:!s})},className:"fas fa-sort-down",style:{cursor:"pointer"}}),r.a.createElement("i",{className:"fas fa-times",style:{cursor:"pointer",float:"right",color:"red"},onClick:e.onDeleteClick.bind(e,t,i)}),r.a.createElement(l.b,{to:"contact/edit/".concat(t)},r.a.createElement("i",{className:"fas fa-pencil-alt",style:{cursor:"pointer",float:"right",color:"black",marginRight:"1rem"}}))),s?r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item"},"Email: ",c),r.a.createElement("li",{className:"list-group-item"},"Phone: ",o)):null)}))}}]),t}(n.Component),k=function(e){Object(p.a)(t,e);var a=Object(u.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(O,null,(function(e){var a=e.contacts;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"display-4 mb-2"},r.a.createElement("span",{className:"text-danger"},"Contact")," List"),a.map((function(e){return r.a.createElement(j,{key:e.id,contact:e})})))}))}}]),t}(n.Component),x=function(e){var a=e.branding;return r.a.createElement("div",null,r.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0"},r.a.createElement("div",{className:"container"},r.a.createElement("a",{href:"/",className:"navbar-brand"},a),r.a.createElement("ul",{className:"navbar-nav ml-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(l.b,{to:"/",className:"nav-link"},r.a.createElement("i",{className:"fas fa-home"})," Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(l.b,{to:"/contact/add",className:"nav-link"},r.a.createElement("i",{className:"fas fa-plus"})," Add")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(l.b,{to:"/about",className:"nav-link"},r.a.createElement("i",{className:"fas fa-question"})," About"))))))};x.defaultProps={branding:"My App"};var w=x;function S(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"display-4"},"About Contact Manager"),r.a.createElement("p",{className:"lead"},"Simple app to manage contact"),r.a.createElement("p",{className:"text-secondary"},"Version 1.0.0"))}function A(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"display-4"},r.a.createElement("span",{className:"text-danger"},"404")," Page Not Found"),r.a.createElement("p",{className:"lead"},"Sorry, that page does not exist"))}var T=t(14),D=t(4),q=t.n(D),P=t(32),R=t.n(P),M=function(e){var a=e.label,t=e.name,n=e.value,c=e.placeholder,o=e.type,l=e.onChange,s=e.error;return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:t},a),r.a.createElement("input",{type:o,name:t,className:R()("form-control form-control-lg",{"is-invalid":s}),placeholder:c,value:n,onChange:l}),s&&r.a.createElement("div",{className:"invalid-feedback"},s))};M.prototype={name:q.a.string.isRequired,placeholder:q.a.string.isRequired,value:q.a.string.isRequired,type:q.a.string.isRequired,label:q.a.string.isRequired,onChange:q.a.func.isRequired,error:q.a.string},M.defaultProps={type:"text"};var _=M,I=function(e){Object(p.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={name:"",email:"",phone:"",errors:""},e.onChange=function(a){return e.setState(Object(T.a)({},a.target.name,a.target.value))},e.onSubmit=function(){var a=Object(b.a)(h.a.mark((function a(t,n){var r,c,o,l,s,i;return h.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(n.preventDefault(),r=e.state,c=r.name,o=r.email,l=r.phone,""!==c){a.next=5;break}return e.setState({errors:{name:"Name is required"}}),a.abrupt("return");case 5:if(""!==o){a.next=8;break}return e.setState({errors:{email:"Email is required"}}),a.abrupt("return");case 8:if(""!==l){a.next=11;break}return e.setState({errors:{phone:"Phone is required"}}),a.abrupt("return");case 11:return s={name:c,email:o,phone:l},a.next=14,g.a.post("https://jsonplaceholder.typicode.com/users",s);case 14:i=a.sent,t({type:"ADD_CONTACT",payload:i.data}),e.setState({name:"",email:"",phone:"",errors:{}}),e.props.history.push("/");case 18:case"end":return a.stop()}}),a)})));return function(e,t){return a.apply(this,arguments)}}(),e}return Object(m.a)(t,[{key:"render",value:function(){var e=this,a=this.state,t=a.name,n=a.email,c=a.phone,o=a.errors;return r.a.createElement(O,null,(function(a){var l=a.dispatch;return r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-header"},"Add Contact"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:e.onSubmit.bind(e,l)},r.a.createElement(_,{label:"Name",name:"name",placeholder:"Enter Name",value:t,onChange:e.onChange,error:o.name}),r.a.createElement(_,{label:"Email",name:"email",type:"email",placeholder:"Enter Email",value:n,onChange:e.onChange,error:o.email}),r.a.createElement(_,{label:"Phone",name:"phone",placeholder:"Enter Phone Number",value:c,onChange:e.onChange,error:o.phone}),r.a.createElement("input",{type:"submit",value:"Add Contact",className:"btn btn-light btn-block"}))))}))}}]),t}(n.Component),F=function(e){Object(p.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={name:"",email:"",phone:"",errors:""},e.onChange=function(a){return e.setState(Object(T.a)({},a.target.name,a.target.value))},e.onSubmit=function(){var a=Object(b.a)(h.a.mark((function a(t,n){var r,c,o,l,s,i,m;return h.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(n.preventDefault(),r=e.state,c=r.name,o=r.email,l=r.phone,""!==c){a.next=5;break}return e.setState({errors:{name:"Name is required"}}),a.abrupt("return");case 5:if(""!==o){a.next=8;break}return e.setState({errors:{email:"Email is required"}}),a.abrupt("return");case 8:if(""!==l){a.next=11;break}return e.setState({errors:{phone:"Phone is required"}}),a.abrupt("return");case 11:return s={name:c,email:o,phone:l},i=e.props.match.params.id,a.next=15,g.a.put("https://jsonplaceholder.typicode.com/users/".concat(i),s);case 15:m=a.sent,t({type:"UPDATE_CONTACT",payload:m.data}),e.setState({name:"",email:"",phone:"",errors:{}}),e.props.history.push("/");case 19:case"end":return a.stop()}}),a)})));return function(e,t){return a.apply(this,arguments)}}(),e}return Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=Object(b.a)(h.a.mark((function e(){var a,t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=this.props.match.params.id,e.next=3,g.a.get("https://jsonplaceholder.typicode.com/users/".concat(a));case 3:t=e.sent,this.setState({name:t.data.name,email:t.data.email,phone:t.data.phone});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,a=this.state,t=a.name,n=a.email,c=a.phone,o=a.errors;return r.a.createElement(O,null,(function(a){var l=a.dispatch;return r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-header"},"Edit Contact"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:e.onSubmit.bind(e,l)},r.a.createElement(_,{label:"Name",name:"name",placeholder:"Enter Name",value:t,onChange:e.onChange,error:o.name}),r.a.createElement(_,{label:"Email",name:"email",type:"email",placeholder:"Enter Email",value:n,onChange:e.onChange,error:o.email}),r.a.createElement(_,{label:"Phone",name:"phone",placeholder:"Enter Phone Number",value:c,onChange:e.onChange,error:o.phone}),r.a.createElement("input",{type:"submit",value:"Update Contact",className:"btn btn-light btn-block"}))))}))}}]),t}(n.Component);t(62),t(63);var L=function(){return r.a.createElement(C,null,r.a.createElement(l.a,{basename:"/contact-manager"},r.a.createElement("div",{className:"App"},r.a.createElement(w,{branding:"Contact Manager"}),r.a.createElement("div",{className:"container"},r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"/",component:k}),r.a.createElement(s.a,{exact:!0,path:"/contact/add",component:I}),r.a.createElement(s.a,{exact:!0,path:"/contact/edit/:id",component:F}),r.a.createElement(s.a,{exact:!0,path:"/about",component:S}),r.a.createElement(s.a,{component:A}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[34,1,2]]]);
//# sourceMappingURL=main.637cca28.chunk.js.map