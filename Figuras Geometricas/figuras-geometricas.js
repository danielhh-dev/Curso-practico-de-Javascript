//Codigo del cuaddrado

console.group("Cuadrados");

// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

const perimetroCuadrado = (lado) => lado * 4;
// console.log("El perimetro del cuadrado mide: " + perimetroCuadrado + "cm");

const areaCuadrado = (lado) => Math.pow(lado, 2); 
// console.log("El area del cuadrado mide: " + areaCuadrado + "cmˆ2");

console.groupEnd();

//Codigo del triangulo

console.group("Triangulos");

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// console.log("Los lados del triangulo miden: " + ladoTriangulo1 + "cm"+ ", " + ladoTriangulo2 + "cm"+ ", "+ "y " + baseTriangulo + "cm");

// const alturaTriangulo = 5.5;
// console.log("La altura del triangulo mide: " + alturaTriangulo + "cm");

const perimetroTriangulo = (lado1, lado2, base ) => lado1 + lado2 + base;
// console.log("El perimetro del triangulo mide: " + perimetroTriangulo + "cm");

const areaTriangulo = (base, altura) => (base * altura) / 2; 
// console.log("El area del triangulo mide: " + areaTriangulo + "cmˆ2");

console.groupEnd();

//Codigo del circulo

console.group("Circulos");

// const radio =  4;
// console.log("El radio del circulo mide: " + radio + "cm");

const diametro = (radio) => radio * 2;
// console.log("El diametro del circulo mide: " + diametro + "cm");

const PI = Math.PI;

const circunferencia = (radio) => diametro(radio) * PI;
// console.log("El perimetro del circulo mide: " + circunferencia + "cm");

const areaCirculo = (radio) => PI * Math.pow(radio, 2);
// console.log("El area del circulo mide: " + areaCirculo + "cm^2");

console.groupEnd();
