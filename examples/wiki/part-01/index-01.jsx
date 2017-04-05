import flyd from "flyd";

const log = value => {
  const element = document.getElementById("app");
  element.innerHTML = element.innerHTML + " " + value;
};

const s1 = flyd.stream();

//s1.map(log);

//s1(5);
//s1(2);

//log(s1());

//const add = (total, next) => total + next;
const applyOp = (total, nextOp) => {
  if (nextOp.oper === "add") {
    return total + nextOp.value;
  }
  else if (nextOp.oper === "sub") {
    return total - nextOp.value;
  }
  else {
    return total;
  }
}

const s2 = flyd.scan(applyOp, 0, s1);

s2.map(log);

/*
s1(4);
s1(10);
s1(3)
s1(2);
s1(5);
s1(3);
*/
s1({ oper: "add", value: 4 });
s1({ oper: "sub", value: 6 });
s1({ oper: "add", value: 10 });
s1({ oper: "add", value: 5 });
