from pydantic import BaseModel
from typing import Optional

class Skill(BaseModel):
    name: str
    proficiency: str
    icon: Optional[str] = None

class Project(BaseModel):
    title: str
    description: str
    tech_stack: str
    link: Optional[str] = None

class Certification(BaseModel):
    name: str
    issuer: str
    year: str

# NEW: Model for contact form
class ContactMessage(BaseModel):
    name: str
    email: str
    message: str
class Experience(BaseModel):
    role: str
    company: str
    duration: str
    description: str