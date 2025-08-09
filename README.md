# Professional Portfolio - Quarto Website

A modern, responsive portfolio website built with Quarto and featuring interactive Reveal.js presentations in modal overlays.

## Features

- 🎨 **Modern Design**: Clean, professional layout with Inter font and custom color scheme
- 📱 **Responsive**: Works seamlessly across desktop, tablet, and mobile devices
- 🎯 **Interactive Presentations**: Reveal.js slides that open in fullscreen modal overlays
- ⚡ **Fast Loading**: Optimized for performance and quick page loads
- 🚀 **GitHub Pages Ready**: Configured for easy deployment to GitHub Pages

## Quick Start

### Prerequisites
- [Quarto](https://quarto.org/docs/get-started/) installed on your system
- Git for version control
- A GitHub account for deployment

### Local Development

1. **Clone or download this project**
   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. **Preview locally**
   ```bash
   quarto preview
   ```
   This will start a local server and open your browser to preview the site.

3. **Build for production**
   ```bash
   quarto render
   ```

### Deployment to GitHub Pages

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial portfolio setup"
   git push origin main
   ```

2. **Enable GitHub Pages**
   - Go to your repository Settings → Pages
   - Select source: "Deploy from a branch"
   - Choose branch: `main`
   - Select folder: `/ (root)`

3. **Automatic deployment** (recommended)
   - The included GitHub Actions workflow will automatically build and deploy your site
   - Every push to main will trigger a new deployment

## Project Structure

```
├── _quarto.yml              # Main Quarto configuration
├── index.qmd               # Homepage
├── about.qmd               # About page
├── presentations.qmd       # Presentations listing
├── slides.qmd              # Sample Reveal.js presentation
├── styles.css              # Global CSS styles
├── modal.js                # Modal functionality
├── custom-reveal.scss      # Reveal.js theme
├── reveal-custom.css       # Additional Reveal.js styles
├── BEST_PRACTICES.md       # Maintenance guidelines
└── README.md               # This file
```

## Customization

### Colors and Branding
Edit the CSS variables in `styles.css`:
```css
:root {
  --primary-color: #0055cc;    /* Change to your brand color */
  --primary-hover: #003d99;    /* Darker shade for hover */
  --text-color: #333;
  --light-bg: #f8f9fa;
}
```

### Site Information
Update `_quarto.yml`:
```yaml
website:
  title: "Your Name - Portfolio"  # Change site title
  navbar:
    # Customize navigation items
```

### Adding New Presentations
1. Create a new `.qmd` file (e.g., `new-presentation.qmd`)
2. Use the same format as `slides.qmd`
3. Add an entry in `presentations.qmd`
4. Update the modal button with the correct file path

### Fonts
The site uses Google Fonts (Inter). To change fonts:
1. Update the Google Fonts import in `_quarto.yml`
2. Update the font-family in `styles.css`
3. Update the Reveal.js theme in `custom-reveal.scss`

## Modal Integration

The modal system allows presentations to open in fullscreen overlays without leaving the main site. Key files:

- `modal.js`: Handles opening/closing modals and iframe management
- Modal styles in `styles.css`: Overlay, animations, and responsive design
- Data attributes: Use `data-presentation="slides.html"` on buttons

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

The site is optimized for fast loading:
- Minimal JavaScript (only for modal functionality)
- Efficient CSS with custom properties
- Optimized font loading
- Lazy loading for presentations

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test locally
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

For questions about Quarto, visit the [Quarto documentation](https://quarto.org/docs/).
For Reveal.js questions, see the [Reveal.js documentation](https://revealjs.com/).

---

Built with ❤️ using [Quarto](https://quarto.org) and [Reveal.js](https://revealjs.com)
