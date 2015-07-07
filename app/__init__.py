from flask import Flask
from flask.ext.sqlalchemy import SQLAlchemy

import os
from flask.ext.login import LoginManager

from flask.ext.moment import Moment
####
from flask.ext.bootstrap import Bootstrap
###

app = Flask(__name__)
app.config.from_object('config')
moment = Moment(app)
db = SQLAlchemy(app)
###################### http://code.tutsplus.com/tutorials/intro-to-flask-signing-in-and-out--net-29982
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://devuser:devpwd@localhost/vit'
 
from models import db
db.init_app(app)
#######################


lm = LoginManager()
lm.init_app(app)
lm.login_view = 'login'

###
bootstrap = Bootstrap(app)
###

from app import views, models

