from flask.ext.wtf import Form
from wtforms import TextField, StringField, PasswordField, BooleanField, SubmitField, validators, TextAreaField, RadioField
from wtforms.validators import Required, Email

from models import db, User

class UserForm(Form):
	email = StringField("Email",  [validators.Required("Please enter your email.")])
	gender = RadioField("Gender", choices=[(1,"Male"),(2,"Female")])
	act = RadioField("Which of these describes your daily activity?", \
		     choices=[(1,"Desk Job All Day"),(2,"Workout Occasionally"),\
		     (3,"Gym 3-5 x per week"),(4,"Very Active"), \
		     (5,"Manual Labory")])
	weight = StringField("Weight",  [validators.Required("Please enter your weight(kg).")])
	height = StringField("Height",  [validators.Required("Please enter your height(cm).")])

	goal = RadioField("What are your weight goals?", \
		     choices=[(1,"Gain Weight"),(2,"Maintain Weight"),\
		     (3,"Lose Weight")], default=2)

	age = StringField("Age",  [validators.Required("Please enter your age.")])

	submit = SubmitField('Submit')