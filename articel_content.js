/*einzelne Artikel mit Objekt anlegen, sodass alle Eigenschaften aufrufbar sind*/
mainpath_img="C:/Dokumente/Programmierung2/Javascript/JavaScript/Bilder/"

/*Funktion hier praktisch, zwar auch Einzelzuweisung möglich aber dann muss dieser Code immer wiederholt werden*/
function new_artikel(p_id,p_fullname,p_name,p_desc_short,p_desc_long,p_preis,p_delivery,image_path1,p_preis_string)
{
this.p_fullname=p_fullname;
this.p_name=p_name;
this.p_id=p_id;
this.p_desc_short=p_desc_short;
this.p_desc_long=p_desc_long;
this.p_preis=p_preis;
this.p_delivery=p_delivery;
this.image_path1=image_path1;

act_price_roh=p_preis;

tsd1=Math.round(act_price_roh/1000);
tsd1=tsd1.toString();
pos1=tsd1.length;
act_price_roh=act_price_roh.toString();
act_price_string=act_price_roh.substring(0,pos1)+"."+act_price_roh.substr(pos1,3);
this.p_preis_string=act_price_string;





this.anzahl=0;
return this;
}
var auris=new new_artikel("A_1","auris","Auris","Der Klassiker aus den 90er Jahren","Auch heute noch lässt der Wagen (fast) keine Wünsche offen",10000,"15 Wochen",mainpath_img+"auris.jpg");
var vwgolf=new new_artikel("A_2","vwgolf","Golf","Der Klassiker aus den 80er Jahren","Auch heute noch lässt der Wagen nur wenige Wünsche offen",5000,"52 Wochen",mainpath_img+"golf.jpg");

var car2000=new new_artikel("A_3","car2000","Auto 2000","Das bewährte Auto für alle Lebenslagen.","Allerhöchste Technik und ein hoher Comfort lassen den Wagen weiterhin zu den besten der Welt zählen",25000.00,"4 Wochen",mainpath_img+"car2000.jpg");
var callypso=new new_artikel("A_4","callypso","Callypso","Für den stadtbewussten Menschen.","Bewährte Technik auf den neusten Stand zu einem vernünftigen Preis. Durch die Maße werden neue Parkflächen erschlossen",15000.00,"4 Wochen",mainpath_img+"callypso.jpg");

var velocity=new new_artikel("A_5","velocity","Velocity","Willkommen in der Zukunft","Willkommen in der Zukunft BlaBlaBla",45000.00,"10 Wochen",mainpath_img+"velocity.jpg");


/* Datenmodell:
Produktdetails -> Ebene new_artikel
Zuordnungen, Kategorisierung (ArtikelA = WarengruppeC)-> kategorie1 (past,present,future)
Auch für die Kategorisierung muss ein Objekt angelegt werden inkl. der Zuordnungen zu den Einzelprodukten

Warum 2 stufig und die Kategorien nicht "sofort" bei den Artikeln pflegen
-> Kategoriespezifische aber nicht artikelspezifische Attribute können nicht festgelegt werden
-> Dezentrale Zuordnung bei Artikelanlage weniger transparent
*/

function kategorie1(kategory,kategory_fullname,arr_car)
{this.kategory=kategory;
this.kategory_fullname=kategory_fullname;
this.fzglist=arr_car;
return this;}

past=new kategorie1("past","Bewährte Klassiker",new Array(auris,vwgolf));
present=new kategorie1("present","Aktuelle Marktführer",new Array(car2000,callypso));
future=new kategorie1("future","Die Zukunft schon heute",new Array(velocity));

kategory_complet=[past,present,future];

/* Baum am Beispiel eines Zweiges / Unterzweiges kategory_complet->past(..sonstige Eigenschaften)->vwgolf*/

function read_artikel()
{
/* Erstes Auto aus der Kategorie Present wird abgefragt*/

alert(present.fzglist[0].p_name);

}
function add_item(sel_car)
{
//alert("Das gewählte Auto wurde den Warenkorb hinzugefügt");
//sel_car.anzahl++;
alert(sel_car);
cur_obj=eval(sel_car);
cur_obj.anzahl++;
}

sel_kat="";
function show_kategorie(kat4)
{
sel_kat=eval(kat4);
html_string="<table cellpadding='3'><tr><td valign='top' colspan='2'><h2>Kategorie "+sel_kat.kategory_fullname+"</h2></td></tr>";
for(i5=0;i5<sel_kat.fzglist.length;i5++)
{
cur_car=eval(sel_kat.fzglist[i5]);


/* Hier nur Formatierung des Kaufpreises mit Substring und Umwandlung in String*/
act_price_roh=cur_car.p_preis;
alert(act_price_roh);
tsd1=Math.round(act_price_roh/1000);
tsd1=tsd1.toString();
pos1=tsd1.length;
act_price_roh=act_price_roh.toString();
act_price_string=act_price_roh.substring(0,pos1)+"."+act_price_roh.substr(pos1,3);
cur_car.p_preis_string=act_price_string;
//###Here
html_string+="<tr><td valign='top'><h3>"+cur_car.p_name+" - "+cur_car.p_desc_short+"</h3>"+cur_car.p_desc_long+"<p><b>Kaufpreis: "+cur_car.p_preis_string+"</b></p><p>Lieferzeit: "+cur_car.p_delivery+"</p><p><b><a href='javascript:add_item(\""+cur_car.p_fullname+"\")'>In den Einkaufswagen</a></td><td valign='top'><img src='"+cur_car.image_path1+"' border='1'></td></tr>";


}
html_string+="</table>";
/*
this.p_name=p_name;
this.p_id=p_id;
this.p_desc_short=p_desc_short;
this.p_desc_long=p_desc_long;
this.p_preis=p_preis;
cur_car.p_preis_string
this.p_delivery=p_delivery;
this.image_path1=image_path1;
this.anzahl=0;
*/

document.getElementById("main1").innerHTML=html_string;


}

function add_item2(sel_car,a_change)
{
cur_obj=eval(sel_car);
//alert(cur_obj.p_desc_long);

//### Aktueller Status: Makro wird korrekt ausgelesen
//### Todos:
//### - wenn kein Cookie sel_car.anzahl, dann neues schreiben
//### Wenn Makro sel_car.anzahl, dann dieses auslesen und Menge erhöhen
//### Bei Klick auf den Bestellbutton, müssen alle Makros gelöscht werden


//Makro auslesen, name: sel_car.anzahl

rest_cook_add=document.cookie;
pos_start_add=0;
//Name nach sel_car in document.cookie auslesen, sonst vorige Anzahl=0
pos_eq_add=rest_cook_add.indexOf("=");
// Cookies auslesen um Anzahl der bestellten Autos für den Typ zu ermitteln
while(pos_eq_add!=-1)
{
  pos_del_add=rest_cook_add.indexOf("; ");
  if(pos_del_add==-1)
  {
    pos_del_add=rest_cook_add.length;

  }
  cur_cook_add=rest_cook_add.substring(0,pos_del_add);
  
  cur_cook_name=cur_cook_add.substring(0,pos_eq_add);
  cur_cook_value=cur_cook_add.substring(pos_eq_add+1,cur_cook_add.length);
  //alert("Aktueller Wert:"+cur_cook_value);
  if(cur_cook_name==sel_car+"_anzahl")
  {
  //alert("Vorherige Menge:"+cur_cook_value);
  cur_obj.anzahl=cur_cook_value;

  }
  
  //alert("Aktueller Name:"+cur_cook_name);

  pos_start_add=pos_del_add+2;
  rest_cook_add=rest_cook_add.substring(pos_start_add,rest_cook_add.length);
  
  pos_eq_add=rest_cook_add.indexOf("=");
  


    

}


switch(a_change)
{
case "+":
cur_obj.anzahl++;
break;
case "-":
cur_obj.anzahl--;
break;
default:
cur_obj.anzahl=parseInt(a_change);
break;
}

//alert("Neue Menge:"+cur_obj.anzahl);
document.cookie=sel_car+"_anzahl="+cur_obj.anzahl+";expires=Wed,10 Jun 2020 00:00:00 GMT";  
alert(sel_car+" in Einkaufswagen hinzugefügt");
}

function anz_artikel()
{
alert("Anzahl Auris:"+auris.anzahl+"\n Anzahl Golf:"+vwgolf.anzahl+"\n Anzahl Car 2000:"+car2000.anzahl+"\n Anzahl Callypso:"+callypso.anzahl+"\n Anzahl Velocity:"+velocity.anzahl);
/*var auris=new new_artikel("A_1","Auris","Der Klassiker aus den 90er Jahren","Auch heute noch lässt der Wagen (fast) keine Wünsche offen",10000.00,"15 Wochen",mainpath_img+"auris.jpg");
var vwgolf=new new_artikel("A_2","Golf","Der Klassiker aus den 80er Jahren","Auch heute noch lässt der Wagen nur wenige Wünsche offen",5000.00,"52 Wochen",mainpath_img+"golf.jpg");

var car2000=new new_artikel("A_3","Auto 2000","Das bewährte Auto für alle Lebenslagen.","Allerhöchste Technik und ein hoher Comfort lassen den Wagen weiterhin zu den besten der Welt zählen",25000.00,"4 Wochen",mainpath_img+"car2000.jpg");
var callypso=new new_artikel("A_4","Callypso","Für den stadtbewussten Menschen.","Bewährte Technik auf den neusten Stand zu einem vernünftigen Preis. Durch die Maße werden neue Parkflächen erschlossen",15000.00,"4 Wochen",mainpath_img+"callypso.jpg");

var velocity=new new_artikel("A_5","Velocity","Willkommen in der Zukunft","Willkommen in der Zukunft BlaBlaBla",45000.00,"10 Wochen",mainpath_img+"velocity.jpg");

*/
}
function test123()
{alert("Funktioniert!");}

function car_count()
{alert(sel_kat.fzglist.length);}
