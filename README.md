# Portfolio Website - Brian Okech Wade

A modern, responsive portfolio website built with Next.js, featuring server-side rendering, optimized images, and a clean design to showcase my projects and skills.

## 🚀 Features

- **Modern Stack**: Built with Next.js 14+ and React
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Performance Optimized**: Server-side rendering and optimized images
- **Clean UI**: Professional and minimalist design
- **Interactive Elements**: Smooth animations and hover effects
- **SEO Friendly**: Proper meta tags and semantic HTML

## 🛠️ Tech Stack

- **Framework**: Next.js 14+
- **Styling**: CSS-in-JS with inline styles
- **Images**: Next.js Image optimization
- **Version Control**: Git & GitHub

## 📁 Project Structure
nextjs-portfolio-v2/
├── app/
│ ├── page.js # Home page
│ ├── layout.js # Root layout
│ └── globals.css # Global styles
├── public/
│ └── Images/
│ ├── IMG_20210730_071509.jpg # Profile photo
│ ├── project1.jpg # Project images
│ ├── project2.jpg
│ └── project3.jpg
├── components/ # Reusable components
├── next.config.js # Next.js configuration
└── package.json # Dependencies

text

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- Git installed

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/portfolio-website.git
   cd portfolio-website
Install dependencies

bash
npm install
Run the development server

bash
npm run dev
Open your browser
Navigate to http://localhost:3000 to view the portfolio

📝 Customization
Personal Information
Edit app/page.js to update:

Your name and profession

Profile photo path

Project details

Contact information

Adding Projects
Update the projects array in app/page.js:

javascript
const projects = [
  {
    id: 1,
    title: "Your Project Name",
    description: "Project description",
    image: "/Images/your-project-image.jpg",
    tech: ["React", "Next.js", "Node.js"],
  },
  // Add more projects...
];
Styling
Modify inline styles in app/page.js to match your preferred color scheme and design.

🎨 Sections
Hero: Profile photo, name, and introduction

Projects: Showcase of your work with images and technologies

Contact: Contact information and call-to-action

Navigation: Smooth scrolling between sections

📱 Responsive Design
The portfolio is fully responsive and optimized for:

Desktop (1200px+)

Tablet (768px - 1199px)

Mobile (320px - 767px)

📄 Available Scripts
npm run dev - Start development server

npm run build - Build for production

npm run start - Start production server

npm run lint - Run ESLint

🔧 Configuration
next.config.js
javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com'], // For external images
  },
}

export default nextConfig
🗂️ Project Details
This portfolio website includes:

Responsive navigation bar

Hero section with profile photo

Projects showcase with technology tags

Contact section

Modern gradient backgrounds

Hover animations and transitions

🤝 Contributing
Fork the project

Create your feature branch (git checkout -b feature/AmazingFeature)

Commit your changes (git commit -m 'Add some AmazingFeature')

Push to the branch (git push origin feature/AmazingFeature)

Open a Pull Request

👨‍💻 Author
Brian Okech Wade

Email: [Your Email]

GitHub: @YOUR_USERNAME

📞 Contact
For any questions or collaboration opportunities, please reach out through the contact section on the portfolio website.
