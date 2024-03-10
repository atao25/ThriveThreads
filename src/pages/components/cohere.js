const { CohereClient } = require("cohere-ai");

//const API_KEY = process.env.REACT_APP_COHERE_API_KEY;
const cohere = new CohereClient({
    token: "HmtzmCr1IAQ0Kkc90cY0vIkdXKmG6LRK6RBXESCn",
});

const texts = ["I totally get where you’re coming from. Balancing school, work, and self-care can be a challenge. One strategy that has helped me is incorporating mindfulness meditation into my daily routine. I have been incorporating shinrin-yoku, which is forest bathing. I take a 10 minute walk in the morning to focus on my breath and clear my mind helps me set a positive tone for the rest of the day.",
"我听到了！找到这种平衡至关重要。我一直在做的一种自我护理实践是阿育吠陀。我开始将阿育吠陀原则融入我的生活方式，比如遵循日常生活，包括抽油和刮舌等活动。此外，关注我的能量也帮助我根据自己的独特需求调整自我护理实践。这一切都是为了找到与你产生共鸣的东西，阿育吠陀对我来说改变了游戏规则。",
"Dans mon emploi du temps chargé, je donne la priorité aux soins personnels avec des pauses stratégiques et une activité physique régulière. Dire « non » lorsque cela est nécessaire et me concentrer sur l’essentiel me permet de rester équilibré. Il s'agit de choix intentionnels pour une routine durable."];


export const promptChat = async (prompt) => {
    const response = await cohere.chat({
        message: "Limit to 100 words: " + prompt
    })
    return response.text;
}

// rerank function (cohere.rerank) to sort posts by relevance to query
export const promptRerank = async (prompt) => {
    
    const response = await cohere.rerank({
        model: "rerank-multilingual-v2.0",
        documents: [
            { text: texts[0]},
            { text: texts[1]},
            { text: texts[2]}],
        query: prompt,
        returnDocuments: true,
        topN: 3, 
    });
    console.log(response.results[0].document.text);
    return [response.results[0].document.text, response.results[1].document.text, response.results[2].document.text];
}