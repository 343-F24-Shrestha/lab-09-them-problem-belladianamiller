///////////////////////////////////////////////////////////////////////////////
// you shouldn't need to edit this first little bit
function toggleLoader(subject) {
  document.getElementById(`${subject}-loader`).classList.toggle('hidden')
}

function noCommaToTheTop(s) {
  return s.replaceAll("'", '')
}

function updateRadio(options) {
  const form = document.getElementById('just-bc')
  form.innerHTML = ''
  let yous = ''
  for (let opt of options) {
    yous += `<label for="${noCommaToTheTop(opt)}"><input type="radio" name="you" id="${noCommaToTheTop(opt)}">${opt}</label>`
  }
  form.innerHTML = yous
}

// this ends the little bit you shoudln't need to edit.
///////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////
// below is code that you may need to edit


function getYous() {
  return ["poppin'", "packin'"]
}

function getThey(you) {
  const options = {
    "poppin'": "stoppin'",
    "packin'": "lackin'",
  }
  let result = null;
  if (options[you]) {
    result = options[you]
  }
  return result;
}


function init(ev) {

  // FIXME: notice above that getYous just returns a literal.
  // you should update the code below to instead call getOptions.
  // getOptions expects no arguments, and returns a promise that resolves to an array of strings.
  const options = getYous()
  updateRadio(options)

  document.querySelectorAll("input[type='radio']").forEach((input) => {
    input.addEventListener('change', changed);
  });
}

function changed(ev) {
  console.debug('fyi, this is what a change event looks like', ev)
  const you = ev.target.parentElement.textContent

  // FIXME: notice above that getThemProblem just returns a literal.
  // you should update the code below to instead call getThemProblem.
  // getThemProblem expects a string parameter (the only valid strings are those returned by getOptions), and returns a promise that resolves to a string.
  const they = getThey(you)
  const output = document.getElementById('they')
  output.textContent = they
}

document.addEventListener("DOMContentLoaded", init);
