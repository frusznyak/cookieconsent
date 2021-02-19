/*
 CookieConsent v2
 https://www.github.com/orestbida/cookieconsent
 Author Orest Bida
 Released under the MIT License
*/
(function(U){function da(){function V(b,a){return b.classList?b.classList.contains(a):!!b.className.match(new RegExp("(\\s|^)"+a+"(\\s|$)"))}function P(b,a){b.classList?b.classList.remove(a):b.className=b.className.replace(new RegExp("(\\s|^)"+a+"(\\s|$)")," ")}function u(b,a){b.classList?b.classList.add(a):V(b,a)||(b.className+=" "+a)}function I(b){if("object"===typeof b){var a=[],c=0;for(a[c++]in b);return a}}function x(b,a,c,d,f){d=d||!1;var k="number"!==typeof f?c:function(){c(f)};if(b.addEventListener)d?
b.addEventListener(a,k,{passive:!0}):b.addEventListener(a,k,!1);else{if("click"==a||"focus"==a)a="onclick";b.attachEvent(a,k)}}function J(b){return(b=document.cookie.match("(^|;)\\s*"+b+"\\s*=\\s*([^;]+)"))?b.pop():""}function W(b,a){var c=document.createElement("link");c.rel="preload";c.href=b;c.setAttribute("as",a);document.getElementsByTagName("head")[0].appendChild(c)}function K(b,a){var c=document.querySelectorAll(".c_toggle"),d="",f=!1;if("number"===typeof c.length){switch(a){case -1:for(a=
0;a<c.length;a++)c[a].checked?(d+='"'+c[a].value+'",',r[a]||(f=!0,r[a]=!0)):r[a]&&(f=!0,r[a]=!1);break;case 0:for(a=0;a<c.length;a++)c[a].readOnly?(d+='"'+c[a].value+'",',r[a]=!0):(c[a].checked=!1,r[a]&&(f=!0,r[a]=!1));break;case 1:for(a=0;a<c.length;a++)c[a].checked=!0,d+='"'+c[a].value+'",',r[a]||(f=!0),r[a]=!0}d=d.slice(0,-1);if(b.autoclear_cookies&&L){c=b.languages[t].settings_modal.blocks;a=c.length;for(var k=-1,h=0;h<a;h++){var l=c[h];if(l.hasOwnProperty("toggle")&&!r[++k]&&l.hasOwnProperty("cookie_table"))for(var m=
I(b.languages[t].settings_modal.cookie_table_headers[0])[0],B=l.cookie_table.length,E=0;E<B;E++){var e=l.cookie_table[E];""!=J(e[m])&&(e=e[m],document.cookie=e+"=; Path=/; Domain="+location.host+"; Expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie=e+"=; Path=/; Domain=."+location.host+"; Expires=Thu, 01 Jan 1970 00:00:01 GMT;")}}}}d='{"level": ['+d+"]}";c=new Date;c.setTime(c.getTime()+864E5*X);c="; expires="+c.toUTCString();document.cookie="https:"===location.protocol?"cc_cookie="+(d||"")+
c+"; path=/; Domain="+location.host+"; SameSite=Lax; Secure":"cc_cookie="+(d||"")+c+"; path=/; Domain="+location.host+"; SameSite=Lax;";if("function"===typeof b.onAccept&&!L)return L=!0,b.onAccept();if("function"===typeof b.onChange&&f)b.onChange()}function Y(b,a){C=document.createElement("div");C.setAttribute("c_data","c_cookie_main");C.style.position="fixed";C.style.zIndex="1000000";C.innerHTML='\x3c!--[if lt IE 9 ]><div id="cc_div" class="ie"></div><![endif]--\x3e\x3c!--[if (gt IE 8)|!(IE)]>\x3c!--\x3e<div id="cc_div"></div>\x3c!--<![endif]--\x3e';
var c=C.children[0];if(!b){v=document.createElement("div");var d=document.createElement("h1"),f=document.createElement("p"),k=document.createElement("div"),h=document.createElement("button"),l=document.createElement("button");v.id="cm";d.id="cm_title";f.id="cm_text";k.id="cm_btns";h.id="cm_primary_btn";l.id="cm_secondary_btn";h.setAttribute("type","button");h.className="c_button";l.className="c_link";v.style.visibility="hidden";l.setAttribute("type","button");var m=t;d.innerHTML=a.languages[m].consent_modal.title;
f.innerHTML=a.languages[m].consent_modal.description;h.innerHTML=a.languages[m].consent_modal.primary_btn.text;l.innerHTML=a.languages[m].consent_modal.secondary_btn.text;"accept_all"==a.languages[m].consent_modal.primary_btn.role?x(h,"click",function(){g.hide();K(a,1)}):x(h,"click",function(){g.hide();K(a,-1)});v.appendChild(d);v.appendChild(f);k.appendChild(h);k.appendChild(l);v.appendChild(k);"accept_necessary"==a.languages[m].consent_modal.secondary_btn.role?x(l,"click",function(){g.hide();K(a,
0)}):x(l,"click",function(){g.showSettings(0)});c.appendChild(v);Q=!0}y=document.createElement("div");d=document.createElement("div");f=document.createElement("div");k=document.createElement("div");h=document.createElement("div");l=document.createElement("h1");m=document.createElement("div");var B=document.createElement("button"),E=document.createElement("div");B.setAttribute("type","button");y.id="cs_cont";d.id="cs_valign";k.id="cs_cont_inner";f.id="cs";l.id="cs_title";h.id="cs_inner";m.id="cs_header";
E.id="cs_blocks";B.id="cs_close_btn";B.innerHTML="x";B.className="c_button";x(B,"click",function(){g.hideSettings()});var e=a.languages[t].settings_modal.blocks,D=e.length;l.innerHTML=a.languages[t].settings_modal.title;for(var R=0,M=[],p=0;p<D;++p){var N=document.createElement("div"),w=document.createElement("div"),O=document.createElement("div"),q=document.createElement("h2"),z=document.createElement("p");N.className="cs_block";q.className="b_title";w.className="title";O.className="desc";q.innerHTML=
e[p].title;z.innerHTML=e[p].description;w.appendChild(q);if("undefined"!==typeof e[p].toggle){q=document.createElement("label");var n=document.createElement("input"),A=document.createElement("span");q.className="c_b_toggle";n.className="c_toggle";n.setAttribute("aria-label","toggle");A.className="sc_toggle";n.setAttribute("type","checkbox");n.value=e[p].toggle.value;n.setAttribute("aria-label",e[p].toggle.value);b?g.g(JSON.parse(J("cc_cookie")).level,e[p].toggle.value)?(n.checked=!0,r.push(!0)):r.push(!1):
e[p].toggle.enabled&&(n.checked=!0);e[p].toggle.readonly&&(n.disabled="disabled",n.readOnly=!0,u(A,"sc_readonly"));q.appendChild(n);q.appendChild(A);w.appendChild(q);u(O,"accordion");u(w,"block_button");u(N,"block__expand");M.push(w);x(M[R],"click",function(S){V(M[S].parentNode,"_active")?P(M[S].parentNode,"_active"):u(M[S].parentNode,"_active")},!1,R);R++}N.appendChild(w);O.appendChild(z);if("undefined"!==typeof e[p].cookie_table){w=document.createElement("table");A=document.createElement("thead");
var H=document.createElement("tr");z=a.languages[t].settings_modal.cookie_table_headers;for(var F=0;F<z.length;++F){var G=document.createElement("th");q=I(z[F])[0];n=z[F][q];G.innerHTML=n;H.appendChild(G)}A.appendChild(H);w.appendChild(A);A=document.createElement("tbody");for(H=0;H<e[p].cookie_table.length;H++){F=document.createElement("tr");for(G=0;G<z.length;++G){var T=document.createElement("td");q=I(z[G])[0];n=e[p].cookie_table[H][q];T.innerHTML=n;T.setAttribute("data-column",z[G][q]);F.appendChild(T)}A.appendChild(F)}w.appendChild(A);
O.appendChild(w)}N.appendChild(O);E.appendChild(N)}b=document.createElement("div");e=document.createElement("button");D=document.createElement("button");b.id="cs_buttons";e.id="cs_save__btn";D.id="cs_acceptall_btn";e.setAttribute("type","button");D.setAttribute("type","button");e.className="c_button";D.className="c_button";e.innerHTML=a.languages[t].settings_modal.save_settings_btn;D.innerHTML=a.languages[t].settings_modal.accept_all_btn;b.appendChild(D);b.appendChild(e);x(e,"click",function(){g.hideSettings();
g.hide();K(a,-1)});x(D,"click",function(){g.hideSettings();g.hide();K(a,1)});m.appendChild(l);m.appendChild(B);h.appendChild(m);h.appendChild(E);h.appendChild(b);k.appendChild(h);f.appendChild(k);d.appendChild(f);y.appendChild(d);y.style.visibility="hidden";c.appendChild(y);document.body.appendChild(C)}function Z(b,a){if(a.hasOwnProperty(b))return b;if(0<I(a).length)return a.hasOwnProperty(t)?t:I(a)[0]}function aa(){for(var b=document.querySelectorAll('a[data-cc="c-settings"], button[data-cc="c-settings"]'),
a=0;a<b.length;a++)x(b[a],"click",function(c){c.preventDefault?c.preventDefault():c.returnValue=!1;g.showSettings()})}function ea(b){"number"===typeof b.cookie_expiration&&(X=b.cookie_expiration);"boolean"===typeof b.autorun&&(ba=b.autorun);if(b.auto_language){var a=navigator.language||navigator.browserLanguage;2<a.length&&(a=a[0]+a[1]);t=Z(a.toLowerCase(),b.languages)}else"string"===typeof b.current_lang&&(t=Z(b.current_lang,b.languages))}function ca(b,a){if(b.autoload_css){W(b.theme_css,"style");
var c=document.createElement("link");c.href=b.theme_css;c.rel="stylesheet";c.type="text/css";if("sheet"in c){var d="sheet";var f="cssRules"}else d="styleSheet",f="rules";var k=setInterval(function(){try{c[d]&&c[d][f].length&&(clearInterval(k),a())}catch(h){clearInterval(k),a()}},100);document.getElementsByTagName("head")[0].appendChild(c)}else a()}var g={},Q=!1,L=!1,C=null,v=null,y=null,r=[],t="en",ba=!0,X=182;g.g=function(b,a){for(var c=b.length,d=0;d<c;d++)if(b[d]==a)return!0;return!1};g.allowedCategory=
function(b){return this.g(JSON.parse(J("cc_cookie")).level||[],b)};g.run=function(b){if(!C){ea(b);var a=J("cc_cookie");a?(Y(!0,b),ca(b,function(){aa();u(y,"c_anim");"function"!==typeof b.onAccept||L||(L=!0,b.onAccept(JSON.parse(""!=a?a:"null")))})):(Y(!1,b),ca(b,function(){aa();u(v,"c_anim");u(y,"c_anim");ba&&g.show(b.delay||0)}))}};g.showSettings=function(b){setTimeout(function(){u(y,"cshow")},"number"===typeof b&&0<b?b:0)};g.loadScript=function(b,a,c,d){if(document.querySelector('script[src="'+
b+'"]'))a();else{c&&W(b,"script");c=document.createElement("script");if(d&&0<d.length)for(var f=0;f<d.length;++f)c.setAttribute(d[f].name,d[f].value);c.onload=function(){a()};c.src=b;document.getElementsByTagName("head")[0].appendChild(c)}};g.show=function(b){Q&&setTimeout(function(){u(v,"cshow")},"number"===typeof b&&0<b?b:0)};g.hide=function(){Q&&P(v,"cshow")};g.hideSettings=function(){P(y,"cshow")};g.validCookie=function(b){return""!=J(b)};return g}"undefined"===typeof U.initCookieConsent&&(U.initCookieConsent=
function(){return da()})})(window);
