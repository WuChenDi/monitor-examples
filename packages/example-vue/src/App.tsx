import { defineComponent, ref } from 'vue'
import logo from './assets/vue.svg'
import './style.css'

export default defineComponent({
  name: 'App',
  setup() {
    const menu = ref([
      { path: '/page1', name: 'page1' },
      { path: '/page2', name: 'page2' },
      { path: '/page3', name: 'page3' },
    ])

    return () => (
      <>
        <img alt='Vue logo' src={logo} />
        <ul>
          {menu.value.map(i => (
            <li key={i.path}>
              <router-link to={i.path}>{i.name}</router-link>
            </li>
          ))}
        </ul>

        <router-view />
      </>
    )
  }
})
