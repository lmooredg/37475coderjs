function conversorMoneda() {
    switch (tipoMoneda) {
            case "USD":
                resultado = 230 * cantidad
                return resultado    
            case "EUR":
                resultado = 250 * cantidad
                return resultado
            case "UYU":
                resultado = 28 * cantidad
                return resultado
                
            case "BRL":
                resultado = 18 * cantidad
                return resultado
                
            default:
                return "error!"
                
        }
      
    }
let tipoMoneda = prompt("Ingresar Moneda a convertir a pesos - USD, EUR, UYU, BRL")
let cantidad = parseInt(prompt("Ingresar cantidad de dinero a converitr"))
let seguir = "S"
    do {
        let resultado=conversorMoneda()
        alert(tipoMoneda+cantidad+" equivalen a "+ resultado + " $ARS")
        seguir=prompt("S-para seguir calculando\nExit-para salir del programa")
} while (seguir=="S")

