import {Cliente} from './cliente.js';
import {Impuesto} from './impuestos.js';

const impuesto1 = new Impuesto(2500000,1500000 );
const cliente1 = new Cliente('Daniela Gallardo', impuesto1);

console.log(`El impuesto anual de ${cliente1.nombre} es: $${cliente1.calcularImpuesto()}`);