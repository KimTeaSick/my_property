from fastapi import APIRouter
from routers.coin.coinFn import Coin
coinRouter = APIRouter(
  prefix="/coin",
  tags=["coin"]
)

coinFn = Coin()

@coinRouter.get("/getMyCoin")
def getMyCoinApi():
  return coinFn.getMyCoinFn()