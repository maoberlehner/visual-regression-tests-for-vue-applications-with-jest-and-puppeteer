import { open } from '../utils';

describe(`Products page`, () => {
  test(`It should render correctly.`, async () => {
    await open(`/products`);
    const image = await page.screenshot({ fullPage: true });

    expect(image).toMatchImageSnapshot();
  });
});
