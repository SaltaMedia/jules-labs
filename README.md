# Jules Labs Website

A minimalist one-page company website for Jules Labs, built with Next.js and Tailwind CSS.

## About Jules Labs

Jules Labs builds emotionally intelligent tools that help men navigate the real world with confidence and clarity. Our flagship product, Jules:Style, focuses on appearance and presence as a practical on-ramp to confidence.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Font**: Inter (Google Fonts)
- **Deployment**: Ready for Vercel/Netlify

## Features

- 🎨 Custom color palette and gradients
- 📱 Fully responsive design
- ♿ Accessible navigation
- 🚀 Fast loading with Next.js optimizations
- 🎯 SEO optimized with proper metadata

## Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/SaltaMedia/jules-labs.git
   cd jules-labs
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
jules-labs/
├── public/                 # Static assets
│   ├── logo-white.svg     # Main logo (white version)
│   ├── logo-black.svg     # Logo for dark backgrounds
│   └── Logo Files/        # All logo variations
├── src/
│   ├── app/              # Next.js App Router
│   │   ├── globals.css   # Global styles
│   │   ├── layout.tsx    # Root layout
│   │   └── page.tsx      # Home page
│   └── components/       # Reusable components
│       ├── Header.tsx    # Navigation header
│       ├── Section.tsx   # Section wrapper
│       ├── CTAButton.tsx # Call-to-action buttons
│       └── TeamCard.tsx  # Team member cards
├── tailwind.config.ts    # Tailwind configuration
└── package.json          # Dependencies
```

## Customization

### Colors
The website uses a custom color palette defined in `tailwind.config.ts`:

- `tealBright`: #3fc1c9
- `navyDark`: #364f6b
- `offWhite`: #f5f5f5
- `aquaLight`: #67ced4
- `seaGreen`: #2f9fa6
- `slateBlue`: #47688d

### Gradients
Two custom gradients are available:
- `bg-gradient-hero`: Teal to navy gradient
- `bg-gradient-grey`: Off-white gradient

## Deployment

This project is ready for deployment on Vercel, Netlify, or any other platform that supports Next.js.

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

## License

© 2025 Jules Labs. All rights reserved.

## Contact

For questions about this website or Jules Labs, please visit [juleslabs.com](https://juleslabs.com).
