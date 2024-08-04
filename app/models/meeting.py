from .db import db

class Meeting(db.Model):
  __tablename__ = 'meetings'

  id = db.Column(db.Integer, primary_key = True)
  sendUserId = db.Column(db.Integer, db.ForeignKey('users.id'))
  recUserId = db.Column(db.Integer, db.ForeignKey('users.id'))
  message = db.Column(db.String(500), nullable = False)
  accepted = db.Column(db.Boolean, nullable = True)
  sendingUser = db.relationship("User", foreign_keys = [sendUserId], back_populates = "sentMeetings")
  receivingUser = db.relationship("User", foreign_keys = [recUserId], back_populates = "receivedMeetings")



  def to_dict(self):
    return {
      "id": self.id,
      "sendUserId": self.sendUserId,
      "recUserId": self.recUserId,
      "message": self.message,
      "accepted": self.accepted,
    }
