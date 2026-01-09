from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from database import (
    skill_collection, 
    project_collection, 
    certification_collection, 
    contact_collection,
    experience_collection, # <--- MAKE SURE THIS IS IMPORTED
    education_collection,
    fix_id
)
from models import ContactMessage

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"message": "Portfolio API is running!"}

# --- GET Routes ---

@app.get("/skills")
async def get_skills():
    skills = []
    async for skill in skill_collection.find():
        skills.append(fix_id(skill))
    return skills

@app.get("/projects")
async def get_projects():
    projects = []
    async for project in project_collection.find():
        projects.append(fix_id(project))
    return projects

@app.get("/certifications")
async def get_certifications():
    certs = []
    async for cert in certification_collection.find():
        certs.append(fix_id(cert))
    return certs

# --- THIS IS THE MISSING PART ---
@app.get("/experience")
async def get_experience():
    exp_list = []
    async for exp in experience_collection.find():
        exp_list.append(fix_id(exp))
    return exp_list
# -------------------------------

@app.post("/contact")
async def send_message(msg: ContactMessage):
    message_data = msg.dict()
    result = await contact_collection.insert_one(message_data)
    if result.inserted_id:
        return {"message": "Message received", "id": str(result.inserted_id)}
    else:
        raise HTTPException(status_code=500, detail="Failed to save message")
    
@app.get("/education")
async def get_education():
    edu_list = []
    async for edu in education_collection.find():
        edu_list.append(fix_id(edu))
    return edu_list
