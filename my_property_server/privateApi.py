import os 

from dotenv import load_dotenv
from pybithumb import Bithumb

load_dotenv()

bithumb_connect=os.environ.get("bithumb_connect")
bithumb_private=os.environ.get("bithumb_private")

class BithumbPrivate():
  def __init__(self):
    self.bithumb_api = Bithumb(bithumb_connect,bithumb_private)

  def getMyCoin(self):
    blance_list = self.bithumb_api.get_balance("ALL")
    print(blance_list)

bit = BithumbPrivate()
bit.getMyCoin()