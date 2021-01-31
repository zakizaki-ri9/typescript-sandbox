<script lang="ts">
  let show = false;
  function copyWebPageInfo(myFormat: string) {
    show = false;
    const prepCode = {
      code: `var formatFromPopup = "${myFormat}"`,
    };
    const mainCode = {
      file: "content_script.js",
    };
    chrome.tabs.executeScript(null, prepCode, () => {
      chrome.tabs.executeScript(null, mainCode);
      show = true;
      setTimeout(() => {
        show = false;
      }, 3000);
    });
  }

  $: console.log(`show: ${show}`);
</script>

<main>
  <div><span>Webページの情報を読み取る</span></div>
  <div class="tooltip">
    <span class="tooltiptext" class:show>クリップボードにコピーしました</span>
  </div>
  <div class="button-container">
    <button on:click={() => copyWebPageInfo("[$title]($url)$lf$selection")}
      >Markdown記法</button
    >
  </div>
</main>

<style></style>
