import express from 'express';
import OpenAI from 'openai';

const openai = new OpenAI();

const app = express();
const port = 3001;

app.use(express.json());

app.listen(port, () => console.log(`Server running on port ${port}`));

app.get('/api', (req, res) => res.send('Hello from Server'));

app.post('/api/completion', async (req, res) => {
    const completion = await openai.chat.completions.create({
        messages: [{ role: "system", content: req.body.prompt }],
        model: "gpt-3.5-turbo",
    });
    res.send(completion.choices[0]);
});

