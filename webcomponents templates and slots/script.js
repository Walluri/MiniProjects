class MyComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    const templateElement = document.getElementById("id-template");
    const templateContent = templateElement.content;

    //<span slot='name-slot'>new Text</span>
    const spanText = document.createElement("span");
    spanText.setAttribute("slot", "name-slot");
    const inputText = document.createElement("span");
    inputText.textContent = this.getAttribute("fieldValue");
    spanText.appendChild(inputText);

    const parentNode = templateContent.cloneNode(true);
    this.shadowRoot.appendChild(parentNode);
    this.appendChild(spanText);
  }
  connectedCallback() {}
}

customElements.define("my-comp", MyComponent);
