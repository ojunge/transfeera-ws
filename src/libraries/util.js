const moment = require('moment');  

module.exports = {

  formatValue: (value)=> {
    //value = value.replace(".", "");
    //value = value.replace(",", ".");
    console.log(value);
    return value;
  },  

  calcular: (leituraAnterior, leituraAtual, dataInicial, dataFinal) => {
    // const start = Date.now();

   const VALOR_KWH_NORMAL = 0.68;
   const VALOR_UP_150 = 0.72;
   const COSIP = 12.50;

   console.log(dataInicial)
   var dtIni = moment(dataInicial);
   var dtFim = moment(dataFinal);


  const obj = {
    leituraAnterior: leituraAnterior,
    leituraAtual: leituraAtual,
    bandeira: "",
    qtdeKwh: 0,
    qtdeKwhNormal: 0,
    qtdeKwhAdicional: 0,
    valorKwhNormal: 0,
    valorKwhAdicional: 0,
    valorBandeira: 0,
    valorFinal : 0,
    valorCosip: 0,
    dtIni: dtIni.format('DD/MM/YYYY'),
    dtFim: dtFim.format('DD/MM/YYYY'),
    days: dtFim.diff(dtIni, 'days'),
    mediaKwh: 0
 };

  	obj.qtdeKwh = leituraAtual - leituraAnterior;
    obj.valorCosip = COSIP;
    obj.mediaKwh = (obj.qtdeKwh / obj.days).toFixed(2);

  	if(obj.qtdeKwh > 150){
  		obj.qtdeKwhNormal = 150;
  		obj.qtdeKwhAdicional = obj.qtdeKwh - obj.qtdeKwhNormal;
  		obj.valorKwhNormal = VALOR_KWH_NORMAL * obj.qtdeKwhNormal;
  		obj.valorKwhAdicional = VALOR_UP_150 * obj.qtdeKwhAdicional;
  	}else{
		obj.qtdeKwhNormal = obj.qtdeKwh;
		obj.valorKwhNormal = VALOR_KWH_NORMAL * obj.qtdeKwhNormal;
  	}

  	obj.valorFinal = obj.valorKwhNormal + obj.valorKwhAdicional+obj.valorCosip;

    return obj;
  }
};
