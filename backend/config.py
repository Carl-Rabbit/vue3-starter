import os
from dotenv import load_dotenv

load_dotenv('../frontend/.env')

port = os.getenv('VITE_BACKEND_PORT')
bind = f'0.0.0.0:{port}'
timeout = 0
