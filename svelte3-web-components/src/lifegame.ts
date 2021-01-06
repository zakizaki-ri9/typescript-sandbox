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
