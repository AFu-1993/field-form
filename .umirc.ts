// more config: https://d.umijs.org/config
import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'rc-field-form',
  favicon:
    'https://avatars0.githubusercontent.com/u/9441414?s=200&v=4',
  logo:
    'https://avatars0.githubusercontent.com/u/9441414?s=200&v=4',
  outputPath: '.doc',
  exportStatic: {},
  scripts: [{
    content: `
      (function () {
        var timer = setInterval(function() {
          try {
            var menuList = document.getElementsByClassName('__dumi-default-menu-list');
            menuList[0].childNodes[0].childNodes[0].innerText = 'rc-field-form';
            clearInterval(timer);
          } catch (e) {}
        }, 200)
      })();
    `
  }]
});
