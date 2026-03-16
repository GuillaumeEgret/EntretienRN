import React from 'react';
import { render, RenderOptions } from '@testing-library/react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export const renderWithProviders = (
  component: React.ReactElement,
  options?: RenderOptions,
) => {
  // Using iPhone 13 metrics for tests
  const safeAreaInitialMetrics = {
    frame: { x: 0, y: 0, width: 390, height: 844 },
    insets: { top: 47, left: 0, right: 0, bottom: 34 },
  };

  return render(component, {
    wrapper: ({ children }) => (
      <SafeAreaProvider initialMetrics={safeAreaInitialMetrics}>
        {children}
      </SafeAreaProvider>
    ),
    ...options,
  });
};
