CREATE TABLE data (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(200) NOT NULL,
  description VARCHAR(300),
  done BOOLEAN NOT NULL DEFAULT 0,
  createAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE auth (
  id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(40) NOT NULL,
  password VARCHAR(40) NOT NULL,
  account_type VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO
  auth (username, password, account_type)
VALUES
  ('ejemplo', MD5('mypassword'), 'admin'),
  ('ejemplo', MD5('mypassword'), 'user');

show tables;

select
  *
from
  auth;

SELECT
  *
FROM
  palaciodb.CatalogoCtasEGR;

F12 para exportar a cvs

BULK
INSERT
  palaciodb.CatalogoCtasEGR
FROM
  'C:\Users\hecto\OneDrive\Documentos\Libro1.csv' WITH (
    ROWTERMINATOR = '\n',
    FIELDTERMINATOR = ','
  ) LOAD DATA INFILE 'C:\Users\hecto\OneDrive\Documentos\Libro1.csv' INTO TABLE palaciodb.CatalogoCtasEGR FIELDS TERMINATED BY ',' ENCLOSED BY '"' LINES TERMINATED BY '\n';

CREATE TABLE CatalogoCtasEGR (
  id INT NOT NULL AUTO_INCREMENT,
  REVISADO BOOLEAN DEFAULT 0,
  BENEFICIARIO VARCHAR(50),
  TIPO_DE_PERSONA VARCHAR(20),
  RFC VARCHAR(15),
  CURP VARCHAR(20),
  CATALOGO_VIALIDAD VARCHAR(30),
  TIPO_DE_VIALIDAD VARCHAR(30),
  NOMBRE_DE_VIALIDAD VARCHAR(50),
  NUMERO_INT_EXT_MZ_LT VARCHAR(15),
  ASENTAMIENTO VARCHAR(25),
  NOMBRE_DEL_ASENTAMIENTO VARCHAR(25),
  ENTIDAD_FEDERATIVA VARCHAR(40),
  MUNICIPIO_DELEGACION VARCHAR(40),
  CODIGO_POSTAL VARCHAR(30),
  BANCO VARCHAR(30),
  CTA_BANCO VARCHAR(30),
  CLABE_INTERBANCARIA VARCHAR(40),
  TIPO_DE_BENIFICIARIO VARCHAR(60),
  NUM_CONTRATO VARCHAR(30),
  SOLICITUD_DE_EMPLEO BOOLEAN,
  PADRON_GOBIERNO_DEL_ESTADO BOOLEAN,
  CV BOOLEAN,
  ACREDITACIONES_CONSTANCIAS BOOLEAN,
  CEDULA_PROFESIONAL BOOLEAN,
  NUMERO_CEDULA_PROFESIONAL VARCHAR(20),
  TITULO_PROFESIONAL BOOLEAN,
  INE BOOLEAN,
  CURP2 BOOLEAN,
  ACTA_DE_NACIMIENTO BOOLEAN,
  COMPROBANTE_DE_DOMICILIO BOOLEAN,
  CONSTANCIA_DEL_SAT BOOLEAN,
  NO_INHABILITADO BOOLEAN,
  ANTECEDENTES_NO_PENALES BOOLEAN,
  CERTIFICADO_MEDICO BOOLEAN,
  CARTA_DE_RECOMENDACION BOOLEAN,
  CARTA_DE_RECOMENDACION2 BOOLEAN,
  CARATULA_BANCARIO BOOLEAN,
  FOTOGRAFIA_TAMAÑO_INFANTIL BOOLEAN,
  LICENCIA_PARA_CONDUCIR BOOLEAN,
  PADRON_GOBIERNO_DEL_ESTADO2 VARCHAR(50),
  ACTA_CONSTITUTIVA VARCHAR(50),
  CONSTANCIA_DEL_SAT2 VARCHAR(50),
  OPINION_POSITIVA VARCHAR(50),
  COMPROBANTE_DE_DOMICILIO2 VARCHAR(50),
  SEMBLANZA_CURRICULAR_PM VARCHAR(50),
  CARATULA_BANCARIO2 VARCHAR(50),
  CV_RL VARCHAR(50),
  INE_RL VARCHAR(50),
  CEDULA_PROFESIONAL_RL VARCHAR(50),
  NUMERO_CEDULA_PROFESIONAL_RL VARCHAR(50),
  CURP_RL VARCHAR(50),
  ACTA_DE_NACIMIENTO_RL VARCHAR(50),
  PRIMARY KEY (id)
);


CREATE TABLE `ingresodatos` (
  `NumProg` int NOT NULL AUTO_INCREMENT,
  `OFICIO_SOLI_PAGO` varchar(50) DEFAULT NULL,
  `DIA_SOLI_PAGO` varchar(20) DEFAULT NULL,
  `MES_SOLI_PAGO` varchar(20) DEFAULT NULL,
  `BENEFICIARIO` varchar(100) DEFAULT NULL,
  `TIPO_DE_BENEFICIARIO` varchar(150) DEFAULT NULL,
  `RFC` varchar(15) DEFAULT NULL,
  `BANCO` varchar(30) DEFAULT NULL,
  `CTA_BANCO` varchar(30) DEFAULT NULL,
  `CLABE_INTERBANCARIA` varchar(40) DEFAULT NULL,
  `IMPORTE` varchar(15) DEFAULT NULL,
  `IMPORTE_PARA_COMBINAR` varchar(15) DEFAULT NULL,
  `DESCRIP_IMPORTE` varchar(250) DEFAULT NULL,
  `CONCEPTO_PAGO` varchar(250) DEFAULT NULL,
  `ID_COMPONENTE` varchar(40) DEFAULT NULL,
  `NOMBRE_COMPONENTE` varchar(150) DEFAULT NULL,
  `CTA_CONTABLE_PROGRAMA` varchar(100) DEFAULT NULL,
  `NOMBRE_PROGRAMA` varchar(250) DEFAULT NULL,
  `FONDO_DE_INVERSION` varchar(100) DEFAULT NULL,
  `RAMO` varchar(15) DEFAULT NULL,
  `CTA_BANCO_PROGRAMA` varchar(30) DEFAULT NULL,
  `CTA_CLABE_PROGRAMA` varchar(40) DEFAULT NULL,
  `BANCO_AP` varchar(40) DEFAULT NULL,
  `LUGAR_DE_COMISION` varchar(40) DEFAULT NULL,
  `DIAS_DE_COMISION` varchar(10) DEFAULT NULL,
  `DIAS_INICIO_COMISION` varchar(10) DEFAULT NULL,
  `MES_INICIO_COMISION` varchar(10) DEFAULT NULL,
  `DIA_FIN_COMISION` varchar(10) DEFAULT NULL,
  `MES_FIN_COMISION` varchar(10) DEFAULT NULL,
  `MOTIVO_DE_COMISION` varchar(50) DEFAULT NULL,
  `MEDIO_DE_TRASPORTE` varchar(40) DEFAULT NULL,
  `COMBUSTIBLES` varchar(15) DEFAULT NULL,
  `PEAJES` varchar(15) DEFAULT NULL,
  `PASAJES` varchar(15) DEFAULT NULL,
  `VIATICOS_COMIDA` varchar(15) DEFAULT NULL,
  `HOSPEDAJE` varchar(15) DEFAULT NULL,
  `TOTAL_VIATICOS` varchar(15) DEFAULT NULL,
  `ADSCRIPCION` varchar(100) DEFAULT NULL,
  `NUM_CONTRATO` varchar(40) DEFAULT NULL,
  `MES_DE_PAGO` varchar(25) DEFAULT NULL,
  `PUESTO_DESEMPEÑO` varchar(40) DEFAULT NULL,
  `TIPO_DE_ADJUDICACION` varchar(40) DEFAULT NULL,
  `NUM_OFICIO_INVITACION` varchar(40) DEFAULT NULL,
  `NUM_DE_ADJUDICACION` varchar(40) DEFAULT NULL,
  `NUM_CONTRATO_ADJUDICACION` varchar(40) DEFAULT NULL,
  `OBJETO_CONTRATO` varchar(40) DEFAULT NULL,
  `MONTO_CONTRATO_IVA` varchar(40) DEFAULT NULL,
  `PTDA_PTAL` int DEFAULT NULL,
  `NOMBRE_PTDA_PTAL` varchar(100) DEFAULT NULL,
  `SUBCTA` int DEFAULT NULL,
  `NOMBRE_SUBCTA` varchar(250) DEFAULT NULL,
  `CAPITULO` int DEFAULT NULL,
  `NOMBRE_CAPITULO` varchar(40) DEFAULT NULL,
  `DOC_FISCAL_PAGO` varchar(40) DEFAULT NULL,
  `FOLIO_FISCAL_NUM_FACTURA` varchar(20) DEFAULT NULL,
  `DIA_FACTURA` int DEFAULT NULL,
  `MES_FACTURA` varchar(15) DEFAULT NULL,
  `AÑO_FACTURA` varchar(15) DEFAULT NULL,
  `SUBTOTAL_FACTURA` varchar(15) DEFAULT NULL,
  `SUBTOTAL_COMBINAR_FACTURA` varchar(15) DEFAULT NULL,
  `IVA_FACTURA` varchar(15) DEFAULT NULL,
  `IVA_COMBINAR_FACTURA` varchar(15) DEFAULT NULL,
  `RET_ISR_FACTURA` varchar(15) DEFAULT NULL,
  `RET_ISR_COMBINAR_FACTURA` varchar(15) DEFAULT NULL,
  `DOC_FISICOS_ANEXADOS` varchar(30) DEFAULT NULL,
  `STATUS_TRANSFERENCIA` varchar(30) DEFAULT NULL,
  `IMPORTE_TR` varchar(15) DEFAULT NULL,
  `NUM_TR` varchar(15) DEFAULT NULL,
  `FECHA_AP_TRANSFERENCIA` varchar(20) DEFAULT NULL,
  `COMPROBADO` varchar(15) DEFAULT NULL,
  `POR_COMPROBAR` varchar(15) DEFAULT NULL,
  `REINTEGRADO` varchar(15) DEFAULT NULL,
  `TOTAL_TR` varchar(15) DEFAULT NULL,
  `STATUS_SOLI_PAGO` varchar(150) DEFAULT NULL,
  `NUM_OFICIO_ENTREGA_COMPROBACION` varchar(20) DEFAULT NULL,
  `REVISADO` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`NumProg`)
) ENGINE=InnoDB AUTO_INCREMENT=149 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


CREATE TABLE relacion_gastos (
  id INT NOT NULL AUTO_INCREMENT,
  ID_COMPONENTE VARCHAR(40),
  TR VARCHAR(10),
  FECHA_TR VARCHAR(15),
  RAZON_SOCIAL VARCHAR(40),
  RFC VARCHAR(20),
  FOLIO_CFDI_RECIBO VARCHAR(20),
  FECHA_CFDI_RECIBO VARCHAR(20),
  SUBTOTAL_CFDI_RECIBO VARCHAR(20),
  DESCUENTO_CFDI_RECIBO VARCHAR(20),
  IVA_16_CFDI_RECIBO VARCHAR(20),
  IVA_RETENIDO_CFDI_RECIBO VARCHAR(20),
  ISR_CFDI_RECIBO VARCHAR(20),
  IEPS_CFDI_RECIBO VARCHAR(20),
  TOTAL_CFDI_RECIBO VARCHAR(20),
  BANCOS_REINTEGRO_A_CUENTA VARCHAR(30),
  DESCRIP_GENERAL_PARTIDA VARCHAR(40),
  PTDA_PTAL VARCHAR(10),
  NOMBRE_PTDA_PTAL VARCHAR(10),
  SUBCTA VARCHAR(10),
  NOMBRE_SUBCTA VARCHAR(40),
  CAPITULO VARCHAR(10),
  NOMBRE_CAPITULO VARCHAR(40),
  REVISADO tinyint(1) DEFAULT '0',
  PRIMARY KEY (id)
);