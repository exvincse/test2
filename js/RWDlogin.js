const eminput = document.querySelector(".e-input");
const error = document.querySelector(".error");
eminput.addEventListener("blur", val);

function val() {
  let emailtest = document.querySelector(".e-input").value;
  if (emailtest.search(/^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/) !== -1) {
    error.innerHTML = " ";
  } else {
    error.innerHTML = "email格式輸入錯誤";
  }
}
