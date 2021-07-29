<script>
  import { url, goto, isActive, metatags, page } from '@sveltech/routify'
  import {
    Content,
    Grid,
    Row,
    Column,
    Breadcrumb,
    BreadcrumbItem,
    Dropdown,
  } from 'carbon-components-svelte'
  import Navigation from './_navigation.svelte'
  import Theme from '../../components/Theme.svelte'

  import { onMount } from 'svelte'
  import {
    SET_ZONE,
    STORAGE_TOKEN,
    SET_USER_TYPE,
  } from '../../store.js'

  import { ZONES } from '../../actions/others/index.js'

  import { __serialize, __deserialize } from '../../helpers/index.js'

  let token = null
  let zone = []
  let zones = []
  let userType = null
  let selectedZone =  __deserialize('selectedZone') ? __deserialize('selectedZone').zone : 0;

  $: selectedZone
  $: if (selectedZone >= 0) {
    changeZone(selectedZone)
  }

  onMount(() => {
    const __tokenLocalStorage = __deserialize('token')
    const __userType = __deserialize('currentUser')

    //checkuser type
    userType = __userType ? __userType.user.zone : null
    if (!__tokenLocalStorage) {
      return window.location.replace('/')
    }
    token = __tokenLocalStorage.token
    STORAGE_TOKEN.set(token)
    SET_USER_TYPE.set(__userType.user.zone)
    
    getZones()
    __loadCheckers()
  })

  const getZones = () => {
    const callback = (res) => {
      var __filter = [
        {
          id: 0,
          text: 'All Zones',
        },
      ]
      res.map((_zone) => {
        __filter.push({
          id: _zone.zone_id,
          text: _zone.name,
        })
      })
      zones = __filter
    }

    const onError = (err) => {
      console.error(err)
    }

    ZONES(callback, onError)
  }

  function __loadCheckers() {
    let checkZone = __deserialize('selectedZone')

    if (checkZone) {
      let zone_id = checkZone.zone
      selectedZone = zone_id
      SET_ZONE.set(selectedZone)
    }
  }

  function changeZone(zone) {
    Pace.restart()
    let checkZone = __deserialize('selectedZone')
    SET_ZONE.set(selectedZone)
    if (checkZone) {
      localStorage.removeItem('selectedZone')
      localStorage.selectedZone = __serialize({
        zone,
      })
    } else {
      localStorage.selectedZone = __serialize({
        zone,
      })
    }
  }
</script>

<Theme persist theme="g10">
  <Navigation />
  <Content style="background: none;">
    <Grid>
      <Row>
        <Column lg={8}>
          <Breadcrumb noTrailingSlash aria-label="Page navigation">
            <BreadcrumbItem href="/">Dashboard</BreadcrumbItem>
          </Breadcrumb>
          <h3 style="margin-bottom: 1.5rem">
            Welcome back,
            <span style="font-size: 16px;">Super User</span>
          </h3>
        </Column>
        <Column lg={8}>
          <Row>
            <Column></Column>
            {#if userType === 'Central User'}
            <Column>
              <Dropdown
                titleText="Select Zone"
                bind:selectedIndex={selectedZone}
                items={zones}
                label="Select Zone" />
            </Column>
            {/if}
          </Row>
        </Column>

      </Row>
      {#if selectedZone >= 0}
        <slot />
      {:else}
        <style>
          .select {
            margin: 100px 400px;
          }

          .select h4 {
            font-weight: light;
          }
        </style>
        <div class="select">
          <h4>Please Select a Zone To Contiune</h4>
          <br />
          <img
            class="img-responsive"
            src="/img/select.png"
            alt="select"
            style="height: 40vh;" />
        </div>
      {/if}
    </Grid>
  </Content>
</Theme>