(this["webpackJsonpreact-quiz"]=this["webpackJsonpreact-quiz"]||[]).push([[0],{46:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},56:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){},80:function(e,t,n){},81:function(e,t,n){},82:function(e,t,n){},83:function(e,t,n){},84:function(e,t,n){},85:function(e,t,n){},86:function(e,t,n){},87:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(1),s=n(37),i=n.n(s),c=n(13),o=(n(46),n(5)),l=n(6),u=n(8),d=n(7),j=n(22),h=n(18),b=(n(51),function(e){var t="MenuToglle";e.isOpen&&(t+=" open");var n=e.isOpen?h.c:h.a;return Object(a.jsx)(j.a,{icon:n,onClick:e.onToggle,className:t})}),v=(n(52),function(e){return Object(a.jsx)("div",{className:"Backdrop",onClick:e.onClick})}),O=(n(53),[{to:"/",lable:"\u0441\u043f\u0438\u0441\u043e\u043a",exact:!0},{to:"/auth",lable:"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f",exact:!1},{to:"/quiz-creator",lable:"\u0421\u043e\u0437\u0434\u0430\u0432\u0430\u0442\u044c \u0442\u0435\u0441\u0442",exact:!1}]),f=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).clickHandel=function(){e.props.onClose()},e}return Object(l.a)(n,[{key:"renderLinks",value:function(){var e=this;return O.map((function(t,n){return Object(a.jsx)("li",{children:Object(a.jsx)(c.c,{to:t.to,exact:t.exact,activeClassName:" active",onClick:e.clickHandel,children:t.lable})},n)}))}},{key:"render",value:function(){var e="Drawer";return this.props.isOpen||(e+="  close"),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("nav",{className:e,children:Object(a.jsx)("ul",{children:this.renderLinks()})}),this.props.isOpen?Object(a.jsx)(v,{onClick:this.props.onClose}):null]})}}]),n}(r.Component),p=(n(56),function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={menu:!1},e.toggleMenu=function(){e.setState({menu:!e.state.menu})},e.menuCloseHandler=function(){e.setState({menu:!1})},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"layout",children:[Object(a.jsx)(f,{isOpen:this.state.menu,onClose:this.menuCloseHandler}),Object(a.jsx)(b,{onToggle:this.toggleMenu,isOpen:this.state.menu}),Object(a.jsx)("main",{children:this.props.children})]})}}]),n}(r.Component)),m=n(3),x=n(14),g=n.n(x),C=n(17),w=n(19),y=(n(58),function(e){var t="AnswersItem ";return e.state&&(t+=e.state),Object(a.jsx)("li",{className:t,onClick:function(){return e.onClickAnswer(e.answer.id)},children:e.answer.text})}),k=(n(59),function(e){return Object(a.jsx)("ul",{className:"AnswersList",children:e.answers.map((function(t,n){return Object(a.jsx)(y,{answer:t,onClickAnswer:e.onClickAnswer,state:e.state?e.state[t.id]:null},n)}))})}),q=(n(60),function(e){return Object(a.jsxs)("div",{className:"ActiveQuiz",children:[Object(a.jsxs)("p",{className:"question",children:[Object(a.jsxs)("span",{children:[Object(a.jsxs)("strong",{children:[e.answerNumber,"."]}),"\xa0",e.question]}),Object(a.jsxs)("small",{children:[" ",e.answerNumber," \u0438\u0437 ",e.quizLength]})]}),Object(a.jsx)(k,{state:e.state,answers:e.answers,onClickAnswer:e.onAnswerClickHandel})]})}),z=(n(61),function(e){var t=["Button",[e.type]];return Object(a.jsx)("button",{onClick:e.onClick,className:t.join(" "),disabled:e.disabled,children:e.children})}),S=(n(62),function(e){var t=Object.keys(e.results).reduce((function(t,n){return"Success"===e.results[n]&&t++,t}),0);return Object(a.jsxs)("div",{className:"finished",children:[Object(a.jsx)("ul",{children:e.quiz.map((function(t,n){var r="error"===e.results[t.id]?h.c:h.b,s=["margin","error"===e.results[t.id]?"error":"Success"];return Object(a.jsxs)("li",{children:[Object(a.jsxs)("strong",{children:[n+1," "]}),". \xa0",t.question,Object(a.jsx)(j.a,{icon:r,className:s.join(" ")})]},n)}))}),Object(a.jsxs)("p",{children:[" \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e ",t," \u0438\u0437 ",e.quiz.length]}),Object(a.jsxs)("div",{children:[Object(a.jsx)(z,{onClick:e.onReplay,type:"primary",children:"\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u044c"}),Object(a.jsx)(c.b,{to:"/",children:Object(a.jsx)(z,{type:"success",children:"\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u0432 \u0441\u043f\u0438\u0441\u043e\u043a \u0442\u0435\u0441\u0442\u043e\u0432"})})]})]})}),A=n(39),H=n.n(A).a.create({baseURL:"https://react-quiz-cb1f1-default-rtdb.firebaseio.com/"}),N=(n(80),function(e){return Object(a.jsx)("div",{className:"center",children:Object(a.jsxs)("div",{className:"lds-roller",children:[Object(a.jsx)("div",{}),Object(a.jsx)("div",{}),Object(a.jsx)("div",{}),Object(a.jsx)("div",{}),Object(a.jsx)("div",{}),Object(a.jsx)("div",{}),Object(a.jsx)("div",{}),Object(a.jsx)("div",{})]})})}),Q=(n(81),function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={results:{},isFinished:!1,activeQuestion:0,answerState:null,quiz:[],loading:!0},e.onAnswerClickHandel=function(t){if(e.state.answerState){var n=Object.keys(e.state.answerState)[0];if("Success"===e.state.answerState[n])return}var a=e.state.quiz[e.state.activeQuestion],r=e.state.results;if(a.rightAnswerId===t){r[a.id]||(r[a.id]="Success"),e.setState({answerState:Object(w.a)({},t,"Success"),results:r});var s=window.setTimeout((function(){e.isQuizFinished()?e.setState({isFinished:!0}):e.setState({activeQuestion:e.state.activeQuestion+1,answerState:null}),window.clearTimeout(s)}),1e3)}else r[a.id]="error",e.setState({answerState:Object(w.a)({},t,"error"),results:r})},e.onReplay=function(){e.setState({results:{},isFinished:!1,activeQuestion:0,answerState:null})},e}return Object(l.a)(n,[{key:"isQuizFinished",value:function(){return this.state.activeQuestion+1===this.state.quiz.length}},{key:"componentDidMount",value:function(){var e=Object(C.a)(g.a.mark((function e(){var t,n,a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.id,e.prev=1,e.next=4,H.get("quizes/".concat(t,".json"));case 4:n=e.sent,a=n.data,this.setState({quiz:a,loading:!1}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,this,[[1,9]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(a.jsx)("div",{className:"Quiz",children:Object(a.jsxs)("div",{className:"QuizWrapper",children:[Object(a.jsx)("h1",{children:"\u041e\u0442\u0432\u0435\u0442\u044c\u0435\u0442\u0435 \u043d\u0430 \u0432\u0441\u0435 \u0432\u043e\u043f\u0440\u043e\u0441\u044b "}),Object(a.jsx)("h3",{children:"\u0412\u043d\u0438\u043c\u0430\u043d\u0438\u0435! \u0422\u043e\u043b\u044c\u043a\u043e \u043f\u0435\u0440\u0432\u044b\u0439 \u043e\u0442\u0432\u0435\u0442 \u0431\u0443\u0434\u0435\u0442 \u0437\u0430\u0441\u0447\u0438\u0442\u0430\u043d "}),this.state.loading?Object(a.jsx)(N,{}):this.state.isFinished?Object(a.jsx)(S,{results:this.state.results,quiz:this.state.quiz,onReplay:this.onReplay}):Object(a.jsx)(q,{answers:this.state.quiz[this.state.activeQuestion].answers,question:this.state.quiz[this.state.activeQuestion].question,onAnswerClickHandel:this.onAnswerClickHandel,quizLength:this.state.quiz.length,answerNumber:this.state.activeQuestion+1,state:this.state.answerState})]})})}}]),n}(r.Component)),F=n(15);n(82);function M(e){var t=e.valid,n=e.touched,a=e.shouldValidate;return!t&&a&&n}var I=function(e){var t=e.type||"text",n="Input",r="".concat(t,"-").concat(Math.random());return M(e)&&(n+=" invalid"),Object(a.jsxs)("div",{className:n,children:[Object(a.jsx)("label",{htmlFor:r,children:e.label}),Object(a.jsx)("input",{type:t,id:r,value:e.value,onChange:e.onChange}),M(e)?Object(a.jsx)("span",{children:e.errorMessage||"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0435\u0440\u043d\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435"}):null]})};n(83);var L=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={isFormValid:!1,formControls:{email:{value:"",type:"email",label:"Email",errorMessage:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 Email",valid:!1,touched:!1,validation:{required:!0,email:!0}},password:{value:"",type:"password",label:"\u041f\u0430\u0440\u043e\u043b\u044c",errorMessage:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 \u041f\u0430\u0440\u043e\u043b\u044c",valid:!1,touched:!1,validation:{required:!0,minLength:!0}}}},e.loginHandler=function(){},e.registerHandler=function(){},e.submitHandler=function(e){e.preventDefault()},e.onChangeHandler=function(t,n){var a=Object(F.a)({},e.state.formControls),r=Object(F.a)({},a[n]);r.value=t.target.value,r.touched=!0,r.valid=e.validateControl(r.value,r.validation),a[n]=r;var s=!0;Object.keys(a).forEach((function(e){s=a[e].valid&&s})),e.setState({formControls:a,isFormValid:s})},e}return Object(l.a)(n,[{key:"validateControl",value:function(e,t){if(!t)return!0;var n,a=!0;return t.required&&(a=""!==e.trim()&&a),t.email&&(a=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())&&a),t.minLength&&(a=/[a-z]/.test(n=e)&&/[0-9]/.test(n)&&n.length>4&&a),a}},{key:"renderInput",value:function(){var e=this;return Object.keys(this.state.formControls).map((function(t,n){var r=e.state.formControls[t];return Object(a.jsx)(I,{type:r.type,value:r.value,valid:r.valid,touched:r.touched,label:r.label,shouldValidate:!!r.validation,errorMessage:r.errorMessage,onChange:function(n){return e.onChangeHandler(n,t)}},t+n)}))}},{key:"render",value:function(){return Object(a.jsx)("div",{className:"Auth",children:Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f"}),Object(a.jsxs)("form",{onSubmit:this.submitHandler,className:"AuthForm",children:[this.renderInput(),Object(a.jsx)(z,{type:"success",onClick:this.loginHandler,disabled:!this.state.isFormValid,children:"\u0412\u043e\u0439\u0442\u0438"}),Object(a.jsx)(z,{type:"primary",onClick:this.registerHandler,disabled:!this.state.isFormValid,children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})]})]})})}}]),n}(r.Component),V=n(40);n(84);function D(e,t){return Object(F.a)(Object(F.a)({},e),{},{validation:t,valid:!t,touched:!1,value:""})}function E(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(!t)return!0;var n=!0;return t.required&&(n=""!==e.trim()&&n),n}function R(e){var t=!0;for(var n in e)e.hasOwnProperty(n)&&(t=e[n].valid&&t);return t}var T=function(e){return e.children},B=(n(85),function(e){var t="".concat(e.label,"- ").concat(Math.random());return Object(a.jsxs)("div",{className:"Select",children:[Object(a.jsx)("label",{htmlFor:t,children:e.label}),Object(a.jsx)("select",{id:t,value:e.value,onChange:e.onChange,children:e.options.map((function(e,t){return Object(a.jsx)("option",{value:e.value,children:e.text},e.value+t)}))})]})});function J(e){return D({label:"\u0412\u0430\u0440\u0438\u0430\u043d\u0442 ".concat(e),errorMessage:"\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u044b\u043c",id:e},{required:!0})}function Z(){return{question:D({label:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u043e\u043f\u0440\u043e\u0441",errorMessage:"\u0412\u043e\u043f\u0440\u043e\u0441 \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u044b\u043c"},{required:!0}),option1:J(1),option2:J(2),option3:J(3),option4:J(4)}}var P=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,s=new Array(r),i=0;i<r;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={quiz:[],formControls:Z(),isFormValid:!1,rightAnswerId:1},e.submitHandler=function(e){e.preventDefault()},e.addQuestionHandler=function(t){t.preventDefault();var n=Object(V.a)(e.state.quiz),a=n.length+1,r=e.state.formControls,s=r.question,i=r.option1,c=r.option2,o=r.option3,l=r.option4,u={question:s.value,id:a,rightAnswerId:e.state.rightAnswerId,answers:[{text:i.value,id:i.id},{text:c.value,id:c.id},{text:o.value,id:o.id},{text:l.value,id:l.id}]};console.log(u.answers),n.push(u),e.setState({quiz:n,formControls:Z(),isFormValid:!1,rightAnswerId:1})},e.creatQuizHandler=function(){var t=Object(C.a)(g.a.mark((function t(n){return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.prev=1,t.next=4,H.post("quizes.json",e.state.quiz);case 4:e.setState({quiz:[],formControls:Z(),isFormValid:!1,rightAnswerId:null}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(1),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(e){return t.apply(this,arguments)}}(),e.changeHandler=function(t,n){var a=Object(F.a)({},e.state.formControls),r=Object(F.a)({},a[n]);r.touched=!0,r.value=t,r.valid=E(r.value,r.validation),a[n]=r,e.setState({formControls:a,isFormValid:R(a)})},e.renderControls=function(){return Object.keys(e.state.formControls).map((function(t,n){var r=e.state.formControls[t];return Object(a.jsxs)(T,{children:[Object(a.jsx)(I,{label:r.label,value:r.value,valid:r.valid,shouldValidate:!!r.validation,touched:r.touched,errorMessage:r.errorMessage,onChange:function(n){return e.changeHandler(n.target.value,t)}}),0===n?Object(a.jsx)("hr",{}):null]},n+t)}))},e.selectChangeHandler=function(t){e.setState({rightAnswerId:+t.target.value})},e}return Object(l.a)(n,[{key:"render",value:function(){var e=Object(a.jsx)(B,{label:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 \u043e\u0442\u0432\u0435\u0442",value:this.state.rightAnswerId,onChange:this.selectChangeHandler,options:[{text:1,value:1},{text:2,value:2},{text:3,value:3},{text:4,value:4}]});return Object(a.jsx)("div",{className:"QuizCreator",children:Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0442\u0435\u0441\u0442\u0430"}),Object(a.jsxs)("form",{onSubmit:this.submitHandler,children:[this.renderControls(),e,Object(a.jsx)(z,{type:"primary",onClick:this.addQuestionHandler,disabled:!this.state.isFormValid,children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432\u043e\u043f\u0440\u043e\u0441"}),Object(a.jsx)(z,{type:"success",onClick:this.creatQuizHandler,disabled:0===this.state.quiz.length,children:"\u0421\u043e\u0437\u0434\u0430\u0432\u0442\u044c \u0442\u0435\u0441\u0442"})]})]})})}}]),n}(r.Component),U=(n(86),function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={quizes:[],Loading:!0},e}return Object(l.a)(n,[{key:"renderQuizes",value:function(){return this.state.quizes.map((function(e){return Object(a.jsx)("li",{children:Object(a.jsx)(c.c,{to:"/quiz/"+e.id,children:e.name})},e.id)}))}},{key:"componentDidMount",value:function(){var e=Object(C.a)(g.a.mark((function e(){var t,n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,H.get("quizes.json");case 3:t=e.sent,n=[],Object.keys(t.data).forEach((function(e,t){n.push({id:e,name:"\u0422\u0435\u0441\u0442 \u2116".concat(t+1)})})),this.setState({quizes:n,Loading:!1}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,this,[[0,9]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(a.jsx)("div",{className:"QuizList",children:Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"\u0421\u043f\u0438\u0441\u043e\u043a \u0442\u0435\u0441\u0442\u043e\u0432"}),this.state.Loading?Object(a.jsx)(N,{}):Object(a.jsx)("ul",{children:this.renderQuizes()})]})})}}]),n}(r.Component)),W=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsx)(p,{children:Object(a.jsxs)(m.c,{children:[Object(a.jsx)(m.a,{path:"/auth",component:L}),Object(a.jsx)(m.a,{path:"/quiz-creator",component:P}),Object(a.jsx)(m.a,{path:"/quiz/:id",component:Q}),Object(a.jsx)(m.a,{path:"/",component:U})]})})}}]),n}(r.Component),$=Object(a.jsx)(c.a,{children:Object(a.jsx)(W,{})});i.a.render($,document.getElementById("root"))}},[[87,1,2]]]);
//# sourceMappingURL=main.d88a128f.chunk.js.map