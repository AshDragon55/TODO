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
        TODO.insert({
            "UncompleteTask":UncompleteTask



        });
    },
    'click .js-add'() {
        $("#addModal").modal("show");

      },
      'click .js-savetask'() {
       
        // grad data from fields
        let Task = $("#AddT").val();
        let DueDate = $("#DueDate").val();
        // let lname = $("#lastN").val();
        // let sex = $("#male").prop("checked") ? "male" : "female";
    
        if (validateAddForm(Task, DueDate)) {
          TODO.insert({
            "Task": Task,
            "DueDate": DueDate,
            "createdOn": new Date().getTime()
          });
          $("#addModal").modal("hide");
        }
      },
});

let validateAddForm = (Task, DueDate) => {
    let valid = true;
    $("#AddT").removeClass("errorBox");
    $("#DueDate").removeClass("errorBox");
  
    if (!Task) {
    
      $("#AddT").addClass("errorBox");
      valid = false;
    }
    // if (!ln) {
    //   $("#lastN").addClass("errorBox");
    //   valid = false;
    // }
    return valid;
  }
  
  Template.TaskProfile.helpers({
    ATask(){
        return TODO.find();
    }
  })
