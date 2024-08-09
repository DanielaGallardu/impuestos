export class Impuesto {
  constructor(montoBrutoAnual, deducciones) {
      this._montoBrutoAnual = montoBrutoAnual;
      this._deducciones = deducciones;
  }

  get montoBrutoAnual() {
      return this._montoBrutoAnual;
  }

  get deducciones() {
      return this._deducciones;
  }

  set montoBrutoAnual(monto) {
      this._montoBrutoAnual = monto;
  }

  set deducciones(deduccion) {
      this._deducciones = deduccion;
  }

  calcularImpuesto() {
      return (this._montoBrutoAnual - this._deducciones) * 0.21;
  }
}
