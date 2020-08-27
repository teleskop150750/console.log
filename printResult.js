const template = (resultData) => {
  const spanWrapper = document.createElement('div');
  spanWrapper.classList.add('span-result-wrapper');
  const span = document.createElement('span');
  span.textContent = resultData.join('');
  span.classList.add('span-result');
  spanWrapper.append(span);
  return spanWrapper;
};

const printResult = (parent) => (...resultData) => {
  const result = template(resultData);
  parent.append(result);
};

export default printResult;
