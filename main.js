function toggleLoader(subject) {
  document.getElementById(`${subject}-loader`).classList.toggle('hidden');
}

function noCommaToTheTop(s) {
  return s.replaceAll("'", '');
}

function updateRadio(options) {
  const form = document.getElementById('just-bc');
  form.innerHTML = '';
  let yous = '';
  for (let opt of options) {
    yous += `<label for="${noCommaToTheTop(opt)}"><input type="radio" name="you" id="${noCommaToTheTop(opt)}">${opt}</label>`;
  }
  form.innerHTML = yous;
}

function getYous() {
  return ["poppin'", "packin'"];
}

function getThey(you) {
  const options = {
    "poppin'": "stoppin'",
    "packin'": "lackin'",
  };
  let result = null;
  if (options[you]) {
    result = options[you];
  }
  return result;
}

async function init(ev) {
  try {
    toggleLoader('you');

    const options = await getOptions();
    updateRadio(options);

    toggleLoader('you');

    document.querySelectorAll("input[type='radio']").forEach((input) => {
      input.addEventListener('change', changed);
    });
  } catch (error) {
    console.error('Error loading options:', error);
  }
}

async function changed(ev) {
  try {
    console.debug('fyi, this is what a change event looks like', ev);
    const you = ev.target.parentElement.textContent;

    toggleLoader('they');

    const they = await getThemProblem(you);

    toggleLoader('they');

    const output = document.getElementById('they');
    output.textContent = they;
  } catch (error) {
    console.error('Error loading "they" state:', error);
  }
}
document.addEventListener("DOMContentLoaded", init);