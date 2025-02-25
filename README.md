🎤 Interactive Hip-Hop Timeline 🏆
An AI-powered timeline that showcases major events in hip-hop history. Users can search for an artist, and the timeline dynamically displays their albums, awards, and iconic moments using GPT-3.5.

📌 Table of Contents
Features
Screenshots
Tech Stack
Installation
1️⃣ Backend Setup (FastAPI & Python)
2️⃣ Frontend Setup (React)
3️⃣ Running the Application
Environment Variables
Database Setup (Optional)
Deployment
Future Enhancements
Contributing
License
🎨 Features
✅ Dynamic Artist Search – Search any hip-hop artist and see their career highlights.
✅ AI-Powered Timeline – Uses GPT-3.5 to generate event descriptions dynamically.
✅ Sleek UI – Tailwind-styled timeline with smooth animations.
✅ FastAPI Backend – Python-based backend to handle API requests.
✅ React Frontend – A responsive UI built with React.
✅ Deployed & Scalable – Ready for hosting with Render & Vercel.

📸 Screenshots
🎯 Add screenshots here to showcase:

The homepage
Search results with a populated timeline
API response examples (optional)
You can add images like this:

![Screenshot of Hip-Hop Timeline](./image1.png)
🛠️ Tech Stack
Frontend:

React ⚛️
Tailwind CSS 🎨
Backend:

FastAPI (Python) ⚡
OpenAI API 🤖
Database (Optional):

PostgreSQL 📄 (for caching/storing data)
Deployment:

Frontend: Vercel 🌍
Backend: Render 🖥️
🚀 Installation
1️⃣ Backend Setup (FastAPI & Python)
git clone https://github.com/Bles-t/hip-hop-timeline.git
cd hip-hop-timeline/src/server
python3 -m venv venv
source venv/bin/activate  # On Windows use 'venv\Scripts\activate'
pip install -r requirements.txt
2️⃣ Frontend Setup (React)
cd ../client
npm install
3️⃣ Running the Application
Run the Backend
cd ../server
uvicorn src.server.server:app --host 0.0.0.0 --port 5001 --reload
Run the Frontend
cd ../client
npm start
🛠️ Environment Variables
Create a .env file in the server directory:

PORT=5001
OPENAI_API_KEY=your_openai_api_key
Create a .env file in the client directory:

REACT_APP_BACKEND_URL=http://localhost:5001
📚 Database Setup (Optional)
If using PostgreSQL, create a database:

CREATE DATABASE hiphop_timeline;
Create the events table:

CREATE TABLE events (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  date DATE NOT NULL,
  description TEXT,
  artist VARCHAR(255),
  related_track TEXT
);
🏢 Deployment
Backend (Render)
Push your backend repo to GitHub
Create a new Web Service on Render
Set the runtime to Python
Add environment variables (OPENAI_API_KEY, PORT)
Deploy and get the live API URL
Frontend (Vercel)
Push your frontend repo to GitHub
Create a new project on Vercel
Add the API URL in Vercel Environment Variables
Deploy the frontend
💡 Future Enhancements
Implement Redis caching to reduce OpenAI API calls.
Add audio clips for key events.
Implement dark mode toggle.
Allow users to compare multiple artists side by side.
💪 Contributing
Contributions are welcome! To contribute:

git clone https://github.com/Bles-t/hip-hop-timeline.git
git checkout -b feature/new-feature
git commit -m "Added new feature"
git push origin feature/new-feature
Open a pull request on GitHub!

📚 License
This project is licensed under the MIT License.

👤 Contact
Adrian Bryant
👤 LinkedIn
💻 GitHub
📧 Bryant.Adrian94@gmail.com