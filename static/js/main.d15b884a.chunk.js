(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{34:function(e,t,n){e.exports=n(48)},48:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(13),c=n.n(o),i=n(3),u=n(4),l=n(6),s=n(5),d=n(7),f=n(51),m=n(53),b=n(50),p=n(49),v=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Home page"),r.a.createElement("h1",null,"Link to another page"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(p.a,{to:"/todos"},"Todo list"))))}}]),t}(a.Component),h=n(18),j=n.n(h),O=n(24),g=n(28),E=n(8),y=n(9);function x(){var e=Object(E.a)(["\n  border: 1px solid ",";\n  border-left: none;\n  background-color: #fffa;\n  outline: none;\n  cursor: pointer;\n"]);return x=function(){return e},e}function k(){var e=Object(E.a)(["\n  margin: 10px 0;\n  display: flex;\n  background-color: ",";\n"]);return k=function(){return e},e}function C(){var e=Object(E.a)(["\n  padding: 10px;\n  border: 1px solid ",";\n  border-right: 0;\n  background: none;\n  flex: 1;\n  outline: none;\n"]);return C=function(){return e},e}var w=y.a.input(C(),"#e8e8e8"),I=y.a.div(k(),"#f1f1f1"),T=y.a.button(x(),"#e8e8e8"),S=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.value,n=e.onClear,a=e.onChange,o=e.onEnter;return r.a.createElement(I,null,r.a.createElement(w,{value:t,onChange:a,onKeyDown:o}),r.a.createElement(T,{onClick:n},"clear"))}}]),t}(a.Component);S.defaultProps={value:"",onClear:function(){},onChange:function(){}};var A=S;function D(){var e=Object(E.a)([""]);return D=function(){return e},e}function R(){var e=Object(E.a)(["\n  display: flex;\n  flex: 1;\n  align-self: center;\n"]);return R=function(){return e},e}function B(){var e=Object(E.a)(["\n  padding: 20px 20px;\n  border: 1px solid #c8c8c8;\n  background-color: #fcfcfc;\n  display: flex;\n"]);return B=function(){return e},e}var M=y.a.div(B()),P=y.a.span(R()),z=y.a.div(D()),J=n(21),Y=n(23);function H(){var e=Object(E.a)(["\n  margin: 10px;\n  font-size: 1.2em;\n"]);return H=function(){return e},e}function K(){var e=Object(E.a)(["\n  margin: 10px;\n  font-size: 1.2em;\n"]);return K=function(){return e},e}function L(){var e=Object(E.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return L=function(){return e},e}var U=y.a.div(L()),q=Object(y.a)(J.a)(K()),F=Object(y.a)(J.a)(H()),G=function(e){return r.a.createElement(q,Object.assign({icon:Y.a},e))},N=function(e){return r.a.createElement(F,Object.assign({icon:Y.b},e))},Q=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.onEdit,n=e.onRemove,a=e.editable,o=e.removeable;return r.a.createElement(U,null,a&&r.a.createElement(G,{onClick:t}),o&&r.a.createElement(N,{onClick:n}))}}]),t}(r.a.Component),V=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(s.a)(t).call(this,e))).componentDidUpdate=function(e){if(e.todo!==n.props.todo){var t=n.props.todo;n.setState({todo:t})}},n.onRemoveItem=function(){var e=n.state.todo;(0,n.props.handleRemove)(e.id)},n.onEditItem=function(){var e=n.state.todo;(0,n.props.handleEdit)(e.id)},n.state={todo:e.todo||{}},n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state.todo;return r.a.createElement(M,null,r.a.createElement(P,null,e.id,": ",e.message),r.a.createElement(z,null,r.a.createElement(Q,{editable:!0,onEdit:this.onEditItem,removeable:!0,onRemove:this.onRemoveItem})))}}]),t}(a.Component);V.defaultProps={todo:{id:0,message:""}};var W=V;function X(){var e=Object(E.a)([""]);return X=function(){return e},e}var Z=y.a.div(X());function $(){var e=Object(E.a)(["\n  border: 1px solid ",";\n  border-left: none;\n  background-color: #fffa;\n  outline: none;\n  cursor: pointer;\n"]);return $=function(){return e},e}var _=y.a.button($(),"#e8e8e8"),ee=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.onDeleteAll;return r.a.createElement(_,{onClick:e},"Delete All item")}}]),t}(a.Component);ee.defaultProps={onDeleteAll:function(){}};var te=ee,ne=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(s.a)(t).call(this,e))).deleteAllItem=function(){window.confirm("You want delete all Item !!")&&n.setState({todos:[]})},n.clearMessage=function(){n.setState({message:""})},n.handleMessage=function(e){var t=e.target.value;n.setState({message:t})},n.onPushTodo=function(){var e=Object(g.a)(j.a.mark(function e(t){var a;return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if("Enter"!==t.key){e.next=7;break}if(""!==(a=n.state.message).trim()){e.next=4;break}return e.abrupt("return");case 4:return e.next=6,n.setState(function(e){var t=e.todos;return{todos:[].concat(Object(O.a)(t),[{id:t.length,message:a}])}});case 6:n.clearMessage();case 7:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),n.removeById=function(e){if(window.confirm("You want delete this Item !!")){var t=n.state.todos.filter(function(t){return t.id!==e});n.setState({todos:t})}},n.editById=function(e){var t=n.state.todos,a=null,r=t.find(function(t,n){return t.id===e&&(a=n,!0)}),o=prompt("Edit this todo",r.message);r.message=o;var c=Object(O.a)(t);c[a]=r,n.setState({todos:c})},n.state={message:e.defaultTodoText,todos:[]},n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state,t=e.message,n=e.todos;return r.a.createElement(Z,null,r.a.createElement(te,{onDeleteAll:this.deleteAllItem}),r.a.createElement(A,{value:t,onClear:this.clearMessage,onChange:this.handleMessage,onEnter:this.onPushTodo}),function(e,t,n){return e.map(function(e,a){return r.a.createElement(W,{key:a,todo:e,handleEdit:t,handleRemove:n})})}(n,this.editById,this.removeById))}}]),t}(a.Component),ae=n(52),re=function(e){function t(e){var n;Object(i.a)(this,t),n=Object(l.a)(this,Object(s.a)(t).call(this,e)),console.log("todolist props",e);var a=e.match.params.message,r=void 0===a?"":a;return n.state={defaultTodoText:r},n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state.defaultTodoText;return r.a.createElement(ne,{defaultTodoText:e})}}]),t}(a.Component),oe=Object(ae.a)(re),ce=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(f.a,null,r.a.createElement(m.a,null,r.a.createElement(b.a,{exact:!0,path:"/",component:function(){return r.a.createElement(v,null)}}),r.a.createElement(b.a,{path:"/todos/:message?",component:function(){return r.a.createElement(oe,null)}})))}}]),t}(a.Component),ie=document.getElementById("root");c.a.render(r.a.createElement(ce,null),ie)}},[[34,2,1]]]);
//# sourceMappingURL=main.d15b884a.chunk.js.map