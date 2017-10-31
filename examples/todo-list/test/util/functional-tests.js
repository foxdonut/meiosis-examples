import test from "ava";

import { uncurry } from "../../src/util/functional";

test("uncurries a curried function so that we can call it as we wish", t => {
  const f = x => y => z => x + y - z;

  const uf = uncurry(f);

  t.is(uf(1, 2, 3), 0);
  t.is(uf(1, 2)(3), 0);
  t.is(uf(1)(2)(3), 0);
  t.is(uf(1)(2, 3), 0);
});

test("uncurries a curried function so that we can call it with empty args", t => {
  const f = x => y => (x && y) ? x + y : "ok no args";

  const uf = uncurry(f);

  t.is(uf(1, 2), 3);
  t.is(uf(1)(2), 3);
  t.is(uf(null, null), "ok no args");
  t.is(uf()(), "ok no args");
});
