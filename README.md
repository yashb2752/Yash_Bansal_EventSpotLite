# Your Project Name

## Setup Instructions

**Note**: This project is configured to use Yarn as the package manager. If you prefer to use npm, you'll need to remove the "preinstall" script from the `package.json` file before proceeding with the npm commands.

If you've cloned this Vite project from version control, follow these steps to set it up on your new system:

1. **Install Node.js**: Ensure you have Node.js installed on your system. You can download it from [nodejs.org](https://nodejs.org/).

2. **Clone the repository**: If you haven't already, clone the repository to your local machine:
   ```
   git clone <repository-url>
   cd <project-directory>
   ```

3. **Install dependencies**: Run one of the following commands to install the project dependencies:
   
   Using Yarn (recommended):
   ```
   yarn install
   ```
   
   Using npm (requires removing the "preinstall" script from package.json):
   ```
   npm install
   ```

4. **Set up environment variables**: If the project uses environment variables, create a `.env` file in the root directory and add the necessary variables. You can use `.env.example` as a template if it exists.

5. **Start the development server**: Run one of the following commands to start the Vite development server:
   
   Using Yarn:
   ```
   yarn dev
   ```
   
   Using npm:
   ```
   npm run dev
   ```

6. **Build for production**: When you're ready to build for production, use one of these commands:
   
   Using Yarn:
   ```
   yarn build
   ```
   
   Using npm:
   ```
   npm run build
   ```

7. **Preview the production build**: To preview the production build locally, run:
   
   Using Yarn:
   ```
   yarn preview
   ```
   
   Using npm:
   ```
   npm run preview
   ```

