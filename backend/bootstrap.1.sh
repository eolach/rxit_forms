#!/bin/bash
export FLASK_APP=rxit #/main.py
source $(pipenv --venv)/bin/activate
flask shell