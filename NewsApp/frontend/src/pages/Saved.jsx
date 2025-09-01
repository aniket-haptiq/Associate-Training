import { useEffect, useState } from 'react';
import { getBookmarks } from '../services/bookmarkService';
import NewsCard from '../components/NewsCard';


function Saved() {
const [bookmarks, setBookmarks] = useState([]);


useEffect(() => {
(async () => {
const data = await getBookmarks();
setBookmarks(data);
})();
}, []);


return (
<div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
{bookmarks.map((b, i) => (
<NewsCard key={i} article={b} />
))}
</div>
);
}


export default Saved;