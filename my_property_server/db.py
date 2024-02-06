import os
import pymysql
from dotenv import load_dotenv

load_dotenv()

class mysqlConn():
  def __init__(self):
    self.db = pymysql.connect(
      host=os.environ.get("HOST"),
      port=int(os.environ.get("PORT")),
      db=os.environ.get("DB"),
      user=os.environ.get("USER_NAME"),
      passwd=os.environ.get("PASSWORD"),
      charset='utf8'
    )
  def select(self, sql):
    try:
      cursor = self.db.cursor() 
      cursor.execute(sql)
      result = cursor.fetchall()
      self.db.commit() 
      return result
    except Exception as e:
      print("쿼리 작동 에러 : ", e)
      self.db.close()
  
  def action(self, sql):
    try:
      cursor = self.db.cursor()
      cursor.execute(sql)
      self.db.commit() 
    except Exception as e:
      print("쿼리 작동 에러 : ", e)
      self.db.close()

  def close(self):
    self.db.close()
