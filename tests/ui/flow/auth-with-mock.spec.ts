import { expect, test } from '@playwright/test'
import { faker } from '@faker-js/faker'
import { authMock, orderCreatedMock, orderFoundMock, orderNotFoundMock } from '../../mocks/mocks'
import { LoginPage } from '../../pages/login-page'
import { OrderPage } from '../../pages/order-page'

test.beforeEach(async ({ page }) => {
  await authMock(page)

  const loginPage = new LoginPage(page)
  await loginPage.open()
  await loginPage.usernameField.fill('12345678')
  await loginPage.passwordField.fill('password123')
  await loginPage.signIn.click()
})

test('Sign in flow with mocked flow', async ({ page }) => {
  const orderPage = new OrderPage(page)

  await expect(orderPage.statusButton).toBeVisible()
})

test('Sign in and search for non-existing order', async ({ page }) => {
  await orderNotFoundMock(page)

  const orderPage = new OrderPage(page)
  await orderPage.statusButton.click()
  await orderPage.searchOrderInput.fill('987')
  await orderPage.searchOrderSubmitButton.click()

  await expect(orderPage.orderNotFoundContainer).toBeVisible()
})

test('Sign in and search for existing order', async ({ page }) => {
  await orderFoundMock(page)

  const orderPage = new OrderPage(page)
  await orderPage.statusButton.click()
  await orderPage.searchOrderInput.fill('789')
  await orderPage.searchOrderSubmitButton.click()

  await expect(orderPage.orderItem0).toBeVisible()
})

test('Sign in and create a new order', async ({ page }) => {
  await orderCreatedMock(page)

  const orderPage = new OrderPage(page)

  await orderPage.userNameInput.fill(faker.person.firstName())
  await orderPage.userPhoneInput.fill(faker.phone.number({ style: 'national' }))
  await orderPage.commentInput.fill(faker.lorem.sentence())
  await orderPage.createOrderSubmitButton.click()

  await expect(orderPage.createdOrderPopup).toBeVisible()
  await expect(orderPage.createdOrderPopupText).toHaveText('Tracking code: 12345')
})
