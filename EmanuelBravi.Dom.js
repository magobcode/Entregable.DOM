let Bienvenida = prompt('Bienvendio a nuestra pagina web, desea acceder al listado de Empresas que trabajan junto a nosotros? responda con si o no.')   
class Empresa {
constructor(Business, Rating){
this.Business = Business;
this.Rating = Rating;
    }
}
const Empresa1 = new Empresa ('Andreani', 6);
const Empresa2 = new Empresa ('OCASA', 10);
const Empresa3 = new Empresa ('CorreoARG', 8);
const Empresa4 = new Empresa ('Carolo.srl', 2);
const Empresa5 = new Empresa ('Traverso', 4);
const Empresa6 = new Empresa ('Fedex', 9);
const Empresa7 = new Empresa ('Express', 7);

const Empresas = [];

Empresas.push(Empresa1);
Empresas.push(Empresa2);
Empresas.push(Empresa3);
Empresas.push(Empresa4);
Empresas.push(Empresa5);
Empresas.push(Empresa6);
Empresas.push(Empresa7);

if (Bienvenida == 'si') {
function imprimirEmpresas(Empresas) {

const contenedordeEmpresas = document.getElementById('Business_container');
contenedordeEmpresas.innerHTML ="";


 Empresas.forEach(Empresa => {
    const div_Business = document.createElement('div');
    div_Business.classList.add("Business");
    div_Business.innerHTML= `
    <h3> ${Empresa.Business} </h3>
    <p><strong> Calificacion: ${Empresa.Rating}</strong></p>`;
    contenedordeEmpresas.appendChild(div_Business);
 })
}
imprimirEmpresas(Empresas)
}
else{
    const contenedordeEmpresas = document.getElementById('Business_container');
    contenedordeEmpresas.innerHTML = `<h2> GRACIAS POR VISITAR </h2>`  ;
}

