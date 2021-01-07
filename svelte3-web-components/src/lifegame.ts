import { writable } from "svelte/store";

export type Cell = {
  isAlive: boolean,
}

export type State = {
  grid: Cell[][],
  rowSize: number,
  colSize: number,
}

export function createLifeGame(rowSize: number, colSize: number)  {
  const { subscribe, update } = writable(defaultState(rowSize, colSize));

  return {
    subscribe,
    toggle: (rowIndex: number, colIndex: number) => update((state) => toggle(state, rowIndex, colIndex)),
    moveNextTick: () => update(moveNextTick),
  }
}

/**
 * ライフゲームのルールに沿った判定を行う
 * see. https://ja.wikipedia.org/wiki/%E3%83%A9%E3%82%A4%E3%83%95%E3%82%B2%E3%83%BC%E3%83%A0#:~:text=%E3%83%A9%E3%82%A4%E3%83%95%E3%82%B2%E3%83%BC%E3%83%A0%20(Conway's%20Game%20of,%E3%81%97%E3%81%9F%E3%82%B7%E3%83%9F%E3%83%A5%E3%83%AC%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3%E3%82%B2%E3%83%BC%E3%83%A0%E3%81%A7%E3%81%82%E3%82%8B%E3%80%82
 * 
 * 誕生 ... 死んでいるセルに隣接する生きたセルがちょうど3つあれば、次の世代が誕生する
 * 生存 ... 生きているセルに隣接する生きたセルが2つか3つならば、次の世代でも生存する
 * 過疎 ... 生きているセルに隣接する生きたセルが1つ以下ならば、過疎により死滅する
 * 過密 ... 生きているセルに隣接する生きたセルが4つ以上ならば、過密により死滅する
 */
function isCellAliveWhenNextTick(oldState: State, rowIndex: number, colIndex: number) {
  const directions = [
    [-1, -1], [-1, 0], [-1, 1],
    [0, -1], [0, 1],
    [1, -1], [1, 0], [1, 1]
  ]

  // 隣接するセルのいきたセルを数える
  let count = 0;
  for (const d of directions) {
    const newRowIndex = rowIndex + d[0];
    const newColIndex = colIndex + d[1];
    if (newRowIndex < 0 || oldState.rowSize - 1 < newRowIndex) continue;
    if (newColIndex < 0 || oldState.colSize - 1 < newColIndex) continue;
    if (oldState.grid[newRowIndex][newColIndex].isAlive) {
      count++;
    }
  }

  if (oldState.grid[rowIndex][colIndex].isAlive) {
    return count === 2 || count === 3
  }
  return count === 3
}

function moveNextTick(oldState: State): State {
  return {
    ...oldState,
    grid: oldState.grid.map((row, rowIndex) => {
      return row.map((col, colIndex) => {
        return { isAlive: isCellAliveWhenNextTick(oldState, rowIndex, colIndex) }
      })
    }),
  }
}

// グリッドの初期値
function defaultGrid(rowSize: number, colSize: number): Cell[][] {
  return [...Array(rowSize)].map(_ => {
    return [...Array(colSize)].map(_ => {
      // isAliveがtrueのとき、セルは生きている
      return { isAlive: false }
    })
  })
}

// グリッドのクリックされたセルの生死を反転する
function toggle(oldState: State, rowIndex: number, colIndex: number): State {
  const newGrid = oldState.grid.map((currentRow, currentRowIndex) => {
    return currentRow.map((currentCol, currentColIndex) => {
      return { isAlive: rowIndex === currentRowIndex && colIndex === currentColIndex ? !currentCol.isAlive : currentCol.isAlive }
    })
  })
  return {
    ...oldState,
    grid: newGrid
  }
}

// ライフゲームの初期値
function defaultState(rowSize: number, colSize: number): State {
  return {
    grid: defaultGrid(rowSize, colSize),
    rowSize,
    colSize,
  };
}
