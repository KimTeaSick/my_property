from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers.coin.coinApi import coinRouter

import uvicorn

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(coinRouter)

if __name__ == "__main__":
  config = uvicorn.Config("server:app", log_level="info", host="0.0.0.0", port=8556, reload=True)
  server = uvicorn.Server(config)
  server.run()
