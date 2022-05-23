const HR = require('./hr.js');

describe('HR.js', () => {
  test('replaceWith & backgroundColor values should match', async () => {
    const defaultText = 'black';
    const replacedText = 'white';
    document.body.innerHTML = `<p id="test">${defaultText}</p>`;

    new HR('#test', {
      highlight: defaultText,
      replaceWith: replacedText,
      backgroundColor: 'rgb(180, 255, 235)',
    }).hr();

    const testElement = document.getElementById('test');
    expect(testElement.textContent).toBe(replacedText);
    expect(testElement.children[0].style.backgroundColor).toBe('rgb(180, 255, 235)');
  });

  test('array of items replace should match', async () => {
    const defaultText = 'cat bird';
    const replacedText = 'dog unicorn';
    document.body.innerHTML = `<p id="test-2">${defaultText}</p>`;

    new HR('#test-2', {
      highlight: defaultText.split(" "),
      replaceWith: replacedText.split(" "),
    }).hr();

    const testElement = document.getElementById('test-2');
    expect(testElement.textContent.trim()).toBe(replacedText);
  });


  test('highlight backgroundColor should match', async () => {
    const defaultText = 'horse';
    document.body.innerHTML = `<p id="test-3">${defaultText}</p>`;

    new HR('#test-3', {
      highlight: defaultText,
    }).hr();

    const testElement = document.getElementById('test-3');
    expect(testElement.children[0].style.backgroundColor).toBe('rgb(255, 222, 112)');
  });
});