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
	email = db.Column(db.String(45), unique=True)
	gender = db.Column(db.String(45))
	act = db.Column(db.String(45))
	weight = db.Column(db.Integer)
	height = db.Column(db.Integer)
	goal = db.Column(db.String(45))
	age = db.Column(db.Integer)
	###
	def __init__(self, email, gender, act, weight, height, goal, age):
		
		self.email = email.title()
		self.gender = gender.title()
		if act:
			self.act = act.title()
		if weight:
			self.weight = weight.title()
		if height:
			self.height = height.title()
		if goal:
			self.goal = goal.title()
		if age:
			self.age = age.title()
