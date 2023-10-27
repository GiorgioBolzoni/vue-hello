const { createApp } = Vue;

const miaApp = createApp({
    data(){
        return{
            title: '<h1>Hello Vue!</h1>'
        }
    }
}).mount('#app');