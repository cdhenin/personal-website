<template>
    <section class="skills right">
        <div class="screen-part right content">
            <div class="parallax bg-bw divider"></div>
            <h2 class="title">Mes compétences techniques</h2>
            <div id="skills" class="anchor" aria-hidden="true"></div>
            <h3 class="subtitle">Back-end</h3>
            <div class="subcontent">
                <p>Python (Flask, Django)</p>
                <p>NodeJS, Golang</p>
                <nuxt-img alt="python logo" height="126" width="115" src="assets/logo/skills/python.svg" />
                <nuxt-img alt="flask logo" height="800" width="800" src="assets/logo/skills/flask.svg" />
                <nuxt-img alt="django logo" height="90" width="260" src="assets/logo/skills/django.svg" /><br />
                <nuxt-img alt="nodejs logo" height="361" width="590" src="assets/logo/skills/node.svg" />
                <nuxt-img alt="rails logo" height="155" width="411" src="assets/logo/skills/rails.svg" /><br />
                <nuxt-img alt="go logo" height="77" width="205" src="assets/logo/skills/go.svg" />
            </div>

            <h3 class="subtitle">Gestion de données</h3>
            <div class="subcontent">
                <p>MongoDB, MySQL, PostgreSQL</p>
                <p>ElasticSearch</p>
                <nuxt-img alt="elasticsearch logo" height="90" width="410" src="assets/logo/skills/elasticsearch.svg" /><br />
                <nuxt-img alt="mongo logo" height="300" width="1113" src="assets/logo/skills/mongo.svg" />
                <nuxt-img alt="postgresql logo" height="557" width="540" src="assets/logo/skills/postgresql.svg" />
                <br />
                <nuxt-img alt="mysql logo" height="290" width="984" src="assets/logo/skills/mysql.svg" />
            </div>

            <h3 class="subtitle">Front-End</h3>
            <div class="subcontent">
                <p>JavaScript (VueJS, React, AngularJS)</p>
                <p>HTML, CSS</p>
                <nuxt-img alt="vuejs logo" height="227" width="262" src="assets/logo/skills/vuejs.svg" />
                <nuxt-img alt="react logo" height="20" width="23" src="assets/logo/skills/react.svg" />
                <nuxt-img alt="angularjs logo" height="185" width="695" src="assets/logo/skills/angularjs.svg" /><br />
                <nuxt-img alt="sass logo" height="411" width="548" src="assets/logo/skills/sass.svg" />
                <nuxt-img alt="html logo" height="512" width="512" src="assets/logo/skills/html.svg" />
            </div>

            <h3 class="subtitle">Outils</h3>
            <div class="subcontent">
                <p>Git, Docker</p>
                <nuxt-img alt="git logo" height="114" width="273" src="assets/logo/skills/git.svg" />
                <nuxt-img alt="docker logo" height="145" width="610" src="assets/logo/skills/docker.svg" /> <br />
            </div>

            <h3 class="subtitle">Linguistiques</h3>
            <div class="subcontent">
                <p>Anglais niveau TOEIC (870)</p>
                <nuxt-img alt="toeic logo" height="40" width="150" src="assets/logo/skills/toeic.png" /> <br />
            </div>
        </div>
        <div class="parallax bg-home screen-part"></div>
    </section>
</template>
  
<style lang="scss" scoped>
.skills {
    .content {
        .subcontent {
            >img {
                height: 20px;
                width: auto;
            }
        }
    }
}
</style>
  