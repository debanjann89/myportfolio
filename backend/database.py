import motor.motor_asyncio
import os
from dotenv import load_dotenv

load_dotenv()

MONGO_DETAILS = os.getenv("MONGO_URI")

client = motor.motor_asyncio.AsyncIOMotorClient(MONGO_DETAILS)

database = client.portfolio_db

# Collections
skill_collection = database.get_collection("skills")
project_collection = database.get_collection("projects")
certification_collection = database.get_collection("certifications")
# NEW: Collection for contact messages
contact_collection = database.get_collection("contacts")
education_collection = database.get_collection("education")
experience_collection = database.get_collection("experience")

# Helper: Convert MongoDB "ObjectId" to a string so React can read it
def fix_id(document):
    document["id"] = str(document["_id"])
    del document["_id"]
    return document