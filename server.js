
var express = require("express")
var cheerio = require("cheerio")
var morgan = require("morgan")
var cloudscraper = require("cloudscraper")

const app = express()
app.use(morgan("common")) // :method :url :status :response-time ms - :res[content-length]

app.get("/name/:id", (req, res) => {
  var name = req.params.id

  cloudscraper.get("https://namemc.com/name/" + name, function (err, resp, body) {
    if (err) {
      return res.status(500).send({ error: err })
    }

    var json = []

    var $ = cheerio.load(body)
    $(".account-history").each(function (i, e) {
      var hist = $(this)
      var curr = {}

      curr.history = []
      curr.uuid = hist.find(".uuid").text()

      hist.find(".row").each(function (i, e) {
        var x = $(this)
        var username = x.find("a").text()
        var date = x.find("time").attr("datetime")
        var row = { name: username }
        if (date != null) {
          row.date = date
        }
        curr.history.push(row)
      })
      json.push(curr)
    })

    if (json.length == 0) {
      return res.status(400).send({ error: "Name has never been used"})
    }
    return res.status(200).send(json)
  })
})

app.listen(3000, () => {
  console.log("Web server started on port 3000")
})
