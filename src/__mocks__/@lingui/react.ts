export const useLingui = jest.fn(() => ({
  i18n: {
    _: jest.fn((t) => t.id ?? t),
  },
}));

export const Trans = jest.fn((t) => t.id);

export const I18nProvider = jest.fn(({ children }) => {
  return children;
});
