/*
 *Create a CustomConsole class with following methods:
 *log function that takes user arguments and returns them as a string,
 *history function that takes an optional range as an argument,
 *clearHistory function to remove the history memory.
 *The log function has no limit of arguments.
 */

class Console {
  constructor(name) {
    this.name = name;
    this.historyList = [];
  }
  log(value, ...userArgs) {
    const name = this.name;
    const historyList = this.historyList;

    if (userArgs.length === 0) {
      historyList.push(`${name}: ${JSON.stringify(value)}`);
      return `${name}: ${JSON.stringify(value)}`;
    } else {
      historyList.push(`${JSON.stringify(userArgs)}`);
      return `${value} ${JSON.stringify(userArgs)}`;
    }
  }
  history() {
    return this.historyList;
  }
  clearHistory() {
    this.historyList = "";
    return true;
  }
}
const myConsole = new Console("Regular");
const fancyConsole = new Console("Fancy");
console.log(myConsole.log([0, 1, 2, 3])); // "Regular: [0,1,2,3]"
console.log(fancyConsole.log({ a: 1, b: 2 })); // "Fancy: {a:1, b:2}"
console.log(myConsole.log("ok : ", 1, 2, 3)); // ➞ "ok : 1, 2, 3"
console.log(myConsole.clearHistory()); // true
console.log(myConsole.history()); //
