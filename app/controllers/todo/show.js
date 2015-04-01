import Ember from 'ember';
import { computedAutosave } from 'ember-autosave';

export default Ember.Controller.extend({
  item: computedAutosave('model'),
  needs: ['application'],
  priorities: [
    {name: "Low", value: 5},
    {name: "Normal", value:3},
    {name: "High", value: 1}
  ],
  allItems: Ember.computed.alias('controllers.application.arrangedContent'),
  hasNext:function(){
    return this.get('controllers.application').hasNext(this.get('model'));
  }.property('content'),
  hasPrevious:function(){
    return this.get('controllers.application').hasPrev(this.get('model'));
  }.property('content'),
  actions:{
    next : function(){
      this.transitionToRoute('todo.show',this.get('controllers.application').findNext(this.get('model')));
    },
    toggleTodo: function(todo) {
      todo.set('completed', !todo.get('completed'));
      todo.set('scheduledForMeeting', false);
      //todo.save();
    },
    scheduleForMeeting: function(todo, v) {
      todo.set('scheduledForMeeting', v);
      //todo.save();
    },
    prev: function(){
      this.transitionToRoute('todo.show',this.get('controllers.application').findPrev(this.get('model')));
    },
    destroyTodo: function() {
      this.model.destroyRecord();
      this.transitionToRoute('index');
    },
    addNote: function(){
      var newNote = this.store.createRecord("note", {body: "new Note"});
      newNote.save();
      this.model.get("notes").pushObject(newNote);
      this.model.set('scheduledForMeeting', false);
      this.model.save();
    }
  }

});
