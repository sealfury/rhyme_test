import { useAppCtx } from '../context/context'

const Articles = () => {
  const { isLoading, articles, removeArticle, viewArticle } = useAppCtx()

  if (isLoading) {
    return <div>Loading Loading</div>
  }

  return (
    <section className="articles-section">
      {articles.map((article) => {
        const { _id: id, author, title, description } = article

        return (
          <article key={id} className="article">
            <a href={`/articles/${id}`} onClick={() => viewArticle(id)}>
              <h3 className="title">{title}</h3>
            </a>
            <h4 className="author">{author}</h4>
            <p className="description">{description}</p>
            <button
              type="button"
              className="remove-btn"
              onClick={() => removeArticle(id)}
            >
              Remove This Article
            </button>
          </article>
        )
      })}
    </section>
  )
}

export default Articles
