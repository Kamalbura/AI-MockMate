# AI-MockMate Application - Detailed Documentation

## How to Execute the Application

1. **Prerequisites**:
   - Node.js (v16 or higher)
   - npm or yarn
   - Google Gemini API key
   - Clerk account and API keys
   - PostgreSQL database (Neon DB)

2. **Environment Setup**:
   - Clone the repository: `git clone https://github.com/Chetan309/AI-MockMate.git`
   - Install dependencies: `npm install` or `yarn install`
   - Create a `.env.local` file in the root directory with the following variables:
     ```
     NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
     CLERK_SECRET_KEY=your_clerk_secret_key
     NEXT_PUBLIC_GEMINI_API_KEY=your_gemini_api_key
     NEXT_PUBLIC_DRIZZLE_DB_URL=your_neondb_connection_string
     NEXT_PUBLIC_QUESTION_NOTE="Your note text for the interview questions"
     NEXT_PUBLIC_INTERVIEW_QUESTION_COUNT=5  # Number of questions to generate
     NEXT_PUBLIC_INFORMATION="Information for interview page"
     ```

3. **Database Setup**:
   - Run `npm run db:push` to push the schema to your database
   - (Optional) Run `npm run db:studio` to open Drizzle Studio for database management

4. **Running the Application**:
   - Development mode: `npm run dev`
   - Production build: `npm run build` followed by `npm start`
   - Access the application at `http://localhost:3000`

## File Structure and Responsibilities

### Root Configuration Files

- **package.json** - Contains project dependencies and scripts
- **next.config.mjs** - Next.js configuration
- **tailwind.config.js** - TailwindCSS configuration
- **postcss.config.mjs** - PostCSS configuration
- **jsconfig.json** - JavaScript configuration and path aliases
- **drizzle.config.js** - Database ORM configuration
- **middleware.js** - Clerk authentication middleware for protected routes
- **components.json** - shadcn/ui component configuration

### Core Directories

#### `/app` - Next.js application with App Router structure

- **layout.js** - Root layout wrapped with ClerkProvider
- **page.js** - Homepage component importing Header, HeroSection, HomeStats, etc.
- **globals.css** - Global CSS including TailwindCSS setup

#### `/app/dashboard` - Main authenticated area

- **layout.jsx** - Dashboard layout with Header and Toaster
- **page.jsx** - Dashboard page with AddNewInterview and InterviewHistory components

#### `/app/dashboard/_components` - Dashboard components

- **AddNewInterview.jsx** - Form to create new interviews using Gemini AI
- **InterviewHistory.jsx** - Displays previous interviews
- **InterviewCard.jsx** - Card component for each interview with actions
- **Header.jsx** - Navigation header with user authentication status
- **Footer.jsx** - Application footer
- **HeroSection.jsx** - Hero section for landing page
- **HomeStats.jsx** - How it works section
- **AIpower.jsx** - Technical stack information

#### `/app/dashboard/interview/[interviewId]` - Interview routes

- **page.jsx** - Interview setup page with job details and webcam
- **start/page.jsx** - Active interview page with questions and recording
- **start/_components/QuestionSection.jsx** - Displays interview questions
- **start/_components/RecordQuestionSection.jsx** - Webcam and speech-to-text recording
- **feedback/page.jsx** - Interview feedback and results page

#### `/app/(auth)` - Authentication routes

- **sign-in/[[...sign-in]]/page.jsx** - Clerk sign-in page
- **sign-up/[[...sign-up]]/page.jsx** - Clerk sign-up page

#### `/utils` - Utility functions and configurations

- **db.js** - Database connection using Neon DB and Drizzle ORM
- **schema.js** - Database schema with MockInterview and UserAnswer tables
- **GeminiAI.js** - Integration with Google's Gemini AI for generating questions

#### `/components/ui` - UI Components

- **button.jsx** - Button component
- **dialog.jsx** - Dialog/modal component
- **input.jsx** - Input component
- **textarea.jsx** - Textarea component
- **collapsible.jsx** - Collapsible component

#### `/lib` - Library functions

- **utils.js** - Utility functions for CSS class merging

## Application Workflow

1. **User Registration/Login**:
   - Users register or log in using Clerk authentication
   - Protected routes are managed by middleware.js

2. **Dashboard**:
   - Users see their profile and can create new interviews or view previous ones
   - AddNewInterview.jsx handles interview creation

3. **Interview Creation**:
   - User inputs job details (position, description, experience)
   - Gemini AI generates relevant interview questions via GeminiAI.js
   - Questions and metadata are stored in the database (MockInterview table)

4. **Interview Process**:
   - User starts the interview via the [interviewId]/page.jsx
   - The start/page.jsx manages the question flow
   - QuestionSection.jsx displays the current question
   - RecordQuestionSection.jsx handles webcam and speech recording
   - User answers are recorded and processed by Gemini AI for feedback

5. **Feedback Review**:
   - After completing the interview, feedback/page.jsx displays results
   - Each answer is shown with AI-generated feedback and ratings
   - Feedback is stored in the UserAnswer table

## Key Technologies and Their Roles

1. **Next.js** - Framework for server-side rendering and routing
2. **React** - UI component library
3. **Clerk** - Authentication and user management
4. **Gemini AI** - Question generation and answer feedback
5. **Drizzle ORM** - Database operations
6. **Neon DB** - PostgreSQL database
7. **TailwindCSS** - Styling
8. **react-hook-speech-to-text** - Speech recognition for interview answers
9. **react-webcam** - Webcam integration