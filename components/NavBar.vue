<template>
    <nav>
        <button class="icon" id="toggleMenuButton" aria-label="Ouvrir le menu mobile">
            <svg height="20" width="20" aria-hidden="true">
                <g fill="rgb(230, 230, 250)" stroke="rgb(230, 230, 250)" stroke-width="2">
                    <path stroke-linecap="round" d="M3 5 l13 0"></path>
                    <path stroke-linecap="round" d="M3 10 l13 0" />
                    <path stroke-linecap="round" d="M3 15 l13 0" />
                </g>
            </svg>
        </button>
        <h1 class="title">
            <NuxtLink class="link" to="/#about">
                <i>Claire Dhénin</i>
                <br />
                Développeuse Full-stack
            </NuxtLink>
        </h1>
        <ul>
            <li><NuxtLink class="link" to="/#about">À propos de moi</NuxtLink></li>
            <li><NuxtLink class="link" to="/#experience">Mon parcours</NuxtLink></li>
            <li><NuxtLink class="link" to="/#skills">Mes compétences</NuxtLink></li>
            <li><NuxtLink class="link" to="/#contact">Liens & contact</NuxtLink></li>
        </ul>
    </nav>
</template>



<script>
const NAVBAR_HEIGHT = 82;

export default {
    mounted: function () {
        window.addEventListener('scroll', this.toggleNavbarScrollClass);
        window.addEventListener('scroll', this.setActiveClassOnMenuItems);
        window.addEventListener('scroll', this.hideMobileMenu);
        document.getElementById('toggleMenuButton').addEventListener('click', this.toggleMenu);
    },
    methods: {
        toggleMenu() {
            document.querySelector("nav > ul").classList.toggle('visible');
            document.querySelector('nav').classList.add('scroll');
        },
        toggleNavbarScrollClass() {
            const nav = document.querySelector('nav');

            (window.scrollY >= NAVBAR_HEIGHT) ? nav.classList.add('scroll') : nav.classList.remove('scroll');
        },
        setActiveClassOnMenuItems() {
            const fromTop = Math.ceil(window.scrollY);
            if (fromTop >= window.scrollMaxY) {
                const contact = document.querySelector(`a[href='#contact']`)
                if (!contact) { return; }
                contact.parentElement.classList.add('active');
                document.querySelectorAll('nav ul li a:not([href=\'#contact\'])').forEach((section) => {
                    section.parentElement.classList.remove('active')
                })
                return;
            }
            document.querySelectorAll('nav ul li a').forEach((link) => {
                const anchor = document.querySelector(link.hash);
                if (anchor) {
                    const section = anchor.offsetParent;
                    const visualOffset = parseInt(anchor.dataset.extraSpace || 0, 10) + NAVBAR_HEIGHT;
                    const currentPositionTop = fromTop + visualOffset;
                    const currentPositionBottom = section.offsetTop + section.offsetHeight - visualOffset;

                    if (section.offsetTop <= currentPositionTop && currentPositionBottom > fromTop) {
                        return link.parentElement.classList.add('active');
                    }
                    link.parentElement.classList.remove('active');
                }
            });
        },
        hideMobileMenu() {
            document.querySelector('nav > ul').classList.remove('visible')

        }
    }
}
</script>
  
<style lang="scss" scoped>
nav {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    position: fixed;
    top: 0;
    width: 100%;
    background-color: $secondary-color-main;
    color: $primary-color-light;
    z-index: 2;
    min-height: 82px;
    transition: all 0.8s ease;

    &.scroll,
    &:hover {
        opacity: 1;
        min-height: $navbar-height;
    }

    >h1 {
        font-size: 1.5rem;
        padding: 0;

        i {
            font-size: 2.2rem;
            font-style: normal;
        }

        a:hover {
            color: $secondary-color-light;
        }
    }

    >ul {
        list-style: none;
        display: flex;
        margin: 0;
        padding: 0;
        min-height: $navbar-height;

        li {
            transition: all 0.5s ease-in-out;
            text-transform: uppercase;

            a.link {
                padding: $spacing-3;
                width: 100%;
                height: 100%;
                color: $primary-color-light;
                transition: all 1s ease-out;
                display: flex;
                align-items: center;
            }

            &.active {
                a.link {
                    background-position: 0;

                    ::before {
                        width: 100%;
                        margin: 0;

                    }
                }
            }
        }
    }

    .icon {
        display: none;
        padding: $spacing-3;
        border: none;
        background: transparent;
        cursor: pointer;
    }
}


@media screen and (max-width: 1024px) {

    nav,
    nav.scroll {
        justify-content: flex-start;
        height: auto;
    }

    nav {
        >h1 {
            font-size: 1.3rem;

            i {
                font-size: 1.8rem;
                font-style: normal;
            }
        }

        .icon {
            display: inline-flex;
        }

        >ul {
            display: none;
            width: 100%;

            &.visible {
                display: block;
            }
        }

    }
}
</style>
  