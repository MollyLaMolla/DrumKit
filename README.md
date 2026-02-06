# 🥁 Drum Kit

A simple and fun drum simulator.  
Click the buttons or press the matching keyboard keys to play real drum sounds.

---

## 🧠 Overview

Drum Kit is a beginner‑friendly front‑end project built with **HTML, CSS, and JavaScript**.  
Each button on the screen represents a drum component, and every button is linked to a keyboard key.  
Pressing a key or clicking a button plays the corresponding sound and triggers a short animation.

This project is inspired by early JavaScript learning exercises and focuses on DOM events, audio playback, and simple UI feedback.

---

## 🔥 Features

- 🖱️ **Click buttons** to play drum sounds  
- ⌨️ **Press keyboard keys** (`w`, `a`, `s`, `d`, `j`, `k`, `l`)  
- 🎧 **Seven unique drum sounds**  
- ✨ **Button animation** when pressed  
- 🔊 **Instant audio playback**  
- 📱 Fully responsive layout  
- ❤️ Simple and fun to use  

---

## 🎮 How It Works

### **Event Listeners**
- Each `.drum` button listens for a **click** event  
- The document listens for **keydown** events  
- Both trigger:
  - `soundAdder()` → plays the correct audio file  
  - `buttonAnimation()` → adds a temporary CSS class  

### **Sound Logic**
- Sounds are stored in an array  
- Each key corresponds to a specific index  
- A `switch` statement selects the correct sound  

### **Animation**
- Adds the `.pressed` class  
- Removes it after 100ms  

---

## 🛠️ Tech Stack

**Frontend Only:**
- HTML  
- CSS  
- JavaScript  

No backend, no frameworks — pure DOM manipulation.

---

## 👊 Installation

```text
# Clone the project
git clone https://github.com/MollyLaMolla/DrumKit.git
cd DrumKit

# Open the game
Open index.html in your browser
```
## 🌐 Live Demo
[Try it here](https://mollylamolla.github.io/DrumKit/)

## 📄 License
This project is licensed under the ISC License.
