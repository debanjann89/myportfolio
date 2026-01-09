import asyncio
from database import (
    skill_collection, 
    project_collection, 
    certification_collection,
    experience_collection,
    education_collection
)

async def seed_data():
    print("Clearing old data...")
    # Clear collections to avoid duplicates
    await skill_collection.delete_many({})
    await project_collection.delete_many({})
    await certification_collection.delete_many({})
    await experience_collection.delete_many({})
    await education_collection.delete_many({})

    print("Seeding YOUR specific data...")

    # --- SKILLS ---
    skills = [
        {"name": "Python", "proficiency": "Advanced", "icon": "🐍"},
        {"name": "React", "proficiency": "Advanced", "icon": "⚛️"},
        {"name": "FastAPI", "proficiency": "Intermediate", "icon": "⚡"},
        {"name": "Data Science", "proficiency": "Intermediate", "icon": "📊"},
        {"name": "Machine Learning", "proficiency": "Intermediate", "icon": "🤖"},
        {"name": "MongoDB", "proficiency": "Intermediate", "icon": "🍃"},
        {"name": "Premiere Pro", "proficiency": "Advanced", "icon": "🎬"},
    ]
    if skills:
        await skill_collection.insert_many(skills)

    # --- PROJECTS (All 4 from your CV) ---
    projects = [
        {
            "title": "MyHealth AI",
            "description": "Full-Stack Health Assistant. Features context-aware chat, macro tracking, and a Liquid Glass UI. Built with React, FastAPI & GenAI.",
            "tech_stack": "React, FastAPI, MongoDB, GenAI",
            "link": "https://my-health-ai.vercel.app"
        },
        {
            "title": "Crypto Trading Bot",
            "description": "Automated trading bot connecting to Binance Futures Testnet API. Handles Buy/Sell orders with robust logging and error handling.",
            "tech_stack": "Python, Binance API, OOP",
            "link": "https://github.com/debanjann89" 
        },
        {
            "title": "GenAI Quiz Generator",
            "description": "AI-powered tool that generates MCQs or quizzes from any given topic using the Gemini API. Fast and reliable.",
            "tech_stack": "Python, Gemini API, GenAI",
            "link": "https://github.com/debanjann89"
        },
        {
            "title": "Sales Prediction Model",
            "description": "Machine Learning model using Linear Regression to predict optimal advertising channels for maximum profit.",
            "tech_stack": "Python, ML, Linear Regression",
            "link": "https://github.com/debanjann89"
        },
    ]
    if projects:
        await project_collection.insert_many(projects)

    # --- CERTIFICATIONS ---
    certs = [
        {
            "name": "Data Science Workshop", 
            "issuer": "Siliguri Institute of Technology", 
            "year": "2025",
            "pdf_link": "/certs/datascience.pdf"
        },
        {
            "name": "3D Printing & Additive Mfg.", 
            "issuer": "CDAC", 
            "year": "2024",
            "pdf_link": "/certs/3dprinting.pdf"
        },
        {
            "name": "Graphic Design Internship", 
            "issuer": "Teachnook", 
            "year": "2024",
            "pdf_link": "/certs/graphicdesigninternship.pdf"
        }
    ]
    if certs:
        await certification_collection.insert_many(certs)

    # --- EXPERIENCE (Your Real Journey) ---
    experiences = [
        {
            "role": "Freelance Video Editor & Web Dev",
            "company": "Self-Employed",
            "duration": "2024 - Present",
            "description": "1+ year of experience delivering high-quality video edits (Premiere Pro) and custom web solutions for clients."
        },
        {
            "role": "Graphic Design Intern",
            "company": "IIT Bhubaneswar (via Teachnook)",
            "duration": "Jul 2024",
            "description": "Completed internship focused on design principles, visual communication, and creative assets."
        }
    ]
    if experiences:
        await experience_collection.insert_many(experiences)

    # --- EDUCATION ---
    education = [
        {
            "degree": "Master of Computer Applications (MCA)",
            "school": "Siliguri Institute of Technology",
            "year": "2024 - Present",
            "score": "CGPA: 7.6"
        },
        {
            "degree": "Bachelor of Computer Applications (BCA)",
            "school": "Centre for Innovative Studies",
            "year": "2020 - 2023",
            "score": "CGPA: 9.14"
        },
        {
            "degree": "Higher Secondary (Science)",
            "school": "MC William High School",
            "year": "2020",
            "score": "89.6%"
        }
    ]
    if education:
        await education_collection.insert_many(education)

    print("Database seeded with YOUR REAL DATA successfully!")

if __name__ == "__main__":
    asyncio.run(seed_data())