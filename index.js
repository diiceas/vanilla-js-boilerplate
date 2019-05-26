import { Table } from './modules/table.js';
import { Room } from './modules/room.js';
import { Laptop } from './modules/laptop.js';

const laptop = new Laptop();
laptop.open();

const color = 'blue';
const table = new Table();
const room = new Room(table);
room.table.changeColor(color);
room.table.show();

console.log(room);