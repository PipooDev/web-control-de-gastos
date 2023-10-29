import { useEffect, useState } from "react";
import { Form, Formik } from "formik";
import { useDataCatalogo } from "../context/DataCatalogoProvider.jsx";
import { useParams, useNavigate } from "react-router-dom";

function CatalogoForm() {
  const { createDataCatalogo, getDataCatalogo, updateDataCatalogo } =
    useDataCatalogo();
  const [data, setDataCatalogo] = useState({
    id: "",
    BENEFICIARIO: "",
    TIPO_DE_PERSONA: "",
    RFC: "",
    CURP: "",
    CATALOGO_VIALIDAD: "",
    TIPO_DE_VIALIDAD: "",
    NOMBRE_DE_VIALIDAD: "",
    NUMERO_INT_EXT_MZ_LT: "",
    ASENTAMIENTO: "",
    NOMBRE_DEL_ASENTAMIENTO: "",
    ENTIDAD_FEDERATIVA: "",
    MUNICIPIO_DELEGACION: "",
    CODIGO_POSTAL: "",
    BANCO: "",
    CTA_BANCO: "",
    CLABE_INTERBANCARIA: "",
    TIPO_DE_BENEFICIARIO: "",
    NUM_CONTRATO: "",
    SOLICITUD_DE_EMPLEO: "",
    PADRON_GOBIERNO_DEL_ESTADO: "",
    CV: "",
    ACREDITACIONES_CONSTANCIAS: "",
    CEDULA_PROFESIONAL: "",
    NUMERO_CEDULA_PROFESIONAL: "",
    TITULO_PROFESIONAL: "",
    INE: "",
    CURP2: "",
    ACTA_DE_NACIMIENTO: "",
    COMPROBANTE_DE_DOMICILIO: "",
    CONSTANCIA_DEL_SAT: "",
    NO_INHABILITADO: "",
    ANTECEDENTES_NO_PENALES: "",
    CERTIFICADO_MEDICO: "",
    CARTA_DE_RECOMENDACION: "",
    CARTA_DE_RECOMENDACION2: "",
    CARATULA_BANCARIO: "",
    FOTOGRAFIA_TAMAÑO_INFANTIL: "",
    LICENCIA_PARA_CONDUCIR: "",
    PADRON_GOBIERNO_DEL_ESTADO2: "",
    ACTA_CONSTITUTIVA: "",
    CONSTANCIA_DEL_SAT2: "",
    OPINION_POSITIVA: "",
    COMPROBANTE_DE_DOMICILIO2: "",
    SEMBLANZA_CURRICULAR_PM: "",
    CARATULA_BANCARIO2: "",
    CV_RL: "",
    INE_RL: "",
    CEDULA_PROFESIONAL_RL: "",
    NUMERO_CEDULA_PROFESIONAL_RL: "",
    CURP_RL: "",
    ACTA_DE_NACIMIENTO_RL: "",
  });
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const loadDataCatalogo = async () => {
      if (params.id) {
        const data = await getDataCatalogo(params.id);
        setDataCatalogo({
          id: data.id,
          BENEFICIARIO: data.BENEFICIARIO,
          TIPO_DE_PERSONA: data.TIPO_DE_PERSONA,
          RFC: data.RFC,
          CURP: data.CURP,
          CATALOGO_VIALIDAD: data.CATALOGO_VIALIDAD,
          TIPO_DE_VIALIDAD: data.TIPO_DE_VIALIDAD,
          NOMBRE_DE_VIALIDAD: data.NOMBRE_DE_VIALIDAD,
          NUMERO_INT_EXT_MZ_LT: data.NUMERO_INT_EXT_MZ_LT,
          ASENTAMIENTO: data.ASENTAMIENTO.trim(),
          NOMBRE_DEL_ASENTAMIENTO: data.NOMBRE_DEL_ASENTAMIENTO,
          CODIGO_POSTAL: data.CODIGO_POSTAL,
          BANCO: data.BANCO,
          CTA_BANCO: data.CTA_BANCO,
          CLABE_INTERBANCARIA: data.CLABE_INTERBANCARIA,
          TIPO_DE_BENEFICIARIO: data.TIPO_DE_BENEFICIARIO,
          NUM_CONTRATO: data.NUM_CONTRATO,
          SOLICITUD_DE_EMPLEO: data.SOLICITUD_DE_EMPLEO,
          PADRON_GOBIERNO_DEL_ESTADO: data.PADRON_GOBIERNO_DEL_ESTADO,
          CV: data.CV,
          ACREDITACIONES_CONSTANCIAS: data.ACREDITACIONES_CONSTANCIAS,
          CEDULA_PROFESIONAL: data.CEDULA_PROFESIONAL,
          NUMERO_CEDULA_PROFESIONAL: data.NUMERO_CEDULA_PROFESIONAL,
          TITULO_PROFESIONAL: data.TITULO_PROFESIONAL,
          INE: data.INE,
          CURP2: data.CURP2,
          ACTA_DE_NACIMIENTO: data.ACTA_DE_NACIMIENTO,
          COMPROBANTE_DE_DOMICILIO: data.COMPROBANTE_DE_DOMICILIO,
          CONSTANCIA_DEL_SAT: data.CONSTANCIA_DEL_SAT,
          NO_INHABILITADO: data.NO_INHABILITADO,
          ANTECEDENTES_NO_PENALES: data.ANTECEDENTES_NO_PENALES,
          CERTIFICADO_MEDICO: data.CERTIFICADO_MEDICO,
          CARTA_DE_RECOMENDACION: data.CARTA_DE_RECOMENDACION,
          CARTA_DE_RECOMENDACION2: data.CARTA_DE_RECOMENDACION2,
          CARATULA_BANCARIO: data.CARATULA_BANCARIO,
          FOTOGRAFIA_TAMAÑO_INFANTIL: data.FOTOGRAFIA_TAMAÑO_INFANTIL,
          LICENCIA_PARA_CONDUCIR: data.LICENCIA_PARA_CONDUCIR,
          PADRON_GOBIERNO_DEL_ESTADO2: data.PADRON_GOBIERNO_DEL_ESTADO2,
          ACTA_CONSTITUTIVA: data.ACTA_CONSTITUTIVA,
          CONSTANCIA_DEL_SAT2: data.CONSTANCIA_DEL_SAT2,
          OPINION_POSITIVA: data.OPINION_POSITIVA,
          COMPROBANTE_DE_DOMICILIO2: data.COMPROBANTE_DE_DOMICILIO2,
          SEMBLANZA_CURRICULAR_PM: data.SEMBLANZA_CURRICULAR_PM,
          CARATULA_BANCARIO2: data.CARATULA_BANCARIO2,
          CV_RL: data.CV_RL,
          INE_RL: data.INE_RL,
          CEDULA_PROFESIONAL_RL: data.CEDULA_PROFESIONAL_RL,
          NUMERO_CEDULA_PROFESIONAL_RL: data.NUMERO_CEDULA_PROFESIONAL_RL,
          CURP_RL: data.CURP_RL,
          ACTA_DE_NACIMIENTO_RL: data.ACTA_DE_NACIMIENTO_RL,
        });
        setEntidad(data.ENTIDAD_FEDERATIVA);
        setMunicipios(data.MUNICIPIO_DELEGACION);
      }
    };
    loadDataCatalogo();
  }, []);

  const entidades = {
    Aguascalientes: "AGS",
    "Baja California": "BC",
    "Baja California Sur": "BCS",
    Campeche: "CAM",
    Chiapas: "CHIS",
    Chihuahua: "CHH",
    "Coahuila de Zaragoza": "COAH",
    Colima: "COL",
    "Ciudad de México": "CDMX",
    Durango: "DUR",
    Guanajuato: "GTO",
    Guerrero: "GRO",
    Hidalgo: "HGO",
    Jalisco: "JAL",
    México: "MEX",
    "Michoacán de Ocampo": "MICH",
    Morelos: "MOR",
    Nayarit: "NAY",
    "Nuevo León": "NL",
    Oaxaca: "OAX",
    Puebla: "PUE",
    Querétaro: "QRO",
    "Quintana Roo": "ROO",
    "San Luis Potosí": "SLP",
    Sinaloa: "SIN",
    Sonora: "SON",
    Tabasco: "TAB",
    Tamaulipas: "TAM",
    Tlaxcala: "TLAX",
    "Veracruz de Ignacio de la Llave": "VER",
    Yucatán: "YUC",
    Zacatecas: "ZAC",
  };

  const municipios = {
    Aguascalientes: [
      "Null",
      "Aguascalientes",
      "Asientos",
      "Calvillo",
      "Cosío",
      "Jesús María",
      "Pabellón de Arteaga",
      "Rincón de Romos",
      "San José de Gracia",
      "Tepezalá",
      "El Llano",
      "San Francisco de los Romo",
    ],
    "Baja California": [
      "Null",
      "Ensenada",
      "Mexicali",
      "Tecate",
      "Tijuana",
      "Playas de Rosarito",
      "San Quintín",
      "San Felipe",
    ],
    "Baja California Sur": [
      "Null",
      "Comondú",
      "Mulegé",
      "La Paz",
      "Los Cabos",
      "Loreto",
    ],
    Campeche: [
      "Null",
      "Calkini",
      "Campeche",
      "Carmen",
      "Champotón",
      "Hecelchakán",
      "Hopelchén",
      "Palizada",
      "Tenabo",
      "Escárcega",
      "Calakmul",
      "Candelaria",
      "Seybaplaya",
      "Dzitbalche",
    ],
    "Coahuila de Zaragoza": [
      "Null",
      "Abasolo",
      "Acuña",
      "Allende",
      "Arteaga",
      "Candela",
      "Castaños",
      "Cuatro Ciénegas",
      "Escobedo",
      "Francisco I. Madero",
      "Frontera",
      "General Cepeda",
      "Guerrero",
      "Hidalgo",
      "Jiménez",
      "Juárez",
      "Lamadrid",
      "Matamoros",
      "Monclova",
      "Morelos",
      "Múzquiz",
      "Nadadores",
      "Nava",
      "Ocampo",
      "Parras",
      "Piedras Negras",
      "Progreso",
      "Ramos Arizpe",
      "Sabinas",
      "Sacramento",
      "Saltillo",
      "San Buenaventura",
      "San Juan de Sabinas",
      "San Pedro",
      "Sierra Mojada",
      "Torreon",
      "Viesca",
      "Villa Union",
      "Zaragoza",
    ],
    Colima: [
      "Null",
      "Armería",
      "Colima",
      "Comala",
      "Coquimatlón",
      "Cuauhtemoc",
      "Ixtlahuacón",
      "Manzanillo",
      "Minatitlón",
      "Tecomén",
      "Villa de Alvarez",
    ],
    Chiapas: [
      "Null",
      "Acacoyagua",
      "Acala",
      "Acapetahua",
      "Altamirano",
      "Amatan",
      "Amatenango de la Frontera",
      "Amatenango del Valle",
      "Angel Albino Corzo",
      "Arriaga",
      "Bejucal de Ocampo",
      "Bella Vista",
      "Berriozabal",
      "Bochil",
      "El Bosque",
      "Cacahoatán",
      "Catazajá",
      "Cintalapa de Figueroa",
      "Coapilla",
      "Comitón de Doménguez",
      "La Concordia",
      "Copainala",
      "Chalchihuitán",
      "Chamula",
      "Chanal",
      "Chapultenango",
      "Chenalhó",
      "Chiapa de Corzo",
      "Chiapilla",
      "Chicoasén",
      "Chicomuselo",
      "Chilón",
      "Escuintla",
      "Francisco León",
      "Frontera Comalapa",
      "Frontera Hidalgo",
      "La Grandeza",
      "Huehuetán",
      "Huixtán",
      "Huitiupán",
      "Huixtla",
      "La Independencia",
      "Ixhuatan",
      "IxtaComitón",
      "Ixtapa",
      "Ixtapangajoya",
      "Jiquipilas",
      "Jitotol",
      "Juárez",
      "Larrainzar",
      "La Libertad",
      "Mapastepec",
      "Las Margaritas",
      "Mazapa de Madero",
      "Mazatan",
      "Metapa",
      "Mitontic",
      "Motozintla",
      "Nicolas Ruíz",
      "Ocosingo",
      "Ocotepec",
      "Ocozocoautla de Espinosa",
      "Ostuacón",
      "Osumacinta",
      "Oxchuc",
      "Palenque",
      "Pantelhó",
      "Pantepec",
      "Pichucalco",
      "Pijijiapan",
      "El Porvenir",
      "Villa Comaltitlón",
      "Pueblo Nuevo Solistahuacón",
      "Rayón",
      "Reforma",
      "Las Rosas",
      "Sabanilla",
      "Salto de Agua",
      "San Cristobal de las Casas",
      "San Fernando",
      "Siltepec",
      "Simojovel",
      "Sitala",
      "Socoltenango",
      "Solosuchiapa",
      "Soyalá",
      "Suchiapa",
      "Suchiate",
      "Sunuapa",
      "Tapachula",
      "Tapalapa",
      "Tapilula",
      "Tecpatan",
      "Tenejapa",
      "Teopisca",
      "Tila",
      "Tonalá",
      "Totolapa",
      "La Trinitaria",
      "Tumbala",
      "Tuxtla Gutierrez",
      "Tuxtla Chico",
      "Tuzantán",
      "Tzimol",
      "Union Juárez",
      "Venustiano Carranza",
      "Villa Corzo",
      "Villaflores",
      "Yajalón",
      "San Lucas",
      "Zinacantán",
      "San Juan Cancuc",
      "Aldama",
      "Benemérito de las Américas",
      "Maravilla Tenejapa",
      "Marqués de Comillas",
      "Montecristo de Guerrero",
      "San Andrés Duraznal",
      "Santiago el Pinar",
      "Capitán Luis Ángel Vidal",
      "Rincón Chamula San Pedro",
      "El Parral",
      "Emiliano Zapata",
      "Mezcalapa",
      "Honduras de la Sierra",
    ],
    Chihuahua: [
      "Null",
      "Ahumada",
      "Aldama",
      "Allende",
      "Aquiles Serdan",
      "Ascension",
      "Bachiniva",
      "Balleza",
      "Batopilas de Manuel Gomez Morín",
      "Bocoyna",
      "Buenaventura",
      "Camargo",
      "Carichi",
      "Casas Grandes",
      "Coronado",
      "Coyame del Sotol",
      "La Cruz",
      "Cuauhtemoc",
      "Cusihuiriachi",
      "Chihuahua",
      "Chinipas",
      "Delicias",
      "Dr. Belisario Domínguez",
      "Galeana",
      "Santa Isabel",
      "Gomez Farias",
      "Gran Morelos",
      "Guachochi",
      "Guadalupe",
      "Guadalupe y Calvo",
      "Guazapares",
      "Guerrero",
      "Hidalgo del Parral",
      "Huejotitan",
      "Ignacio Zaragoza",
      "Janos",
      "Jiménez",
      "Juárez",
      "Julimes",
      "Lopez",
      "Madera",
      "Maguarichi",
      "Manuel Benavides",
      "Matachi",
      "Matamoros",
      "Meoqui",
      "Morelos",
      "Moris",
      "Namiquipa",
      "Nonoava",
      "Nuevo Casas Grandes",
      "Ocampo",
      "Ojinaga",
      "Praxedis G. Guerrero",
      "Riva Palacio",
      "Rosales",
      "Rosario",
      "San Francisco de Borja",
      "San Francisco de Conchos",
      "San Francisco del Oro",
      "Santa Barbara",
      "Satevo",
      "Saucillo",
      "Temasachic",
      "El Tule",
      "Urique",
      "Uruachi",
      "Valle de Zaragoza",
    ],
    "Ciudad de México": [
      "Null",
      "Azcapotzalco",
      "Coyoacón",
      "Cuajimalpa de Morelos",
      "Gustavo A. Madero",
      "Iztacalco",
      "Iztapalapa",
      "La Magdalena Contreras",
      "Milpa Alta",
      "Alvaro Obregon",
      "Tlahuac",
      "Tlalpan",
      "Xochimilco",
      "Benito Juárez",
      "Cuauhtemoc",
      "Miguel Hidalgo",
      "Venustiano Carranza",
    ],
    Durango: [
      "Null",
      "Canatlón",
      "Canelas",
      "Coneto de Comonfort",
      "Cuencame",
      "Durango",
      "General Simon Bolivar",
      "Gomez Palacio",
      "Guadalupe Victoria",
      "Guanaceva",
      "Hidalgo",
      "Indi",
      "Lerdo",
      "Mapimi",
      "Mezquital",
      "Nazas",
      "Nombre de Dios",
      "Ocampo",
      "El Oro",
      "Otáez",
      "Panuco de Coronado",
      "Peñón Blanco",
      "Poanas",
      "Pueblo Nuevo",
      "Rodeo",
      "San Bernardo",
      "San Dimas",
      "San Juan de Guadalupe",
      "San Juan del Rio",
      "San Luis del Cordero",
      "San Pedro del Gallo",
      "Santa Clara",
      "Santiago Papasquiaro",
      "séchil",
      "Tamazula",
      "Tepehuanes",
      "Tlahualilo",
      "Topia",
      "Vicente Guerrero",
      "Nuevo Ideal",
    ],
    Guanajuato: [
      "Null",
      "Abasolo",
      "Acambaro",
      "San Miguel de Allende",
      "Apaseo el Alto",
      "Apaseo el Grande",
      "Atarjea",
      "Celaya",
      "Manuel Doblado",
      "Comonfort",
      "Coroneo",
      "Cortazar",
      "Cueramaro",
      "Doctor Mora",
      "Dolores Hidalgo Cuna de la Independencia Nacional",
      "Guanajuato",
      "Huanimaro",
      "Irapuato",
      "Jaral del Progreso",
      "Jerecuaro",
      "León",
      "MoroLeón",
      "Ocampo",
      "Penjamo",
      "Pueblo Nuevo",
      "Purisima del Rincón",
      "Romita",
      "Salamanca",
      "Salvatierra",
      "San Diego de la Union",
      "San Felipe",
      "San Francisco del Rincón",
      "San José Iturbide",
      "San Luis de la Paz",
      "Santa Catarina",
      "Santa Cruz de Juventino Rosas",
      "Santiago Maravateo",
      "Silao de la Victoria",
      "Tarandacuao",
      "Tarimoro",
      "Tierra Blanca",
      "Uriangato",
      "Valle de Santiago",
      "Victoria",
      "Villagrán",
      "Xichi",
      "Yuriria",
    ],
    Guerrero: [
      "Null",
      "Acapulco de Juárez",
      "Acatepec",
      "Ahuacuotzingo",
      "Ajuchitlón del Progreso",
      "Alcozauca de Guerrero",
      "Alpoyeca",
      "Apaxtla",
      "Arcelia",
      "Atenango del Rio",
      "Atlamajalcingo del Monte",
      "Atlixtac",
      "Atoyac de Álvarez",
      "Ayutla de los Libres",
      "Azoyú",
      "Benito Juárez",
      "Buenavista de Cuellar",
      "Coahuayutla de José María Izazaga",
      "Cocula",
      "Cochoapa el Grande",
      "Copala",
      "Copalillo",
      "Copanatoyac",
      "Coyuca de Benítez",
      "Coyuca de Catalán",
      "Cuajinicuilapa",
      "Cualác",
      "Cuautepec",
      "Cuetzala del Progreso",
      "Cutzamala de Pinzón",
      "Chilapa de Alvarez",
      "Chilpancingo de los Bravo",
      "Eduardo Neri",
      "Florencio Villarreal",
      "General Canuto A. Neri",
      "General Heliodoro Castillo",
      "Huamuxtitlón",
      "Huitzuco de los Figueroa",
      "Iguala de la Independencia",
      "Igualapa",
      "Iliatenco",
      "Ixcateopan de Cuauhtemoc",
      "José Joaquín de Herrera",
      "Juan R. Escudero",
      "Juchitán",
      "La Unión de Isidoro Montes de Oca",
      "Las Vigas",
      "Leonardo Bravo",
      "Marquelia",
      "Malinaltepec",
      "Martir de Cuilapan",
      "Metlatenoc",
      "Mochitlán",
      "Ñuu Savi",
      "Olinalá",
      "Ometepec",
      "Pedro Ascencio Alquisiras",
      "Petatlón",
      "Pilcaya",
      "Pungarabato",
      "Quechultenango",
      "San Luis Acatlán",
      "San Marcos",
      "San Miguel Totolapan",
      "Santa Cruz del Rincón",
      "San Nicolas",
      "Taxco de Alarcón",
      "Tecoanapa",
      "Técpan de Galeana",
      "Teloloapan",
      "Tepecoacuilco de Trujano",
      "Tetipac",
      "Tixtla de Guerrero",
      "Tlacoachistlahuaca",
      "Tlacoapa",
      "Tlalchapa",
      "Tlalixtaquilla de Maldonado",
      "Tlapa de Comonfort",
      "Tlapehuala",
      "XalpaTlahuac",
      "Xochihuehuetlón",
      "Xochistlahuaca",
      "Zapotitlón Tablas",
      "Zihuatanejo de Azueta",
      "Zirándaro",
      "Zitlala",
    ],
    Hidalgo: [
      "Null",
      "Acatlón",
      "Acaxochitlón",
      "Actopan",
      "Agua Blanca de Iturbide",
      "Ajacuba",
      "Alfajayucan",
      "Almoloya",
      "Apan",
      "El Arenal",
      "Atitalaquia",
      "Atlapexco",
      "Atotonilco el Grande",
      "Atotonilco de Tula",
      "Calnali",
      "Cardonal",
      "Cuautepec de Hinojosa",
      "Chapantongo",
      "Chapulhuacón",
      "Chilcuautla",
      "Eloxochitlón",
      "Emiliano Zapata",
      "Epazoyucan",
      "Francisco I. Madero",
      "Huasca de Ocampo",
      "Huautla",
      "Huazalingo",
      "Huehuetla",
      "Huejutla de Reyes",
      "Huichapan",
      "Ixmiquilpan",
      "Jacala de Ledezma",
      "Jaltocón",
      "Juárez Hidalgo",
      "Lolotla",
      "Metepec",
      "San Agustín Metzquititlón",
      "Metztitlón",
      "Mineral del Chico",
      "Mineral del Monte",
      "La Mision",
      "Mixquiahuala de Juárez",
      "Molango de Escamilla",
      "Nicolas Flores",
      "Nopala de Villagrán",
      "Omitlón de Juárez",
      "San Felipe Orizatlón",
      "Pacula",
      "Pachuca de Soto",
      "Pisaflores",
      "Progreso de Obregon",
      "Mineral de la Reforma",
      "San Agustín Tlaxiaca",
      "San Bartolo Tutotepec",
      "San Salvador",
      "Santiago de Anaya",
      "Santiago Tulantepec de Lugo Guerrero",
      "Singuilucan",
      "Tasquillo",
      "Tecozautla",
      "Tenango de Doria",
      "Tepeapulco",
      "Tepehuacón de Guerrero",
      "Tepeji del Rio de Ocampo",
      "Tepetitlón",
      "Tetepango",
      "Villa de Tezontepec",
      "Tezontepec de Aldama",
      "Tianguistengo",
      "Tizayuca",
      "Tlahuelilpan",
      "Tlahuiltepa",
      "Tlanalapa",
      "Tlanchinol",
      "Tlaxcoapan",
      "Tolcayuca",
      "Tula de Allende",
      "Tulancingo de Bravo",
      "Xochiatipan",
      "Xochicoatlón",
      "Yahualica",
      "Zacualtipán de Ángeles",
      "Zapotlón de Juárez",
      "Zempoala",
      "Zimapán",
    ],
    Jalisco: [
      "Null",
      "Acatic",
      "Acatlón de Juárez",
      "Ahualulco de Mercado",
      "Amacueca",
      "Amatitán",
      "Ameca",
      "San Juanito de Escobedo",
      "Arandas",
      "El Arenal",
      "Atemajac de Brizuela",
      "Atengo",
      "Atenguillo",
      "Atotonilco el Alto",
      "Atoyac",
      "Autlón de Navarro",
      "Ayotlón",
      "Ayutla",
      "La Barca",
      "Bolaños",
      "Cabo Corrientes",
      "Casimiro Castillo",
      "Cihuatlón",
      "Zapotlón el Grande",
      "Cocula",
      "Colotlón",
      "ConcepCién de Buenos Aires",
      "Cuautitlón de García Barragán",
      "Cuautla",
      "Cuquío",
      "Chapala",
      "Chimaltitán",
      "Chiquilistlón",
      "Degollado",
      "Ejutla",
      "Encarnación de Díaz",
      "Etzatlón",
      "El Grullo",
      "Guachinango",
      "Guadalajara",
      "Hostotipaquillo",
      "Huejúcar",
      "Huejuquilla el Alto",
      "La Huerta",
      "Ixtlahuacón de los Membrillos",
      "Ixtlahuacón del Rio",
      "Jalostotitlón",
      "Jamay",
      "Jesús María",
      "Jilotlón de los Dolores",
      "Jocotepec",
      "Juanacatlón",
      "Juchitlón",
      "Lagos de Moreno",
      "El Limén",
      "Magdalena",
      "Santa María del Oro",
      "La Manzanilla de la Paz",
      "Mascota",
      "Mazamitla",
      "Mexticacón",
      "Mezquitic",
      "Mixtlón",
      "Ocotlón",
      "Ojuelos de Jalisco",
      "Pihuamo",
      "Poncitlón",
      "Puerto Vallarta",
      "Villa PurificaCién",
      "Quitupan",
      "El Salto",
      "San Cristobal de la Barranca",
      "San Diego de Alejandría",
      "San Juan de los Lagos",
      "San Julián",
      "San Marcos",
      "San Martín de Bolaños",
      "San Martín Hidalgo",
      "San Miguel el Alto",
      "Gomez Farias",
      "San Sebastián del Oeste",
      "Santa María de los Ángeles",
      "Sayula",
      "Tala",
      "Talpa de Allende",
      "Tamazula de Gordiano",
      "Tapalpa",
      "Tecalitlón",
      "Tecolotlón",
      "Techaluta de Montenegro",
      "Tenamaxtlón",
      "Teocaltiche",
      "Teocuitatlón de Corona",
      "Tepatitlón de Morelos",
      "Tequila",
      "Teuchitlón",
      "Tizapán el Alto",
      "Tlajomulco de Zúñiga",
      "San Pedro Tlaquepaque",
      "Tolimén",
      "Tomatlón",
      "Tonalá",
      "Tonaya",
      "Tonila",
      "Totatiche",
      "Tototlón",
      "Tuxcacuesco",
      "Tuxcueca",
      "Tuxpan",
      "Union de San Antonio",
      "Union de Tula",
      "Valle de Guadalupe",
      "Valle de Juárez",
      "San Gabriel",
      "Villa Corona",
      "Villa Guerrero",
      "Villa Hidalgo",
      "Cañadas de Obregon",
      "Yahualica de González Gallo",
      "Zacoalco de Torres",
      "Zapopan",
      "Zapotiltic",
      "Zapotitlón de Vadillo",
      "Zapotlón del Rey",
      "Zapotlanejo",
      "San Ignacio Cerro Gordo",
    ],
    México: [
      "Null",
      "Acambay de Ruíz Castañeda",
      "Acolman",
      "Aculco",
      "Almoloya de Alquisiras",
      "Almoloya de Juárez",
      "Almoloya del Rio",
      "Amanalco",
      "Amatepec",
      "Amecameca",
      "Apaxco",
      "Atenco",
      "Atizapán",
      "Atizapán de Zaragoza",
      "Atlacomulco",
      "Atlautla",
      "Axapusco",
      "Ayapango",
      "Calimaya",
      "Capulhuac",
      "Coacalco de Berriozabal",
      "Coatepec Harinas",
      "Cocotitlón",
      "Coyotepec",
      "Cuautitlón",
      "Chalco",
      "Chapa de Mota",
      "Chapultepec",
      "Chiautla",
      "Chicoloapan",
      "Chiconcuac",
      "Chimalhuacón",
      "Donato Guerra",
      "Ecatepec de Morelos",
      "Ecatzingo",
      "Huehuetoca",
      "Hueypoxtla",
      "Huixquilucan",
      "Isidro Fabela",
      "Ixtapaluca",
      "Ixtapan de la Sal",
      "Ixtapan del Oro",
      "Ixtlahuaca",
      "Xalatlaco",
      "Jaltenco",
      "Jilotepec",
      "Jilotzingo",
      "Jiquipilco",
      "Jocotitlón",
      "Joquicingo",
      "Juchitepec",
      "Lerma",
      "Malinalco",
      "Melchor Ocampo",
      "Metepec",
      "Mexicaltzingo",
      "Morelos",
      "Naucalpan de Juárez",
      "Nezahualcóyotl",
      "Nextlalpan",
      "Nicolas Romero",
      "Nopaltepec",
      "Ocoyoacac",
      "Ocuilan",
      "El Oro",
      "Otumba",
      "Otzoloapan",
      "Otzolotepec",
      "Ozumba",
      "Papalotla",
      "La Paz",
      "Polotitlón",
      "Rayón",
      "San Antonio la Isla",
      "San Felipe del Progreso",
      "San Martín de las Pirámides",
      "San Mateo Atenco",
      "San Simon de Guerrero",
      "Santo Tomás",
      "Soyaniquilpan de Juárez",
      "Sultepec",
      "Tecámac",
      "Tejupilco",
      "Temamatla",
      "Temascalapa",
      "Temascalcingo",
      "Temascaltepec",
      "Temoaya",
      "Tenancingo",
      "Tenango del Aire",
      "Tenango del Valle",
      "Teoloyucan",
      "Teotihuacón",
      "Tepetlaoxtoc",
      "Tepetlixpa",
      "Tepotzotlón",
      "Tequixquiac",
      "Texcaltitlón",
      "Texcalyacac",
      "Texcoco",
      "Tezoyuca",
      "Tianguistenco",
      "Timilpan",
      "Tlalmanalco",
      "Tlalnepantla de Baz",
      "Tlatlaya",
      "Toluca",
      "Tonatico",
      "Tultepec",
      "Tultitlón",
      "Valle de Bravo",
      "Villa de Allende",
      "Villa del Carbón",
      "Villa Guerrero",
      "Villa Victoria",
      "Xonacatlón",
      "Zacazonapan",
      "Zacualpan",
      "Zinacantepec",
      "Zumpahuacón",
      "Zumpango",
      "Cuautitlón Izcalli",
      "Valle de Chalco Solidaridad",
      "Luvianos",
      "San José del Rincón",
      "Tonanitla",
    ],
    "Michoacán de Ocampo": [
      "Null",
      "Acuitzio",
      "Aguililla",
      "Alvaro Obregon",
      "Angamacutiro",
      "Angangueo",
      "Apatzingán",
      "Aporo",
      "Aquila",
      "Ario",
      "Arteaga",
      "Briseñas",
      "Buenavista",
      "Carácuaro",
      "Coahuayana",
      "Coalcomén de Vázquez Pallares",
      "Coeneo",
      "Contepec",
      "Copándaro",
      "Cotija",
      "Cuitzeo",
      "Charapan",
      "Charo",
      "Chavinda",
      "Cherán",
      "Chilchota",
      "Chinicuila",
      "Chucóndiro",
      "Churintzio",
      "Churumuco",
      "Ecuandureo",
      "Epitacio Huerta",
      "Erongarícuaro",
      "Gabriel Zamora",
      "Hidalgo",
      "La Huacana",
      "Huandacareo",
      "Huaniqueo",
      "Huetamo",
      "Huiramba",
      "Indaparapeo",
      "Irimbo",
      "Ixtlón",
      "Jacona",
      "Jiménez",
      "Jiquilpan",
      "Juárez",
      "Jungapeo",
      "Lagunillas",
      "Madero",
      "Maravateo",
      "Marcos Castellanos",
      "Lázaro Cárdenas",
      "Morelia",
      "Morelos",
      "Mágica",
      "Nahuatzen",
      "Nocupétaro",
      "Nuevo Parangaricutiro",
      "Nuevo Urecho",
      "Numarán",
      "Ocampo",
      "Pajacuarn",
      "PanIndicuaro",
      "Parácuaro",
      "Paracho",
      "Pátzcuaro",
      "Penjamillo",
      "Peribán",
      "La Piedad",
      "Purépero",
      "Puruándiro",
      "Querándaro",
      "Quiroga",
      "Cojumatlán de Régules",
      "Los Reyes",
      "Sahuayo",
      "San Lucas",
      "Santa Ana Maya",
      "Salvador Escalante",
      "Senguio",
      "Susupuato",
      "TAcambaro",
      "Tancátaro",
      "Tangamandapio",
      "Tanganc�cuaro",
      "Tanhuato",
      "Taretan",
      "Tar�mbaro",
      "Tepalcatepec",
      "Tingambato",
      "Ting�Indin",
      "Tiquicheo de Nicolas Romero",
      "Tlalpujahua",
      "Tlazazalca",
      "Tocumbo",
      "Tumbiscat�o",
      "Turicato",
      "Tuxpan",
      "Tuzantla",
      "Tzintzuntzan",
      "Tzitzio",
      "Uruapan",
      "Venustiano Carranza",
      "Villamar",
      "Vista Hermosa",
      "Yur�cuaro",
      "Zacapu",
      "Zamora",
      "Zin�paro",
      "Zinap�cuaro",
      "Ziracuaretiro",
      "Zit�cuaro",
      "José Sixto Verduzco",
    ],
    Morelos: [
      "Null",
      "Amacuzac",
      "Atlatlahucan",
      "Axochiapan",
      "Ayala",
      "Coatlón del Rio",
      "Cuautla",
      "Cuernavaca",
      "Emiliano Zapata",
      "Huitzilac",
      "Jantetelco",
      "Jiutepec",
      "Jojutla",
      "Jonacatepec de Leandro Valle",
      "Mazatepec",
      "Miacatlón",
      "Ocuituco",
      "Puente de Ixtla",
      "Temixco",
      "Tepalcingo",
      "Tepoztlón",
      "Tetecala",
      "Tetela del Volcón",
      "Tlalnepantla",
      "Tlaltizap�n de Zapata",
      "Tlaquiltenango",
      "Tlayacapan",
      "Totolapan",
      "Xochitepec",
      "Yautepec",
      "Yecapixtla",
      "Zacatepec",
      "Zacualpan de Amilpas",
      "Temoac",
      "Coatetelco",
      "Xoxocotla",
      "Hueyapan",
    ],
    Nayarit: [
      "Null",
      "Acaponeta",
      "Ahuacatlón",
      "Amatlón de Ca�as",
      "Compostela",
      "Huajicori",
      "Ixtlón del Rio",
      "Jala",
      "Xalisco",
      "Del Nayar",
      "Rosamorada",
      "Ruíz",
      "San Blas",
      "San Pedro Lagunillas",
      "Santa Mar�a del Oro",
      "Santiago Ixcuintla",
      "Tecuala",
      "Tepic",
      "Tuxpan",
      "La Yesca",
      "Bah�a de Banderas",
    ],
    "Nuevo León": [
      "Null",
      "Abasolo",
      "Agualeguas",
      "Los Aldamas",
      "Allende",
      "An�huac",
      "Apodaca",
      "Aramberri",
      "Bustamante",
      "Cadereyta Jiménez",
      "El Carmen",
      "Cerralvo",
      "Ciénega de Flores",
      "China",
      "Doctor Arroyo",
      "Doctor Coss",
      "Doctor Gonz�lez",
      "Galeana",
      "Garc�a",
      "San Pedro Garza Garc�a",
      "General Bravo",
      "General Escobedo",
      "General Ter�n",
      "General Trevi�o",
      "General Zaragoza",
      "General Zuazua",
      "Guadalupe",
      "Los Herreras",
      "Higueras",
      "Hualahuises",
      "Iturbide",
      "Juárez",
      "Lampazos de Naranjo",
      "Linares",
      "Mar�n",
      "Melchor Ocampo",
      "Mier y Noriega",
      "Mina",
      "Montemorelos",
      "Monterrey",
      "Par�s",
      "Pesquer�a",
      "Los Ramones",
      "Rayones",
      "Sabinas Hidalgo",
      "Salinas Victoria",
      "San Nicolas de los Garza",
      "Hidalgo",
      "Santa Catarina",
      "Santiago",
      "Vallecillo",
      "Villaldama",
    ],
    Oaxaca: [
      "Null",
      "Abejones",
      "Acatlón de P�rez Figueroa",
      "AsunCién Cacalotepec",
      "AsunCién Cuyotepeji",
      "AsunCién Ixtaltepec",
      "AsunCién Nochixtlón",
      "AsunCién Ocotlón",
      "AsunCién Tlacolulita",
      "Ayotzintepec",
      "El Barrio de la Soledad",
      "Calihual�",
      "Candelaria Loxicha",
      "Ciénega de Zimatlón",
      "Ciudad Ixtepec",
      "Coatecas Altas",
      "Coicoy�n de las Flores",
      "La Compa��a",
      "ConcepCién Buenavista",
      "ConcepCién P�palo",
      "Constancia del Rosario",
      "Cosolapa",
      "Cosoltepec",
      "Cuil�pam de Guerrero",
      "Cuyamecalco Villa de Zaragoza",
      "Chahuites",
      "Chalcatongo de Hidalgo",
      "Chiquihuitlón de Benito Juárez",
      "Heroica Ciudad de Ejutla de Crespo",
      "Eloxochitlón de Flores Mag�n",
      "El Espinal",
      "Tamazul�pam del Esp�ritu Santo",
      "Fresnillo de Trujano",
      "Guadalupe Etla",
      "Guadalupe de Ram�rez",
      "Guelatao de Juárez",
      "Guevea de Humboldt",
      "Mesones Hidalgo",
      "Villa Hidalgo",
      "Heroica Ciudad de Huajuapan de León",
      "Huautepec",
      "Huautla de Jiménez",
      "Ixtlón de Juárez",
      "Juchit�n de Zaragoza",
      "Loma Bonita",
      "Magdalena Apasco",
      "Magdalena Jaltepec",
      "Santa Magdalena Jicotlón",
      "Magdalena Mixtepec",
      "Magdalena Ocotlón",
      "Magdalena Pe�asco",
      "Magdalena Teitipac",
      "Magdalena Tequisistlón",
      "Magdalena Tlacotepec",
      "Magdalena Zahuatlón",
      "Mariscala de Juárez",
      "Martires de Tacubaya",
      "Mat�as Romero Avenda�o",
      "Mazatlón Villa de Flores",
      "Miahuatlón de Porfirio D�az",
      "Mixistlón de la Reforma",
      "Monjas",
      "Natividad",
      "Nazareno Etla",
      "Nejapa de Madero",
      "Ixpantepec Nieves",
      "Santiago Niltepec",
      "Oaxaca de Juárez",
      "Ocotlón de Morelos",
      "La Pe",
      "Pinotepa de Don Luis",
      "Pluma Hidalgo",
      "San José del Progreso",
      "Putla Villa de Guerrero",
      "Santa Catarina Quioquitani",
      "Reforma de Pineda",
      "La Reforma",
      "Reyes Etla",
      "Rojas de Cuauhtemoc",
      "Salina Cruz",
      "San Agust�n Amatengo",
      "San Agust�n Atenango",
      "San Agust�n Chayuco",
      "San Agust�n de las Juntas",
      "San Agust�n Etla",
      "San Agust�n Loxicha",
      "San Agust�n Tlacotepec",
      "San Agust�n Yatareni",
      "San Andrés Cabecera Nueva",
      "San Andrés Dinicuiti",
      "San Andrés Huaxpaltepec",
      "San Andrés Huay�pam",
      "San Andrés Ixtlahuaca",
      "San Andrés Lagunas",
      "San Andrés Nuxi�o",
      "San Andrés Paxtlón",
      "San Andrés Sinaxtla",
      "San Andrés Solaga",
      "San Andrés Teotil�lpam",
      "San Andrés Tepetlapa",
      "San Andrés Ya�",
      "San Andrés Zabache",
      "San Andrés Zautla",
      "San Antonino Castillo Velasco",
      "San Antonino el Alto",
      "San Antonino Monte Verde",
      "San Antonio Acutla",
      "San Antonio de la Cal",
      "San Antonio Huitepec",
      "San Antonio Nanahuat�pam",
      "San Antonio Sinicahua",
      "San Antonio Tepetlapa",
      "San Baltazar Chichic�pam",
      "San Baltazar Loxicha",
      "San Baltazar Yatzachi el Bajo",
      "San Bartolo Coyotepec",
      "San Bartolom� Ayautla",
      "San Bartolom� Loxicha",
      "San Bartolom� Quialana",
      "San Bartolom� Yucua�e",
      "San Bartolom� Zoogocho",
      "San Bartolo Soyaltepec",
      "San Bartolo Yautepec",
      "San Bernardo Mixtepec",
      "San Blas Atempa",
      "San Carlos Yautepec",
      "San Cristobal Amatlón",
      "San Cristobal Amoltepec",
      "San Cristobal Lachirioag",
      "San Cristobal Suchixtlahuaca",
      "San Dionisio del Mar",
      "San Dionisio Ocotepec",
      "San Dionisio Ocotlón",
      "San Esteban Atatlahuca",
      "San Felipe Jalapa de D�az",
      "San Felipe Tejal�pam",
      "San Felipe Usila",
      "San Francisco Cahuacu�",
      "San Francisco Cajonos",
      "San Francisco Chapulapa",
      "San Francisco ChIndia",
      "San Francisco del Mar",
      "San Francisco Huehuetlón",
      "San Francisco Ixhuatan",
      "San Francisco Jaltepetongo",
      "San Francisco Lachigol�",
      "San Francisco Logueche",
      "San Francisco Nuxa�o",
      "San Francisco Ozolotepec",
      "San Francisco Sola",
      "San Francisco Telixtlahuaca",
      "San Francisco Teopan",
      "San Francisco Tlapancingo",
      "San Gabriel Mixtepec",
      "San Ildefonso Amatlón",
      "San Ildefonso Sola",
      "San Ildefonso Villa Alta",
      "San Jacinto Amilpas",
      "San Jacinto Tlacotepec",
      "San Jerónimo Coatlón",
      "San Jerónimo Silacayoapilla",
      "San Jerónimo Sosola",
      "San Jerónimo Taviche",
      "San Jerónimo Tec�atl",
      "San Jorge Nuchita",
      "San José Ayuquila",
      "San José Chiltepec",
      "San José del Pe�asco",
      "San José Estancia Grande",
      "San José Independencia",
      "San José Lachiguiri",
      "San José Tenango",
      "San Juan Achiutla",
      "San Juan Atepec",
      "Ánimas Trujano",
      "San Juan Bautista Atatlahuca",
      "San Juan Bautista Coixtlahuaca",
      "San Juan Bautista Cuicatlón",
      "San Juan Bautista Guelache",
      "San Juan Bautista Jayacatlón",
      "San Juan Bautista Lo de Soto",
      "San Juan Bautista Suchitepec",
      "San Juan Bautista Tlacoatzintepec",
      "San Juan Bautista Tlachichilco",
      "San Juan Bautista Tuxtepec",
      "San Juan Cacahuatepec",
      "San Juan Cieneguilla",
      "San Juan Coatz�spam",
      "San Juan Colorado",
      "San Juan Comaltepec",
      "San Juan Cotzocón",
      "San Juan Chicomez�chil",
      "San Juan Chilateca",
      "San Juan del Estado",
      "San Juan del Rio",
      "San Juan Diuxi",
      "San Juan Evangelista Analco",
      "San Juan Guelav�a",
      "San Juan Guichicovi",
      "San Juan Ihualtepec",
      "San Juan Juquila Mixes",
      "San Juan Juquila Vijanos",
      "San Juan Lachao",
      "San Juan Lachigalla",
      "San Juan Lajarcia",
      "San Juan Lalana",
      "San Juan de los Cu�s",
      "San Juan Mazatlón",
      "San Juan Mixtepec",
      "San Juan Mixtepec",
      "San Juan �um�",
      "San Juan Ozolotepec",
      "San Juan Petlapa",
      "San Juan Quiahije",
      "San Juan Quiotepec",
      "San Juan Sayultepec",
      "San Juan Taba�",
      "San Juan Tamazola",
      "San Juan Teita",
      "San Juan Teitipac",
      "San Juan Tepeuxila",
      "San Juan Teposcolula",
      "San Juan Yae�",
      "San Juan Yatzona",
      "San Juan Yucuita",
      "San Lorenzo",
      "San Lorenzo Albarradas",
      "San Lorenzo Cacaotepec",
      "San Lorenzo Cuaunecuiltitla",
      "San Lorenzo Texmel�can",
      "San Lorenzo Victoria",
      "San Lucas Camotlón",
      "San Lucas Ojitlón",
      "San Lucas Quiavin�",
      "San Lucas Zoqui�pam",
      "San Luis Amatlón",
      "San Marcial Ozolotepec",
      "San Marcos Arteaga",
      "San Martín de los Cansecos",
      "San Martín Huamel�lpam",
      "San Martín Itunyoso",
      "San Martín Lachil�",
      "San Martín Peras",
      "San Martín Tilcajete",
      "San Martín Toxpalan",
      "San Martín Zacatepec",
      "San Mateo Cajonos",
      "Capul�lpam de méndez",
      "San Mateo del Mar",
      "San Mateo Yoloxochitlón",
      "San Mateo Etlatongo",
      "San Mateo Nej�pam",
      "San Mateo Pe�asco",
      "San Mateo Pi�as",
      "San Mateo Rio Hondo",
      "San Mateo Sindihui",
      "San Mateo Tlapiltepec",
      "San Melchor Betaza",
      "San Miguel Achiutla",
      "San Miguel Ahuehuetitlón",
      "San Miguel Alo�pam",
      "San Miguel Amatitlón",
      "San Miguel Amatlón",
      "San Miguel Coatlón",
      "San Miguel Chicahua",
      "San Miguel Chimalapa",
      "San Miguel del Puerto",
      "San Miguel del Rio",
      "San Miguel Ejutla",
      "San Miguel el Grande",
      "San Miguel Huautla",
      "San Miguel Mixtepec",
      "San Miguel Panixtlahuaca",
      "San Miguel Peras",
      "San Miguel Piedras",
      "San Miguel Quetzaltepec",
      "San Miguel Santa Flor",
      "Villa Sola de Vega",
      "San Miguel Soyaltepec",
      "San Miguel Suchixtepec",
      "Villa Talea de Castro",
      "San Miguel Tecomatlón",
      "San Miguel Tenango",
      "San Miguel Tequixtepec",
      "San Miguel Tilqui�pam",
      "San Miguel Tlacamama",
      "San Miguel Tlacotepec",
      "San Miguel Tulancingo",
      "San Miguel Yotao",
      "San Nicolas",
      "San Nicolas Hidalgo",
      "San Pablo Coatlón",
      "San Pablo Cuatro Venados",
      "San Pablo Etla",
      "San Pablo Huitzo",
      "San Pablo Huixtepec",
      "San Pablo Macuiltianguis",
      "San Pablo Tijaltepec",
      "San Pablo Villa de Mitla",
      "San Pablo Yaganiza",
      "San Pedro Amuzgos",
      "San Pedro Ap�stol",
      "San Pedro Atoyac",
      "San Pedro Cajonos",
      "San Pedro Coxcaltepec cóntaros",
      "San Pedro Comitancillo",
      "San Pedro el Alto",
      "San Pedro Huamelula",
      "San Pedro Huilotepec",
      "San Pedro Ixcatlón",
      "San Pedro Ixtlahuaca",
      "San Pedro Jaltepetongo",
      "San Pedro Jicay�n",
      "San Pedro Jocotipac",
      "San Pedro Juchatengo",
      "San Pedro Martir",
      "San Pedro Martir Quiechapa",
      "San Pedro Martir Yucuxaco",
      "San Pedro Mixtepec",
      "San Pedro Molinos",
      "San Pedro Nopala",
      "San Pedro Ocopetatillo",
      "San Pedro Ocotepec",
      "San Pedro Pochutla",
      "San Pedro Quiatoni",
      "San Pedro Sochi�pam",
      "San Pedro Tapanatepec",
      "San Pedro Taviche",
      "San Pedro Teozacoalco",
      "San Pedro Teutila",
      "San Pedro Tida�",
      "San Pedro Topiltepec",
      "San Pedro Totol�pam",
      "Villa de Tututepec",
      "San Pedro Yaneri",
      "San Pedro Y�lox",
      "San Pedro y San Pablo Ayutla",
      "Villa de Etla",
      "San Pedro y San Pablo Teposcolula",
      "San Pedro y San Pablo Tequixtepec",
      "San Pedro Yucunama",
      "San Raymundo Jalpan",
      "San Sebasti�n Abasolo",
      "San Sebasti�n Coatlón",
      "San Sebasti�n Ixcapa",
      "San Sebasti�n Nicananduta",
      "San Sebasti�n Rio Hondo",
      "San Sebasti�n Tecomaxtlahuaca",
      "San Sebasti�n Teitipac",
      "San Sebasti�n Tutla",
      "San Simon Almolongas",
      "San Simon Zahuatlón",
      "Santa Ana",
      "Santa Ana Ateixtlahuaca",
      "Santa Ana Cuauhtemoc",
      "Santa Ana del Valle",
      "Santa Ana Tavela",
      "Santa Ana Tlapacoyan",
      "Santa Ana Yareni",
      "Santa Ana Zegache",
      "Santa Catalina Quier�",
      "Santa Catarina Cuixtla",
      "Santa Catarina Ixtepeji",
      "Santa Catarina Juquila",
      "Santa Catarina Lachatao",
      "Santa Catarina Loxicha",
      "Santa Catarina Mechoacón",
      "Santa Catarina Minas",
      "Santa Catarina Quian�",
      "Santa Catarina Tayata",
      "Santa Catarina Ticu�",
      "Santa Catarina Yosonot�",
      "Santa Catarina Zapoquila",
      "Santa Cruz Acatepec",
      "Santa Cruz Amilpas",
      "Santa Cruz de Bravo",
      "Santa Cruz Itundujia",
      "Santa Cruz Mixtepec",
      "Santa Cruz Nundaco",
      "Santa Cruz Papalutla",
      "Santa Cruz Tacache de Mina",
      "Santa Cruz Tacahua",
      "Santa Cruz Tayata",
      "Santa Cruz Xitla",
      "Santa Cruz Xoxocotlón",
      "Santa Cruz Zenzontepec",
      "Santa Gertrudis",
      "Santa In�s del Monte",
      "Santa In�s Yatzeche",
      "Santa Lucía del Camino",
      "Santa Lucía Miahuatlón",
      "Santa Lucía Monteverde",
      "Santa Lucía Ocotlón",
      "Santa María Alotepec",
      "Santa María Apazco",
      "Santa María la AsunCién",
      "Heroica Ciudad de Tlaxiaco",
      "Ayoquezco de Aldama",
      "Santa María Atzompa",
      "Santa María Camotlón",
      "Santa María Colotepec",
      "Santa María Cortijo",
      "Santa María Coyotepec",
      "Santa María Chacho�pam",
      "Villa de Chilapa de D�az",
      "Santa María Chilchotla",
      "Santa María Chimalapa",
      "Santa María del Rosario",
      "Santa María del Tule",
      "Santa María Ecatepec",
      "Santa María Guelac�",
      "Santa María Guienagati",
      "Santa María Huatulco",
      "Santa María Huazolotitlón",
      "Santa María Ipalapa",
      "Santa María Ixcatlón",
      "Santa María Jacatepec",
      "Santa María Jalapa del Marqués",
      "Santa María Jaltianguis",
      "Santa María Lachix�o",
      "Santa María Mixtequilla",
      "Santa María Nativitas",
      "Santa María Nduayaco",
      "Santa María Ozolotepec",
      "Santa María P�palo",
      "Santa María Pe�oles",
      "Santa María Petapa",
      "Santa María Quiegolani",
      "Santa María Sola",
      "Santa María Tataltepec",
      "Santa María Tecomavaca",
      "Santa María Temaxcalapa",
      "Santa María Temaxcaltepec",
      "Santa María Teopoxco",
      "Santa María Tepantlali",
      "Santa María Texcatitlón",
      "Santa María Tlahuitoltepec",
      "Santa María Tlalixtac",
      "Santa María Tonameca",
      "Santa María Totolapilla",
      "Santa María Xadani",
      "Santa María Yalina",
      "Santa María Yaveséa",
      "Santa María Yolotepec",
      "Santa María Yosoy�a",
      "Santa María Yucuhiti",
      "Santa María Zacatepec",
      "Santa María Zaniza",
      "Santa María Zoquitlón",
      "Santiago Amoltepec",
      "Santiago Apoala",
      "Santiago Ap�stol",
      "Santiago Astata",
      "Santiago Atitlón",
      "Santiago Ayuquililla",
      "Santiago Cacaloxtepec",
      "Santiago Camotlón",
      "Santiago Comaltepec",
      "Villa de Santiago Chazumba",
      "Santiago Cho�pam",
      "Santiago del Rio",
      "Santiago Huajolotitlón",
      "Santiago Huauclilla",
      "Santiago Ihuitlón Plumas",
      "Santiago Ixcuintepec",
      "Santiago Ixtayutla",
      "Santiago Jamiltepec",
      "Santiago Jocotepec",
      "Santiago Juxtlahuaca",
      "Santiago Lachiguiri",
      "Santiago Lalopa",
      "Santiago Laollaga",
      "Santiago Laxopa",
      "Santiago Llano Grande",
      "Santiago Matatlón",
      "Santiago Miltepec",
      "Santiago Minas",
      "Santiago Nacaltepec",
      "Santiago Nejapilla",
      "Santiago Nundiche",
      "Santiago Nuyo�",
      "Santiago Pinotepa Nacional",
      "Santiago Suchilquitongo",
      "Santiago Tamazola",
      "Santiago Tapextla",
      "Villa Tej�pam de la Union",
      "Santiago Tenango",
      "Santiago Tepetlapa",
      "Santiago Tetepec",
      "Santiago Texcalcingo",
      "Santiago Textitlón",
      "Santiago Tilantongo",
      "Santiago Tillo",
      "Santiago Tlazoyaltepec",
      "Santiago Xanica",
      "Santiago Xiacu�",
      "Santiago Yaitepec",
      "Santiago Yaveo",
      "Santiago Yolom�catl",
      "Santiago Yosond�a",
      "Santiago Yucuyachi",
      "Santiago Zacatepec",
      "Santiago Zoochila",
      "Nuevo Zoqui�pam",
      "Santo Domingo Ingenio",
      "Santo Domingo Albarradas",
      "Santo Domingo Armenta",
      "Santo Domingo Chihuit�n",
      "Santo Domingo de Morelos",
      "Santo Domingo Ixcatlón",
      "Santo Domingo Nuxa�",
      "Santo Domingo Ozolotepec",
      "Santo Domingo Petapa",
      "Santo Domingo Roayaga",
      "Santo Domingo Tehuantepec",
      "Santo Domingo Teojomulco",
      "Santo Domingo Tepuxtepec",
      "Santo Domingo Tlatay�pam",
      "Santo Domingo Tomaltepec",
      "Santo Domingo Tonalá",
      "Santo Domingo Tonaltepec",
      "Santo Domingo Xagac�a",
      "Santo Domingo Yanhuitlón",
      "Santo Domingo Yodohino",
      "Santo Domingo Zanatepec",
      "Santos Reyes Nopala",
      "Santos Reyes P�palo",
      "Santos Reyes Tepejillo",
      "Santos Reyes Yucun�",
      "Santo Tom�s Jalieza",
      "Santo Tom�s Mazaltepec",
      "Santo Tom�s Ocotepec",
      "Santo Tom�s Tamazulapan",
      "San Vicente Coatlón",
      "San Vicente Lachix�o",
      "San Vicente Nu��",
      "Silacayo�pam",
      "Sitio de Xitlapehua",
      "Soledad Etla",
      "Villa de Tamazul�pam del Progreso",
      "Tanetze de Zaragoza",
      "Taniche",
      "Tataltepec de Vald�s",
      "Teococuilco de Marcos P�rez",
      "Teotitlón de Flores Mag�n",
      "Teotitlón del Valle",
      "Teotongo",
      "Tepelmeme Villa de Morelos",
      "Heroica Villa Tezoatlón de Segura y Luna",
      "San Jer�nimo Tlacochahuaya",
      "Tlacolula de Matamoros",
      "Tlacotepec Plumas",
      "Tlalixtac de Cabrera",
      "Totontepec Villa de Morelos",
      "Trinidad Zaachila",
      "La Trinidad Vista Hermosa",
      "Union Hidalgo",
      "Valerio Trujano",
      "San Juan Bautista Valle Nacional",
      "Villa D�az Ordaz",
      "Yaxe",
      "Magdalena Yodocono de Porfirio D�az",
      "Yogana",
      "Yutanduchi de Guerrero",
      "Villa de Zaachila",
      "San Mateo Yucutindoo",
      "Zapotitlón Lagunas",
      "Zapotitlón Palmas",
      "Santa In�s de Zaragoza",
      "Zimatlón de Alvarez",
    ],
    Puebla: [
      "Null",
      "Acajete",
      "Acateno",
      "Acatlón",
      "Acatzingo",
      "Acteopan",
      "Ahuacatlón",
      "Ahuatlón",
      "Ahuazotepec",
      "Ahuehuetitla",
      "Ajalpan",
      "Albino Zertuche",
      "Aljojuca",
      "Altepexi",
      "Amixtlón",
      "Amozoc",
      "Aquixtla",
      "Atempan",
      "Atexcal",
      "Atlixco",
      "Atoyatempan",
      "Atzala",
      "Atzitzihuacón",
      "Atzitzintla",
      "Axutla",
      "Ayotoxco de Guerrero",
      "Calpan",
      "Caltepec",
      "Camocuautla",
      "Caxhuacan",
      "Coatepec",
      "Coatzingo",
      "Cohetzala",
      "Cohuecan",
      "Coronango",
      "Coxcatlón",
      "Coyomeapan",
      "Coyotepec",
      "Cuapiaxtla de Madero",
      "Cuautempan",
      "Cuautinch�n",
      "Cuautlancingo",
      "Cuayuca de Andrade",
      "Cuetzalan del Progreso",
      "Cuyoaco",
      "Chalchicomula de Sesma",
      "Chapulco",
      "Chiautla",
      "Chiautzingo",
      "Chiconcuautla",
      "Chichiquila",
      "Chietla",
      "Chigmecatitlón",
      "Chignahuapan",
      "Chignautla",
      "Chila",
      "Chila de la Sal",
      "Honey",
      "Chilchotla",
      "Chinantla",
      "Domingo Arenas",
      "Eloxochitlón",
      "Epatlón",
      "Esperanza",
      "Francisco Z. Mena",
      "General Felipe �ngeles",
      "Guadalupe",
      "Guadalupe Victoria",
      "Hermenegildo Galeana",
      "Huaquechula",
      "Huatlatlauca",
      "Huauchinango",
      "Huehuetla",
      "Huehuetlón el Chico",
      "Huejotzingo",
      "Hueyapan",
      "Hueytamalco",
      "Hueytlalpan",
      "Huitzilan de Serdan",
      "Huitziltepec",
      "Atlequizayan",
      "Ixcamilpa de Guerrero",
      "Ixcaquixtla",
      "Ixtacamaxtitlón",
      "Ixtepec",
      "Iz�car de Matamoros",
      "Jalpan",
      "Jolalpan",
      "Jonotla",
      "Jopala",
      "Juan C. Bonilla",
      "Juan Galindo",
      "Juan N. méndez",
      "Lafragua",
      "Libres",
      "La Magdalena Tlatlauquitepec",
      "Mazapiltepec de Juárez",
      "Mixtla",
      "Molcaxac",
      "Ca�ada Morelos",
      "Naupan",
      "Nauzontla",
      "Nealtican",
      "Nicolas Bravo",
      "Nopalucan",
      "Ocotepec",
      "Ocoyucan",
      "Olintla",
      "Oriental",
      "Pahuatlón",
      "Palmar de Bravo",
      "Pantepec",
      "Petlalcingo",
      "Piaxtla",
      "Puebla",
      "Quecholac",
      "Quimixtlón",
      "Rafael Lara Grajales",
      "Los Reyes de Juárez",
      "San Andrés Cholula",
      "San Antonio Ca�ada",
      "San Diego la Mesa Tochimiltzingo",
      "San Felipe Teotlalcingo",
      "San Felipe Tepatlón",
      "San Gabriel Chilac",
      "San Gregorio Atzompa",
      "San Jer�nimo Tecuanipan",
      "San Jer�nimo Xayacatlón",
      "San José Chiapa",
      "San José Miahuatlón",
      "San Juan Atenco",
      "San Juan Atzompa",
      "San Mart�n Texmelucan",
      "San Mart�n Totoltepec",
      "San Mat�as Tlalancaleca",
      "San Miguel Ixitlón",
      "San Miguel Xoxtla",
      "San Nicolas Buenos Aires",
      "San Nicolas de los Ranchos",
      "San Pablo Anicano",
      "San Pedro Cholula",
      "San Pedro Yeloixtlahuaca",
      "San Salvador el Seco",
      "San Salvador el Verde",
      "San Salvador Huixcolotla",
      "San Sebasti�n Tlacotepec",
      "Santa Catarina Tlaltempan",
      "Santa In�s Ahuatempan",
      "Santa Isabel Cholula",
      "Santiago Miahuatlón",
      "Huehuetlón el Grande",
      "Santo Tom�s Hueyotlipan",
      "Soltepec",
      "Tecali de Herrera",
      "Tecamachalco",
      "Tecomatlón",
      "Tehuacón",
      "Tehuitzingo",
      "Tenampulco",
      "Teopantlón",
      "Teotlalco",
      "Tepanco de Lopez",
      "Tepango de Rodr�guez",
      "Tepatlaxco de Hidalgo",
      "Tepeaca",
      "Tepemaxalco",
      "Tepeojuma",
      "Tepetzintla",
      "Tepexco",
      "Tepexi de Rodr�guez",
      "Tepeyahualco",
      "Tepeyahualco de Cuauhtemoc",
      "Tetela de Ocampo",
      "Teteles de Avila Castillo",
      "Teziutlón",
      "Tianguismanalco",
      "Tilapa",
      "Tlacotepec de Benito Juárez",
      "Tlacuilotepec",
      "Tlachichuca",
      "Tlahuapan",
      "Tlaltenango",
      "Tlanepantla",
      "Tlaola",
      "Tlapacoya",
      "Tlapanal�",
      "Tlatlauquitepec",
      "Tlaxco",
      "Tochimilco",
      "Tochtepec",
      "Totoltepec de Guerrero",
      "Tulcingo",
      "Tuzamapan de Galeana",
      "Tzicatlacoyan",
      "Venustiano Carranza",
      "Vicente Guerrero",
      "Xayacatlón de Bravo",
      "Xicotepec",
      "Xicotlón",
      "Xiutetelco",
      "Xochiapulco",
      "Xochiltepec",
      "Xochitlón de Vicente Su�rez",
      "Xochitlón Todos Santos",
      "Yaon�huac",
      "Yehualtepec",
      "Zacapala",
      "Zacapoaxtla",
      "Zacatlón",
      "Zapotitlón",
      "Zapotitlón de méndez",
      "Zaragoza",
      "Zautla",
      "Zihuateutla",
      "Zinacatepec",
      "Zongozotla",
      "Zoquiapan",
      "Zoquitlón",
    ],
    Querétaro: [
      "Null",
      "Amealco de Bonfil",
      "Pinal de Amoles",
      "Arroyo Seco",
      "Cadereyta de Montes",
      "Colón",
      "Corregidora",
      "Ezequiel Montes",
      "Huimilpan",
      "Jalpan de Serra",
      "Landa de Matamoros",
      "El Marqués",
      "Pedro Escobedo",
      "Pe�amiller",
      "Quer�taro",
      "San Joaqu�n",
      "San Juan del Rio",
      "Tequisquiapan",
      "Tolimén",
    ],
    "Quintana Roo": [
      "Null",
      "Cozumel",
      "Felipe Carrillo Puerto",
      "Isla Mujeres",
      "Oth�n P. Blanco",
      "Benito Juárez",
      "José Mar�a Morelos",
      "L�zaro C�rdenas",
      "Solidaridad",
      "Tulum",
      "Bacalar",
      "Puerto Morelos",
    ],
    "San Luis Potosí": [
      "Null",
      "Ahualulco del Sonido 13",
      "Alaquines",
      "Aquismén",
      "Armadillo de los Infante",
      "C�rdenas",
      "Catorce",
      "Cedral",
      "Cerritos",
      "Cerro de San Pedro",
      "Ciudad del Ma�z",
      "Ciudad Fern�ndez",
      "Tancanhuitz",
      "Ciudad Valles",
      "Coxcatlón",
      "Charcas",
      "Ebano",
      "Guadalc�zar",
      "Huehuetlón",
      "Lagunillas",
      "Matehuala",
      "Mexquitic de Carmona",
      "Moctezuma",
      "Rayón",
      "Rioverde",
      "Salinas",
      "San Antonio",
      "San Ciro de Acosta",
      "San Luis Potosé",
      "San Mart�n Chalchicuautla",
      "San Nicolas Tolentino",
      "Santa Catarina",
      "Santa Mar�a del Rio",
      "Santo Domingo",
      "San Vicente Tancuayalab",
      "Soledad de Graciano sénchez",
      "Tamasopo",
      "Tamazunchale",
      "Tampacón",
      "Tampamolón Corona",
      "Tamu�n",
      "Tanlaj�s",
      "Tanqui�n de Escobedo",
      "Tierra Nueva",
      "Vanegas",
      "Venado",
      "Villa de Arriaga",
      "Villa de Guadalupe",
      "Villa de la Paz",
      "Villa de Ramos",
      "Villa de Reyes",
      "Villa Hidalgo",
      "Villa Juárez",
      "Axtla de Terrazas",
      "Xilitla",
      "Zaragoza",
      "Villa de Arista",
      "Matlapa",
      "El Naranjo",
    ],
    Sinaloa: [
      "Null",
      "Ahome",
      "Angostura",
      "Badiraguato",
      "Concordia",
      "Cosal�",
      "Culiacón",
      "Choix",
      "Elota",
      "Escuinapa",
      "El Fuerte",
      "Guasave",
      "Mazatlón",
      "Mocorito",
      "Rosario",
      "Salvador Alvarado",
      "San Ignacio",
      "Sinaloa",
      "Navolato",
    ],
    Sonora: [
      "Null",
      "Aconchi",
      "Agua Prieta",
      "Alamos",
      "Altar",
      "Arivechi",
      "Arizpe",
      "Atil",
      "Bacad�huachi",
      "Bacanora",
      "Bacerac",
      "Bacoachi",
      "B�cum",
      "Ban�michi",
      "Bavi�cora",
      "Bavispe",
      "Benjamén Hill",
      "Caborca",
      "Cajeme",
      "Cananea",
      "Carb�",
      "La Colorada",
      "Cucurpe",
      "Cumpas",
      "Divisaderos",
      "Empalme",
      "Etchojoa",
      "Fronteras",
      "Granados",
      "Guaymas",
      "Hermosillo",
      "Huachinera",
      "Hu�sabas",
      "Huatabampo",
      "Hu�pac",
      "Imuris",
      "Magdalena",
      "Mazatan",
      "Moctezuma",
      "Naco",
      "N�cori Chico",
      "Nacozari de Garc�a",
      "Navojoa",
      "Nogales",
      "Onavas",
      "Opodepe",
      "Oquitoa",
      "Pitiquito",
      "Puerto Pe�asco",
      "Quiriego",
      "Rayón",
      "Rosario",
      "Sahuaripa",
      "San Felipe de Jesés",
      "San Javier",
      "San Luis Rio Colorado",
      "San Miguel de Horcasitas",
      "San Pedro de la Cueva",
      "Santa Ana",
      "Santa Cruz",
      "séric",
      "Soyopa",
      "Suaqui Grande",
      "Tepache",
      "Trincheras",
      "Tubutama",
      "Ures",
      "Villa Hidalgo",
      "Villa Pesqueira",
      "Y�cora",
      "General Plutarco El�as Calles",
      "Benito Juárez",
      "San Ignacio Rio Muerto",
    ],
    Tabasco: [
      "Null",
      "Balancón",
      "C�rdenas",
      "Centla",
      "Centro",
      "Comalcalco",
      "Cunduacón",
      "Emiliano Zapata",
      "Huimanguillo",
      "Jalapa",
      "Jalpa de méndez",
      "Jonuta",
      "Macuspana",
      "Nacajuca",
      "Para�so",
      "Tacotalpa",
      "Teapa",
      "Tenosique",
    ],
    Tamaulipas: [
      "Null",
      "Abasolo",
      "Aldama",
      "Altamira",
      "Antiguo Morelos",
      "Burgos",
      "Bustamante",
      "Camargo",
      "Casas",
      "Ciudad Madero",
      "Cruillas",
      "Gomez Farias",
      "Gonz�lez",
      "G��mez",
      "Guerrero",
      "Gustavo D�az Ordaz",
      "Hidalgo",
      "Jaumave",
      "Jiménez",
      "Llera",
      "Mainero",
      "El Mante",
      "Matamoros",
      "méndez",
      "Mier",
      "Miguel Alemén",
      "Miquihuana",
      "Nuevo Laredo",
      "Nuevo Morelos",
      "Ocampo",
      "Padilla",
      "Palmillas",
      "Reynosa",
      "Rio Bravo",
      "San Carlos",
      "San Fernando",
      "San Nicolas",
      "Soto la Marina",
      "Tampico",
      "Tula",
      "Valle Hermoso",
      "Victoria",
      "Villagr�n",
      "Xicot�ncatl",
    ],
    Tlaxcala: [
      "Null",
      "Amaxac de Guerrero",
      "Apetatitlón de Antonio Carvajal",
      "Atlangatepec",
      "Atltzayanca",
      "Apizaco",
      "Calpulalpan",
      "El Carmen Tequexquitla",
      "Cuapiaxtla",
      "Cuaxomulco",
      "Chiautempan",
      "Mu�oz de Domingo Arenas",
      "Espa�ita",
      "Huamantla",
      "Hueyotlipan",
      "Ixtacuixtla de Mariano Matamoros",
      "Ixtenco",
      "Mazatecochco de José Mar�a Morelos",
      "Contla de Juan Cuamatzi",
      "Tepetitla de Lardiz�bal",
      "Sanct�rum de L�zaro C�rdenas",
      "Nanacamilpa de Mariano Arista",
      "Acuamanala de Miguel Hidalgo",
      "Nat�vitas",
      "Panotla",
      "San Pablo del Monte",
      "Santa Cruz Tlaxcala",
      "Tenancingo",
      "Teolocholco",
      "Tepeyanco",
      "Terrenate",
      "Tetla de la Solidaridad",
      "Tetlatlahuca",
      "Tlaxcala",
      "Tlaxco",
      "Tocatlón",
      "Totolac",
      "Ziltlalt�pec de Trinidad sénchez Santos",
      "Tzompantepec",
      "Xaloztoc",
      "Xaltocan",
      "Papalotla de Xicoht�ncatl",
      "Xicohtzinco",
      "Yauhquemehcan",
      "Zacatelco",
      "Benito Juárez",
      "Emiliano Zapata",
      "L�zaro C�rdenas",
      "La Magdalena Tlaltelulco",
      "San Dami�n Tex�loc",
      "San Francisco Tetlanohcan",
      "San Jer�nimo Zacualpan",
      "San José Teacalco",
      "San Juan Huactzinco",
      "San Lorenzo Axocomanitla",
      "San Lucas Tecopilco",
      "Santa Ana Nopalucan",
      "Santa Apolonia Teacalco",
      "Santa Catarina Ayometla",
      "Santa Cruz Quilehtla",
      "Santa Isabel Xiloxoxtla",
    ],
    "Veracruz de Ignacio de la Llave": [
      "Null",
      "Acajete",
      "Acatlón",
      "Acayucan",
      "Actopan",
      "Acula",
      "Acultzingo",
      "Camar�n de Tejeda",
      "AlpaTlahuac",
      "Alto Lucero de Gutierrez Barrios",
      "Altotonga",
      "Alvarado",
      "Amatitlón",
      "Naranjos Amatlón",
      "Amatlón de los Reyes",
      "Angel R. Cabada",
      "La Antigua",
      "Apazapan",
      "Aquila",
      "Astacinga",
      "Atlahuilco",
      "Atoyac",
      "Atzacan",
      "Atzalan",
      "Tlaltetela",
      "Ayahualulco",
      "Banderilla",
      "Benito Juárez",
      "Boca del Rio",
      "Calcahualco",
      "Camerino Z. Mendoza",
      "Carrillo Puerto",
      "Catemaco",
      "Cazones de Herrera",
      "Cerro Azul",
      "Citlalt�petl",
      "Coacoatzintla",
      "Coahuitlón",
      "Coatepec",
      "Coatzacoalcos",
      "Coatzintla",
      "Coetzala",
      "Colipa",
      "Comapa",
      "C�rdoba",
      "Cosamaloapan de Carpio",
      "Cosautlón de Carvajal",
      "Coscomatepec",
      "Cosoleacaque",
      "Cotaxtla",
      "Coxquihui",
      "Coyutla",
      "Cuichapa",
      "CuiTlahuac",
      "Chacaltianguis",
      "Chalma",
      "Chiconamel",
      "Chiconquiaco",
      "Chicontepec",
      "Chinameca",
      "Chinampa de Gorostiza",
      "Las Choapas",
      "Chocamén",
      "Chontla",
      "Chumatlón",
      "Emiliano Zapata",
      "Espinal",
      "Filomeno Mata",
      "Fort�n",
      "Gutierrez Zamora",
      "Hidalgotitlón",
      "Huatusco",
      "Huayacocotla",
      "Hueyapan de Ocampo",
      "Huiloapan de Cuauhtemoc",
      "Ignacio de la Llave",
      "Ilamatlón",
      "Isla",
      "Ixcatepec",
      "Ixhuacón de los Reyes",
      "Ixhuatlón del Caf�",
      "Ixhuatlancillo",
      "Ixhuatlón del Sureste",
      "Ixhuatlón de Madero",
      "Ixmatlahuacan",
      "Ixtaczoquitlón",
      "Jalacingo",
      "Xalapa",
      "Jalcomulco",
      "J�ltipan",
      "Jamapa",
      "Jesés Carranza",
      "Xico",
      "Jilotepec",
      "Juan Rodr�guez Clara",
      "Juchique de Ferrer",
      "Landero y Coss",
      "Lerdo de Tejada",
      "Magdalena",
      "Maltrata",
      "Manlio Fabio Altamirano",
      "Mariano Escobedo",
      "Mart�nez de la Torre",
      "Mecatlón",
      "Mecayapan",
      "Medellón de Bravo",
      "Miahuatlón",
      "Las Minas",
      "Minatitlón",
      "Misantla",
      "Mixtla de Altamirano",
      "Moloacón",
      "Naolinco",
      "Naranjal",
      "Nautla",
      "Nogales",
      "Oluta",
      "Omealca",
      "Orizaba",
      "Otatitlón",
      "Oteapan",
      "Ozuluama de Mascare�as",
      "Pajapan",
      "Panuco",
      "Papantla",
      "Paso del Macho",
      "Paso de Ovejas",
      "La Perla",
      "Perote",
      "Plat�n sénchez",
      "Playa Vicente",
      "Poza Rica de Hidalgo",
      "Las Vigas de Ram�rez",
      "Pueblo Viejo",
      "Puente Nacional",
      "Rafael Delgado",
      "Rafael Lucio",
      "Los Reyes",
      "Rio Blanco",
      "Saltabarranca",
      "San Andrés Tenejapan",
      "San Andrés Tuxtla",
      "San Juan Evangelista",
      "Santiago Tuxtla",
      "Sayula de Alemén",
      "Soconusco",
      "Sochiapa",
      "Soledad Atzompa",
      "Soledad de Doblado",
      "Soteapan",
      "Tamalón",
      "Tamiahua",
      "Tampico Alto",
      "Tancoco",
      "Tantima",
      "Tantoyuca",
      "Tatatila",
      "Castillo de Teayo",
      "Tecolutla",
      "Tehuipango",
      "�lamo Temapache",
      "Tempoal",
      "Tenampa",
      "Tenochtitlón",
      "Teocelo",
      "Tepatlaxco",
      "Tepetlón",
      "Tepetzintla",
      "Tequila",
      "José Azueta",
      "Texcatepec",
      "Texhuacón",
      "Texistepec",
      "Tezonapa",
      "Tierra Blanca",
      "Tihuatlón",
      "Tlacojalpan",
      "Tlacolulan",
      "Tlacotalpan",
      "Tlacotepec de Mej�a",
      "Tlachichilco",
      "Tlalixcoyan",
      "Tlalnelhuayocan",
      "Tlapacoyan",
      "Tlaquilpa",
      "Tlilapan",
      "Tomatlón",
      "Tonay�n",
      "Totutla",
      "Tuxpan",
      "Tuxtilla",
      "Ursulo Galv�n",
      "Vega de Alatorre",
      "Veracruz",
      "Villa Aldama",
      "Xoxocotla",
      "Yanga",
      "Yecuatla",
      "Zacualpan",
      "Zaragoza",
      "Zentla",
      "Zongolica",
      "Zontecomatlón de Lopez y Fuentes",
      "Zozocolco de Hidalgo",
      "Agua Dulce",
      "El Higo",
      "Nanchital de L�zaro C�rdenas del Rio",
      "Tres Valles",
      "Carlos A. Carrillo",
      "Tatahuicapan de Juárez",
      "Uxpanapa",
      "San Rafael",
      "Santiago Sochiapan",
    ],
    Yucatán: [
      "Null",
      "Abal�",
      "Acanceh",
      "Akil",
      "Baca",
      "Bokob�",
      "Buctzotz",
      "Cacalch�n",
      "Calotmul",
      "Cansahcab",
      "Cantamayec",
      "Celest�n",
      "Cenotillo",
      "Conkal",
      "Cuncunul",
      "Cuzam�",
      "Chacsink�n",
      "Chankom",
      "Chapab",
      "Chemax",
      "Chicxulub Pueblo",
      "Chichimil�",
      "Chikindzonot",
      "Chochol�",
      "Chumayel",
      "Dz�n",
      "Dzemul",
      "Dzidzant�n",
      "Dzilam de Bravo",
      "Dzilam Gonz�lez",
      "Dzit�s",
      "Dzoncauich",
      "Espita",
      "Halach�",
      "Hocab�",
      "Hoct�n",
      "Homén",
      "Huh�",
      "Hunucm�",
      "Ixil",
      "Izamal",
      "Kanasén",
      "Kantunil",
      "Kaua",
      "Kinchil",
      "Kopom�",
      "Mama",
      "Man�",
      "Maxcan�",
      "Mayap�n",
      "M�rida",
      "Mococh�",
      "Motul",
      "Muna",
      "Muxupip",
      "Opich�n",
      "Oxkutzcab",
      "Panab�",
      "Peto",
      "Progreso",
      "Quintana Roo",
      "Rio Lagartos",
      "Sacalum",
      "Samahil",
      "Sanahcat",
      "San Felipe",
      "Santa Elena",
      "Sey�",
      "Sinanch�",
      "Sotuta",
      "Sucil�",
      "Sudzal",
      "Suma",
      "Tahdzi�",
      "Tahmek",
      "Teabo",
      "Tecoh",
      "Tekal de Venegas",
      "Tekant�",
      "Tekax",
      "Tekit",
      "Tekom",
      "Telchac Pueblo",
      "Telchac Puerto",
      "Temax",
      "Temoz�n",
      "Tepak�n",
      "Tetiz",
      "Teya",
      "Ticul",
      "Timucuy",
      "Tinum",
      "Tixcacalcupul",
      "Tixkokob",
      "Tixmehuac",
      "Tixp�hual",
      "Tizimén",
      "Tunk�s",
      "Tzucacab",
      "Uayma",
      "Uc�",
      "Umén",
      "Valladolid",
      "Xocchel",
      "Yaxcab�",
      "Yaxkukul",
      "Yoba�n",
    ],
    Zacatecas: [
      "Null",
      "Apozol",
      "Apulco",
      "Atolinga",
      "Benito Juárez",
      "Calera",
      "Ca�itas de Felipe Pescador",
      "ConcepCién del Oro",
      "Cuauhtemoc",
      "Chalchihuites",
      "Fresnillo",
      "Trinidad Garc�a de la Cadena",
      "Genaro Codina",
      "General Enrique Estrada",
      "General Francisco R. Murgu�a",
      "El Plateado de Joaqu�n Amaro",
      "General P�nfilo Natera",
      "Guadalupe",
      "Huanusco",
      "Jalpa",
      "Jerez",
      "Jiménez del Teul",
      "Juan Aldama",
      "Juchipila",
      "Loreto",
      "Luis Moya",
      "Mazapil",
      "Melchor Ocampo",
      "Mezquital del Oro",
      "Miguel Auza",
      "Momax",
      "Monte Escobedo",
      "Morelos",
      "Moyahua de Estrada",
      "Nochistlón de Mej�a",
      "Noria de �ngeles",
      "Ojocaliente",
      "Panuco",
      "Pinos",
      "Rio Grande",
      "Sain Alto",
      "El Salvador",
      "Sombrerete",
      "Susticacón",
      "Tabasco",
      "Tepechitlón",
      "Tepetongo",
      "Te�l de Gonz�lez Ortega",
      "Tlaltenango de sénchez Romén",
      "Valpara�so",
      "Vetagrande",
      "Villa de Cos",
      "Villa Garc�a",
      "Villa Gonz�lez Ortega",
      "Villa Hidalgo",
      "Villanueva",
      "Zacatecas",
      "Trancoso",
      "Santa Mar�a de la Paz",
    ],
  };
  const [entidad, setEntidad] = useState("");

  const [municipio, setMunicipios] = useState("");

  const handleSelect = (e) => {
    setEntidad(e.target.value);
    setMunicipios(municipios[entidad]);

    const selectE = document.querySelector("select[id='ENTIDAD_FEDERATIVA']");
    const valorEntidad = selectE.value;
    const valorMunicipio = "Null";

    setDataCatalogo({
      ENTIDAD_FEDERATIVA: valorEntidad,
      MUNICIPIO_DELEGACION: valorMunicipio,
    });
  };

  const handleChangeM = (e) => {
    setMunicipios(e.target.value);
    const selectM = document.querySelector("select[id='MUNICIPIO_DELEGACION']");
    const valorMunicipio = selectM.value;
    const selectE = document.querySelector("select[id='ENTIDAD_FEDERATIVA']");
    const valorEntidad = selectE.value;
    setDataCatalogo({
      ENTIDAD_FEDERATIVA: valorEntidad,
      MUNICIPIO_DELEGACION: valorMunicipio,
    });
  };

  return (
    <main>
      <div className="new-form">
        <div className="form-container">
          <h2>
            {params.id
              ? "Editar registro con id:  " + data.id
              : "Crear registro"}
          </h2>

          <Formik
            initialValues={data}
            enableReinitialize={true}
            onSubmit={async (values, actions) => {
              if (params.id) {
                await updateDataCatalogo(params.id, values);

                navigate("/dataCatalogo");
              } else {
                await createDataCatalogo(values);
                navigate("/dataCatalogo");
              }
              setDataCatalogo({
                id: "",
                BENEFICIARIO: "",
                TIPO_DE_PERSONA: "",
                RFC: "",
                CURP: "",
                CATALOGO_VIALIDAD: "",
                TIPO_DE_VIALIDAD: "",
                NOMBRE_DE_VIALIDAD: "",
                NUMERO_INT_EXT_MZ_LT: "",
                ASENTAMIENTO: "",
                NOMBRE_DEL_ASENTAMIENTO: "",
                ENTIDAD_FEDERATIVA: "",
                MUNICIPIO_DELEGACION: "",
                CODIGO_POSTAL: "",
                BANCO: "",
                CTA_BANCO: "",
                CLABE_INTERBANCARIA: "",
                TIPO_DE_BENEFICIARIO: "",
                NUM_CONTRATO: "",
                SOLICITUD_DE_EMPLEO: "",
                PADRON_GOBIERNO_DEL_ESTADO: "",
                CV: "",
                ACREDITACIONES_CONSTANCIAS: "",
                CEDULA_PROFESIONAL: "",
                NUMERO_CEDULA_PROFESIONAL: "",
                TITULO_PROFESIONAL: "",
                INE: "",
                CURP2: "",
                ACTA_DE_NACIMIENTO: "",
                COMPROBANTE_DE_DOMICILIO: "",
                CONSTANCIA_DEL_SAT: "",
                NO_INHABILITADO: "",
                ANTECEDENTES_NO_PENALES: "",
                CERTIFICADO_MEDICO: "",
                CARTA_DE_RECOMENDACION: "",
                CARTA_DE_RECOMENDACION2: "",
                CARATULA_BANCARIO: "",
                FOTOGRAFIA_TAMAÑO_INFANTIL: "",
                LICENCIA_PARA_CONDUCIR: "",
                PADRON_GOBIERNO_DEL_ESTADO2: "",
                ACTA_CONSTITUTIVA: "",
                CONSTANCIA_DEL_SAT2: "",
                OPINION_POSITIVA: "",
                COMPROBANTE_DE_DOMICILIO2: "",
                SEMBLANZA_CURRICULAR_PM: "",
                CARATULA_BANCARIO2: "",
                CV_RL: "",
                INE_RL: "",
                CEDULA_PROFESIONAL_RL: "",
                NUMERO_CEDULA_PROFESIONAL_RL: "",
                CURP_RL: "",
                ACTA_DE_NACIMIENTO_RL: "",
              });
            }}
          >
            {({ handleChange, handleSubmit, values, isSubmitting }) => (
              <Form onSubmit={handleSubmit}>
                <div className="column">
                  <div className="input-box">
                    <label>Beneficiario</label>
                    <input
                      type="text"
                      name="BENEFICIARIO"
                      placeholder="Escribe el nombre del beneficiario"
                      onChange={handleChange}
                      value={values.BENEFICIARIO}
                    />
                  </div>

                  <div className="input-box select-box">
                    <label>Tipo de persona</label>
                    <select
                      name="TIPO_DE_PERSONA"
                      onChange={handleChange}
                      value={values.TIPO_DE_PERSONA}
                    >
                      <option>FÍSICA</option>
                      <option>MORAL</option>
                    </select>
                  </div>

                  <div className="input-box">
                    <label>RFC</label>
                    <input
                      type="text"
                      name="RFC"
                      placeholder="Escribe el RFC"
                      onChange={handleChange}
                      value={values.RFC}
                    />
                  </div>
                </div>

                <div className="column">
                  <div className="input-box">
                    <label>CURP</label>
                    <input
                      type="text"
                      name="CURP"
                      placeholder="Escribe la CURP"
                      onChange={handleChange}
                      value={values.CURP}
                    />
                  </div>

                  <div className="input-box select-box">
                    <label>Catálogo de vialidad</label>

                    <div className="tooltip">
                      <span id="tooltip-text">
                        Vialidad: Ampleación, Andador, Avenidad, Boulevard,
                        {<br />}
                        Calle, Callejón, Calzada, Cerrada, Circuito, Correador,
                        {<br />}
                        Privada, Prolongación, Retorno, Unidad.{<br />}
                        Camino: Vereda, Terracería, Brecha.{<br />}
                        Carretera: Carretera, Carretera estatal, Carretera
                        federal.
                      </span>
                      <span className="tooltip material-symbols-outlined">
                        home
                      </span>
                    </div>

                    <select
                      name="CATALOGO_VIALIDAD"
                      onChange={handleChange}
                      value={values.CATALOGO_VIALIDAD}
                    >
                      <option>Vialidad</option>
                      <option>Camino</option>
                      <option>Carretera</option>
                    </select>
                  </div>

                  <div className="input-box select-box">
                    <label>Tipo de vialidad</label>
                    <select
                      name="TIPO_DE_VIALIDAD"
                      onChange={handleChange}
                      value={values.TIPO_DE_VIALIDAD}
                    >
                      <option>Ampliación</option>
                      <option>Andador</option>
                      <option>Avenida</option>
                      <option>Boulevard</option>
                      <option>Calle</option>
                      <option>Callejón</option>
                      <option>Calzada</option>
                      <option>Cerrada</option>
                      <option>Circuito</option>
                      <option>Circunvalación</option>
                      <option>Continuación</option>
                      <option>Corredor</option>
                      <option>Diagonal</option>
                      <option>Eje vial</option>
                      <option>Pasaje</option>
                      <option>Peatonal</option>
                      <option>Periférico</option>
                      <option>Privada</option>
                      <option>Prolongación</option>
                      <option>Retorno</option>
                      <option>Unidad</option>
                      <option>Viaducto</option>
                    </select>
                  </div>
                </div>

                <div className="column">
                  <div className="input-box">
                    <label>Nombre de vialidad</label>
                    <input
                      type="text"
                      name="NOMBRE_DE_VIALIDAD"
                      placeholder="Escribe el nombre de la vialidad"
                      onChange={handleChange}
                      value={values.NOMBRE_DE_VIALIDAD}
                    />
                  </div>
                  <div className="input-box">
                    <label>Número Int, Ext, MZ, LT</label>
                    <input
                      type="text"
                      name="NUMERO_INT_EXT_MZ_LT"
                      placeholder="Escribe el Número Int, Ext, MZ, LT"
                      onChange={handleChange}
                      value={values.NUMERO_INT_EXT_MZ_LT}
                    />
                  </div>
                  <div className="input-box select-box">
                    <label>Asentamiento</label>
                    <select
                      name="ASENTAMIENTO"
                      onChange={handleChange}
                      value={values.ASENTAMIENTO}
                    >
                      <option>Aereopuerto</option>
                      <option>Ampliación</option>
                      <option>Barrio </option>
                      <option>Cantón</option>
                      <option>Ciudad</option>
                      <option>Colonia</option>
                      <option>Condominio</option>
                      <option>Conjunto habitacional</option>
                      <option>Corredor industrial</option>
                      <option>Cuartel</option>
                      <option>Ejido</option>
                      <option>Exhacienda</option>
                      <option>Fracción</option>
                      <option>Fraccionamiento</option>
                      <option>Granja</option>
                      <option>Hacienda</option>
                      <option>Ingenio</option>
                      <option>Manzana</option>
                      <option>Paraje</option>
                      <option>Parque Industrial</option>
                      <option>Privada</option>
                      <option>Prolongación</option>
                      <option>Pueblo</option>
                      <option>Puerto</option>
                      <option>Ranchería</option>
                      <option>Rancho</option>
                      <option>Región</option>
                      <option>Residencial</option>
                      <option>Rinconada</option>
                      <option>Sección</option>
                      <option>Sector</option>
                      <option>Supermanzana</option>
                      <option>Unidad</option>
                      <option>Unidad habitacional</option>
                      <option>Villa</option>
                      <option>Zona federal</option>
                      <option>Zona militar</option>
                      <option>Zona industrial</option>
                      <option>Zona naval</option>
                    </select>
                  </div>
                </div>

                <div className="column">
                  <div className="input-box">
                    <label>Nombre del asentamiento</label>
                    <input
                      type="text"
                      name="NOMBRE_DEL_ASENTAMIENTO"
                      placeholder="Escribe el nombre del asentamiento"
                      onChange={handleChange}
                      value={values.NOMBRE_DEL_ASENTAMIENTO}
                    />
                  </div>
                  <div className="input-box select-box">
                    <label>Entidad Federativa</label>
                    <select
                      value={entidad}
                      onChange={handleSelect}
                      name="ENTIDAD_FEDERATIVA"
                      id="ENTIDAD_FEDERATIVA"
                    >
                      {Object.keys(entidades).map((entidad) => (
                        <option key={entidad} value={entidad}>
                          {entidad}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="input-box select-box">
                    <label>Municipio / Delegación</label>
                    <select
                      value={municipio}
                      onChange={handleChangeM}
                      name="MUNICIPIO_DELEGACION"
                      id="MUNICIPIO_DELEGACION"
                    >
                      {municipios[entidad]?.map((municipio) => (
                        <option key={municipio} value={municipio}>
                          {municipio}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="column">
                  <div className="input-box">
                    <label>Código Postal</label>
                    <input
                      type="text"
                      name="CODIGO_POSTAL"
                      placeholder="Introduce el código postal"
                      onChange={handleChange}
                      value={values.CODIGO_POSTAL}
                    />
                  </div>
                  <div className="input-box select-box">
                    <label>Banco</label>
                    <select
                      name="BANCO"
                      onChange={handleChange}
                      value={values.BANCO}
                    >
                      <option>ABC Capital Banco</option>
                      <option>Accendo Banco</option>
                      <option>Actinver</option>
                      <option>American Express Mexico</option>
                      <option>BanBajío - Banco del Bajio</option>
                      <option>Banca Afirme</option>
                      <option>Banca Mifel</option>
                      <option>Banco Azteca</option>
                      <option>Banco Bancrea</option>
                      <option>Banco Famsa</option>
                      <option>Banco Finterra</option>
                      <option>Banco Forjadors</option>
                      <option>Banco Inbursa</option>
                      <option>Banco Interacciones</option>
                      <option>Banco INVEX, S.A</option>
                      <option>Banco PagaTodo</option>
                      <option>Banco Sabadell</option>
                      <option>Banco Santander México</option>
                      <option>Banco Shinhan de México</option>
                      <option>Banco Ve por Mas</option>
                      <option>BancoBASE</option>
                      <option>BanCoppel</option>
                      <option>Banjercito</option>
                      <option>Banorte</option>
                      <option>Banregio</option>
                      <option>Bansi</option>
                      <option>Barclays Investment Bank</option>
                      <option>BBVA Bancomer</option>
                      <option>CIBanco</option>
                      <option>CitiBanamex</option>
                      <option>Compartamos Banco</option>
                      <option>Credit Suisse</option>
                      <option>CSB Consubanco</option>
                      <option>Deutsche Bank Mexico</option>
                      <option>Fundacion Dondé Banco</option>
                      <option>Grupo Financiero Monex</option>
                      <option>Grupo financiero MULTIVA</option>
                      <option>HSBC México</option>
                      <option>ICBC México S.A.</option>
                      <option>ING Wholesale Banking in Mexico</option>
                      <option>Intercam - Más de lo que piensas</option>
                      <option>J.P.Morgan Mexico</option>
                      <option>Mi Banco Autofin México</option>
                      <option>MIZUHO Bank LTD</option>
                      <option>MUFG Bank México, S.A.</option>
                      <option>Scotiabank México</option>
                    </select>
                  </div>
                  <div className="input-box">
                    <label>Cuenta de banco</label>
                    <input
                      type="text"
                      name="CTA_BANCO"
                      placeholder="Introduce el numero de la cuenta de banco"
                      onChange={handleChange}
                      value={values.CTA_BANCO}
                    />
                  </div>
                </div>
                <div className="column">
                  <div className="input-box">
                    <label>Clabe interbancaria</label>
                    <input
                      type="text"
                      name="CLABE_INTERBANCARIA"
                      placeholder="Introduce la clabe interbancaria"
                      onChange={handleChange}
                      value={values.CLABE_INTERBANCARIA}
                    />
                  </div>
                  <div className="input-box select-box">
                    <label>Tipo de beneficiario</label>
                    <select
                      name="TIPO_DE_BENEFICIARIO"
                      onChange={handleChange}
                      value={values.TIPO_DE_BENEFICIARIO}
                    >
                      <option>{"Proveedor (a)"}</option>
                      <option>Prestador de Sevicios Profesionales</option>
                      <option>{"Consultor (a)"}</option>
                      <option>Ayudas Sociales</option>
                      <option>{"Empleado (a) Semujer"}</option>
                    </select>
                  </div>
                  <div className="input-box select-box">
                    <label>No. Contrato</label>
                    <input
                      type="text"
                      name="NUM_CONTRATO"
                      placeholder="Introduce el numero de contrato"
                      onChange={handleChange}
                      value={values.NUM_CONTRATO}
                    />
                  </div>
                </div>
                <div className="column">
                  <div className="input-box select-box">
                    <label>Solicitud de empleo</label>
                    <select
                      name="SOLICITUD_DE_EMPLEO"
                      onChange={handleChange}
                      value={values.SOLICITUD_DE_EMPLEO}
                    >
                      <option>1</option>
                      <option>0</option>
                    </select>
                  </div>
                  <div className="input-box select-box">
                    <label>Padrón Gobierno del Estado</label>
                    <select
                      name="PADRON_GOBIERNO_DEL_ESTADO"
                      onChange={handleChange}
                      value={values.PADRON_GOBIERNO_DEL_ESTADO}
                    >
                      <option>1</option>
                      <option>0</option>
                    </select>
                  </div>
                  <div className="input-box select-box">
                    <label>CV</label>
                    <select name="CV" onChange={handleChange} value={values.CV}>
                      <option>1</option>
                      <option>0</option>
                    </select>
                  </div>
                  <div className="input-box select-box">
                    <label>Acreditaciones / Constancias</label>
                    <select
                      name="ACREDITACIONES_CONSTANCIAS"
                      onChange={handleChange}
                      value={values.ACREDITACIONES_CONSTANCIAS}
                    >
                      <option>1</option>
                      <option>0</option>
                    </select>
                  </div>
                </div>

                <div className="column">
                  <div className="input-box select-box">
                    <label>Cédula Profesional</label>
                    <select
                      name="CEDULA_PROFESIONAL"
                      onChange={handleChange}
                      value={values.CEDULA_PROFESIONAL}
                    >
                      <option>1</option>
                      <option>0</option>
                    </select>
                  </div>
                  <div className="input-box">
                    <label>Núm. de cédula profesional</label>
                    <input
                      type="text"
                      name="NUMERO_CEDULA_PROFESIONAL"
                      placeholder="Introduce el numero de cédula profesional"
                      onChange={handleChange}
                      value={values.NUMERO_CEDULA_PROFESIONAL}
                    />
                  </div>
                  <div className="input-box select-box">
                    <label>Título Profesional</label>
                    <select
                      name="TITULO_PROFESIONAL"
                      onChange={handleChange}
                      value={values.TITULO_PROFESIONAL}
                    >
                      <option>1</option>
                      <option>0</option>
                    </select>
                  </div>
                  <div className="input-box select-box">
                    <label>INE</label>
                    <select
                      name="INE"
                      onChange={handleChange}
                      value={values.INE}
                    >
                      <option>1</option>
                      <option>0</option>
                    </select>
                  </div>
                </div>

                <div className="column">
                  <div className="input-box select-box">
                    <label>CURP2</label>
                    <select
                      name="CURP2"
                      onChange={handleChange}
                      value={values.CURP2}
                    >
                      <option>1</option>
                      <option>0</option>
                    </select>
                  </div>
                  <div className="input-box select-box">
                    <label>Acta de Nacimiento</label>
                    <select
                      name="ACTA_DE_NACIMIENTO"
                      onChange={handleChange}
                      value={values.ACTA_DE_NACIMIENTO}
                    >
                      <option>1</option>
                      <option>0</option>
                    </select>
                  </div>
                  <div className="input-box select-box">
                    <label>Comprobante de domicilio</label>
                    <select
                      name="COMPROBANTE_DE_DOMICILIO"
                      onChange={handleChange}
                      value={values.COMPROBANTE_DE_DOMICILIO}
                    >
                      <option>1</option>
                      <option>0</option>
                    </select>
                  </div>
                  <div className="input-box select-box">
                    <label>Constancia del SAT</label>
                    <select
                      name="CONSTANCIA_DEL_SAT"
                      onChange={handleChange}
                      value={values.CONSTANCIA_DEL_SAT}
                    >
                      <option>1</option>
                      <option>0</option>
                    </select>
                  </div>
                </div>

                <div className="column">
                  <div className="input-box select-box">
                    <label>No habilitado</label>
                    <select
                      name="NO_INHABILITADO"
                      onChange={handleChange}
                      value={values.NO_INHABILITADO}
                    >
                      <option>1</option>
                      <option>0</option>
                    </select>
                  </div>
                  <div className="input-box select-box">
                    <label>Antecedentes no penales</label>
                    <select
                      name="ANTECEDENTES_NO_PENALES"
                      onChange={handleChange}
                      value={values.ANTECEDENTES_NO_PENALES}
                    >
                      <option>1</option>
                      <option>0</option>
                    </select>
                  </div>
                  <div className="input-box select-box">
                    <label>Certificado médico</label>
                    <select
                      name="CERTIFICADO_MEDICO"
                      onChange={handleChange}
                      value={values.CERTIFICADO_MEDICO}
                    >
                      <option>1</option>
                      <option>0</option>
                    </select>
                  </div>
                  <div className="input-box select-box">
                    <label>Carta de recomendación</label>
                    <select
                      name="CARTA_DE_RECOMENDACION"
                      onChange={handleChange}
                      value={values.CARTA_DE_RECOMENDACION}
                    >
                      <option>1</option>
                      <option>0</option>
                    </select>
                  </div>
                </div>
                <div className="column">
                  <div className="input-box select-box">
                    <label>Carta de recomendación 2</label>
                    <select
                      name="CARTA_DE_RECOMENDACION2"
                      onChange={handleChange}
                      value={values.CARTA_DE_RECOMENDACION2}
                    >
                      <option>1</option>
                      <option>0</option>
                    </select>
                  </div>
                  <div className="input-box select-box">
                    <label>Caratula bancario</label>
                    <select
                      name="CARATULA_BANCARIO"
                      onChange={handleChange}
                      value={values.CARATULA_BANCARIO}
                    >
                      <option>1</option>
                      <option>0</option>
                    </select>
                  </div>
                  <div className="input-box select-box">
                    <label>Fotografía tam. infantil</label>
                    <select
                      name="FOTOGRAFIA_TAMAÑO_INFANTIL"
                      onChange={handleChange}
                      value={values.FOTOGRAFIA_TAMAÑO_INFANTIL}
                    >
                      <option>1</option>
                      <option>0</option>
                    </select>
                  </div>
                  <div className="input-box select-box">
                    <label>Licencia para conducir</label>
                    <select
                      name="LICENCIA_PARA_CONDUCIR"
                      onChange={handleChange}
                      value={values.LICENCIA_PARA_CONDUCIR}
                    >
                      <option>1</option>
                      <option>0</option>
                    </select>
                  </div>
                </div>

                <div className="column">
                  <div className="input-box">
                    <label>Padrón gobierno del estado 2</label>
                    <input
                      type="text"
                      name="PADRON_GOBIERNO_DEL_ESTADO2"
                      onChange={handleChange}
                      value={values.PADRON_GOBIERNO_DEL_ESTADO2}
                    />
                  </div>
                  <div className="input-box">
                    <label>Acta contistutiva</label>
                    <input
                      type="text"
                      name="ACTA_CONSTITUTIVA"
                      onChange={handleChange}
                      value={values.ACTA_CONSTITUTIVA}
                    />
                  </div>
                  <div className="input-box">
                    <label>Constancia del SAT 2</label>
                    <input
                      type="text"
                      name="CONSTANCIA_DEL_SAT2"
                      onChange={handleChange}
                      value={values.CONSTANCIA_DEL_SAT2}
                    />
                  </div>
                </div>
                <div className="column">
                  <div className="input-box">
                    <label>Opinión positiva</label>
                    <input
                      type="text"
                      name="OPINION_POSITIVA"
                      onChange={handleChange}
                      value={values.OPINION_POSITIVA}
                    />
                  </div>
                  <div className="input-box">
                    <label>Comprobante de domicilio 2</label>
                    <input
                      type="text"
                      name="COMPROBANTE_DE_DOMICILIO2"
                      onChange={handleChange}
                      value={values.COMPROBANTE_DE_DOMICILIO2}
                    />
                  </div>
                  <div className="input-box">
                    <label>Semblanza curricular PM</label>
                    <input
                      type="text"
                      name="SEMBLANZA_CURRICULAR_PM"
                      onChange={handleChange}
                      value={values.SEMBLANZA_CURRICULAR_PM}
                    />
                  </div>
                </div>
                <div className="column">
                  <div className="input-box">
                    <label>Caratula bancario 2</label>
                    <input
                      type="text"
                      name="CARATULA_BANCARIO2"
                      onChange={handleChange}
                      value={values.CARATULA_BANCARIO2}
                    />
                  </div>
                  <div className="input-box">
                    <label>CV_RL</label>
                    <input
                      type="text"
                      name="CV_RL"
                      onChange={handleChange}
                      value={values.CV_RL}
                    />
                  </div>
                  <div className="input-box">
                    <label>INE RL</label>
                    <input
                      type="text"
                      name="INE_RL"
                      onChange={handleChange}
                      value={values.INE_RL}
                    />
                  </div>
                </div>
                <div className="column">
                  <div className="input-box">
                    <label>Cédula profesional RL</label>
                    <input
                      type="text"
                      name="CEDULA_PROFESIONAL_RL"
                      onChange={handleChange}
                      value={values.CEDULA_PROFESIONAL_RL}
                    />
                  </div>
                  <div className="input-box">
                    <label>Númeor de cédula profesional RL</label>
                    <input
                      type="text"
                      name="NUMERO_CEDULA_PROFESIONAL_RL"
                      onChange={handleChange}
                      value={values.NUMERO_CEDULA_PROFESIONAL_RL}
                    />
                  </div>
                  <div className="input-box">
                    <label>CURP RL</label>
                    <input
                      type="text"
                      name="CURP_RL"
                      onChange={handleChange}
                      value={values.CURP_RL}
                    />
                  </div>
                </div>
                <div className="column">
                  <div className="input-box">
                    <label>Acta de nacimiento RL</label>
                    <input
                      type="text"
                      name="ACTA_DE_NACIMIENTO_RL"
                      onChange={handleChange}
                      value={values.ACTA_DE_NACIMIENTO_RL}
                    />
                  </div>
                </div>

                <button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Enviando..." : "Enviar"}
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>

      {/*<div className="new-form">
        <div className="form-container">
          <h2>New Form</h2>
          <form action="#">
            <div className="input-box">
              <label>Nombre completo</label>
              <input type="text" placeholder="Nombre completo" />
            </div>
            <div className="input-box">
              <label>Nombre completo</label>
              <input type="date" placeholder="Nombre completo" />
            </div>

            <div className="column">
              <div className="input-box">
                <label>Nombre completo</label>
                <input type="text" placeholder="Nombre completo" />
              </div>
              <div className="input-box">
                <label>Nombre completo</label>
                <input type="text" placeholder="Nombre completo" />
              </div>
            </div>

            <div className="gender-box">
              <h3>Gender</h3>
              <div className="gender-option">
                <div className="gender">
                  <input type="radio" id="check-male" name="gender" />
                  <label for="check-male">Male</label>
                </div>
                <div className="gender">
                  <input type="radio" id="check-female" name="gender" />
                  <label for="check-female">Female</label>
                </div>
                <div className="gender">
                  <input type="radio" id="check-other" name="gender" />
                  <label for="check-other">other</label>
                </div>
              </div>
            </div>

            <div className="input-box">
              <label>Nombre completo</label>
              <input type="text" placeholder="Nombre completo" />
            </div>
            <div className="select-box">
              <select>
                <option>Country</option>
                <option>dsf</option>
                <option>Cousdfsdntry</option>
                <option>Countrysss</option>
              </select>
            </div>
            <button>Submit</button>
          </form>
        </div>
      </div>*/}
    </main>
  );
}

export default CatalogoForm;
