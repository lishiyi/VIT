from app import db, app
from flask.ext.sqlalchemy import SQLAlchemy
from datetime import datetime
import bleach
from markdown import markdown
import flask.ext.whooshalchemy as whooshalchemy

db = SQLAlchemy()
#from hashlib import md5
#import hashlib

class User(db.Model):
	
	__tablename__ = 'user'
	user_id = db.Column(db.Integer, primary_key = True)
	email = db.Column(db.String(255), unique=True)
	gender = db.Column(db.String(255))
	act = db.Column(db.String(255))
	weight = db.Column(db.Float)
	height = db.Column(db.Integer)
	goal = db.Column(db.String(255))
	age = db.Column(db.Integer)

	calories = db.Column(db.Float)
	protein = db.Column(db.Float)
	fat = db.Column(db.Float)
	carbs = db.Column(db.Float)
	###
	def __init__(self, email, gender, act, weight, height, goal, age, calories, protein, fat, carbs):
		self.email = email.title()
		self.gender = gender.title()
		self.act = act.title()
		self.weight = weight.title()
		self.height = height.title()
		self.goal = goal.title()
		self.age = age.title()
		self.calories = calories
		self.protein = protein
		self.fat = fat
		self.carbs = carbs