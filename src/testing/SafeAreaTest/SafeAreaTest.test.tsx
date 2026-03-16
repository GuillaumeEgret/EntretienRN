import { renderWithProviders } from '@/testing/render';
import { screen } from '@testing-library/react-native';
import { SafeAreaTest } from './SafeAreaTest';

test('renders safe area', () => {
  renderWithProviders(<SafeAreaTest />);

  expect(screen).toMatchInlineSnapshot(`
    <RNCSafeAreaProvider
      onInsetsChange={[Function]}
      style={
        [
          {
            "flex": 1,
          },
          undefined,
        ]
      }
    >
      <View
        style={
          {
            "backgroundColor": "red",
            "flex": 1,
            "marginTop": 47,
          }
        }
      />
    </RNCSafeAreaProvider>
  `);
});
