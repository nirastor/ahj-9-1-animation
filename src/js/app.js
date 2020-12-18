import SlideDown from './slidedown';
import CallbackChat from './callbackchat';
import LikeButton from './likebutton';

class App {
  constructor() {
    this.appEl = document.querySelector('.app');
    this.colEl = null;
  }

  init() {
    this.colEl = document.createElement('div');
    this.colEl.classList.add('column');
    this.appEl.appendChild(this.colEl);

    this.slideDown = new SlideDown(this.colEl);
    this.slideDown.init();

    this.callBackChat = new CallbackChat(this.colEl);
    this.callBackChat.init();

    this.likeButton = new LikeButton(this.colEl);
    this.likeButton.init();
  }
}

const app = new App();
app.init();
