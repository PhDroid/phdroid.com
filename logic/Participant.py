from google.appengine.ext import db

class Participant(db.Model):
	fullName = db.StringProperty(
		required=True
	)
	email = db.StringProperty(
		required=True
	)
	cell = db.StringProperty(
		required=True
	)
	technology = db.StringListProperty(
		required=True
	)
	experience = db.StringProperty()
	company = db.StringProperty()
