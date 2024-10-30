///////////////////////////////////////////////////////////////////////////////
// you are welcome to view this file, but you shouldn't need to edit it
///////////////////////////////////////////////////////////////////////////////
function getOptions() {
  
  const options = {
    "poppin'": "stoppin'",
    "packin'": "lackin'",
    "great": "late",
    "happy": "crappy",
    "glad": "mad",
    "thrivin'": "sad",
  }

  const result = new Promise((resolve, reject) => {
    setTimeout(()=>{
      resolve(Object.keys(options));
    }, 2000 + Math.random() * 3000)
  });
  return result;
}

function getThemProblem(you) {
  const options = {
    "poppin'": "stoppin'",
    "packin'": "lackin'",
    "great": "late",
    "happy": "crappy",
    "glad": "mad",
    "thrivin'": "sad",
  }

  const result = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(options[you]);
    }, 2000 + Math.random() * 3000)
  });
  return result;

}
