var tabResult = runInNewTab(
    "https://en.wikipedia.org/wiki/Main_Page",
    function () {
        click('#searchInput', { method: "by_query_selector" })
        type("steve jobs", '#searchInput', { method: 'by_query_selector' })
        submit('#searchInput', { expectReload: true })
        var tableTxt = readAll(".mw-parser-output > p")
        tableTxt = JSON.parse(tableTxt).join("\n")
        return tableTxt
    }
)

download("wikipedia.txt", tabResult, "text")

var title = runInNewTab(
    "https://www.google.com",
    function () {
        click('.gLFyf.gsfi', { method: 'by_query_selector'})
        type("ubuntu", '.gLFyf.gsfi',{method: 'by_query_selector'})
        submit()
        return getAttribute("title", '[title]', { method: "by_query_selector_all" })
    }
)

download("title.txt", title, "text")
