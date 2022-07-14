webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'app',
  data() {
    return {
      color: 'primary',
      slide: 'left',
      navLinks: [{ name: 'itens', target: '/itens', icon: 'ico-chest' }, { name: 'magias', target: '/spells', icon: 'ico-crystal' }, { name: 'home', target: '/', icon: 'ico-castle' }]
    };
  }
});

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'home',
  data() {
    return {
      title: 'Home',
      gold: '',
      silver: '',
      copper: '',
      goldTotal: 0,
      silverTotal: 0,
      copperTotal: 0,
      showWeapons: false,
      showArmors: false,
      showSpells: false
    };
  },

  watch: {
    money() {
      this.convert();
    }
  },

  methods: {
    convert() {
      let copperTotal = parseInt(this.money);

      this.goldTotal = 0;
      this.silverTotal = 0;

      if (copperTotal >= 100) {
        this.goldTotal = parseInt(copperTotal / 100);
        copperTotal = copperTotal % 100;
      }

      if (copperTotal >= 10 && copperTotal < 100) {
        this.silverTotal = parseInt(copperTotal / 10);
        copperTotal = copperTotal % 10;
      }

      this.copperTotal = copperTotal;
    }
  },

  computed: {
    money() {
      let gold = parseInt(this.gold) * 100 || 0;
      let silver = parseInt(this.silver) * 10 || 0;
      let copper = parseInt(this.copper) || 0;
      return copper + silver + gold;
    },

    favoriteWeapons() {
      let list = JSON.parse(localStorage.getItem('weaponsList')) || [];
      return list.filter(item => item.favorite);
    },

    favoriteArmors() {
      let list = JSON.parse(localStorage.getItem('armorsList')) || [];
      return list.filter(item => item.favorite);
    },

    favoriteSpells() {
      let spells = JSON.parse(localStorage.getItem('spellList')) || [];
      return spells.filter(spell => spell.favorite);
    }
  }
});

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__spells_SpellFilter__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__spells_SpellList__ = __webpack_require__(56);
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'spells',
  components: {
    SpellFilter: __WEBPACK_IMPORTED_MODULE_0__spells_SpellFilter__["a" /* default */],
    SpellList: __WEBPACK_IMPORTED_MODULE_1__spells_SpellList__["a" /* default */]
  },
  data() {
    return {
      filter: {
        name: '',
        level: '',
        school: '',
        class: '',
        order: '',
        onlyFavorites: false
      },
      show: false
    };
  },
  methods: {
    doFilter(filter) {
      this.filter = filter;
    },

    doFilterClass(classs) {
      this.filter.class = classs;
    }
  }
});

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_debounce__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_debounce___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_debounce__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'SpellFilter',
  props: ['filter'],
  data() {
    return {
      name: '',
      showFilters: false,
      levels: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
      classes: ['Bárbaro', 'Bardo', 'Bruxo', 'Clérigo', 'Druida', 'Feiticeiro', 'Guerreiro', 'Ladino', 'Mago', 'Monge', 'Paladino', 'Patrulheiro'],
      schools: ['Abjuração', 'Adivinhação', 'Conjuração', 'Encantamento', 'Evocação', 'Ilusão', 'Necromancia', 'Transmutação'],
      orders: [{
        slug: 'nasc',
        icon: 'arrow_upward',
        text: 'Nome'
      }, {
        slug: 'ndesc',
        icon: 'arrow_downward',
        text: 'Nome'
      }, {
        slug: 'lasc',
        icon: 'arrow_upward',
        text: 'Nível'
      }, {
        slug: 'ldesc',
        icon: 'arrow_downward',
        text: 'Nível'
      }]
    };
  },

  watch: {
    name() {
      this.debouncedGetName();
    }
  },

  created() {
    this.debouncedGetName = __WEBPACK_IMPORTED_MODULE_0_lodash_debounce___default()(this.getName, 300);
  },

  methods: {
    getName() {
      this.filter.name = this.name;
    }
  }
});

/***/ }),
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Spell__ = __webpack_require__(59);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'SpellList',
  props: ['filter'],
  components: {
    Spell: __WEBPACK_IMPORTED_MODULE_0__Spell__["a" /* default */]
  },
  data() {
    return {
      pagination: {
        currentPage: 1,
        perPage: 12
      },
      spells: [],
      favoriteSpells: [],
      loadingSpells: false
    };
  },

  watch: {
    'pagination.currentPage'() {
      this.$vuetify.goTo('#spells__list', {
        duration: 300,
        offset: -100,
        easing: 'easeInOutCubic'
      });
    }
  },

  methods: {
    orderList(list, order) {
      switch (order) {
        case 'lasc':
          return list.sort((a, b) => a.level.localeCompare(b.level));
        case 'ldesc':
          return list.sort((a, b) => b.level.localeCompare(a.level));
        case 'ndesc':
          return list.sort((a, b) => b.name.toLowerCase().localeCompare(a.name.toLowerCase()));
        default:
          return list.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
      }
    },

    isEmpty(value) {
      return !value || value === '';
    },

    doFilterClass(value) {
      this.filter.class = value;
      this.$emit('filterClass', value);
    },

    doFavorite(spell) {
      const pos = this.spells.findIndex(e => e.id === spell.id);
      this.spells[pos].favorite = !this.spells[pos].favorite;
      localStorage.setItem('spellList', JSON.stringify(this.spells));
    },

    setPage(n) {
      this.pagination.currentPage = n;
    },

    getSpells() {
      this.loadingSpells = true;
      setTimeout(() => {
        let spells = localStorage.getItem('spellList') || '';
        if (spells) {
          this.spells = JSON.parse(localStorage.getItem('spellList'));
          this.loadingSpells = false;
        }
      }, 500);
    }
  },

  mounted() {
    this.getSpells();
    this.favoriteSpells = JSON.parse(localStorage.getItem('favoriteSpells')) || [];
  },

  computed: {
    noResults() {
      return this.numOfPages < 1 && !this.loadingSpells;
    },

    filteredList() {
      this.setPage(1);
      let list = this.filter.onlyFavorites ? this.spells.filter(item => item.favorite) : this.spells;

      if (!this.isEmpty(this.filter.name)) {
        list = this.spells.filter(item => item.name.toLowerCase().includes(this.filter.name.toLowerCase()) || item.name_en.toLowerCase().includes(this.filter.name.toLowerCase()));
      }

      if (!this.isEmpty(this.filter.class)) {
        list = list.filter(item => item.classes.find(i => i.toLowerCase() === this.filter.class.toLowerCase()));
      }

      if (!this.isEmpty(this.filter.level)) {
        list = list.filter(item => item.level === this.filter.level);
      }

      if (!this.isEmpty(this.filter.school)) {
        list = list.filter(item => item.school.pt.toLowerCase() === this.filter.school.toLowerCase());
      }

      return this.orderList(list, this.filter.order);
    },

    offset() {
      return (this.pagination.currentPage - 1) * this.pagination.perPage;
    },

    limit() {
      return this.offset + this.pagination.perPage;
    },

    numOfPages() {
      return Math.ceil(this.filteredList.length / this.pagination.perPage);
    },

    computedSpells() {
      const list = this.filteredList;
      if (this.offset > list.length) {
        this.setPage(this.numOfPages);
      }
      return list.slice(this.offset, this.limit);
    }
  }
});

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'Spell',
  props: ['spell'],
  data() {
    return {
      shortDesc: false
    };
  },

  computed: {
    peep() {
      const text = this.spell.description.replace('<p>', '').replace('</p>', '. ');
      return `${text.slice(0, 210)}...`;
    }
  },

  methods: {
    doFilterClass(value) {
      this.$emit('filterClass', value);
    },

    doFavorite(spell) {
      this.$emit('favorite', spell);
    }
  }
});

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'itens',
  data() {
    return {
      title: 'Itens',
      itens: [{ name: 'Armaduras', target: 'armaduras', icon: 'ico-armor' }, { name: 'Armas', target: 'armas', icon: 'ico-axes' }, { name: 'Diversos', target: 'diversos', icon: 'ico-axes' }, { name: 'Pacotes', target: 'pacotes', icon: 'ico-backpack' /* ,
                                                                                                                                                                                                                                                          { name: 'Ferramentas', target: 'pacotes', icon: 'ico-hammer' },
                                                                                                                                                                                                                                                          { name: 'Transporte', target: 'pacotes', icon: 'ico-wheel' },
                                                                                                                                                                                                                                                          { name: 'Comércio', target: 'pacotes', icon: 'ico-exchange' },
                                                                                                                                                                                                                                                          { name: 'Despesas', target: 'pacotes', icon: 'ico-paper' },
                                                                                                                                                                                                                                                          { name: 'Bugigangas', target: 'pacotes', icon: 'ico-windmill' } */
      }]
    };
  }
});

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_itens_armas_ListaArmas__ = __webpack_require__(70);
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'armas',
  components: {
    ListaArmas: __WEBPACK_IMPORTED_MODULE_0__components_itens_armas_ListaArmas__["a" /* default */]
  },
  data() {
    return {
      title: 'Armas',
      children: [{ title: 'Corpo-a-corpo', tipo: 'meele', icon: 'ico-meele' }, { title: 'Distância', tipo: 'ranged', icon: 'ico-ranged' }]
    };
  }
});

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'lista-armas',
  props: ['tipo', 'title'],
  data() {
    return {
      loading: false,
      weapons: []
    };
  },

  methods: {
    getWeapons() {
      this.loading = true;
      setTimeout(() => {
        let weapons = localStorage.getItem('weaponsList') || '';
        if (weapons) {
          this.weapons = JSON.parse(localStorage.getItem('weaponsList')).filter(item => item.range === this.tipo);
          this.loading = false;
        }
      }, 500);
    },

    doFavorite(item, event) {
      let weapons = JSON.parse(localStorage.getItem('weaponsList'));
      let pos = weapons.findIndex(weapon => weapon.name.toLocaleLowerCase() === item.name.toLocaleLowerCase());
      weapons[pos].favorite = item.favorite = !item.favorite;
      localStorage.setItem('weaponsList', JSON.stringify(weapons));
    }
  },

  mounted() {
    this.getWeapons();
  }
});

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_itens_armaduras_ListaArmaduras__ = __webpack_require__(74);
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'armaduras',
  components: {
    ListaArmaduras: __WEBPACK_IMPORTED_MODULE_0__components_itens_armaduras_ListaArmaduras__["a" /* default */]
  },
  data() {
    return {
      title: 'Armaduras',
      children: [{ title: 'Leves', type: 'armor', defense: 'light', icon: 'ico-helmet-light' }, { title: 'Médias', type: 'armor', defense: 'medium', icon: 'ico-helmet-medium' }, { title: 'Pesadas', type: 'armor', defense: 'heavy', icon: 'ico-helmet-heavy' }, { title: 'Escudos', type: 'shield', icon: 'ico-shield' }]
    };
  }
});

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'lista-armaduras',
  props: ['title', 'type', 'defense'],
  data() {
    return {
      loading: false,
      armors: []
    };
  },

  methods: {
    getArmors() {
      this.loading = true;
      setTimeout(() => {
        let armors = localStorage.getItem('armorsList') || '';
        if (armors) {
          this.armors = JSON.parse(armors).filter(item => item.type === this.type && (this.defense ? item.defense === this.defense : true));
          this.loading = false;
        }
      }, 500);
    },

    doFavorite(item) {
      let armors = JSON.parse(localStorage.getItem('armorsList'));
      let pos = armors.findIndex(armor => armor.name.toLocaleLowerCase() === item.name.toLocaleLowerCase());
      armors[pos].favorite = item.favorite = !item.favorite;
      localStorage.setItem('armorsList', JSON.stringify(armors));
    }
  },

  mounted() {
    this.getArmors();
  }
});

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'pacotes',
  data() {
    return {
      title: 'Pacotes Iniciais',
      packages: [],
      loading: false
    };
  },
  methods: {
    getPackages() {
      this.loading = true;
      setTimeout(() => {
        let packages = localStorage.getItem('packagesList') || '';
        if (packages) {
          this.packages = JSON.parse(packages);
          this.loading = false;
        }
      }, 500);
    }
  },

  mounted() {
    this.getPackages();
  }
});

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Dice__ = __webpack_require__(80);
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'dice-roller',
  components: {
    Dice: __WEBPACK_IMPORTED_MODULE_0__Dice__["a" /* default */]
  },
  data() {
    return {
      title: 'DiceRoller',
      dices: [4, 6, 8, 10, 12, 20, 100]
    };
  }
});

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'dicev2',
  props: ['dice'],
  data() {
    return {
      calculando: false,
      qtdeDice: 1,
      rolled: 0,
      sum: ''
    };
  },

  methods: {
    rollDiceSimple() {
      this.sum = '';
      this.calculando = true;
      let i = 0;

      let acc = this.getRandomInt(this.dice);
      let dicesRolled = acc.toString();

      for (let count = 1; count < this.qtdeDice; count++) {
        let dice = this.getRandomInt(this.dice);
        dicesRolled = dicesRolled.concat(' + ' + dice.toString());
        acc += dice;
      }

      let animationTimer = setInterval(() => {
        this.rolled = this.getRandomInt(this.dice);
        this.sum = this.rolled;

        if (i === 23) {
          this.rolled = acc;
          this.sum = dicesRolled;
          this.calculando = false;
          clearInterval(animationTimer);
        } else {
          i++;
        }
      }, 50);
    },

    getRandomInt(max) {
      let random = Math.floor(Math.random() * parseInt(max, 10) + 1);
      return random;
    },

    removeDice() {
      if (this.qtdeDice > 1) {
        this.qtdeDice -= 1;
      }
    },

    addDice() {
      this.qtdeDice += 1;
    }
  }
});

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuelidate_lib_validators__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuelidate_lib_validators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vuelidate_lib_validators__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'turn-tracker',
  data() {
    return {
      title: 'Turn Tracker',
      disableNext: false,
      dialog: false,
      snackbar: false,
      tipo: 0,
      name: '',
      initiative: '',
      armorClass: '',
      healthPoints: '',
      selected: 0,
      players: [],
      item: {},
      emptyProperty: ''
    };
  },

  validations: {
    name: {
      required: __WEBPACK_IMPORTED_MODULE_0_vuelidate_lib_validators__["required"]
    },
    initiative: {
      required: __WEBPACK_IMPORTED_MODULE_0_vuelidate_lib_validators__["required"]
    },
    armorClass: {
      required: __WEBPACK_IMPORTED_MODULE_0_vuelidate_lib_validators__["required"]
    },
    healthPoints: {
      required: __WEBPACK_IMPORTED_MODULE_0_vuelidate_lib_validators__["required"]
    }
  },

  beforeMount() {
    this.players = JSON.parse(localStorage.getItem('playersList')) || [];
  },

  beforeDestroy() {
    localStorage.setItem('playersList', JSON.stringify(this.players));
  },

  methods: {
    next() {
      let pos = this.findNextAlive();
      this.validate();
      this.selected = pos;
      this.$vuetify.goTo(`#item-${this.players[this.selected].id}`, {
        duration: 300,
        offset: -50,
        easing: 'easeInOutCubic'
      });
    },

    findNextAlive() {
      let next = this.selected + 1;
      while (next !== this.selected) {
        if (next >= this.players.length) {
          next = 0;
        }
        if (this.players[next].hp > 0) {
          return next;
        }
        next++;
      }
      return this.selected;
    },

    order() {
      this.players = this.players.sort((a, b) => a.init - b.init);
    },

    openDialog(item) {
      this.dialog = true;
      this.item = item;
    },

    up(prop) {
      this.item[prop]++;
    },

    down(prop) {
      this.item[prop]--;
    },

    add(tipo) {
      this.$v.$touch();
      this.loading = true;
      if (this.$v.$invalid) {
        if (!this.name || this.name === '') {
          this.emptyProperty = 'NOME';
        } else if (!this.initiative || this.initiative === '') {
          this.emptyProperty = 'INICIATIVA';
        } else if (!this.armorClass || this.armorClass === '') {
          this.emptyProperty = 'CA';
        } else if (!this.healthPoints || this.healthPoints === '') {
          this.emptyProperty = 'HP';
        }
        this.snackbar = true;
      } else {
        this.players.push({
          id: this.players.length,
          name: this.name,
          ca: this.armorClass || 1,
          init: this.initiative || 1,
          hp: this.healthPoints || 1,
          tipo: tipo
        });

        this.clear();
        this.order();
      }
    },

    remove(item) {
      this.players = this.players.filter(e => e !== item);
    },

    clear() {
      this.name = null;
      this.armorClass = null;
      this.initiative = null;
      this.healthPoints = null;
      this.tipo = 0;
    },

    validate() {
      this.disableNext = !(this.players.findIndex(item => item.hp > 0) > -1);
    },

    rollDiceSimple() {
      let i = 0;
      let animationTimer = setInterval(() => {
        this.initiative = Math.floor(Math.random() * 20 + 1);
        if (i === 13) {
          clearInterval(animationTimer); // Stop the loop
        } else {
          i++;
        }
      }, 50);
    }
  }
});

/***/ }),
/* 24 */,
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'loading',
  data() {
    return {};
  }
});

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuetify_dist_vuetify_min_css__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuetify_dist_vuetify_min_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vuetify_dist_vuetify_min_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__App__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__router__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vuetify__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vuetify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_vuetify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_vuelidate__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_vuelidate___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_vuelidate__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_Loading__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__data__ = __webpack_require__(130);









Object(__WEBPACK_IMPORTED_MODULE_7__data__["a" /* default */])();

__WEBPACK_IMPORTED_MODULE_1_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_4_vuetify___default.a, {
  theme: {
    abjuration: '#1E88E5',
    divination: '#78909C',
    conjuration: '#FB8C00',
    enchantment: '#8E24AA',
    evocation: '#E53935',
    illusion: '#5E35B1',
    necromancy: '#43A047',
    transmutation: '#F9A825',
    primary: '#0288D1'
  }
});

__WEBPACK_IMPORTED_MODULE_1_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_5_vuelidate___default.a);

__WEBPACK_IMPORTED_MODULE_1_vue__["default"].config.productionTip = false;

__WEBPACK_IMPORTED_MODULE_1_vue__["default"].component('Loading', __WEBPACK_IMPORTED_MODULE_6__components_Loading__["a" /* default */]);

new __WEBPACK_IMPORTED_MODULE_1_vue__["default"]({
  el: '#app',
  router: __WEBPACK_IMPORTED_MODULE_3__router__["a" /* default */],
  template: '<App/>',
  components: { App: __WEBPACK_IMPORTED_MODULE_2__App__["a" /* default */] }
});

/***/ }),
/* 27 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__(6);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7ba5bd90_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__ = __webpack_require__(35);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(33)
}
var normalizeComponent = __webpack_require__(1)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7ba5bd90_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/App.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7ba5bd90", Component.options)
  } else {
    hotAPI.reload("data-v-7ba5bd90", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(34);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("4763ba20", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../node_modules/css-loader/index.js?{\"minimize\":true,\"sourceMap\":false}!../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7ba5bd90\",\"scoped\":false,\"hasInlineConfig\":false}!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./App.vue", function() {
     var newContent = require("!!../node_modules/css-loader/index.js?{\"minimize\":true,\"sourceMap\":false}!../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7ba5bd90\",\"scoped\":false,\"hasInlineConfig\":false}!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./App.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, ".border{border:1px solid red!important}.no-padding{padding:0!important}.v-bottom-nav .v-btn{min-width:60px;padding:14px 12px 10px;opacity:1}.v-btn--active:before,.v-btn:focus:before,.v-btn:hover:before{background-color:transparent}.v-messages{display:none}.v-card{border-radius:5px}.appear{backface-visibility:hidden;z-index:1}.appear-move{transition:all .6s ease-in-out 50ms}.appear-enter-active{transition:all .3s ease-out}.appear-leave-active{transition:all .2s ease-in;position:absolute;z-index:0}.appear-enter,.appear-leave-to{opacity:0}.appear-enter{transform:scale(.9)}.v-expansion-panel__header{padding:12px}.list-of-itens{border-radius:5px}.details .flex{padding:3px 8px!important}.v-text-field__details{display:none!important}", ""]);

// exports


/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-app",
    [
      _c(
        "v-toolbar",
        { attrs: { color: "light-blue darken-2", dark: "" } },
        [
          _c(
            "v-toolbar-side-icon",
            [
              _c(
                "v-btn",
                {
                  staticStyle: { "margin-top": "0", "padding-top": "0" },
                  attrs: { icon: "", id: "back" }
                },
                [
                  _c(
                    "v-icon",
                    {
                      on: {
                        click: function($event) {
                          return _vm.$router.go(-1)
                        }
                      }
                    },
                    [_vm._v("keyboard_arrow_left")]
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("v-toolbar-title", [_vm._v(_vm._s(this.$route.name))])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-slide-y-transition",
        { attrs: { "hide-on-leave": "", "leave-absolute": "" } },
        [_c("router-view")],
        1
      ),
      _vm._v(" "),
      _c(
        "v-bottom-nav",
        { attrs: { app: "", color: "grey lighten-4", value: true } },
        _vm._l(_vm.navLinks, function(item) {
          return _c(
            "v-btn",
            {
              key: item.id,
              attrs: { value: item.name, to: item.target, id: item.name }
            },
            [
              _c("v-icon", {
                class: item.icon,
                attrs: { color: "light-blue darken-2", fab: "", flat: "" }
              })
            ],
            1
          )
        }),
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-7ba5bd90", esExports)
  }
}

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Home_vue__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Spells__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Itens__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_itens_Armas__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_itens_Armaduras__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_itens_Pacotes__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_tools_DiceRoller__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_tools_TurnTracker__ = __webpack_require__(94);












__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
  routes: [{
    path: '/',
    name: 'Home',
    component: __WEBPACK_IMPORTED_MODULE_2__components_Home_vue__["a" /* default */]
  }, {
    path: '/spells',
    name: 'Magias',
    component: __WEBPACK_IMPORTED_MODULE_3__components_Spells__["a" /* default */]
  }, {
    path: '/itens',
    name: 'Itens',
    component: __WEBPACK_IMPORTED_MODULE_4__components_Itens__["a" /* default */]
  }, {
    path: '/armas',
    name: 'Armas',
    component: __WEBPACK_IMPORTED_MODULE_5__components_itens_Armas__["a" /* default */]
  }, {
    path: '/armaduras',
    name: 'Armaduras',
    component: __WEBPACK_IMPORTED_MODULE_6__components_itens_Armaduras__["a" /* default */]
  }, {
    path: '/pacotes',
    name: 'Pacotes',
    component: __WEBPACK_IMPORTED_MODULE_7__components_itens_Pacotes__["a" /* default */]
  }, {
    path: '/dice-roller',
    name: 'Dice Roller',
    component: __WEBPACK_IMPORTED_MODULE_8__components_tools_DiceRoller__["a" /* default */]
  }, {
    path: '/turn-tracker',
    name: 'Turn Tracker',
    component: __WEBPACK_IMPORTED_MODULE_9__components_tools_TurnTracker__["a" /* default */]
  }]
}));

/***/ }),
/* 37 */,
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Home_vue__ = __webpack_require__(7);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_8dc7cce2_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Home_vue__ = __webpack_require__(41);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(39)
}
var normalizeComponent = __webpack_require__(1)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-8dc7cce2"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Home_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_8dc7cce2_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Home_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/Home.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-8dc7cce2", Component.options)
  } else {
    hotAPI.reload("data-v-8dc7cce2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(40);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("254dfb18", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?{\"minimize\":true,\"sourceMap\":false}!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-8dc7cce2\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Home.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?{\"minimize\":true,\"sourceMap\":false}!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-8dc7cce2\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Home.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, ".v-text-field input[data-v-8dc7cce2]{text-align:center}.v-text-field[data-v-8dc7cce2]{margin-top:0;padding-top:0}", ""]);

// exports


/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-content",
    [
      _c(
        "v-container",
        { attrs: { fluid: "", "grid-list-lg": "" } },
        [
          _c(
            "v-layout",
            { attrs: { row: "", wrap: "" } },
            [
              _c(
                "v-flex",
                { attrs: { xs12: "" } },
                [
                  _c(
                    "v-card",
                    [
                      _c("v-card-title", { staticClass: "pb-0" }, [
                        _c(
                          "div",
                          { staticClass: "title font-weight-thin mb-0" },
                          [_vm._v("Dinheiro")]
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-card-text",
                        [
                          _c(
                            "v-layout",
                            { attrs: { row: "", wrap: "" } },
                            [
                              _c(
                                "v-flex",
                                { attrs: { xs4: "" } },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      type: "number",
                                      label: "Ouro",
                                      "single-line": "",
                                      clearable: ""
                                    },
                                    model: {
                                      value: _vm.gold,
                                      callback: function($$v) {
                                        _vm.gold = $$v
                                      },
                                      expression: "gold"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-flex",
                                { attrs: { xs4: "" } },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      type: "number",
                                      label: "Prata",
                                      "single-line": "",
                                      clearable: ""
                                    },
                                    model: {
                                      value: _vm.silver,
                                      callback: function($$v) {
                                        _vm.silver = $$v
                                      },
                                      expression: "silver"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-flex",
                                { attrs: { xs4: "" } },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      type: "number",
                                      label: "Cobre",
                                      "single-line": "",
                                      clearable: ""
                                    },
                                    model: {
                                      value: _vm.copper,
                                      callback: function($$v) {
                                        _vm.copper = $$v
                                      },
                                      expression: "copper"
                                    }
                                  })
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-layout",
                            { attrs: { wrap: "", caption: "" } },
                            [
                              _c("v-flex", { attrs: { xs3: "" } }, [
                                _vm._v("Total: ")
                              ]),
                              _vm._v(" "),
                              _c("v-flex", { attrs: { xs3: "" } }, [
                                _vm._v(_vm._s(_vm.goldTotal) + " po")
                              ]),
                              _vm._v(" "),
                              _c("v-flex", { attrs: { xs3: "" } }, [
                                _vm._v(_vm._s(_vm.silverTotal) + " pp")
                              ]),
                              _vm._v(" "),
                              _c("v-flex", { attrs: { xs3: "" } }, [
                                _vm._v(_vm._s(_vm.copperTotal) + " pc")
                              ])
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-flex",
                { attrs: { xs12: "", md4: "" } },
                [
                  _c(
                    "v-card",
                    [
                      _c(
                        "v-card-title",
                        {
                          on: {
                            click: function($event) {
                              _vm.showWeapons = !_vm.showWeapons
                            }
                          }
                        },
                        [
                          _c(
                            "v-flex",
                            { attrs: { xs11: "" } },
                            [
                              _c("v-icon", { staticClass: "pr-2" }, [
                                _vm._v("ico-axes")
                              ]),
                              _vm._v(" "),
                              _c("span", { staticClass: "subheading" }, [
                                _vm._v("Armas Favoritas")
                              ]),
                              _vm._v(" "),
                              _c("span", { staticClass: "caption" }, [
                                _vm._v(
                                  " (" +
                                    _vm._s(_vm.favoriteWeapons.length) +
                                    ")"
                                )
                              ])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-flex",
                            { attrs: { xs1: "" } },
                            [
                              _c("v-icon", [
                                _vm._v(
                                  _vm._s(
                                    _vm.showWeapons
                                      ? "fas fa-angle-up"
                                      : "fas fa-angle-down"
                                  )
                                )
                              ])
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-slide-y-transition",
                        { attrs: { "hide-on-leave": "" } },
                        [
                          _c(
                            "v-flex",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: _vm.showWeapons,
                                  expression: "showWeapons"
                                }
                              ]
                            },
                            [
                              _vm.favoriteWeapons.length <= 0
                                ? _c("v-flex", [
                                    _vm._v(
                                      "\n                Nenhum favorito\n              "
                                    )
                                  ])
                                : _c(
                                    "v-expansion-panel",
                                    { staticClass: "elevation-0" },
                                    _vm._l(_vm.favoriteWeapons, function(
                                      item,
                                      i
                                    ) {
                                      return _c(
                                        "v-expansion-panel-content",
                                        { key: i },
                                        [
                                          _c(
                                            "div",
                                            {
                                              attrs: { slot: "header" },
                                              slot: "header"
                                            },
                                            [
                                              _c(
                                                "v-layout",
                                                {
                                                  attrs: {
                                                    row: "",
                                                    subheading: "",
                                                    "font-weight-thin": ""
                                                  }
                                                },
                                                [
                                                  _c("v-flex", [
                                                    _vm._v(
                                                      "\n                        " +
                                                        _vm._s(item.name) +
                                                        "\n                      "
                                                    )
                                                  ])
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "v-layout",
                                                {
                                                  staticStyle: {
                                                    "margin-top": "-10px",
                                                    "padding-left": "4px"
                                                  },
                                                  attrs: {
                                                    row: "",
                                                    caption: ""
                                                  }
                                                },
                                                [
                                                  _c(
                                                    "v-flex",
                                                    { attrs: { xs6: "" } },
                                                    [
                                                      _c(
                                                        "v-icon",
                                                        {
                                                          staticClass: "pr-2",
                                                          attrs: { small: "" }
                                                        },
                                                        [_vm._v("ico-death")]
                                                      ),
                                                      _vm._v(
                                                        _vm._s(item.damage) +
                                                          "\n                      "
                                                      )
                                                    ],
                                                    1
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "v-flex",
                                                    { attrs: { xs3: "" } },
                                                    [
                                                      _c(
                                                        "v-icon",
                                                        {
                                                          attrs: {
                                                            small: "",
                                                            color: "info"
                                                          }
                                                        },
                                                        [_vm._v("ico-dice")]
                                                      ),
                                                      _vm._v(
                                                        " " +
                                                          _vm._s(item.dice) +
                                                          "\n                      "
                                                      )
                                                    ],
                                                    1
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "v-flex",
                                                    { attrs: { xs3: "" } },
                                                    [
                                                      _c("i", {
                                                        staticClass:
                                                          "fas fa-dollar-sign amber--text accent-4"
                                                      }),
                                                      _vm._v(
                                                        "\n                        " +
                                                          _vm._s(item.value) +
                                                          "\n                      "
                                                      )
                                                    ]
                                                  )
                                                ],
                                                1
                                              )
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-card",
                                            { attrs: { flat: "" } },
                                            [
                                              _c(
                                                "v-card-text",
                                                [
                                                  _c(
                                                    "v-layout",
                                                    {
                                                      staticClass: "details",
                                                      attrs: {
                                                        row: "",
                                                        wrap: "",
                                                        caption: ""
                                                      }
                                                    },
                                                    [
                                                      _c(
                                                        "v-flex",
                                                        { attrs: { xs7: "" } },
                                                        [
                                                          _c(
                                                            "v-icon",
                                                            {
                                                              staticClass:
                                                                "pr-2",
                                                              attrs: {
                                                                small: ""
                                                              }
                                                            },
                                                            [_vm._v("ico-dust")]
                                                          ),
                                                          _vm._v(
                                                            _vm._s(
                                                              item.magic
                                                                ? "mágico"
                                                                : "não mágico"
                                                            ) +
                                                              "\n                        "
                                                          )
                                                        ],
                                                        1
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "v-flex",
                                                        { attrs: { xs5: "" } },
                                                        [
                                                          _c(
                                                            "v-icon",
                                                            {
                                                              staticClass:
                                                                "pr-2",
                                                              attrs: {
                                                                small: ""
                                                              }
                                                            },
                                                            [
                                                              _vm._v(
                                                                "ico-weight"
                                                              )
                                                            ]
                                                          ),
                                                          _vm._v(
                                                            _vm._s(
                                                              item.weight
                                                            ) +
                                                              "\n                        "
                                                          )
                                                        ],
                                                        1
                                                      ),
                                                      _vm._v(" "),
                                                      item.properties
                                                        ? _c(
                                                            "v-flex",
                                                            {
                                                              attrs: {
                                                                xs12: "",
                                                                "pb-0": "",
                                                                "body-1": ""
                                                              }
                                                            },
                                                            [
                                                              _vm._v(
                                                                "\n                          " +
                                                                  _vm._s(
                                                                    item.properties
                                                                  ) +
                                                                  "\n                        "
                                                              )
                                                            ]
                                                          )
                                                        : _vm._e()
                                                    ],
                                                    1
                                                  )
                                                ],
                                                1
                                              )
                                            ],
                                            1
                                          )
                                        ],
                                        1
                                      )
                                    }),
                                    1
                                  )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-flex",
                { attrs: { xs12: "", md4: "" } },
                [
                  _c(
                    "v-card",
                    [
                      _c(
                        "v-card-title",
                        {
                          on: {
                            click: function($event) {
                              _vm.showArmors = !_vm.showArmors
                            }
                          }
                        },
                        [
                          _c(
                            "v-flex",
                            { attrs: { xs11: "" } },
                            [
                              _c("v-icon", { staticClass: "pr-2" }, [
                                _vm._v("ico-armor")
                              ]),
                              _vm._v(" "),
                              _c("span", { staticClass: "subheading" }, [
                                _vm._v("Armaduras Favoritas")
                              ]),
                              _vm._v(" "),
                              _c("span", { staticClass: "caption" }, [
                                _vm._v(
                                  " (" + _vm._s(_vm.favoriteArmors.length) + ")"
                                )
                              ])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-flex",
                            { attrs: { xs1: "" } },
                            [
                              _c("v-icon", [
                                _vm._v(
                                  _vm._s(
                                    _vm.showArmors
                                      ? "fas fa-angle-up"
                                      : "fas fa-angle-down"
                                  )
                                )
                              ])
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-slide-y-transition",
                        { attrs: { "hide-on-leave": "" } },
                        [
                          _c(
                            "v-flex",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: _vm.showArmors,
                                  expression: "showArmors"
                                }
                              ]
                            },
                            [
                              _vm.favoriteArmors.length <= 0
                                ? _c("v-flex", [
                                    _vm._v(
                                      "\n                Nenhum favorito\n              "
                                    )
                                  ])
                                : _vm._e(),
                              _vm._v(" "),
                              _c(
                                "v-expansion-panel",
                                {
                                  directives: [
                                    {
                                      name: "show",
                                      rawName: "v-show",
                                      value: _vm.showArmors,
                                      expression: "showArmors"
                                    }
                                  ],
                                  staticClass: "elevation-0"
                                },
                                _vm._l(_vm.favoriteArmors, function(item, i) {
                                  return _c(
                                    "v-expansion-panel-content",
                                    { key: i },
                                    [
                                      _c(
                                        "div",
                                        {
                                          attrs: { slot: "header" },
                                          slot: "header"
                                        },
                                        [
                                          _c(
                                            "v-layout",
                                            {
                                              attrs: {
                                                row: "",
                                                subheading: "",
                                                "font-weight-thin": ""
                                              }
                                            },
                                            [
                                              _c("v-flex", [
                                                _vm._v(
                                                  "\n                        " +
                                                    _vm._s(item.name) +
                                                    "\n                      "
                                                )
                                              ])
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-layout",
                                            {
                                              staticStyle: {
                                                "margin-top": "-10px",
                                                "padding-left": "4px"
                                              },
                                              attrs: { row: "", caption: "" }
                                            },
                                            [
                                              _c(
                                                "v-flex",
                                                { attrs: { xs9: "" } },
                                                [
                                                  _c(
                                                    "v-icon",
                                                    {
                                                      staticClass: "pr-2",
                                                      attrs: { small: "" }
                                                    },
                                                    [_vm._v("ico-shield")]
                                                  ),
                                                  _vm._v(
                                                    _vm._s(item.ac) +
                                                      "\n                      "
                                                  )
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "v-flex",
                                                { attrs: { xs3: "" } },
                                                [
                                                  _c("i", {
                                                    staticClass:
                                                      "fas fa-dollar-sign amber--text accent-4"
                                                  }),
                                                  _vm._v(
                                                    "\n                        " +
                                                      _vm._s(item.cost) +
                                                      "\n                      "
                                                  )
                                                ]
                                              )
                                            ],
                                            1
                                          )
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-card",
                                        [
                                          _c(
                                            "v-card-text",
                                            [
                                              _c(
                                                "v-layout",
                                                {
                                                  staticClass: "details",
                                                  attrs: {
                                                    row: "",
                                                    wrap: "",
                                                    caption: ""
                                                  }
                                                },
                                                [
                                                  _c(
                                                    "v-flex",
                                                    { attrs: { xs7: "" } },
                                                    [
                                                      _c(
                                                        "v-icon",
                                                        {
                                                          staticClass: "pr-2",
                                                          attrs: { small: "" }
                                                        },
                                                        [_vm._v("ico-dust")]
                                                      ),
                                                      _vm._v(
                                                        _vm._s(
                                                          item.magic
                                                            ? "mágico"
                                                            : "não mágico"
                                                        ) +
                                                          "\n                        "
                                                      )
                                                    ],
                                                    1
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "v-flex",
                                                    { attrs: { xs5: "" } },
                                                    [
                                                      _c(
                                                        "v-icon",
                                                        {
                                                          staticClass: "pr-2",
                                                          attrs: { small: "" }
                                                        },
                                                        [_vm._v("ico-weight")]
                                                      ),
                                                      _vm._v(
                                                        _vm._s(item.weight) +
                                                          "\n                        "
                                                      )
                                                    ],
                                                    1
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "v-flex",
                                                    { attrs: { xs7: "" } },
                                                    [
                                                      _c(
                                                        "v-icon",
                                                        {
                                                          staticClass: "pr-2",
                                                          attrs: { small: "" }
                                                        },
                                                        [_vm._v("ico-ninja")]
                                                      ),
                                                      _vm._v(
                                                        " " +
                                                          _vm._s(
                                                            item.stealth_disavantage
                                                              ? "furtividade"
                                                              : " - "
                                                          ) +
                                                          "\n                        "
                                                      )
                                                    ],
                                                    1
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "v-flex",
                                                    { attrs: { xs5: "" } },
                                                    [
                                                      _c(
                                                        "v-icon",
                                                        {
                                                          staticClass: "pr-2",
                                                          attrs: { small: "" }
                                                        },
                                                        [_vm._v("ico-dumbbell")]
                                                      ),
                                                      _vm._v(
                                                        _vm._s(
                                                          item.strenght_min ||
                                                            " - "
                                                        ) +
                                                          "\n                        "
                                                      )
                                                    ],
                                                    1
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "v-flex",
                                                    {
                                                      attrs: {
                                                        xs12: "",
                                                        "body-1": ""
                                                      }
                                                    },
                                                    [
                                                      _vm._v(
                                                        "\n                          " +
                                                          _vm._s(
                                                            item.description
                                                          ) +
                                                          "\n                        "
                                                      )
                                                    ]
                                                  )
                                                ],
                                                1
                                              )
                                            ],
                                            1
                                          )
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  )
                                }),
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-flex",
                { attrs: { xs12: "", md4: "" } },
                [
                  _c(
                    "v-card",
                    [
                      _c(
                        "v-card-title",
                        {
                          on: {
                            click: function($event) {
                              _vm.showSpells = !_vm.showSpells
                            }
                          }
                        },
                        [
                          _c(
                            "v-flex",
                            { attrs: { xs11: "" } },
                            [
                              _c("v-icon", { staticClass: "pr-2" }, [
                                _vm._v("ico-crystal")
                              ]),
                              _vm._v(" "),
                              _c("span", { staticClass: "subheading" }, [
                                _vm._v("Magias Favoritas")
                              ]),
                              _vm._v(" "),
                              _c("span", { staticClass: "caption" }, [
                                _vm._v(
                                  " (" + _vm._s(_vm.favoriteSpells.length) + ")"
                                )
                              ])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-flex",
                            { attrs: { xs1: "" } },
                            [
                              _c("v-icon", [
                                _vm._v(
                                  _vm._s(
                                    _vm.showSpells
                                      ? "fas fa-angle-up"
                                      : "fas fa-angle-down"
                                  )
                                )
                              ])
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-slide-y-transition",
                        { attrs: { "hide-on-leave": "" } },
                        [
                          _c(
                            "v-flex",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: _vm.showSpells,
                                  expression: "showSpells"
                                }
                              ]
                            },
                            [
                              _vm.favoriteSpells.length <= 0
                                ? _c("v-flex", [
                                    _vm._v(
                                      "\n                Nenhum favorito\n              "
                                    )
                                  ])
                                : _vm._e(),
                              _vm._v(" "),
                              _c(
                                "v-expansion-panel",
                                {
                                  directives: [
                                    {
                                      name: "show",
                                      rawName: "v-show",
                                      value: _vm.showSpells,
                                      expression: "showSpells"
                                    }
                                  ],
                                  staticClass: "elevation-0"
                                },
                                _vm._l(_vm.favoriteSpells, function(item, i) {
                                  return _c(
                                    "v-expansion-panel-content",
                                    { key: i },
                                    [
                                      _c(
                                        "div",
                                        {
                                          attrs: { slot: "header" },
                                          slot: "header"
                                        },
                                        [
                                          _c(
                                            "v-layout",
                                            {
                                              attrs: {
                                                row: "",
                                                subheading: "",
                                                "font-weight-thin": ""
                                              }
                                            },
                                            [
                                              _c("v-flex", [
                                                _vm._v(
                                                  "\n                        " +
                                                    _vm._s(item.name) +
                                                    "\n                      "
                                                )
                                              ])
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-layout",
                                            {
                                              staticStyle: {
                                                "margin-top": "-10px",
                                                "padding-left": "4px"
                                              },
                                              attrs: { row: "", caption: "" }
                                            },
                                            [
                                              _c(
                                                "v-flex",
                                                { attrs: { xs9: "" } },
                                                [
                                                  _c(
                                                    "v-avatar",
                                                    {
                                                      staticStyle: {
                                                        "margin-top": "-3px"
                                                      },
                                                      attrs: {
                                                        size: "16",
                                                        "pr-2": ""
                                                      }
                                                    },
                                                    [
                                                      _c("img", {
                                                        attrs: {
                                                          src:
                                                            "static/img/schools/" +
                                                            item.school.style +
                                                            ".png"
                                                        }
                                                      })
                                                    ]
                                                  ),
                                                  _vm._v(
                                                    "\n                        " +
                                                      _vm._s(item.school.pt) +
                                                      "\n                      "
                                                  )
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "v-flex",
                                                { attrs: { xs3: "" } },
                                                [
                                                  _c(
                                                    "v-icon",
                                                    {
                                                      staticClass: "pr-2",
                                                      attrs: {
                                                        small: "",
                                                        color: "purple"
                                                      }
                                                    },
                                                    [_vm._v("ico-wizard")]
                                                  ),
                                                  _vm._v(
                                                    _vm._s(item.level) +
                                                      "\n                      "
                                                  )
                                                ],
                                                1
                                              )
                                            ],
                                            1
                                          )
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-card",
                                        [
                                          _c(
                                            "v-card-text",
                                            [
                                              _c(
                                                "v-layout",
                                                { attrs: { "body-1": "" } },
                                                [
                                                  _c("v-flex", {
                                                    staticClass: "pb-2",
                                                    attrs: { xs12: "" },
                                                    domProps: {
                                                      innerHTML: _vm._s(
                                                        item.description
                                                      )
                                                    }
                                                  })
                                                ],
                                                1
                                              )
                                            ],
                                            1
                                          )
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  )
                                }),
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-8dc7cce2", esExports)
  }
}

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Spells_vue__ = __webpack_require__(8);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_daa6a60a_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Spells_vue__ = __webpack_require__(64);
var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Spells_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_daa6a60a_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Spells_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/Spells.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-daa6a60a", Component.options)
  } else {
    hotAPI.reload("data-v-daa6a60a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_SpellFilter_vue__ = __webpack_require__(9);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_05da5a28_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_SpellFilter_vue__ = __webpack_require__(55);
var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_SpellFilter_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_05da5a28_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_SpellFilter_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/spells/SpellFilter.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-05da5a28", Component.options)
  } else {
    hotAPI.reload("data-v-05da5a28", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-flex",
    { attrs: { xs12: "" } },
    [
      _c("v-text-field", {
        attrs: {
          label: "Nome da magia",
          "single-line": "",
          solo: "",
          clearable: "",
          "append-icon": "filter_list"
        },
        on: {
          "click:append": function($event) {
            _vm.showFilters = !_vm.showFilters
          }
        },
        model: {
          value: _vm.name,
          callback: function($$v) {
            _vm.name = $$v
          },
          expression: "name"
        }
      }),
      _vm._v(" "),
      _c(
        "v-slide-y-transition",
        [
          _c(
            "v-card",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.showFilters,
                  expression: "showFilters"
                }
              ]
            },
            [
              _c(
                "v-card-text",
                [
                  _c(
                    "v-layout",
                    [
                      _c(
                        "v-flex",
                        [
                          _c("v-select", {
                            attrs: {
                              label: "Nível",
                              "single-line": "",
                              items: _vm.levels,
                              clearable: ""
                            },
                            model: {
                              value: _vm.filter.level,
                              callback: function($$v) {
                                _vm.$set(_vm.filter, "level", $$v)
                              },
                              expression: "filter.level"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-flex",
                        [
                          _c("v-select", {
                            attrs: {
                              label: "Classe",
                              "single-line": "",
                              items: _vm.classes,
                              clearable: ""
                            },
                            model: {
                              value: _vm.filter.class,
                              callback: function($$v) {
                                _vm.$set(_vm.filter, "class", $$v)
                              },
                              expression: "filter.class"
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("v-select", {
                    attrs: {
                      label: "Escola",
                      "single-line": "",
                      items: _vm.schools,
                      clearable: ""
                    },
                    model: {
                      value: _vm.filter.school,
                      callback: function($$v) {
                        _vm.$set(_vm.filter, "school", $$v)
                      },
                      expression: "filter.school"
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "v-layout",
                    [
                      _c(
                        "v-flex",
                        { attrs: { xs6: "" } },
                        [
                          _c("v-select", {
                            attrs: {
                              label: "Ordenar",
                              "single-line": "",
                              items: _vm.orders,
                              "item-value": "slug",
                              clearable: ""
                            },
                            scopedSlots: _vm._u([
                              {
                                key: "selection",
                                fn: function(ref) {
                                  var item = ref.item
                                  return [
                                    _vm._v(
                                      "\n                " +
                                        _vm._s(item.text) +
                                        "\n              "
                                    )
                                  ]
                                }
                              },
                              {
                                key: "item",
                                fn: function(ref) {
                                  var item = ref.item
                                  return [
                                    _c("v-list-tile-content", [
                                      _vm._v(
                                        "\n                  " +
                                          _vm._s(item.text) +
                                          "\n                "
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("v-spacer"),
                                    _vm._v(" "),
                                    _c(
                                      "v-list-tile-action",
                                      [
                                        _c("v-icon", { attrs: { small: "" } }, [
                                          _vm._v(_vm._s(item.icon))
                                        ])
                                      ],
                                      1
                                    )
                                  ]
                                }
                              }
                            ]),
                            model: {
                              value: _vm.filter.order,
                              callback: function($$v) {
                                _vm.$set(_vm.filter, "order", $$v)
                              },
                              expression: "filter.order"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-flex",
                        { attrs: { xs6: "" } },
                        [
                          _c("v-switch", {
                            attrs: { label: "Favoritos" },
                            model: {
                              value: _vm.filter.onlyFavorites,
                              callback: function($$v) {
                                _vm.$set(_vm.filter, "onlyFavorites", $$v)
                              },
                              expression: "filter.onlyFavorites"
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-05da5a28", esExports)
  }
}

/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_SpellList_vue__ = __webpack_require__(13);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_58df87dc_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_SpellList_vue__ = __webpack_require__(63);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(57)
}
var normalizeComponent = __webpack_require__(1)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-58df87dc"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_SpellList_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_58df87dc_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_SpellList_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/spells/SpellList.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-58df87dc", Component.options)
  } else {
    hotAPI.reload("data-v-58df87dc", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(58);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("b2ef56b6", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?{\"minimize\":true,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-58df87dc\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./SpellList.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?{\"minimize\":true,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-58df87dc\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./SpellList.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Spell_vue__ = __webpack_require__(14);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_074fe454_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Spell_vue__ = __webpack_require__(62);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(60)
}
var normalizeComponent = __webpack_require__(1)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-074fe454"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Spell_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_074fe454_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Spell_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/spells/Spell.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-074fe454", Component.options)
  } else {
    hotAPI.reload("data-v-074fe454", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(61);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("6f6d7bcd", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?{\"minimize\":true,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-074fe454\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Spell.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?{\"minimize\":true,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-074fe454\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Spell.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, ".Spell__class[data-v-074fe454]{cursor:pointer}.Spell__details[data-v-074fe454]{list-style:none;margin:0;padding:0}", ""]);

// exports


/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-flex",
    { attrs: { xs12: "", sm6: "", md4: "" } },
    [
      _c(
        "v-card",
        { attrs: { id: _vm.spell.id } },
        [
          _c(
            "v-card-title",
            { staticClass: "pb-0 Spell__class" },
            [
              _c(
                "v-layout",
                { attrs: { row: "", wrap: "" } },
                [
                  _c(
                    "v-flex",
                    {
                      class: _vm.spell.school.style + "--text",
                      attrs: { title: "" },
                      on: {
                        click: function($event) {
                          return _vm.doFavorite(_vm.spell)
                        }
                      }
                    },
                    [
                      _c("v-icon", { attrs: { color: "amber" } }, [
                        _vm._v(
                          "\n              " +
                            _vm._s(
                              _vm.spell.favorite ? "star" : "star_border"
                            ) +
                            "\n          "
                        )
                      ]),
                      _vm._v(
                        "\n          " + _vm._s(_vm.spell.name) + "\n          "
                      ),
                      _vm.spell.ritual
                        ? _c("span", { staticClass: "black--text body-1" }, [
                            _vm._v(" (ritual)")
                          ])
                        : _vm._e()
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-card-text",
            [
              _c(
                "v-layout",
                { attrs: { row: "", wrap: "", caption: "" } },
                [
                  _c("v-flex", { attrs: { "pt-0": "" } }, [
                    _vm._v(
                      "\n          (" +
                        _vm._s(_vm.spell.name_en) +
                        ")\n        "
                    )
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-layout",
                {
                  staticClass: "details",
                  attrs: { row: "", wrap: "", caption: "" }
                },
                [
                  _c(
                    "v-flex",
                    { attrs: { xs6: "" } },
                    [
                      _c(
                        "v-icon",
                        { staticClass: "pr-1", attrs: { size: "12" } },
                        [_vm._v("ico-wizard")]
                      ),
                      _vm._v(" Nível " + _vm._s(_vm.spell.level) + "\n        ")
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-flex",
                    { attrs: { xs6: "" } },
                    [
                      _c(
                        "v-avatar",
                        {
                          staticStyle: {
                            "margin-left": "-2px",
                            "margin-right": "3px"
                          },
                          attrs: { size: "16", "pr-2": "" }
                        },
                        [
                          _c("img", {
                            attrs: {
                              src:
                                "static/img/schools/" +
                                _vm.spell.school.style +
                                ".png"
                            }
                          })
                        ]
                      ),
                      _vm._v(
                        "\n          " +
                          _vm._s(_vm.spell.school.pt) +
                          "\n        "
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-flex",
                    { attrs: { xs6: "" } },
                    [
                      _c(
                        "v-icon",
                        { staticClass: "pr-1", attrs: { size: "12" } },
                        [_vm._v("ico-clock")]
                      ),
                      _vm._v(" " + _vm._s(_vm.spell.castingTime) + "\n        ")
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-flex",
                    { attrs: { xs6: "" } },
                    [
                      _c(
                        "v-icon",
                        { staticClass: "pr-1", attrs: { size: "12" } },
                        [_vm._v("ico-distance")]
                      ),
                      _vm._v(
                        " " + _vm._s(_vm.spell.range) + "          \n        "
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-flex",
                    { attrs: { xs6: "" } },
                    [
                      _c(
                        "v-icon",
                        { staticClass: "pr-1", attrs: { size: "12" } },
                        [_vm._v("ico-hourglass")]
                      ),
                      _vm._v(" " + _vm._s(_vm.spell.duration) + "\n        ")
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-flex",
                    { attrs: { xs6: "" } },
                    [
                      _c(
                        "v-icon",
                        { staticClass: "pr-1", attrs: { size: "12" } },
                        [_vm._v("ico-brain")]
                      ),
                      _vm._v(
                        " " +
                          _vm._s(
                            _vm.spell.concentration ? "Concentração" : ""
                          ) +
                          "\n        "
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-flex",
                    { attrs: { xs12: "" } },
                    [
                      _c(
                        "v-icon",
                        { staticClass: "pr-1", attrs: { size: "12" } },
                        [_vm._v("ico-component")]
                      ),
                      _vm._v(
                        " " +
                          _vm._s(_vm.spell.components) +
                          " " +
                          _vm._s(
                            _vm.spell.material
                              ? " - " + _vm.spell.material
                              : _vm.spell.material
                          ) +
                          "\n        "
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-layout",
                { attrs: { row: "", wrap: "", "pt-2": "" } },
                [
                  _c(
                    "v-flex",
                    { attrs: { xs12: "" } },
                    _vm._l(_vm.spell.classes, function(item) {
                      return _c(
                        "v-chip",
                        {
                          key: item.name,
                          attrs: { small: "", outline: "", color: "primary" },
                          on: {
                            click: function($event) {
                              return _vm.doFilterClass(item)
                            }
                          }
                        },
                        [
                          _c("span", { staticClass: "Spell__class" }, [
                            _vm._v(_vm._s("" + item))
                          ])
                        ]
                      )
                    }),
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-layout",
                { attrs: { row: "", wrap: "" } },
                [
                  _c("v-flex", { attrs: { xs12: "" } }, [
                    !_vm.shortDesc
                      ? _c("div", {
                          domProps: { innerHTML: _vm._s(this.peep) }
                        })
                      : _c("div", {
                          domProps: { innerHTML: _vm._s(_vm.spell.description) }
                        })
                  ])
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-card-actions",
            { staticClass: "pb-3" },
            [
              _c("v-spacer"),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  attrs: { outline: "", round: "", color: "info" },
                  on: {
                    click: function($event) {
                      _vm.shortDesc = !_vm.shortDesc
                    }
                  }
                },
                [_vm._v("\n          Descrição\n        ")]
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-074fe454", esExports)
  }
}

/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-flex",
    { attrs: { id: "spells__list" } },
    [
      _c(
        "v-slide-y-transition",
        { attrs: { "hide-on-leave": "", "leave-absolute": "" } },
        [
          _vm.noResults
            ? _c(
                "v-flex",
                {
                  staticClass: "text-xs-center primary--text heading",
                  attrs: { xs12: "" }
                },
                [_vm._v("\n      Nenhuma magia encontrada\n    ")]
              )
            : _vm._e()
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-slide-y-transition",
        { attrs: { "hide-on-leave": "", "leave-absolute": "" } },
        [
          _c("loading", {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.loadingSpells,
                expression: "loadingSpells"
              }
            ]
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "transition-group",
        {
          staticClass: "layout row wrap",
          attrs: { name: "appear", tag: "div" }
        },
        _vm._l(_vm.computedSpells, function(item) {
          return _c("spell", {
            key: item.id,
            staticClass: "appear",
            attrs: { spell: item },
            on: { filterClass: _vm.doFilterClass, favorite: _vm.doFavorite }
          })
        }),
        1
      ),
      _vm._v(" "),
      _c(
        "v-flex",
        { staticClass: "text-xs-center", attrs: { "pt-3": "" } },
        [
          _c("v-pagination", {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: this.numOfPages >= 1,
                expression: "this.numOfPages >= 1"
              }
            ],
            attrs: { circle: "", length: this.numOfPages, "total-visible": 5 },
            model: {
              value: _vm.pagination.currentPage,
              callback: function($$v) {
                _vm.$set(_vm.pagination, "currentPage", $$v)
              },
              expression: "pagination.currentPage"
            }
          })
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-58df87dc", esExports)
  }
}

/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-content",
    [
      _c(
        "v-container",
        { attrs: { fluid: "", "grid-list-lg": "" } },
        [
          _c(
            "v-layout",
            { attrs: { row: "", wrap: "" } },
            [
              _c("spell-filter", {
                attrs: { filter: _vm.filter },
                on: { filter: _vm.doFilter }
              }),
              _vm._v(" "),
              _c("spell-list", {
                attrs: { filter: _vm.filter },
                on: { filterClass: _vm.doFilterClass }
              })
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-daa6a60a", esExports)
  }
}

/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Itens_vue__ = __webpack_require__(15);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_71e6cc5f_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Itens_vue__ = __webpack_require__(68);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(66)
}
var normalizeComponent = __webpack_require__(1)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-71e6cc5f"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Itens_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_71e6cc5f_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Itens_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/Itens.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-71e6cc5f", Component.options)
  } else {
    hotAPI.reload("data-v-71e6cc5f", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(67);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("7074e4fe", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?{\"minimize\":true,\"sourceMap\":false}!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-71e6cc5f\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Itens.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?{\"minimize\":true,\"sourceMap\":false}!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-71e6cc5f\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Itens.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, ".bordered[data-v-71e6cc5f]{border:1px solid #ccc}", ""]);

// exports


/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-content",
    [
      _c(
        "v-container",
        { attrs: { fluid: "", "grid-list-lg": "", "fill-height": "" } },
        [
          _c(
            "v-layout",
            {
              attrs: {
                row: "",
                wrap: "",
                "align-center": "",
                "justify-space-around": "",
                "fill-height": ""
              }
            },
            _vm._l(_vm.itens, function(item) {
              return _c(
                "v-flex",
                { key: item.name, attrs: { xs6: "", sm4: "", md3: "" } },
                [
                  _c(
                    "v-card",
                    { attrs: { to: item.target } },
                    [
                      _c(
                        "v-card-text",
                        { staticClass: "text-xs-center" },
                        [
                          _c("v-icon", {
                            class: item.icon,
                            attrs: { color: "light-blue darken-2", large: "" }
                          }),
                          _vm._v(" "),
                          _c("v-flex", [_vm._v(_vm._s(item.name))])
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            }),
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-71e6cc5f", esExports)
  }
}

/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Armas_vue__ = __webpack_require__(16);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_c1cd9f44_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Armas_vue__ = __webpack_require__(72);
var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Armas_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_c1cd9f44_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Armas_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/itens/Armas.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-c1cd9f44", Component.options)
  } else {
    hotAPI.reload("data-v-c1cd9f44", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_ListaArmas_vue__ = __webpack_require__(17);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_30460168_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ListaArmas_vue__ = __webpack_require__(71);
var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_ListaArmas_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_30460168_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ListaArmas_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/itens/armas/ListaArmas.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-30460168", Component.options)
  } else {
    hotAPI.reload("data-v-30460168", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-content",
    [
      _c(
        "v-container",
        { attrs: { fluid: "", "grid-list-lg": "" } },
        [
          _c(
            "v-layout",
            { attrs: { row: "", wrap: "" } },
            [
              _c(
                "v-flex",
                { attrs: { xs12: "" } },
                [
                  _c("v-subheader", [
                    _c("span", { staticClass: "headline font-weight-thin" }, [
                      _vm._v(_vm._s(_vm.title))
                    ]),
                    _vm._v(" "),
                    _c("span", { staticClass: "caption pl-3" }, [
                      _vm._v(" (" + _vm._s(_vm.weapons.length) + ")")
                    ])
                  ])
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-slide-y-transition",
            { attrs: { "hide-on-leave": "", "leave-absolute": "" } },
            [
              _c("loading", {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.loading,
                    expression: "loading"
                  }
                ]
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-layout",
            { attrs: { row: "", wrap: "" } },
            _vm._l(_vm.weapons, function(item) {
              return _c(
                "v-flex",
                { key: item.name, attrs: { xs12: "", sm6: "", md3: "" } },
                [
                  _c(
                    "v-card",
                    [
                      _c(
                        "v-expansion-panel",
                        [
                          _c(
                            "v-expansion-panel-content",
                            { staticClass: "list-of-itens" },
                            [
                              _c(
                                "div",
                                { attrs: { slot: "header" }, slot: "header" },
                                [
                                  _c(
                                    "v-layout",
                                    {
                                      attrs: {
                                        row: "",
                                        subheading: "",
                                        "font-weight-thin": ""
                                      }
                                    },
                                    [
                                      _c(
                                        "v-flex",
                                        {
                                          on: {
                                            click: function($event) {
                                              $event.stopPropagation()
                                              return _vm.doFavorite(item)
                                            }
                                          }
                                        },
                                        [
                                          _c(
                                            "v-icon",
                                            { attrs: { color: "amber" } },
                                            [
                                              _vm._v(
                                                "\n                      " +
                                                  _vm._s(
                                                    item.favorite
                                                      ? "star"
                                                      : "star_border"
                                                  ) +
                                                  "\n                    "
                                              )
                                            ]
                                          ),
                                          _vm._v(
                                            "\n                    " +
                                              _vm._s(item.name) +
                                              "\n                  "
                                          )
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-layout",
                                    {
                                      staticStyle: {
                                        "margin-top": "-10px",
                                        "padding-left": "4px"
                                      },
                                      attrs: { row: "", caption: "" }
                                    },
                                    [
                                      _c(
                                        "v-flex",
                                        { attrs: { xs5: "" } },
                                        [
                                          _c(
                                            "v-icon",
                                            {
                                              staticClass: "pr-2",
                                              attrs: { small: "" }
                                            },
                                            [_vm._v("ico-death")]
                                          ),
                                          _vm._v(
                                            _vm._s(item.damage) +
                                              "\n                  "
                                          )
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-flex",
                                        { attrs: { xs3: "" } },
                                        [
                                          _c(
                                            "v-icon",
                                            {
                                              attrs: {
                                                small: "",
                                                color: "info"
                                              }
                                            },
                                            [_vm._v("ico-dice")]
                                          ),
                                          _vm._v(
                                            " " +
                                              _vm._s(item.dice) +
                                              "\n                  "
                                          )
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c("v-flex", { attrs: { xs4: "" } }, [
                                        _c("i", {
                                          staticClass:
                                            "fas fa-dollar-sign amber--text accent-4"
                                        }),
                                        _vm._v(
                                          "\n                    " +
                                            _vm._s(item.value) +
                                            "\n                  "
                                        )
                                      ])
                                    ],
                                    1
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-card",
                                [
                                  _c(
                                    "v-card-text",
                                    [
                                      _c(
                                        "v-layout",
                                        {
                                          staticClass: "details",
                                          attrs: {
                                            row: "",
                                            wrap: "",
                                            caption: ""
                                          }
                                        },
                                        [
                                          _c(
                                            "v-flex",
                                            { attrs: { xs7: "" } },
                                            [
                                              _c(
                                                "v-icon",
                                                {
                                                  staticClass: "pr-2",
                                                  attrs: { small: "" }
                                                },
                                                [_vm._v("ico-dust")]
                                              ),
                                              _vm._v(
                                                _vm._s(
                                                  item.magic
                                                    ? "mágico"
                                                    : "não mágico"
                                                ) + "\n                    "
                                              )
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-flex",
                                            { attrs: { xs5: "" } },
                                            [
                                              _c(
                                                "v-icon",
                                                {
                                                  staticClass: "pr-2",
                                                  attrs: { small: "" }
                                                },
                                                [_vm._v("ico-weight")]
                                              ),
                                              _vm._v(
                                                _vm._s(item.weight) +
                                                  "\n                    "
                                              )
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          item.properties
                                            ? _c(
                                                "v-flex",
                                                {
                                                  attrs: {
                                                    xs12: "",
                                                    "pb-0": "",
                                                    "body-1": ""
                                                  }
                                                },
                                                [
                                                  _vm._v(
                                                    "\n                      " +
                                                      _vm._s(item.properties) +
                                                      "\n                    "
                                                  )
                                                ]
                                              )
                                            : _vm._e()
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            }),
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-30460168", esExports)
  }
}

/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-tabs",
    {
      attrs: {
        color: "grey lighten-4",
        "fixed-tabs": "",
        "slider-color": "orange accent-4"
      }
    },
    [
      _vm._l(_vm.children, function(item) {
        return _c(
          "v-tab",
          { key: item.name, attrs: { ripple: "" } },
          [_c("v-icon", [_vm._v(_vm._s(item.icon))])],
          1
        )
      }),
      _vm._v(" "),
      _vm._l(_vm.children, function(item, idx) {
        return _c(
          "v-tab-item",
          { key: idx },
          [
            _c("lista-armas", { attrs: { tipo: item.tipo, title: item.title } })
          ],
          1
        )
      })
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-c1cd9f44", esExports)
  }
}

/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Armaduras_vue__ = __webpack_require__(18);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3ec0e45e_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Armaduras_vue__ = __webpack_require__(76);
var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Armaduras_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3ec0e45e_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Armaduras_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/itens/Armaduras.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3ec0e45e", Component.options)
  } else {
    hotAPI.reload("data-v-3ec0e45e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_ListaArmaduras_vue__ = __webpack_require__(19);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3970684c_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ListaArmaduras_vue__ = __webpack_require__(75);
var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_ListaArmaduras_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3970684c_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ListaArmaduras_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/itens/armaduras/ListaArmaduras.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3970684c", Component.options)
  } else {
    hotAPI.reload("data-v-3970684c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-content",
    [
      _c(
        "v-container",
        { attrs: { fluid: "", "grid-list-lg": "" } },
        [
          _c(
            "v-layout",
            { attrs: { row: "", wrap: "" } },
            [
              _c(
                "v-flex",
                { attrs: { xs12: "" } },
                [
                  _c("v-subheader", [
                    _c("span", { staticClass: "headline font-weight-thin" }, [
                      _vm._v(_vm._s(_vm.title))
                    ]),
                    _vm._v(" "),
                    _c("span", { staticClass: "caption pl-3" }, [
                      _vm._v(" (" + _vm._s(_vm.armors.length) + ")")
                    ])
                  ])
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-slide-y-transition",
            { attrs: { "hide-on-leave": "", "leave-absolute": "" } },
            [
              _c("loading", {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.loading,
                    expression: "loading"
                  }
                ]
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-layout",
            { attrs: { row: "", wrap: "" } },
            _vm._l(_vm.armors, function(item) {
              return _c(
                "v-flex",
                { key: item.name, attrs: { xs12: "", sm6: "", md3: "" } },
                [
                  _c(
                    "v-card",
                    [
                      _c(
                        "v-expansion-panel",
                        [
                          _c(
                            "v-expansion-panel-content",
                            { staticClass: "list-of-itens" },
                            [
                              _c(
                                "div",
                                { attrs: { slot: "header" }, slot: "header" },
                                [
                                  _c(
                                    "v-layout",
                                    {
                                      attrs: {
                                        row: "",
                                        subheading: "",
                                        "font-weight-thin": ""
                                      }
                                    },
                                    [
                                      _c(
                                        "v-flex",
                                        [
                                          _c(
                                            "v-icon",
                                            {
                                              attrs: { color: "amber" },
                                              on: {
                                                click: function($event) {
                                                  $event.stopPropagation()
                                                  return _vm.doFavorite(item)
                                                }
                                              }
                                            },
                                            [
                                              _vm._v(
                                                "\n                      " +
                                                  _vm._s(
                                                    item.favorite
                                                      ? "star"
                                                      : "star_border"
                                                  ) +
                                                  "\n                    "
                                              )
                                            ]
                                          ),
                                          _vm._v(
                                            "\n                    " +
                                              _vm._s(item.name) +
                                              "\n                  "
                                          )
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-layout",
                                    {
                                      staticStyle: {
                                        "margin-top": "-10px",
                                        "padding-left": "4px"
                                      },
                                      attrs: { row: "", caption: "" }
                                    },
                                    [
                                      _c(
                                        "v-flex",
                                        { attrs: { xs8: "" } },
                                        [
                                          _c(
                                            "v-icon",
                                            {
                                              staticClass: "pr-2",
                                              attrs: { small: "" }
                                            },
                                            [_vm._v("ico-shield")]
                                          ),
                                          _vm._v(
                                            _vm._s(item.ac) +
                                              "\n                  "
                                          )
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c("v-flex", { attrs: { xs4: "" } }, [
                                        _c("i", {
                                          staticClass:
                                            "fas fa-dollar-sign amber--text accent-4"
                                        }),
                                        _vm._v(
                                          "\n                    " +
                                            _vm._s(item.cost) +
                                            "\n                  "
                                        )
                                      ])
                                    ],
                                    1
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-card",
                                [
                                  _c(
                                    "v-card-text",
                                    [
                                      _c(
                                        "v-layout",
                                        {
                                          staticClass: "details",
                                          attrs: {
                                            row: "",
                                            wrap: "",
                                            caption: ""
                                          }
                                        },
                                        [
                                          _c(
                                            "v-flex",
                                            { attrs: { xs7: "" } },
                                            [
                                              _c(
                                                "v-icon",
                                                {
                                                  staticClass: "pr-2",
                                                  attrs: { small: "" }
                                                },
                                                [_vm._v("ico-dust")]
                                              ),
                                              _vm._v(
                                                _vm._s(
                                                  item.magic
                                                    ? "mágico"
                                                    : "não mágico"
                                                ) + "\n                    "
                                              )
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-flex",
                                            { attrs: { xs5: "" } },
                                            [
                                              _c(
                                                "v-icon",
                                                {
                                                  staticClass: "pr-2",
                                                  attrs: { small: "" }
                                                },
                                                [_vm._v("ico-weight")]
                                              ),
                                              _vm._v(
                                                _vm._s(item.weight) +
                                                  "\n                    "
                                              )
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-flex",
                                            { attrs: { xs7: "" } },
                                            [
                                              _c(
                                                "v-icon",
                                                {
                                                  staticClass: "pr-1",
                                                  attrs: { small: "" }
                                                },
                                                [_vm._v("ico-ninja")]
                                              ),
                                              _vm._v(
                                                " " +
                                                  _vm._s(
                                                    item.stealth_disavantage
                                                      ? "furtividade"
                                                      : " - "
                                                  ) +
                                                  "\n                    "
                                              )
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-flex",
                                            { attrs: { xs5: "" } },
                                            [
                                              _c(
                                                "v-icon",
                                                {
                                                  staticClass: "pr-2",
                                                  attrs: { small: "" }
                                                },
                                                [_vm._v("ico-dumbbell")]
                                              ),
                                              _vm._v(
                                                _vm._s(
                                                  item.strenght_min || " - "
                                                ) + "\n                    "
                                              )
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-flex",
                                            {
                                              attrs: { xs12: "", "body-1": "" }
                                            },
                                            [
                                              _vm._v(
                                                "\n                      " +
                                                  _vm._s(item.description) +
                                                  "\n                    "
                                              )
                                            ]
                                          )
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            }),
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-3970684c", esExports)
  }
}

/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-tabs",
    {
      attrs: {
        color: "grey lighten-4",
        "fixed-tabs": "",
        "slider-color": "orange accent-4"
      }
    },
    [
      _vm._l(_vm.children, function(item) {
        return _c(
          "v-tab",
          { key: item.name, attrs: { ripple: "" } },
          [_c("v-icon", [_vm._v(_vm._s(item.icon))])],
          1
        )
      }),
      _vm._v(" "),
      _vm._l(_vm.children, function(item, idx) {
        return _c(
          "v-tab-item",
          { key: idx },
          [
            _c("lista-armaduras", {
              attrs: {
                type: item.type,
                title: item.title,
                defense: item.defense
              }
            })
          ],
          1
        )
      })
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-3ec0e45e", esExports)
  }
}

/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Pacotes_vue__ = __webpack_require__(20);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_342f2c35_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Pacotes_vue__ = __webpack_require__(78);
var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Pacotes_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_342f2c35_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Pacotes_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/itens/Pacotes.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-342f2c35", Component.options)
  } else {
    hotAPI.reload("data-v-342f2c35", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-content",
    [
      _c(
        "v-container",
        { attrs: { fluid: "", "grid-list-lg": "" } },
        [
          _c(
            "v-layout",
            { attrs: { row: "", wrap: "" } },
            [
              _c(
                "v-flex",
                { attrs: { xs12: "" } },
                [
                  _c("v-subheader", [
                    _c("span", { staticClass: "headline font-weight-thin" }, [
                      _vm._v(_vm._s(_vm.title))
                    ]),
                    _vm._v(" "),
                    _c("span", { staticClass: "caption pl-3" }, [
                      _vm._v(" (" + _vm._s(_vm.packages.length) + ")")
                    ])
                  ])
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-slide-y-transition",
            { attrs: { "hide-on-leave": "", "leave-absolute": "" } },
            [
              _c("loading", {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.loading,
                    expression: "loading"
                  }
                ]
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-layout",
            { attrs: { row: "", wrap: "" } },
            _vm._l(_vm.packages, function(item) {
              return _c(
                "v-flex",
                { key: item.name, attrs: { xs12: "", sm6: "", md3: "" } },
                [
                  _c(
                    "v-card",
                    [
                      _c(
                        "v-expansion-panel",
                        [
                          _c(
                            "v-expansion-panel-content",
                            { staticClass: "list-of-itens" },
                            [
                              _c(
                                "div",
                                { attrs: { slot: "header" }, slot: "header" },
                                [
                                  _c(
                                    "v-layout",
                                    {
                                      attrs: {
                                        row: "",
                                        subheading: "",
                                        "font-weight-thin": ""
                                      }
                                    },
                                    [
                                      _c("v-flex", { attrs: { xs8: "" } }, [
                                        _vm._v(
                                          "\n                    " +
                                            _vm._s(item.name) +
                                            "\n                  "
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c(
                                        "v-flex",
                                        { attrs: { xs4: "" } },
                                        [
                                          _c(
                                            "v-icon",
                                            {
                                              staticClass: "pr-1",
                                              attrs: {
                                                small: "",
                                                color: "amber accent-4"
                                              }
                                            },
                                            [_vm._v("fas fa-dollar-sign")]
                                          ),
                                          _vm._v(
                                            _vm._s(item.value) +
                                              "\n                  "
                                          )
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-card",
                                [
                                  _c(
                                    "v-card-text",
                                    [
                                      _c(
                                        "v-layout",
                                        {
                                          attrs: {
                                            row: "",
                                            wrap: "",
                                            "body-1": ""
                                          }
                                        },
                                        [
                                          _c(
                                            "v-flex",
                                            { attrs: { xs12: "" } },
                                            [
                                              _vm._v(
                                                "\n                      " +
                                                  _vm._s(item.description) +
                                                  "\n                    "
                                              )
                                            ]
                                          )
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            }),
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-342f2c35", esExports)
  }
}

/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_DiceRoller_vue__ = __webpack_require__(21);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0ae3b256_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_DiceRoller_vue__ = __webpack_require__(93);
var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_DiceRoller_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0ae3b256_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_DiceRoller_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/tools/DiceRoller.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0ae3b256", Component.options)
  } else {
    hotAPI.reload("data-v-0ae3b256", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Dice_vue__ = __webpack_require__(22);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6daddfea_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Dice_vue__ = __webpack_require__(83);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(81)
}
var normalizeComponent = __webpack_require__(1)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Dice_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6daddfea_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Dice_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/tools/Dice.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6daddfea", Component.options)
  } else {
    hotAPI.reload("data-v-6daddfea", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(82);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("61c258ec", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?{\"minimize\":true,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6daddfea\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Dice.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?{\"minimize\":true,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6daddfea\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Dice.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, ".dice{vertical-align:middle;width:100%}.buttons{font-size:1.4em;border-radius:50%;padding:3px;font-weight:bolder}.buttons--remove{border:1px solid #ff5252;color:#ff5252!important}.buttons--add{border:1px solid #4caf50;color:#4caf50!important}", ""]);

// exports


/***/ }),
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-card",
    { staticClass: "dice__card xs6" },
    [
      _c(
        "v-card-text",
        { staticClass: "text-xs-center" },
        [
          _c(
            "v-layout",
            { attrs: { row: "", wrap: "", "align-center": "" } },
            [
              _c("v-flex", { attrs: { xs2: "", "py-0": "" } }, [
                _c("img", {
                  staticClass: "dice",
                  attrs: { src: __webpack_require__(84)("./d" + this.dice + ".png") }
                })
              ]),
              _vm._v(" "),
              _c(
                "v-flex",
                { attrs: { xs1: "" } },
                [
                  _c(
                    "v-layout",
                    {
                      attrs: { row: "", wrap: "", "justify-space-between": "" }
                    },
                    [
                      _c(
                        "v-flex",
                        { attrs: { xs12: "", "pa-0": "" } },
                        [
                          _c(
                            "v-icon",
                            {
                              staticClass: "buttons buttons--remove",
                              on: {
                                click: function($event) {
                                  return _vm.removeDice()
                                }
                              }
                            },
                            [_vm._v("remove")]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-flex",
                        { attrs: { xs12: "", "px-0": "", "py-1": "" } },
                        [
                          _vm._v(
                            "\n            x " +
                              _vm._s(_vm.qtdeDice) +
                              "\n          "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-flex",
                        { attrs: { xs12: "", "pa-0": "" } },
                        [
                          _c(
                            "v-icon",
                            {
                              staticClass: "buttons buttons--add",
                              on: {
                                click: function($event) {
                                  return _vm.addDice()
                                }
                              }
                            },
                            [_vm._v("add")]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-flex",
                { attrs: { xs7: "", "py-0": "", "text-xs-center": "" } },
                [
                  _c(
                    "div",
                    {
                      staticClass: "title",
                      class:
                        _vm.rolled === 0
                          ? "grey--text text--lighten-1"
                          : "light-blue--text text--darken-2"
                    },
                    [_vm._v("\n          " + _vm._s(_vm.rolled) + "\n        ")]
                  ),
                  _vm._v(" "),
                  this.qtdeDice > 1 && !_vm.calculando
                    ? _c("div", { staticClass: "caption" }, [
                        _vm._v("\n          " + _vm._s(_vm.sum) + "\n        ")
                      ])
                    : _vm._e()
                ]
              ),
              _vm._v(" "),
              _c(
                "v-flex",
                {
                  attrs: { xs2: "", "pa-0": "" },
                  on: {
                    click: function($event) {
                      return _vm.rollDiceSimple()
                    }
                  }
                },
                [
                  _c(
                    "v-btn",
                    {
                      attrs: {
                        fab: "",
                        small: "",
                        outline: "",
                        color: "primary"
                      }
                    },
                    [_c("v-icon", [_vm._v("autorenew")])],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-6daddfea", esExports)
  }
}

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./d10.png": 85,
	"./d100.png": 86,
	"./d12.png": 87,
	"./d2.png": 88,
	"./d20.png": 89,
	"./d4.png": 90,
	"./d6.png": 91,
	"./d8.png": 92
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 84;

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/d10.405c8ad.png";

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/d100.b36e2b9.png";

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/d12.c765991.png";

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/d2.a5d76ab.png";

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/d20.e12e6ec.png";

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/d4.ff42d1a.png";

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/d6.1589412.png";

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/d8.790d139.png";

/***/ }),
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-content",
    [
      _c(
        "v-container",
        { attrs: { fluid: "", "grid-list-lg": "", "fill-height": "" } },
        [
          _c(
            "v-layout",
            {
              attrs: {
                row: "",
                wrap: "",
                "justify-space-around": "",
                "fill-height": ""
              }
            },
            _vm._l(_vm.dices, function(dice) {
              return _c(
                "v-flex",
                {
                  key: dice,
                  attrs: { xs12: "", sm6: "", md4: "", "my-2": "" }
                },
                [_c("dice", { attrs: { dice: dice } })],
                1
              )
            }),
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-0ae3b256", esExports)
  }
}

/***/ }),
/* 94 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_TurnTracker_vue__ = __webpack_require__(23);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_14456b72_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_TurnTracker_vue__ = __webpack_require__(121);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(95)
}
var normalizeComponent = __webpack_require__(1)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_TurnTracker_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_14456b72_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_TurnTracker_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/tools/TurnTracker.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-14456b72", Component.options)
  } else {
    hotAPI.reload("data-v-14456b72", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(96);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("bebe32b0", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?{\"minimize\":true,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-14456b72\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./TurnTracker.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?{\"minimize\":true,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-14456b72\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./TurnTracker.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "#turn-tracker .theme--light.v-text-field--outline .v-input__slot{border:1px solid #ccc!important}.button--fixedBottom{margin-bottom:40px!important;height:52px}.buttons{font-size:1.4em;border-radius:50%;padding:3px;font-weight:bolder}.buttons--remove{border:1px solid #ff5252;color:#ff5252!important}.buttons--add{border:1px solid #4caf50;color:#4caf50!important}#turn-tracker .v-text-field{padding-top:0}.item{border:1px solid #ccc;border-radius:5px;opacity:.5}.dead{border:3px solid red;opacity:.35}.selected{background-color:#e0f7e169;border:2px solid #4caf50;opacity:1}.close_badge{width:100%}.close_badge .v-badge__badge{right:-7px!important}.close_badge .v-badge__badge span i{vertical-align:middle}.round{border-radius:50%;padding:5px;margin-top:-5px!important;color:#fff!important;background-color:#ff5252}", ""]);

// exports


/***/ }),
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-content",
    [
      _c(
        "v-container",
        { attrs: { fluid: "", "grid-list-lg": "", id: "turn-tracker" } },
        [
          _c(
            "v-layout",
            { attrs: { row: "", wrap: "" } },
            [
              _c(
                "v-flex",
                { attrs: { xs12: "", "mb-5": "" } },
                [
                  _c(
                    "v-layout",
                    {
                      attrs: { row: "", wrap: "", "justify-space-between": "" }
                    },
                    [
                      _c(
                        "v-flex",
                        { attrs: { xs12: "" } },
                        [
                          _c("v-text-field", {
                            attrs: { "single-line": "", label: "Nome" },
                            model: {
                              value: _vm.name,
                              callback: function($$v) {
                                _vm.name = $$v
                              },
                              expression: "name"
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-layout",
                    {
                      attrs: { row: "", wrap: "", "justify-space-between": "" }
                    },
                    [
                      _c(
                        "v-flex",
                        { attrs: { xs4: "", "py-0": "" } },
                        [
                          _c("v-text-field", {
                            attrs: {
                              type: "number",
                              "single-line": "",
                              outline: "",
                              "prepend-inner-icon": "flash_on"
                            },
                            model: {
                              value: _vm.initiative,
                              callback: function($$v) {
                                _vm.initiative = $$v
                              },
                              expression: "initiative"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-flex",
                        { attrs: { xs4: "", "py-0": "" } },
                        [
                          _c("v-text-field", {
                            attrs: {
                              type: "number",
                              "single-line": "",
                              outline: "",
                              "prepend-inner-icon": "ico-shield"
                            },
                            model: {
                              value: _vm.armorClass,
                              callback: function($$v) {
                                _vm.armorClass = $$v
                              },
                              expression: "armorClass"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-flex",
                        { attrs: { xs4: "", "py-0": "" } },
                        [
                          _c("v-text-field", {
                            attrs: {
                              type: "number",
                              "single-line": "",
                              outline: "",
                              "prepend-inner-icon": "favorite_border"
                            },
                            model: {
                              value: _vm.healthPoints,
                              callback: function($$v) {
                                _vm.healthPoints = $$v
                              },
                              expression: "healthPoints"
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-layout",
                    {
                      attrs: { row: "", wrap: "", "justify-space-between": "" }
                    },
                    [
                      _c(
                        "v-flex",
                        { attrs: { xs6: "", "pb-0": "" } },
                        [
                          _c(
                            "v-btn",
                            {
                              attrs: {
                                block: "",
                                flat: "",
                                outline: "",
                                color: "error"
                              },
                              on: {
                                click: function($event) {
                                  return _vm.add(0)
                                }
                              }
                            },
                            [
                              _c("v-icon", [_vm._v("add")]),
                              _vm._v("inimigo\n            ")
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-flex",
                        { attrs: { xs6: "", "pb-0": "" } },
                        [
                          _c(
                            "v-btn",
                            {
                              attrs: {
                                block: "",
                                flat: "",
                                outline: "",
                                color: "info"
                              },
                              on: {
                                click: function($event) {
                                  return _vm.add(1)
                                }
                              }
                            },
                            [
                              _c("v-icon", [_vm._v("add")]),
                              _vm._v("jogador\n            ")
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-layout",
            {
              staticClass: "pb-5 mt-3 mb-5",
              attrs: {
                row: "",
                wrap: "",
                "align-content-start": "",
                "justify-space-between": "",
                "fill-height": ""
              }
            },
            _vm._l(_vm.players, function(item, i) {
              return _c(
                "v-flex",
                {
                  key: item.id,
                  class: {
                    item: true,
                    dead: item.hp <= 0,
                    selected: i === _vm.selected
                  },
                  attrs: {
                    xs12: "",
                    sm6: "",
                    md4: "",
                    "pa-2": "",
                    "pb-3": "",
                    "mx-1": "",
                    "my-2": "",
                    id: "item-" + item.id
                  },
                  on: {
                    click: function($event) {
                      return _vm.openDialog(item)
                    }
                  }
                },
                [
                  _c(
                    "v-flex",
                    {
                      class: { "error--text text--darken-1": !item.tipo },
                      attrs: {
                        subheading: "",
                        "text-uppercase": "",
                        "font-weight-bold": ""
                      }
                    },
                    [_vm._v("\n          " + _vm._s(item.name) + "\n        ")]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-layout",
                    {
                      staticClass: "subheading",
                      attrs: { row: "", wrap: "", "justify-space-between": "" }
                    },
                    [
                      _c(
                        "v-flex",
                        { attrs: { xs3: "" } },
                        [
                          _c("v-icon", [_vm._v("flash_on")]),
                          _vm._v(_vm._s(item.init) + "\n          ")
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-flex",
                        { attrs: { xs3: "" } },
                        [
                          _c("v-icon", [_vm._v("ico-shield")]),
                          _vm._v(_vm._s(item.ca) + "\n          ")
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-flex",
                        { attrs: { xs4: "" } },
                        [
                          _c("v-icon", [_vm._v("favorite_border")]),
                          _vm._v(_vm._s(item.hp) + "\n          ")
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-flex",
                        { attrs: { xs2: "", "text-xs-center": "" } },
                        [
                          _c(
                            "v-icon",
                            {
                              staticClass: "buttons buttons--remove",
                              attrs: { color: "red" },
                              on: {
                                click: function($event) {
                                  $event.stopPropagation()
                                  return _vm.remove(item)
                                }
                              }
                            },
                            [_vm._v("close")]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            }),
            1
          ),
          _vm._v(" "),
          _c(
            "v-dialog",
            {
              attrs: { "max-width": "360px" },
              model: {
                value: _vm.dialog,
                callback: function($$v) {
                  _vm.dialog = $$v
                },
                expression: "dialog"
              }
            },
            [
              _c(
                "v-card",
                [
                  _c(
                    "v-card-text",
                    [
                      _c(
                        "v-layout",
                        {
                          staticClass: "my-3",
                          attrs: {
                            row: "",
                            wrap: "",
                            "align-center": "",
                            "justify-space-around": ""
                          }
                        },
                        [
                          _c(
                            "v-flex",
                            { attrs: { xs12: "" } },
                            [
                              _c("v-text-field", {
                                attrs: { "single-line": "", label: "Nome" },
                                model: {
                                  value: _vm.item.name,
                                  callback: function($$v) {
                                    _vm.$set(_vm.item, "name", $$v)
                                  },
                                  expression: "item.name"
                                }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-layout",
                        {
                          staticClass: "my-3",
                          attrs: {
                            row: "",
                            wrap: "",
                            "align-center": "",
                            "justify-space-around": ""
                          }
                        },
                        [
                          _c(
                            "v-flex",
                            { attrs: { xs1: "" } },
                            [
                              _c(
                                "v-icon",
                                {
                                  staticClass: "buttons buttons--remove",
                                  attrs: { color: "red" },
                                  on: {
                                    click: function($event) {
                                      return _vm.down("init")
                                    }
                                  }
                                },
                                [_vm._v("remove")]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-flex",
                            { attrs: { xs4: "" } },
                            [
                              _c("v-text-field", {
                                attrs: {
                                  type: "number",
                                  "single-line": "",
                                  outline: "",
                                  "prepend-inner-icon": "flash_on"
                                },
                                model: {
                                  value: _vm.item.init,
                                  callback: function($$v) {
                                    _vm.$set(_vm.item, "init", $$v)
                                  },
                                  expression: "item.init"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-flex",
                            { attrs: { xs1: "" } },
                            [
                              _c(
                                "v-icon",
                                {
                                  staticClass: "buttons buttons--add",
                                  attrs: { color: "success" },
                                  on: {
                                    click: function($event) {
                                      return _vm.up("init")
                                    }
                                  }
                                },
                                [_vm._v("add")]
                              )
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-layout",
                        {
                          staticClass: "my-3",
                          attrs: {
                            row: "",
                            wrap: "",
                            "align-center": "",
                            "justify-space-around": ""
                          }
                        },
                        [
                          _c(
                            "v-flex",
                            { attrs: { xs1: "" } },
                            [
                              _c(
                                "v-icon",
                                {
                                  staticClass: "buttons buttons--remove",
                                  attrs: { color: "red" },
                                  on: {
                                    click: function($event) {
                                      return _vm.down("ca")
                                    }
                                  }
                                },
                                [_vm._v("remove")]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-flex",
                            { attrs: { xs4: "" } },
                            [
                              _c("v-text-field", {
                                attrs: {
                                  type: "number",
                                  "single-line": "",
                                  outline: "",
                                  "prepend-inner-icon": "ico-shield"
                                },
                                model: {
                                  value: _vm.item.ca,
                                  callback: function($$v) {
                                    _vm.$set(_vm.item, "ca", $$v)
                                  },
                                  expression: "item.ca"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-flex",
                            { attrs: { xs1: "" } },
                            [
                              _c(
                                "v-icon",
                                {
                                  staticClass: "buttons buttons--add",
                                  attrs: { color: "success" },
                                  on: {
                                    click: function($event) {
                                      return _vm.up("ca")
                                    }
                                  }
                                },
                                [_vm._v("add")]
                              )
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-layout",
                        {
                          staticClass: "my-3",
                          attrs: {
                            row: "",
                            wrap: "",
                            "align-center": "",
                            "justify-space-around": ""
                          }
                        },
                        [
                          _c(
                            "v-flex",
                            { attrs: { xs1: "" } },
                            [
                              _c(
                                "v-icon",
                                {
                                  staticClass: "buttons buttons--remove",
                                  attrs: { color: "red" },
                                  on: {
                                    click: function($event) {
                                      return _vm.down("hp")
                                    }
                                  }
                                },
                                [_vm._v("remove")]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-flex",
                            { attrs: { xs4: "" } },
                            [
                              _c("v-text-field", {
                                attrs: {
                                  type: "number",
                                  "single-line": "",
                                  outline: "",
                                  "prepend-inner-icon": "favorite_border"
                                },
                                model: {
                                  value: _vm.item.hp,
                                  callback: function($$v) {
                                    _vm.$set(_vm.item, "hp", $$v)
                                  },
                                  expression: "item.hp"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-flex",
                            { attrs: { xs1: "" } },
                            [
                              _c(
                                "v-icon",
                                {
                                  staticClass: "buttons buttons--add",
                                  attrs: { color: "success" },
                                  on: {
                                    click: function($event) {
                                      return _vm.up("hp")
                                    }
                                  }
                                },
                                [_vm._v("add")]
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-snackbar",
            {
              attrs: {
                color: "error",
                top: "",
                "multi-line": "",
                timeout: 3000
              },
              model: {
                value: _vm.snackbar,
                callback: function($$v) {
                  _vm.snackbar = $$v
                },
                expression: "snackbar"
              }
            },
            [
              _vm._v(
                '\n      Insira "' +
                  _vm._s(this.emptyProperty) +
                  '" para continuar\n      '
              ),
              _c(
                "v-btn",
                {
                  attrs: { dark: "", flat: "" },
                  on: {
                    click: function($event) {
                      _vm.snackbar = false
                    }
                  }
                },
                [_vm._v("\n        Fechar\n      ")]
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-btn",
        {
          staticClass: "button--fixedBottom",
          attrs: {
            fixed: "",
            bottom: "",
            block: "",
            dark: "",
            color: "green",
            disabled: _vm.disableNext || this.players.length < 1
          },
          on: { click: _vm.next }
        },
        [_c("v-icon", [_vm._v("navigate_next")]), _vm._v("próximo turno\n  ")],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-14456b72", esExports)
  }
}

/***/ }),
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Loading_vue__ = __webpack_require__(25);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_efe9d588_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Loading_vue__ = __webpack_require__(128);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(126)
}
var normalizeComponent = __webpack_require__(1)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-efe9d588"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Loading_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_efe9d588_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Loading_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/Loading.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-efe9d588", Component.options)
  } else {
    hotAPI.reload("data-v-efe9d588", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(127);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("1d126e6a", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?{\"minimize\":true,\"sourceMap\":false}!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-efe9d588\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Loading.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?{\"minimize\":true,\"sourceMap\":false}!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-efe9d588\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Loading.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, ".rotate[data-v-efe9d588]{height:70px;opacity:.35;animation:example-data-v-efe9d588 5s linear infinite}@keyframes example-data-v-efe9d588{0%{transform:rotate(0)}to{transform:rotate(1turn)}}", ""]);

// exports


/***/ }),
/* 128 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-fade-transition",
    [
      _c(
        "v-flex",
        {
          staticClass: "text-xs-center",
          attrs: { xs12: "", "py-5": "", "my-5": "" }
        },
        [
          _c("div", { staticClass: "py-5 my-5 primary--text heading" }, [
            _c("img", {
              staticClass: "rotate",
              attrs: { src: __webpack_require__(129) }
            })
          ])
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-efe9d588", esExports)
  }
}

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/loading.ab4bc22.png";

/***/ }),
/* 130 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = loadData;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_spells__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_spells___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__data_spells__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_weapons__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_weapons___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__data_weapons__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_armors__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_armors___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__data_armors__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_packages__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_packages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__data_packages__);





function loadData () {
  localStorage.setItem('spellList', JSON.stringify(__WEBPACK_IMPORTED_MODULE_0__data_spells___default.a))
  localStorage.setItem('weaponsList', JSON.stringify(__WEBPACK_IMPORTED_MODULE_1__data_weapons___default.a))
  localStorage.setItem('armorsList', JSON.stringify(__WEBPACK_IMPORTED_MODULE_2__data_armors___default.a))
  localStorage.setItem('packagesList', JSON.stringify(__WEBPACK_IMPORTED_MODULE_3__data_packages___default.a))
  localStorage.setItem('money', 0)
}


/***/ }),
/* 131 */
/***/ (function(module, exports) {

module.exports = [{"id":90,"level":"2","name":"Acalmar Emoções","name_en":"Calm Emotions","school":{"pt":"Encantamento","style":"enchantment"},"castingTime":"1 ação","range":"18 metros","components":"V, S","concentration":"s","duration":"até 1 minuto","description":"Você tenta suprimir emoções fortes em um grupo de pessoas. Cada humanoide em uma esfera de 6 metros de raio, centrada em um ponto que você escolher dentro do alcance, deve realizar um teste de resistência de Carisma. Uma criatura pode escolher falhar nesse teste, se desejar. Se uma criatura falhar na resistência, escolha um dentre os dois efeitos a seguir.</p><p> Você pode suprimir qualquer efeito que esteja deixando a criatura enfeitiçada ou amedrontada. Quando essa magia terminar, qualquer efeito suprimido volta a funcionar, considerando que sua duração não tenha acabado nesse meio tempo.</p><p> Alternativamente, você pode tornar um alvo indiferente às criaturas que você escolher que forem hostis a ele. Essa indiferença acaba se o alvo for atacado ou ferido por uma magia ou se ele testemunhar qualquer dos seus amigos sendo ferido. Quando a magia terminar, a criatura se tornará hostil novamente, a não ser que o Mestre diga o contrário.","classes":["Bardo","Clérigo"],"favorite":false},{"id":198,"level":"4","name":"Adivinhação","name_en":"Divination","ritual":"s","school":{"pt":"Adivinhação","style":"divination"},"castingTime":"1 ação","range":"pessoal","components":"V, S, M","duration":"instantânea","material":"incenso e uma oferenda apropriada para sacrifício à sua religião, juntos valendo, no mínimo, 25 po, consumidos pela magia","description":"Sua magia e uma oferenda colocam você em contato com um deus ou servo divino. Você faz uma única pergunta a respeito de um objetivo, evento ou atividade específico que irá ocorrer dentro de 7 dias. O Mestre oferece uma resposta confiável. A resposta deve ser uma frase curta, uma rima enigmática ou um presságio.</p><p> A magia não leva em consideração qualquer possível circunstância que possa mudar o que está por vir, como a conjuração de magias adicionais ou a perda ou ganho de um companheiro.</p><p> Se você conjurar a magia duas ou mais vezes antes de completar seu próximo descanso longo, existe uma chance cumulativa de 25 por cento de cada conjuração, depois da primeira que você fez, ter um resultado aleatório. O Mestre faz essa jogada secretamente.","classes":["Clérigo"],"favorite":false},{"id":91,"level":"2","name":"Ajuda","name_en":"Aid","school":{"pt":"Abjuração","style":"abjuration"},"castingTime":"1 ação","range":"9 metros","components":"V, S, M","duration":"8 horas","material":"uma pequena fita de tecido branco","description":"Sua magia inspira seus aliados com vigor e determinação. Escolha até três criaturas dentro do alcance. O máximo de pontos de vida e os pontos de vida atuais de cada alvo aumentam em 5, pela duração.</p><p><strong> Em Níveis Superiores </strong>. Quando você conjurar essa magia usando um espaço de magia de 3° nível ou superior, os pontos de vida dos alvos aumentam em 5 pontos adicionais para cada nível do espaço acima do o 2°.","classes":["Clérigo","Paladino"],"favorite":false},{"id":27,"level":"1","name":"Alarme","name_en":"Alarm","ritual":"s","school":{"pt":"Abjuração","style":"abjuration"},"castingTime":"1 minuto","range":"9 metros","components":"V, S, M","duration":"8 horas","material":"um pequeno sino e um pequeno fio de prata","description":"Você coloca um alarme para intrusos desavisados. Escolha uma porta, uma janela ou uma área dentro do alcance que não seja maior que 6 metros cúbicos. Até a magia acabar, um alarme alerta você sempre que uma criatura Miúda ou maior tocarem ou entrarem na área protegida. Quando você conjura a magia, você pode designar as criaturas que não ativarão o alarme. Você também escolhe se o alarme será mental ou audível.</p><p> Um alarme mental alerta você com um silvo na sua mente, se você estiver a até de 1,5 quilômetro da área protegida. Esse silvo acordará você se você estiver dormindo.</p><p> Um alarme audível produz o som de um sino de mão por 10 minutos num raio de 18 metros.","classes":["Mago","Patrulheiro"],"favorite":false},{"id":275,"level":"6","name":"Aliado Planar","name_en":"Planar Ally","school":{"pt":"Conjuração","style":"conjuration"},"castingTime":"10 minutos","range":"18 metros","components":"V, S","duration":"instantânea","description":"Você suplica a uma entidade transcendental por ajuda. O ser deve ser conhecido por você: seu deus, um primordial, um príncipe demônio ou algum outro ser de poder cósmico. Essa entidade envia um celestial, um corruptor ou um elemental leal a ela para ajudar você, fazendo a criatura aparecer em um espaço desocupado dentro do alcance. Se você conhecer o nome de uma criatura especifica, você pode falar o nome quando conjurar essa magia para requisitar essa criatura, do contrário, você pode receber uma criatura diferente de qualquer forma (à escolha do Mestre).</p><p> Quando a criatura aparecer, ela não está sob nenhuma compulsão para se comportar de um modo em particular. Você pode pedir a criatura que realize um serviço em troca de um pagamento, mas ela não é obrigada a fazê - lo. A tarefa solicitada pode variar de simples (carregue - nos voando para o outro lado do abismo ou nos ajude a lutar essa batalha) a complexa (espione nossos inimigos ou nos proteja durante nossa incursão na masmorra). Você deve ser capaz de se comunicar com a criatura para barganhar os serviços dela.</p><p> O pagamento pode ser feito de várias formas. Um celestial pode requerer uma generosa doação de ouro ou itens mágicos para um templo aliado, enquanto que um corruptor pode exigir um sacrifício vivo ou uma parte dos espólios. Algumas criaturas podem trocar seus serviços por uma missão feita por você.</p><p> Como regra geral, uma tarefa que possa ser medida em minutos, exigirá um pagamento de 100 po por minuto. Uma tarefa medida em horas exigirá 1. 000 po por hora. E uma tarefa medida em dias (até 10 dias) exigirá 10. 000 po por dia. O Mestre pode ajustar esses pagamentos baseado nas circunstâncias pelas quais a magia foi conjurada. Se a tarefa estiver de acordo com o caráter da criatura, o pagamento pode ser reduzido à metade, ou mesmo dispensado. Tarefas que não proporcionem perigo, tipicamente requerem apenas metade do pagamento sugerido, enquanto que tarefas especialmente perigosas podem exigir um grande presente. As criaturas raramente aceitarão tarefas que pareçam suicidas.</p><p> Após a criatura completar a tarefa ou quando a duração acordada para o serviço expirar, a criatura retornará para seu plano natal depois de relatar sua partida a você, se apropriado para a tarefa e se possível. Se você não for capaz de acertar um preço para os serviços da criatura, ela imediatamente voltará para o seu plano natal.</p><p> Uma criatura convidada para se juntar ao seu grupo, conta como um membro dele, recebendo sua parte total na premiação de pontos de experiência.","classes":["Clérigo"],"favorite":false},{"id":233,"level":"5","name":"Aljava Veloz","name_en":"Swift Quiver","school":{"pt":"Transmutação","style":"transmutation"},"castingTime":"1 ação bônus","range":"toque","components":"V, S, M","concentration":"s","duration":"até 1 minuto","material":"uma aljava contendo, pelo menos, uma munição","description":"Você transmuta sua aljava para que ela produza um suprimento interminável de munições não - mágicas, que parecem saltar na sua mão quando você tenta pegá-las.</p><p> Em cada um dos seus turnos, até a magia acabar, você pode usar uma ação bônus para realizar dois ataques com uma arma que use munição de uma aljava. Cada vez que você fizer tais ataques à distância, sua aljava, magicamente, repõe a munição que você usou com uma munição não - mágica similar. Qualquer munição criada por essa magia se desintegra quando a magia acaba. Se a aljava não estiver mais com você, a magia acaba.","classes":["Patrulheiro"],"favorite":false},{"id":345,"level":"9","name":"Alterar Forma","name_en":"Shapechange","school":{"pt":"Transmutação","style":"transmutation"},"castingTime":"1 ação","range":"pessoal","components":"V, S, M","concentration":"s","duration":"até 1 hora","material":"uma argola de jade valendo, no mínimo, 1. 500 po, que você deve colocar na sua cabeça antes de conjurar a magia","description":"Você assume a forma de uma criatura diferente, pela duração. A nova forma pode ser qualquer criatura com um nível de desafio igual ao seu nível ou menor. A criatura não pode ser nem um constructo nem um morto - vivo e você deve ter visto esse tipo de criatura pelo menos uma vez. Você se transforma num exemplar médio da criatura, um sem quaisquer níveis de classe nem característica Conjuração.</p><p> Suas estatísticas de jogo são substituídas pelas estatísticas da forma escolhida, no entanto, você mantém sua tendência e valores de Inteligência, Sabedoria e Carisma. Você também mantém suas proficiências em testes de resistência, além de ganhar as da nova criatura. Se a criatura tiver a mesma proficiência que você e o bônus listado nas estatísticas dela for maior que o seu, use os bônus da criatura no lugar do seu. Você não pode usar qualquer ação lendária ou de covil da nova forma.</p><p> Você assume os pontos de vida e Dados de Vida da sua nova forma. Quando você reverter a sua forma normal, você retorna à quantidade de pontos de vida que tinha antes da transformação. Se você reverter como resultado de ter caído a 0 pontos de vida, qualquer dano excedente é recebido pela sua forma normal. Contato que o dano excedente não reduza os pontos de vida da sua forma normal a 0, você não cairá inconsciente.</p><p> Você mantém os benefícios de qualquer característica da sua classe, raça ou outra fonte e pode usá-las, considerando que sua nova forma é fisicamente capaz de fazê - lo. Você não pode usar quaisquer sentidos especiais que você possua (por exemplo, visão no escuro) a não ser que a nova forma também possua o sentido. Você só poderá falar se a nova forma, normalmente, puder falar.</p><p> Quando você se transforma, você pode escolher se o seu equipamento cai no chão, é assimilado a sua nova forma ou é usado por ela. Equipamentos vestidos e carregados funcionam normalmente. O Mestre decide qual equipamento é viável para a nova forma vestir ou usar, baseado na forma e tamanho da criatura. O seu equipamento não muda de forma ou tamanho para se adaptar à nova forma e, qualquer equipamento que a nova forma não possa vestir deve, ou cair no chão ou ser assimilado por ela. Equipamentos assimilados não terão efeito nesse estado.</p><p> Pela duração da magia, você pode usar sua ação para assumir uma forma diferente, seguindo as mesmas restrições e regras da forma anterior, com uma exceção: se sua nova forma tiver mais pontos de vida que sua forma atual, seus pontos de vida mantém o valor atual.","classes":["Druida","Mago"],"favorite":false},{"id":92,"level":"2","name":"Alterar-se","name_en":"Alter Self","school":{"pt":"Transmutação","style":"transmutation"},"castingTime":"1 ação","range":"pessoal","components":"V, S","concentration":"s","duration":"até 1 hora","description":"Você assume uma forma diferente. Quando conjurar essa magia, escolha uma das seguintes opções, o efeito durará pela duração da magia. Enquanto a magia durar, você pode terminar uma opção com uma ação para ganhar os benefícios de uma diferente.</p><p><em><strong> Adaptação Aquática </strong></ em>. Você adapta seu corpo para um ambiente aquático, brotando guelras e crescendo membranas entre seus dedos. Você pode respirar embaixo d’ água e ganha deslocamento de natação igual a seu deslocamento terrestre.</p><p><em><strong> Mudar Aparência </strong></ em>. Você transforam sua aparência. Você decide com o que você parece, incluindo altura, peso, traços faciais, timbre da sua voz, comprimento do cabelo, coloração e características distintas, se tiverem. Você pode ficar parecido com um membro de outra raça, apesar de nenhuma de suas estatísticas mudar. Você também não pode parecer com uma criatura de um tamanho diferente do seu, e seu formado básico permanece o mesmo. Se você for bípede, você não pode usar essa magia para se tornar quadrupede, por exemplo. A qualquer momento, pela duração da magia, você pode usar sua ação para mudar sua aparência dessa forma, novamente.</p><p><em><strong> Armas Naturais </strong></ em>. Você faz crescerem garras, presas, espinhos, chifres ou armas naturais diferentes, à sua escolha. Seus ataques desarmados causam 1d6 de dano de concussão, perfurante ou cortante, como apropriado para a arma natural que você escolheu, e você é proficiente com seus ataques desarmados. Finalmente, a arma natural é mágica e você tem + 1 de bônus nas jogadas de ataque e dano que você fizer com ela.","classes":["Feiticeiro","Mago"],"favorite":false},{"id":0,"level":"0","name":"Amizade","name_en":"Friends","school":{"pt":"Encantamento","style":"enchantment"},"castingTime":"1 ação","range":"pessoal","components":"S, M","concentration":"s","duration":"até 1 minuto","material":"uma pequena quantidade de maquiagem aplicada ao rosto durante a conjuração da magia.","description":"Pela duração, você terá vantagem em todos os testes de Carisma direcionados a uma criatura, à sua escolha, que não seja hostil a você. Quando a magia acabar, a criatura perceberá que você usou maia para influenciar o humor dela, e ficará hostil a você. Uma criatura propensa a violência irá atacar você. Outra criatura pode buscar outras formas de retaliação (a critério do Mestre), dependendo da natureza da sua interação com ela.","classes":["Bardo","Bruxo","Feiticeiro","Mago"],"favorite":false},{"id":28,"level":"1","name":"Amizade Animal","name_en":"Animal Friendship","school":{"pt":"Encantamento","style":"enchantment"},"castingTime":"1 ação","range":"9 metros","components":"V, S, M","duration":"24 horas","material":"um punhado de comida","description":"Essa magia deixa você convencer uma besta que você não quer prejudicar. Escolha uma besta que você possa ver dentro do alcance. Ela deve ver e ouvir você. Se a Inteligência da besta for 4 ou maior, a magia falha. Do contrário, a besta deve ser bem sucedida num teste de resistência de Sabedoria ou ficará enfeitiçada por você pela duração da magia. Se você ou um dos seus companheiros ferir o alvo, a magia termina.</p><p><strong> Em Níveis Superiores </strong>. Quando você conjurar essa magia usando um espaço de magia de 2° nível ou superior, você pode afetar uma besta adicional para cada nível do espaço acima do 1°.","classes":["Bardo","Druida","Patrulheiro"],"favorite":false},{"id":149,"level":"3","name":"Ampliar Plantas","name_en":"Plant Growth","school":{"pt":"Transmutação","style":"transmutation"},"castingTime":"1 ação ou 8 horas","range":"45 metros","components":"V, S","duration":"instantânea","description":"Essa magia canaliza vitalidade nas plantas dentro de uma área especifica. Existem dois usos possíveis para essa magia, concedendo ou benefícios imediatos ou a longo prazo.</p><p> Se você conjurar essa magia usando 1 ação, escolha um ponto dentro do alcance. Todas as plantas normais num raio de 30 metros centrado no ponto, tornam - se espessas e carregadas. Uma criatura se movendo na área deve gastar 6 metros de movimento para cada 1,5 metro que se mover.</p><p> Você pode excluir uma ou mais áreas de qualquer tamanho, dentro da área da magia, para não ser afetada. Se você conjurar essa magia ao longo de 8 horas, você fertiliza a terra. Todas as plantas num raio de 800 metros, centrado no ponto dentro do alcance, ficam enriquecidas por 1 ano. As plantas fornecerão o dobro da quantidade normal de comida quando colhidas.","classes":["Bardo","Druida","Patrulheiro"],"favorite":false},{"id":234,"level":"5","name":"Âncora Planar","name_en":"Planar Binding","school":{"pt":"Abjuração","style":"abjuration"},"castingTime":"1 hora","range":"18 metros","components":"V, S, M","duration":"24 horas","material":"uma joia valendo, no mínimo, 1. 000 po, consumida pela magia","description":"Com essa magia, você tenta obrigar um celestial, corruptor, elemental ou fada a servi - lo. A criatura deve estar dentro do alcance durante toda a conjuração da magia. (Tipicamente, a criatura, primeiramente, é invocada dentro de um círculo mágico invertido para mantê - la presa enquanto a magia é conjurada.) Ao completar a conjuração, o alvo deve realizar um teste de resistência de Carisma. Se falhar na resistência, ela é obrigada a servir você pela duração. Se a criatura foi invocada ou criada por outra magia, a duração da magia é estendida para se equiparar a dessa magia.</p><p> Uma criatura obrigada deve seguir suas instruções da melhor forma que puder. Você poderia comandar a criatura a acompanhar você em uma aventura, a guardar um local ou a enviar uma mensagem. A criatura obedece ao pé da letra suas instruções, mas se a criatura for hostil a você, ela se esforçará para distorcer suas palavras para atingir seus próprios objetivos. Se a criatura atender suas instruções completamente antes da magia acabar, ela viajará até você para relatar esse fato se você estiver no mesmo plano de existência. Se você estiver em um plano de existência diferente, ela retornará para o lugar onde você a contatou e permanecerá lá até a magia acabar.</p><p><strong> Em Níveis Superiores </strong>. Quando você conjurar essa magia usando um espaço de magia de nível superior, a duração aumenta para 10 dias com um espaço de 6° nível, para 30 dias com um espaço de 7° nível, para 180 dias com um espaço de 8° nível e para um ano com um espaço de magia de 9° nível.","classes":["Bardo","Clérigo","Druida","Mago"],"favorite":false},{"id":150,"level":"3","name":"Andar Na Água","name_en":"Water Walk","ritual":"s","school":{"pt":"Transmutação","style":"transmutation"},"castingTime":"1 ação","range":"9 metros","components":"V, S, M","duration":"1 hora","material":"uma rolha","description":"Essa magia concede a habilidade de se mover através de qualquer superfície líquida– como água, ácido, lama, neve, arreia movediça ou lava– como se ela fosse chão sólido inofensivo (as criaturas atravessando lava derretida ainda podem sofrer dano do calor). Até dez criaturas voluntária que você possa ver, dentro do alcance, ganham essa habilidade pela duração.</p><p> Se você afetar uma criatura submersa em um líquido, a magia ergue o alvo para a superfície do líquido a uma taxa de 18 metros por rodada.","classes":["Clérigo","Druida","Feiticeiro","Patrulheiro"],"favorite":false},{"id":151,"level":"3","name":"Animar Mortos","name_en":"Animate Dead","school":{"pt":"Necromancia","style":"necromancy"},"castingTime":"1 minuto","range":"3 metros","components":"V, S, M","duration":"instantânea","material":"uma gota de sangue, um pedaço de carne e uma punhado de pó de osso","description":"Essa magia cria um servo morto - vivo. Escolha uma pilha de ossos ou um corpo de um humanoide Médio ou Pequeno dentro do alcance. Sua magia imbui o alvo com uma imitação corrompida de vida, erguendo - o como uma criatura morta - viva. O alvo se torna um esqueleto, se você escolheu ossos, ou um zumbi, se você escolheu um corpo (o Mestre tem as estatísticas de jogo da criatura).</p><p> Em cada um dos seus turnos, você pode usar uma ação bônus para comandar mentalmente qualquer criatura que você criou com essa magia, se a criatura estiver a até 18 metros de você (se você controla diversas criaturas, você pode comandar qualquer uma ou todas elas ao mesmo tempo, emitindo o mesmo comando para cada uma). Você decide qual ação a criatura irá fazer e para onde ela irá se mover durante o próximo turno dela, ou você pode emitir um comando geral, como para guardar uma câmara ou corredor especifico. Se você não der nenhum comando, as criaturas apenas se defenderão contra criaturas hostis. Uma vez que receba uma ordem, a criatura continuará a segui - la até a tarefa estar concluída.</p><p> A criatura fica sob seu controle por 24 horas, depois disso ela para de obedecer aos seus comandos. Para manter o controle da criatura por mais 24 horas, você deve conjurar essa magia na criatura novamente, antes das 24 horas atuais terminarem. Esse uso da magia recupera seu controle sobre até quatro criaturas que você tenha animado com essa magia, ao invés de animar uma nova.</p><p><strong> Em Níveis Superiores </strong>. Quando você conjurar essa magia usando um espaço de magia de 4° nível ou superior, você pode animar ou recuperar o controle de duas criaturas mortas - vivas para cada nível do espaço acima do 3°. Cada uma dessas criaturas deve vir de um corpo ou pilha de ossos diferente.","classes":["Clérigo","Mago"],"favorite":false},{"id":235,"level":"5","name":"Animar Objetos","name_en":"Animate Objects","school":{"pt":"Transmutação","style":"transmutation"},"castingTime":"1 ação","range":"36 metros","components":"V, S","concentration":"s","duration":"até 1 minuto","description":"Objetos ganham vida ao seu comando. Escolha até dez objetos não - mágicos dentro do alcance, que não estejam sendo vestidos ou carregados. Alvos Médios contam como dois objetos, alvos Grandes contam como quatro objetos e alvos Enormes contam como oito objetos. Você não pode animar um objeto maior que Enorme. Cada alvo se anima e torna - se uma criatura sob seu controle até o final da magia ou até ser reduzido a 0 pontos de vida.</p><p> Com uma ação bônus, você pode comandar mentalmente qualquer criatura que você criar com essa magia se a criatura estiver a até 150 metros de você (se você controla várias criaturas, você pode comandar qualquer ou todas elas ao mesmo tempo, emitindo o mesmo comando para cada uma). Você decide qual ação a criatura irá fazer e para onde ela irá se mover durante o próximo turno dela, ou você pode emitir um comando geral, como para guardar uma câmara ou corredor especifico. Se você não der nenhum comando, as criaturas apenas se defenderão contra criaturas hostis. Uma vez que receba uma ordem, a criatura continuará a segui - la até a tarefa estar concluída.","classes":["Bardo","Feiticeiro","Mago"],"favorite":false},{"id":327,"level":"8","name":"Antipatia/Simpatia","name_en":"Antipathy/Sympathy","school":{"pt":"Encantamento","style":"enchantment"},"castingTime":"1 hora","range":"18 metros","components":"V, S, M","duration":"10 dias","material":"ou um pedaço de alume embebido em vinagre para o efeito de antipatia, ou uma gota de mel para o efeito de simpatia","description":"Essa magia atrai ou repele as criaturas de sua escolha. Você escolhe um alvo dentro do alcance, tanto um objeto ou criatura Enorme ou menor ou uma área que não seja maior que 60 metros cúbicos. Então, especifica um tipo de criatura inteligente, como dragões vermelhos, goblins ou vampiros. Você envolve o alvo com uma aura que pode atrair ou repelir as criaturas especificas pela duração. Escolha antipatia ou simpatia como efeito da aura.</p><p><em><strong> Antipatia </strong></ em>. O encantamento faz com que criaturas do tipo designado por você sintam - se fortemente impelidos em deixar a área e evitar o alvo. Quando uma dessas criaturas puder ver o alvo ou ficar a 18 metros dele, a criatura deve ser bem sucedida num teste de resistência de Sabedoria ou ficará amedrontada. A criatura continuará amedrontada enquanto puder ver o alvo ou permanecer a 18 metros dele. Enquanto estiver amedrontada pelo alvo, a criatura deve usar seu deslocamento para se mover para o local seguro mais próximo o qual ela não possa ver o alvo. Se a criatura se mover para mais de 18 metros do alvo e não puder vê - lo, a criatura não estará mais amedrontada, mas ela ficará amedrontada novamente se voltar a ver o alvo ou ficar a 18 metros dele.</p><p><em><strong> Simpatia </strong></ em>. O encantamento faz com que as criaturas especificadas sintam - se fortemente impelidos a se aproximar do alvo enquanto estiverem a 18 metros dele ou puderem vê - lo. Quando uma dessas criaturas puder ver o alvo ou ficar a 18 metros dele, a criatura deve ser bem sucedida num teste de resistência de Vontade ou usará seu deslocamento em cada um dos seus turnos para entrar na área ou se mover até o alcance do alvo. Quando a criatura tiver feito isso, ela não poderá se afastar do alvo voluntariamente.</p><p> Se o alvo causar dano ou ferir a criatura afetada de alguma forma, a criatura afetada pode realizar um novo teste de resistência de Sabedoria para terminar o efeito, como descrito abaixo.</p><p><em><strong> Terminando o Efeito </strong></ em>. Se uma criatura afetada terminar se turno enquanto não estiver a até 18 metros do alvo ou não for capaz de vê - lo, a criatura faz um teste de resistência de Sabedoria. Em um sucesso, a criatura não estará mais afetada pelo alvo e reconhecerá o sentimento de repugnância ou atração como mágico. Além disso, uma criatura afetada pela magia tem direito a outro teste de resistência de Sabedoria a cada 24 horas enquanto a magia durar.</p><p> Uma criatura que obtenha sucesso na resistência contra esse efeito ficará imune a ele por 1 minuto, depois desse tempo, ela pode ser afetada novamente.","classes":["Druida","Mago"],"favorite":false},{"id":93,"level":"2","name":"Aprimorar Habilidade","name_en":"Enhance Ability","school":{"pt":"Transmutação","style":"transmutation"},"castingTime":"1 ação","range":"toque","components":"V, S, M","concentration":"s","duration":"até 1 hora","material":"pelo ou penas de uma besta","description":"Você toca uma criatura e a agracia com aprimoramento mágico. Escolha um dos efeitos a seguir, o alvo ganha esse efeito até o fim da magia.</p><p><em><strong> Agilidade do Gato </strong></ em>. O alvo tem vantagem em testes de Destreza. Ele também não sofre dano ao cair de 6 metros ou menos, se não estiver incapacitado.</p><p><em><strong> Esperteza da Raposa </strong></ em>. O alvo tem vantagem em testes de Inteligência.</p><p><em><strong> Esplendor da Águia </strong></ em>. O alvo tem vantagem em testes de Carisma.</p><p><em><strong> Força do Touro </strong></ em>. O alvo tem vantagem em testes de Força e sua capacidade de carga é dobrada.</p><p><em><strong> Sabedoria da Coruja </strong></ em>. O alvo tem vantagem em testes de Sabedoria.</p><p><em><strong> Vigor do Urso </strong></ em>. O alvo tem vantagem em testes de Constituição. Ele também recebe 2d6 pontos de vida temporários, que são perdidos quando a magia termina.</p><p><strong> Em Níveis Superiores </strong>. Quando você conjurar essa magia usando um espaço de magia de 3° nível ou superior, você pode afetar uma criatura adicional para cada nível do espaço acima do 2°.","classes":["Bardo","Clérigo","Druida","Feiticeiro"],"favorite":false},{"id":346,"level":"9","name":"Aprisionamento","name_en":"Imprisionment","school":{"pt":"Abjuração","style":"abjuration"},"castingTime":"1 minuto","range":"9 metros","components":"V, S, M","duration":"até ser dissipada","material":"um pergaminho de representação ou uma estatueta esculpida para se parecer com o alvo e um componente especial, que varia de acordo com a versão da magia que você escolher, valendo, no mínimo, 500 po por Dado de Vida","description":"Você cria um impedimento mágico para imobilizar uma criatura que você possa ver, dentro do alcance. O alvo deve ser bem sucedido num teste de resistência de Sabedoria ou será vinculado à magia. Se ele for bem sucedido, ele será imune a essa magia se você conjurá-la novamente. Enquanto estiver sob efeito dessa magia, a criatura não precisará respirar, comer ou beber e não envelhece. Magias de adivinhação não podem localizar ou perceber o alvo.</p><p> Quando você conjura essa magia, você escolhe uma das seguintes formas de aprisionamento.</p><p><em><strong> Enterrar </strong></ em>. O alvo é sepultado bem fundo na terra em uma esfera de energia mágica que é grande o suficiente para conter o alvo. Nada pode atravessar a esfera e nenhuma criatura pode se teletransportar ou usar viagem plantar para entrar ou sair dela.</p><p> O componente especial para essa versão da magia é um pequeno globo de mitral.</p><p><em><strong> Acorrentar </strong></ em>. Pesadas correntes, firmemente presas ao solo, matem o alvo no lugar. O alvo está impedido até a magia acabar e ele não pode se mover ou ser movido por nenhum meio, até lá.</p><p> O componente especial para essa versão da magia é uma fina corrente de metal precioso.</p><p><em><strong> Prisão Cercada </strong></ em>. A magia transporta o alvo para dentro de um pequeno semiplano que é protegido contra teletransporte e viagem planar. O semiplano pode ser um labirinto, uma jaula, uma torre ou qualquer estrutura ou área confinada similar, à sua escolha.</p><p> O componente material especial para essa versão da magia é uma representação em miniatura da prisão, feita de jade.</p><p><em><strong> Contenção Reduzida </strong></ em>. O alvo é reduzido até o tamanho de 30 centímetros e é aprisionado dentro de uma gema ou objeto similar. A luz pode passar através da gema normalmente (permitindo que o alvo veja o exterior e outras criaturas vejam o interior), mas nada mais pode atravessá-la, mesmo por meios de teletransporte ou viagem planar. A gema não pode ser partida ou quebrada enquanto a magia estiver efetiva.</p><p> O componente especial para essa versão da magia é uma gema transparente grande, como um coríndon, diamante ou rubi.</p><p><em><strong> Torpor </strong></ em>. O alvo cai no sono e não pode ser acordado.</p><p> O componente especial para essa versão da magia consiste em ervas soporíferas raras.</p><p><em><strong> Terminando a Magia </strong></ em>. Durante a conjuração da magia, em quaisquer das versões, você pode especificar uma condição que irá fazer a magia terminar e libertará o alvo. A condição pode ser o quão especifica ou elaborada quanto você quiser, mas o Mestre deve concordar que a condição é razoável e tem uma probabilidade de acontecer. As condições podem ser baseadas no nome, identidade ou divindade da criatura mas, no mais, devem ser baseadas em ações ou qualidades observáveis e não em valores intangíveis tais como nível, classe e pontos de vida.</p><p> A magia dissipar magia pode terminar a magia apenas se for conjurada como uma magia de 9° nível, tendo como alvo ou a prisão ou o componente especial usado para criá-la.</p><p> Você pode usar um componente especial em particular para criar apenas uma prisão por vez. Se você conjurar essa magia novamente usando o mesmo componente, o alvo da primeira conjuração é, imediatamente, liberado do vínculo.","classes":["Bruxo","Mago"],"favorite":false},{"id":199,"level":"4","name":"Arca Secreta de Leomund","name_en":"Leomund's Secret Chest","school":{"pt":"Conjuração","style":"conjuration"},"castingTime":"1 ação","range":"toque","components":"V, S, M","duration":"instantânea","material":"um baú requintado, de 90 cm por 60 cm por 60 cm, construído com materiais raros valendo, no mínimo, 5. 000 po e uma réplica Miúda feita do mesmo material valendo, no mínimo, 50 po","description":"Você esconde um baú, e todo o seu conteúdo, no Plano Etéreo. Você deve tocar o baú e a réplica em miniatura que serve como componente material para a magia. O baú pode acomodar até 3, 6 metros cúbicos de matéria inorgânica (90 cm por 60 cm por 60 cm).</p><p> Enquanto o baú permanecer no Plano Etéreo, você pode usar uma ação e tocar a réplica para revocar o baú. Ele aparece em um espaço desocupado no chão a 1,5 metro de você. Você pode enviar o baú de volta ao Plano Etéreo usando uma ação e tocando tanto no baú quanto na réplica.</p><p> Após 60 dias, existe 5 por cento de chance, cumulativa, por dia do efeito da magia terminar. Esse efeito termina se você conjurar essa magia novamente, se a pequena réplica do baú for destruída ou se você decidir terminar a magia usando uma ação. Se a magia terminar enquanto o baú maior estiver no Plano Etéreo, ele estará irremediavelmente perdido.","classes":["Mago"],"favorite":false},{"id":29,"level":"1","name":"Área Escorregadia","name_en":"Grease","school":{"pt":"Conjuração","style":"conjuration"},"castingTime":"1 ação","range":"18 metros","components":"V, S, M","duration":"1 minuto","material":"um pouco de pele de porco ou manteiga","description":"Graxa escorregadia cobre o solo em um quadrado de 3 metros centrado em um ponto, dentro do alcance, tornando essa área em terreno difícil pela duração.</p><p> Quando a graxa aparece, cada criatura de pé na área deve ser bem sucedida num teste de resistência de Destreza ou cairá no chão. Uma criatura que entre na área ou termine seu turno nela, deve ser bem sucedido num teste de resistência de Destreza ou cairá no chão.","classes":["Mago"],"favorite":false},{"id":152,"level":"3","name":"Arma Elemental","name_en":"Elemental Weapon","school":{"pt":"Transmutação","style":"transmutation"},"castingTime":"1 ação","range":"toque","components":"V, S","concentration":"s","duration":"até 1 hora","description":"Uma arma não - mágica que você tocar se torna uma arma mágica. Escolha um dos tipos de dano a seguir: ácido, elétrico, frio, fogo ou trovejante. Pela duração, a arma tem + 1 de bônus nas jogadas de ataque e causa 1d4 de dano extra, do tipo de elemento escolhido, ao atingir.</p><p><strong> Em Níveis Superiores </strong>. Quando você conjurar essa magia usando um espaço de magia de 5° ou 6° nível, o bônus nas jogadas de ataque aumenta pra + 2 e o dano extra aumenta para 2d4. Quando você usar um espaço de magia de 7° nível ou superior, o bônus aumenta para + 3 e o dano extra aumenta para 3d4.","classes":["Paladino"],"favorite":false},{"id":94,"level":"2","name":"Arma Espiritual","name_en":"Spiritual Weapon","school":{"pt":"Evocação","style":"evocation"},"castingTime":"1 ação bônus","range":"18 metros","components":"V, S","duration":"1 minuto","description":"Você cria uma arma espectral flutuante, dentro do alcance, que permanece pela duração ou até você conjurar essa magia novamente. Quando você conjura essa magia, você pode realizar um ataque corpo - a - corpo com magia contra uma criatura a 1,5 metro da arma. Se atingir, o alvo sofre dano de energia igual a 1d8 + seu modificador de habilidade de conjuração.</p><p> Com uma ação bônus, no seu turno, você pode mover a arma até 6 metros e repetir o ataque contra uma criatura a 1,5 metro dela.</p><p> A arma pode ter a forma que você desejar. Clérigos de divindades associadas com uma arma em particular (como St. Cuthbert é conhecido por sua maça ou Thor por s martelo) fazem o efeito dessa magia se assemelhar a essa arma.</p><p><strong> Em Níveis Superiores </strong>. Quando você conjurar essa magia usando um espaço de magia de 4° nível ou superior, o dano aumenta em 1d8 para cada dois níveis do espaço acima do 2°.","classes":["Clérigo"],"favorite":false},{"id":95,"level":"2","name":"Arma Mágica","name_en":"Magic Weapon","school":{"pt":"Transmutação","style":"transmutation"},"castingTime":"1 ação bônus","range":"toque","components":"V, S","concentration":"s","duration":"até 1 hora","description":"Você toca uma arma não - mágica. Até a magia acabar, a arma se torna uma arma mágica com + 1 de bônus nas jogadas de ataque e jogadas de dano.</p><p><strong> Em Níveis Superiores </strong>. Quando você conjurar essa magia usando um espaço de magia de 4° nível ou superior, o bônus aumenta para + 2. Quando você usar um espaço de magia de 6° nível ou superior, o bônus aumenta para + 3.","classes":["Mago","Paladino"],"favorite":false},{"id":30,"level":"1","name":"Armadura Arcana","name_en":"Mage Armor","school":{"pt":"Abjuração","style":"abjuration"},"castingTime":"1 ação","range":"toque","components":"V, S, M","duration":"8 horas","material":"um pedaço de couro curado","description":"Você toca uma criatura voluntária que não esteja vestindo armadura e uma energia mágica protetora a envolve até a magia acabar. A CA base do alvo se torna 13 + o modificador de Destreza dele. A magia acaba se o alvo colocar uma armadura ou se você dissipá-la usando uma ação.","classes":["Feiticeiro","Mago"],"favorite":false},{"id":31,"level":"1","name":"Armadura de Agathys","name_en":"Armor of Agathys","school":{"pt":"Abjuração","style":"abjuration"},"castingTime":"1 ação","range":"pessoal","components":"V, S, M","duration":"1 hora","material":"um copo de água","description":"Uma força mágicaprotetora envolve você, manifestando - se como um frio espectral que cobre você e seu equipamento. Você ganha 5 pontos de vida temporários pela duração. Se uma criatura atingir você com um ataque corpo - a - corpo enquanto estiver com esses pontos de vida, a criatura sofrerá 5 de dano de frio.</p><p><strong> Em Níveis Superiores </strong>. Quando você conjurar essa magia usando um espaço de magia de 2° nível ou superior, tanto os pontos de vida temporários quanto o dano de frio aumentam em 5 para cada nível do espaço acima do 1°.","classes":["Bruxo"],"favorite":false},{"id":96,"level":"2","name":"Arrombar","name_en":"Knock","school":{"pt":"Transmutação","style":"transmutation"},"castingTime":"1 ação","range":"18 metros","components":"V","duration":"instantânea","description":"Escolha um objeto que você possa ver, dentro do alcance. O objeto pode ser uma porta, uma caixa, um baú ou um par de algemas, um cadeado ou outro objeto que contenha um meio mundano ou mágico que previne o acesso.</p><p> Um alvo que esteja fechado por uma fechadura mundana ou preso ou barrado torna - se destrancado, destravado ou desbloqueado. Se o objeto tiver múltiplas fechaduras, apenas uma delas é destrancada.</p><p> Se você escolher um alvo que esteja travado pela magia <em> tranca arcana </em>, essa magia será suprimida por 10 minutos, durante esse período o alvo pode ser aberto e fechado normalmente.</p><p> Quando você conjurar essa magia, uma batida forte, audível a até 90 metros de distância, emana do objeto alvo.","classes":["Bardo","Feiticeiro","Mago"],"favorite":false},{"id":200,"level":"4","name":"Assassino Fantasmagórico","name_en":"Phantasmal Killer","school":{"pt":"Ilusão","style":"illusion"},"castingTime":"1 ação","range":"36 metros","components":"V, S","concentration":"s","duration":"até 1 minuto","description":"Você mexe com os pesadelos de uma criatura que você possa ver, dentro do alcance, e cria uma manifestação ilusória dos seus medos mais profundos, visível apenas para a criatura. O alvo deve realizar um teste de resistência de Sabedoria. Se falhar na resistência, ele ficará amedrontado pela duração. No final de cada turno do alvo, antes da magia acabar, ele deve ser bem sucedido num teste de resistência de Sabedoria ou sofrerá 4d10 de dano psíquico. Se passar na resistência, a magia acaba.</p><p><strong> Em Níveis Superiores </strong>. Quando você conjurar essa magia usando um espaço de magia de 5° nível ou superior, o dano aumenta em 1d10 para cada nível do espaço acima do 4°.","classes":["Mago"],"favorite":false},{"id":1,"level":"0","name":"Ataque Certeiro","name_en":"True Strike","school":{"pt":"Adivinhação","style":"divination"},"castingTime":"1 ação","range":"9 metros","components":"S","concentration":"s","duration":"até 1 rodada","description":"Você estende sua mão e aponta o dedo para um alvo no alcance. Sua magia garante a você uma breve intuição sobre as defesas do alvo. No seu próximo turno, você terá vantagem na primeira jogada de ataque contra o alvo, considerando que essa magia não tenha acabado.","classes":["Bardo","Bruxo","Feiticeiro","Mago"],"favorite":false},{"id":276,"level":"6","name":"Ataque Visual","name_en":"Eyebite","school":{"pt":"Necromancia","style":"necromancy"},"castingTime":"1 ação","range":"pessoal","components":"V, S","concentration":"s","duration":"até 1 minuto","description":"Pela duração da magia, seus olhos tornam - se manchas vazias imbuídas com poder terrível. Uma criatura, à sua escolha, a até de 18 metros de você que você puder ver, deve ser bem sucedida num teste de resistência de Sabedoria ou será afetada por um dos efeitos a seguir, à sua escolha, pela duração. A cada um dos seus turnos, até a magia acabar, você pode usar sua ação para afetar outra criatura, mas não pode afetar uma criatura novamente se ela tiver sido bem sucedida no teste de resistência contra essa conjuração de ataque visual.</p><p><em><strong> Adormecer </strong></ em>. O alvo cai inconsciente. Ele acorda se sofrer qualquer dano ou se outra criatura usar sua ação para sacudir o adormecido até acordá - lo.</p><p><em><strong> Apavorar </strong></ em>. O alvo está amedrontado. Em cada um dos turnos dele, a criatura amedrontada deve realizar a ação de Disparada e se mover para longe de você pela rota segura mais curta disponível, a não ser que não haja lugar para se mover. Se o alvo se mover para um local a, pelo menos, 18 metros de distância de você onde ela não possa mais te ver, esse efeito termina.</p><p><em><strong> Adoecer </strong></ em>. O alvo tem desvantagem nas jogadas de ataque e testes de habilidade. No final de cada um dos turnos dele, ele pode realizar outro teste de resistência de Sabedoria. Se for bem sucedido, o efeito termina.","classes":["Bardo","Bruxo","Feiticeiro","Mago"],"favorite":false},{"id":97,"level":"2","name":"Augúrio","name_en":"Augury","ritual":"s","school":{"pt":"Adivinhação","style":"divination"},"castingTime":"1 minuto","range":"pessoal","components":"V, S, M","duration":"instantânea","material":"varetas, ossos ou objetos similarmente marcados valendo, no mínimo, 25 po","description":"Ao lançar varetas cravejados com gemas, rolar ossos de dragão, puxar cartas ornamentadas ou usar outro tipo de ferramenta de adivinhação, você recebe um pressagio de uma entidade de outro mundo, sobre os resultados de cursos de ação específicos que você planeja tomar nos próximos 30 minutos. O Mestre escolhe dentre os possíveis presságios a seguir: </p><ul><li> Êxito, para resultados bons </li><li> Fracasso, para resultados maus </li><li> Êxito e fracasso, para resultados bons e maus </li><li> Nada, para resultados que não são especialmente bons ou ruins </li></ ul><p> A magia não leva em conta qualquer possível circunstancia que possa mudar o resultado, como a conjuração de magias adicionais ou a perda ou ganho de um companheiro.</p><p> Se você conjurar a magia duas ou mais vezes antes de completar seu próximo descanso longo, existe uma chance cumulativa de 25 por cento de cada conjuração, depois da primeira que você fez, ter um resultado aleatório. O Mestre faz essa jogada secretamente.","classes":["Clérigo"],"favorite":false},{"id":98,"level":"2","name":"Aumentar/Reduzir","name_en":"Enlarge/Reduce","school":{"pt":"Transmutação","style":"transmutation"},"castingTime":"1 ação","range":"9 metros","components":"V, S, M","concentration":"s","duration":"até 1 minuto","material":"um pouco de pó de ferro","description":"Você faz com que uma criatura ou um objeto que você possa ver dentro do alcance, fique maior ou menor, pela duração. Escolha entre uma criatura ou um objeto que não esteja sendo carregado nem vestido. Se o alvo for involuntário, ele deve realizar um teste de resistência de Constituição. Se for bem sucedido, a magia não surte efeito.</p><p> Se o alvo for uma criatura, tudo que ele esteja vestindo ou carregando muda e tamanho com ela. Qualquer item largado por uma criatura afetada, retorna ao seu tamanho natural.</p><p><em><strong> Aumentar </strong></ em>. O tamanho do alvo dobra em todas as dimensões e seu peso é multiplicado por oito. Esse aumento eleva seu tamanho em uma categoria– de Médio para Grande, por exemplo. Se não houver espaço suficiente para que o alvo dobre de tamanho, a criatura ou objeto alcança o tamanho máximo possível no espaço disponível. Até o fim da magia, o alvo também tem vantagem em testes de Força e testes de resistência de Força. O tamanho das armas do alvo crescem para se adequar ao seu novo tamanho. Quando essas armas são ampliadas, os ataques do alvo com elas causam 1d4 de dano extra.</p><p><em><strong> Reduzir </strong></ em>. O tamanho do alvo é reduzido à metade em todas as dimensões e seu peso é reduzido a um oitavo do normal. Essa redução diminui o tamanho do alvo em uma categoria– de Médio para Pequeno, por exemplo. Até o fim da magia, o alvo tem desvantagem em testes de Força e testes de resistência de Força. O tamanho das armas do alvo diminuem para se adequar ao seu novo tamanho. Quando essas armas são reduzidas, os ataques do alvo com elas causam 1d4 de dano a menos (isso não pode reduzir o dano a menos de 1).","classes":["Feiticeiro","Mago"],"favorite":false},{"id":201,"level":"4","name":"Aura de Pureza","name_en":"Aura Of Purity","school":{"pt":"Abjuração","style":"abjuration"},"castingTime":"1 ação","range":"pessoal","components":"V","concentration":"s","duration":"até 10 minutos","description":"Energia purificante irradia de você em uma aura com 9 metros de raio. Até a magia acabar, a aura se move mantendo - se centrada em você. Todas as criaturas não - hostis na aura (incluindo você) não podem ficar doentes, tem resistência a dano de veneno e tem vantagem em testes de resistência contra efeitos que deixem ela com qualquer das condições a seguir: amedrontado, atordoado, cego, enfeitiçado, envenenado, paralisado e surdo.","classes":["Paladino"],"favorite":false},{"id":202,"level":"4","name":"Aura de Vida","name_en":"Aura Of Life","school":{"pt":"Abjuração","style":"abjuration"},"castingTime":"1 ação","range":"pessoal","components":"V","concentration":"s","duration":"até 10 minutos","description":"Energia de prevenção vital irradia de você em uma aura com 9 metros de raio. Até a magia acabar, a aura se move mantendo - se centrada em você. Todas as criaturas não - hostis na aura (incluindo você) tem resistência a dano necrótico e seu máximo de pontos de vida não pode ser reduzido. Além disso, uma criatura viva não - hostil, recupera 1 ponto de vida quando começa seu turno na aura com 0 pontos de vida.","classes":["Paladino"],"favorite":false},{"id":153,"level":"3","name":"Aura de Vitalidade","name_en":"Aura Of Vitality","school":{"pt":"Evocação","style":"evocation"},"castingTime":"1 ação","range":"pessoal","components":"V","concentration":"s","duration":"até 1 minuto","description":"Energia curativa irradia de você em uma aura com 9 metros de raio. Até a magia acabar, a aura se move mantendo - se centrada em você. Você pode usar uma ação bônus para fazer com que uma criatura na aura (incluindo você) recupere 2d6 pontos de vida.","classes":["Paladino"],"favorite":false},{"id":99,"level":"2","name":"Aura Mágica de Nystul","name_en":"Nystul's Magic Aura","school":{"pt":"Ilusão","style":"illusion"},"castingTime":"1 ação","range":"toque","components":"V, S, M","duration":"24 horas","material":"um pequeno quadrado de seda","description":"Você coloca uma ilusão em uma criatura ou objeto que você tocar, então magias de adivinhação revelarão informações falsas sobre ele. O alvo pode ser uma criatura voluntária ou um objeto que não esteja sendo carregado ou vestido por outra criatura.</p><p> Quando você conjura essa magia, escolha um ou ambos os efeitos seguintes. O efeito permanece pela duração. Se você conjurar essa magia na mesma criatura ou objeto a cada dia por 30 dias, colocando o mesmo efeito nele todas as vezes, a ilusão durará até ser dissipada.</p><p><em><strong> Aura Falsa </strong></ em>. Você modifica a forma como o alvo aparece para magias e efeitos mágicos, como detectar magia, que detectam auras mágicas. Você pode fazer um objeto não - mágico parecer mágico ou mudar a aura mágica de um objeto para que ela pareça pertencer a outra escola de magia a sua escolha. Quando você usar esse efeito num objeto, você pode fazer a aura falsa aparente a qualquer criatura que manusear o item.</p><p><em><strong> Máscara </strong></ em>. Você modifica a forma como o alvo aparece para magias e efeitos que detectam tipos de criaturas, como o Sentido Divino do paladino ou o gatilho de um magia símbolo. Você escolhe o tipo de criatura e outras magias e efeitos mágicos consideram o alvo como se ele fosse uma criatura desse tipo ou tendência.","classes":["Mago"],"favorite":false},{"id":328,"level":"8","name":"Aura Sagrada","name_en":"Holy Aura","school":{"pt":"Abjuração","style":"abjuration"},"castingTime":"1 ação","range":"pessoal","components":"V, S, M","concentration":"s","duration":"até 1 minuto","material":"um minúsculo relicário valendo, no mínimo, 1. 000 po, contendo uma relíquia sagrada, como um pedaço de tecido do robe de um santo ou um pedaço de pergaminho de um texto religioso","description":"Luz divina emana de você e adere em uma aureola suave num raio de 9 metros, em volta de você. As criaturas de sua escolha, no raio, quando você conjurar essa magia, emitem penumbra num raio de 1,5 metro e tem vantagem em todos os testes de resistência e as outras criaturas tem desvantagem nas jogadas de ataque contra elas, até a magia acabar. Além disso, quando um corruptor ou morto - vivo atingir uma criatura afetada com um ataque corpo - a - corpo, a aura lampeja com luz plena. O atacante deve ser bem sucedido num teste de resistência de Constituição ou ficara cego até a magia acabar.","classes":["Clérigo"],"favorite":false},{"id":32,"level":"1","name":"Auxílio Divino","name_en":"Divine Favor","school":{"pt":"Evocação","style":"evocation"},"castingTime":"1 ação bônus","range":"pessoal","components":"V, S","concentration":"s","duration":"até 1 minuto","description":"Sua oração fortalece você com radiação divina. Até o fim da magia, seus ataques com arma causam 1d4 de dano radiante extra ao atingirem.","classes":["Paladino"],"favorite":false},{"id":203,"level":"4","name":"Banimento","name_en":"Banishment","school":{"pt":"Abjuração","style":"abjuration"},"castingTime":"1 ação","range":"9 metros","components":"V, S, M","concentration":"s","duration":"até 1 minuto","material":"um item desagradável ao alvo","description":"Você tenta enviar uma criatura que você pode ver dentro do alcance, para outro plano de existência. O alvo deve ser bem sucedido num teste de resistência de Carisma ou será banido.</p><p> Se o alvo for nativo do plano de existência que você está, você bane o alvo para um semiplano inofensivo. Enquanto estiver lá, a criatura estará incapacitada. Ela permanece lá até a magia acabar, a partir desse ponto, o alvo reaparece no espaço em que ela deixou ou no espaço desocupado mais próximo, se o espaço dela estiver ocupado.</p><p> Se o alvo for nativo de um plano de existência diferente do que você está, o alvo é banido em um lampejo sutil, retornando para o seu plano natal. Se a magia acabar antes de 1 minuto se passar, o alvo reaparece no lugar em que estava ou no espaço desocupado mais próximo, se o espaço dela estiver ocupado. Do contrário, o alvo não retorna.</p><p><strong> Em Níveis Superiores </strong>. Quando você conjurar essa magia usando um espaço de magia de 5° nível ou superior, você pode afetar uma criatura adicional para cada nível do espaço acima do 4°.","classes":["Bruxo","Clérigo","Feiticeiro","Mago","Paladino"],"favorite":false},{"id":277,"level":"6","name":"Banquete dos Heróis","name_en":"Heroes' Feast","school":{"pt":"Conjuração","style":"conjuration"},"castingTime":"10 minutos","range":"9 metros","components":"V, S, M","duration":"instantânea","material":"uma tigela encrustada de gemas valendo, no mínimo, 1. 000 po, que é consumida pela magia","description":"Você traz um grande banquete, incluindo comida e bebida magnificas. O banquete leva 1 hora para ser consumido e desaparece ao final desse tempo e os efeitos benéficos não se aplicam até essa hora terminar. Até doze criaturas podem participar do banquete.</p><p> Uma criatura que participe do banquete ganha diversos benefícios. A criatura é curada de todas as doenças e venenos, torna - se imune a veneno e a ser amedrontada e faz todos os seus testes de resistência com vantagem. Seu máximo de pontos de vida também aumenta em 2d10 e ela ganha a mesma quantidade de pontos de vida. Esses benefícios duram por 24 horas.","classes":["Clérigo"],"favorite":false},{"id":278,"level":"6","name":"Barreira de Lâminas","name_en":"Blade Barrier","school":{"pt":"Evocação","style":"evocation"},"castingTime":"1 ação","range":"24 metros","components":"V, S","concentration":"s","duration":"até 10 minutos","description":"Você cria uma muralha vertical de lâminas giratórias, afiadas como navalhas, feitas de energia mágica. A muralha aparece dentro do alcance e permanece pela duração. Você pode fazer uma muralha reta de até 30 metros de comprimento por 6 metros de altura e 1,5 metro de largura ou uma muralha anelar com até 18 metros de diâmetro, 6 metros de altura e 1,5 metro de largura. A muralha confere três - quartos de cobertura a criaturas atrás dela e seu espaço é terreno difícil.</p><p> Quando uma criatura entrar a área da muralha pela primeira vez em um turno, ou começar seu turno nela, a criatura deve realizar um teste de resistência de Destreza. Se falhar, a criatura sofrerá 6d10 de dano cortante. Em um sucesso, a criatura sofre metade desse dano.","classes":["Clérigo"],"favorite":false},{"id":33,"level":"1","name":"Bênção","name_en":"Bless","school":{"pt":"Encantamento","style":"enchantment"},"castingTime":"1 ação","range":"9 metros","components":"V, S, M","concentration":"s","duration":"até 1 minuto","material":"um borrifo de água benta","description":"Você abençoa até três criaturas, à sua escolha, dentro do alcance. Sempre que um alvo realizar uma jogada de ataque ou teste de resistência antes da magia acabar, o alvo pode jogar 1d4 e adicionar o valor jogado ao ataque ou teste de resistência.</p><p><strong> Em Níveis Superiores </strong>. Quando você conjurar essa magia usando um espaço de magia de 2° nível ou superior, você pode afetar uma criatura adicional para cada nível do espaço acima do 1°.","classes":["Clérigo","Paladino"],"favorite":false},{"id":100,"level":"2","name":"Boca Encantada","name_en":"Magic Mouth","ritual":"s","school":{"pt":"Ilusão","style":"illusion"},"castingTime":"1 minuto","range":"9 metros","components":"V, S, M","duration":"até ser dissipada","material":"um pedaço de favo de mel e pó de jade valendo, no mínimo, 10 po, consumidos pela magia","description":"Você implanta uma mensagem em um objeto dentro do alcance, uma mensagem que é pronunciada quando uma condição de ativação é satisfeita. Escolha um objeto que você possa ver e não esteja sendo vestido ou carregado por outra criatura. Então, fale a mensagem, que deve conter 25 palavras ou menos, apesar de ela poder ser entregue durante um período de até 10 minutos. Finalmente, determine a circunstância que irá ativar a magia para que sua mensagem seja entregue.</p><p> Quando essa circunstância ocorrer, a boca encantada aparecerá no objeto e recitará a mensagem com sua voz e com o mesmo volume que você falou. Se o objeto que você escolheu tiver uma boca ou algo semelhante a uma boca (por exemplo, a boca de uma estátua), a boca mágica aparece ai, então, as palavras parecerão vir da boca do objeto. Quando você conjura essa magia, você pode fazer a magia acabar depois de enviar sua mensagem ou ela pode permanecer e repetir a mensagem sempre que a circunstância de ativação ocorrer.</p><p> A circunstância de ativação pode ser tão genérica ou tão detalhada quando você quiser, apesar de ela precisar ser baseada em condições visuais ou audíveis que ocorram a até 9 metros do objeto. Por exemplo, você pode instruir a boca a falar quando uma criatura se aproximar a menos de 9 metros do objeto ou quando um sino de prata tocar a menos de 9 metros dela.","classes":["Bardo","Mago"],"favorite":false},{"id":154,"level":"3","name":"Bola de Fogo","name_en":"Fireball","school":{"pt":"Evocação","style":"evocation"},"castingTime":"1 ação","range":"45 metros","components":"V, S, M","duration":"instantânea","material":"uma minúscula bola de guano de morcego e enxofre","description":"Um veio brilhante lampeja na ponta do seu dedo em direção a um ponto que você escolher, dentro do alcance, e então eclode com um estampido baixo, explodindo em chamas. Cada criatura em uma esfera de 6 metros de raio, centrada no ponto, deve realizar um teste de resistência de Destreza. Um alvo sofre 8d6 de dano de fogo se falhar na resistência, ou metade desse dano se obtiver sucesso.</p><p> O fogo se espalha, dobrando esquinas. Ele incendeia objetos inflamáveis na área que não estejam sendo vestidos ou carregados.</p><p><strong> Em Níveis Superiores </strong>. Quando você conjurar essa magia usando um espaço de magia de 4° nível ou superior, o dano aumenta em 1d6 para cada nível do espaço acima do 3°.","classes":["Feiticeiro","Mago"],"favorite":false},{"id":307,"level":"7","name":"Bola de Fogo Controlável","name_en":"Delayed Blast Fireball","school":{"pt":"Evocação","style":"evocation"},"castingTime":"1 ação","range":"45 metros","components":"V, S, M","concentration":"s","duration":"até 1 minuto","material":"uma minúscula bola de guano de morcego e enxofre","description":"Um feixe de luz amarelada é disparado da ponta do seu dedo, então se condensa e aguarda no ponto escolhido, dentro do alcance, como uma conta brilhante, pela duração. Quando a magia termina, seja por sua concentração ter sido interrompida ou por você ter decidido terminá-la, a conta eclode com um estampido baixo, explodindo em chamas que se espalhando, dobrando esquinas. Cada criatura numa esfera, com 6 metros de raio, centrada na conta, deve realizar um teste de resistência de Destreza. Uma criatura sofre dano igual ao total de dano acumulado se falhar na resistência, ou metade do total se obtiver sucesso.</p><p> O dano base da magia é 12d6. Se até o final do seu turno, a conta ainda não tiver sido detonada, o dano aumenta em 1d6.</p><p> Se a conta brilhante for tocada antes do intervalo expirar, a criatura que a tocou deve realizar um teste de resistência de Destreza. Se falhar na resistência, a magia termina imediatamente, fazendo a conta explodir em chamas. Se obtiver sucesso na resistência, a criatura pode arremessar a conta a até 12 metros. Quando ela atinge uma criatura ou objeto solido, a magia termina e a conta explode.</p><p> O fogo danifica objetos na área e incendeia objetos inflamáveis que não estejam sendo vestidos ou carregados.</p><p><strong> Em Níveis Superiores </strong>. Quando você conjurar essa magia usando um espaço de magia de 8° nível ou superior, o dano base aumenta e 1d6 para cada nível do espaço acima do 7°.","classes":["Feiticeiro","Mago"],"favorite":false},{"id":34,"level":"1","name":"Bom Fruto","name_en":"Goodberry","school":{"pt":"Transmutação","style":"transmutation"},"castingTime":"1 ação","range":"toque","components":"V, S, M","duration":"instantânea","material":"um raminho de visco","description":"Até dez frutos aparecem na sua mão e são infundidos com magia pela duração. Uma criatura pode usar sua ação para comer um fruto. Comer um fruto restaura 1 ponto de vida e um fruto produz nutrientes suficientes para sustentar uma criatura por um dia.</p><p> Os frutos perdem seu potencial se não forem consumidos dentro de 24 horas da conjuração dessa magia.","classes":["Druida","Patrulheiro"],"favorite":false},{"id":2,"level":"0","name":"Bordão Místico","name_en":"Shillelagh","school":{"pt":"Transmutação","style":"transmutation"},"castingTime":"1 ação bônus","range":"toque","components":"V, S, M","duration":"1 minuto","material":"visco, uma folha de trevo e uma clava ou bordão","description":"A madeira de uma clava ou bordão, que você esteja segurando, é imbuída com o poder da natureza. Pela duração, você pode usar sua habilidade de conjuração ao invés da sua Força para as jogadas de ataque e dano corpo - a - corpo usando essa arma, e o dado de dano da arma se torna 1d8. A arma também se torna mágica, se ela já não for. A magia acaba se você conjurá-la novamente ou se você soltar a arma.","classes":["Druida"],"favorite":false},{"id":35,"level":"1","name":"Braços de Hadar","name_en":"Arms of Hadar","school":{"pt":"Conjuração","style":"conjuration"},"castingTime":"1 ação","range":"pessoal","components":"V, S","duration":"instantânea","description":"Você invoca o poder de Hadar, o Faminto Sombrio. Tentáculos de energia negra brotam de você e golpeiam todas as criaturas a até 3 metros de você. Cada criatura na área deve realizar um teste de resistência de Força. Se falhar, o alvo sofre 2d6 de dano necrótico e não pode fazer reações até o próximo turno dela. Em um sucesso, uma criatura sofre metade do dano e não sofre qualquer outro efeito.</p><p><strong> Em Níveis Superiores </strong>. Quando você conjurar essa magia usando um espaço de magia de 2° nível ou superior, o dano aumenta em 1d6 para cada nível do espaço acima do 1°.","classes":["Bruxo"],"favorite":false},{"id":36,"level":"1","name":"Bruxaria","name_en":"Hex","school":{"pt":"Encantamento","style":"enchantment"},"castingTime":"1 ação bônus","range":"18 metros","components":"V, S, M","concentration":"s","duration":"até 1 hora","material":"o olho petrificado de um tritão","description":"Você coloca uma maldição em uma criatura que você possa ver, dentro do alcance. Até a magia acabar, você causa 1d6 de dano necrótico extra no alvo sempre que atingi - lo com um ataque. Além disso, escolha uma habilidade quando você conjurar a magia. O alvo tem desvantagem em testes de habilidade feitos com a habilidade escolhida.</p><p> Se o alvo cair a 0 pontos de vida antes da magia acabar, você pode usar uma ação bônus, em um turno subsequente, para amaldiçoar outra criatura.</p><p> Uma magia <em> remover maldição </em> conjurada no alvo acaba com a magia prematuramente.</p><p><strong> Em Níveis Superiores </strong>. Quando você conjurar essa magia usando um espaço de magia de 3° ou 4° nível, você poderá manter sua concentração na magia por até 8 horas. Quando você usar um espaço de magia de 5° nível ou superior, você poderá manter sua concentração na magia por até 24 horas.","classes":["Bruxo"],"favorite":false},{"id":236,"level":"5","name":"Caminhar Em Árvores","name_en":"Tree Stride","school":{"pt":"Conjuração","style":"conjuration"},"castingTime":"1 ação","range":"pessoal","components":"V, S","concentration":"s","duration":"até 1 minuto","description":"Você adquire a habilidade de entrar em uma árvore e se mover de dentro dela para dentro de outra árvore de mesmo tipo à até 150 metros. Ambas as árvores devem estar vivas e ter, pelo menos, o mesmo tamanho que você. Você deve usar 1,5 metro de deslocamento para entrar numa árvore. Você, instantaneamente, sabe a localização de todas as outras árvores de mesmo tipo à 150 metros e, como parte do movimento usado para entrar na árvore, pode tanto passar por uma dessas árvores quanto sair da árvore em que você está. Você aparece no espaço que você quiser a 1,5 metro da árvore destino, usando outro movimento de 1,5 metro. Se você não tiver movimento restante, você aparece a 1,5 metro da árvore que você terminou seu movimento.</p><p> Você pode usar esse habilidade de transporte uma vez por rodada pela duração. Você deve terminar cada turno fora da árvore.","classes":["Druida","Patrulheiro"],"favorite":false},{"id":279,"level":"6","name":"Caminhar No Vento","name_en":"Wind Walk","school":{"pt":"Transmutação","style":"transmutation"},"castingTime":"1 minuto","range":"9 metros","components":"V, S, M","duration":"8 horas","material":"fogo e água benta","description":"Você e até dez criaturas voluntária que você possa ver, dentro do alcance, assumem uma forma gasosa pela duração, parecidas com pedaços de nuvem. Enquanto estiver na forma de nuvem, uma criatura tem deslocamento de voo de 90 metros e tem resistência a dano de concussão, cortante e perfurante de ataques não - mágicos. As únicas ações que uma criatura pode realizar nessa forma são a ação de Disparada ou para reverter a sua forma normal. Reverter leva 1 minuto, período pelo qual a criatura estará incapacitada e não poderá se mover. Até a magia acabar, uma criatura pode reverter para a forma de nuvem, o que também requer a transformação de 1 minuto.</p><p> Se uma criatura estiver na forma de nuvem e voando quando o efeito acabar, a criatura descerá a 18 metros por rodada por 1 minuto, até aterrissar na solo, o que é feito com segurança. Se ela não puder aterrissar em 1 minuto, a criatura cairá a distância restante.","classes":["Druida"],"favorite":false},{"id":329,"level":"8","name":"Campo Antimagia","name_en":"Antimagic Field","school":{"pt":"Abjuração","style":"abjuration"},"castingTime":"1 ação","range":"pessoal","components":"V, S, M","concentration":"s","duration":"até 1 hora","material":"um punhado de pó de ferro ou limalhas de ferro","description":"Uma esfera invisível,de 3 metros de raio,de antimagia envolve você. Essa área é separada da energia mágica que se espalha pelo multiverso. Dentro da esfera,magias não podem ser conjuradas,criaturas invocadas desaparecem e,até mesmo itens mágicos,se tornam mundanos. Até o fim da magia,a esfera se move com você,centrada em você.</p><p> Magias e outros efeitos mágicos,exceto os criados por artefatos ou divindades,são suprimidos na esfera e não podem adentrá-la. Um espaço gasto para conjurar uma magia suprimida é consumido. Enquanto o efeito estiver suprimido,ela não funciona,mas o tempo que ela permanecer suprimida é descontado da sua duração.</p><p><em><strong> Efeitos de Alvo </strong></em>. Magias e outros efeitos mágicos,como mísseis mágicos e enfeitiçar pessoa,que forem usados em uma criatura ou objeto dentro da esfera,não surtem efeito no alvo.</p><p><em><strong> Áreas de Magia </strong></em>. A área de outra magia ou efeito mágico,como uma bola de fogo,não se estende para dentro da esfera. Se a esfera sobrepor um área mágica,a parte da área que for coberta pela espera é suprimida. Por exemplo,as chás criadas poroma muralha de fogo serão suprimidas dentro da esfera,criando um abertura na muralha se a sobreposição por grande suficiente.</p><p><em><strong> Magias </strong></em>. Qualquer magia ativa ou outro efeito mágico em uma criatura ou objeto dentro da esfera é suprimido enquanto a criatura ou objeto permanecer dentro dela.</p><p><em><strong> Itens Mágicos </strong></em>. As propriedades e poderes de itens mágicos são suprimidas dentro da esfera. Por exemplo,uma espada longa + 1 dentro esfera funciona como uma espada não - mágica.</p><p> As propriedades e poderes de uma arma mágica são suprimidos se ela for usada contra um alvo dentro da esfera ou empunhada por um atacante dentro da esfera. Se uma arma mágica ou munição mágica deixar a esfera completamente (por exemplo, se você disparar uma flecha mágica ou arremessar uma lança mágica e um alvo fora da esfera),a magia do item deixa de ser suprimida tão logo ele deixe a esfera.</p><p><em><strong> Viagem Mágica </strong></em>. Teletransporte e viagem planar não funciona dentro da esfera,tanto se a esfera for o destino quando o ponto de partida para tais viagens mágicas. Um portal para outro lugar,mundo ou plano de existência,assim como um espaço extradimensional aberto,como o criado pela magia truque de corda,é temporariamente fechado enquanto estiver dentro da esfera.</p><p><em><strong> Criaturas e Objetos </strong></em>. Uma criatura ou objeto invocado ou criado através de magia,temporariamente desaparece da existência dentro da esfera. Tais criaturas reaparecem instantaneamente quando o espaço ocupado pela criatura não estiver mais dentro da esfera.</p><p><em><strong> Dissipar Magia </strong></em>. Magias e efeitos mágicos como dissipar magia,não surtem efeito sob esfera. Da mesma forma,esferas criadas por magias de campo antimagia diferentes não se anulam.","classes":["Clérigo","Mago"],"favorite":false},{"id":204,"level":"4","name":"Cão Fiel de Mordenkainen","name_en":"Mordenkainen's Faithful Hound","school":{"pt":"Conjuração","style":"conjuration"},"castingTime":"1 ação","range":"9 metros","components":"V, S, M","duration":"8 horas","material":"um minúsculo apito de prata, um pedaço de osso e um fio","description":"Você conjura um cão de guarda fantasma em um espaço desocupado que você possa ver, dentro do alcance, que permanece pela duração, até você dissipa - lo com uma ação ou até você se mover para mais de 30 metros dele.</p><p> O cão é invisível para todas as criaturas, exceto para você, e não pode ser ferido. Quando uma criatura Pequena ou maior se aproximar a 9 metros sem, primeiramente, falar a senha que você especifica quando conjura a magia, o cão começa a latir muito alto. O cão vê criaturas invisíveis e pode ver no Plano Etéreo. Ele ignora ilusões.</p><p> No começo de cada um dos seus turnos, o cão tenta morder uma criatura a 1,5 metro dele que seja hostil a você. O bônus de ataque do cão é igual ao seu modificador de habilidade de conjuração + seu bônus de proficiência. Se atingir, ele causa 4d8 de dano perfurante.","classes":["Mago"],"favorite":false},{"id":280,"level":"6","name":"Carne Para Pedra","name_en":"Flesh To Stone","school":{"pt":"Transmutação","style":"transmutation"},"castingTime":"1 ação","range":"18 metros","components":"V, S, M","concentration":"s","duration":"até 1 minuto","material":"uma pitada de cal, água e terra","description":"Você tenta transformar uma criatura que você possa ver, dentro do alcance, em pedra. Se o corpo do alvo for feito de carne, a criatura deve realizar um teste de resistência de Constituição. Em caso de falha, ela ficará impedida, à medida que sua carne começa a endurecer. Se obtiver sucesso, a criatura não é afetada.</p><p> Uma criatura impedida por essa magia deve realizar outro teste de resistência de Constituição no final de cada um dos turnos dela. Se obtiver sucesso na resistência contra essa magia três vezes, a magia termina. Se ela falhar no teste de resistência três vezes, ela se torna pedra é afetada pela condição petrificado pela duração. Os sucessos e falhas não precisam ser consecutivos, anote ambos os resultados até o alvo acumular três de mesmo tipo.</p><p> Se a criatura for quebrada fisicamente enquanto petrificada, ela sofre deformidades similares se for revertida ao seu estado original.</p><p> Se você mantiver sua concentração nessa magia durante toda a duração possível, a criatura é transformada em pedra até o efeito ser removido.","classes":["Bruxo","Mago"],"favorite":false},{"id":101,"level":"2","name":"Cativar","name_en":"Enthrall","school":{"pt":"Encantamento","style":"enchantment"},"castingTime":"1 ação","range":"18 metros","components":"V, S","duration":"1 minuto","description":"Você tece um cordão de palavras distrativas, fazendo as criaturas, à sua escolha, que você puder ver dentro do alcance e que puderem ouvir você, realizarem um teste de resistência de Sabedoria. Qualquer criatura que não puder ser enfeitiçada, passa automaticamente nesse teste de resistência e, se você ou seus companheiros estiverem lutando com a criatura, ela terá vantagem na resistência. Se falhar na resistência, a criatura terá desvantagem em testes de Sabedoria (Percepção) feitos para notar qualquer criatura além de você, até a magia acabar ou até o alvo não poder mais ouvir você. A magia acaba se você estiver incapacitado ou incapaz de falar.","classes":["Bardo","Bruxo"],"favorite":false},{"id":102,"level":"2","name":"Cegueira/Surdez","name_en":"Blindness/Deafness","school":{"pt":"Necromancia","style":"necromancy"},"castingTime":"1 ação","range":"9 metros","components":"V","duration":"1 minuto","description":"Você pode cegar ou ensurdecer um oponente. Escolha uma criatura que você possa ver dentro do alcance para fazer um teste de resistência de Constituição. Se ela falhar, ficará ou cega ou surda (à sua escolha) pela duração. No final de cada um dos turnos dele, o alvo pode realizar um teste de resistência de Constituição. Se obtiver sucesso, a magia termina.</p><p><strong> Em Níveis Superiores </strong>. Se você conjurar essa magia usando um espaço de magia de 3° nível ou superior, você pode afetar uma criatura adicional para cada nível de espaço acima do 2°.","classes":["Bardo","Clérigo","Feiticeiro","Mago"],"favorite":false},{"id":103,"level":"2","name":"Chama Contínua","name_en":"Continual Flame","school":{"pt":"Evocação","style":"evocation"},"castingTime":"1 ação","range":"toque","components":"V, S, M","duration":"até ser dissipada","material":"pó de rubi no valor de 50 po, consumido pela magia","description":"Uma chama, que produz iluminação equivalente a uma tocha, surge de um objeto que você tocar. O efeito é parecido com o de uma chama normal, mas ele não produz calor e não consome oxigênio. Uma chama continua pode ser coberta ou escondida, mas não sufocada ou extinta.","classes":["Clérigo","Mago"],"favorite":false},{"id":3,"level":"0","name":"Chama Sagrada","name_en":"Sacred Flames","school":{"pt":"Evocação","style":"evocation"},"castingTime":"1 ação","range":"18 metros","components":"V, S","duration":"instantânea","description":"Radiação similar a uma chama desce sobre uma criatura que você possa ver, dentro do alcance. O alvo deve ser bem sucedido num teste de resistência de Destreza ou sofrerá 1d8 de dano radiante. O alvo não recebe qualquer benefício de cobertura contra esse teste de resistência.</p><p> O dano da magia aumenta em 1d8 quando você alcança o 5° nível (2d8), 11° nível (3d8) e 17° nível (4d8).","classes":["Clérigo"],"favorite":false},{"id":4,"level":"0","name":"Chicote de Espinhos","name_en":"Torn Whip","school":{"pt":"Transmutação","style":"transmutation"},"castingTime":"1 ação","range":"9 metros","components":"V, S, M","duration":"instantânea","material":"uma muda de uma planta com espinhos","description":"Você cria um longo chicote de vinhas coberto por espinhos que chicoteia, ao seu comando, em direção de uma criatura dentro do alcance. Realize um ataque corpo - a - corpo com magia contra o alvo. Se o ataque atingir, a criatura sofrerá 1d6 de dano perfurante e, se a criatura for Grande ou menor, você a puxa até 3 metros para perto de você.</p><p> O dano dessa magia aumenta em 1d6 quando você alcança o 5° nível (2d6), 11° nível (3d6) e 17° nível (4d6).","classes":["Druida"],"favorite":false},{"id":347,"level":"9","name":"Chuva de Meteoros","name_en":"Meteor Swarm","school":{"pt":"Evocação","style":"evocation"},"castingTime":"1 ação","range":"1,5 quilômetro","components":"V, S","duration":"instantânea","description":"Esferas de fogo incandescentes atingem o solo em quatro pontos diferentes que você possa ver, dentro do alcance. Cada criatura numa esfera de 12 metros de raio, centrada em cada ponto escolhido por você, deve realizar um teste de resistência de Destreza. A esfera se espalha, dobrando esquinas. Uma criatura sofre 20d6 de dano de fogo e 20d6 de dano de concussão se falhar na resistência ou metade desse dano se obtiver sucesso. Uma criatura na área de mais de uma explosão de chamas é afetada apenas uma vez.</p><p> A magia causa dano aos objetos na área e incendeia objetos inflamáveis que não estejam sendo vestidos ou carregados.","classes":["Feiticeiro","Mago"],"favorite":false},{"id":281,"level":"6","name":"Círculo da Morte","name_en":"Circle Of Death","school":{"pt":"Necromancia","style":"necromancy"},"castingTime":"1 ação","range":"45 metros","components":"V, S, M","duration":"instantânea","material":"o pó de uma pérola negra esmagada valendo, no mínimo, 500 po","description":"Uma esfera de energia negativa ondula em um raio de 18 metros de um ponto ao alcance. Cada criatura na área deve realizar um teste de resistência de Constituição. Um alvo sofre 8d6 de dano necrótico se falhar no seu teste de resistência, ou metade desse dano se passar.</p><p><strong> Em Níveis Superiores </strong>. Se você conjurar essa magia usando um espaço de magia de 7° nível ou superior, o dano aumenta em 2d6 para cada nível do espaço acima do 6°.","classes":["Bruxo","Feiticeiro","Mago"],"favorite":false},{"id":237,"level":"5","name":"Círculo de Poder","name_en":"Circle Of Power","school":{"pt":"Abjuração","style":"abjuration"},"castingTime":"1 ação","range":"pessoal","components":"V","concentration":"s","duration":"até 10 minutos","description":"Energia divina irradia de você, distorcendo e espalhando energia mágica a até 9 metros de você. Até a magia acabar, a esfera se move com você, centrada em você. Pela duração, cada criatura amigável na área (incluindo você) tem vantagem em testes de resistência contra magias e outros efeitos mágicos. Além disso, quando uma criatura afetada for bem sucedida num teste de resistência contra uma magia ou efeito mágico realizado para sofrer apenas metade do dano, ao invés disso, ela não sofrerá dano nenhum se passar na resistência.","classes":["Paladino"],"favorite":false},{"id":238,"level":"5","name":"Círculo de Teletransporte","name_en":"Teleportation Circle","school":{"pt":"Conjuração","style":"conjuration"},"castingTime":"1 minuto","range":"3 metros","components":"V, M","duration":"1 rodada","material":"giz e tintas raros infundidos com pedras preciosas no valor de 50 po, consumidos pela magia","description":"À medida que você conjura essa magia, você desenha um círculo de 3 metros de diâmetro no chão, inscrevendo selos que conectam sua localização a um círculo de teletransporte permanente, à sua escolha, cuja sequência de selos você conheça e esteja no mesmo plano de existência que você. Um portal cintilante se abre dentro do círculo que você desenhou e permanece aberto até o final do seu próximo turno. Qualquer criatura que entrar no portal, instantaneamente, aparecerá a 1,5 metro do círculo de destino ou no espaço desocupado mais próximo, se o espaço estiver ocupado.</p><p> Muitos templos principais, guildas e outros locais importantes possuem círculos de teletransporte permanentes inscritos em algum lugar dos seus confins. Cada círculo desse inclui uma sequência única de selos– uma sequência de runas mágicas dispostas em um padrão específico. Quando você adquire a capacidade de conjurar essa magia pela primeira vez, você aprende a sequência de selos de dois destinos no Plano Material, determinadas pelo Mestre. Você pode aprender sequências de selos adicionais durante suas aventuras. Você pode consignar uma nova sequência de selos a memória após estudá-la por 1 minuto.</p><p> Você pode criar um círculo de teletransporte permanente ao conjurar essa magia no mesmo local a cada dia por um ano. Você não precisa usar o círculo para se teletransportar quando você conjurar a magia desse modo.","classes":["Bardo","Feiticeiro","Mago"],"favorite":false},{"id":155,"level":"3","name":"Círculo Mágico","name_en":"Magic Circle","school":{"pt":"Abjuração","style":"abjuration"},"castingTime":"1 minuto","range":"3 metros","components":"V, S, M","duration":"1 hora","material":"água benta ou pó de prata e ferro valendo, no mínimo, 100 po, consumidos pela magia","description":"Você cria um cilindro de energia mágica de 3 metros de raio por 6 metros de altura, centrado num ponto no solo que você possa ver, dentro do alcance. Runas brilhantes aparecem toda vez que o cilindro toca o chão ou outra superfície.</p><p> Escolha um ou mais dos tipos de criaturas seguintes: celestiais, corruptores, elementais, fadas ou mortos - vivos. O círculo afeta uma criatura do tipo escolhido das seguintes maneiras: </p><ul><li> A criatura não consegue entrar no cilindro voluntariamente por meios não - mágicos. Se a criatura tentar usar teletransporte ou viagem interplanar para fazê - lo, ela deve, primeiro, ser bem sucedida num teste de resistência de Carisma.</li><li> A criatura tem desvantagem nas jogadas de ataque contra alvos dentro do cilindro.</li><li> Alvos dentro do cilindro não podem ser enfeitiçados, amedrontados ou possuídos pela criatura.</li></ ul><p> Quando você conjurar essa magia, você pode decidir que a mágica dela opere na direção reversa, prevenindo que uma criatura de um tipo especifico saia do cilindro e protegendo os alvos fora dele.</p><p><strong> Em Níveis Superiores </strong>. Quando você conjurar essa magia usando um espaço de magia de 4° nível ou superior, a duração aumenta em 1 hora para cada nível do espaço acima do 3°.","classes":["Bruxo","Clérigo","Mago","Paladino"],"favorite":false},{"id":156,"level":"3","name":"Clarividência","name_en":"Clairvoyance","school":{"pt":"Adivinhação","style":"divination"},"castingTime":"10 minutos","range":"1,5 quilômetro","components":"V, S, M","concentration":"s","duration":"até 10 minutos","material":"um foco valendo, no mínimo, 100 po, também um chifre cravejado de joias para ouvir ou um olho de vidro para ver","description":"Você cria um sensor invisível, dentro do alcance, em um local familiar a você (um local que você tenha visitado ou visto antes) ou em um local obvio que não seja familiar a você (como atrás de uma porta, ao redor de u canto ou em um bosque de árvores). O sensor se mantém no local pela duração e não pode ser atacado ou manipulado de outra forma.</p><p> Quando você conjurar essa magia, escolhe visão ou audição. Você pode escolher sentir através do sensor como se você estivesse no espaço dele. Com sua ação, você pode trocar entre visão e audição.</p><p> Uma criatura que puder ver o sensor (como uma criatura beneficiada por <em> ver o invisível </em> ou visão verdadeira) vê um globo luminoso e intangível do tamanho do seu olho.</p> ","classes":["Bardo","Clérigo","Feiticeiro","Mago"],"favorite":false},{"id":330,"level":"8","name":"Clone","name_en":"Clone","school":{"pt":"Necromancia","style":"necromancy"},"castingTime":"1 hora","range":"toque","components":"V, S, M","duration":"instantânea","material":"um diamante valendo, no mínimo, 1. 000 po e, no mínimo 3 centímetros cúbicos de carne da criatura que será clonada, consumida pela magia, e um receptáculo valendo, no mínimo, 2. 000 po que tenha uma tampa selada e seja grande o suficiente para comportar uma criatura Média, como uma urna enorme, um caixão, um cisto cheio de lama no solo ou um recipiente de cristal cheio de água salgada","description":"Essa magia produz uma duplicata inerte de uma criatura viva como uma garantia contra a morte. Esse clone é formado dentro de um receptáculo selado e cresce ao seu tamanho total, atingindo a maturidade após 120 dias. Você também pode escolher que o clone seja uma versão mais jovem da mesma criatura. Ele permanece inerte e dura indefinidamente, enquanto seu receptáculo permanecer intocado.</p><p> A qualquer momento, após o clone amadurecer, se a criatura original morrer, sua alma é transferida para o clone, considerando que a alma está livre e deseje retornar. O clone é fisicamente idêntico ao original e tem a mesma personalidade, memórias e habilidades, mas não possui qualquer equipamento do original. O físico da criatura original permanece, se ainda existir, se tornando inerte e não podendo, consequentemente, ser trazido de volta à vida, já que a alma da criatura está em outro lugar.","classes":["Mago"],"favorite":false},{"id":239,"level":"5","name":"Coluna de Chamas","name_en":"Flame Strike","school":{"pt":"Evocação","style":"evocation"},"castingTime":"1 ação","range":"18 metros","components":"V, S, M","duration":"instantânea","material":"uma pitada de enxofre","description":"Uma coluna vertical de fogo divino emerge de baixo para os céus, no local que você especificar. Cada criatura num cilindro de 3 metros de raio por 12 metros de altura, centrado num ponto dentro do alcance, deve realizar um teste de resistência de Destreza. Uma criatura sofre 4d6 de dano de fogo e 4d6 de dano radiante se falhar na resistência, ou metade desse dano se obtiver sucesso.</p><p><strong> Em Níveis Superiores </strong>. Quando você conjurar essa magia usando um espaço de magia de 6° nível ou superior, o dano de fogo ou o dano radiante (à sua escolha) aumenta em 1d6 por nível do espaço acima do 5°.","classes":["Clérigo"],"favorite":false},{"id":37,"level":"1","name":"Comando","name_en":"Command","school":{"pt":"Encantamento","style":"enchantment"},"castingTime":"1 ação","range":"18 metros","components":"V","duration":"1 rodada","description":"Você pronuncia uma palavra de comando para uma criatura que você possa ver dentro do alcance. O alvo deve ser bem sucedido num teste de resistência de Sabedoria ou seguirá seu comando no próximo turno dele. A magia não tem efeito se o alvo for um morto - vivo, se ele não entender seu idioma ou se o comando for diretamente nocivo a ele.</p><p> Alguns comandos típicos e seus efeitos a seguir. Você pode proferir um comando diferente dos descritos aqui. Se o fizer, o Mestre descreve como o alvo reage. Se o alvo não puder cumprir o comando, a magia termina.</p><p><em><strong> Aproxime - se </strong></ em>. O alvo se move para próximo de você o máximo que puder na rota mais direta, terminando seu turno, se ele se mover a até 1,5 metro de você.</p><p><em><strong> Largue </strong></ em>. O alvo larga o que quer que ele esteja segurando, e termina seu turno.</p><p><em><strong> Fuja </strong></ em>. O alvo gasta seu turno se movendo para longe de você da forma mais rápida que puder.</p><p><em><strong> Deite - se </strong></ em>. O alvo deita - se no chão e então, termina seu turno.</p><p><em><strong> Parado </strong></ em>. O alvo não se move e não realiza nenhuma ação. Uma criatura voadora continua no alto, considerando que ela seja capaz de fazê - lo. Se ela tiver que se mover para continuar no alto, ela voa a mínima distância necessária para permanecer no ar.</p><p><strong> Em Níveis Superiores </strong>. Se você conjurar essa magia usando um espaço de magia de 2° nível ou superior, você pode afetar uma criatura adicional para cada nível do espaço acima do 1°. As criaturas devem estar a 9 metros entre si para serem afetadas.","classes":["Clérigo","Paladino"],"favorite":false},{"id":38,"level":"1","name":"Compreender Idiomas","name_en":"Comprehend Languages","ritual":"s","school":{"pt":"Adivinhação","style":"divination"},"castingTime":"1 ação","range":"pessoal","components":"V, S, M","duration":"1 hora","material":"um pitada de fuligem e sal","description":"Pela duração, você compreende o significado literal de qualquer idioma falado que você ouvir. Você também compreende qualquer idioma escrito que vir, mas você deve tocar a superfície onde as palavras estão escritas. Leva, aproximadamente, 1 minuto para ler uma página de texto.</p><p> Essa magia não decifra mensagens secretas em textos ou glifos, como um selo arcano, que não seja parte de um idioma escrito.","classes":["Bardo","Bruxo","Feiticeiro","Mago"],"favorite":false},{"id":205,"level":"4","name":"Compulsão","name_en":"Compulsion","school":{"pt":"Encantamento","style":"enchantment"},"castingTime":"1 ação","range":"9 metros","components":"V, S","concentration":"s","duration":"até 1 minuto","description":"Criaturas, à sua escolha, que você puder ver dentro do alcance e que puderem ouvir você, devem realizar um teste de resistência de Sabedoria. Um alvo passa automaticamente nesse teste de resistência se ele não puder ser enfeitiçado. Se falhar no teste, um alvo é afetado por essa magia. Até a magia acabar, você pode usar uma ação bônus em cada um dos seus turnos, para designar uma direção horizontal a você. Cada criatura afetada deve se mover, da melhor forma possível, para essa direção no próximo turno dela. Ela pode realizar sua ação antes de se mover. Depois de se mover dessa forma, ela pode realizar outra resistência de Sabedoria para tentar acabar com o efeito.</p><p> Um alvo não é obrigado a se mover em direção de um perigo obviamente mortal, como uma fogueira ou abismo, mas ele vai provocar ataques de oportunidade por se mover na direção designada.","classes":["Bardo"],"favorite":false},{"id":240,"level":"5","name":"Comunhão","name_en":"Commune","ritual":"s","school":{"pt":"Adivinhação","style":"divination"},"castingTime":"1 minuto","range":"pessoal","components":"V, S, M","duration":"1 minuto","material":"incenso e um frasco de água benta ou profana","description":"Você contata sua divindade ou um representante divino e faz até três perguntas que podem ser respondidas com um sim ou não. Você deve fazer suas perguntas antes da magia terminar. Você recebe uma resposta correta para cada pergunta.</p><p> Seres divinos não são necessariamente oniscientes, portanto, você pode receber“ incerto” como uma resposta se uma pergunta que diga respeito a uma informação além do conhecimento da divindade. Em caso de uma resposta de única palavra puder levar ao engano ou contrariar os interesses da divindade, o Mestre pode oferecer uma frase curta como resposta, no lugar.</p><p> Se você conjurar essa magia duas ou mais vezes antes de terminar um descanso longo, existe uma chance cumulativa de 25 por cento de cada conjuração, depois da primeira que você fez, ter um resultado aleatório. O Mestre faz essa jogada secretamente.","classes":["Clérigo"],"favorite":false},{"id":241,"level":"5","name":"Comunhão com a Natureza","name_en":"Commune With Nature","ritual":"s","school":{"pt":"Adivinhação","style":"divination"},"castingTime":"1 minuto","range":"pessoal","components":"V, S","duration":"instantânea","description":"Você, momentaneamente, se torna uno com a natureza e ganha conhecimento do território ao seu redor. Ao ar livre, a magia lhe oferece conhecimento do terreno a até 4, 5 quilômetros de você. Em cavernas e outros formações subterrâneas naturais, o raio é limitado a 150 metros. A magia não funciona onde a natureza foi substituída por construções, como em masmorras ou cidades.</p><p> Você, instantaneamente, adquire conhecimento de até três fatos, à sua escolha, sobre qualquer dos assuntos a seguir, relacionados a área: </p><ul><li> Terrenos e corpos de água </li><li> Plantas, minérios, animais e povo predominante </li><li> Celestiais, fadas, corruptores, elementais ou mortos - vivos mais poderosos </li><li> Influência de outros planos de existência </li><li> Construções </li></ ul><p> Por exemplo, você poderia determinar a localização de um morto - vivo poderoso na área, a localização da maior fonte de água potável e a localização de quaisquer cidades próximas.","classes":["Druida","Patrulheiro"],"favorite":false},{"id":242,"level":"5","name":"Cone de Frio","name_en":"Cone Of Cold","school":{"pt":"Evocação","style":"evocation"},"castingTime":"1 ação","range":"pessoal","components":"V, S, M","duration":"instantânea","material":"um pequeno cristal ou cone de vidro","description":"Uma explosão de ar gelado irrompe das suas mãos. Cada criatura dentro do cone de 18 metros, deve realizar um teste de resistência de Constituição. Uma criatura sofre 8d8 de dano de frio se falhar na resistência, ou metade desse dano se passar.</p><p> Uma criatura morta por essa magia se torna uma estátua congelada até derreter.</p><p><strong> Em Níveis Superiores </strong>. Se você conjurar essa magia usando um espaço de magia de 6° nível ou superior, o dano aumenta em 1d8 para cada nível do espaço acima do 5°.","classes":["Feiticeiro","Mago"],"favorite":false},{"id":206,"level":"4","name":"Confusão","name_en":"Confusion","school":{"pt":"Encantamento","style":"enchantment"},"castingTime":"1 ação","range":"27 metros","components":"V, S, M","concentration":"s","duration":"até 1 minuto","material":"três cascas de noz","description":"Essa magia ataca e embaralha as mentes das criaturas, gerando delírios e provocando ações descontroladas. Cada criatura em uma esfera com 3 metros de raio, centrada num ponto, à sua escolha, dentro do alcance, deve ser bem sucedida num teste de resistência de Sabedoria, quando você conjurar essa magia ou for afetada por ela.</p><p> Um alvo afetado não pode realizar reações e deve rolar 1d10 no início de cada um dos seus turnos para determinar seu comportamento nesse turno.","classes":["Bardo","Druida","Feiticeiro","Mago"],"favorite":false},{"id":243,"level":"5","name":"Conhecimento Lendário","name_en":"Legend Lore","school":{"pt":"Adivinhação","style":"divination"},"castingTime":"10 minutos","range":"pessoal","components":"V, S, M","duration":"instantânea","material":"incenso valendo, no mínimo, 250 po, consumido pela magia e quatro tiras de marfim valendo, no mínimo, 50 po cada","description":"Nomeie ou descreva uma pessoa, local ou objeto. A magia traz a sua mente um breve resumo do conhecimento significativo sobre a coisa que você nomeou. O conhecimento deve consistir em contos atuais, histórias esquecidas ou, até mesmo, conhecimento secreto que nunca foi amplamente divulgado. Se a coisa que você nomeou não for de importância lendária, você não recebe qualquer informação sofre ela. Quanto mais informação você possuir sobre a coisa, mais precisa e detalhada será a informação que você receberá.</p><p> A informação que você aprende é precisa, mas pode ser redigida em linguagem figurada. Por exemplo, se você possuir um misterioso machado mágico na mão, a magia pode proporcionar essa informação: “Ai do malfeitor cuja mão toca o machado, até mesmo seu cabo corta a mão dos malignos. Só um verdadeiro Filho da Pedra, adorador e adorado de Moradin, pode despertar os verdadeiros poderes do machado e apenas com a palavra sagrada Rudnogg nos lábios. ” ","classes":["Bardo","Clérigo","Mago"],"favorite":false},{"id":157,"level":"3","name":"Conjurar Animais","name_en":"Conjure Animals","school":{"pt":"Conjuração","style":"conjuration"},"castingTime":"1 ação","range":"18 metros","components":"V, S","concentration":"s","duration":"até 1 hora","description":"Você invoca espíritos feéricos, que assumem formas de bestas, que aparecem em espaços desocupados, que você possa ver dentro do alcance. Escolha uma das opções a seguir para aparecer: </p><ul><li> Uma besta de nível de desafio 2 ou inferior </li><li> Duas bestas de nível de desafio 1 ou inferior </li><li> Quatro bestas de nível de desafio 1 / 2 ou inferior </li><li> Oito bestas de nível de desafio 1 / 4 ou inferior </li></ ul><p> Cada besta é também considerada uma fada e desaparece quando cair a 0 pontos de vida ou quando a magia acabar.</p><p> As criaturas invocadas são amigáveis a você e a seus companheiros. Role a iniciativa para as criaturas invocadas como um grupo, que age no seu próprio turno. Eles obedecem a quaisquer comandos verbais que você emitir (não requer uma ação sua). Se você não emitir nenhum comando a elas, elas se defenderão de criaturas hostis, mas no mais, não realizarão nenhuma ação.</p><p> O Mestre possui as estatísticas das criaturas.</p><p><strong> Em Níveis Superiores </strong>. Se você conjurar essa magia usando certos espaços de magia superiores, você escolhe uma das opções de invocação acima e mais criaturas aparecem: o dobro delas com um espaço de 5° nível, o triplo delas com um espaço de 7° nível e o quadruplo delas com um espaço de 9° nível.","classes":["Druida","Patrulheiro"],"favorite":false},{"id":308,"level":"7","name":"Conjurar Celestial","name_en":"Conjure Celestial","school":{"pt":"Conjuração","style":"conjuration"},"castingTime":"1 minuto","range":"27 metros","components":"V, S","concentration":"s","duration":"até 1 hora","description":"Você invoca um celestial de nível de desafio 4 ou inferior, que aparece num espaço desocupado, que você possa ver dentro do alcance. O celestial desaparece se cair a 0 pontos de vida ou quando a magia acabar.</p><p> O celestial é amigável a você e a seus companheiros pela duração. Role a iniciativa para o celestial, que age no seu próprio turno. Ele obedece a quaisquer comandos verbais que você emitir (não requer uma ação sua), contanto que não violem sua tendência. Se você não emitir nenhum comando a ele, ele se defenderá de criaturas hostis, mas no mais, não realizará nenhuma ação.</p><p> O Mestre possui as estatísticas do celestial.</p><p><strong> Em Níveis Superiores </strong>. Quando você conjurar essa magia usando um espaço de magia de 9° nível, você invoca um celestial de nível de desafio 5 ou inferior.","classes":["Clérigo"],"favorite":false},{"id":207,"level":"4","name":"Conjurar Elementais Menores","name_en":"Conjure Minor Elementals","school":{"pt":"Conjuração","style":"conjuration"},"castingTime":"1 minuto","range":"27 metros","components":"V, S","concentration":"s","duration":"até 1 hora","description":"Você invoca elementais que aparecem em espaços desocupados, que você possa ver dentro do alcance. Você escolhe uma das opções a seguir para aparecer: </p><ul><li> Um elemental de nível de desafio 2 ou inferior </li><li> Dois elementais de nível de desafio 1 ou inferior </li><li> Quatro elementais de nível de desafio 1 / 2 ou inferior </li><li> Oito elementais de nível de desafio 1 / 4 ou inferior </li></ ul><p> Um elemental invocado através dessa magia desaparece quando cair a 0 pontos de vida ou quando a magia acabar.</p><p> As criaturas invocadas são amigáveis a você e a seus companheiros. Role a iniciativa para as criaturas invocadas como um grupo, que age no seu próprio turno. Eles obedecem a quaisquer comandos verbais que você emitir (não requer uma ação sua). Se você não emitir nenhum comando a elas, elas se defenderão de criaturas hostis, mas no mais, não realizarão nenhuma ação.</p><p> O Mestre possui as estatísticas das criaturas.</p><p><strong> Em Níveis Superiores </strong>. Se você conjurar essa magia usando certos espaços de magia superiores, você escolhe uma das opções de invocação acima e mais criaturas aparecem: o dobro delas com um espaço de 6° nível e o triplo delas com um espaço de 8° nível.","classes":["Druida","Mago"],"favorite":false},{"id":244,"level":"5","name":"Conjurar Elemental","name_en":"Conjure Elemntal","school":{"pt":"Conjuração","style":"conjuration"},"castingTime":"1 minuto","range":"27 metros","components":"V, S, M","concentration":"s","duration":"até 1 hora","material":"incenso aceso para ar, argila mole para terra, enxofre e fósforo para fogo ou água e areia para água","description":"Você invoca um servo elemental. Escolha uma área de ar, água, fogo ou terra que preencha 3 metros cúbicos, dentro do alcance. Um elemental de nível de desafio 5 ou inferior, adequado a área que você escolheu, aparece em um espaço desocupado a até 3 metros dela. Por exemplo, um elemental do fogo emergiria de uma fogueira e um elemental da terra erguer - se - ia do solo. O elemental desaparece quando cair a 0 pontos de vida ou quando a magia acabar.</p><p> O elemental é amigável a você e a seus companheiros pela duração. Role a iniciativa para o elemental, que age no seu próprio turno. Ele obedece a quaisquer comandos verbais que você emitir (não requer uma ação sua). Se você não emitir nenhum comando a ele, ele se defenderá de criaturas hostis, mas no mais, não realizará nenhuma ação.</p><p> Se sua concentração for interrompida, o elemental não desaparece. Ao invés disso, você perde o controle sobre o elemental e ele se torna hostil a você e aos seus companheiros, e irá atacar. Um elemental fora de controle não pode ser dispensado e desaparece 1 hora depois de você ter o invocado.","classes":["Druida","Mago"],"favorite":false},{"id":282,"level":"6","name":"Conjurar Fada","name_en":"Conjure Fey","school":{"pt":"Conjuração","style":"conjuration"},"castingTime":"1 minuto","range":"27 metros","components":"V, S","concentration":"s","duration":"até 1 hora","description":"Você invoca uma criatura feérica de nível de desafio 6 ou inferior ou um espírito feérico que assume a forma de uma besta de nível de desafio 6 ou inferior. Ela aparece num espaço desocupado, que você possa ver dentro do alcance. A criatura feérica desaparece se cair a 0 pontos de vida ou quando a magia acabar.</p><p> A criatura feérica é amigável a você e a seus companheiros pela duração. Role a iniciativa para a criatura, que age no seu próprio turno. Ela obedece a quaisquer comandos verbais que você emitir (não requer uma ação sua), contanto que não violem sua tendência. Se você não emitir nenhum comando a ela, ela se defenderá de criaturas hostis, mas no mais, não realizará nenhuma ação.</p><p> Se sua concentração for interrompida, a criatura feérica não desaparece. Ao invés disso, você perde o controle sobre o elemental e ele se torna hostil a você e aos seus companheiros, e irá atacar. Uma criatura feérica fora de controle não pode ser dispensada e desaparece 1 hora depois de você ter a invocado.</p><p> O Mestre possui as estatísticas da criatura feérica.</p><p><strong> Em Níveis Superiores </strong>. Quando você conjurar essa magia usando um espaço de magia de 7° nível ou superior, o nível de desafio aumenta em 1 para cada nível do espaço acima do 6°.","classes":["Bruxo","Druida"],"favorite":false},{"id":158,"level":"3","name":"Conjurar Rajada","name_en":"Conjure Barrage","school":{"pt":"Conjuração","style":"conjuration"},"castingTime":"1 ação","range":"pessoal","components":"V, S, M","duration":"instantânea","material":"uma munição ou arma de arremesso","description":"Você arremessa uma arma não - mágica ou dispara uma munição não - mágica no ar para criar um cone de armas idênticas que se lançam a frente e então desaparecem. Cada criatura num cone de 18 metros, deve ser bem sucedida num teste de resistência de Destreza. Uma criatura sofre 3d8 de dano se falhar na resistência, ou metade desse dano num sucesso. O tipo do dano é o mesmo da arma ou munição usada como componente.","classes":["Patrulheiro"],"favorite":false},{"id":245,"level":"5","name":"Conjurar Saraivada","name_en":"Conjure Volley","school":{"pt":"Conjuração","style":"conjuration"},"castingTime":"1 ação","range":"45 metros","components":"V, S, M","duration":"instantânea","material":"uma munição ou arma de arremesso","description":"Você dispara uma munição não - mágica de uma arma à distância ou arremessa uma arma não - mágica no ar e escolhe um ponto dentro do alcance. Centenas de duplicatas da munição ou arma caem em uma saraivada vinda de cima e então desaparecem. Cada criatura num cilindro com 12 metros de raio e 6 metros de altura centrado no ponto, deve realizar um teste de resistência de Destreza. Uma criatura sofre 8d8 de dano se falhar na resistência, ou metade desse dano num sucesso. O tipo do dano é o mesmo da munição ou arma.","classes":["Patrulheiro"],"favorite":false},{"id":208,"level":"4","name":"Conjurar Seres da Floresta","name_en":"Conjure Woodland Beings","school":{"pt":"Conjuração","style":"conjuration"},"castingTime":"1 ação","range":"18 metros","components":"V, S, M","concentration":"s","duration":"até 1 hora","material":"um fruto sagrado por criatura invocada","description":"Você invoca criaturas feéricas que aparecem em espaços desocupados, que você possa ver dentro do alcance. Escolha uma das opções a seguir para aparecer: </p><ul><li> Uma criatura feérica de nível de desafio 2 ou inferior </li><li> Duas criaturas feéricas de nível de desafio 1 ou inferior </li><li> Quatro criaturas feéricas de nível de desafio 1 / 2 ou inferior </li><li> Oito criaturas feéricas de nível de desafio 1 / 4 ou inferior </li></ ul><p> Uma criatura invocado desaparece quando cair a 0 pontos de vida ou quando a magia acabar.</p><p> As criaturas invocadas são amigáveis a você e a seus companheiros. Role a iniciativa para as criaturas invocadas como um grupo, que age no seu próprio turno. Eles obedecem a quaisquer comandos verbais que você emitir (não requer uma ação sua). Se você não emitir nenhum comando a elas, elas se defenderão de criaturas hostis, mas no mais, não realizarão nenhuma ação.</p><p> O Mestre possui as estatísticas das criaturas.</p><p><strong> Em Níveis Superiores </strong>. Se você conjurar essa magia usando certos espaços de magia superiores, você escolhe uma das opções de invocação acima e mais criaturas aparecem: o dobro delas com um espaço de 6° nível e o triplo delas com um espaço de 8° nível.","classes":["Druida","Patrulheiro"],"favorite":false},{"id":246,"level":"5","name":"Consagrar","name_en":"Hallow","school":{"pt":"Evocação","style":"evocation"},"castingTime":"24 horas","range":"toque","components":"V, S, M","duration":"até ser dissipada","material":"ervas, óleos e incenso valendo, no mínimo, 1. 000 po, consumidos pela magia","description":"Você toca um ponto e infunde uma área ao redor com poder sagrado (ou profano). A área pode ter até 18 metros de raio e a magia falha se o raio incluir uma área já sob efeito da magia <em> consagrar </em>. A área afetada está sujeita aos seguintes efeitos.</p><p> Primeiro, celestiais, corruptores, elementais, fadas e mortos - vivos não conseguem entrar na área, nem, tais criaturas, podem enfeitiçar, amedrontar ou possuir criaturas dentro da área. Qualquer criatura enfeitiçada, amedrontada ou possuída por uma criatura dessas, não estará mais enfeitiçada, amedrontada ou possuída ao adentrar a área. Você pode excluir um ou mais desses tipos de criaturas desse efeito.</p><p> Segundo, você pode vincular um efeito extra a área. Escolha o efeito da lista a seguir, ou escolha um efeito oferecido pelo Mestre. Alguns desses efeitos se aplicam a criaturas na área. Você pode definir seu o efeito se aplica a todas as criaturas, criaturas que seguem uma divindade ou líder especifico ou criaturas de uma espécie especifica, como orcs ou trolls. Quando uma criatura que seria afetada entrar na área da magia pela primeira vez em um turno, ou começar seu turno nela, ela pode fazer um teste de resistência de Carisma. Se obtiver sucesso, a criatura ignora o efeito extra até sair da área.</p><p><em><strong> Coragem </strong></ em>. As criaturas afetadas não podem ser amedrontadas enquanto estiverem na área.</p><p><em><strong> Descanso Eterno </strong></ em>. Cadáveres enterrados na área não podem ser transformados em mortos - vivos.</p><p><em><strong> Escuridão </strong></ em>. Escuridão preenche a área. Luz normal, assim como luz mágica criada por magias de nível inferior ao nível do espaço usado para conjurar essa magia, não podem iluminar a área.</p><p><em><strong> Idiomas </strong></ em>. As criaturas afetadas podem se comunicar com qualquer outra criatura na área, mesmo que elas não partilhem um idioma em comum.</p><p><em><strong> Interferência Extradimensional </strong></ em>. As criaturas afetadas não podem se mover ou viajar usando teletransporte ou por meios extradimensionais ou interplanares.</p><p><em><strong> Luz do Dia </strong></ em>. Luz plena preenche a área. Escuridão mágica criada por magias de nível inferior ao nível do espaço usado para conjurar essa magia, não podem extinguir a luz.</p><p><em><strong> Medo </strong></ em>. As criaturas afetadas ficam amedrontadas enquanto estiverem na área.</p><p><em><strong> Proteção contra Energia </strong></ em>. As criaturas afetadas na área tem resistência a um tipo de dano, à sua escolha, exceto de concussão, cortante ou perfurante.</p><p><em><strong> Silêncio </strong></ em>. Nenhum som pode ser emitido de dentro da área e nenhum som pode adentrá-la.</p><p><em><strong> Vulnerabilidade à Energia </strong></ em>. As criaturas afetadas na área tem vulnerabilidade a um tipo de dano, à sua escolha, exceto de concussão, cortante ou perfurante.","classes":["Clérigo"],"favorite":false},{"id":5,"level":"0","name":"Consertar","name_en":"Mending","school":{"pt":"Transmutação","style":"transmutation"},"castingTime":"1 minuto","range":"toque","components":"V, S, M","duration":"instantânea","material":"dois ímãs","description":"Essa magia repara um única quebra ou fissura em um objeto que você tocar, como um elo quebrado de uma corrente, duas metades de uma chave partida, um manto rasgado ou o vazamento em um odre. Contanto que a quebra ou fissura não tenha mais de 30 centímetros em qualquer dimensão, você pode remendá-la, não deixando qualquer vestígio do dano anterior.</p><p> Essa magia pode reparar fisicamente um item mágico ou constructo, mas a magia não irá restaurar a magia em tais objetos.","classes":["Bardo","Clérigo","Druida","Feiticeiro","Mago"],"favorite":false},{"id":39,"level":"1","name":"Constrição","name_en":"Entangle","school":{"pt":"Conjuração","style":"conjuration"},"castingTime":"1 ação","range":"27 metros","components":"V, S","concentration":"s","duration":"até 1 minuto","description":"Ervas e vinhas poderosas brotam do solo num quadrado de 6 metros a partir de um ponto dentro do alcance. Pela duração, essas plantas transformam o solo na área em terreno difícil.</p><p> Uma criatura na área quando você conjurar a magia deve ser bem sucedida num teste de resistência de Força ou ficará impedida pelo emaranhado de plantas, até a magia acabar. Uma criatura impedida pelas plantas pode usar sua ação para realizar um teste de Força, contra a CD da magia. Se for bem sucedido, irá se libertar.</p><p> Quando a magia termina, as plantas conjuradas murcharão.","classes":["Druida"],"favorite":false},{"id":247,"level":"5","name":"Contato Extraplanar","name_en":"Contact Other Plane","ritual":"s","school":{"pt":"Adivinhação","style":"divination"},"castingTime":"1 minuto","range":"pessoal","components":"V","duration":"1 minuto","description":"Você contata mentalmente um semideus, o espírito de um sábio morto há muito tempo ou alguma outra entidade misteriosa de outro plano. Contatar esse extraplanar inteligente pode distorcer ou até mesmo arruinar com sua mente. Quando você conjurar essa magia, faça um teste de resistência de Inteligência CD 15. Se falhar, você sofre 6d6 de dano psíquico e fica insano até terminar um descanso longo. Enquanto estiver insano, você não pode realizar ações, não entende o que as outras criaturas dizem, não pode ler e fala apenas coisas sem sentido. Conjurar a magia <em> restauração maior </em> em você acaba com esse efeito.</p><p> Se obtiver sucesso no teste de resistência, você pode fazer até cinco perguntas à entidade. Você deve fazer suas perguntas antes da magia acabar. O Mestre responde cada pergunta com uma única palavra, como“ sim”, “não”, “talvez”, “nunca”, “irrelevante” ou“ incerto” (se a entidade não souber a resposta para a pergunta). Em caso de uma resposta de única palavra puder levar ao engano, o Mestre pode, ao invés disso, oferecer uma frase curta como resposta.","classes":["Bruxo","Mago"],"favorite":false},{"id":283,"level":"6","name":"Contingência","name_en":"Contingency","school":{"pt":"Evocação","style":"evocation"},"castingTime":"10 minutos","range":"pessoal","components":"V, S, M","duration":"10 dias","material":"uma estátua sua esculpida em marfim e decorada com gemas valendo, no mínimo, 1. 500 po","description":"Escolha uma magia de 5° nível ou inferior que você possa conjurar, que tenha um tempo de conjuração de 1 ação e que possa ter você como alvo. Você conjura essa magia– chamada de magia contingente– como parte da conjuração de <em> contingência </em>, gastando espaços de magia para ambas, mas a magia contingente não tem efeito imediato. Ao invés disso, ela se ativa quando uma certa circunstância ocorre. Você descreve a circunstância quando conjura as duas magias. Por exemplo, uma <em> contingência </em> conjurada com <em> respirar na água </em> pode estipular que <em> respirar na água </em> se ative quando você estiver imerso em água ou um líquido similar.</p><p> A magia contingente se ativa imediatamente depois da circunstância ser satisfeita pela primeira vez, quer você queira, quer não, e a <em> contingência </em> termina.</p><p> A magia contingente afeta apenas você, mesmo que ela normalmente possa afetar outros alvos. Você pode ter apenas uma <em> contingência </em> ativa por vez. Se você conjurar essa magia novamente, o efeito da outra magia <em> contingência </em> termina. Além disso, a <em> contingência </em> também termina em você se os componentes materiais dela não estiverem mais com você.</p> ","classes":["Mago"],"favorite":false},{"id":159,"level":"3","name":"Contramágica","name_en":"Counterspell","school":{"pt":"Abjuração","style":"abjuration"},"castingTime":"1 reação","range":"18 metros","components":"S","duration":"instantânea","reaction":"que você realiza quando vê uma criatura a até 18 metros conjurando uma magia","description":"Você tenta interromper uma criatura no processo de conjuração de uma magia. Se a criatura estiver conjurando uma magia de 3° nível ou inferior, a magia falha e não gera nenhum efeito. Se ela estiver conjurando uma magia de 4° nível ou superior, faça um teste de habilidade usando sua habilidade de conjuração. A CD é igual a 10 + o nível da magia. Caso seja bem sucedido, a magia da criatura falha e não gera nenhum efeito.</p><p><strong> Em Níveis Superiores </strong>. Se você conjurar essa magia usando um espaço de magia de 4° nível ou superior, a magia interrompida não vai gerar efeito se o nível dela for menor ou igual ao nível do espaço de magia que você usar.","classes":["Bruxo","Feiticeiro","Mago"],"favorite":false},{"id":209,"level":"4","name":"Controlar a Água","name_en":"Control Water","school":{"pt":"Transmutação","style":"transmutation"},"castingTime":"1 ação","range":"90 metros","components":"V, S, M","concentration":"s","duration":"até 10 minutos","material":"uma gota de água e uma pitada de poeira","description":"Até o fim da magia, você controla qualquer corpo de água dentro da área que você escolher, que é um cubo de 30 metros quadrados. Você pode escolher dentre quaisquer dos efeitos seguintes, quando você conjurar essa magia. Com uma ação no seu turno, você pode repetir o mesmo efeito ou escolher um diferente.</p><p><em><strong> Inundação </strong></ em>. Você faz com que o nível da água de toda área afetada suba até 6 metros. Se a área incluir uma margem, a inundação ira transbordar para a terra seca.</p><p> Se você escolher uma área em um extenso corpo de água, ao invés disso, você cria uma onda com 6 metros de altura que irá de um lado ao outro da área e então desaba. Qualquer veículo Enorme ou menor no caminho da onda será carregado por ela até o outro lado. Qualquer veículo Enorme ou menor atingido pela onda tem uma chance de 25 por cento de emborcar.</p><p> O nível da água se mantém elevado até a magia acabar ou você escolher um efeito diferente. Se esse efeito produzir uma onda, a onda se repete no início do seu próximo turno enquanto o efeito de inundação durar.</p><p><em><strong> Dividir Água </strong></ em>. Você faz com que a água na área se divida e crie uma trincheira. A trincheira se estende por toda área da magia e a água separada forma uma parede de cada lado. A trincheira permanece até a magia acabar ou você escolher um efeito diferente. A água, então, lentamente preenche a trincheira ao longo do curso da próxima rodada até o nível normal da água ser restaurado.</p><p><em><strong> Redirecionar Fluxo </strong></ em>. Você faz com que o fluxo da água na área se mova na direção que você escolher, mesmo que a água tenha que fluir através de obstáculos, subir muros ou em outra direção improvável. A água na área se move na direção ordenada, mas uma vez que tenha se movido além da área da magia, ela conclui seu fluxo baseado nas condições do terreno. A água continua a se mover na direção que você escolheu até a magia acabar ou você escolher um efeito diferente.</p><p><em><strong> Redemoinho </strong></ em>. Esse efeito requer um corpo de água de, pelo menos, 15 metros quadrados e 7, 5 metros de profundidade. Você faz com que um redemoinho se forme no centro da área. O redemoinho forma um vórtice com 1,5 metro de largura na base, chegando a 15 metros de largura no topo e 7, 5 metros de altura. Qualquer criatura ou objeto na água a até 7, 5 metros do vórtice é puxado 3 metros na direção dele. Uma criatura pode tentar nadar para longe do vórtice com um teste de Força (Atletismo) contra a CD da magia.</p><p> Quando uma criatura entrar no vórtice pela primeira vez no turno dela ou começar seu turno dentro dele, ela deve realizar um teste de resistência de Força. Se falhar, a criatura sofre 2d8 de dano de concussão e estará presa no vórtice até a magia acabar. Se passar na resistência, a criatura sofre metade do dano e não estará presa no vórtice. Uma criatura presa no vórtice pode usar sua ação para tentar nadar para fora do vórtice como descrito acima, mas terá desvantagem no teste de Força (Atletismo) para fazer isso.</p><p> A primeira vez a cada turno que um objeto entrar no vórtice, o objeto sofre 2d8 de dano de concussão, esse dano se repete a cada rodada que ele permanecer no vórtice.","classes":["Clérigo","Druida","Mago"],"favorite":false},{"id":331,"level":"8","name":"Controlar o Clima","name_en":"Control Weather","school":{"pt":"Transmutação","style":"transmutation"},"castingTime":"10 minutos","range":"pessoal","components":"V, S, M","concentration":"s","duration":"até 8 horas","material":"incenso aceso e pedaços de terra e madeira misturados em água","description":"Você toma controle do clima numa área de 7, 5 quilômetros de você pela duração. Você deve estar ao ar livre para conjurar essa magia. Se mover para um lugar onde você não tenha uma visão clara do céu termina a magia prematuramente.</p><p> Quando você conjurar essa magia, você muda as condições climáticas atuais, que são determinadas pelo Mestre baseado no ambiente e estação. Você pode mudar a precipitação, temperatura e vento. Leva 1d4 x 10 minutos para as novas condições fazerem efeito. Quando a magia terminar, o clima, gradualmente, volta ao normal.</p><p> Quando você altera as condições climáticas, encontre a condição atual nas tabelas a seguir e mude em um estágio, para cima ou para baixo. Quando mudar o vento, você pode mudar a direção do mesmo.","classes":["Clérigo","Druida","Mago"],"favorite":false},{"id":40,"level":"1","name":"Convocar Familiar","name_en":"Find Familiar","ritual":"s","school":{"pt":"Conjuração","style":"conjuration"},"castingTime":"1 hora","range":"3 metros","components":"V, S, M","duration":"instantânea","material":"carvão, incenso e ervas no valor de 10 po, que devem ser consumidos pelo fogo em um braseiro de bronze","description":"Você adquire os serviços de uma familiar, um espírito que toma a forma de um animal, à sua escolha: aranha, caranguejo, cavalo marinho, coruja, corvo, doninha, gato, falcão, lagarto, morcego, peixe (arenque), polvo, rato, rã (sapo) ou serpente venenosa. Aparecendo em um espaço desocupado dentro do alcance, o familiar tem as mesmas estatísticas da forma escolhida, no entanto, ele é um celestial, corruptor ou fada (à sua escolha) ao invés de uma besta.</p><p> Seu familiar até independentemente de você, mas ele sempre obedece aos seus comandos. Em combate, ele rola sua a própria iniciativa e age no seu próprio turno. Um familiar não pode atacar, mas ele pode realizar outras ações, como de costume.</p><p> Quando um familiar cai a 0 pontos de vida, ele desaparece, não deixando qualquer corpo físico para trás. Ele reaparece depois de você conjurar essa magia novamente.</p><p> Enquanto seu familiar estiver a até 30 metros de você, você pode se comunicar telepaticamente com ele. Além disso, com uma ação, você pode ver através dos olhos do familiar e ouvir através dos ouvidos dele, até o início do seu próximo turno, adquirindo os benefícios de qualquer sentido especial que o familiar possua. Durante esse período, você estará cego e surdo em relação aos seus próprios sentidos.</p><p> Com uma ação, você pode, temporariamente, dispensar seu familiar. Ele desaparece dentro de uma bolsa dimensional onde ele aguarda sua convocação. Alternativamente, você pode dispensa - lo para sempre. Com uma ação, enquanto ele estiver temporariamente dispensado, você pode fazê - lo reaparecer em qualquer espaço desocupado a até 9 metros de você.</p><p> Você não pode ter mais de um familiar por vez. Se você conjurar essa magia enquanto já tiver um familiar, ao invés disso, você faz seu familiar existente adotar uma nova forma. Escolha uma das formas da lista acima. Seu familiar se transforma na criatura escolhida.</p><p> Finalmente, quando você conjura uma magia com alcance de toque, seu familiar pode transmitir a magia, como se ele tivesse conjurado ela. Seu familiar precisa estar a até 30 metros de você e deve usar a reação dele para transmitir a magia quando você a conjurar. Se a magia necessitar de uma jogada de ataque, você usa seu modificador de ataque para essa jogada.","classes":["Mago"],"favorite":false},{"id":104,"level":"2","name":"Convocar Montaria","name_en":"Find Steed","school":{"pt":"Conjuração","style":"conjuration"},"castingTime":"10 minutos","range":"9 metros","components":"V, S","duration":"instantânea","description":"Você convoca um espírito que assume a forma de uma montaria excepcionalmente inteligente, forte e leal, criando uma ligação duradoura com ela. Aparecendo em um espaço desocupado dentro do alcance, a montaria adquire a forma que você escolher, como um cavalo de guerra, um pônei, um camelo, um alce ou um mastim. (Seu Mestre pode permitir outros animais para serem convocados como montarias.) A montaria tem as estatísticas da forma escolhida, no entanto, ele é um celestial, corruptor ou fada (à sua escolha) ao invés do seu tipo normal. Além disso, se sua montaria tiver Inteligência 5 ou menor, a Inteligência dela se torna 6 e ela ganha a capacidade de compreender um idioma, à sua escolha, que você fala.</p><p> Sua montaria serve tanto para cavalgar quando para o combate e você tem uma ligação instintiva com ela que permite a vocês lutarem como uma unidade singular. Enquanto estiver montado na sua montaria, você pode fazer com que qualquer magia que você conjure que tenha alcance pessoal, também afete a sua montaria.</p><p> Quando a montaria cair a 0 pontos de vida, ela desaparece, não deixando qualquer corpo físico para trás. Você também pode dispensar sua montaria a qualquer momento, com uma ação, fazendo - a desaparecer. Em ambos os casos, conjurar essa magia novamente convocará a mesma montaria, restaurando - a ao seu máximo de pontos de vida.</p><p> Enquanto sua montaria estiver a até 1,5 quilômetro de você, você pode se comunicar telepaticamente com ela.</p><p> Você não pode ter mais de uma montaria ligada por essa magia por vez. Com uma ação, você pode liberar a montaria da ligação a qualquer momento, fazendo - a desaparecer.","classes":["Paladino"],"favorite":false},{"id":160,"level":"3","name":"Convocar Relâmpagos","name_en":"Call Lightning","school":{"pt":"Conjuração","style":"conjuration"},"castingTime":"1 ação","range":"36 metros","components":"V, S","concentration":"s","duration":"até 10 minutos","description":"Uma nuvem tempestuosa aparece em formato cilíndrico com 3 metros de altura e 18 metros de raio, centrada num ponto que você possa ver, 30 metros acima de você. A magia falha se você não puder ver um ponto no ar em que a nuvem possa aparecer (por exemplo, se você estiver em uma sala que não possa comportar a nuvem).</p><p> Quando você conjurar a magia, escolha um ponto que você possa ver dentro do alcance. Um raio de eletricidade é disparado da nuvem no ponto. Cada criatura a 1,5 metro desse ponto deve realizar um teste de resistência de Destreza. Uma criatura sofre 3d10 de dano elétrico se falhar no teste, ou metade desse dano se passar. Em cada um dos seus turnos, até a magia acabar, você pode usar sua ação para convocar um relâmpago dessa forma novamente, afetando o mesmo ponto ou um diferente.</p><p> Se você estiver a céu aberto em condições tempestuosas quando conjurar essa magia, a magia lhe dá controle sobre a tempestade existente ao invés de criar uma nova. Sob tais condições, o dano da magia aumenta em 1d10.</p><p><strong> Em Níveis Superiores </strong>. Se você conjurar essa magia usando um espaço de magia de 4° nível ou superior, o dano aumenta em 1d10 para cada nível do espaço acima do 3°.","classes":["Druida"],"favorite":false},{"id":106,"level":"2","name":"Cordão de Flechas","name_en":"Cordon Of Arrows","school":{"pt":"Transmutação","style":"transmutation"},"castingTime":"1 ação","range":"1,5 metro","components":"V, S, M","duration":"8 horas","material":"quatro ou mais flechas ou virotes","description":"Você enfinca quatro munições não - mágicas– flechas ou virotes de besta– no solo dentro do alcance e conjura magia neles para proteger uma área. Até a magia acabar, sempre que uma criatura diferente de você se aproximar a 9 metros das munições pela primeira vez em um turno ou terminar seu turno na área, uma das munições voa para atingi - la. A criatura deve ser bem sucedida num teste de resistência de Destreza ou sofrerá 1d6 de dano perfurante. A munição, então, é destruída. A magia termina quando não restar nenhuma munição.</p><p> Quando você conjurar essa magia, você pode designar quaisquer criaturas, à sua escolha, e a magia ignora - as.</p><p><strong> Em Níveis Superiores </strong>. Quando você conjurar essa magia usando um espaço de magia de 3° nível ou superior, a quantidade de munições que você pode afetar aumenta em dois para cada nível do espaço acima do 2°.","classes":["Patrulheiro"],"favorite":false},{"id":105,"level":"2","name":"Coroa da Loucura","name_en":"Crown Of Madness","school":{"pt":"Encantamento","style":"enchantment"},"castingTime":"1 ação","range":"36 metros","components":"V, S","concentration":"s","duration":"até 1 minuto","description":"Um humanoide, à sua escolha, que você possa ver dentro do alcance, deve ser bem sucedido num teste de resistência de Sabedoria ou ficará enfeitiçado por você pela duração. Enquanto o alvo estiver enfeitiçado dessa forma, uma coroa retorcida de ferro denteado aparece na cabeça dele e a loucura brilha em seus olhos.</p><p> A criatura enfeitiçada deve usar sua ação antes de se mover, em cada um dos turnos dela, para realizar um ataque corpo - a - corpo contra uma criatura, diferente de si mesma, que você escolher mentalmente.</p><p> O alvo pode agir normalmente no turno dele se você não escolher uma criatura ou se você não estiver dentro do alcance.</p><p> Nos seus turnos subsequentes, você deve usar sua ação para manter o controle sobre o alvo, ou a magia termina. Igualmente, o alvo pode realizar um teste de resistência de Sabedoria no final de cada um dos turnos dele. Se obtiver sucesso, a magia termina.","classes":["Bardo","Bruxo","Feiticeiro","Mago"],"favorite":false},{"id":284,"level":"6","name":"Corrente de Relâmpagos","name_en":"Chain Lightning","school":{"pt":"Evocação","style":"evocation"},"castingTime":"1 ação","range":"45 metros","components":"V, S, M","duration":"instantânea","material":"um pouco de pelo, um pedaço de âmbar, vidro ou um bastão de cristal, e três pinos de prata","description":"Você cria um raio elétrico que atinge um alvo, à sua escolha, que você possa ver dentro do alcance. Três raios saltam do alvo para até três outros alvos, cada um a não mais de 9 metros do alvo primário. Um alvo pode ser uma criatura ou um objeto e só pode ser alvo de um único desses raios.</p><p> Um alvo deve realizar um teste de resistência de Destreza. O alvo sofre 10d8 de dano elétrico se falhar no teste ou metade desse dano se for bem sucedido.</p><p><strong> Em Níveis Superiores </strong>. Se você conjurar essa magia usando um espaço de magia de 7° nível ou superior, um raio adicional salta do alvo primário para outro alvo para cada nível do espaço acima do 6°.","classes":["Feiticeiro","Mago"],"favorite":false},{"id":107,"level":"2","name":"Crescer Espinhos","name_en":"Spike Growth","school":{"pt":"Transmutação","style":"transmutation"},"castingTime":"1 ação","range":"45 metros","components":"V, S, M","concentration":"s","duration":"até 10 minutos","material":"sete espinhos afiados ou sete gravetos, todos com uma ponta afiada","description":"O solo em 6 metros quadrados, centrado num ponto dentro do alcance, se retorce e brotam cavilhas rígidas e espinhos. A área se torna terreno difícil pela duração. Quando uma criatura entrar ou se mover dentro da área, ela sofrerá 2d4 de dano perfurante para cada 1,5 metro que ela atravessar.</p><p> A transformação do terreno é camuflada para parecer natural. Qualquer criatura que não puder ver a área no momento que a magia for conjurada, deve realizar um teste de Sabedoria (Percepção) contra a CD da magia para reconhecer o terreno como perigoso, antes de adentra - lo.","classes":["Druida","Patrulheiro"],"favorite":false},{"id":248,"level":"5","name":"Criação","name_en":"Creation","school":{"pt":"Ilusão","style":"illusion"},"castingTime":"1 minuto","range":"9 metros","components":"V, S, M","duration":"especial","material":"um pequeno pedaço de material do mesmo tipo do item que você planeja criar","description":"Você puxa mechas de matéria sombria da Umbra para criar objetos inanimados de matéria vegetal dentro do alcance: bens finos, cordas, madeira ou algo similar. Você também pode usar a magia para criar objetos minerais como pedra, cristal ou metal. O objeto criado não pode ser maior que um cubo de 1,5 metro e o objeto deve ser de um formado e material que você já tenha visto antes.</p><p> A duração depende do material do objeto. Se o objeto for composto por diversos materiais, use o de menor duração.","classes":["Feiticeiro","Mago"],"favorite":false},{"id":161,"level":"3","name":"Criar Alimentos","name_en":"Create Food And Water","school":{"pt":"Conjuração","style":"conjuration"},"castingTime":"1 ação","range":"9 metros","components":"V, S","duration":"instantânea","description":"Você cria 25 quilos de comida e 100 litros de água no solo ou em um recipiente dentro do alcance, suficiente para sustentar até quinze humanoide ou cinco montarias por 24 horas. A comida é insossa, porém, nutritiva e estraga se não for consumida após 24 horas. A água é limpa e não fica ruim.","classes":["Clérigo","Paladino"],"favorite":false},{"id":6,"level":"0","name":"Criar Chamas","name_en":"Produce Flames","school":{"pt":"Conjuração","style":"conjuration"},"castingTime":"1 ação","range":"pessoal","components":"V, S","duration":"10 minutos","description":"Uma chama tremulante aparece na sua mão. A chama permanece ai pela duração e não machuca nem você nem seu equipamento. A chama emite luz plena num raio de 3 metros e penumbra por 3 metros adicionais. A magia acaba se você dissipá-la usando uma ação ou se conjurá-la novamente.</p><p> Você pode, também, atacar com a chama, no entanto, fazer isso acaba com a magia. Quando você conjura essa magia ou com uma ação em um turno posterior, você pode arremessar a chama numa criatura a até 9 metros de você. Faça um ataque à distância com magia. Se atingir, o alvo sofre 1d8 de dano de fogo.</p><p> O dano dessa magia aumenta em 1d8 quando você alcança o 5° nível (2d8), 11° nível (3d8) e 17° nível (4d8).","classes":["Druida"],"favorite":false},{"id":285,"level":"6","name":"Criar Mortos-Vivos","name_en":"Create Undead","school":{"pt":"Necromancia","style":"necromancy"},"castingTime":"1 minuto","range":"3 metros","components":"V, S, M","duration":"instantânea","material":"um pote de barro cheio de terra de sepultura, um pote de barro cheio de água salobra, e uma ônix negra no valor de 150 po, para cada corpo","description":"Você só pode conjurar essa magia durante a noite. Escolha até três corpos de humanoides Médios ou Pequenos dentro do alcance. Cada corpo se torna um carniçal sob seu controle. (O Mestre tem as estatísticas de jogo das criaturas.) </p><p> Com uma ação bônus, em cada um dos seus turnos, você pode comandar mentalmente qualquer criatura que você animou com essa magia, se a criatura estiver a até 36 metros de você (se você controla diversas criaturas, você pode comandar qualquer uma ou todas elas ao mesmo tempo, emitindo o mesmo comando para cada uma). Você decide qual ação a criatura irá fazer e para onde ela irá se mover durante o próximo turno dela, ou você pode emitir um comando geral, como para guardar uma câmara ou corredor especifico. Se você não der nenhum comando, as criaturas apenas se defenderão contra criaturas hostis. Uma vez que receba uma ordem, a criatura continuará a segui - la até a tarefa estar concluída.</p><p> A criatura fica sob seu controle por 24 horas, depois disso ela para de obedecer aos seus comandos. Para manter o controle da criatura por mais 24 horas, você deve conjurar essa magia na criatura novamente, antes das 24 horas atuais terminarem. Esse uso da magia recupera seu controle sobre até três criaturas que você tenha animado com essa magia, ao invés de animar novas.</p><p><strong> Em Níveis Superiores </strong>. Quando você conjurar essa magia usando um espaço de magia de 7° nível, você pode animar ou recuperar o controle de quatro carniçais. Quando você conjura essa magia usando um espaço de magia de 8° nível, você pode animar ou recuperar o controle de cinco carniçais ou dois lívidos ou aparições. Quando você conjurar essa magia usando um espaço de magia de 9° nível, você pode animar ou recuperar o controle de seis carniçais, três lívidos ou aparições ou duas múmias.","classes":["Bruxo","Clérigo","Mago"],"favorite":false},{"id":41,"level":"1","name":"Criar ou Destruir Água","name_en":"Create Or Destroy Water","school":{"pt":"Transmutação","style":"transmutation"},"castingTime":"1 ação","range":"9 metros","components":"V, S, M","duration":"instantânea","material":"uma gota de água se estiver criando ou alguns grãos de areia se estiver destruindo","description":"Você pode tanto criar quanto destruir água.</p><p><em><strong> Criar Água </strong></ em>. Você cria 30 litros de água limpa dentro do alcance, em um recipiente aberto. Alternativamente, a água pode cair como chuva em um cubo de 9 metros dentro do alcance, extinguindo chamas expostas na área.</p><p><em><strong> Destruir Água </strong></ em>. Você destrói até 30 litros de água de um recipiente aberto dentro do alcance. Alternativamente, você pode destruir um nevoeiro em um cubo de 9 metros dentro do alcance.</p><p><strong> Em Níveis Superiores </strong>. Quando você conjurar essa magia usando um espaço de magia de 2° nível ou superior, você pode criar ou destruir 30 litros de água adicionais, ou o tamanho do cubo aumenta em 1,5 metro, para cada nível do espaço acima do 1°.","classes":["Clérigo","Druida"],"favorite":false},{"id":249,"level":"5","name":"Criar Passagem","name_en":"Passwall","school":{"pt":"Transmutação","style":"transmutation"},"castingTime":"1 ação","range":"9 metros","components":"V, S, M","duration":"1 hora","material":"algumas sementes de gergelim","description":"Uma passagem aparece em um ponto, à sua escolha, que você possa ver em uma superfície de madeira, gesso ou rocha (como um muro, um teto ou um piso) dentro do alcance e permanece pela duração. Você escolhe as dimensões da passagem: até 1,5 metro de largura, 2, 10 de altura e 6 metros de profundidade. A passagem não provoca instabilidade na estrutura ao seu redor.</p><p> Quando a abertura desaparecer, qualquer criatura ou objeto que ainda estiver dentro da passagem criada pela magia é ejetada em segurança para o espaço desocupado mais próximo da superfície onde a magia foi conjurada.","classes":["Mago"],"favorite":false},{"id":250,"level":"5","name":"Cúpula Antivida","name_en":"Antilife Shell","school":{"pt":"Abjuração","style":"abjuration"},"castingTime":"1 ação","range":"pessoal","components":"V, S","concentration":"s","duration":"até 1 hora","description":"Uma barreira cintilante se estende de você até 3 metros de raio, e se move com você, permanecendo centrada em você e restringindo criaturas diferentes de mortos - vivos e constructos. A barreira mantém - se pela duração.</p><p> A barreira previna uma criatura afetada de atravessá-la ou alcançar através dela. Uma criatura afetada pode conjurar magias ou realizar ataques à distância ou ataques com armas de haste através da barreira.</p><p> Se você se mover forçando uma criatura afetada a atravessar a barreira, a magia termina.","classes":["Druida"],"favorite":false},{"id":286,"level":"6","name":"Cura Completa","name_en":"Heal","school":{"pt":"Evocação","style":"evocation"},"castingTime":"1 ação","range":"18 metros","components":"V, S","duration":"instantânea","description":"Escolha uma criatura que você possa ver, dentro do alcance. Um surto de energia positiva banha a criatura, fazendo - a recuperar 70 pontos de vida. Essa magia também acaba com efeitos de cegueira, surdez e qualquer doença que estejam afetando o alvo. Essa magia não tem efeito em constructos ou mortos - vivos.</p><p><strong> Em Níveis Superiores </strong>. Quando você conjurar essa magia usando um espaço de magia de 7° nível ou superior, a quantidade de cura aumenta em 10 para cada nível do espaço acima do 6°.","classes":["Clérigo","Druida"],"favorite":false},{"id":348,"level":"9","name":"Cura Completa Em Massa","name_en":"Mass Heal","school":{"pt":"Evocação","style":"evocation"},"castingTime":"1 ação","range":"18 metros","components":"V, S","duration":"instantânea","description":"Uma inundação de energia curativa emerge de você para as criaturas feridas ao seu redor. Você restaura até 700 pontos de vida, divididos, à sua escolha, entre qualquer quantidade de criaturas que você possa ver, dentro do alcance. As criaturas curadas por essa magia também são curadas de todas as doenças e qualquer efeito que as deixou cegas ou surdas. Essa magia não afeta mortos - vivos ou constructos.","classes":["Clérigo"],"favorite":false},{"id":42,"level":"1","name":"Curar Ferimentos","name_en":"Cure Wounds","school":{"pt":"Evocação","style":"evocation"},"castingTime":"1 ação","range":"toque","components":"V, S","duration":"instantânea","description":"Uma criatura que você tocar recupera uma quantidade de pontos de vida igual a 1d8 + seu modificador de habilidade de conjuração. Essa magia não produz efeito em mortos - vivos ou constructos.</p><p><strong> Em Níveis Superiores </strong>. Se você conjurar essa magia usando um espaço de magia de 2° nível ou superior, a cura aumenta em 1d8 para cada nível do espaço acima do 1°.","classes":["Bardo","Clérigo","Druida","Paladino","Patrulheiro"],"favorite":false},{"id":251,"level":"5","name":"Curar Ferimentos Em Massa","name_en":"Mass Cure Wounds","school":{"pt":"Evocação","style":"evocation"},"castingTime":"1 ação","range":"18 metros","components":"V, S","duration":"instantânea","description":"Uma onda de energia curativa emerge de um ponto, à sua escolha, dentro do alcance. Escolha até seis criaturas numa esfera de 9 metros de raio, centrada nesse ponto. Cada alvo recupera uma quantidade de pontos de vida igual a 3d8 + seu modificador de habilidade de conjuração. A magia não afeta mortos - vivos ou constructos.</p><p><strong> Em Níveis Superiores </strong>. Quando você conjurar essa magia usando um espaço de magia de 6° nível ou superior, a cura aumenta em 1d8 para cada nível do espaço acima do 5°.","classes":["Bardo","Clérigo","Druida"],"favorite":false},{"id":287,"level":"6","name":"Dança Irresistível de Otto","name_en":"Otto's Irresistable Dance","school":{"pt":"Encantamento","style":"enchantment"},"castingTime":"1 ação","range":"9 metros","components":"V","concentration":"s","duration":"até 1 minuto","description":"Escolha uma criatura que você possa ver, dentro do alcance. O alvo começa a dançar comicamente no lugar: rodopiando, batendo os pés e saltitando pela duração. As criaturas que não podem ser enfeitiçadas são imunes a essa magia.</p><p> Uma criatura dançando deve usar todo o seu movimento para dançar sem abandonar seu espaço e tem desvantagem nos testes de resistência de Destreza e nas jogadas de ataque. Enquanto o alvo estiver sob efeito dessa magia, as outras criaturas terão vantagem nas jogadas de ataque contra ele. Com uma ação, uma criatura dançando pode realizar um teste de resistência de Sabedoria para recuperar controle sobre si mesmo. Num sucesso na resistência, a magia acaba.","classes":["Bardo","Mago"],"favorite":false},{"id":309,"level":"7","name":"Dedo da Morte","name_en":"Finger Of Death","school":{"pt":"Necromancia","style":"necromancy"},"castingTime":"1 ação","range":"18 metros","components":"V, S","duration":"instantânea","description":"Você envia energia negativa na direção de uma criatura que você possa ver, dentro do alcance, causando dores severas nela. O alvo deve realizar um teste de resistência de Constituição. Ele sofre 7d8 + 30 de dano necrótico se falhar na resistência, ou metade desse dano se obtiver sucesso.</p><p> Um humanoide morto por essa magia, se ergue no início do seu próximo turno como um zumbi que está permanentemente sob seu controle, seguindo suas ordens verbais da melhor forma possível.","classes":["Bruxo","Feiticeiro","Mago"],"favorite":false},{"id":349,"level":"9","name":"Desejo","name_en":"Wish","school":{"pt":"Conjuração","style":"conjuration"},"castingTime":"1 ação","range":"pessoal","components":"V","duration":"instantânea","description":"<em> Desejo </em> é a magia mais poderosa que uma criatura mortal pode conjurar. Apenas ao falar em voz alta, você pode alterar os próprios fundamentos da realidade, de acordo com seus desejos.</p><p> O uso básico dessa magia é de copiar qualquer magia de 8° nível ou inferior. Você não precisa atender a qualquer pré - requisito da magia copiada, incluindo os componentes dispendiosos. A magia simplesmente acontece.</p><p> Alternativamente, você pode criar um dos seguintes efeitos, à sua escolha: </p><ul><li> Você cria um objeto no valor de até 25. 000 po, que não seja mágico. O objeto não pode ter dimensões maiores que 90 metros e ele aparece em um espaço desocupado que você possa ver, no chão.</li><li> Você permite que até doze criaturas que você possa ver, recuperem todos os seus pontos de vida e você acaba com todos os efeitos descritos na magia <em> restauração maior </em>.</li><li> Você concede a até dez criaturas que você possa ver, resistência a um tipo de dano, à sua escolha.</li><li> Você concede a até dez criaturas que você possa ver, imunidade a uma única magia ou outro efeito mágico por 8 horas. Por exemplo, você poderia deixar você e todos os seus companheiros imunes ao ataque de dreno de vida de um lich.</li><li> Você desfaz um único evento recente forçando uma nova jogada de qualquer jogada feita na última rodada (incluindo seu último turno). A realidade remodela - se para acomodar o novo resultado. Por exemplo, uma magia <em> desejo </em> poderia desfazer o teste de resistência bem sucedido de um oponente, um acerto crítico de um inimigo ou o teste de resistência fracassado de um amigo. Você pode forçar que a nova jogada seja feita com vantagem ou desvantagem e você pode escolher se irá usar o resultado da nova jogada ou da jogada original.</li></ ul><p> Você é capaz de fazer coisas além do alcance dos exemplos acima. Apresente seu desejo ao Mestre o mais precisamente possível. O Mestre tem grande amplitude em definir o que ocorre em tais circunstâncias, quanto maior o desejo, maior será a possibilidade de que algo dê errado. Essa magia pode simplesmente falhar, o efeito do seu desejo pode ser apenas parcialmente atendido ou você pode sofrer consequências imprevistas como resultado da forma que você formulou o desejo. Por exemplo, desejar que um vilão esteja morto pode impulsionar você para um período no tempo em que o vilão não esteja mais vivo, efetivamente removendo você do jogo. Similarmente, desejar um item mágico lendário ou um artefato poderia, instantaneamente, transportar você para a presença do dono atual do item.</p><p> O estresse da conjuração dessa magia para produzir qualquer efeito diferente de copiar outra magia enfraquece você. Após enfrentar esse estresse, a cada vez que você conjurar uma magia, antes de terminar um descanso longo, você sofrerá 1d10 de dano necrótico por nível da magia. Esse dano não pode ser reduzido ou prevenido de forma alguma. Além disso, sua Força cai para 3, se ela já não for 3 ou inferior, por 2d4 dias. Para cada dia desses que você permanecer descansando e não fizer nada além de atividades leves, seu tempo de recuperação é reduzido em 2 dias. Finalmente, existe 33 por cento de chance de você se tornar incapaz de conjurar <em> desejo </em> novamente se você sofrer esse estresse.</p> ","classes":["Feiticeiro","Mago"],"favorite":false},{"id":288,"level":"6","name":"Desintegrar","name_en":"Disintegrate","school":{"pt":"Transmutação","style":"transmutation"},"castingTime":"1 ação","range":"18 metros","components":"V, S, M","duration":"instantânea","material":"um ímã e uma pitada de poeira","description":"Um fino raio esverdeado é lançado da ponta do seu dedo em um alvo que você possa ver dentro do alcance. O alvo pode ser uma criatura, um objeto ou uma criação de energia mágica, como uma muralha criada por <em> muralha de energia </em>.</p><p> Uma criatura afetada por essa magia deve realizar um teste de resistência de Destreza. Se falhar na resistência, o alvo sofrerá 10d6 + 40 de dano de energia. Se esse dano reduzir os pontos de vida do alvo a 0, ele será desintegrado.</p><p> Uma criatura desintegrada e tudo que ela está vestindo ou carregando, exceto itens mágicos, são reduzidos a uma pilha de um fino pó acinzentado. A criatura só pode ser trazida de volta a vida por meio das magias <em> ressurreição verdadeira </em> ou <em> desejo </em>.</p><p> Essa magia desintegra, automaticamente, um objeto não - mágico Grande ou menor ou uma criação de energia mágica. Se o alvo for um objeto ou criação de energia Enorme ou maior, a magia desintegra uma porção de 3 metros cúbicos dele. Um item mágico não pode ser afetado por essa magia.</p><p><strong> Em Níveis Superiores </strong>. Se você conjurar essa magia usando um espaço de magia de 7° nível ou superior, o dano aumenta em 3d6 para cada nível do espaço acima do 6°.","classes":["Feiticeiro","Mago"],"favorite":false},{"id":108,"level":"2","name":"Despedaçar","name_en":"Shatter","school":{"pt":"Evocação","style":"evocation"},"castingTime":"1 ação","range":"18 metros","components":"V, S, M","duration":"instantânea","material":"uma lasca de mica","description":"Um alto som estridente, dolorosamente intenso, emerge de um ponto, à sua escolha, dentro do alcance. Cada criatura, numa esfera de 3 metros de raio, centrada no ponto deve fazer um teste de resistência de Constituição. Uma criatura sofre 3d8 de dano trovejante se falhar na resistência ou metade desse dano se obtiver sucesso. Uma criatura feita de material inorgânico como pedra, cristal ou metal, tem desvantagem nesse teste de resistência.</p><p> Um objeto não - mágico que não esteja sendo vestido ou carregado, também sofre o dano, se estiver na área da magia.</p><p><strong> Em Níveis Superiores </strong>. Quando você conjurar essa magia usando um espaço de magia de 3° nível ou superior, o dano aumenta em 1d8 para cada nível do espaço acima do 2°.","classes":["Bardo","Bruxo","Feiticeiro","Mago"],"favorite":false},{"id":252,"level":"5","name":"Despertar","name_en":"Awaken","school":{"pt":"Transmutação","style":"transmutation"},"castingTime":"8 horas","range":"toque","components":"V, S, M","duration":"instantânea","material":"uma ágata valendo, no mínimo, 1. 000 po que será consumida pela magia","description":"Depois de gastar o tempo de conjuração traçando runas mágicas com uma gema preciosa, você toca uma besta ou planta Enorme ou menor. O alvo deve ter ou um valor de Inteligência nulo, ou Inteligência 3 ou menor. O alvo ganha Inteligência 10. O alvo também ganha a capacidade de falar um idioma que você conheça. Se o alvo for uma planta, ela ganha a habilidade de mover seus membros, raízes, vinhas, trepadeiras e assim por diante, e ganha sentidos similares ao de um humano. Seu Mestre escolhe as estatísticas apropriadas para o arbusto desperto ou árvore desperta.</p><p> A besta ou planta desperta estará enfeitiçada por você por 30 dias ou até você ou seus companheiros fazerem qualquer coisa nociva contra ela. Quando a condição enfeitiçado terminar, a criatura desperta pode escolher permanecer amigável a você, baseado em como ela foi tratada enquanto estava enfeitiçada.","classes":["Bardo","Druida"],"favorite":false},{"id":253,"level":"5","name":"Despistar","name_en":"Mislead","school":{"pt":"Ilusão","style":"illusion"},"castingTime":"1 ação","range":"pessoal","components":"S","concentration":"s","duration":"até 1 hora","description":"Você fica invisível ao mesmo tempo que uma cópia ilusória sua aparece onde você estava. A cópia permanece pela duração, mas a invisibilidade acaba se você atacar ou conjurar uma magia.</p><p> Você pode usar sua ação para mover a cópia ilusória até o dobro do seu deslocamento e fazê - la gesticular, falar e se comportar da forma que você quiser. Você pode ver através dos olhos e ouvir através dos ouvidos da cópia como se você estivesse localizado onde ela está. Em cada um dos seus turnos, com uma ação bônus, você pode trocar o uso dos sentidos dela pelo seu ou voltar novamente. Enquanto você está usando os sentidos dela, você fica cego e surdo ao que está a sua volta.","classes":["Bardo","Mago"],"favorite":false},{"id":254,"level":"5","name":"Destruição Banidora","name_en":"Banishing Smite","school":{"pt":"Abjuração","style":"abjuration"},"castingTime":"1 ação bônus","range":"pessoal","components":"V","concentration":"s","duration":"até 1 minuto","description":"Da próxima vez que você atingir uma criatura com um ataque com arma, antes do fim da magia, seu ataque crepita com energia e o ataque causa 5d6 de dano de energia extra ao alvo. Além disso, se esse ataque reduzir o alvo a 50 pontos de vida ou menos, você a bane. Se o alvo for nativo de um plano de existência diferente do que você está, o alvo desaparece, retornando ao seu plano natal. Se o alvo for nativo do plano que você está, a criatura é enviada para um semiplano inofensivo. Enquanto estiver lá, a criatura estará incapacitada. Ela permanece lá até a magia acabar, a partir desse ponto, o alvo reaparece no espaço em que ela deixou ou no espaço desocupado mais próximo, se o espaço dela estiver ocupado.","classes":["Paladino"],"favorite":false},{"id":162,"level":"3","name":"Destruição Cegante","name_en":"Blinding Smite","school":{"pt":"Evocação","style":"evocation"},"castingTime":"1 ação bônus","range":"pessoal","components":"V","concentration":"s","duration":"até 1 minuto","description":"Da próxima vez que você atingir uma criatura com um ataque com arma, antes do fim da magia, sua arma emite uma luz intensa, e o ataque causa 3d8 de dano radiante extra ao alvo. Além disso, o alvo deve ser bem sucedido num teste de resistência de Constituição ou ficará cego até a magia acabar.</p><p> Uma criatura cega por essa magia realiza outro teste de resistência de Constituição no final de cada um dos turnos dela. Se obtiver sucesso, não estará mais cega.","classes":["Paladino"],"favorite":false},{"id":43,"level":"1","name":"Destruição Colérica","name_en":"Wrathful Smite","school":{"pt":"Evocação","style":"evocation"},"castingTime":"1 ação bônus","range":"pessoal","components":"V","concentration":"s","duration":"até 1 minuto","description":"Da próxima vez que você atingir com um ataque corpo - a - corpo com arma enquanto essa magia durar, seu ataque causará 1d6 de dano psíquico extra. Além disso, se o alvo for uma criatura, ele deve realizar um teste de resistência de Sabedoria ou ficará amedrontado por você até a magia acabar. Com uma ação, a criatura pode realizar um teste de resistência de Sabedoria contra a CD da magia para se manter resoluto e terminar a magia.","classes":["Paladino"],"favorite":false},{"id":210,"level":"4","name":"Destruição Estonteante","name_en":"Staggering Smite","school":{"pt":"Evocação","style":"evocation"},"castingTime":"1 ação bônus","range":"pessoal","components":"V","concentration":"s","duration":"até 1 minuto","description":"Da próxima vez que você atingir uma criatura com um ataque corpo - a - corpo com arma, antes do fim da magia, sua arma penetra tanto no corpo quanto na mente e o ataque causa 4d6 de dano psíquico adicional ao alvo. O alvo deve realizar um teste de resistência de Sabedoria. Se falhar na resistência, ele terá desvantagem nas jogadas de ataque e testes de habilidade e não poderá efetuar reações até o final do próximo turno dele.","classes":["Paladino"],"favorite":false},{"id":44,"level":"1","name":"Destruição Lancinante","name_en":"Searing Smite","school":{"pt":"Evocação","style":"evocation"},"castingTime":"1 ação bônus","range":"pessoal","components":"V","concentration":"s","duration":"até 1 minuto","description":"Da próxima vez que você atingir uma criatura com um ataque corpo - a - corpo com arma enquanto essa magia durar, sua arma flameja com intensas chamas brancas e o ataque causa 1d6 de dano de fogo extra ao alvo, fazendo - o incendiar pelas chamas. No início de cada turno dele, até a arma acabar, o alvo deve realizar um teste de resistência de Constituição. Se falhar na resistência, ele sofre 1d6 de dano de fogo. Se passar na resistência, a magia acaba. Se o alvo ou uma criatura a 1,5 metro dele usar uma ação para apagar as chamas ou se algum outro efeito extinguir as chamas (como submergir o alvo em água), a magia acaba.</p><p><strong> Em Níveis Superiores </strong>. Quando você conjurar essa magia usando um espaço de magia de 2° nível ou superior, o dano extra inicial causado por esse ataque aumenta em 1d6 para cada nível do espaço acima do 1°.","classes":["Paladino"],"favorite":false},{"id":45,"level":"1","name":"Destruição Trovejante","name_en":"Thunderous Smite","school":{"pt":"Evocação","style":"evocation"},"castingTime":"1 ação bônus","range":"pessoal","components":"V","concentration":"s","duration":"até 1 minuto","description":"Da primeira vez que você atingir um ataque corpo - a - corpo com arma enquanto essa magia durar, sua arma é rodeada por trovões que são audíveis a até 90 metros de você e o ataque causa 2d6 de dano trovejante extra no alvo. Além disso, se o alvo for uma criatura, ele deve ser bem sucedido num teste de resistência de Força ou será empurrado 3 metros para longe de você e cairá no chão.","classes":["Paladino"],"favorite":false},{"id":47,"level":"1","name":"Detectar Magia","name_en":"Detect Magic","ritual":"s","school":{"pt":"Adivinhação","style":"divination"},"castingTime":"1 ação","range":"pessoal","components":"V, S","concentration":"s","duration":"até 10 minutos","description":"Pela duração, você sente a presença de magia a até 9 metros de você. Se você sentir magia dessa forma, você pode usar sua ação para ver uma aura suave em volta de qualquer criatura ou objeto visível, na área que carrega magia, e você descobre a escolha de magia, se houver uma.</p><p> A magia pode penetrar a maioria das barreiras, mas é bloqueada por 30 centímetros de rocha, 2, 5 centímetros de metal comum, uma fina camada de chumbo, ou 90 centímetros de madeira ou terra.","classes":["Bardo","Clérigo","Druida","Feiticeiro","Mago","Paladino","Patrulheiro"],"favorite":false},{"id":46,"level":"1","name":"Detectar o Bem e Mal","name_en":"Detect Evil And Good","school":{"pt":"Adivinhação","style":"divination"},"castingTime":"1 ação","range":"pessoal","components":"V, S","concentration":"s","duration":"até 10 minutos","description":"Pela duração, você sabe se existe uma aberração, celestial, corruptor, elemental, fada ou morto - vivo, a até 9 metros de você, assim como onde a criatura está localizada. Similarmente, você sabe se existe um local ou objeto, a até 9 metros de você, que tenha sido consagrado ou profanado magicamente.</p><p> A magia pode penetrar a maioria das barreiras, mas é bloqueada por 30 centímetros de rocha, 2, 5 centímetros de metal comum, uma fina camada de chumbo, ou 90 centímetros de madeira ou terra.","classes":["Clérigo","Paladino"],"favorite":false},{"id":109,"level":"2","name":"Detectar Pensamentos","name_en":"Detect Thoughts","school":{"pt":"Adivinhação","style":"divination"},"castingTime":"1 ação","range":"pessoal","components":"V, S, M","concentration":"s","duration":"até 1 minuto","material":"um pedaço de cobre","description":"Pela duração, você pode ler os pensamentos de certas criaturas. Quando você conjura essa magia e, com sua ação a cada turno até o fim da magia, você pode focar sua mente em qualquer criatura que você puder ver a até 9 metros de você. Se a criatura escolhida possuir Inteligência 3 ou inferior ou não falar nenhum tipo de idioma, a criatura não poderá ser afetada.</p><p> Você, inicialmente, descobre os pensamentos superficiais da criatura– o que está mais presente na sua mente no momento. Com uma ação, você pode tanto mudar sua atenção para os pensamentos de outra criatura, como tentar sondar mais profundamente na mente da mesma criatura. Se você resolver sondar profundamente, a criatura deve realizar um teste de resistência de Sabedoria. Se falhar, você ganha ciência do seu raciocínio (se possuir), seu estado emocional e algo que tome grande parte da sua mente (como algo que ele se preocupe, amores ou ódios). Se ele for bem sucedido, a magia termina. Em ambas situações, o alvo saberá que você está sondando a mente dele e, a não ser que você mude sua atenção para os pensamentos de outra criatura, a criatura pode usar a ação dela, no turno dela, para realizar um teste de Inteligência resistido por seu teste de Inteligência, se ela for bem sucedida, a magia termina.</p><p> Perguntas feitas diretamente para a criatura alvo, normalmente moldarão o curso dos seus pensamentos, portanto, essa magia é particularmente eficiente como parte de um interrogatório.</p><p> Você pode, também, usar essa magia para detectar a presença que criaturas pensantes que você não possa ver. Quando você conjura essa magia ou, com sua ação enquanto ela durar, você pode procurar por pensamentos a até 9 metros de você. A magia pode penetrar a maioria das barreiras, mas é bloqueada por 30 centímetros de rocha, 2, 5 centímetros de metal comum, uma fina camada de chumbo, ou 90 centímetros de madeira ou terra. Você não pode detectar uma criatura com Inteligência 3 ou inferior ou uma que não fale qualquer idioma.</p><p> Uma vez que você tenha detectado a presença de uma criatura dessa forma, você pode ler os pensamentos dela pelo resto da duração, como descrito acima, mesmo que você não possa vê - la, mas ela ainda precisa estar dentro do alcance.","classes":["Bardo","Feiticeiro","Mago"],"favorite":false},{"id":48,"level":"1","name":"Detectar Veneno e Doença","name_en":"Detect Poision and Disease","ritual":"s","school":{"pt":"Adivinhação","style":"divination"},"castingTime":"1 ação","range":"pessoal","components":"V, S, M","concentration":"s","duration":"até 10 minutos","material":"uma folha de teixo","description":"Pela duração, você sente a presença e localização de venenos, criaturas venenosas e doenças a até 9 metros de você. Você também identifica o tipo de veneno, criatura venenosa ou doença em cada caso.</p><p> A magia pode penetrar a maioria das barreiras, mas é bloqueada por 30 centímetros de rocha, 2, 5 centímetros de metal comum, uma fina camada de chumbo, ou 90 centímetros de madeira ou terra.","classes":["Clérigo","Druida","Paladino","Patrulheiro"],"favorite":false},{"id":163,"level":"3","name":"Dificultar Detecção","name_en":"Nondetection","school":{"pt":"Abjuração","style":"abjuration"},"castingTime":"1 ação","range":"toque","components":"V, S, M","duration":"8 horas","material":"um pouco de pó de diamante valendo 25 po polvilhado sobre o alvo, consumido pela magia","description":"Pela duração, você esconde um alvo que você tocar de magias de adivinhação. O alvo pode ser uma criatura voluntária, um local ou um objeto com não mais de 3 metros em qualquer dimensão. O alvo não pode ser alvo de magias de adivinhação ou percebido através de sensores mágicos de vidência.","classes":["Bardo","Mago","Patrulheiro"],"favorite":false},{"id":49,"level":"1","name":"Disco Flutuante de Tenser","name_en":"Tenser's Floating Disk","ritual":"s","school":{"pt":"Conjuração","style":"conjuration"},"castingTime":"1 ação","range":"9 metros","components":"V, S, M","duration":"1 hora","material":"uma gota de mercúrio","description":"Essa magia cria um plano horizontal, circular de energia de 90 cm de diâmetro por 2, 5 cm de espessura, que flutua 90 centímetros acima do chão em um espaço desocupado, à sua escolha, que você possa ver dentro do alcance. O disco permanece pela duração e pode suportar até 250 quilos. Se mais peso for colocado nele, a magia termina, e tudo em cima do disco cai no chão.</p><p> O disco é imóvel enquanto você estiver a até 6 metros dele. Se você se afastar a mais de 6 metros dele, o disco seguirá você, mantendo - se a 6 metros de você. Ele pode atravessar terreno irregular, subir ou descer escadas, encostas e similares, mas ele não pode atravessar mudanças de elevação de 3 metros ou mais. Por exemplo, o disco não pode atravessar um fosso de 3 metros de profundidade nem poderia sair de tal fosso se tivesse sido criado no fundo dele.</p><p> Se você se afastar mais de 30 metros do disco (tipicamente por ele não poder rodear um obstáculo para seguir você), a magia acaba.","classes":["Mago"],"favorite":false},{"id":50,"level":"1","name":"Disfarçar-se","name_en":"Disguise Self","school":{"pt":"Ilusão","style":"illusion"},"castingTime":"1 ação","range":"pessoal","components":"V, S","duration":"1 hora","description":"Você faz com que você mesmo– incluindo suas roupas, armadura, armas e outros pertences no seu personagem– pareça diferente até a magia acabar ou até você usar sua ação para dispensá-la. Você pode se parecer 30 centímetros mais baixo ou mais alto, e pode parecer magro, gordo ou entre ambos. Você não pode mudar o tipo do seu corpo, portanto, você deve adotar uma forma que tenha a mesma disposição básica de membros. No mais, a extensão da sua ilusão cabe a você.</p><p> As mudanças criadas por essa magia não conseguem se sustentar perante uma inspeção física. Por exemplo, se você usar essa magia para adicionar um chapéu ao seu visual, objetos que passarem pelo chapéu e qualquer um que tocá - lo não sentirá nada ou sentirá sua cabeça e cabelo. Se você usar essa magia para aparentar ser mais magro do que é, a mão de alguém que a erguer para tocar em você, irá esbarrar em você enquanto ainda está, aparentemente, está no ar.</p><p> Para perceber que você está disfarçado, uma criatura pode usar a ação dela para inspecionar sua aparência e deve ser bem sucedida em um teste de Inteligência (Investigação) contra a CD da sua magia.","classes":["Bardo","Feiticeiro","Mago"],"favorite":false},{"id":164,"level":"3","name":"Dissipar Magia","name_en":"Dispel Magic","school":{"pt":"Abjuração","style":"abjuration"},"castingTime":"1 ação","range":"36 metros","components":"V, S","duration":"instantânea","description":"Escolha uma criatura, objeto ou efeito mágico dentro do alcance. Qualquer magia de 3° nível ou inferior no alvo, termina. Para cada magia de 4° nível ou superior no alvo, realize um teste de habilidade usando sua habilidade de conjuração. A CD é igual a 10 + o nível da magia. Se obtiver sucesso, a magia termina.</p><p><strong> Em Níveis Superiores </strong>. Quando você conjurar essa magia usando um espaço de magia de 4° nível ou superior, você dissipa automaticamente os efeitos de magias no alvo se o nível da magia for igual ou inferior ao nível do espaço de magia que você usar.","classes":["Bardo","Bruxo","Clérigo","Druida","Feiticeiro","Mago","Paladino"],"favorite":false},{"id":255,"level":"5","name":"Dissipar o Bem e Mal","name_en":"Dispel Evil And Good","school":{"pt":"Abjuração","style":"abjuration"},"castingTime":"1 ação","range":"pessoal","components":"V, S, M","concentration":"s","duration":"até 1 minuto","material":"água benta ou pó de prata e ferro","description":"Energia cintilante envolve e protege você de fadas, mortos - vivos e criaturas originarias além do Plano Material. Pela duração, celestiais, corruptores, elementais, fadas e mortos - vivos tem desvantagem nas jogadas de ataque contra você.</p><p> Você pode terminar a magia prematuramente usando uma das funções especiais a seguir.</p><p><em><strong> Cancelar Encantamento </strong></ em>. Com sua ação, você toca uma criatura que você possa alcançar que esteja enfeitiçada, amedrontada ou possuída por um celestial, corruptor, elemental, fada ou morto - vivo. A criatura tocada não estará mais enfeitiçada, amedrontada ou possuída por tais criaturas.</p><p><em><strong> Demissão </strong></ em>. Com sua ação, faça um ataque corpo - a - corpo com magia contra um celestial, corruptor, elemental, fada ou morto - vivo que você possa alcançar. Se atingir, você pode tentar guiar a criatura de volta ao seu plano natal. A criatura deve ser bem sucedida num teste de resistência de Carisma ou será enviada de volta ao seu plano natal (se já não for aqui). Se elas não estiverem em seus planos de origem, mortos - vivos serão enviados para Umbra e fadas serão enviadas para Faéria.","classes":["Clérigo","Paladino"],"favorite":false},{"id":289,"level":"6","name":"Doença Plena","name_en":"Harm","school":{"pt":"Necromancia","style":"necromancy"},"castingTime":"1 ação","range":"18 metros","components":"V, S","duration":"instantânea","description":"Você introduz uma doença virulenta em uma criatura que você puder ver, dentro do alcance. O alvo deve realizar um teste de resistência de Constituição. Se falhar na resistência, ele sofre 14d6 de dano necrótico ou metade desse dano se obtiver sucesso na resistência. O dano não pode reduzir os pontos de vida do alvo abaixo de 1. Se o alvo falhar no teste de resistência, seu máximo de pontos de vida é reduzidos por 1 hora em uma quantidade igual ao dano necrótico causado. Qualquer efeito que remova uma doença permitirá que o máximo de pontos de vida do alvo volte ao normal antes do período indicado.","classes":["Clérigo"],"favorite":false},{"id":211,"level":"4","name":"Dominar Besta","name_en":"Dominate Beast","school":{"pt":"Encantamento","style":"enchantment"},"castingTime":"1 ação","range":"18 metros","components":"V, S","concentration":"s","duration":"até 1 minuto","description":"Você tenta seduzir uma besta que você possa ver dentro do alcance. Ela deve ser bem sucedida num teste de resistência de Sabedoria ou ficará enfeitiçada por você pela duração. Se você ou criaturas amigáveis a você estiverem lutando com ela, ela terá vantagem no teste de resistência.</p><p> Enquanto a besta estiver enfeitiçada, você terá uma ligação telepática com ela, contanto que ambos estejam no mesmo plano de existência. Você pode usar essa ligação telepática para emitir comandos para a criatura enquanto você estiver consciente (não requer uma ação), aos quais ela obedece da melhor forma possível. Você pode especificar um curso de ação simples e genérico, como“ Ataque aquela criatura”, “Corra até ali”, ou“ Traga aquele objeto”. Se a criatura completar a ordem e não receber direções posteriores de você, ela se defenderá e se auto preservará da melhor forma que puder.</p><p> Você pode usar sua ação para tomar controle total e preciso do alvo. Até o final do seu próximo turno, a criatura realiza apenas as ações que você escolher e não faz nada que você não permita que ela faça. Durante esse período, você também pode fazer com que a criatura use uma reação, mas isso requer que você usa sua própria reação também.</p><p> Cada vez que o alvo sofrer dano, ele realiza um novo teste de resistência de Sabedoria contra a magia. Se obtiver sucesso no teste de resistência, a magia termina.</p><p><strong> Em Níveis Superiores </strong>. Quando você conjurar essa magia usando um espaço de magia de 5° nível, a duração será concentração, até 10 minutos. Quando você usar um espaço de magia de 6° nível, a duração será concentração, até 1 hora. Quando você usar um espaço de magia de 7° nível, a duração será concentração, até 8 horas.","classes":["Druida","Feiticeiro"],"favorite":false},{"id":332,"level":"8","name":"Dominar Monstro","name_en":"Dominate Monster","school":{"pt":"Encantamento","style":"enchantment"},"castingTime":"1 ação","range":"18 metros","components":"V, S","concentration":"s","duration":"até 1 hora","description":"Você tenta seduzir uma criatura que você possa ver dentro do alcance. Ela deve ser bem sucedida num teste de resistência de Sabedoria ou ficará enfeitiçada por você pela duração. Se você ou criaturas amigáveis a você estiverem lutando com ela, ela terá vantagem no teste de resistência.</p><p> Enquanto a criatura estiver enfeitiçada, você terá uma ligação telepática com ela, contanto que ambos estejam no mesmo plano de existência. Você pode usar essa ligação telepática para emitir comandos para a criatura enquanto você estiver consciente (não requer uma ação), aos quais ela obedece da melhor forma possível. Você pode especificar um curso de ação simples e genérico, como“ Ataque aquela criatura”, “Corra até ali”, ou“ Traga aquele objeto”. Se a criatura completar a ordem e não receber direções posteriores de você, ela se defenderá e se auto preservará da melhor forma que puder.</p><p> Você pode usar sua ação para tomar controle total e preciso do alvo. Até o final do seu próximo turno, a criatura realiza apenas as ações que você escolher e não faz nada que você não permita que ela faça. Durante esse período, você também pode fazer com que a criatura use uma reação, mas isso requer que você usa sua própria reação também.</p><p> Cada vez que o alvo sofrer dano, ele realiza um novo teste de resistência de Sabedoria contra a magia. Se obtiver sucesso no teste de resistência, a magia termina.</p><p><strong> Em Níveis Superiores </strong>. Quando você conjurar essa magia usando um espaço de magia de 9° nível, a duração será concentração, até 8 horas.","classes":["Bardo","Bruxo","Feiticeiro","Mago"],"favorite":false},{"id":256,"level":"5","name":"Dominar Pessoa","name_en":"Dominate Person","school":{"pt":"Encantamento","style":"enchantment"},"castingTime":"1 ação","range":"18 metros","components":"V, S","concentration":"s","duration":"até 1 minuto","description":"Você tenta seduzir um humanoide que você possa ver dentro do alcance. Ele deve ser bem sucedido num teste de resistência de Sabedoria ou ficará enfeitiçado por você pela duração. Se você ou criaturas amigáveis a você estiverem lutando com ele, ele terá vantagem no teste de resistência.</p><p> Enquanto o alvo estiver enfeitiçado, você terá uma ligação telepática com ela, contanto que ambos estejam no mesmo plano de existência. Você pode usar essa ligação telepática para emitir comandos para a criatura enquanto você estiver consciente (não requer uma ação), aos quais ela obedece da melhor forma possível. Você pode especificar um curso de ação simples e genérico, como“ Ataque aquela criatura”, “Corra até ali”, ou“ Traga aquele objeto”. Se a criatura completar a ordem e não receber direções posteriores de você, ela se defenderá e se auto preservará da melhor forma que puder.</p><p> Você pode usar sua ação para tomar controle total e preciso do alvo. Até o final do seu próximo turno, a criatura realiza apenas as ações que você escolher e não faz nada que você não permita que ela faça. Durante esse período, você também pode fazer com que a criatura use uma reação, mas isso requer que você usa sua própria reação também.</p><p> Cada vez que o alvo sofrer dano, ele realiza um novo teste de resistência de Sabedoria contra a magia. Se obtiver sucesso no teste de resistência, a magia termina.</p><p><strong> Em Níveis Superiores </strong>. Quando você conjurar essa magia usando um espaço de magia de 6° nível, a duração será concentração, até 10 minutos. Quando você usar um espaço de magia de 7° nível, a duração será concentração, até 1 hora. Quando você usar um espaço de magia de 8° nível, a duração será concentração, até 8 horas.","classes":["Bardo","Feiticeiro","Mago"],"favorite":false},{"id":7,"level":"0","name":"Druidismo","name_en":"Druidcraft","school":{"pt":"Transmutação","style":"transmutation"},"castingTime":"1 ação","range":"9 metros","components":"V, S","duration":"instantânea","description":"Sussurrando para os espíritos da natureza, você cria um dos seguintes efeitos, dentro do alcance: </p><ul><li> Você cria um efeito sensorial minúsculo e inofensivo que prevê como será o clima na sua localização pelas próximas 24 horas. O efeito deve se manifestar como um globo dourado para céu claro, uma nuvem para chuva, flocos de neve para nevasca e assim por diante. Esse efeito persiste por 1 rodada.</li><li> Você faz uma flor florescer, uma semente brotar ou um folha amadurecer, instantaneamente.</li><li> Você cria um efeito sensorial inofensivo instantâneo, como folhas caindo, um sopro de vento, o som de um pequeno animal ou o suave odor de um repolho. O efeito deve caber num cubo de 1,5 metro.</li><li> Você, instantaneamente, acende ou apaga uma vela, tocha ou fogueira pequena.</li></ul>","classes":["Druida"],"favorite":false},{"id":51,"level":"1","name":"Duelo Compelido","name_en":"Compelled Duel","school":{"pt":"Encantamento","style":"enchantment"},"castingTime":"1 ação bônus","range":"9 metros","components":"V","concentration":"s","duration":"até 1 minuto","description":"Você tenta compelir uma criatura a duelar com você. Uma criatura que você possa ver, dentro do alcance, deve realizar um teste de resistência de Sabedoria. Se falhar, a criatura é atraída por você, compelida pela sua exigência divina. Pela duração, ela tem desvantagem nas jogadas de ataque contra criaturas diferentes de você e deve realizar um teste de resistência de Sabedoria cada vez que tentar se mover para um espaço que esteja a mais de 9 metros de você, se ela passar no teste de resistência, essa magia não restringirá o movimento do alvo nesse turno.</p><p> A magia termina se você atacar qualquer outra criatura, se você conjurar uma magia que afete uma criatura hostil diferente do alvo, se uma criatura amigável a você causar dano ou conjurar uma magia nociva nele ou se você terminar seu turno a mais de 9 metros do alvo.","classes":["Paladino"],"favorite":false},{"id":350,"level":"9","name":"Encarnação Fantasmagórica","name_en":"Weird","school":{"pt":"Ilusão","style":"illusion"},"castingTime":"1 ação","range":"36 metros","components":"V, S","concentration":"s","duration":"até 1 minuto","description":"Baseado nos mais profundos medos de um grupo de criaturas, você cria criaturas ilusórias nas mentes delas, visíveis apenas por elas. Cada criatura numa esfera com 9 metros de raio centrada num ponto, à sua escolha, dentro do alcance, deve realizar um teste de resistência de Sabedoria. Se falhar na resistência, uma criatura ficará amedrontada pela duração. A ilusão invoca os medos mais profundos da criatura, manifestando seus piores pesadelos como uma ameaça implacável. No final de cada turno da criatura amedrontada, ela deve ser bem sucedida num teste de resistência de Sabedoria ou sofrerá 4d10 de dano psíquico. Se obtiver sucesso na resistência, a magia termina para essa criatura.","classes":["Mago"],"favorite":false},{"id":110,"level":"2","name":"Encontrar Armadilhas","name_en":"Find Traps","school":{"pt":"Adivinhação","style":"divination"},"castingTime":"1 ação","range":"36 metros","components":"V, S","duration":"instantânea","description":"Você sente a presença de qualquer armadilha dentro do alcance a qual você tenha linha de visão. Uma armadilha, para os propósitos dessa magia, inclui qualquer coisa que possa causar um efeito repentino ou inesperado em você, considerado nocivo ou indesejável, que foi especificamente planejado para ser por seu criador. Portanto, a magia sentirá a área afetada pela magia <em> alarme </em>, um <em> glifo de vigilância </em> ou uma armadilha mecânica de fosso, mas ela não revelará uma fragilidade natural no piso, um teto instável ou um sumidouro escondido. Essa magia apenas revela que existe uma magia presente. Você não descobre a localização de cada armadilha, mas você também descobre a natureza genérica do perigo representando pela armadilha que você sentiu.","classes":["Clérigo","Druida","Patrulheiro"],"favorite":false},{"id":290,"level":"6","name":"Encontrar o Caminho","name_en":"Find The Path","school":{"pt":"Adivinhação","style":"divination"},"castingTime":"1 minuto","range":"pessoal","components":"V, S, M","concentration":"s","duration":"até 1 dia","material":"um conjunto de ferramentas de adivinhação – como ossos, bastões de marfim, dentes ou runas esculpidas– no valor de 100 po e um objeto do lugar que você deseja encontrar","description":"Essa magia permite que você encontre a rota física mais curta e direta para um local especifico estático, que você seja familiar, no mesmo plano de existência. Se você denominar um destino em outro plano de existência, um local que se mova (como uma fortaleza andante) ou um destino que não seja especifico (como“ o covil do dragão verde”), a magia falha.</p><p> Pela duração, contanto que você esteja no mesmo plano de existência do destino, você saberá o quão longe ele está e em que direção ele se encontra. Enquanto estiver viajando, sempre que você se deparar com uma escolha de trajetória no caminho, você automaticamente determina qual trajetória tem a rota mais curta e direta (mas não necessariamente a rota mais segura) para o destino.","classes":["Bardo","Clérigo","Druida"],"favorite":false},{"id":52,"level":"1","name":"Enfeitiçar Pessoa","name_en":"Charm Person","school":{"pt":"Encantamento","style":"enchantment"},"castingTime":"1 ação","range":"9 metros","components":"V, S","duration":"1 hora","description":"Você tenta enfeitiçar um humanoide que você possa ver dentro do alcance. Ele deve realizar um teste de resistência de Sabedoria, e recebe vantagem nesse teste se você ou seus companheiros estiverem lutando com ele. Se ele falhar, ficará enfeitiçado por você até a magia acabar ou até você ou seus companheiros fizerem qualquer coisa nociva contra ele. A criatura enfeitiçada reconhece você como um conhecido amigável. Quando a magia acabar, a criatura saberá que foi enfeitiçada por você.</p><p><strong> Em Níveis Superiores </strong>. Se você conjurar essa magia usando um espaço de magia de 2° nível ou superior, você pode afetar uma criatura adicional para cada nível do espaço acima do 1°. As criaturas devem estar a até 9 metros umas das outras quando você for afetá-las.","classes":["Bardo","Bruxo","Druida","Feiticeiro","Mago"],"favorite":false},{"id":333,"level":"8","name":"Enfraquecer Intelecto","name_en":"Feebiemind","school":{"pt":"Encantamento","style":"enchantment"},"castingTime":"1 ação","range":"45 metros","components":"V, S, M","duration":"instantânea","material":"um punhado de barro, cristal, vidro ou esferas minerais","description":"Você ataca a mente de uma criatura que você possa ver, dentro do alcance, tentando despedaçar seu intelecto e personalidade. O alvo sofre 4d6 de dano psíquico e deve realizar um teste de resistência de Inteligência.</p><p> Se falhar na resistência, os valores de Inteligência e Carisma da criatura se tornam 1. A criatura não pode conjurar magias, ativar itens mágicos, compreender idiomas ou se comunicar de qualquer forma inteligível. A criatura pode, no entanto, identificar seus amigos, segui - los e, até mesmo, protege - los.</p><p> Ao final de cada 30 dias, a criatura pode repetir seu teste de resistência contra essa magia. Se ela obtiver sucesso no teste de resistência, a magia termina. Essa magia também pode ser terminada através de <em> restauração maior </em>, <em> cura completa </em> ou <em> desejo </em>.</p> ","classes":["Bardo"],"favorite":false},{"id":165,"level":"3","name":"Enviar Mensagem","name_en":"Sending","school":{"pt":"Evocação","style":"evocation"},"castingTime":"1 ação","range":"ilimitado","components":"V, S, M","duration":"1 rodada","material":"um pequeno e fino pedaço de fio de cobre","description":"Você envia uma mensagem curta, de vinte e cinco palavras ou menos, para uma criatura que seja familiar a você. A criatura ouve a mensagem na sua mente, reconhecendo que foi enviada por você, se ela te conhecer, e pode responder da mesma maneira, imediatamente. A magia permite que criaturas com valores de Inteligência de no mínimo 1, compreendam o sentido da sua mensagem.</p><p> Você pode enviar a mensagem através de qualquer distância e, até mesmo, para outro plano de existência, mas se o alvo estiver em um plano diferente do seu, existe 5 por cento de chance da mensagem não chegar.","classes":["Bardo","Clérigo","Mago"],"favorite":false},{"id":53,"level":"1","name":"Escrita Ilusória","name_en":"Illusory Script","ritual":"s","school":{"pt":"Ilusão","style":"illusion"},"castingTime":"1 minuto","range":"toque","components":"S, M","duration":"10 dias","material":"uma tinta à base de chumbo valendo, no mínimo, 10 po, que é consumida pela magia","description":"Você escreve em um pergaminho, papel ou qualquer outro material adequado e tinge ele com uma poderosa ilusão que permanece pela duração.</p><p> Para você e para qualquer criatura que você designar quando você conjura essa magia, a escrita parece normal, escrita com a sua caligrafia e transmite qualquer que seja a mensagem que você desejava quando escreveu o texto. Para todos os outros, a escrita aparece como se tivesse sido escrita com uma caligrafia desconhecida ou mágica que é inteligível. Alternativamente, você pode fazer a escrita parecer uma mensagem totalmente diferente, escrita com uma caligrafia e idioma diferentes, apesar de o idioma precisar ser um que você conheça.</p><p> No caso da magia ser dissipada, tanto a escrita original quanto a ilusória desaparecem.</p><p> Uma criatura com visão verdadeira pode ler a mensagem escondida.","classes":["Bardo","Bruxo","Mago"],"favorite":false},{"id":54,"level":"1","name":"Escudo Arcano","name_en":"Shield","school":{"pt":"Abjuração","style":"abjuration"},"castingTime":"1 reação","range":"pessoal","components":"V, S","duration":"1 rodada","reaction":"que você faz quando é atingido por um ataque ou alvo da magia mísseis mágicos","description":"Uma barreira de energia invisível aparece e protege você. Até o início do seu próximo turno, você recebe + 5 de bônus na CA, incluindo contra o ataque que desencadeou a magia, e você não sofre dano de <em> mísseis mágicos </em>.</p> ","classes":["Feiticeiro","Mago"],"favorite":false},{"id":55,"level":"1","name":"Escudo da Fé","name_en":"Shield Of Faith","school":{"pt":"Abjuração","style":"abjuration"},"castingTime":"1 ação bônus","range":"18 metros","components":"V, S, M","concentration":"s","duration":"até 10 minutos","material":"um pequeno pergaminho com alguns textos sagrados escritos nele","description":"Um campo cintilante aparece ao redor de uma criatura, à sua escolha, dentro do alcance, concedendo + 2 de bônus na CA pela duração.","classes":["Clérigo","Paladino"],"favorite":false},{"id":212,"level":"4","name":"Escudo de Fogo","name_en":"Fire Shield","school":{"pt":"Evocação","style":"evocation"},"castingTime":"1 ação","range":"pessoal","components":"V, S, M","duration":"10 minutos","material":"um pouco de fósforo ou um vaga- lume","description":"Finas e discretas chamas rodeiam seu corpo pela duração, emitindo luz plena em 3 metros de raio e penumbra por mais 3 metros adicionais. Você pode terminar a magia prematuramente usando sua ação para dissipá-la.</p><p> As chamas lhe conferem um escudo quente ou um escudo frio, à sua escolha. O escudo quente lhe garante resistência a dano de frio e o escudo frio lhe concede resistência a dano de fogo.</p><p> Além disso, sempre que uma criatura a 1,5 metro de você atingir você com um ataque corpo - a - corpo, o escudo expele chamas. O atacante sofre 2d8 de dano de fogo do escudo quente ou 2d8 de dano de frio do escudo frio.","classes":["Mago"],"favorite":false},{"id":111,"level":"2","name":"Escuridão","name_en":"Darkness","school":{"pt":"Evocação","style":"evocation"},"castingTime":"1 ação","range":"18 metros","components":"V, M","concentration":"s","duration":"até 10 minutos","material":"pelo de morcego e uma gota de piche ou pedaço de carvão","description":"Escuridão mágica se espalha a partir de um ponto, à sua escolha, dentro do alcance e preenche uma esfera de 4, 5 metros de raio pela duração. A escuridão se estende, dobrando esquinas. Uma criatura com visão no escuro não pode ver através dessa escuridão e luz não - mágica não pode iluminar dentro dela.</p><p> Se o ponto que você escolheu for um objeto que você esteja segurando, ou um que não esteja sendo vestido ou carregado, a escuridão emanará do objeto e se moverá com ele. Cobrir completamente a fonte da escuridão com um objeto opaco, como uma vasilha ou um elmo, bloqueará a escuridão.</p><p> Se qualquer área dessa magia sobrepor uma área de luz criada por uma magia de 2° ou inferior, a magia que criou a luz será dissipada.","classes":["Bruxo","Feiticeiro","Mago"],"favorite":false},{"id":291,"level":"6","name":"Esfera Congelante de Otiluke","name_en":"Otiluke's Freezing Sphere","school":{"pt":"Evocação","style":"evocation"},"castingTime":"1 ação","range":"90 metros","components":"V, S, M","duration":"instantânea","material":"uma pequena esfera de cristal","description":"Um globo frigido de energia gelada é arremessado das pontas dos seus dedos para um ponto, à sua escolha, dentro do alcance, onde ele explode numa esfera de 18 metros de raio. Cada criatura dentro da área deve realizar um teste de resistência de Constituição. Se falhar na resistência, uma criatura sofre 10d6 de dano de frio. Se obtiver sucesso na resistência, ela sofre metade desse dano.</p><p> Se o globo atingir um corpo de água ou liquido composto principalmente de água (não incluindo criaturas feitas de água), ele congela o líquido até uma profundidade de 15 centímetros numa área de 9 metros quadrados. Esse gelo dura por 1 minuto. Criaturas que estiverem nadando na superfície de água congelada estarão presas no gelo. Uma criatura presa pode usar sua ação para realizar um teste de Força contra a CD da magia para se libertar.</p><p> Você pode evitar de disparar o globo após completar a magia, se desejar. Um pequeno globo, do tamanho de uma pedra de funda, frio ao toque, aparece em sua mão. A qualquer momento, você ou uma criatura a quem você entregar o globo, pode arremessa - lo (a uma distância de 12 metros) ou atira - lo com uma funda (ao alcance normal da funda). Ele se despedaça no impacto, produzindo o mesmo efeito da conjuração normal da magia. Você pode, também, soltar o globo no chão sem despedaça - lo. Após 1 minuto, se o globo ainda não tiver se despedaçado, ele explode.</p><p><strong> Em Níveis Superiores </strong>. Quando você conjurar essa magia usando um espaço de magia de 7° nível ou superior, o dano aumenta em 1d6 para cada nível do espaço acima do 6°.","classes":["Mago"],"favorite":false},{"id":112,"level":"2","name":"Esfera Flamejante","name_en":"Flaming Sphere","school":{"pt":"Conjuração","style":"conjuration"},"castingTime":"1 ação","range":"18 metros","components":"V, S, M","concentration":"s","duration":"até 1 minuto","material":"um pouco de seco, uma pitada de enxofre e uma camada de pó de ferro","description":"Uma esfera de fogo, com 1,5 metro de diâmetro, aparece em um espaço desocupado, à sua escolha, dentro do alcance e permanece pela duração. Qualquer criatura que terminar seu turno a até 1,5 metro da esfera, deve realizar um teste de resistência de Destreza. A criatura sofre 2d6 de dano de fogo se falhar na resistência, ou metade desse dano se obtiver sucesso.</p><p> Com uma ação bônus, você pode mover a esfera até 9 metros. Se você arremessar a esfera contra uma criatura, essa criatura deve realizar o teste de resistência contra o dano da esfera e a esfera para de se mover esse turno.</p><p> Quando você move a esfera, você pode direcioná-la para barreira de até 1,5 metro de altura e ela salta sobre fossos de até 3 metros de distância. A esfera incendeia objetos inflamáveis que não estejam sendo vestidos ou carregados e emite luz plena a 6 metros de raio e penumbra por mais 6 metros adicionais.</p><p><strong> Em Níveis Superiores </strong>. Quando você conjurar essa magia usando um espaço de magia de 3° nível ou superior, o dano aumenta em 1d6 para cada nível do espaço acima do 2°.","classes":["Druida","Mago"],"favorite":false},{"id":213,"level":"4","name":"Esfera Resiliente de Otiluke","name_en":"Otiuke's Resilient Sphere","school":{"pt":"Evocação","style":"evocation"},"castingTime":"1 ação","range":"9 metros","components":"V, S, M","concentration":"s","duration":"até 1 minuto","material":"uma peça hemisférica de cristal transparente e uma peça hemisférica que combine de goma arábica","description":"Uma esfera de energia brilhante engloba uma criatura ou objeto de tamanho Grande ou menor, dentro do alcance. Uma criatura involuntária deve realizar um teste de resistência de Destreza. Se falhar na resistência, a criatura estará enclausurada pela duração. Nada– nem objetos físicos, energia ou outros efeitos mágicos– pode passar através da barreira, para dentro ou para fora, apesar da criatura na esfera poder respirar lá dentro. A esfera é imune a todos os danos e a criatura ou objeto dentro não pode sofrer dano de ataques ou efeitos originados de fora, nem a criatura dentro da esfera, pode causar dano a nada fora dela.</p><p> A esfera não tem peso e é grande o suficiente apenas para conter a criatura ou objeto dentro. Uma criatura enclausurada pode usar sua ação para empurrar a parede da esfera e, assim, rolar a esfera a metade do deslocamento da criatura. Similarmente, o globo pode ser erguido e movido por outras criaturas.</p><p> A magia <em> desintegrar </em> lançada no globo o destruirá sem causar ferimentos a nada dentro dele.</p> ","classes":["Mago"],"favorite":false},{"id":310,"level":"7","name":"Espada de Mordenkainen","name_en":"Mordenkainen's Sword","school":{"pt":"Evocação","style":"evocation"},"castingTime":"1 ação","range":"18 metros","components":"V, S, M","concentration":"s","duration":"até 1 minuto","material":"espada de platina em miniatura com cabo e pomo de cobre e zinco valendo, no mínimo, 250 po","description":"Você cria um plano de energia em formato de espada que flutua dentro do alcance. Ela permanece pela duração.</p><p> Quando a espada aparece, você realiza um ataque com magia contra um alvo, à sua escolha, a 1,5 metro da espada. Se atingir, o alvo sofre 3d10 de dano de energia. Até a magia acabar, você pode usar uma ação bônus, em cada um dos seus turnos, para mover a espada até 6 metros para um local que você possa ver e repetir esse ataque contra o mesmo alvo ou um diferente.","classes":["Bardo","Mago"],"favorite":false},{"id":166,"level":"3","name":"Espíritos Guardiões","name_en":"Spirit Guardians","school":{"pt":"Conjuração","style":"conjuration"},"castingTime":"1 ação","range":"pessoal","components":"V, S, M","concentration":"s","duration":"até 10 minutos","material":"um símbolo sagrado","description":"Você evoca espíritos para protege - lo. Eles flutuam a seu redor, a uma distância de 4, 5 metros, pela duração. Se você for bom ou neutro, as formas espectrais deles aparenta ser angelical ou feérica (à sua escolha). Se você for mau, eles pareceram demoníacos.</p><p> Quando você conjura essa magia, você pode designar qualquer quantidade de criaturas que você possa ver para não serem afetadas por ela. O deslocamento de uma criatura afetada é reduzido à metade na área e, quando a criatura entrar na área pela primeira vez num turno ou começar seu turno nela, ela deve realizar um teste de resistência de Sabedoria. Se falhar na resistência, a criatura sofrerá 3d8 de dano radiante (se você for bom ou neutro) ou 3d8 de dano necrótico (se você for mau). Com um sucesso na resistência, a criatura sofre metade desse dano.</p><p><strong> Em Níveis Superiores </strong>. Quando você conjurar essa magia usando um espaço de magia de 4° nível ou superior, o dano aumenta em 1d8 para cada nível do espaço acima do 3°.","classes":["Clérigo"],"favorite":false},{"id":8,"level":"0","name":"Espirro Ácido","name_en":"Acid Splash","school":{"pt":"Conjuração","style":"conjuration"},"castingTime":"1 ação","range":"18 metros","components":"V, S","duration":"instantânea","description":"Você arremessa uma bolha de ácido. Escolha uma criatura dentro do alcance, ou escolha duas criaturas dentro do alcance que estejam a 1,5 metro uma da outra. Um alvo deve ser bem sucedido num teste de resistência de Destreza ou sofrerá 1d6 de dano ácido.</p><p> O dano dessa magia aumenta em 1d6 quando você alcança o 5° nível (2d6), 11° nível (3d6) e 17° nível (4d6).","classes":["Feiticeiro","Mago"],"favorite":false},{"id":113,"level":"2","name":"Esquentar Metal","name_en":"Heat Metal","school":{"pt":"Transmutação","style":"transmutation"},"castingTime":"1 ação","range":"18 metros","components":"V, S, M","concentration":"s","duration":"até 1 minuto","material":"um pedaço de ferro e uma chama","description":"Escolha uma objeto manufaturado de metal, como uma arma de metal ou uma armadura pesada ou média de metal, que você possa ver dentro do alcance. Você faz com que o objeto brilhe vermelho - incandescente. Qualquer criatura em contato físico com o objeto sofrerá 2d8 de dano de fogo quando você conjurar a magia. Até a magia acabar, você pode usar uma ação bônus, em cada um dos seus turnos subsequentes, para causar esse dano novamente.</p><p> Se uma criatura estiver segurando ou vestindo o objeto e sofrer o dano dele, a criatura deve ser bem sucedida num teste de resistência de Constituição ou largará o objeto se ela puder. Se ela não largar o objeto, ela terá desvantagem em jogadas de ataque e testes de habilidade até o início do seu próximo turno.</p><p><strong> Em Níveis Superiores </strong>. Quando você conjurar essa magia usando um espaço de magia de 3° nível ou superior, o dano aumenta em 1d8 para cada nível do espaço acima do 2°.","classes":["Bardo","Druida"],"favorite":false},{"id":9,"level":"0","name":"Estabilizar","name_en":"Spare The Dying","school":{"pt":"Necromancia","style":"necromancy"},"castingTime":"1 ação","range":"toque","components":"V, S","duration":"instantânea","description":"Você toca uma criatura viva que esteja com 0 pontos de vida. A criatura é estabilizada. Essa magia não afeta mortos - vivos ou constructos.","classes":["Clérigo"],"favorite":false},{"id":334,"level":"8","name":"Explosão Solar","name_en":"Sunburst","school":{"pt":"Evocação","style":"evocation"},"castingTime":"1 ação","range":"45 metros","components":"V, S, M","duration":"instantânea","material":"fogo e um pedaço de pedra do sol","description":"Luz solar brilhante lampeja num raio de 18 metros, centrada num ponto, à sua escolha, dentro do alcance. Cada criatura nessa luz, deve realizar um teste de resistência de Constituição. Com uma falha na resistência, uma criatura sofrerá 12d6 de dano radiante e ficará cega por 1 minuto. Se obtiver sucesso na resistência, ela sofrerá metade desse dano e não ficará cega por essa magia. Mortos - vivos e limos tem desvantagem nos seus testes de resistência.</p><p> Uma criatura cega por essa magia faz outro teste de resistência de Constituição no final de cada um dos turnos dela. Se obtiver sucesso, ela não estará mais cega.</p><p> Essa magia dissipa qualquer escuridão na área dela que tenha sido criada por um magia.","classes":["Druida","Feiticeiro","Mago"],"favorite":false},{"id":214,"level":"4","name":"Fabricar","name_en":"Fabricate","school":{"pt":"Transmutação","style":"transmutation"},"castingTime":"10 minutos","range":"36 metros","components":"V, S","duration":"instantânea","description":"Você converte matéria - prima em produtos do mesmo material. Por exemplo, você pode construir uma ponte de madeira usando um amontoado de árvores, uma corda de um pedaço de cânhamo e roupas usando linho ou lã.</p><p> Escolha matérias - primas que você possa ver, dentro do alcance. Você pode fabricar um objeto Grande ou menor (contido em 3 metros cúbicos ou em oito cubos de 1,5 metro conectados), tendo uma quantidade suficiente de matéria - prima. Se você estiver trabalhando com metal, pedra ou outra substância mineral, no entanto, o objeto fabricado não pode ser maior que Médio (contido em apenas 1,5 metro cúbico). A quantidade de objetos feitos por essa magia é proporcional com a quantidade de matéria - prima.</p><p> Criaturas ou itens mágicos não podem ser criados ou transmutados por essa magia. Você também não pode usá - la para criar itens que, geralmente, requerem um alto grau de perícia, como joalheria, armas, vidros ou armaduras, a não ser que você tenha proficiência com o tipo de ferramenta de artesanato usada para construir tais objetos.","classes":["Mago"],"favorite":false},{"id":56,"level":"1","name":"Falar com Animais","name_en":"Speak With Animals","ritual":"s","school":{"pt":"Adivinhação","style":"divination"},"castingTime":"1 ação","range":"pessoal","components":"V, S","duration":"10 minutos","description":"Você adquire a habilidade de compreender e se comunicar verbalmente com bestas, pela duração. O conhecimento e consciência de muitas bestas é limitado pela inteligência delas mas, no mínimo, as bestas poderão dar informações a você sobre os locais e monstros próximos, incluindo tudo que eles possam perceber ou tenham percebido no dia anterior. Você pode tentar persuadir uma besta a lhe prestar um favor, à critério do Mestre.","classes":["Bardo","Druida","Patrulheiro"],"favorite":false},{"id":167,"level":"3","name":"Falar com Os Mortos","name_en":"Speak With Dead","school":{"pt":"Necromancia","style":"necromancy"},"castingTime":"1 ação","range":"3 metros","components":"V, S, M","duration":"10 minutos","material":"incenso aceso","description":"Você concede o aspecto de vida e inteligência a um corpo, à sua escolha, dentro do alcance, permitindo que ele responda as perguntas que você fizer. O corpo ainda deve possuir uma boca e não pode ser um morto - vivo. A magia falha se o corpo já tiver sido alvo dessa magia nos últimos 10 dias.</p><p> Até a magia acabar, você pode fazer ao corpo até cinco perguntas. O corpo sabe apenas o que ele sabia em vida, incluindo o idioma que ele conhecia. As respostas normalmente são breves, enigmáticas ou repetitivas e o corpo não está sob nenhuma compulsão que o obrigue a oferecer respostas verdadeiras se você for hostil a ele ou se ele reconhecer você como um inimigo. Essa magia não traz a alma da criatura de volta ao corpo, apenas anima seu espírito. Portanto, o corpo não pode aprender novas informações, não compreende nada que tenha acontecido depois da sua morte e não pode especular sobre eventos futuros.","classes":["Bardo","Clérigo"],"favorite":false},{"id":57,"level":"3","name":"Falar com Plantas","name_en":"Speak With Plants","ritual":"s","school":{"pt":"Transmutação","style":"transmutation"},"castingTime":"1 ação","range":"pessoal","components":"V, S","duration":"10 minutos","description":"Você imbui as plantas a até 9 metros de você com consciência e animação limitadas, dando - lhes a habilidade de se comunicar com você e seguir seus comandos simples. Você pode perguntar as plantas sobre eventos na área da magia, acontecidos desde o dia anterior, recebendo informações sobre criaturas que passaram, clima e outras circunstâncias.</p><p> Você também pode tornar terreno difícil causado pelo crescimento de plantas (como arbustos e vegetação rasteira) em terreno normal, permanecendo assim pela duração. Ou você pode tornar terreno normal onde as plantas estiverem presentes, em terreno difícil, permanecendo assim pela duração, fazendo as vinhas e ramos atrasarem perseguidores, por exemplo.</p><p> As plantas podem ser capazes de realizar outras tarefas em seu favor, à critério do Mestre. A magia não permite que as plantas desenraízem - se e se movam, mas elas podem mover, livremente, seus ramos, galhos e caules.</p><p> Se uma criatura planta estiver na área, você pode se comunicar com ela se você partilhar um idioma em comum, mas você não recebe qualquer habilidade mágica para influenciá-la. Essa magia pode fazer as plantas criadas pela magia <em> constrição </em> soltarem uma criatura impedida.</p> ","classes":["Bardo","Druida","Patrulheiro"],"favorite":false},{"id":114,"level":"2","name":"Flecha Ácida de Melf","name_en":"Melf's Acid Arrow","school":{"pt":"Evocação","style":"evocation"},"castingTime":"1 ação","range":"36 metros","components":"V, S, M","duration":"instantânea","material":"folha de ruibarbo em pó e o estômago de uma víbora","description":"Uma flecha esverdeada cintilante voa em direção de um alvo dentro do alcance e explode em um jato de ácido. Faça um ataque à distância com magia contra o alvo. Se atingir, o alvo sofre 4d4 de dano de ácido imediatamente e 2d4 de dano de ácido no final do próximo turno dele. Se errar, a flecha salpica o alvo com ácido, causando metade do dano inicial e nenhum dano no final do próximo turno dele.</p><p><strong> Em Níveis Superiores </strong>. Quando você conjurar essa magia usando um espaço de magia de 3° nível ou superior, o dano (tanto inicial quanto posterior) aumenta em 1d4 para cada nível do espaço acima do 2°.","classes":["Mago"],"favorite":false},{"id":168,"level":"3","name":"Flecha Relampejante","name_en":"Lightning Arrow","school":{"pt":"Transmutação","style":"transmutation"},"castingTime":"1 ação bônus","range":"pessoal","components":"V, S","concentration":"s","duration":"até 1 minuto","description":"Da próxima vez que você realizar um ataque com uma arma à distância enquanto a magia durar, a munição da arma ou a própria arma, se ela for uma arma de arremesso, se transforma num relâmpago. Realize uma jogada de ataque normal. O alvo sofre 4d8 de dano elétrico se atingir ou metade desse dano se errar, ao invés do dano normal da arma.</p><p> Independentemente de você acertar ou errar, cada criatura a até 3 metros do alvo deve realizar um teste de resistência de Destreza. Cada uma dessas criaturas sofre 2d8 de dano elétrico se falhar na resistência ou metade desse dano se obtiver sucesso. A munição ou arma então, volta a sua forma normal.</p><p><strong> Em Níveis Superiores </strong>. Quando você conjurar essa magia usando um espaço de magia de 4° nível ou superior, o dano de ambos os efeitos da magia aumenta em 1d8 para cada nível do espaço acima do 3°.","classes":["Patrulheiro"],"favorite":false},{"id":58,"level":"1","name":"Fogo das Fadas","name_en":"Faerie Fire","school":{"pt":"Evocação","style":"evocation"},"castingTime":"1 ação","range":"18 metros","components":"V","concentration":"s","duration":"até 1 minuto","description":"Cada objeto num cubo de 6 metros dentro do alcance fica delineado com luz azul, verde ou violeta (à sua escolha). Qualquer criatura na área, quando a magia é conjurada, também fica delineada com luz, se falhar num teste de resistência de Destreza. Pela duração, os objetos e criaturas afetadas emitem penumbra num raio de 3 metros.</p><p> Qualquer jogada de ataque contra uma criatura afetada ou objeto tem vantagem, se o atacante puder ver o alvo e, a criatura afetada ou objeto não recebe benefício por estar invisível.","classes":["Bardo","Druida"],"favorite":false},{"id":169,"level":"3","name":"Fome de Hadar","name_en":"Hunger Of Hadar","school":{"pt":"Conjuração","style":"conjuration"},"castingTime":"1 ação","range":"45 metros","components":"V, S, M","concentration":"s","duration":"até 1 minuto","material":"um tentáculo de polvo em conserva","description":"Você abre um portal para a escuridão entre as estrelas, uma região infestada de horrores desconhecidos. Uma esfera de 6 metros de raio de negritude e frio severo aparece, centrada num ponto dentro do alcance, e permanece pela duração. Esse vazio está preenchido por uma cacofonia de sussurros suaves e barulhos de rangidos que podem ser ouvidos a até 9 metros. Nenhuma luz, mágica ou qualquer que seja, pode iluminar a área e as criaturas totalmente dentro da área estarão cegas.</p><p> O vazio cria uma dobra no tecido do espaço e a área é de terreno difícil. Qualquer criatura que começar seu turno na área sofre 2d6 de dano de frio. Qualquer criatura que terminar seu turno na área, deve ser bem sucedida num teste de resistência de Destreza ou sofrerá 2d6 de dano de ácido, à medida que tentáculos leitosos extraterrestres se esfregam contra ela.","classes":["Bruxo"],"favorite":false},{"id":115,"level":"2","name":"Força Fantasmagórica","name_en":"Phantasmal Force","school":{"pt":"Ilusão","style":"illusion"},"castingTime":"1 ação","range":"18 metros","components":"V, S, M","concentration":"s","duration":"até 1 minuto","material":"um pouco de lã","description":"Você constrói uma ilusão que se enraíza na mente de uma criatura que você possa ver, dentro do alcance. O alvo deve realizar um teste de resistência de Inteligência. Se falhar na resistência, você cria um objeto, criatura ou outro fenômeno visível– porém, fantasmagórico– à sua escolha, com não mais de 3 metros cúbicos e que será percebido apenas pelo alvo, pela duração. Essa magia não afeta mortos - vivos ou constructos.</p><p> O fantasma inclui som, temperatura e outros estímulos, também evidentes apenas para o alvo.</p><p> O alvo pode usar sua ação para examinar o fantasma com um teste de Inteligência (Investigação) contra a CD da as magia. Se for bem sucedido, o alvo percebe que o fantasma é uma ilusão e a magia acaba.</p><p> Enquanto o alvo estiver sob efeito dessa magia, ele considerará o fantasma como sendo real. O alvo racionalizará quaisquer resultados ilógicos ao interagir com o fantasma. Por exemplo, um alvo tentado atravessar uma ponte fantasmagórica que atravesse um abismo, cairá quando pisar na ponte. Se o alvo sobreviver a queda, ele ainda acreditará que a ponte existe e procurará outra explicação para a sua queda– ele foi puxado, ele escorregou ou um vento forte pode ter o jogado pra fora.</p><p> Um alvo afetado está tão convencido da realidade do fantasma que pode até mesmo sofrer dano da ilusão. Um fantasma criado para se parecer com uma criatura pode atacar o alvo. Similarmente, um fantasma criado para se parecer com fogo, um poço de ácido ou lava, podem queimar o alvo. A cada rodada, no seu turno, o fantasma pode causar 1d6 de dano psíquico no alvo, se ele estiver na área do fantasma ou a 1,5 metro dele, considerando que a ilusão é de uma criatura ou perigo que, logicamente, possa causar dano, como por atacar. O alvo entende o dano como sendo de um tipo apropriado para a ilusão.","classes":["Bardo","Feiticeiro","Mago"],"favorite":false},{"id":170,"level":"3","name":"Forjar Morte","name_en":"Feign Death","ritual":"s","school":{"pt":"Necromancia","style":"necromancy"},"castingTime":"1 ação","range":"toque","components":"V, S, M","duration":"1 hora","material":"uma pitada de terra de cemitério","description":"Você toca uma criatura voluntária e a coloca em um estado catatônico que é indistinguível da morte.</p><p> Pela duração da magia, ou até você usar uma ação para tocar o alvo e dissipar a magia, o alvo aparenta estar morto para todas as inspeções externas e para magias usadas para determinar a condição do alvo. O alvo está cego e incapacitado e seu deslocamento cai para 0. O alvo tem resistência a todos os danos, exceto dano psíquico. Se o alvo estava doente ou envenenado quando você conjurou a magia, ou ficou doente ou envenenado durante o período em que estava sob efeito da magia, a doença e veneno não terá qualquer efeito até a magia terminar.","classes":["Bardo","Clérigo","Druida","Mago"],"favorite":false},{"id":311,"level":"7","name":"Forma Etérea","name_en":"Etherealness","school":{"pt":"Transmutação","style":"transmutation"},"castingTime":"1 ação","range":"pessoal","components":"V, S","duration":"até 8 horas","description":"Você dá um passo para dentro das fronteiras do Plano Etéreo, na área em que ele se sobrepõem com o seu plano atual. Você se mantém na Fronteira Etérea pela duração ou até você usar sua ação para dissipar a magia. Durante esse período, você pode se mover para qualquer direção. Se você se mover para cima ou para baixo, cada passo de deslocamento custa um passo extra. Você pode ver e ouvir o plano que você se originou, mas tudo parece cinzento e você não pode ver nada além de 18 metros de você.</p><p> Enquanto estiver no Plano Etéreo, você pode afetar e ser afetado apenas por criaturas nesse plano. As criaturas que não estiverem no Plano Etéreo não podem notar sua presença e não podem interagir com você, a menos que uma habilidade especial ou magia dê a elas a capacidade de fazê - lo.</p><p> Você ignora todos os objetos e efeitos que não estiverem no Plano Etéreo, permitindo que você se mova através de objetos que você perceba no plano de onde você veio.</p><p> Quando a magia acabar, você imediatamente retorna para o plano de onde você se originou, no lugar que você está ocupando atualmente. Se você estiver ocupando o mesmo espaço de um objeto sólido ou de uma criatura quando isso ocorrer, você é, imediatamente, desviado para o espaço desocupado mais próximo que você puder ocupar e sofre dano de energia igual a dez vezes a quantidade de quadrados de 1,5 metro que você foi movido.</p><p> Essa magia não tem efeito se você conjurá-la enquanto estiver no Plano Etéreo ou um plano que não faça fronteira com ele, como um dos Planos Exteriores.</p><p><strong> Em Níveis Superiores </strong>. Quando você conjurar essa magia usando um espaço de magia de 8° nível ou superior, você pode afetar até três criaturas voluntária (incluindo você) para cada nível do espaço acima do 7°. As criaturas devem estar a até 3 metros de você quando você conjurar a magia.","classes":["Bardo","Bruxo","Clérigo","Feiticeiro","Mago"],"favorite":false},{"id":171,"level":"3","name":"Forma Gasosa","name_en":"Gaseous Form","school":{"pt":"Transmutação","style":"transmutation"},"castingTime":"1 ação","range":"toque","components":"V, S, M","concentration":"s","duration":"até 1 hora","material":"um pouco de gaze e um pouco de fumaça","description":"Você transforma uma criatura voluntária que você tocar, junto com tudo que ela estiver vestindo e carregando, em uma nuvem nebulosa, pela duração. A magia termina se a criatura cair a 0 pontos de vida. Uma criatura incorpórea não pode ser afetada.</p><p> Enquanto estiver nessa forma, o único meio de movimentação do alvo é 3 metros de deslocamento de voo. O alvo pode entrar e ocupar o espaço de outra criatura. O alvo tem resistência a dano não - mágico e tem vantagem em testes de resistência de Força, Destreza e Constituição. O alvo pode passar através de pequenos buracos, aberturas estreitas e, até mesmo, meras rachaduras, embora ele trate líquidos como se fossem superfícies sólidas. O alvo não pode cair e se mantém flutuando no ar, mesmo se estiver atordoado ou incapacitado de alguma outra forma.</p><p> Enquanto estiver na forma de uma nuvem nebulosa, o alvo não pode falar ou manipular objetos e, quaisquer objetos que ele estava carregando ou segurando não pode ser derrubado, usado ou, de outra forma, interagido. O alvo não pode atacar ou conjurar magias.","classes":["Bruxo","Feiticeiro","Mago"],"favorite":false},{"id":335,"level":"8","name":"Formas Animais","name_en":"Animal Shapes","school":{"pt":"Transmutação","style":"transmutation"},"castingTime":"1 ação","range":"9 metros","components":"V, S","concentration":"s","duration":"até 24 horas","description":"Sua magia transforma você em bestas. Escolha qualquer quantidade de criaturas voluntárias que você possa ver, o alcance. Você muda cada alvo para a forma de uma besta Grande ou menor, com um nível de desafio de 4 ou inferior. Nos turnos subsequentes, você pode usar sua ação para mudar uma criatura afetada para uma nova forma.</p><p> A transformação permanece pela duração para cada alvo, ou até o alvo cair para 0 pontos de vida ou morrer. Você pode escolher uma forma diferente para cada alvo. As estatísticas de jogo do alvo são substituídas pelas estatísticas da besta escolhida, mas o alvo mantém sua tendência e valores de Inteligência, Sabedoria e Carisma. O alvo adquire os pontos de vida da sua nova forma, e quando ele reverte para sua forma normal, ele volta aos pontos de vida que tinha antes de ser transformado. Se ele reverter como resultado de ter caído a 0 pontos de vida, todo dano excedente é recebido pela sua forma normal. Contato que o dano excedente não reduza os pontos de vida da forma normal da criatura a 0, ela não cairá inconsciente. A criatura é limitada em suas ações pela natureza da sua nova forma e ela não pode falar nem conjurar magias.</p><p> O equipamento do alvo mescla - se a sua nova forma. O alvo não pode ativar, empunhar ou, de outra forma, se beneficiar de qualquer de seus equipamentos.","classes":["Druida"],"favorite":false},{"id":172,"level":"3","name":"Glifo de Vigilância","name_en":"Glyph Of Warding","school":{"pt":"Abjuração","style":"abjuration"},"castingTime":"1 hora","range":"toque","components":"V, S, M","duration":"até ser dissipada ou ativada","material":"incenso e pó de diamante valendo, no mínimo, 200 po, consumidos pela magia","description":"Quando você conjura essa magia, você inscreve um glifo que fere outras criaturas, tanto sobre uma superfície (como uma mesa ou uma secção de piso ou parede) quanto dentro de um objeto que possa ser fechado (como um livro, um pergaminho ou um baú d tesouro) para ocultar o glifo. Se você escolher uma superfície, o glifo pode cobrir uma área da superfície não superior a 3 metros de diâmetro. Se você escolher um objeto, o objeto deve permanecer no seu local, se ele for movido mais de 3 metros de onde você conjurou essa magia, o glifo será quebrado e a magia termina sem ser ativada.</p><p> O glifo é quase invisível e requer um teste de Inteligência (Investigação) contra a CD da magia para ser encontrado.</p><p> Você define o que ativa o glifo quando você conjura a magia. Para glifos inscritos em uma superfície, os gatilhos mais típicos incluem tocar ou ficar sobre o glifo, remover outro objeto cobrindo o glifo, aproximar - se a uma certa distância do glifo ou manipular um objeto onde o glifo esteja inscrito. Para glifos inscritos dentro de objetos, os gatilhos mais comuns incluem abrir o objeto, aproximar - se a uma certa distância do objeto ou ver ou ler o glifo. Uma vez que o glifo seja ativado, a magia termina. Você pode, posteriormente, aperfeiçoar o gatilho para que a magia se ative apenas sob certas circunstâncias ou de acordo com as características físicas (como altura ou peso), tipo de criatura (por exemplo, a proteção poderia ser definida para afetar aberrações ou drow) ou tendência. Você pode, também, definir condições para criaturas não ativarem o glifo, como aqueles que falarem determinada senha.</p><p> Quando você inscreve o glifo, escolha <em> runas explosivas </em> ou <em> glifo de magia </em>.</p><p><em><strong> Runas Explosivas </strong></ em>. Quando ativado, o glifo irrompe com energia mágica numa esfera com 6 metros de raio, centrada no glifo. A esfera se espalha, dobrando esquinas. Cada criatura na área deve realizar um teste de resistência de Destreza. Uma criatura sofre 5d8 de dano de ácido, elétrico, fogo, frio ou trovejante se falhar no teste de resistência (você escolhe o tipo quando cria o glifo) ou metade desse dano se obtiver sucesso.</p><p><em><strong> Glifo de Magia </strong></ em>. Você pode armazenar uma magia preparada de 3° nível ou inferior no glifo ao conjurá-la como parte da criação do glifo. A magia a ser armazenada não tem efeito imediato quando conjurada dessa forma. Quando o glifo for ativado, a magia armazenada é conjurada. Se a magia tiver um alvo, esse alvo será a criatura que ativou o glifo. Se a magia afetar uma área, a área será centrada na criatura. Se a magia invocar criaturas hostis ou criar objetos ou armadilhas nocivos, eles aparecerão o mais próximo possível do intruso e o atacarão. Se a magia precisar de concentração, ela dura o máximo possível da sua duração.</p><p><strong> Em Níveis Superiores </strong>. Quando você conjurar essa magia usando um espaço de magia de 4° nível ou superior, o dano do glifo de <em> runas explosivas </em> aumenta em 1d8 para cada nível do espaço acima do 3°. Se você criar um <em> glifo de magia </em>, você pode armazenar qualquer magia do mesmo nível, ou inferior, do espaço que você usar para o <em> glifo de vigilância </em>.</p> ","classes":["Bardo","Clérigo","Mago"],"favorite":false},{"id":292,"level":"6","name":"Globo de Invulnerabilidade","name_en":"Globe Of Invunerability","school":{"pt":"Abjuração","style":"abjuration"},"castingTime":"1 ação","range":"pessoal","components":"V, S, M","concentration":"s","duration":"até 1 minuto","material":"uma perola de vidro ou cristal que se despedaça quando a magia termina","description":"Uma barreira imóvel, levemente cintilante, surge do nada num raio de 3 metros centrado em você e permanece pela duração.</p><p> Qualquer magia de 5° nível ou inferior conjurada de fora da barreira não poderá afetar as criaturas ou objetos dentro dela, mesmo que a magia seja conjurada usando um espaço de magia de nível superior. Tais magias podem ter como alvo criaturas e objetos dentro da barreira, mas a magia não produz nenhum efeito neles. Similarmente, a área dentro da barreira é excluída das áreas afetadas por tais magias.</p><p><strong> Em Níveis Superiores </strong>. Quando você conjurar essa magia usando um espaço de magia de 7° nível ou superior, a barreira bloqueia magias de um nível superior para cada nível do espaço acima do 6°.","classes":["Feiticeiro","Mago"],"favorite":false},{"id":10,"level":"0","name":"Globos de Luz","name_en":"Dancing Lights","school":{"pt":"Evocação","style":"evocation"},"castingTime":"1 ação","range":"36 metros","components":"V, S, M","concentration":"s","duration":"até 1 minuto","material":"um pouco de fósforo ou wychwood ou um inseto luminoso","description":"Você cria até quatro luzes do tamanho de tochas dentro do alcance, fazendo - as parecerem tochas, lanternas ou esferas luminosas que flutuam no ar pela duração. Você também pode combinar as quatro luzes em uma forma luminosa, vagamente humanoide, de tamanho Médio. Qualquer que seja a forma que você escolher, cada luz produz penumbra num raio de 3 metros.</p><p> Com uma ação bônus, no seu turno, você pode mover as luzes, até 18 metros, para um novo local dentro do alcance. Uma luz deve estar a, pelo menos, 6 metros de outra luz criada por essa magia e uma luz some se exceder o alcance da magia.","classes":["Bardo","Feiticeiro","Mago"],"favorite":false},{"id":59,"level":"1","name":"Golpe Constritor","name_en":"Ensnaring Strike","school":{"pt":"Conjuração","style":"conjuration"},"castingTime":"1 ação bônus","range":"pessoal","components":"V","concentration":"s","duration":"até 1 minuto","description":"Da próxima vez que você atingir uma criatura com um ataque com arma, antes do final da magia, um emaranhado maciço de vinhas espinhentas aparecem no local do impacto e o alvo deve ser bem sucedido num teste de resistência de Força ou ficará impedido pelas vinhas mágicas, até o fim da magia. Uma criatura Grande ou maior tem vantagem no seu teste de resistência. Se o alvo for bem sucedido na resistência, as vinhas murcharão.</p><p> Enquanto estiver impedido pela magia, um alvo sofre 1d6 de dano perfurante no início de cada um dos turnos dele. Uma criatura impedida pelas vinhas ou uma que possa tocar a criatura, pode usar sua ação para realizar um teste de Força contra a CD da magia. Num sucesso, o alvo é libertado.</p><p><strong> Em Níveis Superiores </strong>. Se você conjurar essa magia usando um espaço de magia de 2° nível ou superior, o dano aumenta em 1d6 para cada nível do espaço acima do 1°.","classes":["Patrulheiro"],"favorite":false},{"id":215,"level":"4","name":"Guardião da Fé","name_en":"Guardian of Faith","school":{"pt":"Conjuração","style":"conjuration"},"castingTime":"1 ação","range":"9 metros","components":"V","duration":"8 horas","description":"Um guardião espectral Grande aparece e flutua, pela duração, em um espaço desocupado, à sua escolha, que você possa ver dentro do alcance. O guardião ocupa esse espaço e é indistinto, exceto por uma espada reluzente e um escudo brasonado com o símbolo da sua divindade.</p><p> Qualquer criatura hostil a você que se mover para um espaço a até 3 metros do guardião pela primeira vez em um turno, deve ser bem sucedida num teste de resistência de Destreza. A criatura sofre 20 de dano radiante se falhar na resistência ou metade desse dano se obtiver sucesso. O guardião desaparece após ter causado um total de 60 de dano.","classes":["Clérigo"],"favorite":false},{"id":60,"level":"1","name":"Heroísmo","name_en":"Heroism","school":{"pt":"Encantamento","style":"enchantment"},"castingTime":"1 ação","range":"toque","components":"V, S","concentration":"s","duration":"até 1 minuto","description":"Uma criatura voluntária que você tocar é imbuída com bravura. Até a magia acabar, a criatura é imune a ser amedrontada e ganha pontos de vida temporários igual ao seu modificador de habilidade de conjuração, no início de cada turno dela. Quando a magia acabar, o alvo perde qualquer ponto de vida temporário restante dessa magia.</p><p><strong> Em Níveis Superiores </strong>. Quando você conjurar essa magia usando um espaço de magia de 2° nível ou superior, você pode afetar uma criatura adicional para cada nível do espaço acima do 1°.","classes":["Bardo","Paladino"],"favorite":false},{"id":61,"level":"1","name":"Identificação","name_en":"Identify","ritual":"s","school":{"pt":"Adivinhação","style":"divination"},"castingTime":"1 minuto","range":"toque","components":"V, S, M","duration":"instantânea","material":"uma perola valendo, no mínimo, 100 po e uma pena de coruja","description":"Você escolhe um objeto que você deve tocar durante toda a conjuração da magia. Se ele for um item mágico ou algum outro objeto imbuído por magia, você descobre suas propriedades e como usá - lo, se exige sintonia para ser usado e quantas cargas ele tem, se aplicável. Você descobre se quaisquer magias estão afetando o item e quais eles são. Se o item foi criado por magia, você descobre que magia o criou.</p><p> Se você, ao invés, tocar uma criatura durante toda a conjuração, você descobre quais magias, se houver alguma, estão afetando - a atualmente.","classes":["Bardo","Mago"],"favorite":false},{"id":173,"level":"3","name":"Idiomas","name_en":"Tongues","school":{"pt":"Adivinhação","style":"divination"},"castingTime":"1 ação","range":"toque","components":"V, M","duration":"1 hora","material":"uma pequena estátua de argila de um zigurate","description":"Essa magia garante a criatura que você tocar a habilidade de compreender e falar o idioma que ela ouvir. Além disso, quando o alvo fala, qualquer criatura que saiba, pelo menos, um idioma pode ouvir o alvo e compreender o que ele diz.","classes":["Bardo","Bruxo","Clérigo","Feiticeiro","Mago"],"favorite":false},{"id":11,"level":"0","name":"Ilusão Menor","name_en":"Minor Illusion","school":{"pt":"Ilusão","style":"illusion"},"castingTime":"1 ação","range":"9 metros","components":"V, M","duration":"1 minuto","material":"um pouco de lã","description":"Você cria um som ou uma imagem de um objeto, dentro do alcance, que permanece pela duração. A ilusão também termina se você dissipá-la usando uma ação ou conjurar essa magia novamente.</p><p> Se você criar um som, seu volume pode variar entre um sussurro até um grito. Pode ser a sua voz, a voz de outrem, o rugido de um leão, batidas de tambor ou qualquer outro som que você quiser. O som permanece no mesmo volume durante toda duração ou você pode fazer sons distintos em momentos diferentes, antes da magia acabar.</p><p> Se você criar uma imagem de um objeto– como uma cadeira, pegadas de lama ou um pequeno baú– ela não pode ter mais de 1,5 metro cúbico. A imagem não pode produzir som, luz, cheiro ou qualquer outro efeito sensorial. Interação física com a imagem revelará que ela é uma ilusão, já que as coisas podem atravessá-la. Se uma criatura usar sua ação para examinar a imagem, ela pode determinar que ela é uma ilusão se obtiver sucesso num teste de Inteligência (Investigação) contra a CD da magia. Se uma criatura discernir a ilusão como sendo isso, a ilusão se tornará suave para a criatura.","classes":["Bardo","Bruxo","Feiticeiro","Mago"],"favorite":false},{"id":293,"level":"6","name":"Ilusão Programada","name_en":"Programmed Illusion","school":{"pt":"Ilusão","style":"illusion"},"castingTime":"1 ação","range":"36 metros","components":"V, S, M","duration":"até ser dissipada","material":"um pouco de lã e pó de jade valendo, no mínimo, 25 po","description":"Você cria uma ilusão de um objeto, uma criatura ou de algum outro fenômeno visível, dentro do alcance, que se ativa quando uma condição especifica ocorre. A ilusão é imperceptível até esse momento. Ela não pode ter mais de 9 metros cúbicos e você decide, quando conjura a magia, como a ilusão se comporta e quais sons ela faz. Essa performance roteirizada por durar até 5 minutos.</p><p> Quando a condição que você especificou ocorrer, a ilusão surge do nada e age da maneira que você descreveu. Uma vez que a ilusão tenha acabado de agir, ela desaparece e permanece dormente por 10 minutos. Após desse período, a ilusão pode se ativar novamente.</p><p> A condição de ativação pode ser tão genérica ou tão detalhada quando você quiser, apesar de ela precisar ser baseada em condições visuais ou audíveis que ocorram a até 9 metros da área. Por exemplo, você poderia criar uma ilusão, de si mesmo, que aparecerá e avisará a outros que tentarem abrir a porta com armadilha ou você pode programar a ilusão para se ativar apenas quando uma criatura disser a palavra ou frase correta.</p><p> Interação física com a imagem revelará ela como sendo uma ilusão, já que as coisas podem atravessá-la. Uma criatura que usar sua ação para examinar a imagem, pode determinar que ela é uma ilusão sendo bem sucedida num teste de Inteligência (Investigação) contra a CD da magia para desacreditá-la. Se a criatura discernir a ilusão como ela é, a criatura poderá ver através da imagem e qualquer barulho que ela fizer soará oco para a criatura.","classes":["Bardo","Mago"],"favorite":false},{"id":174,"level":"3","name":"Imagem Maior","name_en":"Major Image","school":{"pt":"Ilusão","style":"illusion"},"castingTime":"1 ação","range":"36 metros","components":"V, S, M","concentration":"s","duration":"até 10 minutos","material":"um pedaço de lã","description":"Você cria uma imagem de um objeto, uma criatura ou algum outro fenômeno visível que não tenha mais de 6 metros cúbicos. A imagem aparece em um local que você possa ver, dentro do alcance e permanece pela duração. Ela parece completamente real, incluindo sons, cheiros e temperatura apropriados para a coisa retratada. Você não pode criar calo ou frio suficiente para causar dano, um som alto o suficiente para causar dano trovejante ou ensurdecer uma criatura ou um cheiro que poderia nausear uma criatura (como o fedor de um troglodita).</p><p> Enquanto você estiver dentro do alcance da ilusão, você pode usar sua ação pra fazer a imagem se mover para qualquer outro local dentro do alcance. À medida que a imagem muda de lugar, você pode alterar a aparência dela para que seu movimento pareça ser o natural para a imagem. Por exemplo, se você criar uma imagem de uma criatura e move - la, você pode alterar a imagem para que ela pareça estar andando. Similarmente, você pode fazer a ilusão emitir sons diferentes em momentos diferentes, sendo possível até mesmo manter uma conversa, por exemplo.</p><p> Interação física com a imagem, revelará que ela é uma ilusão, já que as coisas podem passar através dela. Uma criatura que usar sua ação para examinar a imagem, pode determinar que ela é uma ilusão com um teste de Inteligência (Investigação) bem sucedido contra a CD da magia. Se uma criatura discernir a ilusão como sendo isso, a criatura verá através da imagem e suas outras qualidades sensoriais se tornaram suaves para a criatura.</p><p><strong> Em Níveis Superiores </strong>. Quando você conjurar essa magia usando um espaço de magia de 6° nível ou superior, a magia irá durar até ser dissipada, sem necessitar da sua concentração.","classes":["Bardo","Bruxo","Feiticeiro","Mago"],"favorite":false},{"id":62,"level":"1","name":"Imagem Silenciosa","name_en":"Silent Image","school":{"pt":"Ilusão","style":"illusion"},"castingTime":"1 ação","range":"18 metros","components":"V, S, M","concentration":"s","duration":"até 10 minutos","material":"um pouco de lã","description":"Você cria a imagem de um objeto, criatura ou outro fenômeno visual que não tenha mais de 4, 5 metros cúbicos. A imagem aparece num ponto, dentro do alcança, e permanece pela duração. A imagem é puramente visual, não é acompanhada por som, cheiro ou outros efeitos sensoriais.</p><p> Você pode usar sua ação para fazer a imagem se mover para qualquer ponto, dentro do alcance. À medida que a imagem muda de lugar, você pode alterar a aparência dela para que seu movimento pareça ser o natural para a imagem. Por exemplo, se você criar uma imagem de uma criatura e move - la, você pode alterar a imagem para que ela pareça estar andando.</p><p> Interação física com a imagem, revelará que ela é uma ilusão, já que as coisas podem passar através dela. Uma criatura que usar sua ação para examinar a imagem, pode determinar que ela é uma ilusão com um teste de Inteligência (Investigação) bem sucedido contra a CD da magia. Se uma criatura discernir a ilusão como sendo isso, a criatura poderá ver através da imagem.","classes":["Bardo","Feiticeiro","Mago"],"favorite":false},{"id":257,"level":"5","name":"Imobilizar Monstro","name_en":"Hold Monster","school":{"pt":"Encantamento","style":"enchantment"},"castingTime":"1 ação","range":"27 metros","components":"V, S, M","concentration":"s","duration":"até 1 minuto","material":"uma pequena peça de ferro reta","description":"Escolha uma criatura que você possa ver, dentro do alcance. O alvo deve ser bem sucedido num teste de resistência de Sabedoria ou ficará paralisado pela duração. Essa magia não tem efeito em mortos - vivos. No final de cada um dos turnos dele, o alvo pode realizar outro teste de resistência de Sabedoria. Se obtiver sucesso, a magia termina no alvo.</p><p><strong> Em Níveis Superiores </strong>. Quando você conjurar essa magia usando um espaço de magia de 6° nível ou superior, você pode afetar uma criatura adicional para cada nível de magia acima do 5°. As criaturas devem estar a 9 metros entre si para serem afetadas.","classes":["Bardo","Bruxo","Feiticeiro","Mago"],"favorite":false},{"id":116,"level":"2","name":"Imobilizar Pessoa","name_en":"Hold Person","school":{"pt":"Encantamento","style":"enchantment"},"castingTime":"1 ação","range":"18 metros","components":"V, S, M","concentration":"s","duration":"até 1 minuto","material":"uma pequena peça de ferro reta","description":"Escolha um humanoide que você possa ver, dentro do alcance. O alvo deve ser bem sucedido num teste de resistência de Sabedoria ou ficará paralisado pela duração. Essa magia não tem efeito em mortos - vivos. No final de cada um dos turnos dele, o alvo pode realizar outro teste de resistência de Sabedoria. Se obtiver sucesso, a magia termina no alvo.</p><p><strong> Em Níveis Superiores </strong>. Quando você conjurar essa magia usando um espaço de magia de 3° nível ou superior, você pode afetar um humanoide adicional para cada nível de magia acima do 2°. Os humanoides devem estar a 9 metros entre si para serem afetados.","classes":["Bardo","Bruxo","Clérigo","Druida","Feiticeiro","Mago"],"favorite":false},{"id":63,"level":"1","name":"Infligir Ferimentos","name_en":"Inflict Wounds","school":{"pt":"Necromancia","style":"necromancy"},"castingTime":"1 ação","range":"toque","components":"V, S","duration":"instantânea","description":"Faça um ataque corpo - a - corpo com magia contra uma criatura dentro do alcance. Se atingir, o alvo sofre 3d10 de dano necrótico.</p><p><strong> Em Níveis Superiores </strong>. Quando você conjurar essa magia usando um espaço de magia de 2° nível ou superior, o dano aumenta em 1d10 para cada nível acima do 1°.","classes":[],"favorite":false},{"id":216,"level":"4","name":"Inseto Gigante","name_en":"Giant Insect","school":{"pt":"Transmutação","style":"transmutation"},"castingTime":"1 ação","range":"9 metros","components":"V, S","concentration":"s","duration":"até 10 minutos","description":"Você transforma até dez centopeias, três aranhas, cinco vespas ou um escorpião, dentro do alcance, em versões gigantes das suas formas naturais, pela duração. Uma centopeia se torna uma centopeia gigante, uma aranha se torna uma aranha gigante, uma vespa se torna uma vespa gigante e um escorpião se torna um escorpião gigante.</p><p> Cada criatura obedece aos seus comando verbais e, em combate, elas agem no seu turno a cada rodada. O Mestre possui as estatísticas dessas criaturas e determina suas ações e movimentação.</p><p> Uma criatura permanece no tamanho gigante pela duração, ou até cair a 0 pontos de vida ou até você usar sua ação para dissipar o efeito nela.</p><p> O Mestre pode permitir que você escolha alvos diferentes. Por exemplo, se você transformar uma abelha, sua versão gigante poderia ter as mesmas estatísticas da vespa gigante.","classes":["Druida"],"favorite":false},{"id":312,"level":"7","name":"Inverter a Gravidade","name_en":"Reverse Gravity","school":{"pt":"Transmutação","style":"transmutation"},"castingTime":"1 ação","range":"30 metros","components":"V, S, M","concentration":"s","duration":"até 1 minuto","material":"um ímã e limalhas de ferro","description":"Essa magia inverte a gravidade num cilindro de 15 metros de raio por 30 metros de altura, centrado num ponto dentro do alcance. Todas as criaturas e objetos que não esteja, de alguma forma, presos ao solo na área, caem para cima e alcançam o topo da área, quando você conjura essa magia. Uma criatura pode fazer um teste de resistência de Destreza para se agarrar em algum objeto fixo que ela possa alcançar, assim, evitando a queda.</p><p> Se algum objeto sólido (como um teto) for encontrado durante essa queda, objetos e criaturas caindo atingem ele, exatamente como fariam durante uma queda normal. Se um objeto ou criatura alcançar o topo da área sem atingir nada, ele permanecerá lá, oscilando ligeiramente, pela duração.</p><p> No final da duração, objetos e criaturas afetadas caem de volta para baixo.","classes":["Druida","Feiticeiro","Mago"],"favorite":false},{"id":117,"level":"2","name":"Invisibilidade","name_en":"Invisibility","school":{"pt":"Ilusão","style":"illusion"},"castingTime":"1 ação","range":"toque","components":"V, S, M","concentration":"s","duration":"até 1 hora","material":"uma pestana envolta em goma- arábica","description":"Uma criatura que você tocar, se torna invisível até a magia acabar. Qualquer coisa que o alvo esteja vestindo ou carregando fica invisível enquanto estiver de posse do alvo. A magia termina para o alvo caso ele ataque ou conjure uma magia.</p><p><strong> Em Níveis Superiores </strong>. Quando você conjurar essa magia usando um espaço de magia de 3° nível ou superior, você pode afetar um alvo adicional para cada nível do espaço acima do 2°.","classes":["Bardo","Bruxo","Feiticeiro","Mago"],"favorite":false},{"id":217,"level":"4","name":"Invisibilidade Maior","name_en":"Greater Invisibility","school":{"pt":"Ilusão","style":"illusion"},"castingTime":"1 ação","range":"toque","components":"V, S","concentration":"s","duration":"até 1 minuto","description":"Você ou uma criatura que você possa tocar, se torna invisível até a magia acabar. Qualquer coisa que o alvo estiver vestindo ou carregando fica invisível enquanto estiver de posse do alvo.","classes":["Bardo","Feiticeiro","Mago"],"favorite":false},{"id":294,"level":"6","name":"Invocação Instantânea de Drawmij","name_en":"Drawmij's Instant Summons","ritual":"s","school":{"pt":"Conjuração","style":"conjuration"},"castingTime":"1 minuto","range":"toque","components":"V, S, M","duration":"até ser dissipada","material":"uma safira no valor de 1. 000 po","description":"Você toca um objeto pesando 5 quilos ou menos com maior dimensão de 1, 8 metro ou menos. A magia deixa uma marca invisível na sua superfície e grava invisivelmente o nome do item na safira que você usou como componente material. A cada vez que você conjurar essa magia, você deve usar uma safira diferente.</p><p> A qualquer momento, posteriormente, você pode usar sua ação para falar o nome do item e esmagar a safira. O item aparece instantaneamente em suas mãos, independentemente de distâncias físicas ou planares, e a magia termina.</p><p> Se outra criatura estiver segurando ou carregando o item, esmagar a safira não irá transportar o item até você, ao invés disso, você descobre quem é a criatura possuindo o objeto e onde, vagamente, a criatura está localizada no momento.</p><p><em> Dissipar magia </em> ou um efeito similar aplicado com sucesso na safira, termina o efeito da magia.</p> ","classes":["Mago"],"favorite":false},{"id":313,"level":"7","name":"Isolamento","name_en":"Sequester","school":{"pt":"Transmutação","style":"transmutation"},"castingTime":"1 ação","range":"toque","components":"V, S, M","duration":"até ser dissipada","material":"um composto de pós de diamante, esmeralda, rubi e safira valendo, no mínimo, 5. 000 po, consumidos pela magia","description":"Através dessa magia, uma criatura voluntária ou um objeto, pode ser escondido, seguro contra detecção pela duração. Quando você conjura essa magia e toca o alvo, ele fica invisível e não pode ser alvo de magias de adivinhação ou percebido através de sensores de vidência criados por magias de adivinhação.</p><p> Se o alvo for uma criatura, ela entra num estado de animação suspensa. O tempo para de fluir para ela e ela não envelhece.</p><p> Você pode determinar uma condição para que a magia termine prematuramente. A condição pode ser qualquer coisa, à sua escolha, mas deve ocorrer ou ser visível a até 1,5 quilômetro do alvo. Exemplos incluem“ depois de 1. 000 anos” ou“ quando o tarrasque despertar”. Essa magia também acaba se o alvo sofrer qualquer dano.","classes":["Mago"],"favorite":false},{"id":336,"level":"8","name":"Labirinto","name_en":"Maze","school":{"pt":"Conjuração","style":"conjuration"},"castingTime":"1 ação","range":"18 metros","components":"V, S","concentration":"s","duration":"até 10 minutos","description":"Você bane uma criatura que você possa ver, dentro do alcance, para um semiplano labiríntico. O alvo permanece lá pela duração ou até escapar do labirinto.</p><p> O alvo pode usar sua ação para tentar escapar. Quando o fizer, ele realiza um teste de Inteligência com CD 20. Se for bem sucedido, ele escapa e a magia termina (um minotauro ou um demônio goristro, obtém sucesso automaticamente).</p><p> Quando a magia termina, o alvo reaparece no espaço que ela estava ou, se o espaço estiver ocupado, no espaço desocupado mais próximo.","classes":["Mago"],"favorite":false},{"id":118,"level":"2","name":"Lâmina Flamejante","name_en":"Flame Blade","school":{"pt":"Evocação","style":"evocation"},"castingTime":"1 ação bônus","range":"pessoal","components":"V, S, M","concentration":"s","duration":"até 10 minutos","material":"folha de sumagre","description":"Você evoca uma lâmina ardente em sua mão livre. A lâmina é similar em tamanho e formato a uma cimitarra e ela permanece pela duração. Se você soltar a lâmina, ela desaparece, mas você pode evocar a lâmina novamente com uma ação bônus.</p><p> Você pode usar sua ação para realizar ataques corpo - a - corpo com magia com a lâmina ardente. Se atingir, o alvo sofrerá 3d6 de dano de fogo.</p><p> A lâmina flamejante emite luz plena a 3 metros de raio e penumbra por mais 3 metros adicionais.</p><p><strong> Em Níveis Superiores </strong>. Quando você conjurar essa magia usando um espaço de magia de 4° nível ou superior, o dano aumenta em 1d6 para cada dois níveis do espaço acima do 2°.","classes":["Druida"],"favorite":false},{"id":175,"level":"3","name":"Lentidão","name_en":"Slow","school":{"pt":"Transmutação","style":"transmutation"},"castingTime":"1 ação","range":"36 metros","components":"V, S, M","concentration":"s","duration":"até 1 minuto","material":"uma gota de melaço","description":"Você altera o tempo ao redor de até seis criaturas, à sua escolha, num cubo de 12 metros, dentro do alcance. Cada criatura deve ser bem sucedida num teste de resistência de Sabedoria ou será afetada por essa magia pela duração.</p><p> O deslocamento de um alvo afetado é reduzido à metade, ele sofre– 2 de penalidade na CA e nos testes de resistência de Destreza e não pode usar reações. No turno dele, ele pode usar ou uma ação ou uma ação bônus, mas não ambas. Independentemente das habilidades ou itens mágicos da criatura, ela não poderá realizar mais de um ataque corpo - a - corpo ou à distância durante o turno dela.</p><p> Se a criatura tentar conjurar uma magia com tempo de conjuração maior que 1 rodada, jogue 1d20. Se cair 11 ou maior, a magia não surte efeito até o próximo turno da criatura e a criatura deve usar sua ação nesse turno para completar a magia. Se ela não puder, a magia é perdida.</p><p> Uma criatura afetada por essa magia faz outro teste de resistência de Sabedoria no final do turno dela. Se passar na resistência, o efeito acaba nela.","classes":["Feiticeiro","Mago"],"favorite":false},{"id":64,"level":"1","name":"Leque Cromático","name_en":"Color Spray","school":{"pt":"Ilusão","style":"illusion"},"castingTime":"1 ação","range":"pessoal","components":"V, S, M","duration":"1 rodada","material":"um punhado de pó ou areia nas cores vermelha, amarela e azul","description":"Um feixe ofuscante de luzes coloridas ordenadas, surge da sua mão. Role 6d10, o total é a quantidade de pontos de vida de criaturas que essa magia pode afetar. As criaturas num cone de 4, 5 metros, originado de você, são afetadas em ordem ascendente dos seus pontos de vida (ignorando criaturas inconsciente e que não podem ver).</p><p> Começando com as criaturas que tiverem menos pontos de vida, cada criatura afetada por essa magia ficará cega até o fim da magia. Subtraia os pontos de vida de cada criatura do total antes de considerar os pontos de vida da próxima criatura. Os pontos de vida de uma criatura devem ser iguais ou menores que o total restante para que essa criatura seja afetada </p><p><strong> Em Níveis Superiores </strong>. Se você conjurar essa magia usando um espaço de magia de 2° nível ou superior, jogue 2d10 adicionais para cada nível do espaço acima do 1°.","classes":["Feiticeiro","Mago"],"favorite":false},{"id":119,"level":"2","name":"Levitação","name_en":"Levitate","school":{"pt":"Transmutação","style":"transmutation"},"castingTime":"1 ação","range":"18 metros","components":"V, S, M","concentration":"s","duration":"até 10 minutos","material":"uma pequena presilha de couro ou um pedaço de fio dourado dobrado em forma de copo com uma haste longa em uma extremidade","description":"Uma criatura ou objeto, à sua escolha, que você possa ver, dentro do alcance, ergue - se verticalmente, até 6 metros e permanece suspenso lá pela duração. A magia pode levitar um alvo pesando até 250 quilos. Uma criatura involuntária que for bem sucedida num teste de resistência de Constituição não é afetada </p><p> O alvo pode se mover apenas ao puxar ou empurrar um objeto fixo ou superfície ao seu alcance (como um muro ou teto), permitindo que ele se mova como se estivesse escalando. Você pode mudar a altitude do alvo em até 6 metros em ambas as direções no seu turno. Se você for o alvo, você pode se mover para cima ou para baixo como parte do seu movimento. Do contrário, você precisa usar sua ação para mover o alvo, que deve permanecer dentro do alcance da magia.</p><p> Quando a magia acaba, o alvo flutua suavemente até o chão, se ele ainda estiver no ar.","classes":["Feiticeiro","Mago"],"favorite":false},{"id":258,"level":"5","name":"Ligação Telepática de Rary","name_en":"Rary's Telepathic Bond","ritual":"s","school":{"pt":"Adivinhação","style":"divination"},"castingTime":"1 ação","range":"9 metros","components":"V, S, M","duration":"1 hora","material":"pedaços de cascas de ovos de dois tipos diferentes de criatura","description":"Você forja uma ligação telepática entre até oito criaturas voluntárias, à sua escolha, dentro do alcance, ligando psiquicamente cada criatura a todas as outras, pela duração. Criaturas com valores de Inteligência 2 ou menos não são afetadas por essa magia.</p><p> Até a magia acabar, os alvos podem se comunicar telepaticamente através do elo, independentemente de terem ou não um idioma em comum. A comunicação é possível a qualquer distância, apesar de não se estender a outros planos de existência.","classes":["Mago"],"favorite":false},{"id":337,"level":"8","name":"Limpar a Mente","name_en":"Mind Blank","school":{"pt":"Abjuração","style":"abjuration"},"castingTime":"1 ação","range":"toque","components":"V, S","duration":"24 horas","description":"Até a magia acabar, uma criatura voluntária que você tocar fica imune a dano psíquico, a qualquer efeito que poderia sentir suas emoções ou ler seus pensamentos, a magias de adivinhação e a condição enfeitiçado. A magia pode até mesmo evitar a magia desejo e magias ou efeitos de poder similar usados para afetar a mente do alvo ou para adquirir informações sobre ele.","classes":["Bardo","Mago"],"favorite":false},{"id":120,"level":"2","name":"Localizar Animais ou Plantas","name_en":"Locate Animals or Plants","ritual":"s","school":{"pt":"Adivinhação","style":"divination"},"castingTime":"1 ação","range":"pessoal","components":"V, S, M","duration":"instantânea","material":"um pouco de pelo de um cão de caça","description":"Descreva ou nomeie um tipo especifico de besta ou planta. Concentre - se na voz da natureza ao seu redor, você descobre a direção e distância da criatura ou planta mais próxima desse tipo dentro de 7, 5 quilômetros, se houver alguma presente.","classes":["Bardo","Druida","Patrulheiro"],"favorite":false},{"id":218,"level":"4","name":"Localizar Criatura","name_en":"Locate Creature","school":{"pt":"Adivinhação","style":"divination"},"castingTime":"1 ação","range":"pessoal","components":"V, S, M","concentration":"s","duration":"até 1 hora","material":"um pouco de pelo de um cão de caça","description":"Descreva ou nomeie uma criatura que seja familiar a você. Você sente a direção da localização da criatura, contanto que a criatura esteja a até 300 metros de você. Se a criatura se mover, você saberá a direção do movimento dela.</p><p> A magia pode localizar uma criatura especifica que você conheça ou a criatura mais próxima de um tipo especifico (como um humano ou um unicórnio), desde que você já tenha visto tal criatura de perto– a até 9 metros– pelo menos uma vez. Se a criatura que você descreveu ou nomeou estiver em uma forma diferente, como se estiver sob efeito da magia <em> metamorfose </em>, essa magia não localizará a criatura.</p><p> Essa magia não pode localizar uma criatura se água corrente de, pelo menos 3 metros de largura, bloquear o caminho direito entre você e a criatura.","classes":["Bardo","Clérigo","Druida","Mago","Paladino","Patrulheiro"],"favorite":false},{"id":121,"level":"2","name":"Localizar Objeto","name_en":"Locate Object","school":{"pt":"Adivinhação","style":"divination"},"castingTime":"1 ação","range":"pessoal","components":"V, S, M","concentration":"s","duration":"até 10 minutos","material":"um galho bifurcado","description":"Descreva ou nomeie um objeto que seja familiar a você. Você sente a direção da localização do objeto, contanto que o objeto esteja a até 300 metros de você. Se o objeto estiver em movimento, você saberá a direção do movimento dele.</p><p> A magia pode localizar um objeto especifico que você, desde que você já tenha o visto de perto– a até 9 metros– pelo menos uma vez. Alternativamente, a magia pode localizar o objeto de um tipo em particular mais próximo, como certo tipo de vestuário, joia, móvel, ferramenta ou arma.</p><p> Essa magia não pode localizar um objeto se qualquer espessura de chumbo, até mesmo uma folha fina, bloquear o caminho direto entre você e o objeto.","classes":["Bardo","Clérigo","Druida","Mago","Paladino","Patrulheiro"],"favorite":false},{"id":338,"level":"8","name":"Loquacidade","name_en":"Glibness","school":{"pt":"Transmutação","style":"transmutation"},"castingTime":"1 ação","range":"pessoal","components":"V","duration":"1 hora","description":"Até o fim da magia, quando você realizar um teste de Carisma, você pode substituir o número rolado por você por um 15. Além disso, não importa o que você diga, magias que determinam se você está dizendo a verdade indicarão que você está sendo sincero.","classes":["Bardo","Bruxo"],"favorite":false},{"id":122,"level":"2","name":"Lufada de Vento","name_en":"Gust Of Wind","school":{"pt":"Evocação","style":"evocation"},"castingTime":"1 ação","range":"pessoal","components":"V, S, M","concentration":"s","duration":"até 1 minuto","material":"uma semente de legume","description":"Uma linha de vento forte, com 18 metros de comprimento e 3 metros de largura, é soprada de você em uma direção, à sua escolha, pela duração da magia. Cada criatura que começar seu turno na linha, deve ser bem sucedida num teste de resistência de Força ou será empurrada 4, 5 metros para trás, na direção seguida pela linha. Qualquer criatura na linha deve gastar 3 metros de movimentação para cada 1,5 metro que ela se mover enquanto se aproxima de você.</p><p> As lufadas dispersam gases ou vapores e apagam velas, tochas e chamas similares desprotegidas na área. Elas fazem com que chamas protegidas, como as de lanternas, vibrem descontroladamente e tenham 50 por cento de chance de serem extintas.</p><p> Com uma ação bônus, em cada um dos seus turnos, antes da magia acabar, você pode mudar a direção à qual a linha é soprada de você.","classes":["Druida","Feiticeiro","Mago"],"favorite":false},{"id":12,"level":"0","name":"Luz","name_en":"Light","school":{"pt":"Evocação","style":"evocation"},"castingTime":"1 ação","range":"toque","components":"V, M","duration":"1 hora","material":"um vaga-lume ou musgo fosforescente","description":"Você toca um objeto que não tenha mais 3 metros em qualquer dimensão. Até a magia acabar, o objeto emite luz plena num raio de 6 metros e penumbra por 6 metros adicionais. Cobrir o objeto completamente com alguma coisa opaca bloqueará a luz. A magia termina se você conjurá-la novamente ou dissipá-la com uma ação.</p><p> Se você tentar afetar um objeto segurado ou vestido por uma criatura hostil, a criatura deve ser bem sucedida num teste de Destreza para evitar a magia.","classes":["Bardo","Clérigo","Feiticeiro","Mago"],"favorite":false},{"id":176,"level":"3","name":"Luz do Dia","name_en":"Daylight","school":{"pt":"Evocação","style":"evocation"},"castingTime":"1 ação","range":"18 metros","components":"V, S","duration":"1 hora","description":"Uma esfera de luz, com 18 metros de raio, se espalha a partir de um ponto, à sua escolha, dentro do alcance. A esfera produz luz plena num raio de 18 metros e penumbra por 18 metros adicionais.</p><p> Se você escolher um ponto em um objeto que você esteja segurando, ou um que não esteja sendo vestido ou carregado, a luz brilha a partir do objeto e se move com ele. Cobrir completamente o objeto afetado com um objeto opaco, como uma vasilha ou um elmo, bloqueará a luz.</p><p> Se qualquer área dessa magia sobrepor uma área de escuridão criada por uma magia de 3° ou inferior, a magia que criou a escuridão será dissipada.","classes":["Clérigo","Druida","Feiticeiro","Paladino","Patrulheiro"],"favorite":false},{"id":219,"level":"4","name":"Malogro","name_en":"Blight","school":{"pt":"Necromancia","style":"necromancy"},"castingTime":"1 ação","range":"9 metros","components":"V, S","duration":"instantânea","description":"Energia necromântica inunda uma criatura, à sua escolha, que você possa ver dentro do alcance, drenando sua umidade e vitalidade. O alvo deve realizar um teste de resistência de Concentração. O alvo sofre 8d8 de dano necrótico se falhar no teste, ou metade desse dano se obtiver sucesso. Essa magia não surte efeito em mortos - vivos ou constructos.</p><p> Se você afetar uma criatura planta ou planta mágica, ela faz seu teste de resistência com desvantagem e a magia causa o máximo de dano a ela.</p><p> Se você afetar uma planta não - mágica que não seja uma criatura, como uma árvore ou arbusto, ele não faz um teste de resistência, ela simplesmente seca e morre.</p><p><strong> Em Níveis Superiores </strong>. Quando você conjurar essa magia usando um espaço de magia de 5° nível ou superior, o dano aumenta em 1d8 para cada nível do espaço acima do 4°.","classes":["Bruxo","Druida","Feiticeiro","Mago"],"favorite":false},{"id":314,"level":"7","name":"Mansão Magnífica de Mordenkainen","name_en":"Mordenkainen's Magnificent Mansion","school":{"pt":"Conjuração","style":"conjuration"},"castingTime":"1 minuto","range":"90 metros","components":"V, S, M","duration":"24 horas","material":"um portal em miniatura esculpido em marfim, um pedaço de mármore polido e uma pequena colher de prata, cada item valendo, no mínimo, 5 po","description":"Você conjura uma residência extradimensional, dentro do alcance, que permanece pela duração. Você escolhe onde sua única entrada é localizada. A entrada brilha discretamente e tem 1,5 metro de largura por 3 metros de altura. Você e qualquer criatura que você designou, quando conjurou a magia, pode entrar na residência extradimensional enquanto o portal permanecer aberto. Você pode abrir ou fechar o portal se estiver a até 9 metros dele. Enquanto estiver fechado, o portal é invisível.</p><p> Além do portal existe um magnifico salão com inúmeros aposentos. A atmosfera é limpa, fresca e morna.</p><p> Você pode criar qualquer projeto de piso que quiser, mas o espaço não pode exceder 50 cubos, cada cubo tendo 3 metros de cada lado. O local é mobiliado e decorado como você desejar. Ele contém comida suficiente para servir nove banquetes para até 100 pessoas. Uma equipe de 100 servos quase - transparentes atende todos que entrarem. Você decide a aparência visual dos servos e o vestuário deles. Eles são completamente obedientes as suas ordens. Cada servo pode realizar qualquer tarefa que um servo humano comum poderia fazer, mas eles não podem atacar ou realizar qualquer ação que poderia causar maleficio direto a outra criatura. Portanto, os servos podem buscar coisas, limpar, remendar, dobrar roupas, acender lareiras, servir comida, despejar vinho e assim por diante. Os servos podem ir a qualquer lugar na mansão, mas não podem deixá-la. Mobília e outros objetos criados por essa magia viram fumaça se forem removidos da mansão. Quando a magia acabar, qualquer criatura dentro do espaço extradimensional é expelida para o espaço vago mais próximo da entrada.","classes":["Bardo","Mago"],"favorite":false},{"id":177,"level":"3","name":"Manto do Cruzado","name_en":"Crusader's Mantle","school":{"pt":"Evocação","style":"evocation"},"castingTime":"1 ação","range":"pessoal","components":"V","concentration":"s","duration":"até 1 minuto","description":"Poder sagrado irradia de você em uma aura de 9 metros de raio, despertando a audácia nas criaturas amigáveis. Até o final da magia, a aura se move, se mantendo centrada em você. Enquanto estiver na aura, cada criatura não - hostil (incluindo você) causa 1d4 de dano radiante extra quando atingir com ataques com arma.","classes":["Paladino"],"favorite":false},{"id":259,"level":"5","name":"Mão de Bigby","name_en":"Bigby's Hand","school":{"pt":"Evocação","style":"evocation"},"castingTime":"1 ação","range":"36 metros","components":"V, S, M","concentration":"s","duration":"até 1 minuto","material":"uma casca de ovo e uma luva de couro de cobra","description":"Você cria uma mão Grande de energia cintilante e translucida em um espaço desocupado que você possa ver dentro do alcance. A mão permanece pela duração da magia e ela se move ao seu comando, imitando os movimentos da sua própria mão.</p><p> A mão é um objeto com CA 20 e pontos de vida igual ao seu máximo de pontos de vida. Se ela cair a 0 pontos de vida, a magia termina. Ela tem Força 26 (+8) e Destreza 10 (+0). A mão não preenche o espaço dela.</p><p> Quando você conjura essa magia você pode, com uma ação bônus, nos seus turnos subsequentes, mover a mão até 18 metros e então causar um dos seguintes efeitos com ela.</p><p><em><strong> Mão Esmagadora </strong></ em>. A mão tenta agarrar uma criatura Enorme ou menor a 1,5 metro dela. Você usa o valor de Força da mão para determinar o agarrão. Se o alvo for Médio ou menor, você terá vantagem no teste. Enquanto a mão estiver agarrando o alvo, você pode usar uma ação bônus para fazer a mão esmaga - lo. Quando o fizer, o alvo sofre dano de concussão igual a 2d6 + seu modificador de habilidade de conjuração.</p><p><em><strong> Mão Interposta </strong></ em>. A mão se interpõem entre você e uma criatura a sua escolha até você lhe dar um comando diferente. A mão se move para ficar entre você e o alvo, concedendo a você meia - cobertura contra o alvo. O alvo não pode se mover através do espaço da mão se o valor de Força dele for menor ou igual ao valor de Força da mão. Se o valor de Força dele for maior que o valor de Força da mão, o alvo pode se mover até você através do espaço da mão, mas aquele espaço será considerado terreno difícil para o alvo.</p><p><em><strong> Mão Poderosa </strong></ em>. A mão tenta empurrar uma criatura a 1,5 metro dela em uma direção a sua escolha. Realize um teste com a Força da mão, resistido por um teste de Força (Atletismo) do alvo. Se o alvo for Médio ou menor, você tem vantagem no teste. Se você for bem sucedido, a mão empurra o alvo até 1,5 metro mais uma quantidade de metros igual ao modificador da sua habilidade de conjuração multiplicado por 1,5. A mão se move com o alvo, permanecendo a 1,5 metro dele.</p><p><em><strong> Punho Cerrado </strong></ em>. A mão golpeia uma criatura ou objeto a 1,5 metro dela. Realize uma jogada de ataque corpo - a - corpo com magia para a mão usando suas estatísticas de jogo. Se atingir, o alvo sofre 4d8 de dano de energia.</p><p><strong> Em Níveis Superiores </strong>. Se você conjurar essa magia usando um espaço de magia de 6° nível ou superior, o dano da opção punho cerrado aumenta em 2d8 e o dano da mão esmagadora aumenta em 2d6 para cada nível do espaço acima do 5°.","classes":["Mago"],"favorite":false},{"id":65,"level":"1","name":"Mãos Flamejantes","name_en":"Burning Hands","school":{"pt":"Evocação","style":"evocation"},"castingTime":"1 ação","range":"pessoal","components":"V, S","duration":"instantânea","description":"Enquanto você mantiver suas mãos com os polegares juntos e os dedos abertos, uma fino leque de chamas emerge das pontas dos seus dedos erguidos. Cada criatura num cone de 4, 5 metros deve realizar um teste de resistência de Destreza. Uma criatura sofre 3d6 de dano de fogo se falhar no teste, ou metade desse dano se obtiver sucesso.</p><p> O fogo incendeia qualquer objeto inflamável na área que não esteja sendo vestido ou carregado.</p><p><strong> Em Níveis Superiores </strong>. Se você conjurar essa magia usando um espaço de magia de 2° nível ou superior, o dano aumenta em 1d6 para cada nível do espaço acima do 1°.","classes":["Feiticeiro","Mago"],"favorite":false},{"id":13,"level":"0","name":"Mãos Mágicas","name_en":"Mage Hands","school":{"pt":"Conjuração","style":"conjuration"},"castingTime":"1 ação","range":"9 metros","components":"V, S","duration":"1 minuto","description":"Uma mão espectral flutuante aparece num ponto, à sua escolha, dentro do alcance. A mão permanece pela duração ou até você dissipá-la com uma ação. A mão some se estiver a mais de 9 metros de você ou se você conjurar essa magia novamente.</p><p> Você pode usar sua ação para controlar a mão. Você pode usar a mão para manipular um objeto, abrir uma porta ou recipiente destrancado, guardar ou pegar um item de um recipiente aberto ou derramar o conteúdo de um frasco. Você pode mover a mão até 9 metros a cada vez que a usa.</p><p> A mão não pode atacar, ativar itens mágicos ou carregar mais de 5 quilos.","classes":["Bardo","Bruxo","Feiticeiro","Mago"],"favorite":false},{"id":123,"level":"2","name":"Marca da Punição","name_en":"Branding Smite","school":{"pt":"Evocação","style":"evocation"},"castingTime":"1 ação bônus","range":"pessoal","components":"V","concentration":"s","duration":"até 1 minuto","description":"Da próxima vez que você atingir uma criatura com um ataque com arma, antes do fim da magia, a arma cintilará com radiação astral quando você golpear. O ataque causa 2d6 de dano radiante extra ao alvo, que se torna visível, se estava invisível, e o alvo emite penumbra em um raio de 1,5 metro e não pode ficar invisível até a magia acabar.</p><p><strong> Em Níveis Superiores </strong>. Se você conjurar essa magia usando um espaço de magia de 3° nível ou superior, o dano extra aumenta em 1d6 para cada nível do espaço acima do 2°.","classes":["Paladino"],"favorite":false},{"id":66,"level":"1","name":"Marca do Caçador","name_en":"Hunter's Mark","school":{"pt":"Adivinhação","style":"divination"},"castingTime":"1 ação bônus","range":"27 metros","components":"V","concentration":"s","duration":"até 1 hora","description":"Você escolhe uma criatura que possa ver, dentro do alcance e a marca misticamente como sua presa. Até a magia acabar, você causa 1d6 de dano extra ao alvo sempre que você o atingir com um ataque com arma e você tem vantagem em quaisquer testes de Sabedoria (Percepção) ou Sabedoria (Sobrevivência) feitos para encontrá - la. Se o alvo cair a 0 pontos de vida antes da magia acabar, você pode usar uma ação bônus, no seu turno subsequente para marcar uma nova criatura.</p><p><strong> Em Níveis Superiores </strong>. Quando você conjurar essa magia usando um espaço de magia de 3° ou 4° nível, você poderá manter sua concentração na magia por até 8 horas. Quando você usar um espaço de magia de 5° nível ou superior, você poderá manter sua concentração na magia por até 24 horas.","classes":["Patrulheiro"],"favorite":false},{"id":178,"level":"3","name":"Medo","name_en":"Fear","school":{"pt":"Ilusão","style":"illusion"},"castingTime":"1 ação","range":"pessoal","components":"V, S, M","concentration":"s","duration":"até 1 minuto","material":"uma pena branca ou o coração de uma galinha","description":"Você projeta uma imagem fantasmagórica dos piores medos de uma criatura. Cada criatura num cone de 9 metros, deve ser bem sucedida num teste de resistência de Sabedoria ou largara o que quer que esteja segurando e ficará amedrontada pela duração.</p><p> Enquanto estiver amedrontada por essa magia, uma criatura deve usar a ação de Disparada e fugir de você pela rota mais curta disponível em cada um dos turnos dela, a não ser que não haja lugar para onde se mover. Se a criatura terminar o turno dela em um local onde ela não tenha linha de visão sua, a criatura pode realizar um teste de resistência de Sabedoria. Se obtiver sucesso, a magia termina naquela criatura.","classes":["Bardo","Bruxo","Feiticeiro","Mago"],"favorite":false},{"id":124,"level":"2","name":"Mensageiro Animal","name_en":"Animal Messenger","ritual":"s","school":{"pt":"Encantamento","style":"enchantment"},"castingTime":"1 ação","range":"9 metros","components":"V, S, M","duration":"24 horas","material":"um punhado de comida","description":"Através dessa magia, você usa um animal para entregar uma mensagem. Escolha uma besta Miúda que você possa ver dentro do alcance, como um esquilo, um gaio - azul ou um morcego. Você especifica um local, que você já deve ter visitado, e um remetente com uma descrição geral, como“ um homem ou mulher vestido em um uniforme da guarda da cidade” ou“ um anão ruivo vestindo um chapéu pontudo”. Você também fala uma mensagem com até vinte e cindo palavras. A besta alvo viaja pela duração da magia para o local especifico, cobrindo 75 quilômetros em 24 horas para um mensageiro voador ou 37, 5 quilômetros para outros animais.</p><p> Quando o mensageiro chegar, ele entrega sua mensagem para a criatura que você descreveu, repetindo o som da sua voz. O mensageiro fala apenas para uma criatura que tenha uma descrição compatível com a que ele recebeu. Se o mensageiro não alcançar o destino antes do fim da magia, a mensagem é perdida e a besta faz seu caminho de volta para onde você conjurou a magia.</p><p><strong> Em Níveis Superiores </strong>. Se você conjurar essa magia usando um espaço de magia de 3° nível ou superior, a duração da magia aumenta em 48 horas para cada nível do espaço acima do 2°.","classes":["Bardo","Druida","Patrulheiro"],"favorite":false},{"id":14,"level":"0","name":"Mensagem","name_en":"Message","school":{"pt":"Transmutação","style":"transmutation"},"castingTime":"1 ação","range":"36 metros","components":"V, S, M","duration":"1 rodada","material":"um pedaço curto de fio de cobre","description":"Você aponta seu dedo para uma criatura dentro do alcance e sussurra uma mensagem. O alvo (e apenas ele) ouvi a mensagem e pode responder com um sussurro que apenas você pode ouvir.</p><p> Você pode conjurar essa magia através de objetos sólidos se você tiver familiaridade com o alvo. Silêncio mágico, 30 centímetros de rocha, 2, 5 centímetros de metal comum, uma fina camada de chumbo, ou 90 centímetros de madeira ou terra bloqueiam a magia. A magia não precisa seguir uma linha reta e pode viajar livremente, dobrando esquinas ou através de aberturas.","classes":["Bardo","Feiticeiro","Mago"],"favorite":false},{"id":179,"level":"3","name":"Mesclar-se Às Rochas","name_en":"Meld Into Stone","ritual":"s","school":{"pt":"Transmutação","style":"transmutation"},"castingTime":"1 ação","range":"toque","components":"V, S","duration":"8 horas","description":"Você entra em um objeto ou superfície rochoso, grande o suficiente para comportar seu corpo inteiro, mesclando - se, junto com todo o equipamento que você esteja carregando, com a rocha pela duração. Usando seu movimento, você entra na rocha num ponto que você possa tocar. Nada da sua presença ficará visível ou, de outra forma, detectável por sentidos não - mágicos.</p><p> Enquanto estiver imerso na rocha, você não pode ver o que está ocorrendo do lado de fora e, qualquer teste de Sabedoria (Percepção) que você fizer para ouvir os sons do lado de fora são feitos com desvantagem. Você continua consciente do tempo transcorrido e pode conjurar magias em você enquanto estiver imerso na rocha. Você pode usar seu movimento para sair da rocha onde você entrou, o que termina a magia. Do contrário, você não pode se mover.</p><p> Pequenos danos físicos a rocha não ferem você, mas destruição parcial ou uma mudança no formato (fazendo que você já não caiba mais dentro dela) expelirá você causando - lhe 6d6 de dano de concussão. A destruição completa da rocha (ou transmutação em uma substância diferente) expelirá você causando - lhe 50 de dano de concussão. Se você for expelido, você ficará caído no chão em um espaço desocupado perto de onde você entrou da primeira vez.","classes":["Clérigo","Druida"],"favorite":false},{"id":220,"level":"4","name":"Metamorfose","name_en":"Polymorph","school":{"pt":"Transmutação","style":"transmutation"},"castingTime":"1 ação","range":"18 metros","components":"V, S, M","concentration":"s","duration":"até 1 hora","material":"um casulo de lagarta","description":"Essa magia transforma uma criatura que você possa ver, dentro do alcance, em uma nova forma. Uma criatura involuntária deve realizar um teste de resistência de Sabedoria para evitar o efeito. Um metamorfo obtém sucesso automaticamente nesse teste de resistência.</p><p> A transformação permanece pela duração, ou até o alvo cair a 0 pontos de vida ou morrer. A nova forma pode ser qualquer besta a qual o nível de desafio seja igual ou menor que o do alvo (ou o nível do alvo, se ele não possuir um nível de desafio). As estatísticas de jogo do alvo, incluindo seus valores de habilidades mentais, são substituídas pelas estatísticas da besta escolhida. Ele mantém sua tendência e personalidade.</p><p> O alvo assume os pontos de vida da sua nova forma. Quando ele reverter a sua forma normal, a criatura retorna à quantidade de pontos de vida que ela tinha antes da transformação. Se ela reverter como resultado de ter caído a 0 pontos de vida, qualquer dano excedente é recebido pela sua forma normal. Contato que o dano excedente não reduza os pontos de vida da forma normal da criatura a 0, ela não cairá inconsciente. Essa magia não pode afetar um alvo com 0 pontos de vida.</p><p> A criatura é limitada em suas ações pela natureza da sua nova forma e ela não pode falar, conjurar magias ou realizar qualquer outra ação que precise de mãos ou de vocalização.</p><p> O equipamento do alvo mescla - se a sua nova forma. O alvo não pode ativar, empunhar ou, de outra forma, se beneficiar de qualquer de seus equipamentos.","classes":["Bardo","Druida","Feiticeiro","Mago"],"favorite":false},{"id":351,"level":"9","name":"Metamorfose Verdadeira","name_en":"True Polymorph","school":{"pt":"Transmutação","style":"transmutation"},"castingTime":"1 ação","range":"9 metros","components":"V, S, M","concentration":"s","duration":"até 1 hora","material":"uma gota de mercúrio, uma porção de goma arábica e um pouco de fumaça","description":"Escolha uma criatura ou objeto não - mágico que você possa ver, dentro do alcance. Você transforma a criatura em uma criatura diferente, a criatura em um objeto ou o objeto em uma criatura (o objeto não pode nem estar sendo vestido nem carregado por outra criatura). A transformação permanece pela duração ou até o alvo cair a 0 pontos de vida ou morrer. Se você se concentrar nessa magia por toda a duração, a transformação será permanente.</p><p> Metamorfos não são afetados por essa magia. Uma criatura involuntária pode realizar um teste de resistência de Constituição e, se for bem sucedida, não será afetada por essa magia.</p><p><em><strong> Criatura em Criatura </strong></ em>. Se você transformar uma criatura em outro tipo de criatura, a nova forma pode ser de qualquer tipo que você desejar, contanto que o nível de desafio seja igual ou menor que o do alvo (ou o nível dele, caso o alvo não possua nível de desafio). As estatísticas de jogo do alvo, incluindo seus valores de habilidades mentais, são substituídas pelas estatísticas da nova forma. Ele mantém sua tendência e personalidade.</p><p> O alvo assume os pontos de vida da sua nova forma e, quando ela reverter a sua forma normal, a criatura retorna à quantidade de pontos de vida que ela tinha antes da transformação. Se ela reverter como resultado de ter caído a 0 pontos de vida, qualquer dano excedente é recebido pela sua forma normal. Contato que o dano excedente não reduza os pontos de vida da forma normal da criatura a 0, ela não cairá inconsciente. Essa magia não pode afetar um alvo com 0 pontos de vida.</p><p> A criatura é limitada em suas ações pela natureza da sua nova forma e ela não pode falar, conjurar magias ou realizar qualquer outra ação que precise de mãos ou de vocalização, a não ser que a nova forma seja capaz de tais ações.</p><p> O equipamento do alvo mescla - se a sua nova forma. O alvo não pode ativar, empunhar ou, de outra forma, se beneficiar de qualquer de seus equipamentos.</p><p><em><strong> Objeto em Criatura </strong></ em>. Você pode transformar um objeto em um tipo de criatura, contanto que o tamanho da criatura não seja maior que o tamanho do objeto e, o nível de desafio da criatura será 9 ou menor. A criatura é amigável a você e aos seus companheiros. Ela age em cada um dos seus turnos. Você decide qual ação ela realizará e como ela se move. O Mestre tem as estatísticas da criatura e resolve todas as ações e movimentos dela.</p><p> Se a magia se tornar permanente, você não terá mais controle sobre a criatura. Ele pode continuar amigável a você, dependendo da forma como você a tratou.</p><p><em><strong> Criatura em Objeto </strong></ em>. Se você transformar uma criatura em um objeto, ela se transformará, junto com tudo que estiver vestindo ou carregando, nessa forma. As estatísticas da criatura tornam - se as do objeto e a criatura não se lembrará do tempo que passou nessa forma, depois da magia acabar e ela retornar a sua forma normal.","classes":["Bardo","Bruxo","Mago"],"favorite":false},{"id":315,"level":"7","name":"Miragem","name_en":"Mirage Arcane","school":{"pt":"Ilusão","style":"illusion"},"castingTime":"10 minutos","range":"visão","components":"V, S","duration":"10 dias","description":"Você faz um terreno em uma área de até 1,5 quilômetro quadrados pareça, soe, cheire e, até, sinta com outro tipo de terreno natural. Os formatos gerais do terreno permanecem os mesmos, no entanto. Campos abertos ou uma estrada podem ser modificados para se assemelharem a um pântano, colina, fenda ou algum outro tipo de terreno difícil ou intransponível. Uma lagoa pode ser modificada para se parecer com um prado, um precipício com um declive suave ou um barranco pedregoso com uma estrada larga e lisa.</p><p> Similarmente, você pode alterar a aparência de estruturas ou adicioná-las onde nenhuma existia. A magia não disfarça, esconde ou adiciona criaturas.</p><p> A ilusão inclui elementos audíveis, visuais, táteis e olfativos, portanto, ela pode transformar solo limpo em terreno difícil (ou vice - versa) ou, de outra forma, impedir o movimento através da área. Qualquer porção de terreno ilusório (como uma rocha ou galho) que seja removida da área da magia desaparece imediatamente.</p><p> Criaturas com visão verdadeira podem ver através da ilusão a verdadeira forma do terreno, porém, todos os outros elementos da ilusão permanecem, então, mesmo que a criatura esteja ciente da presença da ilusão, ela ainda interage fisicamente com a ilusão.","classes":["Bardo","Druida","Mago"],"favorite":false},{"id":260,"level":"5","name":"Missão","name_en":"Geas","school":{"pt":"Encantamento","style":"enchantment"},"castingTime":"1 minuto","range":"18 metros","components":"V","duration":"30 dias","description":"Você impõe um comando mágico a uma criatura que você possa ver, dentro do alcance, forçando - a a fazer algum serviço ou reprimindo - a por alguma ação ou curso de atividade, como você decidir. Se a criatura puder compreender você, ela deve ser bem sucedida num teste de resistência de Sabedoria ou ficará enfeitiçada por você pela duração. Enquanto a criatura estiver enfeitiçada por você, ela sofrerá 5d6 de dano psíquico toda vez que ela agir de maneira diretamente contrária às suas instruções, mas não mais de uma vez por dia. Uma criatura que não puder compreender você não é afetada por essa magia.</p><p> Você pode emitir qualquer comando que escolher, exceto uma atividade que resulte em morte certa. Se você emitir um comando suicida, a magia termina.</p><p> Você pode terminar a magia prematuramente usando uma ação para dissipá-la. As magias <em> remover maldição </em>, <em> restauração maior </em> ou <em> desejo </em> também podem terminá-la.</p><p><strong> Em Níveis Superiores </strong>. Quando você conjurar essa magia usando um espaço de magia de 7° ou 8° nível, a duração será 1 ano. Quando você conjurar essa magia usando um espaço de magia de 9° nível, a magia dura até ser terminada por uma das magias mencionadas acima.","classes":["Bardo","Clérigo","Druida","Mago","Paladino"],"favorite":false},{"id":67,"level":"1","name":"Mísseis Mágicos","name_en":"Magic Missile","school":{"pt":"Evocação","style":"evocation"},"castingTime":"1 ação","range":"36 metros","components":"V, S","duration":"instantânea","description":"Você cria três dardos brilhantes de energia mística. Cada dardo atinge uma criatura, à sua escolha, que você possa ver, dentro do alcance. Um dardo causa 1d4 + 1 de dano de energia ao alvo. Todos os dardos atingem simultaneamente e você pode direciona - los para atingir uma criatura ou várias.</p><p><strong> Em Níveis Superiores </strong>. Quando você conjurar essa magia usando um espaço de magia de 2° nível ou superior, a magia cria um dardo adicional para cada nível do espaço acima do 1°.","classes":["Feiticeiro","Mago"],"favorite":false},{"id":261,"level":"5","name":"Modificar Memória","name_en":"Modify Memory","school":{"pt":"Encantamento","style":"enchantment"},"castingTime":"1 ação","range":"9 metros","components":"V, S","concentration":"s","duration":"até 1 minuto","description":"Você tenta modelar as memórias de outra criatura. Uma criatura que você possa ver, deve realizar um teste de resistência de Sabedoria. Se você estiver lutando com a criatura, ela terá vantagem no teste de resistência. Se falhar na resistência, o alvo fica enfeitiçado por você pela duração. O alvo enfeitiçado está incapacitado e não sabe o que está acontecendo seu redor, apesar de ainda poder ouvir você. Se ele sofrer qualquer dano ou for alvo de outra magia, essa magia acaba, e nenhuma das memórias do alvo é modificada.</p><p> Enquanto esse feitiço durar, você pode afetar a memória sobre um evento que o alvo participou nas últimas 24 horas e que não tenha durado mais de 10 minutos. Você pode, permanentemente, eliminar todas as memórias desse evento, permitir que o alvo relembre do evento com perfeita clareza e riqueza de detalhes, mudar sua memória sobre os detalhes do evento ou criar uma memória de outro evento qualquer.</p><p> Você deve falar ao alvo para descrever como sua memória é afetada e ele deve ser capaz de compreender seu idioma para que as memórias modificadas se enraízem. A mente dele preenche qualquer lacuna nos detalhes da sua descrição. Se a magia terminar antes de você ter finalizado a descrição das memórias modificadas, a memória da criatura não será alterada. Do contrário, as memórias modificadas tomam lugar quando a magia acabar.</p><p> Uma memória modificada não afeta, necessariamente, como uma criatura se comporta, particularmente se a memória contradiz as inclinações, tendência ou crenças naturais da criatura. Uma modificação ilógica na memória, como implantar uma memória de como a criatura gosta de se encharcar de ácido, é repudiada, talvez como um sonho ruim. O Mestre pode considerar uma modificação na memória muito absurda para afetar uma criatura de uma forma significativa.</p><p> Uma magia <em> remover maldição </em> ou <em> restauração maior </em>, conjurada no alvo, restaura a verdadeira memória da criatura.</p><p><strong> Em Níveis Superiores </strong>. Se você conjurar essa magia usando um espaço de magia de 6° nível ou superior, você pode alterar a memória do alvo de um evento que aconteceu a até 7 dias atrás (6° nível), 30 dias atrás (7° nível), 1 ano atrás (8° nível) ou em qualquer momento do passado da criatura (9° nível).","classes":["Bardo","Mago"],"favorite":false},{"id":221,"level":"4","name":"Moldar Rochas","name_en":"Stone Shape","school":{"pt":"Transmutação","style":"transmutation"},"castingTime":"1 ação","range":"toque","components":"V, S, M","duration":"instantânea","material":"barro mole, que deve ser trabalhado aproximadamente com a forma desejada para o objeto de pedra","description":"Você toca um objeto de pedra de tamanho Médio ou menor, ou uma seção de rocha com não mais de 1,5 metro em qualquer dimensão e modela - a em qualquer forma que sirva aos seus propósitos. Então, por exemplo, você poderia modelar uma pedra grande em uma arma, ídolo ou caixão, ou fazer uma pequena passagem através de um muro, contanto que o muro não tenha mais de 1,5 metro de espessura. Você poderia, também, modelar uma porta de pedra ou sua moldura para selar a porta. O objeto que você cria pode ter até duas dobradiças e um trinco, mas detalhes mecânicos mais complexos não são possíveis.","classes":["Clérigo","Druida","Mago"],"favorite":false},{"id":180,"level":"3","name":"Montaria Fantasmagórica","name_en":"Phantom Steed","ritual":"s","school":{"pt":"Ilusão","style":"illusion"},"castingTime":"1 minuto","range":"9 metros","components":"V, S","duration":"1 hora","description":"Uma criatura Grande, quase - real, similar a um cavalo, aparece no solo em um espaço desocupado, à sua escolha, dentro do alcance. Você decide a aparência da criatura, mas ela é equipada com sela, estribo e arreio. Qualquer equipamento criado por essa magia vira fumaça caso se afaste a mais de 3 metros da montaria.</p><p> Pela duração, você ou a criatura que você escolher, pode cavalgar a montaria. A criatura usa as estatísticas de um cavalo de montaria, exceto por seu deslocamento ser de 30 metros e poder viajar 15 quilômetros em uma hora, ou 20 quilômetros em um ritmo rápido. Quando a magia acaba, a montaria desaparece gradualmente, dando ao cavaleiro 1 minuto para desmontar. A magia acaba se você usar uma ação para dissipá-la ou se a montaria sofrer qualquer dano.","classes":["Mago"],"favorite":false},{"id":295,"level":"6","name":"Mover Terra","name_en":"Move Earth","school":{"pt":"Transmutação","style":"transmutation"},"castingTime":"1 ação","range":"36 metros","components":"V, S, M","concentration":"s","duration":"até 2 horas","material":"uma lâmina de ferro e uma pequena sacola contendo uma mistura de solos – argila, barro e areia","description":"Escolha uma área de terreno não maior que 12 metros de lado, dentro do alcance. Você pode remodelar terra, areia ou barro na área da maneira que quiser, pera duração. Você pode erguer ou abaixar a elevação da área, criar ou preencher valas, levantar ou deitar um muro ou formar uma coluna. A extensão de tais mudanças não pode exceder metade da maior dimensão da área. Portanto, se você afetar um quadrado de 12 metros, você poderá criar um pilar de até 6 metros de altura, erguer ou abaixar a elevação do quadrado em até 6 metros ou cavar uma vala de até 6 metros de profundidade e assim por diante. Leva 10 minutos para completar essas modificações.</p><p> Ao final de cada 10 minutos que você gastar se concentrando nessa magia, você pode escolher uma nova área de terreno para afetar.</p><p> Devido às transformações no terreno ocorrerem lentamente, as criaturas na área normalmente não podem ficar presas ou sofrer dano pela movimentação do solo.</p><p> Essa magia pode manipular rocha natural ou construções de pedra. Pedra e estruturas deslocam - se para acomodar o novo terreno. Se a forma pela qual você modela o terreno poderia tornar uma estrutura instável, ela poderá desmoronar.</p><p> Similarmente, essa magia não afeta diretamente o crescimento da vegetação. A terra movida carrega quaisquer plantas no caminho junto com ela.","classes":["Druida","Feiticeiro","Mago"],"favorite":false},{"id":222,"level":"4","name":"Movimentação Livre","name_en":"Freedom Of Movement","school":{"pt":"Abjuração","style":"abjuration"},"castingTime":"1 ação","range":"toque","components":"V, S, M","duration":"1 hora","material":"uma fita de couro, enrolada no braço ou apêndice similar","description":"Você toca uma criatura voluntária. Pela duração, os movimentos do alvo não são afetados por terreno difícil e magias e outros efeitos mágicos também não podem reduzir o deslocamento do alvo ou fazer com que o alvo fique paralisado ou impedido.</p><p> O alvo também pode gastar 1,5 metro de deslocamento para escapar, automaticamente, de impedimentos não - mágicos, como algemas ou o agarrão de uma criatura. Finalmente, estar submerso não impõe penalidades no deslocamento ou ataques do alvo.","classes":["Bardo","Clérigo","Druida","Patrulheiro"],"favorite":false},{"id":262,"level":"5","name":"Muralha de Energia","name_en":"Wall Of Force","school":{"pt":"Evocação","style":"evocation"},"castingTime":"1 ação","range":"36 metros","components":"V, S, M","concentration":"s","duration":"até 10 minutos","material":"um pouco de pó feito de uma gema transparente esmagada","description":"Uma muralha invisível de energia aparece do nada num ponto, à sua escolha, dentro do alcance. A muralha aparece em qualquer orientação que você escolher, como uma barreira horizontal ou vertical ou em uma angulação. Ela pode estar flutuando no ar ou apoiada em uma superfície sólida. Você pode moldá-la em uma cúpula hemisférica ou uma esfera com um raio de até dez painéis de 3 metros por 3 metros. Cada painel deve ser contíguo com outro painel. Em qualquer formato, a muralha terá 0, 6 centímetros de espessura. Ela permanece pela duração. Se a muralha passar pelo espaço ocupado por uma criatura quando ela surgir, a criatura será empurrada para um dos lados da muralha (você escolhe qual lado).</p><p> Nada pode passar fisicamente através da muralha. Ela é imune a todos os danos e não pode ser dissipada por <em> dissipar magia </em>. A magia <em> desintegrar </em> destrói a muralha instantaneamente, no entanto. A muralha também se estende ao Plano Etéreo, bloqueando a viagem etérea através dela.","classes":["Mago"],"favorite":false},{"id":296,"level":"6","name":"Muralha de Espinhos","name_en":"Wall Of Thorns","school":{"pt":"Conjuração","style":"conjuration"},"castingTime":"1 ação","range":"36 metros","components":"V, S, M","concentration":"s","duration":"até 10 minutos","material":"um punhado de espinhos","description":"Você cria uma muralha de arbustos robustos, flexíveis, emaranhados e eriçados com espinhos pontudos. A muralha aparece, dentro do alcance, em uma superfície sólida e permanece pela duração. Você escolher fazer a muralha com até 18 metros de comprimento, 3 metros de altura e 1,5 metro de espessura ou um círculo com 6 metros de diâmetro e até 6 metros de altura com 1,5 metro de espessura. A muralha bloqueia a visão.</p><p> Quando a muralha aparece, cada criatura dentro da área deve realizar um teste de resistência de Destreza. Se falhar na resistência, uma criatura sofrerá 7d8 de dano perfurante ou metade desse dano se obtiver sucesso.</p><p> Uma criatura pode se mover através da muralha, embora lentamente e dolorosamente. Para cada 1,5 metro que a criatura atravesse da muralha, ela deve gastar 6 metros de movimento. Além disso, a primeira vez que a criatura entrar na muralha num turno ou termina o turno nela, ela deve fazer um teste de resistência de Destreza. Ela sofre 7d8 de dano cortante se falhar na resistência ou metade desse dano se obtiver sucesso.</p><p><strong> Em Níveis Superiores </strong>. Quando você conjurar essa magia usando um espaço de magia de 7° nível ou superior, ambos os tipos de dano aumentam em 1d8 para cada nível do espaço acima do 6°.","classes":["Druida"],"favorite":false},{"id":223,"level":"4","name":"Muralha de Fogo","name_en":"Wall Of Fire","school":{"pt":"Evocação","style":"evocation"},"castingTime":"1 ação","range":"36 metros","components":"V, S, M","concentration":"s","duration":"até 1 minuto","material":"um pequeno pedaço de fósforo","description":"Você cria uma muralha de fogo numa superfície sólida dentro do alcance. Você pode fazer uma muralha de até 18 metros de comprimento, 6 metros de altura e 30 centímetros de espessura ou uma muralha anelar de até 6 metros de diâmetro, 6 metros de altura e 30 centímetros de espessura. A muralha é opaca e permanece pela duração.</p><p> Quando a muralha aparece, cada criatura dentro da área dela deve realizar um teste de resistência de Destreza. Se falhar na resistência, uma criatura sofrerá 5d8 de dano, ou metade desse dano se passar na resistência.</p><p> Um lado da muralha, escolhido por você no momento da conjuração da magia, causa 5d8 de dano de fogo a cada criatura que terminar o turno dela a até 3 metros desse lado ou dentro da muralha. Uma criatura sofre o mesmo dano quando entra na muralha pela primeira vez num turno ou termina seu turno nela. O outro lado da muralha não causa dano algum.</p><p><strong> Em Níveis Superiores </strong>. Quando você conjurar essa magia usando um espaço de magia de 5° nível ou superior, o dano aumenta em 1d8 para cada nível do espaço acima do 4°.","classes":["Druida","Feiticeiro","Mago"],"favorite":false},{"id":297,"level":"6","name":"Muralha de Gelo","name_en":"Wall Of Ice","school":{"pt":"Evocação","style":"evocation"},"castingTime":"1 ação","range":"36 metros","components":"V, S, M","concentration":"s","duration":"até 10 minutos","material":"um pequeno pedaço de quartzo","description":"Você cria uma muralha de gelo numa superfície sólida dentro do alcance. Você pode moldá-la em uma cúpula hemisférica ou uma esfera com um raio de até dez painéis de 3 metros por 3 metros. Cada painel deve ser contíguo com outro painel. Em qualquer formato, a muralha terá 0, 6 centímetros de espessura. Ela permanece pela duração.</p><p> Se a muralha passar pelo espaço ocupado por uma criatura quando ela surgir, a criatura na área será empurrada para um dos lados da muralha (você escolhe qual lado) e deve realizar um teste de resistência de Destreza. Se falhar na resistência, a criatura sofrerá 10d6 de dano de frio ou metade desse dano se passar na resistência.</p><p> A muralha é um objeto que pode ser danificado e então, partido. Ela tem CA 12, 30 pontos de vida por seção de 3 metros e é vulnerável a dano de fogo. Reduzir os pontos de vida de uma seção de 3 metros da muralha a 0 destruirá essa seção, deixando para trás uma camada de ar gelado no espaço ocupado pela muralha. Uma criatura que atravesse a camada de ar gelado pela primeira vez num turno, deve realizar um teste de <br/> resistência de Constituição. Essa criatura sofrerá 5d6 de dano de frio se fracassar na resistência, ou metade desse dano se obtiver sucesso.</p><p><strong> Em Níveis Superiores </strong>. Quando você conjurar essa magia usando um espaço de magia de 7° nível ou superior, o dano causado quando ela aparece aumenta em 2d6 e o dano por atravessar através da camada de ar gelado aumenta em 1d6 para cada nível do espaço acima do 6°.","classes":["Mago"],"favorite":false},{"id":263,"level":"5","name":"Muralha de Pedra","name_en":"Wall Of Stone","school":{"pt":"Conjuração","style":"conjuration"},"castingTime":"1 ação","range":"36 metros","components":"V, S, M","concentration":"s","duration":"até 10 minutos","material":"um pequeno bloco de granito","description":"Uma muralha não - mágica de rocha sólida surge do nada num ponto, à sua escolha, dentro do alcance. A muralha tem 15 centímetros de espessura e é composta por dez painéis de 3 metros por 3 metros. Cada painel deve ser contíguo com, pelo menos, outro painel. Alternativamente, você pode criar painéis de 3 metros por 6 metros com apenas 7, 5 centímetros de espessura.</p><p> Se a muralha passar pelo espaço ocupado por uma criatura quando ela surgir, a criatura será empurrada para um dos lados da muralha (você escolhe qual lado). Se a criatura fosse ser rodeada por todos os lados da muralha (ou pela muralha e outra superfície sólida), a criatura pode realizar um teste de resistência de Destreza. Se obtiver sucesso, ela pode usar sua reação para se mover até seu deslocamento, assim não ficando mais cercada pela muralha.</p><p> A muralha pode ter qualquer formato que você desejar, no entanto, ela não pode ocupar o mesmo espaço de uma criatura ou objeto. A muralha não precisa ser vertical ou se apoiar em qualquer fundação estável. Ela deve, no entanto, se fundir e estar solidamente suportada por rocha existente. Então, você pode usar essa magia para criar uma ponte sobre um abismo ou criar uma rampa.</p><p> Se você criar um vão com mais de 6 metros de comprimento, você deve reduzir o tamanho de cada painel à metade para criar suportes. Você pode moldar grosseiramente a parede para criar merlões, ameias e assim por diante.</p><p> A muralha é um objeto feito de pedra que pode ser danificado e então, partido. Cada painel tem CA 15 e 30 pontos de vida para cada 2, 5 centímetros de espessura. Reduzir os pontos de vida de um painel a 0, o destruirá e pode fazer painéis conectados desmoronarem, à critério do Mestre.</p><p> Se você mantiver sua concentração nessa magia por toda a duração, a muralha se tornará permanente e não poderá ser dissipada. Do contrário, a muralha desaparece quando a magia acabar.","classes":["Druida","Feiticeiro","Mago"],"favorite":false},{"id":181,"level":"3","name":"Muralha de Vento","name_en":"Wind Wall","school":{"pt":"Evocação","style":"evocation"},"castingTime":"1 ação","range":"36 metros","components":"V, S, M","concentration":"s","duration":"até 1 minuto","material":"um leque minúsculo e uma pena de origem exótica","description":"Uma muralha de ventos fortes ergue - se do chão num ponto, à sua escolha, dentro do alcance. Você pode fazer a muralha ter até 15 metros de comprimento, 4, 5 metros de altura e 30 centímetros de espessura. Você pode moldar a muralha em qualquer forma que desejar, contanto que ela faça um caminho contínuo pelo solo. A muralha permanece pela duração.</p><p> Quando a muralha aparece, cada criatura dentro da área dela deve realizar um teste de resistência de Força. Uma criatura sofre 3d8 de dano de concussão se falhar na resistência, ou metade desse dano se obtiver sucesso.</p><p> Os ventos fortes mantém névoa, fumaça e outros gases afastados. Criaturas ou objetos voadores Pequenos ou menores, não podem atravessar a muralha. Materiais leves e soltos trazidos para a muralha são arremessados para cima. Flechas, virotes e outros projéteis ordinários disparados contra alvos além da muralha são defletidos para cima e erram automaticamente. (Pedras arremessadas por gigantes ou armas de cerco e projéteis similares, não são afetados.) As criaturas em forma gasosa não podem atravessá-la.","classes":["Druida","Patrulheiro"],"favorite":false},{"id":352,"level":"9","name":"Muralha Prismática","name_en":"Prismatic Wall","school":{"pt":"Abjuração","style":"abjuration"},"castingTime":"1 ação","range":"18 metros","components":"V, S","duration":"10 minutos","description":"Uma plano cintilante multicolorido de luzes forma uma parece vertical opaca– de até 27 metros de comprimento, 9 metros de altura e 2, 5 centímetros de espessura– centrada num ponto que você possa ver, dentro do alcance. Alternativamente, você pode moldar a muralha numa esfera de 9 metros de diâmetro centrada num ponto, à sua escolha, dentro do alcance. A muralha permanece no lugar pela duração. Se você posicionar a muralha de forma que ela passaria através do espaço ocupado por uma criatura, a magia falha e sua ação e o espaço de magia são desperdiçados.</p><p> A muralha emite luz plena num raio de 30 metros e penumbra por 30 metros adicionais. Você e as criaturas designadas, no momento que você conjurou a magia, podem passar através e permanecer perto da muralha sem se ferirem. Se outra criatura que puder ver a muralha se aproximar mais de 6 metros dela ou começar seu turno lá, a criatura deve realizar um teste de resistência de Constituição ou ficará cega por 1 minuto.</p><p> A muralha consiste em sete camadas, cada uma de uma cor diferente. Quando uma criatura tenta tocar ou passar através da muralha, ela atravessa uma camada de cada vez, até atravessar todas as camadas da muralha. À medida que ela passa ou toca cada camada, a criatura realiza um teste de resistência de Destreza ou será afetada pelas propriedades daquela camada, como descrito abaixo.</p><p> A muralha pode ser destruída, também, uma camada por vez, em ordem de vermelho à violeta, pelos meios especificados em cada camada. Quando uma camada é destruída, ela permanece assim pela duração da magia. Um <em> bastão do cancelamento </em> destrói uma <em> muralha prismática </em>, mas um <em> campo antimagia </em> não produz efeito nela.</p><p><em><strong> 1. Vermelho </strong></ em>. O alvo sofre 10d6 de dano de fogo se falhar na resistência ou metade desse dano se obtiver sucesso. Enquanto essa camada estiver no lugar, ataques à distância não - mágicos não podem atravessar a muralha. A camada pode ser destruída causando, pelo menos, 25 de dano de frio a ela.</p><p><em><strong> 2. Laranja </strong></ em>. O alvo sofre 10d6 de dano de ácido se falhar na resistência ou metade desse dano se obtiver sucesso. Enquanto essa camada estiver no lugar, ataques à distância mágicos não podem atravessar a muralha. A camada pode ser destruída por um vento forte.</p><p><em><strong> 3. Amarelo </strong></ em>. O alvo sofre 10d6 de dano elétrico se falhar na resistência ou metade desse dano se obtiver sucesso. A camada pode ser destruída causando, pelo menos, 60 de dano de energia a ela.</p><p><em><strong> 4. Verde </strong></ em>. O alvo sofre 10d6 de dano de veneno se falhar na resistência ou metade desse dano se obtiver sucesso. A magia <em> criar passagem </em> ou outra magia de nível igual ou superior que possam abrir um portal em uma superfície sólida, destroem essa camada.</p><p><em><strong> 5. Azul </strong></ em>. O alvo sofre 10d6 de dano de frio se falhar na resistência ou metade desse dano se obtiver sucesso. A camada pode ser destruída causando, pelo menos, 25 de dano de fogo a ela.</p><p><em><strong> 6. Anil </strong></ em>. Se falhar na resistência, o alvo ficará impedido. Ele deve então, fazer um teste de resistência de Constituição ao final de cada um dos turnos dele. Se obtiver sucesso três vezes, a magia termina. Se falhar na resistência três vezes, ela se torna pedra é afetada pela condição petrificado. Os sucessos e falhas não precisam ser consecutivos, anote ambos os resultados até o alvo acumular três de mesmo tipo.</p><p> Enquanto essa camada estiver no lugar, magias não podem ser conjuradas através da muralha. A camada pode ser destruída por luz plena emitida pela magia <em> luz do dia </em> ou uma magia similar de nível equivalente ou superior.</p><p><em><strong> 7. Violeta </strong></ em>. Se falhar na resistência, o alvo ficará cego. Ele deve realizar um teste de resistência de Sabedoria no início do seu próximo turno. Um sucesso na resistência acaba com a cegueira. Se falhar na resistência, a criatura é transportada para outro plano de existência, escolhido pelo Mestre, e não estará mais cego. (Tipicamente, uma criatura que esteja em um plano que não seja o seu plano natal é banida para lá, enquanto que outras criaturas geralmente são enviadas para os Planos Astral ou Etéreo.) Essa camada é destruída pela magia <em> dissipar magia </em> ou por uma magia similar de nível equivalente ou superior que possa acabar com magias e efeitos mágicos.</p> ","classes":["Mago"],"favorite":false},{"id":182,"level":"3","name":"Nevasca","name_en":"Sleet Storm","school":{"pt":"Conjuração","style":"conjuration"},"castingTime":"1 ação","range":"45 metros","components":"V, S, M","concentration":"s","duration":"até 1 minuto","material":"um punhado de poeira e algumas gotas de água","description":"Até a magia acabar, uma chuva congelante e neve caem num cilindro de 6 metros de altura por 12 metros de raio, centrado num ponto, à sua escolha, dentro do alcance. A área é de escuridão densa e, chamas expostas na área são extintas.</p><p> O solo na área é coberto por gelo escorregadio, tornando - o terreno difícil. Quando uma criatura entrar na área da magia pela primeira vez num turno ou começar seu turno nela, ela deve realizar um teste de resistência de Destreza. Se falhar, cairá no chão.</p><p> Se um, criatura estiver se concentrando na área da magia, a criatura deve realizar um teste de resistência de Constituição contra a CD da magia, ou perderá a concentração.","classes":["Druida","Feiticeiro","Mago"],"favorite":false},{"id":183,"level":"3","name":"Névoa Fétida","name_en":"Stinking Cloud","school":{"pt":"Conjuração","style":"conjuration"},"castingTime":"1 ação","range":"27 metros","components":"V, S, M","concentration":"s","duration":"até 1 minuto","material":"um ovo podre ou várias folhas de repolho","description":"Você cria uma esfera, de 6 metros de raio, de gás amarelado nauseante, centrada num ponto dentro do alcance. A névoa se espalha, dobrando esquinas, e sua área é de escuridão densa. A névoa perdura no ar pela duração.</p><p> Cada criatura que estiver completamente dentro da névoa no início do seu turno deve realizar um teste de resistência de Constituição contra veneno. Se falhar na resistência, a criatura gastará sua ação nesse turno tentando vomitar e cambaleando.</p><p> Um vento moderado (pelo menos 15 quilômetros por hora) dispersará a névoa depois de 4 rodadas. Um vento forte (pelo menos 30 quilômetros por hora) dispersará a névoa após 1 rodada.","classes":["Bardo","Feiticeiro","Mago"],"favorite":false},{"id":264,"level":"5","name":"Névoa Mortal","name_en":"Cloudkill","school":{"pt":"Conjuração","style":"conjuration"},"castingTime":"1 ação","range":"36 metros","components":"V, S","concentration":"s","duration":"até 10 minutos","description":"Você cria uma esfera de nevoeiro venenoso de cor amarelo - esverdeado, com 6 metros de raio, centrado em um ponto, à sua escolha, dentro do alcance. O nevoeiro se espalha, dobrando esquinas. Ele permanece pela duração ou até um vento forte dispersar o nevoeiro, terminando a magia. Sua área é de escuridão densa.</p><p> Quando uma criatura entra na área da magia pela primeira vez no turno dela ou começa seu turno lá, essa criatura deve realizar um teste de resistência de Constituição. A criatura sofre 5d8 de dano de veneno, ou metade desse dano, se passar no teste. As criaturas serão afetadas mesmo se prenderem a respiração ou não precisarem respirar.</p><p> O nevoeiro se afasta 3 metros de você no começo de cada um dos seus turnos, deslizando pela superfície do solo. Os vapores são mais pesados que o ar, mantendo - se nos níveis mais baixos do terreno, até mesmo caindo em aberturas.</p><p><strong> Em Níveis Superiores </strong>. Se você conjurar essa magia usando um espaço de magia de 6° nível ou superior, o dano aumenta em 1d8 para cada nível do espaço acima do 5°.","classes":["Feiticeiro","Mago"],"favorite":false},{"id":68,"level":"1","name":"Névoa Obscurecente","name_en":"Fog Cloud","school":{"pt":"Conjuração","style":"conjuration"},"castingTime":"1 ação","range":"36 metros","components":"V, S","concentration":"s","duration":"até 1 hora","description":"Você cria uma esfera de 6 metros de raio de névoa, centrada num ponto, dentro do alcance. A esfera se espalha, dobrando esquinas, e a área dela é de escuridão densa. Ela permanece pela duração ou até um vento moderado ou mais rápido (pelo menos 15 quilômetros por hora) dispersá-la.</p><p><strong> Em Níveis Superiores </strong>. Quando você conjurar essa magia usando um espaço de magia de 2° nível ou superior, o raio da névoa aumenta em 6 metros para cada nível do espaço acima do 1°.","classes":["Druida","Feiticeiro","Mago","Patrulheiro"],"favorite":false},{"id":125,"level":"2","name":"Nublar","name_en":"Blur","school":{"pt":"Ilusão","style":"illusion"},"castingTime":"1 ação","range":"pessoal","components":"V","concentration":"s","duration":"até 1 minuto","description":"Seu corpo se torna turvo, mudando e oscilando para todos que puderem ver você. Pela duração, qualquer criatura terá desvantagem nas jogadas de ataque contra você. Um atacante é imune a esse efeito se não depender de visão, como os que tenham percepção às cegas ou os que puderem ver através de ilusões, como os com visão verdadeira.","classes":["Feiticeiro","Mago"],"favorite":false},{"id":126,"level":"2","name":"Nuvem de Adagas","name_en":"Cloud of Daggers","school":{"pt":"Conjuração","style":"conjuration"},"castingTime":"1 ação","range":"18 metros","components":"V, S, M","concentration":"s","duration":"até 1 minuto","material":"uma lasca de vidro","description":"Você preenche o ar com adagas giratórias num cubo de 1,5 metro quadrado, centrado em m ponto, à sua escolha, dentro do alcance. Uma criatura sofre 4d4 de dano cortante quando entra na área da magia pela primeira vez no turno dela ou começa seu turno na área.</p><p><strong> Em Níveis Superiores </strong>. Se você conjurar essa magia usando um espaço de magia de 3° nível ou superior, o dano aumenta em 2d4 para cada nível do espaço acima do 2°.","classes":["Bardo","Bruxo","Feiticeiro","Mago"],"favorite":false},{"id":339,"level":"8","name":"Nuvem Incendiária","name_en":"Incendiary Cloud","school":{"pt":"Conjuração","style":"conjuration"},"castingTime":"1 ação","range":"45 metros","components":"V, S","concentration":"s","duration":"até 1 minuto","description":"Uma nuvem de fumaça rodopiante que dispara brasas incandescentes aparece numa esfera de 6 metros centrada num ponto, dentro do alcance. A nuvem se espalha, dobrando esquinas, e gera escuridão densa. Ela permanece pela duração ou até que um vento de velocidade moderada ou mais forte (pelo menos 15 quilômetros por hora) a disperse.</p><p> Quando a nuvem aparece, cada criatura deve realizar um teste de resistência de Destreza. Uma criatura sofre 10d8 de dano de fogo se falhar na resistência ou metade desse dano se passar. Uma criatura deve, também, realizar um teste de resistência quando entrar na área da magia pela primeira vez num turno ou terminar seu turno nela.</p><p> A nuvem se afasta 3 metros de você numa direção, que você escolheu, no começo de cada um dos seus turnos.","classes":["Feiticeiro","Mago"],"favorite":false},{"id":224,"level":"4","name":"Olho Arcano","name_en":"Arcane Eye","school":{"pt":"Adivinhação","style":"divination"},"castingTime":"1 ação","range":"9 metros","components":"V, S, M","concentration":"s","duration":"até 1 hora","material":"um punhado de pelo de morcego","description":"Você cria um olho mágico invisível, dentro do alcance, que flutua no ar pela duração.</p><p> Você mentalmente recebe informações visuais do olho, que possui visão normal e visão no escuro com alcance de 9 metros. O olho pode ver em todas as direções.</p><p> Com uma ação, você pode mover o olho até 9 metros em qualquer direção. Não existe limite de quão longe de você o olho pode se mover, mas ele não pode entrar em outro plano de existência. Uma barreira solida bloqueia o movimento do olho, mas o olho pode passar através de aberturas de até 3 centímetros de diâmetro.","classes":["Mago"],"favorite":false},{"id":265,"level":"5","name":"Onda Destrutiva","name_en":"Destructive Wave","school":{"pt":"Evocação","style":"evocation"},"castingTime":"1 ação","range":"pessoal","components":"V","duration":"instantânea","description":"Você golpeia o chão, criando uma explosão de energia divina que se propaga de você. Cada criatura, à sua escolha, a até 9 metros de você, deve ser bem sucedida em um teste de resistência de Constituição ou sofrerá 5 d5 de dano trovejante, assim como 5d6 de dano radiante ou necrótico (à sua escolha), e será derrubada no chão. Uma criatura que obtenha sucesso no teste de resistência sofre metade desse dano e não é derrubada no chão.","classes":["Paladino"],"favorite":false},{"id":69,"level":"1","name":"Onda Trovejante","name_en":"Thunderwave","school":{"pt":"Evocação","style":"evocation"},"castingTime":"1 ação","range":"pessoal","components":"V, S","duration":"instantânea","description":"Uma onda de força trovejante varre tudo a partir de você. Cada criatura num cubo de 4, 5 metros originado em você, deve realizar um teste de resistência de Constituição. Se falhar na resistência, uma criatura sofrerá 2d8 de dano trovejante e será empurrada 3 metros para longe de você. Se obtive sucesso na resistência, a criatura sofrerá metade desse dano e não será empurrada.</p><p> Além disso, objetos soltos que estiverem completamente dentro da área de efeito serão automaticamente empurrados 3 metros para longe de você pelo efeito da magia e a magia emitirá um ressonante barulho de trovão audível a até 90 metros.</p><p><strong> Em Níveis Superiores </strong>. Quando você conjurar essa magia usando um espaço de magia de 2° nível ou superior, o dano aumenta em 1d8 para cada nível acima do 1°.","classes":["Bardo","Druida","Feiticeiro","Mago"],"favorite":false},{"id":127,"level":"2","name":"Oração Curativa","name_en":"Prayer Of Healing","school":{"pt":"Evocação","style":"evocation"},"castingTime":"10 minutos","range":"9 metros","components":"V","duration":"instantânea","description":"Até seis criaturas, à sua escolha, que você possa ver, dentro do alcance, recuperam uma quantidade de pontos de vida igual a 2d8 + seu modificador de habilidade de conjuração, cada uma. Essa magia não afeta mortos - vivos ou constructos.</p><p><strong> Em Níveis Superiores </strong>. Quando você conjurar essa magia usando um espaço de magia de 3° nível ou superior, a cura aumenta em 1d8 para cada nível do espaço acima do 2°.","classes":["Clérigo"],"favorite":false},{"id":70,"level":"1","name":"Orbe Cromática","name_en":"Chromatic Orb","school":{"pt":"Evocação","style":"evocation"},"castingTime":"1 ação","range":"27 metros","components":"V, S, M","duration":"instantânea","material":"um diamante valendo, no mínimo, 50 po","description":"Você arremessa uma esfera de energia de 12 centímetros de diâmetro numa criatura que você possa ver dentro do alcance. Você escolhe ácido, frio, fogo, elétrico, veneno ou trovejante para o tipo de orbe que você cria e, então, realiza um ataque à distância com magia. Se o ataque atingir, a criatura sofre 3d8 de dano do tipo escolhido.</p><p><strong> Em Níveis Superiores </strong>. Quando você conjurar essa magia usando um espaço de magia de 2° nível ou superior, o dano aumenta em 1d8 para cada nível do espaço acima do 1°.","classes":["Feiticeiro","Mago"],"favorite":false},{"id":15,"level":"0","name":"Orientação","name_en":"Guidance","school":{"pt":"Adivinhação","style":"divination"},"castingTime":"1 ação","range":"toque","components":"V, S","concentration":"s","duration":"até 1 minuto","description":"Você toca uma criatura voluntária. Uma vez, antes da magia acabar, o alvo pode rolar 1d4 e adicionar o número rolado a um teste de habilidade a escolha dele. Ele pode rolar o dado antes ou depois de realizar o teste de habilidade. Após isso, a magia termina.","classes":["Clérigo","Druida"],"favorite":false},{"id":184,"level":"3","name":"Padrão Hipnótico","name_en":"Hypnotic Pattern","school":{"pt":"Ilusão","style":"illusion"},"castingTime":"1 ação","range":"36 metros","components":"S, M","concentration":"s","duration":"até 1 minuto","material":"uma vareta brilhante de incenso ou um frasco de cristal cheio de material fosforescente","description":"Você cria um padrão retorcido de cores que se entrelaça através do ar dentro de um cubo de 9 metros, dentro do alcance. O padrão aparece por um momento depois desaparece. Cada criatura na área que ver o padrão, deve realizar um teste de resistência de Sabedoria. Se falhar na resistência, a criatura fica enfeitiçada pela duração. Enquanto estiver enfeitiçada por essa magia, a criatura está incapacitada e tem deslocamento 0.</p><p> A magia acaba em uma criatura afetada se ela sofrer dano ou se alguém usar uma ação para agitar a criatura para tirá-la de seu estupor.","classes":["Bardo","Bruxo","Feiticeiro","Mago"],"favorite":false},{"id":71,"level":"1","name":"Palavra Curativa","name_en":"Healing Word","school":{"pt":"Evocação","style":"evocation"},"castingTime":"1 ação bônus","range":"18 metros","components":"V","duration":"instantânea","description":"Uma criatura, à sua escolha, que você possa ver dentro do alcance recupera uma quantidade de pontos de vida igual a 1d4 + seu modificador de habilidade de conjuração. Essa magia não tem efeito em mortos - vivos ou constructos </p><p><strong> Em Níveis Superiores </strong>. Quando você conjurar essa magia usando um espaço de magia de 2° nível ou superior, a cura aumenta em 1d4 para cada nível do espaço acima do 1°.","classes":["Bardo","Clérigo","Druida"],"favorite":false},{"id":185,"level":"3","name":"Palavra Curativa Em Massa","name_en":"Mass Healing Word","school":{"pt":"Evocação","style":"evocation"},"castingTime":"1 ação bônus","range":"18 metros","components":"V","duration":"instantânea","description":"À medida que você brada palavras de restauração, até seis criaturas, à sua escolha, que você possa ver, dentro do alcance, recuperam uma quantidade de pontos de vida igual a 1d4 + seu modificador de habilidade de conjuração. Essa magia não afeta mortos - vivos ou constructos.</p><p><strong> Em Níveis Superiores </strong>. Quando você conjurar essa magia usando um espaço de magia de 4° nível ou superior, a cura aumenta em 1d4 para cada nível do espaço acima do 3°.","classes":["Clérigo"],"favorite":false},{"id":340,"level":"8","name":"Palavra de Poder Atordoar","name_en":"Power Word Stun","school":{"pt":"Encantamento","style":"enchantment"},"castingTime":"1 ação","range":"18 metros","components":"V","duration":"instantânea","description":"Você pronuncia uma palavra de poder que pode oprimir a mente de uma criatura que você possa ver, dentro do alcance, deixando - a estupefata. Se o alvo escolhido estiver com 150 pontos de vida ou menos, ele ficará atordoado. Do contrário, essa magia não produz efeito.</p><p> O alvo atordoado deve realizar um teste de resistência de Constituição no final de cada um dos turnos dele. Se obtiver sucesso na resistência, o efeito de atordoamento termina.","classes":["Bardo","Bruxo","Feiticeiro","Mago"],"favorite":false},{"id":353,"level":"9","name":"Palavra de Poder Curar","name_en":"Power Word Heal","school":{"pt":"Evocação","style":"evocation"},"castingTime":"1 ação","range":"toque","components":"V, S","duration":"instantânea","description":"Uma onda de energia curativa inunda a criatura tocada. O alvo recupera todos os seus pontos de vida. Se a criatura estiver enfeitiçada, amedrontada, paralisada ou atordoada, a condição termina. Se a criatura estiver caída, ela pode usar a reação dela para se levantar. Essa magia não afeta mortos - vivos ou constructos.","classes":["Bardo"],"favorite":false},{"id":354,"level":"9","name":"Palavra de Poder Matar","name_en":"Power Word Kill","school":{"pt":"Encantamento","style":"enchantment"},"castingTime":"1 ação","range":"18 metros","components":"V","duration":"instantânea","description":"Você profere uma palavra de poder que pode compelir uma criatura que você possa ver, dentro do alcance, a morrer instantaneamente. Se o alvo escolhido estiver com 100 pontos de vida ou menos, ele morre. Do contrário, essa magia não produz efeito.","classes":["Bardo","Bruxo","Feiticeiro","Mago"],"favorite":false},{"id":298,"level":"6","name":"Palavra de Recordação","name_en":"Word Of Recall","school":{"pt":"Conjuração","style":"conjuration"},"castingTime":"1 ação","range":"1,5 metro","components":"V","duration":"instantânea","description":"Você e até cinco criaturas voluntária a 1,5 metro de você, instantaneamente são teletransportadas para um santuário previamente designado. Você e qualquer criatura que se teletransportar com você, aparece no espaço desocupado mais próximo do ponto que você designou quando preparou seu santuário (veja abaixo). Se você conjurar essa magia sem ter preparado um santuário primeiro, a magia não funciona.</p><p> Você deve designar um santuário na conjuração dessa magia dentro de um local, como um templo dedicado ou fortemente ligado a sua divindade. Se você tentar conjurar essa magia dessa forma em uma área que não seja dedicada à sua divindade, a magia não funciona.","classes":["Clérigo"],"favorite":false},{"id":316,"level":"7","name":"Palavra Divina","name_en":"Divine Word","school":{"pt":"Evocação","style":"evocation"},"castingTime":"1 ação bônus","range":"9 metros","components":"V","duration":"instantânea","description":"Você profere uma palavra divina, imbuída com o poder que moldou o mundo na aurora da criação. Escolha qualquer quantidade de criaturas que você possa ver dentro do alcance. Cada criatura que puder ouvir você deve realizar um teste de resistência de Carisma. Ao falhar na resistência, uma criatura sofre um efeito baseado nos seus pontos de vida atuais: </p><ul><li> 50 pontos de vida ou menos: surda por 1 minuto </li><li> 40 pontos de vida ou menos: surda e cega por 10 minutos </li><li> 30 pontos de vida ou menos: surda, cega e atordoada por 1 hora </li><li> 20 pontos de vida ou menos: morta instantaneamente </li></ ul><p> Independentemente dos seus pontos de vida atuais, um celestial, corruptor, elemental ou fada que falhar na sua resistência é obrigado a voltar para o plano de origem dele (se já não for aqui) e não pode retornar para o plano atual por 24 horas através de nenhum meio inferior à magia <em> desejo </em>.</p> ","classes":["Clérigo"],"favorite":false},{"id":355,"level":"9","name":"Parar o Tempo","name_en":"Time Stop","school":{"pt":"Transmutação","style":"transmutation"},"castingTime":"1 ação","range":"pessoal","components":"V","duration":"instantânea","description":"Você, por um breve momento, para o fluxo do tempo pra tudo, menos pra você. Nenhum tempo se passa para as outras criaturas, enquanto você realiza 1d4 + 1 turnos de uma vez, durante os quais você pode usar ações e se mover normalmente.</p><p> Essa magia termina se uma das ações que você fizer durante esse período ou qualquer efeito que você criar, afetar uma criatura diferente de você ou um objeto que esteja sendo vestido ou carregado por outro que não você. Além disso, a magia termina se você se mover para um lugar a mais de 300 metros do local onde você conjurou essa magia.","classes":["Feiticeiro","Mago"],"favorite":false},{"id":128,"level":"2","name":"Passo Nebuloso","name_en":"Misty Step","school":{"pt":"Conjuração","style":"conjuration"},"castingTime":"1 ação bônus","range":"pessoal","components":"V","duration":"instantânea","description":"Brevemente envolto por uma neblina prateada, você se teletransporta a até 9 metros para um espaço desocupado que você possa ver.","classes":["Bruxo","Feiticeiro","Mago"],"favorite":false},{"id":72,"level":"1","name":"Passos Longos","name_en":"Longstrider","school":{"pt":"Transmutação","style":"transmutation"},"castingTime":"1 ação","range":"toque","components":"V, S, M","duration":"1 hora","material":"um pouco de barro","description":"Você toca uma criatura. O deslocamento do alvo aumenta em 3 metros, até a magia acabar.</p><p><strong> Em Níveis Superiores </strong>. Quando você conjurar essa magia usando um espaço de magia de 2° nível ou superior, você pode afetar uma criatura adicional para cada nível do espaço acima do 1°.","classes":["Bardo","Druida","Mago","Patrulheiro"],"favorite":false},{"id":129,"level":"2","name":"Passos Sem Pegadas","name_en":"Pass Without Trace","school":{"pt":"Abjuração","style":"abjuration"},"castingTime":"1 ação","range":"pessoal","components":"V, S, M","concentration":"s","duration":"até 1 hora","material":"cinzas de uma folha de visco queimada e um ramo de pinheiro","description":"Um véu de sombras e silencia irradia de você, encobrindo você e seus companheiros contra detecção. Pela duração, cada criatura, à sua escolha, a até 9 metros de você (incluindo você) recebe + 10 de bônus em testes de Destreza (Furtividade) e não pode ser rastreada, exceto por meio mágicos. Uma criatura que receber esse bônus não deixa quaisquer pegadas ou outros vestígios da sua passagem.","classes":["Druida","Patrulheiro"],"favorite":false},{"id":130,"level":"2","name":"Patas de Aranha","name_en":"Spider Climb","school":{"pt":"Transmutação","style":"transmutation"},"castingTime":"1 ação","range":"toque","components":"V, S, M","concentration":"s","duration":"até 1 hora","material":"uma gota de betume e uma aranha","description":"Até a magia acabar, uma criatura voluntária que você tocar, recebe a habilidade de se mover para cima, para baixo e através de superfícies verticais e de cabeça para baixo pelos tetos, enquanto deixa suas mãos livres. O alvo também ganha deslocamento de escalada igual a seu deslocamento de caminhada.","classes":["Bruxo","Feiticeiro","Mago"],"favorite":false},{"id":131,"level":"2","name":"Pele de Árvore","name_en":"Barkskin","school":{"pt":"Transmutação","style":"transmutation"},"castingTime":"1 ação","range":"toque","components":"V, S, M","concentration":"s","duration":"até 1 hora","material":"um pedaço de casca de carvalho","description":"Você toca uma criatura voluntária. Até o fim da magia, a pele da criatura fica rígida, similar a casca de um carvalho, e a CA do alvo não pode ser inferior a 16, independentemente do tipo de armadura que ela esteja vestindo.","classes":["Druida","Patrulheiro"],"favorite":false},{"id":225,"level":"4","name":"Pele de Pedra","name_en":"Stoneskin","school":{"pt":"Abjuração","style":"abjuration"},"castingTime":"1 ação","range":"toque","components":"V, S, M","concentration":"s","duration":"até 1 hora","material":"pó de diamante no valor de 100 po, consumido pela magia","description":"Essa magia transforma a pele de uma criatura voluntária que você tocar em rocha sólida. Até a magia acabar, o alvo tem resistência a dano de concussão, cortante e perfurante não - mágico.","classes":["Druida","Feiticeiro","Mago","Patrulheiro"],"favorite":false},{"id":186,"level":"3","name":"Pequena Cabana de Leomund","name_en":"Leomund's Tiny Hut","ritual":"s","school":{"pt":"Evocação","style":"evocation"},"castingTime":"1 minuto","range":"pessoal","components":"V, S, M","duration":"8 horas","material":"uma pequena conta de cristal","description":"Um domo de energia imóvel, de 3 metros de raio, aparece do nada, ao seu redor e acima de você e permanece parado pela duração. A magia termina se você deixar a área.</p><p> Nove criaturas de tamanho Médio ou menor podem caber dentro do domo com você. A magia falha se a área incluir criaturas maiores ou mais de nove criaturas. Criaturas e objetos dentro do domo quando você conjurou essa magia, podem se mover através dele livremente. Todas as outras criaturas e objetos são bloqueados ao tentarem atravessa - lo. Magias e outros efeitos mágicos não podem se estender através do domo ou serem conjurados através dele. A atmosfera dentro do espaço é confortável e seca, independente do clima do lado de fora.</p><p> Até a magia acabar, você pode comandar o interior para que fique mal iluminado ou escuro. O domo é opaco do lado de fora, de qualquer cor que você desejar, mas é transparente do lado de dentro.","classes":["Bardo","Mago"],"favorite":false},{"id":73,"level":"1","name":"Perdição","name_en":"Bane","school":{"pt":"Encantamento","style":"enchantment"},"castingTime":"1 ação","range":"9 metros","components":"V, S, M","concentration":"s","duration":"até 1 minuto","material":"uma gota de sangue","description":"Até três criaturas, à sua escolha, que você possa ver dentro do alcance, devem realizar um teste de resistência de Carisma. Sempre que um alvo que falhou nessa resistência realizar uma jogada de ataque ou um teste de resistência antes da magia acabar, o alvo deve rolar 1d4 e subtrair o valor rolado da jogada de ataque ou teste de resistência.</p><p><strong> Em Níveis Superiores </strong>. Quando você conjurar essa magia usando um espaço de magia de 2° nível ou superior, você pode afetar uma criatura adicional para cada nível do espaço acima do 1°.","classes":["Bardo","Clérigo"],"favorite":false},{"id":187,"level":"3","name":"Piscar","name_en":"Blink","school":{"pt":"Transmutação","style":"transmutation"},"castingTime":"1 ação","range":"pessoal","components":"V, S","duration":"1 minuto","description":"Role 1d20 no final de cada um dos seus turnos pela duração da magia. Com um resultado de 11 ou maior, você desaparece do seu plano de existência atual e reaparece no Plano Etéreo (a magia falha e a conjuração é perdida se você já estiver nesse plano). No início do seu próximo turno quando a magia terminar, se você estiver no Plano Etéreo, você retorna a um espaço desocupado de sua escolha que você possa ver a até 3 metros do espaço em que você desapareceu. Se não houver um espaço disponível dentro do alcance, você reaparece no espaço desocupado mais próximo (escolhido aleatoriamente, se existir mais de um espaço a mesma distância). Você pode dissipar a magia com uma ação.</p><p> Quando estiver no Plano Etéreo, você pode ver e ouvir o plano de onde você veio, que aparece em tons de cinza, e você não pode ver nada além de 18 metros. Você só pode afetar ou ser afetado por outras criaturas no Plano Etéreo. As criaturas que não estiverem lá não podem notar você nem interagir com você, a não ser que elas tenham uma habilidade que as permita.","classes":["Feiticeiro","Mago"],"favorite":false},{"id":226,"level":"4","name":"Porta Dimensional","name_en":"Dimension Door","school":{"pt":"Conjuração","style":"conjuration"},"castingTime":"1 ação","range":"150 metros","components":"V","duration":"instantânea","description":"Você se teletransporte da sua posição atual para qualquer local dentro do alcance. Você aparece exatamente no local desejado. Pode ser um lugar que você possa ver, um que você possa visualizar ou um que você possa descrever indicando a distância e direção, como“ 60 metros diretamente pra baixo” ou“ 90 metros, subindo para noroeste num ângulo de 45 graus”.</p><p> Você pode levar objetos com você, contanto que o peso deles não exceda o que você pode carregar. Você também pode levar uma criatura voluntária do seu tamanho ou menor, que esteja carregando equipamento até o limite da capacidade de carga dela. A criatura deve estar a 1,5 metro de você quando você conjurar a magia.</p><p> Se você aparecer em um lugar que já esteja ocupado por um objeto ou uma criatura, você e qualquer criatura viajando com você, sofrem 4d6 de dano de energia cada um e a magia falha em teletransportar vocês.","classes":["Bardo","Bruxo","Feiticeiro","Mago"],"favorite":false},{"id":356,"level":"9","name":"Portal","name_en":"Gate","school":{"pt":"Conjuração","style":"conjuration"},"castingTime":"1 ação","range":"18 metros","components":"V, S, M","concentration":"s","duration":"até 1 minuto","material":"um diamante valendo, no mínimo, 5. 000 po","description":"Você conjura um portal conectando um espaço desocupado que você possa ver, dentro do alcance, a uma localização precisa em um plano de existência diferente. O portal é uma abertura circular, que você pode fazer ter de 1,5 a 6 metros de diâmetro. Você pode orientar o portal em qualquer direção, à sua escolha. O portal permanece pela duração.</p><p> O portal terá uma frente e um fundo em cada plano que ele aparecer. Viajar pelo portal só é possível ao atravessa - lo pela frente. Qualquer coisa que o fizer, é instantaneamente transportado para o outro plano, aparecendo no espaço desocupado mais próximo do portal. Divindades e outros soberanos planares podem impedir que portais criados através dessa magia se abram na presença deles ou em qualquer parte dos seus domínios.</p><p> Quando você conjurar essa magia, você pode falar o nome de uma criatura especifica (um pseudônimo, título ou apelido não funcionará). Se essa criatura estiver em um plano diferente do que você está, o portal se abre na vizinhança imediata da criatura nomeada e suga a criatura para dentro do portal, fazendo - a aparecer no espaço desocupado mais próximo do seu lado do portal. Você não adquire qualquer poder especial sobre a criatura e ela está livre para agir como o Mestre julgar apropriado. Ela pode ir embora, atacar você ou ajudar você.","classes":["Clérigo","Feiticeiro","Mago"],"favorite":false},{"id":299,"level":"6","name":"Portal Arcano","name_en":"Arcane Gate","school":{"pt":"Conjuração","style":"conjuration"},"castingTime":"1 ação","range":"150 metros","components":"V, S","concentration":"s","duration":"até 10 minutos","description":"Você cria portais de teletransporte conectados que permanecem abertos pela duração. Escolha dois pontos no solo que você possa ver, um ponto a até 3 metros de você e outro a até 150 metros de você. Um portal circular, com 3 metros de diâmetro, se abre em cada ponto. Se o portal se abriria num local ocupado por uma criatura, a magia falha e a conjuração é perdida.</p><p> Os portais são dois anéis dimensionais brilhantes cheios de névoa, flutuando a centímetros do chão, perpendicular a ele no ponto escolhido. Um anel é visível apenas de um lado (à sua escolha), que é o lado que funciona como portal.</p><p> Qualquer criatura ou objeto que adentrar o portal, sairá pelo outro portal, como se ambos estivessem adjacentes um ao outro, atravessar um portal do lado que não é um portal não tem efeito. A névoa que preenche cada portal é opaca e bloqueia a visão através dele. No seu turno, você pode girar os anéis, com uma ação bônus, fazendo o lado ativo ficar em uma direção diferente.","classes":["Bruxo","Feiticeiro","Mago"],"favorite":false},{"id":266,"level":"5","name":"Praga","name_en":"Contagion","school":{"pt":"Necromancia","style":"necromancy"},"castingTime":"1 ação","range":"toque","components":"V, S","duration":"7 dias","description":"Seu toque inflige uma doença. Faça um ataque de magia corpo - a - corpo contra uma criatura ao seu alcance. Se atingir, você aflige a criatura com uma doença, de sua escolha, entre qualquer um das descritas abaixo. No final de cada turno do alvo, ele deve realizar um teste de resistência de Constituição. Após obter três falhas nesses testes de resistência, o efeito da doença permanece pela duração e a criatura para de fazer testes de resistência. Após obter três sucessos nesses testes de resistência, a criatura se recupera da doença e a magia termina.</p><p> Já que essa magia induz uma doença natural no alvo, qualquer efeito que remova uma doença, ou de outra forma, melhore os efeitos de uma doença, se aplica a ela.</p><p><em><strong> Ardência Mental </strong></ em>. A mente da criatura fica febril. A criatura tem desvantagem em testes de Inteligência, testes de resistência de Inteligência e a criatura age como se estivesse sob efeito da magia <em> confusão </em> durante um combate.</p><p><em><strong> Enjoo Cegante </strong></ em>. A dor se agarra a mente da criatura e seus olhos ficam branco - leitosos. A criatura tem desvantagem em testes de Sabedoria e testes de resistência de Sabedoria e está cega.</p><p><em><strong> Febre do Esgoto </strong></ em>. Uma febre voraz se espalha pelo corpo da criatura. A criatura tem desvantagem em testes de Força, testes de resistência de Força e jogadas de ataque que usem Força.</p><p><em><strong> Necrose da Carne </strong></ em>. A carne da criatura se decompõe. A criatura tem desvantagem em testes de Carisma e vulnerabilidade a todos os danos.</p><p><em><strong> Perdição Pegajosa </strong></ em>. A criatura começa a sangrar incontrolavelmente. A criatura tem desvantagem em testes de Constituição e testes de resistência de Constituição. Além disso, sempre que a criatura sofrer dano, ela ficará atordoada até o fim do seu próximo turno.</p><p><em><strong> Tremedeira </strong></ em>. A criatura é acometida por espasmos. A criatura tem desvantagem em testes de Destreza, testes de resistência de Destreza e jogadas de ataque que usem Destreza.","classes":["Clérigo","Druida"],"favorite":false},{"id":267,"level":"5","name":"Praga de Insetos","name_en":"Insect Plague","school":{"pt":"Conjuração","style":"conjuration"},"castingTime":"1 ação","range":"90 metros","components":"V, S, M","concentration":"s","duration":"até 10 minutos","material":"alguns grãos de açúcar, alguns miolos de grão e uma mancha de gordura","description":"Um enxame voraz de gafanhotos preenche uma esfera de 6 metros de raio, centrada no ponto que você escolher, dentro do alcance. A esfera se espalha dobrando esquinas. A esfera permanece pela duração e sua área é de escuridão leve. A área da esfera é de terreno difícil.</p><p> Quando a área aparece, cada criatura dentro dela deve realizar um teste de resistência de Constituição. Uma criatura sofre 4d10 de dano perfurante se falhar na resistência ou metade desse dano se passar. Uma criatura deve, também, realizar um teste de resistência quando entrar na área da magia pela primeira vez num turno ou terminar seu turno nela.</p><p><strong> Em Níveis Superiores </strong>. Quando você conjurar essa magia usando um espaço de magia de 6° nível ou superior, o dano aumenta em 1d10 para cada nível do espaço acima do 5°.","classes":["Clérigo","Druida","Feiticeiro"],"favorite":false},{"id":16,"level":"0","name":"Prestidigitação","name_en":"Prestidigitation","school":{"pt":"Transmutação","style":"transmutation"},"castingTime":"1 ação","range":"3 metros","components":"V, S","duration":"até 1 hora","description":"Essa magia é um truque mágico simples que conjuradores iniciantes usam para praticar. Você cria um dos seguintes efeitos mágicos dentro do alcance: </p><ul><li> Você cria, instantaneamente, um efeito sensorial inofensivo, como uma chuva de faíscas, um sopro de vento, notas musicais suaves ou um odor estranho.</li><li> Você, instantaneamente, acende ou apaga uma vela, uma tocha ou uma pequena fogueira.</li><li> Você, instantaneamente, limpa ou suja um objeto de até 1 metro cúbico.</li><li> Você esfria, esquenta ou melhora o sabor de até 1 metro cubico de matéria inorgânica por 1 hora.</li><li> Você faz uma cor, uma pequena marca ou um símbolo aparecer em um objeto ou superfície por 1 hora.</li><li> Você cria uma bugiganga não - mágica ou uma imagem ilusória que caiba na sua mão e que dura até o final do seu próximo turno.</li></ul><p> Se você conjurar essa magia diversas vezes, você pode ter até três dos seus efeitos não - instantâneos ativos, ao mesmo tempo, e você pode dissipar um desses efeitos com uma ação.","classes":["Bardo","Bruxo","Feiticeiro","Mago"],"favorite":false},{"id":317,"level":"7","name":"Prisão de Energia","name_en":"Forcecage","school":{"pt":"Evocação","style":"evocation"},"castingTime":"1 ação","range":"30 metros","components":"V, S, M","duration":"1 hora","material":"pó de rubi no valor de 1. 500 po","description":"Uma prisão em formato cúbico, imóvel e invisível, composta de energia mágica brota do nada, em volta de uma área, à sua escolha, dentro do alcance. A prisão pode ser uma cela ou uma caixa sólida, à sua escolha.</p><p> Uma prisão em formato de cela pode ter até 6 metros quadrados e é feita de barras com 1,5 centímetro de diâmetro espaçadas a 1,5 centímetro umas das outras.</p><p> Uma prisão em formato de caixa pode ter até 3 metros quadrados, criando uma barreira sólida que impede qualquer matéria de atravessá-la e bloqueia qualquer magia conjurada de entrar ou sair da área.</p><p> Quando você conjura a magia, qualquer criatura que estiver completamente dentro da área da prisão ficará presa. As criaturas que estiverem apenas parcialmente na área, ou as grandes demais para caber dentro da área, são empurradas do centro da área, até estarem completamente fora dela.</p><p> Uma criatura dentro da prisão não pode sair dela por meios não - mágicos. Se a criatura tentar usar teletransporte ou viagem entre planos para abandonar a prisão, ela deve, primeiro, realizar um teste de resistência de Carisma. Se obtiver sucesso, a criatura pode usar a magia e sair da prisão. Se falhar, a criatura não pode sair da prisão e desperdiça o uso da magia ou efeito. A prisão também se estende ao Plano Etéreo, bloqueando viagem etérea.</p><p> Essa magia não pode ser dissipada por <em> dissipar magia </em>.</p> ","classes":["Bardo","Bruxo","Mago"],"favorite":false},{"id":300,"level":"6","name":"Proibição","name_en":"Forbiddance","ritual":"s","school":{"pt":"Abjuração","style":"abjuration"},"castingTime":"10 minutos","range":"toque","components":"V, S, M","duration":"1 dia","material":"uma borrifada de água benta, incensos raros e pó de rubi valendo, no mínimo, <br/> 1. 000 po","description":"Você cria uma defesa contra viagem mágica que protege até 12. 000 metros quadrados de solo até 9 metros de altura do solo. Pela duração, criaturas não conseguem se teletransportar para dentro da área ou usar portais, como os criados pela magia <em> portal </em>, para entrar na área. A magia protege a área contra viagem planar e, portanto, impede criaturas de acessarem a área por meio do Plano Astra, Plano Etéreo, Faéria, Umbra ou pela magia <em> viagem planar </em>.</p><p> Além disso, a magia causa dano a certos tipos de criatura, à sua escolha, quando a conjurar. Escolha um ou mais dentre os seguintes: celestiais, corruptores, elementais, fadas ou mortos - vivos. Quando uma criatura escolhida entrar na área da magia pela primeira vez em um turno ou começa seu turno nela, a criatura sofre 5d6 de dano radiante ou necrótico (à sua escolha, quando você conjura a magia).</p><p> Quando você conjura essa magia, você pode definir uma senha. Uma criatura que falar a senha quando entrar na área não sofrerá dano dessa magia.</p><p> A área da magia não pode sobrepor a área de outra magia <em> proibição </em>. Se você conjurar <em> proibição </em> a cada dia por 30 dias no mesmo local, a magia durará até ser dissipada, e os componentes materiais serão consumidos apenas na última conjuração.","classes":["Clérigo"],"favorite":false},{"id":357,"level":"9","name":"Projeção Astral","name_en":"Astral Projection","school":{"pt":"Necromancia","style":"necromancy"},"castingTime":"1 hora","range":"3 metros","components":"V, S, M","duration":"especial","material":"para cada criatura que você afetar com essa magia, você deve fornecer um jacinto valendo, no mínimo, 1. 000 po e uma barra de prata com ornamentos esculpidos valendo, no mínimo, 100 po, todos consumidos pela magia","description":"Você e até oito criaturas voluntárias dentro do alcance, projetam seus corpos astrais para o Plano Astral (a magia falha e a conjuração é perdida se você já estiver no plano). O corpo material que você deixa para trás ficará inconsciente e em estado de animação suspensa, ele não precisa de comida ou ar e não envelhece.</p><p> Seu corpo astral assemelhasse à sua forma mortal em praticamente tudo, copiando suas estatísticas de jogo e posses. A principal diferença é a adição de um cordão prateado que se estende de trás da sua omoplata e traça um caminho atrás de você, sumindo após 30 centímetros. Esse cordão é a sua corrente com o seu corpo material. Enquanto sua corrente permanecer intacta, você pode encontrar seu caminho de volta pra casa. Se o cordão for cortado– algo que só pode acontecer se um efeito dizer especificamente que faz isso– sua alma e corpo estão separados, matando você instantaneamente.</p><p> Sua forma astral pode viajar livremente dentro do Plano Astral e pode passar através de portais que levam a qualquer outro plano. Se você entrar em um novo portal ou retornar para o plano que você estava quando conjurou a magia, seu corpo e posses são transportados ao longo do cordão de prata, permitindo que você reentre no seu corpo ao entrar no novo plano. Sua forma astral é uma encarnação separada. Qualquer dano ou outros efeitos que se aplicarem a ela, não terão efeito no seu corpo físico, nem persistem quando você voltar.</p><p> A magia termina para você e seus companheiros quando você usar sua ação para dissipá-la. Quando a magia termina, as criaturas afetadas voltam para seus corpos físicos e acordam.</p><p> A magia também pode terminar prematuramente para você ou um dos seus companheiros. Uma magia <em> dissipar magia </em>, bem sucedida, usada contra um corpo astral ou físico termina a magia para a criatura. Se o corpo original de uma criatura ou sua forma astral caírem a 0 pontos de vida, a magia termina para essa criatura. Se a magia terminar e o cordão prateado estiver intacto, o cordão puxa a forma astral da criatura de volta para seu corpo, terminando seu estado de animação suspensa.</p><p> Se você retornar para o seu corpo prematuramente, seus companheiros permanecem nas suas formas astrais e devem encontrar seus próprios meios de voltar para seus corpos, geralmente caindo a 0 pontos de vida.","classes":["Bruxo","Clérigo","Mago"],"favorite":false},{"id":318,"level":"7","name":"Projetar Imagem","name_en":"Project Image","school":{"pt":"Ilusão","style":"illusion"},"castingTime":"1 ação","range":"750 quilômetros","components":"V, S, M","concentration":"s","duration":"até 1 dia","material":"uma pequena réplica sua feita com materiais valendo, no mínimo, 5 po","description":"Você cria uma cópia ilusória de si mesmo, que permanece pela duração. A cópia pode aparecer em qualquer lugar, dentro do alcance, que você já tenha visto antes, independentemente da intervenção de obstáculos. A ilusão se parece e fala como você, mas é intangível. Se a ilusão sofrer qualquer dano, ela desaparece e a magia acaba.</p><p> Você pode ver através dos olhos e ouvir através dos ouvidos da cópia como se você estivesse no lugar dela. Em cada um dos seus turnos, com uma ação bônus, você pode trocar o uso dos sentidos dela pelo seu ou voltar novamente. Enquanto você está usando os sentidos dela, você fica cego e surdo ao que está a sua volta.</p><p> Interação física com a imagem revelará ela como sendo uma ilusão, já que as coisas podem atravessá-la. Uma criatura que usar sua ação para examinar a imagem, pode determinar que ela é uma ilusão sendo bem sucedida num teste de Inteligência (Investigação) contra a CD da magia para desacreditá-la. Se a criatura discernir a ilusão como ela é, a criatura poderá ver através da imagem e qualquer barulho que ela fizer soará oco para a criatura.","classes":["Bardo","Mago"],"favorite":false},{"id":227,"level":"4","name":"Proteção contra a Morte","name_en":"Death Ward","school":{"pt":"Abjuração","style":"abjuration"},"castingTime":"1 ação","range":"toque","components":"V, S","duration":"8 horas","description":"Você toca uma criatura e concede a ela uma certa proteção contra a morte.</p><p> A primeira vez que o alvo cair a 0 pontos de vida, como resultado de ter sofrido dano, o alvo, ao invés disso, cai a 1 ponto de vida e a magia termina.</p><p> Se a magia ainda estiver funcionando quando o alvo for afetado por um efeito que poderia mata - lo instantaneamente sem causar dano, o efeito, ao invés disso, não funciona no alvo e a magia termina.","classes":["Clérigo","Paladino"],"favorite":false},{"id":188,"level":"3","name":"Proteção contra Energia","name_en":"Protect From Energy","school":{"pt":"Abjuração","style":"abjuration"},"castingTime":"1 ação","range":"toque","components":"V, S","concentration":"s","duration":"até 1 hora","description":"Pela duração, a criatura voluntária que você tocar terá resistência a um tipo de dano de sua escolha: ácido, elétrico, fogo, frio ou trovejante.","classes":["Clérigo","Druida","Feiticeiro","Mago","Patrulheiro"],"favorite":false},{"id":17,"level":"0","name":"Proteção contra Lâminas","name_en":"Blade Ward","school":{"pt":"Abjuração","style":"abjuration"},"castingTime":"1 ação","range":"pessoal","components":"V, S","duration":"1 rodada","description":"Você estende suas mãos e desenha um símbolo de proteção no ar. Até o final do seu próximo turno, você terá resistência contra dano de concussão, cortante e perfurante causado por ataques com armas.","classes":["Bardo","Bruxo","Feiticeiro","Mago"],"favorite":false},{"id":74,"level":"1","name":"Proteção contra o Bem e Mal","name_en":"Protection From Evil and Good","school":{"pt":"Abjuração","style":"abjuration"},"castingTime":"1 ação","range":"toque","components":"V, S, M","concentration":"s","duration":"até 10 minutos","material":"água benta ou pó de prata e ferro, consumidos pela magia","description":"Até a magia acabar, uma criatura voluntária que você tocar estará protegida contra certos tipos de criaturas: aberrações, celestiais, corruptores, elementais, fadas e mortos - vivos.</p><p> A proteção garante diversos benefícios. As criaturas desse tipo tem desvantagem nas jogadas de ataque contra o alvo. O alvo não pode ser enfeitiçado, amedrontado ou possuído por elas. Se o alvo já estiver enfeitiçado, amedrontado ou possuído por uma dessas criaturas, o alvo terá vantagem em qualquer novo teste de resistência contra o efeito relevante.","classes":["Bruxo","Clérigo","Mago","Paladino"],"favorite":false},{"id":132,"level":"2","name":"Proteção contra Veneno","name_en":"Protection From Poison","school":{"pt":"Abjuração","style":"abjuration"},"castingTime":"1 ação","range":"toque","components":"V, S","duration":"1 hora","description":"Você toca uma criatura. Se ela estiver envenenada, você neutraliza o veneno. Se mais de um veneno estiver afligindo o alvo, você neutraliza um veneno, que você saiba estar presente, ou neutraliza um aleatório.</p><p> Pela duração, o alvo terá vantagem em testes de resistência para não envenenado e terá resistência a dano de veneno.","classes":["Clérigo","Druida","Paladino","Patrulheiro"],"favorite":false},{"id":301,"level":"6","name":"Proteger Fortaleza","name_en":"Guards And Wards","school":{"pt":"Abjuração","style":"abjuration"},"castingTime":"10 minutos","range":"toque","components":"V, S, M","duration":"24 horas","material":"incenso aceso, uma porção de enxofre e óleo, uma corda amarrada, uma porção de sangue de tribulo brutal e um pequeno bastão de prata valendo, no mínimo, 10 po","description":"Você cria uma defesa que protege até 225 metros quadrados de espaço (uma área de um quadrado de 15 metros ou cem quadrados de 1,5 metro ou vinte e cinco quadrados de 3 metros). A área protegida pode ter até 6 metros de altura, no formado que você desejar. Você pode proteger diversos armazéns de uma fortaleza dividindo a área entre eles, contanto que você possa andar em cada área contígua enquanto estiver conjurando a magia.</p><p> Quando você conjura essa magia, você pode especificar indivíduos que não serão afetados por qualquer dos efeitos que você escolher. Você também pode especificar uma senha que, ao ser falada em voz alta, deixa o orador imune aos efeitos.</p><p><em> Proteger fortaleza </em> cria os seguintes efeitos dentro da área protegida.</p><p><em><strong> Corredores </strong></ em>. Névoa preenche todos os corredores protegidos, tornando - os área de escuridão densa. Além disso, cada interseção ou passagem ramificada oferecendo uma escolha de direção, há 50 por cento de chance de uma criatura diferente de você acredite que está indo na direção oposta à que escolheu.</p><p><em><strong> Portas </strong></ em>. Todas as portas na área protegida estão trancadas magicamente, como se estivessem seladas pela magia <em> tranca arcana </em>. Além disso, você pode cobrir até dez portas com uma ilusão (equivalente a função de objeto ilusório da magia <em> ilusão menor </em>) para fazê-las parecer seções simples da parede.</p><p><em><strong> Escadas </strong></ em>. Teias preenchem todas as escadas na área protegida do topo ao solo, como a magia <em> teia </em>. Esses fios voltam a crescer em 10 minutos se forem queimados ou partidos enquanto <em> proteger fortaleza </em> durar.</p><p><em><strong> Outros Efeitos de Magia </strong></ em>. Você pode colocar, à sua escolha, um dos seguintes efeitos mágicos dentro da área protegida de uma fortaleza.</p><ul><li> Colocar globos de luz em quatro corredores. Você pode designar uma programação simples que as luzes repetem enquanto <em> proteger fortaleza </em> durar.</li><li> Colocar <em> boca encantada </em> em duas localizações.</li><li> Colocar <em> névoa fétida </em> em duas localizações. Os vapores aparecem nos locais que você designar, eles retornam dentro de 10 minutos, se forem dispersados por um vento, enquanto <em> proteger fortaleza </em> durar.</li><li> Colocar uma <em> lufada de vento </em> constante em um corredor ou aposento.</li><li> Colocar uma <em> sugestão </em> em uma localização. Você seleciona uma área de um quadrado de 1,5 metro e, qualquer criatura que entrar ou passar através dessa área recebe a sugestão mentalmente.</li></ ul>","classes":["Bardo","Mago"],"favorite":false},{"id":75,"level":"1","name":"Purificar Alimentos","name_en":"Purify Food And Drink","ritual":"s","school":{"pt":"Transmutação","style":"transmutation"},"castingTime":"1 ação","range":"3 metros","components":"V, S","duration":"instantânea","description":"Toda comida e bebida não - mágica dentro de uma esfera de 1,5 metro de raio centrada num ponto, à sua escolha, dentro do alcance é purificada e se livrada de venenos ou doenças.","classes":["Clérigo","Druida","Paladino"],"favorite":false},{"id":76,"level":"1","name":"Queda Suave","name_en":"Feather Fall","school":{"pt":"Transmutação","style":"transmutation"},"castingTime":"1 reação","range":"18 metros","components":"V, M","duration":"1 minuto","material":"uma pequena pena ou penugem similar","reaction":"que você realiza quando você ou uma criatura a até 18 metros cair","description":"Escolha até cinco criaturas caindo, dentro do alcance. A taxa de descendência de uma criatura caindo é reduzida para 18 metros por rodada, até o fim da magia. Se a criatura aterrissar antes da magia acabar, ela não sofre nenhum dano de queda, pode aterrissar em pé e a magia termina para essa criatura.","classes":["Bardo","Feiticeiro","Mago"],"favorite":false},{"id":77,"level":"1","name":"Raio Adoecente","name_en":"Ray Of Sickness","school":{"pt":"Necromancia","style":"necromancy"},"castingTime":"1 ação","range":"18 metros","components":"V, S","duration":"instantânea","description":"Um raio adoecente de energia esverdeada chicoteia na direção de uma criatura dentro do alcance. Faça um ataque à distância com magia contra o alvo. Se atingir, o alvo sofrerá 2d8 de dano de veneno e deve realizar um teste de resistência de Constituição. Se falhar na resistência, ele também ficará envenenado até o final do seu próximo turno.</p><p><strong> Em Níveis Superiores </strong>. Quando você conjurar essa magia usando um espaço de magia de 2° nível ou superior, o dano da magia aumenta em 1d8 para cada nível do espaço acima do 1°.","classes":["Feiticeiro","Mago"],"favorite":false},{"id":133,"level":"2","name":"Raio Ardente","name_en":"Scorching Ray","school":{"pt":"Evocação","style":"evocation"},"castingTime":"1 ação","range":"36 metros","components":"V, S","duration":"instantânea","description":"Você cria três raios de fogo e os arremessa em alvos dentro do alcance. Você pode arremessa - los em um alvo ou em vários.</p><p> Realize um ataque à distância com magia para cada raio. Se atingir, o alvo sofrerá 2d6 de dano de fogo.</p><p><strong> Em Níveis Superiores </strong>. Quando você conjurar essa magia usando um espaço de magia de 3° nível ou superior, você cria um raio adicional para cada nível do espaço acima do 2°.","classes":["Feiticeiro","Mago"],"favorite":false},{"id":78,"level":"1","name":"Raio de Bruxa","name_en":"Witch Bolt","school":{"pt":"Evocação","style":"evocation"},"castingTime":"1 ação","range":"9 metros","components":"V, S, M","concentration":"s","duration":"até 1 minuto","material":"um galho de uma árvore que tenha sido atingida por um relâmpago","description":"Um raio crepitante de energia azul é arremessado em uma criatura dentro do alcance, formando um arco elétrico contínuo entre você e o alvo. Faça um ataque à distância com magia contra a criatura. Se atingir, o alvo sofrerá 1d12 de dano elétrico e, em cada um dos seus turnos, pela duração, você pode usar sua ação para causar 1d12 de dano elétrico ao alvo, automaticamente. A magia acaba se você usar sua ação para fazer qualquer outra coisa. A magia também acaba se o alvo estiver fora do alcance da magia ou se você tiver cobertura total para ele.</p><p><strong> Em Níveis Superiores </strong>. Quando você conjurar essa magia usando um espaço de magia de 2° nível ou superior, o dano inicial aumenta em 1d12 para cada nível do espaço acima do 1°.","classes":["Bruxo","Feiticeiro","Mago"],"favorite":false},{"id":18,"level":"0","name":"Raio de Fogo","name_en":"Fire Bolt","school":{"pt":"Evocação","style":"evocation"},"castingTime":"1 ação","range":"36 metros","components":"V, S","duration":"instantânea","description":"Você arremessa um cisco de fogo em uma criatura ou objeto dentro do alcance. Faça um ataque à distância com magia contra o alvo. Se atingir, o alvo sofre 1d10 de dano de fogo. Um objeto inflamável atingido por essa magia, incendeia se não estiver sendo vestido ou carregado.</p><p> O dano dessa magia aumenta em 1d10 quando você alcança o 5° nível (2d10), 11° nível (3d10) e 17° nível (4d10).","classes":["Feiticeiro","Mago"],"favorite":false},{"id":19,"level":"0","name":"Raio de Gelo","name_en":"Ray Of Frost","school":{"pt":"Evocação","style":"evocation"},"castingTime":"1 ação","range":"18 metros","components":"V, S","duration":"instantânea","description":"Um raio frigido de luz azul clara parte em direção de uma criatura, dentro do alcance. Realize um ataque à distância com magia contra o alvo. Se atingir, ele sofre 1d8 de dano de frio e seu deslocamento é reduzido em 3 metros até o começo do seu próximo turno.</p><p> O dano da magia aumenta em 1d8 quando você alcança o 5° nível (2d8), 11° nível (3d8) e 17° nível (4d8).","classes":["Feiticeiro","Mago"],"favorite":false},{"id":134,"level":"2","name":"Raio do Enfraquecimento","name_en":"Ray Of Enfeeblement","school":{"pt":"Necromancia","style":"necromancy"},"castingTime":"1 ação","range":"18 metros","components":"V, S","concentration":"s","duration":"até 1 minuto","description":"Um raio negro de energia enervante parte do seu dedo em direção de uma criatura, dentro do alcance. Faça um ataque à distância com magia contra o alvo. Se atingir, o alvo causará metade do dano com ataques com armas que usem Força, até a magia acabar.</p><p> No final de cada um dos turnos do alvo, ele pode realizar um teste de resistência de Constituição contra a magia. Se obtiver sucesso, a magia acaba.","classes":["Bruxo","Mago"],"favorite":false},{"id":79,"level":"1","name":"Raio Guiador","name_en":"Guiding Bolt","school":{"pt":"Evocação","style":"evocation"},"castingTime":"1 ação","range":"36 metros","components":"V, S","duration":"1 rodada","description":"Um lampejo de luz se lança em direção de uma criatura, à sua escolha, dentro do alcance. Realize um ataque à distância com magia contra o alvo. Se atingir, o alvo sofre <br/> 4d6 de dano radiante e, a próxima jogada de ataque contra esse alvo, antes do final do seu próximo turno, terá vantagem, graças a penumbra mística cintilando no alvo, até então.</p><p><strong> Em Níveis Superiores </strong>. Quando você conjurar essa magia usando um espaço de magia de 2° nível ou superior, o dano aumenta em 1d6 para cada nível do espaço acima do 1°.","classes":["Clérigo"],"favorite":false},{"id":135,"level":"2","name":"Raio Lunar","name_en":"Moonbeam","school":{"pt":"Evocação","style":"evocation"},"castingTime":"1 ação","range":"36 metros","components":"V, S, M","concentration":"s","duration":"até 1 minuto","material":"várias sementes de qualquer planta lunar e um pedaço de feldspato opalescente","description":"Um raio prateado de luz pálida brilha para baixo em um cilindro com 1,5 metro de raio e 12 metros de altura, centrado num ponto dentro do alcance. Até a magia acabar, penumbra preenche o cilindro.</p><p> Quando uma criatura entrar na área da magia pela primeira vez em um turno, ou começar seu turno lá, ela é engolfada por chamas fantasmagóricas que causam dores lancinantes e ela deve realizar um teste de resistência de Constituição. Ela sofre 2d10 de dano radiante se falhar na resistência ou metade desse dano se passar.</p><p> Um metamorfo faz seu teste de resistência com desvantagem. Se ele falhar, ele, também, reverte instantaneamente para sua forma original e não pode assumir uma forma diferente até deixar a luz da magia.</p><p> Em cada um dos seus turnos após conjurar essa magia, você pode usar uma ação para mover o raio 18 metros em qualquer direção.</p><p><strong> Em Níveis Superiores </strong>. Quando você conjurar essa magia usando um espaço de magia de 3° nível ou superior, o dano aumenta em 1d10 para cada nível do espaço acima do 2°.","classes":["Druida"],"favorite":false},{"id":302,"level":"6","name":"Raio Solar","name_en":"Sunbeam","school":{"pt":"Evocação","style":"evocation"},"castingTime":"1 ação","range":"pessoal","components":"V, S, M","concentration":"s","duration":"até 1 minuto","material":"uma lente de aumento","description":"Um raio de luz brilhante surge da sua mão em uma linha de 18 metros de comprimento por 1,5 metro de largura. Cada criatura na linha deve realizar um teste de resistência de Constituição. Se falhar na resistência, uma criatura sofrerá 6d8 de dano radiante e ficará cega até seu próximo turno. Se passar na resistência, ela sofrerá metade desse dano e não ficará cega pela magia. Mortos - vivos e limos tem desvantagem nos seus testes de resistência.</p><p> Você pode criar uma linha de radiação com sua ação em qualquer turno, até a magia acabar.</p><p> Pela duração, uma fagulha de radiação luminosa brilha na sua mão. Ela emite luz plena num raio de 9 metros e penumbra por 9 metros adicionais. Essa luz é luz do sol.","classes":["Druida","Feiticeiro","Mago"],"favorite":false},{"id":20,"level":"0","name":"Rajada de Veneno","name_en":"Poison Spray","school":{"pt":"Conjuração","style":"conjuration"},"castingTime":"1 ação","range":"3 metros","components":"V, S","duration":"instantânea","description":"Você ergue sua mão em direção de uma criatura que você possa ver, dentro do alcance e projeta um sopro de gás tóxico da sua palma. A criatura deve ser bem sucedida num teste de resistência de Constituição ou sofrerá 1d12 de dano de veneno.</p><p> O dano dessa magia aumenta em 1d12 quando você alcança o 5° nível (2d12), 11° nível (3d12) e 17° nível (4d12).","classes":["Bruxo","Druida","Feiticeiro","Mago"],"favorite":false},{"id":21,"level":"0","name":"Rajada Mística","name_en":"Eldritch Blast","school":{"pt":"Evocação","style":"evocation"},"castingTime":"1 ação","range":"36 metros","components":"V, S","duration":"instantânea","description":"Um feixe de energia crepitante vai em direção a uma criatura dentro do alcance. Realize uma jogada de ataque à distância com magia contra o alvo. Se atingir, o alvo sofre 1d10 de dano de energia.</p><p> A magia cria mais de um feixe quando você alcança níveis elevados: dois feixes no 5° nível, três feixes no 11° nível e quatro feixes no 17° nível. Você pode direcionar os feixes para o mesmo alvo ou para alvos diferentes. Realize jogadas de ataque separadas para cada feixe.","classes":["Bruxo"],"favorite":false},{"id":319,"level":"7","name":"Rajada Prismática","name_en":"Prismatic Spray","school":{"pt":"Evocação","style":"evocation"},"castingTime":"1 ação","range":"pessoal","components":"V, S","duration":"instantânea","description":"Oito raios de luz multicoloridos lampejam da sua mão. Cada raio é uma cor diferente e tem poderes e propósitos diferentes. Cada criatura em um cone de 18 metros deve realizar um teste de resistência de Destreza. Para cada alvo, role 1d8 para determinar qual cor de raio afetou ele.</p><p><em><strong> 1. Vermelho </strong></ em>. O alvo sofre 10d6 de dano de fogo se falhar na resistência ou metade desse dano se obtiver sucesso.</p><p><em><strong> 2. Laranja </strong></ em>. O alvo sofre 10d6 de dano de ácido se falhar na resistência ou metade desse dano se obtiver sucesso.</p><p><em><strong> 3. Amarelo </strong></ em>. O alvo sofre 10d6 de dano elétrico se falhar na resistência ou metade desse dano se obtiver sucesso.</p><p><em><strong> 4. Verde </strong></ em>. O alvo sofre 10d6 de dano de veneno se falhar na resistência ou metade desse dano se obtiver sucesso.</p><p><em><strong> 5. Azul </strong></ em>. O alvo sofre 10d6 de dano de frio se falhar na resistência ou metade desse dano se obtiver sucesso.</p><p><em><strong> 6. Anil </strong></ em>. Se falhar na resistência, o alvo ficará impedido. Ele deve então, fazer um teste de resistência de Constituição ao final de cada um dos turnos dele. Se obtiver sucesso três vezes, a magia termina. Se falhar na resistência três vezes, ela se torna pedra é afetada pela condição petrificado. Os sucessos e falhas não precisam ser consecutivos, anote ambos os resultados até o alvo acumular três de mesmo tipo.</p><p><em><strong> 7. Violeta </strong></ em>. Se falhar na resistência, o alvo ficará cego. Ele deve realizar um teste de resistência de Sabedoria no início do seu próximo turno. Um sucesso na resistência acaba com a cegueira. Se falhar na resistência, a criatura é transportada para outro plano de existência, escolhido pelo Mestre, e não estará mais cego. (Tipicamente, uma criatura que esteja em um plano que não seja o seu plano natal é banida para lá, enquanto que outras criaturas geralmente são enviadas para os Planos Astral ou Etéreo.) </p><p><em><strong> 8. Especial </strong></ em>. O alvo é atingido por dois raios. Role mais duas vezes e jogue novamente qualquer 8.</p> ","classes":["Feiticeiro","Mago"],"favorite":false},{"id":303,"level":"6","name":"Recipiente Arcano","name_en":"Magic Jar","school":{"pt":"Necromancia","style":"necromancy"},"castingTime":"1 minuto","range":"pessoal","components":"V, S, M","duration":"até ser dissipada","material":"uma gema, cristal, relicário ou algum outro tipo de recipiente ornamental valendo, no mínimo, 500 po","description":"Seu corpo entra em um estado catatônico, enquanto sua alma o abandona e entra num recipiente que você usa como componente material da magia. Enquanto sua alma permanecer no recipiente, você estará ciente do seu entorno como se você estivesse no espaço do recipiente. Você não pode se mover ou usar reações. A única ação que você pode realizar é projetar sua alma a até 30 metros do recipiente, tanto para retornar para o seu corpo (terminando a magia) ou para tentar possuir um corpo humanoide.</p><p> Você pode tentar possuir qualquer humanoide a até 30 metros de você que você possa ver (criaturas protegidas pelas magias <em> proteção contra o bem e mal </em> ou <em> círculo mágico </em> não podem ser possuídas). O alvo deve realizar um teste de resistência de Carisma. Se falhar, sua alma se move para o corpo do alvo e a alma do alvo fica aprisionada no recipiente. Se obtiver sucesso, o alvo resiste aos seus esforços em possuí - lo e você não poderá tentar possuí - lo novamente por 24 horas.</p><p> Uma vez que tenha possuído o corpo de uma criatura, você a controla. Suas estatísticas de jogo são substituídas pelas estatísticas da criatura, no entanto, você mantém sua tendência e seus valores de Inteligência, Sabedoria e Carisma. Você mantém os benefícios das suas características de classe. Se o alvo tiver quaisquer níveis de classe, você não pode usar quaisquer das características de classe dele.</p><p> Nesse período, a alma da criatura possuída pode perceber do recipiente usando os sentidos dela, mas, no mais, não pode se mover ou realizar quaisquer ações.</p><p> Enquanto estiver possuindo um corpo, você pode usar sua ação para retornar do corpo do hospedeiro para o recipiente se ele estiver a até 30 metros de você, devolvendo a alma da criatura hospedeira para o corpo dela. Se o corpo do hospedeiro morrer enquanto você estiver dentro dele, a criatura morre e você deve realizar um teste de resistência de Carisma contra a sua CD de conjuração. Se obtiver sucesso, você retorna ao recipiente se ele estiver a até 30 metros de você. Caso contrário, você morre.</p><p> Se o recipiente for destruído ou a magia acabar, sua alma, imediatamente, retorna para o seu corpo. Se seu corpo estiver a mais de 30 metros de você ou se seu corpo estiver morto quando você tentar retornar para ele, você morre. Se a alma de outra criatura estiver no recipiente quando ele for destruído, a alma da criatura volta para o corpo dela se o corpo estiver vivo e a até 30 metros dela. Caso contrário, a criatura morre.</p><p> Quando a magia acabar, o recipiente é destruído.","classes":["Mago"],"favorite":false},{"id":80,"level":"1","name":"Recuo Acelerado","name_en":"Expeditious Retreat","school":{"pt":"Transmutação","style":"transmutation"},"castingTime":"1 ação bônus","range":"pessoal","components":"V, S","concentration":"s","duration":"até 10 minutos","description":"Essa magia permite que você se mova a um ritmo incrível. Quando você conjura essa magia e, a partir de então, com uma ação bônus em cada um dos seus turnos, até a magia acabar, você pode realizar a ação de Disparada.","classes":["Bruxo","Feiticeiro","Mago"],"favorite":false},{"id":268,"level":"5","name":"Reencarnação","name_en":"Reincarnate","school":{"pt":"Transmutação","style":"transmutation"},"castingTime":"1 hora","range":"toque","components":"V, S, M","duration":"instantânea","material":"óleos e unguentos raros valendo, no mínimo, 1. 000 po, consumidos pela magia","description":"Você toca um humanoide morto ou um pedaço de um humanoide morto. Considerando que a criatura não esteja morta a mais de 10 dias, a magia forma um novo corpo adulto para ele e então, chama a alma para entrar no corpo. Se a alma do alvo não estiver livre ou deseje fazê - lo, a magia falha.</p><p> A magia forma um novo corpo para que a criatura habite, o que, provavelmente, fará com que a raça da criatura mude. O Mestre rola 1d100 e consulta a tabela seguinte para determinar qual forma a criatura terá quando voltar a vida, ou o Mestre pode escolher uma forma.","classes":["Druida"],"favorite":false},{"id":136,"level":"2","name":"Reflexos","name_en":"Mirror Image","school":{"pt":"Ilusão","style":"illusion"},"castingTime":"1 ação","range":"pessoal","components":"V, S","duration":"1 minuto","description":"Três duplicatas ilusórias de você aparecem no seu espaço. Até a magia acabar, as duplicatas se movem com você e copiam as suas ações, trocando de posição, tornando impossível rastrear qual imagem é real. Você pode usar sua ação para dissipar as duplicatas ilusórias.</p><p> Cada vez que uma criatura mirar você com um ataque enquanto a magia durar, role 1d20 para determinar se o ataque, em vez de você, mira uma das suas duplicatas.</p><p> Se você tiver três duplicatas, você deve rolar um 6 ou maior para mudar o alvo do ataque para uma duplicata. Com duas duplicatas, você deve rolar um 8 ou maior. Com uma duplicata, você deve rolar um 11 ou maior.</p><p> A CA de uma duplicata é igual a 10 + seu modificador de Destreza. Se um ataque atingir uma duplicata, ela é destruída. Uma duplicata só pode ser destruída por um ataque que a atinja. Ela ignora todos os outros danos e efeitos. A magia acaba quando todas as três duplicatas forem destruídas.</p><p> Uma criatura não pode ser afetada por essa magia se não puder enxergar, se ela contar com outros sentidos além da visão, como percepção às cegas, ou se ela puder perceber ilusões como falsas, como com visão verdadeira.","classes":["Bruxo","Feiticeiro","Mago"],"favorite":false},{"id":320,"level":"7","name":"Regeneração","name_en":"Regenerate","school":{"pt":"Transmutação","style":"transmutation"},"castingTime":"1 minuto","range":"toque","components":"V, S, M","duration":"1 hora","material":"uma conta de oração e água benta","description":"Você toca uma criatura e estimula sua habilidade de cura natural. O alvo recupera 4d8 + 15 pontos de vida. Pela duração da magia o alvo recupera 1 ponto de vida no início de cada turno dela (10 pontos de vida por minuto).</p><p> Os membro decepados do corpo do alvo (dedos, pernas, rabos e assim por diante), se tiver algum, são restaurados após 2 minutos. Se você tiver a parte decepada e segurá-la contra o topo, a magia, instantaneamente, faz com que o membro se grude ao toco.","classes":["Bardo","Clérigo","Druida"],"favorite":false},{"id":189,"level":"3","name":"Relâmpago","name_en":"Lightning Bolt","school":{"pt":"Evocação","style":"evocation"},"castingTime":"1 ação","range":"pessoal","components":"V, S, M","duration":"instantânea","material":"um pouco de pelo e uma haste de âmbar, cristal ou vidro","description":"Um relâmpago forma uma linha de 30 metros de comprimento e 1,5 metro de largura que é disparado por você em uma direção, à sua escolha. Cada criatura na linha deve realizar um teste de resistência de Destreza. Uma criatura sofre 8d6 de dano elétrico se falhar na resistência ou metade desse dano se obtiver sucesso.</p><p> O relâmpago incendeia objetos inflamáveis na área que não estejam sendo vestidos ou carregados.</p><p><strong> Em Níveis Superiores </strong>. Quando você conjurar essa magia usando um espaço de magia de 4° nível ou superior, o dano aumenta em 1d6 para cada nível do espaço acima do 3°.","classes":["Feiticeiro","Mago"],"favorite":false},{"id":190,"level":"3","name":"Remover Maldição","name_en":"Remove Curse","school":{"pt":"Abjuração","style":"abjuration"},"castingTime":"1 ação","range":"toque","components":"V, S","duration":"instantânea","description":"Ao seu toque, todas as maldições afetando uma criatura ou objeto terminam. Se o objeto for um item mágico amaldiçoado, sua maldição persiste, mas a magia rompe a sintonia do portador com o objeto, então permitindo que ele o remova ou descarte.","classes":["Bruxo","Clérigo","Mago","Paladino"],"favorite":false},{"id":137,"level":"2","name":"Repouso Tranquilo","name_en":"Gentle Repose","ritual":"s","school":{"pt":"Necromancia","style":"necromancy"},"castingTime":"1 ação","range":"toque","components":"V, S, M","duration":"10 dias","material":"uma pitada de sal e uma peça de cobre colocada em cada um dos olhos do corpo, que devem permanecer ai pela duração","description":"Você toca um corpo ou outros restos mortais. Pela duração, o alvo estará protegido de decomposição e não pode se tornar um morto - vivo. A magia também estende, efetivamente, o limite de tempo para que o alvo seja trazido de volta a vida, já que os dias passados sob a influência dessa magia não contam no tempo limite de tais magias, como <em> reviver os mortos </em>.</p> ","classes":["Clérigo","Mago"],"favorite":false},{"id":81,"level":"1","name":"Repreensão Infernal","name_en":"Hellish Rebuke","school":{"pt":"Evocação","style":"evocation"},"castingTime":"1 reação","range":"18 metros","components":"V, S","duration":"instantânea","reaction":"que você faz em resposta ao sofre dano de uma criatura a até 18 metros de você e que você possa ver","description":"Você aponta seu dedo e a criatura que causou dano a você é, momentaneamente, envolta por chamas infernais. A criatura deve realizar um teste de resistência de Destreza. Ela sofre 2d10 de dano de fogo se falhar na resistência ou metade desse dano se obtiver sucesso.</p><p><strong> Em Níveis Superiores </strong>. Quando você conjurar essa magia usando um espaço de magia de 2° nível ou superior, o dano aumenta em 1d10 para cada nível do espaço acima do 1°.","classes":["Bruxo"],"favorite":false},{"id":22,"level":"0","name":"Resistência","name_en":"Resistance","school":{"pt":"Abjuração","style":"abjuration"},"castingTime":"1 ação","range":"toque","components":"V, S, M","concentration":"s","duration":"até 1 minuto","material":"um manto em miniatura","description":"Você toca uma criatura voluntária. Uma vez, antes da magia acabar, o alvo pode rolar 1d4 e adicionar o valor jogado a um teste de resistência de sua escolha. Ele pode rolar o dado antes ou depois de realizar o teste de resistência. Então, a magia termina.","classes":["Clérigo","Druida"],"favorite":false},{"id":191,"level":"3","name":"Respirar Na Água","name_en":"Water Breathing","ritual":"s","school":{"pt":"Transmutação","style":"transmutation"},"castingTime":"1 ação","range":"9 metros","components":"V, S, M","duration":"24 horas","material":"um pedaço de cana ou palha","description":"Essa magia concede a até dez criaturas voluntária que você possa ver, dentro do alcance, a habilidade de respirar embaixo d’ água até a magia acabar. As criaturas afetadas também mantém sua forma normal de respiração.","classes":["Druida","Feiticeiro","Mago","Patrulheiro"],"favorite":false},{"id":321,"level":"7","name":"Ressurreição","name_en":"Resurrection","school":{"pt":"Necromancia","style":"necromancy"},"castingTime":"1 hora","range":"toque","components":"V, S, M","duration":"instantânea","material":"um diamante valendo, no mínimo, 1. 000 po, consumido pela magia","description":"Você toca uma criatura morta que não esteja assim a mais de um século, que não tenha morrido por velhice e que não seja um morto - vivo. Se a alma da criatura estiver disposta e livre, o alvo volta a vida com todos os seus pontos de vida.</p><p> Essa magia neutraliza quaisquer venenos e cura doenças normais que afetavam a criatura no momento da morte. Essa magia, no entanto, não remove doenças mágicas, maldições ou efeitos similares, se eles não tiverem sido removidos antes da conjuração da magia, eles voltam a afetar a criatura quando ela volta a viver.</p><p> Essa magia fecha todos os ferimentos mortais e restaura partes do corpo perdidas.</p><p> Voltar dos mortos é um calvário. O alvo sofre– 4 de penalidade em todas as suas jogadas de ataque, testes de resistência e testes de habilidade. A cada vez que o alvo terminar um descanso longo, as penalidades são reduzidas em 1, até desaparecerem.</p><p> Conjurar essa magia para trazer de volta a vida uma criatura que tenha morrido a um ano ou mais tempo é extremamente desgastante para você. Até você terminar um descanso longo, você não pode conjurar magias novamente e terá desvantagem em todas as jogadas de ataque, testes de habilidade e testes de resistência.","classes":["Bardo","Clérigo"],"favorite":false},{"id":358,"level":"9","name":"Ressurreição Verdadeira","name_en":"True Resurrection","school":{"pt":"Necromancia","style":"necromancy"},"castingTime":"1 hora","range":"toque","components":"V, S, M","duration":"instantânea","material":"um borrifo de água benta e diamantes valendo, no mínimo, 25. 000 po, consumidos pela magia","description":"Você toca uma criatura morta que não esteja assim a mais de 200 anos e que tenha morrido por qualquer motivo, exceto velhice. Se a alma da criatura estiver disposta e livre, o alvo volta a vida com todos os seus pontos de vida.</p><p> Essa magia fecha todos os ferimentos, neutraliza quaisquer venenos, cura todas as doenças e suspende quaisquer maldições que afligiam a criatura quando ela morreu. A magia recupera órgão e membros danificados ou perdidos.</p><p> Essa magia pode, até mesmo, prover um novo corpo, se o original não existir mais, nesse caso, você deve falar o nome da criatura. Ela aparece em um espaço desocupado, à sua escolha, a até 3 metros de você.","classes":["Clérigo","Druida"],"favorite":false},{"id":269,"level":"5","name":"Restauração Maior","name_en":"Greater Restoration","school":{"pt":"Abjuração","style":"abjuration"},"castingTime":"1 ação","range":"toque","components":"V, S, M","duration":"instantânea","material":"pó de diamante valendo, no mínimo, 100 po, consumido pela magia","description":"Você imbui uma criatura que você toca, com energia positiva para desfazer um efeito debilitante. Você pode reduzir a exaustão do alvo em um nível ou remover um dos seguintes do alvo: </p><ul><li> Um efeito que enfeitice ou petrifique o alvo </li><li> Uma maldição, incluindo a sintonização do alvo com um item mágico amaldiçoado </li><li> Qualquer redução a um dos valores de habilidade do alvo </li><li> Um efeito que esteja reduzindo o máximo de pontos de vida do alvo </li></ ul>","classes":["Bardo","Clérigo","Druida"],"favorite":false},{"id":138,"level":"2","name":"Restauração Menor","name_en":"Lesser Restoration","school":{"pt":"Abjuração","style":"abjuration"},"castingTime":"1 ação","range":"toque","components":"V, S","duration":"instantânea","description":"Você toca uma criatura e pode, ou acabar com uma doença ou uma condição que a esteja afligindo. A condição pode ser cega, surda, paralisada ou envenenada.","classes":["Bardo","Clérigo","Druida","Paladino","Patrulheiro"],"favorite":false},{"id":270,"level":"5","name":"Reviver Os Mortos","name_en":"Raise Dead","school":{"pt":"Necromancia","style":"necromancy"},"castingTime":"1 hora","range":"toque","components":"V, S, M","duration":"instantânea","material":"um diamante valendo, no mínimo, 500 po, consumido pela magia","description":"Você traz uma criatura morta que você tocar de volta a vida, considerando que ela não esteja morta a mais de 10 dias. Se a alma da criatura estiver tanto disposta quando livre para juntar - se ao corpo dela, a criatura volta a vida com 1 ponto de vida.</p><p> Essa magia também neutraliza quaisquer venenos e cura doenças não - mágicas que afetavam a criatura no momento da morte. Essa magia, no entanto, não remove doenças mágicas, maldições ou efeitos similares, se eles não tiverem sido removidos antes da conjuração da magia, eles voltam a afetar a criatura quando ela volta a viver. A magia não pode trazer uma criatura morta - viva de volta à vida.</p><p> Essa magia fecha todos os ferimentos mortais, mas ela não restaura partes do corpo perdidas. Se a criatura não tiver uma parte do corpo ou órgão fundamental para sua sobrevivência– sua cabeça, por exemplo– a magia falha automaticamente.</p><p> Voltar dos mortos é um calvário. O alvo sofre– 4 de penalidade em todas as suas jogadas de ataque, testes de resistência e testes de habilidade. A cada vez que o alvo terminar um descanso longo, as penalidades são reduzidas em 1, até desaparecerem.","classes":["Bardo","Clérigo","Paladino"],"favorite":false},{"id":192,"level":"3","name":"Revivificar","name_en":"Revivify","school":{"pt":"Necromancia","style":"necromancy"},"castingTime":"1 ação","range":"toque","components":"V, S, M","duration":"instantânea","material":"um diamante no valor de 300 po, consumido pela magia","description":"Você toca uma criatura que tenha morrido dentro do último minuto. Essa criatura volta a vida com 1 ponto de vida. Essa magia não pode trazer de volta a vida criaturas que tenham morrido de velhice nem pode restaurar quaisquer partes do corpo perdidas.","classes":["Clérigo","Paladino"],"favorite":false},{"id":82,"level":"1","name":"Riso Histérico de Tasha","name_en":"Tasha's Hideous Laughter","school":{"pt":"Encantamento","style":"enchantment"},"castingTime":"1 ação","range":"9 metros","components":"V, S, M","concentration":"s","duration":"até 1 minuto","material":"pequenas tortas e uma pena que é balançada no ar","description":"Uma criatura, à sua escolha, que você possa ver, dentro do alcance, acha tudo hilariantemente engraçado e cai na gargalhada, se essa magia afetá-la. O alvo deve ser bem sucedido em um teste de resistência de Sabedoria ou cairá no chão, ficando incapacitado e incapaz de se levantar pela duração. Uma criatura com valor de Inteligência 4 ou inferior não é afetada.</p><p> Ao final de cada um dos turnos dela e, toda vez que sofrer dano, o alvo pode realizar outro teste de resistência de Sabedoria. O alvo terá vantagem no teste de resistência se ele for garantido por ele ter sofrido dano. Se obtiver sucesso, a magia acaba.","classes":["Bardo","Mago"],"favorite":false},{"id":193,"level":"3","name":"Rogar Maldição","name_en":"Bestow Curse","school":{"pt":"Necromancia","style":"necromancy"},"castingTime":"1 ação","range":"toque","components":"V, S","concentration":"s","duration":"até 1 minuto","description":"Você toca uma criatura e a criatura deve ser bem sucedida em um teste de resistência de Sabedoria ou será amaldiçoada pela duração da magia. Quando você conjura essa magia, escolha a natureza da maldição dentre as seguintes opções: </p><ul><li> Escolha um valor de habilidade. Enquanto amaldiçoado, o alvo tem desvantagem em testes de habilidade e testes de resistência feitos com esse valor de habilidade, </li><li> Enquanto amaldiçoado, o alvo tem desvantagem nas jogadas de ataque contra você.</li><li> Enquanto amaldiçoado, o alvo deve realizar um teste de resistência de Sabedoria no começo de cada um dos turnos dela. Se ela falhar, ela perderá sua ação aquele turno, não fazendo nada.</li><li> Enquanto o alvo estiver amaldiçoado, seus ataques e magias causam 1d8 de dano necrótico extra a ele.</li></ ul>","classes":["Bardo","Clérigo","Mago"],"favorite":false},{"id":83,"level":"1","name":"Salto","name_en":"Jump","school":{"pt":"Transmutação","style":"transmutation"},"castingTime":"1 ação","range":"toque","components":"V, S, M","duration":"1 minuto","material":"uma perna de gafanhoto","description":"Você toca uma criatura. A distância de salto da criatura é triplicada até a magia acabar.","classes":["Druida","Feiticeiro","Mago","Patrulheiro"],"favorite":false},{"id":84,"level":"1","name":"Santuário","name_en":"Sanctuary","school":{"pt":"Abjuração","style":"abjuration"},"castingTime":"1 ação bônus","range":"9 metros","components":"V, S, M","duration":"1 minuto","material":"um pequeno espelho de prata","description":"Você protege uma criatura, dentro do alcance, contra ataques. Até a magia acabar, qualquer criatura que tentar atacar ou usar magias que causem dano contra criatura protegida deve, primeiro, realizar um teste de resistência de Sabedoria. Se falhar na resistência, a criatura deve escolher um novo alvo ou perderá o ataque ou magia. Essa magia não protege a criatura contra efeitos de área, como a explosão de uma bola de fogo.</p><p> Se a criatura protegida realizar um ataque ou conjurar uma magia que afete uma criatura inimiga, essa magia acaba.","classes":["Clérigo"],"favorite":false},{"id":228,"level":"4","name":"Santuário Particular de Mordenkainen","name_en":"Mordenkainen's Private Sanctum","school":{"pt":"Abjuração","style":"abjuration"},"castingTime":"10 minutos","range":"36 metros","components":"V, S, M","duration":"24 horas","material":"uma folha de chumbo, um pedaço de vidro opaco, um chumaço de algodão ou pano e pó de crisólita","description":"Você deixa uma área, dentro do alcance, magicamente segura. A área é um cubo que pode ser tão pequeno quanto 1,5 metro ou tão grande quanto 30 metros de cada lado. A magia permanece pela duração ou até você usar uma ação para dissipá-la.</p><p> Quando você conjura essa magia, você decide que tipo de segurança ela fornecerá, escolhendo qualquer ou todas as propriedades a seguir: </p><ul><li> Sons não podem atravessar a barreira na fronteira da área protegida.</li><li> A barreira da área protegida escura e nebulosa, impedindo visão (inclusive visão no escuro) através dela.</li><li> Sensores criados por magia de adivinhação não podem aparecer dentro da área protegida ou atravessar a barreira no perímetro.</li><li> As criaturas na área não podem ser alvo de magias de adivinhação.</li><li> Nada pode se teletransportar para dentro ou para fora da área protegida.</li><li> Viagem planar está bloqueada para dentro da área protegida.</li></ ul><p> Conjurar essa magia no mesmo lugar, a cada dia, por um ano, torna o efeito permanente.</p><p><strong> Em Níveis Superiores </strong>. Quando você conjurar essa magia usando um espaço de magia de 5° nível ou superior, você pode aumentar o tamanho do cubo em 30 metros de cada lado para cada nível do espaço acima do 4°. Então, você poderia proteger um cubo de até 60 metros de lado usando um espaço de magia de 5° nível.","classes":["Mago"],"favorite":false},{"id":85,"level":"1","name":"Saraivada de Espinhos","name_en":"Hail Of Torns","school":{"pt":"Conjuração","style":"conjuration"},"castingTime":"1 ação bônus","range":"pessoal","components":"V","concentration":"s","duration":"até 1 minuto","description":"Da próxima vez que você atingir uma criatura com um ataque à distância com arma, antes da magia acabar, essa magia cria uma chuva de espinhos que brota da sua arma à distância ou munição. Além do efeito normal do ataque, o alvo do ataque e cada criatura a até 1,5 metro dele, devem realizar um teste de resistência de Destreza. Uma criatura sofre 1d10 de dano perfurante se falhar na resistência ou metade desse dano se obtiver sucesso.</p><p><strong> Em Níveis Superiores </strong>. Quando você conjurar essa magia usando um espaço de magia de 2° nível ou superior, o dano aumenta em 1d10 para cada nível do espaço acima do 1° (até o máximo de 6d10).","classes":["Patrulheiro"],"favorite":false},{"id":341,"level":"8","name":"Semiplano","name_en":"Demiplan","school":{"pt":"Conjuração","style":"conjuration"},"castingTime":"1 ação","range":"18 metros","components":"V","duration":"1 hora","description":"Você cria uma porta umbral em uma superfície sólida e lisa que você possa ver, dentro do alcance. A porta é grande o suficiente para permitir a passagem de criaturas Médias sem dificuldade. Quando aberta, a porta levará a um semiplano que parece uma sala vazia de 9 metros quadrados de dimensão, feita de madeira ou pedra. Quando a magia termina, a porta desaparece e, qualquer criatura ou objeto dentro do semiplano, permanecerá preso lá, a medida que a porta desaparece do outro lado.</p><p> Cada vez que você conjura essa magia, você pode criar um novo semiplano ou fazer a porta umbral se conectar a um semiplano que você tenha criado em uma conjuração anterior dessa magia. Além disso, se você conhecer a natureza e conteúdo do semiplano criado através da conjuração dessa magia por outra criatura, você pode fazer com que a porta umbral se conecte a esse semiplano.","classes":["Bruxo","Mago"],"favorite":false},{"id":139,"level":"2","name":"Sentido Bestial","name_en":"Beast Sense","ritual":"s","school":{"pt":"Adivinhação","style":"divination"},"castingTime":"1 ação","range":"toque","components":"S","concentration":"s","duration":"até 1 hora","description":"Você toca uma besta voluntária. Pela duração da magia, você pode usar sua ação para ver através dos olhos e ouvir através dos ouvidos da besta e continua a fazê - lo até você usar sua ação para retornar aos seus sentidos normais.</p><p> Enquanto estiver utilizando os sentidos da besta, você ganha os benefícios de qualquer sentido especial possuído pela criatura, no entanto, você estará cego e surdo em relação aos seus próprios sentidos.","classes":["Druida","Patrulheiro"],"favorite":false},{"id":86,"level":"1","name":"Servo Invisível","name_en":"Unseen Servant","ritual":"s","school":{"pt":"Conjuração","style":"conjuration"},"castingTime":"1 ação","range":"18 metros","components":"V, S, M","duration":"1 hora","material":"um pedaço de barbante e um pouco de madeira","description":"Essa magia cria uma força invisível, sem mente e sem forma que realiza tarefas simples, ao seu comando, até a magia acabar. O servo aparece do nada em um espaço desocupado no chão, dentro do alcance. Ele tem CA 10, 1 ponto de vida, Força 2 e não pode atacar. Se ele cair a 0 pontos de vida, a magia acaba.</p><p> Uma vez em cada um dos seus turnos, com uma ação bônus, você pode comandar, mentalmente, o servo para se mover até 4, 5 metros e interagir com um objeto. O servo pode realizar tarefas simples que um serviçal humano faria, como buscar coisas, limpar, consertar, dobrar roupas, acender chamas, servir comida ou derramar vinho. Uma vez que um comando seja dado, o servo realiza a tarefa da melhor forma possível, até completar a tarefa, então esperará o seu próximo comando.</p><p> Se você comandar o servo a realizar uma tarefa que poderia afasta - lo a mais de 18 metros de você, a magia termina.","classes":["Bardo","Bruxo","Mago"],"favorite":false},{"id":359,"level":"9","name":"Sexto Sentido","name_en":"Foresight","school":{"pt":"Adivinhação","style":"divination"},"castingTime":"1 minuto","range":"toque","components":"V, S, M","duration":"8 horas","material":"uma pena de colibri","description":"Você toca uma criatura voluntária e a abençoa com uma habilidade limitada de ver o futuro iminente. Pela duração, o alvo não pode ser surpreendido e tem vantagem nas jogadas de ataque, testes de habilidade e testes de resistência. Além disso, outras criaturas tem desvantagem nas jogadas de ataque contra o alvo, pela duração.</p><p> Essa magia termina imediatamente, se você conjurá-la novamente antes da duração acabar.","classes":["Bardo","Bruxo","Druida","Mago"],"favorite":false},{"id":140,"level":"2","name":"Silêncio","name_en":"Silence","ritual":"s","school":{"pt":"Ilusão","style":"illusion"},"castingTime":"1 ação","range":"36 metros","components":"V, S","concentration":"s","duration":"até 10 minutos","description":"Pela duração, nenhum som pode ser criado dentro ou atravessar uma esfera de 6 metros de raio centrada num ponto, à sua escolha, dentro do alcance. Qualquer criatura ou objeto totalmente dentro da esfera é imune a dano trovejante e as criaturas estarão surdas enquanto estiverem completamente dentro dela. Conjurar magias que inclua a componente verbal é impossível ai.","classes":["Bardo","Clérigo","Patrulheiro"],"favorite":false},{"id":322,"level":"7","name":"Símbolo","name_en":"Symbol","school":{"pt":"Abjuração","style":"abjuration"},"castingTime":"1 minuto","range":"toque","components":"V, S, M","duration":"até ser dissipada ou ativada","material":"mercúrio, fósforo e pó de diamante e opala, com um valor total de, no mínimo, 1. 000 po, consumidos pela magia","description":"Quando você conjura essa magia, você inscreve um glifo nocivo, tanto sobre uma superfície (como uma secção de piso, uma parede ou mesa) quanto dentro de um objeto que possa ser fechado (como um livro, um pergaminho ou um baú de tesouro). Se você escolher uma superfície, o glifo pode cobrir uma área da superfície não superior a 3 metros de diâmetro. Se você escolher um objeto, o objeto deve permanecer no seu local, se ele for movido mais de 3 metros de onde você conjurou essa magia, o glifo será quebrado e a magia termina sem ser ativada.</p><p> O glifo é quase invisível e requer um teste de Inteligência (Investigação) contra a CD da magia para ser encontrado.</p><p> Você define o que ativa o glifo quando você conjura a magia. Para glifos inscritos em uma superfície, os gatilhos mais típicos incluem tocar ou ficar sobre o glifo, remover outro objeto cobrindo o glifo, aproximar - se a uma certa distância do glifo ou manipular um objeto onde o glifo esteja inscrito. Para glifos inscritos dentro de objetos, os gatilhos mais comuns incluem abrir o objeto, aproximar - se a uma certa distância do objeto ou ver ou ler o glifo.</p><p> Você pode, posteriormente, aperfeiçoar o gatilho para que a magia se ative apenas sob certas circunstâncias ou de acordo com as características físicas (como altura ou peso), tipo de criatura (por exemplo, a proteção poderia ser definida para afetar aberrações ou drow) ou tendência. Você pode, também, definir condições para criaturas não ativarem o glifo, como aqueles que falarem determinada senha.</p><p> Quando você inscreve o glifo, escolha uma das opções abaixo para seu efeito. Uma vez ativado, o glifo brilha, preenchendo uma esfera de 18 metros de raio com penumbra por 10 minutos, após esse tempo, a magia termina. Cada criatura na esfera, quando o glifo é ativado, é afetada por seu efeito, assim como uma criatura que entrar na esfera a primeira vez num turno ou termina seu turno nela.</p><p><em><strong> Atordoamento </strong></ em>. Cada alvo deve realizar um teste de resistência de Sabedoria e ficará atordoada por 1 minuto se falhar na resistência.</p><p><em><strong> Desespero </strong></ em>. Cada alvo deve realizar um teste de resistência de Carisma. Com uma falha na resistência, o alvo será consumido pelo desespero por 1 minuto. Durante esse período, ele não poderá atacar ou afetar qualquer criatura com habilidades, magias ou outros efeitos mágicos nocivos.</p><p><em><strong> Discórdia </strong></ em>. Cada alvo deve realizar um teste de resistência de Sabedoria. Com uma falha na resistência, um alvo irá brigar e discutir com outras criaturas por 1 minuto. Durante esse período, ele será incapaz de se comunicar compreensivamente e terá desvantagem nas jogadas de ataque e testes de habilidade.</p><p><em><strong> Dor </strong></ em>. Cada alvo deve realizar um teste de resistência de Constituição e ficará incapacitada com dores excruciantes por 1 minuto se falhar na resistência.</p><p><em><strong> Insanidade </strong></ em>. Cada alvo deve realizar um teste de resistência de Inteligência. Com uma falha na resistência, o alvo é levado a loucura por 1 minuto. Uma criatura insana, não pode realizar ações, não entende o que as outras criaturas dizem, não pode ler e fala apenas coisas sem sentido. O Mestre controla seus movimentos, que serão erráticos.</p><p><em><strong> Medo </strong></ em>. Cada alvo deve realizar um teste de resistência de Sabedoria e ficará amedrontado por 1 minuto se falhar na resistência. Enquanto estiver amedrontado, o alvo largará o que quer que esteja segurando e deve se afastar, pelo menos 9 metros do glifo em cada um dos seus turnos, se for capaz.</p><p><em><strong> Morte </strong></ em>. Cada alvo deve realizar um teste de resistência de Constituição, sofrendo 10d10 de dano necrótico se falhar na resistência ou metade desse dano se passar na resistência.</p><p><em><strong> Sono </strong></ em>. Cada alvo deve realizar um teste de resistência de Sabedoria e cairá inconsciente por 10 minutos se falhar na resistência. Uma criatura acorda se sofrer dano ou se alguém usar sua ação para sacudi - la e estapeá - la até ela acordar.","classes":["Bardo","Clérigo","Mago"],"favorite":false},{"id":271,"level":"5","name":"Similaridade","name_en":"Seeming","school":{"pt":"Ilusão","style":"illusion"},"castingTime":"1 ação","range":"9 metros","components":"V, S","duration":"8 horas","description":"Essa magia permite que você mude a aparência de qualquer quantidade de criaturas que você possa ver, dentro do alcance. Você dá a cada alvo que você escolheu uma nova aparência ilusória. Um alvo involuntário pode realizar um teste de resistência de Carisma, se for bem sucedido, a magia não o afetará.</p><p> A magia disfarça a aparência física, assim como roupa, armadura, armas e equipamentos. Você pode fazer com que cada criatura pareça 30 centímetros mais baixa ou alta e aparente ser magra, gorda ou entre. Você não pode mudar o tipo do seu corpo, portanto, você deve adotar uma forma que tenha a mesma disposição básica de membros. No mais, a extensão da sua ilusão cabe a você. A magia permanece pela duração, a menos que você usa sua ação para dissipá-la precocemente.</p><p> As mudanças criadas por essa magia não conseguem se sustentar perante uma inspeção física. Por exemplo, se você usar essa magia para adicionar um chapéu ao seu visual, objetos que passarem pelo chapéu e qualquer um que tocá - lo não sentirá nada ou sentirá sua cabeça e cabelo. Se você usar essa magia para aparentar ser mais magro do que é, a mão de alguém que a erguer para tocar em você, irá esbarrar em você enquanto ainda está, aparentemente, está no ar.</p><p> Uma criatura pode usar a ação dela para inspecionar um alvo e fazer um teste de Inteligência (Investigação) contra a CD da sua magia. Se for bem sucedido, ele estará ciente de que o alvo está disfarçado.","classes":["Bardo","Feiticeiro","Mago"],"favorite":false},{"id":323,"level":"7","name":"Simulacro","name_en":"Simulacrum","school":{"pt":"Ilusão","style":"illusion"},"castingTime":"12 horas","range":"toque","components":"V, S, M","duration":"até ser dissipada","material":"neve ou gelo em quantidade suficiente para fazer uma cópia em tamanho real da criatura duplicada, algum cabelo, recortes de unha ou outro pedaço do corpo da criatura, colocado dentro da neve ou gelo e pó de rubi no valor de 1. 500 po, polvilhado sobre a duplicata e consumido pela magia","description":"Você modela uma duplicata ilusória de uma besta ou humanoide, dentro do alcance, durante todo tempo de conjuração da magia. A duplicada é uma criatura, parcialmente real, formada de gelo ou neve e pode realizar ações e, no mais, ser tratada como uma criatura normal. Ela aparenta ser igual a original, mas tem metade do máximo de pontos de vida da criatura e é formada sem qualquer equipamento. No mais, a ilusão usa todas as estatísticas da criatura que ela copiou.</p><p> O simulacro é amigável a você e às criaturas que você designar. Ele obedece aos seus comandos verbais, se movendo e agindo de acordo com seus desejos, agindo no seu turno em combate. O simulacro não possui capacidade de aprender ou de se tornar mais poderoso, portanto, ele nunca subirá de nível ou ganhará outras habilidades, nem poderá recuperar espaços de magia gastos.</p><p> Se o simulacro sofrer dano, você pode repara - lo em um laboratório alquímico, usando ervas e minerais raros no valor de 100 po por ponto de vida recuperado. O simulacro dura até cair a 0 pontos de vida, no momento em que ele volta a ser neve e derrete instantaneamente.</p><p> Se você conjurar essa magia novamente, qualquer duplicata atualmente ativa, que você criou com essa magia, é instantaneamente destruída.","classes":["Mago"],"favorite":false},{"id":194,"level":"3","name":"Sinal de Esperança","name_en":"Beacon Of Hope","school":{"pt":"Abjuração","style":"abjuration"},"castingTime":"1 ação","range":"9 metros","components":"V, S","concentration":"s","duration":"até 1 minuto","description":"Essa magia confere esperança e vitalidade. Escolha qualquer quantidade de criaturas dentro do alcance. Pela duração, cada alvo tem vantagem em testes de resistência de Sabedoria e testes de resistência contra a morte e recuperam o máximo de pontos de vida possível em qualquer cura.","classes":["Clérigo"],"favorite":false},{"id":272,"level":"5","name":"Sonho","name_en":"Dream","school":{"pt":"Ilusão","style":"illusion"},"castingTime":"1 minuto","range":"especial","components":"V, S, M","duration":"8 horas","material":"um punhado de areia, um pouco de tinta e uma pena de escrita arrancada de um pássaro adormecido","description":"Essa magia molda os sonhos de uma criatura. Escolha uma criatura que você conheça como alvo dessa magia. O alvo deve estar no mesmo plano de existência que você. Criaturas que não dormem, como elfos, não podem ser contatados por essa magia. Você, ou uma criatura voluntária que você tocar, entram em um estado de transe. Enquanto estiver me transe, o mensageiro está ciente dos seus arredores, mas não pode realizar ações ou se mover.</p><p> Se o alvo estiver dormindo, o mensageiro aparece no sonho do alvo e pode conversar com o alvo enquanto ele estiver dormindo, até o limite da duração da magia. O mensageiro também pode modificar o meio ambiente do sonho, criando paisagens, objetos e outras imagens. O mensageiro pode sair do transe a qualquer momento, terminando o efeito da magia prematuramente. O alvo se lembra do sonho perfeitamente quando acorda. Se o alvo estiver acordado quando a magia for conjurada, o mensageiro saberá disso e pode, tanto terminar o transe (e a magia) quando esperar o alvo cair no sono, no momento em que o mensageiro aparecerá nos sonhos do alvo.</p><p> Você pode fazer o mensageiro parecer monstruoso e aterrorizante para o alvo. Se o fizer, o mensageiro pode enviar uma mensagem de não mais que dez palavras, então o alvo deve realizar um teste de resistência de Sabedoria. Se falhar na resistência, ecos da monstruosidade fantasmagórica criarão um pesadelo que permanecerá pela duração do sono do alvo e impede o alvo de ganhar qualquer benefício do descanso. Além disso, quando o alvo acordar, ele sofrerá 3d6 de dano psíquico.</p><p> Se você tiver uma parte do corpo, mecha de cabelo, recorte de unha ou porção similar do corpo do alvo, o alvo realiza seu teste de resistência com desvantagem.","classes":["Bardo","Bruxo","Mago"],"favorite":false},{"id":87,"level":"1","name":"Sono","name_en":"Sleep","school":{"pt":"Encantamento","style":"enchantment"},"castingTime":"1 ação","range":"36 metros","components":"V, S, M","duration":"1 minuto","material":"um punhado de areia fina, pétalas de rosas ou um grilo","description":"Essa magia põem as criaturas num entorpecimento mágico. Jogue 5d8, o total é a quantidade de pontos de vida de criaturas afetados pela magia. As criaturas numa área de 6 metros de raio, centrada no ponto escolhido, dentro do alcance, são afetadas em ordem ascendente dos pontos de vida atuais delas (ignorando criaturas inconscientes).</p><p> Começando com as criaturas com menos pontos de vida atuais, cada criatura afetada por essa magia cai inconsciente até a magia acabar, sofrer dano ou alguém usar sua ação para sacudi - la ou esbofeteá - la até acordar. Subtraia os pontos de vida de cada criatura do total antes de seguir para a próxima criatura com menos pontos de vida atuais. Os pontos de vida atuais da criatura devem ser iguais ou menores que o valor restante para que a criatura possa ser afetada.</p><p> Mortos - vivos e criaturas imunes a serem enfeitiçadas não são afetadas por essa magia.</p><p><strong> Em Níveis Superiores </strong>. Quando você conjurar essa magia usando um espaço de magia de 2º nível ou superior, jogue 2d8 adicionais para cada nível do espaço acima do 1°.","classes":["Bardo","Feiticeiro","Mago"],"favorite":false},{"id":141,"level":"2","name":"Sugestão","name_en":"Suggestion","school":{"pt":"Encantamento","style":"enchantment"},"castingTime":"1 ação","range":"9 metros","components":"V, M","concentration":"s","duration":"até 8 horas","material":"uma língua de cobra e, ou um pedaço de favo de mel ou uma gota de azeite doce","description":"Você sugere um curso de atividade (limitado a uma ou duas sentenças) e, magicamente, influencia um criatura que você possa ver, dentro do alcance, e que possa ouvir e compreender você. Criaturas que não podem ser enfeitiçadas são imunes a esse efeito. A sugestão deve ser formulada de modo que o curso de ação soe razoável. Dizer para a criatura se esfaquear, se arremessar em uma lança, tocar fogo em si mesma ou fazer algum outro ato obviamente nocivo anulará o efeito da magia.</p><p> O alvo deve realizar um teste de resistência de Sabedoria. Se falhar na resistência, ele seguirá o curso de ação que você descreveu, da melhor forma possível. O curso de ação sugerido pode continuar por toda a duração. Se a atividade sugerida puder ser completada em um tempo menor, a magia termina quando o alvo completar o que lhe foi dito para que fizesse.</p><p> Você pode, também, especificar condições que irão ativar uma atividade especial pela duração. Por exemplo, você poderia sugerir a um cavaleiro que entregasse seu cavalo de guerra ao primeiro mendigo que ele encontrar. Se a condição não for satisfeita antes da magia expirar, a atividade não será concluída.</p><p> Se você ou um dos seus companheiros causar dano a uma criatura afetada por essa magia, a magia termina.","classes":["Bardo","Bruxo","Feiticeiro","Mago"],"favorite":false},{"id":304,"level":"6","name":"Sugestão Em Massa","name_en":"Mass Suggestion","school":{"pt":"Encantamento","style":"enchantment"},"castingTime":"1 ação","range":"18 metros","components":"V, M","duration":"24 horas","material":"uma língua de cobra e, ou um pedaço de favo de mel ou uma gota de azeite doce","description":"Você sugere um curso de atividade (limitado a uma ou duas sentenças) e, magicamente, influencia até doze criaturas, à sua escolha, que você possa ver dentro do alcance e que possam ouvir e compreender você. Criaturas que não podem ser enfeitiçadas são imunes a esse efeito. A sugestão deve ser formulada de modo que o curso de ação soe razoável. Dizer para a criatura se esfaquear, se arremessar em uma lança, tocar fogo em si mesma ou fazer algum outro ato obviamente nocivo anulará o efeito da magia.</p><p> Cada alvo deve realizar um teste de resistência de Sabedoria. Se falhar na resistência, ele seguirá o curso de ação que você descreveu, da melhor forma possível. O curso de ação sugerido pode continuar por toda a duração. Por exemplo, você poderia sugeria a um grupo de soldados que deem todo o seu dinheiro para o primeiro mendigo que encontrarem. Se a condição não for atingida antes da magia acabar, a atividade não é realizada.</p><p> Se você ou um dos seus companheiros causar dano a uma criatura afetada por essa magia, a magia termina para aquela criatura.</p><p><strong> Em Níveis Superiores </strong>. Quando você conjurar essa magia usando um espaço de magia de 7° nível, a duração será de 10 dias. Quando você usar um espaço de magia de 8° nível, a duração será de 30 dias. Quando você usar um espaço de magia de 9° nível, a duração será de 1 ano e 1 dia.","classes":["Bardo","Bruxo","Feiticeiro","Mago"],"favorite":false},{"id":88,"level":"1","name":"Sussurros Dissonantes","name_en":"Dissonant Whispers","school":{"pt":"Encantamento","style":"enchantment"},"castingTime":"1 ação","range":"18 metros","components":"V","duration":"instantânea","description":"Você sussurra uma melodia dissonante que apenas uma criatura, à sua escolha, dentro do alcance pode ouvir, causando - lhe uma terrível dor. O alvo deve realizar um teste de resistência de Sabedoria. Se falhar na resistência, ele sofrerá 3d6 de dano psíquico e deve, imediatamente, usar sua reação, se disponível, para se mover para o mais longe possível de você. A criatura não se moverá para um terreno obviamente perigoso, como uma fogueira ou abismo. Se obtiver sucesso na resistência, o alvo sofre metade do dano e não precisa se afastar de você. Uma criatura surda obtém sucesso automaticamente na sua resistência.</p><p><strong> Em Níveis Superiores </strong>. Quando você conjurar essa magia usando um espaço de magia de 2° nível ou superior, o dano aumenta em 1d6 para cada nível do espaço acima do 1°.","classes":["Bardo"],"favorite":false},{"id":23,"level":"0","name":"Taumaturgia","name_en":"Thaumaturgy","school":{"pt":"Transmutação","style":"transmutation"},"castingTime":"1 ação","range":"9 metros","components":"V","duration":"até 1 minuto","description":"Você manifesta pequenas maravilhas, um sinal de poder sobrenatural, dentro do alcance. Você cria um dos seguintes efeitos mágicos dentro do alcance: </p><ul><li> Sua voz ressoa com o triplo do volume normal por 1 minuto.</li><li> Você provoca tremores inofensivos no solo por 1 minuto.</li><li> Você cria, instantaneamente, um som que se origina de um ponto, à sua escolha, dentro do alcance, como o barulho de um trovão, o gralhar de um corvo ou sussurros sinistros.</li><li> Você, instantaneamente, faz uma porta ou janela destrancada se abrir ou se fechar.</li><li> Você altera a aparência dos seus olhos por 1 minuto.</li></ul><p> Se você conjurar essa magia diversas vezes, você pode ter até três dos efeitos de 1 minuto ativos por vez, e você pode dissipar um desses efeitos com uma ação.","classes":["Clérigo"],"favorite":false},{"id":142,"level":"2","name":"Teia","name_en":"Web","school":{"pt":"Conjuração","style":"conjuration"},"castingTime":"1 ação","range":"18 metros","components":"V, S, M","concentration":"s","duration":"até 1 hora","material":"um pedaço de teia de aranha","description":"Você conjura uma massa de teias espessas e pegajosas num ponto, à sua escolha, dentro do alcance. As teias preenchem um cubo de 6 metros naquele ponto, pela duração. As teias são terreno difícil e causam escuridão leve na área delas.</p><p> Se as teias não estiverem sendo suportadas por duas massas sólidas (como duas paredes ou árvores) ou em camadas sobre um chão, parede ou teto, a teia conjurada desaba sobre si mesma e a magia termina no início do seu próximo turno. As teias em camadas sobre uma superfície plana terão 1,5 metro de profundidade.</p><p> Cada criatura que começar seu turno nas teias ou entrar nelas durante seu turno, deve realizar um teste de resistência de Destreza. Se falhar na resistência, a criatura estará impedida enquanto permanecer nas teias ou até se libertar.</p><p> Uma criatura impedida pelas teias pode usar sua ação para realizar um teste de Força contra a CD da magia. Se obtiver sucesso, ela não estará mais impedida.</p><p> As teias são inflamáveis. Qualquer cubo de 1,5 metro de teia exposto ao fogo, é consumida por ele em 1 rodada, causando 2d4 de dano de fogo a qualquer criatura que começar seu turno nas chamas.","classes":["Feiticeiro","Mago"],"favorite":false},{"id":273,"level":"5","name":"Telecinésia","name_en":"Telekinesis","school":{"pt":"Transmutação","style":"transmutation"},"castingTime":"1 ação","range":"18 metros","components":"V, S","concentration":"s","duration":"até 10 minutos","description":"Você adquire a habilidade de mover ou manipular criaturas ou objetos através do pensamento. Quando você conjura a magia e, com sua ação a cada turno, pela duração, você pode exercer sua vontade sobre uma criatura ou objeto que você possa ver, dentro do alcance, causando os efeitos apropriados abaixo. Você pode afetar o mesmo alvo rodada após rodada, ou escolher um novo a qualquer momento. Se você mudar de alvos, o alvo anterior não será mais afetado pela magia.</p><p><em><strong> Criatura </strong></ em>. Você pode tentar mover uma criatura Enorme ou menor. Faça um teste de habilidade com sua habilidade de conjuração resistido por um teste Força da criatura. Se você vencer a disputa, você move a criatura até 9 metros em qualquer direção, incluindo para cima, mas não além do alcance da magia. Até o final do seu próximo turno, a criatura estará impedida pelo seu agarrão telecinético. Uma criatura erguida para cima estará suspensa no ar.</p><p> Em rodadas subsequente, você pode usar sua ação para tentar manter seu agarrão telecinético na criatura repetindo o teste resistido.</p><p><em><strong> Objeto </strong></ em>. Você pode tentar mover um objeto pesando até 500 quilos. Se o objeto não estiver sendo vestido ou carregado, você o move, automaticamente, até 9 metros em qualquer direção, mas não além do alcance dessa magia.</p><p> Se o objeto estiver sendo vestido ou carregado por uma criatura, você deve realizar um teste de habilidade com sua habilidade de conjuração resistido por um teste de Força da criatura. Se você for bem sucedido, você arranca o objeto da criatura e o move até 9 metros, em qualquer direção, mas não além do alcance dessa magia.</p><p> Você pode exercer um controle refinado sobre os objetos com seu agarrão telecinético, como manipular ferramentas simples, abrir uma porta ou um recipiente, guardar ou recuperar um item de um recipiente aberto ou derramar o conteúdo de um frasco.","classes":["Feiticeiro","Mago"],"favorite":false},{"id":342,"level":"8","name":"Telepatia","name_en":"Telepathy","school":{"pt":"Adivinhação","style":"divination"},"castingTime":"1 ação","range":"ilimitado","components":"V, S, M","duration":"24 horas","material":"um par de anéis de prata unidos","description":"Você cria uma ligação telepática entre você e uma criatura voluntária com a qual você seja familiarizado. A criatura pode estar em qualquer lugar no mesmo plano de existência que você. A magia termina se você ou o alvo não estiver mais no mesmo plano.</p><p> Até a magia acabar, você e o alvo podem, instantaneamente, compartilhar palavras, imagens, sons e outras mensagens sensoriais uma com a outra através da ligação e o alvo reconhece que é você a criatura que está se comunicando com ele. A magia permite que uma criatura com valor de Inteligência mínimo de 1 compreenda o sentido das suas palavras e capta o sentido geral de qualquer mensagem sensorial que você enviar.","classes":["Mago"],"favorite":false},{"id":324,"level":"7","name":"Teletransporte","name_en":"Teleport","school":{"pt":"Conjuração","style":"conjuration"},"castingTime":"1 ação","range":"3 metros","components":"V","duration":"instantânea","description":"Essa magia, instantaneamente, transporta você e até oito criaturas voluntárias, à sua escolha, que você possa ver dentro do alcance ou um único objeto que você possa ver no alcance, para um destino que você selecionou. Se você for afetar um objeto, ele deve ser capaz de caber inteiro dentro de um cubo de 3 metros e não pode estar sendo empunhado ou carregado por uma criatura involuntária.</p><p> destino que você escolher deve ser conhecido por você e deve ser no mesmo plano de existência que você está. Sua familiaridade com o destino determina se você chegará nele com sucesso. O Mestre rola 1d100 e consulta a tabela.","classes":["Bardo","Feiticeiro","Mago"],"favorite":false},{"id":305,"level":"6","name":"Teletransporte Por Árvores","name_en":"Transport Via Plants","school":{"pt":"Conjuração","style":"conjuration"},"castingTime":"1 ação","range":"3 metros","components":"V, S","duration":"1 rodada","description":"Essa magia cria uma ligação mágica entre uma planta inanimada Grande ou maior,dentro do alcance,e outra planta a qualquer distância,no mesmo plano de existência. Você deve ter visto ou tocado a planta de destino,pelo menos uma vez antes. Pela duração,qualquer criatura pode entrar na planta alvo e sair da planta destino usando 1,5 metro de movimento.","classes":["Druida"],"favorite":false},{"id":360,"level":"9","name":"Tempestade da Vingança","name_en":"Storm Of Vegeance","school":{"pt":"Conjuração","style":"conjuration"},"castingTime":"1 ação","range":"visão","components":"V, S","concentration":"s","duration":"até 1 minuto","description":"Uma agitada nuvem tempestuosa se forma, centrada num ponto que você possa ver e se espalha num raio de 108 metros. Relâmpagos riscam a área, trovões ressoam e ventos fortes silvam. Cada criatura embaixo da nuvem (a não mais de 1. 500 metros abaixo da nuvem) quando ela aparece deve realizar um teste de resistência de Constituição. Com uma falha na resistência, uma criatura sofre 2d6 de dano trovejante e ficará surda por 5 minutos.</p><p> A cada rodada que você mantiver a concentração nessa magia, a tempestade produzirá efeitos adicionais no seu turno.</p><p><em><strong> Rodada 2 </strong></ em>. Chuva ácida cai da nuvem. Cada criatura e objeto abaixo dela nuvem sofre 1d6 de dano ácido.</p><p><em><strong> Rodada 3 </strong></ em>. Você convoca seis relâmpagos da nuvem para atingir seis criaturas ou objetos, à sua escolha, abaixo da nuvem. Uma mesma criatura ou objeto não pode ser atingido por mais de um raio. Uma criatura atingida deve realizar um teste de resistência de Destreza. A criatura sofrerá 10d6 de dano elétrico se falhar na resistência ou metade desse dano se passar.</p><p><em><strong> Rodada 4 </strong></ em>. Granizo chove da nuvem. Cada criatura abaixo da nuvem sofre 2d6 de dano de concussão.</p><p><em><strong> Rodada 5– 10 </strong></ em>. Ventos e chuva gelados atacam a área abaixo da nuvem. A área se torna terreno difícil e de escuridão densa. Cada criatura sofre 1d6 de dano de frio. Ataques com armas à distância na área são impossíveis. O vento e chuva contam como uma distração grave com os propósitos de manter a concentração em magias. Finalmente, ventos fortes (entre 30 e 75 quilômetros por hora) automaticamente dispersam nevoa, neblina e fenômenos similares na área, independentemente de serem mundanos ou mágicos.","classes":["Druida"],"favorite":false},{"id":325,"level":"7","name":"Tempestade de Fogo","name_en":"Fire Storm","school":{"pt":"Evocação","style":"evocation"},"castingTime":"1 ação","range":"45 metros","components":"V, S","duration":"instantânea","description":"Uma tempestade feita de camadas de chamas crepitantes aparece num local, à sua escolha, dentro do alcance. A área da tempestade consiste de até dez cubos de 3 metros, que você pode organizar como desejar. Cada cubo deve ter, pelo menos, uma face adjacente a face de outro cubo. Cada criatura na área deve realizar um teste de resistência de Destreza. Ela sofre 7d10 de dano de fogo se falhar na resistência, ou metade desse dano se obtiver sucesso.</p><p> O fogo causa dano aos objetos na área e incendeia objetos inflamáveis que não estejam sendo vestidos ou carregados. Se desejar, a vida vegetal na área pode não ser afetada por essa magia.","classes":["Clérigo","Druida","Feiticeiro"],"favorite":false},{"id":229,"level":"4","name":"Tempestade de Gelo","name_en":"Ice Storm","school":{"pt":"Evocação","style":"evocation"},"castingTime":"1 ação","range":"90 metros","components":"V, S, M","duration":"instantânea","material":"um pouco de poeira e algumas gotas de água","description":"Uma rajada de pedras de gelo batem no chão em um cilindro de 6 metros de raio por 12 metros de altura, centrado num ponto dentro do alcance. Cada criatura no cilindro deve realizar um teste de resistência de Destreza. Uma criatura sofre 2d8 de dano de concussão e 4d6 de dano de frio se falhar na resistência ou metade desse dano se obtiver sucesso </p><p> O granizo torna a área da tempestade em terreno difícil até o final do seu próximo turno.</p><p><strong> Em Níveis Superiores </strong>. Quando você conjurar essa magia usando um espaço de magia de 5° nível ou superior, o dano de concussão aumenta em 1d8 para cada nível do espaço acima do 4°.","classes":["Druida","Feiticeiro","Mago"],"favorite":false},{"id":230,"level":"4","name":"Tentáculos Negros de Evard","name_en":"Evard's Black Tentacles","school":{"pt":"Conjuração","style":"conjuration"},"castingTime":"1 ação","range":"27 metros","components":"V, S, M","concentration":"s","duration":"até 1 minuto","material":"um pedaço de tentáculo de um polvo gigante ou lula gigante","description":"Tentáculos negros retorcidos preenchem um quadrado de 6 metros no chão, que você possa ver dentro do alcance. Pela duração, esses tentáculos transformam o solo na área em terreno difícil.</p><p> Quando uma criatura adentrar a área afetada pela primeira vez em um turno ou começar o turno dela lá, a criatura deve ser bem sucedida num teste de resistência de Destreza ou sofrerá 3d6 de dano de concussão e estará impedida pelos tentáculos até o fim da magia. Uma criatura que começar seu turno na área e já estiver impedida pelos tentáculos sofre 3d6 de dano de concussão.</p><p> Uma criatura impedida pelos tentáculos pode usar sua ação para realizar um teste de Força ou Destreza (à escolha dela) contra a CD da sua magia. Se ela obtiver sucesso, ela se libertará.","classes":["Mago"],"favorite":false},{"id":343,"level":"8","name":"Terremoto","name_en":"Earthquake","school":{"pt":"Evocação","style":"evocation"},"castingTime":"1 ação","range":"150 metros","components":"V, S, M","concentration":"s","duration":"até 1 minuto","material":"um pouco de poeira, uma pedra e um pedaço de barro","description":"Você cria um distúrbio sísmico num ponto no solo, que você possa ver dentro do alcance. Pela duração, um tremor intenso rompe o solo em um círculo com 30 metros de raio centrado no ponto e sacode criaturas e estruturas em contato com o chão na área.</p><p> O solo na área torna - se terreno difícil. Cada criatura no solo que estiver se concentrando, deve realizar um teste de resistência de Constituição. Se falha na resistência, a concentração da criatura é interrompida.</p><p> Quando você conjura essa magia, e ao final de cada turno que você gastar se concentrando nela, cada criatura no solo na área deve realizar um teste de resistência de Destreza. Se falhar na resistência, a criatura será derrubada no chão.</p><p> Essa magia pode ter efeitos adicionais a depender do terreno na área, como determinado pelo Mestre.</p><p><em><strong> Fissuras </strong></ em>. Fissuras se abrem por toda área da magia, no começo do seu próximo turno, após você conjurar a magia. Um total de 1d6 dessas fissuras se abrem em locais escolhidos pelo Mestre. Cada um tem 1d10 x 3 metros de profundidade, 3 metros de largura e se estende de uma extremidade até o lado oposto da área da magia. Uma criatura que estiver em um ponto onde uma fissura se abriu deve ser bem sucedido num teste de resistência de Destreza ou cairá dentro dela. Uma criatura que obtenha sucesso na resistência se move com a margem da fissura, à medida que ela se abre.</p><p> Uma fissura que se abra abaixo de uma estrutura faz com que ela, automaticamente, desmorone (veja abaixo).</p><p><em><strong> Estruturas </strong></ em>. O tremor causa 50 de dano de concussão a qualquer estrutura em contato com o solo na área, quando você conjurar a magia e, no início de cada turno até a magia terminar. Se a estrutura cair a 0 pontos de vida, ela desmorona e, potencialmente, fere criaturas próximas. Uma criatura a uma distância inferior a metade da altura da estrutura deve realizar um teste de resistência de Destreza. Se falhar na resistência, a criatura sofrerá 5d6 de dano de concussão, cairá no chão e estará soterrada nos escombros, precisando de um teste de Força (Atletismo) com CD 20, usando uma ação, para escapar. O Mestre pode ajustar a CD para cima ou para baixo, dependendo da natureza dos escombros. Se obtiver sucesso na resistência, a criatura sofre metade do dano e não estará caída ou soterrada.","classes":["Clérigo","Druida","Feiticeiro"],"favorite":false},{"id":231,"level":"4","name":"Terreno Alucinógeno","name_en":"Hallucinatory Terrain","school":{"pt":"Ilusão","style":"illusion"},"castingTime":"10 minutos","range":"90 metros","components":"V, S, M","duration":"24 horas","material":"uma pedra, um galho e um pouco de planta verde","description":"Você faz com que um terreno natural num cubo de 45 metros dentro do alcance, pareça, soe e cheire com outro tipo de terreno natural. Portanto, campos abertos ou uma estrada podem ser modificados para se assemelharem a um pântano, colina, fenda ou algum outro tipo de terreno difícil ou intransponível. Uma lagoa pode ser modificada para se parecer com um prado, um precipício com um declive suave ou um barranco pedregoso com uma estrada larga e lisa. Estruturas manufaturadas, equipamentos e criaturas dentro da área não tem suas aparências modificadas.</p><p> As características táteis do terreno são inalteradas, portanto, as criaturas que adentrarem na área estão susceptíveis de ver através da ilusão. Se a diferença não for obvia ao toque, uma criatura que examine a ilusão cuidadosamente, pode realizar um teste de Inteligência (Investigação) contra a CD da magia para desacreditá-la. Uma criatura que discernir a ilusão do que ela é, a enxerga como uma imagem vaga sobrepondo o terreno.","classes":["Bardo","Bruxo","Druida","Mago"],"favorite":false},{"id":24,"level":"0","name":"Toque Arrepiante","name_en":"Chill Touch","school":{"pt":"Necromancia","style":"necromancy"},"castingTime":"1 ação","range":"36 metros","components":"V, S","duration":"1 rodada","description":"Você cria uma mão esquelética fantasmagórica no espaço de uma criatura, dentro do alcance. Realize um ataque à distância com magia contra a criatura para afetá-la com o frio sepulcral. Se atingir, a criatura sofre 1d8 de dano necrótico e não poderá recuperar pontos de vida até o início do seu próximo turno. Até lá, a mão ficará presa ao alvo.</p><p> Se você atingir um alvo morto - vivo, ele terá desvantagem nas jogadas de ataque contra você até o final do seu próximo turno.</p><p> O dano dessa magia aumenta em 1d8 quando você alcança o 5° nível (2d8), 11° nível (3d8) e 17° nível (4d8).","classes":["Bruxo","Feiticeiro","Mago"],"favorite":false},{"id":25,"level":"0","name":"Toque Chocante","name_en":"Shocking Grasp","school":{"pt":"Evocação","style":"evocation"},"castingTime":"1 ação","range":"toque","components":"V, S","duration":"instantânea","description":"Eletricidade surge da sua mão para transmitir um choque em uma criatura que você tentar tocar. Faça um ataque corpo-a-corpo com magia contra o alvo. Você tem vantagem na jogada de ataque se o alvo estiver vestindo qualquer armadura de metal. Se atingir, o alvo sofre 1d8 de dano elétrico e não pode usar reações até o início do próximo turno dele.</p><p> O dano da magia aumenta em 1d8 quando você alcança o 5° nível (2d8), 11° nível (3d8) e 17° nível (4d8).","classes":["Feiticeiro","Mago"],"favorite":false},{"id":195,"level":"3","name":"Toque Vampírico","name_en":"Vampiric Touch","school":{"pt":"Necromancia","style":"necromancy"},"castingTime":"1 ação","range":"pessoal","components":"V, S","concentration":"s","duration":"até 1 minuto","description":"O toque da sua mão coberta de sombras pode drenar a força vital dos outros para curar seus ferimentos. Realize um ataque corpo - a - corpo com magia contra uma criatura ao seu alcance. Se atingir, o alvo sofre 3d6 de dano necrótico e você recupera pontos de vida igual à metade do dano necrótico causado. Até a magia acabar, você pode realizar o ataque novamente, no seu turno, com uma ação.</p><p><strong> Em Níveis Superiores </strong>. Quando você conjurar essa magia usando um espaço de magia de 4° nível ou superior, o dano aumenta em 1d6 para cada nível do espaço acima do 3°.","classes":["Bruxo","Mago"],"favorite":false},{"id":143,"level":"2","name":"Tranca Arcana","name_en":"Arcane Lock","school":{"pt":"Abjuração","style":"abjuration"},"castingTime":"1 ação","range":"toque","components":"V, S, M","duration":"até ser dissipada","material":"pó de ouro valendo, no mínimo, 25 po, consumido pela magia","description":"Você toca uma porta, janela, portão, baú ou outra entrada fechada e ela ficará trancada pela duração. Você e as criaturas que você designar, quando você conjurar essa magia, podem abrir o objeto normalmente. Você também pode definir uma senha que, quando falada a 1,5 metro do objeto, suprime a magia por 1 minuto. De outra forma, ele é intransponível até ser quebrado ou a magia seja dissipada ou suprimida. Conjurar <em> arrombar </em> no objeto suprime a <em> tranca arcana </em> por 10 minutos.</p><p> Enquanto estiver sob efeito dessa magia, o objeto é mais difícil de quebrar ou de forçar para abrir, a CD para quebra - lo ou de arromba - lo aumenta em 10.","classes":["Mago"],"favorite":false},{"id":144,"level":"2","name":"Truque de Corda","name_en":"Rope Trick","school":{"pt":"Transmutação","style":"transmutation"},"castingTime":"1 ação","range":"toque","components":"V, S, M","duration":"1 hora","material":"pó de extrato de milho e um laço de pergaminho trançado","description":"Você toca um pedaço de corda que tenha até 18 metros de comprimento. Uma ponta da corda então, se ergue no ar até toda a corda estar erguida e perpendicular ao solo. Na ponta de cima da corda, uma entrada invisível se abre para um espaço extradimensional que permanece até a magia acabar.</p><p> O espaço extradimensional pode ser alcançado escalando a corda até o topo. O espaço pode abrigar até oito criaturas Médias ou menores. A corda pode ser puxada para dentro do buraco, fazendo - a desaparecer para os observadores do lado de fora do espaço.</p><p> Ataques e magias não podem ultrapassar a entrada, entrando ou saindo do espaço extradimensional, mas quem está dentro pode ver o lado de fora, como se estivesse olhando por uma janela de 0, 9 metro por 1,5 metro, centrada na corda.</p><p> Tudo que estiver dentro do espaço extradimensional cai quando a magia acabar.","classes":["Mago"],"favorite":false},{"id":344,"level":"8","name":"Tsunami","name_en":"Tsunami","school":{"pt":"Conjuração","style":"conjuration"},"castingTime":"1 minuto","range":"visão","components":"V, S","concentration":"s","duration":"até 6 rodadas","description":"Uma muralha de água aparece do nada num ponto, à sua escolha, dentro do alcance. Você pode fazer a muralha ter até 90 metros de comprimento, 90 metro de altura e 15 metros de espessura. A muralha permanece pela duração.</p><p> Quando a muralha aparece, cada criatura dentro da área deve realizar um teste de resistência de Força. Se falhar na resistência, uma criatura sofrerá 6d10 de dano de concussão ou metade desse dano se passar na resistência.</p><p> No início de cada um dos seus turnos, após a muralha aparecer, ela, junto com qualquer criatura nela, se afasta 15 metros de você. Qualquer criatura Enorme ou menor dentro da muralha ou no espaço que a muralha entrar quando ela se mover, deve ser bem sucedida num teste de resistência de Força ou sofrerá 5d6 de dano de concussão. Uma criatura pode sofrer esse dano apenas uma vez por rodada. No final do turno, a altura da muralha é reduzida em 15 metros e o dano que as criaturas sofrem da magia nas rodadas subsequentes é reduzido em 1d10. Quando a muralha chegar a 0 metro de altura, a magia acaba.</p><p> Uma criatura pega pela muralha, pode se mover nadando. Devido à força da onda, no entanto, a criatura deve realizar um teste de Força (Atletismo) contra a CD da magia para conseguir se mover. Se ela falhar no teste, não conseguirá se mover. Uma criatura que se mova para fora da área, cairá no chão.","classes":["Druida"],"favorite":false},{"id":196,"level":"3","name":"Velocidade","name_en":"Haste","school":{"pt":"Transmutação","style":"transmutation"},"castingTime":"1 ação","range":"18 metros","components":"V, S, M","concentration":"s","duration":"até 1 minuto","material":"uma raspa de raiz de alcaçuz","description":"Escolha uma criatura voluntária que você possa ver, dentro do alcance. Até a magia acabar, o deslocamento do alvo é dobrado, ele ganha + 2 de bônus na CA, ele tem vantagem em testes de resistência de Destreza e ganha uma ação adicional em cada um dos turnos dele. A ação pode ser usada apenas para realizar as ações de Atacar (um ataque com arma, apenas), Disparada, Desengajar, Esconder ou Usar um Objeto.</p><p> Quando a magia acabar, o alvo não poderá se mover ou realizar ações até depois do seu próximo turno, à medida que uma onda de letargia toma conta dele.","classes":["Feiticeiro","Mago"],"favorite":false},{"id":145,"level":"2","name":"Ver o Invisível","name_en":"See Invisibility","school":{"pt":"Adivinhação","style":"divination"},"castingTime":"1 ação","range":"pessoal","components":"V, S, M","duration":"1 hora","material":"um pouco de talco e um pó de prata polvilhado","description":" Pela duração, você vê criaturas e objetos invisíveis como se eles fossem visíveis e você pode ver no Plano Etéreo. Criaturas e objetos etéreos parecem espectrais e translúcidos.","classes":["Bardo","Feiticeiro","Mago"],"favorite":false},{"id":326,"level":"7","name":"Viagem Planar","name_en":"Plane Shift","school":{"pt":"Conjuração","style":"conjuration"},"castingTime":"1 ação","range":"toque","components":"V, S, M","duration":"instantânea","material":"uma haste metálica bifurcada valendo, no mínimo, 250 po, sintonizada com um plano de existência em particular","description":"Você e até oito criaturas voluntárias, que estejam de mãos dadas em um círculo, são transportadas para um plano de existência diferente. Você pode especificar o destino alvo em termos gerais, como a Cidade de Bronze do Plano Elemental do Fogo ou o palácio de Dispater na segunda camada dos Nove Infernos e você aparece no ou perto do destino. Se você estiver tentando chegar a Cidade de Bronze, por exemplo, você poderia chegar na Estrada de Aço dela, em frente aos Portões de Cinzas ou contemplando a cidade do outro lado do Mar de Fogo, à critério do Mestre.</p><p> Alternativamente, se você conhecer a sequência de selos do círculo de teletransporte em outro plano de existência, essa magia pode leva - lo para esse círculo. Se o círculo de teletransporte for muito pequeno para comportar as criaturas que você está transportando, elas aparecerão no espaço desocupado mais próximo do círculo.</p><p> Você pode usar essa magia para banir uma criatura involuntária para outro plano. Escolha uma criatura ao seu alcance e realize um ataque corpo - a - corpo com magia contra ela. Se atingir, a criatura deve realizar um teste de resistência de Carisma. Se a criatura falhar na resistência, ela é transportada para um local aleatório no plano de existência que você especificou. Uma criatura, uma vez transportada, deve encontrar seu próprio meio de retornar para seu plano de existência atual.","classes":["Bruxo","Clérigo","Druida","Feiticeiro","Mago"],"favorite":false},{"id":274,"level":"5","name":"Vidência","name_en":"Scrying","school":{"pt":"Adivinhação","style":"divination"},"castingTime":"10 minutos","range":"pessoal","components":"V, S, M","concentration":"s","duration":"até 10 minutos","material":"um foco valendo, no mínimo, 1. 000 po, como uma bola de cristal, espelho de prata ou fonte cheia de água benta","description":"Você pode ver e ouvir uma criatura em particular, à sua escolha, que esteja no mesmo plano de existência que você. O alvo deve realizar um teste de resistência de Sabedoria, que é modificador de acordo com o quão bem você conhece o alvo e o tipo de conexão física que você tem com ele. Se um alvo souber que você está conjurando essa magia, ele pode falhar no teste de resistência voluntariamente, se ele quiser ser observado.</p><p> Com um sucesso na resistência, o alvo não é afetado e você não pode usar essa magia contra ele novamente por 24 horas.</p><p> Se falhar na resistência, a magia cria um sensor invisível a até 3 metros do alvo. Você pode ver e ouvir através do sensor, como se você estivesse onde ele está. O sensor se move com o alvo, permanecendo a 3 metros dele pela duração. Uma criatura que puder ver objetos invisíveis verá o sensor como um globo luminoso do tamanho de um punho.</p><p> Ao invés de focar em uma criatura, você pode escolher um local que você já tenha visto antes como alvo dessa magia. Quando fizer isso, o sensor aparece no local e não se move.</p><table><thead><tr><th> Conhecimento </th><th> Modificador de Resistência </th></ tr></thead><tbody><tr><td> Segunda mão (você ouviu falar do alvo) </td><td> +5 </td></ tr><tr><td> Primeira mão (você foi apresentado ao alvo) </td><td> +0 </td></ tr><tr><td> Familiar (você conhece bem o alvo) </td><td> –5 </td></ tr></tbody></ table><table><thead><tr><th> Conexão </th><th> Modificador de Resistência </th></ tr></thead><tbody><tr><td> Descrição ou foto </td><td> –2 </td></ tr><tr><td> Pertences ou roupas </td><td> –4 </td></ tr><tr><td> Parte do corpo, mexa de cabelo, recorte de unha ou simular </td><td> –10 </td></ tr></tbody></ table>","classes":["Bardo","Bruxo","Clérigo","Druida","Mago"],"favorite":false},{"id":146,"level":"2","name":"Vínculo Protetor","name_en":"Warding Bond","school":{"pt":"Abjuração","style":"abjuration"},"castingTime":"1 ação","range":"toque","components":"V, S, M","duration":"1 hora","material":"um par de anéis de platina valendo, no mínimo, 50 po cada, que você e o alvo devem usar pela duração","description":"Essa magia protege uma criatura voluntária que você tocar e cria uma conexão mística entre você e o alvo até a magia acabar. Enquanto o alvo estiver a até 18 metros de você, ele recebe + 1 de bônus na CA, nos testes de resistência e terá resistência a todos os danos. No entanto, a cada vez que ele sofrer dano, você sofrerá a mesma quantidade de dano.</p><p> A magia acaba se você cair a 0 pontos de vida ou se você e o alvo ficarem separados a mais de 18 metros. Ela também termina se a magia for conjurada novamente em quaisquer das criaturas conectadas. Você também pode dissipar a magia com uma ação.","classes":["Clérigo"],"favorite":false},{"id":232,"level":"4","name":"Vinha Esmagadora","name_en":"Grasping Vine","school":{"pt":"Conjuração","style":"conjuration"},"castingTime":"1 ação bônus","range":"9 metros","components":"V, S","concentration":"s","duration":"até 1 minuto","description":"Você conjura uma vinha que brota do chão em um espaço desocupado, à sua escolha, que você possa ver dentro do alcance. Quando você conjura essa magia, você pode direcionar a vinha para que ela enlace uma criatura a até 9 metros dela que você possa ver. Essa criatura deve ser bem sucedida num teste de resistência de Destreza ou será arrastada 6 metros na direção da vinha.</p><p> Até o fim da magia, você pode direcionar a vinha para enlaçar a mesma criatura ou uma diferente, com uma ação bônus, em cada um dos seus turnos.","classes":["Druida","Patrulheiro"],"favorite":false},{"id":306,"level":"6","name":"Visão da Verdade","name_en":"True Seeing","school":{"pt":"Adivinhação","style":"divination"},"castingTime":"1 ação","range":"toque","components":"V, S, M","duration":"1 hora","material":"unguento para os olhos no valor de 25po feito de pó de cogumelo, açafrão e gordura e é consumido pela magia","description":"Essa magia concede a uma criatura voluntária tocada a habilidade de ver as coisas como elas realmente são. Pela duração, a criatura terá visão verdadeira, percebendo portas secretas escondidas por magia e podendo ver no Plano Etéreo, tudo num alcance de até 36 metros.","classes":["Bardo","Bruxo","Clérigo","Feiticeiro","Mago"],"favorite":false},{"id":147,"level":"2","name":"Visão No Escuro","name_en":"Darkvision","school":{"pt":"Transmutação","style":"transmutation"},"castingTime":"1 ação","range":"toque","components":"V, S, M","duration":"8 horas","material":"ou um pedaço de cenoura seca ou uma ágata","description":"Você toca uma criatura voluntária para conceder a ela a habilidade de ver nas trevas. Pela duração, a criatura terá visão no escuro com alcance de 18 metros.","classes":["Druida","Feiticeiro","Mago","Patrulheiro"],"favorite":false},{"id":89,"level":"1","name":"Vitalidade Falsa","name_en":"False Life","school":{"pt":"Necromancia","style":"necromancy"},"castingTime":"1 ação","range":"pessoal","components":"V, S, M","duration":"1 hora","material":"uma pequena quantidade de álcool ou bebidas destiladas","description":"Reforçando - se com uma vitalidade necromântica ilusória, você ganha 1d4 + 4 pontos de vida temporários pela duração.</p><p><strong> Em Níveis Superiores </strong>. Quando você conjurar essa magia usando um espaço de magia de 2° nível ou superior, você ganha 5 pontos de vida temporários adicionais para cada nível do espaço de magia acima do 1°.","classes":["Feiticeiro","Mago"],"favorite":false},{"id":197,"level":"3","name":"Voo","name_en":"Fly","school":{"pt":"Transmutação","style":"transmutation"},"castingTime":"1 ação","range":"toque","components":"V, S, M","concentration":"s","duration":"até 10 minutos","material":"uma pena da asa de qualquer pássaro","description":"Você toca uma criatura voluntária. O alvo ganha deslocamento de voo de 18 metros, pela duração. Quando a magia acabar, o alvo cai se ainda estiver no ar, a não ser que ele possa impedir a queda.</p><p><strong> Em Níveis Superiores </strong>. Quando você conjurar essa magia usando um espaço de magia de 4° nível ou superior, você pode afetar uma criatura adicional para cada nível do espaço acima do 3°.","classes":["Bruxo","Feiticeiro","Mago"],"favorite":false},{"id":26,"level":"0","name":"Zombaria Viciosa","name_en":"Vicious Mockery","school":{"pt":"Encantamento","style":"enchantment"},"castingTime":"1 ação","range":"18 metros","components":"V","duration":"instantânea","description":"Você libera uma série de insultos atados com encantamentos sutis numa criatura que você possa ver, dentro do alcance. Se o alvo puder ouvir você (apesar de não precisar compreende - lo), ele deve ser bem sucedido num teste de resistência de Sabedoria ou sofrerá 1d4 de dano psíquico e terá desvantagem na próxima jogada de ataque que ele fizer antes do final do próximo turno dele.</p><p> O dano dessa magia aumenta em 1d4 quando você alcança o 5° nível (2d4), 11° nível (3d4) e 17° nível (4d4).","classes":["Bardo"],"favorite":false},{"id":148,"level":"2","name":"Zona da Verdade","name_en":"Zone Of Truth","school":{"pt":"Encantamento","style":"enchantment"},"castingTime":"1 ação","range":"18 metros","components":"V, S","duration":"10 minutos","description":"Você cria uma zona mágica protegida contra enganação, numa esfera com 4, 5 metros de raio, centrada num ponto, à sua escolha, dentro do alcance. Até a magia acabar, uma criatura que entrar na área da magia pela primeira vez num turno ou começar seu turno nela, deve realizar um teste de resistência de Carisma. Se falhar na resistência, a criatura não poderá mentir deliberadamente enquanto estiver no raio. Você saberá cada criatura que passou ou falhou nesse teste de resistência.</p><p> Uma criatura afetada está ciente da magia e pode, portanto, evitar responder perguntas as quais ela normalmente responderia com uma mentira. Tais criaturas podem ser evasivas em suas respostas, contanto que permaneçam dentro dos limites da verdade.","classes":["Bardo","Clérigo","Paladino"],"favorite":false}]

/***/ }),
/* 132 */
/***/ (function(module, exports) {

module.exports = [{"name":"Adaga","value":"2 po","dice":"1d4","damage":"perfurante","weight":"0,5 kg","properties":"Acuidade, leve, arremesso (distância 6/18)","type":"simples","favorite":false,"range":"meele"},{"name":"Azagaia","value":"5 pp","dice":"1d6","damage":"perfurante","weight":"1 kg","properties":"Arremesso (distância 9/36)","type":"simples","favorite":false,"range":"meele"},{"name":"Bordão","value":"2 pp","dice":"1d6","damage":"concussão","weight":"2 kg","properties":"Versátil (1d8)","type":"simples","favorite":false,"range":"meele"},{"name":"Clava Grande","value":"2 pp","dice":"1d8","damage":"concussão","weight":"5 kg","properties":"Pesada, duas mãos","type":"simples","favorite":false,"range":"meele"},{"name":"Foice Curta","value":"1 po","dice":"1d4","damage":"cortante","weight":"1 kg","properties":"Leve","type":"simples","favorite":false,"range":"meele"},{"name":"Lança","value":"1 po","dice":"1d6","damage":"perfurante","weight":"1,5 kg","properties":"Arremesso (distância 6/18), versátil (1d8)","type":"simples","favorite":false,"range":"meele"},{"name":"Maça","value":"5 po","dice":"1d6","damage":"concussão","weight":"2 kg","properties":"","type":"simples","favorite":false,"range":"meele"},{"name":"Machadinha","value":"5 po","dice":"1d6","damage":"cortante","weight":"1 kg","properties":"Leve, arremesso (distância 6/18)","type":"simples","favorite":false,"range":"meele"},{"name":"Martelo Leve","value":"2 po","dice":"1d4","damage":"concussão","weight":"1 kg","properties":"Leve, arremesso (distância 6/18)","type":"simples","favorite":false,"range":"meele"},{"name":"Porrete","value":"1 pp","dice":"1d4","damage":"concussão","weight":"1 kg","properties":"Leve","type":"simples","favorite":false,"range":"meele"},{"name":"Arco Curto","value":"25 po","dice":"1d6","damage":"perfurante","weight":"1 kg","properties":"Munição (distância 24/96), duas mãos","type":"simples","favorite":false,"range":"ranged"},{"name":"Beste Leve","value":"25 po","dice":"1d8","damage":"perfurante","weight":"2,5 kg","properties":"Munição (distância 24/96), recarga, duas mãos","type":"simples","favorite":false,"range":"ranged"},{"name":"Dardo","value":"5 pc","dice":"1d4","damage":"perfurante","weight":"0,1 kg","properties":"Acuidade, arremesso (distância 6/18)","type":"simples","favorite":false,"range":"ranged"},{"name":"Funda","value":"1 pp","dice":"1d4","damage":"concussão","weight":"–","properties":"Munição (distância 9/36)","type":"simples","favorite":false,"range":"ranged"},{"name":"Alabarda","value":"20 po","dice":"1d10","damage":"cortante","weight":"3 kg","properties":"Pesada, alcance, duas mãos","type":"marcial","favorite":false,"range":"meele"},{"name":"Cimitarra","value":"25 po","dice":"1d6","damage":"cortante","weight":"1,5 kg","properties":"Acuidade, leve","type":"marcial","favorite":false,"range":"meele"},{"name":"Chicote","value":"2 po","dice":"1d4","damage":"cortante","weight":"1,5 kg","properties":"Acuidade, alcance","type":"marcial","favorite":false,"range":"meele"},{"name":"Espada Curta","value":"10 po","dice":"1d6","damage":"perfurante","weight":"1 kg","properties":"Acuidade, leve","type":"marcial","favorite":false,"range":"meele"},{"name":"Espada Grande","value":"50 po","dice":"2d6","damage":"cortante","weight":"3 kg","properties":"Pesada, duas mãos","type":"marcial","favorite":false,"range":"meele"},{"name":"Espada Longa","value":"15 po","dice":"1d8","damage":"cortante","weight":"1,5 kg","properties":"Versátil (1d10)","type":"marcial","favorite":false,"range":"meele"},{"name":"Glaive","value":"20 po","dice":"1d10","damage":"cortante","weight":"3 kg","properties":"Pesada, alcance, duas mãos","type":"marcial","favorite":false,"range":"meele"},{"name":"Lança de Montaria","value":"10 po","dice":"1d12","damage":"perfurante","weight":"3 kg","properties":"Alcance, especial","type":"marcial","favorite":false,"range":"meele"},{"name":"Lança Longa","value":"5 po","dice":"1d10","damage":"perfurante","weight":"4 kg","properties":"Pesada, alcance, duas mãos","type":"marcial","favorite":false,"range":"meele"},{"name":"Maça Estrela","value":"15 po","dice":"1d8","damage":"perfurante","weight":"2 kg","properties":"","type":"marcial","favorite":false,"range":"meele"},{"name":"Machado Grande","value":"30 po","dice":"1d12","damage":"cortante","weight":"3,5 kg","properties":"Pesada, duas mãos","type":"marcial","favorite":false,"range":"meele"},{"name":"Machado de Batalha","value":"10 po","dice":"1d8","damage":"cortante","weight":"2 kg","properties":"Versátil (1d10)","type":"marcial","favorite":false,"range":"meele"},{"name":"Malho","value":"10 po","dice":"2d6","damage":"concussão","weight":"5 kg","properties":"Pesada, duas mãos","type":"marcial","favorite":false,"range":"meele"},{"name":"Mangual","value":"10 po","dice":"1d8","damage":"concussão","weight":"1 kg","properties":"","type":"marcial","favorite":false,"range":"meele"},{"name":"Martelo de Guerra","value":"15 po","dice":"1d8","damage":"concussão","weight":"1 kg","properties":"Versátil (1d10)","type":"marcial","favorite":false,"range":"meele"},{"name":"Picareta de Guerra","value":"5 po","dice":"1d8","damage":"perfurante","weight":"1 kg","properties":"","type":"marcial","favorite":false,"range":"meele"},{"name":"Rapieira","value":"25 po","dice":"1d8","damage":"perfurante","weight":"1 kg","properties":"Acuidade","type":"marcial","favorite":false,"range":"meele"},{"name":"Tridente","value":"5 po","dice":"1d6","damage":"perfurante","weight":"2 kg","properties":"Arremesso (6/18), versátil (1d8)","type":"marcial","favorite":false,"range":"meele"},{"name":"Arco Longo","value":"50 po","dice":"1d8","damage":"perfurante","weight":"1 kg","properties":"Munição (distância 45/180), pesada, duas mãos","type":"marcial","favorite":false,"range":"ranged"},{"name":"Besta de Mão","value":"75 po","dice":"1d6","damage":"perfurante","weight":"1,5 kg","properties":"Munição (distância 9/36), leve, recarga","type":"marcial","favorite":false,"range":"ranged"},{"name":"Besta Pesada","value":"50 po","dice":"1d10","damage":"perfurante","weight":"4,5 kg","properties":"Munição (distância 30/120), pesada, recarga, duas mãos","type":"marcial","favorite":false,"range":"ranged"},{"name":"Zarabatana","value":"10 po","dice":"1","damage":"perfurante","weight":"0,5 kg","properties":"Munição (distância 7,5/30), recarga","type":"marcial","favorite":false,"range":"ranged"},{"name":"Rede","value":"1 po","dice":"","damage":"–","weight":"1,5 kg","properties":"Especial, arremesso (distância 1,5/4,5)","type":"marcial","favorite":false,"range":"ranged"}]

/***/ }),
/* 133 */
/***/ (function(module, exports) {

module.exports = [{"name":"Acolchoada","type":"armor","defense":"light","cost":"5 po","ac":"11 + mod Dex","strenght_min":"","stealth_disavantage":true,"weight":"4 kg","favorite":false,"description":"A armadura acolchoada consiste em camadas de panos acolchoados e batidos"},{"name":"Couro","type":"armor","defense":"light","cost":"10 po","ac":"11 + mod Dex","strenght_min":"","stealth_disavantage":"","weight":"5 kg","favorite":false,"description":"O peitoral e as ombreiras da armadura de couro são feitos de couro que foi endurecido após ser fervido em óleo. O resto da armadura é feita de materiais mais macios e mais flexíveis"},{"name":"Couro Batido","type":"armor","defense":"light","cost":"45 po","ac":"12 + mod Dex","strenght_min":"","stealth_disavantage":"","weight":"6,5 kg","favorite":false,"description":" Feita de couro resistente, mas flexível, a armadura de couro batido é reforçada com rebites ou cravos."},{"name":"Gibão de Peles","type":"armor","defense":"medium","cost":"10 po","ac":"12 + mod Dex (+2 máx)","strenght_min":"","stealth_disavantage":"","weight":"6 kg","favorite":false,"description":"Um gibão de peles é um armadura bruta consistindo de peles grossas. É comumente usada por tribos bárbaras, humanoiDex malignos e outros povos que não têm acesso às ferramentas e materiais necessários para criar uma armadura melhor."},{"name":"Camisão de Malha","type":"armor","defense":"medium","cost":"50 po","ac":"13 + mod Dex (+2 máx)","strenght_min":"","stealth_disavantage":"","weight":"10 kg","favorite":false,"description":"Feito de anéis de metal intercalados, um camisão de cota de malha é usado entre as camadas de roupa. Essa armadura oferece proteção modesta para a parte superior do corpo de quem a usa e permite que o som dos anéis de metal, friccionados uns contra os outros, sejam amortecidos pelas camadas exteriores."},{"name":"Brunea","type":"armor","defense":"medium","cost":"50 po","ac":"14 + mod Dex (+2 máx)","strenght_min":"","stealth_disavantage":true,"weight":"22,5 kg","favorite":false,"description":" Essa armadura consiste em um casaco e calças (e talvez uma saia separada) de couro coberto com peças sobrepostas de metal, assim como as escamas de peixe. O conjunto inclui manoplas."},{"name":"Peitoral","type":"armor","defense":"medium","cost":"400 po","ac":"14 + mod Dex (+2 máx)","strenght_min":"","stealth_disavantage":"","weight":"10 kg","favorite":false,"description":" A armadura peitoral é constituída por um peitoral de metal usado com couro flexível em seu interior. Embora ele deixe as pernas e braços do usuário relativamente desprotegidos, essa armadura fornece boa proteção para seus órgãos vitais, deixando quem a usa relativamente sem restrições."},{"name":"Meia-Armadura","type":"armor","defense":"medium","cost":"750 po","ac":"15 + mod Dex (+2 máx)","strenght_min":"","stealth_disavantage":true,"weight":"20 kg","favorite":false,"description":"Essa armadura é composta de placas de metal moldadas que cobrem a maior parte do corpo. Ela não inclui proteção para as pernas além de caneleiras fixadas com tiras de couro."},{"name":"Cota de anéis","type":"armor","defense":"heavy","cost":"30 po","ac":"14","strenght_min":"","stealth_disavantage":true,"weight":"20 kg","favorite":false,"description":"Esta armadura é feita de couro com pesados anéis presos a ela. Os anéis ajudam a reforçar a armadura contra golpes de espadas e machados. A cota de anéis é inferior à cota de malha e geralmente é vestida apenas por aqueles que não podem pagar por uma armadura melhor."},{"name":"Cota de malha","type":"armor","defense":"heavy","cost":"75 po","ac":"16","strenght_min":"13","stealth_disavantage":true,"weight":"27,5 kg","favorite":false,"description":"Feita de anéis de metal entrelaçados, a cota de malha inclui uma camada de tecido acolchoado usada por baixo da malha de metal para evitar atrito e amortecer o impacto dos golpes. O conjunto inclui manoplas."},{"name":"Cota de talas","type":"armor","defense":"heavy","cost":"200 po","ac":"17","strenght_min":"15","stealth_disavantage":true,"weight":"30 kg","favorite":false,"description":" Essa armadura é feita de tiras verticais de metal, rebitadas a um suporte de couro, usadas sobre um preenchimento de pano. Cotas de malha flexíveis protegem as articulações."},{"name":"Armadura de placas","type":"armor","defense":"heavy","cost":"1.500 po","ac":"18","strenght_min":"15","stealth_disavantage":true,"weight":"32,5 kg","favorite":false,"description":"A armadura de placas consiste em placas de metal moldadas para cobrir todo o corpo. Inclui luvas, botas de couro pesadas, um capacete com viseira e espessas camadas de enchimento por baixo da armadura. Fivelas e tiras de couro distribuem o peso ao longo do corpo."},{"name":"Broquel","type":"shield","defense":"light","cost":"1 po","ac":"1","strenght_min":"","stealth_disavantage":"","weight":"3 kg","favorite":false,"description":"Pequeno escudo redondo, geralmente de madeira com guarnição de ferro, podendo ser também todo de ferro ou aço, que dispunha de uma broca central."},{"name":"Escudo de madeira","type":"shield","defense":"medium","cost":"12 po","ac":"2","strenght_min":"","stealth_disavantage":"","weight":"3 kg","favorite":false,"description":"Um escudo redondo de tamanho médio, geralmente de madeira com guarnição de ferro ou aço, que cobre apenas uma parte do corpo do usuário"},{"name":"Escudo de metal","type":"shield","defense":"heavy","cost":"20 po","ac":"3","strenght_min":"12","stealth_disavantage":true,"weight":"18 kg","favorite":false,"description":"Um grande escudo geralmente de metal ou aço, que cobre a maior parte do corpo do usuário. O seu tamanho e peso prejudica a movimentação do usuário uma vez que suas proporções podem ser quase iguais à do seu portador"},{"name":"Manto de batalha","type":"armor","defense":"light","cost":"100 gp","ac":"11 + mod Dex","strenght_min":"","stealth_disavantage":false,"weight":"10 kg","favorite":false,"description":"Um manto blindado de corpo inteiro, feito principalmente para mestres de artes arcanas envolvidos em combate. Eles geralmente são feitos para oficiais de alto escalão ou conjuradores militares, e alguns podem ser tão ornamentados quanto roupas finas. O manto de batalha é preenchido com placas de couro endurecido em locais estratégicos, de modo que eles não dificultam o movimento mais do que um manto comum faria. Como tal, qualquer um pode usar um manto de batalha sem penalidade, independentemente da proficiência."},{"name":"Colete de duelista","type":"armor","defense":"light","cost":"80 gp","ac":"11 + mod Dex","strenght_min":"","stealth_disavantage":false,"weight":"3,5 kg","favorite":false,"description":"Couro, escamas, correntes e chapas combinam-se para criar um conjunto de armaduras leves e flexíveis que foi desenvolvido para proteger o usuário durante um duelo. O colete é leve o suficiente para ser escondido sob a roupa. O usuário deste colete recebe -1 de dano perfurante de ataques não-mágicos. Esse ajuste vem antes da resistência a danos."},{"name":"Armadura leve élfica","type":"armor","defense":"light","cost":"400 gp","ac":"11 + mod Dex","strenght_min":"","stealth_disavantage":false,"weight":"2 kg","favorite":false,"description":"Esta armadura leve de corrente de cota de malha e couro ajuda a caçadores elfos escondidos em terrenos arborizados. Você tem vantagem em testes de Destreza (Furtividade) ao tentar se esconder em tal terreno, e pode se esconder em tal terreno mesmo se você não tiver cobertura."},{"name":"Lamelar de couro","type":"armor","defense":"light","cost":"30 gp","ac":"12 + mod Dex","strenght_min":"","stealth_disavantage":true,"weight":"6 kg","favorite":false,"description":"Lamelar de couro consiste em peças grossas de couro cru laçadas e amarradas juntas para formar uma couraça e uma saia. É mais resistente que a armadura de couro normal, mas menos furtiva."},{"name":"Placas de couro","type":"armor","defense":"light","cost":"500 gp","ac":"13 + mod Dex","strenght_min":"","stealth_disavantage":true,"weight":"9 kg","favorite":false,"description":"A armadura de placas de couro é planejada como um casamento do peso leve e da flexibilidade da armadura de couro e da força da placa. Armadura de placas de couro é uma base de armadura de couro cheio com comprimentos de cota de malha, segmentada em cima das juntas, e placas de aço menores fixadas ao longo da armadura."},{"name":"Loriga segmentada","type":"armor","defense":"heavy","cost":"45 gp","ac":"15","strenght_min":"11","stealth_disavantage":true,"weight":"14 kg","favorite":false,"description":"Um precursor da verdadeira armadura de placas, a loriga segmentaaa é essencialmente uma armadura laminar (feita de tiras sobrepostas de metal) que cobre a parte superior do tronco, os ombros e a parte superior dos braços. A maior parte do traje consiste em aros de metal cortados e presos na frente e nas costas, que envolvem o corpo. Os ombros são protegidos por uma série de arcos sobrepostos. As fixações são tipicamente de latão. Esta armadura pode ser dobrada em si mesma de forma telescópica, e assim pode ser armazenada e transportada de forma fácil e discreta, como em uma mochila."},{"name":"Escudo de couro","type":"shield","defense":"light","cost":"5 gp","ac":"+1","strenght_min":"","stealth_disavantage":false,"weight":"1,5 kg","favorite":false,"description":"Um escudo de couro é um pequeno escudo de couro redondo com uma borda de metal e centro amarrado ao antebraço, permitindo que a mão segure um item. O escudo fornece ao usuário +1 AC. Se você usar essa mão como parte de uma ação ou ação de bônus, você perde o aumento para a Classe de Armadura até o início do seu próximo turno."},{"name":"Escudo de torre","type":"shield","defense":"heavy","cost":"30 gp","ac":"+2","strenght_min":"13","stealth_disavantage":true,"weight":"20 kg","favorite":false,"description":"Este escudo massivo é usado freqüentemente em exércitos organizados por sua eficácia em proteger soldados e auxiliar na formação de linhas. Enquanto você está segurando um escudo de torre, você tem uma desvantagem nas jogadas de ataque, tem metade da cobertura e você pode gastar uma quantidade de movimento igual a metade da sua velocidade para ter uma cobertura de três quartos até o início do seu próximo turno. Se você faz isso, então quando você é um obstáculo para um alvo, o escudo concede cobertura de três quartos em vez de meia cobertura"},{"name":"Escudo pesado","type":"shield","defense":"heavy","cost":"35 gp","ac":"+3","strenght_min":"15","stealth_disavantage":true,"weight":"15 kg","favorite":false,"description":"Este escudo maciço se assemelha a uma parede portátil. Seu tamanho e peso tornam-no anormalmente difícil de usar. Para manejar um escudo pesado, você deve ter proficiência tanto com escudos como com armaduras pesadas. Enquanto você está empunhando um pesado escudo com o qual você é proficiente, quando você toma a ação 'desviar' você ganha metade da cobertura até o começo do seu próximo turno."}]

/***/ }),
/* 134 */
/***/ (function(module, exports) {

module.exports = [{"name":"Pacote de Artista","value":"40 po","description":"Inclui uma mochila, um saco de dormir, duas fantasias, 5 velas, 5 dias de rações, um cantil e um kit de disfarce."},{"name":"Pacote de Assaltante","value":"16 po","description":"Inclui uma mochila, um saco com 1.000 esferas de metal, 3 metros de linha, um sino, 5 velas, um pé de cabra, um martelo, 10 pítons, uma lanterna coberta, 2 frascos de óleo, 5 dias de rações, uma caixa de fogo e um cantil. O kit também possui 15 metros de corda de cânhamo amarrada ao lado dele."},{"name":"Pacote de Aventureiro","value":"12 po","description":"Inclui uma mochila, um pé de cabra, um martelo, 10 pítons, 10 tochas, uma caixa de fogo, 10 dias de rações e um cantil. O kit também tem 15 metros de corda de cânhamo amarrada ao lado dele."},{"name":"Pacote de Diplomata","value":"39 po","description":"Inclui um baú, 2 caixas para mapas ou pergaminhos, um conjunto de roupas finas, um vidro de tinta, uma caneta tinteiro, uma lâmpada, 2 frascos de óleo, 5 folhas de papel, um vidro de perfume, parafina e sabão."},{"name":"Pacote de Estudioso","value":"40 po","description":"Inclui uma mochila, um livro de estudo, um vidro de tinta, uma caneta tinteiro, 10 folhas de pergaminho, um saquinho de areia e uma pequena faca."},{"name":"Pacote de Explorador","value":"10 po","description":"Inclui uma mochila, um saco de dormir, um kit de refeição, uma caixa de fogo, 10 tochas, 10 dias de rações e um cantil. O kit também tem 15 metros de corda de cânhamo amarrada ao lado dele."},{"name":"Pacote de Sacerdote","value":"19 po","description":"Inclui uma mochila, um cobertor, 10 velas, uma caixa de fogo, uma caixa de esmolas, 2 blocos de incenso, um incensário, vestes, 2 dias de rações e um cantil."}]

/***/ })
],[26]);
//# sourceMappingURL=app.d7aeedd89ed526a981b0.js.map