export class crearObstaculo {
    constructor() {
        this.x = Math.floor(Math.random() * 28) * 10
        this.y = Math.floor(Math.random() * 28) * 10
        this.w = 10
        this.h = 10
        this.vx = 0;
        this.vy = 0;
        this.direccion = Math.floor(Math.random() * 7);
        this.indice = 0;
        this.colores = ["#2c2e9c","#cfa900", "#3a210d","#c7732f","#60328d","black"];
    }

    render(ctx) {
        ctx.save()
        ctx.fillStyle = this.colores[this.indice]
        ctx.fillRect(this.x, this.y, this.w, this.h)
        ctx.lineWidth = 2
        ctx.strokeRect(this.x, this.y, this.w, this.h)
        ctx.strokeStyle = "black"
        ctx.restore()
    }

    moverObstaculos(cont = 0) {
        switch (cont) {
            case 0:
                this.direccion = Math.floor(Math.random() * 7);
                this.indice = Math.floor(Math.random() * this.colores.length)
                break;
            case 1:
                this.indice = Math.floor(Math.random() * this.colores.length) 
                this.direccion = Math.floor(Math.random() * 7);            
                this.h = Math.floor(Math.random() * 4) * 10
                this.w = this.h      
                break;
            default:

        }
    }

    mover() {
        if (this.direccion === 0) { this.vx = -10; this.vy = 0; }
        else if (this.direccion === 1) { this.vx = 0; this.vy = -10; }
        else if (this.direccion === 2) { this.vx = 10; this.vy = 0; }
        else if (this.direccion === 3) { this.vx = 0; this.vy = 10; }
        else if (this.direccion === 4) { this.vx = -10; this.vy = -10; }
        else if (this.direccion === 5) { this.vx = 10; this.vy = -10; }
        else if (this.direccion === 6) { this.vx = 10; this.vy = 10; }
        else if (this.direccion === 7) { this.vx = -10; this.vy = 10; }
        else if (this.direccion === 8) { }

        if (this.x < 0 || this.x >310 || this.y < 0 || this.y > 310){this.x = 150;this.y = 150; }
        else if (this.x == 290 || this.x == 0) { this.direccion = 8; this.vx = - this.vx; }
        else if (this.y == 290 || this.y == 0) { this.direccion = 8; this.vy = - this.vy; }
        this.x += this.vx;
        this.y += this.vy;
    }
}
// export function frames() {
//     let puntuacion = document.getElementById("rachaactual").innerText
//     let puntos = Math.floor(puntuacion)
//     let fps = 1000 / 15
//     if (puntos >= 10) {
//         fps = 500 / 15
//     }
//     return fps
// }
// function velocidad() {
//     let puntuacion = document.getElementById("rachaactual").innerText
//     let puntos = Math.floor(puntuacion)
//     if (puntos = 10) {
//         requestAnimationFrame(intervalodejuego)
//     }
// }
