'http://gannon.io/'.tap do |site_url|
  json.title    'Gannon\'s Blog'
  json.subtitle 'Hack The Planet!'
  json.id URI.join(site_url, blog.options.prefix.to_s)
  json.link href: URI.join(site_url, blog.options.prefix.to_s)
  json.link href: URI.join(site_url, current_page.path), rel: :self
  json.updated(blog.articles.first.date.to_time.iso8601) unless blog.articles.empty?
  json.author { json.name 'Gannon McGibbon' }

  blog.articles.each do |article|
    json.entry do
      json.title article.title
      json.link rel: :alternate, href: URI.join(site_url, article.url)
      json.id URI.join(site_url, article.url)
      json.published article.date.to_time.iso8601
      json.updated File.mtime(article.source_file).iso8601
      json.author { json.name 'Gannon McGibbon' }
      json.summary article.summary
      json.content article.body
    end
  end
end
