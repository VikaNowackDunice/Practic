// 21 напишите кастомный Flat

const test = [
  1,
  2,
  [[3], 4, [5, [11], 9]],
  {
    one: 1,
    two: {
      bar: 'pop',
      three: {
        foo: 33,
        name: 'oleg',
        olga: true,
        unic: { in: 'in' }
      }
    }
  },
  ['098', [33, 44, [[12], 1, [56]]]]
];

const test2 = {
  foo: {
    one: 1,
    two: {
      bar: 'pop',
      three: {
        foo2: 33,
        name: 'oleg',
        olga: true,
        unic: { in: 'in' }
      }
    },
    abc: [
      1,
      2,
      [[3], 4, [5, [11], 9]],
      ['098', [33, 44, [[12], 1, [56]]]]
    ]
  },
};

function flat(collection, depth = 1) {
  let result = [];

  function flatten(item, currentDepth) {
    if (Array.isArray(item)) {
      for (let subItem of item) {
        if (Array.isArray(subItem) && currentDepth > 0) {
          flatten(subItem, currentDepth - 1);
        } else {
          flatten(subItem, currentDepth);
        }
      }
    } else if (typeof item === 'object' && item !== null && !Array.isArray(item)) {
      let flattenedObject = {};
      for (let [key, value] of Object.entries(item)) {
        if (typeof value === 'object' && value !== null && !Array.isArray(value) && currentDepth > 0) {
          let innerFlattened = flat([value], currentDepth - 1);
          for (let innerObj of innerFlattened) {
            if (typeof innerObj === 'object' && !Array.isArray(innerObj)) {
              flattenedObject = { ...flattenedObject, ...innerObj };
            } else {
              flattenedObject[key] = innerObj;
            }
          }
        } else if (Array.isArray(value) && currentDepth > 0) {
          flattenedObject[key] = flat(value, currentDepth - 1);
        } else {
          flattenedObject[key] = value;
        }
      }
      result.push(flattenedObject);
    } else {
      result.push(item);
    }
  }

  flatten(collection, depth);
  return result;
}

console.log(flat(test, Infinity)); // должно вернуть [1, 2, 3, 4, 5, 11, 9, { one: 1, bar: 'pop', foo: 33, name: 'oleg', olga: true, in: 'in' }, '098', 33, 44, 12, 1, 56]
console.log(flat(test2, Infinity)); // должно вернуть { one: 1, bar: 'pop', foo2: 33, name: 'oleg', olga: true, in: 'in', abc: [1, 2, 3, 4, 5, 11, 9, '098', 33, 44, 12, 1, 56] }
