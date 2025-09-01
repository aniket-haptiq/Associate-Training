import { useState } from 'react';
import { searchNews } from '../services/newsService';
import NewsCard from '../components/NewsCard';


function Search() {
const [query, setQuery] = useState('');
const [articles, setArticles] = useState([]);


const handleSearch = async (e) => {
e.preventDefault();
const data = await searchNews(query);
setArticles(data);
};


return (
<div className="p-6">
<form onSubmit={handleSearch} className="mb-4">
<input
value={query}
onChange={e => setQuery(e.target.value)}
placeholder="Search news..."
className="border p-2 w-2/3"
/>
<button className="bg-blue-600 text-white px-4 py-2 ml-2">Search</button>
</form>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
{articles.map((a, i) => (
<NewsCard key={i} article={a} />
))}
</div>
</div>
);
}


export default Search;