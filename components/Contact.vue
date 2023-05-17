<template>
    <section class="contact right">
        <div id="contact" class="anchor" aria-hidden="true"></div>
        <div class="screen-part content right">
            <h2 class="title">Liens & contact</h2>
            <h3 class="subtitle">Mes liens</h3>

            <a href="https://www.github.com/cdhenin" target="_blank" rel="noopener noreferrer" class="link item">
                <img alt="github logo" width="40" src="assets/logo/contact/github.svg">
                <span>Mon profil Github</span>
            </a>
            <a href="cv_claire_dhenin.pdf" target="_blank" rel="noopener noreferrer" class="link item">
                <img alt="pdf icon" width="40" src="assets/logo/contact/file-pdf-solid.svg">
                <span>Télécharger mon C.V</span>
            </a>
            <h3 class="subtitle">Me contacter</h3>

            <a href="mailto:contact.claire@dhenin.net" target="_blank" rel="noopener noreferrer" class="link item">
                <img alt="mailto" width="40" src="assets/logo/contact/envelope-solid.svg">
                <span>contact.claire[at]dhenin.net</span>
            </a>
            <a href="https://www.linkedin.com/in/claire-dhenin" target="_blank" rel="noopener noreferrer" class="link item">
                <img alt="linkedin logo" width="40" src="assets/logo/contact/linkedin.svg">
                <span>Mon profil Linkedin</span>
            </a>
            <a href="https://www.malt.fr/profile/clairedhenin" target="_blank" rel="noopener noreferrer" class="link item">
                <img alt="malt logo" width="40" src="assets/logo/contact/malt.svg">
                <span>Mon profil Malt</span>
            </a>
        </div>

        <div class="parallax bg-bw screen-part"></div>
    </section>
</template>
  
<style lang="scss" scoped>
.contact {
    .screen-part {
        min-height: unset;

        &.content {
            margin-bottom: 0;
        }
    }

    .item {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        padding: $spacing-2;
        gap: $spacing-2;
    }

    a.item {
        margin: 8px;

        &:hover {
            font-weight: 600;
        }
    }
}
</style>
  