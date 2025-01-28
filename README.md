# Report Writing Application

Experimentation with huggingface models and node.js.
This project is a web-based application designed for report writing, integrating AI functionalities to enhance the writing experience. It utilizes Hugging Face models to provide suggestions and corrections similar to Grammarly.

## Features

- **Text Editor**: A user-friendly interface for writing reports.
- **AI Integration**: Real-time suggestions and corrections powered by Hugging Face models.
- **Sidebar Tools**: Additional functionalities for saving and exporting reports.
- **Responsive Design**: Optimized for various screen sizes.

## Project Structure

```
report-writing-app
├── public
│   ├── index.html        # Main HTML document
│   └── styles.css       # Styles for the application
├── src
│   ├── components
│   │   ├── Editor.tsx   # Text editor component
│   │   ├── Header.tsx   # Header component
│   │   └── Sidebar.tsx  # Sidebar component
│   ├── hooks
│   │   └── useAIModel.ts # Custom hook for AI model interaction
│   ├── services
│   │   └── huggingFaceAPI.ts # API interaction functions
│   ├── App.tsx          # Main application component
│   └── index.tsx        # Entry point of the application
├── package.json          # npm configuration
├── tsconfig.json         # TypeScript configuration
└── README.md             # Project documentation
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd report-writing-app
   ```
3. Install dependencies:
   ```
   npm install
   ```

## Usage

1. Start the application:
   ```
   npm start
   ```
2. Open your browser and go to `http://localhost:8080` to access the application.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License.
