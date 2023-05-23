from marshmallow import Schema, fields

class BookSchema(Schema):
    id = fields.Int(dump_only=True)
    title = fields.Str()
    authors = fields.Str()
    publication_date = fields.Date()
    isbn = fields.Str()
    review = fields.Str()
    image_url = fields.Str()
