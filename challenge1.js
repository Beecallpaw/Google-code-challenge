const mapFromList = (xs) => {
  const map = new Map();
  xs.slice(0, 99).forEach((val) => {
    if (map.has(val)) map.set(val, map.get(val) + 1);
    else map.set(val, 1);
  });

  return map;
};

const filterNum = (map, num) => {
  list = [];
  for (const [k, v] of map.entries()) {
    if (v <= num) list.push(k);
  }

  return list;
};

const solution = (xs, x) => (x > 99 ? [] : filterNum(mapFromList(xs), x));

console.log(solution([1, 2, 2, 3, 3, 3, 4, 5, 5], 2));

console.log(solution([5, 10, 15, 10, 7], 0));

console.log(solution([1, 2, 2, 3, 3, 3, 4, 5, 5], 1));

