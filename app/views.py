import os
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
		newUser = User(email = form.email.data, 
					   gender = form.gender.data, 
					   act = form.act.data, 
					   weight = form.weight.data,
			           height = form.height.data, 
			           goal = form.goal.data, 
			           age = form.age.data)
		db.session.add(newUser)
		db.session.commit()
		return redirect(url_for('user'))

	elif request.method == 'GET':
		return render_template('user.html', form=form)