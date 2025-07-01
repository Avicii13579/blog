import { defineClientConfig } from 'vuepress/client'
import CustomComponent from './theme/components/Custom.vue'
import ThemeFilter from './theme/components/ThemeFilter.vue'
import ArticleList from './theme/components/ArticleList.vue'

export default defineClientConfig({
  enhance({ app }) {
    app.component('CustomComponent', CustomComponent)
    app.component('ThemeFilter', ThemeFilter)
    app.component('ArticleList', ArticleList)
  },

  setup() {
    if (typeof window !== 'undefined') {
      const addBackButton = () => {
        const path = window.location.pathname

        // 只在文章详情页添加返回按钮，不在分类页面添加
        if ((path.includes('/technology/') || path.includes('/wealth/') || path.includes('/jottings/')) &&
          !path.endsWith('/') && !path.endsWith('/technology/') && !path.endsWith('/wealth/') && !path.endsWith('/jottings/')) {
          if (document.querySelector('.custom-back-button')) {
            return
          }

          const articleContainer = document.querySelector('.vp-doc') || document.querySelector('main')
          if (articleContainer) {
            // 添加返回按钮
            const backButton = document.createElement('div')
            backButton.className = 'custom-back-button'
            backButton.innerHTML = `
              <button onclick="goBack()" class="back-btn">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="back-icon">
                  <path d="M19 12H5M12 19L5 12L12 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span>返回</span>
              </button>
            `
            articleContainer.insertBefore(backButton, articleContainer.firstChild)

              ; (window as any).goBack = function () {
                if (window.history.length > 1) {
                  window.history.back()
                } else {
                  let backPath = '/'
                  if (path.startsWith('/technology/')) {
                    backPath = '/technology/'
                  } else if (path.startsWith('/wealth/')) {
                    backPath = '/wealth/'
                  } else if (path.startsWith('/jottings/')) {
                    backPath = '/jottings/'
                  }
                  window.location.href = backPath
                }
              }

            // 添加样式
            addStyles()
          }
        }
      }



      const addStyles = () => {
        if (document.querySelector('#custom-styles')) {
          return
        }

        const style = document.createElement('style')
        style.id = 'custom-styles'
        style.textContent = `
          .custom-back-button {
            margin-bottom: 2rem;
          }
          
          .back-btn {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.75rem 1.25rem;
            background: var(--vp-c-bg-soft);
            border: 1px solid var(--vp-c-divider);
            border-radius: 8px;
            color: var(--vp-c-text-1);
            font-size: 0.9rem;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.2s ease;
            text-decoration: none;
            user-select: none;
          }
          
          .back-btn:hover {
            background: var(--vp-c-bg-elv);
            border-color: var(--vp-c-brand);
            color: var(--vp-c-brand);
            transform: translateY(-1px);
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          }
          
          .back-btn:active {
            transform: translateY(0);
          }
          
          .back-icon {
            width: 1.2rem;
            height: 1.2rem;
            transition: transform 0.2s ease;
          }
          
          .back-btn:hover .back-icon {
            transform: translateX(-2px);
          }
          

          
          @media (max-width: 768px) {
            .back-btn {
              padding: 0.6rem 1rem;
              font-size: 0.85rem;
            }
            
            .back-icon {
              width: 1rem;
              height: 1rem;
            }
          }
          
          [data-theme="dark"] .back-btn {
            background: var(--vp-c-bg-elv);
          }
          
          [data-theme="dark"] .back-btn:hover {
            background: var(--vp-c-bg-soft);
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
          }
        `
        document.head.appendChild(style)
      }

      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', addBackButton)
      } else {
        addBackButton()
      }

      let currentPath = window.location.pathname
      const observer = new MutationObserver(() => {
        if (window.location.pathname !== currentPath) {
          currentPath = window.location.pathname
          setTimeout(addBackButton, 100)
        }
      })

      observer.observe(document.body, {
        childList: true,
        subtree: true
      })
    }
  }
})
