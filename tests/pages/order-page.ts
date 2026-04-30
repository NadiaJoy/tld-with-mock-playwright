import { Page } from '@playwright/test'
import { Locator } from 'playwright-core'

export class OrderPage {
  readonly page: Page
  readonly statusButton
  readonly searchOrderInput
  readonly searchOrderSubmitButton
  readonly orderNotFoundContainer
  readonly statusItem0
  readonly statusItem1
  readonly statusItem2
  readonly orderItem0
  readonly orderItem1
  readonly orderItem2
  readonly orderItem3
  readonly userNameInput
  readonly userPhoneInput
  readonly commentInput
  readonly createOrderSubmitButton
  readonly createdOrderPopup
  readonly createdOrderPopupText

  constructor(page: Page) {
    this.page = page
    this.statusButton = page.getByTestId('openStatusPopup-button')
    this.searchOrderInput = page.getByTestId('searchOrder-input')
    this.searchOrderSubmitButton = page.getByTestId('searchOrder-submitButton')
    this.orderNotFoundContainer = page.getByTestId('orderNotFound-container')
    this.statusItem0 = page.getByTestId('status-item-0')
    this.statusItem1 = page.getByTestId('status-item-1')
    this.statusItem2 = page.getByTestId('status-item-2')
    this.orderItem0 = page.getByTestId('order-item-0')
    this.orderItem1 = page.getByTestId('order-item-1')
    this.orderItem2 = page.getByTestId('order-item-2')
    this.orderItem3 = page.getByTestId('order-item-3')
    this.userNameInput = page.getByTestId('username-input')
    this.userPhoneInput = page.getByTestId('phone-input')
    this.commentInput = page.getByTestId('comment-input')
    this.createOrderSubmitButton = page.getByTestId('createOrder-button')
    this.createdOrderPopup = page.getByTestId('orderSuccessfullyCreated-popup')
    this.createdOrderPopupText = page.getByText('Tracking code: ')
  }
}
