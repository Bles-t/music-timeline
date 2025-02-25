🎤 Interactive Hip-Hop Timeline 🏆
An AI-powered timeline that showcases major events in hip-hop history. Users can search for an artist, and the timeline dynamically displays their albums, awards, and iconic moments using GPT-3.5.

🚀 Built With:

Frontend: React, Tailwind CSS
Backend: FastAPI (Python), OpenAI API
Deployment: Vercel (Frontend), Render (Backend)
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

md
Copy
Edit
![Screenshot of Hip-Hop Timeline](./image1.png) 
(./image2.png)
🛠️ Tech Stack
Frontend:

React ⚛️
Tailwind CSS 🎨
Backend:

FastAPI (Python) ⚡
OpenAI API 🤖
Database (Optional):

PostgreSQL 🗄️ (for caching/storing data)
Deployment:

Frontend: Vercel 🌍
Backend: Render 🖥️
🚀 Installation
1️⃣ Backend Setup (FastAPI & Python)
🔹 Install Python & Virtual Environment
Ensure you have Python installed (Python 3.8+ recommended):

bash
Copy
Edit
python3 --version
If missing, install it via Python.org or use Homebrew:

bash
Copy
Edit
brew install python
Then, create and activate a virtual environment:

bash
Copy
Edit
python3 -m venv venv
source venv/bin/activate  # Mac/Linux
venv\Scripts\activate  # Windows
🔹 Install Dependencies
Navigate to the backend folder and install dependencies:

bash
Copy
Edit
cd src/server
pip install -r requirements.txt
🔹 Set Up Environment Variables
Create a .env file inside src/server/ with:

ini
Copy
Edit
OPENAI_API_KEY=your_openai_api_key
PORT=5001
🔹 Run the Backend
bash
Copy
Edit
uvicorn src.server.server:app --host 0.0.0.0 --port 5001 --reload
✅ You should see:

nginx
Copy
Edit
Uvicorn running on http://127.0.0.1:5001
2️⃣ Frontend Setup (React)
🔹 Install Dependencies
Navigate to the frontend folder and install dependencies:

bash
Copy
Edit
cd src/client
npm install
🔹 Set Up Environment Variables
Create a .env file inside src/client/ with:

ini
Copy
Edit
REACT_APP_BACKEND_URL=http://localhost:5001
🔹 Run the Frontend
bash
Copy
Edit
npm start
✅ Open http://localhost:3000 to use the app.

3️⃣ Running the Application
1️⃣ Start the Backend (FastAPI):

bash
Copy
Edit
uvicorn src.server.server:app --host 0.0.0.0 --port 5001 --reload
2️⃣ Start the Frontend (React):

bash
Copy
Edit
cd src/client
npm start
🔗 Access the app:
http://localhost:3000

🔑 Environment Variables
Create .env files in both backend and frontend.

Backend (src/server/.env)
ini
Copy
Edit
OPENAI_API_KEY=your_openai_api_key
PORT=5001
Frontend (src/client/.env)
ini
Copy
Edit
REACT_APP_BACKEND_URL=http://localhost:5001
🚨 Restart your apps after editing .env 🚨

🚀 Deployment
Deploy Backend (Render)
1️⃣ Push backend code to GitHub.
2️⃣ Create a new Web Service on Render.
3️⃣ Select your repository and set:

Runtime: Python
Build Command: pip install -r requirements.txt
Start Command:
bash
Copy
Edit
uvicorn src.server.server:app --host 0.0.0.0 --port 10000
4️⃣ Add environment variables (API key, DB credentials).
5️⃣ Deploy! 🎉

🔗 Get the deployed backend URL (e.g., https://your-api.onrender.com).

Deploy Frontend (Vercel)
1️⃣ Push frontend code to GitHub.
2️⃣ Go to Vercel and import your repo.
3️⃣ Add REACT_APP_BACKEND_URL as an environment variable.
4️⃣ Deploy! 🎉

🔗 Get the deployed frontend URL (e.g., https://hiphoptimeline.vercel.app).

🔮 Future Enhancements
🔹 Add Redis for Caching (to improve API response times).
🔹 Implement Authentication (users can save their favorite timelines).
🔹 Allow User-Generated Events (let users contribute).