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
let salir="N"
    while(salir=="N"){
        let resultado=conversorMoneda()
        alert(tipoMoneda+cantidad+" equivalen a "+ resultado+" $ARS")
        salir=prompt("N-para seguir calculando\nS-para salir del programa")
}

