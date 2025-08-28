class Post extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
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
    this.querySelector("#post-image").src = this.getAttribute("img1") || "../media/placeholder.webp";
    this.querySelector("#post-pfp").src = this.getAttribute("img2") || "../media/placeholder.webp";
    this.querySelector("a").textContent = `@${this.getAttribute("username")}` || "Username";
  }
}

customElements.define("user-post", Post);