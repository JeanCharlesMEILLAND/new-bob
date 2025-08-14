import { test, expect } from '@playwright/test'

test.describe('Footer links translation', () => {
  const pages = [
    { frText: 'CGU', enText: 'Terms of Use', path: '/conditions-utilisation' },
    { frText: 'Confidentialité', enText: 'Privacy Policy', path: '/confidentialite' },
    { frText: 'Mentions légales', enText: 'Legal Notice', path: '/mentions-legales' },
  ]

  test('French footer links work', async ({ page }) => {
    await page.goto('/')

    for (const { frText, path } of pages) {
      const link = page.locator(`footer >> text=${frText}`)
      await expect(link).toBeVisible()
      await link.click()
      await expect(page).toHaveURL(new RegExp(`${path}($|\\?)`))
      // Retour à la home pour tester le prochain lien
      await page.goto('/')
    }
  })

  test('English footer links work', async ({ page }) => {
    await page.goto('/?lang=en')

    for (const { enText, path } of pages) {
      const link = page.locator(`footer >> text=${enText}`)
      await expect(link).toBeVisible()
      await link.click()
      await expect(page).toHaveURL(new RegExp(`${path}\\?lang=en`))
      // Retour à la home EN pour tester le prochain lien
      await page.goto('/?lang=en')
    }
  })
})

