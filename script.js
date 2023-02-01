const dropdown = document.getElementById("dropdown");

const dpFeatures = document.getElementById("dp-features");
const dpCompany = document.getElementById("dp-company");
const features = document.getElementById("features");
const company = document.getElementById("company");

function handleClick(event) {
  const featuresEle = event.target.parentElement.children[0];
  const companyEle = event.target.parentElement.children[1];

  if (event.target.getAttribute("id") == featuresEle.getAttribute("id")) {
    if (!company.matches(".hidden")) {
      company.classList.toggle("hidden");
    }

    dropdown.childNodes[1].children[0].style.rotate = "180deg";
    features.classList.toggle("hidden");
  } else if (event.target.getAttribute("id") == companyEle.getAttribute("id")) {
    if (!features.matches(".hidden")) {
      features.classList.toggle("hidden");
    }

    company.classList.toggle("hidden");
  }
}

dpFeatures.addEventListener("click", handleClick);
dpCompany.addEventListener("click", handleClick);
