const burger = document.getElementById('mobile-menu-btn')
const sidebar = document.querySelector('.sidebar')
const closeBtn = document.querySelector('.cross')
const body = document.getElementById('body-style')

export function removeSidebar() {
    sidebar.style.transform = 'translate(-380px, -490px)'
    document.removeEventListener('click', removeSidebarDocumentListener)
    setTimeout(() => sidebar.classList.remove('sidebar_active'), 500)
}

export function changeScroll(overflow) {
    if(sidebar.classList.contains('sidebar_active')) {
        body.style.overflow = overflow
    } else {
        body.style.overflow = overflow
    }
}

burger.addEventListener('click', function () {

    if (!sidebar.classList.contains('sidebar_active')) {
        sidebar.classList.add('sidebar_active')
        changeScroll('hidden')
        document.addEventListener('click', removeSidebarDocumentListener)
        setTimeout(function () {
            sidebar.style.transform = 'translate(0px, 0px)'
        }, 100)
    } else {
        removeSidebar()
        changeScroll('')
    }

})

closeBtn.addEventListener('click', function () {
    removeSidebar()
    changeScroll('')
})

function removeSidebarDocumentListener(event) {

    if (!sidebar.contains(event.target) && !burger.contains(event.target)) {
        removeSidebar()
        changeScroll('')
    }

}

