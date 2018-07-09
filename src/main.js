// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './App'
// import 'onsenui/dist/css/onsenui.css';
// import 'onsenui/dist/css/onsen-css-components.css';
// import 'onsenui';


// import Vue from 'vue';
import VueOnsen from 'vue-onsenui/esm';
import VOnsPage from 'vue-onsenui/esm/components/VOnsPage';
import VOnsInput from 'vue-onsenui/esm/components/VOnsInput';
import VOnsCard from'vue-onsenui/esm/components/VOnsCard';
import VOnsButton from'vue-onsenui/esm/components/VOnsButton';
import VOnsListHeader from'vue-onsenui/esm/components/VOnsListHeader';
import VOnsListItem from'vue-onsenui/esm/components/VOnsListItem';
import VOnsListTitle from'vue-onsenui/esm/components/VOnsListTitle';
import VOnsLazyRepeat from 'vue-onsenui/esm/components/VOnsLazyRepeat';
import VOnsNavigator from 'vue-onsenui/esm/components/VOnsNavigator';
import VOnsToolbar from 'vue-onsenui/esm/components/VOnsToolbar';
import VOnsIcon from 'vue-onsenui/esm/components/VOnsIcon';
import VOnsCheckbox from 'vue-onsenui/esm/components/VOnsCheckbox';
import VOnsRange from 'vue-onsenui/esm/components/VOnsRange';
import VOnsSwitch from 'vue-onsenui/esm/components/VOnsSwitch';
import VOnsSelect from 'vue-onsenui/esm/components/VOnsSelect';

Vue.use(VueOnsen);
Vue.component(VOnsPage.name, VOnsPage);
Vue.component(VOnsCard.name, VOnsCard);
Vue.component(VOnsListHeader.name, VOnsListHeader);
Vue.component(VOnsButton.name, VOnsButton);
Vue.component(VOnsListItem.name, VOnsListItem);
Vue.component(VOnsListTitle.name, VOnsListTitle);
Vue.component(VOnsInput.name, VOnsInput);
Vue.component(VOnsLazyRepeat.name, VOnsLazyRepeat);
Vue.component(VOnsNavigator.name, VOnsNavigator);
Vue.component(VOnsToolbar.name, VOnsToolbar);
Vue.component(VOnsIcon.name, VOnsIcon);
Vue.component(VOnsCheckbox.name, VOnsCheckbox);
Vue.component(VOnsRange.name, VOnsRange);
Vue.component(VOnsSwitch.name, VOnsSwitch);
Vue.component(VOnsSelect.name, VOnsSelect);

// import VueOnsen
// import VueOnsen from 'vue-onsenui';
//
// Vue.use(VueOnsen);

// import store and router and inject them in the root instance
// they can now be accessed with $store and $router
import router from './router'
// TRY FOR ONSEN NAVIGATOR
// import  store from './store/store';
import  {store} from './store/store';

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
