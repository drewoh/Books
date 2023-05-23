from flask.views import MethodView
from flask_smorest import Blueprint, abort

from models import BookModel
from schemas import BookSchema


bp = Blueprint("Books", "books", description="Operations on books")

@bp.route("/books")
class BookList(MethodView):
    @bp.response(200, BookSchema(many=True))
    def get(self):
        return BookModel.query.all()
    