# mwizerwa-hospital
A cross-platform telehealth mobile app connecting patients with doctors appointment booking, real-time vitals tracking, and video consultations.

## Features

-  Role-based auth (Patient / Doctor) — Firebase Auth
- Doctor discovery & appointment booking with real-time availability
- Patient vitals dashboard (heart rate, BP, weight tracking)
- Health tips & articles feed
- Video consultation UI with call controls

## Tech Stack

**Frontend:** React Native, Expo, Expo Router, TypeScript
**Backend:** Firebase (Auth, Firestore, Storage)
**State:** Zustand

##  Getting Started
### Prerequisites
- Node.js 20+
- Expo CLI (`npx expo`)
- Firebase project (see `.env.example`)

### Installation
\`\`\`bash
git clone https://github.com/yourusername/mwizerwa-hospital.git
cd mwizerwa-hospital
npm install
cp .env.example .env   # add your Firebase config
npx expo start

## Project Structure
app/              # Expo Router screens
components/       # Reusable UI components
services/         # Firebase, API calls
store/            # Zustand stores
types/            # TypeScript types

## License
MIT