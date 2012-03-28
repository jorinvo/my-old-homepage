task :default do
  Dir.chdir 'prod'
  sh "git add ."
  sh "git commit -am #{ENV['MSG']}"
  sh "git push origin master"
end
