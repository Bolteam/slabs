# Deploy to GHPAGES
puts "## Start gh publish"
puts "Commit message:"
message = gets.chomp

puts "## Deploying to Github Pages.."
system "JEKYLL_ENV=production jekyll build"

puts "## Copying files ..."
system "cp -rf _gh_pages/ deploy/"

Dir.chdir("deploy") do

  system "ls -la"
  message ||= "Docs updated at #{Time.now.utc}"
  puts "## Commiting: #{message}"
  system "git checkout gh-pages"
  system "git add ."
  system "git add -u ."
  system "git commit -m \"#{message}\""

  puts "## Pushing generated website"
  system "git push origin master:gh-pages --force"

  puts "## Deploy Complete!"

end
