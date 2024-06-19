import PropTypes from 'prop-types';

const BookmarkCard = ({ article }) => {
  const statusBadgeColour =
    article.status == 'QUEUED' ? 'badge-warning' : article.status == 'DONE' ? 'badge-success' : 'badge-error';

  return (
    <div key={article.id} className="flex flex-wrap gap-4 rounded-lg bg-base-100 p-4 shadow-xl">
      <div className="flex w-full flex-col items-center sm:flex-row">
        {article.image && (
          <figure className="mb-4 sm:mb-0 sm:mr-4 sm:shrink-0 sm:basis-[300px]">
            <img className="rounded-lg" src={article.image} alt="og:image" />
          </figure>
        )}
        <div className="flex flex-col gap-2 text-sm">
          <h2 className="text-bold text-xl">{article.title}</h2>
          <p>작성자: {article.author}</p>
          <div className="flex flex-wrap items-center gap-2">
            <span>키워드: </span>
            {article.keywords &&
              article.keywords
                .filter(keyword => keyword != '')
                .map(keyword => (
                  <span
                    key={keyword.index}
                    className="badge badge-sm bg-sky-200 text-xs dark:bg-lime-700 dark:text-white"
                  >
                    {keyword}
                  </span>
                ))}
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <span>태그: </span>
            {article.tags &&
              article.tags.map(tag => (
                <span key={tag.index} className="badge badge-sm bg-lime-300 text-xs dark:bg-lime-700 dark:text-white">
                  {tag}
                </span>
              ))}
          </div>
          <p>
            링크: <a href={article.url}>{article.url}</a>
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-100">
        <input type="checkbox" />
        <div className="collapse-title">
          <span className="text-bold text-xl">Summary </span>
          <span className={`badge ${statusBadgeColour} badge-sm`}>{article.status}</span>
        </div>
        <div className="collapse-content">
          <p className="text-sm">{article.text}</p>
        </div>
      </div>
    </div>
  );
};

BookmarkCard.propTypes = {
  article: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
    keywords: PropTypes.arrayOf(PropTypes.string),
    tags: PropTypes.arrayOf(PropTypes.string),
    url: PropTypes.string,
    text: PropTypes.string,
    status: PropTypes.string,
  }).isRequired,
};

export default BookmarkCard;
