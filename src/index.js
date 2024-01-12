const x = {
  a: {
    b: {
      c: "1"
    }
  },
  b: "kante",
  c: null,
  y: undefined
};

const y = {
  a: "",
  b: [],
  c: {
    x: []
  },
  d: {
    t: undefined,
    x: {
      y: {
        z: ""
      }
    }
  }
};

// const z = {
//   a: 1,
//   b: {
//     c: {
//       d: 1,
//       t: 2
//     }
//   }
// };

// function walk(obj) {
//   for (const key in obj) {
//     if (!obj.hasOwnProperty(key)) continue;

//     if (!(typeof obj[key] === "object")) {
//       console.log(`key ${key} value: ${obj[key]}`);
//     } else {
//       walk(obj[key]);
//     }
//   }
// }

// walk(z);

function objectHasValue(obj) {
  for (const key in obj) {
    // check for primitive (null, undefined, number)
    if (!obj.hasOwnProperty(key) || !obj[key]) {
      continue;
    }

    // if we see an object
    if (typeof obj[key] === "object") {
      if (objectHasValue(obj[key]) === true) return true;
    } else {
      return obj[key].length !== 0;
    }
  }

  return false;
}

console.log(objectHasValue(y));

// loop through object
// if element in object is not falsy, return true;
// if after looping through object and no falsy value is found, return false

// function objectHasValue(obj) {
//   for (const prop in obj) {
//     console.log({ key: prop, value: obj[prop] });
//     if (!obj.hasOwnProperty(prop)) continue;

//     // if obj[prop] is an object, loop again
//     if (typeof obj[prop] === "object") {
//       console.log("loop again", obj[prop]);
//       objectHasValue(obj[prop]);
//     } else {
//     }
//   }

//   return false;
// }

// // for (const prop in [1, 2, 3]) {
// //   console.log(prop);
// // }
// console.log(objectHasValue(x));
