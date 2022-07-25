import { merge } from 'webpack-merge'

import { WebpackConfigBase, WebpackConfigDev, WebpackConfigProd } from './webpack/index.js'
import { isProd } from './webpack/utils/env.js'

export default () => {
    return isProd ? merge(WebpackConfigProd, WebpackConfigBase) : merge(WebpackConfigDev, WebpackConfigBase)
}
