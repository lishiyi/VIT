import os
from flask.ext.login import LoginManager

lm = LoginManager()
lm.init_app(app)