
const numRows: number = 5;
const numCols: number = 5;

type CellValue = 'O' | 'X';

type Grid = CellValue[][];

// Function to generate a random grid
export const generateRandomGrid = (): Grid => {
    const newGrid: Grid = [];
    for (let i = 0; i < numRows; i++) {
      const row: CellValue[] = [];
      for (let j = 0; j < numCols; j++) {
        row.push(Math.random() > 0.7 ? 'O' : 'X');
      }
      newGrid.push(row);
    }
    return newGrid;
  };
  
  // Function to calculate the next generation of the grid
  export const getNextGeneration = (currentGrid: Grid): Grid => {
    const newGrid: Grid = [];
    for (let i = 0; i < numRows; i++) {
      const newRow: CellValue[] = [];
      for (let j = 0; j < numCols; j++) {
        const cell: CellValue = currentGrid[i][j];
        const liveNeighbors: number = countLiveNeighbors(currentGrid, i, j);
        let newCell: CellValue = cell;
  
        if (cell === 'O' && (liveNeighbors < 2 || liveNeighbors > 3)) {
          newCell = 'X'; // Cell dies
        } else if (cell === 'X' && liveNeighbors === 3) {
          newCell = 'O'; // Cell becomes alive
        }
        newRow.push(newCell);
      }
      newGrid.push(newRow);
    }
    return newGrid;
  };
  
  // Function to count live neighbors of a cell
  export const countLiveNeighbors = (currentGrid: Grid, row: number, col: number): number => {
    const neighbors: [number, number][] = [
      [-1, -1], [-1, 0], [-1, 1],
      [0, -1], [0, 1],
      [1, -1], [1, 0], [1, 1],
    ];
  
    let liveCount: number = 0;
    for (const [dx, dy] of neighbors) {
      const newRow: number = row + dx;
      const newCol: number = col + dy;
  
      if (
        newRow >= 0 &&
        newRow < numRows &&
        newCol >= 0 &&
        newCol < numCols &&
        currentGrid[newRow][newCol] === 'O'
      ) {
        liveCount++;
      }
    }
  
    return liveCount;
  };
  