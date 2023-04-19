process.stdout.write('hello from spinner1.js... \rheyyy\n');
setTimeout(() => {
  process.stdout.write('\r|Hello');
}, 100);

setTimeout(() => {
  process.stdout.write('\r/Hii');
}, 300);

setTimeout(() => {
  process.stdout.write('\r-Holla');
}, 500);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r\\Hello from spinner1.js...\rHello\n');
}, 700);
setTimeout(() => {
  process.stdout.write('\r\\Hello from spinner1.js...\rHii\n');
}, 1000);
setTimeout(() => {
  process.stdout.write('\r\\Hello from spinner1.js...\rHolla\n');
}, 1300);


