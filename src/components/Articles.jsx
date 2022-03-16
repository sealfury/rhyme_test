import { useAppCtx } from '../context/context'


const Articles = () => {
  const { isLoading, articles, removeArticle, viewArticle } = useAppCtx()

  if (isLoading) {
    return <div>Loading Loading</div>
  }

  return (
    <section>
      {articles.map((article) => {
        const { _id: id, author, title, description } = article

        return (
          <article key={id}>
            <a href={`/articles/${id}`} onClick={() => viewArticle(id)}>
              <h3>{title}</h3>
            </a>
            <h4>{author}</h4>
            <p>{description}</p>
            <button
              type="button"
              className="btn btn-danger"
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
