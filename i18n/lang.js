import { createI18n } from 'vue-i18n'

// 自定义国际化文件
import tw from '../i18n/lang/tw'
import en from '../i18n/lang/en'

const i18n = createI18n({
  legacy: false, // Composition API 模式
  globalInjection: true, // 全局注册 $t方法
  // 默认语言
  locale: 'tw',
  // 语言库
  messages: {
    tw,
    en
  }
})

// 将i18n暴露出去，在main.js中引入挂载
export default i18n
