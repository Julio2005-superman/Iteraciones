/*Un evento es una accion que se puede generar
en una pagina web o aplicacion y puede ser 
al ahcer clic en un boton o elemento html, 
mover el mouse presionar o soltar una tecla,
al cargar una pagina, al validar un un formulario*/
/*2 formas el implementar los eventos
    -Dentro del documento html
    -En codigo de JavaScript
*/
let texto = document.querySelector("#texto");
let parrafo = () => {
    let nombre='Natalia Elizabeth';
    texto.innerHTML = nombre;
}

let borrar = () => {
    texto.innerHTML = '';
}