var n = 46; /* idezetek szama */
var idek = new Array(n); /* idezetek tombje */
var idkepek = new Array(n); /* idezetek kepeinek tombje */
var idn; /* a kivalasztott idezet tombbeli indexe */
var sz, pidszov, didkep, kep;
window.onload = indit;
function indit(){
 pidszov = document.getElementById("pidszoveg");
 idn = Math.floor(Math.random()*n); /* 0..n-1 */
 // idn = 45;
 sz = idek[idn];
 // alert(sz);
// pidszov.innerHTML = sz;
 pidszov.appendChild(sz);
 didkep = document.getElementById("idkep");
 kep = document.createElement("img");
 kep.setAttribute("alt","Szép kép");
 kep.setAttribute("src",idkepek[34][0]);
 kep.setAttribute("title",idkepek[idn][3]);
 // kep.setAttribute("width",idkepek[idn][1]);
// kep.setAttribute("height",idkepek[idn][2]);
 kep.style.width = idkepek[idn][1];
 kep.style.height = idkepek[idn][2];
 kep.style.margin = "0.5em";
 didkep.appendChild(kep);
} // indit()

var iszd = document.createElement("div");
var ic = document.createElement("h3"); 
var icsz = document.createTextNode("Diákjaim ");
ic.appendChild(icsz);
var ispan = document.createElement("span");
ispan.className = "komment";
var ispansz = document.createTextNode("kommentált ");
ispan.appendChild(ispansz);
ic.appendChild(ispan);
icsz = document.createTextNode("költeményei");
ic.appendChild(icsz);

var iu = document.createElement("ul"); 

var iuli = document.createElement("li"); 
var iulisz = document.createTextNode(
"Mi az operációs rendszer? Olyan rendszer, mely \
meggyorsítja a programok futását.");
ispan = document.createElement("span");
ispan.className = "komment";
ispansz = document.createTextNode(
" Ahhoz képest, ahogyan egy oprendszer nélküli gépen futnának ...");
ispan.appendChild(ispansz);
iuli.appendChild(iulisz);
iuli.appendChild(ispan);
iu.appendChild(iuli);

var iuli = document.createElement("li"); 
var iulisz = document.createTextNode(
"Több program egyidejű futása UNIX-ban több ablak \
megnyitásával történhet.");
ispan = document.createElement("span");
ispan.className = "komment";
ispansz = document.createTextNode(
" Különben megfulladnánk a büdösségtől.");
ispan.appendChild(ispansz);
iuli.appendChild(iulisz);
iuli.appendChild(ispan);
iu.appendChild(iuli);

var iuli = document.createElement("li"); 
var iulisz = document.createTextNode(
"Ha végképp tanácstalanok vagyunk egy szituációban, \
akkor a Ctrl+Alt+Del billentyű kombinációval kilép \
és vissza is lép tiszta lappal.");
ispan = document.createElement("span");
ispan.className = "komment";
ispansz = document.createTextNode(
" Sokan szeretnék tudni, hogy honnan veszi a \
számítógép a tiszta lapot!");
ispan.appendChild(ispansz);
iuli.appendChild(iulisz);
iuli.appendChild(ispan);
iu.appendChild(iuli);

var iuli = document.createElement("li"); 
var iulisz = document.createTextNode(
"A számítógép fontos része a véncseszter.");
ispan = document.createElement("span");
ispan.className = "komment";
ispansz = document.createTextNode(
" Ezért olyan lassú. Jobb lenne egy fiatal ... ");
ispan.appendChild(ispansz);
iuli.appendChild(iulisz);
iuli.appendChild(ispan);
iu.appendChild(iuli);

var iuli = document.createElement("li"); 
var iulisz = document.createTextNode(
"A jelszót mindenki szabadon találja ... ");
ispan = document.createElement("span");
ispan.className = "komment";
ispansz = document.createTextNode(
"Utcasarkon áll, csak el ne szaladjon!");
ispan.appendChild(ispansz);
iuli.appendChild(iulisz);
iuli.appendChild(ispan);
iu.appendChild(iuli);

var iuli = document.createElement("li"); 
var iulisz = document.createTextNode(
"Ha ahová küldöm a levelet ott nincs ékezetekre beállítva \
vagy nem azt a kódrendszert használja, nagyon durva \
dolgok jöhetnek létre.");
ispan = document.createElement("span");
ispan.className = "komment";
ispansz = document.createTextNode(
" A harmadik évezred horrorfilmjei valószínűleg az \
egymást gyilkoló e-mailekről fogank szólni ... ");
ispan.appendChild(ispansz);
iuli.appendChild(iulisz);
iuli.appendChild(ispan);
iu.appendChild(iuli);

var iuli = document.createElement("li"); 
var iulisz = document.createTextNode(
"Az e-mail cím 2 fő része a számítógép azonosítására \
szolgáló domain név.");
ispan = document.createElement("span");
ispan.className = "komment";
ispansz = document.createTextNode(
" Sőt, még a mellékes harmadik, negyedik és ötödik is.");
ispan.appendChild(ispansz);
iuli.appendChild(iulisz);
iuli.appendChild(ispan);
iu.appendChild(iuli);

var iuli = document.createElement("li"); 
var iulisz = document.createTextNode(
"Levelezőprogramok egy szolgáltatása az attachman.");
ispan = document.createElement("span");
ispan.className = "komment";
ispansz = document.createTextNode(
" Afféle testőr, mely igénybe veheti az olyan további \
szolgáltatásokat, mint az apartman és a wolkman.");
ispan.appendChild(ispansz);
iuli.appendChild(iulisz);
iuli.appendChild(ispan);
iu.appendChild(iuli);

var iuli = document.createElement("li"); 
var iulisz = document.createTextNode(
"Titkosíthatunk leveleket, amikhez más nem férhet hozzá. \
Ezek ponttal kezdődnek és ls megnyomása esetén nem \
írja ki a listában.");
ispan = document.createElement("span");
ispan.className = "komment";
ispansz = document.createTextNode(
" Hiába, a közmondások is haladnak a korral: \
megnyomta az ls gombot és így pontot tett a dolgok ... elejére.");
ispan.appendChild(ispansz);
iuli.appendChild(iulisz);
iuli.appendChild(ispan);
iu.appendChild(iuli);

iszd.appendChild(ic);
iszd.appendChild(iu);
idek[0]= iszd;
idkepek[0] = new Array("gyerek2.gif", "12em", "12em","");

var iszd = document.createElement("div");
var isz = document.createTextNode(
"Az ember még nem ember,\n\
Csak hadonászó szeszélyes kamasz,\n\
Az ember akkor lesz ember,\n\
ha átvilágítja önmagát,\n\
s a benső világosságból\n\
környezetére sugarat bocsát.\n\
...\n\
(Weöres Sándor)");
iszd.appendChild(isz);
iszd.className = "ujsor";
idek[1]= iszd;
idkepek[1] = new Array("gyerek2.gif", "12em", "12em","");

var iszd = document.createElement("div");
var isz = document.createTextNode(
"Osztani magad:- hogy így sokasodjál;\n\
kicsikhez hajolni,- hogy így magasodjál;\n\
hallagtni őket,- hogy tudd a világot;\n\
róluk beszélni, ha szólsz a világhoz.\n\
Széjjel szóródni - eső homokra, -\n\
sivatagnyi reménytelen dologra,\n\
s ha nyár se lesz tőled, és a táj se zöldebb,\n\
- kutakká gyűjt a mély:- soká isznak belőled!\n\
(Váci Mihály)");
iszd.appendChild(isz);
iszd.className = "ujsor";
idek[2]= iszd;
idkepek[2] = new Array("segitseg2.jpg", "10.8em", "7.0em","");

var iszd = document.createElement("div");
var isz = document.createTextNode(
"Az élet legnagyobb része eltelik helytelen tettekkel, \
nagy része \nsemmittevéssel, s az egész élet mással, \
mint amit tenni kellene.(Seneca)");
iszd.appendChild(isz);
iszd.className = "ujsor";
idek[3]= iszd;
idkepek[3] = new Array("veszekedes2.jpg", "18em", "12.85em","");

var iszd = document.createElement("div");
var ic = document.createElement("h3"); 
var icsz = document.createTextNode("Konkrét");
ic.appendChild(icsz);
iszd.appendChild(ic);
var isz = document.createTextNode(
"ahogy széthull az akarat\n\
valami föld előtti fényben\n\
köd gyanánt foszlik szerte arcod\n\
ebben a konkrét mindnségben\n\
hiszen mióta létezel\n\
egyre felejted magad\n\
hogy más lehess egészen\n\
\n\
már a csecsemőkorban\n\
belédnevelték: nem szabad!\n\
ez törékeny ez szúr ez éles\n\
ez túl kényes ez túl veszélyes\n\
ez forró ez meg jéghideg\n\
ha megszorítod tönkremegy\n\
ha visszaütöd visszavág\n\
vigyázz vigyázd az életet\n\
hogy arrébb taszítsd a halált\n\
ez nem a tiéd ehhez nincs jogod\n\
még fiatal vagy az igazsághoz\n\
amazt pedig csak álmodod\n\
hogy újraképzeld a világot\n\
\n\
mégis vagy talán épp ezért\n\
egy igazi földi feltámadásban\n\
mint a szerelemben úgy hiszel\n\
mert nem lehet, hogy olyan szegényen\n\
indulj tovább a nappalokból\n\
ahogy a tegnapokból érkezel\n\
(Gál Éva Emese)");
iszd.appendChild(isz);
iszd.className = "ujsor";
idek[4]= iszd;
idkepek[4] = new Array("felelem2.jpg", "11em", "16.5em","");

var iszd = document.createElement("div");
var isz = document.createTextNode(
"Mindig az a perc a legszebb perc\n\
Mit meg nem ád az élet,\n\
Az a legszebb csók, mit el nem csókolunk.\n\
Mindig az az álom volt a legszebb,\n\
Mely gyorsan semmivé lett,\n\
Amit  soha tőbbé meg nem álmodunk ...\n\
(Mihály István)");
iszd.appendChild(isz);
iszd.className = "ujsor";
idek[5]= iszd;
idkepek[5] = new Array("rozsa.jpg", "11em", "9em","");

var iszd = document.createElement("div");
var isz = document.createTextNode(
"Az emberek nem érnek rá, hogy valamit is megismerjenek, \
inkább kész \ndolgokat vásárolnak a kereskedőktől, de mivel \
barátokat nem árul egy \nkereskedő sem, az embereknek nincs \
barátjuk ... \
(Exupéry: Kis herceg )");
iszd.appendChild(isz);
iszd.className = "ujsor";
idek[6]= iszd;
idkepek[6] = new Array("magany.jpg", "23em", "12.35em","");

var iszd = document.createElement("div");
var ic = document.createElement("h3"); 
var icsz = document.createTextNode("Boldogság");
ic.appendChild(icsz);
iszd.appendChild(ic);
var isz = document.createTextNode(
"Hol vagy, hol vagy életünknek\n\
Szép tündére, boldogság?!\n\
Karjaidban kik pihennek?\n\
Ajkaid kik csókdossák?\n\
Fényes orczád néha, néha,\n\
Szemünk előtt megjelen;\n\
Vagy csak a szív álma képzel\n\
Kétes ködben, fellegen?\n\
\n\
Széles ország-ut az élet,\n\
És mi rajta vándorok;\n\
Elfáradunk, elepedünk,\n\
Vérző lábunk tántorog;\n\
S boldogságért esdekelvén,\n\
Míg előre jár szemünk:\n\
Csendes kunyhó vagy keresztfa\n\
Közelébe érkezünk.\n\
\n\
De a vándor a kis kunyhót\n\
Elmellőzi botorul;\n\
Öntagadás, türelemnek\n\
Keresztjéhez sem borul;\n\
A csalképet űzve, annyi\n\
Fáradalmat elvisel;\n\
S meglepvén az éj sietve:\n\
Az útfelen alszik el.\n\
\n\
Voltam ábránd! völgyeidben,\n\
Hol szellő s lomb enyeleg;\n\
Jártam oh vágy! szirttetődön,\n\
Melly szédítő s meredek.\n\
Hű csók mézét szítta ajkam,\n\
\n\
Koszorus volt homlokom ...\n\
S ha valék-e boldog akkor?\n\
Ne kérdjétek, nem tudom !\n\
\n\
Szív, oh szív! ha boldog vagy már,\n\
Ha több kéj nem fér beléd:\n\
Mi remegtet, mi nyom mint a \n\
Fa harmatos levelét?\n\
Ah, miért kell a boldogságban\n\
Öntudatlan érezni:\n\
Hogy azt egy szempillantásban\n\
El is lehet veszíteni?\n\
\n\
Mért van, hogy ha szíved álma\n\
Megvalósul, s a tied:\n\
A szép bálványt összetörni\n\
Maga a szív úgy siet!?\n\
Csábít, vonz a fátyolos kép\n\
Melly távolról int felénk,\n\
Hogy megrontsa a kicsinylés,\n\
Amit küzdve megnyerénk.\n\
\n\
Zaklat a vágy, s űzve szívünk\n\
Ösmeretlen tájakig:\n\
Nem boldog ha kéjt nem ízlel,\n\
Nem, ha azzal jól-lakik.\n\
A bánatban örömet kér,\n\
Az örömben bánatot;\n\
Csendességből zajba vágyik,\n\
S csendbe hogy ha zaklatott.\n\
\n\
S míg az élet, mint az égbolt,\n\
Hol borongós hol derűlt;\n\
És megkóstol a halandó\n\
Édeset és keserüt:\n\
A végóra elközelget,\n\
És szemét, hogy béfogják,\n\
Életén átnézve kérdi:\n\
Mi vol hát a boldogság?!\n\
(Tompa Mihály)");
iszd.appendChild(isz);
iszd.className = "ujsor";
idek[7]= iszd;
idkepek[7] = new Array("ut.jpg", "14.4em", "25em");

var iszd = document.createElement("div");
var isz = document.createTextNode(
"Mért futsz az üdv után, mért kergetsz délibábot?\n\
Hisz itt van egy lépésre tán s te mégse látod?\n\
Csak szívedben keresd, s ne kint a nagyvilágban!\n\
Van édes boldogság minden szál virágban.\n\
(Gábor Andor)");
iszd.appendChild(isz);
iszd.className = "ujsor";
idek[8]= iszd;
idkepek[8] = new Array("nyuszi.jpg", "28.75em", "19.85em","");

var iszd = document.createElement("div");
var ic = document.createElement("h3"); 
var icsz = document.createTextNode("Mi mindig búcsúzunk");
ic.appendChild(icsz);
iszd.appendChild(ic);
var isz = document.createTextNode(
"Mondom néktek: mi mindig búcsúzunk.\n\
\n\
Az éjtől reggel, a nappaltól este,\n\
A színektől, ha szürke por belepte,\n\
A csöndtől, mikor hang zavarta fel,\n\
A hangtól, mikor csendbe halkul el,\n\
Minden szótól, amit kimond a szánk,\n\
Minden mosolytól, mely sugárzott ránk,\n\
Minden sebtől, mely fájt és égetett,\n\
Minden képtől, mely belénk mélyedett,\n\
Az álmainktól, mik nem teljesültek,\n\
A lángjainktól, mik lassan kihűltek,\n\
A tűnő tájtól, mit vonatról láttunk,\n\
A kemény rögtől, min megállt a lábunk.\n\
\n\
Mert nincs napkelte kettő, ugyanaz,\n\
Mert minden csönd más, - minden könny, - vigasz.\n\
\n\
Elfut a perc, az örök Idő várja,\n\
Lelkünk, mint fehér kendő, leng utána,\n\
Sokszor könnyünk se hull. szívünk se fáj,\n\
Hidegen hagy az elhagyott táj, -\n\
Hogy eltemettük: róla nem tudunk.\n\
És mégis mondom néktek:\n\
Valamitől mi mindig búcsúzunk.\n\
(Reményik Sándor)");
iszd.appendChild(isz);
iszd.className = "ujsor";
idek[9]= iszd;
idkepek[9] = new Array("bucsuzas.jpg", "19em", "24.76em","");

var iszd = document.createElement("div");
var ic = document.createElement("h3"); 
var icsz = document.createTextNode("Mindenki megy ...");
ic.appendChild(icsz);
iszd.appendChild(ic);
var isz = document.createTextNode(
"Vagy így, vagy úgy, de mindenki siet\n\
Mostanában tőlem valahova -\n\
Nem volt ily kurta azelőtt a perc,\n\
S az óra ily kiszabott, mostoha.\n\
Mindenki megy és mindenki lohol,\n\
Egyik csomagol - másik haldokol,\n\
Vagy messze néz, vagy éppen sírját ássa:\n\
Jövevények és vándorok vagyunk\n\
És nincsen itt senkinek maradása. -\n\
Néha borzadok s fázom élni, lenni:\n\
Ebben a maradástalan világban\n\
Nekem is útra kellene már kelni ...\n\
Körülnézek: ma este merre menjek ?\n\
S lassanként nem lesz már többé hova,\n\
Nem lelek többé otthont, menhelyet -\n\
Szabott a perc, az óra mostoha.\n\
\"A világ végzetéig veled !\"\n\
Ezt Jézus mondta, s ő is messze van,\n\
Emmanusba betért egy pllanatra - - \n\
S a végtelen elnyelte nyomtalan.\n\
(Reményik Sándor)");
iszd.appendChild(isz);
iszd.className = "ujsor";
idek[10]= iszd;
idkepek[10] = new Array("alkony.jpg", "19em", "13em","");

var iszd = document.createElement("div");
var isz = document.createTextNode(
"Mi tudunk már annyira csendben,\n\
mintha a fényünk lenne a csend,\n\
ölelni, félni, félteni, ölni\n\
hétköznapot és végtelent,\n\
ahogy a szabadság arányai\n\
kitöltik a feltámadt testet,\n\
mi tudjuk már annyira büszkén\n\
elhallgatni az utolsó verset,\n\
\n\
és tudunk még annyira együtt,\n\
mintha a szívünkhöz igazítottunk volna\n\
minden órát,\n\
tudunk még annyira együtt\n\
óvni\n\
egy haszontalan rózsát.\n\
(Gál Éva Emese)");
iszd.appendChild(isz);
iszd.className = "ujsor";
idek[11]= iszd;
idkepek[11] = new Array("rozsa.jpg", "13.2em", "10.8em","");

var iszd = document.createElement("div");
var ic = document.createElement("h3"); 
var icsz = document.createTextNode("Örökölt csend");
ic.appendChild(icsz);
iszd.appendChild(ic);
var isz = document.createTextNode(
"Tested: idő szántóföldje, tavasz illatú föld,\n\
fények útvesztője mindegyik barázda,\n\
s fönt, a homlok forró lombjain\n\
átsüt a kék, a végtelen.\n\
Engedd,\n\
hogy a körülkerített nappalokból\n\
bár annyi maradjon szabad,\n\
amennyit rábíz a képzeletre\n\
a körülhatárolt értelem.\n\
\n\
Fáj a csendnek, ha éles penge\n\
gyanánt metszi ketté a szó,\n\
mert van csend ami legyőzhetetlen,\n\
van csend, ami kimondható,\n\
van csend, ami olyan hatalmas,\n\
mint az egész bolygó világ,\n\
és van csend, amit viselned kell,\n\
mint örökölt egyenruhát.\n\
\n\
Állunk a csendben, várunk csendben,\n\
Ahol ennyi vágy együtt hallgat,\n\
ott a csend nem kimondhatatlan,\n\
és rejteni\n\
már nem lehet hatalmad.\n\
(Gál Éva Emese)");
iszd.appendChild(isz);
iszd.className = "ujsor";
idek[12]= iszd;
idkepek[12] = new Array("tomeg4.jpg", "11.3em", "9.0em","India");

var iszd = document.createElement("div");
var ic = document.createElement("h3"); 
var icsz = document.createTextNode("A dalaim");
ic.appendChild(icsz);
iszd.appendChild(ic);
var isz = document.createTextNode(
"A dalaimat aki látta,\n\
Soha ne lásson engemet,\n\
Ki szállt velem a magasságba,\n\
Ne fogja meg a kezemet. \n\
Ki mérhetetlen messze tőlem\n\
Forgatja könyvem lapjait,\n\
Ne lásson lakom rejtekébe,\n\
Ne kérdezze: hogy élek itt!\n\
\n\
Kinek lelke-testvére lettem,\n\
Szívében élő hatalom,\n\
Ne nézze szemem tompa fényét\n\
S a torz mosolyt az ajkamon.\n\
Kinek valóját összeráztam,\n\
Mint szélvész, megremegtetőn,\n\
Ne tudja: gyönge vagyok, gyáva,\n\
S akarni, élni nincs erőm!\n\
\n\
Mert rongy vagyok, mit szél hasít el,\n\
Sárpalota, mely összedől:\n\
Magamnak simogatást, jó szót\n\
Nem kérek - várok senkitől.\n\
A dalaimat - becézzétek,\n\
S óh, ne tekintsetek reám,\n\
A jobbik énem tiszta lángja\n\
Ott ég mindenki asztalán.\n\
(Reményik Sándor)");
iszd.appendChild(isz);
iszd.className = "ujsor";
idek[13]= iszd;
idkepek[13] = new Array("allat.jpg", "14em", "10em","");

var iszd = document.createElement("div");
var ic = document.createElement("h3"); 
var icsz = document.createTextNode("Lehetőség");
ic.appendChild(icsz);
iszd.appendChild(ic);
var isz = document.createTextNode(
"Őrizni bátran,\n\
hogy megszépüljön a feltámadásban,\n\
a csendben ami közénk zuhan\n\
falnak, hídnak, jajtalan jajnak,\n\
e földért, ahol vesztésre ítélt\n\
századok méltósága hallgat,\n\
megőrizni a vissza-arcban,\n\
e sebben, amelyre nincs kötés,\n\
az öntudatban, ha visszatorpan\n\
benne a megsemmisülés,\n\
a gondolatban, ha szembe ébred\n\
mindennel, ami megtagad,\n\
megőrizni, csak megőrizni\n\
arcodat és arcomat.\n\
(Gál Éva Emese)");
iszd.appendChild(isz);
iszd.className = "ujsor";
idek[14]= iszd;
idkepek[14] = new Array("bucsuzas3.jpg", "13.9em", "13.9em","Búcsúzás emlékmű, Ozora (A Várkastély parkjában), Szabó György, 2004.");

var iszd = document.createElement("div");
var ic = document.createElement("h3"); 
var icsz = document.createTextNode("Septimiu Chelcea: Gondolatok az emberről");
ic.appendChild(icsz);
iszd.appendChild(ic);
var io = document.createElement("ol"); 
var ioli = document.createElement("li"); 
var iolisz = document.createTextNode(
"Az embereket saját érdekeink mércéjével értékeljük.");
ioli.appendChild(iolisz);
io.appendChild(ioli);
var ioli = document.createElement("li"); 
var iolisz = document.createTextNode(
"Akkor öregszünk igazán, amikor kezdjük számbavenni a \
kudarcainkat.");
ioli.appendChild(iolisz);
io.appendChild(ioli);
var ioli = document.createElement("li"); 
var iolisz = document.createTextNode(
"Adjátok meg egy embernek azt a kiváltságot, hogy dönthessen \
mások felett, ha meg akarjátok ismerni igazán.");
ioli.appendChild(iolisz);
io.appendChild(ioli);
var ioli = document.createElement("li"); 
var iolisz = document.createTextNode(
"Sokszor csak azért segítünk másokon, hogy meggyőzzük  \
magunkat arról, hogy milyen jók és hatalmasok vagyunk.");
ioli.appendChild(iolisz);
io.appendChild(ioli);
var ioli = document.createElement("li"); 
var iolisz = document.createTextNode(
"Lelki szegénység: egy kissé párbeszédbe elegyedett önmagával \
és halálra unta magát.");
ioli.appendChild(iolisz);
io.appendChild(ioli);
var ioli = document.createElement("li"); 
var iolisz = document.createTextNode(
"Sokan rátalálnak a párjukra, kevesen választják.");
ioli.appendChild(iolisz);
io.appendChild(ioli);
var ioli = document.createElement("li"); 
var iolisz = document.createTextNode(
"Annyit fogadunk el, amit megértünk: semmivel sem többet.");
ioli.appendChild(iolisz);
io.appendChild(ioli);
var ioli = document.createElement("li"); 
var iolisz = document.createTextNode(
"Felfogásváltozás: senki sem hiszi már, hogy a ruha teszi az \
embert, hanem a ... beosztása.");
ioli.appendChild(iolisz);
io.appendChild(ioli);
var ioli = document.createElement("li"); 
var iolisz = document.createTextNode(
"Szerencsétlenség: nincs ellenségem, csak volt barátaim \
vannak.");
ioli.appendChild(iolisz);
io.appendChild(ioli);
var ioli = document.createElement("li"); 
var iolisz = document.createTextNode(
"A tudományos értekezlet hatékonysága: végűl jobban tudjuk, \
hogy mit nem tudunk nagyon jól.");
ioli.appendChild(iolisz);
io.appendChild(ioli);
iszd.appendChild(io);
// iszd.className = "ujsor";
idek[15]= iszd;
idkepek[15] = new Array("nyelv.gif", "19em", "13em","");

var iszd = document.createElement("div");
var ic = document.createElement("h3"); 
var icsz = document.createTextNode("Arckép");
ic.appendChild(icsz);
iszd.appendChild(ic);
var isz = document.createTextNode(
"Nem tudom, leszek-e valaha hiányod?\n\
Leszek-e a magányodban élet?\n\
Megrajzolom portrédat:\n\
egy derengésen túli távollétet.\n\
\n\
Nem fáj. Nagyon tiszta, fehér lapra\n\
satírozom a konok éjszakát.\n\
Mire a fehérbe süllyed minden árnyék,\n\
én leszek az egyetlen hazád,\n\
mert más a bőr, az érintés, a sejtek\n\
másképpen vonzanak, taszítanak sejtet,\n\
ha alázatos dombot cirógattak végig,\n\
vagy őrzik pengesziklák kegyetlen sebét is,\n\
Ez az arckép. Így vagyok hazád.\n\
Nem restellem, hogy benned vetkezem.\n\
Szégyellje magát helyettem a szó,\n\
ha megőrizni engem képtelen.\n\
(Gál Éva Emese)");
iszd.appendChild(isz);
iszd.className = "ujsor";
idek[16]= iszd;
idkepek[16] = new Array("bucsuzas3.jpg", "11.4em", "11.4em","Búcsúzás emlékmű, Ozora (A Várkastély parkjában), Szabó György, 2004.");

var iszd = document.createElement("div");
var isz = document.createTextNode(
"A kis törvényszegést megbüntetik, a nagyot \
diadalmenettel ünneplik. (Seneca)");
iszd.appendChild(isz);
iszd.className = "ujsor";
idek[17]= iszd;
idkepek[17] = new Array("diadal_Korea_raketa.jpg", "24em", "12em","Észak-Korea felbocsátotta nagy hatótávolságú rakétáját, 2009.04.05");

var iszd = document.createElement("div");
var isz = document.createTextNode(
"Az élet nem más, mint amit \
az érzelmek csinálnak belőle. (Balzac)");
iszd.appendChild(isz);
iszd.className = "ujsor";
idek[18]= iszd;
idkepek[18] = new Array("barat.jpg", "19em", "18em","");

var iszd = document.createElement("div");
var isz = document.createTextNode(
"Minden fájdalomnak \n\
megvan a tanulsága. (Balzac)");
iszd.appendChild(isz);
iszd.className = "ujsor";
idek[19]= iszd;
idkepek[19] = new Array("rozsa.jpg", "10.6em", "6.6em","");

var iszd = document.createElement("div");
var isz = document.createTextNode(
"Az élet elviselésének egyetlen módja, hogy legyen \
valami \n teljesítendő feladatod. (Harvey Cushing)");
iszd.appendChild(isz);
iszd.className = "ujsor";
idek[20]= iszd;
idkepek[20] = new Array("fest.gif", "3.8em", "3.9em","");

var iszd = document.createElement("div");
var isz = document.createTextNode(
"Félek, nem ér majd annyit életem,\n\
törekvésem és vágyam, testem, lelkem,\n\
hogy megbecsülj, ha el nem érhetem\n\
önnön jóságom útján győzedelmem.\n\
(József Attila: Flóra)");
iszd.appendChild(isz);
iszd.className = "ujsor";
idek[21]= iszd;
idkepek[21] = new Array("rozsa2.jpg", "10em", "11em","");

var iszd = document.createElement("div");
var isz = document.createTextNode(
"Ilyen az ember: az eredményt nézi \
mielőtt az okokat elemezné. (Balzac)");
iszd.appendChild(isz);
iszd.className = "ujsor";
idek[22]= iszd;
idkepek[22] = new Array("koldus.jpg", "20em", "10em","");

var iszd = document.createElement("div");
var ic = document.createElement("h3"); 
var icsz = document.createTextNode("A gyermek");
ic.appendChild(icsz);
iszd.appendChild(ic);
var isz = document.createTextNode(
"     Mikor sírt \n\n\
Sírt keservesen, tehetetlenűl,\n\
Ideg-tépőn és szívet-szaggatón.\n\
Szülő-szív nem volt a szívem helyén,\n\
Karomra nem vehettem ringatón.\n\
Nem segíthettem rajta semmikép.\n\
Csak néztem riadt, bús poéta-szemmel,\n\
Nagy szánalommal és nagy félelemmel\n\
A gyermeket, a mások gyermekét.\n\
A sírásban infernó jajongott,\n\
Azt hittem, összecsap a föld s az ég,\n\
Kis ajka ahogy görbűlt lefele,\n\
A végtelenbe kérdőjelet írt,\n\
Azt kérdezte, hogy mért jött ő ide.\n\
Csöpp száján, e parányi résen át\n\
Kitörni, s égignyújtózkodni látom\n\
A nagy démont: a Diszharmóniát.\n\
Az ősök sorát látom szertefolyni,\n\
És kis testébe újratömörűlve\n\
A nyomorúság kardalát dalolni.\n\
A szülők találgatták: mi leli.\n\
Én tudtam, látón s tehetetlenül\n\
Tudtam: egy fáj: az élet fáj neki,\n\
Szegény kis szíve új kis dobverő,\n\
Mellyel a sors a vak marsot veri.\n\
Hová, hová, minek, minek?\n\
A végzet dobját minek veritek,\n\
Szegény kis dobverők, szegény szívek?\n\
Elkábultam, - nem tudtam, hol vagyok,\n\
S az Isten velem van, vagy ellenem, -\n\
Hálát adtam, hogy nincsen gyermekem.\n\n\
     Mikor mosolygott\n\n\
Most átfutott arcán egy sugár.\n\
Egy tűnő, húnyó, bujdosó sugár,\n\
Mely annyi sírás-zivatar között\n\
A homlokunkra mégis visszajár.\n\
\n\
Látom üstökös-útja fordulóit:\n\
Mikor anyjára csillan:\"Istenem!\"\n\
Mikor mint fényszökőkút, vagy rakéta\n\
Lobban fel az első játékszeren.\n\
Mikor mélázva, csendes ragyogással\n\
Nyomon kíséri az első mesét.\n\
Mikor előszür símogatja meg\n\
Egy kisleány rokon-tekintetét.\n\
Látom az első saját-gondolatnál\n\
S az első büszke férfi-tett után\n\
E visszatérő üstökös-mosolyt\n\
Derengni égbehulló homlokán.\n\
\n\
De mindhiába anyaöl és játék,\n\
Tündérmese, gondolat, szeretet:\n\
Az űrben járó üstökös-mosoly\n\
Görbéjét kiszámítani nem lehet.\n\
Soká elmarad, ha tetszik neki.\n\
S ha tetszik, gyakrabban is megjelen,\n\
S útja szeszélyes tűz-kanyarodóit\n\
Igazán csak Te tudod, Istenem.\n\
Azt is tudod, hogy nyomorult vagyok,\n\
Mosolyod rajtam ritkán ragyogott,\n\
Értem kivételt kedved nem tehet.\n\
Nem rövidítheted meg a telet,\n\
Nem hosszabbíthatod meg a nyarat.\n\
És mégis kérlek, engedd visszatérni\n\
Gyakran e gyermekhez a sugarat.\n\
(Reményik Sándor)");
iszd.appendChild(isz);
iszd.className = "ujsor";
idek[23]= iszd;
idkepek[23] = new Array("gyerek2.gif", "12.9em", "12.9em","");

var iszd = document.createElement("div");
var isz = document.createTextNode(
"Ha elkezdjük üldözni a mérges kígyót,\n\
amely megmart bennünket,\n\
csak gyorsítjuk a méreg hatását, \n\
hamarabb átfuttatjuk az egész szervezetünkön.\n\
Sokkal célravezetőbb, ha ehelyett haladéktalanul\n\
megtesszük a legszükségesebb lépéseket,\n\
hogy megszabaduljunk a méregtől,\n\
illetve semlegesítsük a hatását.\n\
(Stephen R. Covey)");
iszd.appendChild(isz);
iszd.className = "ujsor";
idek[24]= iszd;
idkepek[24] = new Array("nyelv.gif", "9.1em", "9.5em","");

var iszd = document.createElement("div");
var isz = document.createTextNode(
"Amikor azonban idősebb lettem,\n\
és jobban megismertem az embereket,\n\
rájöttem, hogy a gyűlölet olyan, mint a maró sav:\n\
kimarja - nem a gyűlölt személyt,\n\
hanem azt aki gyűlöl.\n\
(Sophia Loren)");
iszd.appendChild(isz);
iszd.className = "ujsor";
idek[25]= iszd;
idkepek[25] = new Array("nyelv.gif", "9.1em", "9.5em","");

var iszd = document.createElement("div");
var ic = document.createElement("h3"); 
var icsz = document.createTextNode("Egymás mellett soha?");
ic.appendChild(icsz);
iszd.appendChild(ic);
var isz = document.createTextNode(
"Hát így is kell mindig lennie:\n\
Fölül az egyik, s a másik alul?\n\
Hatalmi kérdés emberek között,\n\
S a hatalomban egyik elvadul?\n\
Mindig csak elnyomott és elnyomó,\n\
Kis különbség a módszerek között,\n\
És árnyalatok kockaforduláskor,\n\
S meztelen önzés mindenek mögött?\n\
Egyéni önzés és családi önzés\n\
És ezerféle színű nemzeti -\n\
Hát nem lehet e korhadó világot\n\
Testvér-színekkel ékesíteni?\n\
A kocka fordul és aki alul volt:\n\
Hegylábánál: hegytetőre kerül,\n\
S amit magának nem kívánt, a mással\n\
Folytatja, vagyis hogy kezdi elül.\n\
Hát így kell mindig lennie:\n\
Az egyik alul, s a másik felül?\n\
Ölni vagy halni: ez a nagy parancs:\n\
És szép egymás mellettiség soha?\n\
Fúljon hát önvérébe a világ\n\
Végkép, ha sorsunk ilyen mostoha!\n\
A pusztaság embert többé ne lásson\n\
És hegy se legyen ezen a világon.\n\
Mivel hogysem csillaggal társalogna:\n\
Súlyával a kis halmot nyomorítja.\n\
Isten maradjon egyes-egyedül -\n\
Kiben nincs többé rab és hódító,\n\
És nincsen többé alul és felül!\n\
(Reményik Sándor)");
iszd.appendChild(isz);
iszd.className = "ujsor";
idek[26]= iszd;
idkepek[26] = new Array("elnyomas1.jpg", "13.5em", "7.9em","");

var iszd = document.createElement("div");
var isz = document.createTextNode(
"Még fiatal vagy, minden szépnek látszik,\n\
Hulló könnyed is szivárvánnyá válik,\n\
És ahogy az évek lassan tovaszállnak,\n\
Úgy gyűlnek szívedben a gondok, s az árnyak.\n\
Rövid az élet, mégis sok a könnye,\n\
Mikor te mosolyogsz, a másét töröld le,\n\
Mert ahogy te szeretsz, úgy szeretnek mások,\n\
Úgy lesz ellenséged, így lesz jóbarátod,\n\
És akit párodul melléd rendel az ég,\n\
Becsüld meg erősen, s fogd meg a kezét,\n\
Hogyha minden álmod valósággá válik,\n\
Akkor se feledd el: légy jó mindhalálig.");
iszd.appendChild(isz);
iszd.className = "ujsor";
idek[27]= iszd;
idkepek[27] = new Array("virag2.jpg", "10.2em", "14.2em","");

var iszd = document.createElement("div");
var ic = document.createElement("h3"); 
var icsz = document.createTextNode("Harmónia");
ic.appendChild(icsz);
iszd.appendChild(ic);
var isz = document.createTextNode(
"Itt,\n\
ahol a lelkiismeret\n\
önnönmagával méretik,\n\
maradj velem.\n\
Nincs a versemnél szebb szobám,\n\
nincs a szavaknál melegebb karom,\n\
nincs testem, ami hervadjon boldogan.\n\
Higgy nekem,\n\
keress meg magadban,\n\
és ne félj:\n\
zuhanni késő már nekünk,\n\
csekély\n\
elveszíthető életünk,\n\
ameddig bátrabban megcáfolható,\n\
mint ahogy benne létezünk.\n\
Ne törjön hát arcodra kétség,\n\
mikor a tornyok talpra állnak,\n\
mert ha égig érnek is,\n\
csak játékai a magasságnak,\n\
és mi ahhoz se tartozunk.\n\
Virradjon fölénk bármilyen világ,\n\
törvényei meg nem gyalázzák\n\
azt a harmóniát,\n\
amit magunkból alkotunk, kedvesem.\n\
\n\
Látod, mennyire szeretlek?\n\
S hogy maradj,\n\
mégsem mondhatom neked,\n\
mert nincs a versnél szebb hazánk,\n\
s benne\n\
szabad az emlékezet.\n\
(Gál Éva Emese)");
iszd.appendChild(isz);
iszd.className = "ujsor";
idek[28]= iszd;
idkepek[28] = new Array("oreg_szerelem.jpg", "28em", "21em","");
// idkepek[28] = new Array("oreg_szerelem.jpg", "13.2em", "9.9em");

var iszd = document.createElement("div");
var isz = document.createTextNode(
"Amit másoknál hibának nevezünk,\n\
az nálunk csak tapasztalatszerzés.\n\
(Emerson)");
iszd.appendChild(isz);
iszd.className = "ujsor";
idek[29]= iszd;
idkepek[29] = new Array("nyelv.gif", "9.4em", "9.8em","");

var iszd = document.createElement("div");
var ic = document.createElement("h3"); 
var icsz = document.createTextNode("Télelő");
ic.appendChild(icsz);
iszd.appendChild(ic);
var isz = document.createTextNode(
"Ez télelő,- sötétedik hamar,\n\
Mindjárt homályba hull a kis szoba ...\n\
Vajon derültebb volna s biztatóbb,\n\
Megnyugtatóbb és ígéretesebb,\n\
Ha valaki mellettem ülne most\n\
És fogná erősen a kezemet,\n\
Fülembe suttogva varázs-igét?\n\
\n\
Nem. Kettőnek is sötét a sötét.\n\
\n\
Ez télelő, - sötétedik hamar ...\n\
Ha most körüllengené e kis szobát\n\
Mindenki, akinek szívére\n\
Csöppentettem egy csöpp melódiát,-\n\
Ha átölelne párás zuhataggal\n\
Egy szivárványos visszhang-vízesés,\n\
És kórus zúgná fülembe: remélj!?\n\
\n\
Nem. Országoknak is éjszaka az éj.\n\
\n\
Talán, talán ha betöltene Az,\n\
Akit most is csak hírből ismerek,\n\
Kihez esetlen imát dadogok\n\
És hatalmában félig sem hiszek,\n\
Csak akarok, csak akarok ...\n\
Ha visszahozná múlt novemberek\n\
Tengeralatti advent-illatát,\n\
Ha megtenné a képtelen csodát,\n\
És olyan volna ez a délután ...\n\
Akkor talán, talán, talán\n\
Fénybeborulna most is a szobám.\n\
(Reményik Sándor)");
 iszd.appendChild(isz);
 iszd.className = "ujsor";
idek[30]= iszd;
idkepek[30] = new Array("tel2.gif", "13.4em", "18.9em","");
// idkepek[30] = new Array("szentkep.jpg", "12.0em", "20.0em");

var iszd = document.createElement("div");
var isz = document.createTextNode(
"Milliószor fontosabb, hogy \n\
egy csodálatos dolgot művelj, \n\
mint igazat. (Mencken)");
 iszd.appendChild(isz);
 iszd.className = "ujsor";
idek[31]= iszd;
idkepek[31] = new Array("segites.png", "13.0em", "9.5em","");
// idkepek[31] = new Array("tojas2.jpg", "28.23em", "25.34em");

var iszd = document.createElement("div");
var isz = document.createTextNode(
"Folyton törekedtem arra, hogy ne botrányosítsam,\
 ne lesajnáljam és ne\nítéljem el az emberi cselekedeteket,\
 hanem megértsem őket. (Spinoza)");
 iszd.appendChild(isz);
 iszd.className = "ujsor";
idek[32]= iszd;
idkepek[32] = new Array("koldus.jpg", "20em", "10em","");
 
var iszd = document.createElement("div");
var ic = document.createElement("h3"); 
var icsz = document.createTextNode("Noé");
ic.appendChild(icsz);
iszd.appendChild(ic);
var isz = document.createTextNode(
"Mit vinnél magaddal\n\
most, ha Noé lennél,\n\
s ha lenne bárkád,\n\
\n\
ami bírkózik a szennyel,\n\
hogy bármilyen áron\n\
túlmenthess az árkon\n\
egy kis mindenséget,\n\
amelyben az élet\n\
még mindent újraélhet?\n\
\n\
Mit vinnél magaddal?\n\
Mondd, hogy mit szeretnél,\n\
s mi fontosabb annál,\n\
amit valaha szerettél?\n\
Melyik domboldalról\n\
mentenéd az erdőt,\n\
melyik folyópartról\n\
mentenéd a rétet,\n\
honnan szakítanál ki\n\
egy kis horizontot,\n\
hová rejtenél el\n\
egy kis messzeséget?\n\
Milyen görög álmot, milyen éber Rómát,\n\
milyen örök várost, milyen Európát,\n\
melyik dómot, himnuszt, szimfóniát, verset,\n\
istenszobrot, freskót, mítoszt, történelmet\n\
választanád, Noé?\n\
\n\
S ha telve már a bárka,\n\
sóhajtásnyi súlytól\n\
süllyedne az árba,\n\
mi az ami nincs még,\n\
ami nélkül mégse\n\
menthető az élet\n\
újabb tévedésbe,\n\
mi az, ami nem cserélhető fel\n\
semmi másra,\n\
menthetetlen,\n\
de el nem hagyható?\n\
\n\
Mire választattál ki, te kiválasztott?\n\
Többet vagy kevesebbet\n\
menekít a bárka,\n\
mint amennyi belevész az árba?\n\
Életmentő, szabadító,\n\
vagy embertársaid árulója vagy,\n\
és hős vagy csak menekült leszel\n\
azon a világon,\n\
ahová egy világot veszítve érkezel?\n\
\n\
Hát mit vinnél magaddal\n\
most, ha Noé lennél,\n\
s ha lenne bárkád,\n\
ami nem süllyedne el ?\n\
(Gál Éva Emese)");
iszd.appendChild(isz);
iszd.className = "ujsor";
idek[33]= iszd;
idkepek[33] = new Array("Noe.jpg", "11.1em", "7.24em","");

var iszd = document.createElement("div");
var ic = document.createElement("h3"); 
var icsz = document.createTextNode("Gondolatok az imádkozásról");
ic.appendChild(icsz);
iszd.appendChild(ic);
var isz = document.createTextNode(
"Ma oly sok kérdés tépett, szaggatott. \n\
És egyre sem jött mentő felelet. \n\
Testvér, te hogy gondolod ezeket? \n\
Miért imádkozol? ... \n\
\n\
Hogy kiért, tudom: gyermekeidért, \n\
És apjokért, a Te jó uradért, \n\
Minden testvéredért; \n\
És magadért legutolsó sorban. \n\
\n\
De mért, de mért? \n\
\n\
Hiszed, hogy aki ott fenn sátoroz, \n\
S a világokat tengelyük körül \n\
\n\
Forgatja örök-egy forgással, \n\
Akihez a Te imádságod szárnyal: \n\
Mi kicsiny dolgainkat számon tartja? \n\
\n\
Mit tudod Te, mit tudom én, \n\
Mit tudjuk mi, mi az Ő akaratja! ... \n\
Amit elvégzett, meg kell, hogy legyen, \n\
Változtat-e azon ima, fohász, \n\
Imádkozzál bár völgyben, vagy hegyen, \n\
Vagy tenger fenekén? \n\
\n\
Ó, de ugye a remény, a remény? \n\
\n\
Vagy talán Te is úgy imádkozol, \n\
Mint én, mint én? \n\
Hitetlenül, süketen és vakon, \n\
Csak, mert valamit még próbálni kell, \n\
S mert mást nem tudok, hát \n\
imádkozom, \n\
Mert különben a szívem megszakad. \n\
Ó tudom, Te nem így imádkozol \n\
Az érzéketlen csillagok alatt. \n\
(Reményik Sándor)");
iszd.appendChild(isz);
iszd.className = "ujsor";
idek[34]= iszd;
idkepek[34] = new Array("imadkozas.jpg", "12.4em", "10.2em","");

var iszd = document.createElement("div");
var ic = document.createElement("h3"); 
var icsz = document.createTextNode("Téli rózsatő");
ic.appendChild(icsz);
iszd.appendChild(ic);
var isz = document.createTextNode(
"Láttatok már téli rózsatőt? \n\
Csak száraz bot \n\
Tövises bot. \n\
S még hozzá nem is egyenes. \n\
Láttátok már a csüggedt mozdulatot, \n\
A fáradt ívet, melyben meghajolt? \n\
\n\
Virágait: a mult nyár színeit, \n\
A mult nyár illatát \n\
Elvitték, elszaggatták százfele. \n\
Jutott belőlük mennyegzőre, \n\
Lobogórúdra, \n\
Koporsó fölé. \n\
Azután csend lett, lehullott a hó, \n\
S a téli rózsatő \n\
Elrejtette fejét a föld alá. \n\
\n\
Hiszitek-e, \n\
Hogy az a sok-sok piros rózsa \n\
E szegény, száraz indából fakadt? \n\
\n\
Hiszitek-e, \n\
Hogy ez a szúrós, tövis-tele bot \n\
Egyszer még kivirágzik? \n\
\n\
Hiszitek-e, \n\
Hogy fog még teremni piros rózsát, \n\
Lakodalomra, \n\
Lobogórúdra, \n\
Kopja hegyére, \n\
Koporsó fölé? \n\
\n\
Hisztek-e még a téli rózsatőben? \n\
\n\
Hisztek-e még bennem? \n\
\n\
(Reményik Sándor)");
iszd.appendChild(isz);
iszd.className = "ujsor";
idek[35]= iszd;
idkepek[35] = new Array("rozsa4.jpg", "13.5em", "18.0em","");

var iszd = document.createElement("div");
var isz = document.createTextNode(
" Az embernek legyen kitartása és önbizalma! \n \
Hinni kell, hogy van tehetségünk valamihez \
és hogy ehhez a valamihez \n mindenáron el kell \
jutnunk. Talán akkor fog minden a legjobbra \
fordulni, \n amikor a legkevésbé várjuk. \
(Curie-Sklodowska, Marie)");
iszd.appendChild(isz);
iszd.className = "ujsor";
idek[36]= iszd;
idkepek[36] = new Array("Curie.jpg", "27.4em", "16.5em","Marie Curie-Sklodowska");

var iszd = document.createElement("div");
var ic = document.createElement("h3"); 
var icsz = document.createTextNode("Mindegy");
ic.appendChild(icsz);
iszd.appendChild(ic);
var isz = document.createTextNode(
" Ha ezt a szót, e kurta szót\n \
Ki tudnám egyszer ejteni\n \
Egyszerűn, hangsúlytalanul,\n \
Ahogy ágról a zúzmara pereg,\n \
Ahogy az esőcsepp a mélybe hull ...\n \
Ha tudnám egyszer ezt úgy ejteni,\n \
Hogy nem kellene mögé rejteni\n \
Fájó lemondást. keserű dacot,\n \
Titkolt reményt, elfojtott haragot.\n \
Ha úgy ejthetném, hangsúlytalanul,\n \
Ahogy ágról a zúzmara pereg,\n \
Ahogy az esőcsepp a mélybe hull.\n \
\n \
Akkor én derült volnék, mint az ég,\n \
És nyugodt, mint a halottaknak arca\n \
Az ünnepi, ravatalos szobában,\n \
És rendületlen, mint az Alpesek,\n \
S erős, mint az Isten a magasságban.\n \
(Reményik Sándor)");
iszd.appendChild(isz);
iszd.className = "ujsor";
idek[37]= iszd;
idkepek[37] = new Array("erdo.jpg", "13.3em", "19.28em","");

var iszd = document.createElement("div");
var ic = document.createElement("h3"); 
var icsz = document.createTextNode("Loreley");
ic.appendChild(icsz);
iszd.appendChild(ic);
var isz = document.createTextNode(
" Nem értem, a dal mit idéz föl, \n \
s hogy oly bús mért vagyok: \n \
egy régi, régi regétől \n \
nem szabadulhatok. \n \
\n \
Már hűvös az este; a Rajna \n \
nyugodtan folydogál; \n \
a hegycsúcs sugarasra \n \
gyúlt alkonypírban áll, \n \
aranyhaja messzire villog \n \
aranyfésűje nyomán. \n \
\n \
Aranyban aranylik a fésű, \n \
s közben a leány dalol; \n \
hatalmas zengedezésű \n \
varázs kél ajkairól. \n \
\n \
A hajósnak a kis ladikban \n \
szíve fáj, majd meghasad; \n \
nem le, hol a zátony, a szirt van - \n \
fel néz, fel a csúcsra csak! \n \
\n \
Végül a ladikot s a ladikost a \n \
mélységbe sodorja az ár ... \n \
S hogy ez így lett, ő okozta \n \
dalával, a Loreley. \n \
(Heinrich Heine)");
iszd.appendChild(isz);
iszd.className = "ujsor";
idek[38]= iszd;
idkepek[38] = new Array("hegy.jpg", "14.6em", "21.9em","");

var iszd = document.createElement("div");
var isz = document.createTextNode(
" Bátran légy temagad, akárhogy ráncigálnak,\n \
Vezérnek lássanak bár vagy muzsikus cigánynak,\n \
Fölemel tisztelettel a világ, vagy legyűr,\n \
a páholyban, a porban az vagy ami belül.\n \
(Benjamin László)");
iszd.appendChild(isz);
iszd.className = "ujsor";
idek[39]= iszd;
idkepek[39] = new Array("Joshua_Bell.jpg", "8.7em", "7.15em","Joshua Bell hegedűművész");

var iszd = document.createElement("div");
var ic = document.createElement("h3"); 
var icsz = document.createTextNode("Magános öröm");
ic.appendChild(icsz);
iszd.appendChild(ic);
var isz = document.createTextNode(
"Mondod: a bánatod magános,\n \
Az örömöd ó, még magánosabb,\n \
Sötétség vagy, ha éjszakába jársz,\n \
De árnyék vagy, ha reád tűz a nap,\n \
És minden árnyék különlibegés\n \
És minden árnyék néma, külön élet,\n \
A bánat őket összesöpri-mossa,\n \
A fény mutatja meg a különbséget.\n \
\n \
Mondod: a bánatod magános,\n \
De volt-e már mély, zengő örömöd?\n \
Ölelni vágytad a széles világot\n \
S a vágy, öröm szívedbe fúlt, törött.\n \
Vágytál röpülni önmagadon túlra,\n \
Nem messze, csak egy rokonszellemig,\n \
- Az örvendezőt hűvös mosolyok\n \
Önnön szívébe visszakergetik.\n \
\n \
Mint kehely szélén zengő aranycsöppek:\n \
Az örömital benned muzsikál,\n \
Túláradna, de nincs merre-hova,\n \
Leperegne, de csak habozva áll.\n \
Raksz vértet, páncélt a szíved fölé,\n \
De ver a szíved vért, páncél alatt -\n \
Ujjongva szólnál: most boldog vagyok!\n \
- És összeszorítod a fogadat!\n \
\n \
(Reményik Sándor)");
iszd.appendChild(isz);
iszd.className = "ujsor";
idek[40]= iszd;
idkepek[40] = new Array("magany2.jpg", "12em", "8em","");

var iszd = document.createElement("div");
var isz = document.createTextNode(
" A sivatagon át megőrűl, aki gyenge,\n \
a lángoló homokba veti magát,\n \
hívja állati vággyal az enyhet adó,\n \
kés bizonyságú, hűvös éjszakát.\n \
\n \
Ilyenkor gondolj valami másra -\n \
halkan gyűljön az erő szíveden,\n \
és ne alkudj olcsón a pusztulásra:\n \
a véghez itt minden idegen ... \n \
\n \
(Magyari Lajos)");
iszd.appendChild(isz);
iszd.className = "ujsor";
idek[41]= iszd;
idkepek[41] = new Array("sivatag.jpg", "13.7em", "9.13em","");

var isz = document.createTextNode(
" Jó az egyedüllét,\n \
ha van valaki,\n \
akinek időnként elmondhatjuk:\n \
jó az egyedüllét.\n \
(Svájci közmondás)");
var iszd = document.createElement("div");
iszd.appendChild(isz);
iszd.className = "ujsor";
idek[42]= iszd;
idkepek[42] = new Array("magany3.jpg", "15.8em", "9.01em","");

var isz = document.createTextNode(
" Árnyék mögött fény ragyog,\n \
Nagyobb mögött még nagyobb,\n \
S amire nézek, az vagyok.\n \
(Gyökössy Endre)");
var iszd = document.createElement("div");
iszd.className = "ujsor";
iszd.appendChild(isz);
idek[43]= iszd;
idkepek[43] = new Array("arnyek.jpg", "15.4em", "20.6em","");

var isz = document.createTextNode(
"Fény, levegő kell és szabadság, mégpedig \
nemcsak mozgáshoz , hanmem érzelmekhez , \
álmokhoz és főleg reményhez. \
(Érico Verisssimo)");
var iszd = document.createElement("div");
iszd.appendChild(isz);
idek[44]= iszd;
idkepek[44] = new Array("feny.jpg", "27.8em", "20.85em","");

var iszd = document.createElement("div");
var isz = document.createTextNode(
" Őrzők, vigyázzatok a strázsán,\n \
Az Élet él és élni akar,\n \
Nem azért adott annyi szépet,\n \
Hogy átvádoljanak most rajta\n \
Véres s ostoba feneségek.\n \
Oly szomorú embernek lenni\n \
S szörnyűek az állat-hős igék\n \
S a csillag-szóró éjszakák\n \
Ma sem engedik feledtetni\n \
Az ember Szépbe-szőtt hitét\n \
S akik még vagytok, őrzőn, árván,\n \
Őrzők: vigyázzatok a strázsán.\n \
\n \
(Ady Endre: Intés az őrzőkhöz)");
iszd.appendChild(isz);
iszd.className = "ujsor";
idek[45]= iszd;
idkepek[45] = new Array("nacionalizmus.jpg", "13.7em", "9.12em","");

var iszd = document.createElement("div");
var ic = document.createElement("h3"); 
var icsz = document.createTextNode("Verscim");
ic.appendChild(icsz);
iszd.appendChild(ic);
var isz = document.createTextNode(
"Próbatartalom\
Második sor");
iszd.appendChild(isz);
iszd.className = "ujsor";
idek[46]= iszd;
idkepek[46] = new Array("feny.jpg", "27.8em", "20.85em","");
