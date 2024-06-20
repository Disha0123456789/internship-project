from fastapi import FastAPI , Header
from typing import Annotated, List, Union
from fastapi.middleware.cors import CORSMiddleware
import os 
from dotenv import load_dotenv
from lib import get_data
load_dotenv()


app = FastAPI(title="Horoscope API", description="horoscope data api")


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/horoscope" ,  summary="horoscope")
async def read_items(horoscope_data:str , time : str ):
    return {"response": str(get_data( horoscope_Data= horoscope_data.strip() , time = time.strip())) }



# get available companies name 


@app.get("/")
async def index():
    return {"message": "Hello World use /docs for swagger docs"}


# if __name__ == "__main__":
#     print(ask_ai("what is my name ?"))