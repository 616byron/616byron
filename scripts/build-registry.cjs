// Original vector identity artwork. Diagrams describe themes, not running products.
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const {projects} = JSON.parse(fs.readFileSync(path.join(root, 'assets/projects/registry.json'), 'utf8'));
const P = Object.fromEntries(projects.map(p => [p.id, p]));
const C = {bg:'#0B0D10',panel:'#12161C',raised:'#161B22',text:'#E8E6DF',muted:'#A5ADB6',line:'#2A323C',amber:'#F2A93B',blue:'#88ACCB',teal:'#87BDB0',purple:'#B5A5D5',red:'#DC9686'};
const esc = s => String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
const rect = (x,y,w,h,fill=C.panel,stroke=C.line,rx=0) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="${fill}" stroke="${stroke}"/>`;
const text = (x,y,s,size=28,color=C.text,family='Segoe UI',weight=400) => `<text x="${x}" y="${y}" font-family="${family}" font-size="${size}" font-weight="${weight}" fill="${color}">${esc(s)}</text>`;
const mono = (x,y,s,size=22,color=C.muted) => text(x,y,s,size,color,'Consolas');
const line = (x,y,X,Y,color=C.line,width=1) => `<path d="M${x} ${y}L${X} ${Y}" fill="none" stroke="${color}" stroke-width="${width}"/>`;
const pathD = (d,stroke,fill='none',width=2) => `<path d="${d}" stroke="${stroke}" fill="${fill}" stroke-width="${width}" stroke-linecap="round" stroke-linejoin="round"/>`;
const circle = (x,y,r,stroke,fill='none') => `<circle cx="${x}" cy="${y}" r="${r}" stroke="${stroke}" fill="${fill}" stroke-width="2"/>`;
function icon(kind,x,y,scale=1) {
 let s='';
 if(kind==='os') {
  s=rect(6,12,170,114,C.bg,C.blue,5)+line(6,36,176,36,C.blue)+circle(18,24,2,C.amber,C.amber)+rect(20,50,54,62,C.raised,C.line,2)+rect(87,50,74,24,C.raised,C.blue,2)+rect(87,84,74,28,C.raised,C.line,2)+line(69,140,114,140,C.blue,2)+line(92,127,92,140,C.blue,2)+pathD('M177 73H206V110H220',C.amber)+rect(220,91,56,42,C.bg,C.amber,3)+rect(216,12,66,38,C.raised,C.line,3)+pathD('M216 31H198V58H177',C.blue)+line(234,103,260,103,C.amber,2)+line(234,114,250,114,C.muted,2);
 } else if(kind==='life') {
  s=circle(90,83,76,C.line)+circle(90,83,57,C.teal)+pathD('M26 44L69 57L100 26L136 62L119 119L61 139L69 57L119 119M69 57L136 62M26 44L61 139',C.teal)+circle(26,44,7,C.teal,C.bg)+circle(69,57,13,C.teal,C.raised)+circle(100,26,8,C.amber,C.bg)+circle(136,62,12,C.teal,C.raised)+circle(119,119,17,C.teal,C.raised)+circle(61,139,8,C.teal,C.bg)+circle(119,119,5,C.amber,C.amber)+circle(69,57,4,C.teal,C.teal);
 } else if(kind==='robot') {
  s=rect(23,25,113,72,C.raised,C.amber,17)+rect(36,38,87,38,C.bg,C.line,8)+circle(58,55,6,C.teal,C.teal)+circle(103,55,6,C.teal,C.teal)+line(80,8,80,25,C.amber,2)+circle(80,8,5,C.amber,C.bg)+rect(45,107,71,31,C.raised,C.muted,9)+pathD('M62 97V107M99 97V107M23 52H13V76H23M136 52H146V76H136',C.amber)+circle(57,139,7,C.line,C.bg)+circle(106,139,7,C.line,C.bg);
 } else if(kind==='book') {
  s=pathD('M8 19Q45 6 79 27Q113 6 150 19V117Q113 103 79 125Q45 103 8 117Z',C.blue,C.raised)+line(79,27,79,125,C.blue,2)+pathD('M24 41Q45 36 63 46M24 59Q45 54 63 64M24 77Q45 72 57 80',C.muted)+pathD('M94 46Q114 36 133 41',C.amber,'none',4)+pathD('M94 65Q114 55 133 60M94 84Q114 74 128 79',C.muted);
 } else if(kind==='cat') {
  s=circle(78,74,69,C.line)+pathD('M33 81L38 25L60 46Q79 39 99 46L121 25L126 81Q121 119 79 126Q37 119 33 81Z',C.blue,C.raised)+pathD('M49 76L62 78M96 78L109 76',C.amber,'none',3)+pathD('M73 91H84L79 98Z',C.muted,C.muted)+pathD('M1 130H26L40 145H126L145 125H158',C.teal);
 } else if(kind==='arena') {
  s=pathD('M8 27L80 5L151 27V91L80 141L8 91Z',C.red,C.raised)+pathD('M18 88L80 112L142 88M42 48H117M22 80H54M105 80H136',C.red,'none',3)+pathD('M73 30L95 57L67 85L84 108',C.amber,'none',3)+circle(40,65,4,C.blue,C.blue)+circle(118,65,4,C.red,C.red);
 } else if(kind==='face') {
  s=pathD('M42 10Q80 -4 118 10L138 42L129 110L80 143L31 110L22 42Z',C.purple)+pathD('M36 51Q53 36 69 51M92 51Q109 36 124 51M67 101Q80 111 95 101',C.purple,'none',3)+circle(53,61,5,C.teal,C.teal)+circle(109,61,5,C.teal,C.teal)+pathD('M80 41V85H91M37 90L80 129L123 90M53 18V32M108 18V32',C.line)+line(10,75,150,75,C.line)+circle(80,143,3,C.purple,C.purple);
 } else if(kind==='terminal') {
  s=rect(5,12,150,121,C.bg,C.teal,6)+line(5,37,155,37,C.teal)+circle(18,25,2,C.amber,C.amber)+pathD('M25 55L41 68L25 81M52 81H78',C.teal,'none',3)+line(25,105,86,105,C.muted,2)+rect(111,97,24,21,C.raised,C.teal,2)+pathD('M123 97V89M135 108H143M111 108H103M123 118V126',C.teal);
 } else if(kind==='career') {
  s=rect(22,7,102,131,C.bg,C.blue,3)+circle(47,33,9,C.blue)+line(66,29,106,29,C.muted,3)+line(66,39,95,39,C.line,3)+pathD('M38 67L44 73L54 60M38 95L44 101L54 88',C.teal,'none',3)+line(66,67,108,67,C.muted,3)+line(66,95,99,95,C.muted,3)+line(37,121,107,121,C.line,2);
 }
 return `<g transform="translate(${x} ${y}) scale(${scale})">${s}</g>`;
}
function svg(w,h,title,description,body) {
 return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" role="img" aria-labelledby="title desc"><title id="title">${esc(title)}</title><desc id="desc">${esc(description)}</desc>${rect(.5,.5,w-1,h-1,C.bg)}${body}</svg>\n`;
}
function save(name,w,h,title,desc,s){fs.writeFileSync(path.join(root,'assets/projects',name+'.svg'),svg(w,h,title,desc,s));}
const description = 'LB / 616 project ecosystem. '+projects.map(p=>`${p.name}: ${p.stage.toLowerCase()}.`).join(' ')+' Original identity diagrams, not product screenshots.';
function desktop(){
 let s=mono(32,45,'LB / 616     —     INDEPENDENT PROJECTS',23,C.muted)+mono(991,45,'REGISTRY / 09',22,C.amber)+line(32,67,1168,67)+mono(32,103,'01 / CORE',23,C.amber);
 s+=rect(32,124,664,388)+rect(32,124,5,388,C.teal,C.teal)+mono(59,167,'LONG-TERM VISION',23,C.teal)+text(57,238,'Digital Life Lab',53,C.text,'Segoe UI',600)+text(59,282,'Artificial life, agents',28,C.muted)+text(59,321,'and digital organisms.',28,C.muted)+icon('life',462,267,.96)+mono(59,366,'STAGE UNVERIFIED',23,C.muted)+line(59,402,669,402)+pathD('M61 425V451H86',C.teal)+text(99,452,'Scientific Partner',27,C.text,'Segoe UI',600)+mono(99,483,'COMPANION RESEARCH SUBSYSTEM',20,C.teal);
 s+=rect(720,124,448,388)+icon('os',925,147,.69)+mono(747,167,'COMPUTING',23,C.blue)+text(744,276,'Personal',48,C.text,'Segoe UI',600)+text(744,330,'Project OS',48,C.text,'Segoe UI',600)+text(747,376,'Connect independent projects.',24,C.muted)+line(747,402,1141,402)+mono(747,448,'RESEARCH / ARCHITECTURE',23,C.blue)+mono(747,483,'AI / TOOLS / LOCAL-FIRST',21,C.muted);
 s+=mono(32,559,'02 / SOFTWARE + INTERACTIVE',23,C.muted);
 const card=(x,id,kind,color)=>rect(x,583,362,275)+mono(x+22,618,P[id].group,20,color)+icon(kind,x+249,625,.56)+text(x+21,684,P[id].name,43,C.text,'Segoe UI',600);
 s+=card(32,'guia-ia','book',C.blue)+text(55,725,'Practical AI education.',24,C.muted)+line(55,752,371,752)+mono(55,792,P['guia-ia'].stage,23,C.blue)+mono(55,830,'REACT / TYPESCRIPT',20,C.muted);
 s+=card(419,'two-paws','cat',C.amber)+text(442,725,'Cat-driven exploration.',24,C.muted)+line(442,752,758,752)+mono(442,792,P['two-paws'].stage,23,C.amber)+mono(442,830,'GODOT / GAME SYSTEMS',20,C.muted);
 s+=card(806,'ruptura','arena',C.red)+text(829,725,'Platform / arena fighter.',23,C.muted)+line(829,752,1145,752)+mono(829,792,P['ruptura'].stage,23,C.red)+mono(829,830,'GODOT / COMBAT SYSTEMS',20,C.muted);
 s+=mono(32,907,'03 / LAB',23,C.muted);
 const lab=(x,id,kind,color,desc)=>rect(x,931,362,230)+icon(kind,x+266,950,.44)+text(x+22,991,P[id].name,34,C.text,'Segoe UI',600)+mono(x+23,1031,P[id].stage,22,color)+text(x+23,1073,desc,23,C.muted);
 s+=lab(32,'mini-chappie','robot',C.amber,'Physical AI companion idea.')+mono(55,1134,'WORKING NAME / ROBOTICS',20,C.muted);
 s+=lab(419,'presenca-ia','face',C.purple,'Face, gaze and expression.')+mono(442,1134,'GODOT / ANIMATION',20,C.muted);
 s+=lab(806,'chappie-local','terminal',C.teal,'Local AI, memory and tools.')+mono(829,1134,'AGENTS / LOCAL COMPUTING',20,C.muted);
 s+=line(32,1193,1168,1193)+mono(32,1233,'04 / RESEARCH',22,C.blue)+text(254,1234,'Career OS',30,C.text,'Segoe UI',600)+text(455,1233,'Personal career tools',23,C.muted)+mono(884,1233,'RESEARCH / PLANNING',22,C.blue);
 s+=line(32,1264,1168,1264)+mono(32,1302,'SHARED DESIGN DNA. EACH PROJECT KEEPS ITS OWN IDENTITY.',21,C.muted);
 save('project-registry',1200,1334,'616 Project Registry',description,s);
}
function mobile(){
 let s=mono(28,47,'LB / 616',28,C.amber)+mono(375,47,'REGISTRY / 09',25,C.muted)+line(28,74,572,74)+mono(28,121,'01 / CORE',27,C.amber);
 s+=rect(28,146,544,409)+rect(28,146,5,409,C.teal,C.teal)+mono(51,188,'LONG-TERM VISION',27,C.teal)+text(49,250,'Digital Life Lab',49,C.text,'Segoe UI',600)+text(51,300,'Artificial life, agents',30,C.muted)+text(51,342,'and digital organisms.',30,C.muted)+mono(51,393,'STAGE UNVERIFIED',27,C.muted)+icon('life',440,280,.67)+line(51,428,549,428)+pathD('M53 453V486H77',C.teal)+text(91,487,'Scientific Partner',33,C.text,'Segoe UI',600)+mono(91,529,'COMPANION SUBSYSTEM',25,C.teal);
 s+='<g transform="translate(0 429)">';
 s+=rect(28,146,544,369)+rect(28,146,5,369,C.amber,C.amber)+mono(51,190,'RESEARCH / ARCHITECTURE',27,C.amber)+text(49,250,'Personal Project OS',48,C.text,'Segoe UI',600)+text(52,296,'A computing environment',30,C.muted)+text(52,336,'for independent projects.',30,C.muted)+icon('os',330,365,.73)+mono(52,401,'COMPUTING',26,C.blue)+mono(52,440,'AI / LOCAL-FIRST',26,C.blue)+mono(52,484,'CONNECT. KEEP EACH IDENTITY.',24,C.muted);
 s+=mono(28,576,'02 / SOFTWARE + INTERACTIVE',27,C.muted);
 const card=(y,id,kind,color,desc,tag)=>rect(28,y,544,199)+mono(51,y+39,P[id].group,24,color)+text(49,y+91,P[id].name,43,C.text,'Segoe UI',600)+text(52,y+131,desc,28,C.muted)+mono(52,y+173,P[id].stage,27,color)+icon(kind,439,y+19,.69);
 s+=card(602,'guia-ia','book',C.blue,'Practical AI education.');
 s+=card(819,'two-paws','cat',C.amber,'Cat-driven exploration.');
 s+=card(1036,'ruptura','arena',C.red,'Platform / arena fighter.');
 s+=mono(28,1296,'03 / LAB',27,C.muted);
 s+=rect(28,1322,544,196)+icon('robot',41,1361,.77)+text(191,1370,'Mini Chappie',38,C.text,'Segoe UI',600)+mono(192,1409,'STAGE UNVERIFIED',26,C.amber)+text(192,1452,'Physical AI companion.',27,C.muted)+mono(192,1494,'WORKING NAME',24,C.muted);
 s+='<g transform="translate(0 214)">';
 s+=rect(28,1322,544,170)+icon('face',41,1348,.77)+text(191,1368,'Presença IA',38,C.text,'Segoe UI',600)+mono(192,1409,'RIG EXPERIMENT',27,C.purple)+text(192,1458,'Face, gaze, expression.',27,C.muted);
 s+=rect(28,1510,544,170)+icon('terminal',41,1535,.77)+text(191,1556,'Chappie Local',38,C.text,'Segoe UI',600)+mono(192,1597,'PROTOTYPE',27,C.teal)+text(192,1646,'Local AI and tools.',28,C.muted);
 s+=line(28,1716,572,1716)+mono(28,1760,'04 / RESEARCH',25,C.blue)+text(28,1810,'Career OS',36,C.text,'Segoe UI',600)+mono(239,1808,'RESEARCH / PLANNING',26,C.blue)+text(29,1853,'Personal career tools.',29,C.muted);
 s+=line(28,1885,572,1885)+mono(28,1924,'SHARED DNA. INDEPENDENT PROJECTS.',25,C.muted);
 s+='</g></g>';
 save('project-registry-mobile',600,2598,'616 Project Registry — mobile',description,s);
}
function focus(){
 const selected=projects.filter(p=>p.focus);
 if(selected.map(p=>p.id).join(',')!=='guia-ia,two-paws') throw new Error('Update focus compositions for the selected projects.');
 let d=rect(24,24,564,232)+rect(612,24,564,232)+icon('book',465,66,.55)+icon('cat',1053,66,.55);
 d+=mono(48,65,'FOCUS / SOFTWARE + AI',22,C.blue)+text(47,122,'Guia IA',49,C.text,'Segoe UI',600)+text(49,164,'A practical AI guide in Portuguese.',25,C.muted)+mono(49,222,'PRIVATE / IN DEVELOPMENT',23,C.blue);
 d+=mono(636,65,'FOCUS / GAME DEVELOPMENT',22,C.amber)+text(635,122,'Two Paws',49,C.text,'Segoe UI',600)+text(637,164,'Cat-driven exploration and play.',25,C.muted)+mono(637,222,'PRIVATE / PRE-PRODUCTION',23,C.amber);
 save('currently-building',1200,280,'Currently Building','Current focus: Guia IA, private / in development; Two Paws, private / pre-production.',d);
 let m='';
 for(const [i,id,kind,color,label,desc] of [[0,'guia-ia','book',C.blue,'SOFTWARE + AI','Practical AI education.'],[1,'two-paws','cat',C.amber,'GAME DEVELOPMENT','Cat-driven exploration.']]){
  const y=24+i*247;
  m+=rect(24,y,552,229)+mono(47,y+40,'FOCUS / '+label,24,color)+text(46,y+101,P[id].name,48,C.text,'Segoe UI',600)+text(49,y+145,desc,30,C.muted)+mono(49,y+197,'PRIVATE / '+P[id].stage,26,color)+icon(kind,432,y+56,.77);
 }
 save('currently-building-mobile',600,524,'Currently Building — mobile','Current focus: Guia IA, private / in development; Two Paws, private / pre-production.',m);
}
desktop();mobile();focus();
console.log('Built desktop and mobile registry + focus SVGs from registry.json.');
