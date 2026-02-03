# Wanderlust

A full-stack web application for sharing and discovering travel listings with user authentication, reviews, and image uploads.

## Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB with Mongoose ODM
- **Frontend:** EJS templating engine
- **Styling:** CSS
- **File Storage:** Cloudinary (cloud image hosting)
- **Authentication:** Custom middleware-based session management
- **Validation:** Custom validation middleware
- **Error Handling:** Custom error wrapper utilities

## Project Structure

```
MiniProject/
├── controllers/          # Route logic handlers
│   ├── listing.js
│   ├── reviews.js
│   └── users.js
├── models/              # Mongoose schemas
│   ├── listing.js
│   ├── review.js
│   └── user.js
├── routes/              # Express route definitions
│   ├── listing.js
│   ├── review.js
│   └── user.js
├── views/               # EJS templates
│   ├── layouts/
│   ├── includes/
│   ├── listings/
│   └── users/
├── public/              # Static assets
│   ├── css/
│   └── js/
├── utils/               # Helper functions
│   ├── ExpressError.js
│   └── wrapAsync.js
├── init/                # Database initialization
│   ├── index.js
│   └── data.js
├── middleware.js        # Custom middleware
├── cloudConfig.js       # Cloudinary configuration
├── app.js              # Main application file
└── package.json        # Dependencies
```

## Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd MiniProject
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the project root:
   ```
   MONGODB_URI=mongodb://localhost:27017
   CLOUDINARY_NAME=your_cloudinary_name
   CLOUDINARY_API_KEY=your_api_key
   CLOUDINARY_API_SECRET=your_api_secret
   SESSION_SECRET=your_session_secret
   ```

4. **Initialize the database (optional):**
   ```bash
   node init/index.js
   ```
   This will populate the database with sample listing data.

## Running the Application

Start the development server:
```bash
npm start
```

The app will be available at `http://localhost:3000`

## Features

- **User Authentication:** Sign up, login, and session management
- **Listings:** Create, view, edit, and delete travel listings
- **Reviews:** Add and view reviews for listings
- **Image Uploads:** Upload listing images to Cloudinary
- **Validation:** Form and data validation for listings and reviews
- **Error Handling:** Custom error pages and error handling middleware
- **Responsive Design:** CSS styling for a clean user interface

## API Routes

### Listings
- `GET /listings` - View all listings
- `POST /listings` - Create a new listing
- `GET /listings/new` - Show new listing form
- `GET /listings/:id` - View listing details
- `PUT /listings/:id` - Update a listing
- `DELETE /listings/:id` - Delete a listing
- `GET /listings/:id/edit` - Show edit form

### Reviews
- `POST /listings/:id/reviews` - Add a review to a listing
- `DELETE /listings/:id/reviews/:reviewId` - Delete a review

### Users
- `GET /signup` - Show signup form
- `POST /signup` - Create new user account
- `GET /login` - Show login form
- `POST /login` - Authenticate user
- `GET /logout` - Logout user

## Key Middleware

- **isLoggedIn:** Ensures user is authenticated
- **isOwner:** Verifies user is the listing owner
- **validateListing:** Validates listing data
- **wrapAsync:** Wraps async route handlers for error catching

## Environment Variables

| Variable | Description |
|----------|-------------|
| `MONGODB_URI` | MongoDB connection string |
| `CLOUDINARY_NAME` | Cloudinary cloud name |
| `CLOUDINARY_API_KEY` | Cloudinary API key |
| `CLOUDINARY_API_SECRET` | Cloudinary API secret |
| `SESSION_SECRET` | Secret key for session management |

## Notes

- Make sure MongoDB is running before starting the application
- Cloudinary account is required for image uploads
- Session data is managed through Express middleware
- All sensitive data should be stored in `.env` and never committed to version control

## License

MIT
