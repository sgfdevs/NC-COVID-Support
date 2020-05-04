<template>
  <b-modal id="about-us" size="xl" dialog-class="m-0 m-md-auto" centered scrollable hide-header-close>
    <template v-slot:modal-title>
      {{ $t('about.title') }}
    </template>
    <b-card class="h-100" no-body>
      <b-tabs card>
        <b-tab :title="$t('about.getinvolved')">
          <p>{{ $t('about.devhelp.info') }}</p>
          <b>{{ $t('about.devhelp.support') }}</b>
          <i18n path="about.devhelp.addinfo" tag="p">
            <a href="https://forms.gle/rvXU2eQM7MoKsRf18" target="_blank">{{ $t('about.devhelp.addbusiness') }}</a>
            <a href="https://forms.gle/Mu68NE61hzYpfqxL9" target="_blank">{{ $t('about.devhelp.updatebusiness') }}</a>
          </i18n>
          <b>{{ $t('about.devhelp.becomeambassador') }}</b>
          <i18n path="about.devhelp.ambassadorinfo" tag="p">
            <a href="emailto:contact@nccovidsupport.org">contact@nccovidsupport.org</a>
          </i18n>
          <b>{{ $t('about.devhelp.dupsite') }}</b>
          <i18n path="about.devhelp.devnote" tag="p">
            <a href="https://github.com/code-for-chapel-hill/COVID-Support-For-CH">{{ $t('about.devhelp.source') }}</a>
            <a href="https://github.com/codeforamerica/codeofconduct">{{ $t('about.devhelp.conduct') }}</a>
          </i18n>
        </b-tab>

        <b-tab :title="$t('about.partners')">
          <p>{{ $t('about.info') }}</p>
          <ul>
            <li>
              <a href="https://www.417mag.com/blog/your-covid-19-dining-plan/">417 Magazine</a>
            </li>
            <li>
              <a
                href="https://www.ky3.com/content/news/RESTAURANT-LIST-How-restaurants-are-serving-you-in-the-coronavirus-crisis-568905291.html"
                >KY3</a
              >
            </li>
            <li>
              <a
                href="https://www.springfieldmo.org/articles/XnO_bRUAACYAmWzT/these-springfield-businesses-are-openclosed-during-the-covid-19-crises"
                >Springfield Missouri Convention & Visitors Bureau</a
              >
            </li>
            <li>
              <a href="https://www.queencitytogether.com/">Queen City Together</a>
            </li>
          </ul>
        </b-tab>

        <b-tab :title="$t('about.contact')">
          <i18n path="about.contactus.info" tag="p">
            <a href="https://www.meetup.com/Triangle-Code-for-America/">{{ $t('about.orgs.chb') }}</a>
            <a href="https://www.codeforamerica.org/">{{ $t('about.orgs.cfa') }}</a>
            <a href="mailto:contact@nccovidsupport.org">contact@nccovidsupport.org</a>
          </i18n>
          <i18n path="about.contactus.datainfo" tag="p">
            <a href="mailto:sgfcovid@gmail.com">sgfcovid@gmail.com</a>
          </i18n>
        </b-tab>
      </b-tabs>
    </b-card>
    <template v-slot:modal-footer>
      <b-button @click="$bvModal.hide('about-us')" right>{{ $t('label.close') }}</b-button>
    </template>
  </b-modal>
</template>

<script>
export default {
  name: 'about-us-modal'
}
</script>

<style lang="scss">
@media (max-width: 991px) {
  #about-us > .modal-dialog {
    justify-content: normal;
    max-width: 100%;

    & > .modal-content {
      min-height: 100vh;
      height: 100vh;
    }
  }
}
</style>
