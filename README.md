
🚀 Getting Started

Follow these instructions to get the project up and running on your local machine.

1. Clone the Repository
Generated bash
git clone https://github.com/your-username/your-repository-name.git
cd your-repository-name

2. Install Dependencies

This command will install all the necessary project dependencies listed in package.json.

Generated bash
npm install

3. Run the Application
For Android 🤖

This command will build the Android application and install it on your connected emulator or physical device.

Important: Make sure you have an Android emulator running or a physical device connected via USB with debugging enabled.

Generated bash
npx react-native run-android
IGNORE_WHEN_COPYING_START
content_copy
download
Use code with caution.
Bash
IGNORE_WHEN_COPYING_END


📁 Folder Structure

Here is an overview of the project's folder structure:

Generated code
.
├── android/            # Native Android project
├── ios/                # Native iOS project
├── src/                # Main source code for the application
│   ├── assets/         # Static assets like images and SVGs 
│   ├── components/     # Reusable UI components (TaskItem, QuoteCard, etc.)
│   ├── constants/      # Global constants like colors and mock data
│   ├── hooks/          # Custom React hooks (e.g., useTheme)
│   ├── screens/        # Main screen components (e.g., HomeScreen)
│── App.tsx             # The main entry point of the application  
├── .eslintrc.js        # ESLint configuration
├── .prettierrc.js      # Prettier configuration
├── package.json        # Project dependencies and scripts
└── tsconfig.json       # TypeScript compiler options
IGNORE_WHEN_COPYING_START
content_copy
download
Use code with caution.
IGNORE_WHEN_COPYING_END

<h2>Project Screenshots:</h2> <img src="https://res.cloudinary.com/dfhcmgt4j/image/upload/v1751824914/Screenshot_1751824312_qrycvg.png" alt="project-screenshot" width="300" height="500/"> 
<img src="https://res.cloudinary.com/dfhcmgt4j/image/upload/v1751824923/Screenshot_1751824315_xu77qk.png" alt="project-screenshot" width="300" height="500/">


