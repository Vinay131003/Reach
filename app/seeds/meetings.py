from app.models import db, Meeting


def seed_meetings():

    demoMeet1 = Meeting(
                sendUserId=1,
                recUserId=6,
                message='I would love to meet with you about a potential partnership',
                accepted=True
    )

    demoMeet2 = Meeting(
                sendUserId=2,
                recUserId=7,
                message='This looks so cool, I want to see a demo for our retail side!',
                accepted=None
    )

    demoMeet3 = Meeting(
                sendUserId=3,
                recUserId=8,
                message='I am interested in discussing a partnership',
                accepted=False
    )

    demoMeet4 = Meeting(
                sendUserId=4,
                recUserId=9,
                message='Could we meet with you and see this live?',
                accepted=None
    )

    demoMeet5 = Meeting(
                sendUserId=1,
                recUserId=7,
                message='This could be a good fit for us, how much do you charge?',
                accepted=False
    )

    demoMeet6 = Meeting(
                sendUserId=2,
                recUserId=6,
                message='Would be great to meet at your earliest convenience.',
                accepted=True
    )

    userSeedList = [demoMeet1, demoMeet2, demoMeet3, demoMeet4, demoMeet5, demoMeet6]

    db.session.add_all(userSeedList)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the meetings table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_meetings():
    db.session.execute('TRUNCATE meetings RESTART IDENTITY CASCADE;')
    db.session.commit()
