function iniciar() {
    var boton = document.getElementById("grabar");
    boton.addEventListener("click", nuevoitem);
    mostrar();
}
function nuevoitem() {
    var clave = document.getElementById("clave").value;
    var valor = document.getElementById("texto").value;
    sessionStorage.setItem(clave, valor);
    document.getElementById("clave").value = "";
    document.getElementById("texto").value = "";
    mostrar();
}
function mostrar() {
    var cajadatos = document.getElementById("cajadatos");
    cajadatos.innerHTML = '<div><input type="button"onclick="removerTodo()" value="Eliminar Todos"></div>';
    for (var f = 0; f < sessionStorage.length; f++) {
        var clave = sessionStorage.key(f);
        var valor = sessionStorage.getItem(clave);
        cajadatos.innerHTML += "<div>" + clave + " - " + valor + "<br>";
        cajadatos.innerHTML += '<input type="button" onclick = "removerItem(\'' + clave + '\')"value = "Remover" > </div > ';
    }
}
function removerItem(clave) {
    if (confirm("Está seguro?")) {
        sessionStorage.removeItem(clave);
        mostrar();
    }
}
function removerTodo() {
    if (confirm("Está seguro?")) {
        sessionStorage.clear();
        mostrar();
    }
}
window.addEventListener("load", iniciar);