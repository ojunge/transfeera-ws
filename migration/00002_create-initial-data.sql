-- Table: insert accounts type

INSERT INTO accounts_type(code, name, createdat, updatedat)VALUES ('CC', 'CONTA_CORRENTE', current_date, current_date);
INSERT INTO accounts_type(code, name, createdat, updatedat)VALUES ('CP', 'CONTA_POUPANCA', current_date, current_date);
INSERT INTO accounts_type(code, name, createdat, updatedat)VALUES ('CF', 'CONTA_FACIL', current_date, current_date);


-- Table: insert banks
INSERT INTO banks(code, name, urlimg, createdat, updatedat)VALUES ('001','Banco do Brasil', 'https://transfeera.com/wp-content/uploads/2020/02/transfeera-banco-brasil.svg', current_date, current_date);
INSERT INTO banks(code, name, urlimg, createdat, updatedat)VALUES ('104','Caixa', 'https://transfeera.com/wp-content/uploads/2020/02/transfeera-banco-caixa.svg', current_date, current_date);
INSERT INTO banks(code, name, urlimg, createdat, updatedat)VALUES ('237','Bradesco', 'https://transfeera.com/wp-content/uploads/2020/02/transfeera-banco-bradesco.svg', current_date, current_date);
INSERT INTO banks(code, name, urlimg, createdat, updatedat)VALUES ('756','Sicoob', 'https://transfeera.com/wp-content/uploads/2020/02/transfeera-banco-sicoob.svg', current_date, current_date);
INSERT INTO banks(code, name, urlimg, createdat, updatedat)VALUES ('341','Itaú', 'https://transfeera.com/wp-content/uploads/2020/02/transfeera-banco-itau.svg', current_date, current_date);


-- Table: insert favorites

INSERT INTO favorites(name, nif, email, agency, agencydigit, account, accountdigit,  bankcode, accounttypecode, status, createdat, updatedat)VALUES ('Dean Winchester', '72385156016', 'dean@gmail.com', '0814', '0', '0092847', '9', '237', 'CC', 'R', current_date, current_date);
INSERT INTO favorites(name, nif, email, agency, agencydigit, account, accountdigit,  bankcode, accounttypecode, status, createdat, updatedat)VALUES ('Sam Winchester', '72385156016', 'dean@gmail.com', '0814', '0', '0092847', '9', '237', 'CC', 'R', current_date, current_date);
INSERT INTO favorites(name, nif, email, agency, agencydigit, account, accountdigit,  bankcode, accounttypecode, status, createdat, updatedat)VALUES ('John Wick', '72385156016', 'dean@gmail.com', '0814', '0', '0092847', '9', '237', 'CC', 'R', current_date, current_date);
INSERT INTO favorites(name, nif, email, agency, agencydigit, account, accountdigit,  bankcode, accounttypecode, status, createdat, updatedat)VALUES ('Dean Winchester', '72385156016', 'dean@gmail.com', '0814', '0', '0092847', '9', '237', 'CC', 'V', current_date, current_date);
INSERT INTO favorites(name, nif, email, agency, agencydigit, account, accountdigit,  bankcode, accounttypecode, status, createdat, updatedat)VALUES ('Dean Winchester', '72385156016', 'dean@gmail.com', '0814', '0', '0092847', '9', '237', 'CC', 'V', current_date, current_date);
INSERT INTO favorites(name, nif, email, agency, agencydigit, account, accountdigit,  bankcode, accounttypecode, status, createdat, updatedat)VALUES ('Dean Winchester', '72385156016', 'dean@gmail.com', '0814', '0', '0092847', '9', '237', 'CC', 'V', current_date, current_date);
INSERT INTO favorites(name, nif, email, agency, agencydigit, account, accountdigit,  bankcode, accounttypecode, status, createdat, updatedat)VALUES ('Dean Winchester', '72385156016', 'dean@gmail.com', '0814', '0', '0092847', '9', '237', 'CC', 'V', current_date, current_date);
INSERT INTO favorites(name, nif, email, agency, agencydigit, account, accountdigit,  bankcode, accounttypecode, status, createdat, updatedat)VALUES ('Dean Winchester', '72385156016', 'dean@gmail.com', '0814', '0', '0092847', '9', '237', 'CC', 'V', current_date, current_date);
INSERT INTO favorites(name, nif, email, agency, agencydigit, account, accountdigit,  bankcode, accounttypecode, status, createdat, updatedat)VALUES ('Dean Winchester', '72385156016', 'dean@gmail.com', '0814', '0', '0092847', '9', '237', 'CC', 'R', current_date, current_date);
INSERT INTO favorites(name, nif, email, agency, agencydigit, account, accountdigit,  bankcode, accounttypecode, status, createdat, updatedat)VALUES ('Dean Winchester', '72385156016', 'dean@gmail.com', '0814', '0', '0092847', '9', '237', 'CC', 'R', current_date, current_date);
INSERT INTO favorites(name, nif, email, agency, agencydigit, account, accountdigit,  bankcode, accounttypecode, status, createdat, updatedat)VALUES ('Dean Winchester', '72385156016', 'dean@gmail.com', '0814', '0', '0092847', '9', '237', 'CC', 'R', current_date, current_date);
INSERT INTO favorites(name, nif, email, agency, agencydigit, account, accountdigit,  bankcode, accounttypecode, status, createdat, updatedat)VALUES ('Dean Winchester', '72385156016', 'dean@gmail.com', '0814', '0', '0092847', '9', '237', 'CC', 'R', current_date, current_date);
INSERT INTO favorites(name, nif, email, agency, agencydigit, account, accountdigit,  bankcode, accounttypecode, status, createdat, updatedat)VALUES ('Dean Winchester', '72385156016', 'dean@gmail.com', '0814', '0', '0092847', '9', '237', 'CC', 'V', current_date, current_date);
INSERT INTO favorites(name, nif, email, agency, agencydigit, account, accountdigit,  bankcode, accounttypecode, status, createdat, updatedat)VALUES ('Dean Winchester', '72385156016', 'dean@gmail.com', '0814', '0', '0092847', '9', '237', 'CC', 'R', current_date, current_date);
INSERT INTO favorites(name, nif, email, agency, agencydigit, account, accountdigit,  bankcode, accounttypecode, status, createdat, updatedat)VALUES ('Dean Winchester', '72385156016', 'dean@gmail.com', '0814', '0', '0092847', '9', '237', 'CC', 'R', current_date, current_date);
INSERT INTO favorites(name, nif, email, agency, agencydigit, account, accountdigit,  bankcode, accounttypecode, status, createdat, updatedat)VALUES ('Dean Winchester', '72385156016', 'dean@gmail.com', '0814', '0', '0092847', '9', '237', 'CC', 'V', current_date, current_date);
INSERT INTO favorites(name, nif, email, agency, agencydigit, account, accountdigit,  bankcode, accounttypecode, status, createdat, updatedat)VALUES ('Dean Winchester', '72385156016', 'dean@gmail.com', '0814', '0', '0092847', '9', '237', 'CC', 'R', current_date, current_date);
INSERT INTO favorites(name, nif, email, agency, agencydigit, account, accountdigit,  bankcode, accounttypecode, status, createdat, updatedat)VALUES ('Dean Winchester', '72385156016', 'dean@gmail.com', '0814', '0', '0092847', '9', '237', 'CC', 'R', current_date, current_date);
INSERT INTO favorites(name, nif, email, agency, agencydigit, account, accountdigit,  bankcode, accounttypecode, status, createdat, updatedat)VALUES ('Dean Winchester', '72385156016', 'dean@gmail.com', '0814', '0', '0092847', '9', '237', 'CC', 'R', current_date, current_date);
INSERT INTO favorites(name, nif, email, agency, agencydigit, account, accountdigit,  bankcode, accounttypecode, status, createdat, updatedat)VALUES ('Dean Winchester', '72385156016', 'dean@gmail.com', '0814', '0', '0092847', '9', '237', 'CC', 'R', current_date, current_date);
INSERT INTO favorites(name, nif, email, agency, agencydigit, account, accountdigit,  bankcode, accounttypecode, status, createdat, updatedat)VALUES ('Dean Winchester', '72385156016', 'dean@gmail.com', '0814', '0', '0092847', '9', '237', 'CC', 'R', current_date, current_date);
INSERT INTO favorites(name, nif, email, agency, agencydigit, account, accountdigit,  bankcode, accounttypecode, status, createdat, updatedat)VALUES ('Dean Winchester', '72385156016', 'dean@gmail.com', '0814', '0', '0092847', '9', '237', 'CC', 'R', current_date, current_date);
INSERT INTO favorites(name, nif, email, agency, agencydigit, account, accountdigit,  bankcode, accounttypecode, status, createdat, updatedat)VALUES ('Dean Winchester', '72385156016', 'dean@gmail.com', '0814', '0', '0092847', '9', '237', 'CC', 'R', current_date, current_date);
INSERT INTO favorites(name, nif, email, agency, agencydigit, account, accountdigit,  bankcode, accounttypecode, status, createdat, updatedat)VALUES ('Dean Winchester', '72385156016', 'dean@gmail.com', '0814', '0', '0092847', '9', '237', 'CC', 'R', current_date, current_date);