'use strict';

const array = () => {
  const data = [];
  const get = (i) => data[i];
  get.pop = () => data.pop();
  get.push = (x) => data.push(x);
  return get;
};

module.exports = { array };
