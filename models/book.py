from db import db

class BookModel(db.Model):
      __tablename__ = "books"

      id = db.Column(db.Integer, primary_key=True)
      title = db.Column(db.String(100), nullable=False)
      authors = db.Column(db.String(100), nullable=False)
      publication_date = db.Column(db.Date)
      isbn = db.Column(db.String(25))
      review = db.Column(db.String(100))
      image_url = db.Column(db.String(100))