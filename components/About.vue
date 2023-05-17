<template>
    <section class="about">
        <div id="about" class="anchor" aria-hidden="true" data-extra-space="100"></div>
        <div class="parallax bg-home screen-part"></div>
        <div class="content screen-part">
            <nuxt-img format="webp" alt="claire" class="reveal toggle" src="/assets/claire.jpg" loading="lazy" width="200"
                height="200" />
            <h2 class="title">À propos de moi</h2>
            <div class="block">
                <p>Diplômée de la formation IG2I du <em>groupe Centrale Lille</em>, je suis <em>développeuse
                        Full-Stack</em> depuis
                    2017.
                </p>
                <p>Après plusieurs expériences formatrices en tant que salariée de différentes start-ups et PME, je
                    me
                    suis lancée dans l'aventure <em>free-lance</em> pour me construire une expertise de façon
                    indépendante.
                </p>
                <p>Je suis disponible pour vos projets en contrat free-lance. </p>
                <p class="pb-3">Je suis <em>en télé-travail</em>
                    depuis Ornon
                    (Isère) et je suis mobile ponctuellement sur Grenoble, Lyon et alentours.</p>
                <div class="row">
                    <a class="link" href="#experience">
                        Voir mon parcours
                        <div class="arrow-scroll" aria-hidden="true"></div>
                    </a>
                </div>
            </div>
            <div class="parallax bg-bw divider"></div>
        </div>
    </section>
</template>
  
<style lang="scss" scoped>
$image-height: 200px;


.about {
    .bg-home.screen-part {
        height: calc($navbar-height + 2rem + ($image-height / 2));
    }

    img {
        border-radius: 50%;
        height: $image-height;
        border: 2px dotted;
        width: $image-height;
        object-fit: cover;

        position: absolute;
        top: calc(-1 * $image-height / 2);
        left: calc(50% - $image-height / 2);
    }

    .content {
        position: relative;
        margin-bottom: 0;
        padding-top: calc(1rem + ($image-height / 2));
    }

    .anchor {
        top: 0;
    }

    .block {
        padding: $spacing-3;
        font-size: 1.3rem;
        width: 100%;
        padding-bottom: 155px;
    }

    .link {
        text-transform: uppercase;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: fit-content;
        margin-bottom: 2rem;
    }

    .arrow-scroll {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        position: absolute;
        bottom: -2rem;
        animation: down 1.5s infinite;
        -webkit-animation: down 1.5s infinite;

        &::before {
            content: '';
            position: absolute;
            top: 10px;
            left: 12px;
            width: 10px;
            height: 10px;
            border-left: 2px solid $secondary-color-dark;
            border-bottom: 2px solid $secondary-color-dark;
            transform: rotate(-45deg);
        }
    }
}

@media (min-width: 800px) {
    .about {
        padding-top: 0;

        .bg-home.screen-part {
            height: unset;
        }

        .block {
            margin: 0 auto;
            padding: $spacing-4;
            max-width: calc(100% - $image-height);
            font-size: 1.3rem;
            padding-bottom: 155px;
        }

        img {
            position: absolute;
            top: calc(50% - ($image-height / 2));
            left: calc(50% - ($image-height / 2));
        }

        .content {
            position: unset;
        }
    }
}


@keyframes down {
    0% {
        transform: translate(0);
    }

    20% {
        transform: translateY(15px);
    }

    40% {
        transform: translate(0);
    }
}

@-webkit-keyframes down {
    0% {
        transform: translate(0);
    }

    20% {
        transform: translateY(15px);
    }

    40% {
        transform: translate(0);
    }
}
</style>
  