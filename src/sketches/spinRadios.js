import "p5/lib/addons/p5.dom";

export default function sketch(p) {
    let radioCircle = [];
    let div;
    // let canvas;
    let allRadios;
    let totalRadius = 200;
    let numCircles = Math.round(p.random(1, 30));
    let numRadios = Math.round(p.random(6, 50));
    let spinSpeed = Math.round(p.random(1, 10));
    let fps = Math.round(p.random(1, 10));
    // let numCircles = 5;
    // let numRadios = 5;
    // let spinSpeed = 10;
    // let fps = 10;


    // class Radio {
    //     constructor(x, y, value) {
    //         this.x = x;
    //         this.y = y;
    //         this.value = value;
    //         this.button = p.createRadio().position(this.x, this.y);
    //         this.button.option("", value);
    //         this.button.

    //     }

    //     // move(mx, my) {
    //     //     this.x = this.x + mx;
    //     //     this.y = this.y + my;
    //     //     this.button.position(this.x, this.y);
    //     // }
    // }

    let xpos, ypos;
    let circ;

    p.drawCircle = function(Inset, Radius, value) {
        for (let i = 0; i < numRadios; i++) {
            xpos = Inset + Radius;
            ypos = Inset + Radius;
            xpos = xpos + Radius * Math.sin((i / numRadios) * p.PI * 2);
            ypos = ypos + Radius * Math.sin((i / numRadios) * p.PI * 2 - p.PI / 2);

            circ = p.createRadio();
            circ.position(xpos, ypos);
            // console.log(xpos,ypos);
            circ.option("", value);
            circ.parent("container");

            radioCircle.push(circ);
        }
    }

    p.randomCheckedPattern = function() {
        let remainder = Math.round(p.random(2, numRadios));

        for (let baba = 0; baba < allRadios.length; baba++) {
            if (baba % remainder === 1) {
                allRadios[baba].checked = true;
            }
            else {
                allRadios[baba].checked = false;
            }
        }
        
    }

    p.setup = function() {
        p.noCanvas()
        // p.createCanvas(200,200);
        div = p.createDiv('').id("container");
        div.size(totalRadius * 2 + 16, totalRadius * 2 + 14.5);
        // div.position(0,0);


        for (let pp = 0; pp < numCircles; pp++) {
            let Inset = pp / numCircles * totalRadius;
            let Radius = totalRadius - Inset;

            p.drawCircle(Inset, Radius, pp)
        }

        allRadios = document.querySelectorAll("input");

        // todo: changing the direction and spinning speed of each row
        div.style("animation", "spin infinite " + spinSpeed + "s linear")

        // framerate determines the speed of the randomCheckedPattern function
        p.frameRate(fps);
    }

    p.draw = function() {
        p.randomCheckedPattern()
    }

}
