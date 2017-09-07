import flyd from "flyd";

const buffers = ["", "", ""];
const outputs = ["0", "1", "2"].map(
  index => document.getElementById("output" + index));

const toOutput = index => value => {
  buffers[index] += value + " ";
  outputs[index].innerHTML = buffers[index];
};

const s1 = flyd.stream();

const s2 = s1.map(value => value * 10);

const add = (x, y) => x + y;

var s3 = flyd.scan(add, 0, s2);

s2.map(toOutput(0));
s3.map(toOutput(1));

s1(5);
s1(10);
s1(12);
s1(15);

const s4 = flyd.stream();

const applyFunction = (value, fn) => fn(value);

const s5 = flyd.scan(applyFunction, "hello", s4);

s5.map(toOutput(2));

const toUpper = s => s.toUpperCase();
const reverse = s => s.split("").reverse().join("");
const fourChars = s => s.substring(0, 4);

s4(toUpper);
s4(reverse);
s4(fourChars);
