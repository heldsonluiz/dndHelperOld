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
//
//
//
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
      navLinks: [{ name: 'itens', target: '/itens', icon: 'ico-chest' }, { name: 'home', target: '/', icon: 'ico-castle' }, { name: 'magias', target: '/spells', icon: 'ico-crystal' }]
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
      classes: ['B??rbaro', 'Bardo', 'Bruxo', 'Cl??rigo', 'Druida', 'Feiticeiro', 'Guerreiro', 'Ladino', 'Mago', 'Monge', 'Paladino', 'Patrulheiro'],
      schools: ['Abjura????o', 'Adivinha????o', 'Conjura????o', 'Encantamento', 'Evoca????o', 'Ilus??o', 'Necromancia', 'Transmuta????o'],
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
        text: 'N??vel'
      }, {
        slug: 'ldesc',
        icon: 'arrow_downward',
        text: 'N??vel'
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Spell__ = __webpack_require__(57);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      this.loadingSpells = true;
      setTimeout(() => {
        this.$vuetify.goTo(0, {
          duration: 500,
          easing: 'easeInOutCubic'
        });
        this.loadingSpells = false;
      }, 500);
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
      let list = this.filteredList;
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

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'itens',
  data() {
    return {
      title: 'Itens',
      itens: [{ name: 'Armaduras', target: 'armaduras', icon: 'ico-armor', disabled: false }, { name: 'Armas', target: 'armas', icon: 'ico-axes', disabled: false }, { name: 'Pacotes', target: 'pacotes', icon: 'ico-backpack', disabled: false }, { name: 'Diversos', target: 'diversos', icon: 'ico-axes', disabled: true }, { name: 'Ferramentas', target: 'pacotes', icon: 'ico-hammer', disabled: true }, { name: 'Transporte', target: 'pacotes', icon: 'ico-wheel', disabled: true }, { name: 'Com??rcio', target: 'pacotes', icon: 'ico-exchange', disabled: true }, { name: 'Despesas', target: 'pacotes', icon: 'ico-paper', disabled: true }, { name: 'Bugigangas', target: 'pacotes', icon: 'ico-windmill', disabled: true }]
    };
  }
});

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_itens_armas_ListaArmas__ = __webpack_require__(68);
//
//
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
      children: [{ title: 'Corpo-a-corpo', tipo: 'meele', icon: 'ico-meele' }, { title: 'Dist??ncia', tipo: 'ranged', icon: 'ico-ranged' }]
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_itens_armaduras_ListaArmaduras__ = __webpack_require__(72);
//
//
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
      children: [{ title: 'Leves', type: 'armor', defense: 'light', icon: 'ico-helmet-light' }, { title: 'M??dias', type: 'armor', defense: 'medium', icon: 'ico-helmet-medium' }, { title: 'Pesadas', type: 'armor', defense: 'heavy', icon: 'ico-helmet-heavy' }, { title: 'Escudos', type: 'shield', icon: 'ico-shield' }]
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Dice__ = __webpack_require__(78);
//
//
//
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuelidate_lib_validators__ = __webpack_require__(95);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vuetify__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vuetify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_vuetify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_vuelidate__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_vuelidate___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_vuelidate__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_Loading__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__data__ = __webpack_require__(128);









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
exports.push([module.i, ".border{border:1px solid red!important}.no-padding{padding:0!important}.v-bottom-nav{height:70px!important}.v-bottom-nav .v-btn{min-width:60px;padding:14px 12px 10px;opacity:1}.v-bottom-nav .v-btn .navigation-text{text-transform:uppercase;padding:3px 0;font-size:13px;font-weight:bolder}.v-btn--active:before,.v-btn:focus:before,.v-btn:hover:before{background-color:transparent}.v-messages{display:none}.v-card{border-radius:5px}.appear{backface-visibility:hidden;z-index:1}.appear-move{transition:all .6s ease-in-out 50ms}.appear-enter-active{transition:all .3s ease-out}.appear-leave-active{transition:all .2s ease-in;position:absolute;z-index:0}.appear-enter,.appear-leave-to{opacity:0}.appear-enter{transform:scale(.9)}.v-expansion-panel__header{padding:12px}.list-of-itens{border-radius:5px}.details .flex{padding:3px 8px!important}.v-text-field__details{display:none!important}", ""]);

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
        { attrs: { value: true, app: "" } },
        _vm._l(_vm.navLinks, function(item) {
          return _c(
            "v-btn",
            {
              directives: [
                {
                  name: "ripple",
                  rawName: "v-ripple",
                  value: { center: true },
                  expression: "{ center: true }"
                }
              ],
              key: item.id,
              attrs: {
                value: item.name,
                to: item.target,
                id: item.name,
                color: "light-blue darken-2",
                flat: ""
              }
            },
            [
              _c("span", { staticClass: "navigation-text" }, [
                _vm._v(_vm._s(item.name))
              ]),
              _vm._v(" "),
              _c("v-icon", { class: item.icon })
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Itens__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_itens_Armas__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_itens_Armaduras__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_itens_Pacotes__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_tools_DiceRoller__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_tools_TurnTracker__ = __webpack_require__(92);












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
                                                                ? "m??gico"
                                                                : "n??o m??gico"
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
                                                            ? "m??gico"
                                                            : "n??o m??gico"
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_daa6a60a_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Spells_vue__ = __webpack_require__(62);
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
                              label: "N??vel",
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_58df87dc_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_SpellList_vue__ = __webpack_require__(61);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_SpellList_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_58df87dc_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_SpellList_vue__["a" /* default */],
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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Spell_vue__ = __webpack_require__(14);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_074fe454_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Spell_vue__ = __webpack_require__(60);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(58)
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
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(59);
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
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, ".Spell__class[data-v-074fe454]{cursor:pointer}.Spell__details[data-v-074fe454]{list-style:none;margin:0;padding:0}", ""]);

// exports


/***/ }),
/* 60 */
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
                      _vm._v(" N??vel " + _vm._s(_vm.spell.level) + "\n        ")
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
                            _vm.spell.concentration ? "Concentra????o" : ""
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
                [_vm._v("\n          Descri????o\n        ")]
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
/* 61 */
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
        [_vm.loadingSpells ? _c("loading") : _vm._e()],
        1
      ),
      _vm._v(" "),
      !_vm.loadingSpells
        ? _c(
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
          )
        : _vm._e(),
      _vm._v(" "),
      !_vm.loadingSpells
        ? _c(
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
                attrs: {
                  circle: "",
                  length: this.numOfPages,
                  "total-visible": 6
                },
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
        : _vm._e()
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
/* 62 */
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
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Itens_vue__ = __webpack_require__(15);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_71e6cc5f_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Itens_vue__ = __webpack_require__(66);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(64)
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
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(65);
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
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, ".bordered[data-v-71e6cc5f]{border:1px solid #ccc}.v-card__text .disabled[data-v-71e6cc5f]{color:#bdbdbd}", ""]);

// exports


/***/ }),
/* 66 */
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
        { attrs: { "grid-list-md": "", "text-xs-center": "" } },
        [
          _c(
            "v-layout",
            { attrs: { row: "", wrap: "" } },
            _vm._l(_vm.itens, function(item) {
              return _c(
                "v-flex",
                {
                  key: item.name,
                  staticClass: "card",
                  attrs: { xs6: "", sm4: "", md3: "" }
                },
                [
                  _c(
                    "v-card",
                    {
                      attrs: {
                        to: item.disabled ? null : item.target,
                        disabled: item.disabled
                      }
                    },
                    [
                      _c(
                        "v-card-text",
                        { staticClass: "text-xs-center" },
                        [
                          _c("v-icon", {
                            class: item.icon,
                            attrs: {
                              color: item.disabled
                                ? "grey lighten-1"
                                : "light-blue darken-2",
                              large: ""
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "v-flex",
                            { class: item.disabled ? "disabled" : "" },
                            [_vm._v(_vm._s(item.name))]
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
    require("vue-hot-reload-api")      .rerender("data-v-71e6cc5f", esExports)
  }
}

/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Armas_vue__ = __webpack_require__(16);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_c1cd9f44_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Armas_vue__ = __webpack_require__(70);
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
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_ListaArmas_vue__ = __webpack_require__(17);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_30460168_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ListaArmas_vue__ = __webpack_require__(69);
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
/* 69 */
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
                                                    ? "m??gico"
                                                    : "n??o m??gico"
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
/* 70 */
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
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Armaduras_vue__ = __webpack_require__(18);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3ec0e45e_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Armaduras_vue__ = __webpack_require__(74);
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
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_ListaArmaduras_vue__ = __webpack_require__(19);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3970684c_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ListaArmaduras_vue__ = __webpack_require__(73);
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
/* 73 */
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
                                                    ? "m??gico"
                                                    : "n??o m??gico"
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
/* 74 */
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
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Pacotes_vue__ = __webpack_require__(20);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_342f2c35_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Pacotes_vue__ = __webpack_require__(76);
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
/* 76 */
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
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_DiceRoller_vue__ = __webpack_require__(21);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0ae3b256_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_DiceRoller_vue__ = __webpack_require__(91);
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
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Dice_vue__ = __webpack_require__(22);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6daddfea_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Dice_vue__ = __webpack_require__(81);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(79)
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
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(80);
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
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, ".dice{vertical-align:middle;width:100%}.buttons{font-size:1.4em;border-radius:50%;padding:3px;font-weight:bolder}.buttons--remove{border:1px solid #ff5252;color:#ff5252!important}.buttons--add{border:1px solid #4caf50;color:#4caf50!important}", ""]);

// exports


/***/ }),
/* 81 */
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
                  attrs: { src: __webpack_require__(82)("./d" + this.dice + ".png") }
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
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./d10.png": 83,
	"./d100.png": 84,
	"./d12.png": 85,
	"./d2.png": 86,
	"./d20.png": 87,
	"./d4.png": 88,
	"./d6.png": 89,
	"./d8.png": 90
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
webpackContext.id = 82;

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/d10.405c8ad.png";

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/d100.b36e2b9.png";

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/d12.c765991.png";

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/d2.a5d76ab.png";

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/d20.e12e6ec.png";

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/d4.ff42d1a.png";

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/d6.1589412.png";

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/d8.790d139.png";

/***/ }),
/* 91 */
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
/* 92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_TurnTracker_vue__ = __webpack_require__(23);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_14456b72_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_TurnTracker_vue__ = __webpack_require__(119);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(93)
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
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(94);
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
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "#turn-tracker .theme--light.v-text-field--outline .v-input__slot{border:1px solid #ccc!important}.button--fixedBottom{margin-bottom:40px!important;height:52px}.buttons{font-size:1.4em;border-radius:50%;padding:3px;font-weight:bolder}.buttons--remove{border:1px solid #ff5252;color:#ff5252!important}.buttons--add{border:1px solid #4caf50;color:#4caf50!important}#turn-tracker .v-text-field{padding-top:0}.item{border:1px solid #ccc;border-radius:5px;opacity:.5}.dead{border:3px solid red;opacity:.35}.selected{background-color:#e0f7e169;border:2px solid #4caf50;opacity:1}.close_badge{width:100%}.close_badge .v-badge__badge{right:-7px!important}.close_badge .v-badge__badge span i{vertical-align:middle}.round{border-radius:50%;padding:5px;margin-top:-5px!important;color:#fff!important;background-color:#ff5252}", ""]);

// exports


/***/ }),
/* 95 */,
/* 96 */,
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
/* 119 */
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
        [_c("v-icon", [_vm._v("navigate_next")]), _vm._v("pr??ximo turno\n  ")],
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
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Loading_vue__ = __webpack_require__(25);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_efe9d588_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Loading_vue__ = __webpack_require__(126);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(124)
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
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(125);
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
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, ".rotate[data-v-efe9d588]{height:70px;opacity:.35;animation:example-data-v-efe9d588 5s linear infinite}@keyframes example-data-v-efe9d588{0%{transform:rotate(0)}to{transform:rotate(1turn)}}", ""]);

// exports


/***/ }),
/* 126 */
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
              attrs: { src: __webpack_require__(127) }
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
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/loading.ab4bc22.png";

/***/ }),
/* 128 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = loadData;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_spells__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_spells___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__data_spells__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_weapons__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_weapons___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__data_weapons__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_armors__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_armors___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__data_armors__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_packages__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_packages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__data_packages__);





function loadData () {
  localStorage.setItem('spellList', JSON.stringify(__WEBPACK_IMPORTED_MODULE_0__data_spells___default.a))
  localStorage.setItem('weaponsList', JSON.stringify(__WEBPACK_IMPORTED_MODULE_1__data_weapons___default.a))
  localStorage.setItem('armorsList', JSON.stringify(__WEBPACK_IMPORTED_MODULE_2__data_armors___default.a))
  localStorage.setItem('packagesList', JSON.stringify(__WEBPACK_IMPORTED_MODULE_3__data_packages___default.a))
  localStorage.setItem('money', 0)
}


/***/ }),
/* 129 */
/***/ (function(module, exports) {

module.exports = [{"id":90,"level":"2","name":"Acalmar Emo????es","name_en":"Calm Emotions","school":{"pt":"Encantamento","style":"enchantment"},"castingTime":"1 a????o","range":"18 metros","components":"V, S","concentration":"s","duration":"at?? 1 minuto","description":"Voc?? tenta suprimir emo????es fortes em um grupo de pessoas. Cada humanoide em uma esfera de 6 metros de raio, centrada em um ponto que voc?? escolher dentro do alcance, deve realizar um teste de resist??ncia de Carisma. Uma criatura pode escolher falhar nesse teste, se desejar. Se uma criatura falhar na resist??ncia, escolha um dentre os dois efeitos a seguir.</p><p> Voc?? pode suprimir qualquer efeito que esteja deixando a criatura enfeiti??ada ou amedrontada. Quando essa magia terminar, qualquer efeito suprimido volta a funcionar, considerando que sua dura????o n??o tenha acabado nesse meio tempo.</p><p> Alternativamente, voc?? pode tornar um alvo indiferente ??s criaturas que voc?? escolher que forem hostis a ele. Essa indiferen??a acaba se o alvo for atacado ou ferido por uma magia ou se ele testemunhar qualquer dos seus amigos sendo ferido. Quando a magia terminar, a criatura se tornar?? hostil novamente, a n??o ser que o Mestre diga o contr??rio.","classes":["Bardo","Cl??rigo"],"favorite":false},{"id":198,"level":"4","name":"Adivinha????o","name_en":"Divination","ritual":"s","school":{"pt":"Adivinha????o","style":"divination"},"castingTime":"1 a????o","range":"pessoal","components":"V, S, M","duration":"instant??nea","material":"incenso e uma oferenda apropriada para sacrif??cio ?? sua religi??o, juntos valendo, no m??nimo, 25 po, consumidos pela magia","description":"Sua magia e uma oferenda colocam voc?? em contato com um deus ou servo divino. Voc?? faz uma ??nica pergunta a respeito de um objetivo, evento ou atividade espec??fico que ir?? ocorrer dentro de 7 dias. O Mestre oferece uma resposta confi??vel. A resposta deve ser uma frase curta, uma rima enigm??tica ou um press??gio.</p><p> A magia n??o leva em considera????o qualquer poss??vel circunst??ncia que possa mudar o que est?? por vir, como a conjura????o de magias adicionais ou a perda ou ganho de um companheiro.</p><p> Se voc?? conjurar a magia duas ou mais vezes antes de completar seu pr??ximo descanso longo, existe uma chance cumulativa de 25 por cento de cada conjura????o, depois da primeira que voc?? fez, ter um resultado aleat??rio. O Mestre faz essa jogada secretamente.","classes":["Cl??rigo"],"favorite":false},{"id":91,"level":"2","name":"Ajuda","name_en":"Aid","school":{"pt":"Abjura????o","style":"abjuration"},"castingTime":"1 a????o","range":"9 metros","components":"V, S, M","duration":"8 horas","material":"uma pequena fita de tecido branco","description":"Sua magia inspira seus aliados com vigor e determina????o. Escolha at?? tr??s criaturas dentro do alcance. O m??ximo de pontos de vida e os pontos de vida atuais de cada alvo aumentam em 5, pela dura????o.</p><p><strong> Em N??veis Superiores </strong>. Quando voc?? conjurar essa magia usando um espa??o de magia de 3?? n??vel ou superior, os pontos de vida dos alvos aumentam em 5 pontos adicionais para cada n??vel do espa??o acima do o 2??.","classes":["Cl??rigo","Paladino"],"favorite":false},{"id":27,"level":"1","name":"Alarme","name_en":"Alarm","ritual":"s","school":{"pt":"Abjura????o","style":"abjuration"},"castingTime":"1 minuto","range":"9 metros","components":"V, S, M","duration":"8 horas","material":"um pequeno sino e um pequeno fio de prata","description":"Voc?? coloca um alarme para intrusos desavisados. Escolha uma porta, uma janela ou uma ??rea dentro do alcance que n??o seja maior que 6 metros c??bicos. At?? a magia acabar, um alarme alerta voc?? sempre que uma criatura Mi??da ou maior tocarem ou entrarem na ??rea protegida. Quando voc?? conjura a magia, voc?? pode designar as criaturas que n??o ativar??o o alarme. Voc?? tamb??m escolhe se o alarme ser?? mental ou aud??vel.</p><p> Um alarme mental alerta voc?? com um silvo na sua mente, se voc?? estiver a at?? de 1,5 quil??metro da ??rea protegida. Esse silvo acordar?? voc?? se voc?? estiver dormindo.</p><p> Um alarme aud??vel produz o som de um sino de m??o por 10 minutos num raio de 18 metros.","classes":["Mago","Patrulheiro"],"favorite":false},{"id":275,"level":"6","name":"Aliado Planar","name_en":"Planar Ally","school":{"pt":"Conjura????o","style":"conjuration"},"castingTime":"10 minutos","range":"18 metros","components":"V, S","duration":"instant??nea","description":"Voc?? suplica a uma entidade transcendental por ajuda. O ser deve ser conhecido por voc??: seu deus, um primordial, um pr??ncipe dem??nio ou algum outro ser de poder c??smico. Essa entidade envia um celestial, um corruptor ou um elemental leal a ela para ajudar voc??, fazendo a criatura aparecer em um espa??o desocupado dentro do alcance. Se voc?? conhecer o nome de uma criatura especifica, voc?? pode falar o nome quando conjurar essa magia para requisitar essa criatura, do contr??rio, voc?? pode receber uma criatura diferente de qualquer forma (?? escolha do Mestre).</p><p> Quando a criatura aparecer, ela n??o est?? sob nenhuma compuls??o para se comportar de um modo em particular. Voc?? pode pedir a criatura que realize um servi??o em troca de um pagamento, mas ela n??o ?? obrigada a faz?? - lo. A tarefa solicitada pode variar de simples (carregue - nos voando para o outro lado do abismo ou nos ajude a lutar essa batalha) a complexa (espione nossos inimigos ou nos proteja durante nossa incurs??o na masmorra). Voc?? deve ser capaz de se comunicar com a criatura para barganhar os servi??os dela.</p><p> O pagamento pode ser feito de v??rias formas. Um celestial pode requerer uma generosa doa????o de ouro ou itens m??gicos para um templo aliado, enquanto que um corruptor pode exigir um sacrif??cio vivo ou uma parte dos esp??lios. Algumas criaturas podem trocar seus servi??os por uma miss??o feita por voc??.</p><p> Como regra geral, uma tarefa que possa ser medida em minutos, exigir?? um pagamento de 100 po por minuto. Uma tarefa medida em horas exigir?? 1. 000 po por hora. E uma tarefa medida em dias (at?? 10 dias) exigir?? 10. 000 po por dia. O Mestre pode ajustar esses pagamentos baseado nas circunst??ncias pelas quais a magia foi conjurada. Se a tarefa estiver de acordo com o car??ter da criatura, o pagamento pode ser reduzido ?? metade, ou mesmo dispensado. Tarefas que n??o proporcionem perigo, tipicamente requerem apenas metade do pagamento sugerido, enquanto que tarefas especialmente perigosas podem exigir um grande presente. As criaturas raramente aceitar??o tarefas que pare??am suicidas.</p><p> Ap??s a criatura completar a tarefa ou quando a dura????o acordada para o servi??o expirar, a criatura retornar?? para seu plano natal depois de relatar sua partida a voc??, se apropriado para a tarefa e se poss??vel. Se voc?? n??o for capaz de acertar um pre??o para os servi??os da criatura, ela imediatamente voltar?? para o seu plano natal.</p><p> Uma criatura convidada para se juntar ao seu grupo, conta como um membro dele, recebendo sua parte total na premia????o de pontos de experi??ncia.","classes":["Cl??rigo"],"favorite":false},{"id":233,"level":"5","name":"Aljava Veloz","name_en":"Swift Quiver","school":{"pt":"Transmuta????o","style":"transmutation"},"castingTime":"1 a????o b??nus","range":"toque","components":"V, S, M","concentration":"s","duration":"at?? 1 minuto","material":"uma aljava contendo, pelo menos, uma muni????o","description":"Voc?? transmuta sua aljava para que ela produza um suprimento intermin??vel de muni????es n??o - m??gicas, que parecem saltar na sua m??o quando voc?? tenta peg??-las.</p><p> Em cada um dos seus turnos, at?? a magia acabar, voc?? pode usar uma a????o b??nus para realizar dois ataques com uma arma que use muni????o de uma aljava. Cada vez que voc?? fizer tais ataques ?? dist??ncia, sua aljava, magicamente, rep??e a muni????o que voc?? usou com uma muni????o n??o - m??gica similar. Qualquer muni????o criada por essa magia se desintegra quando a magia acaba. Se a aljava n??o estiver mais com voc??, a magia acaba.","classes":["Patrulheiro"],"favorite":false},{"id":345,"level":"9","name":"Alterar Forma","name_en":"Shapechange","school":{"pt":"Transmuta????o","style":"transmutation"},"castingTime":"1 a????o","range":"pessoal","components":"V, S, M","concentration":"s","duration":"at?? 1 hora","material":"uma argola de jade valendo, no m??nimo, 1. 500 po, que voc?? deve colocar na sua cabe??a antes de conjurar a magia","description":"Voc?? assume a forma de uma criatura diferente, pela dura????o. A nova forma pode ser qualquer criatura com um n??vel de desafio igual ao seu n??vel ou menor. A criatura n??o pode ser nem um constructo nem um morto - vivo e voc?? deve ter visto esse tipo de criatura pelo menos uma vez. Voc?? se transforma num exemplar m??dio da criatura, um sem quaisquer n??veis de classe nem caracter??stica Conjura????o.</p><p> Suas estat??sticas de jogo s??o substitu??das pelas estat??sticas da forma escolhida, no entanto, voc?? mant??m sua tend??ncia e valores de Intelig??ncia, Sabedoria e Carisma. Voc?? tamb??m mant??m suas profici??ncias em testes de resist??ncia, al??m de ganhar as da nova criatura. Se a criatura tiver a mesma profici??ncia que voc?? e o b??nus listado nas estat??sticas dela for maior que o seu, use os b??nus da criatura no lugar do seu. Voc?? n??o pode usar qualquer a????o lend??ria ou de covil da nova forma.</p><p> Voc?? assume os pontos de vida e Dados de Vida da sua nova forma. Quando voc?? reverter a sua forma normal, voc?? retorna ?? quantidade de pontos de vida que tinha antes da transforma????o. Se voc?? reverter como resultado de ter ca??do a 0 pontos de vida, qualquer dano excedente ?? recebido pela sua forma normal. Contato que o dano excedente n??o reduza os pontos de vida da sua forma normal a 0, voc?? n??o cair?? inconsciente.</p><p> Voc?? mant??m os benef??cios de qualquer caracter??stica da sua classe, ra??a ou outra fonte e pode us??-las, considerando que sua nova forma ?? fisicamente capaz de faz?? - lo. Voc?? n??o pode usar quaisquer sentidos especiais que voc?? possua (por exemplo, vis??o no escuro) a n??o ser que a nova forma tamb??m possua o sentido. Voc?? s?? poder?? falar se a nova forma, normalmente, puder falar.</p><p> Quando voc?? se transforma, voc?? pode escolher se o seu equipamento cai no ch??o, ?? assimilado a sua nova forma ou ?? usado por ela. Equipamentos vestidos e carregados funcionam normalmente. O Mestre decide qual equipamento ?? vi??vel para a nova forma vestir ou usar, baseado na forma e tamanho da criatura. O seu equipamento n??o muda de forma ou tamanho para se adaptar ?? nova forma e, qualquer equipamento que a nova forma n??o possa vestir deve, ou cair no ch??o ou ser assimilado por ela. Equipamentos assimilados n??o ter??o efeito nesse estado.</p><p> Pela dura????o da magia, voc?? pode usar sua a????o para assumir uma forma diferente, seguindo as mesmas restri????es e regras da forma anterior, com uma exce????o: se sua nova forma tiver mais pontos de vida que sua forma atual, seus pontos de vida mant??m o valor atual.","classes":["Druida","Mago"],"favorite":false},{"id":92,"level":"2","name":"Alterar-se","name_en":"Alter Self","school":{"pt":"Transmuta????o","style":"transmutation"},"castingTime":"1 a????o","range":"pessoal","components":"V, S","concentration":"s","duration":"at?? 1 hora","description":"Voc?? assume uma forma diferente. Quando conjurar essa magia, escolha uma das seguintes op????es, o efeito durar?? pela dura????o da magia. Enquanto a magia durar, voc?? pode terminar uma op????o com uma a????o para ganhar os benef??cios de uma diferente.</p><p><em><strong> Adapta????o Aqu??tica </strong></ em>. Voc?? adapta seu corpo para um ambiente aqu??tico, brotando guelras e crescendo membranas entre seus dedos. Voc?? pode respirar embaixo d??? ??gua e ganha deslocamento de nata????o igual a seu deslocamento terrestre.</p><p><em><strong> Mudar Apar??ncia </strong></ em>. Voc?? transforam sua apar??ncia. Voc?? decide com o que voc?? parece, incluindo altura, peso, tra??os faciais, timbre da sua voz, comprimento do cabelo, colora????o e caracter??sticas distintas, se tiverem. Voc?? pode ficar parecido com um membro de outra ra??a, apesar de nenhuma de suas estat??sticas mudar. Voc?? tamb??m n??o pode parecer com uma criatura de um tamanho diferente do seu, e seu formado b??sico permanece o mesmo. Se voc?? for b??pede, voc?? n??o pode usar essa magia para se tornar quadrupede, por exemplo. A qualquer momento, pela dura????o da magia, voc?? pode usar sua a????o para mudar sua apar??ncia dessa forma, novamente.</p><p><em><strong> Armas Naturais </strong></ em>. Voc?? faz crescerem garras, presas, espinhos, chifres ou armas naturais diferentes, ?? sua escolha. Seus ataques desarmados causam 1d6 de dano de concuss??o, perfurante ou cortante, como apropriado para a arma natural que voc?? escolheu, e voc?? ?? proficiente com seus ataques desarmados. Finalmente, a arma natural ?? m??gica e voc?? tem + 1 de b??nus nas jogadas de ataque e dano que voc?? fizer com ela.","classes":["Feiticeiro","Mago"],"favorite":false},{"id":0,"level":"0","name":"Amizade","name_en":"Friends","school":{"pt":"Encantamento","style":"enchantment"},"castingTime":"1 a????o","range":"pessoal","components":"S, M","concentration":"s","duration":"at?? 1 minuto","material":"uma pequena quantidade de maquiagem aplicada ao rosto durante a conjura????o da magia.","description":"Pela dura????o, voc?? ter?? vantagem em todos os testes de Carisma direcionados a uma criatura, ?? sua escolha, que n??o seja hostil a voc??. Quando a magia acabar, a criatura perceber?? que voc?? usou maia para influenciar o humor dela, e ficar?? hostil a voc??. Uma criatura propensa a viol??ncia ir?? atacar voc??. Outra criatura pode buscar outras formas de retalia????o (a crit??rio do Mestre), dependendo da natureza da sua intera????o com ela.","classes":["Bardo","Bruxo","Feiticeiro","Mago"],"favorite":false},{"id":28,"level":"1","name":"Amizade Animal","name_en":"Animal Friendship","school":{"pt":"Encantamento","style":"enchantment"},"castingTime":"1 a????o","range":"9 metros","components":"V, S, M","duration":"24 horas","material":"um punhado de comida","description":"Essa magia deixa voc?? convencer uma besta que voc?? n??o quer prejudicar. Escolha uma besta que voc?? possa ver dentro do alcance. Ela deve ver e ouvir voc??. Se a Intelig??ncia da besta for 4 ou maior, a magia falha. Do contr??rio, a besta deve ser bem sucedida num teste de resist??ncia de Sabedoria ou ficar?? enfeiti??ada por voc?? pela dura????o da magia. Se voc?? ou um dos seus companheiros ferir o alvo, a magia termina.</p><p><strong> Em N??veis Superiores </strong>. Quando voc?? conjurar essa magia usando um espa??o de magia de 2?? n??vel ou superior, voc?? pode afetar uma besta adicional para cada n??vel do espa??o acima do 1??.","classes":["Bardo","Druida","Patrulheiro"],"favorite":false},{"id":149,"level":"3","name":"Ampliar Plantas","name_en":"Plant Growth","school":{"pt":"Transmuta????o","style":"transmutation"},"castingTime":"1 a????o ou 8 horas","range":"45 metros","components":"V, S","duration":"instant??nea","description":"Essa magia canaliza vitalidade nas plantas dentro de uma ??rea especifica. Existem dois usos poss??veis para essa magia, concedendo ou benef??cios imediatos ou a longo prazo.</p><p> Se voc?? conjurar essa magia usando 1 a????o, escolha um ponto dentro do alcance. Todas as plantas normais num raio de 30 metros centrado no ponto, tornam - se espessas e carregadas. Uma criatura se movendo na ??rea deve gastar 6 metros de movimento para cada 1,5 metro que se mover.</p><p> Voc?? pode excluir uma ou mais ??reas de qualquer tamanho, dentro da ??rea da magia, para n??o ser afetada. Se voc?? conjurar essa magia ao longo de 8 horas, voc?? fertiliza a terra. Todas as plantas num raio de 800 metros, centrado no ponto dentro do alcance, ficam enriquecidas por 1 ano. As plantas fornecer??o o dobro da quantidade normal de comida quando colhidas.","classes":["Bardo","Druida","Patrulheiro"],"favorite":false},{"id":234,"level":"5","name":"??ncora Planar","name_en":"Planar Binding","school":{"pt":"Abjura????o","style":"abjuration"},"castingTime":"1 hora","range":"18 metros","components":"V, S, M","duration":"24 horas","material":"uma joia valendo, no m??nimo, 1. 000 po, consumida pela magia","description":"Com essa magia, voc?? tenta obrigar um celestial, corruptor, elemental ou fada a servi - lo. A criatura deve estar dentro do alcance durante toda a conjura????o da magia. (Tipicamente, a criatura, primeiramente, ?? invocada dentro de um c??rculo m??gico invertido para mant?? - la presa enquanto a magia ?? conjurada.) Ao completar a conjura????o, o alvo deve realizar um teste de resist??ncia de Carisma. Se falhar na resist??ncia, ela ?? obrigada a servir voc?? pela dura????o. Se a criatura foi invocada ou criada por outra magia, a dura????o da magia ?? estendida para se equiparar a dessa magia.</p><p> Uma criatura obrigada deve seguir suas instru????es da melhor forma que puder. Voc?? poderia comandar a criatura a acompanhar voc?? em uma aventura, a guardar um local ou a enviar uma mensagem. A criatura obedece ao p?? da letra suas instru????es, mas se a criatura for hostil a voc??, ela se esfor??ar?? para distorcer suas palavras para atingir seus pr??prios objetivos. Se a criatura atender suas instru????es completamente antes da magia acabar, ela viajar?? at?? voc?? para relatar esse fato se voc?? estiver no mesmo plano de exist??ncia. Se voc?? estiver em um plano de exist??ncia diferente, ela retornar?? para o lugar onde voc?? a contatou e permanecer?? l?? at?? a magia acabar.</p><p><strong> Em N??veis Superiores </strong>. Quando voc?? conjurar essa magia usando um espa??o de magia de n??vel superior, a dura????o aumenta para 10 dias com um espa??o de 6?? n??vel, para 30 dias com um espa??o de 7?? n??vel, para 180 dias com um espa??o de 8?? n??vel e para um ano com um espa??o de magia de 9?? n??vel.","classes":["Bardo","Cl??rigo","Druida","Mago"],"favorite":false},{"id":150,"level":"3","name":"Andar Na ??gua","name_en":"Water Walk","ritual":"s","school":{"pt":"Transmuta????o","style":"transmutation"},"castingTime":"1 a????o","range":"9 metros","components":"V, S, M","duration":"1 hora","material":"uma rolha","description":"Essa magia concede a habilidade de se mover atrav??s de qualquer superf??cie l??quida??? como ??gua, ??cido, lama, neve, arreia movedi??a ou lava??? como se ela fosse ch??o s??lido inofensivo (as criaturas atravessando lava derretida ainda podem sofrer dano do calor). At?? dez criaturas volunt??ria que voc?? possa ver, dentro do alcance, ganham essa habilidade pela dura????o.</p><p> Se voc?? afetar uma criatura submersa em um l??quido, a magia ergue o alvo para a superf??cie do l??quido a uma taxa de 18 metros por rodada.","classes":["Cl??rigo","Druida","Feiticeiro","Patrulheiro"],"favorite":false},{"id":151,"level":"3","name":"Animar Mortos","name_en":"Animate Dead","school":{"pt":"Necromancia","style":"necromancy"},"castingTime":"1 minuto","range":"3 metros","components":"V, S, M","duration":"instant??nea","material":"uma gota de sangue, um peda??o de carne e uma punhado de p?? de osso","description":"Essa magia cria um servo morto - vivo. Escolha uma pilha de ossos ou um corpo de um humanoide M??dio ou Pequeno dentro do alcance. Sua magia imbui o alvo com uma imita????o corrompida de vida, erguendo - o como uma criatura morta - viva. O alvo se torna um esqueleto, se voc?? escolheu ossos, ou um zumbi, se voc?? escolheu um corpo (o Mestre tem as estat??sticas de jogo da criatura).</p><p> Em cada um dos seus turnos, voc?? pode usar uma a????o b??nus para comandar mentalmente qualquer criatura que voc?? criou com essa magia, se a criatura estiver a at?? 18 metros de voc?? (se voc?? controla diversas criaturas, voc?? pode comandar qualquer uma ou todas elas ao mesmo tempo, emitindo o mesmo comando para cada uma). Voc?? decide qual a????o a criatura ir?? fazer e para onde ela ir?? se mover durante o pr??ximo turno dela, ou voc?? pode emitir um comando geral, como para guardar uma c??mara ou corredor especifico. Se voc?? n??o der nenhum comando, as criaturas apenas se defender??o contra criaturas hostis. Uma vez que receba uma ordem, a criatura continuar?? a segui - la at?? a tarefa estar conclu??da.</p><p> A criatura fica sob seu controle por 24 horas, depois disso ela para de obedecer aos seus comandos. Para manter o controle da criatura por mais 24 horas, voc?? deve conjurar essa magia na criatura novamente, antes das 24 horas atuais terminarem. Esse uso da magia recupera seu controle sobre at?? quatro criaturas que voc?? tenha animado com essa magia, ao inv??s de animar uma nova.</p><p><strong> Em N??veis Superiores </strong>. Quando voc?? conjurar essa magia usando um espa??o de magia de 4?? n??vel ou superior, voc?? pode animar ou recuperar o controle de duas criaturas mortas - vivas para cada n??vel do espa??o acima do 3??. Cada uma dessas criaturas deve vir de um corpo ou pilha de ossos diferente.","classes":["Cl??rigo","Mago"],"favorite":false},{"id":235,"level":"5","name":"Animar Objetos","name_en":"Animate Objects","school":{"pt":"Transmuta????o","style":"transmutation"},"castingTime":"1 a????o","range":"36 metros","components":"V, S","concentration":"s","duration":"at?? 1 minuto","description":"Objetos ganham vida ao seu comando. Escolha at?? dez objetos n??o - m??gicos dentro do alcance, que n??o estejam sendo vestidos ou carregados. Alvos M??dios contam como dois objetos, alvos Grandes contam como quatro objetos e alvos Enormes contam como oito objetos. Voc?? n??o pode animar um objeto maior que Enorme. Cada alvo se anima e torna - se uma criatura sob seu controle at?? o final da magia ou at?? ser reduzido a 0 pontos de vida.</p><p> Com uma a????o b??nus, voc?? pode comandar mentalmente qualquer criatura que voc?? criar com essa magia se a criatura estiver a at?? 150 metros de voc?? (se voc?? controla v??rias criaturas, voc?? pode comandar qualquer ou todas elas ao mesmo tempo, emitindo o mesmo comando para cada uma). Voc?? decide qual a????o a criatura ir?? fazer e para onde ela ir?? se mover durante o pr??ximo turno dela, ou voc?? pode emitir um comando geral, como para guardar uma c??mara ou corredor especifico. Se voc?? n??o der nenhum comando, as criaturas apenas se defender??o contra criaturas hostis. Uma vez que receba uma ordem, a criatura continuar?? a segui - la at?? a tarefa estar conclu??da.","classes":["Bardo","Feiticeiro","Mago"],"favorite":false},{"id":327,"level":"8","name":"Antipatia/Simpatia","name_en":"Antipathy/Sympathy","school":{"pt":"Encantamento","style":"enchantment"},"castingTime":"1 hora","range":"18 metros","components":"V, S, M","duration":"10 dias","material":"ou um peda??o de alume embebido em vinagre para o efeito de antipatia, ou uma gota de mel para o efeito de simpatia","description":"Essa magia atrai ou repele as criaturas de sua escolha. Voc?? escolhe um alvo dentro do alcance, tanto um objeto ou criatura Enorme ou menor ou uma ??rea que n??o seja maior que 60 metros c??bicos. Ent??o, especifica um tipo de criatura inteligente, como drag??es vermelhos, goblins ou vampiros. Voc?? envolve o alvo com uma aura que pode atrair ou repelir as criaturas especificas pela dura????o. Escolha antipatia ou simpatia como efeito da aura.</p><p><em><strong> Antipatia </strong></ em>. O encantamento faz com que criaturas do tipo designado por voc?? sintam - se fortemente impelidos em deixar a ??rea e evitar o alvo. Quando uma dessas criaturas puder ver o alvo ou ficar a 18 metros dele, a criatura deve ser bem sucedida num teste de resist??ncia de Sabedoria ou ficar?? amedrontada. A criatura continuar?? amedrontada enquanto puder ver o alvo ou permanecer a 18 metros dele. Enquanto estiver amedrontada pelo alvo, a criatura deve usar seu deslocamento para se mover para o local seguro mais pr??ximo o qual ela n??o possa ver o alvo. Se a criatura se mover para mais de 18 metros do alvo e n??o puder v?? - lo, a criatura n??o estar?? mais amedrontada, mas ela ficar?? amedrontada novamente se voltar a ver o alvo ou ficar a 18 metros dele.</p><p><em><strong> Simpatia </strong></ em>. O encantamento faz com que as criaturas especificadas sintam - se fortemente impelidos a se aproximar do alvo enquanto estiverem a 18 metros dele ou puderem v?? - lo. Quando uma dessas criaturas puder ver o alvo ou ficar a 18 metros dele, a criatura deve ser bem sucedida num teste de resist??ncia de Vontade ou usar?? seu deslocamento em cada um dos seus turnos para entrar na ??rea ou se mover at?? o alcance do alvo. Quando a criatura tiver feito isso, ela n??o poder?? se afastar do alvo voluntariamente.</p><p> Se o alvo causar dano ou ferir a criatura afetada de alguma forma, a criatura afetada pode realizar um novo teste de resist??ncia de Sabedoria para terminar o efeito, como descrito abaixo.</p><p><em><strong> Terminando o Efeito </strong></ em>. Se uma criatura afetada terminar se turno enquanto n??o estiver a at?? 18 metros do alvo ou n??o for capaz de v?? - lo, a criatura faz um teste de resist??ncia de Sabedoria. Em um sucesso, a criatura n??o estar?? mais afetada pelo alvo e reconhecer?? o sentimento de repugn??ncia ou atra????o como m??gico. Al??m disso, uma criatura afetada pela magia tem direito a outro teste de resist??ncia de Sabedoria a cada 24 horas enquanto a magia durar.</p><p> Uma criatura que obtenha sucesso na resist??ncia contra esse efeito ficar?? imune a ele por 1 minuto, depois desse tempo, ela pode ser afetada novamente.","classes":["Druida","Mago"],"favorite":false},{"id":93,"level":"2","name":"Aprimorar Habilidade","name_en":"Enhance Ability","school":{"pt":"Transmuta????o","style":"transmutation"},"castingTime":"1 a????o","range":"toque","components":"V, S, M","concentration":"s","duration":"at?? 1 hora","material":"pelo ou penas de uma besta","description":"Voc?? toca uma criatura e a agracia com aprimoramento m??gico. Escolha um dos efeitos a seguir, o alvo ganha esse efeito at?? o fim da magia.</p><p><em><strong> Agilidade do Gato </strong></ em>. O alvo tem vantagem em testes de Destreza. Ele tamb??m n??o sofre dano ao cair de 6 metros ou menos, se n??o estiver incapacitado.</p><p><em><strong> Esperteza da Raposa </strong></ em>. O alvo tem vantagem em testes de Intelig??ncia.</p><p><em><strong> Esplendor da ??guia </strong></ em>. O alvo tem vantagem em testes de Carisma.</p><p><em><strong> For??a do Touro </strong></ em>. O alvo tem vantagem em testes de For??a e sua capacidade de carga ?? dobrada.</p><p><em><strong> Sabedoria da Coruja </strong></ em>. O alvo tem vantagem em testes de Sabedoria.</p><p><em><strong> Vigor do Urso </strong></ em>. O alvo tem vantagem em testes de Constitui????o. Ele tamb??m recebe 2d6 pontos de vida tempor??rios, que s??o perdidos quando a magia termina.</p><p><strong> Em N??veis Superiores </strong>. Quando voc?? conjurar essa magia usando um espa??o de magia de 3?? n??vel ou superior, voc?? pode afetar uma criatura adicional para cada n??vel do espa??o acima do 2??.","classes":["Bardo","Cl??rigo","Druida","Feiticeiro"],"favorite":false},{"id":346,"level":"9","name":"Aprisionamento","name_en":"Imprisionment","school":{"pt":"Abjura????o","style":"abjuration"},"castingTime":"1 minuto","range":"9 metros","components":"V, S, M","duration":"at?? ser dissipada","material":"um pergaminho de representa????o ou uma estatueta esculpida para se parecer com o alvo e um componente especial, que varia de acordo com a vers??o da magia que voc?? escolher, valendo, no m??nimo, 500 po por Dado de Vida","description":"Voc?? cria um impedimento m??gico para imobilizar uma criatura que voc?? possa ver, dentro do alcance. O alvo deve ser bem sucedido num teste de resist??ncia de Sabedoria ou ser?? vinculado ?? magia. Se ele for bem sucedido, ele ser?? imune a essa magia se voc?? conjur??-la novamente. Enquanto estiver sob efeito dessa magia, a criatura n??o precisar?? respirar, comer ou beber e n??o envelhece. Magias de adivinha????o n??o podem localizar ou perceber o alvo.</p><p> Quando voc?? conjura essa magia, voc?? escolhe uma das seguintes formas de aprisionamento.</p><p><em><strong> Enterrar </strong></ em>. O alvo ?? sepultado bem fundo na terra em uma esfera de energia m??gica que ?? grande o suficiente para conter o alvo. Nada pode atravessar a esfera e nenhuma criatura pode se teletransportar ou usar viagem plantar para entrar ou sair dela.</p><p> O componente especial para essa vers??o da magia ?? um pequeno globo de mitral.</p><p><em><strong> Acorrentar </strong></ em>. Pesadas correntes, firmemente presas ao solo, matem o alvo no lugar. O alvo est?? impedido at?? a magia acabar e ele n??o pode se mover ou ser movido por nenhum meio, at?? l??.</p><p> O componente especial para essa vers??o da magia ?? uma fina corrente de metal precioso.</p><p><em><strong> Pris??o Cercada </strong></ em>. A magia transporta o alvo para dentro de um pequeno semiplano que ?? protegido contra teletransporte e viagem planar. O semiplano pode ser um labirinto, uma jaula, uma torre ou qualquer estrutura ou ??rea confinada similar, ?? sua escolha.</p><p> O componente material especial para essa vers??o da magia ?? uma representa????o em miniatura da pris??o, feita de jade.</p><p><em><strong> Conten????o Reduzida </strong></ em>. O alvo ?? reduzido at?? o tamanho de 30 cent??metros e ?? aprisionado dentro de uma gema ou objeto similar. A luz pode passar atrav??s da gema normalmente (permitindo que o alvo veja o exterior e outras criaturas vejam o interior), mas nada mais pode atravess??-la, mesmo por meios de teletransporte ou viagem planar. A gema n??o pode ser partida ou quebrada enquanto a magia estiver efetiva.</p><p> O componente especial para essa vers??o da magia ?? uma gema transparente grande, como um cor??ndon, diamante ou rubi.</p><p><em><strong> Torpor </strong></ em>. O alvo cai no sono e n??o pode ser acordado.</p><p> O componente especial para essa vers??o da magia consiste em ervas sopor??feras raras.</p><p><em><strong> Terminando a Magia </strong></ em>. Durante a conjura????o da magia, em quaisquer das vers??es, voc?? pode especificar uma condi????o que ir?? fazer a magia terminar e libertar?? o alvo. A condi????o pode ser o qu??o especifica ou elaborada quanto voc?? quiser, mas o Mestre deve concordar que a condi????o ?? razo??vel e tem uma probabilidade de acontecer. As condi????es podem ser baseadas no nome, identidade ou divindade da criatura mas, no mais, devem ser baseadas em a????es ou qualidades observ??veis e n??o em valores intang??veis tais como n??vel, classe e pontos de vida.</p><p> A magia dissipar magia pode terminar a magia apenas se for conjurada como uma magia de 9?? n??vel, tendo como alvo ou a pris??o ou o componente especial usado para cri??-la.</p><p> Voc?? pode usar um componente especial em particular para criar apenas uma pris??o por vez. Se voc?? conjurar essa magia novamente usando o mesmo componente, o alvo da primeira conjura????o ??, imediatamente, liberado do v??nculo.","classes":["Bruxo","Mago"],"favorite":false},{"id":199,"level":"4","name":"Arca Secreta de Leomund","name_en":"Leomund's Secret Chest","school":{"pt":"Conjura????o","style":"conjuration"},"castingTime":"1 a????o","range":"toque","components":"V, S, M","duration":"instant??nea","material":"um ba?? requintado, de 90 cm por 60 cm por 60 cm, constru??do com materiais raros valendo, no m??nimo, 5. 000 po e uma r??plica Mi??da feita do mesmo material valendo, no m??nimo, 50 po","description":"Voc?? esconde um ba??, e todo o seu conte??do, no Plano Et??reo. Voc?? deve tocar o ba?? e a r??plica em miniatura que serve como componente material para a magia. O ba?? pode acomodar at?? 3, 6 metros c??bicos de mat??ria inorg??nica (90 cm por 60 cm por 60 cm).</p><p> Enquanto o ba?? permanecer no Plano Et??reo, voc?? pode usar uma a????o e tocar a r??plica para revocar o ba??. Ele aparece em um espa??o desocupado no ch??o a 1,5 metro de voc??. Voc?? pode enviar o ba?? de volta ao Plano Et??reo usando uma a????o e tocando tanto no ba?? quanto na r??plica.</p><p> Ap??s 60 dias, existe 5 por cento de chance, cumulativa, por dia do efeito da magia terminar. Esse efeito termina se voc?? conjurar essa magia novamente, se a pequena r??plica do ba?? for destru??da ou se voc?? decidir terminar a magia usando uma a????o. Se a magia terminar enquanto o ba?? maior estiver no Plano Et??reo, ele estar?? irremediavelmente perdido.","classes":["Mago"],"favorite":false},{"id":29,"level":"1","name":"??rea Escorregadia","name_en":"Grease","school":{"pt":"Conjura????o","style":"conjuration"},"castingTime":"1 a????o","range":"18 metros","components":"V, S, M","duration":"1 minuto","material":"um pouco de pele de porco ou manteiga","description":"Graxa escorregadia cobre o solo em um quadrado de 3 metros centrado em um ponto, dentro do alcance, tornando essa ??rea em terreno dif??cil pela dura????o.</p><p> Quando a graxa aparece, cada criatura de p?? na ??rea deve ser bem sucedida num teste de resist??ncia de Destreza ou cair?? no ch??o. Uma criatura que entre na ??rea ou termine seu turno nela, deve ser bem sucedido num teste de resist??ncia de Destreza ou cair?? no ch??o.","classes":["Mago"],"favorite":false},{"id":152,"level":"3","name":"Arma Elemental","name_en":"Elemental Weapon","school":{"pt":"Transmuta????o","style":"transmutation"},"castingTime":"1 a????o","range":"toque","components":"V, S","concentration":"s","duration":"at?? 1 hora","description":"Uma arma n??o - m??gica que voc?? tocar se torna uma arma m??gica. Escolha um dos tipos de dano a seguir: ??cido, el??trico, frio, fogo ou trovejante. Pela dura????o, a arma tem + 1 de b??nus nas jogadas de ataque e causa 1d4 de dano extra, do tipo de elemento escolhido, ao atingir.</p><p><strong> Em N??veis Superiores </strong>. Quando voc?? conjurar essa magia usando um espa??o de magia de 5?? ou 6?? n??vel, o b??nus nas jogadas de ataque aumenta pra + 2 e o dano extra aumenta para 2d4. Quando voc?? usar um espa??o de magia de 7?? n??vel ou superior, o b??nus aumenta para + 3 e o dano extra aumenta para 3d4.","classes":["Paladino"],"favorite":false},{"id":94,"level":"2","name":"Arma Espiritual","name_en":"Spiritual Weapon","school":{"pt":"Evoca????o","style":"evocation"},"castingTime":"1 a????o b??nus","range":"18 metros","components":"V, S","duration":"1 minuto","description":"Voc?? cria uma arma espectral flutuante, dentro do alcance, que permanece pela dura????o ou at?? voc?? conjurar essa magia novamente. Quando voc?? conjura essa magia, voc?? pode realizar um ataque corpo - a - corpo com magia contra uma criatura a 1,5 metro da arma. Se atingir, o alvo sofre dano de energia igual a 1d8 + seu modificador de habilidade de conjura????o.</p><p> Com uma a????o b??nus, no seu turno, voc?? pode mover a arma at?? 6 metros e repetir o ataque contra uma criatura a 1,5 metro dela.</p><p> A arma pode ter a forma que voc?? desejar. Cl??rigos de divindades associadas com uma arma em particular (como St. Cuthbert ?? conhecido por sua ma??a ou Thor por s martelo) fazem o efeito dessa magia se assemelhar a essa arma.</p><p><strong> Em N??veis Superiores </strong>. Quando voc?? conjurar essa magia usando um espa??o de magia de 4?? n??vel ou superior, o dano aumenta em 1d8 para cada dois n??veis do espa??o acima do 2??.","classes":["Cl??rigo"],"favorite":false},{"id":95,"level":"2","name":"Arma M??gica","name_en":"Magic Weapon","school":{"pt":"Transmuta????o","style":"transmutation"},"castingTime":"1 a????o b??nus","range":"toque","components":"V, S","concentration":"s","duration":"at?? 1 hora","description":"Voc?? toca uma arma n??o - m??gica. At?? a magia acabar, a arma se torna uma arma m??gica com + 1 de b??nus nas jogadas de ataque e jogadas de dano.</p><p><strong> Em N??veis Superiores </strong>. Quando voc?? conjurar essa magia usando um espa??o de magia de 4?? n??vel ou superior, o b??nus aumenta para + 2. Quando voc?? usar um espa??o de magia de 6?? n??vel ou superior, o b??nus aumenta para + 3.","classes":["Mago","Paladino"],"favorite":false},{"id":30,"level":"1","name":"Armadura Arcana","name_en":"Mage Armor","school":{"pt":"Abjura????o","style":"abjuration"},"castingTime":"1 a????o","range":"toque","components":"V, S, M","duration":"8 horas","material":"um peda??o de couro curado","description":"Voc?? toca uma criatura volunt??ria que n??o esteja vestindo armadura e uma energia m??gica protetora a envolve at?? a magia acabar. A CA base do alvo se torna 13 + o modificador de Destreza dele. A magia acaba se o alvo colocar uma armadura ou se voc?? dissip??-la usando uma a????o.","classes":["Feiticeiro","Mago"],"favorite":false},{"id":31,"level":"1","name":"Armadura de Agathys","name_en":"Armor of Agathys","school":{"pt":"Abjura????o","style":"abjuration"},"castingTime":"1 a????o","range":"pessoal","components":"V, S, M","duration":"1 hora","material":"um copo de ??gua","description":"Uma for??a m??gicaprotetora envolve voc??, manifestando - se como um frio espectral que cobre voc?? e seu equipamento. Voc?? ganha 5 pontos de vida tempor??rios pela dura????o. Se uma criatura atingir voc?? com um ataque corpo - a - corpo enquanto estiver com esses pontos de vida, a criatura sofrer?? 5 de dano de frio.</p><p><strong> Em N??veis Superiores </strong>. Quando voc?? conjurar essa magia usando um espa??o de magia de 2?? n??vel ou superior, tanto os pontos de vida tempor??rios quanto o dano de frio aumentam em 5 para cada n??vel do espa??o acima do 1??.","classes":["Bruxo"],"favorite":false},{"id":96,"level":"2","name":"Arrombar","name_en":"Knock","school":{"pt":"Transmuta????o","style":"transmutation"},"castingTime":"1 a????o","range":"18 metros","components":"V","duration":"instant??nea","description":"Escolha um objeto que voc?? possa ver, dentro do alcance. O objeto pode ser uma porta, uma caixa, um ba?? ou um par de algemas, um cadeado ou outro objeto que contenha um meio mundano ou m??gico que previne o acesso.</p><p> Um alvo que esteja fechado por uma fechadura mundana ou preso ou barrado torna - se destrancado, destravado ou desbloqueado. Se o objeto tiver m??ltiplas fechaduras, apenas uma delas ?? destrancada.</p><p> Se voc?? escolher um alvo que esteja travado pela magia <em> tranca arcana </em>, essa magia ser?? suprimida por 10 minutos, durante esse per??odo o alvo pode ser aberto e fechado normalmente.</p><p> Quando voc?? conjurar essa magia, uma batida forte, aud??vel a at?? 90 metros de dist??ncia, emana do objeto alvo.","classes":["Bardo","Feiticeiro","Mago"],"favorite":false},{"id":200,"level":"4","name":"Assassino Fantasmag??rico","name_en":"Phantasmal Killer","school":{"pt":"Ilus??o","style":"illusion"},"castingTime":"1 a????o","range":"36 metros","components":"V, S","concentration":"s","duration":"at?? 1 minuto","description":"Voc?? mexe com os pesadelos de uma criatura que voc?? possa ver, dentro do alcance, e cria uma manifesta????o ilus??ria dos seus medos mais profundos, vis??vel apenas para a criatura. O alvo deve realizar um teste de resist??ncia de Sabedoria. Se falhar na resist??ncia, ele ficar?? amedrontado pela dura????o. No final de cada turno do alvo, antes da magia acabar, ele deve ser bem sucedido num teste de resist??ncia de Sabedoria ou sofrer?? 4d10 de dano ps??quico. Se passar na resist??ncia, a magia acaba.</p><p><strong> Em N??veis Superiores </strong>. Quando voc?? conjurar essa magia usando um espa??o de magia de 5?? n??vel ou superior, o dano aumenta em 1d10 para cada n??vel do espa??o acima do 4??.","classes":["Mago"],"favorite":false},{"id":1,"level":"0","name":"Ataque Certeiro","name_en":"True Strike","school":{"pt":"Adivinha????o","style":"divination"},"castingTime":"1 a????o","range":"9 metros","components":"S","concentration":"s","duration":"at?? 1 rodada","description":"Voc?? estende sua m??o e aponta o dedo para um alvo no alcance. Sua magia garante a voc?? uma breve intui????o sobre as defesas do alvo. No seu pr??ximo turno, voc?? ter?? vantagem na primeira jogada de ataque contra o alvo, considerando que essa magia n??o tenha acabado.","classes":["Bardo","Bruxo","Feiticeiro","Mago"],"favorite":false},{"id":276,"level":"6","name":"Ataque Visual","name_en":"Eyebite","school":{"pt":"Necromancia","style":"necromancy"},"castingTime":"1 a????o","range":"pessoal","components":"V, S","concentration":"s","duration":"at?? 1 minuto","description":"Pela dura????o da magia, seus olhos tornam - se manchas vazias imbu??das com poder terr??vel. Uma criatura, ?? sua escolha, a at?? de 18 metros de voc?? que voc?? puder ver, deve ser bem sucedida num teste de resist??ncia de Sabedoria ou ser?? afetada por um dos efeitos a seguir, ?? sua escolha, pela dura????o. A cada um dos seus turnos, at?? a magia acabar, voc?? pode usar sua a????o para afetar outra criatura, mas n??o pode afetar uma criatura novamente se ela tiver sido bem sucedida no teste de resist??ncia contra essa conjura????o de ataque visual.</p><p><em><strong> Adormecer </strong></ em>. O alvo cai inconsciente. Ele acorda se sofrer qualquer dano ou se outra criatura usar sua a????o para sacudir o adormecido at?? acord?? - lo.</p><p><em><strong> Apavorar </strong></ em>. O alvo est?? amedrontado. Em cada um dos turnos dele, a criatura amedrontada deve realizar a a????o de Disparada e se mover para longe de voc?? pela rota segura mais curta dispon??vel, a n??o ser que n??o haja lugar para se mover. Se o alvo se mover para um local a, pelo menos, 18 metros de dist??ncia de voc?? onde ela n??o possa mais te ver, esse efeito termina.</p><p><em><strong> Adoecer </strong></ em>. O alvo tem desvantagem nas jogadas de ataque e testes de habilidade. No final de cada um dos turnos dele, ele pode realizar outro teste de resist??ncia de Sabedoria. Se for bem sucedido, o efeito termina.","classes":["Bardo","Bruxo","Feiticeiro","Mago"],"favorite":false},{"id":97,"level":"2","name":"Aug??rio","name_en":"Augury","ritual":"s","school":{"pt":"Adivinha????o","style":"divination"},"castingTime":"1 minuto","range":"pessoal","components":"V, S, M","duration":"instant??nea","material":"varetas, ossos ou objetos similarmente marcados valendo, no m??nimo, 25 po","description":"Ao lan??ar varetas cravejados com gemas, rolar ossos de drag??o, puxar cartas ornamentadas ou usar outro tipo de ferramenta de adivinha????o, voc?? recebe um pressagio de uma entidade de outro mundo, sobre os resultados de cursos de a????o espec??ficos que voc?? planeja tomar nos pr??ximos 30 minutos. O Mestre escolhe dentre os poss??veis press??gios a seguir: </p><ul><li> ??xito, para resultados bons </li><li> Fracasso, para resultados maus </li><li> ??xito e fracasso, para resultados bons e maus </li><li> Nada, para resultados que n??o s??o especialmente bons ou ruins </li></ ul><p> A magia n??o leva em conta qualquer poss??vel circunstancia que possa mudar o resultado, como a conjura????o de magias adicionais ou a perda ou ganho de um companheiro.</p><p> Se voc?? conjurar a magia duas ou mais vezes antes de completar seu pr??ximo descanso longo, existe uma chance cumulativa de 25 por cento de cada conjura????o, depois da primeira que voc?? fez, ter um resultado aleat??rio. O Mestre faz essa jogada secretamente.","classes":["Cl??rigo"],"favorite":false},{"id":98,"level":"2","name":"Aumentar/Reduzir","name_en":"Enlarge/Reduce","school":{"pt":"Transmuta????o","style":"transmutation"},"castingTime":"1 a????o","range":"9 metros","components":"V, S, M","concentration":"s","duration":"at?? 1 minuto","material":"um pouco de p?? de ferro","description":"Voc?? faz com que uma criatura ou um objeto que voc?? possa ver dentro do alcance, fique maior ou menor, pela dura????o. Escolha entre uma criatura ou um objeto que n??o esteja sendo carregado nem vestido. Se o alvo for involunt??rio, ele deve realizar um teste de resist??ncia de Constitui????o. Se for bem sucedido, a magia n??o surte efeito.</p><p> Se o alvo for uma criatura, tudo que ele esteja vestindo ou carregando muda e tamanho com ela. Qualquer item largado por uma criatura afetada, retorna ao seu tamanho natural.</p><p><em><strong> Aumentar </strong></ em>. O tamanho do alvo dobra em todas as dimens??es e seu peso ?? multiplicado por oito. Esse aumento eleva seu tamanho em uma categoria??? de M??dio para Grande, por exemplo. Se n??o houver espa??o suficiente para que o alvo dobre de tamanho, a criatura ou objeto alcan??a o tamanho m??ximo poss??vel no espa??o dispon??vel. At?? o fim da magia, o alvo tamb??m tem vantagem em testes de For??a e testes de resist??ncia de For??a. O tamanho das armas do alvo crescem para se adequar ao seu novo tamanho. Quando essas armas s??o ampliadas, os ataques do alvo com elas causam 1d4 de dano extra.</p><p><em><strong> Reduzir </strong></ em>. O tamanho do alvo ?? reduzido ?? metade em todas as dimens??es e seu peso ?? reduzido a um oitavo do normal. Essa redu????o diminui o tamanho do alvo em uma categoria??? de M??dio para Pequeno, por exemplo. At?? o fim da magia, o alvo tem desvantagem em testes de For??a e testes de resist??ncia de For??a. O tamanho das armas do alvo diminuem para se adequar ao seu novo tamanho. Quando essas armas s??o reduzidas, os ataques do alvo com elas causam 1d4 de dano a menos (isso n??o pode reduzir o dano a menos de 1).","classes":["Feiticeiro","Mago"],"favorite":false},{"id":201,"level":"4","name":"Aura de Pureza","name_en":"Aura Of Purity","school":{"pt":"Abjura????o","style":"abjuration"},"castingTime":"1 a????o","range":"pessoal","components":"V","concentration":"s","duration":"at?? 10 minutos","description":"Energia purificante irradia de voc?? em uma aura com 9 metros de raio. At?? a magia acabar, a aura se move mantendo - se centrada em voc??. Todas as criaturas n??o - hostis na aura (incluindo voc??) n??o podem ficar doentes, tem resist??ncia a dano de veneno e tem vantagem em testes de resist??ncia contra efeitos que deixem ela com qualquer das condi????es a seguir: amedrontado, atordoado, cego, enfeiti??ado, envenenado, paralisado e surdo.","classes":["Paladino"],"favorite":false},{"id":202,"level":"4","name":"Aura de Vida","name_en":"Aura Of Life","school":{"pt":"Abjura????o","style":"abjuration"},"castingTime":"1 a????o","range":"pessoal","components":"V","concentration":"s","duration":"at?? 10 minutos","description":"Energia de preven????o vital irradia de voc?? em uma aura com 9 metros de raio. At?? a magia acabar, a aura se move mantendo - se centrada em voc??. Todas as criaturas n??o - hostis na aura (incluindo voc??) tem resist??ncia a dano necr??tico e seu m??ximo de pontos de vida n??o pode ser reduzido. Al??m disso, uma criatura viva n??o - hostil, recupera 1 ponto de vida quando come??a seu turno na aura com 0 pontos de vida.","classes":["Paladino"],"favorite":false},{"id":153,"level":"3","name":"Aura de Vitalidade","name_en":"Aura Of Vitality","school":{"pt":"Evoca????o","style":"evocation"},"castingTime":"1 a????o","range":"pessoal","components":"V","concentration":"s","duration":"at?? 1 minuto","description":"Energia curativa irradia de voc?? em uma aura com 9 metros de raio. At?? a magia acabar, a aura se move mantendo - se centrada em voc??. Voc?? pode usar uma a????o b??nus para fazer com que uma criatura na aura (incluindo voc??) recupere 2d6 pontos de vida.","classes":["Paladino"],"favorite":false},{"id":99,"level":"2","name":"Aura M??gica de Nystul","name_en":"Nystul's Magic Aura","school":{"pt":"Ilus??o","style":"illusion"},"castingTime":"1 a????o","range":"toque","components":"V, S, M","duration":"24 horas","material":"um pequeno quadrado de seda","description":"Voc?? coloca uma ilus??o em uma criatura ou objeto que voc?? tocar, ent??o magias de adivinha????o revelar??o informa????es falsas sobre ele. O alvo pode ser uma criatura volunt??ria ou um objeto que n??o esteja sendo carregado ou vestido por outra criatura.</p><p> Quando voc?? conjura essa magia, escolha um ou ambos os efeitos seguintes. O efeito permanece pela dura????o. Se voc?? conjurar essa magia na mesma criatura ou objeto a cada dia por 30 dias, colocando o mesmo efeito nele todas as vezes, a ilus??o durar?? at?? ser dissipada.</p><p><em><strong> Aura Falsa </strong></ em>. Voc?? modifica a forma como o alvo aparece para magias e efeitos m??gicos, como detectar magia, que detectam auras m??gicas. Voc?? pode fazer um objeto n??o - m??gico parecer m??gico ou mudar a aura m??gica de um objeto para que ela pare??a pertencer a outra escola de magia a sua escolha. Quando voc?? usar esse efeito num objeto, voc?? pode fazer a aura falsa aparente a qualquer criatura que manusear o item.</p><p><em><strong> M??scara </strong></ em>. Voc?? modifica a forma como o alvo aparece para magias e efeitos que detectam tipos de criaturas, como o Sentido Divino do paladino ou o gatilho de um magia s??mbolo. Voc?? escolhe o tipo de criatura e outras magias e efeitos m??gicos consideram o alvo como se ele fosse uma criatura desse tipo ou tend??ncia.","classes":["Mago"],"favorite":false},{"id":328,"level":"8","name":"Aura Sagrada","name_en":"Holy Aura","school":{"pt":"Abjura????o","style":"abjuration"},"castingTime":"1 a????o","range":"pessoal","components":"V, S, M","concentration":"s","duration":"at?? 1 minuto","material":"um min??sculo relic??rio valendo, no m??nimo, 1. 000 po, contendo uma rel??quia sagrada, como um peda??o de tecido do robe de um santo ou um peda??o de pergaminho de um texto religioso","description":"Luz divina emana de voc?? e adere em uma aureola suave num raio de 9 metros, em volta de voc??. As criaturas de sua escolha, no raio, quando voc?? conjurar essa magia, emitem penumbra num raio de 1,5 metro e tem vantagem em todos os testes de resist??ncia e as outras criaturas tem desvantagem nas jogadas de ataque contra elas, at?? a magia acabar. Al??m disso, quando um corruptor ou morto - vivo atingir uma criatura afetada com um ataque corpo - a - corpo, a aura lampeja com luz plena. O atacante deve ser bem sucedido num teste de resist??ncia de Constitui????o ou ficara cego at?? a magia acabar.","classes":["Cl??rigo"],"favorite":false},{"id":32,"level":"1","name":"Aux??lio Divino","name_en":"Divine Favor","school":{"pt":"Evoca????o","style":"evocation"},"castingTime":"1 a????o b??nus","range":"pessoal","components":"V, S","concentration":"s","duration":"at?? 1 minuto","description":"Sua ora????o fortalece voc?? com radia????o divina. At?? o fim da magia, seus ataques com arma causam 1d4 de dano radiante extra ao atingirem.","classes":["Paladino"],"favorite":false},{"id":203,"level":"4","name":"Banimento","name_en":"Banishment","school":{"pt":"Abjura????o","style":"abjuration"},"castingTime":"1 a????o","range":"9 metros","components":"V, S, M","concentration":"s","duration":"at?? 1 minuto","material":"um item desagrad??vel ao alvo","description":"Voc?? tenta enviar uma criatura que voc?? pode ver dentro do alcance, para outro plano de exist??ncia. O alvo deve ser bem sucedido num teste de resist??ncia de Carisma ou ser?? banido.</p><p> Se o alvo for nativo do plano de exist??ncia que voc?? est??, voc?? bane o alvo para um semiplano inofensivo. Enquanto estiver l??, a criatura estar?? incapacitada. Ela permanece l?? at?? a magia acabar, a partir desse ponto, o alvo reaparece no espa??o em que ela deixou ou no espa??o desocupado mais pr??ximo, se o espa??o dela estiver ocupado.</p><p> Se o alvo for nativo de um plano de exist??ncia diferente do que voc?? est??, o alvo ?? banido em um lampejo sutil, retornando para o seu plano natal. Se a magia acabar antes de 1 minuto se passar, o alvo reaparece no lugar em que estava ou no espa??o desocupado mais pr??ximo, se o espa??o dela estiver ocupado. Do contr??rio, o alvo n??o retorna.</p><p><strong> Em N??veis Superiores </strong>. Quando voc?? conjurar essa magia usando um espa??o de magia de 5?? n??vel ou superior, voc?? pode afetar uma criatura adicional para cada n??vel do espa??o acima do 4??.","classes":["Bruxo","Cl??rigo","Feiticeiro","Mago","Paladino"],"favorite":false},{"id":277,"level":"6","name":"Banquete dos Her??is","name_en":"Heroes' Feast","school":{"pt":"Conjura????o","style":"conjuration"},"castingTime":"10 minutos","range":"9 metros","components":"V, S, M","duration":"instant??nea","material":"uma tigela encrustada de gemas valendo, no m??nimo, 1. 000 po, que ?? consumida pela magia","description":"Voc?? traz um grande banquete, incluindo comida e bebida magnificas. O banquete leva 1 hora para ser consumido e desaparece ao final desse tempo e os efeitos ben??ficos n??o se aplicam at?? essa hora terminar. At?? doze criaturas podem participar do banquete.</p><p> Uma criatura que participe do banquete ganha diversos benef??cios. A criatura ?? curada de todas as doen??as e venenos, torna - se imune a veneno e a ser amedrontada e faz todos os seus testes de resist??ncia com vantagem. Seu m??ximo de pontos de vida tamb??m aumenta em 2d10 e ela ganha a mesma quantidade de pontos de vida. Esses benef??cios duram por 24 horas.","classes":["Cl??rigo"],"favorite":false},{"id":278,"level":"6","name":"Barreira de L??minas","name_en":"Blade Barrier","school":{"pt":"Evoca????o","style":"evocation"},"castingTime":"1 a????o","range":"24 metros","components":"V, S","concentration":"s","duration":"at?? 10 minutos","description":"Voc?? cria uma muralha vertical de l??minas girat??rias, afiadas como navalhas, feitas de energia m??gica. A muralha aparece dentro do alcance e permanece pela dura????o. Voc?? pode fazer uma muralha reta de at?? 30 metros de comprimento por 6 metros de altura e 1,5 metro de largura ou uma muralha anelar com at?? 18 metros de di??metro, 6 metros de altura e 1,5 metro de largura. A muralha confere tr??s - quartos de cobertura a criaturas atr??s dela e seu espa??o ?? terreno dif??cil.</p><p> Quando uma criatura entrar a ??rea da muralha pela primeira vez em um turno, ou come??ar seu turno nela, a criatura deve realizar um teste de resist??ncia de Destreza. Se falhar, a criatura sofrer?? 6d10 de dano cortante. Em um sucesso, a criatura sofre metade desse dano.","classes":["Cl??rigo"],"favorite":false},{"id":33,"level":"1","name":"B??n????o","name_en":"Bless","school":{"pt":"Encantamento","style":"enchantment"},"castingTime":"1 a????o","range":"9 metros","components":"V, S, M","concentration":"s","duration":"at?? 1 minuto","material":"um borrifo de ??gua benta","description":"Voc?? aben??oa at?? tr??s criaturas, ?? sua escolha, dentro do alcance. Sempre que um alvo realizar uma jogada de ataque ou teste de resist??ncia antes da magia acabar, o alvo pode jogar 1d4 e adicionar o valor jogado ao ataque ou teste de resist??ncia.</p><p><strong> Em N??veis Superiores </strong>. Quando voc?? conjurar essa magia usando um espa??o de magia de 2?? n??vel ou superior, voc?? pode afetar uma criatura adicional para cada n??vel do espa??o acima do 1??.","classes":["Cl??rigo","Paladino"],"favorite":false},{"id":100,"level":"2","name":"Boca Encantada","name_en":"Magic Mouth","ritual":"s","school":{"pt":"Ilus??o","style":"illusion"},"castingTime":"1 minuto","range":"9 metros","components":"V, S, M","duration":"at?? ser dissipada","material":"um peda??o de favo de mel e p?? de jade valendo, no m??nimo, 10 po, consumidos pela magia","description":"Voc?? implanta uma mensagem em um objeto dentro do alcance, uma mensagem que ?? pronunciada quando uma condi????o de ativa????o ?? satisfeita. Escolha um objeto que voc?? possa ver e n??o esteja sendo vestido ou carregado por outra criatura. Ent??o, fale a mensagem, que deve conter 25 palavras ou menos, apesar de ela poder ser entregue durante um per??odo de at?? 10 minutos. Finalmente, determine a circunst??ncia que ir?? ativar a magia para que sua mensagem seja entregue.</p><p> Quando essa circunst??ncia ocorrer, a boca encantada aparecer?? no objeto e recitar?? a mensagem com sua voz e com o mesmo volume que voc?? falou. Se o objeto que voc?? escolheu tiver uma boca ou algo semelhante a uma boca (por exemplo, a boca de uma est??tua), a boca m??gica aparece ai, ent??o, as palavras parecer??o vir da boca do objeto. Quando voc?? conjura essa magia, voc?? pode fazer a magia acabar depois de enviar sua mensagem ou ela pode permanecer e repetir a mensagem sempre que a circunst??ncia de ativa????o ocorrer.</p><p> A circunst??ncia de ativa????o pode ser t??o gen??rica ou t??o detalhada quando voc?? quiser, apesar de ela precisar ser baseada em condi????es visuais ou aud??veis que ocorram a at?? 9 metros do objeto. Por exemplo, voc?? pode instruir a boca a falar quando uma criatura se aproximar a menos de 9 metros do objeto ou quando um sino de prata tocar a menos de 9 metros dela.","classes":["Bardo","Mago"],"favorite":false},{"id":154,"level":"3","name":"Bola de Fogo","name_en":"Fireball","school":{"pt":"Evoca????o","style":"evocation"},"castingTime":"1 a????o","range":"45 metros","components":"V, S, M","duration":"instant??nea","material":"uma min??scula bola de guano de morcego e enxofre","description":"Um veio brilhante lampeja na ponta do seu dedo em dire????o a um ponto que voc?? escolher, dentro do alcance, e ent??o eclode com um estampido baixo, explodindo em chamas. Cada criatura em uma esfera de 6 metros de raio, centrada no ponto, deve realizar um teste de resist??ncia de Destreza. Um alvo sofre 8d6 de dano de fogo se falhar na resist??ncia, ou metade desse dano se obtiver sucesso.</p><p> O fogo se espalha, dobrando esquinas. Ele incendeia objetos inflam??veis na ??rea que n??o estejam sendo vestidos ou carregados.</p><p><strong> Em N??veis Superiores </strong>. Quando voc?? conjurar essa magia usando um espa??o de magia de 4?? n??vel ou superior, o dano aumenta em 1d6 para cada n??vel do espa??o acima do 3??.","classes":["Feiticeiro","Mago"],"favorite":false},{"id":307,"level":"7","name":"Bola de Fogo Control??vel","name_en":"Delayed Blast Fireball","school":{"pt":"Evoca????o","style":"evocation"},"castingTime":"1 a????o","range":"45 metros","components":"V, S, M","concentration":"s","duration":"at?? 1 minuto","material":"uma min??scula bola de guano de morcego e enxofre","description":"Um feixe de luz amarelada ?? disparado da ponta do seu dedo, ent??o se condensa e aguarda no ponto escolhido, dentro do alcance, como uma conta brilhante, pela dura????o. Quando a magia termina, seja por sua concentra????o ter sido interrompida ou por voc?? ter decidido termin??-la, a conta eclode com um estampido baixo, explodindo em chamas que se espalhando, dobrando esquinas. Cada criatura numa esfera, com 6 metros de raio, centrada na conta, deve realizar um teste de resist??ncia de Destreza. Uma criatura sofre dano igual ao total de dano acumulado se falhar na resist??ncia, ou metade do total se obtiver sucesso.</p><p> O dano base da magia ?? 12d6. Se at?? o final do seu turno, a conta ainda n??o tiver sido detonada, o dano aumenta em 1d6.</p><p> Se a conta brilhante for tocada antes do intervalo expirar, a criatura que a tocou deve realizar um teste de resist??ncia de Destreza. Se falhar na resist??ncia, a magia termina imediatamente, fazendo a conta explodir em chamas. Se obtiver sucesso na resist??ncia, a criatura pode arremessar a conta a at?? 12 metros. Quando ela atinge uma criatura ou objeto solido, a magia termina e a conta explode.</p><p> O fogo danifica objetos na ??rea e incendeia objetos inflam??veis que n??o estejam sendo vestidos ou carregados.</p><p><strong> Em N??veis Superiores </strong>. Quando voc?? conjurar essa magia usando um espa??o de magia de 8?? n??vel ou superior, o dano base aumenta e 1d6 para cada n??vel do espa??o acima do 7??.","classes":["Feiticeiro","Mago"],"favorite":false},{"id":34,"level":"1","name":"Bom Fruto","name_en":"Goodberry","school":{"pt":"Transmuta????o","style":"transmutation"},"castingTime":"1 a????o","range":"toque","components":"V, S, M","duration":"instant??nea","material":"um raminho de visco","description":"At?? dez frutos aparecem na sua m??o e s??o infundidos com magia pela dura????o. Uma criatura pode usar sua a????o para comer um fruto. Comer um fruto restaura 1 ponto de vida e um fruto produz nutrientes suficientes para sustentar uma criatura por um dia.</p><p> Os frutos perdem seu potencial se n??o forem consumidos dentro de 24 horas da conjura????o dessa magia.","classes":["Druida","Patrulheiro"],"favorite":false},{"id":2,"level":"0","name":"Bord??o M??stico","name_en":"Shillelagh","school":{"pt":"Transmuta????o","style":"transmutation"},"castingTime":"1 a????o b??nus","range":"toque","components":"V, S, M","duration":"1 minuto","material":"visco, uma folha de trevo e uma clava ou bord??o","description":"A madeira de uma clava ou bord??o, que voc?? esteja segurando, ?? imbu??da com o poder da natureza. Pela dura????o, voc?? pode usar sua habilidade de conjura????o ao inv??s da sua For??a para as jogadas de ataque e dano corpo - a - corpo usando essa arma, e o dado de dano da arma se torna 1d8. A arma tamb??m se torna m??gica, se ela j?? n??o for. A magia acaba se voc?? conjur??-la novamente ou se voc?? soltar a arma.","classes":["Druida"],"favorite":false},{"id":35,"level":"1","name":"Bra??os de Hadar","name_en":"Arms of Hadar","school":{"pt":"Conjura????o","style":"conjuration"},"castingTime":"1 a????o","range":"pessoal","components":"V, S","duration":"instant??nea","description":"Voc?? invoca o poder de Hadar, o Faminto Sombrio. Tent??culos de energia negra brotam de voc?? e golpeiam todas as criaturas a at?? 3 metros de voc??. Cada criatura na ??rea deve realizar um teste de resist??ncia de For??a. Se falhar, o alvo sofre 2d6 de dano necr??tico e n??o pode fazer rea????es at?? o pr??ximo turno dela. Em um sucesso, uma criatura sofre metade do dano e n??o sofre qualquer outro efeito.</p><p><strong> Em N??veis Superiores </strong>. Quando voc?? conjurar essa magia usando um espa??o de magia de 2?? n??vel ou superior, o dano aumenta em 1d6 para cada n??vel do espa??o acima do 1??.","classes":["Bruxo"],"favorite":false},{"id":36,"level":"1","name":"Bruxaria","name_en":"Hex","school":{"pt":"Encantamento","style":"enchantment"},"castingTime":"1 a????o b??nus","range":"18 metros","components":"V, S, M","concentration":"s","duration":"at?? 1 hora","material":"o olho petrificado de um trit??o","description":"Voc?? coloca uma maldi????o em uma criatura que voc?? possa ver, dentro do alcance. At?? a magia acabar, voc?? causa 1d6 de dano necr??tico extra no alvo sempre que atingi - lo com um ataque. Al??m disso, escolha uma habilidade quando voc?? conjurar a magia. O alvo tem desvantagem em testes de habilidade feitos com a habilidade escolhida.</p><p> Se o alvo cair a 0 pontos de vida antes da magia acabar, voc?? pode usar uma a????o b??nus, em um turno subsequente, para amaldi??oar outra criatura.</p><p> Uma magia <em> remover maldi????o </em> conjurada no alvo acaba com a magia prematuramente.</p><p><strong> Em N??veis Superiores </strong>. Quando voc?? conjurar essa magia usando um espa??o de magia de 3?? ou 4?? n??vel, voc?? poder?? manter sua concentra????o na magia por at?? 8 horas. Quando voc?? usar um espa??o de magia de 5?? n??vel ou superior, voc?? poder?? manter sua concentra????o na magia por at?? 24 horas.","classes":["Bruxo"],"favorite":false},{"id":236,"level":"5","name":"Caminhar Em ??rvores","name_en":"Tree Stride","school":{"pt":"Conjura????o","style":"conjuration"},"castingTime":"1 a????o","range":"pessoal","components":"V, S","concentration":"s","duration":"at?? 1 minuto","description":"Voc?? adquire a habilidade de entrar em uma ??rvore e se mover de dentro dela para dentro de outra ??rvore de mesmo tipo ?? at?? 150 metros. Ambas as ??rvores devem estar vivas e ter, pelo menos, o mesmo tamanho que voc??. Voc?? deve usar 1,5 metro de deslocamento para entrar numa ??rvore. Voc??, instantaneamente, sabe a localiza????o de todas as outras ??rvores de mesmo tipo ?? 150 metros e, como parte do movimento usado para entrar na ??rvore, pode tanto passar por uma dessas ??rvores quanto sair da ??rvore em que voc?? est??. Voc?? aparece no espa??o que voc?? quiser a 1,5 metro da ??rvore destino, usando outro movimento de 1,5 metro. Se voc?? n??o tiver movimento restante, voc?? aparece a 1,5 metro da ??rvore que voc?? terminou seu movimento.</p><p> Voc?? pode usar esse habilidade de transporte uma vez por rodada pela dura????o. Voc?? deve terminar cada turno fora da ??rvore.","classes":["Druida","Patrulheiro"],"favorite":false},{"id":279,"level":"6","name":"Caminhar No Vento","name_en":"Wind Walk","school":{"pt":"Transmuta????o","style":"transmutation"},"castingTime":"1 minuto","range":"9 metros","components":"V, S, M","duration":"8 horas","material":"fogo e ??gua benta","description":"Voc?? e at?? dez criaturas volunt??ria que voc?? possa ver, dentro do alcance, assumem uma forma gasosa pela dura????o, parecidas com peda??os de nuvem. Enquanto estiver na forma de nuvem, uma criatura tem deslocamento de voo de 90 metros e tem resist??ncia a dano de concuss??o, cortante e perfurante de ataques n??o - m??gicos. As ??nicas a????es que uma criatura pode realizar nessa forma s??o a a????o de Disparada ou para reverter a sua forma normal. Reverter leva 1 minuto, per??odo pelo qual a criatura estar?? incapacitada e n??o poder?? se mover. At?? a magia acabar, uma criatura pode reverter para a forma de nuvem, o que tamb??m requer a transforma????o de 1 minuto.</p><p> Se uma criatura estiver na forma de nuvem e voando quando o efeito acabar, a criatura descer?? a 18 metros por rodada por 1 minuto, at?? aterrissar na solo, o que ?? feito com seguran??a. Se ela n??o puder aterrissar em 1 minuto, a criatura cair?? a dist??ncia restante.","classes":["Druida"],"favorite":false},{"id":329,"level":"8","name":"Campo Antimagia","name_en":"Antimagic Field","school":{"pt":"Abjura????o","style":"abjuration"},"castingTime":"1 a????o","range":"pessoal","components":"V, S, M","concentration":"s","duration":"at?? 1 hora","material":"um punhado de p?? de ferro ou limalhas de ferro","description":"Uma esfera invis??vel,de 3 metros de raio,de antimagia envolve voc??. Essa ??rea ?? separada da energia m??gica que se espalha pelo multiverso. Dentro da esfera,magias n??o podem ser conjuradas,criaturas invocadas desaparecem e,at?? mesmo itens m??gicos,se tornam mundanos. At?? o fim da magia,a esfera se move com voc??,centrada em voc??.</p><p> Magias e outros efeitos m??gicos,exceto os criados por artefatos ou divindades,s??o suprimidos na esfera e n??o podem adentr??-la. Um espa??o gasto para conjurar uma magia suprimida ?? consumido. Enquanto o efeito estiver suprimido,ela n??o funciona,mas o tempo que ela permanecer suprimida ?? descontado da sua dura????o.</p><p><em><strong> Efeitos de Alvo </strong></em>. Magias e outros efeitos m??gicos,como m??sseis m??gicos e enfeiti??ar pessoa,que forem usados em uma criatura ou objeto dentro da esfera,n??o surtem efeito no alvo.</p><p><em><strong> ??reas de Magia </strong></em>. A ??rea de outra magia ou efeito m??gico,como uma bola de fogo,n??o se estende para dentro da esfera. Se a esfera sobrepor um ??rea m??gica,a parte da ??rea que for coberta pela espera ?? suprimida. Por exemplo,as ch??s criadas poroma muralha de fogo ser??o suprimidas dentro da esfera,criando um abertura na muralha se a sobreposi????o por grande suficiente.</p><p><em><strong> Magias </strong></em>. Qualquer magia ativa ou outro efeito m??gico em uma criatura ou objeto dentro da esfera ?? suprimido enquanto a criatura ou objeto permanecer dentro dela.</p><p><em><strong> Itens M??gicos </strong></em>. As propriedades e poderes de itens m??gicos s??o suprimidas dentro da esfera. Por exemplo,uma espada longa + 1 dentro esfera funciona como uma espada n??o - m??gica.</p><p> As propriedades e poderes de uma arma m??gica s??o suprimidos se ela for usada contra um alvo dentro da esfera ou empunhada por um atacante dentro da esfera. Se uma arma m??gica ou muni????o m??gica deixar a esfera completamente (por exemplo, se voc?? disparar uma flecha m??gica ou arremessar uma lan??a m??gica e um alvo fora da esfera),a magia do item deixa de ser suprimida t??o logo ele deixe a esfera.</p><p><em><strong> Viagem M??gica </strong></em>. Teletransporte e viagem planar n??o funciona dentro da esfera,tanto se a esfera for o destino quando o ponto de partida para tais viagens m??gicas. Um portal para outro lugar,mundo ou plano de exist??ncia,assim como um espa??o extradimensional aberto,como o criado pela magia truque de corda,?? temporariamente fechado enquanto estiver dentro da esfera.</p><p><em><strong> Criaturas e Objetos </strong></em>. Uma criatura ou objeto invocado ou criado atrav??s de magia,temporariamente desaparece da exist??ncia dentro da esfera. Tais criaturas reaparecem instantaneamente quando o espa??o ocupado pela criatura n??o estiver mais dentro da esfera.</p><p><em><strong> Dissipar Magia </strong></em>. Magias e efeitos m??gicos como dissipar magia,n??o surtem efeito sob esfera. Da mesma forma,esferas criadas por magias de campo antimagia diferentes n??o se anulam.","classes":["Cl??rigo","Mago"],"favorite":false},{"id":204,"level":"4","name":"C??o Fiel de Mordenkainen","name_en":"Mordenkainen's Faithful Hound","school":{"pt":"Conjura????o","style":"conjuration"},"castingTime":"1 a????o","range":"9 metros","components":"V, S, M","duration":"8 horas","material":"um min??sculo apito de prata, um peda??o de osso e um fio","description":"Voc?? conjura um c??o de guarda fantasma em um espa??o desocupado que voc?? possa ver, dentro do alcance, que permanece pela dura????o, at?? voc?? dissipa - lo com uma a????o ou at?? voc?? se mover para mais de 30 metros dele.</p><p> O c??o ?? invis??vel para todas as criaturas, exceto para voc??, e n??o pode ser ferido. Quando uma criatura Pequena ou maior se aproximar a 9 metros sem, primeiramente, falar a senha que voc?? especifica quando conjura a magia, o c??o come??a a latir muito alto. O c??o v?? criaturas invis??veis e pode ver no Plano Et??reo. Ele ignora ilus??es.</p><p> No come??o de cada um dos seus turnos, o c??o tenta morder uma criatura a 1,5 metro dele que seja hostil a voc??. O b??nus de ataque do c??o ?? igual ao seu modificador de habilidade de conjura????o + seu b??nus de profici??ncia. Se atingir, ele causa 4d8 de dano perfurante.","classes":["Mago"],"favorite":false},{"id":280,"level":"6","name":"Carne Para Pedra","name_en":"Flesh To Stone","school":{"pt":"Transmuta????o","style":"transmutation"},"castingTime":"1 a????o","range":"18 metros","components":"V, S, M","concentration":"s","duration":"at?? 1 minuto","material":"uma pitada de cal, ??gua e terra","description":"Voc?? tenta transformar uma criatura que voc?? possa ver, dentro do alcance, em pedra. Se o corpo do alvo for feito de carne, a criatura deve realizar um teste de resist??ncia de Constitui????o. Em caso de falha, ela ficar?? impedida, ?? medida que sua carne come??a a endurecer. Se obtiver sucesso, a criatura n??o ?? afetada.</p><p> Uma criatura impedida por essa magia deve realizar outro teste de resist??ncia de Constitui????o no final de cada um dos turnos dela. Se obtiver sucesso na resist??ncia contra essa magia tr??s vezes, a magia termina. Se ela falhar no teste de resist??ncia tr??s vezes, ela se torna pedra ?? afetada pela condi????o petrificado pela dura????o. Os sucessos e falhas n??o precisam ser consecutivos, anote ambos os resultados at?? o alvo acumular tr??s de mesmo tipo.</p><p> Se a criatura for quebrada fisicamente enquanto petrificada, ela sofre deformidades similares se for revertida ao seu estado original.</p><p> Se voc?? mantiver sua concentra????o nessa magia durante toda a dura????o poss??vel, a criatura ?? transformada em pedra at?? o efeito ser removido.","classes":["Bruxo","Mago"],"favorite":false},{"id":101,"level":"2","name":"Cativar","name_en":"Enthrall","school":{"pt":"Encantamento","style":"enchantment"},"castingTime":"1 a????o","range":"18 metros","components":"V, S","duration":"1 minuto","description":"Voc?? tece um cord??o de palavras distrativas, fazendo as criaturas, ?? sua escolha, que voc?? puder ver dentro do alcance e que puderem ouvir voc??, realizarem um teste de resist??ncia de Sabedoria. Qualquer criatura que n??o puder ser enfeiti??ada, passa automaticamente nesse teste de resist??ncia e, se voc?? ou seus companheiros estiverem lutando com a criatura, ela ter?? vantagem na resist??ncia. Se falhar na resist??ncia, a criatura ter?? desvantagem em testes de Sabedoria (Percep????o) feitos para notar qualquer criatura al??m de voc??, at?? a magia acabar ou at?? o alvo n??o poder mais ouvir voc??. A magia acaba se voc?? estiver incapacitado ou incapaz de falar.","classes":["Bardo","Bruxo"],"favorite":false},{"id":102,"level":"2","name":"Cegueira/Surdez","name_en":"Blindness/Deafness","school":{"pt":"Necromancia","style":"necromancy"},"castingTime":"1 a????o","range":"9 metros","components":"V","duration":"1 minuto","description":"Voc?? pode cegar ou ensurdecer um oponente. Escolha uma criatura que voc?? possa ver dentro do alcance para fazer um teste de resist??ncia de Constitui????o. Se ela falhar, ficar?? ou cega ou surda (?? sua escolha) pela dura????o. No final de cada um dos turnos dele, o alvo pode realizar um teste de resist??ncia de Constitui????o. Se obtiver sucesso, a magia termina.</p><p><strong> Em N??veis Superiores </strong>. Se voc?? conjurar essa magia usando um espa??o de magia de 3?? n??vel ou superior, voc?? pode afetar uma criatura adicional para cada n??vel de espa??o acima do 2??.","classes":["Bardo","Cl??rigo","Feiticeiro","Mago"],"favorite":false},{"id":103,"level":"2","name":"Chama Cont??nua","name_en":"Continual Flame","school":{"pt":"Evoca????o","style":"evocation"},"castingTime":"1 a????o","range":"toque","components":"V, S, M","duration":"at?? ser dissipada","material":"p?? de rubi no valor de 50 po, consumido pela magia","description":"Uma chama, que produz ilumina????o equivalente a uma tocha, surge de um objeto que voc?? tocar. O efeito ?? parecido com o de uma chama normal, mas ele n??o produz calor e n??o consome oxig??nio. Uma chama continua pode ser coberta ou escondida, mas n??o sufocada ou extinta.","classes":["Cl??rigo","Mago"],"favorite":false},{"id":3,"level":"0","name":"Chama Sagrada","name_en":"Sacred Flames","school":{"pt":"Evoca????o","style":"evocation"},"castingTime":"1 a????o","range":"18 metros","components":"V, S","duration":"instant??nea","description":"Radia????o similar a uma chama desce sobre uma criatura que voc?? possa ver, dentro do alcance. O alvo deve ser bem sucedido num teste de resist??ncia de Destreza ou sofrer?? 1d8 de dano radiante. O alvo n??o recebe qualquer benef??cio de cobertura contra esse teste de resist??ncia.</p><p> O dano da magia aumenta em 1d8 quando voc?? alcan??a o 5?? n??vel (2d8), 11?? n??vel (3d8) e 17?? n??vel (4d8).","classes":["Cl??rigo"],"favorite":false},{"id":4,"level":"0","name":"Chicote de Espinhos","name_en":"Torn Whip","school":{"pt":"Transmuta????o","style":"transmutation"},"castingTime":"1 a????o","range":"9 metros","components":"V, S, M","duration":"instant??nea","material":"uma muda de uma planta com espinhos","description":"Voc?? cria um longo chicote de vinhas coberto por espinhos que chicoteia, ao seu comando, em dire????o de uma criatura dentro do alcance. Realize um ataque corpo - a - corpo com magia contra o alvo. Se o ataque atingir, a criatura sofrer?? 1d6 de dano perfurante e, se a criatura for Grande ou menor, voc?? a puxa at?? 3 metros para perto de voc??.</p><p> O dano dessa magia aumenta em 1d6 quando voc?? alcan??a o 5?? n??vel (2d6), 11?? n??vel (3d6) e 17?? n??vel (4d6).","classes":["Druida"],"favorite":false},{"id":347,"level":"9","name":"Chuva de Meteoros","name_en":"Meteor Swarm","school":{"pt":"Evoca????o","style":"evocation"},"castingTime":"1 a????o","range":"1,5 quil??metro","components":"V, S","duration":"instant??nea","description":"Esferas de fogo incandescentes atingem o solo em quatro pontos diferentes que voc?? possa ver, dentro do alcance. Cada criatura numa esfera de 12 metros de raio, centrada em cada ponto escolhido por voc??, deve realizar um teste de resist??ncia de Destreza. A esfera se espalha, dobrando esquinas. Uma criatura sofre 20d6 de dano de fogo e 20d6 de dano de concuss??o se falhar na resist??ncia ou metade desse dano se obtiver sucesso. Uma criatura na ??rea de mais de uma explos??o de chamas ?? afetada apenas uma vez.</p><p> A magia causa dano aos objetos na ??rea e incendeia objetos inflam??veis que n??o estejam sendo vestidos ou carregados.","classes":["Feiticeiro","Mago"],"favorite":false},{"id":281,"level":"6","name":"C??rculo da Morte","name_en":"Circle Of Death","school":{"pt":"Necromancia","style":"necromancy"},"castingTime":"1 a????o","range":"45 metros","components":"V, S, M","duration":"instant??nea","material":"o p?? de uma p??rola negra esmagada valendo, no m??nimo, 500 po","description":"Uma esfera de energia negativa ondula em um raio de 18 metros de um ponto ao alcance. Cada criatura na ??rea deve realizar um teste de resist??ncia de Constitui????o. Um alvo sofre 8d6 de dano necr??tico se falhar no seu teste de resist??ncia, ou metade desse dano se passar.</p><p><strong> Em N??veis Superiores </strong>. Se voc?? conjurar essa magia usando um espa??o de magia de 7?? n??vel ou superior, o dano aumenta em 2d6 para cada n??vel do espa??o acima do 6??.","classes":["Bruxo","Feiticeiro","Mago"],"favorite":false},{"id":237,"level":"5","name":"C??rculo de Poder","name_en":"Circle Of Power","school":{"pt":"Abjura????o","style":"abjuration"},"castingTime":"1 a????o","range":"pessoal","components":"V","concentration":"s","duration":"at?? 10 minutos","description":"Energia divina irradia de voc??, distorcendo e espalhando energia m??gica a at?? 9 metros de voc??. At?? a magia acabar, a esfera se move com voc??, centrada em voc??. Pela dura????o, cada criatura amig??vel na ??rea (incluindo voc??) tem vantagem em testes de resist??ncia contra magias e outros efeitos m??gicos. Al??m disso, quando uma criatura afetada for bem sucedida num teste de resist??ncia contra uma magia ou efeito m??gico realizado para sofrer apenas metade do dano, ao inv??s disso, ela n??o sofrer?? dano nenhum se passar na resist??ncia.","classes":["Paladino"],"favorite":false},{"id":238,"level":"5","name":"C??rculo de Teletransporte","name_en":"Teleportation Circle","school":{"pt":"Conjura????o","style":"conjuration"},"castingTime":"1 minuto","range":"3 metros","components":"V, M","duration":"1 rodada","material":"giz e tintas raros infundidos com pedras preciosas no valor de 50 po, consumidos pela magia","description":"?? medida que voc?? conjura essa magia, voc?? desenha um c??rculo de 3 metros de di??metro no ch??o, inscrevendo selos que conectam sua localiza????o a um c??rculo de teletransporte permanente, ?? sua escolha, cuja sequ??ncia de selos voc?? conhe??a e esteja no mesmo plano de exist??ncia que voc??. Um portal cintilante se abre dentro do c??rculo que voc?? desenhou e permanece aberto at?? o final do seu pr??ximo turno. Qualquer criatura que entrar no portal, instantaneamente, aparecer?? a 1,5 metro do c??rculo de destino ou no espa??o desocupado mais pr??ximo, se o espa??o estiver ocupado.</p><p> Muitos templos principais, guildas e outros locais importantes possuem c??rculos de teletransporte permanentes inscritos em algum lugar dos seus confins. Cada c??rculo desse inclui uma sequ??ncia ??nica de selos??? uma sequ??ncia de runas m??gicas dispostas em um padr??o espec??fico. Quando voc?? adquire a capacidade de conjurar essa magia pela primeira vez, voc?? aprende a sequ??ncia de selos de dois destinos no Plano Material, determinadas pelo Mestre. Voc?? pode aprender sequ??ncias de selos adicionais durante suas aventuras. Voc?? pode consignar uma nova sequ??ncia de selos a mem??ria ap??s estud??-la por 1 minuto.</p><p> Voc?? pode criar um c??rculo de teletransporte permanente ao conjurar essa magia no mesmo local a cada dia por um ano. Voc?? n??o precisa usar o c??rculo para se teletransportar quando voc?? conjurar a magia desse modo.","classes":["Bardo","Feiticeiro","Mago"],"favorite":false},{"id":155,"level":"3","name":"C??rculo M??gico","name_en":"Magic Circle","school":{"pt":"Abjura????o","style":"abjuration"},"castingTime":"1 minuto","range":"3 metros","components":"V, S, M","duration":"1 hora","material":"??gua benta ou p?? de prata e ferro valendo, no m??nimo, 100 po, consumidos pela magia","description":"Voc?? cria um cilindro de energia m??gica de 3 metros de raio por 6 metros de altura, centrado num ponto no solo que voc?? possa ver, dentro do alcance. Runas brilhantes aparecem toda vez que o cilindro toca o ch??o ou outra superf??cie.</p><p> Escolha um ou mais dos tipos de criaturas seguintes: celestiais, corruptores, elementais, fadas ou mortos - vivos. O c??rculo afeta uma criatura do tipo escolhido das seguintes maneiras: </p><ul><li> A criatura n??o consegue entrar no cilindro voluntariamente por meios n??o - m??gicos. Se a criatura tentar usar teletransporte ou viagem interplanar para faz?? - lo, ela deve, primeiro, ser bem sucedida num teste de resist??ncia de Carisma.</li><li> A criatura tem desvantagem nas jogadas de ataque contra alvos dentro do cilindro.</li><li> Alvos dentro do cilindro n??o podem ser enfeiti??ados, amedrontados ou possu??dos pela criatura.</li></ ul><p> Quando voc?? conjurar essa magia, voc?? pode decidir que a m??gica dela opere na dire????o reversa, prevenindo que uma criatura de um tipo especifico saia do cilindro e protegendo os alvos fora dele.</p><p><strong> Em N??veis Superiores </strong>. Quando voc?? conjurar essa magia usando um espa??o de magia de 4?? n??vel ou superior, a dura????o aumenta em 1 hora para cada n??vel do espa??o acima do 3??.","classes":["Bruxo","Cl??rigo","Mago","Paladino"],"favorite":false},{"id":156,"level":"3","name":"Clarivid??ncia","name_en":"Clairvoyance","school":{"pt":"Adivinha????o","style":"divination"},"castingTime":"10 minutos","range":"1,5 quil??metro","components":"V, S, M","concentration":"s","duration":"at?? 10 minutos","material":"um foco valendo, no m??nimo, 100 po, tamb??m um chifre cravejado de joias para ouvir ou um olho de vidro para ver","description":"Voc?? cria um sensor invis??vel, dentro do alcance, em um local familiar a voc?? (um local que voc?? tenha visitado ou visto antes) ou em um local obvio que n??o seja familiar a voc?? (como atr??s de uma porta, ao redor de u canto ou em um bosque de ??rvores). O sensor se mant??m no local pela dura????o e n??o pode ser atacado ou manipulado de outra forma.</p><p> Quando voc?? conjurar essa magia, escolhe vis??o ou audi????o. Voc?? pode escolher sentir atrav??s do sensor como se voc?? estivesse no espa??o dele. Com sua a????o, voc?? pode trocar entre vis??o e audi????o.</p><p> Uma criatura que puder ver o sensor (como uma criatura beneficiada por <em> ver o invis??vel </em> ou vis??o verdadeira) v?? um globo luminoso e intang??vel do tamanho do seu olho.</p> ","classes":["Bardo","Cl??rigo","Feiticeiro","Mago"],"favorite":false},{"id":330,"level":"8","name":"Clone","name_en":"Clone","school":{"pt":"Necromancia","style":"necromancy"},"castingTime":"1 hora","range":"toque","components":"V, S, M","duration":"instant??nea","material":"um diamante valendo, no m??nimo, 1. 000 po e, no m??nimo 3 cent??metros c??bicos de carne da criatura que ser?? clonada, consumida pela magia, e um recept??culo valendo, no m??nimo, 2. 000 po que tenha uma tampa selada e seja grande o suficiente para comportar uma criatura M??dia, como uma urna enorme, um caix??o, um cisto cheio de lama no solo ou um recipiente de cristal cheio de ??gua salgada","description":"Essa magia produz uma duplicata inerte de uma criatura viva como uma garantia contra a morte. Esse clone ?? formado dentro de um recept??culo selado e cresce ao seu tamanho total, atingindo a maturidade ap??s 120 dias. Voc?? tamb??m pode escolher que o clone seja uma vers??o mais jovem da mesma criatura. Ele permanece inerte e dura indefinidamente, enquanto seu recept??culo permanecer intocado.</p><p> A qualquer momento, ap??s o clone amadurecer, se a criatura original morrer, sua alma ?? transferida para o clone, considerando que a alma est?? livre e deseje retornar. O clone ?? fisicamente id??ntico ao original e tem a mesma personalidade, mem??rias e habilidades, mas n??o possui qualquer equipamento do original. O f??sico da criatura original permanece, se ainda existir, se tornando inerte e n??o podendo, consequentemente, ser trazido de volta ?? vida, j?? que a alma da criatura est?? em outro lugar.","classes":["Mago"],"favorite":false},{"id":239,"level":"5","name":"Coluna de Chamas","name_en":"Flame Strike","school":{"pt":"Evoca????o","style":"evocation"},"castingTime":"1 a????o","range":"18 metros","components":"V, S, M","duration":"instant??nea","material":"uma pitada de enxofre","description":"Uma coluna vertical de fogo divino emerge de baixo para os c??us, no local que voc?? especificar. Cada criatura num cilindro de 3 metros de raio por 12 metros de altura, centrado num ponto dentro do alcance, deve realizar um teste de resist??ncia de Destreza. Uma criatura sofre 4d6 de dano de fogo e 4d6 de dano radiante se falhar na resist??ncia, ou metade desse dano se obtiver sucesso.</p><p><strong> Em N??veis Superiores </strong>. Quando voc?? conjurar essa magia usando um espa??o de magia de 6?? n??vel ou superior, o dano de fogo ou o dano radiante (?? sua escolha) aumenta em 1d6 por n??vel do espa??o acima do 5??.","classes":["Cl??rigo"],"favorite":false},{"id":37,"level":"1","name":"Comando","name_en":"Command","school":{"pt":"Encantamento","style":"enchantment"},"castingTime":"1 a????o","range":"18 metros","components":"V","duration":"1 rodada","description":"Voc?? pronuncia uma palavra de comando para uma criatura que voc?? possa ver dentro do alcance. O alvo deve ser bem sucedido num teste de resist??ncia de Sabedoria ou seguir?? seu comando no pr??ximo turno dele. A magia n??o tem efeito se o alvo for um morto - vivo, se ele n??o entender seu idioma ou se o comando for diretamente nocivo a ele.</p><p> Alguns comandos t??picos e seus efeitos a seguir. Voc?? pode proferir um comando diferente dos descritos aqui. Se o fizer, o Mestre descreve como o alvo reage. Se o alvo n??o puder cumprir o comando, a magia termina.</p><p><em><strong> Aproxime - se </strong></ em>. O alvo se move para pr??ximo de voc?? o m??ximo que puder na rota mais direta, terminando seu turno, se ele se mover a at?? 1,5 metro de voc??.</p><p><em><strong> Largue </strong></ em>. O alvo larga o que quer que ele esteja segurando, e termina seu turno.</p><p><em><strong> Fuja </strong></ em>. O alvo gasta seu turno se movendo para longe de voc?? da forma mais r??pida que puder.</p><p><em><strong> Deite - se </strong></ em>. O alvo deita - se no ch??o e ent??o, termina seu turno.</p><p><em><strong> Parado </strong></ em>. O alvo n??o se move e n??o realiza nenhuma a????o. Uma criatura voadora continua no alto, considerando que ela seja capaz de faz?? - lo. Se ela tiver que se mover para continuar no alto, ela voa a m??nima dist??ncia necess??ria para permanecer no ar.</p><p><strong> Em N??veis Superiores </strong>. Se voc?? conjurar essa magia usando um espa??o de magia de 2?? n??vel ou superior, voc?? pode afetar uma criatura adicional para cada n??vel do espa??o acima do 1??. As criaturas devem estar a 9 metros entre si para serem afetadas.","classes":["Cl??rigo","Paladino"],"favorite":false},{"id":38,"level":"1","name":"Compreender Idiomas","name_en":"Comprehend Languages","ritual":"s","school":{"pt":"Adivinha????o","style":"divination"},"castingTime":"1 a????o","range":"pessoal","components":"V, S, M","duration":"1 hora","material":"um pitada de fuligem e sal","description":"Pela dura????o, voc?? compreende o significado literal de qualquer idioma falado que voc?? ouvir. Voc?? tamb??m compreende qualquer idioma escrito que vir, mas voc?? deve tocar a superf??cie onde as palavras est??o escritas. Leva, aproximadamente, 1 minuto para ler uma p??gina de texto.</p><p> Essa magia n??o decifra mensagens secretas em textos ou glifos, como um selo arcano, que n??o seja parte de um idioma escrito.","classes":["Bardo","Bruxo","Feiticeiro","Mago"],"favorite":false},{"id":205,"level":"4","name":"Compuls??o","name_en":"Compulsion","school":{"pt":"Encantamento","style":"enchantment"},"castingTime":"1 a????o","range":"9 metros","components":"V, S","concentration":"s","duration":"at?? 1 minuto","description":"Criaturas, ?? sua escolha, que voc?? puder ver dentro do alcance e que puderem ouvir voc??, devem realizar um teste de resist??ncia de Sabedoria. Um alvo passa automaticamente nesse teste de resist??ncia se ele n??o puder ser enfeiti??ado. Se falhar no teste, um alvo ?? afetado por essa magia. At?? a magia acabar, voc?? pode usar uma a????o b??nus em cada um dos seus turnos, para designar uma dire????o horizontal a voc??. Cada criatura afetada deve se mover, da melhor forma poss??vel, para essa dire????o no pr??ximo turno dela. Ela pode realizar sua a????o antes de se mover. Depois de se mover dessa forma, ela pode realizar outra resist??ncia de Sabedoria para tentar acabar com o efeito.</p><p> Um alvo n??o ?? obrigado a se mover em dire????o de um perigo obviamente mortal, como uma fogueira ou abismo, mas ele vai provocar ataques de oportunidade por se mover na dire????o designada.","classes":["Bardo"],"favorite":false},{"id":240,"level":"5","name":"Comunh??o","name_en":"Commune","ritual":"s","school":{"pt":"Adivinha????o","style":"divination"},"castingTime":"1 minuto","range":"pessoal","components":"V, S, M","duration":"1 minuto","material":"incenso e um frasco de ??gua benta ou profana","description":"Voc?? contata sua divindade ou um representante divino e faz at?? tr??s perguntas que podem ser respondidas com um sim ou n??o. Voc?? deve fazer suas perguntas antes da magia terminar. Voc?? recebe uma resposta correta para cada pergunta.</p><p> Seres divinos n??o s??o necessariamente oniscientes, portanto, voc?? pode receber??? incerto??? como uma resposta se uma pergunta que diga respeito a uma informa????o al??m do conhecimento da divindade. Em caso de uma resposta de ??nica palavra puder levar ao engano ou contrariar os interesses da divindade, o Mestre pode oferecer uma frase curta como resposta, no lugar.</p><p> Se voc?? conjurar essa magia duas ou mais vezes antes de terminar um descanso longo, existe uma chance cumulativa de 25 por cento de cada conjura????o, depois da primeira que voc?? fez, ter um resultado aleat??rio. O Mestre faz essa jogada secretamente.","classes":["Cl??rigo"],"favorite":false},{"id":241,"level":"5","name":"Comunh??o com a Natureza","name_en":"Commune With Nature","ritual":"s","school":{"pt":"Adivinha????o","style":"divination"},"castingTime":"1 minuto","range":"pessoal","components":"V, S","duration":"instant??nea","description":"Voc??, momentaneamente, se torna uno com a natureza e ganha conhecimento do territ??rio ao seu redor. Ao ar livre, a magia lhe oferece conhecimento do terreno a at?? 4, 5 quil??metros de voc??. Em cavernas e outros forma????es subterr??neas naturais, o raio ?? limitado a 150 metros. A magia n??o funciona onde a natureza foi substitu??da por constru????es, como em masmorras ou cidades.</p><p> Voc??, instantaneamente, adquire conhecimento de at?? tr??s fatos, ?? sua escolha, sobre qualquer dos assuntos a seguir, relacionados a ??rea: </p><ul><li> Terrenos e corpos de ??gua </li><li> Plantas, min??rios, animais e povo predominante </li><li> Celestiais, fadas, corruptores, elementais ou mortos - vivos mais poderosos </li><li> Influ??ncia de outros planos de exist??ncia </li><li> Constru????es </li></ ul><p> Por exemplo, voc?? poderia determinar a localiza????o de um morto - vivo poderoso na ??rea, a localiza????o da maior fonte de ??gua pot??vel e a localiza????o de quaisquer cidades pr??ximas.","classes":["Druida","Patrulheiro"],"favorite":false},{"id":242,"level":"5","name":"Cone de Frio","name_en":"Cone Of Cold","school":{"pt":"Evoca????o","style":"evocation"},"castingTime":"1 a????o","range":"pessoal","components":"V, S, M","duration":"instant??nea","material":"um pequeno cristal ou cone de vidro","description":"Uma explos??o de ar gelado irrompe das suas m??os. Cada criatura dentro do cone de 18 metros, deve realizar um teste de resist??ncia de Constitui????o. Uma criatura sofre 8d8 de dano de frio se falhar na resist??ncia, ou metade desse dano se passar.</p><p> Uma criatura morta por essa magia se torna uma est??tua congelada at?? derreter.</p><p><strong> Em N??veis Superiores </strong>. Se voc?? conjurar essa magia usando um espa??o de magia de 6?? n??vel ou superior, o dano aumenta em 1d8 para cada n??vel do espa??o acima do 5??.","classes":["Feiticeiro","Mago"],"favorite":false},{"id":206,"level":"4","name":"Confus??o","name_en":"Confusion","school":{"pt":"Encantamento","style":"enchantment"},"castingTime":"1 a????o","range":"27 metros","components":"V, S, M","concentration":"s","duration":"at?? 1 minuto","material":"tr??s cascas de noz","description":"Essa magia ataca e embaralha as mentes das criaturas, gerando del??rios e provocando a????es descontroladas. Cada criatura em uma esfera com 3 metros de raio, centrada num ponto, ?? sua escolha, dentro do alcance, deve ser bem sucedida num teste de resist??ncia de Sabedoria, quando voc?? conjurar essa magia ou for afetada por ela.</p><p> Um alvo afetado n??o pode realizar rea????es e deve rolar 1d10 no in??cio de cada um dos seus turnos para determinar seu comportamento nesse turno.","classes":["Bardo","Druida","Feiticeiro","Mago"],"favorite":false},{"id":243,"level":"5","name":"Conhecimento Lend??rio","name_en":"Legend Lore","school":{"pt":"Adivinha????o","style":"divination"},"castingTime":"10 minutos","range":"pessoal","components":"V, S, M","duration":"instant??nea","material":"incenso valendo, no m??nimo, 250 po, consumido pela magia e quatro tiras de marfim valendo, no m??nimo, 50 po cada","description":"Nomeie ou descreva uma pessoa, local ou objeto. A magia traz a sua mente um breve resumo do conhecimento significativo sobre a coisa que voc?? nomeou. O conhecimento deve consistir em contos atuais, hist??rias esquecidas ou, at?? mesmo, conhecimento secreto que nunca foi amplamente divulgado. Se a coisa que voc?? nomeou n??o for de import??ncia lend??ria, voc?? n??o recebe qualquer informa????o sofre ela. Quanto mais informa????o voc?? possuir sobre a coisa, mais precisa e detalhada ser?? a informa????o que voc?? receber??.</p><p> A informa????o que voc?? aprende ?? precisa, mas pode ser redigida em linguagem figurada. Por exemplo, se voc?? possuir um misterioso machado m??gico na m??o, a magia pode proporcionar essa informa????o: ???Ai do malfeitor cuja m??o toca o machado, at?? mesmo seu cabo corta a m??o dos malignos. S?? um verdadeiro Filho da Pedra, adorador e adorado de Moradin, pode despertar os verdadeiros poderes do machado e apenas com a palavra sagrada Rudnogg nos l??bios. ??? ","classes":["Bardo","Cl??rigo","Mago"],"favorite":false},{"id":157,"level":"3","name":"Conjurar Animais","name_en":"Conjure Animals","school":{"pt":"Conjura????o","style":"conjuration"},"castingTime":"1 a????o","range":"18 metros","components":"V, S","concentration":"s","duration":"at?? 1 hora","description":"Voc?? invoca esp??ritos fe??ricos, que assumem formas de bestas, que aparecem em espa??os desocupados, que voc?? possa ver dentro do alcance. Escolha uma das op????es a seguir para aparecer: </p><ul><li> Uma besta de n??vel de desafio 2 ou inferior </li><li> Duas bestas de n??vel de desafio 1 ou inferior </li><li> Quatro bestas de n??vel de desafio 1 / 2 ou inferior </li><li> Oito bestas de n??vel de desafio 1 / 4 ou inferior </li></ ul><p> Cada besta ?? tamb??m considerada uma fada e desaparece quando cair a 0 pontos de vida ou quando a magia acabar.</p><p> As criaturas invocadas s??o amig??veis a voc?? e a seus companheiros. Role a iniciativa para as criaturas invocadas como um grupo, que age no seu pr??prio turno. Eles obedecem a quaisquer comandos verbais que voc?? emitir (n??o requer uma a????o sua). Se voc?? n??o emitir nenhum comando a elas, elas se defender??o de criaturas hostis, mas no mais, n??o realizar??o nenhuma a????o.</p><p> O Mestre possui as estat??sticas das criaturas.</p><p><strong> Em N??veis Superiores </strong>. Se voc?? conjurar essa magia usando certos espa??os de magia superiores, voc?? escolhe uma das op????es de invoca????o acima e mais criaturas aparecem: o dobro delas com um espa??o de 5?? n??vel, o triplo delas com um espa??o de 7?? n??vel e o quadruplo delas com um espa??o de 9?? n??vel.","classes":["Druida","Patrulheiro"],"favorite":false},{"id":308,"level":"7","name":"Conjurar Celestial","name_en":"Conjure Celestial","school":{"pt":"Conjura????o","style":"conjuration"},"castingTime":"1 minuto","range":"27 metros","components":"V, S","concentration":"s","duration":"at?? 1 hora","description":"Voc?? invoca um celestial de n??vel de desafio 4 ou inferior, que aparece num espa??o desocupado, que voc?? possa ver dentro do alcance. O celestial desaparece se cair a 0 pontos de vida ou quando a magia acabar.</p><p> O celestial ?? amig??vel a voc?? e a seus companheiros pela dura????o. Role a iniciativa para o celestial, que age no seu pr??prio turno. Ele obedece a quaisquer comandos verbais que voc?? emitir (n??o requer uma a????o sua), contanto que n??o violem sua tend??ncia. Se voc?? n??o emitir nenhum comando a ele, ele se defender?? de criaturas hostis, mas no mais, n??o realizar?? nenhuma a????o.</p><p> O Mestre possui as estat??sticas do celestial.</p><p><strong> Em N??veis Superiores </strong>. Quando voc?? conjurar essa magia usando um espa??o de magia de 9?? n??vel, voc?? invoca um celestial de n??vel de desafio 5 ou inferior.","classes":["Cl??rigo"],"favorite":false},{"id":207,"level":"4","name":"Conjurar Elementais Menores","name_en":"Conjure Minor Elementals","school":{"pt":"Conjura????o","style":"conjuration"},"castingTime":"1 minuto","range":"27 metros","components":"V, S","concentration":"s","duration":"at?? 1 hora","description":"Voc?? invoca elementais que aparecem em espa??os desocupados, que voc?? possa ver dentro do alcance. Voc?? escolhe uma das op????es a seguir para aparecer: </p><ul><li> Um elemental de n??vel de desafio 2 ou inferior </li><li> Dois elementais de n??vel de desafio 1 ou inferior </li><li> Quatro elementais de n??vel de desafio 1 / 2 ou inferior </li><li> Oito elementais de n??vel de desafio 1 / 4 ou inferior </li></ ul><p> Um elemental invocado atrav??s dessa magia desaparece quando cair a 0 pontos de vida ou quando a magia acabar.</p><p> As criaturas invocadas s??o amig??veis a voc?? e a seus companheiros. Role a iniciativa para as criaturas invocadas como um grupo, que age no seu pr??prio turno. Eles obedecem a quaisquer comandos verbais que voc?? emitir (n??o requer uma a????o sua). Se voc?? n??o emitir nenhum comando a elas, elas se defender??o de criaturas hostis, mas no mais, n??o realizar??o nenhuma a????o.</p><p> O Mestre possui as estat??sticas das criaturas.</p><p><strong> Em N??veis Superiores </strong>. Se voc?? conjurar essa magia usando certos espa??os de magia superiores, voc?? escolhe uma das op????es de invoca????o acima e mais criaturas aparecem: o dobro delas com um espa??o de 6?? n??vel e o triplo delas com um espa??o de 8?? n??vel.","classes":["Druida","Mago"],"favorite":false},{"id":244,"level":"5","name":"Conjurar Elemental","name_en":"Conjure Elemntal","school":{"pt":"Conjura????o","style":"conjuration"},"castingTime":"1 minuto","range":"27 metros","components":"V, S, M","concentration":"s","duration":"at?? 1 hora","material":"incenso aceso para ar, argila mole para terra, enxofre e f??sforo para fogo ou ??gua e areia para ??gua","description":"Voc?? invoca um servo elemental. Escolha uma ??rea de ar, ??gua, fogo ou terra que preencha 3 metros c??bicos, dentro do alcance. Um elemental de n??vel de desafio 5 ou inferior, adequado a ??rea que voc?? escolheu, aparece em um espa??o desocupado a at?? 3 metros dela. Por exemplo, um elemental do fogo emergiria de uma fogueira e um elemental da terra erguer - se - ia do solo. O elemental desaparece quando cair a 0 pontos de vida ou quando a magia acabar.</p><p> O elemental ?? amig??vel a voc?? e a seus companheiros pela dura????o. Role a iniciativa para o elemental, que age no seu pr??prio turno. Ele obedece a quaisquer comandos verbais que voc?? emitir (n??o requer uma a????o sua). Se voc?? n??o emitir nenhum comando a ele, ele se defender?? de criaturas hostis, mas no mais, n??o realizar?? nenhuma a????o.</p><p> Se sua concentra????o for interrompida, o elemental n??o desaparece. Ao inv??s disso, voc?? perde o controle sobre o elemental e ele se torna hostil a voc?? e aos seus companheiros, e ir?? atacar. Um elemental fora de controle n??o pode ser dispensado e desaparece 1 hora depois de voc?? ter o invocado.","classes":["Druida","Mago"],"favorite":false},{"id":282,"level":"6","name":"Conjurar Fada","name_en":"Conjure Fey","school":{"pt":"Conjura????o","style":"conjuration"},"castingTime":"1 minuto","range":"27 metros","components":"V, S","concentration":"s","duration":"at?? 1 hora","description":"Voc?? invoca uma criatura fe??rica de n??vel de desafio 6 ou inferior ou um esp??rito fe??rico que assume a forma de uma besta de n??vel de desafio 6 ou inferior. Ela aparece num espa??o desocupado, que voc?? possa ver dentro do alcance. A criatura fe??rica desaparece se cair a 0 pontos de vida ou quando a magia acabar.</p><p> A criatura fe??rica ?? amig??vel a voc?? e a seus companheiros pela dura????o. Role a iniciativa para a criatura, que age no seu pr??prio turno. Ela obedece a quaisquer comandos verbais que voc?? emitir (n??o requer uma a????o sua), contanto que n??o violem sua tend??ncia. Se voc?? n??o emitir nenhum comando a ela, ela se defender?? de criaturas hostis, mas no mais, n??o realizar?? nenhuma a????o.</p><p> Se sua concentra????o for interrompida, a criatura fe??rica n??o desaparece. Ao inv??s disso, voc?? perde o controle sobre o elemental e ele se torna hostil a voc?? e aos seus companheiros, e ir?? atacar. Uma criatura fe??rica fora de controle n??o pode ser dispensada e desaparece 1 hora depois de voc?? ter a invocado.</p><p> O Mestre possui as estat??sticas da criatura fe??rica.</p><p><strong> Em N??veis Superiores </strong>. Quando voc?? conjurar essa magia usando um espa??o de magia de 7?? n??vel ou superior, o n??vel de desafio aumenta em 1 para cada n??vel do espa??o acima do 6??.","classes":["Bruxo","Druida"],"favorite":false},{"id":158,"level":"3","name":"Conjurar Rajada","name_en":"Conjure Barrage","school":{"pt":"Conjura????o","style":"conjuration"},"castingTime":"1 a????o","range":"pessoal","components":"V, S, M","duration":"instant??nea","material":"uma muni????o ou arma de arremesso","description":"Voc?? arremessa uma arma n??o - m??gica ou dispara uma muni????o n??o - m??gica no ar para criar um cone de armas id??nticas que se lan??am a frente e ent??o desaparecem. Cada criatura num cone de 18 metros, deve ser bem sucedida num teste de resist??ncia de Destreza. Uma criatura sofre 3d8 de dano se falhar na resist??ncia, ou metade desse dano num sucesso. O tipo do dano ?? o mesmo da arma ou muni????o usada como componente.","classes":["Patrulheiro"],"favorite":false},{"id":245,"level":"5","name":"Conjurar Saraivada","name_en":"Conjure Volley","school":{"pt":"Conjura????o","style":"conjuration"},"castingTime":"1 a????o","range":"45 metros","components":"V, S, M","duration":"instant??nea","material":"uma muni????o ou arma de arremesso","description":"Voc?? dispara uma muni????o n??o - m??gica de uma arma ?? dist??ncia ou arremessa uma arma n??o - m??gica no ar e escolhe um ponto dentro do alcance. Centenas de duplicatas da muni????o ou arma caem em uma saraivada vinda de cima e ent??o desaparecem. Cada criatura num cilindro com 12 metros de raio e 6 metros de altura centrado no ponto, deve realizar um teste de resist??ncia de Destreza. Uma criatura sofre 8d8 de dano se falhar na resist??ncia, ou metade desse dano num sucesso. O tipo do dano ?? o mesmo da muni????o ou arma.","classes":["Patrulheiro"],"favorite":false},{"id":208,"level":"4","name":"Conjurar Seres da Floresta","name_en":"Conjure Woodland Beings","school":{"pt":"Conjura????o","style":"conjuration"},"castingTime":"1 a????o","range":"18 metros","components":"V, S, M","concentration":"s","duration":"at?? 1 hora","material":"um fruto sagrado por criatura invocada","description":"Voc?? invoca criaturas fe??ricas que aparecem em espa??os desocupados, que voc?? possa ver dentro do alcance. Escolha uma das op????es a seguir para aparecer: </p><ul><li> Uma criatura fe??rica de n??vel de desafio 2 ou inferior </li><li> Duas criaturas fe??ricas de n??vel de desafio 1 ou inferior </li><li> Quatro criaturas fe??ricas de n??vel de desafio 1 / 2 ou inferior </li><li> Oito criaturas fe??ricas de n??vel de desafio 1 / 4 ou inferior </li></ ul><p> Uma criatura invocado desaparece quando cair a 0 pontos de vida ou quando a magia acabar.</p><p> As criaturas invocadas s??o amig??veis a voc?? e a seus companheiros. Role a iniciativa para as criaturas invocadas como um grupo, que age no seu pr??prio turno. Eles obedecem a quaisquer comandos verbais que voc?? emitir (n??o requer uma a????o sua). Se voc?? n??o emitir nenhum comando a elas, elas se defender??o de criaturas hostis, mas no mais, n??o realizar??o nenhuma a????o.</p><p> O Mestre possui as estat??sticas das criaturas.</p><p><strong> Em N??veis Superiores </strong>. Se voc?? conjurar essa magia usando certos espa??os de magia superiores, voc?? escolhe uma das op????es de invoca????o acima e mais criaturas aparecem: o dobro delas com um espa??o de 6?? n??vel e o triplo delas com um espa??o de 8?? n??vel.","classes":["Druida","Patrulheiro"],"favorite":false},{"id":246,"level":"5","name":"Consagrar","name_en":"Hallow","school":{"pt":"Evoca????o","style":"evocation"},"castingTime":"24 horas","range":"toque","components":"V, S, M","duration":"at?? ser dissipada","material":"ervas, ??leos e incenso valendo, no m??nimo, 1. 000 po, consumidos pela magia","description":"Voc?? toca um ponto e infunde uma ??rea ao redor com poder sagrado (ou profano). A ??rea pode ter at?? 18 metros de raio e a magia falha se o raio incluir uma ??rea j?? sob efeito da magia <em> consagrar </em>. A ??rea afetada est?? sujeita aos seguintes efeitos.</p><p> Primeiro, celestiais, corruptores, elementais, fadas e mortos - vivos n??o conseguem entrar na ??rea, nem, tais criaturas, podem enfeiti??ar, amedrontar ou possuir criaturas dentro da ??rea. Qualquer criatura enfeiti??ada, amedrontada ou possu??da por uma criatura dessas, n??o estar?? mais enfeiti??ada, amedrontada ou possu??da ao adentrar a ??rea. Voc?? pode excluir um ou mais desses tipos de criaturas desse efeito.</p><p> Segundo, voc?? pode vincular um efeito extra a ??rea. Escolha o efeito da lista a seguir, ou escolha um efeito oferecido pelo Mestre. Alguns desses efeitos se aplicam a criaturas na ??rea. Voc?? pode definir seu o efeito se aplica a todas as criaturas, criaturas que seguem uma divindade ou l??der especifico ou criaturas de uma esp??cie especifica, como orcs ou trolls. Quando uma criatura que seria afetada entrar na ??rea da magia pela primeira vez em um turno, ou come??ar seu turno nela, ela pode fazer um teste de resist??ncia de Carisma. Se obtiver sucesso, a criatura ignora o efeito extra at?? sair da ??rea.</p><p><em><strong> Coragem </strong></ em>. As criaturas afetadas n??o podem ser amedrontadas enquanto estiverem na ??rea.</p><p><em><strong> Descanso Eterno </strong></ em>. Cad??veres enterrados na ??rea n??o podem ser transformados em mortos - vivos.</p><p><em><strong> Escurid??o </strong></ em>. Escurid??o preenche a ??rea. Luz normal, assim como luz m??gica criada por magias de n??vel inferior ao n??vel do espa??o usado para conjurar essa magia, n??o podem iluminar a ??rea.</p><p><em><strong> Idiomas </strong></ em>. As criaturas afetadas podem se comunicar com qualquer outra criatura na ??rea, mesmo que elas n??o partilhem um idioma em comum.</p><p><em><strong> Interfer??ncia Extradimensional </strong></ em>. As criaturas afetadas n??o podem se mover ou viajar usando teletransporte ou por meios extradimensionais ou interplanares.</p><p><em><strong> Luz do Dia </strong></ em>. Luz plena preenche a ??rea. Escurid??o m??gica criada por magias de n??vel inferior ao n??vel do espa??o usado para conjurar essa magia, n??o podem extinguir a luz.</p><p><em><strong> Medo </strong></ em>. As criaturas afetadas ficam amedrontadas enquanto estiverem na ??rea.</p><p><em><strong> Prote????o contra Energia </strong></ em>. As criaturas afetadas na ??rea tem resist??ncia a um tipo de dano, ?? sua escolha, exceto de concuss??o, cortante ou perfurante.</p><p><em><strong> Sil??ncio </strong></ em>. Nenhum som pode ser emitido de dentro da ??rea e nenhum som pode adentr??-la.</p><p><em><strong> Vulnerabilidade ?? Energia </strong></ em>. As criaturas afetadas na ??rea tem vulnerabilidade a um tipo de dano, ?? sua escolha, exceto de concuss??o, cortante ou perfurante.","classes":["Cl??rigo"],"favorite":false},{"id":5,"level":"0","name":"Consertar","name_en":"Mending","school":{"pt":"Transmuta????o","style":"transmutation"},"castingTime":"1 minuto","range":"toque","components":"V, S, M","duration":"instant??nea","material":"dois ??m??s","description":"Essa magia repara um ??nica quebra ou fissura em um objeto que voc?? tocar, como um elo quebrado de uma corrente, duas metades de uma chave partida, um manto rasgado ou o vazamento em um odre. Contanto que a quebra ou fissura n??o tenha mais de 30 cent??metros em qualquer dimens??o, voc?? pode remend??-la, n??o deixando qualquer vest??gio do dano anterior.</p><p> Essa magia pode reparar fisicamente um item m??gico ou constructo, mas a magia n??o ir?? restaurar a magia em tais objetos.","classes":["Bardo","Cl??rigo","Druida","Feiticeiro","Mago"],"favorite":false},{"id":39,"level":"1","name":"Constri????o","name_en":"Entangle","school":{"pt":"Conjura????o","style":"conjuration"},"castingTime":"1 a????o","range":"27 metros","components":"V, S","concentration":"s","duration":"at?? 1 minuto","description":"Ervas e vinhas poderosas brotam do solo num quadrado de 6 metros a partir de um ponto dentro do alcance. Pela dura????o, essas plantas transformam o solo na ??rea em terreno dif??cil.</p><p> Uma criatura na ??rea quando voc?? conjurar a magia deve ser bem sucedida num teste de resist??ncia de For??a ou ficar?? impedida pelo emaranhado de plantas, at?? a magia acabar. Uma criatura impedida pelas plantas pode usar sua a????o para realizar um teste de For??a, contra a CD da magia. Se for bem sucedido, ir?? se libertar.</p><p> Quando a magia termina, as plantas conjuradas murchar??o.","classes":["Druida"],"favorite":false},{"id":247,"level":"5","name":"Contato Extraplanar","name_en":"Contact Other Plane","ritual":"s","school":{"pt":"Adivinha????o","style":"divination"},"castingTime":"1 minuto","range":"pessoal","components":"V","duration":"1 minuto","description":"Voc?? contata mentalmente um semideus, o esp??rito de um s??bio morto h?? muito tempo ou alguma outra entidade misteriosa de outro plano. Contatar esse extraplanar inteligente pode distorcer ou at?? mesmo arruinar com sua mente. Quando voc?? conjurar essa magia, fa??a um teste de resist??ncia de Intelig??ncia CD 15. Se falhar, voc?? sofre 6d6 de dano ps??quico e fica insano at?? terminar um descanso longo. Enquanto estiver insano, voc?? n??o pode realizar a????es, n??o entende o que as outras criaturas dizem, n??o pode ler e fala apenas coisas sem sentido. Conjurar a magia <em> restaura????o maior </em> em voc?? acaba com esse efeito.</p><p> Se obtiver sucesso no teste de resist??ncia, voc?? pode fazer at?? cinco perguntas ?? entidade. Voc?? deve fazer suas perguntas antes da magia acabar. O Mestre responde cada pergunta com uma ??nica palavra, como??? sim???, ???n??o???, ???talvez???, ???nunca???, ???irrelevante??? ou??? incerto??? (se a entidade n??o souber a resposta para a pergunta). Em caso de uma resposta de ??nica palavra puder levar ao engano, o Mestre pode, ao inv??s disso, oferecer uma frase curta como resposta.","classes":["Bruxo","Mago"],"favorite":false},{"id":283,"level":"6","name":"Conting??ncia","name_en":"Contingency","school":{"pt":"Evoca????o","style":"evocation"},"castingTime":"10 minutos","range":"pessoal","components":"V, S, M","duration":"10 dias","material":"uma est??tua sua esculpida em marfim e decorada com gemas valendo, no m??nimo, 1. 500 po","description":"Escolha uma magia de 5?? n??vel ou inferior que voc?? possa conjurar, que tenha um tempo de conjura????o de 1 a????o e que possa ter voc?? como alvo. Voc?? conjura essa magia??? chamada de magia contingente??? como parte da conjura????o de <em> conting??ncia </em>, gastando espa??os de magia para ambas, mas a magia contingente n??o tem efeito imediato. Ao inv??s disso, ela se ativa quando uma certa circunst??ncia ocorre. Voc?? descreve a circunst??ncia quando conjura as duas magias. Por exemplo, uma <em> conting??ncia </em> conjurada com <em> respirar na ??gua </em> pode estipular que <em> respirar na ??gua </em> se ative quando voc?? estiver imerso em ??gua ou um l??quido similar.</p><p> A magia contingente se ativa imediatamente depois da circunst??ncia ser satisfeita pela primeira vez, quer voc?? queira, quer n??o, e a <em> conting??ncia </em> termina.</p><p> A magia contingente afeta apenas voc??, mesmo que ela normalmente possa afetar outros alvos. Voc?? pode ter apenas uma <em> conting??ncia </em> ativa por vez. Se voc?? conjurar essa magia novamente, o efeito da outra magia <em> conting??ncia </em> termina. Al??m disso, a <em> conting??ncia </em> tamb??m termina em voc?? se os componentes materiais dela n??o estiverem mais com voc??.</p> ","classes":["Mago"],"favorite":false},{"id":159,"level":"3","name":"Contram??gica","name_en":"Counterspell","school":{"pt":"Abjura????o","style":"abjuration"},"castingTime":"1 rea????o","range":"18 metros","components":"S","duration":"instant??nea","reaction":"que voc?? realiza quando v?? uma criatura a at?? 18 metros conjurando uma magia","description":"Voc?? tenta interromper uma criatura no processo de conjura????o de uma magia. Se a criatura estiver conjurando uma magia de 3?? n??vel ou inferior, a magia falha e n??o gera nenhum efeito. Se ela estiver conjurando uma magia de 4?? n??vel ou superior, fa??a um teste de habilidade usando sua habilidade de conjura????o. A CD ?? igual a 10 + o n??vel da magia. Caso seja bem sucedido, a magia da criatura falha e n??o gera nenhum efeito.</p><p><strong> Em N??veis Superiores </strong>. Se voc?? conjurar essa magia usando um espa??o de magia de 4?? n??vel ou superior, a magia interrompida n??o vai gerar efeito se o n??vel dela for menor ou igual ao n??vel do espa??o de magia que voc?? usar.","classes":["Bruxo","Feiticeiro","Mago"],"favorite":false},{"id":209,"level":"4","name":"Controlar a ??gua","name_en":"Control Water","school":{"pt":"Transmuta????o","style":"transmutation"},"castingTime":"1 a????o","range":"90 metros","components":"V, S, M","concentration":"s","duration":"at?? 10 minutos","material":"uma gota de ??gua e uma pitada de poeira","description":"At?? o fim da magia, voc?? controla qualquer corpo de ??gua dentro da ??rea que voc?? escolher, que ?? um cubo de 30 metros quadrados. Voc?? pode escolher dentre quaisquer dos efeitos seguintes, quando voc?? conjurar essa magia. Com uma a????o no seu turno, voc?? pode repetir o mesmo efeito ou escolher um diferente.</p><p><em><strong> Inunda????o </strong></ em>. Voc?? faz com que o n??vel da ??gua de toda ??rea afetada suba at?? 6 metros. Se a ??rea incluir uma margem, a inunda????o ira transbordar para a terra seca.</p><p> Se voc?? escolher uma ??rea em um extenso corpo de ??gua, ao inv??s disso, voc?? cria uma onda com 6 metros de altura que ir?? de um lado ao outro da ??rea e ent??o desaba. Qualquer ve??culo Enorme ou menor no caminho da onda ser?? carregado por ela at?? o outro lado. Qualquer ve??culo Enorme ou menor atingido pela onda tem uma chance de 25 por cento de emborcar.</p><p> O n??vel da ??gua se mant??m elevado at?? a magia acabar ou voc?? escolher um efeito diferente. Se esse efeito produzir uma onda, a onda se repete no in??cio do seu pr??ximo turno enquanto o efeito de inunda????o durar.</p><p><em><strong> Dividir ??gua </strong></ em>. Voc?? faz com que a ??gua na ??rea se divida e crie uma trincheira. A trincheira se estende por toda ??rea da magia e a ??gua separada forma uma parede de cada lado. A trincheira permanece at?? a magia acabar ou voc?? escolher um efeito diferente. A ??gua, ent??o, lentamente preenche a trincheira ao longo do curso da pr??xima rodada at?? o n??vel normal da ??gua ser restaurado.</p><p><em><strong> Redirecionar Fluxo </strong></ em>. Voc?? faz com que o fluxo da ??gua na ??rea se mova na dire????o que voc?? escolher, mesmo que a ??gua tenha que fluir atrav??s de obst??culos, subir muros ou em outra dire????o improv??vel. A ??gua na ??rea se move na dire????o ordenada, mas uma vez que tenha se movido al??m da ??rea da magia, ela conclui seu fluxo baseado nas condi????es do terreno. A ??gua continua a se mover na dire????o que voc?? escolheu at?? a magia acabar ou voc?? escolher um efeito diferente.</p><p><em><strong> Redemoinho </strong></ em>. Esse efeito requer um corpo de ??gua de, pelo menos, 15 metros quadrados e 7, 5 metros de profundidade. Voc?? faz com que um redemoinho se forme no centro da ??rea. O redemoinho forma um v??rtice com 1,5 metro de largura na base, chegando a 15 metros de largura no topo e 7, 5 metros de altura. Qualquer criatura ou objeto na ??gua a at?? 7, 5 metros do v??rtice ?? puxado 3 metros na dire????o dele. Uma criatura pode tentar nadar para longe do v??rtice com um teste de For??a (Atletismo) contra a CD da magia.</p><p> Quando uma criatura entrar no v??rtice pela primeira vez no turno dela ou come??ar seu turno dentro dele, ela deve realizar um teste de resist??ncia de For??a. Se falhar, a criatura sofre 2d8 de dano de concuss??o e estar?? presa no v??rtice at?? a magia acabar. Se passar na resist??ncia, a criatura sofre metade do dano e n??o estar?? presa no v??rtice. Uma criatura presa no v??rtice pode usar sua a????o para tentar nadar para fora do v??rtice como descrito acima, mas ter?? desvantagem no teste de For??a (Atletismo) para fazer isso.</p><p> A primeira vez a cada turno que um objeto entrar no v??rtice, o objeto sofre 2d8 de dano de concuss??o, esse dano se repete a cada rodada que ele permanecer no v??rtice.","classes":["Cl??rigo","Druida","Mago"],"favorite":false},{"id":331,"level":"8","name":"Controlar o Clima","name_en":"Control Weather","school":{"pt":"Transmuta????o","style":"transmutation"},"castingTime":"10 minutos","range":"pessoal","components":"V, S, M","concentration":"s","duration":"at?? 8 horas","material":"incenso aceso e peda??os de terra e madeira misturados em ??gua","description":"Voc?? toma controle do clima numa ??rea de 7, 5 quil??metros de voc?? pela dura????o. Voc?? deve estar ao ar livre para conjurar essa magia. Se mover para um lugar onde voc?? n??o tenha uma vis??o clara do c??u termina a magia prematuramente.</p><p> Quando voc?? conjurar essa magia, voc?? muda as condi????es clim??ticas atuais, que s??o determinadas pelo Mestre baseado no ambiente e esta????o. Voc?? pode mudar a precipita????o, temperatura e vento. Leva 1d4 x 10 minutos para as novas condi????es fazerem efeito. Quando a magia terminar, o clima, gradualmente, volta ao normal.</p><p> Quando voc?? altera as condi????es clim??ticas, encontre a condi????o atual nas tabelas a seguir e mude em um est??gio, para cima ou para baixo. Quando mudar o vento, voc?? pode mudar a dire????o do mesmo.","classes":["Cl??rigo","Druida","Mago"],"favorite":false},{"id":40,"level":"1","name":"Convocar Familiar","name_en":"Find Familiar","ritual":"s","school":{"pt":"Conjura????o","style":"conjuration"},"castingTime":"1 hora","range":"3 metros","components":"V, S, M","duration":"instant??nea","material":"carv??o, incenso e ervas no valor de 10 po, que devem ser consumidos pelo fogo em um braseiro de bronze","description":"Voc?? adquire os servi??os de uma familiar, um esp??rito que toma a forma de um animal, ?? sua escolha: aranha, caranguejo, cavalo marinho, coruja, corvo, doninha, gato, falc??o, lagarto, morcego, peixe (arenque), polvo, rato, r?? (sapo) ou serpente venenosa. Aparecendo em um espa??o desocupado dentro do alcance, o familiar tem as mesmas estat??sticas da forma escolhida, no entanto, ele ?? um celestial, corruptor ou fada (?? sua escolha) ao inv??s de uma besta.</p><p> Seu familiar at?? independentemente de voc??, mas ele sempre obedece aos seus comandos. Em combate, ele rola sua a pr??pria iniciativa e age no seu pr??prio turno. Um familiar n??o pode atacar, mas ele pode realizar outras a????es, como de costume.</p><p> Quando um familiar cai a 0 pontos de vida, ele desaparece, n??o deixando qualquer corpo f??sico para tr??s. Ele reaparece depois de voc?? conjurar essa magia novamente.</p><p> Enquanto seu familiar estiver a at?? 30 metros de voc??, voc?? pode se comunicar telepaticamente com ele. Al??m disso, com uma a????o, voc?? pode ver atrav??s dos olhos do familiar e ouvir atrav??s dos ouvidos dele, at?? o in??cio do seu pr??ximo turno, adquirindo os benef??cios de qualquer sentido especial que o familiar possua. Durante esse per??odo, voc?? estar?? cego e surdo em rela????o aos seus pr??prios sentidos.</p><p> Com uma a????o, voc?? pode, temporariamente, dispensar seu familiar. Ele desaparece dentro de uma bolsa dimensional onde ele aguarda sua convoca????o. Alternativamente, voc?? pode dispensa - lo para sempre. Com uma a????o, enquanto ele estiver temporariamente dispensado, voc?? pode faz?? - lo reaparecer em qualquer espa??o desocupado a at?? 9 metros de voc??.</p><p> Voc?? n??o pode ter mais de um familiar por vez. Se voc?? conjurar essa magia enquanto j?? tiver um familiar, ao inv??s disso, voc?? faz seu familiar existente adotar uma nova forma. Escolha uma das formas da lista acima. Seu familiar se transforma na criatura escolhida.</p><p> Finalmente, quando voc?? conjura uma magia com alcance de toque, seu familiar pode transmitir a magia, como se ele tivesse conjurado ela. Seu familiar precisa estar a at?? 30 metros de voc?? e deve usar a rea????o dele para transmitir a magia quando voc?? a conjurar. Se a magia necessitar de uma jogada de ataque, voc?? usa seu modificador de ataque para essa jogada.","classes":["Mago"],"favorite":false},{"id":104,"level":"2","name":"Convocar Montaria","name_en":"Find Steed","school":{"pt":"Conjura????o","style":"conjuration"},"castingTime":"10 minutos","range":"9 metros","components":"V, S","duration":"instant??nea","description":"Voc?? convoca um esp??rito que assume a forma de uma montaria excepcionalmente inteligente, forte e leal, criando uma liga????o duradoura com ela. Aparecendo em um espa??o desocupado dentro do alcance, a montaria adquire a forma que voc?? escolher, como um cavalo de guerra, um p??nei, um camelo, um alce ou um mastim. (Seu Mestre pode permitir outros animais para serem convocados como montarias.) A montaria tem as estat??sticas da forma escolhida, no entanto, ele ?? um celestial, corruptor ou fada (?? sua escolha) ao inv??s do seu tipo normal. Al??m disso, se sua montaria tiver Intelig??ncia 5 ou menor, a Intelig??ncia dela se torna 6 e ela ganha a capacidade de compreender um idioma, ?? sua escolha, que voc?? fala.</p><p> Sua montaria serve tanto para cavalgar quando para o combate e voc?? tem uma liga????o instintiva com ela que permite a voc??s lutarem como uma unidade singular. Enquanto estiver montado na sua montaria, voc?? pode fazer com que qualquer magia que voc?? conjure que tenha alcance pessoal, tamb??m afete a sua montaria.</p><p> Quando a montaria cair a 0 pontos de vida, ela desaparece, n??o deixando qualquer corpo f??sico para tr??s. Voc?? tamb??m pode dispensar sua montaria a qualquer momento, com uma a????o, fazendo - a desaparecer. Em ambos os casos, conjurar essa magia novamente convocar?? a mesma montaria, restaurando - a ao seu m??ximo de pontos de vida.</p><p> Enquanto sua montaria estiver a at?? 1,5 quil??metro de voc??, voc?? pode se comunicar telepaticamente com ela.</p><p> Voc?? n??o pode ter mais de uma montaria ligada por essa magia por vez. Com uma a????o, voc?? pode liberar a montaria da liga????o a qualquer momento, fazendo - a desaparecer.","classes":["Paladino"],"favorite":false},{"id":160,"level":"3","name":"Convocar Rel??mpagos","name_en":"Call Lightning","school":{"pt":"Conjura????o","style":"conjuration"},"castingTime":"1 a????o","range":"36 metros","components":"V, S","concentration":"s","duration":"at?? 10 minutos","description":"Uma nuvem tempestuosa aparece em formato cil??ndrico com 3 metros de altura e 18 metros de raio, centrada num ponto que voc?? possa ver, 30 metros acima de voc??. A magia falha se voc?? n??o puder ver um ponto no ar em que a nuvem possa aparecer (por exemplo, se voc?? estiver em uma sala que n??o possa comportar a nuvem).</p><p> Quando voc?? conjurar a magia, escolha um ponto que voc?? possa ver dentro do alcance. Um raio de eletricidade ?? disparado da nuvem no ponto. Cada criatura a 1,5 metro desse ponto deve realizar um teste de resist??ncia de Destreza. Uma criatura sofre 3d10 de dano el??trico se falhar no teste, ou metade desse dano se passar. Em cada um dos seus turnos, at?? a magia acabar, voc?? pode usar sua a????o para convocar um rel??mpago dessa forma novamente, afetando o mesmo ponto ou um diferente.</p><p> Se voc?? estiver a c??u aberto em condi????es tempestuosas quando conjurar essa magia, a magia lhe d?? controle sobre a tempestade existente ao inv??s de criar uma nova. Sob tais condi????es, o dano da magia aumenta em 1d10.</p><p><strong> Em N??veis Superiores </strong>. Se voc?? conjurar essa magia usando um espa??o de magia de 4?? n??vel ou superior, o dano aumenta em 1d10 para cada n??vel do espa??o acima do 3??.","classes":["Druida"],"favorite":false},{"id":106,"level":"2","name":"Cord??o de Flechas","name_en":"Cordon Of Arrows","school":{"pt":"Transmuta????o","style":"transmutation"},"castingTime":"1 a????o","range":"1,5 metro","components":"V, S, M","duration":"8 horas","material":"quatro ou mais flechas ou virotes","description":"Voc?? enfinca quatro muni????es n??o - m??gicas??? flechas ou virotes de besta??? no solo dentro do alcance e conjura magia neles para proteger uma ??rea. At?? a magia acabar, sempre que uma criatura diferente de voc?? se aproximar a 9 metros das muni????es pela primeira vez em um turno ou terminar seu turno na ??rea, uma das muni????es voa para atingi - la. A criatura deve ser bem sucedida num teste de resist??ncia de Destreza ou sofrer?? 1d6 de dano perfurante. A muni????o, ent??o, ?? destru??da. A magia termina quando n??o restar nenhuma muni????o.</p><p> Quando voc?? conjurar essa magia, voc?? pode designar quaisquer criaturas, ?? sua escolha, e a magia ignora - as.</p><p><strong> Em N??veis Superiores </strong>. Quando voc?? conjurar essa magia usando um espa??o de magia de 3?? n??vel ou superior, a quantidade de muni????es que voc?? pode afetar aumenta em dois para cada n??vel do espa??o acima do 2??.","classes":["Patrulheiro"],"favorite":false},{"id":105,"level":"2","name":"Coroa da Loucura","name_en":"Crown Of Madness","school":{"pt":"Encantamento","style":"enchantment"},"castingTime":"1 a????o","range":"36 metros","components":"V, S","concentration":"s","duration":"at?? 1 minuto","description":"Um humanoide, ?? sua escolha, que voc?? possa ver dentro do alcance, deve ser bem sucedido num teste de resist??ncia de Sabedoria ou ficar?? enfeiti??ado por voc?? pela dura????o. Enquanto o alvo estiver enfeiti??ado dessa forma, uma coroa retorcida de ferro denteado aparece na cabe??a dele e a loucura brilha em seus olhos.</p><p> A criatura enfeiti??ada deve usar sua a????o antes de se mover, em cada um dos turnos dela, para realizar um ataque corpo - a - corpo contra uma criatura, diferente de si mesma, que voc?? escolher mentalmente.</p><p> O alvo pode agir normalmente no turno dele se voc?? n??o escolher uma criatura ou se voc?? n??o estiver dentro do alcance.</p><p> Nos seus turnos subsequentes, voc?? deve usar sua a????o para manter o controle sobre o alvo, ou a magia termina. Igualmente, o alvo pode realizar um teste de resist??ncia de Sabedoria no final de cada um dos turnos dele. Se obtiver sucesso, a magia termina.","classes":["Bardo","Bruxo","Feiticeiro","Mago"],"favorite":false},{"id":284,"level":"6","name":"Corrente de Rel??mpagos","name_en":"Chain Lightning","school":{"pt":"Evoca????o","style":"evocation"},"castingTime":"1 a????o","range":"45 metros","components":"V, S, M","duration":"instant??nea","material":"um pouco de pelo, um peda??o de ??mbar, vidro ou um bast??o de cristal, e tr??s pinos de prata","description":"Voc?? cria um raio el??trico que atinge um alvo, ?? sua escolha, que voc?? possa ver dentro do alcance. Tr??s raios saltam do alvo para at?? tr??s outros alvos, cada um a n??o mais de 9 metros do alvo prim??rio. Um alvo pode ser uma criatura ou um objeto e s?? pode ser alvo de um ??nico desses raios.</p><p> Um alvo deve realizar um teste de resist??ncia de Destreza. O alvo sofre 10d8 de dano el??trico se falhar no teste ou metade desse dano se for bem sucedido.</p><p><strong> Em N??veis Superiores </strong>. Se voc?? conjurar essa magia usando um espa??o de magia de 7?? n??vel ou superior, um raio adicional salta do alvo prim??rio para outro alvo para cada n??vel do espa??o acima do 6??.","classes":["Feiticeiro","Mago"],"favorite":false},{"id":107,"level":"2","name":"Crescer Espinhos","name_en":"Spike Growth","school":{"pt":"Transmuta????o","style":"transmutation"},"castingTime":"1 a????o","range":"45 metros","components":"V, S, M","concentration":"s","duration":"at?? 10 minutos","material":"sete espinhos afiados ou sete gravetos, todos com uma ponta afiada","description":"O solo em 6 metros quadrados, centrado num ponto dentro do alcance, se retorce e brotam cavilhas r??gidas e espinhos. A ??rea se torna terreno dif??cil pela dura????o. Quando uma criatura entrar ou se mover dentro da ??rea, ela sofrer?? 2d4 de dano perfurante para cada 1,5 metro que ela atravessar.</p><p> A transforma????o do terreno ?? camuflada para parecer natural. Qualquer criatura que n??o puder ver a ??rea no momento que a magia for conjurada, deve realizar um teste de Sabedoria (Percep????o) contra a CD da magia para reconhecer o terreno como perigoso, antes de adentra - lo.","classes":["Druida","Patrulheiro"],"favorite":false},{"id":248,"level":"5","name":"Cria????o","name_en":"Creation","school":{"pt":"Ilus??o","style":"illusion"},"castingTime":"1 minuto","range":"9 metros","components":"V, S, M","duration":"especial","material":"um pequeno peda??o de material do mesmo tipo do item que voc?? planeja criar","description":"Voc?? puxa mechas de mat??ria sombria da Umbra para criar objetos inanimados de mat??ria vegetal dentro do alcance: bens finos, cordas, madeira ou algo similar. Voc?? tamb??m pode usar a magia para criar objetos minerais como pedra, cristal ou metal. O objeto criado n??o pode ser maior que um cubo de 1,5 metro e o objeto deve ser de um formado e material que voc?? j?? tenha visto antes.</p><p> A dura????o depende do material do objeto. Se o objeto for composto por diversos materiais, use o de menor dura????o.","classes":["Feiticeiro","Mago"],"favorite":false},{"id":161,"level":"3","name":"Criar Alimentos","name_en":"Create Food And Water","school":{"pt":"Conjura????o","style":"conjuration"},"castingTime":"1 a????o","range":"9 metros","components":"V, S","duration":"instant??nea","description":"Voc?? cria 25 quilos de comida e 100 litros de ??gua no solo ou em um recipiente dentro do alcance, suficiente para sustentar at?? quinze humanoide ou cinco montarias por 24 horas. A comida ?? insossa, por??m, nutritiva e estraga se n??o for consumida ap??s 24 horas. A ??gua ?? limpa e n??o fica ruim.","classes":["Cl??rigo","Paladino"],"favorite":false},{"id":6,"level":"0","name":"Criar Chamas","name_en":"Produce Flames","school":{"pt":"Conjura????o","style":"conjuration"},"castingTime":"1 a????o","range":"pessoal","components":"V, S","duration":"10 minutos","description":"Uma chama tremulante aparece na sua m??o. A chama permanece ai pela dura????o e n??o machuca nem voc?? nem seu equipamento. A chama emite luz plena num raio de 3 metros e penumbra por 3 metros adicionais. A magia acaba se voc?? dissip??-la usando uma a????o ou se conjur??-la novamente.</p><p> Voc?? pode, tamb??m, atacar com a chama, no entanto, fazer isso acaba com a magia. Quando voc?? conjura essa magia ou com uma a????o em um turno posterior, voc?? pode arremessar a chama numa criatura a at?? 9 metros de voc??. Fa??a um ataque ?? dist??ncia com magia. Se atingir, o alvo sofre 1d8 de dano de fogo.</p><p> O dano dessa magia aumenta em 1d8 quando voc?? alcan??a o 5?? n??vel (2d8), 11?? n??vel (3d8) e 17?? n??vel (4d8).","classes":["Druida"],"favorite":false},{"id":285,"level":"6","name":"Criar Mortos-Vivos","name_en":"Create Undead","school":{"pt":"Necromancia","style":"necromancy"},"castingTime":"1 minuto","range":"3 metros","components":"V, S, M","duration":"instant??nea","material":"um pote de barro cheio de terra de sepultura, um pote de barro cheio de ??gua salobra, e uma ??nix negra no valor de 150 po, para cada corpo","description":"Voc?? s?? pode conjurar essa magia durante a noite. Escolha at?? tr??s corpos de humanoides M??dios ou Pequenos dentro do alcance. Cada corpo se torna um carni??al sob seu controle. (O Mestre tem as estat??sticas de jogo das criaturas.) </p><p> Com uma a????o b??nus, em cada um dos seus turnos, voc?? pode comandar mentalmente qualquer criatura que voc?? animou com essa magia, se a criatura estiver a at?? 36 metros de voc?? (se voc?? controla diversas criaturas, voc?? pode comandar qualquer uma ou todas elas ao mesmo tempo, emitindo o mesmo comando para cada uma). Voc?? decide qual a????o a criatura ir?? fazer e para onde ela ir?? se mover durante o pr??ximo turno dela, ou voc?? pode emitir um comando geral, como para guardar uma c??mara ou corredor especifico. Se voc?? n??o der nenhum comando, as criaturas apenas se defender??o contra criaturas hostis. Uma vez que receba uma ordem, a criatura continuar?? a segui - la at?? a tarefa estar conclu??da.</p><p> A criatura fica sob seu controle por 24 horas, depois disso ela para de obedecer aos seus comandos. Para manter o controle da criatura por mais 24 horas, voc?? deve conjurar essa magia na criatura novamente, antes das 24 horas atuais terminarem. Esse uso da magia recupera seu controle sobre at?? tr??s criaturas que voc?? tenha animado com essa magia, ao inv??s de animar novas.</p><p><strong> Em N??veis Superiores </strong>. Quando voc?? conjurar essa magia usando um espa??o de magia de 7?? n??vel, voc?? pode animar ou recuperar o controle de quatro carni??ais. Quando voc?? conjura essa magia usando um espa??o de magia de 8?? n??vel, voc?? pode animar ou recuperar o controle de cinco carni??ais ou dois l??vidos ou apari????es. Quando voc?? conjurar essa magia usando um espa??o de magia de 9?? n??vel, voc?? pode animar ou recuperar o controle de seis carni??ais, tr??s l??vidos ou apari????es ou duas m??mias.","classes":["Bruxo","Cl??rigo","Mago"],"favorite":false},{"id":41,"level":"1","name":"Criar ou Destruir ??gua","name_en":"Create Or Destroy Water","school":{"pt":"Transmuta????o","style":"transmutation"},"castingTime":"1 a????o","range":"9 metros","components":"V, S, M","duration":"instant??nea","material":"uma gota de ??gua se estiver criando ou alguns gr??os de areia se estiver destruindo","description":"Voc?? pode tanto criar quanto destruir ??gua.</p><p><em><strong> Criar ??gua </strong></ em>. Voc?? cria 30 litros de ??gua limpa dentro do alcance, em um recipiente aberto. Alternativamente, a ??gua pode cair como chuva em um cubo de 9 metros dentro do alcance, extinguindo chamas expostas na ??rea.</p><p><em><strong> Destruir ??gua </strong></ em>. Voc?? destr??i at?? 30 litros de ??gua de um recipiente aberto dentro do alcance. Alternativamente, voc?? pode destruir um nevoeiro em um cubo de 9 metros dentro do alcance.</p><p><strong> Em N??veis Superiores </strong>. Quando voc?? conjurar essa magia usando um espa??o de magia de 2?? n??vel ou superior, voc?? pode criar ou destruir 30 litros de ??gua adicionais, ou o tamanho do cubo aumenta em 1,5 metro, para cada n??vel do espa??o acima do 1??.","classes":["Cl??rigo","Druida"],"favorite":false},{"id":249,"level":"5","name":"Criar Passagem","name_en":"Passwall","school":{"pt":"Transmuta????o","style":"transmutation"},"castingTime":"1 a????o","range":"9 metros","components":"V, S, M","duration":"1 hora","material":"algumas sementes de gergelim","description":"Uma passagem aparece em um ponto, ?? sua escolha, que voc?? possa ver em uma superf??cie de madeira, gesso ou rocha (como um muro, um teto ou um piso) dentro do alcance e permanece pela dura????o. Voc?? escolhe as dimens??es da passagem: at?? 1,5 metro de largura, 2, 10 de altura e 6 metros de profundidade. A passagem n??o provoca instabilidade na estrutura ao seu redor.</p><p> Quando a abertura desaparecer, qualquer criatura ou objeto que ainda estiver dentro da passagem criada pela magia ?? ejetada em seguran??a para o espa??o desocupado mais pr??ximo da superf??cie onde a magia foi conjurada.","classes":["Mago"],"favorite":false},{"id":250,"level":"5","name":"C??pula Antivida","name_en":"Antilife Shell","school":{"pt":"Abjura????o","style":"abjuration"},"castingTime":"1 a????o","range":"pessoal","components":"V, S","concentration":"s","duration":"at?? 1 hora","description":"Uma barreira cintilante se estende de voc?? at?? 3 metros de raio, e se move com voc??, permanecendo centrada em voc?? e restringindo criaturas diferentes de mortos - vivos e constructos. A barreira mant??m - se pela dura????o.</p><p> A barreira previna uma criatura afetada de atravess??-la ou alcan??ar atrav??s dela. Uma criatura afetada pode conjurar magias ou realizar ataques ?? dist??ncia ou ataques com armas de haste atrav??s da barreira.</p><p> Se voc?? se mover for??ando uma criatura afetada a atravessar a barreira, a magia termina.","classes":["Druida"],"favorite":false},{"id":286,"level":"6","name":"Cura Completa","name_en":"Heal","school":{"pt":"Evoca????o","style":"evocation"},"castingTime":"1 a????o","range":"18 metros","components":"V, S","duration":"instant??nea","description":"Escolha uma criatura que voc?? possa ver, dentro do alcance. Um surto de energia positiva banha a criatura, fazendo - a recuperar 70 pontos de vida. Essa magia tamb??m acaba com efeitos de cegueira, surdez e qualquer doen??a que estejam afetando o alvo. Essa magia n??o tem efeito em constructos ou mortos - vivos.</p><p><strong> Em N??veis Superiores </strong>. Quando voc?? conjurar essa magia usando um espa??o de magia de 7?? n??vel ou superior, a quantidade de cura aumenta em 10 para cada n??vel do espa??o acima do 6??.","classes":["Cl??rigo","Druida"],"favorite":false},{"id":348,"level":"9","name":"Cura Completa Em Massa","name_en":"Mass Heal","school":{"pt":"Evoca????o","style":"evocation"},"castingTime":"1 a????o","range":"18 metros","components":"V, S","duration":"instant??nea","description":"Uma inunda????o de energia curativa emerge de voc?? para as criaturas feridas ao seu redor. Voc?? restaura at?? 700 pontos de vida, divididos, ?? sua escolha, entre qualquer quantidade de criaturas que voc?? possa ver, dentro do alcance. As criaturas curadas por essa magia tamb??m s??o curadas de todas as doen??as e qualquer efeito que as deixou cegas ou surdas. Essa magia n??o afeta mortos - vivos ou constructos.","classes":["Cl??rigo"],"favorite":false},{"id":42,"level":"1","name":"Curar Ferimentos","name_en":"Cure Wounds","school":{"pt":"Evoca????o","style":"evocation"},"castingTime":"1 a????o","range":"toque","components":"V, S","duration":"instant??nea","description":"Uma criatura que voc?? tocar recupera uma quantidade de pontos de vida igual a 1d8 + seu modificador de habilidade de conjura????o. Essa magia n??o produz efeito em mortos - vivos ou constructos.</p><p><strong> Em N??veis Superiores </strong>. Se voc?? conjurar essa magia usando um espa??o de magia de 2?? n??vel ou superior, a cura aumenta em 1d8 para cada n??vel do espa??o acima do 1??.","classes":["Bardo","Cl??rigo","Druida","Paladino","Patrulheiro"],"favorite":false},{"id":251,"level":"5","name":"Curar Ferimentos Em Massa","name_en":"Mass Cure Wounds","school":{"pt":"Evoca????o","style":"evocation"},"castingTime":"1 a????o","range":"18 metros","components":"V, S","duration":"instant??nea","description":"Uma onda de energia curativa emerge de um ponto, ?? sua escolha, dentro do alcance. Escolha at?? seis criaturas numa esfera de 9 metros de raio, centrada nesse ponto. Cada alvo recupera uma quantidade de pontos de vida igual a 3d8 + seu modificador de habilidade de conjura????o. A magia n??o afeta mortos - vivos ou constructos.</p><p><strong> Em N??veis Superiores </strong>. Quando voc?? conjurar essa magia usando um espa??o de magia de 6?? n??vel ou superior, a cura aumenta em 1d8 para cada n??vel do espa??o acima do 5??.","classes":["Bardo","Cl??rigo","Druida"],"favorite":false},{"id":287,"level":"6","name":"Dan??a Irresist??vel de Otto","name_en":"Otto's Irresistable Dance","school":{"pt":"Encantamento","style":"enchantment"},"castingTime":"1 a????o","range":"9 metros","components":"V","concentration":"s","duration":"at?? 1 minuto","description":"Escolha uma criatura que voc?? possa ver, dentro do alcance. O alvo come??a a dan??ar comicamente no lugar: rodopiando, batendo os p??s e saltitando pela dura????o. As criaturas que n??o podem ser enfeiti??adas s??o imunes a essa magia.</p><p> Uma criatura dan??ando deve usar todo o seu movimento para dan??ar sem abandonar seu espa??o e tem desvantagem nos testes de resist??ncia de Destreza e nas jogadas de ataque. Enquanto o alvo estiver sob efeito dessa magia, as outras criaturas ter??o vantagem nas jogadas de ataque contra ele. Com uma a????o, uma criatura dan??ando pode realizar um teste de resist??ncia de Sabedoria para recuperar controle sobre si mesmo. Num sucesso na resist??ncia, a magia acaba.","classes":["Bardo","Mago"],"favorite":false},{"id":309,"level":"7","name":"Dedo da Morte","name_en":"Finger Of Death","school":{"pt":"Necromancia","style":"necromancy"},"castingTime":"1 a????o","range":"18 metros","components":"V, S","duration":"instant??nea","description":"Voc?? envia energia negativa na dire????o de uma criatura que voc?? possa ver, dentro do alcance, causando dores severas nela. O alvo deve realizar um teste de resist??ncia de Constitui????o. Ele sofre 7d8 + 30 de dano necr??tico se falhar na resist??ncia, ou metade desse dano se obtiver sucesso.</p><p> Um humanoide morto por essa magia, se ergue no in??cio do seu pr??ximo turno como um zumbi que est?? permanentemente sob seu controle, seguindo suas ordens verbais da melhor forma poss??vel.","classes":["Bruxo","Feiticeiro","Mago"],"favorite":false},{"id":349,"level":"9","name":"Desejo","name_en":"Wish","school":{"pt":"Conjura????o","style":"conjuration"},"castingTime":"1 a????o","range":"pessoal","components":"V","duration":"instant??nea","description":"<em> Desejo </em> ?? a magia mais poderosa que uma criatura mortal pode conjurar. Apenas ao falar em voz alta, voc?? pode alterar os pr??prios fundamentos da realidade, de acordo com seus desejos.</p><p> O uso b??sico dessa magia ?? de copiar qualquer magia de 8?? n??vel ou inferior. Voc?? n??o precisa atender a qualquer pr?? - requisito da magia copiada, incluindo os componentes dispendiosos. A magia simplesmente acontece.</p><p> Alternativamente, voc?? pode criar um dos seguintes efeitos, ?? sua escolha: </p><ul><li> Voc?? cria um objeto no valor de at?? 25. 000 po, que n??o seja m??gico. O objeto n??o pode ter dimens??es maiores que 90 metros e ele aparece em um espa??o desocupado que voc?? possa ver, no ch??o.</li><li> Voc?? permite que at?? doze criaturas que voc?? possa ver, recuperem todos os seus pontos de vida e voc?? acaba com todos os efeitos descritos na magia <em> restaura????o maior </em>.</li><li> Voc?? concede a at?? dez criaturas que voc?? possa ver, resist??ncia a um tipo de dano, ?? sua escolha.</li><li> Voc?? concede a at?? dez criaturas que voc?? possa ver, imunidade a uma ??nica magia ou outro efeito m??gico por 8 horas. Por exemplo, voc?? poderia deixar voc?? e todos os seus companheiros imunes ao ataque de dreno de vida de um lich.</li><li> Voc?? desfaz um ??nico evento recente for??ando uma nova jogada de qualquer jogada feita na ??ltima rodada (incluindo seu ??ltimo turno). A realidade remodela - se para acomodar o novo resultado. Por exemplo, uma magia <em> desejo </em> poderia desfazer o teste de resist??ncia bem sucedido de um oponente, um acerto cr??tico de um inimigo ou o teste de resist??ncia fracassado de um amigo. Voc?? pode for??ar que a nova jogada seja feita com vantagem ou desvantagem e voc?? pode escolher se ir?? usar o resultado da nova jogada ou da jogada original.</li></ ul><p> Voc?? ?? capaz de fazer coisas al??m do alcance dos exemplos acima. Apresente seu desejo ao Mestre o mais precisamente poss??vel. O Mestre tem grande amplitude em definir o que ocorre em tais circunst??ncias, quanto maior o desejo, maior ser?? a possibilidade de que algo d?? errado. Essa magia pode simplesmente falhar, o efeito do seu desejo pode ser apenas parcialmente atendido ou voc?? pode sofrer consequ??ncias imprevistas como resultado da forma que voc?? formulou o desejo. Por exemplo, desejar que um vil??o esteja morto pode impulsionar voc?? para um per??odo no tempo em que o vil??o n??o esteja mais vivo, efetivamente removendo voc?? do jogo. Similarmente, desejar um item m??gico lend??rio ou um artefato poderia, instantaneamente, transportar voc?? para a presen??a do dono atual do item.</p><p> O estresse da conjura????o dessa magia para produzir qualquer efeito diferente de copiar outra magia enfraquece voc??. Ap??s enfrentar esse estresse, a cada vez que voc?? conjurar uma magia, antes de terminar um descanso longo, voc?? sofrer?? 1d10 de dano necr??tico por n??vel da magia. Esse dano n??o pode ser reduzido ou prevenido de forma alguma. Al??m disso, sua For??a cai para 3, se ela j?? n??o for 3 ou inferior, por 2d4 dias. Para cada dia desses que voc?? permanecer descansando e n??o fizer nada al??m de atividades leves, seu tempo de recupera????o ?? reduzido em 2 dias. Finalmente, existe 33 por cento de chance de voc?? se tornar incapaz de conjurar <em> desejo </em> novamente se voc?? sofrer esse estresse.</p> ","classes":["Feiticeiro","Mago"],"favorite":false},{"id":288,"level":"6","name":"Desintegrar","name_en":"Disintegrate","school":{"pt":"Transmuta????o","style":"transmutation"},"castingTime":"1 a????o","range":"18 metros","components":"V, S, M","duration":"instant??nea","material":"um ??m?? e uma pitada de poeira","description":"Um fino raio esverdeado ?? lan??ado da ponta do seu dedo em um alvo que voc?? possa ver dentro do alcance. O alvo pode ser uma criatura, um objeto ou uma cria????o de energia m??gica, como uma muralha criada por <em> muralha de energia </em>.</p><p> Uma criatura afetada por essa magia deve realizar um teste de resist??ncia de Destreza. Se falhar na resist??ncia, o alvo sofrer?? 10d6 + 40 de dano de energia. Se esse dano reduzir os pontos de vida do alvo a 0, ele ser?? desintegrado.</p><p> Uma criatura desintegrada e tudo que ela est?? vestindo ou carregando, exceto itens m??gicos, s??o reduzidos a uma pilha de um fino p?? acinzentado. A criatura s?? pode ser trazida de volta a vida por meio das magias <em> ressurrei????o verdadeira </em> ou <em> desejo </em>.</p><p> Essa magia desintegra, automaticamente, um objeto n??o - m??gico Grande ou menor ou uma cria????o de energia m??gica. Se o alvo for um objeto ou cria????o de energia Enorme ou maior, a magia desintegra uma por????o de 3 metros c??bicos dele. Um item m??gico n??o pode ser afetado por essa magia.</p><p><strong> Em N??veis Superiores </strong>. Se voc?? conjurar essa magia usando um espa??o de magia de 7?? n??vel ou superior, o dano aumenta em 3d6 para cada n??vel do espa??o acima do 6??.","classes":["Feiticeiro","Mago"],"favorite":false},{"id":108,"level":"2","name":"Despeda??ar","name_en":"Shatter","school":{"pt":"Evoca????o","style":"evocation"},"castingTime":"1 a????o","range":"18 metros","components":"V, S, M","duration":"instant??nea","material":"uma lasca de mica","description":"Um alto som estridente, dolorosamente intenso, emerge de um ponto, ?? sua escolha, dentro do alcance. Cada criatura, numa esfera de 3 metros de raio, centrada no ponto deve fazer um teste de resist??ncia de Constitui????o. Uma criatura sofre 3d8 de dano trovejante se falhar na resist??ncia ou metade desse dano se obtiver sucesso. Uma criatura feita de material inorg??nico como pedra, cristal ou metal, tem desvantagem nesse teste de resist??ncia.</p><p> Um objeto n??o - m??gico que n??o esteja sendo vestido ou carregado, tamb??m sofre o dano, se estiver na ??rea da magia.</p><p><strong> Em N??veis Superiores </strong>. Quando voc?? conjurar essa magia usando um espa??o de magia de 3?? n??vel ou superior, o dano aumenta em 1d8 para cada n??vel do espa??o acima do 2??.","classes":["Bardo","Bruxo","Feiticeiro","Mago"],"favorite":false},{"id":252,"level":"5","name":"Despertar","name_en":"Awaken","school":{"pt":"Transmuta????o","style":"transmutation"},"castingTime":"8 horas","range":"toque","components":"V, S, M","duration":"instant??nea","material":"uma ??gata valendo, no m??nimo, 1. 000 po que ser?? consumida pela magia","description":"Depois de gastar o tempo de conjura????o tra??ando runas m??gicas com uma gema preciosa, voc?? toca uma besta ou planta Enorme ou menor. O alvo deve ter ou um valor de Intelig??ncia nulo, ou Intelig??ncia 3 ou menor. O alvo ganha Intelig??ncia 10. O alvo tamb??m ganha a capacidade de falar um idioma que voc?? conhe??a. Se o alvo for uma planta, ela ganha a habilidade de mover seus membros, ra??zes, vinhas, trepadeiras e assim por diante, e ganha sentidos similares ao de um humano. Seu Mestre escolhe as estat??sticas apropriadas para o arbusto desperto ou ??rvore desperta.</p><p> A besta ou planta desperta estar?? enfeiti??ada por voc?? por 30 dias ou at?? voc?? ou seus companheiros fazerem qualquer coisa nociva contra ela. Quando a condi????o enfeiti??ado terminar, a criatura desperta pode escolher permanecer amig??vel a voc??, baseado em como ela foi tratada enquanto estava enfeiti??ada.","classes":["Bardo","Druida"],"favorite":false},{"id":253,"level":"5","name":"Despistar","name_en":"Mislead","school":{"pt":"Ilus??o","style":"illusion"},"castingTime":"1 a????o","range":"pessoal","components":"S","concentration":"s","duration":"at?? 1 hora","description":"Voc?? fica invis??vel ao mesmo tempo que uma c??pia ilus??ria sua aparece onde voc?? estava. A c??pia permanece pela dura????o, mas a invisibilidade acaba se voc?? atacar ou conjurar uma magia.</p><p> Voc?? pode usar sua a????o para mover a c??pia ilus??ria at?? o dobro do seu deslocamento e faz?? - la gesticular, falar e se comportar da forma que voc?? quiser. Voc?? pode ver atrav??s dos olhos e ouvir atrav??s dos ouvidos da c??pia como se voc?? estivesse localizado onde ela est??. Em cada um dos seus turnos, com uma a????o b??nus, voc?? pode trocar o uso dos sentidos dela pelo seu ou voltar novamente. Enquanto voc?? est?? usando os sentidos dela, voc?? fica cego e surdo ao que est?? a sua volta.","classes":["Bardo","Mago"],"favorite":false},{"id":254,"level":"5","name":"Destrui????o Banidora","name_en":"Banishing Smite","school":{"pt":"Abjura????o","style":"abjuration"},"castingTime":"1 a????o b??nus","range":"pessoal","components":"V","concentration":"s","duration":"at?? 1 minuto","description":"Da pr??xima vez que voc?? atingir uma criatura com um ataque com arma, antes do fim da magia, seu ataque crepita com energia e o ataque causa 5d6 de dano de energia extra ao alvo. Al??m disso, se esse ataque reduzir o alvo a 50 pontos de vida ou menos, voc?? a bane. Se o alvo for nativo de um plano de exist??ncia diferente do que voc?? est??, o alvo desaparece, retornando ao seu plano natal. Se o alvo for nativo do plano que voc?? est??, a criatura ?? enviada para um semiplano inofensivo. Enquanto estiver l??, a criatura estar?? incapacitada. Ela permanece l?? at?? a magia acabar, a partir desse ponto, o alvo reaparece no espa??o em que ela deixou ou no espa??o desocupado mais pr??ximo, se o espa??o dela estiver ocupado.","classes":["Paladino"],"favorite":false},{"id":162,"level":"3","name":"Destrui????o Cegante","name_en":"Blinding Smite","school":{"pt":"Evoca????o","style":"evocation"},"castingTime":"1 a????o b??nus","range":"pessoal","components":"V","concentration":"s","duration":"at?? 1 minuto","description":"Da pr??xima vez que voc?? atingir uma criatura com um ataque com arma, antes do fim da magia, sua arma emite uma luz intensa, e o ataque causa 3d8 de dano radiante extra ao alvo. Al??m disso, o alvo deve ser bem sucedido num teste de resist??ncia de Constitui????o ou ficar?? cego at?? a magia acabar.</p><p> Uma criatura cega por essa magia realiza outro teste de resist??ncia de Constitui????o no final de cada um dos turnos dela. Se obtiver sucesso, n??o estar?? mais cega.","classes":["Paladino"],"favorite":false},{"id":43,"level":"1","name":"Destrui????o Col??rica","name_en":"Wrathful Smite","school":{"pt":"Evoca????o","style":"evocation"},"castingTime":"1 a????o b??nus","range":"pessoal","components":"V","concentration":"s","duration":"at?? 1 minuto","description":"Da pr??xima vez que voc?? atingir com um ataque corpo - a - corpo com arma enquanto essa magia durar, seu ataque causar?? 1d6 de dano ps??quico extra. Al??m disso, se o alvo for uma criatura, ele deve realizar um teste de resist??ncia de Sabedoria ou ficar?? amedrontado por voc?? at?? a magia acabar. Com uma a????o, a criatura pode realizar um teste de resist??ncia de Sabedoria contra a CD da magia para se manter resoluto e terminar a magia.","classes":["Paladino"],"favorite":false},{"id":210,"level":"4","name":"Destrui????o Estonteante","name_en":"Staggering Smite","school":{"pt":"Evoca????o","style":"evocation"},"castingTime":"1 a????o b??nus","range":"pessoal","components":"V","concentration":"s","duration":"at?? 1 minuto","description":"Da pr??xima vez que voc?? atingir uma criatura com um ataque corpo - a - corpo com arma, antes do fim da magia, sua arma penetra tanto no corpo quanto na mente e o ataque causa 4d6 de dano ps??quico adicional ao alvo. O alvo deve realizar um teste de resist??ncia de Sabedoria. Se falhar na resist??ncia, ele ter?? desvantagem nas jogadas de ataque e testes de habilidade e n??o poder?? efetuar rea????es at?? o final do pr??ximo turno dele.","classes":["Paladino"],"favorite":false},{"id":44,"level":"1","name":"Destrui????o Lancinante","name_en":"Searing Smite","school":{"pt":"Evoca????o","style":"evocation"},"castingTime":"1 a????o b??nus","range":"pessoal","components":"V","concentration":"s","duration":"at?? 1 minuto","description":"Da pr??xima vez que voc?? atingir uma criatura com um ataque corpo - a - corpo com arma enquanto essa magia durar, sua arma flameja com intensas chamas brancas e o ataque causa 1d6 de dano de fogo extra ao alvo, fazendo - o incendiar pelas chamas. No in??cio de cada turno dele, at?? a arma acabar, o alvo deve realizar um teste de resist??ncia de Constitui????o. Se falhar na resist??ncia, ele sofre 1d6 de dano de fogo. Se passar na resist??ncia, a magia acaba. Se o alvo ou uma criatura a 1,5 metro dele usar uma a????o para apagar as chamas ou se algum outro efeito extinguir as chamas (como submergir o alvo em ??gua), a magia acaba.</p><p><strong> Em N??veis Superiores </strong>. Quando voc?? conjurar essa magia usando um espa??o de magia de 2?? n??vel ou superior, o dano extra inicial causado por esse ataque aumenta em 1d6 para cada n??vel do espa??o acima do 1??.","classes":["Paladino"],"favorite":false},{"id":45,"level":"1","name":"Destrui????o Trovejante","name_en":"Thunderous Smite","school":{"pt":"Evoca????o","style":"evocation"},"castingTime":"1 a????o b??nus","range":"pessoal","components":"V","concentration":"s","duration":"at?? 1 minuto","description":"Da primeira vez que voc?? atingir um ataque corpo - a - corpo com arma enquanto essa magia durar, sua arma ?? rodeada por trov??es que s??o aud??veis a at?? 90 metros de voc?? e o ataque causa 2d6 de dano trovejante extra no alvo. Al??m disso, se o alvo for uma criatura, ele deve ser bem sucedido num teste de resist??ncia de For??a ou ser?? empurrado 3 metros para longe de voc?? e cair?? no ch??o.","classes":["Paladino"],"favorite":false},{"id":47,"level":"1","name":"Detectar Magia","name_en":"Detect Magic","ritual":"s","school":{"pt":"Adivinha????o","style":"divination"},"castingTime":"1 a????o","range":"pessoal","components":"V, S","concentration":"s","duration":"at?? 10 minutos","description":"Pela dura????o, voc?? sente a presen??a de magia a at?? 9 metros de voc??. Se voc?? sentir magia dessa forma, voc?? pode usar sua a????o para ver uma aura suave em volta de qualquer criatura ou objeto vis??vel, na ??rea que carrega magia, e voc?? descobre a escolha de magia, se houver uma.</p><p> A magia pode penetrar a maioria das barreiras, mas ?? bloqueada por 30 cent??metros de rocha, 2, 5 cent??metros de metal comum, uma fina camada de chumbo, ou 90 cent??metros de madeira ou terra.","classes":["Bardo","Cl??rigo","Druida","Feiticeiro","Mago","Paladino","Patrulheiro"],"favorite":false},{"id":46,"level":"1","name":"Detectar o Bem e Mal","name_en":"Detect Evil And Good","school":{"pt":"Adivinha????o","style":"divination"},"castingTime":"1 a????o","range":"pessoal","components":"V, S","concentration":"s","duration":"at?? 10 minutos","description":"Pela dura????o, voc?? sabe se existe uma aberra????o, celestial, corruptor, elemental, fada ou morto - vivo, a at?? 9 metros de voc??, assim como onde a criatura est?? localizada. Similarmente, voc?? sabe se existe um local ou objeto, a at?? 9 metros de voc??, que tenha sido consagrado ou profanado magicamente.</p><p> A magia pode penetrar a maioria das barreiras, mas ?? bloqueada por 30 cent??metros de rocha, 2, 5 cent??metros de metal comum, uma fina camada de chumbo, ou 90 cent??metros de madeira ou terra.","classes":["Cl??rigo","Paladino"],"favorite":false},{"id":109,"level":"2","name":"Detectar Pensamentos","name_en":"Detect Thoughts","school":{"pt":"Adivinha????o","style":"divination"},"castingTime":"1 a????o","range":"pessoal","components":"V, S, M","concentration":"s","duration":"at?? 1 minuto","material":"um peda??o de cobre","description":"Pela dura????o, voc?? pode ler os pensamentos de certas criaturas. Quando voc?? conjura essa magia e, com sua a????o a cada turno at?? o fim da magia, voc?? pode focar sua mente em qualquer criatura que voc?? puder ver a at?? 9 metros de voc??. Se a criatura escolhida possuir Intelig??ncia 3 ou inferior ou n??o falar nenhum tipo de idioma, a criatura n??o poder?? ser afetada.</p><p> Voc??, inicialmente, descobre os pensamentos superficiais da criatura??? o que est?? mais presente na sua mente no momento. Com uma a????o, voc?? pode tanto mudar sua aten????o para os pensamentos de outra criatura, como tentar sondar mais profundamente na mente da mesma criatura. Se voc?? resolver sondar profundamente, a criatura deve realizar um teste de resist??ncia de Sabedoria. Se falhar, voc?? ganha ci??ncia do seu racioc??nio (se possuir), seu estado emocional e algo que tome grande parte da sua mente (como algo que ele se preocupe, amores ou ??dios). Se ele for bem sucedido, a magia termina. Em ambas situa????es, o alvo saber?? que voc?? est?? sondando a mente dele e, a n??o ser que voc?? mude sua aten????o para os pensamentos de outra criatura, a criatura pode usar a a????o dela, no turno dela, para realizar um teste de Intelig??ncia resistido por seu teste de Intelig??ncia, se ela for bem sucedida, a magia termina.</p><p> Perguntas feitas diretamente para a criatura alvo, normalmente moldar??o o curso dos seus pensamentos, portanto, essa magia ?? particularmente eficiente como parte de um interrogat??rio.</p><p> Voc?? pode, tamb??m, usar essa magia para detectar a presen??a que criaturas pensantes que voc?? n??o possa ver. Quando voc?? conjura essa magia ou, com sua a????o enquanto ela durar, voc?? pode procurar por pensamentos a at?? 9 metros de voc??. A magia pode penetrar a maioria das barreiras, mas ?? bloqueada por 30 cent??metros de rocha, 2, 5 cent??metros de metal comum, uma fina camada de chumbo, ou 90 cent??metros de madeira ou terra. Voc?? n??o pode detectar uma criatura com Intelig??ncia 3 ou inferior ou uma que n??o fale qualquer idioma.</p><p> Uma vez que voc?? tenha detectado a presen??a de uma criatura dessa forma, voc?? pode ler os pensamentos dela pelo resto da dura????o, como descrito acima, mesmo que voc?? n??o possa v?? - la, mas ela ainda precisa estar dentro do alcance.","classes":["Bardo","Feiticeiro","Mago"],"favorite":false},{"id":48,"level":"1","name":"Detectar Veneno e Doen??a","name_en":"Detect Poision and Disease","ritual":"s","school":{"pt":"Adivinha????o","style":"divination"},"castingTime":"1 a????o","range":"pessoal","components":"V, S, M","concentration":"s","duration":"at?? 10 minutos","material":"uma folha de teixo","description":"Pela dura????o, voc?? sente a presen??a e localiza????o de venenos, criaturas venenosas e doen??as a at?? 9 metros de voc??. Voc?? tamb??m identifica o tipo de veneno, criatura venenosa ou doen??a em cada caso.</p><p> A magia pode penetrar a maioria das barreiras, mas ?? bloqueada por 30 cent??metros de rocha, 2, 5 cent??metros de metal comum, uma fina camada de chumbo, ou 90 cent??metros de madeira ou terra.","classes":["Cl??rigo","Druida","Paladino","Patrulheiro"],"favorite":false},{"id":163,"level":"3","name":"Dificultar Detec????o","name_en":"Nondetection","school":{"pt":"Abjura????o","style":"abjuration"},"castingTime":"1 a????o","range":"toque","components":"V, S, M","duration":"8 horas","material":"um pouco de p?? de diamante valendo 25 po polvilhado sobre o alvo, consumido pela magia","description":"Pela dura????o, voc?? esconde um alvo que voc?? tocar de magias de adivinha????o. O alvo pode ser uma criatura volunt??ria, um local ou um objeto com n??o mais de 3 metros em qualquer dimens??o. O alvo n??o pode ser alvo de magias de adivinha????o ou percebido atrav??s de sensores m??gicos de vid??ncia.","classes":["Bardo","Mago","Patrulheiro"],"favorite":false},{"id":49,"level":"1","name":"Disco Flutuante de Tenser","name_en":"Tenser's Floating Disk","ritual":"s","school":{"pt":"Conjura????o","style":"conjuration"},"castingTime":"1 a????o","range":"9 metros","components":"V, S, M","duration":"1 hora","material":"uma gota de merc??rio","description":"Essa magia cria um plano horizontal, circular de energia de 90 cm de di??metro por 2, 5 cm de espessura, que flutua 90 cent??metros acima do ch??o em um espa??o desocupado, ?? sua escolha, que voc?? possa ver dentro do alcance. O disco permanece pela dura????o e pode suportar at?? 250 quilos. Se mais peso for colocado nele, a magia termina, e tudo em cima do disco cai no ch??o.</p><p> O disco ?? im??vel enquanto voc?? estiver a at?? 6 metros dele. Se voc?? se afastar a mais de 6 metros dele, o disco seguir?? voc??, mantendo - se a 6 metros de voc??. Ele pode atravessar terreno irregular, subir ou descer escadas, encostas e similares, mas ele n??o pode atravessar mudan??as de eleva????o de 3 metros ou mais. Por exemplo, o disco n??o pode atravessar um fosso de 3 metros de profundidade nem poderia sair de tal fosso se tivesse sido criado no fundo dele.</p><p> Se voc?? se afastar mais de 30 metros do disco (tipicamente por ele n??o poder rodear um obst??culo para seguir voc??), a magia acaba.","classes":["Mago"],"favorite":false},{"id":50,"level":"1","name":"Disfar??ar-se","name_en":"Disguise Self","school":{"pt":"Ilus??o","style":"illusion"},"castingTime":"1 a????o","range":"pessoal","components":"V, S","duration":"1 hora","description":"Voc?? faz com que voc?? mesmo??? incluindo suas roupas, armadura, armas e outros pertences no seu personagem??? pare??a diferente at?? a magia acabar ou at?? voc?? usar sua a????o para dispens??-la. Voc?? pode se parecer 30 cent??metros mais baixo ou mais alto, e pode parecer magro, gordo ou entre ambos. Voc?? n??o pode mudar o tipo do seu corpo, portanto, voc?? deve adotar uma forma que tenha a mesma disposi????o b??sica de membros. No mais, a extens??o da sua ilus??o cabe a voc??.</p><p> As mudan??as criadas por essa magia n??o conseguem se sustentar perante uma inspe????o f??sica. Por exemplo, se voc?? usar essa magia para adicionar um chap??u ao seu visual, objetos que passarem pelo chap??u e qualquer um que toc?? - lo n??o sentir?? nada ou sentir?? sua cabe??a e cabelo. Se voc?? usar essa magia para aparentar ser mais magro do que ??, a m??o de algu??m que a erguer para tocar em voc??, ir?? esbarrar em voc?? enquanto ainda est??, aparentemente, est?? no ar.</p><p> Para perceber que voc?? est?? disfar??ado, uma criatura pode usar a a????o dela para inspecionar sua apar??ncia e deve ser bem sucedida em um teste de Intelig??ncia (Investiga????o) contra a CD da sua magia.","classes":["Bardo","Feiticeiro","Mago"],"favorite":false},{"id":164,"level":"3","name":"Dissipar Magia","name_en":"Dispel Magic","school":{"pt":"Abjura????o","style":"abjuration"},"castingTime":"1 a????o","range":"36 metros","components":"V, S","duration":"instant??nea","description":"Escolha uma criatura, objeto ou efeito m??gico dentro do alcance. Qualquer magia de 3?? n??vel ou inferior no alvo, termina. Para cada magia de 4?? n??vel ou superior no alvo, realize um teste de habilidade usando sua habilidade de conjura????o. A CD ?? igual a 10 + o n??vel da magia. Se obtiver sucesso, a magia termina.</p><p><strong> Em N??veis Superiores </strong>. Quando voc?? conjurar essa magia usando um espa??o de magia de 4?? n??vel ou superior, voc?? dissipa automaticamente os efeitos de magias no alvo se o n??vel da magia for igual ou inferior ao n??vel do espa??o de magia que voc?? usar.","classes":["Bardo","Bruxo","Cl??rigo","Druida","Feiticeiro","Mago","Paladino"],"favorite":false},{"id":255,"level":"5","name":"Dissipar o Bem e Mal","name_en":"Dispel Evil And Good","school":{"pt":"Abjura????o","style":"abjuration"},"castingTime":"1 a????o","range":"pessoal","components":"V, S, M","concentration":"s","duration":"at?? 1 minuto","material":"??gua benta ou p?? de prata e ferro","description":"Energia cintilante envolve e protege voc?? de fadas, mortos - vivos e criaturas originarias al??m do Plano Material. Pela dura????o, celestiais, corruptores, elementais, fadas e mortos - vivos tem desvantagem nas jogadas de ataque contra voc??.</p><p> Voc?? pode terminar a magia prematuramente usando uma das fun????es especiais a seguir.</p><p><em><strong> Cancelar Encantamento </strong></ em>. Com sua a????o, voc?? toca uma criatura que voc?? possa alcan??ar que esteja enfeiti??ada, amedrontada ou possu??da por um celestial, corruptor, elemental, fada ou morto - vivo. A criatura tocada n??o estar?? mais enfeiti??ada, amedrontada ou possu??da por tais criaturas.</p><p><em><strong> Demiss??o </strong></ em>. Com sua a????o, fa??a um ataque corpo - a - corpo com magia contra um celestial, corruptor, elemental, fada ou morto - vivo que voc?? possa alcan??ar. Se atingir, voc?? pode tentar guiar a criatura de volta ao seu plano natal. A criatura deve ser bem sucedida num teste de resist??ncia de Carisma ou ser?? enviada de volta ao seu plano natal (se j?? n??o for aqui). Se elas n??o estiverem em seus planos de origem, mortos - vivos ser??o enviados para Umbra e fadas ser??o enviadas para Fa??ria.","classes":["Cl??rigo","Paladino"],"favorite":false},{"id":289,"level":"6","name":"Doen??a Plena","name_en":"Harm","school":{"pt":"Necromancia","style":"necromancy"},"castingTime":"1 a????o","range":"18 metros","components":"V, S","duration":"instant??nea","description":"Voc?? introduz uma doen??a virulenta em uma criatura que voc?? puder ver, dentro do alcance. O alvo deve realizar um teste de resist??ncia de Constitui????o. Se falhar na resist??ncia, ele sofre 14d6 de dano necr??tico ou metade desse dano se obtiver sucesso na resist??ncia. O dano n??o pode reduzir os pontos de vida do alvo abaixo de 1. Se o alvo falhar no teste de resist??ncia, seu m??ximo de pontos de vida ?? reduzidos por 1 hora em uma quantidade igual ao dano necr??tico causado. Qualquer efeito que remova uma doen??a permitir?? que o m??ximo de pontos de vida do alvo volte ao normal antes do per??odo indicado.","classes":["Cl??rigo"],"favorite":false},{"id":211,"level":"4","name":"Dominar Besta","name_en":"Dominate Beast","school":{"pt":"Encantamento","style":"enchantment"},"castingTime":"1 a????o","range":"18 metros","components":"V, S","concentration":"s","duration":"at?? 1 minuto","description":"Voc?? tenta seduzir uma besta que voc?? possa ver dentro do alcance. Ela deve ser bem sucedida num teste de resist??ncia de Sabedoria ou ficar?? enfeiti??ada por voc?? pela dura????o. Se voc?? ou criaturas amig??veis a voc?? estiverem lutando com ela, ela ter?? vantagem no teste de resist??ncia.</p><p> Enquanto a besta estiver enfeiti??ada, voc?? ter?? uma liga????o telep??tica com ela, contanto que ambos estejam no mesmo plano de exist??ncia. Voc?? pode usar essa liga????o telep??tica para emitir comandos para a criatura enquanto voc?? estiver consciente (n??o requer uma a????o), aos quais ela obedece da melhor forma poss??vel. Voc?? pode especificar um curso de a????o simples e gen??rico, como??? Ataque aquela criatura???, ???Corra at?? ali???, ou??? Traga aquele objeto???. Se a criatura completar a ordem e n??o receber dire????es posteriores de voc??, ela se defender?? e se auto preservar?? da melhor forma que puder.</p><p> Voc?? pode usar sua a????o para tomar controle total e preciso do alvo. At?? o final do seu pr??ximo turno, a criatura realiza apenas as a????es que voc?? escolher e n??o faz nada que voc?? n??o permita que ela fa??a. Durante esse per??odo, voc?? tamb??m pode fazer com que a criatura use uma rea????o, mas isso requer que voc?? usa sua pr??pria rea????o tamb??m.</p><p> Cada vez que o alvo sofrer dano, ele realiza um novo teste de resist??ncia de Sabedoria contra a magia. Se obtiver sucesso no teste de resist??ncia, a magia termina.</p><p><strong> Em N??veis Superiores </strong>. Quando voc?? conjurar essa magia usando um espa??o de magia de 5?? n??vel, a dura????o ser?? concentra????o, at?? 10 minutos. Quando voc?? usar um espa??o de magia de 6?? n??vel, a dura????o ser?? concentra????o, at?? 1 hora. Quando voc?? usar um espa??o de magia de 7?? n??vel, a dura????o ser?? concentra????o, at?? 8 horas.","classes":["Druida","Feiticeiro"],"favorite":false},{"id":332,"level":"8","name":"Dominar Monstro","name_en":"Dominate Monster","school":{"pt":"Encantamento","style":"enchantment"},"castingTime":"1 a????o","range":"18 metros","components":"V, S","concentration":"s","duration":"at?? 1 hora","description":"Voc?? tenta seduzir uma criatura que voc?? possa ver dentro do alcance. Ela deve ser bem sucedida num teste de resist??ncia de Sabedoria ou ficar?? enfeiti??ada por voc?? pela dura????o. Se voc?? ou criaturas amig??veis a voc?? estiverem lutando com ela, ela ter?? vantagem no teste de resist??ncia.</p><p> Enquanto a criatura estiver enfeiti??ada, voc?? ter?? uma liga????o telep??tica com ela, contanto que ambos estejam no mesmo plano de exist??ncia. Voc?? pode usar essa liga????o telep??tica para emitir comandos para a criatura enquanto voc?? estiver consciente (n??o requer uma a????o), aos quais ela obedece da melhor forma poss??vel. Voc?? pode especificar um curso de a????o simples e gen??rico, como??? Ataque aquela criatura???, ???Corra at?? ali???, ou??? Traga aquele objeto???. Se a criatura completar a ordem e n??o receber dire????es posteriores de voc??, ela se defender?? e se auto preservar?? da melhor forma que puder.</p><p> Voc?? pode usar sua a????o para tomar controle total e preciso do alvo. At?? o final do seu pr??ximo turno, a criatura realiza apenas as a????es que voc?? escolher e n??o faz nada que voc?? n??o permita que ela fa??a. Durante esse per??odo, voc?? tamb??m pode fazer com que a criatura use uma rea????o, mas isso requer que voc?? usa sua pr??pria rea????o tamb??m.</p><p> Cada vez que o alvo sofrer dano, ele realiza um novo teste de resist??ncia de Sabedoria contra a magia. Se obtiver sucesso no teste de resist??ncia, a magia termina.</p><p><strong> Em N??veis Superiores </strong>. Quando voc?? conjurar essa magia usando um espa??o de magia de 9?? n??vel, a dura????o ser?? concentra????o, at?? 8 horas.","classes":["Bardo","Bruxo","Feiticeiro","Mago"],"favorite":false},{"id":256,"level":"5","name":"Dominar Pessoa","name_en":"Dominate Person","school":{"pt":"Encantamento","style":"enchantment"},"castingTime":"1 a????o","range":"18 metros","components":"V, S","concentration":"s","duration":"at?? 1 minuto","description":"Voc?? tenta seduzir um humanoide que voc?? possa ver dentro do alcance. Ele deve ser bem sucedido num teste de resist??ncia de Sabedoria ou ficar?? enfeiti??ado por voc?? pela dura????o. Se voc?? ou criaturas amig??veis a voc?? estiverem lutando com ele, ele ter?? vantagem no teste de resist??ncia.</p><p> Enquanto o alvo estiver enfeiti??ado, voc?? ter?? uma liga????o telep??tica com ela, contanto que ambos estejam no mesmo plano de exist??ncia. Voc?? pode usar essa liga????o telep??tica para emitir comandos para a criatura enquanto voc?? estiver consciente (n??o requer uma a????o), aos quais ela obedece da melhor forma poss??vel. Voc?? pode especificar um curso de a????o simples e gen??rico, como??? Ataque aquela criatura???, ???Corra at?? ali???, ou??? Traga aquele objeto???. Se a criatura completar a ordem e n??o receber dire????es posteriores de voc??, ela se defender?? e se auto preservar?? da melhor forma que puder.</p><p> Voc?? pode usar sua a????o para tomar controle total e preciso do alvo. At?? o final do seu pr??ximo turno, a criatura realiza apenas as a????es que voc?? escolher e n??o faz nada que voc?? n??o permita que ela fa??a. Durante esse per??odo, voc?? tamb??m pode fazer com que a criatura use uma rea????o, mas isso requer que voc?? usa sua pr??pria rea????o tamb??m.</p><p> Cada vez que o alvo sofrer dano, ele realiza um novo teste de resist??ncia de Sabedoria contra a magia. Se obtiver sucesso no teste de resist??ncia, a magia termina.</p><p><strong> Em N??veis Superiores </strong>. Quando voc?? conjurar essa magia usando um espa??o de magia de 6?? n??vel, a dura????o ser?? concentra????o, at?? 10 minutos. Quando voc?? usar um espa??o de magia de 7?? n??vel, a dura????o ser?? concentra????o, at?? 1 hora. Quando voc?? usar um espa??o de magia de 8?? n??vel, a dura????o ser?? concentra????o, at?? 8 horas.","classes":["Bardo","Feiticeiro","Mago"],"favorite":false},{"id":7,"level":"0","name":"Druidismo","name_en":"Druidcraft","school":{"pt":"Transmuta????o","style":"transmutation"},"castingTime":"1 a????o","range":"9 metros","components":"V, S","duration":"instant??nea","description":"Sussurrando para os esp??ritos da natureza, voc?? cria um dos seguintes efeitos, dentro do alcance: </p><ul><li> Voc?? cria um efeito sensorial min??sculo e inofensivo que prev?? como ser?? o clima na sua localiza????o pelas pr??ximas 24 horas. O efeito deve se manifestar como um globo dourado para c??u claro, uma nuvem para chuva, flocos de neve para nevasca e assim por diante. Esse efeito persiste por 1 rodada.</li><li> Voc?? faz uma flor florescer, uma semente brotar ou um folha amadurecer, instantaneamente.</li><li> Voc?? cria um efeito sensorial inofensivo instant??neo, como folhas caindo, um sopro de vento, o som de um pequeno animal ou o suave odor de um repolho. O efeito deve caber num cubo de 1,5 metro.</li><li> Voc??, instantaneamente, acende ou apaga uma vela, tocha ou fogueira pequena.</li></ul>","classes":["Druida"],"favorite":false},{"id":51,"level":"1","name":"Duelo Compelido","name_en":"Compelled Duel","school":{"pt":"Encantamento","style":"enchantment"},"castingTime":"1 a????o b??nus","range":"9 metros","components":"V","concentration":"s","duration":"at?? 1 minuto","description":"Voc?? tenta compelir uma criatura a duelar com voc??. Uma criatura que voc?? possa ver, dentro do alcance, deve realizar um teste de resist??ncia de Sabedoria. Se falhar, a criatura ?? atra??da por voc??, compelida pela sua exig??ncia divina. Pela dura????o, ela tem desvantagem nas jogadas de ataque contra criaturas diferentes de voc?? e deve realizar um teste de resist??ncia de Sabedoria cada vez que tentar se mover para um espa??o que esteja a mais de 9 metros de voc??, se ela passar no teste de resist??ncia, essa magia n??o restringir?? o movimento do alvo nesse turno.</p><p> A magia termina se voc?? atacar qualquer outra criatura, se voc?? conjurar uma magia que afete uma criatura hostil diferente do alvo, se uma criatura amig??vel a voc?? causar dano ou conjurar uma magia nociva nele ou se voc?? terminar seu turno a mais de 9 metros do alvo.","classes":["Paladino"],"favorite":false},{"id":350,"level":"9","name":"Encarna????o Fantasmag??rica","name_en":"Weird","school":{"pt":"Ilus??o","style":"illusion"},"castingTime":"1 a????o","range":"36 metros","components":"V, S","concentration":"s","duration":"at?? 1 minuto","description":"Baseado nos mais profundos medos de um grupo de criaturas, voc?? cria criaturas ilus??rias nas mentes delas, vis??veis apenas por elas. Cada criatura numa esfera com 9 metros de raio centrada num ponto, ?? sua escolha, dentro do alcance, deve realizar um teste de resist??ncia de Sabedoria. Se falhar na resist??ncia, uma criatura ficar?? amedrontada pela dura????o. A ilus??o invoca os medos mais profundos da criatura, manifestando seus piores pesadelos como uma amea??a implac??vel. No final de cada turno da criatura amedrontada, ela deve ser bem sucedida num teste de resist??ncia de Sabedoria ou sofrer?? 4d10 de dano ps??quico. Se obtiver sucesso na resist??ncia, a magia termina para essa criatura.","classes":["Mago"],"favorite":false},{"id":110,"level":"2","name":"Encontrar Armadilhas","name_en":"Find Traps","school":{"pt":"Adivinha????o","style":"divination"},"castingTime":"1 a????o","range":"36 metros","components":"V, S","duration":"instant??nea","description":"Voc?? sente a presen??a de qualquer armadilha dentro do alcance a qual voc?? tenha linha de vis??o. Uma armadilha, para os prop??sitos dessa magia, inclui qualquer coisa que possa causar um efeito repentino ou inesperado em voc??, considerado nocivo ou indesej??vel, que foi especificamente planejado para ser por seu criador. Portanto, a magia sentir?? a ??rea afetada pela magia <em> alarme </em>, um <em> glifo de vigil??ncia </em> ou uma armadilha mec??nica de fosso, mas ela n??o revelar?? uma fragilidade natural no piso, um teto inst??vel ou um sumidouro escondido. Essa magia apenas revela que existe uma magia presente. Voc?? n??o descobre a localiza????o de cada armadilha, mas voc?? tamb??m descobre a natureza gen??rica do perigo representando pela armadilha que voc?? sentiu.","classes":["Cl??rigo","Druida","Patrulheiro"],"favorite":false},{"id":290,"level":"6","name":"Encontrar o Caminho","name_en":"Find The Path","school":{"pt":"Adivinha????o","style":"divination"},"castingTime":"1 minuto","range":"pessoal","components":"V, S, M","concentration":"s","duration":"at?? 1 dia","material":"um conjunto de ferramentas de adivinha????o ??? como ossos, bast??es de marfim, dentes ou runas esculpidas??? no valor de 100 po e um objeto do lugar que voc?? deseja encontrar","description":"Essa magia permite que voc?? encontre a rota f??sica mais curta e direta para um local especifico est??tico, que voc?? seja familiar, no mesmo plano de exist??ncia. Se voc?? denominar um destino em outro plano de exist??ncia, um local que se mova (como uma fortaleza andante) ou um destino que n??o seja especifico (como??? o covil do drag??o verde???), a magia falha.</p><p> Pela dura????o, contanto que voc?? esteja no mesmo plano de exist??ncia do destino, voc?? saber?? o qu??o longe ele est?? e em que dire????o ele se encontra. Enquanto estiver viajando, sempre que voc?? se deparar com uma escolha de trajet??ria no caminho, voc?? automaticamente determina qual trajet??ria tem a rota mais curta e direta (mas n??o necessariamente a rota mais segura) para o destino.","classes":["Bardo","Cl??rigo","Druida"],"favorite":false},{"id":52,"level":"1","name":"Enfeiti??ar Pessoa","name_en":"Charm Person","school":{"pt":"Encantamento","style":"enchantment"},"castingTime":"1 a????o","range":"9 metros","components":"V, S","duration":"1 hora","description":"Voc?? tenta enfeiti??ar um humanoide que voc?? possa ver dentro do alcance. Ele deve realizar um teste de resist??ncia de Sabedoria, e recebe vantagem nesse teste se voc?? ou seus companheiros estiverem lutando com ele. Se ele falhar, ficar?? enfeiti??ado por voc?? at?? a magia acabar ou at?? voc?? ou seus companheiros fizerem qualquer coisa nociva contra ele. A criatura enfeiti??ada reconhece voc?? como um conhecido amig??vel. Quando a magia acabar, a criatura saber?? que foi enfeiti??ada por voc??.</p><p><strong> Em N??veis Superiores </strong>. Se voc?? conjurar essa magia usando um espa??o de magia de 2?? n??vel ou superior, voc?? pode afetar uma criatura adicional para cada n??vel do espa??o acima do 1??. As criaturas devem estar a at?? 9 metros umas das outras quando voc?? for afet??-las.","classes":["Bardo","Bruxo","Druida","Feiticeiro","Mago"],"favorite":false},{"id":333,"level":"8","name":"Enfraquecer Intelecto","name_en":"Feebiemind","school":{"pt":"Encantamento","style":"enchantment"},"castingTime":"1 a????o","range":"45 metros","components":"V, S, M","duration":"instant??nea","material":"um punhado de barro, cristal, vidro ou esferas minerais","description":"Voc?? ataca a mente de uma criatura que voc?? possa ver, dentro do alcance, tentando despeda??ar seu intelecto e personalidade. O alvo sofre 4d6 de dano ps??quico e deve realizar um teste de resist??ncia de Intelig??ncia.</p><p> Se falhar na resist??ncia, os valores de Intelig??ncia e Carisma da criatura se tornam 1. A criatura n??o pode conjurar magias, ativar itens m??gicos, compreender idiomas ou se comunicar de qualquer forma intelig??vel. A criatura pode, no entanto, identificar seus amigos, segui - los e, at?? mesmo, protege - los.</p><p> Ao final de cada 30 dias, a criatura pode repetir seu teste de resist??ncia contra essa magia. Se ela obtiver sucesso no teste de resist??ncia, a magia termina. Essa magia tamb??m pode ser terminada atrav??s de <em> restaura????o maior </em>, <em> cura completa </em> ou <em> desejo </em>.</p> ","classes":["Bardo"],"favorite":false},{"id":165,"level":"3","name":"Enviar Mensagem","name_en":"Sending","school":{"pt":"Evoca????o","style":"evocation"},"castingTime":"1 a????o","range":"ilimitado","components":"V, S, M","duration":"1 rodada","material":"um pequeno e fino peda??o de fio de cobre","description":"Voc?? envia uma mensagem curta, de vinte e cinco palavras ou menos, para uma criatura que seja familiar a voc??. A criatura ouve a mensagem na sua mente, reconhecendo que foi enviada por voc??, se ela te conhecer, e pode responder da mesma maneira, imediatamente. A magia permite que criaturas com valores de Intelig??ncia de no m??nimo 1, compreendam o sentido da sua mensagem.</p><p> Voc?? pode enviar a mensagem atrav??s de qualquer dist??ncia e, at?? mesmo, para outro plano de exist??ncia, mas se o alvo estiver em um plano diferente do seu, existe 5 por cento de chance da mensagem n??o chegar.","classes":["Bardo","Cl??rigo","Mago"],"favorite":false},{"id":53,"level":"1","name":"Escrita Ilus??ria","name_en":"Illusory Script","ritual":"s","school":{"pt":"Ilus??o","style":"illusion"},"castingTime":"1 minuto","range":"toque","components":"S, M","duration":"10 dias","material":"uma tinta ?? base de chumbo valendo, no m??nimo, 10 po, que ?? consumida pela magia","description":"Voc?? escreve em um pergaminho, papel ou qualquer outro material adequado e tinge ele com uma poderosa ilus??o que permanece pela dura????o.</p><p> Para voc?? e para qualquer criatura que voc?? designar quando voc?? conjura essa magia, a escrita parece normal, escrita com a sua caligrafia e transmite qualquer que seja a mensagem que voc?? desejava quando escreveu o texto. Para todos os outros, a escrita aparece como se tivesse sido escrita com uma caligrafia desconhecida ou m??gica que ?? intelig??vel. Alternativamente, voc?? pode fazer a escrita parecer uma mensagem totalmente diferente, escrita com uma caligrafia e idioma diferentes, apesar de o idioma precisar ser um que voc?? conhe??a.</p><p> No caso da magia ser dissipada, tanto a escrita original quanto a ilus??ria desaparecem.</p><p> Uma criatura com vis??o verdadeira pode ler a mensagem escondida.","classes":["Bardo","Bruxo","Mago"],"favorite":false},{"id":54,"level":"1","name":"Escudo Arcano","name_en":"Shield","school":{"pt":"Abjura????o","style":"abjuration"},"castingTime":"1 rea????o","range":"pessoal","components":"V, S","duration":"1 rodada","reaction":"que voc?? faz quando ?? atingido por um ataque ou alvo da magia m??sseis m??gicos","description":"Uma barreira de energia invis??vel aparece e protege voc??. At?? o in??cio do seu pr??ximo turno, voc?? recebe + 5 de b??nus na CA, incluindo contra o ataque que desencadeou a magia, e voc?? n??o sofre dano de <em> m??sseis m??gicos </em>.</p> ","classes":["Feiticeiro","Mago"],"favorite":false},{"id":55,"level":"1","name":"Escudo da F??","name_en":"Shield Of Faith","school":{"pt":"Abjura????o","style":"abjuration"},"castingTime":"1 a????o b??nus","range":"18 metros","components":"V, S, M","concentration":"s","duration":"at?? 10 minutos","material":"um pequeno pergaminho com alguns textos sagrados escritos nele","description":"Um campo cintilante aparece ao redor de uma criatura, ?? sua escolha, dentro do alcance, concedendo + 2 de b??nus na CA pela dura????o.","classes":["Cl??rigo","Paladino"],"favorite":false},{"id":212,"level":"4","name":"Escudo de Fogo","name_en":"Fire Shield","school":{"pt":"Evoca????o","style":"evocation"},"castingTime":"1 a????o","range":"pessoal","components":"V, S, M","duration":"10 minutos","material":"um pouco de f??sforo ou um vaga- lume","description":"Finas e discretas chamas rodeiam seu corpo pela dura????o, emitindo luz plena em 3 metros de raio e penumbra por mais 3 metros adicionais. Voc?? pode terminar a magia prematuramente usando sua a????o para dissip??-la.</p><p> As chamas lhe conferem um escudo quente ou um escudo frio, ?? sua escolha. O escudo quente lhe garante resist??ncia a dano de frio e o escudo frio lhe concede resist??ncia a dano de fogo.</p><p> Al??m disso, sempre que uma criatura a 1,5 metro de voc?? atingir voc?? com um ataque corpo - a - corpo, o escudo expele chamas. O atacante sofre 2d8 de dano de fogo do escudo quente ou 2d8 de dano de frio do escudo frio.","classes":["Mago"],"favorite":false},{"id":111,"level":"2","name":"Escurid??o","name_en":"Darkness","school":{"pt":"Evoca????o","style":"evocation"},"castingTime":"1 a????o","range":"18 metros","components":"V, M","concentration":"s","duration":"at?? 10 minutos","material":"pelo de morcego e uma gota de piche ou peda??o de carv??o","description":"Escurid??o m??gica se espalha a partir de um ponto, ?? sua escolha, dentro do alcance e preenche uma esfera de 4, 5 metros de raio pela dura????o. A escurid??o se estende, dobrando esquinas. Uma criatura com vis??o no escuro n??o pode ver atrav??s dessa escurid??o e luz n??o - m??gica n??o pode iluminar dentro dela.</p><p> Se o ponto que voc?? escolheu for um objeto que voc?? esteja segurando, ou um que n??o esteja sendo vestido ou carregado, a escurid??o emanar?? do objeto e se mover?? com ele. Cobrir completamente a fonte da escurid??o com um objeto opaco, como uma vasilha ou um elmo, bloquear?? a escurid??o.</p><p> Se qualquer ??rea dessa magia sobrepor uma ??rea de luz criada por uma magia de 2?? ou inferior, a magia que criou a luz ser?? dissipada.","classes":["Bruxo","Feiticeiro","Mago"],"favorite":false},{"id":291,"level":"6","name":"Esfera Congelante de Otiluke","name_en":"Otiluke's Freezing Sphere","school":{"pt":"Evoca????o","style":"evocation"},"castingTime":"1 a????o","range":"90 metros","components":"V, S, M","duration":"instant??nea","material":"uma pequena esfera de cristal","description":"Um globo frigido de energia gelada ?? arremessado das pontas dos seus dedos para um ponto, ?? sua escolha, dentro do alcance, onde ele explode numa esfera de 18 metros de raio. Cada criatura dentro da ??rea deve realizar um teste de resist??ncia de Constitui????o. Se falhar na resist??ncia, uma criatura sofre 10d6 de dano de frio. Se obtiver sucesso na resist??ncia, ela sofre metade desse dano.</p><p> Se o globo atingir um corpo de ??gua ou liquido composto principalmente de ??gua (n??o incluindo criaturas feitas de ??gua), ele congela o l??quido at?? uma profundidade de 15 cent??metros numa ??rea de 9 metros quadrados. Esse gelo dura por 1 minuto. Criaturas que estiverem nadando na superf??cie de ??gua congelada estar??o presas no gelo. Uma criatura presa pode usar sua a????o para realizar um teste de For??a contra a CD da magia para se libertar.</p><p> Voc?? pode evitar de disparar o globo ap??s completar a magia, se desejar. Um pequeno globo, do tamanho de uma pedra de funda, frio ao toque, aparece em sua m??o. A qualquer momento, voc?? ou uma criatura a quem voc?? entregar o globo, pode arremessa - lo (a uma dist??ncia de 12 metros) ou atira - lo com uma funda (ao alcance normal da funda). Ele se despeda??a no impacto, produzindo o mesmo efeito da conjura????o normal da magia. Voc?? pode, tamb??m, soltar o globo no ch??o sem despeda??a - lo. Ap??s 1 minuto, se o globo ainda n??o tiver se despeda??ado, ele explode.</p><p><strong> Em N??veis Superiores </strong>. Quando voc?? conjurar essa magia usando um espa??o de magia de 7?? n??vel ou superior, o dano aumenta em 1d6 para cada n??vel do espa??o acima do 6??.","classes":["Mago"],"favorite":false},{"id":112,"level":"2","name":"Esfera Flamejante","name_en":"Flaming Sphere","school":{"pt":"Conjura????o","style":"conjuration"},"castingTime":"1 a????o","range":"18 metros","components":"V, S, M","concentration":"s","duration":"at?? 1 minuto","material":"um pouco de seco, uma pitada de enxofre e uma camada de p?? de ferro","description":"Uma esfera de fogo, com 1,5 metro de di??metro, aparece em um espa??o desocupado, ?? sua escolha, dentro do alcance e permanece pela dura????o. Qualquer criatura que terminar seu turno a at?? 1,5 metro da esfera, deve realizar um teste de resist??ncia de Destreza. A criatura sofre 2d6 de dano de fogo se falhar na resist??ncia, ou metade desse dano se obtiver sucesso.</p><p> Com uma a????o b??nus, voc?? pode mover a esfera at?? 9 metros. Se voc?? arremessar a esfera contra uma criatura, essa criatura deve realizar o teste de resist??ncia contra o dano da esfera e a esfera para de se mover esse turno.</p><p> Quando voc?? move a esfera, voc?? pode direcion??-la para barreira de at?? 1,5 metro de altura e ela salta sobre fossos de at?? 3 metros de dist??ncia. A esfera incendeia objetos inflam??veis que n??o estejam sendo vestidos ou carregados e emite luz plena a 6 metros de raio e penumbra por mais 6 metros adicionais.</p><p><strong> Em N??veis Superiores </strong>. Quando voc?? conjurar essa magia usando um espa??o de magia de 3?? n??vel ou superior, o dano aumenta em 1d6 para cada n??vel do espa??o acima do 2??.","classes":["Druida","Mago"],"favorite":false},{"id":213,"level":"4","name":"Esfera Resiliente de Otiluke","name_en":"Otiuke's Resilient Sphere","school":{"pt":"Evoca????o","style":"evocation"},"castingTime":"1 a????o","range":"9 metros","components":"V, S, M","concentration":"s","duration":"at?? 1 minuto","material":"uma pe??a hemisf??rica de cristal transparente e uma pe??a hemisf??rica que combine de goma ar??bica","description":"Uma esfera de energia brilhante engloba uma criatura ou objeto de tamanho Grande ou menor, dentro do alcance. Uma criatura involunt??ria deve realizar um teste de resist??ncia de Destreza. Se falhar na resist??ncia, a criatura estar?? enclausurada pela dura????o. Nada??? nem objetos f??sicos, energia ou outros efeitos m??gicos??? pode passar atrav??s da barreira, para dentro ou para fora, apesar da criatura na esfera poder respirar l?? dentro. A esfera ?? imune a todos os danos e a criatura ou objeto dentro n??o pode sofrer dano de ataques ou efeitos originados de fora, nem a criatura dentro da esfera, pode causar dano a nada fora dela.</p><p> A esfera n??o tem peso e ?? grande o suficiente apenas para conter a criatura ou objeto dentro. Uma criatura enclausurada pode usar sua a????o para empurrar a parede da esfera e, assim, rolar a esfera a metade do deslocamento da criatura. Similarmente, o globo pode ser erguido e movido por outras criaturas.</p><p> A magia <em> desintegrar </em> lan??ada no globo o destruir?? sem causar ferimentos a nada dentro dele.</p> ","classes":["Mago"],"favorite":false},{"id":310,"level":"7","name":"Espada de Mordenkainen","name_en":"Mordenkainen's Sword","school":{"pt":"Evoca????o","style":"evocation"},"castingTime":"1 a????o","range":"18 metros","components":"V, S, M","concentration":"s","duration":"at?? 1 minuto","material":"espada de platina em miniatura com cabo e pomo de cobre e zinco valendo, no m??nimo, 250 po","description":"Voc?? cria um plano de energia em formato de espada que flutua dentro do alcance. Ela permanece pela dura????o.</p><p> Quando a espada aparece, voc?? realiza um ataque com magia contra um alvo, ?? sua escolha, a 1,5 metro da espada. Se atingir, o alvo sofre 3d10 de dano de energia. At?? a magia acabar, voc?? pode usar uma a????o b??nus, em cada um dos seus turnos, para mover a espada at?? 6 metros para um local que voc?? possa ver e repetir esse ataque contra o mesmo alvo ou um diferente.","classes":["Bardo","Mago"],"favorite":false},{"id":166,"level":"3","name":"Esp??ritos Guardi??es","name_en":"Spirit Guardians","school":{"pt":"Conjura????o","style":"conjuration"},"castingTime":"1 a????o","range":"pessoal","components":"V, S, M","concentration":"s","duration":"at?? 10 minutos","material":"um s??mbolo sagrado","description":"Voc?? evoca esp??ritos para protege - lo. Eles flutuam a seu redor, a uma dist??ncia de 4, 5 metros, pela dura????o. Se voc?? for bom ou neutro, as formas espectrais deles aparenta ser angelical ou fe??rica (?? sua escolha). Se voc?? for mau, eles pareceram demon??acos.</p><p> Quando voc?? conjura essa magia, voc?? pode designar qualquer quantidade de criaturas que voc?? possa ver para n??o serem afetadas por ela. O deslocamento de uma criatura afetada ?? reduzido ?? metade na ??rea e, quando a criatura entrar na ??rea pela primeira vez num turno ou come??ar seu turno nela, ela deve realizar um teste de resist??ncia de Sabedoria. Se falhar na resist??ncia, a criatura sofrer?? 3d8 de dano radiante (se voc?? for bom ou neutro) ou 3d8 de dano necr??tico (se voc?? for mau). Com um sucesso na resist??ncia, a criatura sofre metade desse dano.</p><p><strong> Em N??veis Superiores </strong>. Quando voc?? conjurar essa magia usando um espa??o de magia de 4?? n??vel ou superior, o dano aumenta em 1d8 para cada n??vel do espa??o acima do 3??.","classes":["Cl??rigo"],"favorite":false},{"id":8,"level":"0","name":"Espirro ??cido","name_en":"Acid Splash","school":{"pt":"Conjura????o","style":"conjuration"},"castingTime":"1 a????o","range":"18 metros","components":"V, S","duration":"instant??nea","description":"Voc?? arremessa uma bolha de ??cido. Escolha uma criatura dentro do alcance, ou escolha duas criaturas dentro do alcance que estejam a 1,5 metro uma da outra. Um alvo deve ser bem sucedido num teste de resist??ncia de Destreza ou sofrer?? 1d6 de dano ??cido.</p><p> O dano dessa magia aumenta em 1d6 quando voc?? alcan??a o 5?? n??vel (2d6), 11?? n??vel (3d6) e 17?? n??vel (4d6).","classes":["Feiticeiro","Mago"],"favorite":false},{"id":113,"level":"2","name":"Esquentar Metal","name_en":"Heat Metal","school":{"pt":"Transmuta????o","style":"transmutation"},"castingTime":"1 a????o","range":"18 metros","components":"V, S, M","concentration":"s","duration":"at?? 1 minuto","material":"um peda??o de ferro e uma chama","description":"Escolha uma objeto manufaturado de metal, como uma arma de metal ou uma armadura pesada ou m??dia de metal, que voc?? possa ver dentro do alcance. Voc?? faz com que o objeto brilhe vermelho - incandescente. Qualquer criatura em contato f??sico com o objeto sofrer?? 2d8 de dano de fogo quando voc?? conjurar a magia. At?? a magia acabar, voc?? pode usar uma a????o b??nus, em cada um dos seus turnos subsequentes, para causar esse dano novamente.</p><p> Se uma criatura estiver segurando ou vestindo o objeto e sofrer o dano dele, a criatura deve ser bem sucedida num teste de resist??ncia de Constitui????o ou largar?? o objeto se ela puder. Se ela n??o largar o objeto, ela ter?? desvantagem em jogadas de ataque e testes de habilidade at?? o in??cio do seu pr??ximo turno.</p><p><strong> Em N??veis Superiores </strong>. Quando voc?? conjurar essa magia usando um espa??o de magia de 3?? n??vel ou superior, o dano aumenta em 1d8 para cada n??vel do espa??o acima do 2??.","classes":["Bardo","Druida"],"favorite":false},{"id":9,"level":"0","name":"Estabilizar","name_en":"Spare The Dying","school":{"pt":"Necromancia","style":"necromancy"},"castingTime":"1 a????o","range":"toque","components":"V, S","duration":"instant??nea","description":"Voc?? toca uma criatura viva que esteja com 0 pontos de vida. A criatura ?? estabilizada. Essa magia n??o afeta mortos - vivos ou constructos.","classes":["Cl??rigo"],"favorite":false},{"id":334,"level":"8","name":"Explos??o Solar","name_en":"Sunburst","school":{"pt":"Evoca????o","style":"evocation"},"castingTime":"1 a????o","range":"45 metros","components":"V, S, M","duration":"instant??nea","material":"fogo e um peda??o de pedra do sol","description":"Luz solar brilhante lampeja num raio de 18 metros, centrada num ponto, ?? sua escolha, dentro do alcance. Cada criatura nessa luz, deve realizar um teste de resist??ncia de Constitui????o. Com uma falha na resist??ncia, uma criatura sofrer?? 12d6 de dano radiante e ficar?? cega por 1 minuto. Se obtiver sucesso na resist??ncia, ela sofrer?? metade desse dano e n??o ficar?? cega por essa magia. Mortos - vivos e limos tem desvantagem nos seus testes de resist??ncia.</p><p> Uma criatura cega por essa magia faz outro teste de resist??ncia de Constitui????o no final de cada um dos turnos dela. Se obtiver sucesso, ela n??o estar?? mais cega.</p><p> Essa magia dissipa qualquer escurid??o na ??rea dela que tenha sido criada por um magia.","classes":["Druida","Feiticeiro","Mago"],"favorite":false},{"id":214,"level":"4","name":"Fabricar","name_en":"Fabricate","school":{"pt":"Transmuta????o","style":"transmutation"},"castingTime":"10 minutos","range":"36 metros","components":"V, S","duration":"instant??nea","description":"Voc?? converte mat??ria - prima em produtos do mesmo material. Por exemplo, voc?? pode construir uma ponte de madeira usando um amontoado de ??rvores, uma corda de um peda??o de c??nhamo e roupas usando linho ou l??.</p><p> Escolha mat??rias - primas que voc?? possa ver, dentro do alcance. Voc?? pode fabricar um objeto Grande ou menor (contido em 3 metros c??bicos ou em oito cubos de 1,5 metro conectados), tendo uma quantidade suficiente de mat??ria - prima. Se voc?? estiver trabalhando com metal, pedra ou outra subst??ncia mineral, no entanto, o objeto fabricado n??o pode ser maior que M??dio (contido em apenas 1,5 metro c??bico). A quantidade de objetos feitos por essa magia ?? proporcional com a quantidade de mat??ria - prima.</p><p> Criaturas ou itens m??gicos n??o podem ser criados ou transmutados por essa magia. Voc?? tamb??m n??o pode us?? - la para criar itens que, geralmente, requerem um alto grau de per??cia, como joalheria, armas, vidros ou armaduras, a n??o ser que voc?? tenha profici??ncia com o tipo de ferramenta de artesanato usada para construir tais objetos.","classes":["Mago"],"favorite":false},{"id":56,"level":"1","name":"Falar com Animais","name_en":"Speak With Animals","ritual":"s","school":{"pt":"Adivinha????o","style":"divination"},"castingTime":"1 a????o","range":"pessoal","components":"V, S","duration":"10 minutos","description":"Voc?? adquire a habilidade de compreender e se comunicar verbalmente com bestas, pela dura????o. O conhecimento e consci??ncia de muitas bestas ?? limitado pela intelig??ncia delas mas, no m??nimo, as bestas poder??o dar informa????es a voc?? sobre os locais e monstros pr??ximos, incluindo tudo que eles possam perceber ou tenham percebido no dia anterior. Voc?? pode tentar persuadir uma besta a lhe prestar um favor, ?? crit??rio do Mestre.","classes":["Bardo","Druida","Patrulheiro"],"favorite":false},{"id":167,"level":"3","name":"Falar com Os Mortos","name_en":"Speak With Dead","school":{"pt":"Necromancia","style":"necromancy"},"castingTime":"1 a????o","range":"3 metros","components":"V, S, M","duration":"10 minutos","material":"incenso aceso","description":"Voc?? concede o aspecto de vida e intelig??ncia a um corpo, ?? sua escolha, dentro do alcance, permitindo que ele responda as perguntas que voc?? fizer. O corpo ainda deve possuir uma boca e n??o pode ser um morto - vivo. A magia falha se o corpo j?? tiver sido alvo dessa magia nos ??ltimos 10 dias.</p><p> At?? a magia acabar, voc?? pode fazer ao corpo at?? cinco perguntas. O corpo sabe apenas o que ele sabia em vida, incluindo o idioma que ele conhecia. As respostas normalmente s??o breves, enigm??ticas ou repetitivas e o corpo n??o est?? sob nenhuma compuls??o que o obrigue a oferecer respostas verdadeiras se voc?? for hostil a ele ou se ele reconhecer voc?? como um inimigo. Essa magia n??o traz a alma da criatura de volta ao corpo, apenas anima seu esp??rito. Portanto, o corpo n??o pode aprender novas informa????es, n??o compreende nada que tenha acontecido depois da sua morte e n??o pode especular sobre eventos futuros.","classes":["Bardo","Cl??rigo"],"favorite":false},{"id":57,"level":"3","name":"Falar com Plantas","name_en":"Speak With Plants","ritual":"s","school":{"pt":"Transmuta????o","style":"transmutation"},"castingTime":"1 a????o","range":"pessoal","components":"V, S","duration":"10 minutos","description":"Voc?? imbui as plantas a at?? 9 metros de voc?? com consci??ncia e anima????o limitadas, dando - lhes a habilidade de se comunicar com voc?? e seguir seus comandos simples. Voc?? pode perguntar as plantas sobre eventos na ??rea da magia, acontecidos desde o dia anterior, recebendo informa????es sobre criaturas que passaram, clima e outras circunst??ncias.</p><p> Voc?? tamb??m pode tornar terreno dif??cil causado pelo crescimento de plantas (como arbustos e vegeta????o rasteira) em terreno normal, permanecendo assim pela dura????o. Ou voc?? pode tornar terreno normal onde as plantas estiverem presentes, em terreno dif??cil, permanecendo assim pela dura????o, fazendo as vinhas e ramos atrasarem perseguidores, por exemplo.</p><p> As plantas podem ser capazes de realizar outras tarefas em seu favor, ?? crit??rio do Mestre. A magia n??o permite que as plantas desenra??zem - se e se movam, mas elas podem mover, livremente, seus ramos, galhos e caules.</p><p> Se uma criatura planta estiver na ??rea, voc?? pode se comunicar com ela se voc?? partilhar um idioma em comum, mas voc?? n??o recebe qualquer habilidade m??gica para influenci??-la. Essa magia pode fazer as plantas criadas pela magia <em> constri????o </em> soltarem uma criatura impedida.</p> ","classes":["Bardo","Druida","Patrulheiro"],"favorite":false},{"id":114,"level":"2","name":"Flecha ??cida de Melf","name_en":"Melf's Acid Arrow","school":{"pt":"Evoca????o","style":"evocation"},"castingTime":"1 a????o","range":"36 metros","components":"V, S, M","duration":"instant??nea","material":"folha de ruibarbo em p?? e o est??mago de uma v??bora","description":"Uma flecha esverdeada cintilante voa em dire????o de um alvo dentro do alcance e explode em um jato de ??cido. Fa??a um ataque ?? dist??ncia com magia contra o alvo. Se atingir, o alvo sofre 4d4 de dano de ??cido imediatamente e 2d4 de dano de ??cido no final do pr??ximo turno dele. Se errar, a flecha salpica o alvo com ??cido, causando metade do dano inicial e nenhum dano no final do pr??ximo turno dele.</p><p><strong> Em N??veis Superiores </strong>. Quando voc?? conjurar essa magia usando um espa??o de magia de 3?? n??vel ou superior, o dano (tanto inicial quanto posterior) aumenta em 1d4 para cada n??vel do espa??o acima do 2??.","classes":["Mago"],"favorite":false},{"id":168,"level":"3","name":"Flecha Relampejante","name_en":"Lightning Arrow","school":{"pt":"Transmuta????o","style":"transmutation"},"castingTime":"1 a????o b??nus","range":"pessoal","components":"V, S","concentration":"s","duration":"at?? 1 minuto","description":"Da pr??xima vez que voc?? realizar um ataque com uma arma ?? dist??ncia enquanto a magia durar, a muni????o da arma ou a pr??pria arma, se ela for uma arma de arremesso, se transforma num rel??mpago. Realize uma jogada de ataque normal. O alvo sofre 4d8 de dano el??trico se atingir ou metade desse dano se errar, ao inv??s do dano normal da arma.</p><p> Independentemente de voc?? acertar ou errar, cada criatura a at?? 3 metros do alvo deve realizar um teste de resist??ncia de Destreza. Cada uma dessas criaturas sofre 2d8 de dano el??trico se falhar na resist??ncia ou metade desse dano se obtiver sucesso. A muni????o ou arma ent??o, volta a sua forma normal.</p><p><strong> Em N??veis Superiores </strong>. Quando voc?? conjurar essa magia usando um espa??o de magia de 4?? n??vel ou superior, o dano de ambos os efeitos da magia aumenta em 1d8 para cada n??vel do espa??o acima do 3??.","classes":["Patrulheiro"],"favorite":false},{"id":58,"level":"1","name":"Fogo das Fadas","name_en":"Faerie Fire","school":{"pt":"Evoca????o","style":"evocation"},"castingTime":"1 a????o","range":"18 metros","components":"V","concentration":"s","duration":"at?? 1 minuto","description":"Cada objeto num cubo de 6 metros dentro do alcance fica delineado com luz azul, verde ou violeta (?? sua escolha). Qualquer criatura na ??rea, quando a magia ?? conjurada, tamb??m fica delineada com luz, se falhar num teste de resist??ncia de Destreza. Pela dura????o, os objetos e criaturas afetadas emitem penumbra num raio de 3 metros.</p><p> Qualquer jogada de ataque contra uma criatura afetada ou objeto tem vantagem, se o atacante puder ver o alvo e, a criatura afetada ou objeto n??o recebe benef??cio por estar invis??vel.","classes":["Bardo","Druida"],"favorite":false},{"id":169,"level":"3","name":"Fome de Hadar","name_en":"Hunger Of Hadar","school":{"pt":"Conjura????o","style":"conjuration"},"castingTime":"1 a????o","range":"45 metros","components":"V, S, M","concentration":"s","duration":"at?? 1 minuto","material":"um tent??culo de polvo em conserva","description":"Voc?? abre um portal para a escurid??o entre as estrelas, uma regi??o infestada de horrores desconhecidos. Uma esfera de 6 metros de raio de negritude e frio severo aparece, centrada num ponto dentro do alcance, e permanece pela dura????o. Esse vazio est?? preenchido por uma cacofonia de sussurros suaves e barulhos de rangidos que podem ser ouvidos a at?? 9 metros. Nenhuma luz, m??gica ou qualquer que seja, pode iluminar a ??rea e as criaturas totalmente dentro da ??rea estar??o cegas.</p><p> O vazio cria uma dobra no tecido do espa??o e a ??rea ?? de terreno dif??cil. Qualquer criatura que come??ar seu turno na ??rea sofre 2d6 de dano de frio. Qualquer criatura que terminar seu turno na ??rea, deve ser bem sucedida num teste de resist??ncia de Destreza ou sofrer?? 2d6 de dano de ??cido, ?? medida que tent??culos leitosos extraterrestres se esfregam contra ela.","classes":["Bruxo"],"favorite":false},{"id":115,"level":"2","name":"For??a Fantasmag??rica","name_en":"Phantasmal Force","school":{"pt":"Ilus??o","style":"illusion"},"castingTime":"1 a????o","range":"18 metros","components":"V, S, M","concentration":"s","duration":"at?? 1 minuto","material":"um pouco de l??","description":"Voc?? constr??i uma ilus??o que se enra??za na mente de uma criatura que voc?? possa ver, dentro do alcance. O alvo deve realizar um teste de resist??ncia de Intelig??ncia. Se falhar na resist??ncia, voc?? cria um objeto, criatura ou outro fen??meno vis??vel??? por??m, fantasmag??rico??? ?? sua escolha, com n??o mais de 3 metros c??bicos e que ser?? percebido apenas pelo alvo, pela dura????o. Essa magia n??o afeta mortos - vivos ou constructos.</p><p> O fantasma inclui som, temperatura e outros est??mulos, tamb??m evidentes apenas para o alvo.</p><p> O alvo pode usar sua a????o para examinar o fantasma com um teste de Intelig??ncia (Investiga????o) contra a CD da as magia. Se for bem sucedido, o alvo percebe que o fantasma ?? uma ilus??o e a magia acaba.</p><p> Enquanto o alvo estiver sob efeito dessa magia, ele considerar?? o fantasma como sendo real. O alvo racionalizar?? quaisquer resultados il??gicos ao interagir com o fantasma. Por exemplo, um alvo tentado atravessar uma ponte fantasmag??rica que atravesse um abismo, cair?? quando pisar na ponte. Se o alvo sobreviver a queda, ele ainda acreditar?? que a ponte existe e procurar?? outra explica????o para a sua queda??? ele foi puxado, ele escorregou ou um vento forte pode ter o jogado pra fora.</p><p> Um alvo afetado est?? t??o convencido da realidade do fantasma que pode at?? mesmo sofrer dano da ilus??o. Um fantasma criado para se parecer com uma criatura pode atacar o alvo. Similarmente, um fantasma criado para se parecer com fogo, um po??o de ??cido ou lava, podem queimar o alvo. A cada rodada, no seu turno, o fantasma pode causar 1d6 de dano ps??quico no alvo, se ele estiver na ??rea do fantasma ou a 1,5 metro dele, considerando que a ilus??o ?? de uma criatura ou perigo que, logicamente, possa causar dano, como por atacar. O alvo entende o dano como sendo de um tipo apropriado para a ilus??o.","classes":["Bardo","Feiticeiro","Mago"],"favorite":false},{"id":170,"level":"3","name":"Forjar Morte","name_en":"Feign Death","ritual":"s","school":{"pt":"Necromancia","style":"necromancy"},"castingTime":"1 a????o","range":"toque","components":"V, S, M","duration":"1 hora","material":"uma pitada de terra de cemit??rio","description":"Voc?? toca uma criatura volunt??ria e a coloca em um estado catat??nico que ?? indistingu??vel da morte.</p><p> Pela dura????o da magia, ou at?? voc?? usar uma a????o para tocar o alvo e dissipar a magia, o alvo aparenta estar morto para todas as inspe????es externas e para magias usadas para determinar a condi????o do alvo. O alvo est?? cego e incapacitado e seu deslocamento cai para 0. O alvo tem resist??ncia a todos os danos, exceto dano ps??quico. Se o alvo estava doente ou envenenado quando voc?? conjurou a magia, ou ficou doente ou envenenado durante o per??odo em que estava sob efeito da magia, a doen??a e veneno n??o ter?? qualquer efeito at?? a magia terminar.","classes":["Bardo","Cl??rigo","Druida","Mago"],"favorite":false},{"id":311,"level":"7","name":"Forma Et??rea","name_en":"Etherealness","school":{"pt":"Transmuta????o","style":"transmutation"},"castingTime":"1 a????o","range":"pessoal","components":"V, S","duration":"at?? 8 horas","description":"Voc?? d?? um passo para dentro das fronteiras do Plano Et??reo, na ??rea em que ele se sobrep??em com o seu plano atual. Voc?? se mant??m na Fronteira Et??rea pela dura????o ou at?? voc?? usar sua a????o para dissipar a magia. Durante esse per??odo, voc?? pode se mover para qualquer dire????o. Se voc?? se mover para cima ou para baixo, cada passo de deslocamento custa um passo extra. Voc?? pode ver e ouvir o plano que voc?? se originou, mas tudo parece cinzento e voc?? n??o pode ver nada al??m de 18 metros de voc??.</p><p> Enquanto estiver no Plano Et??reo, voc?? pode afetar e ser afetado apenas por criaturas nesse plano. As criaturas que n??o estiverem no Plano Et??reo n??o podem notar sua presen??a e n??o podem interagir com voc??, a menos que uma habilidade especial ou magia d?? a elas a capacidade de faz?? - lo.</p><p> Voc?? ignora todos os objetos e efeitos que n??o estiverem no Plano Et??reo, permitindo que voc?? se mova atrav??s de objetos que voc?? perceba no plano de onde voc?? veio.</p><p> Quando a magia acabar, voc?? imediatamente retorna para o plano de onde voc?? se originou, no lugar que voc?? est?? ocupando atualmente. Se voc?? estiver ocupando o mesmo espa??o de um objeto s??lido ou de uma criatura quando isso ocorrer, voc?? ??, imediatamente, desviado para o espa??o desocupado mais pr??ximo que voc?? puder ocupar e sofre dano de energia igual a dez vezes a quantidade de quadrados de 1,5 metro que voc?? foi movido.</p><p> Essa magia n??o tem efeito se voc?? conjur??-la enquanto estiver no Plano Et??reo ou um plano que n??o fa??a fronteira com ele, como um dos Planos Exteriores.</p><p><strong> Em N??veis Superiores </strong>. Quando voc?? conjurar essa magia usando um espa??o de magia de 8?? n??vel ou superior, voc?? pode afetar at?? tr??s criaturas volunt??ria (incluindo voc??) para cada n??vel do espa??o acima do 7??. As criaturas devem estar a at?? 3 metros de voc?? quando voc?? conjurar a magia.","classes":["Bardo","Bruxo","Cl??rigo","Feiticeiro","Mago"],"favorite":false},{"id":171,"level":"3","name":"Forma Gasosa","name_en":"Gaseous Form","school":{"pt":"Transmuta????o","style":"transmutation"},"castingTime":"1 a????o","range":"toque","components":"V, S, M","concentration":"s","duration":"at?? 1 hora","material":"um pouco de gaze e um pouco de fuma??a","description":"Voc?? transforma uma criatura volunt??ria que voc?? tocar, junto com tudo que ela estiver vestindo e carregando, em uma nuvem nebulosa, pela dura????o. A magia termina se a criatura cair a 0 pontos de vida. Uma criatura incorp??rea n??o pode ser afetada.</p><p> Enquanto estiver nessa forma, o ??nico meio de movimenta????o do alvo ?? 3 metros de deslocamento de voo. O alvo pode entrar e ocupar o espa??o de outra criatura. O alvo tem resist??ncia a dano n??o - m??gico e tem vantagem em testes de resist??ncia de For??a, Destreza e Constitui????o. O alvo pode passar atrav??s de pequenos buracos, aberturas estreitas e, at?? mesmo, meras rachaduras, embora ele trate l??quidos como se fossem superf??cies s??lidas. O alvo n??o pode cair e se mant??m flutuando no ar, mesmo se estiver atordoado ou incapacitado de alguma outra forma.</p><p> Enquanto estiver na forma de uma nuvem nebulosa, o alvo n??o pode falar ou manipular objetos e, quaisquer objetos que ele estava carregando ou segurando n??o pode ser derrubado, usado ou, de outra forma, interagido. O alvo n??o pode atacar ou conjurar magias.","classes":["Bruxo","Feiticeiro","Mago"],"favorite":false},{"id":335,"level":"8","name":"Formas Animais","name_en":"Animal Shapes","school":{"pt":"Transmuta????o","style":"transmutation"},"castingTime":"1 a????o","range":"9 metros","components":"V, S","concentration":"s","duration":"at?? 24 horas","description":"Sua magia transforma voc?? em bestas. Escolha qualquer quantidade de criaturas volunt??rias que voc?? possa ver, o alcance. Voc?? muda cada alvo para a forma de uma besta Grande ou menor, com um n??vel de desafio de 4 ou inferior. Nos turnos subsequentes, voc?? pode usar sua a????o para mudar uma criatura afetada para uma nova forma.</p><p> A transforma????o permanece pela dura????o para cada alvo, ou at?? o alvo cair para 0 pontos de vida ou morrer. Voc?? pode escolher uma forma diferente para cada alvo. As estat??sticas de jogo do alvo s??o substitu??das pelas estat??sticas da besta escolhida, mas o alvo mant??m sua tend??ncia e valores de Intelig??ncia, Sabedoria e Carisma. O alvo adquire os pontos de vida da sua nova forma, e quando ele reverte para sua forma normal, ele volta aos pontos de vida que tinha antes de ser transformado. Se ele reverter como resultado de ter ca??do a 0 pontos de vida, todo dano excedente ?? recebido pela sua forma normal. Contato que o dano excedente n??o reduza os pontos de vida da forma normal da criatura a 0, ela n??o cair?? inconsciente. A criatura ?? limitada em suas a????es pela natureza da sua nova forma e ela n??o pode falar nem conjurar magias.</p><p> O equipamento do alvo mescla - se a sua nova forma. O alvo n??o pode ativar, empunhar ou, de outra forma, se beneficiar de qualquer de seus equipamentos.","classes":["Druida"],"favorite":false},{"id":172,"level":"3","name":"Glifo de Vigil??ncia","name_en":"Glyph Of Warding","school":{"pt":"Abjura????o","style":"abjuration"},"castingTime":"1 hora","range":"toque","components":"V, S, M","duration":"at?? ser dissipada ou ativada","material":"incenso e p?? de diamante valendo, no m??nimo, 200 po, consumidos pela magia","description":"Quando voc?? conjura essa magia, voc?? inscreve um glifo que fere outras criaturas, tanto sobre uma superf??cie (como uma mesa ou uma sec????o de piso ou parede) quanto dentro de um objeto que possa ser fechado (como um livro, um pergaminho ou um ba?? d tesouro) para ocultar o glifo. Se voc?? escolher uma superf??cie, o glifo pode cobrir uma ??rea da superf??cie n??o superior a 3 metros de di??metro. Se voc?? escolher um objeto, o objeto deve permanecer no seu local, se ele for movido mais de 3 metros de onde voc?? conjurou essa magia, o glifo ser?? quebrado e a magia termina sem ser ativada.</p><p> O glifo ?? quase invis??vel e requer um teste de Intelig??ncia (Investiga????o) contra a CD da magia para ser encontrado.</p><p> Voc?? define o que ativa o glifo quando voc?? conjura a magia. Para glifos inscritos em uma superf??cie, os gatilhos mais t??picos incluem tocar ou ficar sobre o glifo, remover outro objeto cobrindo o glifo, aproximar - se a uma certa dist??ncia do glifo ou manipular um objeto onde o glifo esteja inscrito. Para glifos inscritos dentro de objetos, os gatilhos mais comuns incluem abrir o objeto, aproximar - se a uma certa dist??ncia do objeto ou ver ou ler o glifo. Uma vez que o glifo seja ativado, a magia termina. Voc?? pode, posteriormente, aperfei??oar o gatilho para que a magia se ative apenas sob certas circunst??ncias ou de acordo com as caracter??sticas f??sicas (como altura ou peso), tipo de criatura (por exemplo, a prote????o poderia ser definida para afetar aberra????es ou drow) ou tend??ncia. Voc?? pode, tamb??m, definir condi????es para criaturas n??o ativarem o glifo, como aqueles que falarem determinada senha.</p><p> Quando voc?? inscreve o glifo, escolha <em> runas explosivas </em> ou <em> glifo de magia </em>.</p><p><em><strong> Runas Explosivas </strong></ em>. Quando ativado, o glifo irrompe com energia m??gica numa esfera com 6 metros de raio, centrada no glifo. A esfera se espalha, dobrando esquinas. Cada criatura na ??rea deve realizar um teste de resist??ncia de Destreza. Uma criatura sofre 5d8 de dano de ??cido, el??trico, fogo, frio ou trovejante se falhar no teste de resist??ncia (voc?? escolhe o tipo quando cria o glifo) ou metade desse dano se obtiver sucesso.</p><p><em><strong> Glifo de Magia </strong></ em>. Voc?? pode armazenar uma magia preparada de 3?? n??vel ou inferior no glifo ao conjur??-la como parte da cria????o do glifo. A magia a ser armazenada n??o tem efeito imediato quando conjurada dessa forma. Quando o glifo for ativado, a magia armazenada ?? conjurada. Se a magia tiver um alvo, esse alvo ser?? a criatura que ativou o glifo. Se a magia afetar uma ??rea, a ??rea ser?? centrada na criatura. Se a magia invocar criaturas hostis ou criar objetos ou armadilhas nocivos, eles aparecer??o o mais pr??ximo poss??vel do intruso e o atacar??o. Se a magia precisar de concentra????o, ela dura o m??ximo poss??vel da sua dura????o.</p><p><strong> Em N??veis Superiores </strong>. Quando voc?? conjurar essa magia usando um espa??o de magia de 4?? n??vel ou superior, o dano do glifo de <em> runas explosivas </em> aumenta em 1d8 para cada n??vel do espa??o acima do 3??. Se voc?? criar um <em> glifo de magia </em>, voc?? pode armazenar qualquer magia do mesmo n??vel, ou inferior, do espa??o que voc?? usar para o <em> glifo de vigil??ncia </em>.</p> ","classes":["Bardo","Cl??rigo","Mago"],"favorite":false},{"id":292,"level":"6","name":"Globo de Invulnerabilidade","name_en":"Globe Of Invunerability","school":{"pt":"Abjura????o","style":"abjuration"},"castingTime":"1 a????o","range":"pessoal","components":"V, S, M","concentration":"s","duration":"at?? 1 minuto","material":"uma perola de vidro ou cristal que se despeda??a quando a magia termina","description":"Uma barreira im??vel, levemente cintilante, surge do nada num raio de 3 metros centrado em voc?? e permanece pela dura????o.</p><p> Qualquer magia de 5?? n??vel ou inferior conjurada de fora da barreira n??o poder?? afetar as criaturas ou objetos dentro dela, mesmo que a magia seja conjurada usando um espa??o de magia de n??vel superior. Tais magias podem ter como alvo criaturas e objetos dentro da barreira, mas a magia n??o produz nenhum efeito neles. Similarmente, a ??rea dentro da barreira ?? exclu??da das ??reas afetadas por tais magias.</p><p><strong> Em N??veis Superiores </strong>. Quando voc?? conjurar essa magia usando um espa??o de magia de 7?? n??vel ou superior, a barreira bloqueia magias de um n??vel superior para cada n??vel do espa??o acima do 6??.","classes":["Feiticeiro","Mago"],"favorite":false},{"id":10,"level":"0","name":"Globos de Luz","name_en":"Dancing Lights","school":{"pt":"Evoca????o","style":"evocation"},"castingTime":"1 a????o","range":"36 metros","components":"V, S, M","concentration":"s","duration":"at?? 1 minuto","material":"um pouco de f??sforo ou wychwood ou um inseto luminoso","description":"Voc?? cria at?? quatro luzes do tamanho de tochas dentro do alcance, fazendo - as parecerem tochas, lanternas ou esferas luminosas que flutuam no ar pela dura????o. Voc?? tamb??m pode combinar as quatro luzes em uma forma luminosa, vagamente humanoide, de tamanho M??dio. Qualquer que seja a forma que voc?? escolher, cada luz produz penumbra num raio de 3 metros.</p><p> Com uma a????o b??nus, no seu turno, voc?? pode mover as luzes, at?? 18 metros, para um novo local dentro do alcance. Uma luz deve estar a, pelo menos, 6 metros de outra luz criada por essa magia e uma luz some se exceder o alcance da magia.","classes":["Bardo","Feiticeiro","Mago"],"favorite":false},{"id":59,"level":"1","name":"Golpe Constritor","name_en":"Ensnaring Strike","school":{"pt":"Conjura????o","style":"conjuration"},"castingTime":"1 a????o b??nus","range":"pessoal","components":"V","concentration":"s","duration":"at?? 1 minuto","description":"Da pr??xima vez que voc?? atingir uma criatura com um ataque com arma, antes do final da magia, um emaranhado maci??o de vinhas espinhentas aparecem no local do impacto e o alvo deve ser bem sucedido num teste de resist??ncia de For??a ou ficar?? impedido pelas vinhas m??gicas, at?? o fim da magia. Uma criatura Grande ou maior tem vantagem no seu teste de resist??ncia. Se o alvo for bem sucedido na resist??ncia, as vinhas murchar??o.</p><p> Enquanto estiver impedido pela magia, um alvo sofre 1d6 de dano perfurante no in??cio de cada um dos turnos dele. Uma criatura impedida pelas vinhas ou uma que possa tocar a criatura, pode usar sua a????o para realizar um teste de For??a contra a CD da magia. Num sucesso, o alvo ?? libertado.</p><p><strong> Em N??veis Superiores </strong>. Se voc?? conjurar essa magia usando um espa??o de magia de 2?? n??vel ou superior, o dano aumenta em 1d6 para cada n??vel do espa??o acima do 1??.","classes":["Patrulheiro"],"favorite":false},{"id":215,"level":"4","name":"Guardi??o da F??","name_en":"Guardian of Faith","school":{"pt":"Conjura????o","style":"conjuration"},"castingTime":"1 a????o","range":"9 metros","components":"V","duration":"8 horas","description":"Um guardi??o espectral Grande aparece e flutua, pela dura????o, em um espa??o desocupado, ?? sua escolha, que voc?? possa ver dentro do alcance. O guardi??o ocupa esse espa??o e ?? indistinto, exceto por uma espada reluzente e um escudo brasonado com o s??mbolo da sua divindade.</p><p> Qualquer criatura hostil a voc?? que se mover para um espa??o a at?? 3 metros do guardi??o pela primeira vez em um turno, deve ser bem sucedida num teste de resist??ncia de Destreza. A criatura sofre 20 de dano radiante se falhar na resist??ncia ou metade desse dano se obtiver sucesso. O guardi??o desaparece ap??s ter causado um total de 60 de dano.","classes":["Cl??rigo"],"favorite":false},{"id":60,"level":"1","name":"Hero??smo","name_en":"Heroism","school":{"pt":"Encantamento","style":"enchantment"},"castingTime":"1 a????o","range":"toque","components":"V, S","concentration":"s","duration":"at?? 1 minuto","description":"Uma criatura volunt??ria que voc?? tocar ?? imbu??da com bravura. At?? a magia acabar, a criatura ?? imune a ser amedrontada e ganha pontos de vida tempor??rios igual ao seu modificador de habilidade de conjura????o, no in??cio de cada turno dela. Quando a magia acabar, o alvo perde qualquer ponto de vida tempor??rio restante dessa magia.</p><p><strong> Em N??veis Superiores </strong>. Quando voc?? conjurar essa magia usando um espa??o de magia de 2?? n??vel ou superior, voc?? pode afetar uma criatura adicional para cada n??vel do espa??o acima do 1??.","classes":["Bardo","Paladino"],"favorite":false},{"id":61,"level":"1","name":"Identifica????o","name_en":"Identify","ritual":"s","school":{"pt":"Adivinha????o","style":"divination"},"castingTime":"1 minuto","range":"toque","components":"V, S, M","duration":"instant??nea","material":"uma perola valendo, no m??nimo, 100 po e uma pena de coruja","description":"Voc?? escolhe um objeto que voc?? deve tocar durante toda a conjura????o da magia. Se ele for um item m??gico ou algum outro objeto imbu??do por magia, voc?? descobre suas propriedades e como us?? - lo, se exige sintonia para ser usado e quantas cargas ele tem, se aplic??vel. Voc?? descobre se quaisquer magias est??o afetando o item e quais eles s??o. Se o item foi criado por magia, voc?? descobre que magia o criou.</p><p> Se voc??, ao inv??s, tocar uma criatura durante toda a conjura????o, voc?? descobre quais magias, se houver alguma, est??o afetando - a atualmente.","classes":["Bardo","Mago"],"favorite":false},{"id":173,"level":"3","name":"Idiomas","name_en":"Tongues","school":{"pt":"Adivinha????o","style":"divination"},"castingTime":"1 a????o","range":"toque","components":"V, M","duration":"1 hora","material":"uma pequena est??tua de argila de um zigurate","description":"Essa magia garante a criatura que voc?? tocar a habilidade de compreender e falar o idioma que ela ouvir. Al??m disso, quando o alvo fala, qualquer criatura que saiba, pelo menos, um idioma pode ouvir o alvo e compreender o que ele diz.","classes":["Bardo","Bruxo","Cl??rigo","Feiticeiro","Mago"],"favorite":false},{"id":11,"level":"0","name":"Ilus??o Menor","name_en":"Minor Illusion","school":{"pt":"Ilus??o","style":"illusion"},"castingTime":"1 a????o","range":"9 metros","components":"V, M","duration":"1 minuto","material":"um pouco de l??","description":"Voc?? cria um som ou uma imagem de um objeto, dentro do alcance, que permanece pela dura????o. A ilus??o tamb??m termina se voc?? dissip??-la usando uma a????o ou conjurar essa magia novamente.</p><p> Se voc?? criar um som, seu volume pode variar entre um sussurro at?? um grito. Pode ser a sua voz, a voz de outrem, o rugido de um le??o, batidas de tambor ou qualquer outro som que voc?? quiser. O som permanece no mesmo volume durante toda dura????o ou voc?? pode fazer sons distintos em momentos diferentes, antes da magia acabar.</p><p> Se voc?? criar uma imagem de um objeto??? como uma cadeira, pegadas de lama ou um pequeno ba????? ela n??o pode ter mais de 1,5 metro c??bico. A imagem n??o pode produzir som, luz, cheiro ou qualquer outro efeito sensorial. Intera????o f??sica com a imagem revelar?? que ela ?? uma ilus??o, j?? que as coisas podem atravess??-la. Se uma criatura usar sua a????o para examinar a imagem, ela pode determinar que ela ?? uma ilus??o se obtiver sucesso num teste de Intelig??ncia (Investiga????o) contra a CD da magia. Se uma criatura discernir a ilus??o como sendo isso, a ilus??o se tornar?? suave para a criatura.","classes":["Bardo","Bruxo","Feiticeiro","Mago"],"favorite":false},{"id":293,"level":"6","name":"Ilus??o Programada","name_en":"Programmed Illusion","school":{"pt":"Ilus??o","style":"illusion"},"castingTime":"1 a????o","range":"36 metros","components":"V, S, M","duration":"at?? ser dissipada","material":"um pouco de l?? e p?? de jade valendo, no m??nimo, 25 po","description":"Voc?? cria uma ilus??o de um objeto, uma criatura ou de algum outro fen??meno vis??vel, dentro do alcance, que se ativa quando uma condi????o especifica ocorre. A ilus??o ?? impercept??vel at?? esse momento. Ela n??o pode ter mais de 9 metros c??bicos e voc?? decide, quando conjura a magia, como a ilus??o se comporta e quais sons ela faz. Essa performance roteirizada por durar at?? 5 minutos.</p><p> Quando a condi????o que voc?? especificou ocorrer, a ilus??o surge do nada e age da maneira que voc?? descreveu. Uma vez que a ilus??o tenha acabado de agir, ela desaparece e permanece dormente por 10 minutos. Ap??s desse per??odo, a ilus??o pode se ativar novamente.</p><p> A condi????o de ativa????o pode ser t??o gen??rica ou t??o detalhada quando voc?? quiser, apesar de ela precisar ser baseada em condi????es visuais ou aud??veis que ocorram a at?? 9 metros da ??rea. Por exemplo, voc?? poderia criar uma ilus??o, de si mesmo, que aparecer?? e avisar?? a outros que tentarem abrir a porta com armadilha ou voc?? pode programar a ilus??o para se ativar apenas quando uma criatura disser a palavra ou frase correta.</p><p> Intera????o f??sica com a imagem revelar?? ela como sendo uma ilus??o, j?? que as coisas podem atravess??-la. Uma criatura que usar sua a????o para examinar a imagem, pode determinar que ela ?? uma ilus??o sendo bem sucedida num teste de Intelig??ncia (Investiga????o) contra a CD da magia para desacredit??-la. Se a criatura discernir a ilus??o como ela ??, a criatura poder?? ver atrav??s da imagem e qualquer barulho que ela fizer soar?? oco para a criatura.","classes":["Bardo","Mago"],"favorite":false},{"id":174,"level":"3","name":"Imagem Maior","name_en":"Major Image","school":{"pt":"Ilus??o","style":"illusion"},"castingTime":"1 a????o","range":"36 metros","components":"V, S, M","concentration":"s","duration":"at?? 10 minutos","material":"um peda??o de l??","description":"Voc?? cria uma imagem de um objeto, uma criatura ou algum outro fen??meno vis??vel que n??o tenha mais de 6 metros c??bicos. A imagem aparece em um local que voc?? possa ver, dentro do alcance e permanece pela dura????o. Ela parece completamente real, incluindo sons, cheiros e temperatura apropriados para a coisa retratada. Voc?? n??o pode criar calo ou frio suficiente para causar dano, um som alto o suficiente para causar dano trovejante ou ensurdecer uma criatura ou um cheiro que poderia nausear uma criatura (como o fedor de um troglodita).</p><p> Enquanto voc?? estiver dentro do alcance da ilus??o, voc?? pode usar sua a????o pra fazer a imagem se mover para qualquer outro local dentro do alcance. ?? medida que a imagem muda de lugar, voc?? pode alterar a apar??ncia dela para que seu movimento pare??a ser o natural para a imagem. Por exemplo, se voc?? criar uma imagem de uma criatura e move - la, voc?? pode alterar a imagem para que ela pare??a estar andando. Similarmente, voc?? pode fazer a ilus??o emitir sons diferentes em momentos diferentes, sendo poss??vel at?? mesmo manter uma conversa, por exemplo.</p><p> Intera????o f??sica com a imagem, revelar?? que ela ?? uma ilus??o, j?? que as coisas podem passar atrav??s dela. Uma criatura que usar sua a????o para examinar a imagem, pode determinar que ela ?? uma ilus??o com um teste de Intelig??ncia (Investiga????o) bem sucedido contra a CD da magia. Se uma criatura discernir a ilus??o como sendo isso, a criatura ver?? atrav??s da imagem e suas outras qualidades sensoriais se tornaram suaves para a criatura.</p><p><strong> Em N??veis Superiores </strong>. Quando voc?? conjurar essa magia usando um espa??o de magia de 6?? n??vel ou superior, a magia ir?? durar at?? ser dissipada, sem necessitar da sua concentra????o.","classes":["Bardo","Bruxo","Feiticeiro","Mago"],"favorite":false},{"id":62,"level":"1","name":"Imagem Silenciosa","name_en":"Silent Image","school":{"pt":"Ilus??o","style":"illusion"},"castingTime":"1 a????o","range":"18 metros","components":"V, S, M","concentration":"s","duration":"at?? 10 minutos","material":"um pouco de l??","description":"Voc?? cria a imagem de um objeto, criatura ou outro fen??meno visual que n??o tenha mais de 4, 5 metros c??bicos. A imagem aparece num ponto, dentro do alcan??a, e permanece pela dura????o. A imagem ?? puramente visual, n??o ?? acompanhada por som, cheiro ou outros efeitos sensoriais.</p><p> Voc?? pode usar sua a????o para fazer a imagem se mover para qualquer ponto, dentro do alcance. ?? medida que a imagem muda de lugar, voc?? pode alterar a apar??ncia dela para que seu movimento pare??a ser o natural para a imagem. Por exemplo, se voc?? criar uma imagem de uma criatura e move - la, voc?? pode alterar a imagem para que ela pare??a estar andando.</p><p> Intera????o f??sica com a imagem, revelar?? que ela ?? uma ilus??o, j?? que as coisas podem passar atrav??s dela. Uma criatura que usar sua a????o para examinar a imagem, pode determinar que ela ?? uma ilus??o com um teste de Intelig??ncia (Investiga????o) bem sucedido contra a CD da magia. Se uma criatura discernir a ilus??o como sendo isso, a criatura poder?? ver atrav??s da imagem.","classes":["Bardo","Feiticeiro","Mago"],"favorite":false},{"id":257,"level":"5","name":"Imobilizar Monstro","name_en":"Hold Monster","school":{"pt":"Encantamento","style":"enchantment"},"castingTime":"1 a????o","range":"27 metros","components":"V, S, M","concentration":"s","duration":"at?? 1 minuto","material":"uma pequena pe??a de ferro reta","description":"Escolha uma criatura que voc?? possa ver, dentro do alcance. O alvo deve ser bem sucedido num teste de resist??ncia de Sabedoria ou ficar?? paralisado pela dura????o. Essa magia n??o tem efeito em mortos - vivos. No final de cada um dos turnos dele, o alvo pode realizar outro teste de resist??ncia de Sabedoria. Se obtiver sucesso, a magia termina no alvo.</p><p><strong> Em N??veis Superiores </strong>. Quando voc?? conjurar essa magia usando um espa??o de magia de 6?? n??vel ou superior, voc?? pode afetar uma criatura adicional para cada n??vel de magia acima do 5??. As criaturas devem estar a 9 metros entre si para serem afetadas.","classes":["Bardo","Bruxo","Feiticeiro","Mago"],"favorite":false},{"id":116,"level":"2","name":"Imobilizar Pessoa","name_en":"Hold Person","school":{"pt":"Encantamento","style":"enchantment"},"castingTime":"1 a????o","range":"18 metros","components":"V, S, M","concentration":"s","duration":"at?? 1 minuto","material":"uma pequena pe??a de ferro reta","description":"Escolha um humanoide que voc?? possa ver, dentro do alcance. O alvo deve ser bem sucedido num teste de resist??ncia de Sabedoria ou ficar?? paralisado pela dura????o. Essa magia n??o tem efeito em mortos - vivos. No final de cada um dos turnos dele, o alvo pode realizar outro teste de resist??ncia de Sabedoria. Se obtiver sucesso, a magia termina no alvo.</p><p><strong> Em N??veis Superiores </strong>. Quando voc?? conjurar essa magia usando um espa??o de magia de 3?? n??vel ou superior, voc?? pode afetar um humanoide adicional para cada n??vel de magia acima do 2??. Os humanoides devem estar a 9 metros entre si para serem afetados.","classes":["Bardo","Bruxo","Cl??rigo","Druida","Feiticeiro","Mago"],"favorite":false},{"id":63,"level":"1","name":"Infligir Ferimentos","name_en":"Inflict Wounds","school":{"pt":"Necromancia","style":"necromancy"},"castingTime":"1 a????o","range":"toque","components":"V, S","duration":"instant??nea","description":"Fa??a um ataque corpo - a - corpo com magia contra uma criatura dentro do alcance. Se atingir, o alvo sofre 3d10 de dano necr??tico.</p><p><strong> Em N??veis Superiores </strong>. Quando voc?? conjurar essa magia usando um espa??o de magia de 2?? n??vel ou superior, o dano aumenta em 1d10 para cada n??vel acima do 1??.","classes":[],"favorite":false},{"id":216,"level":"4","name":"Inseto Gigante","name_en":"Giant Insect","school":{"pt":"Transmuta????o","style":"transmutation"},"castingTime":"1 a????o","range":"9 metros","components":"V, S","concentration":"s","duration":"at?? 10 minutos","description":"Voc?? transforma at?? dez centopeias, tr??s aranhas, cinco vespas ou um escorpi??o, dentro do alcance, em vers??es gigantes das suas formas naturais, pela dura????o. Uma centopeia se torna uma centopeia gigante, uma aranha se torna uma aranha gigante, uma vespa se torna uma vespa gigante e um escorpi??o se torna um escorpi??o gigante.</p><p> Cada criatura obedece aos seus comando verbais e, em combate, elas agem no seu turno a cada rodada. O Mestre possui as estat??sticas dessas criaturas e determina suas a????es e movimenta????o.</p><p> Uma criatura permanece no tamanho gigante pela dura????o, ou at?? cair a 0 pontos de vida ou at?? voc?? usar sua a????o para dissipar o efeito nela.</p><p> O Mestre pode permitir que voc?? escolha alvos diferentes. Por exemplo, se voc?? transformar uma abelha, sua vers??o gigante poderia ter as mesmas estat??sticas da vespa gigante.","classes":["Druida"],"favorite":false},{"id":312,"level":"7","name":"Inverter a Gravidade","name_en":"Reverse Gravity","school":{"pt":"Transmuta????o","style":"transmutation"},"castingTime":"1 a????o","range":"30 metros","components":"V, S, M","concentration":"s","duration":"at?? 1 minuto","material":"um ??m?? e limalhas de ferro","description":"Essa magia inverte a gravidade num cilindro de 15 metros de raio por 30 metros de altura, centrado num ponto dentro do alcance. Todas as criaturas e objetos que n??o esteja, de alguma forma, presos ao solo na ??rea, caem para cima e alcan??am o topo da ??rea, quando voc?? conjura essa magia. Uma criatura pode fazer um teste de resist??ncia de Destreza para se agarrar em algum objeto fixo que ela possa alcan??ar, assim, evitando a queda.</p><p> Se algum objeto s??lido (como um teto) for encontrado durante essa queda, objetos e criaturas caindo atingem ele, exatamente como fariam durante uma queda normal. Se um objeto ou criatura alcan??ar o topo da ??rea sem atingir nada, ele permanecer?? l??, oscilando ligeiramente, pela dura????o.</p><p> No final da dura????o, objetos e criaturas afetadas caem de volta para baixo.","classes":["Druida","Feiticeiro","Mago"],"favorite":false},{"id":117,"level":"2","name":"Invisibilidade","name_en":"Invisibility","school":{"pt":"Ilus??o","style":"illusion"},"castingTime":"1 a????o","range":"toque","components":"V, S, M","concentration":"s","duration":"at?? 1 hora","material":"uma pestana envolta em goma- ar??bica","description":"Uma criatura que voc?? tocar, se torna invis??vel at?? a magia acabar. Qualquer coisa que o alvo esteja vestindo ou carregando fica invis??vel enquanto estiver de posse do alvo. A magia termina para o alvo caso ele ataque ou conjure uma magia.</p><p><strong> Em N??veis Superiores </strong>. Quando voc?? conjurar essa magia usando um espa??o de magia de 3?? n??vel ou superior, voc?? pode afetar um alvo adicional para cada n??vel do espa??o acima do 2??.","classes":["Bardo","Bruxo","Feiticeiro","Mago"],"favorite":false},{"id":217,"level":"4","name":"Invisibilidade Maior","name_en":"Greater Invisibility","school":{"pt":"Ilus??o","style":"illusion"},"castingTime":"1 a????o","range":"toque","components":"V, S","concentration":"s","duration":"at?? 1 minuto","description":"Voc?? ou uma criatura que voc?? possa tocar, se torna invis??vel at?? a magia acabar. Qualquer coisa que o alvo estiver vestindo ou carregando fica invis??vel enquanto estiver de posse do alvo.","classes":["Bardo","Feiticeiro","Mago"],"favorite":false},{"id":294,"level":"6","name":"Invoca????o Instant??nea de Drawmij","name_en":"Drawmij's Instant Summons","ritual":"s","school":{"pt":"Conjura????o","style":"conjuration"},"castingTime":"1 minuto","range":"toque","components":"V, S, M","duration":"at?? ser dissipada","material":"uma safira no valor de 1. 000 po","description":"Voc?? toca um objeto pesando 5 quilos ou menos com maior dimens??o de 1, 8 metro ou menos. A magia deixa uma marca invis??vel na sua superf??cie e grava invisivelmente o nome do item na safira que voc?? usou como componente material. A cada vez que voc?? conjurar essa magia, voc?? deve usar uma safira diferente.</p><p> A qualquer momento, posteriormente, voc?? pode usar sua a????o para falar o nome do item e esmagar a safira. O item aparece instantaneamente em suas m??os, independentemente de dist??ncias f??sicas ou planares, e a magia termina.</p><p> Se outra criatura estiver segurando ou carregando o item, esmagar a safira n??o ir?? transportar o item at?? voc??, ao inv??s disso, voc?? descobre quem ?? a criatura possuindo o objeto e onde, vagamente, a criatura est?? localizada no momento.</p><p><em> Dissipar magia </em> ou um efeito similar aplicado com sucesso na safira, termina o efeito da magia.</p> ","classes":["Mago"],"favorite":false},{"id":313,"level":"7","name":"Isolamento","name_en":"Sequester","school":{"pt":"Transmuta????o","style":"transmutation"},"castingTime":"1 a????o","range":"toque","components":"V, S, M","duration":"at?? ser dissipada","material":"um composto de p??s de diamante, esmeralda, rubi e safira valendo, no m??nimo, 5. 000 po, consumidos pela magia","description":"Atrav??s dessa magia, uma criatura volunt??ria ou um objeto, pode ser escondido, seguro contra detec????o pela dura????o. Quando voc?? conjura essa magia e toca o alvo, ele fica invis??vel e n??o pode ser alvo de magias de adivinha????o ou percebido atrav??s de sensores de vid??ncia criados por magias de adivinha????o.</p><p> Se o alvo for uma criatura, ela entra num estado de anima????o suspensa. O tempo para de fluir para ela e ela n??o envelhece.</p><p> Voc?? pode determinar uma condi????o para que a magia termine prematuramente. A condi????o pode ser qualquer coisa, ?? sua escolha, mas deve ocorrer ou ser vis??vel a at?? 1,5 quil??metro do alvo. Exemplos incluem??? depois de 1. 000 anos??? ou??? quando o tarrasque despertar???. Essa magia tamb??m acaba se o alvo sofrer qualquer dano.","classes":["Mago"],"favorite":false},{"id":336,"level":"8","name":"Labirinto","name_en":"Maze","school":{"pt":"Conjura????o","style":"conjuration"},"castingTime":"1 a????o","range":"18 metros","components":"V, S","concentration":"s","duration":"at?? 10 minutos","description":"Voc?? bane uma criatura que voc?? possa ver, dentro do alcance, para um semiplano labir??ntico. O alvo permanece l?? pela dura????o ou at?? escapar do labirinto.</p><p> O alvo pode usar sua a????o para tentar escapar. Quando o fizer, ele realiza um teste de Intelig??ncia com CD 20. Se for bem sucedido, ele escapa e a magia termina (um minotauro ou um dem??nio goristro, obt??m sucesso automaticamente).</p><p> Quando a magia termina, o alvo reaparece no espa??o que ela estava ou, se o espa??o estiver ocupado, no espa??o desocupado mais pr??ximo.","classes":["Mago"],"favorite":false},{"id":118,"level":"2","name":"L??mina Flamejante","name_en":"Flame Blade","school":{"pt":"Evoca????o","style":"evocation"},"castingTime":"1 a????o b??nus","range":"pessoal","components":"V, S, M","concentration":"s","duration":"at?? 10 minutos","material":"folha de sumagre","description":"Voc?? evoca uma l??mina ardente em sua m??o livre. A l??mina ?? similar em tamanho e formato a uma cimitarra e ela permanece pela dura????o. Se voc?? soltar a l??mina, ela desaparece, mas voc?? pode evocar a l??mina novamente com uma a????o b??nus.</p><p> Voc?? pode usar sua a????o para realizar ataques corpo - a - corpo com magia com a l??mina ardente. Se atingir, o alvo sofrer?? 3d6 de dano de fogo.</p><p> A l??mina flamejante emite luz plena a 3 metros de raio e penumbra por mais 3 metros adicionais.</p><p><strong> Em N??veis Superiores </strong>. Quando voc?? conjurar essa magia usando um espa??o de magia de 4?? n??vel ou superior, o dano aumenta em 1d6 para cada dois n??veis do espa??o acima do 2??.","classes":["Druida"],"favorite":false},{"id":175,"level":"3","name":"Lentid??o","name_en":"Slow","school":{"pt":"Transmuta????o","style":"transmutation"},"castingTime":"1 a????o","range":"36 metros","components":"V, S, M","concentration":"s","duration":"at?? 1 minuto","material":"uma gota de mela??o","description":"Voc?? altera o tempo ao redor de at?? seis criaturas, ?? sua escolha, num cubo de 12 metros, dentro do alcance. Cada criatura deve ser bem sucedida num teste de resist??ncia de Sabedoria ou ser?? afetada por essa magia pela dura????o.</p><p> O deslocamento de um alvo afetado ?? reduzido ?? metade, ele sofre??? 2 de penalidade na CA e nos testes de resist??ncia de Destreza e n??o pode usar rea????es. No turno dele, ele pode usar ou uma a????o ou uma a????o b??nus, mas n??o ambas. Independentemente das habilidades ou itens m??gicos da criatura, ela n??o poder?? realizar mais de um ataque corpo - a - corpo ou ?? dist??ncia durante o turno dela.</p><p> Se a criatura tentar conjurar uma magia com tempo de conjura????o maior que 1 rodada, jogue 1d20. Se cair 11 ou maior, a magia n??o surte efeito at?? o pr??ximo turno da criatura e a criatura deve usar sua a????o nesse turno para completar a magia. Se ela n??o puder, a magia ?? perdida.</p><p> Uma criatura afetada por essa magia faz outro teste de resist??ncia de Sabedoria no final do turno dela. Se passar na resist??ncia, o efeito acaba nela.","classes":["Feiticeiro","Mago"],"favorite":false},{"id":64,"level":"1","name":"Leque Crom??tico","name_en":"Color Spray","school":{"pt":"Ilus??o","style":"illusion"},"castingTime":"1 a????o","range":"pessoal","components":"V, S, M","duration":"1 rodada","material":"um punhado de p?? ou areia nas cores vermelha, amarela e azul","description":"Um feixe ofuscante de luzes coloridas ordenadas, surge da sua m??o. Role 6d10, o total ?? a quantidade de pontos de vida de criaturas que essa magia pode afetar. As criaturas num cone de 4, 5 metros, originado de voc??, s??o afetadas em ordem ascendente dos seus pontos de vida (ignorando criaturas inconsciente e que n??o podem ver).</p><p> Come??ando com as criaturas que tiverem menos pontos de vida, cada criatura afetada por essa magia ficar?? cega at?? o fim da magia. Subtraia os pontos de vida de cada criatura do total antes de considerar os pontos de vida da pr??xima criatura. Os pontos de vida de uma criatura devem ser iguais ou menores que o total restante para que essa criatura seja afetada </p><p><strong> Em N??veis Superiores </strong>. Se voc?? conjurar essa magia usando um espa??o de magia de 2?? n??vel ou superior, jogue 2d10 adicionais para cada n??vel do espa??o acima do 1??.","classes":["Feiticeiro","Mago"],"favorite":false},{"id":119,"level":"2","name":"Levita????o","name_en":"Levitate","school":{"pt":"Transmuta????o","style":"transmutation"},"castingTime":"1 a????o","range":"18 metros","components":"V, S, M","concentration":"s","duration":"at?? 10 minutos","material":"uma pequena presilha de couro ou um peda??o de fio dourado dobrado em forma de copo com uma haste longa em uma extremidade","description":"Uma criatura ou objeto, ?? sua escolha, que voc?? possa ver, dentro do alcance, ergue - se verticalmente, at?? 6 metros e permanece suspenso l?? pela dura????o. A magia pode levitar um alvo pesando at?? 250 quilos. Uma criatura involunt??ria que for bem sucedida num teste de resist??ncia de Constitui????o n??o ?? afetada </p><p> O alvo pode se mover apenas ao puxar ou empurrar um objeto fixo ou superf??cie ao seu alcance (como um muro ou teto), permitindo que ele se mova como se estivesse escalando. Voc?? pode mudar a altitude do alvo em at?? 6 metros em ambas as dire????es no seu turno. Se voc?? for o alvo, voc?? pode se mover para cima ou para baixo como parte do seu movimento. Do contr??rio, voc?? precisa usar sua a????o para mover o alvo, que deve permanecer dentro do alcance da magia.</p><p> Quando a magia acaba, o alvo flutua suavemente at?? o ch??o, se ele ainda estiver no ar.","classes":["Feiticeiro","Mago"],"favorite":false},{"id":258,"level":"5","name":"Liga????o Telep??tica de Rary","name_en":"Rary's Telepathic Bond","ritual":"s","school":{"pt":"Adivinha????o","style":"divination"},"castingTime":"1 a????o","range":"9 metros","components":"V, S, M","duration":"1 hora","material":"peda??os de cascas de ovos de dois tipos diferentes de criatura","description":"Voc?? forja uma liga????o telep??tica entre at?? oito criaturas volunt??rias, ?? sua escolha, dentro do alcance, ligando psiquicamente cada criatura a todas as outras, pela dura????o. Criaturas com valores de Intelig??ncia 2 ou menos n??o s??o afetadas por essa magia.</p><p> At?? a magia acabar, os alvos podem se comunicar telepaticamente atrav??s do elo, independentemente de terem ou n??o um idioma em comum. A comunica????o ?? poss??vel a qualquer dist??ncia, apesar de n??o se estender a outros planos de exist??ncia.","classes":["Mago"],"favorite":false},{"id":337,"level":"8","name":"Limpar a Mente","name_en":"Mind Blank","school":{"pt":"Abjura????o","style":"abjuration"},"castingTime":"1 a????o","range":"toque","components":"V, S","duration":"24 horas","description":"At?? a magia acabar, uma criatura volunt??ria que voc?? tocar fica imune a dano ps??quico, a qualquer efeito que poderia sentir suas emo????es ou ler seus pensamentos, a magias de adivinha????o e a condi????o enfeiti??ado. A magia pode at?? mesmo evitar a magia desejo e magias ou efeitos de poder similar usados para afetar a mente do alvo ou para adquirir informa????es sobre ele.","classes":["Bardo","Mago"],"favorite":false},{"id":120,"level":"2","name":"Localizar Animais ou Plantas","name_en":"Locate Animals or Plants","ritual":"s","school":{"pt":"Adivinha????o","style":"divination"},"castingTime":"1 a????o","range":"pessoal","components":"V, S, M","duration":"instant??nea","material":"um pouco de pelo de um c??o de ca??a","description":"Descreva ou nomeie um tipo especifico de besta ou planta. Concentre - se na voz da natureza ao seu redor, voc?? descobre a dire????o e dist??ncia da criatura ou planta mais pr??xima desse tipo dentro de 7, 5 quil??metros, se houver alguma presente.","classes":["Bardo","Druida","Patrulheiro"],"favorite":false},{"id":218,"level":"4","name":"Localizar Criatura","name_en":"Locate Creature","school":{"pt":"Adivinha????o","style":"divination"},"castingTime":"1 a????o","range":"pessoal","components":"V, S, M","concentration":"s","duration":"at?? 1 hora","material":"um pouco de pelo de um c??o de ca??a","description":"Descreva ou nomeie uma criatura que seja familiar a voc??. Voc?? sente a dire????o da localiza????o da criatura, contanto que a criatura esteja a at?? 300 metros de voc??. Se a criatura se mover, voc?? saber?? a dire????o do movimento dela.</p><p> A magia pode localizar uma criatura especifica que voc?? conhe??a ou a criatura mais pr??xima de um tipo especifico (como um humano ou um unic??rnio), desde que voc?? j?? tenha visto tal criatura de perto??? a at?? 9 metros??? pelo menos uma vez. Se a criatura que voc?? descreveu ou nomeou estiver em uma forma diferente, como se estiver sob efeito da magia <em> metamorfose </em>, essa magia n??o localizar?? a criatura.</p><p> Essa magia n??o pode localizar uma criatura se ??gua corrente de, pelo menos 3 metros de largura, bloquear o caminho direito entre voc?? e a criatura.","classes":["Bardo","Cl??rigo","Druida","Mago","Paladino","Patrulheiro"],"favorite":false},{"id":121,"level":"2","name":"Localizar Objeto","name_en":"Locate Object","school":{"pt":"Adivinha????o","style":"divination"},"castingTime":"1 a????o","range":"pessoal","components":"V, S, M","concentration":"s","duration":"at?? 10 minutos","material":"um galho bifurcado","description":"Descreva ou nomeie um objeto que seja familiar a voc??. Voc?? sente a dire????o da localiza????o do objeto, contanto que o objeto esteja a at?? 300 metros de voc??. Se o objeto estiver em movimento, voc?? saber?? a dire????o do movimento dele.</p><p> A magia pode localizar um objeto especifico que voc??, desde que voc?? j?? tenha o visto de perto??? a at?? 9 metros??? pelo menos uma vez. Alternativamente, a magia pode localizar o objeto de um tipo em particular mais pr??ximo, como certo tipo de vestu??rio, joia, m??vel, ferramenta ou arma.</p><p> Essa magia n??o pode localizar um objeto se qualquer espessura de chumbo, at?? mesmo uma folha fina, bloquear o caminho direto entre voc?? e o objeto.","classes":["Bardo","Cl??rigo","Druida","Mago","Paladino","Patrulheiro"],"favorite":false},{"id":338,"level":"8","name":"Loquacidade","name_en":"Glibness","school":{"pt":"Transmuta????o","style":"transmutation"},"castingTime":"1 a????o","range":"pessoal","components":"V","duration":"1 hora","description":"At?? o fim da magia, quando voc?? realizar um teste de Carisma, voc?? pode substituir o n??mero rolado por voc?? por um 15. Al??m disso, n??o importa o que voc?? diga, magias que determinam se voc?? est?? dizendo a verdade indicar??o que voc?? est?? sendo sincero.","classes":["Bardo","Bruxo"],"favorite":false},{"id":122,"level":"2","name":"Lufada de Vento","name_en":"Gust Of Wind","school":{"pt":"Evoca????o","style":"evocation"},"castingTime":"1 a????o","range":"pessoal","components":"V, S, M","concentration":"s","duration":"at?? 1 minuto","material":"uma semente de legume","description":"Uma linha de vento forte, com 18 metros de comprimento e 3 metros de largura, ?? soprada de voc?? em uma dire????o, ?? sua escolha, pela dura????o da magia. Cada criatura que come??ar seu turno na linha, deve ser bem sucedida num teste de resist??ncia de For??a ou ser?? empurrada 4, 5 metros para tr??s, na dire????o seguida pela linha. Qualquer criatura na linha deve gastar 3 metros de movimenta????o para cada 1,5 metro que ela se mover enquanto se aproxima de voc??.</p><p> As lufadas dispersam gases ou vapores e apagam velas, tochas e chamas similares desprotegidas na ??rea. Elas fazem com que chamas protegidas, como as de lanternas, vibrem descontroladamente e tenham 50 por cento de chance de serem extintas.</p><p> Com uma a????o b??nus, em cada um dos seus turnos, antes da magia acabar, voc?? pode mudar a dire????o ?? qual a linha ?? soprada de voc??.","classes":["Druida","Feiticeiro","Mago"],"favorite":false},{"id":12,"level":"0","name":"Luz","name_en":"Light","school":{"pt":"Evoca????o","style":"evocation"},"castingTime":"1 a????o","range":"toque","components":"V, M","duration":"1 hora","material":"um vaga-lume ou musgo fosforescente","description":"Voc?? toca um objeto que n??o tenha mais 3 metros em qualquer dimens??o. At?? a magia acabar, o objeto emite luz plena num raio de 6 metros e penumbra por 6 metros adicionais. Cobrir o objeto completamente com alguma coisa opaca bloquear?? a luz. A magia termina se voc?? conjur??-la novamente ou dissip??-la com uma a????o.</p><p> Se voc?? tentar afetar um objeto segurado ou vestido por uma criatura hostil, a criatura deve ser bem sucedida num teste de Destreza para evitar a magia.","classes":["Bardo","Cl??rigo","Feiticeiro","Mago"],"favorite":false},{"id":176,"level":"3","name":"Luz do Dia","name_en":"Daylight","school":{"pt":"Evoca????o","style":"evocation"},"castingTime":"1 a????o","range":"18 metros","components":"V, S","duration":"1 hora","description":"Uma esfera de luz, com 18 metros de raio, se espalha a partir de um ponto, ?? sua escolha, dentro do alcance. A esfera produz luz plena num raio de 18 metros e penumbra por 18 metros adicionais.</p><p> Se voc?? escolher um ponto em um objeto que voc?? esteja segurando, ou um que n??o esteja sendo vestido ou carregado, a luz brilha a partir do objeto e se move com ele. Cobrir completamente o objeto afetado com um objeto opaco, como uma vasilha ou um elmo, bloquear?? a luz.</p><p> Se qualquer ??rea dessa magia sobrepor uma ??rea de escurid??o criada por uma magia de 3?? ou inferior, a magia que criou a escurid??o ser?? dissipada.","classes":["Cl??rigo","Druida","Feiticeiro","Paladino","Patrulheiro"],"favorite":false},{"id":219,"level":"4","name":"Malogro","name_en":"Blight","school":{"pt":"Necromancia","style":"necromancy"},"castingTime":"1 a????o","range":"9 metros","components":"V, S","duration":"instant??nea","description":"Energia necrom??ntica inunda uma criatura, ?? sua escolha, que voc?? possa ver dentro do alcance, drenando sua umidade e vitalidade. O alvo deve realizar um teste de resist??ncia de Concentra????o. O alvo sofre 8d8 de dano necr??tico se falhar no teste, ou metade desse dano se obtiver sucesso. Essa magia n??o surte efeito em mortos - vivos ou constructos.</p><p> Se voc?? afetar uma criatura planta ou planta m??gica, ela faz seu teste de resist??ncia com desvantagem e a magia causa o m??ximo de dano a ela.</p><p> Se voc?? afetar uma planta n??o - m??gica que n??o seja uma criatura, como uma ??rvore ou arbusto, ele n??o faz um teste de resist??ncia, ela simplesmente seca e morre.</p><p><strong> Em N??veis Superiores </strong>. Quando voc?? conjurar essa magia usando um espa??o de magia de 5?? n??vel ou superior, o dano aumenta em 1d8 para cada n??vel do espa??o acima do 4??.","classes":["Bruxo","Druida","Feiticeiro","Mago"],"favorite":false},{"id":314,"level":"7","name":"Mans??o Magn??fica de Mordenkainen","name_en":"Mordenkainen's Magnificent Mansion","school":{"pt":"Conjura????o","style":"conjuration"},"castingTime":"1 minuto","range":"90 metros","components":"V, S, M","duration":"24 horas","material":"um portal em miniatura esculpido em marfim, um peda??o de m??rmore polido e uma pequena colher de prata, cada item valendo, no m??nimo, 5 po","description":"Voc?? conjura uma resid??ncia extradimensional, dentro do alcance, que permanece pela dura????o. Voc?? escolhe onde sua ??nica entrada ?? localizada. A entrada brilha discretamente e tem 1,5 metro de largura por 3 metros de altura. Voc?? e qualquer criatura que voc?? designou, quando conjurou a magia, pode entrar na resid??ncia extradimensional enquanto o portal permanecer aberto. Voc?? pode abrir ou fechar o portal se estiver a at?? 9 metros dele. Enquanto estiver fechado, o portal ?? invis??vel.</p><p> Al??m do portal existe um magnifico sal??o com in??meros aposentos. A atmosfera ?? limpa, fresca e morna.</p><p> Voc?? pode criar qualquer projeto de piso que quiser, mas o espa??o n??o pode exceder 50 cubos, cada cubo tendo 3 metros de cada lado. O local ?? mobiliado e decorado como voc?? desejar. Ele cont??m comida suficiente para servir nove banquetes para at?? 100 pessoas. Uma equipe de 100 servos quase - transparentes atende todos que entrarem. Voc?? decide a apar??ncia visual dos servos e o vestu??rio deles. Eles s??o completamente obedientes as suas ordens. Cada servo pode realizar qualquer tarefa que um servo humano comum poderia fazer, mas eles n??o podem atacar ou realizar qualquer a????o que poderia causar maleficio direto a outra criatura. Portanto, os servos podem buscar coisas, limpar, remendar, dobrar roupas, acender lareiras, servir comida, despejar vinho e assim por diante. Os servos podem ir a qualquer lugar na mans??o, mas n??o podem deix??-la. Mob??lia e outros objetos criados por essa magia viram fuma??a se forem removidos da mans??o. Quando a magia acabar, qualquer criatura dentro do espa??o extradimensional ?? expelida para o espa??o vago mais pr??ximo da entrada.","classes":["Bardo","Mago"],"favorite":false},{"id":177,"level":"3","name":"Manto do Cruzado","name_en":"Crusader's Mantle","school":{"pt":"Evoca????o","style":"evocation"},"castingTime":"1 a????o","range":"pessoal","components":"V","concentration":"s","duration":"at?? 1 minuto","description":"Poder sagrado irradia de voc?? em uma aura de 9 metros de raio, despertando a aud??cia nas criaturas amig??veis. At?? o final da magia, a aura se move, se mantendo centrada em voc??. Enquanto estiver na aura, cada criatura n??o - hostil (incluindo voc??) causa 1d4 de dano radiante extra quando atingir com ataques com arma.","classes":["Paladino"],"favorite":false},{"id":259,"level":"5","name":"M??o de Bigby","name_en":"Bigby's Hand","school":{"pt":"Evoca????o","style":"evocation"},"castingTime":"1 a????o","range":"36 metros","components":"V, S, M","concentration":"s","duration":"at?? 1 minuto","material":"uma casca de ovo e uma luva de couro de cobra","description":"Voc?? cria uma m??o Grande de energia cintilante e translucida em um espa??o desocupado que voc?? possa ver dentro do alcance. A m??o permanece pela dura????o da magia e ela se move ao seu comando, imitando os movimentos da sua pr??pria m??o.</p><p> A m??o ?? um objeto com CA 20 e pontos de vida igual ao seu m??ximo de pontos de vida. Se ela cair a 0 pontos de vida, a magia termina. Ela tem For??a 26 (+8) e Destreza 10 (+0). A m??o n??o preenche o espa??o dela.</p><p> Quando voc?? conjura essa magia voc?? pode, com uma a????o b??nus, nos seus turnos subsequentes, mover a m??o at?? 18 metros e ent??o causar um dos seguintes efeitos com ela.</p><p><em><strong> M??o Esmagadora </strong></ em>. A m??o tenta agarrar uma criatura Enorme ou menor a 1,5 metro dela. Voc?? usa o valor de For??a da m??o para determinar o agarr??o. Se o alvo for M??dio ou menor, voc?? ter?? vantagem no teste. Enquanto a m??o estiver agarrando o alvo, voc?? pode usar uma a????o b??nus para fazer a m??o esmaga - lo. Quando o fizer, o alvo sofre dano de concuss??o igual a 2d6 + seu modificador de habilidade de conjura????o.</p><p><em><strong> M??o Interposta </strong></ em>. A m??o se interp??em entre voc?? e uma criatura a sua escolha at?? voc?? lhe dar um comando diferente. A m??o se move para ficar entre voc?? e o alvo, concedendo a voc?? meia - cobertura contra o alvo. O alvo n??o pode se mover atrav??s do espa??o da m??o se o valor de For??a dele for menor ou igual ao valor de For??a da m??o. Se o valor de For??a dele for maior que o valor de For??a da m??o, o alvo pode se mover at?? voc?? atrav??s do espa??o da m??o, mas aquele espa??o ser?? considerado terreno dif??cil para o alvo.</p><p><em><strong> M??o Poderosa </strong></ em>. A m??o tenta empurrar uma criatura a 1,5 metro dela em uma dire????o a sua escolha. Realize um teste com a For??a da m??o, resistido por um teste de For??a (Atletismo) do alvo. Se o alvo for M??dio ou menor, voc?? tem vantagem no teste. Se voc?? for bem sucedido, a m??o empurra o alvo at?? 1,5 metro mais uma quantidade de metros igual ao modificador da sua habilidade de conjura????o multiplicado por 1,5. A m??o se move com o alvo, permanecendo a 1,5 metro dele.</p><p><em><strong> Punho Cerrado </strong></ em>. A m??o golpeia uma criatura ou objeto a 1,5 metro dela. Realize uma jogada de ataque corpo - a - corpo com magia para a m??o usando suas estat??sticas de jogo. Se atingir, o alvo sofre 4d8 de dano de energia.</p><p><strong> Em N??veis Superiores </strong>. Se voc?? conjurar essa magia usando um espa??o de magia de 6?? n??vel ou superior, o dano da op????o punho cerrado aumenta em 2d8 e o dano da m??o esmagadora aumenta em 2d6 para cada n??vel do espa??o acima do 5??.","classes":["Mago"],"favorite":false},{"id":65,"level":"1","name":"M??os Flamejantes","name_en":"Burning Hands","school":{"pt":"Evoca????o","style":"evocation"},"castingTime":"1 a????o","range":"pessoal","components":"V, S","duration":"instant??nea","description":"Enquanto voc?? mantiver suas m??os com os polegares juntos e os dedos abertos, uma fino leque de chamas emerge das pontas dos seus dedos erguidos. Cada criatura num cone de 4, 5 metros deve realizar um teste de resist??ncia de Destreza. Uma criatura sofre 3d6 de dano de fogo se falhar no teste, ou metade desse dano se obtiver sucesso.</p><p> O fogo incendeia qualquer objeto inflam??vel na ??rea que n??o esteja sendo vestido ou carregado.</p><p><strong> Em N??veis Superiores </strong>. Se voc?? conjurar essa magia usando um espa??o de magia de 2?? n??vel ou superior, o dano aumenta em 1d6 para cada n??vel do espa??o acima do 1??.","classes":["Feiticeiro","Mago"],"favorite":false},{"id":13,"level":"0","name":"M??os M??gicas","name_en":"Mage Hands","school":{"pt":"Conjura????o","style":"conjuration"},"castingTime":"1 a????o","range":"9 metros","components":"V, S","duration":"1 minuto","description":"Uma m??o espectral flutuante aparece num ponto, ?? sua escolha, dentro do alcance. A m??o permanece pela dura????o ou at?? voc?? dissip??-la com uma a????o. A m??o some se estiver a mais de 9 metros de voc?? ou se voc?? conjurar essa magia novamente.</p><p> Voc?? pode usar sua a????o para controlar a m??o. Voc?? pode usar a m??o para manipular um objeto, abrir uma porta ou recipiente destrancado, guardar ou pegar um item de um recipiente aberto ou derramar o conte??do de um frasco. Voc?? pode mover a m??o at?? 9 metros a cada vez que a usa.</p><p> A m??o n??o pode atacar, ativar itens m??gicos ou carregar mais de 5 quilos.","classes":["Bardo","Bruxo","Feiticeiro","Mago"],"favorite":false},{"id":123,"level":"2","name":"Marca da Puni????o","name_en":"Branding Smite","school":{"pt":"Evoca????o","style":"evocation"},"castingTime":"1 a????o b??nus","range":"pessoal","components":"V","concentration":"s","duration":"at?? 1 minuto","description":"Da pr??xima vez que voc?? atingir uma criatura com um ataque com arma, antes do fim da magia, a arma cintilar?? com radia????o astral quando voc?? golpear. O ataque causa 2d6 de dano radiante extra ao alvo, que se torna vis??vel, se estava invis??vel, e o alvo emite penumbra em um raio de 1,5 metro e n??o pode ficar invis??vel at?? a magia acabar.</p><p><strong> Em N??veis Superiores </strong>. Se voc?? conjurar essa magia usando um espa??o de magia de 3?? n??vel ou superior, o dano extra aumenta em 1d6 para cada n??vel do espa??o acima do 2??.","classes":["Paladino"],"favorite":false},{"id":66,"level":"1","name":"Marca do Ca??ador","name_en":"Hunter's Mark","school":{"pt":"Adivinha????o","style":"divination"},"castingTime":"1 a????o b??nus","range":"27 metros","components":"V","concentration":"s","duration":"at?? 1 hora","description":"Voc?? escolhe uma criatura que possa ver, dentro do alcance e a marca misticamente como sua presa. At?? a magia acabar, voc?? causa 1d6 de dano extra ao alvo sempre que voc?? o atingir com um ataque com arma e voc?? tem vantagem em quaisquer testes de Sabedoria (Percep????o) ou Sabedoria (Sobreviv??ncia) feitos para encontr?? - la. Se o alvo cair a 0 pontos de vida antes da magia acabar, voc?? pode usar uma a????o b??nus, no seu turno subsequente para marcar uma nova criatura.</p><p><strong> Em N??veis Superiores </strong>. Quando voc?? conjurar essa magia usando um espa??o de magia de 3?? ou 4?? n??vel, voc?? poder?? manter sua concentra????o na magia por at?? 8 horas. Quando voc?? usar um espa??o de magia de 5?? n??vel ou superior, voc?? poder?? manter sua concentra????o na magia por at?? 24 horas.","classes":["Patrulheiro"],"favorite":false},{"id":178,"level":"3","name":"Medo","name_en":"Fear","school":{"pt":"Ilus??o","style":"illusion"},"castingTime":"1 a????o","range":"pessoal","components":"V, S, M","concentration":"s","duration":"at?? 1 minuto","material":"uma pena branca ou o cora????o de uma galinha","description":"Voc?? projeta uma imagem fantasmag??rica dos piores medos de uma criatura. Cada criatura num cone de 9 metros, deve ser bem sucedida num teste de resist??ncia de Sabedoria ou largara o que quer que esteja segurando e ficar?? amedrontada pela dura????o.</p><p> Enquanto estiver amedrontada por essa magia, uma criatura deve usar a a????o de Disparada e fugir de voc?? pela rota mais curta dispon??vel em cada um dos turnos dela, a n??o ser que n??o haja lugar para onde se mover. Se a criatura terminar o turno dela em um local onde ela n??o tenha linha de vis??o sua, a criatura pode realizar um teste de resist??ncia de Sabedoria. Se obtiver sucesso, a magia termina naquela criatura.","classes":["Bardo","Bruxo","Feiticeiro","Mago"],"favorite":false},{"id":124,"level":"2","name":"Mensageiro Animal","name_en":"Animal Messenger","ritual":"s","school":{"pt":"Encantamento","style":"enchantment"},"castingTime":"1 a????o","range":"9 metros","components":"V, S, M","duration":"24 horas","material":"um punhado de comida","description":"Atrav??s dessa magia, voc?? usa um animal para entregar uma mensagem. Escolha uma besta Mi??da que voc?? possa ver dentro do alcance, como um esquilo, um gaio - azul ou um morcego. Voc?? especifica um local, que voc?? j?? deve ter visitado, e um remetente com uma descri????o geral, como??? um homem ou mulher vestido em um uniforme da guarda da cidade??? ou??? um an??o ruivo vestindo um chap??u pontudo???. Voc?? tamb??m fala uma mensagem com at?? vinte e cindo palavras. A besta alvo viaja pela dura????o da magia para o local especifico, cobrindo 75 quil??metros em 24 horas para um mensageiro voador ou 37, 5 quil??metros para outros animais.</p><p> Quando o mensageiro chegar, ele entrega sua mensagem para a criatura que voc?? descreveu, repetindo o som da sua voz. O mensageiro fala apenas para uma criatura que tenha uma descri????o compat??vel com a que ele recebeu. Se o mensageiro n??o alcan??ar o destino antes do fim da magia, a mensagem ?? perdida e a besta faz seu caminho de volta para onde voc?? conjurou a magia.</p><p><strong> Em N??veis Superiores </strong>. Se voc?? conjurar essa magia usando um espa??o de magia de 3?? n??vel ou superior, a dura????o da magia aumenta em 48 horas para cada n??vel do espa??o acima do 2??.","classes":["Bardo","Druida","Patrulheiro"],"favorite":false},{"id":14,"level":"0","name":"Mensagem","name_en":"Message","school":{"pt":"Transmuta????o","style":"transmutation"},"castingTime":"1 a????o","range":"36 metros","components":"V, S, M","duration":"1 rodada","material":"um peda??o curto de fio de cobre","description":"Voc?? aponta seu dedo para uma criatura dentro do alcance e sussurra uma mensagem. O alvo (e apenas ele) ouvi a mensagem e pode responder com um sussurro que apenas voc?? pode ouvir.</p><p> Voc?? pode conjurar essa magia atrav??s de objetos s??lidos se voc?? tiver familiaridade com o alvo. Sil??ncio m??gico, 30 cent??metros de rocha, 2, 5 cent??metros de metal comum, uma fina camada de chumbo, ou 90 cent??metros de madeira ou terra bloqueiam a magia. A magia n??o precisa seguir uma linha reta e pode viajar livremente, dobrando esquinas ou atrav??s de aberturas.","classes":["Bardo","Feiticeiro","Mago"],"favorite":false},{"id":179,"level":"3","name":"Mesclar-se ??s Rochas","name_en":"Meld Into Stone","ritual":"s","school":{"pt":"Transmuta????o","style":"transmutation"},"castingTime":"1 a????o","range":"toque","components":"V, S","duration":"8 horas","description":"Voc?? entra em um objeto ou superf??cie rochoso, grande o suficiente para comportar seu corpo inteiro, mesclando - se, junto com todo o equipamento que voc?? esteja carregando, com a rocha pela dura????o. Usando seu movimento, voc?? entra na rocha num ponto que voc?? possa tocar. Nada da sua presen??a ficar?? vis??vel ou, de outra forma, detect??vel por sentidos n??o - m??gicos.</p><p> Enquanto estiver imerso na rocha, voc?? n??o pode ver o que est?? ocorrendo do lado de fora e, qualquer teste de Sabedoria (Percep????o) que voc?? fizer para ouvir os sons do lado de fora s??o feitos com desvantagem. Voc?? continua consciente do tempo transcorrido e pode conjurar magias em voc?? enquanto estiver imerso na rocha. Voc?? pode usar seu movimento para sair da rocha onde voc?? entrou, o que termina a magia. Do contr??rio, voc?? n??o pode se mover.</p><p> Pequenos danos f??sicos a rocha n??o ferem voc??, mas destrui????o parcial ou uma mudan??a no formato (fazendo que voc?? j?? n??o caiba mais dentro dela) expelir?? voc?? causando - lhe 6d6 de dano de concuss??o. A destrui????o completa da rocha (ou transmuta????o em uma subst??ncia diferente) expelir?? voc?? causando - lhe 50 de dano de concuss??o. Se voc?? for expelido, voc?? ficar?? ca??do no ch??o em um espa??o desocupado perto de onde voc?? entrou da primeira vez.","classes":["Cl??rigo","Druida"],"favorite":false},{"id":220,"level":"4","name":"Metamorfose","name_en":"Polymorph","school":{"pt":"Transmuta????o","style":"transmutation"},"castingTime":"1 a????o","range":"18 metros","components":"V, S, M","concentration":"s","duration":"at?? 1 hora","material":"um casulo de lagarta","description":"Essa magia transforma uma criatura que voc?? possa ver, dentro do alcance, em uma nova forma. Uma criatura involunt??ria deve realizar um teste de resist??ncia de Sabedoria para evitar o efeito. Um metamorfo obt??m sucesso automaticamente nesse teste de resist??ncia.</p><p> A transforma????o permanece pela dura????o, ou at?? o alvo cair a 0 pontos de vida ou morrer. A nova forma pode ser qualquer besta a qual o n??vel de desafio seja igual ou menor que o do alvo (ou o n??vel do alvo, se ele n??o possuir um n??vel de desafio). As estat??sticas de jogo do alvo, incluindo seus valores de habilidades mentais, s??o substitu??das pelas estat??sticas da besta escolhida. Ele mant??m sua tend??ncia e personalidade.</p><p> O alvo assume os pontos de vida da sua nova forma. Quando ele reverter a sua forma normal, a criatura retorna ?? quantidade de pontos de vida que ela tinha antes da transforma????o. Se ela reverter como resultado de ter ca??do a 0 pontos de vida, qualquer dano excedente ?? recebido pela sua forma normal. Contato que o dano excedente n??o reduza os pontos de vida da forma normal da criatura a 0, ela n??o cair?? inconsciente. Essa magia n??o pode afetar um alvo com 0 pontos de vida.</p><p> A criatura ?? limitada em suas a????es pela natureza da sua nova forma e ela n??o pode falar, conjurar magias ou realizar qualquer outra a????o que precise de m??os ou de vocaliza????o.</p><p> O equipamento do alvo mescla - se a sua nova forma. O alvo n??o pode ativar, empunhar ou, de outra forma, se beneficiar de qualquer de seus equipamentos.","classes":["Bardo","Druida","Feiticeiro","Mago"],"favorite":false},{"id":351,"level":"9","name":"Metamorfose Verdadeira","name_en":"True Polymorph","school":{"pt":"Transmuta????o","style":"transmutation"},"castingTime":"1 a????o","range":"9 metros","components":"V, S, M","concentration":"s","duration":"at?? 1 hora","material":"uma gota de merc??rio, uma por????o de goma ar??bica e um pouco de fuma??a","description":"Escolha uma criatura ou objeto n??o - m??gico que voc?? possa ver, dentro do alcance. Voc?? transforma a criatura em uma criatura diferente, a criatura em um objeto ou o objeto em uma criatura (o objeto n??o pode nem estar sendo vestido nem carregado por outra criatura). A transforma????o permanece pela dura????o ou at?? o alvo cair a 0 pontos de vida ou morrer. Se voc?? se concentrar nessa magia por toda a dura????o, a transforma????o ser?? permanente.</p><p> Metamorfos n??o s??o afetados por essa magia. Uma criatura involunt??ria pode realizar um teste de resist??ncia de Constitui????o e, se for bem sucedida, n??o ser?? afetada por essa magia.</p><p><em><strong> Criatura em Criatura </strong></ em>. Se voc?? transformar uma criatura em outro tipo de criatura, a nova forma pode ser de qualquer tipo que voc?? desejar, contanto que o n??vel de desafio seja igual ou menor que o do alvo (ou o n??vel dele, caso o alvo n??o possua n??vel de desafio). As estat??sticas de jogo do alvo, incluindo seus valores de habilidades mentais, s??o substitu??das pelas estat??sticas da nova forma. Ele mant??m sua tend??ncia e personalidade.</p><p> O alvo assume os pontos de vida da sua nova forma e, quando ela reverter a sua forma normal, a criatura retorna ?? quantidade de pontos de vida que ela tinha antes da transforma????o. Se ela reverter como resultado de ter ca??do a 0 pontos de vida, qualquer dano excedente ?? recebido pela sua forma normal. Contato que o dano excedente n??o reduza os pontos de vida da forma normal da criatura a 0, ela n??o cair?? inconsciente. Essa magia n??o pode afetar um alvo com 0 pontos de vida.</p><p> A criatura ?? limitada em suas a????es pela natureza da sua nova forma e ela n??o pode falar, conjurar magias ou realizar qualquer outra a????o que precise de m??os ou de vocaliza????o, a n??o ser que a nova forma seja capaz de tais a????es.</p><p> O equipamento do alvo mescla - se a sua nova forma. O alvo n??o pode ativar, empunhar ou, de outra forma, se beneficiar de qualquer de seus equipamentos.</p><p><em><strong> Objeto em Criatura </strong></ em>. Voc?? pode transformar um objeto em um tipo de criatura, contanto que o tamanho da criatura n??o seja maior que o tamanho do objeto e, o n??vel de desafio da criatura ser?? 9 ou menor. A criatura ?? amig??vel a voc?? e aos seus companheiros. Ela age em cada um dos seus turnos. Voc?? decide qual a????o ela realizar?? e como ela se move. O Mestre tem as estat??sticas da criatura e resolve todas as a????es e movimentos dela.</p><p> Se a magia se tornar permanente, voc?? n??o ter?? mais controle sobre a criatura. Ele pode continuar amig??vel a voc??, dependendo da forma como voc?? a tratou.</p><p><em><strong> Criatura em Objeto </strong></ em>. Se voc?? transformar uma criatura em um objeto, ela se transformar??, junto com tudo que estiver vestindo ou carregando, nessa forma. As estat??sticas da criatura tornam - se as do objeto e a criatura n??o se lembrar?? do tempo que passou nessa forma, depois da magia acabar e ela retornar a sua forma normal.","classes":["Bardo","Bruxo","Mago"],"favorite":false},{"id":315,"level":"7","name":"Miragem","name_en":"Mirage Arcane","school":{"pt":"Ilus??o","style":"illusion"},"castingTime":"10 minutos","range":"vis??o","components":"V, S","duration":"10 dias","description":"Voc?? faz um terreno em uma ??rea de at?? 1,5 quil??metro quadrados pare??a, soe, cheire e, at??, sinta com outro tipo de terreno natural. Os formatos gerais do terreno permanecem os mesmos, no entanto. Campos abertos ou uma estrada podem ser modificados para se assemelharem a um p??ntano, colina, fenda ou algum outro tipo de terreno dif??cil ou intranspon??vel. Uma lagoa pode ser modificada para se parecer com um prado, um precip??cio com um declive suave ou um barranco pedregoso com uma estrada larga e lisa.</p><p> Similarmente, voc?? pode alterar a apar??ncia de estruturas ou adicion??-las onde nenhuma existia. A magia n??o disfar??a, esconde ou adiciona criaturas.</p><p> A ilus??o inclui elementos aud??veis, visuais, t??teis e olfativos, portanto, ela pode transformar solo limpo em terreno dif??cil (ou vice - versa) ou, de outra forma, impedir o movimento atrav??s da ??rea. Qualquer por????o de terreno ilus??rio (como uma rocha ou galho) que seja removida da ??rea da magia desaparece imediatamente.</p><p> Criaturas com vis??o verdadeira podem ver atrav??s da ilus??o a verdadeira forma do terreno, por??m, todos os outros elementos da ilus??o permanecem, ent??o, mesmo que a criatura esteja ciente da presen??a da ilus??o, ela ainda interage fisicamente com a ilus??o.","classes":["Bardo","Druida","Mago"],"favorite":false},{"id":260,"level":"5","name":"Miss??o","name_en":"Geas","school":{"pt":"Encantamento","style":"enchantment"},"castingTime":"1 minuto","range":"18 metros","components":"V","duration":"30 dias","description":"Voc?? imp??e um comando m??gico a uma criatura que voc?? possa ver, dentro do alcance, for??ando - a a fazer algum servi??o ou reprimindo - a por alguma a????o ou curso de atividade, como voc?? decidir. Se a criatura puder compreender voc??, ela deve ser bem sucedida num teste de resist??ncia de Sabedoria ou ficar?? enfeiti??ada por voc?? pela dura????o. Enquanto a criatura estiver enfeiti??ada por voc??, ela sofrer?? 5d6 de dano ps??quico toda vez que ela agir de maneira diretamente contr??ria ??s suas instru????es, mas n??o mais de uma vez por dia. Uma criatura que n??o puder compreender voc?? n??o ?? afetada por essa magia.</p><p> Voc?? pode emitir qualquer comando que escolher, exceto uma atividade que resulte em morte certa. Se voc?? emitir um comando suicida, a magia termina.</p><p> Voc?? pode terminar a magia prematuramente usando uma a????o para dissip??-la. As magias <em> remover maldi????o </em>, <em> restaura????o maior </em> ou <em> desejo </em> tamb??m podem termin??-la.</p><p><strong> Em N??veis Superiores </strong>. Quando voc?? conjurar essa magia usando um espa??o de magia de 7?? ou 8?? n??vel, a dura????o ser?? 1 ano. Quando voc?? conjurar essa magia usando um espa??o de magia de 9?? n??vel, a magia dura at?? ser terminada por uma das magias mencionadas acima.","classes":["Bardo","Cl??rigo","Druida","Mago","Paladino"],"favorite":false},{"id":67,"level":"1","name":"M??sseis M??gicos","name_en":"Magic Missile","school":{"pt":"Evoca????o","style":"evocation"},"castingTime":"1 a????o","range":"36 metros","components":"V, S","duration":"instant??nea","description":"Voc?? cria tr??s dardos brilhantes de energia m??stica. Cada dardo atinge uma criatura, ?? sua escolha, que voc?? possa ver, dentro do alcance. Um dardo causa 1d4 + 1 de dano de energia ao alvo. Todos os dardos atingem simultaneamente e voc?? pode direciona - los para atingir uma criatura ou v??rias.</p><p><strong> Em N??veis Superiores </strong>. Quando voc?? conjurar essa magia usando um espa??o de magia de 2?? n??vel ou superior, a magia cria um dardo adicional para cada n??vel do espa??o acima do 1??.","classes":["Feiticeiro","Mago"],"favorite":false},{"id":261,"level":"5","name":"Modificar Mem??ria","name_en":"Modify Memory","school":{"pt":"Encantamento","style":"enchantment"},"castingTime":"1 a????o","range":"9 metros","components":"V, S","concentration":"s","duration":"at?? 1 minuto","description":"Voc?? tenta modelar as mem??rias de outra criatura. Uma criatura que voc?? possa ver, deve realizar um teste de resist??ncia de Sabedoria. Se voc?? estiver lutando com a criatura, ela ter?? vantagem no teste de resist??ncia. Se falhar na resist??ncia, o alvo fica enfeiti??ado por voc?? pela dura????o. O alvo enfeiti??ado est?? incapacitado e n??o sabe o que est?? acontecendo seu redor, apesar de ainda poder ouvir voc??. Se ele sofrer qualquer dano ou for alvo de outra magia, essa magia acaba, e nenhuma das mem??rias do alvo ?? modificada.</p><p> Enquanto esse feiti??o durar, voc?? pode afetar a mem??ria sobre um evento que o alvo participou nas ??ltimas 24 horas e que n??o tenha durado mais de 10 minutos. Voc?? pode, permanentemente, eliminar todas as mem??rias desse evento, permitir que o alvo relembre do evento com perfeita clareza e riqueza de detalhes, mudar sua mem??ria sobre os detalhes do evento ou criar uma mem??ria de outro evento qualquer.</p><p> Voc?? deve falar ao alvo para descrever como sua mem??ria ?? afetada e ele deve ser capaz de compreender seu idioma para que as mem??rias modificadas se enra??zem. A mente dele preenche qualquer lacuna nos detalhes da sua descri????o. Se a magia terminar antes de voc?? ter finalizado a descri????o das mem??rias modificadas, a mem??ria da criatura n??o ser?? alterada. Do contr??rio, as mem??rias modificadas tomam lugar quando a magia acabar.</p><p> Uma mem??ria modificada n??o afeta, necessariamente, como uma criatura se comporta, particularmente se a mem??ria contradiz as inclina????es, tend??ncia ou cren??as naturais da criatura. Uma modifica????o il??gica na mem??ria, como implantar uma mem??ria de como a criatura gosta de se encharcar de ??cido, ?? repudiada, talvez como um sonho ruim. O Mestre pode considerar uma modifica????o na mem??ria muito absurda para afetar uma criatura de uma forma significativa.</p><p> Uma magia <em> remover maldi????o </em> ou <em> restaura????o maior </em>, conjurada no alvo, restaura a verdadeira mem??ria da criatura.</p><p><strong> Em N??veis Superiores </strong>. Se voc?? conjurar essa magia usando um espa??o de magia de 6?? n??vel ou superior, voc?? pode alterar a mem??ria do alvo de um evento que aconteceu a at?? 7 dias atr??s (6?? n??vel), 30 dias atr??s (7?? n??vel), 1 ano atr??s (8?? n??vel) ou em qualquer momento do passado da criatura (9?? n??vel).","classes":["Bardo","Mago"],"favorite":false},{"id":221,"level":"4","name":"Moldar Rochas","name_en":"Stone Shape","school":{"pt":"Transmuta????o","style":"transmutation"},"castingTime":"1 a????o","range":"toque","components":"V, S, M","duration":"instant??nea","material":"barro mole, que deve ser trabalhado aproximadamente com a forma desejada para o objeto de pedra","description":"Voc?? toca um objeto de pedra de tamanho M??dio ou menor, ou uma se????o de rocha com n??o mais de 1,5 metro em qualquer dimens??o e modela - a em qualquer forma que sirva aos seus prop??sitos. Ent??o, por exemplo, voc?? poderia modelar uma pedra grande em uma arma, ??dolo ou caix??o, ou fazer uma pequena passagem atrav??s de um muro, contanto que o muro n??o tenha mais de 1,5 metro de espessura. Voc?? poderia, tamb??m, modelar uma porta de pedra ou sua moldura para selar a porta. O objeto que voc?? cria pode ter at?? duas dobradi??as e um trinco, mas detalhes mec??nicos mais complexos n??o s??o poss??veis.","classes":["Cl??rigo","Druida","Mago"],"favorite":false},{"id":180,"level":"3","name":"Montaria Fantasmag??rica","name_en":"Phantom Steed","ritual":"s","school":{"pt":"Ilus??o","style":"illusion"},"castingTime":"1 minuto","range":"9 metros","components":"V, S","duration":"1 hora","description":"Uma criatura Grande, quase - real, similar a um cavalo, aparece no solo em um espa??o desocupado, ?? sua escolha, dentro do alcance. Voc?? decide a apar??ncia da criatura, mas ela ?? equipada com sela, estribo e arreio. Qualquer equipamento criado por essa magia vira fuma??a caso se afaste a mais de 3 metros da montaria.</p><p> Pela dura????o, voc?? ou a criatura que voc?? escolher, pode cavalgar a montaria. A criatura usa as estat??sticas de um cavalo de montaria, exceto por seu deslocamento ser de 30 metros e poder viajar 15 quil??metros em uma hora, ou 20 quil??metros em um ritmo r??pido. Quando a magia acaba, a montaria desaparece gradualmente, dando ao cavaleiro 1 minuto para desmontar. A magia acaba se voc?? usar uma a????o para dissip??-la ou se a montaria sofrer qualquer dano.","classes":["Mago"],"favorite":false},{"id":295,"level":"6","name":"Mover Terra","name_en":"Move Earth","school":{"pt":"Transmuta????o","style":"transmutation"},"castingTime":"1 a????o","range":"36 metros","components":"V, S, M","concentration":"s","duration":"at?? 2 horas","material":"uma l??mina de ferro e uma pequena sacola contendo uma mistura de solos ??? argila, barro e areia","description":"Escolha uma ??rea de terreno n??o maior que 12 metros de lado, dentro do alcance. Voc?? pode remodelar terra, areia ou barro na ??rea da maneira que quiser, pera dura????o. Voc?? pode erguer ou abaixar a eleva????o da ??rea, criar ou preencher valas, levantar ou deitar um muro ou formar uma coluna. A extens??o de tais mudan??as n??o pode exceder metade da maior dimens??o da ??rea. Portanto, se voc?? afetar um quadrado de 12 metros, voc?? poder?? criar um pilar de at?? 6 metros de altura, erguer ou abaixar a eleva????o do quadrado em at?? 6 metros ou cavar uma vala de at?? 6 metros de profundidade e assim por diante. Leva 10 minutos para completar essas modifica????es.</p><p> Ao final de cada 10 minutos que voc?? gastar se concentrando nessa magia, voc?? pode escolher uma nova ??rea de terreno para afetar.</p><p> Devido ??s transforma????es no terreno ocorrerem lentamente, as criaturas na ??rea normalmente n??o podem ficar presas ou sofrer dano pela movimenta????o do solo.</p><p> Essa magia pode manipular rocha natural ou constru????es de pedra. Pedra e estruturas deslocam - se para acomodar o novo terreno. Se a forma pela qual voc?? modela o terreno poderia tornar uma estrutura inst??vel, ela poder?? desmoronar.</p><p> Similarmente, essa magia n??o afeta diretamente o crescimento da vegeta????o. A terra movida carrega quaisquer plantas no caminho junto com ela.","classes":["Druida","Feiticeiro","Mago"],"favorite":false},{"id":222,"level":"4","name":"Movimenta????o Livre","name_en":"Freedom Of Movement","school":{"pt":"Abjura????o","style":"abjuration"},"castingTime":"1 a????o","range":"toque","components":"V, S, M","duration":"1 hora","material":"uma fita de couro, enrolada no bra??o ou ap??ndice similar","description":"Voc?? toca uma criatura volunt??ria. Pela dura????o, os movimentos do alvo n??o s??o afetados por terreno dif??cil e magias e outros efeitos m??gicos tamb??m n??o podem reduzir o deslocamento do alvo ou fazer com que o alvo fique paralisado ou impedido.</p><p> O alvo tamb??m pode gastar 1,5 metro de deslocamento para escapar, automaticamente, de impedimentos n??o - m??gicos, como algemas ou o agarr??o de uma criatura. Finalmente, estar submerso n??o imp??e penalidades no deslocamento ou ataques do alvo.","classes":["Bardo","Cl??rigo","Druida","Patrulheiro"],"favorite":false},{"id":262,"level":"5","name":"Muralha de Energia","name_en":"Wall Of Force","school":{"pt":"Evoca????o","style":"evocation"},"castingTime":"1 a????o","range":"36 metros","components":"V, S, M","concentration":"s","duration":"at?? 10 minutos","material":"um pouco de p?? feito de uma gema transparente esmagada","description":"Uma muralha invis??vel de energia aparece do nada num ponto, ?? sua escolha, dentro do alcance. A muralha aparece em qualquer orienta????o que voc?? escolher, como uma barreira horizontal ou vertical ou em uma angula????o. Ela pode estar flutuando no ar ou apoiada em uma superf??cie s??lida. Voc?? pode mold??-la em uma c??pula hemisf??rica ou uma esfera com um raio de at?? dez pain??is de 3 metros por 3 metros. Cada painel deve ser cont??guo com outro painel. Em qualquer formato, a muralha ter?? 0, 6 cent??metros de espessura. Ela permanece pela dura????o. Se a muralha passar pelo espa??o ocupado por uma criatura quando ela surgir, a criatura ser?? empurrada para um dos lados da muralha (voc?? escolhe qual lado).</p><p> Nada pode passar fisicamente atrav??s da muralha. Ela ?? imune a todos os danos e n??o pode ser dissipada por <em> dissipar magia </em>. A magia <em> desintegrar </em> destr??i a muralha instantaneamente, no entanto. A muralha tamb??m se estende ao Plano Et??reo, bloqueando a viagem et??rea atrav??s dela.","classes":["Mago"],"favorite":false},{"id":296,"level":"6","name":"Muralha de Espinhos","name_en":"Wall Of Thorns","school":{"pt":"Conjura????o","style":"conjuration"},"castingTime":"1 a????o","range":"36 metros","components":"V, S, M","concentration":"s","duration":"at?? 10 minutos","material":"um punhado de espinhos","description":"Voc?? cria uma muralha de arbustos robustos, flex??veis, emaranhados e eri??ados com espinhos pontudos. A muralha aparece, dentro do alcance, em uma superf??cie s??lida e permanece pela dura????o. Voc?? escolher fazer a muralha com at?? 18 metros de comprimento, 3 metros de altura e 1,5 metro de espessura ou um c??rculo com 6 metros de di??metro e at?? 6 metros de altura com 1,5 metro de espessura. A muralha bloqueia a vis??o.</p><p> Quando a muralha aparece, cada criatura dentro da ??rea deve realizar um teste de resist??ncia de Destreza. Se falhar na resist??ncia, uma criatura sofrer?? 7d8 de dano perfurante ou metade desse dano se obtiver sucesso.</p><p> Uma criatura pode se mover atrav??s da muralha, embora lentamente e dolorosamente. Para cada 1,5 metro que a criatura atravesse da muralha, ela deve gastar 6 metros de movimento. Al??m disso, a primeira vez que a criatura entrar na muralha num turno ou termina o turno nela, ela deve fazer um teste de resist??ncia de Destreza. Ela sofre 7d8 de dano cortante se falhar na resist??ncia ou metade desse dano se obtiver sucesso.</p><p><strong> Em N??veis Superiores </strong>. Quando voc?? conjurar essa magia usando um espa??o de magia de 7?? n??vel ou superior, ambos os tipos de dano aumentam em 1d8 para cada n??vel do espa??o acima do 6??.","classes":["Druida"],"favorite":false},{"id":223,"level":"4","name":"Muralha de Fogo","name_en":"Wall Of Fire","school":{"pt":"Evoca????o","style":"evocation"},"castingTime":"1 a????o","range":"36 metros","components":"V, S, M","concentration":"s","duration":"at?? 1 minuto","material":"um pequeno peda??o de f??sforo","description":"Voc?? cria uma muralha de fogo numa superf??cie s??lida dentro do alcance. Voc?? pode fazer uma muralha de at?? 18 metros de comprimento, 6 metros de altura e 30 cent??metros de espessura ou uma muralha anelar de at?? 6 metros de di??metro, 6 metros de altura e 30 cent??metros de espessura. A muralha ?? opaca e permanece pela dura????o.</p><p> Quando a muralha aparece, cada criatura dentro da ??rea dela deve realizar um teste de resist??ncia de Destreza. Se falhar na resist??ncia, uma criatura sofrer?? 5d8 de dano, ou metade desse dano se passar na resist??ncia.</p><p> Um lado da muralha, escolhido por voc?? no momento da conjura????o da magia, causa 5d8 de dano de fogo a cada criatura que terminar o turno dela a at?? 3 metros desse lado ou dentro da muralha. Uma criatura sofre o mesmo dano quando entra na muralha pela primeira vez num turno ou termina seu turno nela. O outro lado da muralha n??o causa dano algum.</p><p><strong> Em N??veis Superiores </strong>. Quando voc?? conjurar essa magia usando um espa??o de magia de 5?? n??vel ou superior, o dano aumenta em 1d8 para cada n??vel do espa??o acima do 4??.","classes":["Druida","Feiticeiro","Mago"],"favorite":false},{"id":297,"level":"6","name":"Muralha de Gelo","name_en":"Wall Of Ice","school":{"pt":"Evoca????o","style":"evocation"},"castingTime":"1 a????o","range":"36 metros","components":"V, S, M","concentration":"s","duration":"at?? 10 minutos","material":"um pequeno peda??o de quartzo","description":"Voc?? cria uma muralha de gelo numa superf??cie s??lida dentro do alcance. Voc?? pode mold??-la em uma c??pula hemisf??rica ou uma esfera com um raio de at?? dez pain??is de 3 metros por 3 metros. Cada painel deve ser cont??guo com outro painel. Em qualquer formato, a muralha ter?? 0, 6 cent??metros de espessura. Ela permanece pela dura????o.</p><p> Se a muralha passar pelo espa??o ocupado por uma criatura quando ela surgir, a criatura na ??rea ser?? empurrada para um dos lados da muralha (voc?? escolhe qual lado) e deve realizar um teste de resist??ncia de Destreza. Se falhar na resist??ncia, a criatura sofrer?? 10d6 de dano de frio ou metade desse dano se passar na resist??ncia.</p><p> A muralha ?? um objeto que pode ser danificado e ent??o, partido. Ela tem CA 12, 30 pontos de vida por se????o de 3 metros e ?? vulner??vel a dano de fogo. Reduzir os pontos de vida de uma se????o de 3 metros da muralha a 0 destruir?? essa se????o, deixando para tr??s uma camada de ar gelado no espa??o ocupado pela muralha. Uma criatura que atravesse a camada de ar gelado pela primeira vez num turno, deve realizar um teste de <br/> resist??ncia de Constitui????o. Essa criatura sofrer?? 5d6 de dano de frio se fracassar na resist??ncia, ou metade desse dano se obtiver sucesso.</p><p><strong> Em N??veis Superiores </strong>. Quando voc?? conjurar essa magia usando um espa??o de magia de 7?? n??vel ou superior, o dano causado quando ela aparece aumenta em 2d6 e o dano por atravessar atrav??s da camada de ar gelado aumenta em 1d6 para cada n??vel do espa??o acima do 6??.","classes":["Mago"],"favorite":false},{"id":263,"level":"5","name":"Muralha de Pedra","name_en":"Wall Of Stone","school":{"pt":"Conjura????o","style":"conjuration"},"castingTime":"1 a????o","range":"36 metros","components":"V, S, M","concentration":"s","duration":"at?? 10 minutos","material":"um pequeno bloco de granito","description":"Uma muralha n??o - m??gica de rocha s??lida surge do nada num ponto, ?? sua escolha, dentro do alcance. A muralha tem 15 cent??metros de espessura e ?? composta por dez pain??is de 3 metros por 3 metros. Cada painel deve ser cont??guo com, pelo menos, outro painel. Alternativamente, voc?? pode criar pain??is de 3 metros por 6 metros com apenas 7, 5 cent??metros de espessura.</p><p> Se a muralha passar pelo espa??o ocupado por uma criatura quando ela surgir, a criatura ser?? empurrada para um dos lados da muralha (voc?? escolhe qual lado). Se a criatura fosse ser rodeada por todos os lados da muralha (ou pela muralha e outra superf??cie s??lida), a criatura pode realizar um teste de resist??ncia de Destreza. Se obtiver sucesso, ela pode usar sua rea????o para se mover at?? seu deslocamento, assim n??o ficando mais cercada pela muralha.</p><p> A muralha pode ter qualquer formato que voc?? desejar, no entanto, ela n??o pode ocupar o mesmo espa??o de uma criatura ou objeto. A muralha n??o precisa ser vertical ou se apoiar em qualquer funda????o est??vel. Ela deve, no entanto, se fundir e estar solidamente suportada por rocha existente. Ent??o, voc?? pode usar essa magia para criar uma ponte sobre um abismo ou criar uma rampa.</p><p> Se voc?? criar um v??o com mais de 6 metros de comprimento, voc?? deve reduzir o tamanho de cada painel ?? metade para criar suportes. Voc?? pode moldar grosseiramente a parede para criar merl??es, ameias e assim por diante.</p><p> A muralha ?? um objeto feito de pedra que pode ser danificado e ent??o, partido. Cada painel tem CA 15 e 30 pontos de vida para cada 2, 5 cent??metros de espessura. Reduzir os pontos de vida de um painel a 0, o destruir?? e pode fazer pain??is conectados desmoronarem, ?? crit??rio do Mestre.</p><p> Se voc?? mantiver sua concentra????o nessa magia por toda a dura????o, a muralha se tornar?? permanente e n??o poder?? ser dissipada. Do contr??rio, a muralha desaparece quando a magia acabar.","classes":["Druida","Feiticeiro","Mago"],"favorite":false},{"id":181,"level":"3","name":"Muralha de Vento","name_en":"Wind Wall","school":{"pt":"Evoca????o","style":"evocation"},"castingTime":"1 a????o","range":"36 metros","components":"V, S, M","concentration":"s","duration":"at?? 1 minuto","material":"um leque min??sculo e uma pena de origem ex??tica","description":"Uma muralha de ventos fortes ergue - se do ch??o num ponto, ?? sua escolha, dentro do alcance. Voc?? pode fazer a muralha ter at?? 15 metros de comprimento, 4, 5 metros de altura e 30 cent??metros de espessura. Voc?? pode moldar a muralha em qualquer forma que desejar, contanto que ela fa??a um caminho cont??nuo pelo solo. A muralha permanece pela dura????o.</p><p> Quando a muralha aparece, cada criatura dentro da ??rea dela deve realizar um teste de resist??ncia de For??a. Uma criatura sofre 3d8 de dano de concuss??o se falhar na resist??ncia, ou metade desse dano se obtiver sucesso.</p><p> Os ventos fortes mant??m n??voa, fuma??a e outros gases afastados. Criaturas ou objetos voadores Pequenos ou menores, n??o podem atravessar a muralha. Materiais leves e soltos trazidos para a muralha s??o arremessados para cima. Flechas, virotes e outros proj??teis ordin??rios disparados contra alvos al??m da muralha s??o defletidos para cima e erram automaticamente. (Pedras arremessadas por gigantes ou armas de cerco e proj??teis similares, n??o s??o afetados.) As criaturas em forma gasosa n??o podem atravess??-la.","classes":["Druida","Patrulheiro"],"favorite":false},{"id":352,"level":"9","name":"Muralha Prism??tica","name_en":"Prismatic Wall","school":{"pt":"Abjura????o","style":"abjuration"},"castingTime":"1 a????o","range":"18 metros","components":"V, S","duration":"10 minutos","description":"Uma plano cintilante multicolorido de luzes forma uma parece vertical opaca??? de at?? 27 metros de comprimento, 9 metros de altura e 2, 5 cent??metros de espessura??? centrada num ponto que voc?? possa ver, dentro do alcance. Alternativamente, voc?? pode moldar a muralha numa esfera de 9 metros de di??metro centrada num ponto, ?? sua escolha, dentro do alcance. A muralha permanece no lugar pela dura????o. Se voc?? posicionar a muralha de forma que ela passaria atrav??s do espa??o ocupado por uma criatura, a magia falha e sua a????o e o espa??o de magia s??o desperdi??ados.</p><p> A muralha emite luz plena num raio de 30 metros e penumbra por 30 metros adicionais. Voc?? e as criaturas designadas, no momento que voc?? conjurou a magia, podem passar atrav??s e permanecer perto da muralha sem se ferirem. Se outra criatura que puder ver a muralha se aproximar mais de 6 metros dela ou come??ar seu turno l??, a criatura deve realizar um teste de resist??ncia de Constitui????o ou ficar?? cega por 1 minuto.</p><p> A muralha consiste em sete camadas, cada uma de uma cor diferente. Quando uma criatura tenta tocar ou passar atrav??s da muralha, ela atravessa uma camada de cada vez, at?? atravessar todas as camadas da muralha. ?? medida que ela passa ou toca cada camada, a criatura realiza um teste de resist??ncia de Destreza ou ser?? afetada pelas propriedades daquela camada, como descrito abaixo.</p><p> A muralha pode ser destru??da, tamb??m, uma camada por vez, em ordem de vermelho ?? violeta, pelos meios especificados em cada camada. Quando uma camada ?? destru??da, ela permanece assim pela dura????o da magia. Um <em> bast??o do cancelamento </em> destr??i uma <em> muralha prism??tica </em>, mas um <em> campo antimagia </em> n??o produz efeito nela.</p><p><em><strong> 1. Vermelho </strong></ em>. O alvo sofre 10d6 de dano de fogo se falhar na resist??ncia ou metade desse dano se obtiver sucesso. Enquanto essa camada estiver no lugar, ataques ?? dist??ncia n??o - m??gicos n??o podem atravessar a muralha. A camada pode ser destru??da causando, pelo menos, 25 de dano de frio a ela.</p><p><em><strong> 2. Laranja </strong></ em>. O alvo sofre 10d6 de dano de ??cido se falhar na resist??ncia ou metade desse dano se obtiver sucesso. Enquanto essa camada estiver no lugar, ataques ?? dist??ncia m??gicos n??o podem atravessar a muralha. A camada pode ser destru??da por um vento forte.</p><p><em><strong> 3. Amarelo </strong></ em>. O alvo sofre 10d6 de dano el??trico se falhar na resist??ncia ou metade desse dano se obtiver sucesso. A camada pode ser destru??da causando, pelo menos, 60 de dano de energia a ela.</p><p><em><strong> 4. Verde </strong></ em>. O alvo sofre 10d6 de dano de veneno se falhar na resist??ncia ou metade desse dano se obtiver sucesso. A magia <em> criar passagem </em> ou outra magia de n??vel igual ou superior que possam abrir um portal em uma superf??cie s??lida, destroem essa camada.</p><p><em><strong> 5. Azul </strong></ em>. O alvo sofre 10d6 de dano de frio se falhar na resist??ncia ou metade desse dano se obtiver sucesso. A camada pode ser destru??da causando, pelo menos, 25 de dano de fogo a ela.</p><p><em><strong> 6. Anil </strong></ em>. Se falhar na resist??ncia, o alvo ficar?? impedido. Ele deve ent??o, fazer um teste de resist??ncia de Constitui????o ao final de cada um dos turnos dele. Se obtiver sucesso tr??s vezes, a magia termina. Se falhar na resist??ncia tr??s vezes, ela se torna pedra ?? afetada pela condi????o petrificado. Os sucessos e falhas n??o precisam ser consecutivos, anote ambos os resultados at?? o alvo acumular tr??s de mesmo tipo.</p><p> Enquanto essa camada estiver no lugar, magias n??o podem ser conjuradas atrav??s da muralha. A camada pode ser destru??da por luz plena emitida pela magia <em> luz do dia </em> ou uma magia similar de n??vel equivalente ou superior.</p><p><em><strong> 7. Violeta </strong></ em>. Se falhar na resist??ncia, o alvo ficar?? cego. Ele deve realizar um teste de resist??ncia de Sabedoria no in??cio do seu pr??ximo turno. Um sucesso na resist??ncia acaba com a cegueira. Se falhar na resist??ncia, a criatura ?? transportada para outro plano de exist??ncia, escolhido pelo Mestre, e n??o estar?? mais cego. (Tipicamente, uma criatura que esteja em um plano que n??o seja o seu plano natal ?? banida para l??, enquanto que outras criaturas geralmente s??o enviadas para os Planos Astral ou Et??reo.) Essa camada ?? destru??da pela magia <em> dissipar magia </em> ou por uma magia similar de n??vel equivalente ou superior que possa acabar com magias e efeitos m??gicos.</p> ","classes":["Mago"],"favorite":false},{"id":182,"level":"3","name":"Nevasca","name_en":"Sleet Storm","school":{"pt":"Conjura????o","style":"conjuration"},"castingTime":"1 a????o","range":"45 metros","components":"V, S, M","concentration":"s","duration":"at?? 1 minuto","material":"um punhado de poeira e algumas gotas de ??gua","description":"At?? a magia acabar, uma chuva congelante e neve caem num cilindro de 6 metros de altura por 12 metros de raio, centrado num ponto, ?? sua escolha, dentro do alcance. A ??rea ?? de escurid??o densa e, chamas expostas na ??rea s??o extintas.</p><p> O solo na ??rea ?? coberto por gelo escorregadio, tornando - o terreno dif??cil. Quando uma criatura entrar na ??rea da magia pela primeira vez num turno ou come??ar seu turno nela, ela deve realizar um teste de resist??ncia de Destreza. Se falhar, cair?? no ch??o.</p><p> Se um, criatura estiver se concentrando na ??rea da magia, a criatura deve realizar um teste de resist??ncia de Constitui????o contra a CD da magia, ou perder?? a concentra????o.","classes":["Druida","Feiticeiro","Mago"],"favorite":false},{"id":183,"level":"3","name":"N??voa F??tida","name_en":"Stinking Cloud","school":{"pt":"Conjura????o","style":"conjuration"},"castingTime":"1 a????o","range":"27 metros","components":"V, S, M","concentration":"s","duration":"at?? 1 minuto","material":"um ovo podre ou v??rias folhas de repolho","description":"Voc?? cria uma esfera, de 6 metros de raio, de g??s amarelado nauseante, centrada num ponto dentro do alcance. A n??voa se espalha, dobrando esquinas, e sua ??rea ?? de escurid??o densa. A n??voa perdura no ar pela dura????o.</p><p> Cada criatura que estiver completamente dentro da n??voa no in??cio do seu turno deve realizar um teste de resist??ncia de Constitui????o contra veneno. Se falhar na resist??ncia, a criatura gastar?? sua a????o nesse turno tentando vomitar e cambaleando.</p><p> Um vento moderado (pelo menos 15 quil??metros por hora) dispersar?? a n??voa depois de 4 rodadas. Um vento forte (pelo menos 30 quil??metros por hora) dispersar?? a n??voa ap??s 1 rodada.","classes":["Bardo","Feiticeiro","Mago"],"favorite":false},{"id":264,"level":"5","name":"N??voa Mortal","name_en":"Cloudkill","school":{"pt":"Conjura????o","style":"conjuration"},"castingTime":"1 a????o","range":"36 metros","components":"V, S","concentration":"s","duration":"at?? 10 minutos","description":"Voc?? cria uma esfera de nevoeiro venenoso de cor amarelo - esverdeado, com 6 metros de raio, centrado em um ponto, ?? sua escolha, dentro do alcance. O nevoeiro se espalha, dobrando esquinas. Ele permanece pela dura????o ou at?? um vento forte dispersar o nevoeiro, terminando a magia. Sua ??rea ?? de escurid??o densa.</p><p> Quando uma criatura entra na ??rea da magia pela primeira vez no turno dela ou come??a seu turno l??, essa criatura deve realizar um teste de resist??ncia de Constitui????o. A criatura sofre 5d8 de dano de veneno, ou metade desse dano, se passar no teste. As criaturas ser??o afetadas mesmo se prenderem a respira????o ou n??o precisarem respirar.</p><p> O nevoeiro se afasta 3 metros de voc?? no come??o de cada um dos seus turnos, deslizando pela superf??cie do solo. Os vapores s??o mais pesados que o ar, mantendo - se nos n??veis mais baixos do terreno, at?? mesmo caindo em aberturas.</p><p><strong> Em N??veis Superiores </strong>. Se voc?? conjurar essa magia usando um espa??o de magia de 6?? n??vel ou superior, o dano aumenta em 1d8 para cada n??vel do espa??o acima do 5??.","classes":["Feiticeiro","Mago"],"favorite":false},{"id":68,"level":"1","name":"N??voa Obscurecente","name_en":"Fog Cloud","school":{"pt":"Conjura????o","style":"conjuration"},"castingTime":"1 a????o","range":"36 metros","components":"V, S","concentration":"s","duration":"at?? 1 hora","description":"Voc?? cria uma esfera de 6 metros de raio de n??voa, centrada num ponto, dentro do alcance. A esfera se espalha, dobrando esquinas, e a ??rea dela ?? de escurid??o densa. Ela permanece pela dura????o ou at?? um vento moderado ou mais r??pido (pelo menos 15 quil??metros por hora) dispers??-la.</p><p><strong> Em N??veis Superiores </strong>. Quando voc?? conjurar essa magia usando um espa??o de magia de 2?? n??vel ou superior, o raio da n??voa aumenta em 6 metros para cada n??vel do espa??o acima do 1??.","classes":["Druida","Feiticeiro","Mago","Patrulheiro"],"favorite":false},{"id":125,"level":"2","name":"Nublar","name_en":"Blur","school":{"pt":"Ilus??o","style":"illusion"},"castingTime":"1 a????o","range":"pessoal","components":"V","concentration":"s","duration":"at?? 1 minuto","description":"Seu corpo se torna turvo, mudando e oscilando para todos que puderem ver voc??. Pela dura????o, qualquer criatura ter?? desvantagem nas jogadas de ataque contra voc??. Um atacante ?? imune a esse efeito se n??o depender de vis??o, como os que tenham percep????o ??s cegas ou os que puderem ver atrav??s de ilus??es, como os com vis??o verdadeira.","classes":["Feiticeiro","Mago"],"favorite":false},{"id":126,"level":"2","name":"Nuvem de Adagas","name_en":"Cloud of Daggers","school":{"pt":"Conjura????o","style":"conjuration"},"castingTime":"1 a????o","range":"18 metros","components":"V, S, M","concentration":"s","duration":"at?? 1 minuto","material":"uma lasca de vidro","description":"Voc?? preenche o ar com adagas girat??rias num cubo de 1,5 metro quadrado, centrado em m ponto, ?? sua escolha, dentro do alcance. Uma criatura sofre 4d4 de dano cortante quando entra na ??rea da magia pela primeira vez no turno dela ou come??a seu turno na ??rea.</p><p><strong> Em N??veis Superiores </strong>. Se voc?? conjurar essa magia usando um espa??o de magia de 3?? n??vel ou superior, o dano aumenta em 2d4 para cada n??vel do espa??o acima do 2??.","classes":["Bardo","Bruxo","Feiticeiro","Mago"],"favorite":false},{"id":339,"level":"8","name":"Nuvem Incendi??ria","name_en":"Incendiary Cloud","school":{"pt":"Conjura????o","style":"conjuration"},"castingTime":"1 a????o","range":"45 metros","components":"V, S","concentration":"s","duration":"at?? 1 minuto","description":"Uma nuvem de fuma??a rodopiante que dispara brasas incandescentes aparece numa esfera de 6 metros centrada num ponto, dentro do alcance. A nuvem se espalha, dobrando esquinas, e gera escurid??o densa. Ela permanece pela dura????o ou at?? que um vento de velocidade moderada ou mais forte (pelo menos 15 quil??metros por hora) a disperse.</p><p> Quando a nuvem aparece, cada criatura deve realizar um teste de resist??ncia de Destreza. Uma criatura sofre 10d8 de dano de fogo se falhar na resist??ncia ou metade desse dano se passar. Uma criatura deve, tamb??m, realizar um teste de resist??ncia quando entrar na ??rea da magia pela primeira vez num turno ou terminar seu turno nela.</p><p> A nuvem se afasta 3 metros de voc?? numa dire????o, que voc?? escolheu, no come??o de cada um dos seus turnos.","classes":["Feiticeiro","Mago"],"favorite":false},{"id":224,"level":"4","name":"Olho Arcano","name_en":"Arcane Eye","school":{"pt":"Adivinha????o","style":"divination"},"castingTime":"1 a????o","range":"9 metros","components":"V, S, M","concentration":"s","duration":"at?? 1 hora","material":"um punhado de pelo de morcego","description":"Voc?? cria um olho m??gico invis??vel, dentro do alcance, que flutua no ar pela dura????o.</p><p> Voc?? mentalmente recebe informa????es visuais do olho, que possui vis??o normal e vis??o no escuro com alcance de 9 metros. O olho pode ver em todas as dire????es.</p><p> Com uma a????o, voc?? pode mover o olho at?? 9 metros em qualquer dire????o. N??o existe limite de qu??o longe de voc?? o olho pode se mover, mas ele n??o pode entrar em outro plano de exist??ncia. Uma barreira solida bloqueia o movimento do olho, mas o olho pode passar atrav??s de aberturas de at?? 3 cent??metros de di??metro.","classes":["Mago"],"favorite":false},{"id":265,"level":"5","name":"Onda Destrutiva","name_en":"Destructive Wave","school":{"pt":"Evoca????o","style":"evocation"},"castingTime":"1 a????o","range":"pessoal","components":"V","duration":"instant??nea","description":"Voc?? golpeia o ch??o, criando uma explos??o de energia divina que se propaga de voc??. Cada criatura, ?? sua escolha, a at?? 9 metros de voc??, deve ser bem sucedida em um teste de resist??ncia de Constitui????o ou sofrer?? 5 d5 de dano trovejante, assim como 5d6 de dano radiante ou necr??tico (?? sua escolha), e ser?? derrubada no ch??o. Uma criatura que obtenha sucesso no teste de resist??ncia sofre metade desse dano e n??o ?? derrubada no ch??o.","classes":["Paladino"],"favorite":false},{"id":69,"level":"1","name":"Onda Trovejante","name_en":"Thunderwave","school":{"pt":"Evoca????o","style":"evocation"},"castingTime":"1 a????o","range":"pessoal","components":"V, S","duration":"instant??nea","description":"Uma onda de for??a trovejante varre tudo a partir de voc??. Cada criatura num cubo de 4, 5 metros originado em voc??, deve realizar um teste de resist??ncia de Constitui????o. Se falhar na resist??ncia, uma criatura sofrer?? 2d8 de dano trovejante e ser?? empurrada 3 metros para longe de voc??. Se obtive sucesso na resist??ncia, a criatura sofrer?? metade desse dano e n??o ser?? empurrada.</p><p> Al??m disso, objetos soltos que estiverem completamente dentro da ??rea de efeito ser??o automaticamente empurrados 3 metros para longe de voc?? pelo efeito da magia e a magia emitir?? um ressonante barulho de trov??o aud??vel a at?? 90 metros.</p><p><strong> Em N??veis Superiores </strong>. Quando voc?? conjurar essa magia usando um espa??o de magia de 2?? n??vel ou superior, o dano aumenta em 1d8 para cada n??vel acima do 1??.","classes":["Bardo","Druida","Feiticeiro","Mago"],"favorite":false},{"id":127,"level":"2","name":"Ora????o Curativa","name_en":"Prayer Of Healing","school":{"pt":"Evoca????o","style":"evocation"},"castingTime":"10 minutos","range":"9 metros","components":"V","duration":"instant??nea","description":"At?? seis criaturas, ?? sua escolha, que voc?? possa ver, dentro do alcance, recuperam uma quantidade de pontos de vida igual a 2d8 + seu modificador de habilidade de conjura????o, cada uma. Essa magia n??o afeta mortos - vivos ou constructos.</p><p><strong> Em N??veis Superiores </strong>. Quando voc?? conjurar essa magia usando um espa??o de magia de 3?? n??vel ou superior, a cura aumenta em 1d8 para cada n??vel do espa??o acima do 2??.","classes":["Cl??rigo"],"favorite":false},{"id":70,"level":"1","name":"Orbe Crom??tica","name_en":"Chromatic Orb","school":{"pt":"Evoca????o","style":"evocation"},"castingTime":"1 a????o","range":"27 metros","components":"V, S, M","duration":"instant??nea","material":"um diamante valendo, no m??nimo, 50 po","description":"Voc?? arremessa uma esfera de energia de 12 cent??metros de di??metro numa criatura que voc?? possa ver dentro do alcance. Voc?? escolhe ??cido, frio, fogo, el??trico, veneno ou trovejante para o tipo de orbe que voc?? cria e, ent??o, realiza um ataque ?? dist??ncia com magia. Se o ataque atingir, a criatura sofre 3d8 de dano do tipo escolhido.</p><p><strong> Em N??veis Superiores </strong>. Quando voc?? conjurar essa magia usando um espa??o de magia de 2?? n??vel ou superior, o dano aumenta em 1d8 para cada n??vel do espa??o acima do 1??.","classes":["Feiticeiro","Mago"],"favorite":false},{"id":15,"level":"0","name":"Orienta????o","name_en":"Guidance","school":{"pt":"Adivinha????o","style":"divination"},"castingTime":"1 a????o","range":"toque","components":"V, S","concentration":"s","duration":"at?? 1 minuto","description":"Voc?? toca uma criatura volunt??ria. Uma vez, antes da magia acabar, o alvo pode rolar 1d4 e adicionar o n??mero rolado a um teste de habilidade a escolha dele. Ele pode rolar o dado antes ou depois de realizar o teste de habilidade. Ap??s isso, a magia termina.","classes":["Cl??rigo","Druida"],"favorite":false},{"id":184,"level":"3","name":"Padr??o Hipn??tico","name_en":"Hypnotic Pattern","school":{"pt":"Ilus??o","style":"illusion"},"castingTime":"1 a????o","range":"36 metros","components":"S, M","concentration":"s","duration":"at?? 1 minuto","material":"uma vareta brilhante de incenso ou um frasco de cristal cheio de material fosforescente","description":"Voc?? cria um padr??o retorcido de cores que se entrela??a atrav??s do ar dentro de um cubo de 9 metros, dentro do alcance. O padr??o aparece por um momento depois desaparece. Cada criatura na ??rea que ver o padr??o, deve realizar um teste de resist??ncia de Sabedoria. Se falhar na resist??ncia, a criatura fica enfeiti??ada pela dura????o. Enquanto estiver enfeiti??ada por essa magia, a criatura est?? incapacitada e tem deslocamento 0.</p><p> A magia acaba em uma criatura afetada se ela sofrer dano ou se algu??m usar uma a????o para agitar a criatura para tir??-la de seu estupor.","classes":["Bardo","Bruxo","Feiticeiro","Mago"],"favorite":false},{"id":71,"level":"1","name":"Palavra Curativa","name_en":"Healing Word","school":{"pt":"Evoca????o","style":"evocation"},"castingTime":"1 a????o b??nus","range":"18 metros","components":"V","duration":"instant??nea","description":"Uma criatura, ?? sua escolha, que voc?? possa ver dentro do alcance recupera uma quantidade de pontos de vida igual a 1d4 + seu modificador de habilidade de conjura????o. Essa magia n??o tem efeito em mortos - vivos ou constructos </p><p><strong> Em N??veis Superiores </strong>. Quando voc?? conjurar essa magia usando um espa??o de magia de 2?? n??vel ou superior, a cura aumenta em 1d4 para cada n??vel do espa??o acima do 1??.","classes":["Bardo","Cl??rigo","Druida"],"favorite":false},{"id":185,"level":"3","name":"Palavra Curativa Em Massa","name_en":"Mass Healing Word","school":{"pt":"Evoca????o","style":"evocation"},"castingTime":"1 a????o b??nus","range":"18 metros","components":"V","duration":"instant??nea","description":"?? medida que voc?? brada palavras de restaura????o, at?? seis criaturas, ?? sua escolha, que voc?? possa ver, dentro do alcance, recuperam uma quantidade de pontos de vida igual a 1d4 + seu modificador de habilidade de conjura????o. Essa magia n??o afeta mortos - vivos ou constructos.</p><p><strong> Em N??veis Superiores </strong>. Quando voc?? conjurar essa magia usando um espa??o de magia de 4?? n??vel ou superior, a cura aumenta em 1d4 para cada n??vel do espa??o acima do 3??.","classes":["Cl??rigo"],"favorite":false},{"id":340,"level":"8","name":"Palavra de Poder Atordoar","name_en":"Power Word Stun","school":{"pt":"Encantamento","style":"enchantment"},"castingTime":"1 a????o","range":"18 metros","components":"V","duration":"instant??nea","description":"Voc?? pronuncia uma palavra de poder que pode oprimir a mente de uma criatura que voc?? possa ver, dentro do alcance, deixando - a estupefata. Se o alvo escolhido estiver com 150 pontos de vida ou menos, ele ficar?? atordoado. Do contr??rio, essa magia n??o produz efeito.</p><p> O alvo atordoado deve realizar um teste de resist??ncia de Constitui????o no final de cada um dos turnos dele. Se obtiver sucesso na resist??ncia, o efeito de atordoamento termina.","classes":["Bardo","Bruxo","Feiticeiro","Mago"],"favorite":false},{"id":353,"level":"9","name":"Palavra de Poder Curar","name_en":"Power Word Heal","school":{"pt":"Evoca????o","style":"evocation"},"castingTime":"1 a????o","range":"toque","components":"V, S","duration":"instant??nea","description":"Uma onda de energia curativa inunda a criatura tocada. O alvo recupera todos os seus pontos de vida. Se a criatura estiver enfeiti??ada, amedrontada, paralisada ou atordoada, a condi????o termina. Se a criatura estiver ca??da, ela pode usar a rea????o dela para se levantar. Essa magia n??o afeta mortos - vivos ou constructos.","classes":["Bardo"],"favorite":false},{"id":354,"level":"9","name":"Palavra de Poder Matar","name_en":"Power Word Kill","school":{"pt":"Encantamento","style":"enchantment"},"castingTime":"1 a????o","range":"18 metros","components":"V","duration":"instant??nea","description":"Voc?? profere uma palavra de poder que pode compelir uma criatura que voc?? possa ver, dentro do alcance, a morrer instantaneamente. Se o alvo escolhido estiver com 100 pontos de vida ou menos, ele morre. Do contr??rio, essa magia n??o produz efeito.","classes":["Bardo","Bruxo","Feiticeiro","Mago"],"favorite":false},{"id":298,"level":"6","name":"Palavra de Recorda????o","name_en":"Word Of Recall","school":{"pt":"Conjura????o","style":"conjuration"},"castingTime":"1 a????o","range":"1,5 metro","components":"V","duration":"instant??nea","description":"Voc?? e at?? cinco criaturas volunt??ria a 1,5 metro de voc??, instantaneamente s??o teletransportadas para um santu??rio previamente designado. Voc?? e qualquer criatura que se teletransportar com voc??, aparece no espa??o desocupado mais pr??ximo do ponto que voc?? designou quando preparou seu santu??rio (veja abaixo). Se voc?? conjurar essa magia sem ter preparado um santu??rio primeiro, a magia n??o funciona.</p><p> Voc?? deve designar um santu??rio na conjura????o dessa magia dentro de um local, como um templo dedicado ou fortemente ligado a sua divindade. Se voc?? tentar conjurar essa magia dessa forma em uma ??rea que n??o seja dedicada ?? sua divindade, a magia n??o funciona.","classes":["Cl??rigo"],"favorite":false},{"id":316,"level":"7","name":"Palavra Divina","name_en":"Divine Word","school":{"pt":"Evoca????o","style":"evocation"},"castingTime":"1 a????o b??nus","range":"9 metros","components":"V","duration":"instant??nea","description":"Voc?? profere uma palavra divina, imbu??da com o poder que moldou o mundo na aurora da cria????o. Escolha qualquer quantidade de criaturas que voc?? possa ver dentro do alcance. Cada criatura que puder ouvir voc?? deve realizar um teste de resist??ncia de Carisma. Ao falhar na resist??ncia, uma criatura sofre um efeito baseado nos seus pontos de vida atuais: </p><ul><li> 50 pontos de vida ou menos: surda por 1 minuto </li><li> 40 pontos de vida ou menos: surda e cega por 10 minutos </li><li> 30 pontos de vida ou menos: surda, cega e atordoada por 1 hora </li><li> 20 pontos de vida ou menos: morta instantaneamente </li></ ul><p> Independentemente dos seus pontos de vida atuais, um celestial, corruptor, elemental ou fada que falhar na sua resist??ncia ?? obrigado a voltar para o plano de origem dele (se j?? n??o for aqui) e n??o pode retornar para o plano atual por 24 horas atrav??s de nenhum meio inferior ?? magia <em> desejo </em>.</p> ","classes":["Cl??rigo"],"favorite":false},{"id":355,"level":"9","name":"Parar o Tempo","name_en":"Time Stop","school":{"pt":"Transmuta????o","style":"transmutation"},"castingTime":"1 a????o","range":"pessoal","components":"V","duration":"instant??nea","description":"Voc??, por um breve momento, para o fluxo do tempo pra tudo, menos pra voc??. Nenhum tempo se passa para as outras criaturas, enquanto voc?? realiza 1d4 + 1 turnos de uma vez, durante os quais voc?? pode usar a????es e se mover normalmente.</p><p> Essa magia termina se uma das a????es que voc?? fizer durante esse per??odo ou qualquer efeito que voc?? criar, afetar uma criatura diferente de voc?? ou um objeto que esteja sendo vestido ou carregado por outro que n??o voc??. Al??m disso, a magia termina se voc?? se mover para um lugar a mais de 300 metros do local onde voc?? conjurou essa magia.","classes":["Feiticeiro","Mago"],"favorite":false},{"id":128,"level":"2","name":"Passo Nebuloso","name_en":"Misty Step","school":{"pt":"Conjura????o","style":"conjuration"},"castingTime":"1 a????o b??nus","range":"pessoal","components":"V","duration":"instant??nea","description":"Brevemente envolto por uma neblina prateada, voc?? se teletransporta a at?? 9 metros para um espa??o desocupado que voc?? possa ver.","classes":["Bruxo","Feiticeiro","Mago"],"favorite":false},{"id":72,"level":"1","name":"Passos Longos","name_en":"Longstrider","school":{"pt":"Transmuta????o","style":"transmutation"},"castingTime":"1 a????o","range":"toque","components":"V, S, M","duration":"1 hora","material":"um pouco de barro","description":"Voc?? toca uma criatura. O deslocamento do alvo aumenta em 3 metros, at?? a magia acabar.</p><p><strong> Em N??veis Superiores </strong>. Quando voc?? conjurar essa magia usando um espa??o de magia de 2?? n??vel ou superior, voc?? pode afetar uma criatura adicional para cada n??vel do espa??o acima do 1??.","classes":["Bardo","Druida","Mago","Patrulheiro"],"favorite":false},{"id":129,"level":"2","name":"Passos Sem Pegadas","name_en":"Pass Without Trace","school":{"pt":"Abjura????o","style":"abjuration"},"castingTime":"1 a????o","range":"pessoal","components":"V, S, M","concentration":"s","duration":"at?? 1 hora","material":"cinzas de uma folha de visco queimada e um ramo de pinheiro","description":"Um v??u de sombras e silencia irradia de voc??, encobrindo voc?? e seus companheiros contra detec????o. Pela dura????o, cada criatura, ?? sua escolha, a at?? 9 metros de voc?? (incluindo voc??) recebe + 10 de b??nus em testes de Destreza (Furtividade) e n??o pode ser rastreada, exceto por meio m??gicos. Uma criatura que receber esse b??nus n??o deixa quaisquer pegadas ou outros vest??gios da sua passagem.","classes":["Druida","Patrulheiro"],"favorite":false},{"id":130,"level":"2","name":"Patas de Aranha","name_en":"Spider Climb","school":{"pt":"Transmuta????o","style":"transmutation"},"castingTime":"1 a????o","range":"toque","components":"V, S, M","concentration":"s","duration":"at?? 1 hora","material":"uma gota de betume e uma aranha","description":"At?? a magia acabar, uma criatura volunt??ria que voc?? tocar, recebe a habilidade de se mover para cima, para baixo e atrav??s de superf??cies verticais e de cabe??a para baixo pelos tetos, enquanto deixa suas m??os livres. O alvo tamb??m ganha deslocamento de escalada igual a seu deslocamento de caminhada.","classes":["Bruxo","Feiticeiro","Mago"],"favorite":false},{"id":131,"level":"2","name":"Pele de ??rvore","name_en":"Barkskin","school":{"pt":"Transmuta????o","style":"transmutation"},"castingTime":"1 a????o","range":"toque","components":"V, S, M","concentration":"s","duration":"at?? 1 hora","material":"um peda??o de casca de carvalho","description":"Voc?? toca uma criatura volunt??ria. At?? o fim da magia, a pele da criatura fica r??gida, similar a casca de um carvalho, e a CA do alvo n??o pode ser inferior a 16, independentemente do tipo de armadura que ela esteja vestindo.","classes":["Druida","Patrulheiro"],"favorite":false},{"id":225,"level":"4","name":"Pele de Pedra","name_en":"Stoneskin","school":{"pt":"Abjura????o","style":"abjuration"},"castingTime":"1 a????o","range":"toque","components":"V, S, M","concentration":"s","duration":"at?? 1 hora","material":"p?? de diamante no valor de 100 po, consumido pela magia","description":"Essa magia transforma a pele de uma criatura volunt??ria que voc?? tocar em rocha s??lida. At?? a magia acabar, o alvo tem resist??ncia a dano de concuss??o, cortante e perfurante n??o - m??gico.","classes":["Druida","Feiticeiro","Mago","Patrulheiro"],"favorite":false},{"id":186,"level":"3","name":"Pequena Cabana de Leomund","name_en":"Leomund's Tiny Hut","ritual":"s","school":{"pt":"Evoca????o","style":"evocation"},"castingTime":"1 minuto","range":"pessoal","components":"V, S, M","duration":"8 horas","material":"uma pequena conta de cristal","description":"Um domo de energia im??vel, de 3 metros de raio, aparece do nada, ao seu redor e acima de voc?? e permanece parado pela dura????o. A magia termina se voc?? deixar a ??rea.</p><p> Nove criaturas de tamanho M??dio ou menor podem caber dentro do domo com voc??. A magia falha se a ??rea incluir criaturas maiores ou mais de nove criaturas. Criaturas e objetos dentro do domo quando voc?? conjurou essa magia, podem se mover atrav??s dele livremente. Todas as outras criaturas e objetos s??o bloqueados ao tentarem atravessa - lo. Magias e outros efeitos m??gicos n??o podem se estender atrav??s do domo ou serem conjurados atrav??s dele. A atmosfera dentro do espa??o ?? confort??vel e seca, independente do clima do lado de fora.</p><p> At?? a magia acabar, voc?? pode comandar o interior para que fique mal iluminado ou escuro. O domo ?? opaco do lado de fora, de qualquer cor que voc?? desejar, mas ?? transparente do lado de dentro.","classes":["Bardo","Mago"],"favorite":false},{"id":73,"level":"1","name":"Perdi????o","name_en":"Bane","school":{"pt":"Encantamento","style":"enchantment"},"castingTime":"1 a????o","range":"9 metros","components":"V, S, M","concentration":"s","duration":"at?? 1 minuto","material":"uma gota de sangue","description":"At?? tr??s criaturas, ?? sua escolha, que voc?? possa ver dentro do alcance, devem realizar um teste de resist??ncia de Carisma. Sempre que um alvo que falhou nessa resist??ncia realizar uma jogada de ataque ou um teste de resist??ncia antes da magia acabar, o alvo deve rolar 1d4 e subtrair o valor rolado da jogada de ataque ou teste de resist??ncia.</p><p><strong> Em N??veis Superiores </strong>. Quando voc?? conjurar essa magia usando um espa??o de magia de 2?? n??vel ou superior, voc?? pode afetar uma criatura adicional para cada n??vel do espa??o acima do 1??.","classes":["Bardo","Cl??rigo"],"favorite":false},{"id":187,"level":"3","name":"Piscar","name_en":"Blink","school":{"pt":"Transmuta????o","style":"transmutation"},"castingTime":"1 a????o","range":"pessoal","components":"V, S","duration":"1 minuto","description":"Role 1d20 no final de cada um dos seus turnos pela dura????o da magia. Com um resultado de 11 ou maior, voc?? desaparece do seu plano de exist??ncia atual e reaparece no Plano Et??reo (a magia falha e a conjura????o ?? perdida se voc?? j?? estiver nesse plano). No in??cio do seu pr??ximo turno quando a magia terminar, se voc?? estiver no Plano Et??reo, voc?? retorna a um espa??o desocupado de sua escolha que voc?? possa ver a at?? 3 metros do espa??o em que voc?? desapareceu. Se n??o houver um espa??o dispon??vel dentro do alcance, voc?? reaparece no espa??o desocupado mais pr??ximo (escolhido aleatoriamente, se existir mais de um espa??o a mesma dist??ncia). Voc?? pode dissipar a magia com uma a????o.</p><p> Quando estiver no Plano Et??reo, voc?? pode ver e ouvir o plano de onde voc?? veio, que aparece em tons de cinza, e voc?? n??o pode ver nada al??m de 18 metros. Voc?? s?? pode afetar ou ser afetado por outras criaturas no Plano Et??reo. As criaturas que n??o estiverem l?? n??o podem notar voc?? nem interagir com voc??, a n??o ser que elas tenham uma habilidade que as permita.","classes":["Feiticeiro","Mago"],"favorite":false},{"id":226,"level":"4","name":"Porta Dimensional","name_en":"Dimension Door","school":{"pt":"Conjura????o","style":"conjuration"},"castingTime":"1 a????o","range":"150 metros","components":"V","duration":"instant??nea","description":"Voc?? se teletransporte da sua posi????o atual para qualquer local dentro do alcance. Voc?? aparece exatamente no local desejado. Pode ser um lugar que voc?? possa ver, um que voc?? possa visualizar ou um que voc?? possa descrever indicando a dist??ncia e dire????o, como??? 60 metros diretamente pra baixo??? ou??? 90 metros, subindo para noroeste num ??ngulo de 45 graus???.</p><p> Voc?? pode levar objetos com voc??, contanto que o peso deles n??o exceda o que voc?? pode carregar. Voc?? tamb??m pode levar uma criatura volunt??ria do seu tamanho ou menor, que esteja carregando equipamento at?? o limite da capacidade de carga dela. A criatura deve estar a 1,5 metro de voc?? quando voc?? conjurar a magia.</p><p> Se voc?? aparecer em um lugar que j?? esteja ocupado por um objeto ou uma criatura, voc?? e qualquer criatura viajando com voc??, sofrem 4d6 de dano de energia cada um e a magia falha em teletransportar voc??s.","classes":["Bardo","Bruxo","Feiticeiro","Mago"],"favorite":false},{"id":356,"level":"9","name":"Portal","name_en":"Gate","school":{"pt":"Conjura????o","style":"conjuration"},"castingTime":"1 a????o","range":"18 metros","components":"V, S, M","concentration":"s","duration":"at?? 1 minuto","material":"um diamante valendo, no m??nimo, 5. 000 po","description":"Voc?? conjura um portal conectando um espa??o desocupado que voc?? possa ver, dentro do alcance, a uma localiza????o precisa em um plano de exist??ncia diferente. O portal ?? uma abertura circular, que voc?? pode fazer ter de 1,5 a 6 metros de di??metro. Voc?? pode orientar o portal em qualquer dire????o, ?? sua escolha. O portal permanece pela dura????o.</p><p> O portal ter?? uma frente e um fundo em cada plano que ele aparecer. Viajar pelo portal s?? ?? poss??vel ao atravessa - lo pela frente. Qualquer coisa que o fizer, ?? instantaneamente transportado para o outro plano, aparecendo no espa??o desocupado mais pr??ximo do portal. Divindades e outros soberanos planares podem impedir que portais criados atrav??s dessa magia se abram na presen??a deles ou em qualquer parte dos seus dom??nios.</p><p> Quando voc?? conjurar essa magia, voc?? pode falar o nome de uma criatura especifica (um pseud??nimo, t??tulo ou apelido n??o funcionar??). Se essa criatura estiver em um plano diferente do que voc?? est??, o portal se abre na vizinhan??a imediata da criatura nomeada e suga a criatura para dentro do portal, fazendo - a aparecer no espa??o desocupado mais pr??ximo do seu lado do portal. Voc?? n??o adquire qualquer poder especial sobre a criatura e ela est?? livre para agir como o Mestre julgar apropriado. Ela pode ir embora, atacar voc?? ou ajudar voc??.","classes":["Cl??rigo","Feiticeiro","Mago"],"favorite":false},{"id":299,"level":"6","name":"Portal Arcano","name_en":"Arcane Gate","school":{"pt":"Conjura????o","style":"conjuration"},"castingTime":"1 a????o","range":"150 metros","components":"V, S","concentration":"s","duration":"at?? 10 minutos","description":"Voc?? cria portais de teletransporte conectados que permanecem abertos pela dura????o. Escolha dois pontos no solo que voc?? possa ver, um ponto a at?? 3 metros de voc?? e outro a at?? 150 metros de voc??. Um portal circular, com 3 metros de di??metro, se abre em cada ponto. Se o portal se abriria num local ocupado por uma criatura, a magia falha e a conjura????o ?? perdida.</p><p> Os portais s??o dois an??is dimensionais brilhantes cheios de n??voa, flutuando a cent??metros do ch??o, perpendicular a ele no ponto escolhido. Um anel ?? vis??vel apenas de um lado (?? sua escolha), que ?? o lado que funciona como portal.</p><p> Qualquer criatura ou objeto que adentrar o portal, sair?? pelo outro portal, como se ambos estivessem adjacentes um ao outro, atravessar um portal do lado que n??o ?? um portal n??o tem efeito. A n??voa que preenche cada portal ?? opaca e bloqueia a vis??o atrav??s dele. No seu turno, voc?? pode girar os an??is, com uma a????o b??nus, fazendo o lado ativo ficar em uma dire????o diferente.","classes":["Bruxo","Feiticeiro","Mago"],"favorite":false},{"id":266,"level":"5","name":"Praga","name_en":"Contagion","school":{"pt":"Necromancia","style":"necromancy"},"castingTime":"1 a????o","range":"toque","components":"V, S","duration":"7 dias","description":"Seu toque inflige uma doen??a. Fa??a um ataque de magia corpo - a - corpo contra uma criatura ao seu alcance. Se atingir, voc?? aflige a criatura com uma doen??a, de sua escolha, entre qualquer um das descritas abaixo. No final de cada turno do alvo, ele deve realizar um teste de resist??ncia de Constitui????o. Ap??s obter tr??s falhas nesses testes de resist??ncia, o efeito da doen??a permanece pela dura????o e a criatura para de fazer testes de resist??ncia. Ap??s obter tr??s sucessos nesses testes de resist??ncia, a criatura se recupera da doen??a e a magia termina.</p><p> J?? que essa magia induz uma doen??a natural no alvo, qualquer efeito que remova uma doen??a, ou de outra forma, melhore os efeitos de uma doen??a, se aplica a ela.</p><p><em><strong> Ard??ncia Mental </strong></ em>. A mente da criatura fica febril. A criatura tem desvantagem em testes de Intelig??ncia, testes de resist??ncia de Intelig??ncia e a criatura age como se estivesse sob efeito da magia <em> confus??o </em> durante um combate.</p><p><em><strong> Enjoo Cegante </strong></ em>. A dor se agarra a mente da criatura e seus olhos ficam branco - leitosos. A criatura tem desvantagem em testes de Sabedoria e testes de resist??ncia de Sabedoria e est?? cega.</p><p><em><strong> Febre do Esgoto </strong></ em>. Uma febre voraz se espalha pelo corpo da criatura. A criatura tem desvantagem em testes de For??a, testes de resist??ncia de For??a e jogadas de ataque que usem For??a.</p><p><em><strong> Necrose da Carne </strong></ em>. A carne da criatura se decomp??e. A criatura tem desvantagem em testes de Carisma e vulnerabilidade a todos os danos.</p><p><em><strong> Perdi????o Pegajosa </strong></ em>. A criatura come??a a sangrar incontrolavelmente. A criatura tem desvantagem em testes de Constitui????o e testes de resist??ncia de Constitui????o. Al??m disso, sempre que a criatura sofrer dano, ela ficar?? atordoada at?? o fim do seu pr??ximo turno.</p><p><em><strong> Tremedeira </strong></ em>. A criatura ?? acometida por espasmos. A criatura tem desvantagem em testes de Destreza, testes de resist??ncia de Destreza e jogadas de ataque que usem Destreza.","classes":["Cl??rigo","Druida"],"favorite":false},{"id":267,"level":"5","name":"Praga de Insetos","name_en":"Insect Plague","school":{"pt":"Conjura????o","style":"conjuration"},"castingTime":"1 a????o","range":"90 metros","components":"V, S, M","concentration":"s","duration":"at?? 10 minutos","material":"alguns gr??os de a????car, alguns miolos de gr??o e uma mancha de gordura","description":"Um enxame voraz de gafanhotos preenche uma esfera de 6 metros de raio, centrada no ponto que voc?? escolher, dentro do alcance. A esfera se espalha dobrando esquinas. A esfera permanece pela dura????o e sua ??rea ?? de escurid??o leve. A ??rea da esfera ?? de terreno dif??cil.</p><p> Quando a ??rea aparece, cada criatura dentro dela deve realizar um teste de resist??ncia de Constitui????o. Uma criatura sofre 4d10 de dano perfurante se falhar na resist??ncia ou metade desse dano se passar. Uma criatura deve, tamb??m, realizar um teste de resist??ncia quando entrar na ??rea da magia pela primeira vez num turno ou terminar seu turno nela.</p><p><strong> Em N??veis Superiores </strong>. Quando voc?? conjurar essa magia usando um espa??o de magia de 6?? n??vel ou superior, o dano aumenta em 1d10 para cada n??vel do espa??o acima do 5??.","classes":["Cl??rigo","Druida","Feiticeiro"],"favorite":false},{"id":16,"level":"0","name":"Prestidigita????o","name_en":"Prestidigitation","school":{"pt":"Transmuta????o","style":"transmutation"},"castingTime":"1 a????o","range":"3 metros","components":"V, S","duration":"at?? 1 hora","description":"Essa magia ?? um truque m??gico simples que conjuradores iniciantes usam para praticar. Voc?? cria um dos seguintes efeitos m??gicos dentro do alcance: </p><ul><li> Voc?? cria, instantaneamente, um efeito sensorial inofensivo, como uma chuva de fa??scas, um sopro de vento, notas musicais suaves ou um odor estranho.</li><li> Voc??, instantaneamente, acende ou apaga uma vela, uma tocha ou uma pequena fogueira.</li><li> Voc??, instantaneamente, limpa ou suja um objeto de at?? 1 metro c??bico.</li><li> Voc?? esfria, esquenta ou melhora o sabor de at?? 1 metro cubico de mat??ria inorg??nica por 1 hora.</li><li> Voc?? faz uma cor, uma pequena marca ou um s??mbolo aparecer em um objeto ou superf??cie por 1 hora.</li><li> Voc?? cria uma bugiganga n??o - m??gica ou uma imagem ilus??ria que caiba na sua m??o e que dura at?? o final do seu pr??ximo turno.</li></ul><p> Se voc?? conjurar essa magia diversas vezes, voc?? pode ter at?? tr??s dos seus efeitos n??o - instant??neos ativos, ao mesmo tempo, e voc?? pode dissipar um desses efeitos com uma a????o.","classes":["Bardo","Bruxo","Feiticeiro","Mago"],"favorite":false},{"id":317,"level":"7","name":"Pris??o de Energia","name_en":"Forcecage","school":{"pt":"Evoca????o","style":"evocation"},"castingTime":"1 a????o","range":"30 metros","components":"V, S, M","duration":"1 hora","material":"p?? de rubi no valor de 1. 500 po","description":"Uma pris??o em formato c??bico, im??vel e invis??vel, composta de energia m??gica brota do nada, em volta de uma ??rea, ?? sua escolha, dentro do alcance. A pris??o pode ser uma cela ou uma caixa s??lida, ?? sua escolha.</p><p> Uma pris??o em formato de cela pode ter at?? 6 metros quadrados e ?? feita de barras com 1,5 cent??metro de di??metro espa??adas a 1,5 cent??metro umas das outras.</p><p> Uma pris??o em formato de caixa pode ter at?? 3 metros quadrados, criando uma barreira s??lida que impede qualquer mat??ria de atravess??-la e bloqueia qualquer magia conjurada de entrar ou sair da ??rea.</p><p> Quando voc?? conjura a magia, qualquer criatura que estiver completamente dentro da ??rea da pris??o ficar?? presa. As criaturas que estiverem apenas parcialmente na ??rea, ou as grandes demais para caber dentro da ??rea, s??o empurradas do centro da ??rea, at?? estarem completamente fora dela.</p><p> Uma criatura dentro da pris??o n??o pode sair dela por meios n??o - m??gicos. Se a criatura tentar usar teletransporte ou viagem entre planos para abandonar a pris??o, ela deve, primeiro, realizar um teste de resist??ncia de Carisma. Se obtiver sucesso, a criatura pode usar a magia e sair da pris??o. Se falhar, a criatura n??o pode sair da pris??o e desperdi??a o uso da magia ou efeito. A pris??o tamb??m se estende ao Plano Et??reo, bloqueando viagem et??rea.</p><p> Essa magia n??o pode ser dissipada por <em> dissipar magia </em>.</p> ","classes":["Bardo","Bruxo","Mago"],"favorite":false},{"id":300,"level":"6","name":"Proibi????o","name_en":"Forbiddance","ritual":"s","school":{"pt":"Abjura????o","style":"abjuration"},"castingTime":"10 minutos","range":"toque","components":"V, S, M","duration":"1 dia","material":"uma borrifada de ??gua benta, incensos raros e p?? de rubi valendo, no m??nimo, <br/> 1. 000 po","description":"Voc?? cria uma defesa contra viagem m??gica que protege at?? 12. 000 metros quadrados de solo at?? 9 metros de altura do solo. Pela dura????o, criaturas n??o conseguem se teletransportar para dentro da ??rea ou usar portais, como os criados pela magia <em> portal </em>, para entrar na ??rea. A magia protege a ??rea contra viagem planar e, portanto, impede criaturas de acessarem a ??rea por meio do Plano Astra, Plano Et??reo, Fa??ria, Umbra ou pela magia <em> viagem planar </em>.</p><p> Al??m disso, a magia causa dano a certos tipos de criatura, ?? sua escolha, quando a conjurar. Escolha um ou mais dentre os seguintes: celestiais, corruptores, elementais, fadas ou mortos - vivos. Quando uma criatura escolhida entrar na ??rea da magia pela primeira vez em um turno ou come??a seu turno nela, a criatura sofre 5d6 de dano radiante ou necr??tico (?? sua escolha, quando voc?? conjura a magia).</p><p> Quando voc?? conjura essa magia, voc?? pode definir uma senha. Uma criatura que falar a senha quando entrar na ??rea n??o sofrer?? dano dessa magia.</p><p> A ??rea da magia n??o pode sobrepor a ??rea de outra magia <em> proibi????o </em>. Se voc?? conjurar <em> proibi????o </em> a cada dia por 30 dias no mesmo local, a magia durar?? at?? ser dissipada, e os componentes materiais ser??o consumidos apenas na ??ltima conjura????o.","classes":["Cl??rigo"],"favorite":false},{"id":357,"level":"9","name":"Proje????o Astral","name_en":"Astral Projection","school":{"pt":"Necromancia","style":"necromancy"},"castingTime":"1 hora","range":"3 metros","components":"V, S, M","duration":"especial","material":"para cada criatura que voc?? afetar com essa magia, voc?? deve fornecer um jacinto valendo, no m??nimo, 1. 000 po e uma barra de prata com ornamentos esculpidos valendo, no m??nimo, 100 po, todos consumidos pela magia","description":"Voc?? e at?? oito criaturas volunt??rias dentro do alcance, projetam seus corpos astrais para o Plano Astral (a magia falha e a conjura????o ?? perdida se voc?? j?? estiver no plano). O corpo material que voc?? deixa para tr??s ficar?? inconsciente e em estado de anima????o suspensa, ele n??o precisa de comida ou ar e n??o envelhece.</p><p> Seu corpo astral assemelhasse ?? sua forma mortal em praticamente tudo, copiando suas estat??sticas de jogo e posses. A principal diferen??a ?? a adi????o de um cord??o prateado que se estende de tr??s da sua omoplata e tra??a um caminho atr??s de voc??, sumindo ap??s 30 cent??metros. Esse cord??o ?? a sua corrente com o seu corpo material. Enquanto sua corrente permanecer intacta, voc?? pode encontrar seu caminho de volta pra casa. Se o cord??o for cortado??? algo que s?? pode acontecer se um efeito dizer especificamente que faz isso??? sua alma e corpo est??o separados, matando voc?? instantaneamente.</p><p> Sua forma astral pode viajar livremente dentro do Plano Astral e pode passar atrav??s de portais que levam a qualquer outro plano. Se voc?? entrar em um novo portal ou retornar para o plano que voc?? estava quando conjurou a magia, seu corpo e posses s??o transportados ao longo do cord??o de prata, permitindo que voc?? reentre no seu corpo ao entrar no novo plano. Sua forma astral ?? uma encarna????o separada. Qualquer dano ou outros efeitos que se aplicarem a ela, n??o ter??o efeito no seu corpo f??sico, nem persistem quando voc?? voltar.</p><p> A magia termina para voc?? e seus companheiros quando voc?? usar sua a????o para dissip??-la. Quando a magia termina, as criaturas afetadas voltam para seus corpos f??sicos e acordam.</p><p> A magia tamb??m pode terminar prematuramente para voc?? ou um dos seus companheiros. Uma magia <em> dissipar magia </em>, bem sucedida, usada contra um corpo astral ou f??sico termina a magia para a criatura. Se o corpo original de uma criatura ou sua forma astral ca??rem a 0 pontos de vida, a magia termina para essa criatura. Se a magia terminar e o cord??o prateado estiver intacto, o cord??o puxa a forma astral da criatura de volta para seu corpo, terminando seu estado de anima????o suspensa.</p><p> Se voc?? retornar para o seu corpo prematuramente, seus companheiros permanecem nas suas formas astrais e devem encontrar seus pr??prios meios de voltar para seus corpos, geralmente caindo a 0 pontos de vida.","classes":["Bruxo","Cl??rigo","Mago"],"favorite":false},{"id":318,"level":"7","name":"Projetar Imagem","name_en":"Project Image","school":{"pt":"Ilus??o","style":"illusion"},"castingTime":"1 a????o","range":"750 quil??metros","components":"V, S, M","concentration":"s","duration":"at?? 1 dia","material":"uma pequena r??plica sua feita com materiais valendo, no m??nimo, 5 po","description":"Voc?? cria uma c??pia ilus??ria de si mesmo, que permanece pela dura????o. A c??pia pode aparecer em qualquer lugar, dentro do alcance, que voc?? j?? tenha visto antes, independentemente da interven????o de obst??culos. A ilus??o se parece e fala como voc??, mas ?? intang??vel. Se a ilus??o sofrer qualquer dano, ela desaparece e a magia acaba.</p><p> Voc?? pode ver atrav??s dos olhos e ouvir atrav??s dos ouvidos da c??pia como se voc?? estivesse no lugar dela. Em cada um dos seus turnos, com uma a????o b??nus, voc?? pode trocar o uso dos sentidos dela pelo seu ou voltar novamente. Enquanto voc?? est?? usando os sentidos dela, voc?? fica cego e surdo ao que est?? a sua volta.</p><p> Intera????o f??sica com a imagem revelar?? ela como sendo uma ilus??o, j?? que as coisas podem atravess??-la. Uma criatura que usar sua a????o para examinar a imagem, pode determinar que ela ?? uma ilus??o sendo bem sucedida num teste de Intelig??ncia (Investiga????o) contra a CD da magia para desacredit??-la. Se a criatura discernir a ilus??o como ela ??, a criatura poder?? ver atrav??s da imagem e qualquer barulho que ela fizer soar?? oco para a criatura.","classes":["Bardo","Mago"],"favorite":false},{"id":227,"level":"4","name":"Prote????o contra a Morte","name_en":"Death Ward","school":{"pt":"Abjura????o","style":"abjuration"},"castingTime":"1 a????o","range":"toque","components":"V, S","duration":"8 horas","description":"Voc?? toca uma criatura e concede a ela uma certa prote????o contra a morte.</p><p> A primeira vez que o alvo cair a 0 pontos de vida, como resultado de ter sofrido dano, o alvo, ao inv??s disso, cai a 1 ponto de vida e a magia termina.</p><p> Se a magia ainda estiver funcionando quando o alvo for afetado por um efeito que poderia mata - lo instantaneamente sem causar dano, o efeito, ao inv??s disso, n??o funciona no alvo e a magia termina.","classes":["Cl??rigo","Paladino"],"favorite":false},{"id":188,"level":"3","name":"Prote????o contra Energia","name_en":"Protect From Energy","school":{"pt":"Abjura????o","style":"abjuration"},"castingTime":"1 a????o","range":"toque","components":"V, S","concentration":"s","duration":"at?? 1 hora","description":"Pela dura????o, a criatura volunt??ria que voc?? tocar ter?? resist??ncia a um tipo de dano de sua escolha: ??cido, el??trico, fogo, frio ou trovejante.","classes":["Cl??rigo","Druida","Feiticeiro","Mago","Patrulheiro"],"favorite":false},{"id":17,"level":"0","name":"Prote????o contra L??minas","name_en":"Blade Ward","school":{"pt":"Abjura????o","style":"abjuration"},"castingTime":"1 a????o","range":"pessoal","components":"V, S","duration":"1 rodada","description":"Voc?? estende suas m??os e desenha um s??mbolo de prote????o no ar. At?? o final do seu pr??ximo turno, voc?? ter?? resist??ncia contra dano de concuss??o, cortante e perfurante causado por ataques com armas.","classes":["Bardo","Bruxo","Feiticeiro","Mago"],"favorite":false},{"id":74,"level":"1","name":"Prote????o contra o Bem e Mal","name_en":"Protection From Evil and Good","school":{"pt":"Abjura????o","style":"abjuration"},"castingTime":"1 a????o","range":"toque","components":"V, S, M","concentration":"s","duration":"at?? 10 minutos","material":"??gua benta ou p?? de prata e ferro, consumidos pela magia","description":"At?? a magia acabar, uma criatura volunt??ria que voc?? tocar estar?? protegida contra certos tipos de criaturas: aberra????es, celestiais, corruptores, elementais, fadas e mortos - vivos.</p><p> A prote????o garante diversos benef??cios. As criaturas desse tipo tem desvantagem nas jogadas de ataque contra o alvo. O alvo n??o pode ser enfeiti??ado, amedrontado ou possu??do por elas. Se o alvo j?? estiver enfeiti??ado, amedrontado ou possu??do por uma dessas criaturas, o alvo ter?? vantagem em qualquer novo teste de resist??ncia contra o efeito relevante.","classes":["Bruxo","Cl??rigo","Mago","Paladino"],"favorite":false},{"id":132,"level":"2","name":"Prote????o contra Veneno","name_en":"Protection From Poison","school":{"pt":"Abjura????o","style":"abjuration"},"castingTime":"1 a????o","range":"toque","components":"V, S","duration":"1 hora","description":"Voc?? toca uma criatura. Se ela estiver envenenada, voc?? neutraliza o veneno. Se mais de um veneno estiver afligindo o alvo, voc?? neutraliza um veneno, que voc?? saiba estar presente, ou neutraliza um aleat??rio.</p><p> Pela dura????o, o alvo ter?? vantagem em testes de resist??ncia para n??o envenenado e ter?? resist??ncia a dano de veneno.","classes":["Cl??rigo","Druida","Paladino","Patrulheiro"],"favorite":false},{"id":301,"level":"6","name":"Proteger Fortaleza","name_en":"Guards And Wards","school":{"pt":"Abjura????o","style":"abjuration"},"castingTime":"10 minutos","range":"toque","components":"V, S, M","duration":"24 horas","material":"incenso aceso, uma por????o de enxofre e ??leo, uma corda amarrada, uma por????o de sangue de tribulo brutal e um pequeno bast??o de prata valendo, no m??nimo, 10 po","description":"Voc?? cria uma defesa que protege at?? 225 metros quadrados de espa??o (uma ??rea de um quadrado de 15 metros ou cem quadrados de 1,5 metro ou vinte e cinco quadrados de 3 metros). A ??rea protegida pode ter at?? 6 metros de altura, no formado que voc?? desejar. Voc?? pode proteger diversos armaz??ns de uma fortaleza dividindo a ??rea entre eles, contanto que voc?? possa andar em cada ??rea cont??gua enquanto estiver conjurando a magia.</p><p> Quando voc?? conjura essa magia, voc?? pode especificar indiv??duos que n??o ser??o afetados por qualquer dos efeitos que voc?? escolher. Voc?? tamb??m pode especificar uma senha que, ao ser falada em voz alta, deixa o orador imune aos efeitos.</p><p><em> Proteger fortaleza </em> cria os seguintes efeitos dentro da ??rea protegida.</p><p><em><strong> Corredores </strong></ em>. N??voa preenche todos os corredores protegidos, tornando - os ??rea de escurid??o densa. Al??m disso, cada interse????o ou passagem ramificada oferecendo uma escolha de dire????o, h?? 50 por cento de chance de uma criatura diferente de voc?? acredite que est?? indo na dire????o oposta ?? que escolheu.</p><p><em><strong> Portas </strong></ em>. Todas as portas na ??rea protegida est??o trancadas magicamente, como se estivessem seladas pela magia <em> tranca arcana </em>. Al??m disso, voc?? pode cobrir at?? dez portas com uma ilus??o (equivalente a fun????o de objeto ilus??rio da magia <em> ilus??o menor </em>) para faz??-las parecer se????es simples da parede.</p><p><em><strong> Escadas </strong></ em>. Teias preenchem todas as escadas na ??rea protegida do topo ao solo, como a magia <em> teia </em>. Esses fios voltam a crescer em 10 minutos se forem queimados ou partidos enquanto <em> proteger fortaleza </em> durar.</p><p><em><strong> Outros Efeitos de Magia </strong></ em>. Voc?? pode colocar, ?? sua escolha, um dos seguintes efeitos m??gicos dentro da ??rea protegida de uma fortaleza.</p><ul><li> Colocar globos de luz em quatro corredores. Voc?? pode designar uma programa????o simples que as luzes repetem enquanto <em> proteger fortaleza </em> durar.</li><li> Colocar <em> boca encantada </em> em duas localiza????es.</li><li> Colocar <em> n??voa f??tida </em> em duas localiza????es. Os vapores aparecem nos locais que voc?? designar, eles retornam dentro de 10 minutos, se forem dispersados por um vento, enquanto <em> proteger fortaleza </em> durar.</li><li> Colocar uma <em> lufada de vento </em> constante em um corredor ou aposento.</li><li> Colocar uma <em> sugest??o </em> em uma localiza????o. Voc?? seleciona uma ??rea de um quadrado de 1,5 metro e, qualquer criatura que entrar ou passar atrav??s dessa ??rea recebe a sugest??o mentalmente.</li></ ul>","classes":["Bardo","Mago"],"favorite":false},{"id":75,"level":"1","name":"Purificar Alimentos","name_en":"Purify Food And Drink","ritual":"s","school":{"pt":"Transmuta????o","style":"transmutation"},"castingTime":"1 a????o","range":"3 metros","components":"V, S","duration":"instant??nea","description":"Toda comida e bebida n??o - m??gica dentro de uma esfera de 1,5 metro de raio centrada num ponto, ?? sua escolha, dentro do alcance ?? purificada e se livrada de venenos ou doen??as.","classes":["Cl??rigo","Druida","Paladino"],"favorite":false},{"id":76,"level":"1","name":"Queda Suave","name_en":"Feather Fall","school":{"pt":"Transmuta????o","style":"transmutation"},"castingTime":"1 rea????o","range":"18 metros","components":"V, M","duration":"1 minuto","material":"uma pequena pena ou penugem similar","reaction":"que voc?? realiza quando voc?? ou uma criatura a at?? 18 metros cair","description":"Escolha at?? cinco criaturas caindo, dentro do alcance. A taxa de descend??ncia de uma criatura caindo ?? reduzida para 18 metros por rodada, at?? o fim da magia. Se a criatura aterrissar antes da magia acabar, ela n??o sofre nenhum dano de queda, pode aterrissar em p?? e a magia termina para essa criatura.","classes":["Bardo","Feiticeiro","Mago"],"favorite":false},{"id":77,"level":"1","name":"Raio Adoecente","name_en":"Ray Of Sickness","school":{"pt":"Necromancia","style":"necromancy"},"castingTime":"1 a????o","range":"18 metros","components":"V, S","duration":"instant??nea","description":"Um raio adoecente de energia esverdeada chicoteia na dire????o de uma criatura dentro do alcance. Fa??a um ataque ?? dist??ncia com magia contra o alvo. Se atingir, o alvo sofrer?? 2d8 de dano de veneno e deve realizar um teste de resist??ncia de Constitui????o. Se falhar na resist??ncia, ele tamb??m ficar?? envenenado at?? o final do seu pr??ximo turno.</p><p><strong> Em N??veis Superiores </strong>. Quando voc?? conjurar essa magia usando um espa??o de magia de 2?? n??vel ou superior, o dano da magia aumenta em 1d8 para cada n??vel do espa??o acima do 1??.","classes":["Feiticeiro","Mago"],"favorite":false},{"id":133,"level":"2","name":"Raio Ardente","name_en":"Scorching Ray","school":{"pt":"Evoca????o","style":"evocation"},"castingTime":"1 a????o","range":"36 metros","components":"V, S","duration":"instant??nea","description":"Voc?? cria tr??s raios de fogo e os arremessa em alvos dentro do alcance. Voc?? pode arremessa - los em um alvo ou em v??rios.</p><p> Realize um ataque ?? dist??ncia com magia para cada raio. Se atingir, o alvo sofrer?? 2d6 de dano de fogo.</p><p><strong> Em N??veis Superiores </strong>. Quando voc?? conjurar essa magia usando um espa??o de magia de 3?? n??vel ou superior, voc?? cria um raio adicional para cada n??vel do espa??o acima do 2??.","classes":["Feiticeiro","Mago"],"favorite":false},{"id":78,"level":"1","name":"Raio de Bruxa","name_en":"Witch Bolt","school":{"pt":"Evoca????o","style":"evocation"},"castingTime":"1 a????o","range":"9 metros","components":"V, S, M","concentration":"s","duration":"at?? 1 minuto","material":"um galho de uma ??rvore que tenha sido atingida por um rel??mpago","description":"Um raio crepitante de energia azul ?? arremessado em uma criatura dentro do alcance, formando um arco el??trico cont??nuo entre voc?? e o alvo. Fa??a um ataque ?? dist??ncia com magia contra a criatura. Se atingir, o alvo sofrer?? 1d12 de dano el??trico e, em cada um dos seus turnos, pela dura????o, voc?? pode usar sua a????o para causar 1d12 de dano el??trico ao alvo, automaticamente. A magia acaba se voc?? usar sua a????o para fazer qualquer outra coisa. A magia tamb??m acaba se o alvo estiver fora do alcance da magia ou se voc?? tiver cobertura total para ele.</p><p><strong> Em N??veis Superiores </strong>. Quando voc?? conjurar essa magia usando um espa??o de magia de 2?? n??vel ou superior, o dano inicial aumenta em 1d12 para cada n??vel do espa??o acima do 1??.","classes":["Bruxo","Feiticeiro","Mago"],"favorite":false},{"id":18,"level":"0","name":"Raio de Fogo","name_en":"Fire Bolt","school":{"pt":"Evoca????o","style":"evocation"},"castingTime":"1 a????o","range":"36 metros","components":"V, S","duration":"instant??nea","description":"Voc?? arremessa um cisco de fogo em uma criatura ou objeto dentro do alcance. Fa??a um ataque ?? dist??ncia com magia contra o alvo. Se atingir, o alvo sofre 1d10 de dano de fogo. Um objeto inflam??vel atingido por essa magia, incendeia se n??o estiver sendo vestido ou carregado.</p><p> O dano dessa magia aumenta em 1d10 quando voc?? alcan??a o 5?? n??vel (2d10), 11?? n??vel (3d10) e 17?? n??vel (4d10).","classes":["Feiticeiro","Mago"],"favorite":false},{"id":19,"level":"0","name":"Raio de Gelo","name_en":"Ray Of Frost","school":{"pt":"Evoca????o","style":"evocation"},"castingTime":"1 a????o","range":"18 metros","components":"V, S","duration":"instant??nea","description":"Um raio frigido de luz azul clara parte em dire????o de uma criatura, dentro do alcance. Realize um ataque ?? dist??ncia com magia contra o alvo. Se atingir, ele sofre 1d8 de dano de frio e seu deslocamento ?? reduzido em 3 metros at?? o come??o do seu pr??ximo turno.</p><p> O dano da magia aumenta em 1d8 quando voc?? alcan??a o 5?? n??vel (2d8), 11?? n??vel (3d8) e 17?? n??vel (4d8).","classes":["Feiticeiro","Mago"],"favorite":false},{"id":134,"level":"2","name":"Raio do Enfraquecimento","name_en":"Ray Of Enfeeblement","school":{"pt":"Necromancia","style":"necromancy"},"castingTime":"1 a????o","range":"18 metros","components":"V, S","concentration":"s","duration":"at?? 1 minuto","description":"Um raio negro de energia enervante parte do seu dedo em dire????o de uma criatura, dentro do alcance. Fa??a um ataque ?? dist??ncia com magia contra o alvo. Se atingir, o alvo causar?? metade do dano com ataques com armas que usem For??a, at?? a magia acabar.</p><p> No final de cada um dos turnos do alvo, ele pode realizar um teste de resist??ncia de Constitui????o contra a magia. Se obtiver sucesso, a magia acaba.","classes":["Bruxo","Mago"],"favorite":false},{"id":79,"level":"1","name":"Raio Guiador","name_en":"Guiding Bolt","school":{"pt":"Evoca????o","style":"evocation"},"castingTime":"1 a????o","range":"36 metros","components":"V, S","duration":"1 rodada","description":"Um lampejo de luz se lan??a em dire????o de uma criatura, ?? sua escolha, dentro do alcance. Realize um ataque ?? dist??ncia com magia contra o alvo. Se atingir, o alvo sofre <br/> 4d6 de dano radiante e, a pr??xima jogada de ataque contra esse alvo, antes do final do seu pr??ximo turno, ter?? vantagem, gra??as a penumbra m??stica cintilando no alvo, at?? ent??o.</p><p><strong> Em N??veis Superiores </strong>. Quando voc?? conjurar essa magia usando um espa??o de magia de 2?? n??vel ou superior, o dano aumenta em 1d6 para cada n??vel do espa??o acima do 1??.","classes":["Cl??rigo"],"favorite":false},{"id":135,"level":"2","name":"Raio Lunar","name_en":"Moonbeam","school":{"pt":"Evoca????o","style":"evocation"},"castingTime":"1 a????o","range":"36 metros","components":"V, S, M","concentration":"s","duration":"at?? 1 minuto","material":"v??rias sementes de qualquer planta lunar e um peda??o de feldspato opalescente","description":"Um raio prateado de luz p??lida brilha para baixo em um cilindro com 1,5 metro de raio e 12 metros de altura, centrado num ponto dentro do alcance. At?? a magia acabar, penumbra preenche o cilindro.</p><p> Quando uma criatura entrar na ??rea da magia pela primeira vez em um turno, ou come??ar seu turno l??, ela ?? engolfada por chamas fantasmag??ricas que causam dores lancinantes e ela deve realizar um teste de resist??ncia de Constitui????o. Ela sofre 2d10 de dano radiante se falhar na resist??ncia ou metade desse dano se passar.</p><p> Um metamorfo faz seu teste de resist??ncia com desvantagem. Se ele falhar, ele, tamb??m, reverte instantaneamente para sua forma original e n??o pode assumir uma forma diferente at?? deixar a luz da magia.</p><p> Em cada um dos seus turnos ap??s conjurar essa magia, voc?? pode usar uma a????o para mover o raio 18 metros em qualquer dire????o.</p><p><strong> Em N??veis Superiores </strong>. Quando voc?? conjurar essa magia usando um espa??o de magia de 3?? n??vel ou superior, o dano aumenta em 1d10 para cada n??vel do espa??o acima do 2??.","classes":["Druida"],"favorite":false},{"id":302,"level":"6","name":"Raio Solar","name_en":"Sunbeam","school":{"pt":"Evoca????o","style":"evocation"},"castingTime":"1 a????o","range":"pessoal","components":"V, S, M","concentration":"s","duration":"at?? 1 minuto","material":"uma lente de aumento","description":"Um raio de luz brilhante surge da sua m??o em uma linha de 18 metros de comprimento por 1,5 metro de largura. Cada criatura na linha deve realizar um teste de resist??ncia de Constitui????o. Se falhar na resist??ncia, uma criatura sofrer?? 6d8 de dano radiante e ficar?? cega at?? seu pr??ximo turno. Se passar na resist??ncia, ela sofrer?? metade desse dano e n??o ficar?? cega pela magia. Mortos - vivos e limos tem desvantagem nos seus testes de resist??ncia.</p><p> Voc?? pode criar uma linha de radia????o com sua a????o em qualquer turno, at?? a magia acabar.</p><p> Pela dura????o, uma fagulha de radia????o luminosa brilha na sua m??o. Ela emite luz plena num raio de 9 metros e penumbra por 9 metros adicionais. Essa luz ?? luz do sol.","classes":["Druida","Feiticeiro","Mago"],"favorite":false},{"id":20,"level":"0","name":"Rajada de Veneno","name_en":"Poison Spray","school":{"pt":"Conjura????o","style":"conjuration"},"castingTime":"1 a????o","range":"3 metros","components":"V, S","duration":"instant??nea","description":"Voc?? ergue sua m??o em dire????o de uma criatura que voc?? possa ver, dentro do alcance e projeta um sopro de g??s t??xico da sua palma. A criatura deve ser bem sucedida num teste de resist??ncia de Constitui????o ou sofrer?? 1d12 de dano de veneno.</p><p> O dano dessa magia aumenta em 1d12 quando voc?? alcan??a o 5?? n??vel (2d12), 11?? n??vel (3d12) e 17?? n??vel (4d12).","classes":["Bruxo","Druida","Feiticeiro","Mago"],"favorite":false},{"id":21,"level":"0","name":"Rajada M??stica","name_en":"Eldritch Blast","school":{"pt":"Evoca????o","style":"evocation"},"castingTime":"1 a????o","range":"36 metros","components":"V, S","duration":"instant??nea","description":"Um feixe de energia crepitante vai em dire????o a uma criatura dentro do alcance. Realize uma jogada de ataque ?? dist??ncia com magia contra o alvo. Se atingir, o alvo sofre 1d10 de dano de energia.</p><p> A magia cria mais de um feixe quando voc?? alcan??a n??veis elevados: dois feixes no 5?? n??vel, tr??s feixes no 11?? n??vel e quatro feixes no 17?? n??vel. Voc?? pode direcionar os feixes para o mesmo alvo ou para alvos diferentes. Realize jogadas de ataque separadas para cada feixe.","classes":["Bruxo"],"favorite":false},{"id":319,"level":"7","name":"Rajada Prism??tica","name_en":"Prismatic Spray","school":{"pt":"Evoca????o","style":"evocation"},"castingTime":"1 a????o","range":"pessoal","components":"V, S","duration":"instant??nea","description":"Oito raios de luz multicoloridos lampejam da sua m??o. Cada raio ?? uma cor diferente e tem poderes e prop??sitos diferentes. Cada criatura em um cone de 18 metros deve realizar um teste de resist??ncia de Destreza. Para cada alvo, role 1d8 para determinar qual cor de raio afetou ele.</p><p><em><strong> 1. Vermelho </strong></ em>. O alvo sofre 10d6 de dano de fogo se falhar na resist??ncia ou metade desse dano se obtiver sucesso.</p><p><em><strong> 2. Laranja </strong></ em>. O alvo sofre 10d6 de dano de ??cido se falhar na resist??ncia ou metade desse dano se obtiver sucesso.</p><p><em><strong> 3. Amarelo </strong></ em>. O alvo sofre 10d6 de dano el??trico se falhar na resist??ncia ou metade desse dano se obtiver sucesso.</p><p><em><strong> 4. Verde </strong></ em>. O alvo sofre 10d6 de dano de veneno se falhar na resist??ncia ou metade desse dano se obtiver sucesso.</p><p><em><strong> 5. Azul </strong></ em>. O alvo sofre 10d6 de dano de frio se falhar na resist??ncia ou metade desse dano se obtiver sucesso.</p><p><em><strong> 6. Anil </strong></ em>. Se falhar na resist??ncia, o alvo ficar?? impedido. Ele deve ent??o, fazer um teste de resist??ncia de Constitui????o ao final de cada um dos turnos dele. Se obtiver sucesso tr??s vezes, a magia termina. Se falhar na resist??ncia tr??s vezes, ela se torna pedra ?? afetada pela condi????o petrificado. Os sucessos e falhas n??o precisam ser consecutivos, anote ambos os resultados at?? o alvo acumular tr??s de mesmo tipo.</p><p><em><strong> 7. Violeta </strong></ em>. Se falhar na resist??ncia, o alvo ficar?? cego. Ele deve realizar um teste de resist??ncia de Sabedoria no in??cio do seu pr??ximo turno. Um sucesso na resist??ncia acaba com a cegueira. Se falhar na resist??ncia, a criatura ?? transportada para outro plano de exist??ncia, escolhido pelo Mestre, e n??o estar?? mais cego. (Tipicamente, uma criatura que esteja em um plano que n??o seja o seu plano natal ?? banida para l??, enquanto que outras criaturas geralmente s??o enviadas para os Planos Astral ou Et??reo.) </p><p><em><strong> 8. Especial </strong></ em>. O alvo ?? atingido por dois raios. Role mais duas vezes e jogue novamente qualquer 8.</p> ","classes":["Feiticeiro","Mago"],"favorite":false},{"id":303,"level":"6","name":"Recipiente Arcano","name_en":"Magic Jar","school":{"pt":"Necromancia","style":"necromancy"},"castingTime":"1 minuto","range":"pessoal","components":"V, S, M","duration":"at?? ser dissipada","material":"uma gema, cristal, relic??rio ou algum outro tipo de recipiente ornamental valendo, no m??nimo, 500 po","description":"Seu corpo entra em um estado catat??nico, enquanto sua alma o abandona e entra num recipiente que voc?? usa como componente material da magia. Enquanto sua alma permanecer no recipiente, voc?? estar?? ciente do seu entorno como se voc?? estivesse no espa??o do recipiente. Voc?? n??o pode se mover ou usar rea????es. A ??nica a????o que voc?? pode realizar ?? projetar sua alma a at?? 30 metros do recipiente, tanto para retornar para o seu corpo (terminando a magia) ou para tentar possuir um corpo humanoide.</p><p> Voc?? pode tentar possuir qualquer humanoide a at?? 30 metros de voc?? que voc?? possa ver (criaturas protegidas pelas magias <em> prote????o contra o bem e mal </em> ou <em> c??rculo m??gico </em> n??o podem ser possu??das). O alvo deve realizar um teste de resist??ncia de Carisma. Se falhar, sua alma se move para o corpo do alvo e a alma do alvo fica aprisionada no recipiente. Se obtiver sucesso, o alvo resiste aos seus esfor??os em possu?? - lo e voc?? n??o poder?? tentar possu?? - lo novamente por 24 horas.</p><p> Uma vez que tenha possu??do o corpo de uma criatura, voc?? a controla. Suas estat??sticas de jogo s??o substitu??das pelas estat??sticas da criatura, no entanto, voc?? mant??m sua tend??ncia e seus valores de Intelig??ncia, Sabedoria e Carisma. Voc?? mant??m os benef??cios das suas caracter??sticas de classe. Se o alvo tiver quaisquer n??veis de classe, voc?? n??o pode usar quaisquer das caracter??sticas de classe dele.</p><p> Nesse per??odo, a alma da criatura possu??da pode perceber do recipiente usando os sentidos dela, mas, no mais, n??o pode se mover ou realizar quaisquer a????es.</p><p> Enquanto estiver possuindo um corpo, voc?? pode usar sua a????o para retornar do corpo do hospedeiro para o recipiente se ele estiver a at?? 30 metros de voc??, devolvendo a alma da criatura hospedeira para o corpo dela. Se o corpo do hospedeiro morrer enquanto voc?? estiver dentro dele, a criatura morre e voc?? deve realizar um teste de resist??ncia de Carisma contra a sua CD de conjura????o. Se obtiver sucesso, voc?? retorna ao recipiente se ele estiver a at?? 30 metros de voc??. Caso contr??rio, voc?? morre.</p><p> Se o recipiente for destru??do ou a magia acabar, sua alma, imediatamente, retorna para o seu corpo. Se seu corpo estiver a mais de 30 metros de voc?? ou se seu corpo estiver morto quando voc?? tentar retornar para ele, voc?? morre. Se a alma de outra criatura estiver no recipiente quando ele for destru??do, a alma da criatura volta para o corpo dela se o corpo estiver vivo e a at?? 30 metros dela. Caso contr??rio, a criatura morre.</p><p> Quando a magia acabar, o recipiente ?? destru??do.","classes":["Mago"],"favorite":false},{"id":80,"level":"1","name":"Recuo Acelerado","name_en":"Expeditious Retreat","school":{"pt":"Transmuta????o","style":"transmutation"},"castingTime":"1 a????o b??nus","range":"pessoal","components":"V, S","concentration":"s","duration":"at?? 10 minutos","description":"Essa magia permite que voc?? se mova a um ritmo incr??vel. Quando voc?? conjura essa magia e, a partir de ent??o, com uma a????o b??nus em cada um dos seus turnos, at?? a magia acabar, voc?? pode realizar a a????o de Disparada.","classes":["Bruxo","Feiticeiro","Mago"],"favorite":false},{"id":268,"level":"5","name":"Reencarna????o","name_en":"Reincarnate","school":{"pt":"Transmuta????o","style":"transmutation"},"castingTime":"1 hora","range":"toque","components":"V, S, M","duration":"instant??nea","material":"??leos e unguentos raros valendo, no m??nimo, 1. 000 po, consumidos pela magia","description":"Voc?? toca um humanoide morto ou um peda??o de um humanoide morto. Considerando que a criatura n??o esteja morta a mais de 10 dias, a magia forma um novo corpo adulto para ele e ent??o, chama a alma para entrar no corpo. Se a alma do alvo n??o estiver livre ou deseje faz?? - lo, a magia falha.</p><p> A magia forma um novo corpo para que a criatura habite, o que, provavelmente, far?? com que a ra??a da criatura mude. O Mestre rola 1d100 e consulta a tabela seguinte para determinar qual forma a criatura ter?? quando voltar a vida, ou o Mestre pode escolher uma forma.","classes":["Druida"],"favorite":false},{"id":136,"level":"2","name":"Reflexos","name_en":"Mirror Image","school":{"pt":"Ilus??o","style":"illusion"},"castingTime":"1 a????o","range":"pessoal","components":"V, S","duration":"1 minuto","description":"Tr??s duplicatas ilus??rias de voc?? aparecem no seu espa??o. At?? a magia acabar, as duplicatas se movem com voc?? e copiam as suas a????es, trocando de posi????o, tornando imposs??vel rastrear qual imagem ?? real. Voc?? pode usar sua a????o para dissipar as duplicatas ilus??rias.</p><p> Cada vez que uma criatura mirar voc?? com um ataque enquanto a magia durar, role 1d20 para determinar se o ataque, em vez de voc??, mira uma das suas duplicatas.</p><p> Se voc?? tiver tr??s duplicatas, voc?? deve rolar um 6 ou maior para mudar o alvo do ataque para uma duplicata. Com duas duplicatas, voc?? deve rolar um 8 ou maior. Com uma duplicata, voc?? deve rolar um 11 ou maior.</p><p> A CA de uma duplicata ?? igual a 10 + seu modificador de Destreza. Se um ataque atingir uma duplicata, ela ?? destru??da. Uma duplicata s?? pode ser destru??da por um ataque que a atinja. Ela ignora todos os outros danos e efeitos. A magia acaba quando todas as tr??s duplicatas forem destru??das.</p><p> Uma criatura n??o pode ser afetada por essa magia se n??o puder enxergar, se ela contar com outros sentidos al??m da vis??o, como percep????o ??s cegas, ou se ela puder perceber ilus??es como falsas, como com vis??o verdadeira.","classes":["Bruxo","Feiticeiro","Mago"],"favorite":false},{"id":320,"level":"7","name":"Regenera????o","name_en":"Regenerate","school":{"pt":"Transmuta????o","style":"transmutation"},"castingTime":"1 minuto","range":"toque","components":"V, S, M","duration":"1 hora","material":"uma conta de ora????o e ??gua benta","description":"Voc?? toca uma criatura e estimula sua habilidade de cura natural. O alvo recupera 4d8 + 15 pontos de vida. Pela dura????o da magia o alvo recupera 1 ponto de vida no in??cio de cada turno dela (10 pontos de vida por minuto).</p><p> Os membro decepados do corpo do alvo (dedos, pernas, rabos e assim por diante), se tiver algum, s??o restaurados ap??s 2 minutos. Se voc?? tiver a parte decepada e segur??-la contra o topo, a magia, instantaneamente, faz com que o membro se grude ao toco.","classes":["Bardo","Cl??rigo","Druida"],"favorite":false},{"id":189,"level":"3","name":"Rel??mpago","name_en":"Lightning Bolt","school":{"pt":"Evoca????o","style":"evocation"},"castingTime":"1 a????o","range":"pessoal","components":"V, S, M","duration":"instant??nea","material":"um pouco de pelo e uma haste de ??mbar, cristal ou vidro","description":"Um rel??mpago forma uma linha de 30 metros de comprimento e 1,5 metro de largura que ?? disparado por voc?? em uma dire????o, ?? sua escolha. Cada criatura na linha deve realizar um teste de resist??ncia de Destreza. Uma criatura sofre 8d6 de dano el??trico se falhar na resist??ncia ou metade desse dano se obtiver sucesso.</p><p> O rel??mpago incendeia objetos inflam??veis na ??rea que n??o estejam sendo vestidos ou carregados.</p><p><strong> Em N??veis Superiores </strong>. Quando voc?? conjurar essa magia usando um espa??o de magia de 4?? n??vel ou superior, o dano aumenta em 1d6 para cada n??vel do espa??o acima do 3??.","classes":["Feiticeiro","Mago"],"favorite":false},{"id":190,"level":"3","name":"Remover Maldi????o","name_en":"Remove Curse","school":{"pt":"Abjura????o","style":"abjuration"},"castingTime":"1 a????o","range":"toque","components":"V, S","duration":"instant??nea","description":"Ao seu toque, todas as maldi????es afetando uma criatura ou objeto terminam. Se o objeto for um item m??gico amaldi??oado, sua maldi????o persiste, mas a magia rompe a sintonia do portador com o objeto, ent??o permitindo que ele o remova ou descarte.","classes":["Bruxo","Cl??rigo","Mago","Paladino"],"favorite":false},{"id":137,"level":"2","name":"Repouso Tranquilo","name_en":"Gentle Repose","ritual":"s","school":{"pt":"Necromancia","style":"necromancy"},"castingTime":"1 a????o","range":"toque","components":"V, S, M","duration":"10 dias","material":"uma pitada de sal e uma pe??a de cobre colocada em cada um dos olhos do corpo, que devem permanecer ai pela dura????o","description":"Voc?? toca um corpo ou outros restos mortais. Pela dura????o, o alvo estar?? protegido de decomposi????o e n??o pode se tornar um morto - vivo. A magia tamb??m estende, efetivamente, o limite de tempo para que o alvo seja trazido de volta a vida, j?? que os dias passados sob a influ??ncia dessa magia n??o contam no tempo limite de tais magias, como <em> reviver os mortos </em>.</p> ","classes":["Cl??rigo","Mago"],"favorite":false},{"id":81,"level":"1","name":"Repreens??o Infernal","name_en":"Hellish Rebuke","school":{"pt":"Evoca????o","style":"evocation"},"castingTime":"1 rea????o","range":"18 metros","components":"V, S","duration":"instant??nea","reaction":"que voc?? faz em resposta ao sofre dano de uma criatura a at?? 18 metros de voc?? e que voc?? possa ver","description":"Voc?? aponta seu dedo e a criatura que causou dano a voc?? ??, momentaneamente, envolta por chamas infernais. A criatura deve realizar um teste de resist??ncia de Destreza. Ela sofre 2d10 de dano de fogo se falhar na resist??ncia ou metade desse dano se obtiver sucesso.</p><p><strong> Em N??veis Superiores </strong>. Quando voc?? conjurar essa magia usando um espa??o de magia de 2?? n??vel ou superior, o dano aumenta em 1d10 para cada n??vel do espa??o acima do 1??.","classes":["Bruxo"],"favorite":false},{"id":22,"level":"0","name":"Resist??ncia","name_en":"Resistance","school":{"pt":"Abjura????o","style":"abjuration"},"castingTime":"1 a????o","range":"toque","components":"V, S, M","concentration":"s","duration":"at?? 1 minuto","material":"um manto em miniatura","description":"Voc?? toca uma criatura volunt??ria. Uma vez, antes da magia acabar, o alvo pode rolar 1d4 e adicionar o valor jogado a um teste de resist??ncia de sua escolha. Ele pode rolar o dado antes ou depois de realizar o teste de resist??ncia. Ent??o, a magia termina.","classes":["Cl??rigo","Druida"],"favorite":false},{"id":191,"level":"3","name":"Respirar Na ??gua","name_en":"Water Breathing","ritual":"s","school":{"pt":"Transmuta????o","style":"transmutation"},"castingTime":"1 a????o","range":"9 metros","components":"V, S, M","duration":"24 horas","material":"um peda??o de cana ou palha","description":"Essa magia concede a at?? dez criaturas volunt??ria que voc?? possa ver, dentro do alcance, a habilidade de respirar embaixo d??? ??gua at?? a magia acabar. As criaturas afetadas tamb??m mant??m sua forma normal de respira????o.","classes":["Druida","Feiticeiro","Mago","Patrulheiro"],"favorite":false},{"id":321,"level":"7","name":"Ressurrei????o","name_en":"Resurrection","school":{"pt":"Necromancia","style":"necromancy"},"castingTime":"1 hora","range":"toque","components":"V, S, M","duration":"instant??nea","material":"um diamante valendo, no m??nimo, 1. 000 po, consumido pela magia","description":"Voc?? toca uma criatura morta que n??o esteja assim a mais de um s??culo, que n??o tenha morrido por velhice e que n??o seja um morto - vivo. Se a alma da criatura estiver disposta e livre, o alvo volta a vida com todos os seus pontos de vida.</p><p> Essa magia neutraliza quaisquer venenos e cura doen??as normais que afetavam a criatura no momento da morte. Essa magia, no entanto, n??o remove doen??as m??gicas, maldi????es ou efeitos similares, se eles n??o tiverem sido removidos antes da conjura????o da magia, eles voltam a afetar a criatura quando ela volta a viver.</p><p> Essa magia fecha todos os ferimentos mortais e restaura partes do corpo perdidas.</p><p> Voltar dos mortos ?? um calv??rio. O alvo sofre??? 4 de penalidade em todas as suas jogadas de ataque, testes de resist??ncia e testes de habilidade. A cada vez que o alvo terminar um descanso longo, as penalidades s??o reduzidas em 1, at?? desaparecerem.</p><p> Conjurar essa magia para trazer de volta a vida uma criatura que tenha morrido a um ano ou mais tempo ?? extremamente desgastante para voc??. At?? voc?? terminar um descanso longo, voc?? n??o pode conjurar magias novamente e ter?? desvantagem em todas as jogadas de ataque, testes de habilidade e testes de resist??ncia.","classes":["Bardo","Cl??rigo"],"favorite":false},{"id":358,"level":"9","name":"Ressurrei????o Verdadeira","name_en":"True Resurrection","school":{"pt":"Necromancia","style":"necromancy"},"castingTime":"1 hora","range":"toque","components":"V, S, M","duration":"instant??nea","material":"um borrifo de ??gua benta e diamantes valendo, no m??nimo, 25. 000 po, consumidos pela magia","description":"Voc?? toca uma criatura morta que n??o esteja assim a mais de 200 anos e que tenha morrido por qualquer motivo, exceto velhice. Se a alma da criatura estiver disposta e livre, o alvo volta a vida com todos os seus pontos de vida.</p><p> Essa magia fecha todos os ferimentos, neutraliza quaisquer venenos, cura todas as doen??as e suspende quaisquer maldi????es que afligiam a criatura quando ela morreu. A magia recupera ??rg??o e membros danificados ou perdidos.</p><p> Essa magia pode, at?? mesmo, prover um novo corpo, se o original n??o existir mais, nesse caso, voc?? deve falar o nome da criatura. Ela aparece em um espa??o desocupado, ?? sua escolha, a at?? 3 metros de voc??.","classes":["Cl??rigo","Druida"],"favorite":false},{"id":269,"level":"5","name":"Restaura????o Maior","name_en":"Greater Restoration","school":{"pt":"Abjura????o","style":"abjuration"},"castingTime":"1 a????o","range":"toque","components":"V, S, M","duration":"instant??nea","material":"p?? de diamante valendo, no m??nimo, 100 po, consumido pela magia","description":"Voc?? imbui uma criatura que voc?? toca, com energia positiva para desfazer um efeito debilitante. Voc?? pode reduzir a exaust??o do alvo em um n??vel ou remover um dos seguintes do alvo: </p><ul><li> Um efeito que enfeitice ou petrifique o alvo </li><li> Uma maldi????o, incluindo a sintoniza????o do alvo com um item m??gico amaldi??oado </li><li> Qualquer redu????o a um dos valores de habilidade do alvo </li><li> Um efeito que esteja reduzindo o m??ximo de pontos de vida do alvo </li></ ul>","classes":["Bardo","Cl??rigo","Druida"],"favorite":false},{"id":138,"level":"2","name":"Restaura????o Menor","name_en":"Lesser Restoration","school":{"pt":"Abjura????o","style":"abjuration"},"castingTime":"1 a????o","range":"toque","components":"V, S","duration":"instant??nea","description":"Voc?? toca uma criatura e pode, ou acabar com uma doen??a ou uma condi????o que a esteja afligindo. A condi????o pode ser cega, surda, paralisada ou envenenada.","classes":["Bardo","Cl??rigo","Druida","Paladino","Patrulheiro"],"favorite":false},{"id":270,"level":"5","name":"Reviver Os Mortos","name_en":"Raise Dead","school":{"pt":"Necromancia","style":"necromancy"},"castingTime":"1 hora","range":"toque","components":"V, S, M","duration":"instant??nea","material":"um diamante valendo, no m??nimo, 500 po, consumido pela magia","description":"Voc?? traz uma criatura morta que voc?? tocar de volta a vida, considerando que ela n??o esteja morta a mais de 10 dias. Se a alma da criatura estiver tanto disposta quando livre para juntar - se ao corpo dela, a criatura volta a vida com 1 ponto de vida.</p><p> Essa magia tamb??m neutraliza quaisquer venenos e cura doen??as n??o - m??gicas que afetavam a criatura no momento da morte. Essa magia, no entanto, n??o remove doen??as m??gicas, maldi????es ou efeitos similares, se eles n??o tiverem sido removidos antes da conjura????o da magia, eles voltam a afetar a criatura quando ela volta a viver. A magia n??o pode trazer uma criatura morta - viva de volta ?? vida.</p><p> Essa magia fecha todos os ferimentos mortais, mas ela n??o restaura partes do corpo perdidas. Se a criatura n??o tiver uma parte do corpo ou ??rg??o fundamental para sua sobreviv??ncia??? sua cabe??a, por exemplo??? a magia falha automaticamente.</p><p> Voltar dos mortos ?? um calv??rio. O alvo sofre??? 4 de penalidade em todas as suas jogadas de ataque, testes de resist??ncia e testes de habilidade. A cada vez que o alvo terminar um descanso longo, as penalidades s??o reduzidas em 1, at?? desaparecerem.","classes":["Bardo","Cl??rigo","Paladino"],"favorite":false},{"id":192,"level":"3","name":"Revivificar","name_en":"Revivify","school":{"pt":"Necromancia","style":"necromancy"},"castingTime":"1 a????o","range":"toque","components":"V, S, M","duration":"instant??nea","material":"um diamante no valor de 300 po, consumido pela magia","description":"Voc?? toca uma criatura que tenha morrido dentro do ??ltimo minuto. Essa criatura volta a vida com 1 ponto de vida. Essa magia n??o pode trazer de volta a vida criaturas que tenham morrido de velhice nem pode restaurar quaisquer partes do corpo perdidas.","classes":["Cl??rigo","Paladino"],"favorite":false},{"id":82,"level":"1","name":"Riso Hist??rico de Tasha","name_en":"Tasha's Hideous Laughter","school":{"pt":"Encantamento","style":"enchantment"},"castingTime":"1 a????o","range":"9 metros","components":"V, S, M","concentration":"s","duration":"at?? 1 minuto","material":"pequenas tortas e uma pena que ?? balan??ada no ar","description":"Uma criatura, ?? sua escolha, que voc?? possa ver, dentro do alcance, acha tudo hilariantemente engra??ado e cai na gargalhada, se essa magia afet??-la. O alvo deve ser bem sucedido em um teste de resist??ncia de Sabedoria ou cair?? no ch??o, ficando incapacitado e incapaz de se levantar pela dura????o. Uma criatura com valor de Intelig??ncia 4 ou inferior n??o ?? afetada.</p><p> Ao final de cada um dos turnos dela e, toda vez que sofrer dano, o alvo pode realizar outro teste de resist??ncia de Sabedoria. O alvo ter?? vantagem no teste de resist??ncia se ele for garantido por ele ter sofrido dano. Se obtiver sucesso, a magia acaba.","classes":["Bardo","Mago"],"favorite":false},{"id":193,"level":"3","name":"Rogar Maldi????o","name_en":"Bestow Curse","school":{"pt":"Necromancia","style":"necromancy"},"castingTime":"1 a????o","range":"toque","components":"V, S","concentration":"s","duration":"at?? 1 minuto","description":"Voc?? toca uma criatura e a criatura deve ser bem sucedida em um teste de resist??ncia de Sabedoria ou ser?? amaldi??oada pela dura????o da magia. Quando voc?? conjura essa magia, escolha a natureza da maldi????o dentre as seguintes op????es: </p><ul><li> Escolha um valor de habilidade. Enquanto amaldi??oado, o alvo tem desvantagem em testes de habilidade e testes de resist??ncia feitos com esse valor de habilidade, </li><li> Enquanto amaldi??oado, o alvo tem desvantagem nas jogadas de ataque contra voc??.</li><li> Enquanto amaldi??oado, o alvo deve realizar um teste de resist??ncia de Sabedoria no come??o de cada um dos turnos dela. Se ela falhar, ela perder?? sua a????o aquele turno, n??o fazendo nada.</li><li> Enquanto o alvo estiver amaldi??oado, seus ataques e magias causam 1d8 de dano necr??tico extra a ele.</li></ ul>","classes":["Bardo","Cl??rigo","Mago"],"favorite":false},{"id":83,"level":"1","name":"Salto","name_en":"Jump","school":{"pt":"Transmuta????o","style":"transmutation"},"castingTime":"1 a????o","range":"toque","components":"V, S, M","duration":"1 minuto","material":"uma perna de gafanhoto","description":"Voc?? toca uma criatura. A dist??ncia de salto da criatura ?? triplicada at?? a magia acabar.","classes":["Druida","Feiticeiro","Mago","Patrulheiro"],"favorite":false},{"id":84,"level":"1","name":"Santu??rio","name_en":"Sanctuary","school":{"pt":"Abjura????o","style":"abjuration"},"castingTime":"1 a????o b??nus","range":"9 metros","components":"V, S, M","duration":"1 minuto","material":"um pequeno espelho de prata","description":"Voc?? protege uma criatura, dentro do alcance, contra ataques. At?? a magia acabar, qualquer criatura que tentar atacar ou usar magias que causem dano contra criatura protegida deve, primeiro, realizar um teste de resist??ncia de Sabedoria. Se falhar na resist??ncia, a criatura deve escolher um novo alvo ou perder?? o ataque ou magia. Essa magia n??o protege a criatura contra efeitos de ??rea, como a explos??o de uma bola de fogo.</p><p> Se a criatura protegida realizar um ataque ou conjurar uma magia que afete uma criatura inimiga, essa magia acaba.","classes":["Cl??rigo"],"favorite":false},{"id":228,"level":"4","name":"Santu??rio Particular de Mordenkainen","name_en":"Mordenkainen's Private Sanctum","school":{"pt":"Abjura????o","style":"abjuration"},"castingTime":"10 minutos","range":"36 metros","components":"V, S, M","duration":"24 horas","material":"uma folha de chumbo, um peda??o de vidro opaco, um chuma??o de algod??o ou pano e p?? de cris??lita","description":"Voc?? deixa uma ??rea, dentro do alcance, magicamente segura. A ??rea ?? um cubo que pode ser t??o pequeno quanto 1,5 metro ou t??o grande quanto 30 metros de cada lado. A magia permanece pela dura????o ou at?? voc?? usar uma a????o para dissip??-la.</p><p> Quando voc?? conjura essa magia, voc?? decide que tipo de seguran??a ela fornecer??, escolhendo qualquer ou todas as propriedades a seguir: </p><ul><li> Sons n??o podem atravessar a barreira na fronteira da ??rea protegida.</li><li> A barreira da ??rea protegida escura e nebulosa, impedindo vis??o (inclusive vis??o no escuro) atrav??s dela.</li><li> Sensores criados por magia de adivinha????o n??o podem aparecer dentro da ??rea protegida ou atravessar a barreira no per??metro.</li><li> As criaturas na ??rea n??o podem ser alvo de magias de adivinha????o.</li><li> Nada pode se teletransportar para dentro ou para fora da ??rea protegida.</li><li> Viagem planar est?? bloqueada para dentro da ??rea protegida.</li></ ul><p> Conjurar essa magia no mesmo lugar, a cada dia, por um ano, torna o efeito permanente.</p><p><strong> Em N??veis Superiores </strong>. Quando voc?? conjurar essa magia usando um espa??o de magia de 5?? n??vel ou superior, voc?? pode aumentar o tamanho do cubo em 30 metros de cada lado para cada n??vel do espa??o acima do 4??. Ent??o, voc?? poderia proteger um cubo de at?? 60 metros de lado usando um espa??o de magia de 5?? n??vel.","classes":["Mago"],"favorite":false},{"id":85,"level":"1","name":"Saraivada de Espinhos","name_en":"Hail Of Torns","school":{"pt":"Conjura????o","style":"conjuration"},"castingTime":"1 a????o b??nus","range":"pessoal","components":"V","concentration":"s","duration":"at?? 1 minuto","description":"Da pr??xima vez que voc?? atingir uma criatura com um ataque ?? dist??ncia com arma, antes da magia acabar, essa magia cria uma chuva de espinhos que brota da sua arma ?? dist??ncia ou muni????o. Al??m do efeito normal do ataque, o alvo do ataque e cada criatura a at?? 1,5 metro dele, devem realizar um teste de resist??ncia de Destreza. Uma criatura sofre 1d10 de dano perfurante se falhar na resist??ncia ou metade desse dano se obtiver sucesso.</p><p><strong> Em N??veis Superiores </strong>. Quando voc?? conjurar essa magia usando um espa??o de magia de 2?? n??vel ou superior, o dano aumenta em 1d10 para cada n??vel do espa??o acima do 1?? (at?? o m??ximo de 6d10).","classes":["Patrulheiro"],"favorite":false},{"id":341,"level":"8","name":"Semiplano","name_en":"Demiplan","school":{"pt":"Conjura????o","style":"conjuration"},"castingTime":"1 a????o","range":"18 metros","components":"V","duration":"1 hora","description":"Voc?? cria uma porta umbral em uma superf??cie s??lida e lisa que voc?? possa ver, dentro do alcance. A porta ?? grande o suficiente para permitir a passagem de criaturas M??dias sem dificuldade. Quando aberta, a porta levar?? a um semiplano que parece uma sala vazia de 9 metros quadrados de dimens??o, feita de madeira ou pedra. Quando a magia termina, a porta desaparece e, qualquer criatura ou objeto dentro do semiplano, permanecer?? preso l??, a medida que a porta desaparece do outro lado.</p><p> Cada vez que voc?? conjura essa magia, voc?? pode criar um novo semiplano ou fazer a porta umbral se conectar a um semiplano que voc?? tenha criado em uma conjura????o anterior dessa magia. Al??m disso, se voc?? conhecer a natureza e conte??do do semiplano criado atrav??s da conjura????o dessa magia por outra criatura, voc?? pode fazer com que a porta umbral se conecte a esse semiplano.","classes":["Bruxo","Mago"],"favorite":false},{"id":139,"level":"2","name":"Sentido Bestial","name_en":"Beast Sense","ritual":"s","school":{"pt":"Adivinha????o","style":"divination"},"castingTime":"1 a????o","range":"toque","components":"S","concentration":"s","duration":"at?? 1 hora","description":"Voc?? toca uma besta volunt??ria. Pela dura????o da magia, voc?? pode usar sua a????o para ver atrav??s dos olhos e ouvir atrav??s dos ouvidos da besta e continua a faz?? - lo at?? voc?? usar sua a????o para retornar aos seus sentidos normais.</p><p> Enquanto estiver utilizando os sentidos da besta, voc?? ganha os benef??cios de qualquer sentido especial possu??do pela criatura, no entanto, voc?? estar?? cego e surdo em rela????o aos seus pr??prios sentidos.","classes":["Druida","Patrulheiro"],"favorite":false},{"id":86,"level":"1","name":"Servo Invis??vel","name_en":"Unseen Servant","ritual":"s","school":{"pt":"Conjura????o","style":"conjuration"},"castingTime":"1 a????o","range":"18 metros","components":"V, S, M","duration":"1 hora","material":"um peda??o de barbante e um pouco de madeira","description":"Essa magia cria uma for??a invis??vel, sem mente e sem forma que realiza tarefas simples, ao seu comando, at?? a magia acabar. O servo aparece do nada em um espa??o desocupado no ch??o, dentro do alcance. Ele tem CA 10, 1 ponto de vida, For??a 2 e n??o pode atacar. Se ele cair a 0 pontos de vida, a magia acaba.</p><p> Uma vez em cada um dos seus turnos, com uma a????o b??nus, voc?? pode comandar, mentalmente, o servo para se mover at?? 4, 5 metros e interagir com um objeto. O servo pode realizar tarefas simples que um servi??al humano faria, como buscar coisas, limpar, consertar, dobrar roupas, acender chamas, servir comida ou derramar vinho. Uma vez que um comando seja dado, o servo realiza a tarefa da melhor forma poss??vel, at?? completar a tarefa, ent??o esperar?? o seu pr??ximo comando.</p><p> Se voc?? comandar o servo a realizar uma tarefa que poderia afasta - lo a mais de 18 metros de voc??, a magia termina.","classes":["Bardo","Bruxo","Mago"],"favorite":false},{"id":359,"level":"9","name":"Sexto Sentido","name_en":"Foresight","school":{"pt":"Adivinha????o","style":"divination"},"castingTime":"1 minuto","range":"toque","components":"V, S, M","duration":"8 horas","material":"uma pena de colibri","description":"Voc?? toca uma criatura volunt??ria e a aben??oa com uma habilidade limitada de ver o futuro iminente. Pela dura????o, o alvo n??o pode ser surpreendido e tem vantagem nas jogadas de ataque, testes de habilidade e testes de resist??ncia. Al??m disso, outras criaturas tem desvantagem nas jogadas de ataque contra o alvo, pela dura????o.</p><p> Essa magia termina imediatamente, se voc?? conjur??-la novamente antes da dura????o acabar.","classes":["Bardo","Bruxo","Druida","Mago"],"favorite":false},{"id":140,"level":"2","name":"Sil??ncio","name_en":"Silence","ritual":"s","school":{"pt":"Ilus??o","style":"illusion"},"castingTime":"1 a????o","range":"36 metros","components":"V, S","concentration":"s","duration":"at?? 10 minutos","description":"Pela dura????o, nenhum som pode ser criado dentro ou atravessar uma esfera de 6 metros de raio centrada num ponto, ?? sua escolha, dentro do alcance. Qualquer criatura ou objeto totalmente dentro da esfera ?? imune a dano trovejante e as criaturas estar??o surdas enquanto estiverem completamente dentro dela. Conjurar magias que inclua a componente verbal ?? imposs??vel ai.","classes":["Bardo","Cl??rigo","Patrulheiro"],"favorite":false},{"id":322,"level":"7","name":"S??mbolo","name_en":"Symbol","school":{"pt":"Abjura????o","style":"abjuration"},"castingTime":"1 minuto","range":"toque","components":"V, S, M","duration":"at?? ser dissipada ou ativada","material":"merc??rio, f??sforo e p?? de diamante e opala, com um valor total de, no m??nimo, 1. 000 po, consumidos pela magia","description":"Quando voc?? conjura essa magia, voc?? inscreve um glifo nocivo, tanto sobre uma superf??cie (como uma sec????o de piso, uma parede ou mesa) quanto dentro de um objeto que possa ser fechado (como um livro, um pergaminho ou um ba?? de tesouro). Se voc?? escolher uma superf??cie, o glifo pode cobrir uma ??rea da superf??cie n??o superior a 3 metros de di??metro. Se voc?? escolher um objeto, o objeto deve permanecer no seu local, se ele for movido mais de 3 metros de onde voc?? conjurou essa magia, o glifo ser?? quebrado e a magia termina sem ser ativada.</p><p> O glifo ?? quase invis??vel e requer um teste de Intelig??ncia (Investiga????o) contra a CD da magia para ser encontrado.</p><p> Voc?? define o que ativa o glifo quando voc?? conjura a magia. Para glifos inscritos em uma superf??cie, os gatilhos mais t??picos incluem tocar ou ficar sobre o glifo, remover outro objeto cobrindo o glifo, aproximar - se a uma certa dist??ncia do glifo ou manipular um objeto onde o glifo esteja inscrito. Para glifos inscritos dentro de objetos, os gatilhos mais comuns incluem abrir o objeto, aproximar - se a uma certa dist??ncia do objeto ou ver ou ler o glifo.</p><p> Voc?? pode, posteriormente, aperfei??oar o gatilho para que a magia se ative apenas sob certas circunst??ncias ou de acordo com as caracter??sticas f??sicas (como altura ou peso), tipo de criatura (por exemplo, a prote????o poderia ser definida para afetar aberra????es ou drow) ou tend??ncia. Voc?? pode, tamb??m, definir condi????es para criaturas n??o ativarem o glifo, como aqueles que falarem determinada senha.</p><p> Quando voc?? inscreve o glifo, escolha uma das op????es abaixo para seu efeito. Uma vez ativado, o glifo brilha, preenchendo uma esfera de 18 metros de raio com penumbra por 10 minutos, ap??s esse tempo, a magia termina. Cada criatura na esfera, quando o glifo ?? ativado, ?? afetada por seu efeito, assim como uma criatura que entrar na esfera a primeira vez num turno ou termina seu turno nela.</p><p><em><strong> Atordoamento </strong></ em>. Cada alvo deve realizar um teste de resist??ncia de Sabedoria e ficar?? atordoada por 1 minuto se falhar na resist??ncia.</p><p><em><strong> Desespero </strong></ em>. Cada alvo deve realizar um teste de resist??ncia de Carisma. Com uma falha na resist??ncia, o alvo ser?? consumido pelo desespero por 1 minuto. Durante esse per??odo, ele n??o poder?? atacar ou afetar qualquer criatura com habilidades, magias ou outros efeitos m??gicos nocivos.</p><p><em><strong> Disc??rdia </strong></ em>. Cada alvo deve realizar um teste de resist??ncia de Sabedoria. Com uma falha na resist??ncia, um alvo ir?? brigar e discutir com outras criaturas por 1 minuto. Durante esse per??odo, ele ser?? incapaz de se comunicar compreensivamente e ter?? desvantagem nas jogadas de ataque e testes de habilidade.</p><p><em><strong> Dor </strong></ em>. Cada alvo deve realizar um teste de resist??ncia de Constitui????o e ficar?? incapacitada com dores excruciantes por 1 minuto se falhar na resist??ncia.</p><p><em><strong> Insanidade </strong></ em>. Cada alvo deve realizar um teste de resist??ncia de Intelig??ncia. Com uma falha na resist??ncia, o alvo ?? levado a loucura por 1 minuto. Uma criatura insana, n??o pode realizar a????es, n??o entende o que as outras criaturas dizem, n??o pode ler e fala apenas coisas sem sentido. O Mestre controla seus movimentos, que ser??o err??ticos.</p><p><em><strong> Medo </strong></ em>. Cada alvo deve realizar um teste de resist??ncia de Sabedoria e ficar?? amedrontado por 1 minuto se falhar na resist??ncia. Enquanto estiver amedrontado, o alvo largar?? o que quer que esteja segurando e deve se afastar, pelo menos 9 metros do glifo em cada um dos seus turnos, se for capaz.</p><p><em><strong> Morte </strong></ em>. Cada alvo deve realizar um teste de resist??ncia de Constitui????o, sofrendo 10d10 de dano necr??tico se falhar na resist??ncia ou metade desse dano se passar na resist??ncia.</p><p><em><strong> Sono </strong></ em>. Cada alvo deve realizar um teste de resist??ncia de Sabedoria e cair?? inconsciente por 10 minutos se falhar na resist??ncia. Uma criatura acorda se sofrer dano ou se algu??m usar sua a????o para sacudi - la e estape?? - la at?? ela acordar.","classes":["Bardo","Cl??rigo","Mago"],"favorite":false},{"id":271,"level":"5","name":"Similaridade","name_en":"Seeming","school":{"pt":"Ilus??o","style":"illusion"},"castingTime":"1 a????o","range":"9 metros","components":"V, S","duration":"8 horas","description":"Essa magia permite que voc?? mude a apar??ncia de qualquer quantidade de criaturas que voc?? possa ver, dentro do alcance. Voc?? d?? a cada alvo que voc?? escolheu uma nova apar??ncia ilus??ria. Um alvo involunt??rio pode realizar um teste de resist??ncia de Carisma, se for bem sucedido, a magia n??o o afetar??.</p><p> A magia disfar??a a apar??ncia f??sica, assim como roupa, armadura, armas e equipamentos. Voc?? pode fazer com que cada criatura pare??a 30 cent??metros mais baixa ou alta e aparente ser magra, gorda ou entre. Voc?? n??o pode mudar o tipo do seu corpo, portanto, voc?? deve adotar uma forma que tenha a mesma disposi????o b??sica de membros. No mais, a extens??o da sua ilus??o cabe a voc??. A magia permanece pela dura????o, a menos que voc?? usa sua a????o para dissip??-la precocemente.</p><p> As mudan??as criadas por essa magia n??o conseguem se sustentar perante uma inspe????o f??sica. Por exemplo, se voc?? usar essa magia para adicionar um chap??u ao seu visual, objetos que passarem pelo chap??u e qualquer um que toc?? - lo n??o sentir?? nada ou sentir?? sua cabe??a e cabelo. Se voc?? usar essa magia para aparentar ser mais magro do que ??, a m??o de algu??m que a erguer para tocar em voc??, ir?? esbarrar em voc?? enquanto ainda est??, aparentemente, est?? no ar.</p><p> Uma criatura pode usar a a????o dela para inspecionar um alvo e fazer um teste de Intelig??ncia (Investiga????o) contra a CD da sua magia. Se for bem sucedido, ele estar?? ciente de que o alvo est?? disfar??ado.","classes":["Bardo","Feiticeiro","Mago"],"favorite":false},{"id":323,"level":"7","name":"Simulacro","name_en":"Simulacrum","school":{"pt":"Ilus??o","style":"illusion"},"castingTime":"12 horas","range":"toque","components":"V, S, M","duration":"at?? ser dissipada","material":"neve ou gelo em quantidade suficiente para fazer uma c??pia em tamanho real da criatura duplicada, algum cabelo, recortes de unha ou outro peda??o do corpo da criatura, colocado dentro da neve ou gelo e p?? de rubi no valor de 1. 500 po, polvilhado sobre a duplicata e consumido pela magia","description":"Voc?? modela uma duplicata ilus??ria de uma besta ou humanoide, dentro do alcance, durante todo tempo de conjura????o da magia. A duplicada ?? uma criatura, parcialmente real, formada de gelo ou neve e pode realizar a????es e, no mais, ser tratada como uma criatura normal. Ela aparenta ser igual a original, mas tem metade do m??ximo de pontos de vida da criatura e ?? formada sem qualquer equipamento. No mais, a ilus??o usa todas as estat??sticas da criatura que ela copiou.</p><p> O simulacro ?? amig??vel a voc?? e ??s criaturas que voc?? designar. Ele obedece aos seus comandos verbais, se movendo e agindo de acordo com seus desejos, agindo no seu turno em combate. O simulacro n??o possui capacidade de aprender ou de se tornar mais poderoso, portanto, ele nunca subir?? de n??vel ou ganhar?? outras habilidades, nem poder?? recuperar espa??os de magia gastos.</p><p> Se o simulacro sofrer dano, voc?? pode repara - lo em um laborat??rio alqu??mico, usando ervas e minerais raros no valor de 100 po por ponto de vida recuperado. O simulacro dura at?? cair a 0 pontos de vida, no momento em que ele volta a ser neve e derrete instantaneamente.</p><p> Se voc?? conjurar essa magia novamente, qualquer duplicata atualmente ativa, que voc?? criou com essa magia, ?? instantaneamente destru??da.","classes":["Mago"],"favorite":false},{"id":194,"level":"3","name":"Sinal de Esperan??a","name_en":"Beacon Of Hope","school":{"pt":"Abjura????o","style":"abjuration"},"castingTime":"1 a????o","range":"9 metros","components":"V, S","concentration":"s","duration":"at?? 1 minuto","description":"Essa magia confere esperan??a e vitalidade. Escolha qualquer quantidade de criaturas dentro do alcance. Pela dura????o, cada alvo tem vantagem em testes de resist??ncia de Sabedoria e testes de resist??ncia contra a morte e recuperam o m??ximo de pontos de vida poss??vel em qualquer cura.","classes":["Cl??rigo"],"favorite":false},{"id":272,"level":"5","name":"Sonho","name_en":"Dream","school":{"pt":"Ilus??o","style":"illusion"},"castingTime":"1 minuto","range":"especial","components":"V, S, M","duration":"8 horas","material":"um punhado de areia, um pouco de tinta e uma pena de escrita arrancada de um p??ssaro adormecido","description":"Essa magia molda os sonhos de uma criatura. Escolha uma criatura que voc?? conhe??a como alvo dessa magia. O alvo deve estar no mesmo plano de exist??ncia que voc??. Criaturas que n??o dormem, como elfos, n??o podem ser contatados por essa magia. Voc??, ou uma criatura volunt??ria que voc?? tocar, entram em um estado de transe. Enquanto estiver me transe, o mensageiro est?? ciente dos seus arredores, mas n??o pode realizar a????es ou se mover.</p><p> Se o alvo estiver dormindo, o mensageiro aparece no sonho do alvo e pode conversar com o alvo enquanto ele estiver dormindo, at?? o limite da dura????o da magia. O mensageiro tamb??m pode modificar o meio ambiente do sonho, criando paisagens, objetos e outras imagens. O mensageiro pode sair do transe a qualquer momento, terminando o efeito da magia prematuramente. O alvo se lembra do sonho perfeitamente quando acorda. Se o alvo estiver acordado quando a magia for conjurada, o mensageiro saber?? disso e pode, tanto terminar o transe (e a magia) quando esperar o alvo cair no sono, no momento em que o mensageiro aparecer?? nos sonhos do alvo.</p><p> Voc?? pode fazer o mensageiro parecer monstruoso e aterrorizante para o alvo. Se o fizer, o mensageiro pode enviar uma mensagem de n??o mais que dez palavras, ent??o o alvo deve realizar um teste de resist??ncia de Sabedoria. Se falhar na resist??ncia, ecos da monstruosidade fantasmag??rica criar??o um pesadelo que permanecer?? pela dura????o do sono do alvo e impede o alvo de ganhar qualquer benef??cio do descanso. Al??m disso, quando o alvo acordar, ele sofrer?? 3d6 de dano ps??quico.</p><p> Se voc?? tiver uma parte do corpo, mecha de cabelo, recorte de unha ou por????o similar do corpo do alvo, o alvo realiza seu teste de resist??ncia com desvantagem.","classes":["Bardo","Bruxo","Mago"],"favorite":false},{"id":87,"level":"1","name":"Sono","name_en":"Sleep","school":{"pt":"Encantamento","style":"enchantment"},"castingTime":"1 a????o","range":"36 metros","components":"V, S, M","duration":"1 minuto","material":"um punhado de areia fina, p??talas de rosas ou um grilo","description":"Essa magia p??em as criaturas num entorpecimento m??gico. Jogue 5d8, o total ?? a quantidade de pontos de vida de criaturas afetados pela magia. As criaturas numa ??rea de 6 metros de raio, centrada no ponto escolhido, dentro do alcance, s??o afetadas em ordem ascendente dos pontos de vida atuais delas (ignorando criaturas inconscientes).</p><p> Come??ando com as criaturas com menos pontos de vida atuais, cada criatura afetada por essa magia cai inconsciente at?? a magia acabar, sofrer dano ou algu??m usar sua a????o para sacudi - la ou esbofete?? - la at?? acordar. Subtraia os pontos de vida de cada criatura do total antes de seguir para a pr??xima criatura com menos pontos de vida atuais. Os pontos de vida atuais da criatura devem ser iguais ou menores que o valor restante para que a criatura possa ser afetada.</p><p> Mortos - vivos e criaturas imunes a serem enfeiti??adas n??o s??o afetadas por essa magia.</p><p><strong> Em N??veis Superiores </strong>. Quando voc?? conjurar essa magia usando um espa??o de magia de 2?? n??vel ou superior, jogue 2d8 adicionais para cada n??vel do espa??o acima do 1??.","classes":["Bardo","Feiticeiro","Mago"],"favorite":false},{"id":141,"level":"2","name":"Sugest??o","name_en":"Suggestion","school":{"pt":"Encantamento","style":"enchantment"},"castingTime":"1 a????o","range":"9 metros","components":"V, M","concentration":"s","duration":"at?? 8 horas","material":"uma l??ngua de cobra e, ou um peda??o de favo de mel ou uma gota de azeite doce","description":"Voc?? sugere um curso de atividade (limitado a uma ou duas senten??as) e, magicamente, influencia um criatura que voc?? possa ver, dentro do alcance, e que possa ouvir e compreender voc??. Criaturas que n??o podem ser enfeiti??adas s??o imunes a esse efeito. A sugest??o deve ser formulada de modo que o curso de a????o soe razo??vel. Dizer para a criatura se esfaquear, se arremessar em uma lan??a, tocar fogo em si mesma ou fazer algum outro ato obviamente nocivo anular?? o efeito da magia.</p><p> O alvo deve realizar um teste de resist??ncia de Sabedoria. Se falhar na resist??ncia, ele seguir?? o curso de a????o que voc?? descreveu, da melhor forma poss??vel. O curso de a????o sugerido pode continuar por toda a dura????o. Se a atividade sugerida puder ser completada em um tempo menor, a magia termina quando o alvo completar o que lhe foi dito para que fizesse.</p><p> Voc?? pode, tamb??m, especificar condi????es que ir??o ativar uma atividade especial pela dura????o. Por exemplo, voc?? poderia sugerir a um cavaleiro que entregasse seu cavalo de guerra ao primeiro mendigo que ele encontrar. Se a condi????o n??o for satisfeita antes da magia expirar, a atividade n??o ser?? conclu??da.</p><p> Se voc?? ou um dos seus companheiros causar dano a uma criatura afetada por essa magia, a magia termina.","classes":["Bardo","Bruxo","Feiticeiro","Mago"],"favorite":false},{"id":304,"level":"6","name":"Sugest??o Em Massa","name_en":"Mass Suggestion","school":{"pt":"Encantamento","style":"enchantment"},"castingTime":"1 a????o","range":"18 metros","components":"V, M","duration":"24 horas","material":"uma l??ngua de cobra e, ou um peda??o de favo de mel ou uma gota de azeite doce","description":"Voc?? sugere um curso de atividade (limitado a uma ou duas senten??as) e, magicamente, influencia at?? doze criaturas, ?? sua escolha, que voc?? possa ver dentro do alcance e que possam ouvir e compreender voc??. Criaturas que n??o podem ser enfeiti??adas s??o imunes a esse efeito. A sugest??o deve ser formulada de modo que o curso de a????o soe razo??vel. Dizer para a criatura se esfaquear, se arremessar em uma lan??a, tocar fogo em si mesma ou fazer algum outro ato obviamente nocivo anular?? o efeito da magia.</p><p> Cada alvo deve realizar um teste de resist??ncia de Sabedoria. Se falhar na resist??ncia, ele seguir?? o curso de a????o que voc?? descreveu, da melhor forma poss??vel. O curso de a????o sugerido pode continuar por toda a dura????o. Por exemplo, voc?? poderia sugeria a um grupo de soldados que deem todo o seu dinheiro para o primeiro mendigo que encontrarem. Se a condi????o n??o for atingida antes da magia acabar, a atividade n??o ?? realizada.</p><p> Se voc?? ou um dos seus companheiros causar dano a uma criatura afetada por essa magia, a magia termina para aquela criatura.</p><p><strong> Em N??veis Superiores </strong>. Quando voc?? conjurar essa magia usando um espa??o de magia de 7?? n??vel, a dura????o ser?? de 10 dias. Quando voc?? usar um espa??o de magia de 8?? n??vel, a dura????o ser?? de 30 dias. Quando voc?? usar um espa??o de magia de 9?? n??vel, a dura????o ser?? de 1 ano e 1 dia.","classes":["Bardo","Bruxo","Feiticeiro","Mago"],"favorite":false},{"id":88,"level":"1","name":"Sussurros Dissonantes","name_en":"Dissonant Whispers","school":{"pt":"Encantamento","style":"enchantment"},"castingTime":"1 a????o","range":"18 metros","components":"V","duration":"instant??nea","description":"Voc?? sussurra uma melodia dissonante que apenas uma criatura, ?? sua escolha, dentro do alcance pode ouvir, causando - lhe uma terr??vel dor. O alvo deve realizar um teste de resist??ncia de Sabedoria. Se falhar na resist??ncia, ele sofrer?? 3d6 de dano ps??quico e deve, imediatamente, usar sua rea????o, se dispon??vel, para se mover para o mais longe poss??vel de voc??. A criatura n??o se mover?? para um terreno obviamente perigoso, como uma fogueira ou abismo. Se obtiver sucesso na resist??ncia, o alvo sofre metade do dano e n??o precisa se afastar de voc??. Uma criatura surda obt??m sucesso automaticamente na sua resist??ncia.</p><p><strong> Em N??veis Superiores </strong>. Quando voc?? conjurar essa magia usando um espa??o de magia de 2?? n??vel ou superior, o dano aumenta em 1d6 para cada n??vel do espa??o acima do 1??.","classes":["Bardo"],"favorite":false},{"id":23,"level":"0","name":"Taumaturgia","name_en":"Thaumaturgy","school":{"pt":"Transmuta????o","style":"transmutation"},"castingTime":"1 a????o","range":"9 metros","components":"V","duration":"at?? 1 minuto","description":"Voc?? manifesta pequenas maravilhas, um sinal de poder sobrenatural, dentro do alcance. Voc?? cria um dos seguintes efeitos m??gicos dentro do alcance: </p><ul><li> Sua voz ressoa com o triplo do volume normal por 1 minuto.</li><li> Voc?? provoca tremores inofensivos no solo por 1 minuto.</li><li> Voc?? cria, instantaneamente, um som que se origina de um ponto, ?? sua escolha, dentro do alcance, como o barulho de um trov??o, o gralhar de um corvo ou sussurros sinistros.</li><li> Voc??, instantaneamente, faz uma porta ou janela destrancada se abrir ou se fechar.</li><li> Voc?? altera a apar??ncia dos seus olhos por 1 minuto.</li></ul><p> Se voc?? conjurar essa magia diversas vezes, voc?? pode ter at?? tr??s dos efeitos de 1 minuto ativos por vez, e voc?? pode dissipar um desses efeitos com uma a????o.","classes":["Cl??rigo"],"favorite":false},{"id":142,"level":"2","name":"Teia","name_en":"Web","school":{"pt":"Conjura????o","style":"conjuration"},"castingTime":"1 a????o","range":"18 metros","components":"V, S, M","concentration":"s","duration":"at?? 1 hora","material":"um peda??o de teia de aranha","description":"Voc?? conjura uma massa de teias espessas e pegajosas num ponto, ?? sua escolha, dentro do alcance. As teias preenchem um cubo de 6 metros naquele ponto, pela dura????o. As teias s??o terreno dif??cil e causam escurid??o leve na ??rea delas.</p><p> Se as teias n??o estiverem sendo suportadas por duas massas s??lidas (como duas paredes ou ??rvores) ou em camadas sobre um ch??o, parede ou teto, a teia conjurada desaba sobre si mesma e a magia termina no in??cio do seu pr??ximo turno. As teias em camadas sobre uma superf??cie plana ter??o 1,5 metro de profundidade.</p><p> Cada criatura que come??ar seu turno nas teias ou entrar nelas durante seu turno, deve realizar um teste de resist??ncia de Destreza. Se falhar na resist??ncia, a criatura estar?? impedida enquanto permanecer nas teias ou at?? se libertar.</p><p> Uma criatura impedida pelas teias pode usar sua a????o para realizar um teste de For??a contra a CD da magia. Se obtiver sucesso, ela n??o estar?? mais impedida.</p><p> As teias s??o inflam??veis. Qualquer cubo de 1,5 metro de teia exposto ao fogo, ?? consumida por ele em 1 rodada, causando 2d4 de dano de fogo a qualquer criatura que come??ar seu turno nas chamas.","classes":["Feiticeiro","Mago"],"favorite":false},{"id":273,"level":"5","name":"Telecin??sia","name_en":"Telekinesis","school":{"pt":"Transmuta????o","style":"transmutation"},"castingTime":"1 a????o","range":"18 metros","components":"V, S","concentration":"s","duration":"at?? 10 minutos","description":"Voc?? adquire a habilidade de mover ou manipular criaturas ou objetos atrav??s do pensamento. Quando voc?? conjura a magia e, com sua a????o a cada turno, pela dura????o, voc?? pode exercer sua vontade sobre uma criatura ou objeto que voc?? possa ver, dentro do alcance, causando os efeitos apropriados abaixo. Voc?? pode afetar o mesmo alvo rodada ap??s rodada, ou escolher um novo a qualquer momento. Se voc?? mudar de alvos, o alvo anterior n??o ser?? mais afetado pela magia.</p><p><em><strong> Criatura </strong></ em>. Voc?? pode tentar mover uma criatura Enorme ou menor. Fa??a um teste de habilidade com sua habilidade de conjura????o resistido por um teste For??a da criatura. Se voc?? vencer a disputa, voc?? move a criatura at?? 9 metros em qualquer dire????o, incluindo para cima, mas n??o al??m do alcance da magia. At?? o final do seu pr??ximo turno, a criatura estar?? impedida pelo seu agarr??o telecin??tico. Uma criatura erguida para cima estar?? suspensa no ar.</p><p> Em rodadas subsequente, voc?? pode usar sua a????o para tentar manter seu agarr??o telecin??tico na criatura repetindo o teste resistido.</p><p><em><strong> Objeto </strong></ em>. Voc?? pode tentar mover um objeto pesando at?? 500 quilos. Se o objeto n??o estiver sendo vestido ou carregado, voc?? o move, automaticamente, at?? 9 metros em qualquer dire????o, mas n??o al??m do alcance dessa magia.</p><p> Se o objeto estiver sendo vestido ou carregado por uma criatura, voc?? deve realizar um teste de habilidade com sua habilidade de conjura????o resistido por um teste de For??a da criatura. Se voc?? for bem sucedido, voc?? arranca o objeto da criatura e o move at?? 9 metros, em qualquer dire????o, mas n??o al??m do alcance dessa magia.</p><p> Voc?? pode exercer um controle refinado sobre os objetos com seu agarr??o telecin??tico, como manipular ferramentas simples, abrir uma porta ou um recipiente, guardar ou recuperar um item de um recipiente aberto ou derramar o conte??do de um frasco.","classes":["Feiticeiro","Mago"],"favorite":false},{"id":342,"level":"8","name":"Telepatia","name_en":"Telepathy","school":{"pt":"Adivinha????o","style":"divination"},"castingTime":"1 a????o","range":"ilimitado","components":"V, S, M","duration":"24 horas","material":"um par de an??is de prata unidos","description":"Voc?? cria uma liga????o telep??tica entre voc?? e uma criatura volunt??ria com a qual voc?? seja familiarizado. A criatura pode estar em qualquer lugar no mesmo plano de exist??ncia que voc??. A magia termina se voc?? ou o alvo n??o estiver mais no mesmo plano.</p><p> At?? a magia acabar, voc?? e o alvo podem, instantaneamente, compartilhar palavras, imagens, sons e outras mensagens sensoriais uma com a outra atrav??s da liga????o e o alvo reconhece que ?? voc?? a criatura que est?? se comunicando com ele. A magia permite que uma criatura com valor de Intelig??ncia m??nimo de 1 compreenda o sentido das suas palavras e capta o sentido geral de qualquer mensagem sensorial que voc?? enviar.","classes":["Mago"],"favorite":false},{"id":324,"level":"7","name":"Teletransporte","name_en":"Teleport","school":{"pt":"Conjura????o","style":"conjuration"},"castingTime":"1 a????o","range":"3 metros","components":"V","duration":"instant??nea","description":"Essa magia, instantaneamente, transporta voc?? e at?? oito criaturas volunt??rias, ?? sua escolha, que voc?? possa ver dentro do alcance ou um ??nico objeto que voc?? possa ver no alcance, para um destino que voc?? selecionou. Se voc?? for afetar um objeto, ele deve ser capaz de caber inteiro dentro de um cubo de 3 metros e n??o pode estar sendo empunhado ou carregado por uma criatura involunt??ria.</p><p> destino que voc?? escolher deve ser conhecido por voc?? e deve ser no mesmo plano de exist??ncia que voc?? est??. Sua familiaridade com o destino determina se voc?? chegar?? nele com sucesso. O Mestre rola 1d100 e consulta a tabela.","classes":["Bardo","Feiticeiro","Mago"],"favorite":false},{"id":305,"level":"6","name":"Teletransporte Por ??rvores","name_en":"Transport Via Plants","school":{"pt":"Conjura????o","style":"conjuration"},"castingTime":"1 a????o","range":"3 metros","components":"V, S","duration":"1 rodada","description":"Essa magia cria uma liga????o m??gica entre uma planta inanimada Grande ou maior,dentro do alcance,e outra planta a qualquer dist??ncia,no mesmo plano de exist??ncia. Voc?? deve ter visto ou tocado a planta de destino,pelo menos uma vez antes. Pela dura????o,qualquer criatura pode entrar na planta alvo e sair da planta destino usando 1,5 metro de movimento.","classes":["Druida"],"favorite":false},{"id":360,"level":"9","name":"Tempestade da Vingan??a","name_en":"Storm Of Vegeance","school":{"pt":"Conjura????o","style":"conjuration"},"castingTime":"1 a????o","range":"vis??o","components":"V, S","concentration":"s","duration":"at?? 1 minuto","description":"Uma agitada nuvem tempestuosa se forma, centrada num ponto que voc?? possa ver e se espalha num raio de 108 metros. Rel??mpagos riscam a ??rea, trov??es ressoam e ventos fortes silvam. Cada criatura embaixo da nuvem (a n??o mais de 1. 500 metros abaixo da nuvem) quando ela aparece deve realizar um teste de resist??ncia de Constitui????o. Com uma falha na resist??ncia, uma criatura sofre 2d6 de dano trovejante e ficar?? surda por 5 minutos.</p><p> A cada rodada que voc?? mantiver a concentra????o nessa magia, a tempestade produzir?? efeitos adicionais no seu turno.</p><p><em><strong> Rodada 2 </strong></ em>. Chuva ??cida cai da nuvem. Cada criatura e objeto abaixo dela nuvem sofre 1d6 de dano ??cido.</p><p><em><strong> Rodada 3 </strong></ em>. Voc?? convoca seis rel??mpagos da nuvem para atingir seis criaturas ou objetos, ?? sua escolha, abaixo da nuvem. Uma mesma criatura ou objeto n??o pode ser atingido por mais de um raio. Uma criatura atingida deve realizar um teste de resist??ncia de Destreza. A criatura sofrer?? 10d6 de dano el??trico se falhar na resist??ncia ou metade desse dano se passar.</p><p><em><strong> Rodada 4 </strong></ em>. Granizo chove da nuvem. Cada criatura abaixo da nuvem sofre 2d6 de dano de concuss??o.</p><p><em><strong> Rodada 5??? 10 </strong></ em>. Ventos e chuva gelados atacam a ??rea abaixo da nuvem. A ??rea se torna terreno dif??cil e de escurid??o densa. Cada criatura sofre 1d6 de dano de frio. Ataques com armas ?? dist??ncia na ??rea s??o imposs??veis. O vento e chuva contam como uma distra????o grave com os prop??sitos de manter a concentra????o em magias. Finalmente, ventos fortes (entre 30 e 75 quil??metros por hora) automaticamente dispersam nevoa, neblina e fen??menos similares na ??rea, independentemente de serem mundanos ou m??gicos.","classes":["Druida"],"favorite":false},{"id":325,"level":"7","name":"Tempestade de Fogo","name_en":"Fire Storm","school":{"pt":"Evoca????o","style":"evocation"},"castingTime":"1 a????o","range":"45 metros","components":"V, S","duration":"instant??nea","description":"Uma tempestade feita de camadas de chamas crepitantes aparece num local, ?? sua escolha, dentro do alcance. A ??rea da tempestade consiste de at?? dez cubos de 3 metros, que voc?? pode organizar como desejar. Cada cubo deve ter, pelo menos, uma face adjacente a face de outro cubo. Cada criatura na ??rea deve realizar um teste de resist??ncia de Destreza. Ela sofre 7d10 de dano de fogo se falhar na resist??ncia, ou metade desse dano se obtiver sucesso.</p><p> O fogo causa dano aos objetos na ??rea e incendeia objetos inflam??veis que n??o estejam sendo vestidos ou carregados. Se desejar, a vida vegetal na ??rea pode n??o ser afetada por essa magia.","classes":["Cl??rigo","Druida","Feiticeiro"],"favorite":false},{"id":229,"level":"4","name":"Tempestade de Gelo","name_en":"Ice Storm","school":{"pt":"Evoca????o","style":"evocation"},"castingTime":"1 a????o","range":"90 metros","components":"V, S, M","duration":"instant??nea","material":"um pouco de poeira e algumas gotas de ??gua","description":"Uma rajada de pedras de gelo batem no ch??o em um cilindro de 6 metros de raio por 12 metros de altura, centrado num ponto dentro do alcance. Cada criatura no cilindro deve realizar um teste de resist??ncia de Destreza. Uma criatura sofre 2d8 de dano de concuss??o e 4d6 de dano de frio se falhar na resist??ncia ou metade desse dano se obtiver sucesso </p><p> O granizo torna a ??rea da tempestade em terreno dif??cil at?? o final do seu pr??ximo turno.</p><p><strong> Em N??veis Superiores </strong>. Quando voc?? conjurar essa magia usando um espa??o de magia de 5?? n??vel ou superior, o dano de concuss??o aumenta em 1d8 para cada n??vel do espa??o acima do 4??.","classes":["Druida","Feiticeiro","Mago"],"favorite":false},{"id":230,"level":"4","name":"Tent??culos Negros de Evard","name_en":"Evard's Black Tentacles","school":{"pt":"Conjura????o","style":"conjuration"},"castingTime":"1 a????o","range":"27 metros","components":"V, S, M","concentration":"s","duration":"at?? 1 minuto","material":"um peda??o de tent??culo de um polvo gigante ou lula gigante","description":"Tent??culos negros retorcidos preenchem um quadrado de 6 metros no ch??o, que voc?? possa ver dentro do alcance. Pela dura????o, esses tent??culos transformam o solo na ??rea em terreno dif??cil.</p><p> Quando uma criatura adentrar a ??rea afetada pela primeira vez em um turno ou come??ar o turno dela l??, a criatura deve ser bem sucedida num teste de resist??ncia de Destreza ou sofrer?? 3d6 de dano de concuss??o e estar?? impedida pelos tent??culos at?? o fim da magia. Uma criatura que come??ar seu turno na ??rea e j?? estiver impedida pelos tent??culos sofre 3d6 de dano de concuss??o.</p><p> Uma criatura impedida pelos tent??culos pode usar sua a????o para realizar um teste de For??a ou Destreza (?? escolha dela) contra a CD da sua magia. Se ela obtiver sucesso, ela se libertar??.","classes":["Mago"],"favorite":false},{"id":343,"level":"8","name":"Terremoto","name_en":"Earthquake","school":{"pt":"Evoca????o","style":"evocation"},"castingTime":"1 a????o","range":"150 metros","components":"V, S, M","concentration":"s","duration":"at?? 1 minuto","material":"um pouco de poeira, uma pedra e um peda??o de barro","description":"Voc?? cria um dist??rbio s??smico num ponto no solo, que voc?? possa ver dentro do alcance. Pela dura????o, um tremor intenso rompe o solo em um c??rculo com 30 metros de raio centrado no ponto e sacode criaturas e estruturas em contato com o ch??o na ??rea.</p><p> O solo na ??rea torna - se terreno dif??cil. Cada criatura no solo que estiver se concentrando, deve realizar um teste de resist??ncia de Constitui????o. Se falha na resist??ncia, a concentra????o da criatura ?? interrompida.</p><p> Quando voc?? conjura essa magia, e ao final de cada turno que voc?? gastar se concentrando nela, cada criatura no solo na ??rea deve realizar um teste de resist??ncia de Destreza. Se falhar na resist??ncia, a criatura ser?? derrubada no ch??o.</p><p> Essa magia pode ter efeitos adicionais a depender do terreno na ??rea, como determinado pelo Mestre.</p><p><em><strong> Fissuras </strong></ em>. Fissuras se abrem por toda ??rea da magia, no come??o do seu pr??ximo turno, ap??s voc?? conjurar a magia. Um total de 1d6 dessas fissuras se abrem em locais escolhidos pelo Mestre. Cada um tem 1d10 x 3 metros de profundidade, 3 metros de largura e se estende de uma extremidade at?? o lado oposto da ??rea da magia. Uma criatura que estiver em um ponto onde uma fissura se abriu deve ser bem sucedido num teste de resist??ncia de Destreza ou cair?? dentro dela. Uma criatura que obtenha sucesso na resist??ncia se move com a margem da fissura, ?? medida que ela se abre.</p><p> Uma fissura que se abra abaixo de uma estrutura faz com que ela, automaticamente, desmorone (veja abaixo).</p><p><em><strong> Estruturas </strong></ em>. O tremor causa 50 de dano de concuss??o a qualquer estrutura em contato com o solo na ??rea, quando voc?? conjurar a magia e, no in??cio de cada turno at?? a magia terminar. Se a estrutura cair a 0 pontos de vida, ela desmorona e, potencialmente, fere criaturas pr??ximas. Uma criatura a uma dist??ncia inferior a metade da altura da estrutura deve realizar um teste de resist??ncia de Destreza. Se falhar na resist??ncia, a criatura sofrer?? 5d6 de dano de concuss??o, cair?? no ch??o e estar?? soterrada nos escombros, precisando de um teste de For??a (Atletismo) com CD 20, usando uma a????o, para escapar. O Mestre pode ajustar a CD para cima ou para baixo, dependendo da natureza dos escombros. Se obtiver sucesso na resist??ncia, a criatura sofre metade do dano e n??o estar?? ca??da ou soterrada.","classes":["Cl??rigo","Druida","Feiticeiro"],"favorite":false},{"id":231,"level":"4","name":"Terreno Alucin??geno","name_en":"Hallucinatory Terrain","school":{"pt":"Ilus??o","style":"illusion"},"castingTime":"10 minutos","range":"90 metros","components":"V, S, M","duration":"24 horas","material":"uma pedra, um galho e um pouco de planta verde","description":"Voc?? faz com que um terreno natural num cubo de 45 metros dentro do alcance, pare??a, soe e cheire com outro tipo de terreno natural. Portanto, campos abertos ou uma estrada podem ser modificados para se assemelharem a um p??ntano, colina, fenda ou algum outro tipo de terreno dif??cil ou intranspon??vel. Uma lagoa pode ser modificada para se parecer com um prado, um precip??cio com um declive suave ou um barranco pedregoso com uma estrada larga e lisa. Estruturas manufaturadas, equipamentos e criaturas dentro da ??rea n??o tem suas apar??ncias modificadas.</p><p> As caracter??sticas t??teis do terreno s??o inalteradas, portanto, as criaturas que adentrarem na ??rea est??o suscept??veis de ver atrav??s da ilus??o. Se a diferen??a n??o for obvia ao toque, uma criatura que examine a ilus??o cuidadosamente, pode realizar um teste de Intelig??ncia (Investiga????o) contra a CD da magia para desacredit??-la. Uma criatura que discernir a ilus??o do que ela ??, a enxerga como uma imagem vaga sobrepondo o terreno.","classes":["Bardo","Bruxo","Druida","Mago"],"favorite":false},{"id":24,"level":"0","name":"Toque Arrepiante","name_en":"Chill Touch","school":{"pt":"Necromancia","style":"necromancy"},"castingTime":"1 a????o","range":"36 metros","components":"V, S","duration":"1 rodada","description":"Voc?? cria uma m??o esquel??tica fantasmag??rica no espa??o de uma criatura, dentro do alcance. Realize um ataque ?? dist??ncia com magia contra a criatura para afet??-la com o frio sepulcral. Se atingir, a criatura sofre 1d8 de dano necr??tico e n??o poder?? recuperar pontos de vida at?? o in??cio do seu pr??ximo turno. At?? l??, a m??o ficar?? presa ao alvo.</p><p> Se voc?? atingir um alvo morto - vivo, ele ter?? desvantagem nas jogadas de ataque contra voc?? at?? o final do seu pr??ximo turno.</p><p> O dano dessa magia aumenta em 1d8 quando voc?? alcan??a o 5?? n??vel (2d8), 11?? n??vel (3d8) e 17?? n??vel (4d8).","classes":["Bruxo","Feiticeiro","Mago"],"favorite":false},{"id":25,"level":"0","name":"Toque Chocante","name_en":"Shocking Grasp","school":{"pt":"Evoca????o","style":"evocation"},"castingTime":"1 a????o","range":"toque","components":"V, S","duration":"instant??nea","description":"Eletricidade surge da sua m??o para transmitir um choque em uma criatura que voc?? tentar tocar. Fa??a um ataque corpo-a-corpo com magia contra o alvo. Voc?? tem vantagem na jogada de ataque se o alvo estiver vestindo qualquer armadura de metal. Se atingir, o alvo sofre 1d8 de dano el??trico e n??o pode usar rea????es at?? o in??cio do pr??ximo turno dele.</p><p> O dano da magia aumenta em 1d8 quando voc?? alcan??a o 5?? n??vel (2d8), 11?? n??vel (3d8) e 17?? n??vel (4d8).","classes":["Feiticeiro","Mago"],"favorite":false},{"id":195,"level":"3","name":"Toque Vamp??rico","name_en":"Vampiric Touch","school":{"pt":"Necromancia","style":"necromancy"},"castingTime":"1 a????o","range":"pessoal","components":"V, S","concentration":"s","duration":"at?? 1 minuto","description":"O toque da sua m??o coberta de sombras pode drenar a for??a vital dos outros para curar seus ferimentos. Realize um ataque corpo - a - corpo com magia contra uma criatura ao seu alcance. Se atingir, o alvo sofre 3d6 de dano necr??tico e voc?? recupera pontos de vida igual ?? metade do dano necr??tico causado. At?? a magia acabar, voc?? pode realizar o ataque novamente, no seu turno, com uma a????o.</p><p><strong> Em N??veis Superiores </strong>. Quando voc?? conjurar essa magia usando um espa??o de magia de 4?? n??vel ou superior, o dano aumenta em 1d6 para cada n??vel do espa??o acima do 3??.","classes":["Bruxo","Mago"],"favorite":false},{"id":143,"level":"2","name":"Tranca Arcana","name_en":"Arcane Lock","school":{"pt":"Abjura????o","style":"abjuration"},"castingTime":"1 a????o","range":"toque","components":"V, S, M","duration":"at?? ser dissipada","material":"p?? de ouro valendo, no m??nimo, 25 po, consumido pela magia","description":"Voc?? toca uma porta, janela, port??o, ba?? ou outra entrada fechada e ela ficar?? trancada pela dura????o. Voc?? e as criaturas que voc?? designar, quando voc?? conjurar essa magia, podem abrir o objeto normalmente. Voc?? tamb??m pode definir uma senha que, quando falada a 1,5 metro do objeto, suprime a magia por 1 minuto. De outra forma, ele ?? intranspon??vel at?? ser quebrado ou a magia seja dissipada ou suprimida. Conjurar <em> arrombar </em> no objeto suprime a <em> tranca arcana </em> por 10 minutos.</p><p> Enquanto estiver sob efeito dessa magia, o objeto ?? mais dif??cil de quebrar ou de for??ar para abrir, a CD para quebra - lo ou de arromba - lo aumenta em 10.","classes":["Mago"],"favorite":false},{"id":144,"level":"2","name":"Truque de Corda","name_en":"Rope Trick","school":{"pt":"Transmuta????o","style":"transmutation"},"castingTime":"1 a????o","range":"toque","components":"V, S, M","duration":"1 hora","material":"p?? de extrato de milho e um la??o de pergaminho tran??ado","description":"Voc?? toca um peda??o de corda que tenha at?? 18 metros de comprimento. Uma ponta da corda ent??o, se ergue no ar at?? toda a corda estar erguida e perpendicular ao solo. Na ponta de cima da corda, uma entrada invis??vel se abre para um espa??o extradimensional que permanece at?? a magia acabar.</p><p> O espa??o extradimensional pode ser alcan??ado escalando a corda at?? o topo. O espa??o pode abrigar at?? oito criaturas M??dias ou menores. A corda pode ser puxada para dentro do buraco, fazendo - a desaparecer para os observadores do lado de fora do espa??o.</p><p> Ataques e magias n??o podem ultrapassar a entrada, entrando ou saindo do espa??o extradimensional, mas quem est?? dentro pode ver o lado de fora, como se estivesse olhando por uma janela de 0, 9 metro por 1,5 metro, centrada na corda.</p><p> Tudo que estiver dentro do espa??o extradimensional cai quando a magia acabar.","classes":["Mago"],"favorite":false},{"id":344,"level":"8","name":"Tsunami","name_en":"Tsunami","school":{"pt":"Conjura????o","style":"conjuration"},"castingTime":"1 minuto","range":"vis??o","components":"V, S","concentration":"s","duration":"at?? 6 rodadas","description":"Uma muralha de ??gua aparece do nada num ponto, ?? sua escolha, dentro do alcance. Voc?? pode fazer a muralha ter at?? 90 metros de comprimento, 90 metro de altura e 15 metros de espessura. A muralha permanece pela dura????o.</p><p> Quando a muralha aparece, cada criatura dentro da ??rea deve realizar um teste de resist??ncia de For??a. Se falhar na resist??ncia, uma criatura sofrer?? 6d10 de dano de concuss??o ou metade desse dano se passar na resist??ncia.</p><p> No in??cio de cada um dos seus turnos, ap??s a muralha aparecer, ela, junto com qualquer criatura nela, se afasta 15 metros de voc??. Qualquer criatura Enorme ou menor dentro da muralha ou no espa??o que a muralha entrar quando ela se mover, deve ser bem sucedida num teste de resist??ncia de For??a ou sofrer?? 5d6 de dano de concuss??o. Uma criatura pode sofrer esse dano apenas uma vez por rodada. No final do turno, a altura da muralha ?? reduzida em 15 metros e o dano que as criaturas sofrem da magia nas rodadas subsequentes ?? reduzido em 1d10. Quando a muralha chegar a 0 metro de altura, a magia acaba.</p><p> Uma criatura pega pela muralha, pode se mover nadando. Devido ?? for??a da onda, no entanto, a criatura deve realizar um teste de For??a (Atletismo) contra a CD da magia para conseguir se mover. Se ela falhar no teste, n??o conseguir?? se mover. Uma criatura que se mova para fora da ??rea, cair?? no ch??o.","classes":["Druida"],"favorite":false},{"id":196,"level":"3","name":"Velocidade","name_en":"Haste","school":{"pt":"Transmuta????o","style":"transmutation"},"castingTime":"1 a????o","range":"18 metros","components":"V, S, M","concentration":"s","duration":"at?? 1 minuto","material":"uma raspa de raiz de alca??uz","description":"Escolha uma criatura volunt??ria que voc?? possa ver, dentro do alcance. At?? a magia acabar, o deslocamento do alvo ?? dobrado, ele ganha + 2 de b??nus na CA, ele tem vantagem em testes de resist??ncia de Destreza e ganha uma a????o adicional em cada um dos turnos dele. A a????o pode ser usada apenas para realizar as a????es de Atacar (um ataque com arma, apenas), Disparada, Desengajar, Esconder ou Usar um Objeto.</p><p> Quando a magia acabar, o alvo n??o poder?? se mover ou realizar a????es at?? depois do seu pr??ximo turno, ?? medida que uma onda de letargia toma conta dele.","classes":["Feiticeiro","Mago"],"favorite":false},{"id":145,"level":"2","name":"Ver o Invis??vel","name_en":"See Invisibility","school":{"pt":"Adivinha????o","style":"divination"},"castingTime":"1 a????o","range":"pessoal","components":"V, S, M","duration":"1 hora","material":"um pouco de talco e um p?? de prata polvilhado","description":" Pela dura????o, voc?? v?? criaturas e objetos invis??veis como se eles fossem vis??veis e voc?? pode ver no Plano Et??reo. Criaturas e objetos et??reos parecem espectrais e transl??cidos.","classes":["Bardo","Feiticeiro","Mago"],"favorite":false},{"id":326,"level":"7","name":"Viagem Planar","name_en":"Plane Shift","school":{"pt":"Conjura????o","style":"conjuration"},"castingTime":"1 a????o","range":"toque","components":"V, S, M","duration":"instant??nea","material":"uma haste met??lica bifurcada valendo, no m??nimo, 250 po, sintonizada com um plano de exist??ncia em particular","description":"Voc?? e at?? oito criaturas volunt??rias, que estejam de m??os dadas em um c??rculo, s??o transportadas para um plano de exist??ncia diferente. Voc?? pode especificar o destino alvo em termos gerais, como a Cidade de Bronze do Plano Elemental do Fogo ou o pal??cio de Dispater na segunda camada dos Nove Infernos e voc?? aparece no ou perto do destino. Se voc?? estiver tentando chegar a Cidade de Bronze, por exemplo, voc?? poderia chegar na Estrada de A??o dela, em frente aos Port??es de Cinzas ou contemplando a cidade do outro lado do Mar de Fogo, ?? crit??rio do Mestre.</p><p> Alternativamente, se voc?? conhecer a sequ??ncia de selos do c??rculo de teletransporte em outro plano de exist??ncia, essa magia pode leva - lo para esse c??rculo. Se o c??rculo de teletransporte for muito pequeno para comportar as criaturas que voc?? est?? transportando, elas aparecer??o no espa??o desocupado mais pr??ximo do c??rculo.</p><p> Voc?? pode usar essa magia para banir uma criatura involunt??ria para outro plano. Escolha uma criatura ao seu alcance e realize um ataque corpo - a - corpo com magia contra ela. Se atingir, a criatura deve realizar um teste de resist??ncia de Carisma. Se a criatura falhar na resist??ncia, ela ?? transportada para um local aleat??rio no plano de exist??ncia que voc?? especificou. Uma criatura, uma vez transportada, deve encontrar seu pr??prio meio de retornar para seu plano de exist??ncia atual.","classes":["Bruxo","Cl??rigo","Druida","Feiticeiro","Mago"],"favorite":false},{"id":274,"level":"5","name":"Vid??ncia","name_en":"Scrying","school":{"pt":"Adivinha????o","style":"divination"},"castingTime":"10 minutos","range":"pessoal","components":"V, S, M","concentration":"s","duration":"at?? 10 minutos","material":"um foco valendo, no m??nimo, 1. 000 po, como uma bola de cristal, espelho de prata ou fonte cheia de ??gua benta","description":"Voc?? pode ver e ouvir uma criatura em particular, ?? sua escolha, que esteja no mesmo plano de exist??ncia que voc??. O alvo deve realizar um teste de resist??ncia de Sabedoria, que ?? modificador de acordo com o qu??o bem voc?? conhece o alvo e o tipo de conex??o f??sica que voc?? tem com ele. Se um alvo souber que voc?? est?? conjurando essa magia, ele pode falhar no teste de resist??ncia voluntariamente, se ele quiser ser observado.</p><p> Com um sucesso na resist??ncia, o alvo n??o ?? afetado e voc?? n??o pode usar essa magia contra ele novamente por 24 horas.</p><p> Se falhar na resist??ncia, a magia cria um sensor invis??vel a at?? 3 metros do alvo. Voc?? pode ver e ouvir atrav??s do sensor, como se voc?? estivesse onde ele est??. O sensor se move com o alvo, permanecendo a 3 metros dele pela dura????o. Uma criatura que puder ver objetos invis??veis ver?? o sensor como um globo luminoso do tamanho de um punho.</p><p> Ao inv??s de focar em uma criatura, voc?? pode escolher um local que voc?? j?? tenha visto antes como alvo dessa magia. Quando fizer isso, o sensor aparece no local e n??o se move.</p><table><thead><tr><th> Conhecimento </th><th> Modificador de Resist??ncia </th></ tr></thead><tbody><tr><td> Segunda m??o (voc?? ouviu falar do alvo) </td><td> +5 </td></ tr><tr><td> Primeira m??o (voc?? foi apresentado ao alvo) </td><td> +0 </td></ tr><tr><td> Familiar (voc?? conhece bem o alvo) </td><td> ???5 </td></ tr></tbody></ table><table><thead><tr><th> Conex??o </th><th> Modificador de Resist??ncia </th></ tr></thead><tbody><tr><td> Descri????o ou foto </td><td> ???2 </td></ tr><tr><td> Pertences ou roupas </td><td> ???4 </td></ tr><tr><td> Parte do corpo, mexa de cabelo, recorte de unha ou simular </td><td> ???10 </td></ tr></tbody></ table>","classes":["Bardo","Bruxo","Cl??rigo","Druida","Mago"],"favorite":false},{"id":146,"level":"2","name":"V??nculo Protetor","name_en":"Warding Bond","school":{"pt":"Abjura????o","style":"abjuration"},"castingTime":"1 a????o","range":"toque","components":"V, S, M","duration":"1 hora","material":"um par de an??is de platina valendo, no m??nimo, 50 po cada, que voc?? e o alvo devem usar pela dura????o","description":"Essa magia protege uma criatura volunt??ria que voc?? tocar e cria uma conex??o m??stica entre voc?? e o alvo at?? a magia acabar. Enquanto o alvo estiver a at?? 18 metros de voc??, ele recebe + 1 de b??nus na CA, nos testes de resist??ncia e ter?? resist??ncia a todos os danos. No entanto, a cada vez que ele sofrer dano, voc?? sofrer?? a mesma quantidade de dano.</p><p> A magia acaba se voc?? cair a 0 pontos de vida ou se voc?? e o alvo ficarem separados a mais de 18 metros. Ela tamb??m termina se a magia for conjurada novamente em quaisquer das criaturas conectadas. Voc?? tamb??m pode dissipar a magia com uma a????o.","classes":["Cl??rigo"],"favorite":false},{"id":232,"level":"4","name":"Vinha Esmagadora","name_en":"Grasping Vine","school":{"pt":"Conjura????o","style":"conjuration"},"castingTime":"1 a????o b??nus","range":"9 metros","components":"V, S","concentration":"s","duration":"at?? 1 minuto","description":"Voc?? conjura uma vinha que brota do ch??o em um espa??o desocupado, ?? sua escolha, que voc?? possa ver dentro do alcance. Quando voc?? conjura essa magia, voc?? pode direcionar a vinha para que ela enlace uma criatura a at?? 9 metros dela que voc?? possa ver. Essa criatura deve ser bem sucedida num teste de resist??ncia de Destreza ou ser?? arrastada 6 metros na dire????o da vinha.</p><p> At?? o fim da magia, voc?? pode direcionar a vinha para enla??ar a mesma criatura ou uma diferente, com uma a????o b??nus, em cada um dos seus turnos.","classes":["Druida","Patrulheiro"],"favorite":false},{"id":306,"level":"6","name":"Vis??o da Verdade","name_en":"True Seeing","school":{"pt":"Adivinha????o","style":"divination"},"castingTime":"1 a????o","range":"toque","components":"V, S, M","duration":"1 hora","material":"unguento para os olhos no valor de 25po feito de p?? de cogumelo, a??afr??o e gordura e ?? consumido pela magia","description":"Essa magia concede a uma criatura volunt??ria tocada a habilidade de ver as coisas como elas realmente s??o. Pela dura????o, a criatura ter?? vis??o verdadeira, percebendo portas secretas escondidas por magia e podendo ver no Plano Et??reo, tudo num alcance de at?? 36 metros.","classes":["Bardo","Bruxo","Cl??rigo","Feiticeiro","Mago"],"favorite":false},{"id":147,"level":"2","name":"Vis??o No Escuro","name_en":"Darkvision","school":{"pt":"Transmuta????o","style":"transmutation"},"castingTime":"1 a????o","range":"toque","components":"V, S, M","duration":"8 horas","material":"ou um peda??o de cenoura seca ou uma ??gata","description":"Voc?? toca uma criatura volunt??ria para conceder a ela a habilidade de ver nas trevas. Pela dura????o, a criatura ter?? vis??o no escuro com alcance de 18 metros.","classes":["Druida","Feiticeiro","Mago","Patrulheiro"],"favorite":false},{"id":89,"level":"1","name":"Vitalidade Falsa","name_en":"False Life","school":{"pt":"Necromancia","style":"necromancy"},"castingTime":"1 a????o","range":"pessoal","components":"V, S, M","duration":"1 hora","material":"uma pequena quantidade de ??lcool ou bebidas destiladas","description":"Refor??ando - se com uma vitalidade necrom??ntica ilus??ria, voc?? ganha 1d4 + 4 pontos de vida tempor??rios pela dura????o.</p><p><strong> Em N??veis Superiores </strong>. Quando voc?? conjurar essa magia usando um espa??o de magia de 2?? n??vel ou superior, voc?? ganha 5 pontos de vida tempor??rios adicionais para cada n??vel do espa??o de magia acima do 1??.","classes":["Feiticeiro","Mago"],"favorite":false},{"id":197,"level":"3","name":"Voo","name_en":"Fly","school":{"pt":"Transmuta????o","style":"transmutation"},"castingTime":"1 a????o","range":"toque","components":"V, S, M","concentration":"s","duration":"at?? 10 minutos","material":"uma pena da asa de qualquer p??ssaro","description":"Voc?? toca uma criatura volunt??ria. O alvo ganha deslocamento de voo de 18 metros, pela dura????o. Quando a magia acabar, o alvo cai se ainda estiver no ar, a n??o ser que ele possa impedir a queda.</p><p><strong> Em N??veis Superiores </strong>. Quando voc?? conjurar essa magia usando um espa??o de magia de 4?? n??vel ou superior, voc?? pode afetar uma criatura adicional para cada n??vel do espa??o acima do 3??.","classes":["Bruxo","Feiticeiro","Mago"],"favorite":false},{"id":26,"level":"0","name":"Zombaria Viciosa","name_en":"Vicious Mockery","school":{"pt":"Encantamento","style":"enchantment"},"castingTime":"1 a????o","range":"18 metros","components":"V","duration":"instant??nea","description":"Voc?? libera uma s??rie de insultos atados com encantamentos sutis numa criatura que voc?? possa ver, dentro do alcance. Se o alvo puder ouvir voc?? (apesar de n??o precisar compreende - lo), ele deve ser bem sucedido num teste de resist??ncia de Sabedoria ou sofrer?? 1d4 de dano ps??quico e ter?? desvantagem na pr??xima jogada de ataque que ele fizer antes do final do pr??ximo turno dele.</p><p> O dano dessa magia aumenta em 1d4 quando voc?? alcan??a o 5?? n??vel (2d4), 11?? n??vel (3d4) e 17?? n??vel (4d4).","classes":["Bardo"],"favorite":false},{"id":148,"level":"2","name":"Zona da Verdade","name_en":"Zone Of Truth","school":{"pt":"Encantamento","style":"enchantment"},"castingTime":"1 a????o","range":"18 metros","components":"V, S","duration":"10 minutos","description":"Voc?? cria uma zona m??gica protegida contra engana????o, numa esfera com 4, 5 metros de raio, centrada num ponto, ?? sua escolha, dentro do alcance. At?? a magia acabar, uma criatura que entrar na ??rea da magia pela primeira vez num turno ou come??ar seu turno nela, deve realizar um teste de resist??ncia de Carisma. Se falhar na resist??ncia, a criatura n??o poder?? mentir deliberadamente enquanto estiver no raio. Voc?? saber?? cada criatura que passou ou falhou nesse teste de resist??ncia.</p><p> Uma criatura afetada est?? ciente da magia e pode, portanto, evitar responder perguntas as quais ela normalmente responderia com uma mentira. Tais criaturas podem ser evasivas em suas respostas, contanto que permane??am dentro dos limites da verdade.","classes":["Bardo","Cl??rigo","Paladino"],"favorite":false}]

/***/ }),
/* 130 */
/***/ (function(module, exports) {

module.exports = [{"name":"Adaga","value":"2 po","dice":"1d4","damage":"perfurante","weight":"0,5 kg","properties":"Acuidade, leve, arremesso (dist??ncia 6/18)","type":"simples","favorite":false,"range":"meele"},{"name":"Azagaia","value":"5 pp","dice":"1d6","damage":"perfurante","weight":"1 kg","properties":"Arremesso (dist??ncia 9/36)","type":"simples","favorite":false,"range":"meele"},{"name":"Bord??o","value":"2 pp","dice":"1d6","damage":"concuss??o","weight":"2 kg","properties":"Vers??til (1d8)","type":"simples","favorite":false,"range":"meele"},{"name":"Clava Grande","value":"2 pp","dice":"1d8","damage":"concuss??o","weight":"5 kg","properties":"Pesada, duas m??os","type":"simples","favorite":false,"range":"meele"},{"name":"Foice Curta","value":"1 po","dice":"1d4","damage":"cortante","weight":"1 kg","properties":"Leve","type":"simples","favorite":false,"range":"meele"},{"name":"Lan??a","value":"1 po","dice":"1d6","damage":"perfurante","weight":"1,5 kg","properties":"Arremesso (dist??ncia 6/18), vers??til (1d8)","type":"simples","favorite":false,"range":"meele"},{"name":"Ma??a","value":"5 po","dice":"1d6","damage":"concuss??o","weight":"2 kg","properties":"","type":"simples","favorite":false,"range":"meele"},{"name":"Machadinha","value":"5 po","dice":"1d6","damage":"cortante","weight":"1 kg","properties":"Leve, arremesso (dist??ncia 6/18)","type":"simples","favorite":false,"range":"meele"},{"name":"Martelo Leve","value":"2 po","dice":"1d4","damage":"concuss??o","weight":"1 kg","properties":"Leve, arremesso (dist??ncia 6/18)","type":"simples","favorite":false,"range":"meele"},{"name":"Porrete","value":"1 pp","dice":"1d4","damage":"concuss??o","weight":"1 kg","properties":"Leve","type":"simples","favorite":false,"range":"meele"},{"name":"Arco Curto","value":"25 po","dice":"1d6","damage":"perfurante","weight":"1 kg","properties":"Muni????o (dist??ncia 24/96), duas m??os","type":"simples","favorite":false,"range":"ranged"},{"name":"Beste Leve","value":"25 po","dice":"1d8","damage":"perfurante","weight":"2,5 kg","properties":"Muni????o (dist??ncia 24/96), recarga, duas m??os","type":"simples","favorite":false,"range":"ranged"},{"name":"Dardo","value":"5 pc","dice":"1d4","damage":"perfurante","weight":"0,1 kg","properties":"Acuidade, arremesso (dist??ncia 6/18)","type":"simples","favorite":false,"range":"ranged"},{"name":"Funda","value":"1 pp","dice":"1d4","damage":"concuss??o","weight":"???","properties":"Muni????o (dist??ncia 9/36)","type":"simples","favorite":false,"range":"ranged"},{"name":"Alabarda","value":"20 po","dice":"1d10","damage":"cortante","weight":"3 kg","properties":"Pesada, alcance, duas m??os","type":"marcial","favorite":false,"range":"meele"},{"name":"Cimitarra","value":"25 po","dice":"1d6","damage":"cortante","weight":"1,5 kg","properties":"Acuidade, leve","type":"marcial","favorite":false,"range":"meele"},{"name":"Chicote","value":"2 po","dice":"1d4","damage":"cortante","weight":"1,5 kg","properties":"Acuidade, alcance","type":"marcial","favorite":false,"range":"meele"},{"name":"Espada Curta","value":"10 po","dice":"1d6","damage":"perfurante","weight":"1 kg","properties":"Acuidade, leve","type":"marcial","favorite":false,"range":"meele"},{"name":"Espada Grande","value":"50 po","dice":"2d6","damage":"cortante","weight":"3 kg","properties":"Pesada, duas m??os","type":"marcial","favorite":false,"range":"meele"},{"name":"Espada Longa","value":"15 po","dice":"1d8","damage":"cortante","weight":"1,5 kg","properties":"Vers??til (1d10)","type":"marcial","favorite":false,"range":"meele"},{"name":"Glaive","value":"20 po","dice":"1d10","damage":"cortante","weight":"3 kg","properties":"Pesada, alcance, duas m??os","type":"marcial","favorite":false,"range":"meele"},{"name":"Lan??a de Montaria","value":"10 po","dice":"1d12","damage":"perfurante","weight":"3 kg","properties":"Alcance, especial","type":"marcial","favorite":false,"range":"meele"},{"name":"Lan??a Longa","value":"5 po","dice":"1d10","damage":"perfurante","weight":"4 kg","properties":"Pesada, alcance, duas m??os","type":"marcial","favorite":false,"range":"meele"},{"name":"Ma??a Estrela","value":"15 po","dice":"1d8","damage":"perfurante","weight":"2 kg","properties":"","type":"marcial","favorite":false,"range":"meele"},{"name":"Machado Grande","value":"30 po","dice":"1d12","damage":"cortante","weight":"3,5 kg","properties":"Pesada, duas m??os","type":"marcial","favorite":false,"range":"meele"},{"name":"Machado de Batalha","value":"10 po","dice":"1d8","damage":"cortante","weight":"2 kg","properties":"Vers??til (1d10)","type":"marcial","favorite":false,"range":"meele"},{"name":"Malho","value":"10 po","dice":"2d6","damage":"concuss??o","weight":"5 kg","properties":"Pesada, duas m??os","type":"marcial","favorite":false,"range":"meele"},{"name":"Mangual","value":"10 po","dice":"1d8","damage":"concuss??o","weight":"1 kg","properties":"","type":"marcial","favorite":false,"range":"meele"},{"name":"Martelo de Guerra","value":"15 po","dice":"1d8","damage":"concuss??o","weight":"1 kg","properties":"Vers??til (1d10)","type":"marcial","favorite":false,"range":"meele"},{"name":"Picareta de Guerra","value":"5 po","dice":"1d8","damage":"perfurante","weight":"1 kg","properties":"","type":"marcial","favorite":false,"range":"meele"},{"name":"Rapieira","value":"25 po","dice":"1d8","damage":"perfurante","weight":"1 kg","properties":"Acuidade","type":"marcial","favorite":false,"range":"meele"},{"name":"Tridente","value":"5 po","dice":"1d6","damage":"perfurante","weight":"2 kg","properties":"Arremesso (6/18), vers??til (1d8)","type":"marcial","favorite":false,"range":"meele"},{"name":"Arco Longo","value":"50 po","dice":"1d8","damage":"perfurante","weight":"1 kg","properties":"Muni????o (dist??ncia 45/180), pesada, duas m??os","type":"marcial","favorite":false,"range":"ranged"},{"name":"Besta de M??o","value":"75 po","dice":"1d6","damage":"perfurante","weight":"1,5 kg","properties":"Muni????o (dist??ncia 9/36), leve, recarga","type":"marcial","favorite":false,"range":"ranged"},{"name":"Besta Pesada","value":"50 po","dice":"1d10","damage":"perfurante","weight":"4,5 kg","properties":"Muni????o (dist??ncia 30/120), pesada, recarga, duas m??os","type":"marcial","favorite":false,"range":"ranged"},{"name":"Zarabatana","value":"10 po","dice":"1","damage":"perfurante","weight":"0,5 kg","properties":"Muni????o (dist??ncia 7,5/30), recarga","type":"marcial","favorite":false,"range":"ranged"},{"name":"Rede","value":"1 po","dice":"","damage":"???","weight":"1,5 kg","properties":"Especial, arremesso (dist??ncia 1,5/4,5)","type":"marcial","favorite":false,"range":"ranged"}]

/***/ }),
/* 131 */
/***/ (function(module, exports) {

module.exports = [{"name":"Acolchoada","type":"armor","defense":"light","cost":"5 po","ac":"11 + mod Dex","strenght_min":"","stealth_disavantage":true,"weight":"4 kg","favorite":false,"description":"A armadura acolchoada consiste em camadas de panos acolchoados e batidos"},{"name":"Couro","type":"armor","defense":"light","cost":"10 po","ac":"11 + mod Dex","strenght_min":"","stealth_disavantage":"","weight":"5 kg","favorite":false,"description":"O peitoral e as ombreiras da armadura de couro s??o feitos de couro que foi endurecido ap??s ser fervido em ??leo. O resto da armadura ?? feita de materiais mais macios e mais flex??veis"},{"name":"Couro Batido","type":"armor","defense":"light","cost":"45 po","ac":"12 + mod Dex","strenght_min":"","stealth_disavantage":"","weight":"6,5 kg","favorite":false,"description":" Feita de couro resistente, mas flex??vel, a armadura de couro batido ?? refor??ada com rebites ou cravos."},{"name":"Gib??o de Peles","type":"armor","defense":"medium","cost":"10 po","ac":"12 + mod Dex (+2 m??x)","strenght_min":"","stealth_disavantage":"","weight":"6 kg","favorite":false,"description":"Um gib??o de peles ?? um armadura bruta consistindo de peles grossas. ?? comumente usada por tribos b??rbaras, humanoiDex malignos e outros povos que n??o t??m acesso ??s ferramentas e materiais necess??rios para criar uma armadura melhor."},{"name":"Camis??o de Malha","type":"armor","defense":"medium","cost":"50 po","ac":"13 + mod Dex (+2 m??x)","strenght_min":"","stealth_disavantage":"","weight":"10 kg","favorite":false,"description":"Feito de an??is de metal intercalados, um camis??o de cota de malha ?? usado entre as camadas de roupa. Essa armadura oferece prote????o modesta para a parte superior do corpo de quem a usa e permite que o som dos an??is de metal, friccionados uns contra os outros, sejam amortecidos pelas camadas exteriores."},{"name":"Brunea","type":"armor","defense":"medium","cost":"50 po","ac":"14 + mod Dex (+2 m??x)","strenght_min":"","stealth_disavantage":true,"weight":"22,5 kg","favorite":false,"description":" Essa armadura consiste em um casaco e cal??as (e talvez uma saia separada) de couro coberto com pe??as sobrepostas de metal, assim como as escamas de peixe. O conjunto inclui manoplas."},{"name":"Peitoral","type":"armor","defense":"medium","cost":"400 po","ac":"14 + mod Dex (+2 m??x)","strenght_min":"","stealth_disavantage":"","weight":"10 kg","favorite":false,"description":" A armadura peitoral ?? constitu??da por um peitoral de metal usado com couro flex??vel em seu interior. Embora ele deixe as pernas e bra??os do usu??rio relativamente desprotegidos, essa armadura fornece boa prote????o para seus ??rg??os vitais, deixando quem a usa relativamente sem restri????es."},{"name":"Meia-Armadura","type":"armor","defense":"medium","cost":"750 po","ac":"15 + mod Dex (+2 m??x)","strenght_min":"","stealth_disavantage":true,"weight":"20 kg","favorite":false,"description":"Essa armadura ?? composta de placas de metal moldadas que cobrem a maior parte do corpo. Ela n??o inclui prote????o para as pernas al??m de caneleiras fixadas com tiras de couro."},{"name":"Cota de an??is","type":"armor","defense":"heavy","cost":"30 po","ac":"14","strenght_min":"","stealth_disavantage":true,"weight":"20 kg","favorite":false,"description":"Esta armadura ?? feita de couro com pesados an??is presos a ela. Os an??is ajudam a refor??ar a armadura contra golpes de espadas e machados. A cota de an??is ?? inferior ?? cota de malha e geralmente ?? vestida apenas por aqueles que n??o podem pagar por uma armadura melhor."},{"name":"Cota de malha","type":"armor","defense":"heavy","cost":"75 po","ac":"16","strenght_min":"13","stealth_disavantage":true,"weight":"27,5 kg","favorite":false,"description":"Feita de an??is de metal entrela??ados, a cota de malha inclui uma camada de tecido acolchoado usada por baixo da malha de metal para evitar atrito e amortecer o impacto dos golpes. O conjunto inclui manoplas."},{"name":"Cota de talas","type":"armor","defense":"heavy","cost":"200 po","ac":"17","strenght_min":"15","stealth_disavantage":true,"weight":"30 kg","favorite":false,"description":" Essa armadura ?? feita de tiras verticais de metal, rebitadas a um suporte de couro, usadas sobre um preenchimento de pano. Cotas de malha flex??veis protegem as articula????es."},{"name":"Armadura de placas","type":"armor","defense":"heavy","cost":"1.500 po","ac":"18","strenght_min":"15","stealth_disavantage":true,"weight":"32,5 kg","favorite":false,"description":"A armadura de placas consiste em placas de metal moldadas para cobrir todo o corpo. Inclui luvas, botas de couro pesadas, um capacete com viseira e espessas camadas de enchimento por baixo da armadura. Fivelas e tiras de couro distribuem o peso ao longo do corpo."},{"name":"Broquel","type":"shield","defense":"light","cost":"1 po","ac":"1","strenght_min":"","stealth_disavantage":"","weight":"3 kg","favorite":false,"description":"Pequeno escudo redondo, geralmente de madeira com guarni????o de ferro, podendo ser tamb??m todo de ferro ou a??o, que dispunha de uma broca central."},{"name":"Escudo de madeira","type":"shield","defense":"medium","cost":"12 po","ac":"2","strenght_min":"","stealth_disavantage":"","weight":"3 kg","favorite":false,"description":"Um escudo redondo de tamanho m??dio, geralmente de madeira com guarni????o de ferro ou a??o, que cobre apenas uma parte do corpo do usu??rio"},{"name":"Escudo de metal","type":"shield","defense":"heavy","cost":"20 po","ac":"3","strenght_min":"12","stealth_disavantage":true,"weight":"18 kg","favorite":false,"description":"Um grande escudo geralmente de metal ou a??o, que cobre a maior parte do corpo do usu??rio. O seu tamanho e peso prejudica a movimenta????o do usu??rio uma vez que suas propor????es podem ser quase iguais ?? do seu portador"},{"name":"Manto de batalha","type":"armor","defense":"light","cost":"100 gp","ac":"11 + mod Dex","strenght_min":"","stealth_disavantage":false,"weight":"10 kg","favorite":false,"description":"Um manto blindado de corpo inteiro, feito principalmente para mestres de artes arcanas envolvidos em combate. Eles geralmente s??o feitos para oficiais de alto escal??o ou conjuradores militares, e alguns podem ser t??o ornamentados quanto roupas finas. O manto de batalha ?? preenchido com placas de couro endurecido em locais estrat??gicos, de modo que eles n??o dificultam o movimento mais do que um manto comum faria. Como tal, qualquer um pode usar um manto de batalha sem penalidade, independentemente da profici??ncia."},{"name":"Colete de duelista","type":"armor","defense":"light","cost":"80 gp","ac":"11 + mod Dex","strenght_min":"","stealth_disavantage":false,"weight":"3,5 kg","favorite":false,"description":"Couro, escamas, correntes e chapas combinam-se para criar um conjunto de armaduras leves e flex??veis que foi desenvolvido para proteger o usu??rio durante um duelo. O colete ?? leve o suficiente para ser escondido sob a roupa. O usu??rio deste colete recebe -1 de dano perfurante de ataques n??o-m??gicos. Esse ajuste vem antes da resist??ncia a danos."},{"name":"Armadura leve ??lfica","type":"armor","defense":"light","cost":"400 gp","ac":"11 + mod Dex","strenght_min":"","stealth_disavantage":false,"weight":"2 kg","favorite":false,"description":"Esta armadura leve de corrente de cota de malha e couro ajuda a ca??adores elfos escondidos em terrenos arborizados. Voc?? tem vantagem em testes de Destreza (Furtividade) ao tentar se esconder em tal terreno, e pode se esconder em tal terreno mesmo se voc?? n??o tiver cobertura."},{"name":"Lamelar de couro","type":"armor","defense":"light","cost":"30 gp","ac":"12 + mod Dex","strenght_min":"","stealth_disavantage":true,"weight":"6 kg","favorite":false,"description":"Lamelar de couro consiste em pe??as grossas de couro cru la??adas e amarradas juntas para formar uma coura??a e uma saia. ?? mais resistente que a armadura de couro normal, mas menos furtiva."},{"name":"Placas de couro","type":"armor","defense":"light","cost":"500 gp","ac":"13 + mod Dex","strenght_min":"","stealth_disavantage":true,"weight":"9 kg","favorite":false,"description":"A armadura de placas de couro ?? planejada como um casamento do peso leve e da flexibilidade da armadura de couro e da for??a da placa. Armadura de placas de couro ?? uma base de armadura de couro cheio com comprimentos de cota de malha, segmentada em cima das juntas, e placas de a??o menores fixadas ao longo da armadura."},{"name":"Loriga segmentada","type":"armor","defense":"heavy","cost":"45 gp","ac":"15","strenght_min":"11","stealth_disavantage":true,"weight":"14 kg","favorite":false,"description":"Um precursor da verdadeira armadura de placas, a loriga segmentaaa ?? essencialmente uma armadura laminar (feita de tiras sobrepostas de metal) que cobre a parte superior do tronco, os ombros e a parte superior dos bra??os. A maior parte do traje consiste em aros de metal cortados e presos na frente e nas costas, que envolvem o corpo. Os ombros s??o protegidos por uma s??rie de arcos sobrepostos. As fixa????es s??o tipicamente de lat??o. Esta armadura pode ser dobrada em si mesma de forma telesc??pica, e assim pode ser armazenada e transportada de forma f??cil e discreta, como em uma mochila."},{"name":"Escudo de couro","type":"shield","defense":"light","cost":"5 gp","ac":"+1","strenght_min":"","stealth_disavantage":false,"weight":"1,5 kg","favorite":false,"description":"Um escudo de couro ?? um pequeno escudo de couro redondo com uma borda de metal e centro amarrado ao antebra??o, permitindo que a m??o segure um item. O escudo fornece ao usu??rio +1 AC. Se voc?? usar essa m??o como parte de uma a????o ou a????o de b??nus, voc?? perde o aumento para a Classe de Armadura at?? o in??cio do seu pr??ximo turno."},{"name":"Escudo de torre","type":"shield","defense":"heavy","cost":"30 gp","ac":"+2","strenght_min":"13","stealth_disavantage":true,"weight":"20 kg","favorite":false,"description":"Este escudo massivo ?? usado freq??entemente em ex??rcitos organizados por sua efic??cia em proteger soldados e auxiliar na forma????o de linhas. Enquanto voc?? est?? segurando um escudo de torre, voc?? tem uma desvantagem nas jogadas de ataque, tem metade da cobertura e voc?? pode gastar uma quantidade de movimento igual a metade da sua velocidade para ter uma cobertura de tr??s quartos at?? o in??cio do seu pr??ximo turno. Se voc?? faz isso, ent??o quando voc?? ?? um obst??culo para um alvo, o escudo concede cobertura de tr??s quartos em vez de meia cobertura"},{"name":"Escudo pesado","type":"shield","defense":"heavy","cost":"35 gp","ac":"+3","strenght_min":"15","stealth_disavantage":true,"weight":"15 kg","favorite":false,"description":"Este escudo maci??o se assemelha a uma parede port??til. Seu tamanho e peso tornam-no anormalmente dif??cil de usar. Para manejar um escudo pesado, voc?? deve ter profici??ncia tanto com escudos como com armaduras pesadas. Enquanto voc?? est?? empunhando um pesado escudo com o qual voc?? ?? proficiente, quando voc?? toma a a????o 'desviar' voc?? ganha metade da cobertura at?? o come??o do seu pr??ximo turno."}]

/***/ }),
/* 132 */
/***/ (function(module, exports) {

module.exports = [{"name":"Pacote de Artista","value":"40 po","description":"Inclui uma mochila, um saco de dormir, duas fantasias, 5 velas, 5 dias de ra????es, um cantil e um kit de disfarce."},{"name":"Pacote de Assaltante","value":"16 po","description":"Inclui uma mochila, um saco com 1.000 esferas de metal, 3 metros de linha, um sino, 5 velas, um p?? de cabra, um martelo, 10 p??tons, uma lanterna coberta, 2 frascos de ??leo, 5 dias de ra????es, uma caixa de fogo e um cantil. O kit tamb??m possui 15 metros de corda de c??nhamo amarrada ao lado dele."},{"name":"Pacote de Aventureiro","value":"12 po","description":"Inclui uma mochila, um p?? de cabra, um martelo, 10 p??tons, 10 tochas, uma caixa de fogo, 10 dias de ra????es e um cantil. O kit tamb??m tem 15 metros de corda de c??nhamo amarrada ao lado dele."},{"name":"Pacote de Diplomata","value":"39 po","description":"Inclui um ba??, 2 caixas para mapas ou pergaminhos, um conjunto de roupas finas, um vidro de tinta, uma caneta tinteiro, uma l??mpada, 2 frascos de ??leo, 5 folhas de papel, um vidro de perfume, parafina e sab??o."},{"name":"Pacote de Estudioso","value":"40 po","description":"Inclui uma mochila, um livro de estudo, um vidro de tinta, uma caneta tinteiro, 10 folhas de pergaminho, um saquinho de areia e uma pequena faca."},{"name":"Pacote de Explorador","value":"10 po","description":"Inclui uma mochila, um saco de dormir, um kit de refei????o, uma caixa de fogo, 10 tochas, 10 dias de ra????es e um cantil. O kit tamb??m tem 15 metros de corda de c??nhamo amarrada ao lado dele."},{"name":"Pacote de Sacerdote","value":"19 po","description":"Inclui uma mochila, um cobertor, 10 velas, uma caixa de fogo, uma caixa de esmolas, 2 blocos de incenso, um incens??rio, vestes, 2 dias de ra????es e um cantil."}]

/***/ })
],[26]);
//# sourceMappingURL=app.cc1bf427eb5198ccffc7.js.map