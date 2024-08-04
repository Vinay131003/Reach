from flask_wtf import FlaskForm
from wtforms import StringField, BooleanField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import Meeting


def password_matches(form, field):
    print("Checking if password matches")
    password = field.data
    email = form.data['email']
    user = User.query.filter(User.email == email).first()
    if not user:
        raise ValidationError("No such user exists.")
    if not user.check_password(password):
        raise ValidationError("Password was incorrect.")


class UpdateForm(FlaskForm):
    name = StringField('name', validators=[DataRequired()])
    companyName = StringField('companyName', validators=[DataRequired()])
    isVendor = BooleanField('isVendor')
    summary = StringField('summary', validators=[DataRequired()])
    emailAddress = StringField('emailAddress', validators=[DataRequired()])
    password = StringField('password', validators=[DataRequired()])
