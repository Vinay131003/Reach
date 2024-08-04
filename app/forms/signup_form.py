from flask_wtf import FlaskForm
from wtforms import StringField, BooleanField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import User


def user_exists(form, field):
    print("Checking if user exits", field.data)
    emailAddress = field.data
    user = User.query.filter(User.emailAddress == emailAddress).first()
    if user:
        raise ValidationError("User is already registered.")


class SignUpForm(FlaskForm):
    name = StringField('name', validators=[DataRequired()])
    companyName = StringField('companyName', validators=[DataRequired()])
    isVendor = BooleanField('isVendor')
    summary = StringField('summary', validators=[DataRequired()])
    emailAddress = StringField('emailAddress', validators=[DataRequired()])
    password = StringField('password', validators=[DataRequired()])
