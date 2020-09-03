const template = (resultData) => {
  let resultStrig = '';

  resultData.forEach((el) => {
    if (Array.isArray(el)) {
      resultStrig += `[${el.join(', ')}] `;
    } else if (el === null) {
      resultStrig += 'null';
    } else if (typeof el === 'object') {
      const entries = Object.entries(el).reduce((acc, [key, value]) => `${acc}  ${key}: ${value},\n`, '');
      resultStrig += `\n{\n${entries}}\n`;
    } else {
      resultStrig += `${el} `;
    }
  });
  resultStrig = resultStrig.trim();

  const backgroundColor = document.querySelectorAll('.span-result-wrapper').length % 2 === 0 ? '#bee7c4' : '#bee2e7';

  const spanWrapper = document.createElement('div');
  spanWrapper.style.cssText = `border-bottom: 1px solid #c0c0c0;
  background-color: ${backgroundColor}`;
  spanWrapper.classList.add('span-result-wrapper');

  const span = document.createElement('span');
  span.textContent = resultData.join(' ');
  span.textContent = resultStrig;
  span.style.cssText = `display: inline-block;
  padding: 6px 10px;
  font-size: 1.3rem;
  white-space: pre-wrap;`;
  span.classList.add('span-result');

  spanWrapper.append(span);
  return spanWrapper;
};

const consoleLog = (parent) => (...resultData) => {
  const result = template(resultData);
  parent.append(result);
};

export default consoleLog;
