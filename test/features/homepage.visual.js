import { open } from '../utils';

describe(`Homepage`, () => {
  test(`It should render correctly.`, async () => {
    await open(`/`);
    const image = await page.screenshot({ fullPage: true });

    expect(image).toMatchImageSnapshot();
  });
});
