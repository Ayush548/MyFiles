(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var d,f="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b};function g(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}var h=g(this),k;
if("function"==typeof Object.setPrototypeOf)k=Object.setPrototypeOf;else{var l;a:{var m={a:!0},n={};try{n.__proto__=m;l=n.a;break a}catch(a){}l=!1}k=l?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var t=k;function u(a){if(!a.gwdIsLoaded()){var b=v(a);b?b.gwdIsLoaded()&&a.gwdLoad():a.gwdLoad()}}function w(a){if(!a.gwdIsActive()){var b=v(a);b?b.gwdIsActive()&&a.gwdActivate():a.gwdActivate()}}function x(a){return"gwd-page"==a.tagName.toLowerCase()||"gwd-page"==a.getAttribute("is")}function v(a){if(x(a))return a;for(;a&&9!=a.nodeType;)if((a=a.parentElement)&&x(a))return a;return null};function y(a,b){var c=void 0===c?null:c;var e=document.createEvent("CustomEvent");e.initCustomEvent(a,!0,!0,c);b.dispatchEvent(e)};function z(a){return Math.min(Math.max(a,1),Infinity)};var A={X:"alignment",Y:"autoplay",Z:"clipheight",$:"clipwidth",aa:"duration",ba:"endonstartframe",ca:"imagesource",da:"loopcount",ea:"offsetx",fa:"offsety",ga:"quickready",ha:"reverseplay",ia:"scaling",ja:"totalframecount"},B=[],C=0,D;for(D in A)B[C++]=A[D];
function E(){var a=HTMLElement.call(this)||this;a.V="gwd_spritesheet_"+(2147483648*Math.random()|0);a.g=null;a.G=!1;a.N=!1;a.s=null;a.T=0;a.S=0;a.L="";a.H=0;a.O=0;a.i=64;a.l=64;a.M=0;a.W=0;a.A=!1;a.U=!1;a.v=!1;a.j=1;a.u=100;a.o=0;a.h=0;a.B=0;a.m=!1;a.P=0;a.F=0;a.J=0;a.I=0;a.D="auto";a.R="top left";a.K=null;a.C=!1;return a}var F=HTMLElement;E.prototype=f(F.prototype);E.prototype.constructor=E;
if(t)t(E,F);else for(var G in F)if("prototype"!=G)if(Object.defineProperties){var H=Object.getOwnPropertyDescriptor(F,G);H&&Object.defineProperty(E,G,H)}else E[G]=F[G];d=E.prototype;
d.connectedCallback=function(){for(;this.firstChild;)this.removeChild(this.firstChild);this.g=this.ownerDocument.createElement("canvas");this.g.className=this.V;this.appendChild(this.g);this.T=parseInt(window.getComputedStyle(this,null).getPropertyValue("width"),10);this.S=parseInt(window.getComputedStyle(this,null).getPropertyValue("height"),10);this.A=this.hasAttribute("autoplay");this.U=this.hasAttribute("endonstartframe");this.v=this.hasAttribute("reverseplay");this.K=this.g.getContext("2d");
this.C=!0;I(this);J(this);u(this)};
d.attributeChangedCallback=function(a,b,c){switch(a){case "imagesource":this.C&&this.pause();this.L=c||"";this.C&&(this.G=!1,u(this));break;case "offsetx":this.H=parseInt(c,10);break;case "offsety":this.O=parseInt(c,10);break;case "clipwidth":this.i=z(parseInt(c,10));I(this);break;case "clipheight":this.l=z(parseInt(c,10));I(this);break;case "scaling":c?(this.D=c,I(this)):this.setAttribute(a,"auto");break;case "alignment":c?(this.R=c,J(this)):this.setAttribute(a,"top left");break;case "totalframecount":this.j=
z(parseInt(c,10));break;case "duration":this.u=z(parseInt(c,10));break;case "loopcount":this.o=parseInt(c,10);break;case "autoplay":(this.A="true"==c)?this.play():this.pause()}};d.gwdLoad=function(){/^[\s\xa0]*$/.test(this.L)?(this.G=!0,y("ready",this),w(this)):(K(this),this.hasAttribute("quickready")&&y("ready",this))};d.gwdIsLoaded=function(){return this.G};d.gwdActivate=function(){this.A?this.gwdIsLoaded()&&this.play():this.gwdIsLoaded()&&L(this,0);this.N=!0};
d.gwdDeactivate=function(){this.pause();this.N=!1};d.gwdIsActive=function(){return this.N};function L(a,b){if(a.s){var c=z(Math.floor((a.M-a.H)/a.i)),e=z(Math.floor(a.M/a.i)),p=a.H,q=a.O,r=b;b>=c&&(r=(b-c)%e,p=0,q+=a.l*Math.floor(1+(b-c)/e));a.K.clearRect(0,0,a.i,a.l);a.K.drawImage(a.s,p+r*a.i,q,a.i,a.l,0,0,a.i,a.l)}}
function I(a){if(a.C){var b=a.T/a.i,c=a.S/a.l;"100% 100%"==a.D?(a.g.style.width="100%",a.g.style.height="100%",a.style.overflow="visible"):"contain"==a.D?(b=b<c?b:c,a.g.style.width=a.i*b+"px",a.g.style.height=a.l*b+"px",a.style.overflow="visible"):("cover"==a.D?(b=b<c?c:b,a.g.style.width=a.i*b+"px",a.g.style.height=a.l*b+"px"):(a.g.style.width=a.i+"px",a.g.style.height=a.l+"px"),a.style.overflow="hidden");a.g.width=a.i;a.g.height=a.l}}
function J(a){if(a.C&&"100% 100%"!=a.D){var b=parseInt(a.g.style.width,10),c=parseInt(a.g.style.height,10);a.style.position="absolute;";a.g.style.position="relative";switch(a.R){case "center":a.g.style.left="50%";a.g.style.top="50%";a.g.style.transform="translate(-"+b/2+"px, -"+c/2+"px)";break;case "bottom":a.g.style.left="50%";a.g.style.top="100%";a.g.style.transform="translate(-"+b/2+"px, -"+c+"px)";break;case "bottom left":a.g.style.left="0%";a.g.style.top="100%";a.g.style.transform="translate(0px, -"+
c+"px)";break;case "bottom right":a.g.style.left="100%";a.g.style.top="100%";a.g.style.transform="translate(-"+b+"px, -"+c+"px)";break;case "left":a.g.style.left="0%";a.g.style.top="50%";a.g.style.transform="translate(0px, -"+c/2+"px)";break;case "right":a.g.style.left="100%";a.g.style.top="50%";a.g.style.transform="translate(-"+b+"px, -"+c/2+"px)";break;case "top":a.g.style.left="50%";a.g.style.top="0%";a.g.style.transform="translate(-"+b/2+"px, 0px)";break;case "top left":a.g.style.top="0%";a.g.style.left=
"0%";a.g.style.transform="translate(0px, 0px)";break;case "top right":a.g.style.top="0%",a.g.style.left="100%",a.g.style.transform="translate(-"+b+"px, 0px)"}}}
function M(a){a.m&&(L(a,a.h),a.v?(a.h=(a.h-1+a.j)%a.j,a.h==a.j-1&&a.B++):(a.h==a.j-1&&a.B++,a.h=(a.h+1)%a.j),a.o=parseInt(a.o,10),a.B<a.o||0==a.o?(a.F+=a.u,a.J=(new Date).getTime()-a.P-a.F,a.I=setTimeout(function(){M(a)},a.u-a.J)):a.I=1==a.U?setTimeout(function(){a.v?a.goToFrame(a.j-1):a.goToFrame(0);y("animationend",a)},a.u):setTimeout(function(){a.m=!1;y("animationend",a)},a.u))}function N(a){a.P=+new Date;a.F=-a.u;a.J=0;clearTimeout(a.I)}
function K(a){a.s=new Image;a.s.addEventListener("load",function(){a.M=parseInt(a.s.naturalWidth,10);a.W=parseInt(a.s.naturalHeight,10);N(a);a.v&&(a.h=a.j-1);L(a,a.h);1==a.A&&(a.m=!0,M(a));a.G=!0;y("ready",a);w(a)});a.s.src=a.L}d.getImage=function(){return this.s};d.getCurrentFrame=function(){return this.h};
d.newAnimation=function(a,b,c,e,p,q,r,O,P){this.H=parseInt(a,10);this.O=parseInt(b,10);this.v=P;this.A=O;this.j=parseInt(p,10);this.u=parseInt(q,10);this.o=parseInt(r,10);this.B=this.h=0;a=z(parseInt(c,10));e=z(parseInt(e,10));if(a!=this.i||e!=this.l)this.i=a,this.l=e,I(this);1==this.v&&(this.h=this.j-1);this.B=0;1==this.A?this.restart():(this.m=!1,L(this,0))};d.goToFrame=function(a){0>a&&(a=this.j-Math.abs(a)%this.j);this.h=a%this.j;L(this,this.h);this.m=!1};
d.play=function(){(this.B<this.o||0==this.o)&&0==this.m&&(y("animationplay",this),this.m=!0,N(this),M(this))};d.pause=function(){this.m&&(y("animationpause",this),this.m=!1)};d.togglePlay=function(){0==this.m?this.play():this.pause()};d.restart=function(){y("animationrestart",this);this.h=0;this.v&&(this.h=this.j-1);this.B=0;0==this.m&&this.play()};d.previousFrame=function(){this.h--;this.goToFrame(this.h)};d.nextFrame=function(){this.h++;this.goToFrame(this.h)};
h.Object.defineProperties(E,{observedAttributes:{configurable:!0,enumerable:!0,get:function(){return B}}});customElements.define("gwd-spritesheet",E);}).call(this);