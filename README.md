<div align="center">
Explore360 AI Chatbot 

**An intelligent, multilingual AI-powered travel assistant for exploring India.**

</div>

<div align="center">

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Google Gemini](https://img.shields.io/badge/Google_Gemini-8E75B7?style=for-the-badge&logo=google&logoColor=white)](https://ai.google/discover/gemini/)
[![OpenStreetMap](https://img.shields.io/badge/OpenStreetMap-7EBC6F?style=for-the-badge&logo=openstreetmap&logoColor=white)](https://www.openstreetmap.org/)

</div>

<div align="center">
  
![Chatbot Demo GIF](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExd2pxbGI1cTQ3cWo0cDZrZ2kyY3R1MzZqejBxbDlsdmZ2OHZyOXR6eiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/S60CrN9iMxFlyp7uM8/giphy.gif)


</div>

### **Introduction**

The India Tourism AI Chatbot is an interactive and user-friendly travel guide designed to assist tourists in planning their trips across India. Leveraging the power of Google's Gemini AI, it provides intelligent responses, generates custom travel itineraries, and offers location-based recommendations in multiple Indian languages. This project aims to make travel planning seamless, accessible, and personalized for everyone.

---

### **✨ Key Features**

* **🤖 Conversational AI:** Natural and context-aware travel advice powered by the **Google Gemini API**.
* **🌐 Multilingual Support:** Communicates fluently in **7+ Indian languages**, with an easy-to-use language switcher.
* **🗺️ Dynamic Trip Planning:** Generates detailed day-by-day itineraries in a clean table format on request.
* **📍 Hyperlocal Search:** Finds nearby points of interest using the **OpenStreetMap API**, including:
    * Tourist Attractions
    * Hotels & Lodging
    * Restaurants (with **vegetarian/non-vegetarian** filtering)
    * Bus Stands & Railway Stations
    * Medical Shops
* **🔊 Voice I/O:** Features **Text-to-Speech** (TTS) for reading out responses and **Speech-to-Text** (STT) for voice commands.
* **🔗 Interactive Map Links:** Each location result includes a direct, coordinate-based link to **Google Maps** for pinpoint accuracy.
* **🎨 Modern UI:** A sleek and responsive interface built with **Tailwind CSS**, featuring quick replies and a floating action button.

---

### **🛠️ Tech Stack**

| Technology        | Description                               |
| ----------------- | ----------------------------------------- |
| **React.js** | A JavaScript library for building user interfaces.     |
| **Tailwind CSS** | A utility-first CSS framework for rapid UI development. |
| **Google Gemini** | The core AI model for chat and text-to-speech (TTS).  |
| **OpenStreetMap** | Used via the Overpass API for fetching geolocation data. |
| **Web Speech API**| Enables voice recognition for hands-free interaction. |

---

### **🚀 Getting Started**

Follow these instructions to set up the project on your local machine.

1.  **Clone the Repository**
    ```sh
    git clone (https://github.com/your-username/india-tourism-chatbot.git)
    cd india-tourism-chatbot
    ```

2.  **Install Dependencies**
    ```sh
    npm install
    ```

3.  **Set Up Environment Variables**
    * Create a file named `.env` in the root of your project.
    * Get your API key from [Google AI Studio](https://makersuite.google.com/).
    * Add your API key to the `.env` file:
        ```env
        VITE_GEMINI_API_KEY=YOUR_API_KEY_HERE
        ```

4.  **Run the Application**
    ```sh
    npm run dev
    ```
    Navigate to `http://localhost:5173` in your browser.

---

### **🤝 Contributing**

Contributions are welcome! If you have ideas for new features or improvements, feel free to fork the repository and submit a pull request.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/NewFeature`)
3.  Commit your Changes (`git commit -m 'Add some NewFeature'`)
4.  Push to the Branch (`git push origin feature/NewFeature`)
5.  Open a Pull Request

---

### **📝 License**

This project is licensed under the MIT License. See the `LICENSE` file for details.
