import express from "express";

const router = express.Router();
router.use(express.json());

router.get("/proxreturner", async (req, res) => {
    const bodyData = req.body;
    const targetURL = bodyData.url;

    const response = await fetch(targetURL, {
        method: "GET"
    });

    const html = await response.text();
    res.status(200).send(html);
})

router.post("/sendrequest", async (req, res) => {
    const bodyData = req.body;

    // PARAMATERS
    const targetURL = bodyData.url;
    const method = bodyData.method;
    const headers = bodyData.headers;
    const data = bodyData.data;
    const typeOfData = bodyData.type;

    var response;

    if (typeOfData == "json") {
        headers["Content-Type"] = "application/json"
        response = await fetch(targetURL, {
            method: method,
            headers: headers,
            body: JSON.stringify(data)
        })
    } else {
        response = await fetch(targetURL, {
            method: method,
            headers: headers,
            body: JSON.stringify(data)
        })

    }

    res.status(response.status).send(response.body);

})

export default router