import { expect, test } from '@playwright/test'
import { SERVICE_URL } from '../../../config/env-data'

test('Sign in flow with mock', async ({ page }) => {
  const jwt = 'eyJh'

  await page.route('**/login/student', async (route) => {
    await route.fulfill({
      // body not a json but a plain text
      body: jwt,
      status: 200,
    })
  })

  await page.goto(SERVICE_URL)
  const usernameField = page.getByTestId('username-input')
  await usernameField.fill('12345678')
  const passwordField = page.getByTestId('password-input')
  await passwordField.fill('qwertyui')
  const signInButton = page.getByTestId('signIn-button')
  await signInButton.click()
  await expect(page.getByTestId('openStatusPopup-button')).toBeVisible()
})
