export function Demo() {

  type VoidingFunction = () => void;
  type NumberFunction = (paramA: number, paramB: string) => number;

  const myFunction:VoidingFunction = () => {
    console.log("myFunction called!");
  };

  const myNumberFunction: NumberFunction = () => {
    return 200;
  }
  //function mit parameter gibt dann einen erzwungenen string zurück mit : string hinter 
  const otherFunc = (zahl: number): string => {
    return 'string';
}

  myFunction();
  myNumberFunction(10, "hallo");
}



/* 
type VoidingFunction = () => void;
type NumberFunction = (paramA: number, paramB: string) => number;

const myFunction: VoidingFunction = () => {
  console.log("myFunction called!");
};

const myFunction2: NumberFunction = () => {
  console.log("myFunction called!");
  return 123;
};

myFunction2(10, "test");
myFunction(); */