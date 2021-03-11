import React, { useEffect, useState } from "react";
import { AcroFormCheckBox, jsPDF} from "jspdf";


var data = [
  {
 
 Navn: "Robert André Lundeby",
 Personnr: "123543412123",
},
{
  
  Navn: "Kristine Olafsen",
  Personnr: "123523123",
},
{
  
  Navn: "Henriette Jørgesen Olsen",
  Personnr: "123523123",
},

];

var header = createHeaders(["Navn", "Personnr"]);

function createHeaders(keys : any) {
  return keys.map((key: any)    =>  ({
    'name': key,
    'prompt': key,
    'width':110,
    'height':2,
    'align':'center',
    'padding':0
  }));
}

const PdfComponent = () => {
  
var doc = new jsPDF();

//var adresse = prompt("EIENDOM - ADRESSE: ");
//var bolignr = prompt("EIENDOM - BOLIGNR");
doc.line(10, 125, 200, 125);
doc.line(10, 95, 200, 95);
doc.line(10, 185, 200, 185);
doc.line(10, 210, 200, 210);
doc.setFont("Book Antiqua", "bold");

doc.setFontSize(22);
doc.text("LEIEKONTRAKT", 100, 25, undefined, "center");

doc.setFont("Book Antiqua","normal");
doc.setFontSize(12);
doc.setFont("Book Antiqua","bold");
doc.text("UTELEIER", 10, 50);
doc.text("EIENDOM", 10, 70);
doc.setFont("Book Antiqua", "normal");
doc.text("Adresse:" ,10, 75);
doc.text("Bolignr:", 10, 80);
doc.text("Avtalen gjelder:", 10, 85);

doc.text("Hus", 70, 85 );
var checkBox = new AcroFormCheckBox();
checkBox.fieldName = "hus";
checkBox.appearanceState = 'Off';
checkBox.x = 80;
checkBox.y = 81;
checkBox.width = 7;
checkBox.height = 7;
doc.addField(checkBox);

doc.text("Leilighet", 106, 85 );
var checkBox1 = new AcroFormCheckBox();
checkBox1.fieldName = "leilighet";
checkBox1.appearanceState = "Off";
checkBox1.x = 125;
checkBox1.y = 81;
checkBox1.width = 7;
checkBox1.height = 7;
checkBox1.color = "black";
doc.addField(checkBox1);

doc.text("Rom", 150, 85 );
var checkBox2 = new AcroFormCheckBox();
checkBox2.fieldName = "rom";
checkBox2.appearanceState = "Off";
checkBox2.x = 162;
checkBox2.y = 81;
checkBox2.width = 7;
checkBox2.height = 7;
checkBox2.color = "black";
doc.addField(checkBox2);

doc.setFont("Book Antiqua","bold");
doc.text("LEIETAKER", 10, 100 );
doc.setFont("Book Antiqua", "normal");
doc.text("Navn:",  10, 105);
doc.text("Personnr:", 10, 110);
doc.text("Tlf/Mobil:", 10, 115);
doc.text("E-Post:", 10, 120);

doc.setFont("Book Antiqua","bold");
doc.text("HUSSTANDSMEDLEMMER (som bor i samme leieenheten)", 10, 130 );

doc.table(20, 135, data, header, {autoSize: false})

doc.setFont("Book Antiqua","bold");
doc.text("LEIETID", 10, 190 );
doc.setFont("Book Antiqua","normal");
doc.text("Leieforholdet løper fra den: ", 10, 195);
doc.text("Leieforholdet opphører uten oppsigelse den: ", 10, 200);
doc.text("(minimum 3 år).", 150, 200);
doc.text("I avtalt leieperiode er det:", 10, 205);
doc.text("måneder gjensidig oppsigelsestid.", 120, 205);

doc.setFont("Book Antiqua","bold");
doc.text("LEIE", 10, 215 );
doc.setFont("Book Antiqua","normal")

doc.text("Leie Kr: ", 10, 220);
doc.text("/ mnd, til konto ", 90, 220);
doc.text("i DNB Bank.", 170, 220);
doc.text("Leien betales forskuddsvis den: ", 10, 225);
doc.text("hver måned.", 135, 225);
doc.text("Første husleie betales innen : ", 10, 230);
doc.text("til utleiers konto.", 135, 230);
doc.text("Forskuddsleie Kr : ", 10, 235);
doc.text("(=max. 2 mnd. husleie), betales innen ", 60, 235);
doc.text("til utleiers konto.  ", 170, 235);

















doc.save("satan.pdf");








  return (
   <>
 
  

   </>
  );
};

export default PdfComponent;
