function Laptop() {
  this.name = 'Lenovo';
}

Laptop.prototype.open = function() {
  console.log(`the laptop ${this.name} has been opened`);
};

export { Laptop };
