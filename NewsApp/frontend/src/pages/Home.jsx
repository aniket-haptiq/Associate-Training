import { useEffect, useState } from 'react';
import { getTopNews } from '../services/newsService';
import NewsCard from '../components/NewsCard';


function Home() {
const [articles, setArticles] = useState([]);


useEffect(() => {
(async () => {
const data = await getTopNews();
setArticles(data);
})();
}, []);


return (
<div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
{articles.map((a, i) => (
<NewsCard key={i} article={a} />
))}
</div>
);
}


export default Home;