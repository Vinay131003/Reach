from flask import Blueprint, jsonify, session, request
from flask_login import login_required, current_user
from app.models import db, User, Meeting
from app.forms import MeetingForm
from .auth_routes import validation_errors_to_error_messages
from sqlalchemy import and_

user_routes = Blueprint('users', __name__)


@user_routes.route('/')
@login_required
def users():
    users = User.query.filter(and_(User.id != current_user.id, User.isVendor != current_user.isVendor)).all()
    # print(users)
    return {"users": [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
@login_required
def user(id):
    user = User.query.get(id)
    return user.to_dict()


@user_routes.route('/sendMeetingReq', methods=['POST'])
@login_required
def send_meeting_req():
    """
    Creates a new meeting
    """
    form = MeetingForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    meeting = Meeting(
        sendUserId=form.data['sendUserId'],
        recUserId=form.data['recUserId'],
        message=form.data['message'],
        accepted=None
    )
    db.session.add(meeting)
    db.session.commit()
    user = User.query.get(current_user.id)
    return user.to_dict()
    # return {'errors': validation_errors_to_error_messages(form.errors)}, 401
