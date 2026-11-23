(function () {
    const root = document.documentElement
    const hamburger = document.getElementById('hamburger')
    const navList = document.getElementById('nav-list')
    const themeToggle = document.getElementById('theme-toggle')

    // Mobile menu
    if (hamburger && navList) {
        const setOpen = (open) => {
            navList.classList.toggle('show', open)
            hamburger.setAttribute('aria-expanded', String(open))
        }

        hamburger.addEventListener('click', () => setOpen(!navList.classList.contains('show')))

        // Close the menu after following a link
        navList.addEventListener('click', (e) => {
            if (e.target.closest('a')) setOpen(false)
        })
    }

    // Dark mode. The initial class is applied by the inline script in <head> to avoid a flash.
    const applyTheme = (dark) => {
        root.classList.toggle('dark', dark)
        if (themeToggle) themeToggle.setAttribute('aria-pressed', String(dark))
    }

    const savedTheme = () => {
        try { return localStorage.getItem('theme') } catch (e) { return null }
    }

    if (themeToggle) {
        themeToggle.setAttribute('aria-pressed', String(root.classList.contains('dark')))
        themeToggle.addEventListener('click', () => {
            const dark = !root.classList.contains('dark')
            applyTheme(dark)
            try { localStorage.setItem('theme', dark ? 'dark' : 'light') } catch (e) { /* storage unavailable */ }
        })
    }

    // Follow system theme changes unless the visitor has made an explicit choice
    if (window.matchMedia) {
        const query = window.matchMedia('(prefers-color-scheme: dark)')
        if (query.addEventListener) {
            query.addEventListener('change', (e) => {
                if (!savedTheme()) applyTheme(e.matches)
            })
        }
    }
})()
