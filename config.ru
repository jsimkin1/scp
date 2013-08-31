require 'rack/contrib/try_static'
require 'rack/contrib/not_found'
 
use Rack::TryStatic,
  :root => "public",
  :urls => %w[/],
  :try  => ['index.html', '/index.html']
 
run Rack::NotFound.new('public/extra_404.html')
