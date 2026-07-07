// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Chasarooniki",
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
            {
              label: "Adventure Path Helpers",
              items: [
                {
                  label: "Abomination Vaults",
                  items: [
                    {
                      label: "AV: Addons",
                      slug: "modules/abomination-vaults-addons",
                    },
                    {
                      label: "AV: Expanded",
                      slug: "modules/pf2e-abomination-vaults-expanded",
                    },
                  ],
                },
                {
                  label: "Fists of the Ruby Phoenix",
                  items: [
                    {
                      label: "FotRP: Addons",
                      slug: "modules/fist-of-the-ruby-phoenix-addons",
                    },
                  ],
                },
              ],
            },
            {
              label: "Utility",
              items: [
                {
                  label: "Sundry",
                  slug: "modules/sundry",
                },
                {
                  label: "PF2e Item Activations",
                  slug: "modules/pf2e-item-activations",
                },
                {
                  label: "PF2e Summons Assistant",
                  slug: "modules/pf2e-summons-assistant",
                },
                {
                  label: "PF2e Usage Updater",
                  slug: "modules/pf2e-usage-updater",
                },
                {
                  label: "RHYM",
                  slug: "modules/rhym",
                },
                {
                  label: "Pyxie",
                  slug: "modules/pyxie",
                },
                {
                  label: "Ready For the Stage",
                  slug: "modules/ready-for-the-stage",
                },
              ],
            },
            {
              label: "Visual FX",
              items: [
                {
                  label: "ANIM",
                  slug: "modules/anim",
                },
                {
                  label: "Genga",
                  slug: "modules/genga",
                },
                {
                  label: "O is for Objection",
                  slug: "modules/o-is-for-objection",
                },
                {
                  label: "PF2e RPG Numbers & More",
                  slug: "modules/pf2e-rpg-numbers",
                },
                {
                  label: "PF2e Rules Lawyer",
                  slug: "modules/pf2e-rules-lawyer",
                },
                {
                  label: "REDY",
                  slug: "modules/redy",
                },
                {
                  label: "SETT",
                  slug: "modules/sett",
                },
                {
                  label: "Trigger Animation Trove",
                  slug: "modules/pf2e-trigger-animation-trove",
                },
              ],
            },
            {
              label: "Retired",
              items: [
                {
                  label: "Depruner",
                  slug: "modules/depruner",
                },
                {
                  label: "Dicearooni, Roll With It",
                  slug: "modules/dicearooni",
                },
              ],
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
