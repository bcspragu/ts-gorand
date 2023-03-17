import Rand from './index';

test('output matches Go math/rand', () => {
  // TODO(brandon): Go's math/rand has an extremely comprehensive set of
  // tests that could/should be ported, this is just a sanity check.
  // See https://cs.opensource.google/go/go/+/refs/tags/go1.20.2:src/math/rand/
  const r = new Rand(0n);
  expect(r.int63()).toBe(8717895732742165505n);
  expect(r.int63()).toBe(2259404117704393152n);
  expect(r.int63()).toBe(6050128673802995827n);
  expect(r.int63()).toBe(501233450539197794n);
  expect(r.int63()).toBe(3390393562759376202n);
  expect(r.int63()).toBe(2669985732393126063n);
  expect(r.int63()).toBe(1774932891286980153n);
  expect(r.int63()).toBe(6044372234677422456n);
  expect(r.int63()).toBe(8274930044578894929n);
  expect(r.int63()).toBe(1543572285742637646n);

  const r2 = new Rand(1n);
  expect(r2.int63()).toBe(5577006791947779410n);
  expect(r2.int63()).toBe(8674665223082153551n);
  expect(r2.int63()).toBe(6129484611666145821n);
  expect(r2.int63()).toBe(4037200794235010051n);
  expect(r2.int63()).toBe(3916589616287113937n);
  expect(r2.int63()).toBe(6334824724549167320n);
  expect(r2.int63()).toBe(605394647632969758n);
  expect(r2.int63()).toBe(1443635317331776148n);
  expect(r2.int63()).toBe(894385949183117216n);
  expect(r2.int63()).toBe(2775422040480279449n);
});
