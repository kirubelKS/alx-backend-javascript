export default class Currency {
    constructor(code, name) {
      this._code = code;
      this._name = name;
    }
  
    // Getter and Setter for 'code'
    get code() {
      return this._code;
    }
  
    set code(newCode) {
      if (typeof newCode === 'string') {
        this._code = newCode;
      } else {
        throw new Error('Invalid data type. Code must be a string.');
      }
    }
  
    // Getter and Setter for 'name'
    get name() {
      return this._name;
    }
  
    set name(newName) {
      if (typeof newName === 'string') {
        this._name = newName;
      } else {
        throw new Error('Invalid data type. Name must be a string.');
      }
    }
  
    // Method to display attributes in the specified format
    displayFullCurrency() {
      return `${this._name} (${this._code})`;
    }
  }
