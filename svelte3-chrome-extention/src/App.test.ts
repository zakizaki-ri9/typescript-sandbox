import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/svelte';
import App from './App.svelte';

test('Markdown記法 ボタンが表示されている', () => {
  const { getByText } = render(App);
  expect(getByText('Markdown記法')).toBeInTheDocument();
});

test('Markdown記法 ボタンをクリックしたらスクリプトが送り込まれる', () => {
  const executeScriptMock = jest.fn((tabId, details, callback) => {
    if(!!callback) {
      callback();
    }
  });

  globalThis.chrome = {
    // @ts-ignore
    tabs: {
      // @ts-ignore
      executeScript: executeScriptMock,
    }
  };

  const { getByText } = render(App);
  const button = getByText('Markdown記法');
  fireEvent.click(button);

  expect(getByText('クリップボードにコピーしました')).toBeInTheDocument();

  expect(executeScriptMock).toHaveBeenCalledTimes(2);
  expect(executeScriptMock).toHaveBeenNthCalledWith(
    1,
    null,
    { code: expect.any(String) },
    expect.anything()
  );
  expect(executeScriptMock).toHaveBeenNthCalledWith(
    2,
    null,
    { file: 'content_script.js' }
  );
});
