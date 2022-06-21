let app = Vue.createApp({
    data: function() {
        return{
            greeting: 'Hello Vue 3!',
            isVisible: true,
            isVisible2: true
        }
    }
})
app.mount('#app')