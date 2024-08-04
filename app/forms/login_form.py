from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import User


def user_exists(form, field):
    print("Checking if user exists", field.data)
    emailAddress = field.data
    user = User.query.filter(User.emailAddress == emailAddress).first()
    if not user:
        raise ValidationError("Email address provided not found.")


def password_matches(form, field):
    print("Checking if password matches")
    password = field.data
    emailAddress = form.data['emailAddress']
    user = User.query.filter(User.emailAddress == emailAddress).first()
    if not user:
        raise ValidationError("No such user exists.")
    if not user.check_password(password):
        raise ValidationError("Password was incorrect.")


class LoginForm(FlaskForm):
    emailAddress = StringField('emailAddress', validators=[DataRequired(), user_exists])
    password = StringField('password', validators=[
                           DataRequired(), password_matches])
