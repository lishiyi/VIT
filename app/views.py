#import os
import math
from flask import render_template, flash, redirect, session, url_for, request, g, send_from_directory, make_response, jsonify
#from flask.ext.login import login_user, logout_user, current_user, login_required, current_app
from app import app, db#, lm
from forms import UserForm, IngredientsForm
from models import User
import json
######ADDED########################################
#from flaskext.mysql import MySQL
import requests
from flask.ext.sqlalchemy import get_debug_queries
######ADDED########################################
#MySQL configuration.
#mysql = MySQL()
#app.config['MYSQL_DATABASE_USER'] = 'devuser'
#app.config['MYSQL_DATABASE_PASSWORD'] = 'devpwd'
#app.config['MYSQL_DATABASE_DB'] = 'vit'
#app.config['MYSQL_DATABASE_HOST'] = 'localhost'
#mysql.init_app(app)

############################################################################		
@app.route('/index', methods=['GET', 'POST'])
#@login_required
def index():

	ingredientform = IngredientsForm()
	#age = request.args.get('age', 0, type = int)
	#if email:
	#	sb = 1
	#else:
	#sb = age
	if request.method == 'POST':
		
		return render_template('index.html', ingredientform = ingredientform)

	elif request.method == 'GET':
		return render_template('index.html', ingredientform = ingredientform)
	
@app.route('/', methods=['GET', 'POST'])
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

		#Calorie Target
		TDEE = G * F * BMR
		if TDEE < 1758:
			TDEE = 1758
			 
		protein = form.weight.data  * 0.88
		# Calculate the fat
		fat = TDEE * 0.25 / 9
		if fat < 60.07:
			fat = 60.07
		# Calculate the carbs
		carbs = (TDEE - protein * 4 - fat * 9) / 4
		if carbs < 225.9:
			carbs = 225.9
		# Recalculate the protein
		protein = (TDEE - carbs * 4 - fat * 9 ) / 4
		#session['calories'] = TDEE
		#session['protein'] = protein
		#session['fat'] = fat
		#session['carbs'] = carbs
		if form.email.data:
			email = form.email.data
			session['gender'] = form.gender.data
			session['act'] = form.act.data
			session['weight'] = form.weight.data
			session['height'] = form.height.data
			session['goal'] = form.goal.data
			session['age'] = form.age.data

			session['calories'] = TDEE
			session['protein'] = protein
			session['fat'] = fat
			session['carbs'] = carbs
		elif session['email']:
			email = session['email']
			
		session['email'] = email
		

		ingredientform = IngredientsForm()
		#ingredientJson = json.loads(ingredientform.ingredientJson.data)
		#hiddenform = ingredientform.hidden.data
		ingredientJson = ingredientform.ingredientJson.data

		ingredientJsonLoads = None
		nutrientMerge = None
		ratio = None

		if ingredientJson:

			ingredientJsonDeleteComma = ingredientJson[0:-2] + '}'
			ingredientJsonLoads = json.loads(ingredientJsonDeleteComma)
			brown = int(ingredientJsonLoads['Brown Rice Flour Brown'])
			protein_blend = int(ingredientJsonLoads['Protein Blend 2:1'])
			carb_blend = int(ingredientJsonLoads['Carb Blend 1:1'])
			fat_blend = int(ingredientJsonLoads['Fat Blend 1:2:1'])

			nutrientDeleteComma = ingredientform.nutrient.data[0:-2] + '}'
			nutrient2DeleteComma = ingredientform.nutrient2.data[0:-2] + '}'
			#nutrientMerge = json.loads(nutrientDeleteComma) + json.loads(nutrient2DeleteComma)

			nutrientMerge = json.loads(nutrientDeleteComma).copy()
			nutrientMerge.update(json.loads(nutrientDeleteComma))

			#ratio = {"calories": nutrientMerge.calories / session['calories'],
			#		 "carbs":nutrientMerge.carbs / session['carbs'],
			#		 "protein":nutrientMerge.carbs / session['protein'],
			#		 "fat": nutrientMerge.carbs / session['fat']}

			newUser = User(email = session['email'], 
			gender = session['gender'], 
			act = session['act'], 
			weight = session['weight'],
			height = session['height'], 
			goal = session['goal'], 
			age = session['age'],
			calories = session['calories'],
			protein = session['protein'],
			fat = session['fat'],
			carbs = session['carbs'],
			ingredientJson = ingredientJsonDeleteComma,
			brown = brown,
			protein_blend = protein_blend,
			carb_blend = carb_blend,
			fat_blend = fat_blend,
			deviation = ingredientform.deviation.data,
			nutrient = nutrientDeleteComma,
			nutrient2 = nutrient2DeleteComma
			)

			#session.pop('email', None)
			#session.pop('gender', None)
			#session.pop('act', None)
			#session.pop('weight', None)
			#session.pop('height', None)
			#session.pop('goal', None)
			#session.pop('age', None)
			#session.pop('calories', None)
			#session.pop('protein', None)
			#session.pop('fat', None)
			#session.pop('carb', None)

			db.session.add(newUser)
			db.session.commit()
			#session.pop('email', None)

		#json = ingredientform.json.data

		#if ingredientform.validate_on_submit():
		#g.user.json = form.json.data
		#db.session.add(g.user)
		#db.session.commit()

		#return render_template('index.html', form=form, A = A, B = B, C = C, D = D, 
		#	   BMR = BMR, TDEE = TDEE,  protein = protein, fat = fat, carbs = carbs)
		#return redirect(url_for('user'))
		return render_template('index.html', calories = TDEE,  protein = protein, 
			fat = fat, carbs = carbs, gender = form.gender.data, age = form.age.data,
			email = email, ingredientform = ingredientform, 
			ingredientJsonLoads = ingredientJsonLoads, nutrientMerge = nutrientMerge,
			ratio = ratio)

	elif request.method == 'GET':
		return render_template('user.html', form=form)



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

#@app.route('/_add_numbers')
#def add_numbers():
#    a = request.args.get('a', 0, type = int)
#    b = request.args.get('b', 0, type = int)
#    return jsonify(result = a + b)

#@app.route('/_json')
#def _json():
#    ingredients = request.args.get('ingredients', 0, type = int)
#    return jsonify(ingredients)