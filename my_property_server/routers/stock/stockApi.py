from fastapi import APIRouter
from routers.stock.stockFn import Stock

stockRouter = APIRouter(
  prefix="/stock",
  tags=["stock"]
)

stock = Stock()

@stockRouter.get("/")
def getMyStockApi():
  return stock.getMyStockFn()