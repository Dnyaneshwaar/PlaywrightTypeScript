import {test,expect} from '@playwright/test';

test('Title of the page should contain "Demo Web Shop"', async ({ page }) => {  

    await page.goto('https://demowebshop.tricentis.com/login');
    await expect(page).toHaveTitle("Demo Web Shop. Login");
}
);
