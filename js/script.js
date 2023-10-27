const { createApp } = Vue;

const miaApp = createApp({
    data(){
        return{
            title: '<h1>Hello Vue!</h1>',
            immagine: "https://c4.wallpaperflare.com/wallpaper/1020/1/213/world-of-warcraft-battle-for-azeroth-video-games-warcraft-alliance-wallpaper-thumb.jpg"
        }
    }
}).mount('#app');



