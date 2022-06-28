import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import "../lib/collection.js";


import './main.html';
import './AddTask.html';
Template.nav.events({
    'click UncompleteTask'(){
        $("#UncompleteTask").UncompleteTask("errorBox");
        listdb.insert({
            "UncompleteTask":UncompleteTask


        });
    }
});
Template.main.events({});