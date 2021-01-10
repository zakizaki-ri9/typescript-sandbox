<script lang="ts">
  import { createLifeGame } from "./lifegame";
  import { onDestroy } from "svelte";
  const ROW_SIZE = 20;
  const COLUMN_SIZE = 20;
  const lifegame = createLifeGame(ROW_SIZE, COLUMN_SIZE);

  let isRunning = false;
  let tickInterval: number | undefined = undefined;

  const stopTimer = () => {
    clearInterval(tickInterval);
    tickInterval = undefined;
  };

  onDestroy(() => {
    if (tickInterval) {
      stopTimer();
    }
  });

  // リアクティブに動作する、Vueでいうcomputedあたりの動作
  $: if (isRunning && !tickInterval) {
    tickInterval = setInterval(() => {
      lifegame.moveNextTick();
    }, 300);
  }
  $: if (!isRunning && tickInterval) {
    stopTimer();
  }
</script>

<style>
  .lifegame-container {
    display: block;
    width: max-content;
  }
  .lifegame-cells-container {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .lifegame-cells {
    display: grid;
    background-color: #333;
    grid-gap: 1px 1px;
    border: solid 1px #333;
  }
  .cell {
    width: 20px;
    height: 20px;
    background-color: #eee;
  }
  .cell.alive {
    background-color: red;
  }
</style>

<div class="lifegame-container">
  <div class="lifegame-cells-container">
    <div>
      <button on:click={() => lifegame.moveNextTick()}>1ターン進める</button>
      <br />
      {#if !isRunning}
        <button on:click={() => (isRunning = true)}>Timer start</button>
      {:else}
        <button on:click={() => (isRunning = false)}>Timer stop</button>
      {/if}
    </div>
    <div class="lifegame-cells">
      {#each $lifegame.grid as row, rowIndex}
        {#each row as col, colIndex}
          <div
            class="cell"
            class:alive={col.isAlive}
            style="grid-row: {rowIndex + 1}"
            on:click={(_) => lifegame.toggle(rowIndex, colIndex)} />
        {/each}
      {/each}
    </div>
  </div>
</div>
