let ArticleMeta = {
	bindings: {
		article: '='
	},
	transclude: true,
	link: function(){
		consolelog('link');
	},
	templateUrl: 'components/article-helpers/article-meta.html'
};

export default ArticleMeta;