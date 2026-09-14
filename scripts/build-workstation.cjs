const fs=require('node:fs');
const path=require('node:path');
const {Resvg}=require('@resvg/resvg-js');
const root=path.resolve(__dirname,'..'),out=path.join(root,'assets/workstation');
fs.mkdirSync(out,{recursive:true});
const C={bg:'#0B0D10',s:'#12161C',up:'#161B22',t:'#E8E6DF',m:'#8B949E',a:'#F2A93B',b:'#6F8FAF',line:'#2A323C'};
const E=s=>String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;');
const box=(x,y,w,h,f=C.s,stroke=C.line,r=0)=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" fill="${f}" stroke="${stroke}"/>`;
const T=(x,y,s,n=32,c=C.t,weight=400,font='Segoe UI')=>`<text x="${x}" y="${y}" font-family="${font}" font-size="${n}" font-weight="${weight}" fill="${c}">${E(s)}</text>`;
const M=(x,y,s,n=25,c=C.m)=>T(x,y,s,n,c,400,'Consolas');
const P=(d,c=C.line,w=2,f='none')=>`<path d="${d}" stroke="${c}" stroke-width="${w}" fill="${f}" stroke-linecap="round" stroke-linejoin="round"/>`;
const L=(x,y,X,Y,c=C.line,w=1)=>P(`M${x} ${y}L${X} ${Y}`,c,w);
const O=(x,y,r,c=C.b,f='none')=>`<circle cx="${x}" cy="${y}" r="${r}" stroke="${c}" fill="${f}" stroke-width="2"/>`;
const group=(x,y,s,body)=>`<g transform="translate(${x} ${y}) scale(${s})">${body}</g>`;
function icon(type){
 if(type==='book')return P('M8 18Q45 4 80 27Q115 4 152 18V119Q115 104 80 127Q45 104 8 119Z',C.b,2,C.up)+L(80,27,80,127,C.b,2)+P('M24 43Q44 37 63 47M24 63Q44 57 63 67M24 83Q44 77 58 84',C.m)+P('M95 46Q115 35 136 42',C.a,4)+P('M95 67Q115 57 136 64M95 88Q115 78 131 85',C.m);
 if(type==='cat')return O(80,78,73,C.line)+P('M32 82L38 24L61 46Q80 40 100 46L123 24L128 82Q123 122 80 130Q37 122 32 82Z',C.b,2,C.up)+P('M48 76L63 79M98 79L113 76',C.a,4)+P('M74 96H86L80 102Z',C.m,1,C.m)+P('M0 140H27L40 154H131L147 131H160',C.b);
 if(type==='os')return box(0,12,180,117,C.bg,C.b,4)+L(0,37,180,37,C.b)+O(14,25,3,C.a,C.a)+box(15,51,52,62,C.up)+box(82,51,82,23,C.s,C.b)+box(82,86,82,27,C.up)+P('M70 143H115M92 129V143',C.b)+P('M180 70H204V113H220',C.a)+box(220,90,59,42,C.bg,C.a,3)+box(216,9,66,39,C.up)+P('M216 29H199V55H180',C.b)+L(232,103,265,103,C.a,2);
 if(type==='life')return O(105,102,90,C.line)+O(105,102,69,C.b)+P('M30 56L82 67L119 24L164 81L140 150L68 176L82 67L140 150M82 67L164 81M30 56L68 176',C.b)+O(30,56,8,C.b,C.bg)+O(82,67,18,C.b,C.up)+O(119,24,9,C.a,C.bg)+O(164,81,12,C.b,C.up)+O(140,150,23,C.b,C.up)+O(68,176,10,C.b,C.bg)+O(82,67,5,C.a,C.a)+O(140,150,7,C.a,C.a);
 if(type==='face')return P('M39 10Q80 -3 121 10L140 46L130 113L80 145L30 113L20 46Z',C.b)+P('M35 51Q53 38 71 51M90 51Q108 38 126 51M66 105Q80 116 96 105',C.b,3)+O(54,65,5,C.a,C.a)+O(108,65,5,C.a,C.a)+P('M80 43V90H92',C.m)+L(13,81,147,81,C.line)+O(80,145,4,C.b,C.bg);
}
function svg(w,h,title,body){return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" role="img" aria-labelledby="title"><title id="title">${E(title)}</title>${box(.5,.5,w-1,h-1,C.bg)}${body}</svg>`;}
const fontDir=path.join(process.env.WINDIR||'C:/Windows','Fonts');
const fontFiles=['segoeui.ttf','segoeuib.ttf','consola.ttf'].map(f=>path.join(fontDir,f));
function raster(s){return new Resvg(s,{font:{loadSystemFonts:false,fontFiles,defaultFontFamily:'Segoe UI'}}).render().asPng();}
function save(name,w,h,title,body){const s=svg(w,h,title,body);fs.writeFileSync(path.join(out,name+'.svg'),s+'\n');fs.writeFileSync(path.join(out,name+'.png'),raster(s));return s;}

// Standard APNG chunks, composed from full PNG frames. No browser code in assets.
function crc32(b){let c=0xffffffff;for(const n of b){c^=n;for(let k=0;k<8;k++)c=(c>>>1)^((c&1)?0xedb88320:0);}return(c^0xffffffff)>>>0;}
function chunk(type,data){const t=Buffer.from(type),n=Buffer.alloc(4),crc=Buffer.alloc(4);n.writeUInt32BE(data.length);crc.writeUInt32BE(crc32(Buffer.concat([t,data])));return Buffer.concat([n,t,data,crc]);}
function chunks(png){let i=8,a=[];while(i<png.length){const n=png.readUInt32BE(i),t=png.toString('ascii',i+4,i+8);a.push({t,d:png.subarray(i+8,i+8+n)});i+=12+n;}return a;}
function animate(name,w,h,sequence){
 const frames=sequence.map(frame=>chunks(raster(frame.svg))),actl=Buffer.alloc(8);actl.writeUInt32BE(frames.length);actl.writeUInt32BE(1,4);
 let result=[frames[0][0].d],seq=0;
 result=[Buffer.from([137,80,78,71,13,10,26,10]),chunk('IHDR',result[0]),chunk('acTL',actl)];
 frames.forEach((a,i)=>{const ctl=Buffer.alloc(26);ctl.writeUInt32BE(seq++);ctl.writeUInt32BE(w,4);ctl.writeUInt32BE(h,8);ctl.writeUInt16BE(sequence[i].ms,20);ctl.writeUInt16BE(1000,22);result.push(chunk('fcTL',ctl));for(const {t,d}of a)if(t==='IDAT'){if(!i)result.push(chunk('IDAT',d));else{const number=Buffer.alloc(4);number.writeUInt32BE(seq++);result.push(chunk('fdAT',Buffer.concat([number,d])));}}});
 result.push(chunk('IEND',Buffer.alloc(0)));fs.writeFileSync(path.join(out,name+'.png'),Buffer.concat(result));
}
// Desktop identity is the original approved hero, extended by one status rail.
const original=fs.readFileSync(path.join(root,'assets/hero/github-profile-banner.svg'),'utf8');
let boot=original.replace('height="440"','height="540"').replace('viewBox="0 0 1400 440"','viewBox="0 0 1400 540"').replace('</svg>',`${box(.5,440,1399,99,C.s)}${M(48,496,'616://WORKSPACE',29,C.a)}${M(418,496,'> workspace ready',29,C.t)}${box(987,477,15,25,C.a,C.a)}${M(1154,496,'BUILDING',27,C.m)}</svg>`);
fs.writeFileSync(path.join(out,'boot-static.svg'),boot);fs.writeFileSync(path.join(out,'boot-static.png'),raster(boot));
const bootSteps=['> initializing profile','> loading project registry','> connecting data systems','> workspace ready'];
animate('boot',1400,540,bootSteps.map(line=>({svg:boot.replace(E('> workspace ready'),E(line)),ms:800})));
let bm=M(32,48,'PERSONAL SOFTWARE LAB',31,C.m)+L(32,77,568,77)+T(27,213,'LB',119,C.t,700)+T(194,206,'/',95,C.m)+T(255,213,'616',119,C.a,700)+T(32,284,'LUCIANO BARBOSA',42,C.t,600)+T(32,344,'DATA · SOFTWARE',36,C.m)+T(32,390,'ARTIFICIAL INTELLIGENCE',35,C.m)+L(32,425,568,425)+T(32,481,'Building useful systems,',36)+T(32,528,'strange experiments and',36)+T(32,575,'things I actually want to use.',36)+M(32,638,'BRAZIL',31,C.m)+M(424,638,'// 616',31,C.a)+box(.5,670,599,129,C.s)+M(32,717,'616://WORKSPACE',31,C.a)+M(32,766,'> BUILDING',32,C.t)+box(244,742,17,28,C.a,C.a);
bm=bm.replace(M(32,766,'> BUILDING',32,C.t)+box(244,742,17,28,C.a,C.a),M(32,766,'> workspace ready',31,C.t)+box(553,742,15,28,C.a,C.a));
const mobile=save('boot-static-mobile',600,800,'LB / 616 — Luciano Barbosa. Data, software and artificial intelligence. Building.',bm);
const mobileSteps=['> initializing profile','> loading registry','> connecting data','> workspace ready'];
animate('boot-mobile',600,800,mobileSteps.map(line=>({svg:mobile.replace(E('> workspace ready'),E(line)),ms:800})));

function consoleArt(mobile){
 const w=mobile?600:1200,h=mobile?820:470;
 let s=M(30,47,'616://CAPABILITIES',mobile?31:26,C.a)+M(mobile?30:935,mobile?87:47,'WORKING DOMAINS',mobile?24:23)+L(30,mobile?110:74,w-30,mobile?110:74);
 const rows=[['01','DATA','Analysis · Reporting','Transformation'],['02','AUTOMATION','Workflows · Scripting','Productivity'],['03','SOFTWARE','Tools · Apps','Systems'],['04','AI / EXPERIMENTS','Agents · Personal computing','Interactive systems']];
 rows.forEach(([n,title,a,b],i)=>{const y=(mobile?158:124)+i*(mobile?165:78);s+=L(46,y,46,y+(i===3?0:mobile?165:78),C.b,2)+O(46,y,7,C.a,C.bg);if(mobile){s+=M(76,y+9,n,26,C.a)+T(127,y+9,title,34,C.t,600)+T(76,y+57,a,33,C.m)+T(76,y+100,b,33,C.m)+L(76,y+127,568,y+127);}else{s+=M(74,y+8,n,24,C.a)+T(128,y+10,title,29,C.t,600)+T(518,y+9,a+' · '+b,27,C.m)+L(128,y+39,1170,y+39);}
 const glyphs=[box(0,0,75,52,C.s,C.b)+L(0,18,75,18,C.b)+L(0,35,75,35)+L(24,0,24,52)+L(50,0,50,52)+box(27,22,20,9,C.a,C.a),P('M8 26H69M39 26V48',C.b)+O(8,26,7,C.b,C.bg)+O(69,26,7,C.a,C.bg)+O(39,48,7,C.b,C.bg),box(0,0,76,53,C.s,C.b,3)+L(0,14,76,14,C.b)+P('M27 23L17 32L27 42M47 23L57 32L47 42',C.a),P('M8 30L35 5L68 29L35 53Z',C.b)+P('M8 30H68M35 5V53',C.b)+O(8,30,6,C.b,C.bg)+O(35,5,6,C.b,C.bg)+O(68,29,6,C.a,C.bg)+O(35,53,6,C.b,C.bg)];
 s+=group(mobile?515:436,y-20,mobile?.53:.65,glyphs[i]);
 });
 if(!mobile)s+=M(30,442,'DATA + AUTOMATION  /  SOFTWARE + EXPERIMENTS',23,C.b);
 return save('capability-console'+(mobile?'-mobile':''),w,h,'Connected practice areas: data, automation, software, AI and experiments.',s);
}
for(const isMobile of [false,true]){
 const base=consoleArt(isMobile),w=isMobile?600:1200,h=isMobile?820:470;
 const sequence=[0,1,2,3].map(i=>{const y=(isMobile?158:124)+i*(isMobile?165:78);return{svg:base.replace(O(46,y,7,C.a,C.bg),O(46,y,7,C.a,C.a)),ms:500};});
 sequence.push({svg:base,ms:800});
 animate('capability-console-motion'+(isMobile?'-mobile':''),w,h,sequence);
}

// The flagship and computing environment lead; editorial/play remain smaller.
let f=M(30,46,'616://FOCUS',26,C.a)+M(823,46,'RESEARCH / SOFTWARE / PLAY',24)+L(30,74,1170,74)+M(30,114,'PRIMARY / CORE',24,C.a)+L(275,107,1170,107);
f+=box(30,137,648,287,C.s)+M(56,177,'01 / RESEARCH',24,C.b)+T(54,240,'Digital Life Lab',56,C.t,600)+M(56,283,'FLAGSHIP / LONG-TERM',26,C.a)+T(56,344,'Artificial life. AI agents.',29,C.m)+T(56,387,'Questions worth simulating.',29,C.m)+group(514,286,.64,icon('life'));
f+=box(702,137,468,287,C.s)+M(728,177,'02 / COMPUTING',24,C.b)+T(726,240,'Personal Project OS',39,C.t,600)+M(728,283,'CORE / ARCHITECTURE',25,C.a)+group(728,318,.57,icon('os'))+T(920,350,'Connect projects.',24,C.m)+T(920,386,'Keep identities.',24,C.m);
f+=M(30,472,'ACTIVE',24,C.b)+L(150,465,1170,465)+box(30,494,558,140,C.s)+box(612,494,558,140,C.up);
f+=M(56,527,'03 / KNOWLEDGE',23,C.b)+T(54,576,'Guia IA',43,C.t,600)+M(56,613,'IN DEVELOPMENT',24,C.b)+group(440,507,.8,icon('book'));
f+=M(640,527,'04 / INTERACTIVE',23,C.a)+T(638,576,'Two Paws',43,C.t,600)+M(640,613,'PRE-PRODUCTION',24,C.a)+group(997,496,.77,icon('cat'));
save('current-focus',1200,660,'Primary: Digital Life Lab, long-term flagship; Personal Project OS, core architecture. Active: Guia IA, development; Two Paws, pre-production.',f);
let fm=M(28,47,'616://FOCUS',31,C.a)+L(28,77,572,77)+M(28,127,'PRIMARY / CORE',29,C.a);
fm+=box(28,151,544,287,C.s)+M(50,193,'01 / RESEARCH',28,C.b)+T(48,255,'Digital Life Lab',51,C.t,600)+M(50,305,'FLAGSHIP / LONG-TERM',29,C.a)+T(50,357,'Artificial life.',33,C.m)+T(50,401,'AI agents. Simulation.',33,C.m)+group(431,329,.58,icon('life'));
fm+=box(28,460,544,238,C.s)+M(50,503,'02 / COMPUTING',28,C.b)+T(48,560,'Personal Project OS',47,C.t,600)+M(50,607,'CORE / ARCHITECTURE',29,C.a)+T(50,658,'Connect projects.',33,C.m)+group(415,624,.45,icon('os'));
fm+=M(28,751,'ACTIVE',29,C.b)+box(28,776,544,172,C.s)+M(50,816,'03 / KNOWLEDGE',28,C.b)+T(48,871,'Guia IA',47,C.t,600)+M(50,916,'IN DEVELOPMENT',31,C.b)+group(423,795,.76,icon('book'));
fm+=box(28,971,544,177,C.up)+M(50,1013,'04 / INTERACTIVE',28,C.a)+T(48,1067,'Two Paws',47,C.t,600)+M(50,1115,'PRE-PRODUCTION',31,C.a)+group(424,990,.75,icon('cat'));
save('current-focus-mobile',600,1176,'Primary: Digital Life Lab and Personal Project OS. Active: Guia IA and Two Paws.',fm);

let lab=M(32,47,'616://LIFE-LAB',26,C.a)+M(905,47,'LONG-TERM FLAGSHIP',23)+L(32,74,1168,74)+T(30,151,'Digital Life Lab',61,C.t,600)+T(33,205,'Artificial life. Digital organisms.',31,C.m)+T(33,250,'Questions worth simulating.',31,C.m)+M(33,316,'AI / AGENTS / SIMULATION',25,C.b)+group(835,96,1.13,icon('life'))+P('M748 119V279M730 119H748M730 279H748',C.line)+M(790,325,'SCIENTIFIC PARTNER',23,C.a);
save('digital-life-lab',1200,352,'Digital Life Lab — artificial life, agents and simulation. Scientific Partner is its companion subsystem. Conceptual artwork.',lab);
let lm=M(28,47,'616://LIFE-LAB',31,C.a)+L(28,78,572,78)+T(27,145,'Digital Life Lab',51,C.t,600)+T(29,200,'Artificial life.',36,C.m)+T(29,248,'Digital organisms.',36,C.m)+T(29,296,'Questions worth',34,C.m)+T(29,340,'simulating.',34,C.m)+group(409,220,.72,icon('life'))+M(29,404,'AI / AGENTS / SIMULATION',29,C.b);
save('digital-life-lab-mobile',600,437,'Digital Life Lab — artificial life, agents and simulation. Conceptual artwork.',lm);
save('presence-mark',180,170,'Presença IA — face and expression.',group(10,7,1,icon('face')));
let footer=L(30,20,1170,20,C.line)+L(30,20,172,20,C.a,3)+M(30,69,'LUCIANO BARBOSA / BRAZIL',25,C.m)+O(780,61,5,C.a,C.a)+M(799,69,'BUILDING',25,C.a)+T(1069,69,'// 616',27,C.a,600);
save('footer',1200,101,'Luciano Barbosa · Brazil · Building · 616.',footer);
save('footer-mobile',600,164,'Luciano Barbosa · Brazil · Building · 616.',L(28,20,572,20)+L(28,20,128,20,C.a,3)+M(28,70,'LUCIANO BARBOSA',31,C.t)+M(28,123,'BRAZIL / BUILDING',29,C.m)+M(456,123,'616',31,C.a));
console.log('Built workstation assets: boot 3.2 seconds; capability activation 2.8 seconds; each plays once.');
