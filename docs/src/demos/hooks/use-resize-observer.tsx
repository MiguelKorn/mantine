import React from 'react';
import { useMantineTheme, Text, Group, Code } from '@mantine/core';
import { useResizeObserver } from '@mantine/hooks';

const code = `
import { useMantineTheme, Text, Code } from '@mantine/core';
import { useResizeObserver } from '@mantine/hooks';

function Demo() {
  const theme = useMantineTheme();
  const [ref, rect] = useResizeObserver();

  return (
    <>
      <textarea ref={ref} style={{ pointerEvents: 'none', width: 400, height: 120 }} />
      <Text align="center">Rect: <Code>{JSON.stringify(rect)}</Code></Text>
    </>
  );
}`;

function Demo() {
  const theme = useMantineTheme();
  const [ref, rect] = useResizeObserver();

  return (
    <>
      <Text align="center" size="sm" style={{ marginBottom: theme.spacing.xs }}>
        Resize textarea by moving its left bottom corner
      </Text>

      <Group position="center">
        <textarea
          ref={ref}
          style={{
            pointerEvents: 'none',
            width: 400,
            height: 120,
            border: 'none',
            backgroundColor:
              theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2],
            position: 'relative',
          }}
        />
      </Group>
      <Text align="center" style={{ marginTop: theme.spacing.sm }}>
        Rect: <Code>{JSON.stringify(rect, null, 2)}</Code>
      </Text>
    </>
  );
}

export const useResizeObserverDemo: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
