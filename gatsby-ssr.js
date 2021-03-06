import { withPrefix, withAssetPrefix } from "gatsby"

/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

// You can delete this file if you're not using it
export const onRenderBody = ({ pathPrefix }) => {
  console.log("pathPrefix:", pathPrefix + "/")
  console.log("withPrefix:", withPrefix("/"))
  console.log("withAssetPrefix:", withAssetPrefix("/"))
}
