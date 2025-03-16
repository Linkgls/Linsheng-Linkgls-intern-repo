# Test App with React and Tailwind CSS

This project was set up using Create React App along with Tailwind CSS to create a fast, modern development environment for React.

## Environment Setup

1. **Create React App:**  
   The project was created using Create React App:

   ```bash
   npx create-react-app test-app --use-npm
   ```

2. **Add the TailwindCSS and other dependency libraries**

   ```bash
    yarn add -D tailwindcss@3.3.3 postcss autoprefixer
   ```

3. **Initialize the tailwind setting**

   ```bash
   yarn tailwindcss init -p
   ```

4. **Config the Tailwind CSS**
   Modify the tailwind.config.js

   ```javascript
   // tailwind.config.js
   module.exports = {
     content: ["./src/**/*.{js,jsx,ts,tsx}"],
     theme: {
       extend: {},
     },
     plugins: [],
   };
   ```

5. **Create the input.css file then use the command line to make it output.css**

   ```javascript
    @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

   ```bash
    npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
   ```

6. **Start**

   ```bash
   npm start
   ```
