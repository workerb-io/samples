if (args[0]) {
    open("https://github.com/" + args[0])
} else {
    open("https://github.com/")
    click('/html/body/div[1]/header/div[7]/details/summary', { method: 'by_xpath'})
    click('Your profile', {})
}