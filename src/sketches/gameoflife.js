
// Modified for this page from Daniel Shiffman's game of life sketch. He's awesome, check his youtube videos!


export default function sketch(p) {
    
    // new p5();


    p.make2DArray = function(cols, rows) {
        let arr = new Array(cols);
        for (let i = 0; i < arr.length; i++) {
            arr[i] = new Array(rows);
        }
        return arr;
    }

    let grid;
    let cols;
    let rows;
    let resolution = 25;
    // let cnv;


    p.windowResized = function() {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
        //centerCanvas();
    }

    p.setup = function() {
        p.frameRate(10);
        let canvas = p.createCanvas(p.windowWidth, p.windowHeight);
        console.log(p.windowHeight)
        canvas.position(0, 0);
        canvas.style('z-index', '-1');
        // centerCanvas()
        cols = Math.floor(p.displayWidth / resolution);
        rows = Math.floor(p.displayHeight / resolution);


        grid = p.make2DArray(cols, rows);
        for (let i = 0; i < cols; i++) {
            for (let j = 0; j < rows; j++) {
                grid[i][j] = Math.floor(p.random(2));
            }
        }
    }



    p.draw = function() {
        p.background("#23241f");

        for (let i = 0; i < cols; i++) {
            for (let j = 0; j < rows; j++) {
                let x = i * resolution;
                let y = j * resolution;
                if (grid[i][j] === 1) {
                    p.fill(Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255));
                    p.stroke(100);
                    p.rect(x, y, resolution - 1, resolution - 1);
                }
            }
        }

        let next = p.make2DArray(cols, rows);

        // Compute next based on grid
        for (let i = 0; i < cols; i++) {
            for (let j = 0; j < rows; j++) {
                let state = grid[i][j];
                // Count live neighbors!
                // let sum = 0;
                let neighbors = countNeighbors(grid, i, j);

                if (state === 0 && neighbors === 3) {
                    next[i][j] = 1;
                } else if (state === 1 && (neighbors < 2 || neighbors > 3)) {
                    next[i][j] = 0;
                } else {
                    next[i][j] = state;
                }

            }
        }

        grid = next;



    }


    function countNeighbors(grid, x, y) {
        let sum = 0;
        for (let i = -1; i < 2; i++) {
            for (let j = -1; j < 2; j++) {
                let col = (x + i + cols) % cols;
                let row = (y + j + rows) % rows;
                sum += grid[col][row];
            }
        }
        sum -= grid[x][y];
        return sum;
    }
}