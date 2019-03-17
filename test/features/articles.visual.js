import { open } from '../utils';

describe(`Articles page`, () => {
  test(`It should render correctly.`, async () => {
    await open(`/articles`);
    const image = await page.screenshot({ fullPage: true });

    expect(image).toMatchImageSnapshot();
  });
});
