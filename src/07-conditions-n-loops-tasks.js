/* *************************************************************************************************
 *                                                                                                *
 * Please read the following tutorial before implementing tasks:                                   *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling  *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration              *
 *                                                                                                *
 ************************************************************************************************ */


/**
 * Returns the 'Fizz','Buzz' or an original number using the following rules:
 * 1) return original number
 * 2) but if number multiples of three return 'Fizz'
 * 3) for the multiples of five return 'Buzz'
 * 4) for numbers which are multiples of both three and five return 'FizzBuzz'
 *
 * @param {number} num
 * @return {any}
 *
 * @example
 *   2 =>  2
 *   3 => 'Fizz'
 *   5 => 'Buzz'
 *   4 => 4
 *  15 => 'FizzBuzz'
 *  20 => 'Buzz'
 *  21 => 'Fizz'
 *
 */
function getFizzBuzz(num) {
  let result;
  if (num % 5 === 0 && num % 3 === 0) {
    result = 'FizzBuzz';
  } else if (num % 5 === 0) {
    result = 'Buzz';
  } else if (num % 3 === 0) {
    result = 'Fizz';
  } else {
    result = num;
  }

  return result;
}


/**
 * Returns the factorial of the specified integer n.
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   1  => 1
 *   5  => 120
 *   10 => 3628800
 */
function getFactorial(n) {
  return (n !== 1) ? n * getFactorial(n - 1) : 1;
}


/**
 * Returns the sum of integer numbers between n1 and n2 (inclusive).
 *
 * @param {number} n1
 * @param {number} n2
 * @return {number}
 *
 * @example:
 *   1,2   =>  3  ( = 1+2 )
 *   5,10  =>  45 ( = 5+6+7+8+9+10 )
 *   -1,1  =>  0  ( = -1 + 0 + 1 )
 */
function getSumBetweenNumbers(n1, n2) {
  let res = 0;
  for (let i = n1; i <= n2; i += 1) {
    res += i;
  }

  return res;
}


/**
 * Returns true, if a triangle can be built with the specified sides a, b, c
 * and false in any other ways.
 *
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {bool}
 *
 * @example:
 *   1,2,3    =>  false
 *   3,4,5    =>  true
 *   10,1,1   =>  false
 *   10,10,10 =>  true
 */
function isTriangle(a, b, c) {
  if ((a + b > c) && (b + c > a) && (c + a > b)) return true;
  return false;
}


/**
 * Returns true, if two specified axis-aligned rectangles overlap, otherwise false.
 * Each rectangle representing by object
 *  {
 *     top: 5,
 *     left: 5,
 *     width: 20,
 *     height: 10
 *  }
 *
 *  (5;5)
 *     -------------
 *     |           |
 *     |           |  height = 10
 *     -------------
 *        width=20
 *
 * NOTE: Please use canvas coordinate space (https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes#The_grid),
 * it differs from Cartesian coordinate system.
 *
 * @param {object} rect1
 * @param {object} rect2
 * @return {bool}
 *
 * @example:
 *   { top: 0, left: 0, width: 10, height: 10 },
 *   { top: 5, left: 5, width: 20, height: 20 }    =>  true
 *
 *   { top: 0, left: 0, width: 10, height: 10 },
 *   { top:20, left:20, width: 20, height: 20 }    =>  false
 *
 */
function doRectanglesOverlap(rect1, rect2) {
  const l1 = {
    x: rect1.left,
    y: rect1.top,
  };
  const r1 = {
    x: rect1.left + rect1.width,
    y: rect1.top + rect1.height,
  };
  const l2 = {
    x: rect2.left,
    y: rect2.top,
  };
  const r2 = {
    x: rect2.left + rect2.width,
    y: rect2.top + rect2.height,
  };

  if (l1.x === r1.x || l1.y === r1.y || l2.x === r2.x || l2.y === r2.y) return false;
  if (r1.x < l2.x || r2.x < l1.x) return false;
  if (r1.y < l2.y || r2.y < l1.y) return false;

  return true;
}


/**
 * Returns true, if point lies inside the circle, otherwise false.
 * Circle is an object of
 *  {
 *     center: {
 *       x: 5,
 *       y: 5
 *     },
 *     radius: 20
 *  }
 *
 * Point is object of
 *  {
 *     x: 5,
 *     y: 5
 *  }
 *
 * @param {object} circle
 * @param {object} point
 * @return {bool}
 *
 * @example:
 *   { center: { x:0, y:0 }, radius:10 },  { x:0, y:0 }     => true
 *   { center: { x:0, y:0 }, radius:10 },  { x:10, y:10 }   => false
 *
 */
function isInsideCircle(circle, point) {
  const outside = (((point.x - circle.center.x) ** 2)
                  + ((point.y - circle.center.y) ** 2))
                  >= (circle.radius ** 2);

  if (outside) return false;
  return true;
}


/**
 * Returns the first non repeated char in the specified strings otherwise returns null.
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 *   'The quick brown fox jumps over the lazy dog' => 'T'
 *   'abracadabra'  => 'c'
 *   'entente' => null
 */
function findFirstSingleChar(str) {
  for (let i = 0; i < str.length; i += 1) {
    const char = str[i];
    if (str.indexOf(char) === str.lastIndexOf(char)) return char;
  }

  return null;
}


/**
 * Returns the string representation of math interval,
 * specified by two points and include / exclude flags.
 * See the details: https://en.wikipedia.org/wiki/Interval_(mathematics)
 *
 * Please take attention, that the smaller number should be the first in the notation
 *
 * @param {number} a
 * @param {number} b
 * @param {bool} isStartIncluded
 * @param {bool} isEndIncluded
 * @return {string}
 *
 * @example
 *   0, 1, true, true   => '[0, 1]'
 *   0, 1, true, false  => '[0, 1)'
 *   0, 1, false, true  => '(0, 1]'
 *   0, 1, false, false => '(0, 1)'
 * Smaller number has to be first :
 *   5, 3, true, true   => '[3, 5]'
 *
 */
function getIntervalString(a, b, isStartIncluded, isEndIncluded) {
  let result = '';
  if (isStartIncluded) {
    result += '[';
  } else {
    result += '(';
  }
  const start = Math.min(a, b);
  const end = Math.max(a, b);

  result += `${start}, ${end}`;

  if (isEndIncluded) {
    result += ']';
  } else {
    result += ')';
  }

  return result;
}


/**
 * Reverse the specified string (put all chars in reverse order)
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 * 'The quick brown fox jumps over the lazy dog' => 'god yzal eht revo spmuj xof nworb kciuq ehT'
 * 'abracadabra' => 'arbadacarba'
 * 'rotator' => 'rotator'
 * 'noon' => 'noon'
 */
function reverseString(str) {
  return str.split('').reverse().join('');
}


/**

 *
 * @param {number} num
 * @return {number}
 *
 * @example:
 *   12345 => 54321
 *   1111  => 1111
 *   87354 => 45378
 *   34143 => 34143
 */
function reverseInteger(num) {
  return +(num.toString().split('').reverse().join(''));
}


/**
 * Validates the CCN (credit card number) and return true if CCN is valid
 * and false otherwise.
 *
 * See algorithm here : https://en.wikipedia.org/wiki/Luhn_algorithm
 *
 * @param {number} cnn
 * @return {boolean}
 *
 * @example:
 *   79927398713      => true
 *   4012888888881881 => true
 *   5123456789012346 => true
 *   378282246310005  => true
 *   371449635398431  => true
 *
 *   4571234567890111 => false
 *   5436468789016589 => false
 *   4916123456789012 => false
 */
function isCreditCardNumber(ccn) {
  const sum = ccn.toString().split('').reverse().reduce((acc, curr, idx) => {
    let digit = +curr;
    if ((idx + 1) % 2 === 0) {
      digit *= 2;
      if (digit > 9) digit -= 9;
    }
    return acc + digit;
  }, 0);

  return sum % 10 === 0;
}

/**
 * Returns the digital root of integer:
 *   step1 : find sum of all digits
 *   step2 : if sum > 9 then goto step1 otherwise return the sum
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   12345 ( 1+2+3+4+5 = 15, 1+5 = 6) => 6
 *   23456 ( 2+3+4+5+6 = 20, 2+0 = 2) => 2
 *   10000 ( 1+0+0+0+0 = 1 ) => 1
 *   165536 (1+6+5+5+3+6 = 26,  2+6 = 8) => 8
 */
function getDigitalRoot(num) {
  const arrOfDigits = num.toString().split('').map((el) => +el);
  const res = arrOfDigits.reduce((acc, curr) => acc + curr);
  if (res > 9) return getDigitalRoot(res);
  return res;
}


/**
 * Returns true if the specified string has the balanced brackets and false otherwise.
 * Balanced means that is, whether it consists entirely of pairs of opening/closing brackets
 * (in that order), none of which mis-nest.
 * Brackets include [],(),{},<>
 *
 * @param {string} str
 * @return {boolean}
 *
 * @example:
 *   '' => true
 *   '[]'  => true
 *   '{}'  => true
 *   '()   => true
 *   '[[]' => false
 *   ']['  => false
 *   '[[][][[]]]' => true
 *   '[[][]][' => false
 *   '{)' = false
 *   '{[(<{[]}>)]}' = true
 */
function isBracketsBalanced(str) {
  const bracketsConfig = [['(', ')'], ['[', ']'], ['{', '}'], ['|', '|'], ['<', '>']];
  const map = new Map(bracketsConfig);
  const stack = [];

  for (let i = 0; i < str.length; i += 1) {
    const currentBracket = str[i];
    const lastBracketInStack = stack[stack.length - 1];
    const pairForLastOpenBracket = map.get(lastBracketInStack);
    if (map.has(currentBracket)) {
      if (currentBracket === pairForLastOpenBracket) {
        stack.pop();
      } else {
        stack.push(currentBracket);
      }
    } else {
      if (stack.length === 0) {
        return false;
      }
      if (currentBracket === pairForLastOpenBracket) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length === 0;
}


/**
 * Returns the string with n-ary (binary, ternary, etc, where n <= 10)
 * representation of specified number.
 * See more about
 * https://en.wikipedia.org/wiki/Binary_number
 * https://en.wikipedia.org/wiki/Ternary_numeral_system
 * https://en.wikipedia.org/wiki/Radix
 *
 * @param {number} num
 * @param {number} n, radix of the result
 * @return {string}
 *
 * @example:
 *   1024, 2  => '10000000000'
 *   6561, 3  => '100000000'
 *    365, 2  => '101101101'
 *    365, 3  => '111112'
 *    365, 4  => '11231'
 *    365, 10 => '365'
 */
function toNaryString(num, n) {
  const numStr = num.toString(n);
  return +numStr;
}


/**
 * Returns the common directory path for specified array of full filenames.
 *
 * @param {array} pathes
 * @return {string}
 *
 * @example:
 *   ['/web/images/image1.png', '/web/images/image2.png']  => '/web/images/'
 *   ['/web/assets/style.css', '/web/scripts/app.js',  'home/setting.conf'] => ''
 *   ['/web/assets/style.css', '/.bin/mocha',  '/read.me'] => '/'
 *   ['/web/favicon.ico', '/web-scripts/dump', '/verbalizer/logs'] => '/'
 */
function getCommonDirectoryPath(pathes) {
  const splitPathes = pathes.map((item) => {
    const newItem = item.split('/');
    if (newItem[0] === '') newItem[0] = '/';
    return newItem;
  });
  const minLenOfPath = Math.min(...(splitPathes.map((item) => item.length)));
  let result = '';

  for (let i = 0; i < minLenOfPath; i += 1) {
    const part = splitPathes.reduce((acc, curr, idx, array) => {
      if (idx === array.length - 1) return acc;
      if (curr[i] === array[idx + 1][i]) return acc;
      return '';
    }, splitPathes[0][i]);

    if (part === '') {
      result += '';
    } else if (part === '/') {
      if (result === '') result += '/';
    } else {
      result += `${part}/`;
    }
  }

  return result;
}


/**
 * Returns the product of two specified matrixes.
 * See details: https://en.wikipedia.org/wiki/Matrix_multiplication
 *
 * @param {array} m1
 * @param {array} m2
 * @return {array}
 *
 * @example:
 *   [[ 1, 0, 0 ],       [[ 1, 2, 3 ],           [[ 1, 2, 3 ],
 *    [ 0, 1, 0 ],   X    [ 4, 5, 6 ],     =>     [ 4, 5, 6 ],
 *    [ 0, 0, 1 ]]        [ 7, 8, 9 ]]            [ 7, 8, 9 ]]
 *
 *                        [[ 4 ],
 *   [[ 1, 2, 3]]    X     [ 5 ],          =>     [[ 32 ]]
 *                         [ 6 ]]
 *
 */
function getMatrixProduct(m1, m2) {
  if (m1.length !== m2[0].length) return 'error! matrix is incompatible';

  const result = Array(m1.length).fill([]).map(() => Array(m2[0].length).fill(0));

  return result
    .map((row, rowIdx) => row
      .map((item, columnIdx) => m1[rowIdx]
        .reduce((acc, curr, idx) => acc + (curr * m2[idx][columnIdx]), 0)));
}


/**
 * Returns the evaluation of the specified tic-tac-toe position.
 * See the details: https://en.wikipedia.org/wiki/Tic-tac-toe
 *
 * Position is provides as 3x3 array with the following values: 'X','0', undefined
 * Function should return who is winner in the current position according to the game rules.
 * The result can be: 'X','0',undefined
 *
 * @param {array} position
 * @return {string}
 *
 * @example
 *
 *   [[ 'X',   ,'0' ],
 *    [    ,'X','0' ],       =>  'X'
 *    [    ,   ,'X' ]]
 *
 *   [[ '0','0','0' ],
 *    [    ,'X',    ],       =>  '0'
 *    [ 'X',   ,'X' ]]
 *
 *   [[ '0','X','0' ],
 *    [    ,'X',    ],       =>  undefined
 *    [ 'X','0','X' ]]
 *
 *   [[    ,   ,    ],
 *    [    ,   ,    ],       =>  undefined
 *    [    ,   ,    ]]
 *
 */
function evaluateTicTacToePosition(ticktacktoe) {
  if (ticktacktoe[0][0] === ticktacktoe[0][1]
      && ticktacktoe[0][0] === ticktacktoe[0][2]
      && ticktacktoe[0][0] !== undefined) return ticktacktoe[0][0];
  if (ticktacktoe[1][0] === ticktacktoe[1][1]
      && ticktacktoe[1][0] === ticktacktoe[1][2]
      && ticktacktoe[1][0] !== undefined) return ticktacktoe[1][0];
  if (ticktacktoe[2][0] === ticktacktoe[2][1]
      && ticktacktoe[2][0] === ticktacktoe[2][2]
      && ticktacktoe[2][0] !== undefined) return ticktacktoe[2][0];
  if (ticktacktoe[0][0] === ticktacktoe[1][0]
      && ticktacktoe[0][0] === ticktacktoe[2][0]
      && ticktacktoe[0][0] !== undefined) return ticktacktoe[0][0];
  if (ticktacktoe[0][1] === ticktacktoe[1][1]
      && ticktacktoe[0][1] === ticktacktoe[2][1]
      && ticktacktoe[0][1] !== undefined) return ticktacktoe[0][1];
  if (ticktacktoe[0][2] === ticktacktoe[1][2]
      && ticktacktoe[0][2] === ticktacktoe[2][2]
      && ticktacktoe[0][2] !== undefined) return ticktacktoe[0][2];
  if (ticktacktoe[0][0] === ticktacktoe[1][1]
      && ticktacktoe[0][0] === ticktacktoe[2][2]
      && ticktacktoe[0][0] !== undefined) return ticktacktoe[0][0];
  if (ticktacktoe[0][2] === ticktacktoe[1][1]
      && ticktacktoe[0][2] === ticktacktoe[2][0]
      && ticktacktoe[0][2] !== undefined) return ticktacktoe[0][2];

  return undefined;
}


module.exports = {
  getFizzBuzz,
  getFactorial,
  getSumBetweenNumbers,
  isTriangle,
  doRectanglesOverlap,
  isInsideCircle,
  findFirstSingleChar,
  getIntervalString,
  reverseString,
  reverseInteger,
  isCreditCardNumber,
  getDigitalRoot,
  isBracketsBalanced,
  toNaryString,
  getCommonDirectoryPath,
  getMatrixProduct,
  evaluateTicTacToePosition,
};
