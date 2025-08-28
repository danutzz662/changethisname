class Post extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
      <style>
        .content-card {
          height: 300px;
          width: auto;
          position: relative;
          scroll-snap-align: start;
        }
        .content-card>img:first-child {
          object-fit: fill;
          height: 300px;
          width: auto;
          border-radius: 4px;
        }
        .card-info {
          height: 22px;
          display: flex;
          align-items: center;
          flex-direction: row;
          flex-wrap: nowrap;
          position: absolute;
          bottom: 0px;
          right: 0px;
          left: 0px;
          padding: 5px;
          background-color: var(--bg-light);
          border-top: 3px solid var(--border);
          gap: 5px;
          border-bottom-left-radius: 4px;
          border-bottom-right-radius: 4px;
        }
        .card-info img {
          border-radius: 50%;
        }
        .card-info a {
          text-decoration: none;
          color: var(--text);
          font-weight: 400;
          font-size: 12px;
          margin: 0;
          padding: 0;
        }
        .card-info a:hover {
          cursor: pointer;
          color: var(--text-muted);
        }
      </style>
      <div class="content-card">
        <img id="post-image" width="300px" height="300px" loading="lazy" alt="Post"/>
        <div class="card-info">
          <img id="post-pfp" width="30px" height="30px" alt="Profile picture"/>
          <a href="#"></a>
        </div>
      </div>
    `;
  }
  connectedCallback() {
    this.shadowRoot.querySelector("#post-image").src = this.getAttribute("img1") || "";
    this.shadowRoot.querySelector("#post-pfp").src = this.getAttribute("img2") || "";
    this.shadowRoot.querySelector("a").textContent = `@${this.getAttribute("username")}` || "";
  }
}

customElements.define("Post", Post);