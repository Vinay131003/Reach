from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, BooleanField
from wtforms.validators import DataRequired
# from app.models import Meeting


# def user_exists(form, field):
#     print("Checking if user exists", field.data)
#     emailAddress = field.data
#     user = User.query.filter(User.emailAddress == emailAddress).first()
#     if not user:
#         raise ValidationError("Email address provided not found.")


# def password_matches(form, field):
#     print("Checking if password matches")
#     password = field.data
#     emailAddress = form.data['emailAddress']
#     user = User.query.filter(User.emailAddress == emailAddress).first()
#     if not user:
#         raise ValidationError("No such user exists.")
#     if not user.check_password(password):
#         raise ValidationError("Password was incorrect.")


class MeetingForm(FlaskForm):
    message = StringField('message', validators=[DataRequired()])
    sendUserId = IntegerField('sendUserId', validators=[DataRequired()])
    recUserId = IntegerField('sendUserId', validators=[DataRequired()])
    accepted = BooleanField('accepted')
