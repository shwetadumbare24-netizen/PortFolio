# Shwetali Dumbare — Premium Software Developer Portfolio

A production-quality personal portfolio website designed for **Shwetali Dumbare** (Software Developer | Python Developer | AI & ML Enthusiast). Built with React 19, TypeScript, Vite, Tailwind CSS v4, and Lucide React.

---

## 🚀 Live Preview & Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Start the Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Production Build
```bash
npm run build
npm run preview
```

---

## 📂 Project Architecture

```
Portfolio/
├── public/
│   ├── favicon.svg             # Custom SVG brand icon (SD.)
│   └── resume.pdf              # Your resume PDF file (ready for download)
├── src/
│   ├── components/
│   │   ├── Navbar.tsx          # Sticky responsive header with brand logo & mobile drawer
│   │   ├── Hero.tsx            # Hero section with headline, CTA buttons, and status
│   │   ├── DeveloperVisual.tsx # Interactive code editor IDE panel with tabs & terminal
│   │   ├── About.tsx           # Editorial background and engineering philosophy
│   │   ├── Skills.tsx          # Categorized technical competencies with instant search
│   │   ├── Projects.tsx        # Project showcase with category filters & detail modals
│   │   ├── ProjectMockup.tsx   # Bespoke CSS interface previews for each project
│   │   ├── ProjectModal.tsx    # Architecture breakdown modal
│   │   ├── Experience.tsx      # Vertical timeline with editable placeholders
│   │   ├── Education.tsx       # B.Tech AIML at GHRCEM Pune
│   │   ├── Contact.tsx         # Working mailto form, copy-to-clipboard, social links
│   │   ├── Footer.tsx          # Auto-updating copyright, navigation shortcuts, back-to-top
│   │   ├── ResumeModal.tsx     # Curriculum Vitae snapshot and download dialog
│   │   ├── Toast.tsx           # Subtle notification toasts
│   │   └── Icons.tsx           # Clean, accessible SVG icons (GitHub, LinkedIn)
│   ├── data/
│   │   └── portfolioData.ts    # Centralized data file for easy customization
│   ├── types/
│   │   └── index.ts            # TypeScript data contracts & interfaces
│   ├── App.tsx                 # Root component assembling all sections
│   ├── main.tsx                # React 19 entry point
│   └── index.css               # Dark theme, grid patterns, and Tailwind styles
├── index.html                  # SEO metadata, Open Graph tags & Google Fonts
├── package.json
├── tsconfig.json
└── vite.config.ts              # Vite & Tailwind CSS v4 configuration
```

---

## 🛠️ How to Customize Your Details

All your personal details, links, skills, projects, and milestones are organized in a single file:  
👉 **`src/data/portfolioData.ts`**

### 1. Update Contact & Social Information
In `src/data/portfolioData.ts`:
```typescript
export const personalProfile = {
  name: "Shwetali Dumbare",
  email: "shwetalidumbare16@gmail.com",                  // Your email
  github: "https://github.com/shwetadumbare24-netizen", // Your GitHub
  linkedin: "https://www.linkedin.com/in/your-profile", // Replace with your LinkedIn URL
  location: "Pune, Maharashtra, India",
  availabilityStatus: "Open to Software Development Opportunities",
  ...
};
```

### 2. Update Internship Companies & Dates
In `src/data/portfolioData.ts`, find `experienceData`:
- Replace `[Tech Organization / Internship]` with your actual company name.
- Update `period` (e.g. `June 2024 – August 2024`).
- Set `isPlaceholder: false` when finalized.

### 3. Add Real Project Screenshots (Optional)
If you wish to display actual screenshots instead of the built-in interface mockups:
1. Place your screenshot image files inside `src/assets/projects/` (e.g. `student-analytics.png`).
2. In `src/components/ProjectMockup.tsx`, you can render an `<img>` tag with `src={...}` if an image path is provided.
The website includes tailored, dark-themed interface mockups so screenshots are completely optional!

---

## 📄 How to Update Your Resume PDF

1. Prepare your resume in PDF format.
2. Name the file **`resume.pdf`**.
3. Place it directly into the **`public/`** folder:
   ```
   c:\Users\M TECH\Desktop\Portfolio\public\resume.pdf
   ```
4. That's it! The "Download Resume" buttons across the header, hero, and modal will immediately download your file.

---

## 🌐 Deployment Instructions

### Deploy to Vercel (Recommended — Free & 1-Click)
1. Push your repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of Shweta's portfolio"
   git branch -M main
   git remote add origin https://github.com/shwetadumbare24-netizen/portfolio.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) and log in with your GitHub account.
3. Click **"Add New Project"** and select your `portfolio` repository.
4. Framework Preset will auto-detect **Vite**.
5. Click **"Deploy"**. Your portfolio will be live with free SSL in less than 60 seconds!

### Deploy to Netlify
1. Go to [netlify.com](https://netlify.com).
2. Connect your GitHub repository.
3. Set **Build Command**: `npm run build`
4. Set **Publish directory**: `dist`
5. Click **"Deploy site"**.

---

## ✨ Key Highlights of This Website
- **Zero Fabricated Content**: Strictly uses your verified academic degree, projects, and technologies.
- **Interactive Developer IDE**: Built-in Python code editor mockup in the hero section featuring interactive tabs and executable simulation.
- **Accurate Project Representation**: Features the RAG Customer Support Assistant and Student Management System with real GitHub links, plus your desktop analytics and web projects.
- **Keyboard & Mobile Accessible**: Fully responsive layout with smooth transitions, reduced-motion support, and native mail client dispatching.
