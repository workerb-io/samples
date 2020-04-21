open("https://github.com/" + args[0] + "/issues")
click('/html/body/div[4]/div/main/div[2]/div/div/div[1]/div[2]/a/span[1]', { method: 'by_xpath', expectReload: true })
type(args[1], {path: '#issue_title', method: 'by_query_selector'})