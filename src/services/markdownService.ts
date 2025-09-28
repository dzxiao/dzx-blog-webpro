import MarkdownIt from 'markdown-it';
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css'; // 使用GitHub风格的代码高亮主题

// 创建markdown-it实例
const md = new MarkdownIt({
  html: true,        // 允许HTML标签
  linkify: true,     // 自动转换URL为链接
  typographer: true, // 启用一些语言中性的替换 + 引号美化
  highlight: function (str: string, lang: string) {
    // 如果有语言标识，使用highlight.js进行代码高亮
    if (lang && hljs.getLanguage(lang)) {
      try {
        return '<pre class="hljs"><code>' +
               hljs.highlight(str, { language: lang }).value +
               '</code></pre>';
      } catch (__) {}
    }
    
    // 如果没有语言标识，尝试自动检测
    try {
      return '<pre class="hljs"><code>' +
             hljs.highlightAuto(str).value +
             '</code></pre>';
    } catch (__) {}
    
    // 如果都失败了，返回原始代码
    return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>';
  }
});

// 文章接口定义
export interface Article {
  id: string;
  title: string;
  filename: string;
  content: string;
  htmlContent: string;
  publishDate: string;
  summary: string;
  tags: string[];
}

// 获取所有markdown文件列表
export async function getMarkdownFiles(): Promise<string[]> {
  // 在Vite中，我们需要使用import.meta.glob来动态导入文件
  const modules = import.meta.glob('/src/assets/mds/*.md', { as: 'raw' });
  return Object.keys(modules);
}

// 读取单个markdown文件内容
export async function readMarkdownFile(filename: string): Promise<string> {
  try {
    const modules = import.meta.glob('/src/assets/mds/*.md', { as: 'raw' });
    const filePath = `/src/assets/mds/${filename}`;
    
    if (modules[filePath]) {
      const content = await modules[filePath]();
      return content;
    }
    
    throw new Error(`文件 ${filename} 不存在`);
  } catch (error) {
    console.error('读取markdown文件失败:', error);
    throw error;
  }
}

// 解析markdown文件，提取元数据
export function parseMarkdownContent(content: string, filename: string): Article {
  // 提取标题（第一个#标题）
  const titleMatch = content.match(/^#\s+(.+)$/m);
  const title = titleMatch ? titleMatch[1] : filename.replace('.md', '');
  
  // 提取摘要（前200个字符，去除markdown语法）
  const summary = content
    .replace(/^#+\s+/gm, '') // 移除标题标记
    .replace(/\*\*(.*?)\*\*/g, '$1') // 移除粗体标记
    .replace(/\*(.*?)\*/g, '$1') // 移除斜体标记
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // 移除链接标记
    .replace(/`([^`]+)`/g, '$1') // 移除代码标记
    .substring(0, 200)
    .trim() + '...';
  
  // 提取标签（从文件名和内容中推断）
  const tags: string[] = [];
  
  // 从文件名提取标签
  const filenameTags = filename
    .replace('.md', '')
    .split(/[-_\s]+/)
    .filter(tag => tag.length > 0);
  tags.push(...filenameTags);
  
  // 从内容中提取可能的标签
  const contentTags = content.match(/#\w+/g) || [];
  tags.push(...contentTags.map(tag => tag.substring(1)));
  
  // 生成HTML内容
  const htmlContent = md.render(content);
  
  return {
    id: filename.replace('.md', ''),
    title,
    filename,
    content,
    htmlContent,
    publishDate: new Date().toISOString().split('T')[0], // 使用当前日期作为默认发布日期
    summary,
    tags: [...new Set(tags)] // 去重
  };
}

// 渲染markdown内容为HTML
export function renderMarkdown(content: string): string {
  return md.render(content);
}

// 获取所有文章列表
export async function getAllArticles(): Promise<Article[]> {
  try {
    const files = await getMarkdownFiles();
    const articles: Article[] = [];
    
    for (const filePath of files) {
      const filename = filePath.split('/').pop() || '';
      const content = await readMarkdownFile(filename);
      const article = parseMarkdownContent(content, filename);
      articles.push(article);
    }
    
    // 按文件名排序
    return articles.sort((a, b) => a.filename.localeCompare(b.filename));
  } catch (error) {
    console.error('获取文章列表失败:', error);
    return [];
  }
}

// 根据ID获取单个文章
export async function getArticleById(id: string): Promise<Article | null> {
  try {
    const filename = `${id}.md`;
    const content = await readMarkdownFile(filename);
    return parseMarkdownContent(content, filename);
  } catch (error) {
    console.error('获取文章失败:', error);
    return null;
  }
}
