export interface IReceta {
    titulo: string,
    descripcion: string,
    preparacion: string[],
    tipo: "Primeros" | "Segundos" | "Postres",
    ingredientes: Ingrediente[],
    foto: string
}

export interface Ingrediente {
    nombre: string,
    cantidad: number,
    unidad: string
}

// chart.js se puede usar desde js y html.
//https://adictosaltrabajo.com/2022/07/01/como-anadir-graficos-en-tu-web-con-chart-js/
//https://code.tutsplus.com/es/getting-started-with-chartjs-pie-doughnut-and-bubble-charts--cms-28446t

//Documentación
//https://www.chartjs.org/docs/latest/getting-started/integration.html