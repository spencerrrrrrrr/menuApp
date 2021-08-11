const menu = {
    _courses: {
      _appetizers: [],
      _mains: [],
      _desserts: [] 
    },
    get appetizers(){
      return this._courses._appetizers; 
    },
    set appetizers(dish){
        this._courses._appetizers.push(dish)
    },
    get mains(){
      return this._courses._mains;
    },
    set mains(dish){
        this._courses._mains.push(dish)
    },
    get desserts(){
      return this._courses._desserts;
    },
    set desserts(dish){
        this._courses._desserts.push(dish)
    },
    get courses(){
      return Object.entries(menu._courses);
    },
    addDishToCourse(courseName, dishName, dishPrice){
      const dish = {
        name: dishName,
        price: dishPrice
      }
      switch (courseName){
        case 'main':
          this.mains = dish
          break;
        case 'appetizer':
          this.appetizers = dish
          break;
        case 'dessert':
          this.desserts = dish
          break;
      }
    },
    getRandomDishFromCourse(courseName){
      const dishes = Object.entries(this._courses)
      return dishes[Math.floor(Math.random() * dishes.length)]
    },
    generateRandomMeal(){
      const appetizer = this.getRandomDishFromCourse('appetizers')
      const main = this.getRandomDishFromCourse('mains')
      const dessert = this.getRandomDishFromCourse('desserts')
      const price = appetizer + main + dessert
      return `Your appetizer is ${appetizer}, the main dish is ${main}, and for dessert we're serving ${dessert}. The total comes to \$${price}. Enjoy!`
    },
  }
  
  menu.addDishToCourse('appetizer','mozzarella sticks', 4.29)
  menu.addDishToCourse('appetizer','jalepeno poppers', 3.50)
  menu.addDishToCourse('appetizer','chicken fingers', 5.25)
  menu.addDishToCourse('main','chicken alfredo', 11.99)
  menu.addDishToCourse('main','buffalo chicken salad', 10.99)
  menu.addDishToCourse('main','Pittsburger with steak fries', 11.49)
  menu.addDishToCourse('dessert','ice cream', 3.59)
  menu.addDishToCourse('dessert','chocolate lava cake', 4.59)
  menu.addDishToCourse('dessert','root beer float', 3.99)
  
  console.log(menu._courses) //Shows that add dish to course isn't working
  
  const meal = menu.generateRandomMeal()
  console.log(meal)
  