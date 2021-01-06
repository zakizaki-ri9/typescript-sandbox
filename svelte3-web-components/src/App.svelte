<script lang="ts">
  const ROW_SIZE = 20;
  const COLUMN_SIZE = 20;

  const grid = [...Array(ROW_SIZE)].map((_) => {
    return [...Array(COLUMN_SIZE)].map((_) => {
      isAlive: false;
    });
  });
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
</style>

<div class="lifegame-container">
  <div class="lifegame-cells-container">
    <div class="lifegame-cells">
      {#each grid as row, i}
        {#each row as col, j}
          <div class="cell" style="grid-row: {i + 1}" />
        {/each}
      {/each}
    </div>
  </div>
</div>
