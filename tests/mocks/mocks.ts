import { fakeJwt } from '../utils/jwt-generator'
import { Page } from '@playwright/test'

export async function authMock(page: Page) {
  const jwt = fakeJwt()

  await page.route('**/login/student', async (route) => {
    await route.fulfill({
      body: jwt, // plain text token
      status: 200,
    })
  })
}

export async function orderNotFoundMock(page: Page) {
  await page.route('**/orders/*', async (route) => {
    await route.fulfill({
      body: '', // empty body
      status: 200,
    })
  })
}

export async function orderFoundMock(page: Page) {
  await page.route('**/orders/*', async (route) => {
    await route.fulfill({
      json: {
        status: 'OPEN',
        courierId: null,
        customerName: 'nadina',
        customerPhone: 12345,
        comment: '',
        id: 17721,
      },
      status: 200,
    })
  })
}

export async function orderCreatedMock(page: Page) {
  await page.route('**/orders', async (route) => {
    await route.fulfill({
      json: {
        status: 'OPEN',
        courierId: null,
        customerName: 'nadina',
        customerPhone: 80808080,
        comment: '',
        id: 12345,
      },
      status: 200,
    })
  })
}
