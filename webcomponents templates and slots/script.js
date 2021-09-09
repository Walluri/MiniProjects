class MyComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    const templateElement = document.getElementById("id-template");
    const templateContent = templateElement.content;

    const parentNode = templateContent.cloneNode(true);
    this.shadowRoot.appendChild(parentNode);
  }
  connectedCallback() {}
}

customElements.define("my-comp", MyComponent);
