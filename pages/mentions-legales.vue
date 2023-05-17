<template>
    <main id="root">
        <section id="mentionslegales">
            <div class="container">
                <h2>Mentions légales</h2>
                <h3>Identité</h3>

                <p>Nom du site web : Claire Dhénin - Développeuse Full-Stack Freelance</p>
                <p>Adresse du site : https://claire.dhenin.net</p>

                <p>Propriétaire : Claire Dhénin</p>
                <p>Responsable de publication : Claire Dhénin - contact.claire@dhenin.net</p>

                <p>Hébergement : OVH – 2 rue Kellermann - 59100 Roubaix - France</p>

                <h4>Entrepreneur individuel </h4>

                <p>EI Claire Dhénin – TVA FR 86903179182</p>
                <p>0648703571 – contact.claire@dhenin.net – La Grenonière, 38520 Ornon</p>

                <h3>Conditions d’utilisation</h3>

                <p>L’utilisation du présent site implique l’acceptation pleine et entière des conditions générales
                    d’utilisation décrites ci-après. Ces conditions d’utilisation sont susceptibles d’être modifiées ou
                    complétées à tout moment.</p>

                <h4>Informations</h4>

                <p>Les informations et documents du site sont présentés à titre indicatif, sans de caractère exhaustif,
                    et
                    ne
                    peuvent engager la responsabilité du propriétaire du site.</p>

                <p>Le propriétaire du site ne peut être tenu responsable des dommages directs et indirects consécutifs à
                    l’accès au site.</p>

                <h4>Propriété intellectuelle</h4>

                <p>Sauf mention contraire, tous les éléments accessibles sur le site (textes, images, graphismes, logo,
                    icônes,
                    sons, logiciels, etc.) restent la propriété exclusive de leurs auteurs, en ce qui concerne les
                    droits de
                    propriété intellectuelle ou les droits d’usage.</p>

                <p>Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des
                    éléments du
                    site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite
                    préalable de
                    l’auteur.</p>

                <p>Toute exploitation non autorisée du site ou de l’un quelconque des éléments qu’il contient est
                    considérée
                    comme constitutive d’une contrefaçon et passible de poursuites.</p>

                <p>Les marques et logos reproduits sur le site sont déposés par les sociétés qui en sont propriétaires.
                </p>

                <h4>Liens</h4>

                <h5>Liens sortants</h5>
                <p>Le propriétaire du site décline toute responsabilité et n’est pas engagé par le référencement via des
                    liens
                    hypertextes, de ressources tierces présentes sur le réseau Internet, tant en ce qui concerne leur
                    contenu
                    que leur pertinence.</p>

                <h5>Liens entrants</h5>
                <p>Le propriétaire du site autorise les liens hypertextes vers l’une des pages de ce site, à condition
                    que
                    ceux-ci ouvrent une nouvelle fenêtre et soient présentés de manière non équivoque afin d’éviter :

                    tout risque de confusion entre le site citant et le propriétaire du site
                    ainsi que toute présentation tendancieuse, ou contraire aux lois en vigueur.</p>

                <p>Le propriétaire du site se réserve le droit de demander la suppression d’un lien s’il estime que le
                    site
                    source ne respecte pas les règles ainsi définies.</p>

                <h4>Confidentialité</h4>

                <p>Le site ne recueille pas d’informations personnelles, et n’est pas assujetti à déclaration à la CNIL.
                </p>

                <h4>Crédits</h4>

                <p>Icônes : <a class="link" href="https://fontawesome.com/">Font awesome</a></p>
                <p>Images : Claire Dhénin</p>
                <p>Polices d'écritures:
                    <a class="link" href="https://fonts.google.com/specimen/Itim">Itim</a> &
                    <a class="link" href="https://fonts.google.com/specimen/Josefin+Sans">Josefin Sans</a>
                </p>

            </div>
        </section>
    </main>
</template>
  
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name: "MentionsLegalesPage",
    head() {
        return {
            title: 'Claire Dhénin - Mentions légales',
        }
    },
})
</script>

<style lang="scss" scoped>
#mentionslegales {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    margin-top: 5rem;

    h2,
    h3,
    h4,
    h5 {
        color: var(--primary-color-main);
    }

    >.container a {
        a {
            color: var(--secondary-color-main);
        }
    }
}


@media (min-width: 767px) {
    #mentionslegales {
        >.container {
            width: 60%;
        }
    }
}
</style>
  