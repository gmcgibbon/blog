json.name    author_name
json.summary author_summary
json.social do
  social_env.each do |key, value|
    json.set! key, value
  end
end
