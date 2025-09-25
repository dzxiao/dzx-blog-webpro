import avatar from "@/assets/image/avatar.png";

// 个人信息数据
const personalInfo = {
  name: '邓子潇',
  title: '前端开发工程师(会一点点后端)',
  avatar: avatar,
  location: '北京市',
  email: 'dzxXiao1111@163.com',
  phone: '+86 17600341743',
  website: 'https://github.com/dzxiao',
  bio: '热爱技术，专注于前端和后端开发，拥有3年以上的软件开发经验。喜欢学习新技术，分享技术心得，致力于用技术解决实际问题。'
}

// 技能数据
const skills = [
  { category: '前端技术', items: ['Vue.js', 'React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Sass/Less', '跨平台开发'] },
  { category: '后端技术', items: ['Node.js', 'Java', 'Spring Boot', 'Express.js'] },
  { category: '数据库', items: ['MySQL', 'MongoDB', 'Redis'] },
  { category: '工具 & 平台', items: ['Git', 'Docker'] }
]

// 工作经历数据
const experiences = [
  {
    company: '自如',
    position: '前端开发工程师',
    duration: '2023.10 - 至今',
    description: '前端技术架构工程化系统学习实践中，前期参与自如企信平台内聚及内部活动创作，目前参与自如大数据平台各链路建设。',
    achievements: ['自如企信平台内聚及内部活动创作', '自如大数据平台各链路建设']
  }
]

// 项目作品数据
const projects = [
  {
    title: '企业级管理系统',
    description: '基于Vue3+TypeScript+Element Plus开发的企业级后台管理系统，支持多租户、权限管理、数据可视化等功能。',
    tech: ['Vue3', 'TypeScript', 'Element Plus', 'Pinia', 'Vite'],
    image: 'https://via.placeholder.com/300x200',
    demo: 'https://demo.example.com',
    github: 'https://github.com/example/admin-system',
    status: '已完成'
  },
  {
    title: '移动端电商应用',
    description: '使用React Native开发的跨平台移动电商应用，支持商品浏览、购物车、订单管理、支付等功能。',
    tech: ['React Native', 'Redux', 'Node.js', 'MongoDB'],
    image: 'https://via.placeholder.com/300x200',
    demo: 'https://app.example.com',
    github: 'https://github.com/example/mobile-shop',
    status: '开发中'
  },
  {
    title: '实时聊天系统',
    description: '基于WebSocket的实时聊天系统，支持文字、图片、文件传输，具有群聊、私聊、消息推送等功能。',
    tech: ['Vue.js', 'Socket.io', 'Express.js', 'Redis'],
    image: 'https://via.placeholder.com/300x200',
    demo: 'https://chat.example.com',
    github: 'https://github.com/example/chat-system',
    status: '已完成'
  }
]

// 技术文章数据
const articles = [
  {
    title: 'Vue3 Composition API 最佳实践',
    summary: '深入探讨Vue3 Composition API的使用技巧和最佳实践，包括响应式数据管理、生命周期钩子、自定义组合函数等。',
    category: '前端技术',
    publishDate: '2024-01-15',
    readTime: '8分钟',
    tags: ['Vue3', 'JavaScript', '前端'],
    url: '#'
  },
  {
    title: 'Node.js 微服务架构设计与实现',
    summary: '详细介绍如何使用Node.js构建微服务架构，包括服务拆分、API网关、服务发现、负载均衡等核心概念。',
    category: '后端开发',
    publishDate: '2024-01-10',
    readTime: '12分钟',
    tags: ['Node.js', '微服务', '架构'],
    url: '#'
  },
  {
    title: 'Docker 容器化部署实战指南',
    summary: '从基础概念到实际应用，全面介绍Docker容器化技术，包括镜像构建、容器编排、CI/CD集成等。',
    category: 'DevOps',
    publishDate: '2024-01-05',
    readTime: '10分钟',
    tags: ['Docker', 'DevOps', '部署'],
    url: '#'
  }
]

// 联系方式数据
const contactInfo = {
  socialMedia: [
    { platform: 'GitHub', username: '@dzxiao', url: 'https://github.com/dzxiao', icon: '🐙' },
    { platform: 'LinkedIn', username: '邓子潇', url: 'https://linkedin.com/in/dzxiao', icon: '💼' },
  ],
  email: 'dzxXiao1111@163.com',
  phone: '+86 17600341743',
  address: '北京市'
}

export { personalInfo, skills, experiences, projects, articles, contactInfo }