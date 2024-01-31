from fastapi import APIRouter

coinRouter = APIRouter(
  prefix="/coin",
  tags=["coin"]
)

@coinRouter.get("/getMyCoin")
def getMyCoinApi():
  return "hi?"