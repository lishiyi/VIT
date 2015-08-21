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

		if form.weightUnit.data == "lb":
			weight = form.weight.data
		else:
			weight = form.weight.data * 2.20462262

		A = weight / 2.2 * 9.99
		B = float(form.height.data) * 6.25
		C = form.age.data * 4.92
		if form.gender.data == "Male":
			D = 5
		else:
			D = -161
		BMR = math.floor(A + B - C + D)
		if form.act.data == "Sedentary":
			F = 1.2
		elif form.act.data == "Low":
			F = 1.4
		elif form.act.data == "Active":
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
			 
		protein = weight  * 0.88
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
			session['name'] = form.name.data
			session['gender'] = form.gender.data
			session['act'] = form.act.data
			session['weight'] = weight
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
		ratio = {}
		ratio2 = {}
		
		if ingredientJson:

			ingredientJsonDeleteComma = ingredientJson[0:-2] + '}'
			ingredientJsonLoads = json.loads(ingredientJsonDeleteComma)
			brown = int(ingredientJsonLoads['Brown Rice Flour Brown'])
			protein_blend = int(ingredientJsonLoads['Protein Blend'])
			carb_blend = int(ingredientJsonLoads['Carb Blend'])
			fat_blend = int(ingredientJsonLoads['Fat Blend'])

			nutrientDeleteComma = ingredientform.nutrient.data[0:-2] + '}'
			nutrient2DeleteComma = ingredientform.nutrient2.data[0:-2] + '}'
			#nutrientMerge = json.loads(nutrientDeleteComma) + json.loads(nutrient2DeleteComma)

			nutrientMerge = json.loads(nutrientDeleteComma).copy()
			nutrientMerge.update(json.loads(nutrient2DeleteComma))

			#ratio = {
			#		 'carbs':nutrientMerge['carb']/nutrientMerge['calories'],
			#		 'protein':nutrientMerge['protein']/nutrientMerge['calories'],
			#		 'fat': nutrientMerge['protein']/nutrientMerge['calories']}
			ratio['calories-Amount'] = nutrientMerge['calories']
			ratio['carbs'] = int(nutrientMerge['carbs'] * 4 * 100 // nutrientMerge['calories'])
			ratio['protein'] = int(nutrientMerge['protein'] * 4 * 100 // nutrientMerge['calories'])
			ratio['fat'] = int(nutrientMerge['fat'] * 9 * 100 // nutrientMerge['calories'])
			ratio['carbs-Amount'] = nutrientMerge['carbs']
			ratio['protein-Amount'] = nutrientMerge['protein']
			ratio['fat-Amount'] = nutrientMerge['fat']
			ratio['fiber-Amount'] = nutrientMerge['fiber']
			ratio['saturated-fat-Amount'] = nutrientMerge['saturated-fat']

			#del
			#del nutrientMerge['Omega-6:Omega-3']

			tempNutrition = {
                        "soluble-fiber_max": 0,
                        "soluble-fiber": 0,
                        "saturated-fat_max": 999,
                        "saturated-fat": 20,
                        "polyunsaturated-fat_max": 999,
                        "polyunsaturated-fat": 1,
                        "monounsaturated-fat_max": 999,
                        "monounsaturated-fat": 1,
                        "insoluble-fiber_max": 0,
                        "insoluble-fiber": 0,
                        "name": "Sebastian",
                        "calories": 2833,
                        "calories_max": 0,
                        "carbs": 404,
                        "carbs_max": 0,
                        "protein": 142,
                        "protein_max": 0,
                        "fat": 63,
                        "fat_max": 0,
                        "omega_3": 1.6,
                        "omega_3_max": 0,
                        "omega_6": 17,
                        "omega_6_max": 0,
                        "fiber": 28,
                        "fiber_max": 0,
                        "cholesterol": 0,
                        "cholesterol_max": 0,
                        "calcium": 1,
                        "calcium_max": 2.5,
                        "chloride": 2.3,
                        "chloride_max": 3.6,
                        "chromium": 35,
                        "chromium_max": 0,
                        "copper": 0.9,
                        "copper_max": 10,
                        "iodine": 150,
                        "iodine_max": 1100,
                        "iron": 8,
                        "iron_max": 45,
                        "magnesium": 420,
                        "magnesium_max": 770,
                        "maganese": 2.3,
                        "maganese_max": 11,
                        "molybdenum": 45,
                        "molybdenum_max": 2000,
                        "phosphorus": 0.7,
                        "phosphorus_max": 4,
                        "potassium": 3.5,
                        "potassium_max": 0,
                        "selinium": 55,
                        "selinium_max": 400,
                        "sodium": 1.5,
                        "sodium_max": 2.3,
                        "sulfur": 2,
                        "sulfur_max": 0,
                        "zinc": 11,
                        "zinc_max": 40,
                        "vitamin_a": 3000,
                        "vitamin_a_max": 10000,
                        "vitamin_b6": 1.3,
                        "vitamin_b6_max": 100,
                        "vitamin_b12": 2.4,
                        "vitamin_b12_max": 0,
                        "vitamin_c": 90,
                        "vitamin_c_max": 2000,
                        "vitamin_d": 200,
                        "vitamin_d_max": 4000,
                        "vitamin_e": 15,
                        "vitamin_e_max": 1000,
                        "vitamin_k": 120,
                        "vitamin_k_max": 0,
                        "thiamin": 1.2,
                        "thiamin_max": 0,
                        "riboflavin": 1.3,
                        "riboflavin_max": 0,
                        "niacin": 16,
                        "niacin_max": 35,
                        "folate": 400,
                        "folate_max": 1000,
                        "panthothenic": 5,
                        "panthothenic_max": 0,
                        "biotin": 30,
                        "biotin_max": 0,
                        "choline": 550,
                        "choline_max": 3500
                      }

			if session['gender'] == "Male" and session['age'] > 50:
				tempNutrition["calcium"] = 1.2
				tempNutrition["chloride"] = 2.0
				tempNutrition["chromium"] = 30
				tempNutrition["sodium"] = 1.3
				tempNutrition["vitamin_b6"] = 1.7
				tempNutrition["vitamin_d"] = 400

			if session['gender'] == "Female" and session['age'] <= 50:
				tempNutrition = {
                        "soluble-fiber_max": 0,
                        "soluble-fiber": 0,
                        "saturated-fat_max": 999,
                        "saturated-fat": 20,
                        "polyunsaturated-fat_max": 999,
                        "polyunsaturated-fat": 1,
                        "monounsaturated-fat_max": 999,
                        "monounsaturated-fat": 1,
                        "insoluble-fiber_max": 0,
                        "insoluble-fiber": 0,
                        "name": "Sebastian",
                        "calories": 2833,
                        "calories_max": 0,
                        "carbs": 404,
                        "carbs_max": 0,
                        "protein": 142,
                        "protein_max": 0,
                        "fat": 63,
                        "fat_max": 0,
                        "omega_3": 1.6,
                        "omega_3_max": 0,
                        "omega_6": 17,
                        "omega_6_max": 0,
                        "fiber": 28,
                        "fiber_max": 0,
                        "cholesterol": 0,
                        "cholesterol_max": 0,
                        "calcium": 1,
                        "calcium_max": 2.5,
                        "chloride": 2.3,
                        "chloride_max": 3.6,
                        "chromium": 25,
                        "chromium_max": 0,
                        "copper": 0.9,
                        "copper_max": 10,
                        "iodine": 150,
                        "iodine_max": 1100,
                        "iron": 18,
                        "iron_max": 45,
                        "magnesium": 320,
                        "magnesium_max": 770,
                        "maganese": 1.8,
                        "maganese_max": 11,
                        "molybdenum": 45,
                        "molybdenum_max": 2000,
                        "phosphorus": 0.7,
                        "phosphorus_max": 4,
                        "potassium": 3.5,
                        "potassium_max": 0,
                        "selinium": 55,
                        "selinium_max": 400,
                        "sodium": 1.5,
                        "sodium_max": 2.3,
                        "sulfur": 2,
                        "sulfur_max": 0,
                        "zinc": 8,
                        "zinc_max": 40,
                        "vitamin_a": 2333,
                        "vitamin_a_max": 10000,
                        "vitamin_b6": 1.3,
                        "vitamin_b6_max": 100,
                        "vitamin_b12": 2.4,
                        "vitamin_b12_max": 0,
                        "vitamin_c": 75,
                        "vitamin_c_max": 2000,
                        "vitamin_d": 200,
                        "vitamin_d_max": 4000,
                        "vitamin_e": 15,
                        "vitamin_e_max": 1000,
                        "vitamin_k": 90,
                        "vitamin_k_max": 0,
                        "thiamin": 1.1,
                        "thiamin_max": 0,
                        "riboflavin": 1.1,
                        "riboflavin_max": 0,
                        "niacin": 14,
                        "niacin_max": 35,
                        "folate": 400,
                        "folate_max": 1000,
                        "panthothenic": 5,
                        "panthothenic_max": 0,
                        "biotin": 30,
                        "biotin_max": 0,
                        "choline": 425,
                        "choline_max": 3500
                      }

			if session['gender'] == "Female" and session['age'] > 50:
				tempNutrition = {
                        "soluble-fiber_max": 0,
                        "soluble-fiber": 0,
                        "saturated-fat_max": 999,
                        "saturated-fat": 20,
                        "polyunsaturated-fat_max": 999,
                        "polyunsaturated-fat": 1,
                        "monounsaturated-fat_max": 999,
                        "monounsaturated-fat": 1,
                        "insoluble-fiber_max": 0,
                        "insoluble-fiber": 0,
                        "name": "Sebastian",
                        "calories": 2833,
                        "calories_max": 0,
                        "carbs": 404,
                        "carbs_max": 0,
                        "protein": 142,
                        "protein_max": 0,
                        "fat": 63,
                        "fat_max": 0,
                        "omega_3": 1.6,
                        "omega_3_max": 0,
                        "omega_6": 17,
                        "omega_6_max": 0,
                        "fiber": 28,
                        "fiber_max": 0,
                        "cholesterol": 0,
                        "cholesterol_max": 0,
                        "calcium": 1,
                        "calcium_max": 2.5,
                        "chloride": 2.0,
                        "chloride_max": 3.6,
                        "chromium": 20,
                        "chromium_max": 0,
                        "copper": 0.9,
                        "copper_max": 10,
                        "iodine": 150,
                        "iodine_max": 1100,
                        "iron": 8,
                        "iron_max": 45,
                        "magnesium": 320,
                        "magnesium_max": 770,
                        "maganese": 1.8,
                        "maganese_max": 11,
                        "molybdenum": 45,
                        "molybdenum_max": 2000,
                        "phosphorus": 0.7,
                        "phosphorus_max": 3,
                        "potassium": 3.5,
                        "potassium_max": 0,
                        "selinium": 55,
                        "selinium_max": 400,
                        "sodium": 1.3,
                        "sodium_max": 2.3,
                        "sulfur": 2,
                        "sulfur_max": 0,
                        "zinc": 8,
                        "zinc_max": 40,
                        "vitamin_a": 2333,
                        "vitamin_a_max": 10000,
                        "vitamin_b6": 1.5,
                        "vitamin_b6_max": 100,
                        "vitamin_b12": 2.4,
                        "vitamin_b12_max": 0,
                        "vitamin_c": 75,
                        "vitamin_c_max": 2000,
                        "vitamin_d": 400,
                        "vitamin_d_max": 4000,
                        "vitamin_e": 15,
                        "vitamin_e_max": 1000,
                        "vitamin_k": 90,
                        "vitamin_k_max": 0,
                        "thiamin": 1.1,
                        "thiamin_max": 0,
                        "riboflavin": 1.1,
                        "riboflavin_max": 0,
                        "niacin": 14,
                        "niacin_max": 35,
                        "folate": 400,
                        "folate_max": 1000,
                        "panthothenic": 5,
                        "panthothenic_max": 0,
                        "biotin": 30,
                        "biotin_max": 0,
                        "choline": 425,
                        "choline_max": 3500
                      }

			for item in nutrientMerge:

				ratio2[item] = int(nutrientMerge[item] * 100 // tempNutrition[item])


			ratio['fiber'] = int(nutrientMerge['fiber'] * 100 // tempNutrition['fiber'])
			ratio['saturated-fat'] = ratio2['saturated-fat']
######################## First Json FIle ##################################
			ratioJson1 = ratio2.copy()
			ratioJson1.update(ratio)
			ratioJson1['sodium-Amount'] = nutrientMerge['sodium']
			ratioJson1['potassium-Amount'] = nutrientMerge['potassium']

			del ratioJson1['polyunsaturated-fat']
			del ratioJson1['monounsaturated-fat']
######################## Second Json File ############################
			ratioJson2 = nutrientMerge.copy()
			ratioJson2.update(ratio)   
######################## Database #####################################
			newUser = User(name = session['name'],
			email = session['email'], 
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
			nutrient2 = nutrient2DeleteComma,
			nutrientMerge = str(nutrientMerge),
			ratioJson1 = str(ratioJson1),
			ratioJson2 = str(ratioJson2)
			)


			db.session.add(newUser)
			db.session.commit()

		return render_template('index.html', calories = TDEE,  protein = protein, 
			fat = fat, carbs = carbs, gender = form.gender.data, age = form.age.data,
			email = email, ingredientform = ingredientform, 
			ingredientJsonLoads = ingredientJsonLoads, nutrientMerge = nutrientMerge,
			ratio = ratio, ratio2 = ratio2)

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