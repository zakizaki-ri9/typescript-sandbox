// 即時関数内に定義することにより、2回目以降実行時のlet,const定義によるエラーを防ぐ
(function (popupText) {
  function createFormattedText (text) {
    return text
      .replace('$title', document.title)
      .replace('$url', document.location.href)
      .replace('$selection', getSelection().toString())
      .replace('$lf', '\n')
    ;
  }
  
  function pasteText(text) {
    let textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
  }
  
  pasteText(createFormattedText(popupText));
}(formatFromPopup));
