import Vue from 'vue'
import App from './App.vue'
import {Input,Button,FormItem,Form,Link,Menu,MenuItem,Submenu,Carousel,CarouselItem,Card,Row,Col,Divider} from 'element-ui'
Vue.config.productionTip = false
Vue.component(Input.name,Input)
Vue.component(Button.name,Button)
Vue.component(FormItem.name,FormItem)
Vue.component(Form.name,Form)
Vue.component(Link.name,Link)
Vue.component(Menu.name,Menu)
Vue.component(MenuItem.name,MenuItem)
Vue.component(Submenu.name,Submenu)
Vue.component(Carousel.name,Carousel)
Vue.component(CarouselItem.name,CarouselItem)
Vue.component(Card.name,Card)
Vue.component(Row.name,Row)
Vue.component(Col.name,Col)
Vue.component(Divider.name,Divider)
new Vue({
  render: h => h(App),
}).$mount('#app')
