const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors')

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors())

// Connect  to MongoDB
mongoose.connect('mongodb://localhost:27017/my-database', { useNewUrlParser: true, useUnifiedTopology: true });

// Create a model (e.g., for articles)
const Article = mongoose.model('Article', {
  title: String,
  content: String,
});

// Routes

//Getting the articles
app.get('/articles', async (req, res) => {
  const articles = await Article.find();
  res.json(articles);
});


//Posting the articles
app.post('/articles', async (req, res) => {
  const { title, content } = req.body;
  const article = new Article({ title, content });
  await article.save();
  res.json(article);
});

// Update an article by ID
app.put('/articles/:id', async (req, res) => {
    const { title, content } = req.body;
    try {
      const updatedArticle = await Article.findByIdAndUpdate(
        req.params.id,
        { title, content },
        { new: true }
      );
      res.json(updatedArticle);
    } catch (error) {
      res.status(500).json({ message: 'Error updating article' });
    }
  });
  
  // Delete an article by ID
app.delete('/articles/:id', async (req, res) => {
    try {
      await Article.findByIdAndDelete(req.params.id);
      res.json({ message: 'Article deleted' });
    } catch (error) {
      res.status(500).json({ message: 'Error deleting article' });
    }
  });

  
  // Get paginated articles
app.get('/articles', async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
  
    try {
      const articles = await Article.find()
        .skip((page - 1) * limit)
        .limit(limit);
      res.json(articles);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching articles' });
    }
  });
  
// Search for articles by title or content
app.get('/articles/search', async (req, res) => {
    const searchQuery = req.query.q;
  
    try {
      const articles = await Article.find({
        $or: [
          { title: { $regex: searchQuery, $options: 'i' } },
          { content: { $regex: searchQuery, $options: 'i' } },
        ],
      });
      res.json(articles);
    } catch (error) {
      res.status(500).json({ message: 'Error searching for articles' });
    }
  });
  


// Catch-all route for undefined routes
app.all('*', (req, res) => {
  res.status(404).json({ message: 'Not Found' });
});

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
