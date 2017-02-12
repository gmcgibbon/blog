blog.articles.each do |article|
  json.article do
    json.title article.title
    json.tags article.tags
    json.url article.url
    json.published_at article.date.to_time
    json.updated_at File.mtime(article.source_file).to_time
    json.author 'Gannon McGibbon'
    json.summary article.summary
    json.body article.body
  end
end
