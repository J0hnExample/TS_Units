export function Demo() {
  let foobar: any = { author: "Sascha"};
  let foobar_unknown: unknown  = { aithor: "Sascha"};

  let myString: string;
  myString = foobar;

  //myString = foobar_unknown;
}



/* let foobar: any = { author: "David Lorenz" };
let foobar_unknown: unknown = { author: "David Lorenz" };

let myString: string;
myString = foobar;
myString = foobar_unknown; // funktioniert nicht

// unknown = keine schnittmenge mit typen
// any = schnittmenge mit allen typen (chamäleon) */