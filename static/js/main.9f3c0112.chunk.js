(this["webpackJsonpmovie-app"]=this["webpackJsonpmovie-app"]||[]).push([[0],{44:function(e,t,s){},45:function(e,t,s){"use strict";s.r(t);var a=s(0),n=s(2),i=s.n(n),c=s(13),r=s.n(c),o=s(4),l=s.n(o),m=s(14),j=s(15),d=s(16),u=s(19),v=s(18),h=s(17),b=s.n(h);var p=function(e,t,s,n,i){return Object(a.jsxs)("div",{className:"movie",children:[Object(a.jsx)("img",{src:n,alt:t,title:t}),Object(a.jsxs)("div",{className:"movie_data",children:[Object(a.jsx)("h3",{className:"movie_title",children:t}),Object(a.jsx)("h5",{className:"movie_year",children:e}),Object(a.jsx)("ul",{className:"movie_genres",children:i.map((function(e,t){return Object(a.jsx)("li",{className:"genres_genre"},t)}))}),Object(a.jsxs)("p",{className:"movie_summary",children:[s.slice(0,180),"..."]})]})]})},O=(s(44),function(e){Object(u.a)(s,e);var t=Object(v.a)(s);function s(){var e;Object(j.a)(this,s);for(var a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).state={isLoading:!0,movies:[]},e.getMovies=Object(m.a)(l.a.mark((function t(){var s,a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:s=t.sent,a=s.data.data.movies,e.setState({movies:a,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(d.a)(s,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,s=e.movies;return Object(a.jsx)("section",{class:"container",children:t?Object(a.jsx)("div",{lass:"loader",children:Object(a.jsx)("span",{class:"loader_text",children:"Loading... "})}):Object(a.jsx)("div",{class:"movies",children:s.map((function(e){return Object(a.jsx)(p,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image},e.id)}))})})}}]),s}(i.a.Component));r.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(O,{})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.9f3c0112.chunk.js.map