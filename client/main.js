import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import "../lib/collection.js";
import bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './main.html';
import './AddTask/AddTask.html';

Template.addtask.events({
    'click UncompleteTask'(){
        $("#UncompleteTask").UncompleteTask("errorBox");
        listdb.insert({
            "UncompleteTask":UncompleteTask


        });
    },
    'click .js-add'() {
        $("#addModal").modal("show");
      }
});


