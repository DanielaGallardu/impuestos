export class Cliente {
  constructor(nombre, impuesto) {
      this._nombre = nombre;
      this._impuesto = impuesto;
  }

  get nombre() {
      return this._nombre;
  }

  get impuesto() {
      return this._impuesto;
  }

  set nombre(nombre) {
      this._nombre = nombre;
  }

  set impuesto(impuesto) {
      this._impuesto = impuesto;
  }

  calcularImpuesto() {
      return this._impuesto.calcularImpuesto();
  }
}
