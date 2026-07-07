// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Chasarooni Wiki",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/ChasarooniZ",
        },
        {
          icon: "patreon",
          label: "Ko-fi",
          href: "https://ko-fi.com/chasarooni",
        },
      ],
      sidebar: [
        {
          label: "Modules",
          items: [
            // Each item here is one entry in the navigation menu.
            {
              label: "Genga - System Agnostic Animations",
              slug: "modules/genga",
            },
            {
              label: "PF2e RPG Numbers & More",
              slug: "modules/pf2e-rpg-numbers",
            },
            {
              label: "ANIM - System Agnostic Animations",
              slug: "modules/anim",
            },
            {
              label: "PF2e Item Activations",
              slug: "modules/pf2e-item-activations",
            },
            { label: "PF2e Usage Updater", slug: "modules/pf2e-usage-updater" },
            {
              label: "RHYM - Reliably Harness Your Music",
              slug: "modules/rhym",
            },
            {
              label: "PF2e Summons Assistant",
              slug: "modules/pf2e-summons-assistant",
            },
            {
              label: "REDY - Reactive Dynamic Token Rings",
              slug: "modules/redy",
            },
            { label: "SETT - Some Extra Token Types", slug: "modules/sett" },
            { label: "Pyxie - PF2e Data Entry Helper", slug: "modules/pyxie" },
            { label: "PF2e Rules Lawyer", slug: "modules/pf2e-rules-lawyer" },
            {
              label: "Fist of the Ruby Phoenix: Addons",
              slug: "modules/fist-of-the-ruby-phoenix-addons",
            },
            {
              label: "Abomination Vaults: Addons (PF2e)",
              slug: "modules/abomination-vaults-addons",
            },
            {
              label: "PF2e Abomination Vaults: Expanded",
              slug: "modules/pf2e-abomination-vaults-expanded",
            },
            { label: "Dicearooni, Roll With It", slug: "modules/dicearooni" },
            { label: "O is for Objection", slug: "modules/o-is-for-objection" },
            {
              label: "Sundry - Small Tidbits for PF2e",
              slug: "modules/sundry",
            },
            {
              label: "Ready For the Stage - Theatre Inserts Extension",
              slug: "modules/ready-for-the-stage",
            },
          ],
        },
        {
          label: "Reference",
          items: [{ autogenerate: { directory: "reference" } }],
        },
      ],
    }),
  ],
});
