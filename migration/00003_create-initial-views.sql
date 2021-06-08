CREATE OR REPLACE VIEW vw_favorites as 
SELECT f.id, f.name, f.nif, f.email, f.agency, f.agencydigit, f.account, f.accountdigit, 
       f.bankcode, f.accounttypecode, f.status, f.createdat, f.updatedat, b.urlImg
  FROM favorites f
  INNER JOIN banks b on b.code = f.bankcode;
