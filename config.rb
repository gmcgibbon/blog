###
# Page options, layouts, aliases and proxies
###

set :layout, 'layouts/application'

# Per-page layout changes:
#
# With no layout
page '/*.xml',  layout: false
page '/*.json', layout: false
page '/*.txt',  layout: false

# With alternative layout
# page "/path/to/file.html", layout: :otherlayout

# Proxy pages (http://middlemanapp.com/basics/dynamic-pages/)
# proxy "/this-page-has-no-template.html", "/template-file.html", locals: {
#  which_fake_page: "Rendering a fake page with a local variable" }

ignore '*.ts'

###
# Helpers
###

activate :blog do |blog|
  # This will add a prefix to all links, template references and source paths
  # blog.prefix = "blog"

  blog.permalink = 'articles/{year}-{month}-{day}-{title}.html'
  # Matcher for blog source files
  blog.sources = 'articles/{year}-{month}-{day}-{title}'
  # blog.taglink = "tags/{tag}.html"
  blog.layout = 'layouts/application'
  # blog.summary_separator = /(READMORE)/
  # blog.summary_length = 250
  # blog.year_link = "{year}.html"
  # blog.month_link = "{year}/{month}.html"
  # blog.day_link = "{year}/{month}/{day}.html"
  # blog.default_extension = ".markdown"

  # blog.tag_template      = 'tag.html'
  # blog.calendar_template = 'calendar.html'

  # Enable pagination
  # blog.paginate = true
  # blog.per_page = 10
  # blog.page_link = "page/{num}"
end

# Reload the browser automatically whenever files change
configure :development do
  activate :livereload, host: 'localhost'
  activate :external_pipeline,
    name:    :webpack,
    command: 'npm run webpack -- --watch',
    source:  '.webpack-cache',
    latency: 1
end

# Methods defined in the helpers block are available in templates
# helpers do
#   def some_helper
#     "Helping"
#   end
# end

# Build-specific configuration
configure :build do
  # Minify CSS on build
  # activate :minify_css

  # Minify Javascript on build
  # activate :minify_javascript

  activate :external_pipeline,
    name:    :webpack,
    command: 'npm run webpack -- --bail',
    source:  '.webpack-cache',
    latency: 1
end

# HACK: Remove generated article HTML
after_build do
  print 'Cleaning up articles...'
  `rm -rf ./build/articles`
  puts ' Done!'
end

ENV.tap do |env|
  env['NODE_ENV'] = if build?
    'build'
  else
    'development'
  end
end
