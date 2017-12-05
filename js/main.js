var navBar = {
    props: ['value', 'name', 'current'],
    template: '<button @click="changeNav">{{name}}:{{current}}</button>',
    methods: {
        changeNav: function() {
                this.$emit("event-change-view", this.value);
                console.log('click ' + this.value);
        }
    }
};

var contentBox = {
    props: ['current'],
    template: '<component v-bind:is="current"></component>',
    components: {
        home: { template: '<p>Первая страница</p>' },
        profile: { template: '<p>Вторая страница</p>'  },
        settings: { template: '<p>Третья страница</p>' },
    }
};

var viewBox = {
    template: '<div>' +
    '<div id="header">' +
    '<h1>{{ title }}</h1>' +
    '<nav-bar ' +
    'v-for="(name, value) in views" ' +
    ':value = "value" ' +
    ':name = "name" ' +
    ':current = "currentView" ' +
    '@event-change-view = "changeView">' +
    '</nav-bar>' +
    '</div>' +
    '<content-box :current = "currentView"></content-box>' +
    '</div>',

    data:  function() { return {
        title: 'Название сайта',
        views: {
            home: 'Главная',
            profile: 'Профиль',
            settings: 'Настройки'
        },
        currentView: 'home'
    }},

    components: {
        'nav-bar': navBar,
        'content-box': contentBox
    },

    methods: {
        changeView: function(value) {
            this.currentView = value;
            console.log('emit ' + value);
        }
    }
};



var demo = new Vue({

    el: '#demo',

    components: {
        'view-box': viewBox
    }
});

