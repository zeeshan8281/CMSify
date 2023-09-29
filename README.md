## CMSify

# Headless CMS with Node.js and MongoDB :computer:

A simple headless CMS (Content Management System) built with Node.js, Express, and MongoDB. This project provides basic API endpoints for managing articles, including CRUD operations, pagination, and search functionality.

## Features :star2:

- :page_with_curl: Retrieve a list of articles
- :heavy_plus_sign: Create new articles
- :pencil2: Update existing articles
- :x: Delete articles
- :arrow_forward: Pagination support
- :mag_right: Search articles by title or content

## Prerequisites :rocket:

Before getting started, make sure you have the following prerequisites installed:

- Node.js and npm
- MongoDB installed locally or MongoDB Atlas account

## Setup :gear:

1. Clone the repository:

   ```bash
   git clone https://github.com/zeeshan8281/CMSify.git
   ```

2. Navigate to the project directory:

   ```bash
   cd headless-cms
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Configure MongoDB connection:

   - Update the MongoDB connection URL in `app.js`:

     ```javascript
     mongoose.connect('mongodb://localhost:27017/my-database', { useNewUrlParser: true, useUnifiedTopology: true });
     ```

5. Start the server:

   ```bash
   node app.js
   ```

   The server will start on port 5000 by default. You can change the port by setting the `PORT` environment variable.

## Usage :hammer_and_wrench:

- **GET /articles:** Retrieve a list of articles.
- **POST /articles:** Create a new article.
- **PUT /articles/:id:** Update an article by ID.
- **DELETE /articles/:id:** Delete an article by ID.
- **GET /articles/search?q=search-term:** Search for articles by title or content.
- **GET /articles?page=page-number&limit=page-size:** Retrieve paginated articles.

## Error Handling :warning:

- Proper error handling with informative error messages and status codes.

## Contributing :handshake:

Contributions are welcome! Please feel free to open issues or submit pull requests to improve this project.

## License :scroll:

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```
