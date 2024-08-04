from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from app.models import Meeting

class User(db.Model, UserMixin):
  __tablename__ = 'users'

  id = db.Column(db.Integer, primary_key = True)
  name = db.Column(db.String(60), nullable = False, unique = True)
  companyName = db.Column(db.String(60), nullable = False, unique = True)
  isVendor = db.Column(db.Boolean, nullable = False)
  summary = db.Column(db.String(500), nullable = False)
  emailAddress = db.Column(db.String(255), nullable = False, unique = True)
  hashed_password = db.Column(db.String(255), nullable = False)
  sentMeetings = db.relationship("Meeting", foreign_keys = [Meeting.sendUserId], back_populates = "sendingUser")
  receivedMeetings = db.relationship("Meeting", foreign_keys = [Meeting.recUserId], back_populates = "receivingUser")


  @property
  def password(self):
    return self.hashed_password


  @password.setter
  def password(self, password):
    self.hashed_password = generate_password_hash(password)


  def check_password(self, password):
    return check_password_hash(self.password, password)


  def to_dict(self):
    return {
      "id": self.id,
      "name": self.name,
      "companyName": self.companyName,
      "isVendor": self.isVendor,
      "summary": self.summary,
      "emailAddress": self.emailAddress,
      "sentMeetings": [meeting.to_dict() for meeting in self.sentMeetings],
      "receivedMeetings": [meeting.to_dict() for meeting in self.receivedMeetings]
    }
