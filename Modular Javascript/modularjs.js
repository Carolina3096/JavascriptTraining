// // var people= [];
// // var template = $('#people-template').html();

// // $('#peopleModule').find('button').on('click', function(){

// //     people.push($('#peopleModule').find('input').val());
// //     $('#peopleModule').find('input').val('');

// //     var data={

// //         people:people,
// //     };
// //     $('#peopleModule').find('ul').html(Mustache.render(template, data));
// // })

// // var view = {
// //     title: "Joe",
// //     calc: function () {
// //       return 2 + 4;
// //     }
// //   };
  
// //   var output = Mustache.render("{{title}} spends {{calc}}", view);
// // (function(){
// // var myModule= {
// //     name: "Carolina",
// //     age: "24",
// //     sayName: function(){

// //         alert(this.name);
// //     },
// //     setName: function(newName){

// //         this.name=newName;
// //     }

// // };
// // myModule.sayName();

// //Modular Javascript #2 - Converting jQuery to an Object Literal Module
// //efficent DOM Usage
// // var people= {
// //     people: ['Will', 'Steve'],
// //     init: function() {
// //         this.cacheDom();
// //         this.bindEvents();
// //         this.render();
// //     },
// //     cacheDom: function() {
// //         this.$el=$('#peopleModule');
// //         this.$button=this.$el.find('button');
// //         this.$input=this.$el.find('input');
// //         this.$ul=this.$el.find('ul');
// //         this.template= this.$el.find('#people-template').html();
// //     },
// //     bindEvents: function ()
// //     {
// //         this.$button.on('click', this.addPerson.bind(this));
// //         this.$ul.delegate('i.del','click', this.deletePerson.bind(this));
// //     },
// //     render: function()
// //     {
// //         var data= { 
// //             people: this.people,
// //         };
// //         this.$ul.html(Mustache.render(this.template, data));
       
// //     },
// //     addPerson: function(){
// //         this.people.push(this.$input.val());
// //         this.render();
// //         this.$input.val('');
// //     },
// //     deletePerson: function(event)
// //     {
// //         var $remove= $(event.target).closest('li');
// //         var i = this.$ul.find('li').index($remove);
// //         this.people.splice(i,1);
// //         this.render();
// //     }
    
// //     };
// //     people.init();

// // })()


// // Modular Javascript #3 - Revealing Module Pattern Javascript Tutorial

// //instead to be an object :
// var people={
//     name: "Will",
//     sayName: function(){
//         alert('Will');
//     },
//     setName: function(newName){
//         this.name=newName
//     }
// }
// people.name="bob";

// //=> can be a self executing function

// // var people= (function(){
// // var name='Will';

// // function sayName(){

// //     alert(name);
// //     }   
// //     return {
// //         sayYourName: sayName
// //     }

// // })()

// var newpPeople= (function(){
//     var people = ['Will', 'Steve'];

//     //cache DOM
//     var $el = $('#peopleModule');
//     var $button = $el.find('button');
//     var $input = $el.find('input');
//     var $ul = $el.find('ul');
//     var template = $el.find('#people-template').html();

//     //bind events
//     $button.on('click', addPerson);
//     $ul.delegate('i.del', 'click', deletePerson);

//     _render();

//     function _render() {
//        $ul.html(Mustache.render(template, {people: people}));
//     }

//     function addPerson(value) {
//         var name = (typeof value === "string") ? value : $input.val();
//         people.push(name);
//         _render();
//         $input.val('');
//     }

//     function deletePerson(event) {
//         var i;
//         if (typeof event === "number") {
//             i = event;
//         } else {
//             var $remove = $(event.target).closest('li');
//             i = $ul.find('li').index($remove);
//         }
//         people.splice(i, 1);
//         _render();
//     }

//     return {
//         addPerson: addPerson,
//         deletePerson: deletePerson
//     };

// })();
class InputError extends Error {}

function promptDirection(question) {
    let result = promt(question);
    if (result.toLowerCase() == "left") return "L";
    if (result.toLowerCase() == "right") return "R";
    throw new InputError("Invalid direction: " + result);
  }

// for (;;) {
//     try {
//       let dir = promptDirection("Where?"); // ← typo!
//       console.log("You chose ", dir);
//       break;
//     } catch (e) {
//       console.log("Not a valid direction. Try again.");
//     }
//   }

  for (;;) {
    try {
      let dir = promptDirection("Where?");
      console.log("You chose ", dir);
      break;
    } catch (e) {
      if (e instanceof InputError) {
        console.log("Not a valid direction. Try again.");
      } else {
        console.log(e);
        throw e;
      }
    }
  }