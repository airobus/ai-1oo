import { Category , NewlyAddedItem} from '../types';

export const categories: Category[] = [
  {
    title: "AI Code Generation",
    icon: "💻",
    items: [
      { name: "bolt.new",  link: "https://bolt.new/" , isNew: true},
      { name: "V0dev",   link: "https://v0.dev/chat" , isNew: true},
      { name: "Cursor",  link: "https://cursor.sh/" , isNew: true},
      { name: "Codex",   link: "https://github.com/facebook/codemod" },
      { name: "GitHub Copilot", link: "https://github.com/features/copilot" },
      { name: "Kodezi",  link: "https://kodezi.com/" },
    ]
  },
  {
    title: "Vector Databases",
    icon: "🗄️",
    items: [
      { name: "Pinecone", link: "https://www.pinecone.io/" },
      { name: "MongoDB Atlas", link: "https://www.mongodb.com/atlas/database" },
      { name: "Milvus", link: "https://milvus.io/" },
      { name: "Chroma", link: "https://www.trychroma.com/" , isNew: true},
      { name: "Weaviate", link: "https://weaviate.io/" },
      { name: "DeepLake", link: "https://www.activeloop.ai/" },
      { name: "Qdrant", link: "https://qdrant.tech/" },
      { name: "Elasticsearch", link: "https://www.elastic.co/" },
      { name: "Pgvector", link: "https://github.com/pgvector/pgvector" },
      { name: "Faiss", link: "https://github.com/facebookresearch/faiss" },
      { name: "ClickHouse", link: "https://clickhouse.com/" },
      { name: "Cassandra", link: "https://cassandra.apache.org/" },
    ]
  },
  {
    title: "AI Search Engines",
    icon: "🔍",
    items: [
      { name: "Perplexity", link: "https://www.perplexity.ai/" , isNew: true},
      { name: "Felo", link: "https://felo.ai/" },
      { name: "Devv AI", link: "https://devv.ai/" },
      { name: "Phind", link: "https://www.phind.com/" },
      { name: "超能文献", link: "https://www.chaonengwenxian.cn/" },
      { name: "秘塔", link: "https://metaso.cn/" },
    ]
  },
  {
    title: "Chatbots",
    icon: "🤖",
    items: [
      { name: "ChatGPT", link: "https://chat.openai.com/" , isNew: true},
      { name: "Github Models", link: "https://github.com/marketplace", isNew: true},
      { name: "Microsoft Copilot", link: "https://copilot.microsoft.com/" },
      { name: "Claude", link: "https://www.anthropic.com/" , isNew: true},
      { name: "Gemini", link: "https://gemini.google.com/" },
      { name: "HuggingChat", link: "https://huggingface.co/chat/" },
      { name: "SpicyChat", link: "https://spicychat.ai/"  },
      { name: "Candy AI", link: "https://candy.ai/"  },
      { name: "CrushOn.AI", link: "https://crushon.ai/"  },
      { name: "character.ai", link: "https://character.ai/" },
      { name: "JanitorAI", link: "https://janitorai.com/" },
      { name: "Poe", link: "https://poe.com/", isNew: true },
      { name: "QuillBot", link: "https://quillbot.com/" },
      { name: "通义千问", link: "https://tongyi.aliyun.com/" },
      { name: "Coze", link: "https://www.coze.cn/" , isNew: true},
      { name: "文心一言", link: "https://yiyan.baidu.com/" },
      { name: "Kimi", link: "https://kimi.moonshot.cn/" },
      { name: "腾讯混元", link: "https://hunyuan.tencent.com/" },
      { name: "智谱清言", link: "https://chatglm.cn/" },
      { name: "海螺AI", link: "https://www.hailuoai.com/" },
      { name: "You", link: "https://you.com" },
      { name: "Pop", link: "https://popai.pro" },
      { name: "Perplexity",link: "https://www.perplexity.ai/" },
      { name: "Deepseek",link: "https://www.deepseek.com/" },
      { name: "Zhidouai",link: "https://www.zhidouai.com/" },
      { name: "360AI",link: "https://bot.360.com" },
      { name: "Dell-3",link: "https://www.bing.com/images/create" },
      { name: "OpenAI01.net", link: "https://openai01.net/zh?ref=2rLejpQD"},
    ]
  },
  {
    title: "LLM App Development Platforms",
    icon: "🛠️",
    items: [
        {"name":"Dify","link":"https://dify.ai/" , isNew: true},
        {"name":"AnythingLLM","link":"https://anythingllm.com/" },
        {"name":"MaxKB","link":"https://github.com/1Panel-dev/MaxKB" },
        {"name":"Coze","link":"https://www.coze.com/" },
        {"name":"FLowwise","link":"https://flowiseai.com/" },
        {"name":"Langflow","link":"https://www.langflow.org/" },
        {"name":"LangChain","link":"https://www.langchain.com/" , isNew: true},
        {"name":"Llama Index","link":"https://www.llamaindex.ai/" },
        {"name":"Firecrawl","link":"https://www.firecrawl.dev/" },
    ]
  }, 
  {
    title: "Hosting Local Models",
    icon: "📚",
    items: [
        {"name":"Ollama","link":"https://ollama.com/" , isNew: true},
        {"name":"vLLM","link":"https://vllm.ai/" },
        {"name":"LM Studio","link":"https://lmstudio.ai/" },
    ]
  },
  {
    title: "GenAI",
    icon: "🤖",
    items: [
      { name: "Flux", link: "https://flux.ai/" , isNew: true},
      { name: "Runway", link: "https://runwayml.com/" },
      { name: "HeyGen", link: "https://www.heygen.com/" },
      { name: "Stable Audio", link: "https://www.stableaudio.com/" },
      { name: "Suno", link: "https://www.suno.ai/" },
      { name: "Luma AI", link: "https://lumalabs.ai/", isNew: true },
      { name: "Canva AI Video", link: "https://www.canva.com/ai-video/" },
      { name: "Canva AI Voice", link: "https://www.canva.com/ai-voice/" },
      { name: "Play", link: "https://play.ht/" },
      { name: "QuillBot", link: "https://quillbot.com/" },
      { name: "Viggle", link: "https://viggle.ai/"  },
      { name: "网易天音", link: "https://tianyin.music.163.com/" },
    ]
  },
  {
    title: "Model API Keys",
    icon: "🔑",
    items: [
      { name: "OpenAI", link: "https://openai.com/" },
      { name: "Azure OpenAI", link: "https://azure.microsoft.com/en-us/products/cognitive-services/openai-service/" },
      { name: "Anthropic", link: "https://www.anthropic.com/" },
      { name: "Cohere", link: "https://cohere.ai/" },
      { name: "Gemini", link: "https://deepmind.google/technologies/gemini/" },
      { name: "Groq Cloud", link: "https://groq.com/" },
      { name: "Vertex AI", link: "https://cloud.google.com/vertex-ai" },
      { name: "HuggingFace", link: "https://huggingface.co/" },
      { name: "Jina", link: "https://jina.ai/" },
      { name: "together.ai", link: "https://www.together.ai/" },
      { name: "OpenRouter", link: "https://openrouter.ai/" },
      { name: "MistralAI", link: "https://mistral.ai/" },
      { name: "NVidia", link: "https://www.nvidia.com/en-us/ai-data-science/" },
      { name: "Replicate", link: "https://replicate.com/" },
      { name: "文心", link: "https://wenxin.baidu.com/" },
      { name: "通义", link: "https://tongyi.aliyun.com/", isNew: true },
      { name: "Moonshot", link: "https://www.moonshot.cn/" },
      { name: "智谱", link: "https://www.zhipuai.cn/" , isNew: true},
      { name: "百川", link: "https://www.baichuan-ai.com/" },
      { name: "讯飞星火", link: "https://xinghuo.xfyun.cn/" },
      { name: "Minimax", link: "https://www.minimax.io/" },
      { name: "零一万物", link: "https://01.ai/" },
      { name: "火山引擎", link: "https://www.volcengine.com/" },
      { name: "deepseek", link: "https://deepseek.ai/" },
      { name: "腾讯混元", link: "https://cloud.tencent.com/product/hunyuan" },
      { name: "SiliconFlow", link: "https://www.siliconflow.com/" },
      { name: "PerfXCloud", link: "https://www.perfxlab.com/" },
      { name: "Lepton", link: "https://www.lepton.ai/" },
      { name: "novita.ai", link: "https://www.novita.ai/" },
      { name: "阶跃星辰", link: "https://www.stepai.tech/" },
    ]
  },
];

//NewlyAdded 
export const newlyAddedItems: NewlyAddedItem[] = [ 
    { name: "LlamaIndex", category: "LLM Tools", link: "https://www.llamaindex.ai/" },
    { name: "V0dev", category: "Chatbots", link: "https://v0.dev/chat" },
    { name: "Candy AI", category: "Chatbots", link: "https://candy.ai/" },
    { name: "CrushOn.AI", category: "Chatbots", link: "https://crushon.ai/" },
    { name: "character.ai", category: "Chatbots", link: "https://character.ai/" },
    { name: "JanitorAI", category: "Chatbots", link: "https://janitorai.com/" },
    // ... 其他新增项目
  ];