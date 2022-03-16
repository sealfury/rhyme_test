import { Action } from './actions'

const reducer = (state, action) => {
  switch (action.type) {
    case Action.SET_LOADING:
      return { ...state, isLoading: true }
    case Action.SET_ARTICLES:
      return {
        ...state,
        isLoading: false,
        articles: action.payload.articles,
      }
    case Action.REMOVE_ARTICLE:
      return {
        ...state,
        articles: state.articles.filter(
          (article) => article.id !== action.payload,
        ),
      }
    case Action.VIEW_ARTICLE:
      return {
        ...state,
        article: state.articles.filter(
          (article) => article.id === action.payload,
        ),
      }
    default:
      throw new Error(`No action type matching ${action.type}!`)
  }
}

export default reducer
