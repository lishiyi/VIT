from app import db, app
from flask.ext.sqlalchemy import SQLAlchemy
from datetime import datetime
#import bleach
#from markdown import markdown
import flask.ext.whooshalchemy as whooshalchemy

db = SQLAlchemy()
#from hashlib import md5
#import hashlib

class User(db.Model):
	
	__tablename__ = 'user'
	user_id = db.Column(db.Integer, primary_key = True)
	email = db.Column(db.String(255), unique = True)
	gender = db.Column(db.String(255))
	act = db.Column(db.String(255))
	weight = db.Column(db.Float)
	height = db.Column(db.Integer)
	goal = db.Column(db.String(255))
	age = db.Column(db.Integer)
	timestamp = db.Column(db.DateTime, index = True, default = datetime.now)
	json = db.Column(db.String(255))

	calories = db.Column(db.Float)
	protein = db.Column(db.Float)
	fat = db.Column(db.Float)
	carbs = db.Column(db.Float)
	###
	def __init__(self, email, gender, act, weight, height, goal, age, calories, protein, fat, carbs, json):
		self.email = email
		self.gender = gender
		self.act = act
		self.weight = weight
		self.height = height
		self.goal = goal
		self.age = age
		self.calories = calories
		self.protein = protein
		self.fat = fat
		self.carbs = carbs
		self.json = json