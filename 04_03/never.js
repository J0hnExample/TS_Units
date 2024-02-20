export function Demo() {
    const errorFunktion = () => {
        console.error("Error!");
        throw new Error("Unknown error");
    };
    const result = errorFunktion();
}
/* const errorFunction = () => {
  console.error("Error!");
  throw new Error("Unknown error");
};

const result = errorFunction(); */ 
