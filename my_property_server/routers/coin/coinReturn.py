def getMyCoinReturn(res):
  returnValue = []
  for data in res:
    print(data)
    returnValue.append({
      "coin_name":data[0], 
      "coin_symbol": data[1], 
      "avg_price":data[2], 
      "unit": data[3], 
      "total": data[4], 
      "platform":data[5]
      })
  return returnValue