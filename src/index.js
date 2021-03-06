import { DEFAULT_PACKAGES, SCRIPT_SRC } from './config'
import { version } from '../package.json'

window.Humpback = class {
  constructor(config = {}) {
    const { dependencies, components } = config
    const paths = { ...DEFAULT_PACKAGES, ...dependencies, ...components }

    paths.humpback = SCRIPT_SRC
      .split('/')
      .slice(0, -1)
      .concat(['humpback.js'])
      .join('/')

    Object.keys(paths).forEach((name) => {
      paths[name] = paths[name].slice(0, -3)
    })

    window.requirejs.config({ paths, waitSeconds: 30 })

    this.config = config
    this.paths = paths
    this.version = version
  }

  start() {
    const requires = this.paths.global ? ['humpback', 'global'] : ['humpback']
    window.requirejs(requires, (initiator, global = {}) => {
      initiator({ ...this.config, ...global })
    }, (e) => {
      document.write(e.message || 'Initialization error')
    })
  }

  require(...args) {
    window.requirejs(...args)
    return this
  }
}
