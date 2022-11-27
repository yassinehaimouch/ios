const result = document.getElementById('res');

const Clear = () => {
  result.value = "";
};

const display = item => {
  result.value += item;
};

const equal = item => {
  try{
    result.value = eval(result.value);
  }
  catch{
    result.value = "error"
  }
};



// console.log(result);