"use strict";

const method = iface => {
  const result = [];
  for (let key in iface) {
    const func = iface[key];
    typeof func === "function" && result.push([key, func.length]);
  }
  return result;
};

export default { method };
