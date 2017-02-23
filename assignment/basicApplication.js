/* ================================
Week 6 Assignment: Basic Application

Take a look at the midterm prototype: https://marvelapp.com/bf2c9h/screen/10434841
Try clicking on the "Next" and "Previous" buttons. This task will ask you to write some functions
that will enable us to write an application like in the midterm.

Write three functions: clickNextButton, clickPreviousButton, and saySlideName.
clickNextButton and clickPreviousButtons should simulate what will happen when someone clicks
on a next or previous button in your application.

You don't need to create HTML buttons or a useable application—this exercise is asking you to create
functions that will be used in your application. To test it out, try calling the functions in your
console. For example, try running: clickNextButton() and see what it does. Use lots of console logs!
================================ */

var state = {
  "slidestate.slideNumberber": 0, // slidestate.slideNumberber keeps track of what slide you are on. It should increase when you
                    // click the next button and decrease when you click the previous button. It
                    // should never get so large that it is bigger than the dataset. It should never
                    // get so small that it is smaller than 0.
  "slideData": [
    {
      "name": "Leaflet",
      "language": "Javascript",
      "namespace": "L"
    },
    {
      "name": "Underscore",
      "language": "Javascript",
      "namespace": "_"
    },
    {
      "name": "jQuery",
      "language": "Javascript",
      "namespace": "$"
    }
  ]
};
var checkSlide = function () {
  if (state.slideNumber === state.slideData.length){
    state.slideNumber -= 1;
  } else if ( state.slideNumber === 0){
    state.slideNumber += 1;
  }
};
var clickNextButton = function() {
  state.slidestate.slideNumberber += 1;
  checkSlide();
  console.log(state.slideData[state.slidestate.slideNumberber - 1]);
  console.log(state.slidestate.slideNumber);
};

var clickPreviousButton = function() {
  state.slidestate.slideNumberber -= 1;
  checkSlide();
  console.log(state.slideData[state.slidestate.slideNumberber - 1 ]);
};

var saySlideName = function(slide) {
  console.log(state.slidestate.slideNumber);
  // saySlideName uses console.log to "say" the name of the slide it is given. It should run when
  // someone clicks on one of the buttons.
};
