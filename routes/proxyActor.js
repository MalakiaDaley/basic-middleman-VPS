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
    const targetURL = body.url;
    const method = body.method;
    const headers = body.headers;
    const data = body.data;
})

export default router