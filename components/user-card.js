const template = document.createElement('template');
template.innerHTML = `
  <style>
   :host {
     display: flex;
     align-items: center;
     width: 450px;
     height: 180px;
     background-color: #d4d4d4;
     border: 1px solid #d5d5d5;
     box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
     border-radius: 3px;
     overflow: hidden;
     padding: 10px;
     box-sizing: border-box;
     font-family: 'Poppins', sans-serif;
   }
   .image {
     flex: 0 0 auto;
     width: 160px;
     height: 160px;
     vertical-align: middle;
     border-radius: 5px;
   }
   .container {
     box-sizing: border-box;
     padding: 20px;
     height: 160px;
   }
   .container > .name {
     font-size: 20px;
     font-weight: 600;
     line-height: 1;
     margin: 0;
     margin-bottom: 5px;
   }
   .container > .email {
     font-size: 12px;
     opacity: 0.75;
     line-height: 1;
     margin: 0;
     margin-bottom: 15px;
   }
   .container > .button {
     padding: 10px 25px;
     font-size: 12px;
     border-radius: 5px;
     text-transform: uppercase;
   }
  </style>
  
  <img class="image" src="https://semantic-ui.com/images/avatar2/large/kristy.png">
  <div class="container">
    <p class="name">User Name</p>
    <p class="email">yourmail@some-email.com</p>
    <button class="button">Follow John</button>
  </div>
`

class UserCard extends HTMLElement {
  constructor() {
    super();
    var shadow = this.attachShadow( { mode: 'closed' } ); //这部分DOM是否与外部DOM隔离，open表示不隔离，closed表示 Shadow DOM 是封闭的，不允许外部访问。
    var content = template.content.cloneNode(true); //使用一个template元素来克隆 DOM，而不是innerHTML设置shadow. 该技术降低了 HTML 解析成本，因为模板的内容仅解析一次，而调用innerHTML则会shadow解析每个实例的 HTML
    shadow.appendChild(content);
  }
}

window.customElements.define('user-card', UserCard); // 浏览器原生,浏览器<user-card>元素与这个类关联