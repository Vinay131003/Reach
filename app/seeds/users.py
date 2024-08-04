# from werkzeug.security import generate_password_hash
from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():

    demo = User(name='Demo',
                companyName='appAcademy',
                isVendor=False,
                summary='Join the most respected code school. Learn in-demand skills and become a Software Engineer. Pay no tuition until you’re hired.',
                emailAddress='demo@aa.io',
                password='password')

    demo2 = User(name='Phil Knight',
                companyName='Nike',
                isVendor=False,
                summary='Nike, Inc. is an American multinational corporation that is engaged in the design, development, manufacturing, and worldwide marketing and sales of footwear, apparel, equipment, accessories, and services. The company is headquartered near Beaverton, Oregon, in the Portland metropolitan area.',
                emailAddress='phil@nike.io',
                password='password')

    demo3 = User(name='Elon Musk',
                companyName='Tesla',
                isVendor=False,
                summary='Looking for CRM & Accounting software. American electric vehicle and clean energy company based in Palo Alto, California. Teslas current products include electric cars, battery energy storage from home to grid-scale, solar panels and solar roof tiles, as well as other related products and services.',
                emailAddress='elon@tesla.io',
                password='password')

    demo4 = User(name='Adam Neuman',
                companyName='WeWork',
                isVendor=False,
                summary='Looking for recruiting and building maintenance software. WeWork is revolutionizing the way people and companies work. Get flexible workspaces, agile services, and leading technologies to move your business',
                emailAddress='adam@wework.io',
                password='password')

    demo5 = User(name='Brendan Eich',
                companyName='Brave Browser',
                isVendor=False,
                summary='Brave is a free and open-source web browser developed by Brave Software, Inc. based on the Chromium web browser.',
                emailAddress='brendan@brave.io',
                password='password')

    demo6 = User(name='Roger Rabbit',
                companyName='Pipedrive',
                isVendor=True,
                summary='The best CRM ever made, Pipedrive helps you sell 28% more. When you need to stay laser-focused on the right deals, Pipedrive is here to support you.',
                emailAddress='roger@pipedrive.io',
                password='password')

    demo7 = User(name='Robert Powers',
                companyName='OneStream Software',
                isVendor=True,
                summary='The Intelligent Finance Platform for the Modern Enterprise. Break away from the limitations of spreadsheets and legacy applications. Unify financial consolidation, reporting, planning and analytics through a single, extensible platform.',
                emailAddress='robert@onestream.io',
                password='password')

    demo8 = User(name='Chris Re',
                companyName='SambaNova Systems',
                isVendor=True,
                summary='Palo Alto-based SambaNova Systems builds AI hardware and integrated systems to run AI applications from the data center to the cloud. Founded by Christopher Re, Kunle Olukotun, and Rodrigo Liang in 2017, SambaNova Systems has now raised a total of $1.1B in total equity funding and is backed by investors that include BlackRock, SoftBank Vision Fund, Temasek Holdings, GIC, and GV.',
                emailAddress='chris@sambanova.io',
                password='password')

    demo9 = User(name='Will Hockey',
                companyName='Plaid',
                isVendor=True,
                summary='San Francisco-based Plaid provides companies with the tools and access needed for the development of a digitally-enabled financial system. Founded by William Hockey and Zachary Perret in 2013, Plaid has now raised a total of $734.3M in total equity funding and is backed by investors that include Goldman Sachs, Ribbit Capital, Index Ventures, Silver Lake, and Spark Capital.',
                emailAddress='will@plaid.io',
                password='password')

    demo10 = User(name='Pedro Franceschi',
                companyName='Brex',
                isVendor=True,
                summary='San Francisco-based Brex is all-in-one finance for growing businesses, helping companies spend, save, and earn smarter‚ and take every dollar further‚ y doing more than a bank, bookkeeping, or reward program could ever do alone. Founded by Henrique Dubugras and Pedro Franceschi in 2017, Brex has now raised a total of $857.1M in total equity funding and is backed by investors that include Ribbit Capital, DST Global, GIC, IVP, and SV Angel.',
                emailAddress='pedro@brex.io',
                password='password')

    demo11 = User(name='Howard Schultz',
                companyName='Starbucks',
                isVendor=False,
                summary='Starbucks Corporation is an American multinational chain of coffeehouses and roastery reserves headquartered in Seattle, Washington. As the worlds largest coffeehouse chain, Starbucks is seen to be the main representation of the United States third wave of coffee culture.',
                emailAddress='howard@starbucks.io',
                password='password')

    demo12 = User(name='Lucy guo',
                companyName='Scale AI',
                isVendor=True,
                summary='San Francisco-based Scale AI is the data platform for AI, providing high quality training data for leading machine learning teams. Founded by Alexandr Wang and Lucy Guo in 2016, Scale AI has now raised a total of $602.6M in total equity funding and is backed by investors that include Index Ventures, Founders Fund, Spark Capital, Tiger Global Management, and Wellington Management.',
                emailAddress='lucy@scaleai.io',
                password='password')

    demo13 = User(name='Rich Teo',
                companyName='Paxos',
                isVendor=True,
                summary='New York-based Paxos is a regulated financial institution building infrastructure to enable movement between physical and digital assets. Founded by Charles Cascarilla and Richmond Teo in 2012, Paxos has now raised a total of $535.3M in total equity funding and is backed by investors that include Canaan Partners, Blockchain Capital, Digital Currency Group, Oak HC/FT, and RRE Ventures.',
                emailAddress='rich@paxos.io',
                password='password')

    userSeedList = [demo, demo2, demo3, demo4, demo5, demo6, demo7, demo8, demo9, demo10, demo11, demo12, demo13]

    db.session.add_all(userSeedList)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
