from fastapi import FastAPI
from pydantic import BaseModel
import joblib

app = FastAPI()


model = joblib.load('backend/model.pkl')

class Post(BaseModel):
    text: str

@app.post("/predict/")
async def predict_virality(post: Post):
    # Preprocess Text
    # Prediction
    # Generate Suggestions

    return {}
