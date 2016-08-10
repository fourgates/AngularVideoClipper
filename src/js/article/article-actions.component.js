class ArticleActionsCtrl {
  constructor(User) {
    'ngInject';
    if(User.current){
    	this.canModify = (User.current.username == this.article.author.username);
    }
  }
}

let ArticleActions = {
  bindings: {
    article: '='
  },
  controller: ArticleActionsCtrl,
  templateUrl: 'article/article-actions.html'
};

export default ArticleActions;