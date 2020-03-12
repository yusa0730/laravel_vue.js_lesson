import Vue from 'vue'
import App from './components/page/Home'
import SocialSharing from 'vue-social-sharing';

Vue.use(SocialSharing);
new Vue({
    el: 'app', // 「el」はアプリケーションを紐付ける要素のセレクタです
    components: {
        app: App //使用するコンポーネントの名称と使うコンポーネントを指定します（app:名称, App(./components/Home)使うコンポーネント）を指定します
    }
})
