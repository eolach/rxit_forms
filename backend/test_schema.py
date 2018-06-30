from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow, pprint
from marshmallow import ValidationError, post_load

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:Calvin191@localhost:5432/test_db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Order matters: Initialize SQLAlchemy before Marshmallow
db = SQLAlchemy(app)
ma = Marshmallow(app)

class Author(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255))

class Book(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(255))
    author_id = db.Column(db.Integer, db.ForeignKey('author.id'))
    author = db.relationship('Author', backref='books')

class AuthorSchema(ma.ModelSchema):
    class Meta:
        model = Author
        @post_load
        def make_user(self, data):
            return User(**data)

class BookSchema(ma.ModelSchema):
    class Meta:
        model = Book

db.create_all()

author_schema = AuthorSchema()
authors_schema = AuthorSchema(many=True)
book_schema = BookSchema()
books_schema = BookSchema(many=True)

# routing from the request
@app.route('/authors')
def get_authors():
  authors = Author.query.all()
  # serialize the query set
  result = authors_schema.dump(authors)
  return jsonify({'authors': result})

# routing from the request
@app.route('/authors/', methods=['POST'])
def add_author():
  json_data = request.get_json()
  if not json_data:
    return jsonify({'message': 'No input data provided'}), 400
    
  # Validate and deserialize input
  try:
    data = author_schema.load({'id': 5, 'name':'Jim Brown'})
  except ValidationError as err:
    return jsonify(err.messages), 402

  this_authors_name = data['name']
  #ew_author = Author(name=data['name'])

  #db.add(new_author)
  #db.commit()
  #result = author_schema.dump(Author.query.get.new_author.id)
  return jsonify({
      'message': 'created new author',
      'data': this_authors_name
  })
  


if __name__ == '__main__':
  db.create_all()
  print("running")
  app.run(debug=True, port=5000)