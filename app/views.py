import os
import math
from flask import render_template, flash, redirect, session, url_for, request, g, send_from_directory, make_response
from flask.ext.login import login_user, logout_user, current_user, login_required, current_app
from app import app, db, lm
from forms import UserForm
from models import User
######ADDED########################################
from flaskext.mysql import MySQL
import requests
from flask.ext.sqlalchemy import get_debug_queries
######ADDED########################################
#MySQL configuration.
mysql = MySQL()
app.config['MYSQL_DATABASE_USER'] = 'devuser'
app.config['MYSQL_DATABASE_PASSWORD'] = 'devpwd'
app.config['MYSQL_DATABASE_DB'] = 'vit'
app.config['MYSQL_DATABASE_HOST'] = 'localhost'
mysql.init_app(app)

#Test the connection of MySQL
@app.route('/testdb')
def testdb():
  if db.session.query("1").from_statement("SELECT 1").all():
    return 'It works.'
  else:
    return 'Something is broken.'

@app.errorhandler(404)
def internal_error(error):
    return render_template('404.html'), 404

@app.errorhandler(500)
def internal_error(error):
    db.session.rollback()
    return render_template('500.html'), 500

############################################################################		
@app.route('/', methods=['GET', 'POST'])
@app.route('/index', methods=['GET', 'POST'])
#@login_required
def index():
	return render_template('index.html')

@app.route('/user', methods=['GET', 'POST'])
def user():
	form = UserForm()
	if request.method == 'POST':

		A = form.weight.data / 2.2 * 9.99
		B = float(form.height.data) * 6.25
		C = form.age.data * 4.92
		if form.gender.data == "Male":
			D = 5
		else:
			D = -161
		BMR = math.floor(A + B - C + D)
		if form.act.data == '1':
			F = 1.2
		elif form.act.data == '2':
			F = 1.4
		elif form.act.data == '3':
			F = 1.6
		else:
			F = 1.8
		if form.goal.data == "Gain":
			G = 1.2
		elif form.goal.data == "Maintain":
			G = 1.0
		else:
			G = 0.8
		TDEE = G * F * BMR #Calorie Target
		protein = form.weight.data  * 0.88
		fat = TDEE * 0.25 / 9
		carbs = (TDEE - protein * 4 - fat * 9) / 4

		session['calories'] = TDEE
		session['protein'] = protein
		session['fat'] = fat
		session['carbs'] = carbs

		newUser = User(email = form.email.data, 
					   gender = form.gender.data, 
					   act = form.act.data, 
					   weight = form.weight.data,
			           height = form.height.data, 
			           goal = form.goal.data, 
			           age = form.age.data,
			           calories = TDEE,
			           protein = protein,
			           fat = fat,
			           carbs = carbs)
		db.session.add(newUser)
		db.session.commit()
		#return render_template('index.html', form=form, A = A, B = B, C = C, D = D, 
		#	   BMR = BMR, TDEE = TDEE,  protein = protein, fat = fat, carbs = carbs)
		#return redirect(url_for('user'))
		return render_template('index.html', calories = TDEE,  protein = protein, 
			fat = fat, carbs = carbs, gender = form.gender.data, age = form.age.data,
			email = form.email.data)

	elif request.method == 'GET':
		return render_template('user.html', form=form)