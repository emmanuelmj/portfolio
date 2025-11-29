# Vertex Portfolio

A minimalist, premium portfolio website built with React, Tailwind CSS, and Framer Motion.

## Features

- **Apple Aesthetic**: Clean, minimalist design with glassmorphism and smooth animations.
- **Dark Mode**: Fully supported dark mode with a toggle switch.
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices.
- **Contact Form**: Integrated with EmailJS for direct messaging.
- **Project Showcase**: Grid layout for displaying projects with links.

## Tech Stack

- **Frontend**: React (Vite)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Routing**: React Router DOM

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/vertex-portfolio.git
   ```
2. Navigate to the project directory:
   ```bash
   cd vertex-portfolio
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Running Locally

Start the development server:
```bash
npm run dev
```

### Building for Production

Create a production build:
```bash
npm run build
```
The output will be in the `dist` directory.

## Configuration

### EmailJS Setup

To make the contact form functional:
1. Sign up at [EmailJS](https://www.emailjs.com/).
2. Create a Service and a Template.
3. Open `src/components/Contact.jsx`.
4. Replace the placeholders with your actual keys:
   ```javascript
   const serviceId = 'YOUR_SERVICE_ID';
   const templateId = 'YOUR_TEMPLATE_ID';
   const publicKey = 'YOUR_PUBLIC_KEY';
   ```

### Customization

- **Colors/Fonts**: Edit `tailwind.config.js`.
- **Content**: Update component files in `src/components/`.

## License

MIT
