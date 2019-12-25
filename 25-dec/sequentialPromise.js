// eslint-disable-next-line arrow-body-style
const sequentialPromise = (array) => {
  return array.reduce((promise, acc) => promise.then(acc), Promise.resolve());
};
export { sequentialPromise };
