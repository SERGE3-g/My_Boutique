/// <reference lib="webworker" />

addEventListener('message', ({ data }) => {
  const response = `worker response to ${data}`;
  postMessage(response);

  // postMessage('worker response');
  // console.log('worker response');

});
