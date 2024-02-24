(function(x,o){typeof exports=="object"&&typeof module<"u"?o(exports):typeof define=="function"&&define.amd?define(["exports"],o):(x=typeof globalThis<"u"?globalThis:x||self,o(x.nmscdCoordinateConversion={}))})(this,function(x){"use strict";const o={generic:"Validation failed",atleast1InputIsRequired:"You need to pass in at least 1 input",cannotBeNull:e=>`${e} cannot be null`,unexpectedValue:(e,t,n)=>`${e} is an unexpected value (${t}), expected values ${n.join(", ")}`,minLength:e=>`Minimum length required is ${e}`,maxLength:e=>`Text is too long! Maximum length allowed is ${e}`,minValue:(e,t)=>`Minimum value for ${e} is ${t}`,maxValue:(e,t)=>`Maximum value for ${e} allowed is ${t}`,unexpectedPattern:(e,t)=>`${e} has a value (${t}) which does not match the expected pattern`,minNumItems:(e,t)=>`Minimum number of ${e} that need to be provided is ${t}`,maxNumItems:(e,t)=>`Maximum number of ${e} allowed to be provided is ${t}`},m=e=>()=>{var n;const t=e.inputValidator(e.input);if(t.isValid===!1)return{isSuccess:!1,value:{},errorMessage:t.errorMessage??o.generic};try{return{isSuccess:!0,errorMessage:"",value:e.converter(e.input)}}catch(r){return{isSuccess:!1,value:{},errorMessage:((n=r==null?void 0:r.toString)==null?void 0:n.call(r))??"Unknown exception occurred during conversion"}}},p=19,b=16,C=12,G=-768,A=768,w=1,D=15,L=1,O=15;function M(e){if(e.length!==p)return e;const t=2049,n=2047,r=129,l=127,s=parseInt(e.substring(0,4),16),i=parseInt(e.substring(5,9),16),c=parseInt(e.substring(10,14),16),g=parseInt(e.substring(15,19),16);let a=0,d=0,u=0;s<n?a=s+t:a=s-n,c<n?u=c+t:u=c-n,i<l?d=i+r:d=i-l;const V=["0",g.toString(16).toUpperCase().padStart(3,"0"),d.toString(16).toUpperCase().padStart(2,"0"),u.toString(16).toUpperCase().padStart(3,"0"),a.toString(16).toUpperCase().padStart(3,"0")].join("");return V.length===C?V:""}function R(e){const t=e.substring(9,12),n=e.substring(4,6),r=e.substring(6,9),l=e.substring(1,4),s=e.substring(0,1);return[t,n,r,l,s]}function N(e){if(e.length!==C)return{};const n=R(e).map(u=>parseInt(u,16)),r=n[0],l=n[1],s=n[2],i=n[3],c=n[4];let g,a,d;return r>2047?g=r-4096:g=r,s>2047?d=s-4096:d=s,l>127?a=l-256:a=l,{voxelX:g,voxelY:a,voxelZ:d,solarSystemIndex:i,planetIndex:c}}function U(e){if(e.length!==p)return{};const t=M(e);return N(t)}const $=e=>{let t="";return e.code!=null?e.code.length===p?t=e.code:e.code.length===b&&(t=e.code.split("").flatMap((n,r)=>r!==b-1&&r%4===3?[n,":"]:[n]).join("")):e.groups!=null&&(t=e.groups.join(":")),t};var y=(e=>(e[e.Glyphs=0]="Glyphs",e[e.GalacticCoordinates=1]="GalacticCoordinates",e[e.VoxelCoordinates=2]="VoxelCoordinates",e))(y||{});const f=e=>t=>t!==null?{isValid:!0}:{isValid:!1,errorMessage:e??"Field shouldn't be empty"},S=(...e)=>t=>{for(const n of e){const r=n(t);if(r.isValid===!1)return r}return{isValid:!0}},B=(...e)=>t=>{const n=(t==null?void 0:t.length)??0;return e.includes(n)?{isValid:!0}:{isValid:!1,errorMessage:o.unexpectedValue("Length",n,e)}},_=(e,t)=>n=>{const r=n??"",l=e.split("");for(const s of r)if(l.includes(s)===!1)return{isValid:!1,errorMessage:o.unexpectedValue(t??"Character",s,l)};return{isValid:!0}},q=e=>S(f(o.cannotBeNull(y.GalacticCoordinates.toString())),B(b,p),_(":1234567890abcdefABCDEF"))(e),Y=e=>e.code==null&&e.groups==null?{isValid:!1,errorMessage:o.atleast1InputIsRequired}:e.code!=null?q(e.code):{isValid:!0},k=e=>({toGlyph:m({input:e,inputValidator:Y,converter:t=>{const n=$(t),r=M(n);return{code:r,hexArray:r.split("")}}}),toVoxel:m({input:e,inputValidator:Y,converter:t=>{const n=$(t);return U(n)}})});function j(e){if(e.length!==C)return"";const t=2049,n=2047,r=129,l=127,s=parseInt(e.substring(9,12),16),i=parseInt(e.substring(4,6),16),c=parseInt(e.substring(6,9),16),g=e.substring(1,4);let a=0,d=0,u=0;s>=t?a=s-t:a=s+n,c>=t?u=c-t:u=c+n,i>=r?d=i-r:d=i+l;const V=[a,d,u].map(ne=>ne.toString(16).toUpperCase().padStart(4,"0"));return V[3]=g.padStart(4,"0"),V.join(":")}const F=e=>{var n;let t="";return e.code!=null?t=e.code:e.hexArray!=null?t=e.hexArray.join(""):e.numberArray!=null&&(t=e.numberArray.map(r=>r.toString(16)).join("")),(n=t==null?void 0:t.toLocaleLowerCase)==null?void 0:n.call(t)},X=(e,t=[])=>e==null?t:Array.isArray(e)==!0?[...e]:e!=null?[e]:t,Z=(e,t)=>n=>X(n).length>=e?{isValid:!0}:{isValid:!1,errorMessage:o.minNumItems(t??"item",e)},z=(e,t)=>n=>X(n).length<e?{isValid:!0}:{isValid:!1,errorMessage:o.maxNumItems(t??"item",e)},J=e=>S(f(o.cannotBeNull(y.Glyphs.toString())),_("1234567890abcdefABCDEF"),B(12))(e),K=e=>S(f(o.cannotBeNull(y.Glyphs.toString())),n=>_("1234567890abcdefABCDEF")(n.join("")),Z(12),z(12))(e),Q=e=>S(f(o.cannotBeNull(y.Glyphs.toString())),n=>_("1234567890abcdefABCDEF")(n.map(r=>r.toString(16)).join("")),Z(12),z(12))(e),E=e=>e.code==null&&e.hexArray==null&&e.numberArray==null?{isValid:!1,errorMessage:o.atleast1InputIsRequired}:e.code!=null?J(e.code):e.hexArray!=null?K(e.hexArray):e.numberArray!=null?Q(e.numberArray):{isValid:!0},W=e=>({toGalacticCoordinates:m({input:e,inputValidator:E,converter:t=>{const n=F(t),r=j(n);return{code:r,groups:r.split(":")}}}),toVoxel:m({input:e,inputValidator:E,converter:t=>{const n=F(t);return N(n)}})});function H({voxelX:e,voxelY:t,voxelZ:n,solarSystemIndex:r,planetIndex:l}){let s,i,c;e<0?s=e+4096:s=e,n<0?c=n+4096:c=n,t<0?i=t+256:i=t;const a=[r,i,c,s].map(I=>I.toString(16).toUpperCase()),d=a.splice(1,1)[0].padStart(2,"0"),u=a.map(I=>I.padStart(3,"0"));return u.splice(1,0,d),`${l}${u.join("")}`}function P(e){const t=H(e);return j(t)}const h=(e,t)=>n=>(n??0)>=e?{isValid:!0}:{isValid:!1,errorMessage:o.minValue(t??"property",e)},v=(e,t)=>n=>(n??0)<e?{isValid:!0}:{isValid:!1,errorMessage:o.maxValue(t??"property",e)},T=e=>{const t=f(o.cannotBeNull("voxelInput"))(e);if(t.isValid===!1)return t;const n=[()=>f(o.cannotBeNull("voxelX"))(e.voxelX),()=>h(G,"voxelX")(e.voxelX),()=>v(A,"voxelX")(e.voxelX),()=>f(o.cannotBeNull("voxelY"))(e.voxelY),()=>h(G,"voxelY")(e.voxelY),()=>v(A,"voxelY")(e.voxelY),()=>f(o.cannotBeNull("voxelZ"))(e.voxelZ),()=>h(G,"voxelZ")(e.voxelZ),()=>v(A,"voxelZ")(e.voxelZ),()=>f(o.cannotBeNull("solarSystemIndex"))(e.solarSystemIndex),()=>h(w,"solarSystemIndex")(e.solarSystemIndex),()=>v(D,"solarSystemIndex")(e.solarSystemIndex),()=>f(o.cannotBeNull("planetIndex"))(e.planetIndex),()=>h(L,"planetIndex")(e.planetIndex),()=>v(O,"planetIndex")(e.planetIndex)];for(const r of n){const l=r();if(l.isValid!==!0)return l}return{isValid:!0}},ee=e=>({toGlyph:m({input:e,inputValidator:T,converter:t=>{const n=H(t);return{code:n,hexArray:n.split("")}}}),toGalacticCoordinates:m({input:e,inputValidator:T,converter:t=>{const n=P(t);return{code:n,groups:n.split(":")}}})}),te=()=>"1.2.0";x.GalacticCoordinate=k,x.PortalCode=W,x.VoxelCoordinate=ee,x.getPackageVersion=te,Object.defineProperty(x,Symbol.toStringTag,{value:"Module"})});
