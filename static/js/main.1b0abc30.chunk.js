(window["webpackJsonppaskal-client"]=window["webpackJsonppaskal-client"]||[]).push([[0],{21:function(e,t,n){e.exports=n(48)},26:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(17),i=n.n(o),s=(n(26),n(7)),c=n.n(s),l=n(18),u=n(2),d=n(3),p=n(5),h=n(4),m=n(6),f=n(19),b=n.n(f),v=(n(45),n(20));n(46);var g=function(e){return r.a.createElement("ul",{className:"LineCount-lines"},Array.from(Array(e.lines).keys()).map((function(e){return r.a.createElement("li",{key:e},e+1,".")})))},y=(n(47),function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"CodeField"},r.a.createElement("div",{className:"CodeField-LineCount terminal-font"},r.a.createElement(g,{lines:this.calcRows(this.props.code)})),r.a.createElement("textarea",{id:"rawCode",className:"CodeField-code terminal-font",onChange:this.updateCode.bind(this),onKeyDown:this.indentIfTab.bind(this),rows:Math.max(this.calcRows(this.props.code),5),value:this.props.code,autoCapitalize:"false",autoComplete:"false",autoCorrect:"false",spellCheck:!1}))}},{key:"updateCode",value:function(e){this.props.onCodeUpdate(e.target.value)}},{key:"calcRows",value:function(e){return e.split("").filter((function(e){return"\n"===e})).length+1}},{key:"indentIfTab",value:function(e){var t=e.target,n=t.selectionStart,a=this.props.indentation;if(9===e.keyCode){e.preventDefault(),e.getModifierState("Shift")&&(a=-a);var r=function(e,t,n){var a=0,r=e.substring(0,t),o=e.substring(t,e.length),i=r.length,s=r.lastIndexOf("\n");if(-1!==s&&(i-=s+1,s+1===t&&n<0))return[e,0];var c=i%n;if(n<0){var l=-n-c,u=r.substring(0,Math.max(r.length-l,s+1)),d=r.substring(u.length,r.length).trimEnd();r=u+d,a=-l+d.length}else r+=" ".repeat(n-c),a=n-c;return[r+o,a]}(this.props.code,n,a),o=Object(v.a)(r,2),i=o[0],s=o[1];this.props.onCodeUpdate(i),requestAnimationFrame((function(){return t.setSelectionRange(n+s,n+s)}))}}}]),t}(r.a.PureComponent)),C=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(p.a)(this,Object(h.a)(t).call(this,e))).state={code:'program main;\n// Feel free to edit\nvar x,y : integer;\nfunction GCD(x,y: integer): integer\nbegin\n  if y is 0 then\n    gcd := x;\n  else\n    gcd := GCD(y, x % y);\nend\n\nbegin\n  x := 42;\n  y := 12;\n  printf(\n    "GCD(%d, %d) = %d",\n    x, y, GCD(x,y)\n  )\nend',output:"",error:!1},n}return Object(m.a)(t,e),Object(d.a)(t,[{key:"updateCode",value:function(e){this.setState({code:e})}},{key:"compile",value:function(){var e=Object(l.a)(c.a.mark((function e(){var t,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.post("".concat("https://compile.reuben.moe","/execute"),this.state.code);case 3:t=e.sent,this.setState({output:"> ".concat(t.data),error:!1}),e.next=12;break;case 7:e.prev=7,e.t0=e.catch(0),n="",n=e.t0.response?e.t0.response.data:"Connection to the server refused",this.setState({output:"> ".concat(n),error:!0});case 12:case"end":return e.stop()}}),e,this,[[0,7]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("h1",{className:"h1 center mt-2 mb-2"},"Paskal compiler"),r.a.createElement("p",null,"Fork"," ",r.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"https://github.com/MatiasLyyra/paskal"},"me")," ","on github"),r.a.createElement("h2",{className:"h2 mb-1 mt-1"},"Editor:"),r.a.createElement(y,{code:this.state.code,onCodeUpdate:this.updateCode.bind(this),indentation:2}),r.a.createElement("button",{onClick:this.compile.bind(this),className:"terminal-font mt-1 "},"Run"),r.a.createElement("h2",{className:"h2 mb-1 mt-2"},"Stdout:"),this.state.error?r.a.createElement("code",{className:"terminal-font error"},this.state.output):r.a.createElement("code",{className:"terminal-font"},this.state.output))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[21,1,2]]]);
//# sourceMappingURL=main.1b0abc30.chunk.js.map