task :default do
  Dir.chdir 'prod'
  sh "git add ."
  sh "git commit -am '#{ENV['m']}'"
  sh "git push origin master"
end
