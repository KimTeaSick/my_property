from db import mysqlConn
import routers.coin.coinReturn as coinReturn
import sql.coin as coinSql

class Coin:
  def __init__(self):
    self.mysql = mysqlConn()

  def getMyCoinFn(self):
    res = self.mysql.select(coinSql.get_my_coin_sql)
    return coinReturn.getMyCoinReturn(res)