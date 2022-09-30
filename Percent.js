document.getElementById("calc1-submit")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const numX = document.getElementById("calc1-num-x").value;
    const numY = document.getElementById("calc1-num-y").value;
    const percentage = (numX / numY) * 100;
    document.getElementById("calc1-solution").value = percentage;
});
