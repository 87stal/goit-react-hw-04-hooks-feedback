(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],[,function(e,t,a){},,,,function(e,t,a){e.exports={button:"FeedbackOptions_button__38Z-0"}},function(e,t,a){e.exports={section:"Sections_section__3GYHv"}},function(e,t,a){e.exports={message:"Notification_message__3WPsk"}},function(e,t,a){e.exports=a(14)},,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(4),o=a.n(r),s=(a(13),a(2)),i=a(1),l=a.n(i),u=function(e){var t=e.good,a=e.neutral,n=e.bad,r=e.positiveFeedbackPercentage,o=e.totalFeedback;return c.a.createElement(c.a.Fragment,null,c.a.createElement("p",{className:l.a.fieldStatistic},"Good: ",t),c.a.createElement("p",{className:l.a.fieldStatistic},"Neutral: ",a),c.a.createElement("p",{className:l.a.fieldStatistic},"Bad: ",n),c.a.createElement("p",{className:l.a.fieldStatistic},"Total: ",o),c.a.createElement("p",{className:l.a.fieldStatistic},"Positive feedback:",r,"%"))},m=a(5),d=a.n(m),b=function(e){var t=e.onLeaveFeedback,a=e.options;return c.a.createElement(c.a.Fragment,null,a.map((function(e){return c.a.createElement("button",{type:"submit",key:e,className:d.a.button,onClick:function(){return t(e)}},e)})))},f=a(6),k=a.n(f),p=function(e){var t=e.title,a=e.children;return c.a.createElement("section",{className:k.a.section},c.a.createElement("h2",{className:"Title"},t),a)},E=a(7),g=a.n(E),v=function(e){var t=e.message;return c.a.createElement("p",{className:g.a.message},t)};var N=function(){var e=Object(n.useState)(0),t=Object(s.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)(0),i=Object(s.a)(o,2),l=i[0],m=i[1],d=Object(n.useState)(0),f=Object(s.a)(d,2),k=f[0],E=f[1],g=a+l+k;return c.a.createElement(c.a.Fragment,null,c.a.createElement(p,{title:"Please leave feedback"},c.a.createElement(b,{onLeaveFeedback:function(e){switch(e){case"good":r((function(e){return e+1}));break;case"neutral":m((function(e){return e+1}));break;case"bad":E((function(e){return e+1}));break;default:return}},options:["Good","Bad","Neutral"]})),c.a.createElement(p,{title:"Statistics"},g>0?c.a.createElement(u,{good:a,neutral:l,bad:k,totalFeedback:g,positiveFeedbackPercentage:Math.round(a/g*100)}):c.a.createElement(v,{message:"No feedback given"})))};o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(N,null)),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.bc8c7aef.chunk.js.map