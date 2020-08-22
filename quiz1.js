class rectangle {
    x1;
    x2;
    x3;
    x4;
    y1;
    y2;
    y3;
    y4;
    length;
    width;
    count;
    counting;
    constructor(x1, x2, x3, x4, y1, y2, y3, y4) {
        this.x1 = x1;
        this.x2 = x2;
        this.x3 = x3;
        this.x4 = x4;
        this.y1 = y1;
        this.y2 = y2;
        this.y3 = y3;
        this.y4 = y4;
        this.length = this.x2 - this.x1;
        this.width = this.y3 - this.y1;
    }
    area() {
        return this.length * this.width;
    }
    perimeter() {
        return 2 * (this.length + this.width);
    }

    draw2() {
        console.log("this is method 2");
        var j;
        var i;
        var count = 0;
        var counting = 0;
        for (j = 1; j <= this.length; j++) {
            console.log("*");
        }
        for (j = 1; j <= this.length; j++) {
            console.log("*             *");
        }
        for (j = 1; j <= this.length; j++) {
            console.log("*");
        }
    }
    drawHorizontal(width) {
        var i;
        var str = "";
        for (i = 0; i < width; i++) {
            str = str + "*";              /* notice I'm using print() not println() */
        }
        console.log(str);
        // System.out.println("");
    }
    drawEnds(width) {
        var i;
        var str = "*";
        for (i = 1; i < width - 1; i++) {
            str = str + " ";
        }
        str = str + "*";
        console.log(str);
    }
    draw() {
        var j;
        var i;
        for (j = 1; j <= this.length; j++) {
            for (var i = 1; i <= this.width; i++) {
                if (j == 1 || j == this.length || i == 1 || i == this.width) {
                    console.log("*");
                }
                else {
                    console.log(" ");
                }
            }
            console.log("hello");
        }
    }
}

let rect = new rectangle(1, 5, 3, 4, 5, 6, 5, 6);
console.log(rect.area());
console.log(rect.perimeter());
rect.draw();
rect.draw2();
rect.drawHorizontal(5);
rect.drawEnds(5);
rect.drawEnds(5);
rect.drawEnds(5);
rect.drawEnds(5);
rect.drawEnds(5);
rect.drawEnds(5);
rect.drawHorizontal(5);