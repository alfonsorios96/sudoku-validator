function validateSudoku(sudoku) {
    let result = false;
    const uniques = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const sectors = [
        [[0, 0], [0, 1], [0, 2]],
        [[1, 0], [1, 1], [1, 2]],
        [[2, 0], [2, 1], [2, 2]],
        [[0, 3], [0, 4], [0, 5]],
        [[1, 3], [1, 4], [1, 5]],
        [[2, 3], [2, 4], [2, 5]],
        [[0, 6], [0, 7], [0, 8]],
        [[1, 6], [1, 7], [1, 8]],
        [[2, 6], [2, 7], [2, 8]]
    ];
    let rows = [];
    let columns = [];
    let grids = [];
    for (let row of sudoku) {
        let newRow = new Set([...row[0], ...row[1], ...row[2]]);
        rows.push([...newRow]);
    }
    if (rows.every(row => row.length === 9)) {
        for (let i = 0; i < 9; i++) {
            let newColumn = [];
            for (let row of rows) {
                newColumn.push(row[i]);
            }
            let columnSet = new Set([...newColumn]);
            columns.push([...columnSet]);
        }
        for (let sector of sectors) {
            let grid = [];
            for (let row of sector) {
                grid.push(sudoku[row[1]][row[0]]);
            }
            let fullGrid = new Set([...grid[0], ...grid[1], ...grid[2]]);
            grids.push([...fullGrid]);
        }

        if (columns.every(column => column.length === 9) &&
            grids.every(grid => grid.length === 9)) {
            try {
                let rowCheck = false;
                let columnCheck = false;
                let gridCheck = false;
                for (let toCompare of rows) {
                    for (let iii = 0; iii < 9; iii++) {
                        let sorted = toCompare.sort();
                        if (sorted[iii] !== uniques[iii]) {
                            throw "end";
                        }
                    }
                }
                for (let toCompare of columns) {
                    for (let iii = 0; iii < 9; iii++) {
                        let sorted = toCompare.sort();
                        if (sorted[iii] !== uniques[iii]) {
                            throw "end";
                        }
                    }
                }
                for (let toCompare of grids) {
                    for (let iii = 0; iii < 9; iii++) {
                        let sorted = toCompare.sort();
                        if (sorted[iii] !== uniques[iii]) {
                            throw "end";
                        }
                    }
                }
                result = true;
            } catch (error) {
                result = false;
            }
        } else {
            result = false;
        }
    } else {
        result = false;
    }
    return result;
}
