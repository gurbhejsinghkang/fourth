var grid = [['1', '1', ' 0', ' 0'],
['0', '1', '0', ' 0'], ['1', '1', '1', ' 1'],
['0', ' 0', '0', ' 0'], ['0', '0', '0', ' 0']];
// var temp = cars[0][0] + cars[0][1];
// temp = temp + cars[0][2];
// temp = temp + cars[0][3];
// console.log(temp);
// temp = temp + 2;
myfunc(grid, 5, 4);
function myfunc(grid, rows, columns) {
    var count = 0;
    console.log("the number of rows=" + rows);
    console.log("the number of columns=" + columns);
    console.log("Grids=");
    for (i = 0; i < rows; i++) {
        var result = "";
        for (j = 0; j < columns; j++) {
            if (result == "") {
                result = grid[i][j];
            }
            else {
                result = result + grid[i][j];
            }
        }
        console.log(result.trim());
    }
    for (i = 0; i < rows; i++) {
        var intc = 0;
        var flag = 0;
        for (j = 0; j < columns; j++) {
            temp = grid[i][j];
            if (grid[i][j] == 1) {
                if (flag == 0) {
                    flag = 1;
                }
                else {
                    intc = intc + 1;
                }
            }
            else {
                flag = 0;
            }
        }
        if (intc > 0) {
            count = count + 1;
        }
    }
    console.log("\nthe number of stores possible=" + count);
}