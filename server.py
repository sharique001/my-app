from flask import Flask, request
from flask_restful import Resource, Api
from sqlalchemy import create_engine
from json import dumps
from flask_jsonpify import jsonify
from flask_cors import CORS, cross_origin
import main

app = Flask(__name__)
api = Api(app)
CORS(app)

class Text(Resource):
    def get(self):
        d = {"abhay":"nainan"}
        return dumps(d)
    def post(self):
        # data = request.get_json()
        # print(data)
        data = request.get_json()  
        print(data)      
        # p = {"message": data + "really"}
        # return dumps(p)
        # return dumps(d)
        d = {"abhay":"nainan"}
        return dumps(d)

api.add_resource(Text, '/text')

if __name__ == '__main__':
     app.run(port=5002)
