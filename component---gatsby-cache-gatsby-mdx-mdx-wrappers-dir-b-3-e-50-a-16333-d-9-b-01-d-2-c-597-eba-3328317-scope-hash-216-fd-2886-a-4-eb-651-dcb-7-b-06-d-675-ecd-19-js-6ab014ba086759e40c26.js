(window.webpackJsonp=window.webpackJsonp||[]).push([[5,6],{141:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"H1",function(){return q}),n.d(a,"H2",function(){return H}),n.d(a,"H3",function(){return G}),n.d(a,"H4",function(){return B}),n.d(a,"P",function(){return U});n(79),n(80);var o=n(7),l=n.n(o),s=n(208),i=n.n(s),r=n(304),c=n(0),d=n.n(c),u=(n(172),n(77),n(27),n(78),n(51),n(236)),m=n(164),h=n(237),g=n.n(h),p=(n(209),n(309),n(310),n(210)),f=n.n(p),y=function(e){function t(){return e.apply(this,arguments)||this}l()(t,e);var n=t.prototype;return n._handleOnClick=function(e,t,n,a){a.stopPropagation();var o=this.refs["navItem"+e+t];o.classList.contains("active")&&!n.items||o.classList.toggle("active")},n._isActive=function(e){var t=this.props.location.pathname.split("/"),n=t[t.length-1].split(".");return e.items?t.includes(e.id):n[0]===e.id},n.renderNavigationItems=function(){var e=this,n=this.props,a=n.sectionList,o=n.location,l=n.depth,s=void 0===l?0:l;return a.map(function(n,a){var l=f()({active:!0===e._isActive(n),"nav-heading":n.items});return d.a.createElement("li",{key:a,ref:"navItem"+a+s,className:l,onClick:e._handleOnClick.bind(e,a,s,n)},d.a.createElement(w,{page:n}),n.items&&d.a.createElement(t,{sectionList:n.items,location:o,depth:s+1}))})},n.render=function(){return d.a.createElement("ul",{className:"nav nav-stacked"},this.renderNavigationItems())},t}(c.Component),w=function(e){var t=e.page;return t.items?d.a.createElement("a",{className:"clayui-site-nav-link",href:"javascript:;"},d.a.createElement("span",null,t.title),d.a.createElement("svg",{className:"collapse-toggle clay-icon icon-monospaced"},d.a.createElement("use",{xlinkHref:"/images/icons/icons.svg#caret-bottom"}))):d.a.createElement(m.Link,{to:t.link+".html",className:"clayui-site-nav-link"},d.a.createElement("span",null,t.title))},b=y,v=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))||this).state={enabled:!0},t}l()(t,e);var n=t.prototype;return n.componentDidMount=function(){window.docsearch?window.docsearch({apiKey:"bc205a621e5176b8720081c2a3de450c",indexName:"clay",inputSelector:"#algolia-doc-search"}):this.setState({enabled:!1})},n.render=function(){var e=this.props.placeholder;return d.a.createElement("div",{className:"page-autocomplete"},d.a.createElement("div",{className:"form-group"},d.a.createElement("div",{className:"input-group"},d.a.createElement("input",{className:"form-control",id:"algolia-doc-search",name:"q",placeholder:e,required:!0,type:"text"}),d.a.createElement("span",{className:"input-group-addon"},d.a.createElement("svg",{className:"lexicon-icon"},d.a.createElement("use",{xlinkHref:"/images/icons/icons.svg#search"}))))))},t}(c.Component),E=d.a.createRef(),x=d.a.createRef(),k=function(){E.current.classList.toggle("toggler-expanded")},C=function(e){return e.filter(function(e){return!e.node.fields.nightly}).map(function(e){var t=e.node.fields,n=t.layout,a=t.slug,o=t.title,l=t.weight,s=a.replace(".html",""),i=s.split("/");return{id:i[i.length-1],layout:n,link:"/"+s,title:o,weight:l}})},N=0,T=function(e){function t(){return e.apply(this,arguments)||this}l()(t,e);var n=t.prototype;return n.onScroll=function(e){N=e.currentTarget.scrollTop},n.componentDidMount=function(){x.current.scrollTop=N},n.render=function(){return d.a.createElement("div",{ref:x,onScroll:this.onScroll.bind(this),className:"sidebar sidebar-clay-site sidenav-menu d-flex flex-column"},this.props.children)},t}(c.Component),_=function(e){return d.a.createElement(m.StaticQuery,{query:"2274628133",render:function(t){return d.a.createElement(d.a.Fragment,null,d.a.createElement("div",{className:"navbar navbar-mobile navbar-expand-lg navbar-header"},d.a.createElement(m.Link,{to:"/",className:"navbar-brand d-flex"},d.a.createElement("img",{className:"logo mr-2",src:"/images/clay_logo_w.png",alt:""}),d.a.createElement("span",{className:"title h1 font-weight-bold mb-0 p-1"},"Clay ")),d.a.createElement("button",{onClick:k,className:"navbar-toggler sidebar-toggler p-3",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},d.a.createElement("svg",{"aria-hidden":"true",className:"lexicon-icon lexicon-icon-bars"},d.a.createElement("use",{xlinkHref:"/images/icons/icons.svg#bars"})))),d.a.createElement("nav",{ref:E,className:"sidebar-toggler-content sidenav-fixed sidenav-menu-slider",id:"clay-sidebar"},d.a.createElement(T,null,d.a.createElement("div",{className:"sidebar-header"},d.a.createElement("div",{className:"navbar navbar-expand-lg navbar-header"},d.a.createElement("a",{className:"btn btn-primary",href:"#clayDocsContent",id:"skipToClayDocsContent"},"Skip to Content"),d.a.createElement(m.Link,{className:"navbar-brand",to:"/"},d.a.createElement("img",{className:"logo mr-2",src:"/images/clay_logo_w.png",alt:"Clay"}),d.a.createElement("span",{className:"title"},"Clay "),d.a.createElement("small",null,"by Liferay")))),d.a.createElement("div",{className:"sidebar-body mb-auto"},d.a.createElement("div",{className:"sidebar-search"},d.a.createElement(v,{placeholder:"Search"})),d.a.createElement("div",{id:"clayuiSiteNavigation"},d.a.createElement(b,{sectionList:function(e){var t=C(e.allMarkdownRemark.edges).concat(C(e.allMdx.edges));return g()(t)[0].items}(t),location:e.location}))))))},data:u})},S=n(167),P=n.n(S),L=n(311),M=n.n(L),O=function(){function e(){var e=this,t=[];Array.prototype.slice.call(document.querySelectorAll(".code-container")).forEach(function(n){t.push({label:e._getTabLabelFromElement(n),element:n}),n.nextElementSibling&&P.a.hasClass(n.nextElementSibling,"code-container")||(t.length>1&&e._renderTabs(t),t=[])})}var t=e.prototype;return t._getTabLabelFromElement=function(e){return e.querySelector(".gatsby-highlight").getAttribute("data-language")},t._hide=function(e){P.a.addClasses(e,"hide")},t._hideAll=function(e){var t=this;e.forEach(function(e){t._hide(e.element)})},t._renderTabs=function(e){var t=this,n=P.a.buildFragment('<div class="tabContainer"></div>'),a=new M.a({elementClasses:"nav-code-tabs",tabs:e},n);a.on("changeRequest",function(e){var n=e.state.tab;t._hideAll(a.tabs),t._show(a.tabs[n].element)}),this._hideAll(a.tabs),this._show(a.tabs[0].element),e[0].element.parentNode.insertBefore(n,e[0].element)},t._show=function(e){P.a.removeClasses(e,"hide")},e}(),j=n(312),D=n.n(j),R=n(316),A=n.n(R),F=function(){},I=function(){function e(){this.clayTooltip=new D.a(new F),this.clayClipboard=new A.a({selector:".code-container .btn-copy",text:function(e){return e.setAttribute("title","Copied"),setTimeout(function(){e.setAttribute("title","Copy")},2e3),e.parentNode.querySelector("pre code").innerText}})}return e.prototype.dispose=function(){this.clayTooltip.dispose(),this.clayClipboard.dispose()},e}(),q=function(e){return d.a.createElement("h1",{className:"clay-h1"},e.children)},H=function(e){return d.a.createElement("h2",{className:"clay-h2"},e.children)},G=function(e){return d.a.createElement("h3",{className:"clay-h3"},e.children)},B=function(e){return d.a.createElement("h4",{className:"clay-h4"},e.children)},U=function(e){return d.a.createElement("p",{className:"clay-p"},e.children)},W=a;n.d(t,"default",function(){return X}),n.d(t,"pageQuery",function(){return Q});var X=function(e){function t(){return e.apply(this,arguments)||this}l()(t,e);var n=t.prototype;return n.componentDidMount=function(){this._codeTabs=new O,this._codeClipboard=new I,document.querySelectorAll(".clay-site-custom-checkbox-indeterminate").forEach(function(e){return e.indeterminate=!0})},n.componentWillUnmount=function(){this._codeTabs=null,this._codeClipboard.dispose()},n.render=function(){var e=this.props,t=e.data,n=e.location,a=e.pageContext.markdownJsx,o=t.mdx,l=t.markdownRemark,s=o||l,c=s.code,u=s.frontmatter,m=s.excerpt,h=s.timeToRead,g=s.html,p=u.title+" - Clay";return d.a.createElement("div",{className:"docs"},d.a.createElement(i.a,null,d.a.createElement("title",null,p),d.a.createElement("meta",{name:"description",content:m}),d.a.createElement("meta",{name:"og:description",content:m}),d.a.createElement("meta",{name:"twitter:description",content:m}),d.a.createElement("meta",{name:"og:title",content:p}),d.a.createElement("meta",{name:"og:type",content:"article"}),d.a.createElement("meta",{name:"twitter.label1",content:"Reading time"}),d.a.createElement("meta",{name:"twitter:data1",content:h+" min read"})),d.a.createElement("main",{className:"content"},d.a.createElement(_,{location:n}),d.a.createElement("div",{className:"sidebar-offset",id:"clayDocsContent"},d.a.createElement("header",null,d.a.createElement("div",{className:"clay-site-container container-fluid"},d.a.createElement("h1",null,u.title))),d.a.createElement("div",{className:"clay-site-container container-fluid"},d.a.createElement("div",{className:"row"},d.a.createElement("div",{className:"col-md-12"},d.a.createElement("article",null,a?d.a.createElement(r.a,{components:{h1:W.H1,h2:W.H2,h3:W.H3,h4:W.H4,p:W.P}},c.body):d.a.createElement("div",{dangerouslySetInnerHTML:{__html:g}}))))),d.a.createElement("footer",{className:"clay-site-container container-fluid"},d.a.createElement("div",{className:"row"},d.a.createElement("div",{className:"col-6"},d.a.createElement("p",{className:"legal"},"Except as otherwise noted, the content of this site is licensed under ",d.a.createElement("a",{href:"https://creativecommons.org/licenses/by-sa/4.0/",target:"_blank"},"CC BY-SA")," 4.0 license.")),d.a.createElement("div",{className:"col-6 p-md-0"},d.a.createElement("ul",{className:"social-icons"},d.a.createElement("li",{className:"mr-2"},d.a.createElement("a",{className:"rounded-circle sticker",href:"https://github.com/liferay/clay/issues",target:"_blank"},d.a.createElement("svg",{"aria-hidden":"true",className:"lexicon-icon lexicon-icon-bars"},d.a.createElement("use",{xlinkHref:"/images/icons/icons.svg#comments"})))),d.a.createElement("li",null,d.a.createElement("a",{className:"rounded-circle sticker",href:"https://github.com/liferay/clay",target:"_blank"},d.a.createElement("img",{className:"lexicon-icon",src:"/images/home/GitHub-Mark-64px.svg",alt:""}))))))))))},t}(c.Component),Q="3128438806"},145:function(e,t,n){"use strict";n.r(t);var a=n(13),o=n.n(a),l=n(283),s=n.n(l),i=n(0),r=n.n(i),c=n(284),d=n(7),u=n.n(d),m=n(285),h=function(e){function t(){return e.apply(this,arguments)||this}u()(t,e);var n=t.prototype;return n._consoleWarns=function(){var e=this.props,t=e.component,n=e.props;return t?m[t]?!n&&(console.warn("It is mandatory to pass the data to the `props` property."),!0):(console.warn("There is no such component in ClayCharts!"),!0):(console.warn("You must pass the name of the component to the `component` property."),!0)},n.componentDidMount=function(){var e=this.props,t=e.component,n=e.props;if(!this._consoleWarns()&&"undefined"!=typeof window){var a=m[t];this._chart=new a(n,this.refs["clay-charts-"+t])}},n.componentWillUnmount=function(){this._consoleWarns()||"undefined"!=typeof window&&this._chart.dispose()},n.render=function(){var e="clay-charts-"+this.props.component;return r.a.createElement("span",{ref:e,id:e})},t}(i.Component),g=n(460),p={Graph:h,React:r.a,MDXTag:g.MDXTag},f=n(141);n.d(t,"pageQuery",function(){return y});var y="3128438806";t.default=function(e){var t=e.children,n=s()(e,["children"]);return r.a.createElement(c.MDXScopeProvider,{__mdxScope:o()({},p)},r.a.createElement(f.default,n,t))}},164:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return p}),n.d(t,"StaticQueryContext",function(){return h}),n.d(t,"StaticQuery",function(){return g});var a=n(0),o=n.n(a),l=n(4),s=n.n(l),i=n(152),r=n.n(i);n.d(t,"Link",function(){return r.a}),n.d(t,"withPrefix",function(){return i.withPrefix}),n.d(t,"navigate",function(){return i.navigate}),n.d(t,"push",function(){return i.push}),n.d(t,"replace",function(){return i.replace}),n.d(t,"navigateTo",function(){return i.navigateTo});var c=n(26);n.d(t,"waitForRouteChange",function(){return c.c});var d=n(165),u=n.n(d);n.d(t,"PageRenderer",function(){return u.a});var m=n(36);n.d(t,"parsePath",function(){return m.a});var h=o.a.createContext({}),g=function(e){return o.a.createElement(h.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):o.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}g.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},165:function(e,t,n){var a;e.exports=(a=n(177))&&a.default||a},177:function(e,t,n){"use strict";n.r(t);var a=n(13),o=n.n(a),l=n(0),s=n.n(l),i=n(4),r=n.n(i),c=n(53),d=n(1),u=function(e){var t=e.location,n=d.default.getResourcesForPathnameSync(t.pathname);return s.a.createElement(c.a,o()({location:t,pageResources:n},n.json))};u.propTypes={location:r.a.shape({pathname:r.a.string.isRequired}).isRequired},t.default=u},236:function(e){e.exports={data:{allMdx:{edges:[{node:{fields:{layout:"",slug:"docs/components/charts/basic/bar-chart.html",title:"Bar Chart",weight:0}}},{node:{fields:{layout:"",slug:"docs/components/charts/basic/bubble-chart.html",title:"Bubble Chart",weight:0}}},{node:{fields:{layout:"",slug:"docs/components/charts/basic/combination-chart.html",title:"Combination Chart",weight:0}}},{node:{fields:{layout:"",slug:"docs/components/charts/basic/donut-chart.html",title:"Donut Chart",weight:0}}},{node:{fields:{layout:"",slug:"docs/components/charts/basic/gauge-chart.html",title:"Gauge Chart",weight:0}}},{node:{fields:{layout:"",slug:"docs/components/charts/basic/geomap-chart.html",title:"Geomap Chart",weight:0}}},{node:{fields:{layout:"",slug:"docs/components/charts/basic/line-chart.html",title:"Line Chart",weight:0}}},{node:{fields:{layout:"",slug:"docs/components/charts/basic/pie-chart.html",title:"Pie Chart",weight:0}}},{node:{fields:{layout:"",slug:"docs/components/charts/basic/scatter-chart.html",title:"Scatter Chart",weight:0}}},{node:{fields:{layout:"",slug:"docs/components/charts/basic/spline-chart.html",title:"Spline Chart",weight:0}}},{node:{fields:{layout:"",slug:"docs/components/charts/basic/step-chart.html",title:"Step Chart",weight:0}}},{node:{fields:{layout:"",slug:"docs/components/charts/advanced/axis-label.html",title:"Axis Label",weight:0}}},{node:{fields:{layout:"",slug:"docs/components/charts/advanced/data-color.html",title:"Data Color",weight:0}}},{node:{fields:{layout:"",slug:"docs/components/charts/advanced/grid-lines.html",title:"Gridlines",weight:0}}},{node:{fields:{layout:"",slug:"docs/components/charts/advanced/axis-range.html",title:"Axis Range",weight:0}}},{node:{fields:{layout:"",slug:"docs/components/charts/advanced/regions.html",title:"Regions",weight:0}}},{node:{fields:{layout:"",slug:"docs/components/charts/advanced/x-axis-tick-formatting.html",title:"X Axis Tick Formatting",weight:0}}},{node:{fields:{layout:"",slug:"docs/components/charts/advanced/predictive-forecasting.html",title:"Predictive forecasting",weight:0}}}]},allMarkdownRemark:{edges:[{node:{fields:{layout:"redirect",slug:"docs/index.html",title:"Docs",weight:0}}},{node:{fields:{layout:"",slug:"docs/components/badges.html",title:"Badges",weight:0}}},{node:{fields:{layout:"",slug:"docs/css-framework/scss.html",title:"SCSS",weight:3}}},{node:{fields:{layout:"redirect",slug:"docs/css-framework/index.html",title:"CSS Framework",weight:2}}},{node:{fields:{layout:"",slug:"docs/components/icons.html",title:"Icons",weight:0}}},{node:{fields:{layout:"redirect",slug:"docs/components/index.html",title:"Lexicon Core Components",weight:3}}},{node:{fields:{layout:"",slug:"docs/components/labels.html",title:"Labels",weight:0}}},{node:{fields:{layout:"",slug:"docs/components/link.html",title:"Link",weight:0}}},{node:{fields:{layout:"",slug:"docs/components/loading-indicator.html",title:"Loading Indicator",weight:0}}},{node:{fields:{layout:"",slug:"docs/components/popovers.html",title:"Popovers and Tooltips",weight:0}}},{node:{fields:{layout:"",slug:"docs/components/progress-bars.html",title:"Progress Bars",weight:0}}},{node:{fields:{layout:"",slug:"docs/get-started/importing-the-js-component.html",title:"Importing the JS Component",weight:3}}},{node:{fields:{layout:"",slug:"docs/get-started/clay.html",title:"What is Clay",weight:4}}},{node:{fields:{layout:"redirect",slug:"docs/get-started/index.html",title:"Get Started",weight:5}}},{node:{fields:{layout:"",slug:"docs/get-started/using-js-components-with-metal.html",title:"Using JS Components with Metal.js",weight:2}}},{node:{fields:{layout:"",slug:"docs/get-started/introduction.html",title:"Introduction",weight:5}}},{node:{fields:{layout:"",slug:"docs/news/index.html",title:"News",weight:1}}},{node:{fields:{layout:"",slug:"docs/get-started/web-components.html",title:"Web Components",weight:1}}},{node:{fields:{layout:"redirect",slug:"docs/foundations/index.html",title:"Foundations",weight:4}}},{node:{fields:{layout:"",slug:"docs/css-framework/page-examples/document-upload.html",title:"Document Upload",weight:0}}},{node:{fields:{layout:"redirect",slug:"docs/css-framework/page-examples/index.html",title:"Page Examples",weight:0}}},{node:{fields:{layout:"",slug:"docs/css-framework/satellites/badge.html",title:"Badges",weight:0}}},{node:{fields:{layout:"",slug:"docs/css-framework/satellites/images-thumbnails.html",title:"Images and Thumbnails",weight:0}}},{node:{fields:{layout:"redirect",slug:"docs/css-framework/satellites/index.html",title:"Satellite Components",weight:1}}},{node:{fields:{layout:"",slug:"docs/css-framework/satellites/links.html",title:"Links",weight:0}}},{node:{fields:{layout:"",slug:"docs/css-framework/satellites/modals.html",title:"Modals",weight:0}}},{node:{fields:{layout:"redirect",slug:"docs/components/charts/index.html",title:"Charts",weight:0}}},{node:{fields:{layout:"",slug:"docs/components/forms/multi-step-form-simplified.html",title:"Multi Step Form Simplified",weight:0}}},{node:{fields:{layout:"",slug:"docs/components/forms/forms-hierarchy.html",title:"Forms Hierarchy",weight:0}}},{node:{fields:{layout:"",slug:"docs/components/forms/selector.html",title:"Selectors",weight:0}}},{node:{fields:{layout:"redirect",slug:"docs/components/forms/index.html",title:"Forms",weight:0}}},{node:{fields:{layout:"",slug:"docs/components/pagination.html",title:"Pagination",weight:0}}},{node:{fields:{layout:"",slug:"docs/components/stickers.html",title:"Stickers",weight:0}}},{node:{fields:{layout:"",slug:"docs/components/tabs.html",title:"Tabs",weight:0}}},{node:{fields:{layout:"",slug:"docs/foundations/typography.html",title:"Typography",weight:0}}},{node:{fields:{layout:"",slug:"docs/foundations/grid.html",title:"Grid",weight:0}}},{node:{fields:{layout:"",slug:"docs/css-framework/page-examples/users-and-organizations.html",title:"Users and Organizations",weight:0}}},{node:{fields:{layout:"",slug:"docs/css-framework/satellites/alert.html",title:"Alerts",weight:0}}},{node:{fields:{layout:"",slug:"docs/css-framework/satellites/images-aspect-ratio.html",title:"Images (Aspect Ratios)",weight:0}}},{node:{fields:{layout:"",slug:"docs/css-framework/satellites/popovers.html",title:"Popovers and Tooltips",weight:0}}},{node:{fields:{layout:"",slug:"docs/css-framework/satellites/stickers.html",title:"Stickers",weight:0}}},{node:{fields:{layout:"",slug:"docs/css-framework/satellites/tbar.html",title:"Tbar (Toolbar)",weight:0}}},{node:{fields:{layout:"",slug:"docs/components/forms/form-elements.html",title:"Forms",weight:0}}},{node:{fields:{layout:"",slug:"docs/components/forms/forms-navigation.html",title:"Forms Navigation",weight:0}}},{node:{fields:{layout:"",slug:"docs/components/forms/text-input-group.html",title:"Text Input Group",weight:0}}},{node:{fields:{layout:"",slug:"docs/components/forms/text-input-variations.html",title:"Text Input Variations",weight:0}}},{node:{fields:{layout:"",slug:"docs/components/forms/text-input-localizable.html",title:"Text Input Localizable",weight:0}}},{node:{fields:{layout:"redirect",slug:"docs/components/navigation/index.html",title:"Navigation",weight:0}}},{node:{fields:{layout:"",slug:"docs/components/navigation/breadcrumbs.html",title:"Breadcrumbs",weight:0}}},{node:{fields:{layout:"redirect",slug:"docs/components/table/index.html",title:"Table",weight:0}}},{node:{fields:{layout:"redirect",slug:"docs/components/toolbars/index.html",title:"Toolbars",weight:0}}},{node:{fields:{layout:"redirect",slug:"docs/components/sidebar/index.html",title:"Sidebar",weight:0}}},{node:{fields:{layout:"redirect",slug:"docs/css-framework/satellites/navigation/index.html",title:"Navigation",weight:0}}},{node:{fields:{layout:"redirect",slug:"docs/components/charts/basic/index.html",title:"Basic Examples",weight:0}}},{node:{fields:{layout:"",slug:"docs/css-framework/satellites/navigation/header.html",title:"Header",weight:0}}},{node:{fields:{layout:"redirect",slug:"docs/components/charts/advanced/index.html",title:"Advanced Examples",weight:0}}},{node:{fields:{layout:"redirect",slug:"docs/css-framework/satellites/forms/index.html",title:"Forms",weight:0}}},{node:{fields:{layout:"",slug:"docs/components/alerts.html",title:"Alerts",weight:0}}},{node:{fields:{layout:"",slug:"docs/components/buttons.html",title:"Buttons",weight:0}}},{node:{fields:{layout:"",slug:"docs/css-framework/satellites/dropdowns.html",title:"Dropdown Menu",weight:0}}},{node:{fields:{layout:"",slug:"docs/css-framework/satellites/label.html",title:"Labels",weight:0}}},{node:{fields:{layout:"",slug:"docs/css-framework/satellites/nav.html",title:"Nav",weight:0}}},{node:{fields:{layout:"",slug:"docs/css-framework/satellites/paginations.html",title:"Paginations",weight:0}}},{node:{fields:{layout:"",slug:"docs/css-framework/satellites/panels.html",title:"Panels",weight:0}}},{node:{fields:{layout:"",slug:"docs/css-framework/satellites/progress-bars.html",title:"Progress Bars",weight:0}}},{node:{fields:{layout:"",slug:"docs/components/forms/multi-step-form.html",title:"Multi Step Form",weight:0}}},{node:{fields:{layout:"",slug:"docs/components/forms/radio-check-toggle.html",title:"Checkbox, Radio, and Toggle",weight:0}}},{node:{fields:{layout:"",slug:"docs/components/forms/text-input.html",title:"Text Input",weight:0}}},{node:{fields:{layout:"",slug:"docs/components/navigation/navbar.html",title:"Navigation Bar",weight:0}}},{node:{fields:{layout:"",slug:"docs/components/table/inline-edit-table.html",title:"Inline Edit Table",weight:0}}},{node:{fields:{layout:"",slug:"docs/css-framework/class-helpers.html",title:"Class Helpers",weight:2}}},{node:{fields:{layout:"",slug:"docs/css-framework/page-examples/table-view-template.html",title:"Table View Template",weight:0}}},{node:{fields:{layout:"",slug:"docs/css-framework/satellites/timelines.html",title:"Timelines",weight:0}}},{node:{fields:{layout:"",slug:"docs/css-framework/satellites/toggle-switch.html",title:"Toggle Switch",weight:0}}},{node:{fields:{layout:"",slug:"docs/components/navigation/vertical-navigation.html",title:"Vertical Navigation",weight:0}}},{node:{fields:{layout:"",slug:"docs/components/sidebar/info-panel.html",title:"Info Panel",weight:0}}},{node:{fields:{layout:"",slug:"docs/css-framework/satellites/forms/form-elements-validation.html",title:"Form Elements (Validation)",weight:0}}},{node:{fields:{layout:"",slug:"docs/components/list.html",title:"List",weight:0}}},{node:{fields:{layout:"",slug:"docs/css-framework/page-examples/list-view-template.html",title:"List View Template",weight:0}}},{node:{fields:{layout:"",slug:"docs/css-framework/satellites/button-group.html",title:"Button Group",weight:0}}},{node:{fields:{layout:"",slug:"docs/css-framework/satellites/list_groups.html",title:"List Groups",weight:0}}},{node:{fields:{layout:"",slug:"docs/components/toolbars/management-toolbar.html",title:"Management Toolbar",weight:0}}},{node:{fields:{layout:"",slug:"docs/css-framework/satellites/forms/form-elements.html",title:"Form Elements",weight:0}}},{node:{fields:{layout:"",slug:"docs/components/cards.html",title:"Cards",weight:0}}},{node:{fields:{layout:"",slug:"docs/components/dataset-display.html",title:"Dataset Display",weight:0}}},{node:{fields:{layout:"",slug:"docs/components/dropdowns.html",title:"Dropdown Menu",weight:0}}},{node:{fields:{layout:"",slug:"docs/css-framework/page-examples/card-view-template.html",title:"Card View Template",weight:0}}},{node:{fields:{layout:"",slug:"docs/components/table/table.html",title:"Table",weight:0}}},{node:{fields:{layout:"",slug:"docs/components/modals.html",title:"Modals",weight:0}}},{node:{fields:{layout:"",slug:"docs/css-framework/satellites/cards.html",title:"Cards",weight:0}}},{node:{fields:{layout:"",slug:"docs/css-framework/satellites/forms/form-elements-input-groups.html",title:"Form Elements (Input Groups)",weight:0}}},{node:{fields:{layout:"",slug:"docs/css-framework/satellites/tables.html",title:"Tables",weight:0}}}]}}}},237:function(e,t,n){function a(e,t,n){for(var a=0;a<e.length&&e[a][t]!==n;)a++;return a<e.length&&e[a]}n(51),n(27),n(305),n(306),n(82),n(209),n(77),n(78);var o=/\s+/g;e.exports=function(e){for(var t=[],n=0;n<e.length;n++){var l=e[n];if("index"!==l.id||"redirect"!==l.layout)for(var s=l.link.split("/").filter(function(e){return e}),i=t,r=function(t){var n=s[t],o=a(i,"id",n);if(o)i=o.items;else if(l.id===n||"index"===l.id)i.push(l);else{var r=e.find(function(e){return e.link.endsWith(n+"/index")}),c={id:n,items:[],title:r.title,weight:r.weight};i.push(c),i=c.items}},c=0;c<s.length;c++)r(c)}return function e(t){return t.items&&(t.items=t.items.sort(function(e,t){var n=e.title.toUpperCase().replace(o,""),a=t.title.toUpperCase().replace(o,"");return e.weight<t.weight?1:e.weight>t.weight?-1:n>a?1:n<a?-1:void 0}),t.items.map(function(t){return e(t)})),t}(t[0]),t}},460:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(461);Object.defineProperty(t,"MDXTag",{enumerable:!0,get:function(){return l(a).default}});var o=n(235);function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"MDXProvider",{enumerable:!0,get:function(){return l(o).default}})},461:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),l=n(0),s=c(l),i=c(n(462)),r=n(235);function c(e){return e&&e.__esModule?e:{default:e}}var d={inlineCode:"code",wrapper:"div"},u=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,l.Component),o(t,[{key:"render",value:function(){var e=this.props,t=e.name,n=e.parentName,o=e.props,l=void 0===o?{}:o,r=e.children,c=e.components,u=void 0===c?{}:c,m=e.Layout,h=e.layoutProps,g=u[n+"."+t]||u[t]||d[t]||t;return m?((0,i.default)(this,m),s.default.createElement(m,a({components:u},h),s.default.createElement(g,l,r))):s.default.createElement(g,l,r)}}]),t}();t.default=(0,r.withMDXComponents)(u)},462:function(e,t,n){"use strict";var a={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},o={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},l=Object.defineProperty,s=Object.getOwnPropertyNames,i=Object.getOwnPropertySymbols,r=Object.getOwnPropertyDescriptor,c=Object.getPrototypeOf,d=c&&c(Object);e.exports=function e(t,n,u){if("string"!=typeof n){if(d){var m=c(n);m&&m!==d&&e(t,m,u)}var h=s(n);i&&(h=h.concat(i(n)));for(var g=0;g<h.length;++g){var p=h[g];if(!(a[p]||o[p]||u&&u[p])){var f=r(n,p);try{l(t,p,f)}catch(e){}}}return t}return t}}}]);
//# sourceMappingURL=component---gatsby-cache-gatsby-mdx-mdx-wrappers-dir-b-3-e-50-a-16333-d-9-b-01-d-2-c-597-eba-3328317-scope-hash-216-fd-2886-a-4-eb-651-dcb-7-b-06-d-675-ecd-19-js-6ab014ba086759e40c26.js.map