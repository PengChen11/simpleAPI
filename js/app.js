// import Typewriter from 'typewriter-effect/dist/core';

var app = document.getElementById('type_writer');
console.log(app);

var typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  // .pauseFor(500)
  .typeString('a web developer.')
  .pauseFor(2000)
  .deleteAll('natural')
  .typeString('an Army Veteran.')
  .pauseFor(2000)
  .deleteAll('natural')
  .typeString('a husband and father.')
  .pauseFor(2000)
  .start();