#!/bin/bash

gunicorn --config=config.py app:app