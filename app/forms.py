from flask.ext.wtf import Form
from wtforms import TextField, StringField, PasswordField, BooleanField, SubmitField, validators, TextAreaField, RadioField
from wtforms.validators import Required, Email

from models import db, User

class UserForm(Form):
	email = StringField("Email",  [validators.Required("Please enter your email.")])
	gender = RadioField("Gender", choices=[(1,"Male"),(2,"Female")])
	act = RadioField("Which of these describes your daily activity?", \
		     choices=[(1,"Sedentary"),(2,"Low"),\
		     (3,"Active"),(4,"Very Active")])
	weight = StringField("Weight(lb)",  [validators.Required("Please enter your weight(lb).")])
	height = StringField("Height(cm)",  [validators.Required("Please enter your height(cm).")])

	goal = RadioField("What are your weight goals?", \
		     choices=[(1,"Gain Weight"),(2,"Maintain Weight"),\
		     (3,"Lose Weight")], default=2)

	age = StringField("Age",  [validators.Required("Please enter your age.")])

	submit = SubmitField('Submit')