function likes(names) {
    if(names.length === 0) {
        return "no one likes this";
    } else if(names.length === 1) {
        return `${names[0]} likes this`;
    } else if(names.length === 2) {
        return `${names[0]} and ${names[1]} like this`;
    } else if(names.length === 3) {
        return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    } else {
        return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
    }
  }

  // Test cases
console.log(likes([]));
console.log(likes(["Peter"]));
console.log(likes(["Jacob", "Alex"]));
console.log(likes(["Max", "John", "Mark"]));
console.log(likes(["Alex", "Jacob", "Mark", "Max"]));
console.log(likes(["Alex", "Jacob", "Mark", "Max", "John"]));
console.log(likes(["Alex", "Jacob", "Mark", "Max", "John", "Jane"]));
