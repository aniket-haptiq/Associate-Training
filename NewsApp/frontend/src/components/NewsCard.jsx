function NewsCard({ article, onSave }) {
return (
<div className="bg-white shadow-md rounded-lg p-4 flex flex-col">
{article.urlToImage && (
<img src={article.urlToImage} alt="news" className="rounded-lg mb-2" />
)}
<h2 className="text-lg font-semibold mb-1">{article.title}</h2>
<p className="text-gray-600 flex-1">{article.description}</p>
<div className="flex justify-between mt-2">
<a
href={article.url}
target="_blank"
rel="noopener noreferrer"
className="text-blue-600"
>
Read More
</a>
{onSave && (
<button
className="text-sm bg-blue-500 text-white px-2 py-1 rounded"
onClick={() => onSave(article)}
>
Save
</button>
)}
</div>
</div>
);
}


export default NewsCard;