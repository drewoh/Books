from flask.views import MethodView
from flask_smorest import Blueprint, abort
from sqlalchemy.exc import SQLAlchemyError

from db import db
from models import BookModel
from schemas import BookSchema

blp = Blueprint("books", __name__, description="Operations on books")

@blp.route("/books/<string:book_id>")
class Book(MethodView):
    @blp.response(200, BookSchema)
    def get(self, book_id):
        book = BookModel.query.get_or_404(book_id)
        return book

    def delete(self, book_id):
        book = BookModel.query.get_or_404(book_id)
        db.session.delete(book)
        db.session.commit()
        return {"message": "Book deleted"}, 200

@blp.route("/books")
class BookList(MethodView):
    @blp.response(200, BookSchema(many=True))
    def get(self):
        return BookModel.query.all()

    @blp.arguments(BookSchema)
    @blp.response(201, BookSchema)
    def post(self, book_data) :
        book = BookModel(**book_data)
        try:
            db.session.add(book)
            db.session.commit()
        except SQLAlchemyError:
            abort(500, message="Error occured while uploading book.")

        return book