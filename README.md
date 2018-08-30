# proto-dashboard

> A dashboard for updating your device settings using the particle API,
VueJS and Onsen UI.
* Particle: https://docs.particle.io/guide/how-to-build-a-product/web-app/
* Vue : https://vuejs.org
* Onsen UI: https://onsen.io/v2/guide/vue/

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

### How to use this project

> You can use this project to update your settings for your device in the particle cloud.
> This project makes use of Vuex as a state manager. This can all be found in the store folder.
> The flow goes as followed: dispatch an action to the store, the action will commit a mutation which updates the state.
> The UI components will then listen to updates in the state by using getters.
> You can check the Vuex documentation for more information: https://vuex.vuejs.org/

> Obviously you will have different settings than my device. The device sends back a csv string. 
> We combine this string into an array of objects with settings and values in the store.
> You can change this array of setting names in the /store directory.
> Data models for the different UI elements can also be found in the /settings folder.

> Different UI elements are rendered based on the settingname.
> The settingnames are used in the Dashboard.vue file in the /components directory.
> Change these names to be equal to the names in your settings array in the /store directory.

> The UI elements from Onsen UI are imported in the main.js file.
> If you require other Onsen UI components you can import them here. 
> You'll then be able to use them throughout the project.

#### TODO's

> The select element in the dropdown on the Dashboard page needs some work.
> The state does not always seem to be in sync with the UI.
> Creating the UI elements in a separate node package so they can just be called and passed
> a type parameter for the UI type and be passed props.
