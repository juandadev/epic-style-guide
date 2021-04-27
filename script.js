const disabledButtons = document.getElementsByClassName("buttons--disabled");
const disabledInputs = document.getElementsByClassName("inputs--disabled");
const badges = document.getElementsByClassName("badge");
const alerts = document.getElementsByClassName("alert");
const alertCloseBtns = document.getElementsByClassName("alerts__close");
const resetAlertsBtn = document.getElementById("resetAlerts");
const tooltips = document.getElementsByClassName("tooltip");

window.addEventListener("load", () => {
  document
    .getElementById("demoBtn")
    .addEventListener("click", () => (window.location.href = "./demo.html"));

  Array(...disabledButtons).forEach((item) =>
    item.addEventListener("click", (e) => e.preventDefault)
  );
  Array(...disabledInputs).forEach((item) =>
    item.addEventListener("click", (e) => (e.target.disabled = true))
  );
  Array(...alertCloseBtns).forEach((item) =>
    item.addEventListener("click", () =>
      item.parentElement.classList.add("closeAlert")
    )
  );
  resetAlertsBtn.addEventListener("click", () => {
    Array(...alertCloseBtns).forEach((item) =>
      item.parentElement.classList.remove("closeAlert")
    );
  });
});
