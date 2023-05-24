from marshmallow import Schema, fields

class BookSchema(Schema):
    id = fields.Int(dump_only=True)
    title = fields.Str(required=True)
    authors = fields.Str(required=True)
    publication_date = fields.Date()
    isbn = fields.Str()
    review = fields.Str()
    image_url = fields.Str()
