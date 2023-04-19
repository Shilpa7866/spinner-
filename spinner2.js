

process.stdout.write('hello from spinner2.js... \rheyyy\n');
let index = 100;

let spinArr = ['\rhello\n   ','\rhii\n/   ','\rholla\n   ','\r\\   ','\r-   ','\r/   ','\r|\n   '];

for (const spin of spinArr){
  setTimeout(() => {
    process.stdout.write(spin);
  }, index);

  index += 300;
};
