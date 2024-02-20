export function Demo() {
    let foobar = { author: "Sascha" };
    let foobar_unknown = { aithor: "Sascha" };
    let myString;
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
