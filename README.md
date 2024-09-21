# NEET Mock Test App

This is a web-based mock test application designed to help students prepare for the NEET exam by taking mock tests, tracking their performance, and providing a streamlined interface for students and administrators.

## Features
- **Student Registration & Authentication**: Users can sign up and log in using Firebase authentication.
- **Teachers Panel**: Admins can create test papers and assign test dates and times.
- **Mock Test Creation**: Random test papers generated weekly with the ability to add custom questions.
- **Performance Dashboard**: Students can track their test results and performance over time.
- **Firestore Integration**: All data, such as user profiles, test papers, and results, are stored in Firebase Firestore.

## Tech Stack
- **Frontend**: Next.js (React-based framework)
- **Styling**: Tailwind CSS for responsive and modern UI
- **Backend**: Firebase (Firestore, Authentication)
- **Deployment**: Netlify (https://krack.netlify.app/)

## Getting Started

### Prerequisites
Ensure you have the following installed:
- Node.js
- npm

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/itsfsl/krack.git
   ```

2. Navigate to the project directory:

   ```bash
   cd krack
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Set up your Firebase project:
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).
   - Enable **Firestore** and **Authentication** (Email/Password).
   - Obtain your Firebase configuration and add it to a `.env.local` file at the root of your project:

     ```bash
     NEXT_PUBLIC_APIKEY=your-api-key
     NEXT_PUBLIC_AUTHDOMAIN=your-auth-domain
     NEXT_PUBLIC_PROJECTID=your-project-id
     NEXT_PUBLIC_STORAGEBUCKET=your-storage-bucket
     NEXT_PUBLIC_MESSAGINGSENDERID=your-messaging-sender-id
     NEXT_PUBLIC_APPID=your-app-id
     ```

5. Start the development server:

   ```bash
   npm run dev
   ```

6. Visit `http://localhost:3000` in your browser to access the app.

### Usage

1. **User Registration**: 
   - Upon first login, students will be redirected to fill out additional details such as name, age, and date of birth.
   
2. **Taking Mock Tests**: 
   - Students can access assigned mock tests from their dashboard, complete the tests, and view their results.

3. **Teachers Features**: 
   - Teachers can log in, create test papers, schedule tests, and review student performance data.

### Project Structure

```
/components       # Reusable UI components
/context          # Firebase authentication and data context
/pages            # Application pages
   /login         # Login & registration page
   /dashboard     # Student dashboard
   /registration  # Detailed student's registration form
/firebase         # Firebase config and Firestore setup
```

### Roadmap

- [ ] Add timer functionality for mock tests
- [ ] Implement performance analytics for students
- [ ] Add notification system for upcoming tests

### Contributing

Feel free to submit pull requests or report issues. For major changes, please open an issue first to discuss what you would like to change.

### License

This project is open-source and available under the MIT License.

---