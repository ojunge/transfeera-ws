-- Table: banks

CREATE TABLE banks
(
  code varchar(10) not null,
  name varchar(255) not null,
  urlImg varchar(255) null,
  createdAt timestamp without time zone,
  updatedAt timestamp without time zone,
  CONSTRAINT banks_pkey PRIMARY KEY (code)
);

ALTER TABLE banks
  OWNER TO postgres;

-- Table: accounts_type

CREATE TABLE accounts_type
(
  code varchar(2) not null,
  name varchar(255) not null,
  createdAt timestamp without time zone,
  updatedAt timestamp without time zone,
  CONSTRAINT accounts_type_pkey PRIMARY KEY (code)
);

ALTER TABLE accounts_type
  OWNER TO postgres;


-- Table: favorites

CREATE TABLE favorites
(
  id SERIAL,
  name varchar(255) not null,
  nif varchar(14) not null, --Número de Identificação Fiscal
  email varchar(255) not null,
  agency varchar(4),
  agencyDigit varchar(1),
  account varchar(10),
  accountDigit varchar(10),
  bankCode varchar(10) not null,
  accountTypeCode varchar(2) not null,
  status varchar(50) not null,
  createdAt timestamp without time zone,
  updatedAt timestamp without time zone,
  CONSTRAINT favorites_pkey PRIMARY KEY (id)
);

ALTER TABLE favorites
  OWNER TO postgres;
