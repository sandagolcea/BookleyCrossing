Meteor.publish('books', function() {
	return Books.find();
});

Meteor.publish('requests', function() {
	return Requests.find();
});

Meteor.publish('roles', function (){
    return Meteor.roles.find({});
});

Meteor.publish('history', function() {
	return History.find();
});

Meteor.publish('comments', function() {
	return Comments.find();
});
