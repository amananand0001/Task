<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body>
  <h2>🚀 Getting Started</h2>
  <p>Follow these instructions to get the project up and running on your local machine.</p>

  <h3>1. Clone the Repository</h3>
  <pre><code>git clone https://github.com/amananand0001/Task.git
cd your-repository-name</code></pre>

  <h3>2. Install Dependencies</h3>
  <p>This command will install all the necessary project dependencies listed in <code>package.json</code>.</p>
  <pre><code>npm install</code></pre>

  <h3>3. Run the Application</h3>
  <h4>For Android 🤖</h4>
  <p>This command will build the Android application and install it on your connected emulator or physical device.</p>
  <p><strong>Important</strong>: Make sure you have an Android emulator running or a physical device connected via USB with debugging enabled.</p>
  <pre><code>npx react-native run-android</code></pre>

  <h2>📁 Folder Structure</h2>
  <p>Here is an overview of the project's folder structure:</p>
  <pre><code>.
├── android/            # Native Android project
├── ios/                # Native iOS project
├── src/                # Main source code for the application
│   ├── assets/         # Static assets like images and SVGs 
│   ├── components/     # Reusable UI components (TaskItem, QuoteCard, etc.)
│   ├── constants/      # Global constants like colors and mock data
│   ├── hooks/          # Custom React hooks (e.g., useTheme)
│   ├── screens/        # Main screen components (e.g., HomeScreen)
├── App.tsx             # The main entry point of the application  
├── .eslintrc.js        # ESLint configuration
├── .prettierrc.js      # Prettier configuration
├── package.json        # Project dependencies and scripts
└── tsconfig.json       # TypeScript compiler options</code></pre>

  <h2>📸 Project Screenshots</h2>
  <img src="https://res.cloudinary.com/dfhcmgt4j/image/upload/v1751824914/Screenshot_1751824312_qrycvg.png" alt="Screenshot 1" width="300" height="500">
  <img src="https://res.cloudinary.com/dfhcmgt4j/image/upload/v1751824923/Screenshot_1751824315_xu77qk.png" alt="Screenshot 2" width="300" height="500">

</body>
</html>
