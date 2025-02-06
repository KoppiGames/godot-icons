# Godot Icons  

A simple and user-friendly website to browse all editor icons available in the [Godot Engine](https://godotengine.org).

**Live version:** [koppi.games/godot-icons](https://www.koppi.games/godot-icons)

## 📌 About

This project fetches all [Godot editor icons](https://github.com/godotengine/godot/tree/master/editor/icons) using the [GitHub API](https://docs.github.com/en/rest) and organizes them in an easy-to-navigate interface.

### Features
- **Browse Icons** – View all available Godot editor icons in a clean UI.
- **Copy Names** – Click on an icon to quickly copy its name.
- **Download SVG** – Download the full SVG file of any icon.

### Future Improvements
- **Fuzzy Search** – A search bar to find icons more efficiently.  
- **Documentation Links** – Quick access to guides on using and creating custom icons.
- **Lazy loading** - Improved image loading for better performance.

## 💻 Running Locally

To run the project locally, follow these steps:

1. Clone the repository
2. Install dependencies:  
   ```sh
   yarn install
   ```
3. Start the development server:
   ```sh
   yarn start
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🛠️ Technologies Used  
- **React** – Frontend framework.
- **TypeScript** – Strongly typed JavaScript.
- **GitHub API** – Fetching icon assets.
- **Manual CSS Styling** – All styles are handcrafted without CSS frameworks.

## 💜 License  
This project is open-source and follows the [MIT License](LICENSE).
