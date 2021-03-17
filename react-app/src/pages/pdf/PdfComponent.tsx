import { Button, makeStyles, TextField, Typography } from "@material-ui/core";
import { AcroFormCheckBox, jsPDF } from "jspdf";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import moment from "moment";

export interface IContract {
  adress: string;
  apartmentNumber: Number;
  name: string;
  socialSecurityNumber: Number;
  phoneNumber: Number;
  email: string;
  rentTime1: Date;
  rentTime2: Date;
  rentTime3: Number;
  rent1: Number;
  rent1a: Number;
  rent2: Number;
  rent3: Date;
  rent4: Number;
  rent4a: Date;
  electrictyNumber: Number;
  electrictyDate: Date;
}

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

function createHeaders(keys: any) {
  return keys.map((key: any) => ({
    name: key,
    prompt: key,
    width: 110,
    height: 2,
    align: "center",
    
  }));
}

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      alignitems: "center",
      textAlign: "center",
    },
  },
  error: {
    color: "red",
  },
}));

const PdfComponent = () => {
  const [formData, setFormData] = useState<IContract>();
  const methods = useForm();
  const { handleSubmit, control, errors } = methods;
  const classes = useStyles();

  const onSubmit = (data: IContract) => {
    setFormData(data);
    PdfValues(data);
  };

  const PdfValues = (formData: IContract) => {
    var doc = new jsPDF();

    doc.line(10, 110, 200, 110);

    doc.line(10, 80, 200, 80);
    doc.line(10, 165, 200, 165);
    doc.line(10, 190, 200, 190);
    doc.line(10, 225, 200, 225);
    doc.line(10, 270, 200, 270);
    
    
    
    
    doc.setFont("Times New Roman", "bold");
    doc.setFontSize(22);
    doc.text("LEIEKONTRAKT", 100, 20, undefined, "center");

    doc.setFont("Times New Roman", "normal");
    doc.setFontSize(14);
    doc.setFont("Times New Roman", "bold");
    doc.text("UTELEIER:", 10, 40);
    doc.setFont("Times New Roman", "normal");
    doc.text("Vestengveien Eiendomsutvikling A/S", 39, 40);
    doc.setFontSize(12);
    doc.setFont("Times New Roman", "bold");
    doc.text("EIENDOM", 10, 60);
    doc.setFont("Times New Roman", "normal");
    doc.text("Adresse:" + " " + formData?.adress, 10, 65);
    doc.text("Bolignr:" + " " + formData?.apartmentNumber, 10, 70);
    doc.text("Avtalen gjelder:", 10, 75);

    doc.text("Hus", 70, 75);
    var checkBox = new AcroFormCheckBox();
    checkBox.fieldName = "leilighet1";
    checkBox.appearanceState = "Off";
    checkBox.x = 80;
    checkBox.y = 70;
    checkBox.width = 7;
    checkBox.height = 7;
    doc.addField(checkBox);

    doc.text("Leilighet", 99, 75);
    var checkBox1 = new AcroFormCheckBox();
    checkBox1.fieldName = "leilighet2";
    checkBox1.appearanceState = "Off";
    checkBox1.x = 118;
    checkBox1.y = 70;
    checkBox1.width = 7;
    checkBox1.height = 7;
    checkBox1.color = "black";
    doc.addField(checkBox1);

    doc.text("Rom", 138, 75);
    var checkBox2 = new AcroFormCheckBox();
    checkBox2.fieldName = "leilighet3";
    checkBox2.appearanceState = "Off";
    checkBox2.x = 148;
    checkBox2.y = 70;
    checkBox2.width = 7;
    checkBox2.height = 7;
    checkBox2.color = "black";
    doc.addField(checkBox2);

    doc.setFont("Times New Roman", "bold");
    doc.text("LEIETAKER", 10, 85);
    doc.setFont("Times New Roman", "normal");
    doc.text("Navn:" + " " + formData?.name, 10, 90);
    doc.text("Personnr:" + " " + formData?.socialSecurityNumber, 10, 95);
    doc.text("Tlf/Mobil:" + " " + formData?.phoneNumber, 10, 100);
    doc.text("E-Post:" + " " + formData?.email, 10, 105);

    doc.setFont("Times New Roman", "bold");
    doc.text("HUSSTANDSMEDLEMMER (som bor i samme leieenheten)", 10, 115);
    doc.table(20, 120, data, header, { autoSize: false });

    doc.setFont("Times New Roman", "bold");
    doc.text("LEIETID", 10, 170);
    doc.setFont("Times New Roman", "normal");
    doc.text(
      "Leieforholdet løper fra den:" +
        " " +
        moment(formData?.rentTime1).format("DD.MM.yyyy"),
      10,
      175
    );
    doc.text(
      "Leieforholdet opphører uten oppsigelse den:" +
        " " +
        moment(formData?.rentTime2).format("DD.MM.yyyy") + " " + "(minimum 3 år).",
      10,
      180
    );
    
    doc.text(
      "I avtalt leieperiode er det:" + " " + formData?.rentTime3  + " " + "måneder gjensidig oppsigelsestid.",
      10,
      185
    );
    

    doc.setFont("Times New Roman", "bold");
    doc.text("LEIE", 10, 195);
    doc.setFont("Times New Roman", "normal");

    doc.text("Leie Kr:" + " " + formData?.rent1 + ",-" + " " + "/ mnd, til konto" + " " + "15031579012" + " " + "i DNB Bank." , 10, 200);
    
    doc.text(
      "Leien betales forskuddsvis den:" +
        " " +
        formData?.rent2 + "." + " " + "hver måned.",
      10,
      205
    );
   
    doc.text(
      "Første husleie betales innen :" +
        " " +
        moment(formData?.rent3).format("DD.MM.yyyy") + " " + "til utleiers konto.",
      10,
      210
    );
    doc.setFontSize(12);
    doc.setFont("Times New Roman", "normal");
    doc.text(
      "Forskuddsleie Kr:" + " " + formData?.rent4 + ",-" + " " + "(=max. 2 mnd. husleie)," + " " + "betales innen" + " " + moment(formData?.rent4a).format("DD.MM.yyyy") + " " + "til utleiers konto.", 10, 215);  
    doc.setFont("Times New Roman", "normal");
    doc.setFontSize(12);
    doc.setFont("Times New Roman", "italic");
    doc.text(
      "Ved bruk av husleiegaranti er det leietakers plikt og til en hver tid passe på at denne er gyldig.",
      10,
      220
    );
    
    doc.setFont("Times New Roman", "bold");
    doc.text("STRØM", 10, 230);
    doc.setFont("Book Antiqua", "normal");
    var checkBoxStrøm = new AcroFormCheckBox();
    checkBoxStrøm.fieldName = "strøm1";
    checkBoxStrøm.appearanceState = "Off";
    checkBoxStrøm.x = 10;
    checkBoxStrøm.y = 234;
    checkBoxStrøm.width = 7;
    checkBoxStrøm.height = 7;
    checkBoxStrøm.color = "black";
    doc.addField(checkBoxStrøm);

    var checkBoxStrøm1 = new AcroFormCheckBox();
    checkBoxStrøm1.fieldName = "strøm2";
    checkBoxStrøm1.appearanceState = "Off";
    checkBoxStrøm1.x = 10;
    checkBoxStrøm1.y = 242;
    checkBoxStrøm1.width = 7;
    checkBoxStrøm1.height = 7;
    checkBoxStrøm1.color = "black";
    doc.addField(checkBoxStrøm1);

    doc.text("Strøm er IKKE inkludert i husleien. ", 20, 239);
    doc.setFont("Times New Roman", "bold");
    doc.text("Utleier tegner eget abon.ment på vegne av leietaker.", 84, 239);
    doc.setFont("Times New Roman", "normal");
    doc.text("Strøm er inkludert i husleien.", 20, 247);
    doc.setFont("Times New Roman", "bold");
    doc.text("STRØMMÅLERNR.: " + " " + formData?.electrictyNumber, 10, 257);
    doc.text(
      "DATO: " + " " + moment(formData?.electrictyDate).format("DD.MM.yyyy"),
      107,
      257
    );
    doc.text("AVLEST:  ", 160, 257);
    doc.setFontSize(12);
    doc.text("Spørsmål  leieenhet:  ", 10, 263);
    doc.setFont("Times New Roman", "normal");
    doc.setTextColor(6,69,173);
    doc.text("vestengveien@live.no", 49, 263);
    doc.setTextColor(0);
    doc.text("/ Spørsmål til faktura: ", 88, 263);
    doc.setTextColor(6,69,173);
    doc.text("vestengveien.faktura@outlook.com", 127, 263);
    doc.setTextColor(0);



    doc.setFont("Times New Roman", "bold");
    doc.text("SIGNATURER", 10, 275);
    doc.text(
      "Utleier og leietaker vedtar herved ALLE punktene i denne avtalen, totalt 7 sider.",
      10,
      280
    );
    doc.setFont("Times New Roman", "normal");
    doc.text("Sted/Dato:", 10, 287);
    doc.text("Sted/Dato:", 120, 287);
    doc.setFont("Times New Roman", "bold");
    doc.text("Utleier:", 10, 295);
    doc.text("Leietaker:", 120, 295);
    doc.setLineDashPattern([2, 2], 0);
    doc.line(30, 287, 114, 287);
    doc.line(140, 287, 200 , 287);
    doc.line(27, 295, 115, 295);
    doc.line(140, 295, 200 , 295);
    doc.save("satan.pdf");
  };

  return (
    <>
      <Typography variant="h4" component="h2">
        Opprett kontrakt
      </Typography>

      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Controller
          as={TextField}
          name="adress"
          control={control}
          defaultValue="Adresse"
          variant="outlined"
          label="Skriv inn addresse..."
        ></Controller>

        <Controller
          as={TextField}
          name="apartmentNumber"
          control={control}
          defaultValue="Bolignr"
          variant="outlined"
          label="Skriv inn bolignr.."
        ></Controller>

        <Controller
          as={TextField}
          name="name"
          control={control}
          defaultValue="Name"
          variant="outlined"
          label="Skriv inn navn på leietaker.."
        ></Controller>

        <Controller
          as={TextField}
          name="socialSecurityNumber"
          control={control}
          defaultValue="Personnummer"
          variant="outlined"
          label="Skriv inn personnummer til leietaker.."
        ></Controller>

        <Controller
          as={TextField}
          name="phoneNumber"
          control={control}
          defaultValue="Telefonnummer"
          variant="outlined"
          label="Skriv inn telefonnummer til leietaker.."
        ></Controller>

        <Controller
          as={TextField}
          name="email"
          control={control}
          defaultValue="Email"
          variant="outlined"
          label="Skriv inn epost til leietaker.."
        ></Controller>

        <Typography>Leieforholdet løper fra den..</Typography>
        <Controller
          as={TextField}
          name="rentTime1"
          type="Date"
          variant="filled"
          control={control}
        ></Controller>
        <Typography>Leieforholdet opphører uten oppsigelse den...</Typography>
        <Controller
          as={TextField}
          name="rentTime2"
          type="Date"
          variant="filled"
          control={control}
        ></Controller>

        <Controller
          as={TextField}
          name="rentTime3"
          control={control}
          defaultValue="Avtalt leieperiode"
          variant="outlined"
          label=" I avtalt leieperiode er det x måneder gjensidig oppsigelsestid.."
        ></Controller>

        <Controller
          as={TextField}
          name="rent1"
          control={control}
          defaultValue="Leiepris"
          variant="outlined"
          label=" Leie Kr i mnd"
        ></Controller>
        <Controller
          as={TextField}
          name="rent2"
          variant="outlined"
          label=" Leien betales forskuddsvis den: x hver måned."
          control={control}
        ></Controller>

        <Typography>
          Første husleie betales innen : dato til utleiers konto.
        </Typography>
        <Controller
          as={TextField}
          name="rent3"
          type="Date"
          variant="filled"
          control={control}
        ></Controller>

        <Controller
          as={TextField}
          name="rent4"
          control={control}
          defaultValue="Forskuddsleie"
          variant="outlined"
          label=" Forskuddsleie Kr : (=max. 2 mnd. husleie)"
        ></Controller>

        <Typography>betales innen DATO til utleiers konto. </Typography>
        <Controller
          as={TextField}
          name="rent4a"
          type="Date"
          variant="filled"
          control={control}
        ></Controller>

        <Controller
          as={TextField}
          name="electrictyNumber"
          control={control}
          defaultValue="STRØMMÅLERNR"
          variant="outlined"
          label=" STRØMMÅLERNR.:"
        ></Controller>

        <Typography>Strømmålerdato </Typography>
        <Controller
          as={TextField}
          name="rent4a"
          type="Date"
          variant="filled"
          control={control}
        ></Controller>

        <Button type="submit"> Lag kontrakt </Button>
      </form>
    </>
  );
};

export default PdfComponent;
