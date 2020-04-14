open("https://github.com/manojsinghnegiwd")

var links = [
    "Overview",
    "Repositories",
    "Projects",
    "Packages",
    "Stars",
    "Followers",
    "Following"
]

links.forEach(function (link) {
    click(link, {
        method: "by_regex",
        expectReload: true
    })
})
