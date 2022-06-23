import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import "../lib/collection.js";


import './main.html';

Template.nav.events({
    'click UncompleteTask'(){
        $("#UncompleteTask").removeClass("errorBox");
    }
});
Template.main.events({});