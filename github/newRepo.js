open("https://github.com/")
click('/html/body/div[1]/header/div[6]/details/summary', { method: 'by_xpath'})
click('New repository', { expectReload: true })
click('#repository_name', { method: 'by_query_selector'})

var repoName = args[0]

if (!repoName) {
    repoName = prompt("provide a valid name for your new repository")
}

type(repoName, {path: '#repository_name', method: 'by_query_selector'})
click('Create repository', {})
notify("Repository created", "success", 3000)
