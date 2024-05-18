import os
import sys

FILE_ABS_PATH = os.path.dirname(__file__)
ROOT_PATH = os.path.join(FILE_ABS_PATH, os.pardir)
sys.path.append(ROOT_PATH)

from flask import Flask, request, make_response


app = Flask(__name__)


class Response:
    def __init__(self, code, msg, data):
        self.code = code
        self.msg = msg
        self.data = data

    def __dict__(self):
        return {
            'code': self.code,
            'msg': self.msg,
            'data': self.data
        }

    @staticmethod
    def mk_success(data):
        return make_response(Response(0, '', data).__dict__())

    @staticmethod
    def mk_error(msg, code=-1):
        return make_response(Response(code, msg, None).__dict__())


@app.get('/test/text')
def get_text():
    return Response.mk_success("Hello from backend")


test_count = 0


@app.post('/test/increaseRemote')
def increse_remote():
    global test_count
    test_count += 1
    return Response.mk_success(test_count)


@app.get('/test/triggerError')
def trigger_error():
    error_code = request.args.get('errorCode')
    if error_code is None:
        return Response.mk_error('No error code provided')
    error_code = int(error_code)
    return Response.mk_error(f'Error triggered {error_code}', error_code)
