function setTheme(theme) {
  let bgColor, textColor, primaryColor;

  switch (theme) {
    case "light":
      bgColor = "#ffffff";
      textColor = "#000000";
      primaryColor = "#EF476F";
      break;

    case "dark":
      bgColor = "#000000";
      textColor = "#ffffff";
      primaryColor = "#FFC107";
      break;

    default:
      bgColor = "#ffffff";
      textColor = "#000000";
      break;
  }

  document
    .querySelector("html")
    .style.setProperty("--background-color", bgColor);
  document.querySelector("html").style.setProperty("--text-color", textColor);
  document
    .querySelector("html")
    .style.setProperty("--primary-color", primaryColor);
}

window.addEventListener("load", () => {
  document
    .querySelector("#light")
    .addEventListener("click", () => setTheme("light"));
  document
    .querySelector("#dark")
    .addEventListener("click", () => setTheme("dark"));
});
