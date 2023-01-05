function first(s1, s2) {
    arr1 = s1.split(/[^A-Za-z]/);
    s1 = arr1.join('');

    arr2 = s2.split(/[^A-Za-z]/);
    s2 = arr2.join('');

    console.log(s1)
    console.log(s2)

    for (let i = 0; i < s1.length; i++) {
        if (s2.indexOf(s1[i]) == -1) return false
    }
    for (let i = 0; i < s2.length; i++) {
        if (s1.indexOf(s2[i]) == -1) return false
    }

    return true;
}
console.log(first("h@ello**", "helo0")); 

/*---------------------------------------------------------------------------------*/

/* function second(array) {
    array.map((item, index) => (setTimeout(() => console.log(index), index*3000)))
}
second([1, 2, 3]); */

/*---------------------------------------------------------------------------------*/

/* function third() {
    return new Set(arguments);
}
console.log(third(1, 2, 'sdf', 'a', 1, 3, 'sdf')); */

/*---------------------------------------------------------------------------------*/

/* function fourth(array) {
    let arr1 = [];
    let arr2 = [];
    for (elem of array) {
        elem % 2 == 0 ? arr2.push(elem) : arr1.push(elem);
    }
    arr1.sort((a, b) => a - b)
    arr2.sort((a, b) => b - a)

    for ( let i = 0; i < array.length; i++) {
        array[i] = array[i] % 2 == 0 ? arr2.shift() : arr1.shift();
    }

    return array;
}

console.log(fourth([1,2,3,4,5,6,7,8,8,8,5,1,6,2,3,4,3,20])); */

/*---------------------------------------------------------------------------------*/

/* function Fifth(seconds) {
    this.seconds = seconds;
    
    this.launchBomb = function () {
        if (this.seconds < 0) {
            console.log("We can't make an explosion:(")
            return;
        }
        if (this.seconds == 0) {
            console.log("BOOOOM!!!")
            return;
        }

        let counter = this.seconds;
        let secondsTimer = 0;
        let bufSeconds = this.seconds;

        while (counter > 0) {
            setTimeout(() => console.log(bufSeconds--), secondsTimer * 1000);
            counter--;
            secondsTimer++;
        }
        setTimeout(() => console.log("BOOOOM!!!"), this.seconds * 1000);
    }
}
let bomb = new Fifth(0);
bomb.launchBomb(); */

/*---------------------------------------------------------------------------------*/

/* function sixth(array) {
    return array.map(date => date.getTime()).sort((a, b) => a - b).map(milisec => new Date(milisec));
}
console.log(sixth([new Date(2013, 0, 1), new Date(2012, 11, 15), new Date(2022, 10, 9)])) */

/*---------------------------------------------------------------------------------*/

/* function curry(func) {
    return function curried(...args) {
        if (args.length >= func.length) {
          return func.apply(this, args);
        } else {
          return function(...args2) {
            return curried.apply(this, args.concat(args2));
          }
        }
      };
}

function seventh(a, b) {
    return a + b;
}
seventh = curry(seventh)

console.log(seventh(2, 1));
console.log(seventh(2)(1)); */

/*---------------------------------------------------------------------------------*/