(this.webpackJsonpmemegenerator=this.webpackJsonpmemegenerator||[]).push([[0],{11:function(e,t,a){e.exports=a(21)},16:function(e,t,a){e.exports=a.p+"static/media/Impact.3eb51b5f.ttf"},17:function(e,t,a){},20:function(e,t,a){},21:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),s=a(4),c=a.n(s),o=(a(16),a(17),a(18),a(5)),m=a(2),r=a.n(m),i=a(6),d=a(7),h=a(9),u=a(8),b=a(1),p=a(10),v=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(h.a)(this,Object(u.a)(t).call(this))).state={memes:[],currentMemeURL:"",topLabel:"",bottomLabel:""},e.handelRandomMeme=e.handelRandomMeme.bind(Object(b.a)(e)),e.handelLabels=e.handelLabels.bind(Object(b.a)(e)),e}return Object(p.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e,t;return r.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,r.a.awrap(fetch("https://api.imgflip.com/get_memes"));case 2:return e=a.sent,a.next=5,r.a.awrap(e.json());case 5:t=a.sent,this.setState({memes:t.data.memes}),this.handelRandomMeme();case 8:case"end":return a.stop()}}),null,this)}},{key:"handelRandomMeme",value:function(){var e=Math.floor(Math.random()*this.state.memes.length);this.setState((function(t){return{currentMemeURL:t.memes[e].url}}))}},{key:"handelLabels",value:function(e){var t=e.target,a=t.name,n=t.value;this.setState(Object(o.a)({},a,n))}},{key:"render",value:function(){return l.a.createElement("main",null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col s12 m4 l4 offset-m4 offset-l4"},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-image"},l.a.createElement("img",{alt:"meme",src:this.state.currentMemeURL}),l.a.createElement("h4",{className:"topLabelText"},this.state.topLabel),l.a.createElement("h4",{className:"bottomLabelText"},this.state.bottomLabel)),l.a.createElement("div",{className:"card-content",style:{display:"flex",justifyContent:"center"}},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col"},l.a.createElement("input",{type:"text",name:"topLabel",placeholder:"Top label",value:this.state.topLabel,onChange:this.handelLabels})),l.a.createElement("div",{className:"col"},l.a.createElement("input",{type:"text",name:"bottomLabel",placeholder:"Bottom label",value:this.state.bottomLabel,onChange:this.handelLabels})))),l.a.createElement("div",{className:"card-action center"},l.a.createElement("button",{className:"btn waves-effect waves-light",onClick:this.handelRandomMeme},"Random meme"))))))}}]),t}(l.a.Component);a(20);var f=function(){return l.a.createElement("div",{className:"app"},l.a.createElement("div",null,l.a.createElement(v,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[11,1,2]]]);
//# sourceMappingURL=main.184aa35e.chunk.js.map