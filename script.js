const dpFeatures = document.getElementById("dp-features");
const dpCompany = document.getElementById("dp-company");
const features = document.getElementById("features");
const company = document.getElementById("company");

function handleClick(event) {
  const featuresEle = event.target.parentElement.children[0];
  const companyEle = event.target.parentElement.children[1];

  // features
  if (event.target.getAttribute("id") == featuresEle.getAttribute("id")) {
    if (!company.matches(".hidden")) {
      company.classList.toggle("hidden");
      dpCompany.childNodes[1].style.rotate = "";
      dpCompany.style.color = "";
    }

    dpFeatures.childNodes[1].style.rotate = "180deg";
    dpFeatures.style.color = "hsl(0, 0%, 8%)";

    if (!features.matches(".hidden")) {
      dpFeatures.childNodes[1].style.rotate = "";
      dpFeatures.style.color = "";
    }
    features.classList.toggle("hidden");

    // company
  } else if (event.target.getAttribute("id") == companyEle.getAttribute("id")) {
    if (!features.matches(".hidden")) {
      features.classList.toggle("hidden");
      dpFeatures.childNodes[1].style.rotate = "";
      dpFeatures.style.color = "";
    }

    dpCompany.childNodes[1].style.rotate = "180deg";
    dpCompany.style.color = "hsl(0, 0%, 8%)";

    if (!company.matches(".hidden")) {
      dpCompany.childNodes[1].style.rotate = "";
      dpCompany.style.color = "";
    }
    company.classList.toggle("hidden");
  }
}

dpFeatures.addEventListener("click", handleClick);
dpCompany.addEventListener("click", handleClick);
