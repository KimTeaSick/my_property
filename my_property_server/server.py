from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import uvicorn

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

if __name__ == "__main__":
  config = uvicorn.Config("server:app", log_level="info", host="0.0.0.0", port=8556)
  server = uvicorn.Server(config)
  server.run()
