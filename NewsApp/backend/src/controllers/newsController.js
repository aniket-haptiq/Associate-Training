import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

export const getTopNews = async (req, res) => {
  try {
    const { data } = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NEWS_API_KEY}`
    );
    res.json(data.articles);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const searchNews = async (req, res) => {
  try {
    const q = req.query.q;
    const { data } = await axios.get(
      `https://newsapi.org/v2/everything?q=${q}&apiKey=${process.env.NEWS_API_KEY}`
    );
    res.json(data.articles);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
