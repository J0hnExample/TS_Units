export function Challenge() {
  type MyType = string | boolean | (string | number)[];
  let foo: MyType = "Hello!";
  foo = false;
  foo = ["test", 100];
}
