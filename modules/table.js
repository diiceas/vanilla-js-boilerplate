import { Laptop } from './laptop.js';

const laptop = new Laptop();

function Table() {}

Table.prototype.changeColor = function(color) {
  const strValue = `the color the table has been changed to ${color}`;
  console.log(strValue);
};

Table.prototype.show = function() {
  console.log(`laptop: ${laptop.name}`);
};

export { Table };
