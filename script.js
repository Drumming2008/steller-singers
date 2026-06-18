// make hamburger menu open/close

document.getElementById("hamburger-button").onclick = () => {
  document.getElementById("hamburger").classList.toggle("open")
}

// create links to each section
for (let i of [...document.querySelectorAll("h2")].reverse()) {
  let li = document.createElement("li")
  li.innerHTML = `
    <a href="#${i.parentElement.id}">${i.innerText}</a>
  `
  document.querySelector("#hamburger > ul").prepend(li)
}

// make hamburger links animate fancily
for (let i of document.querySelectorAll("#hamburger a")) {
  let newLink = i.cloneNode(true)
  newLink.classList.add("hamburger-link-overlay")
  newLink.setAttribute("aria-hidden", true)
  newLink.style.pointerEvents = "none"
  newLink.tabIndex = "-1"
  i.after(newLink)

  i.onmouseenter = i.onfocus = () => {
    i.style.setProperty("--rotation-modifier", [-1, 1][Math.floor(Math.random() * 2)])
  }
}

// custom element for steller logo
class StellerIcon extends HTMLElement {
  static get observedAttributes() {
    return ["src"]
  }

  constructor() {
    super()
  }

  connectedCallback() {
    this.updateMask()
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name == "src" && oldValue !== newValue) {
      this.updateMask()
    }
  }

  updateMask() {
    let src = this.getAttribute("src")
    if (!src) return
    this.style.maskImage = `url("${src}")`
    this.style.webkitMaskImage = `url("${src}")`
  }
}

customElements.define("steller-icon", StellerIcon)

// create bios
fetch("./data/bios.txt").then(r => {
  if (r.ok) return r.text()
}).then(text => {
  let bios = text.split("===\n")
  for (let i of bios) {
    let data = i.split("\n")
    /*
      0: name
      1: image
      2: bio
    */
    let bioWrapper = document.createElement("div")
    bioWrapper.classList.add("bio-wrapper")
    bioWrapper.innerHTML = `
      <h3>${data[0]}</h3>
      <img src="./data/member_images/${data[1]}">
      <p>${data[2]}</p>
    `
    document.getElementById("members").append(bioWrapper)
  }
})
