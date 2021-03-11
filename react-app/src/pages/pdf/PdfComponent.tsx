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
doc.line(10, 110, 200, 110);
doc.line(10, 80, 200, 80);
doc.line(10, 165, 200, 165);
doc.line(10, 190, 200, 190);
doc.line(10, 225, 200, 225);
doc.line(10, 270, 200, 270);
doc.setFont("Book Antiqua", "bold");

doc.setFontSize(22);
doc.text("LEIEKONTRAKT", 100, 25, undefined, "center");

doc.setFont("Book Antiqua","normal");
doc.setFontSize(12);
doc.setFont("Book Antiqua","bold");
doc.text("UTELEIER", 10, 40);
doc.text("EIENDOM", 10, 60);
doc.setFont("Book Antiqua", "normal");
doc.text("Adresse:" ,10, 65);
doc.text("Bolignr:", 10, 70);
doc.text("Avtalen gjelder:", 10, 75);

doc.text("Hus", 70, 75 );
var checkBox = new AcroFormCheckBox();
checkBox.fieldName = "leilighet";
checkBox.appearanceState = 'Off';
checkBox.x = 80;
checkBox.y = 70;
checkBox.width = 7;
checkBox.height = 7;
doc.addField(checkBox);

doc.text("Leilighet", 106, 75 );
var checkBox1 = new AcroFormCheckBox();
checkBox1.fieldName = "leilighet";
checkBox1.appearanceState = "Off";
checkBox1.x = 125;
checkBox1.y = 70;
checkBox1.width = 7;
checkBox1.height = 7;
checkBox1.color = "black";
doc.addField(checkBox1);

doc.text("Rom", 150, 75 );
var checkBox2 = new AcroFormCheckBox();
checkBox2.fieldName = "leilighet";
checkBox2.appearanceState = "Off";
checkBox2.x = 162;
checkBox2.y = 70;
checkBox2.width = 7;
checkBox2.height = 7;
checkBox2.color = "black";
doc.addField(checkBox2);

doc.setFont("Book Antiqua","bold");
doc.text("LEIETAKER", 10, 85 );
doc.setFont("Book Antiqua", "normal");
doc.text("Navn:",  10, 90);
doc.text("Personnr:", 10, 95);
doc.text("Tlf/Mobil:", 10, 100);
doc.text("E-Post:", 10, 105);

doc.setFont("Book Antiqua","bold");
doc.text("HUSSTANDSMEDLEMMER (som bor i samme leieenheten)", 10, 115 );

doc.table(20, 120, data, header, {autoSize: false})

doc.setFont("Book Antiqua","bold");
doc.text("LEIETID", 10, 170 );
doc.setFont("Book Antiqua","normal");
doc.text("Leieforholdet løper fra den: ", 10, 175);
doc.text("Leieforholdet opphører uten oppsigelse den: ", 10, 180);
doc.text("(minimum 3 år).", 150, 180);
doc.text("I avtalt leieperiode er det:", 10, 185);
doc.text("måneder gjensidig oppsigelsestid.", 120, 185);

doc.setFont("Book Antiqua","bold");
doc.text("LEIE", 10, 195 );
doc.setFont("Book Antiqua","normal")

doc.text("Leie Kr: ", 10, 200);
doc.text("/ mnd, til konto ", 90, 200);
doc.text("i DNB Bank.", 170, 200);
doc.text("Leien betales forskuddsvis den: ", 10, 205);
doc.text("hver måned.", 135, 205);
doc.text("Første husleie betales innen : ", 10, 210);
doc.text("til utleiers konto.", 135, 210);
doc.text("Forskuddsleie Kr : ", 10, 215);
doc.text("(=max. 2 mnd. husleie), betales innen ", 60, 215);
doc.text("til utleiers konto.  ", 170, 215);
doc.text("Ved bruk av husleiegaranti er det leietakers plikt og til en hver tid passe på at denne er gyldig.       ", 10, 220);

doc.setFont("Book Antiqua","bold");
doc.text("STRØM", 10, 230 );
doc.setFont("Book Antiqua","normal");
var checkBoxStrøm = new AcroFormCheckBox();
checkBoxStrøm.fieldName = "strøm";
checkBoxStrøm.appearanceState = "Off";
checkBoxStrøm.x = 10;
checkBoxStrøm.y = 234;
checkBoxStrøm.width = 7;
checkBoxStrøm.height = 7;
checkBoxStrøm.color = "black";
doc.addField(checkBoxStrøm);


var checkBoxStrøm1 = new AcroFormCheckBox();
checkBoxStrøm1.fieldName = "strøm";
checkBoxStrøm1.appearanceState = "Off";
checkBoxStrøm1.x = 10;
checkBoxStrøm1.y = 242;
checkBoxStrøm1.width = 7;
checkBoxStrøm1.height = 7;
checkBoxStrøm1.color = "black";
doc.addField(checkBoxStrøm1);

doc.text("Strøm er IKKE inkludert i husleien. ", 20, 239 );
doc.setFont("Book Antiqua","bold");
doc.text("Utleier tegner eget abon.ment på vegne av leietaker.", 84, 239 );
doc.setFont("Book Antiqua","normal");
doc.text("Strøm er inkludert i husleien.", 20, 247 );
doc.setFont("Book Antiqua","bold");
doc.text("STRØMMÅLERNR.: ", 10, 257 );
doc.text("DATO: ", 90, 257 );
doc.text("AVLEST:  ", 150, 257 );
doc.setFontSize(12);
doc.text("Spørsmål  leieenhet:  ", 10, 263 );
doc.setFont("Book Antiqua","normal");
doc.text("vestengveien@live.no/ Spørsmål  faktura: vestengveien.faktura@outlook.com ", 48, 263 );
doc.setFont("Book Antiqua","bold");
doc.text("SIGNATURER", 10, 275 );
doc.text("Utleier og leietaker vedtar herved ALLE punktene i denne avtalen, totalt 7 sider.", 10, 280 );
doc.setFont("Book Antiqua","normal");
doc.text("Sted/Dato:", 10, 287 );
doc.text("Sted/Dato:", 150, 287 );
doc.setFont("Book Antiqua","bold");
doc.text("Utleier:", 10, 295 );
doc.text("Leietaker:", 150, 295 );














doc.save("satan.pdf");








  return (
   <>
 
  

   </>
  );
};

export default PdfComponent;
