var navBar = {
    props: ['value', 'name'],
    template: '<button valeu="{{value}}"  @click="changeView">{{name}}</button>',
    methods: {
        changeView: function() {
            this.$parent.currentView = this.value;
        }
    }
};

var contentBox = {
    template: '<component v-bind:is="this.$parent.currentView"></component>',
    components: {
        home: { template: '<p>Первая страница</p>' },
        profile: { template: '<p>Вторая страница</p>'  },
        settings: { template: '<p>Третья страница</p>' },
    }
};



var demo = new Vue({

    el: '#demo',

    data: {
        title: 'Название сайта',
        views : {
            home: 'Главная',
            profile: 'Профиль',
            settings: 'Настройки'
        },
        currentView: 'home'
    },

    components: {
        'nav-bar': navBar,
        'content-box': contentBox
    }

});

