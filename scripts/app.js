console.log("scripts loaded");

const app = Vue.createApp({
    data() {
        return {
            greeting: 'Welcome to Vue.js!',
            message: 'This message is displayed based on a boolean property.',     
            showMessage: false     
        }
    }
});
app.mount('#app');