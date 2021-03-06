// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: iE1LgH53bc47vxxsWX9owA
// Component: n5CnkQEc8A
import * as React from "react"
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
} from "@plasmicapp/react-web"
import "@plasmicapp/react-web/lib/plasmic.css"
import * as projectcss from "./plasmic_blank_project.module.css" // plasmic-import: iE1LgH53bc47vxxsWX9owA/projectcss
import * as sty from "./PlasmicStuff.module.css" // plasmic-import: n5CnkQEc8A/css

export const PlasmicStuff__VariantProps = new Array()

export const PlasmicStuff__ArgProps = new Array()

function PlasmicStuff__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
    />
  )
}

const PlasmicDescendants = {
  root: ["root"],
}

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicStuff__ArgProps,
      internalVariantPropNames: PlasmicStuff__VariantProps,
    })

    return PlasmicStuff__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    })
  }
  if (nodeName === "root") {
    func.displayName = "PlasmicStuff"
  } else {
    func.displayName = `PlasmicStuff.${nodeName}`
  }
  return func
}

export const PlasmicStuff = Object.assign(
  // Top-level PlasmicStuff renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicStuff
    internalVariantProps: PlasmicStuff__VariantProps,
    internalArgProps: PlasmicStuff__ArgProps,
  }
)

export default PlasmicStuff
/* prettier-ignore-end */
