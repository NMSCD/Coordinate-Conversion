(function(a,o){typeof exports=="object"&&typeof module<"u"?o(exports):typeof define=="function"&&define.amd?define(["exports"],o):(a=typeof globalThis<"u"?globalThis:a||self,o(a.nmscdCoordinateConversion={}))})(this,function(a){"use strict";const o={generic:"Validation failed",atleast1InputIsRequired:"You need to pass in at least 1 input",cannotBeNull:e=>`${e} cannot be null`,unexpectedValue:(e,t,n)=>`${e} is an unexpected value (${t}), expected values ${n.join(", ")}`,minLength:e=>`Minimum length required is ${e}`,maxLength:e=>`Text is too long! Maximum length allowed is ${e}`,minValue:(e,t)=>`Minimum value for ${e} is ${t}`,maxValue:(e,t)=>`Maximum value for ${e} allowed is ${t}`,unexpectedPattern:(e,t)=>`${e} has a value (${t}) which does not match the expected pattern`,minNumItems:(e,t)=>`Minimum number of ${e} that need to be provided is ${t}`,maxNumItems:(e,t)=>`Maximum number of ${e} allowed to be provided is ${t}`},y=e=>()=>{var n;const t=e.inputValidator(e.input);if(t.isValid===!1)return{isSuccess:!1,value:{},errorMessage:t.errorMessage??o.generic};try{return{isSuccess:!0,errorMessage:"",value:e.converter(e.input)}}catch(r){return{isSuccess:!1,value:{},errorMessage:((n=r==null?void 0:r.toString)==null?void 0:n.call(r))??"Unknown exception occurred during conversion"}}},p=19,C=16,b=12,G=-768,A=768,L=1,O=15,R=1,U=15;function M(e){if(e.length!==p)return e;const t=2049,n=2047,r=129,l=127,s=parseInt(e.substring(0,4),16),c=parseInt(e.substring(5,9),16),d=parseInt(e.substring(10,14),16),g=parseInt(e.substring(15,19),16);let i=0,u=0,f=0;s<n?i=s+t:i=s-n,d<n?f=d+t:f=d-n,c<l?u=c+r:u=c-l;const V=["0",g.toString(16).toUpperCase().padStart(3,"0"),u.toString(16).toUpperCase().padStart(2,"0"),f.toString(16).toUpperCase().padStart(3,"0"),i.toString(16).toUpperCase().padStart(3,"0")].join("");return V.length===b?V:""}function q(e){const t=e.substring(9,12),n=e.substring(4,6),r=e.substring(6,9),l=e.substring(1,4),s=e.substring(0,1);return[t,n,r,l,s]}function N(e){if(e.length!==b)return{};const n=q(e).map(f=>parseInt(f,16)),r=n[0],l=n[1],s=n[2],c=n[3],d=n[4];let g,i,u;return r>2047?g=r-4096:g=r,s>2047?u=s-4096:u=s,l>127?i=l-256:i=l,{voxelX:g,voxelY:i,voxelZ:u,solarSystemIndex:c,planetIndex:d}}function B(e){if(e.length!==p)return{};const t=M(e);return N(t)}const X=e=>{let t="";return e.code!=null?e.code.length===p?t=e.code:e.code.length===C&&(t=e.code.split("").flatMap((n,r)=>r!==C-1&&r%4===3?[n,":"]:[n]).join("")):e.groups!=null&&(t=e.groups.join(":")),t};var h=(e=>(e[e.Glyphs=0]="Glyphs",e[e.GalacticCoordinates=1]="GalacticCoordinates",e[e.VoxelCoordinates=2]="VoxelCoordinates",e))(h||{});const x=e=>t=>t!==null?{isValid:!0}:{isValid:!1,errorMessage:e??"Field shouldn't be empty"},S=(...e)=>t=>{for(const n of e){const r=n(t);if(r.isValid===!1)return r}return{isValid:!0}},Z=(...e)=>t=>{const n=(t==null?void 0:t.length)??0;return e.includes(n)?{isValid:!0}:{isValid:!1,errorMessage:o.unexpectedValue("Length",n,e)}},_=(e,t)=>n=>{const r=n??"",l=e.split("");for(const s of r)if(l.includes(s)===!1)return{isValid:!1,errorMessage:o.unexpectedValue(t??"Character",s,l)};return{isValid:!0}},k=e=>S(x(o.cannotBeNull(h.GalacticCoordinates.toString())),Z(C,p),_(":1234567890abcdefABCDEF"))(e),j=e=>e.code==null&&e.groups==null?{isValid:!1,errorMessage:o.atleast1InputIsRequired}:e.code!=null?k(e.code):{isValid:!0},J=e=>({toGlyph:y({input:e,inputValidator:j,converter:t=>{const n=X(t),r=M(n);return{code:r,hexArray:r.split("")}}}),toVoxel:y({input:e,inputValidator:j,converter:t=>{const n=X(t);return B(n)}})});function $(e){if(e.length!==b)return"";const t=2049,n=2047,r=129,l=127,s=parseInt(e.substring(9,12),16),c=parseInt(e.substring(4,6),16),d=parseInt(e.substring(6,9),16),g=e.substring(1,4);let i=0,u=0,f=0;s>=t?i=s-t:i=s+n,d>=t?f=d-t:f=d+n,c>=r?u=c-r:u=c+l;const V=[i,u,f].map(ne=>ne.toString(16).toUpperCase().padStart(4,"0"));return V[3]=g.padStart(4,"0"),V.join(":")}function Y({voxelX:e,voxelY:t,voxelZ:n,solarSystemIndex:r,planetIndex:l}){let s,c,d;e<0?s=e+4096:s=e,n<0?d=n+4096:d=n,t<0?c=t+256:c=t;const i=[r,c,d,s].map(I=>I.toString(16).toUpperCase()),u=i.splice(1,1)[0].padStart(2,"0"),f=i.map(I=>I.padStart(3,"0"));return f.splice(1,0,u),`${l}${f.join("")}`}function z(e){const t=Y(e);return $(t)}const F=e=>{var n;let t="";return e.code!=null?t=e.code:e.hexArray!=null?t=e.hexArray.join(""):e.numberArray!=null&&(t=e.numberArray.map(r=>r.toString(16)).join("")),(n=t==null?void 0:t.toLocaleLowerCase)==null?void 0:n.call(t)},E=(e,t=[])=>e==null?t:Array.isArray(e)==!0?[...e]:e!=null?[e]:t,H=(e,t)=>n=>E(n).length>=e?{isValid:!0}:{isValid:!1,errorMessage:o.minNumItems(t??"item",e)},T=(e,t)=>n=>E(n).length<e?{isValid:!0}:{isValid:!1,errorMessage:o.maxNumItems(t??"item",e)},K=e=>S(x(o.cannotBeNull(h.Glyphs.toString())),_("1234567890abcdefABCDEF"),Z(12))(e),Q=e=>S(x(o.cannotBeNull(h.Glyphs.toString())),n=>_("1234567890abcdefABCDEF")(n.join("")),H(12),T(12))(e),W=e=>S(x(o.cannotBeNull(h.Glyphs.toString())),n=>_("1234567890abcdefABCDEF")(n.map(r=>r.toString(16)).join("")),H(12),T(12))(e),w=e=>e.code==null&&e.hexArray==null&&e.numberArray==null?{isValid:!1,errorMessage:o.atleast1InputIsRequired}:e.code!=null?K(e.code):e.hexArray!=null?Q(e.hexArray):e.numberArray!=null?W(e.numberArray):{isValid:!0},P=e=>({toGalacticCoordinates:y({input:e,inputValidator:w,converter:t=>{const n=F(t),r=$(n);return{code:r,groups:r.split(":")}}}),toVoxel:y({input:e,inputValidator:w,converter:t=>{const n=F(t);return N(n)}})}),m=(e,t)=>n=>(n??0)>=e?{isValid:!0}:{isValid:!1,errorMessage:o.minValue(t??"property",e)},v=(e,t)=>n=>(n??0)<e?{isValid:!0}:{isValid:!1,errorMessage:o.maxValue(t??"property",e)},D=e=>{const t=x(o.cannotBeNull("voxelInput"))(e);if(t.isValid===!1)return t;const n=[()=>x(o.cannotBeNull("voxelX"))(e.voxelX),()=>m(G,"voxelX")(e.voxelX),()=>v(A,"voxelX")(e.voxelX),()=>x(o.cannotBeNull("voxelY"))(e.voxelY),()=>m(G,"voxelY")(e.voxelY),()=>v(A,"voxelY")(e.voxelY),()=>x(o.cannotBeNull("voxelZ"))(e.voxelZ),()=>m(G,"voxelZ")(e.voxelZ),()=>v(A,"voxelZ")(e.voxelZ),()=>x(o.cannotBeNull("solarSystemIndex"))(e.solarSystemIndex),()=>m(L,"solarSystemIndex")(e.solarSystemIndex),()=>v(O,"solarSystemIndex")(e.solarSystemIndex),()=>x(o.cannotBeNull("planetIndex"))(e.planetIndex),()=>m(R,"planetIndex")(e.planetIndex),()=>v(U,"planetIndex")(e.planetIndex)];for(const r of n){const l=r();if(l.isValid!==!0)return l}return{isValid:!0}},ee=e=>({toGlyph:y({input:e,inputValidator:D,converter:t=>{const n=Y(t);return{code:n,hexArray:n.split("")}}}),toGalacticCoordinates:y({input:e,inputValidator:D,converter:t=>{const n=z(t);return{code:n,groups:n.split(":")}}})}),te=()=>"1.1.0";a.GalacticCoordinate=J,a.PortalCode=P,a.VoxelCoordinate=ee,a.coords2Glyphs=M,a.coords2XYZ=B,a.getPackageVersion=te,a.glyphs2Coords=$,a.glyphs2XYZ=N,a.xyz2Coords=z,a.xyz2Glyphs=Y,Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});
